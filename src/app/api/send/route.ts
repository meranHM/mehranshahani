import { Resend } from "resend"
import { NextResponse } from "next/server"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
    const apiKey = process.env.RESEND_API_KEY

    if (!apiKey) {
        throw new Error("RESEND_API_KEY is not configured")
    }

    const resend = new Resend(apiKey)
    const { name, email, message } = await req.json()
    
    try {
        const data = await resend.emails.send({
            from: "Portfolio Contact <contact@mehranshahani.com>",
            to: "mehranshahani6@gmail.com",
            subject: `New message from ${name}`,
            replyTo: email,
            html: `
                <div>
                    <h2>You've got a message from your portfolio:</h2>
                    <p><strong>Name: </strong>${name}</p>
                    <p><strong>Email: </strong>${email}</p>
                    <p><strong>Message:</strong></p>
                    <p>${message.replace(/\n/g, "<br />")}</p>
                </div>
            `
        })

        return NextResponse.json({ success: true, data })
    } catch (error) {
        return NextResponse.json({ success: false, error })
    }
}

