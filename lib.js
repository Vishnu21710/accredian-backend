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
          user: 'vishnu21710@gmail.com',
          pass: 'dbvwjvnjbdhwwryo'
        }
      });

      const mailOptions = {
        from: 'vishnu21710@gmail.com',
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