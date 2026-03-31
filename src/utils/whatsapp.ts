/**
 * Generate WhatsApp link with pre-filled message
 * @param message - Message to send
 * @returns WhatsApp URL
 */
export function generateWhatsAppLink(message: string): string {
  const phoneNumber = '919878122555'; // India country code + number
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
}

/**
 * Generate product inquiry message for WhatsApp
 * @param productName - Name of the product
 * @returns Formatted inquiry message
 */
export function generateProductInquiry(productName: string): string {
  return `Hi! I'm interested in the ${productName}. Could you please provide more details about availability and pricing?`;
}

/**
 * Generate general inquiry message
 * @returns General inquiry message
 */
export function generateGeneralInquiry(): string {
  return `Hi PARIZAAD! I would like to inquire about your collection. Please share more details.`;
}
