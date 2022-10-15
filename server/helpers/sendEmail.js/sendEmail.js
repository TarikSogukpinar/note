import nodemailer from "nodemailer";

const sendEmail = async (email, subject, text) => {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      service: "gmail",
      auth: {
        user: "hanlueee@gmail.com",
        pass: "aseodndvaqpratxm",
      },
    });
    await transporter.sendMail({
      from: "hanlueee@gmail.com",
      to: email,
      subject: subject,
      text: text,
      
    });
    console.log("email sent successfully");
  } catch (error) {
    console.log(error);
    console.log("email not sent!");
    return error;
  }
};

export default sendEmail;
