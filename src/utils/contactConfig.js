// Centralized Contact & Business Configuration
const envEmail = import.meta.env.VITE_CONTACT_EMAIL;

export const CONTACT_EMAIL = 
  envEmail && envEmail !== 'khambhatadhruv28@gmail.com'
    ? envEmail
    : 'mahaveerenterprise0067@gmail.com';

export const CONTACT_PHONE = import.meta.env.VITE_CONTACT_PHONE || '8460140067';
export const CONTACT_PHONE_DISPLAY = import.meta.env.VITE_CONTACT_PHONE_DISPLAY || '+91 8460140067';
export const WHATSAPP_PHONE = import.meta.env.VITE_WHATSAPP_PHONE || '918460140067';
