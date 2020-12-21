const nodemailer = require("nodemailer");
const bcrypt = require("bcrypt");
const sendgrid = require("nodemailer-sendgrid-transport");

const sendEmail = async (reqBody, type) => {
  console.log(process.env.CONFIRM_PASSWORD_SECRET);
  const { name, email } = reqBody; //???
  if (type === "confirm") {
    //in future type will be confirm, reset, booked ...
    const hashedConfirmPassword = await bcrypt.hash(
      process.env.CONFIRM_PASSWORD_SECRET,
      10
    );
    const confirmLink = `http://localhost:4000/user/confirmation/${email}/${hashedConfirmPassword}`;

    const output = `
         <p> Please confirm your email </p>
         <ul>
            <li> Name : ${name} </li>
            <li> Email : ${email} </li>
           
         </ul>
         <h2>  Thanks for registration, please confirm your email adress with link below </h2>
         <div> ${confirmLink} </div>
         <h3>If you didnot registered yourself, please ignore these Email</h3>
         `;
    console.log(output);

    // creating the transporter
    let transporter = nodemailer.createTransport({
      host: "mail.sapancacity.com",
      port: 587,
      secure: false, // true 465 , false for other ports
      auth: {
        user: "max@sapancacity.com",
        pass: "U=QgezhmAsmL",
      },
      tls: {
        rejectUnauthorized: false,
      },
    });
    // createing the mail options
    const mailOptions = {
      from: "max@sapancacity.com", // the sender email address have to be the same as user in transporter
      to: email, // the receiver
      subject: "Confirm Your Registration",
      text: "Hello",
      html: output,
    };
    // sending the email
    transporter.sendMail(mailOptions, (err, info) => {
      if (err) throw err;
      console.log("Message sent ", info.messageId);
      response.send({ msg: "Email has been sent " });
    });
  }
};

module.exports = sendEmail;
