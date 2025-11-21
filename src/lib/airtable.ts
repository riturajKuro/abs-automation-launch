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

  const response = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${AIRTABLE_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      records: [
        {
          fields: {
            "Full Name": payload.fullName,
            "Email": payload.email,
            "Phone": payload.phone,
            "Business Name": payload.businessName || "Not provided",
            "Automation Interest": payload.automation || "Not specified",
            "Message": payload.message || "Not provided",
            "Source": "Website Contact Form",
            "Submitted At": new Date().toISOString(),
          },
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

