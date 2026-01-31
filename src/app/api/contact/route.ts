import { Resend } from "resend";
import { NextResponse } from "next/server";
import { ContactSchema } from "../../Models/Schema/Contact";
import z from "zod";

const resend = new Resend('re_XCtVhqr2_33T1wYrjyx59dgj1BK5QqvPi'); // Try to hash this value or use environment variable

export async function POST(request: Request) {
    try {
        const body = await request.json();
        // Honeypot check
        if (body.botField) {
            return NextResponse.json({ success: true });
        }

        try {
            const data = ContactSchema.parse(body);
            await resend.emails.send({
                from: "Portfolio <onboarding@resend.dev>",
                to: ["prajjwals2411@gmail.com"], // Try to hash this value or use environment variable
                subject: `New Contact: ${data.name}`,
                html: `
                <p><strong>Name:</strong> ${data.name}</p>
                <p><strong>Email:</strong> ${data.email}</p>
                <p><strong>Phone:</strong> ${data.phone || "N/A"}</p>
                <p><strong>Message:</strong></p>
                <p>${data.message}</p>
              `,
            });
        } catch (error) {
            if (error instanceof z.ZodError) {
                console.log(error.issues)
            }
        }
        return NextResponse.json({ success: true, message: "Thanks for Showing Interest, I'll get back to you soon!" });
    } catch (err) {
        return NextResponse.json(
            { success: false, error: `Invalid request: ${err instanceof Error ? err.message : "Unknown error"}` },
            { status: 400 }
        );
    }
}