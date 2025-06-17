"use server"

interface EmailData {
  name: string
  email: string
  subject: string
  message: string
}

export async function sendContactEmail(formData: FormData) {
  try {
    const data: EmailData = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      subject: formData.get("subject") as string,
      message: formData.get("message") as string,
    }

    // Validate required fields
    if (!data.name || !data.email || !data.subject || !data.message) {
      return {
        success: false,
        error: "All fields are required",
      }
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(data.email)) {
      return {
        success: false,
        error: "Invalid email format",
      }
    }

    // Create email content
    const emailContent = `
New Contact Form Submission from Portfolio Website

Name: ${data.name}
Email: ${data.email}
Subject: ${data.subject}

Message:
${data.message}

---
Sent from Arthika's Portfolio Website
Time: ${new Date().toLocaleString()}
IP: ${process.env.VERCEL_URL || "localhost"}
    `

    // For production, integrate with email service
    // Example with Resend (recommended):
    /*
    import { Resend } from 'resend'
    const resend = new Resend(process.env.RESEND_API_KEY)
    
    await resend.emails.send({
      from: 'portfolio@yourdomain.com',
      to: 'arthika.v.s.2017@gmail.com',
      subject: `Portfolio Contact: ${data.subject}`,
      text: emailContent,
      replyTo: data.email
    })
    */

    // Mock email sending for demonstration
    console.log("Email would be sent to: arthika.v.s.2017@gmail.com")
    console.log("From:", data.email)
    console.log("Subject:", `Portfolio Contact: ${data.subject}`)
    console.log("Content:", emailContent)

    // Simulate processing time
    await new Promise((resolve) => setTimeout(resolve, 1500))

    return {
      success: true,
      message: "Message sent successfully! I'll get back to you soon.",
    }
  } catch (error) {
    console.error("Error sending email:", error)
    return {
      success: false,
      error: "Failed to send message. Please try again later.",
    }
  }
}
