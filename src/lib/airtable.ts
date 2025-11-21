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

  // Build fields object - start with only the essential required fields
  // Add optional fields only if they have values
  const fields: Record<string, string> = {
    "Full Name": payload.fullName,
    "Email": payload.email,
    "Phone": payload.phone,
  };

  // Only add optional fields if they have actual values
  // NOTE: If your Airtable table doesn't have these fields, they will cause errors
  // You can either: 1) Add these fields to your Airtable table, or 2) Remove the lines below
  
  if (payload.businessName && payload.businessName.trim()) {
    fields["Business Name"] = payload.businessName;
  }
  
  // Comment out the next 3 lines if your table doesn't have these fields:
  // if (payload.automation && payload.automation.trim()) {
  //   fields["Automation Interest"] = payload.automation;
  // }
  
  if (payload.message && payload.message.trim()) {
    fields["Message"] = payload.message;
  }

  // Uncomment these if your table has these fields:
  // fields["Source"] = "Website Contact Form";
  // fields["Submitted At"] = new Date().toISOString();

  console.log('[Airtable] Fields being sent:', Object.keys(fields));

  const response = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${AIRTABLE_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      records: [
        {
          fields,
        },
      ],
    }),
  });

  if (!response.ok) {
    const errorBody = await response.text();
    console.error('[Airtable Error]', {
      status: response.status,
      statusText: response.statusText,
      error: errorBody,
    });
    throw new Error(`Failed to create Airtable record: ${errorBody}`);
  }

  const result = await response.json();
  if (import.meta.env.DEV) {
    console.log('[Airtable] Success:', result);
  }
  return result;
};

