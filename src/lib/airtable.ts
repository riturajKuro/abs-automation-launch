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

  // Build fields object - ONLY send fields that exist in your Airtable table
  // Start with the minimum required fields
  const fields: Record<string, string> = {
    "Full Name": payload.fullName,
    "Email": payload.email,
    "Phone": payload.phone,
  };

  // Only add other fields if they exist in your table AND have values
  // Remove or comment out any fields below that don't exist in your Airtable table
  
  // Uncomment the line below if your table has a "Business Name" field:
  // if (payload.businessName && payload.businessName.trim()) {
  //   fields["Business Name"] = payload.businessName;
  // }
  
  // Uncomment the lines below if your table has a "Message" field:
  // if (payload.message && payload.message.trim()) {
  //   fields["Message"] = payload.message;
  // }

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

