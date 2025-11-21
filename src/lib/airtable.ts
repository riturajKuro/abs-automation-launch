const AIRTABLE_BASE_ID = import.meta.env.VITE_AIRTABLE_BASE_ID;
const AIRTABLE_TABLE_ID = import.meta.env.VITE_AIRTABLE_TABLE_ID;
const AIRTABLE_TOKEN = import.meta.env.VITE_AIRTABLE_TOKEN;

export const isAirtableConfigured = Boolean(AIRTABLE_BASE_ID && AIRTABLE_TABLE_ID && AIRTABLE_TOKEN);

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
            Name: payload.fullName,
            Email: payload.email,
            Phone: payload.phone,
            "Business Name": payload.businessName || "Not provided",
            "Automation Interest": payload.automation || "Not specified",
            Message: payload.message || "Not provided",
            Source: "Website Contact Form",
            SubmittedAt: new Date().toISOString(),
          },
        },
      ],
    }),
  });

  if (!response.ok) {
    const errorBody = await response.text();
    throw new Error(`Failed to create Airtable record: ${errorBody}`);
  }

  return response.json();
};

