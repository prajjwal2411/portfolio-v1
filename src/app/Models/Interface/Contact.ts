export interface IContactForm{
    name: string;
    phone: string;
    email: string;
    message: string;
    botField?: string; // honeypot
}