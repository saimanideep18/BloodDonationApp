const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
dotenv.config();

function createTransporter(config) {
  const transporter = nodemailer.createTransport(config);
  return transporter;
}
let configurations = {
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  requireTLS: true,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
};
const sendMail = async (messageoption) => {
  const transporter = await nodemailer.createTransporter(configurations);
  await transporter.verify();
  await transporter.sendMail(messageoption, (error, info) => {
    if (err) {
      console.log(error);
    }
    console.log(info);
  });
};

module.exports = sendMail;
