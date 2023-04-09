const nodemailer = require("nodemailer");
require("dotenv").config();

const { META_PASSWORD } = process.env;

const nodemailerConfig = {
  host: "smtp.meta.ua",
  port: 465,
  secure: true,
  auth: {
    user: "developerag@meta.ua",
    pass: META_PASSWORD
  }
};

const transport = nodemailer.createTransport(nodemailerConfig);

const sendEmail = async (data) => {
  const email = { ...data, from: "developerag@meta.ua" };
  try {
    await transport.sendMail(email);
    return true
  } catch (error) {
    throw error;
  }
  
}

// const email = {
//   to: "toya@meta.ua",
//   from: "developerag@meta.ua",
//   subject: "Test email",
//   html: "<p><strong>Test email<strong/> from localhost:3000</p>"
// };


// transport.sendMail(email)
//   .then(() => console.log("email send successfuly"))
//   .catch(error => console.log(error.message));

module.exports = sendEmail;
