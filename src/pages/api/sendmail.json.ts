export const prerender = false;

import type { APIRoute } from 'astro'
import nodemailer from 'nodemailer'

const emailUser = import.meta.env.PUBLIC_EMAIL_USER
const emailTo = import.meta.env.PUBLIC_EMAIL
const emailToPass = import.meta.env.PUBLIC_EMAIL_PASS
const host = import.meta.env.PUBLIC_EMAIL_HOST
//console.log('user to find', host);
export const POST: APIRoute = async ({ request }) => {
   //console.log('request', request)

  if (request.headers.get('Content-Type') === 'application/json') {
    const formData = await request.json()
    const name = formData.name
    const email = formData.email
    const tel = formData.tel
    const interests = formData.interests

    const subject = "Kontakt från Åreskutan.se - sender: " + name
    const message = `${formData.message}
    

    ----------------------------------------------------------------------
    From: ${name}  • email: ${email} • tel: ${tel}
    `
    const html = `<div style="margin: 20px auto;font-family: Helvetica, Verdana, sans-serif">
                <h2>Angående:&nbsp; ${interests[0]} &nbsp; ${interests[1]}   </h2>
            ${message.replace(
      /[\r\n]/g,
      '<br>'
    )}</div>`

    // sendmail
    let mailTransporter = nodemailer.createTransport({
      host,
      port: 587,
      secure: false,
      auth: {
        user: emailUser,
        pass: emailToPass,
      },
    })

    let mailDetails = {
      from: email,
      to: emailTo,
      subject: `${new URL(request.url).hostname}: ${subject}`,
      text: message,
      html,
    }

    let mailresult
    try {
      mailresult = await mailTransporter.sendMail(mailDetails)
    } catch (error) {
      console.log('******* Error: ', error)   
    }
    console.log('Message sent: %s', mailresult?.messageId)
    
   
    // return endpoint response
    return new Response(JSON.stringify(mailDetails), {
      status: 200, 
      
    })
  }
  return new Response(null, { status: 400 }) // if not a json request
}

