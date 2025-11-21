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

  if (import.meta.env.DEV) {
    console.log('[Airtable] Creating lead record:', {
      url: `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_ID}`,
      payload: { ...payload, automation: payload.automation || "Not specified" },
    });
  }

  // Build fields object - match EXACT field names from your Airtable table
  const fields: Record<string, string> = {
    "Full Name": payload.fullName,
    "Email": payload.email,
    "Phone": payload.phone,
  };

  // Add optional fields if they have values (using exact Airtable field names)
  if (payload.businessName && payload.businessName.trim()) {
    fields["Business Name"] = payload.businessName;
  }
  
  // Map automation value to Airtable field "What Do You Want to Automate?"
  if (payload.automation && payload.automation.trim()) {
    // Map form values to display labels
    const automationMap: Record<string, string> = {
      "social": "Social Media Management",
      "leads": "Lead Generation",
      "calls": "Call Handling",
      "analytics": "Analytics & Reporting",
      "all": "Full Automation Suite",
    };
    const automationLabel = automationMap[payload.automation] || payload.automation;
    fields["What Do You Want to Automate?"] = automationLabel;
  }
  
  // Message field name in Airtable is "Message (Optional)"
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
  if (import.meta.env.DEV) {
    console.log('[Airtable] Success:', result);
  }
  return result;
};

