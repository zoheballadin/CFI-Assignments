import nodemailer from "nodemailer";

async function sendMail(text,rec) {
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "mail.zoheb.me",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "info@zoheb.me", // generated ethereal user
      pass: "s={(XG!0}Xvq", // generated ethereal password
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"zoheb\'s library" <info@zoheb.me>', // sender address
    to: rec, // list of receivers
    subject: "Account Information", // Subject line
    text: text, // plain text body
    // html: "<b>Hello world?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
}


export {sendMail}