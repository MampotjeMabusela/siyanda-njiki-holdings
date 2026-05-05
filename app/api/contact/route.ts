import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import { buildLeadWhatsAppUrl, type LeadPayload } from "@/lib/contactLead";

const COMPANY_EMAIL = "info.thegembeselectrical@gmail.com";

function isLeadPayload(body: unknown): body is LeadPayload {
  if (!body || typeof body !== "object") return false;
  const b = body as Record<string, unknown>;
  return (
    typeof b.fullName === "string" &&
    typeof b.email === "string" &&
    typeof b.phone === "string" &&
    typeof b.service === "string" &&
    typeof b.message === "string"
  );
}

export async function POST(request: Request) {
  const body = await request.json();
  if (!isLeadPayload(body)) {
    return NextResponse.json({ ok: false, error: "Invalid payload" }, { status: 400 });
  }

  const whatsappUrl = buildLeadWhatsAppUrl(body);

  const plain = `Name: ${body.fullName}\nEmail: ${body.email}\nPhone: ${body.phone}\nService: ${body.service}\n\n${body.message}`;
  const html = `
    <p><strong>New website enquiry</strong></p>
    <p><strong>Name:</strong> ${escapeHtml(body.fullName)}<br/>
    <strong>Email:</strong> ${escapeHtml(body.email)}<br/>
    <strong>Phone:</strong> ${escapeHtml(body.phone)}<br/>
    <strong>Service:</strong> ${escapeHtml(body.service)}</p>
    <p><strong>Message</strong></p>
    <p>${escapeHtml(body.message).replace(/\n/g, "<br/>")}</p>
  `;

  let emailSent = false;
  const user = process.env.EMAIL_USER;
  const pass = process.env.EMAIL_PASS;

  if (user && pass) {
    try {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: { user, pass },
      });
      await transporter.sendMail({
        from: user,
        to: COMPANY_EMAIL,
        replyTo: body.email,
        subject: `Website lead: ${body.service} — ${body.fullName}`,
        text: plain,
        html,
      });
      emailSent = true;
    } catch {
      emailSent = false;
    }
  }

  return NextResponse.json({
    ok: true,
    emailSent,
    whatsappUrl,
  });
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
