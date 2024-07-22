import nodemailer from "nodemailer"
import handlebars from 'handlebars'
import fs from "fs"
export const sendMail = (from_name,to, code)=>{

    const tempalteFile = fs.readFileSync('./email_templates/new-email.hbs', 'utf-8')
    const template = handlebars.compile(tempalteFile)
    const html = template({name: from_name, code})

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.SENDER_EMAIL,
          pass: process.env.APP_PASSWORD
        }
      });

      const mailOptions = {
        from: process.env.SENDER_EMAIL,
        to,
        subject: 'Course Referral',
        html
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log('Error:', error);
        } else {
          console.log('Email sent:', info.response);
        }
      });
}

export const generateRandomCode = ()=> {
  const prefix = "ACC";
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let randomCode = prefix;
  
  for (let i = 0; i < 5; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      randomCode += characters[randomIndex];
  }
  
  return randomCode;
}