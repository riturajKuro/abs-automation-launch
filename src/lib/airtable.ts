const AIRTABLE_BASE_ID = import.meta.env.VITE_AIRTABLE_BASE_ID;
const AIRTABLE_TABLE_ID = import.meta.env.VITE_AIRTABLE_TABLE_ID;
const AIRTABLE_TOKEN = import.meta.env.VITE_AIRTABLE_TOKEN;

export const isAirtableConfigured = Boolean(AIRTABLE_BASE_ID && AIRTABLE_TABLE_ID && AIRTABLE_TOKEN);

// Debug logging (safe - doesn't expose secrets, works in production)
console.log('[Airtable Config Check]', {
  hasBaseId: !!AIRTABLE_BASE_ID,
  hasTableId: !!AIRTABLE_TABLE_ID,
  hasToken: !!AIRTABLE_TOKEN,
  isConfigured: isAirtableConfigured,
  baseIdLength: AIRTABLE_BASE_ID?.length || 0,
  tableIdLength: AIRTABLE_TABLE_ID?.length || 0,
  tokenLength: AIRTABLE_TOKEN?.length || 0,
});

export interface LeadPayload {
  fullName: string;
  businessName?: string;
  email: string;
  phone: string;
  automation?: string;
  message?: string;
}

export const createLeadRecord = async (payload: LeadPayload) => {
  if (!isAirtableConfigured) {
    throw new Error("Airtable environment variables are not configured.");
  }

  const url = `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${encodeURIComponent(AIRTABLE_TABLE_ID!)}`;

  // Always log what we receive (for debugging)
  console.log('[Airtable] Received payload from form:', {
    fullName: payload.fullName,
    businessName: payload.businessName || '(empty)',
    email: payload.email,
    phone: payload.phone,
    automation: payload.automation || '(empty)',
    message: payload.message || '(empty)',
  });

  // Build fields object - use EXACT field names from your Airtable table
  // Based on your screenshot, the fields appear to be:
  // "Full Name", "Business Name", "Email", "Phone", "What Do You Want to Automate?", "Message (Optional)"
  const fields: Record<string, string> = {};
  
  // Map each field - try multiple variations to find the right one
  // Primary mappings (what we think they are):
  fields["Full Name"] = payload.fullName;
  fields["Email"] = payload.email;
  fields["Phone"] = payload.phone;
  
  // Optional fields
  if (payload.businessName && payload.businessName.trim()) {
    fields["Business Name"] = payload.businessName;
  }
  
  if (payload.automation && payload.automation.trim()) {
    // Try common variations of this field name
    fields["What Do You Want to Automate?"] = payload.automation;
  }
  
  if (payload.message && payload.message.trim()) {
    fields["Message (Optional)"] = payload.message;
  }

  // Log exactly what we're sending (for debugging)
  const requestBody = {
    records: [
      {
        fields,
      },
    ],
  };
  
  console.log('[Airtable] Fields being sent:', Object.keys(fields));
  console.log('[Airtable] Full payload:', JSON.stringify(requestBody, null, 2));

  const response = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${AIRTABLE_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestBody),
  });

  if (!response.ok) {
    const errorBody = await response.text();
    let parsedError;
    try {
      parsedError = JSON.parse(errorBody);
    } catch {
      parsedError = errorBody;
    }
    
    console.error('[Airtable Error - Full Details]', {
      status: response.status,
      statusText: response.statusText,
      url: url,
      fieldsSent: Object.keys(fields),
      error: parsedError,
    });
    
    // Extract the specific field name causing the error if available
    if (parsedError?.error?.message) {
      const errorMsg = parsedError.error.message;
      console.error('[Airtable Error - Specific Field Issue]', errorMsg);
    }
    
    throw new Error(`Failed to create Airtable record: ${JSON.stringify(parsedError)}`);
  }

  const result = await response.json();
  
  // Log the RAW response to see exactly what Airtable returned
  console.log('[Airtable] RAW RESPONSE:', JSON.stringify(result, null, 2));
  
  // Check what Airtable actually saved
  const savedRecord = result.records?.[0];
  if (!savedRecord) {
    console.error('[Airtable] ❌ No record in response!', result);
    return result;
  }
  
  const savedFields = savedRecord.fields || {};
  const savedFieldNames = Object.keys(savedFields);
  
  console.log('[Airtable] ✅ Success! Record created:', {
    recordId: savedRecord.id,
    fieldsSaved: savedFieldNames,
    fieldsWithValues: savedFields,
  });
  
  // Check if any fields we sent didn't get saved
  const fieldsWeSent = Object.keys(fields);
  const missingFields = fieldsWeSent.filter(f => !savedFieldNames.includes(f));
  
  if (missingFields.length > 0) {
    console.error('[Airtable] ❌ THESE FIELDS WERE NOT SAVED:', missingFields);
    console.error('[Airtable] ❌ Fields that WERE saved:', savedFieldNames);
    console.error('[Airtable] ❌ Field names that don\'t match:');
    missingFields.forEach(fieldName => {
      console.error(`   ❌ "${fieldName}"`);
    });
  } else {
    console.log('[Airtable] ✅ All fields saved successfully!');
  }
  
  return result;
};

