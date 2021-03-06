const nodemailer = require("nodemailer");
const bcrypt = require("bcrypt");
const sendgrid = require("nodemailer-sendgrid-transport");

const sendEmail = async (reqBody, type, pin = 0) => {
  try {
    console.log(process.env.CONFIRM_PASSWORD_SECRET);
    const { name, email } = reqBody; //???
    if (type === "confirm") {
      //in future type will be confirm, reset, booked ...
      // const hashedConfirmPassword = await bcrypt.hash(
      //   process.env.CONFIRM_PASSWORD_SECRET,
      //   10
      // );
      const handlePasswordHashing = (plainPassword, salt) => {
        let hashed = bcrypt.hashSync(plainPassword, salt);

        if (hashed.includes("/")) {
          hashed = handlePasswordHashing(plainPassword, salt);
        }

        return hashed;
      };
      const hashedConfirmPassword = await handlePasswordHashing(
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
         <div><a href="${confirmLink}">Confirm</a>  </div>
         <h3>If you didnot registered yourself, please ignore these Email</h3>
         `;
      console.log(output);

      // creating the transporter
      let transporter = nodemailer.createTransport(
        sendgrid({
          auth: { api_key: process.env.SENDGRID_API_KEY },
        })
      );
      // createing the mail options
      const mailOptions = {
        from: "mn27305@gmail.com", // the sender email address have to be the same as user in transporter
        to: email, // the receiver
        subject: "Confirm Your Registration",
        text: "Hello",
        html: output,
      };
      // sending the email
      console.log(`58`);

      let info = await transporter.sendMail(mailOptions);
      console.log("Message sent ", info);
      if (info.message !== "success") {
        throw `Email not sendet`;
      }
    }
    //////Reset Password
    if (type === "reset") {
      //in future type will be confirm, reset, booked ...
      // const hashedConfirmPassword = await bcrypt.hash(
      //   process.env.CONFIRM_PASSWORD_SECRET,
      //   10
      // );
      const handlePasswordHashing = (plainPassword, salt) => {
        let hashed = bcrypt.hashSync(plainPassword, salt);

        if (hashed.includes("/")) {
          hashed = handlePasswordHashing(plainPassword, salt);
        }

        return hashed;
      };
      const hashedConfirmPassword = handlePasswordHashing(
        process.env.RESET_PASSWORD_SECRET,
        10
      );

      const resetLink = `http://localhost:4000/user/resetconfirm/${email}/${hashedConfirmPassword}`;

      const output = `
         <p> With this link you can reset your password </p>
         <ul>
           
            <li> Email : ${email} </li>
           
         </ul>
        
         <div><a href="${resetLink}">Reset Password</a>  </div>
         <h3>If you didnot registered yourself, please ignore these Email</h3>
         `;
      console.log(output);

      // creating the transporter
      let transporter = nodemailer.createTransport(
        sendgrid({
          auth: { api_key: process.env.SENDGRID_API_KEY },
        })
      );
      // createing the mail options
      const mailOptions = {
        from: "mn27305@gmail.com", // the sender email address have to be the same as user in transporter
        to: email, // the receiver
        subject: "Password Reset",
        text: "Hello",
        html: output,
      };
      // sending the email
      let info = await transporter.sendMail(mailOptions);
      console.log("Message sent ", info);
      if (info.message !== "success") {
        throw `Email not sendet`;
      }
    }
    //////////////Booking
    //////Reset Password
    if (type === "booked") {
      const output = `
      <p> Dear ${name},  Thank you for booking</p>
        
         <p> Your booked addiotional things (Tshirt, Shoes, Towel) will be prepared for you, you cann collect it from your box. </p>
         <p> With this PIN code : ${pin} you will open all doors to get access to booked Field, and box.  </p>
         
         `;
      console.log(output);

      // creating the transporter
      let transporter = nodemailer.createTransport(
        sendgrid({
          auth: { api_key: process.env.SENDGRID_API_KEY },
        })
      );
      // createing the mail options
      const mailOptions = {
        from: "mn27305@gmail.com", // the sender email address have to be the same as user in transporter
        to: email, // the receiver
        subject: "Booking Confirmed",
        text: "Booked",
        html: output,
      };
      // sending the email
      let info = await transporter.sendMail(mailOptions);
      console.log("Message sent ", info);
      if (info.message !== "success") {
        throw `Email not sendet`;
      }
    }
    if (type === "contact") {
      const output = `
      <p> The user with name ${name} and email: ${email} is sendet you you contact request message </p>
      <p> ${reqBody.message} </p>`;
      console.log(output);

      // creating the transporter
      let transporter = nodemailer.createTransport(
        sendgrid({
          auth: { api_key: process.env.SENDGRID_API_KEY },
        })
      );
      // createing the mail options
      const mailOptions = {
        from: "mn27305@gmail.com", // the sender email address have to be the same as user in transporter
        to: email, // the receiver
        subject: "Contact request",
        text: "Contact",
        html: output,
      };
      // sending the email
      let info = await transporter.sendMail(mailOptions);
      console.log("Message sent ", info);
      if (info.message !== "success") {
        throw `Email not sendet`;
      }
    }

    ////////////////
  } catch (error) {
    console.log(error);

    throw "Email sending is not success";
  }
};

module.exports = sendEmail;
