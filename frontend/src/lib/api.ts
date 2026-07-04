import { InquiryFormData } from "./validations"

const API_URL = process.env.NEXT_PUBLIC_API_URL

export async function submitInquiry(data: InquiryFormData) {
  const response = await fetch(`${API_URL}/api/inquiries`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })

  if (!response.ok) {
    const error = await response.json()
    throw new Error(error.detail || "Failed to submit inquiry")
  }

  return response.json()
}