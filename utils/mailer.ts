"use server";
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    host: "smtp.beget.com",
    port: 465,
    secure: true,
    auth: {
        // TODO: replace `user` and `pass` values from <https://forwardemail.net>
        user: "ceo@etalongeo-app.ru",
        pass: "Nesterov332854_",
    },
});

interface ApplicationProps {
    email: String;
    text: String;
    name: String;
    theme: string;
}

// async..await is not allowed in global scope, must use a wrapper
export const Mailer = async ({
    email,
    text,
    name,
    theme,
}: ApplicationProps) => {
    // send mail with defined transport object
    const info = await transporter
        .sendMail({
            from: '"Эталон ГЕО" <ceo@etalongeo-app.ru>', // sender address
            to: "den_nesterov_1992@mail.ru", // list of receivers
            subject: `${theme}`, // Subject line
            text: `Пользователь ${name} оставил заявку на сайте c текстом: ${text} связаться с ним вы можете по email ${email}`, // plain text body
            // html: "<b>Hello world?</b>", // html body
        })
        .catch(console.error);

    await transporter
        .sendMail({
            from: '"Эталон ГЕО" <ceo@etalongeo-app.ru>', // sender address
            to: `${email}`, // list of receivers
            subject: `${theme}`, // Subject line
            text: `Добрый день! Благодарим за оставленную заявку на нашем сайте etalongeo-app.ru. В ближайшее время с вами свяжется наш специалист. Если вы не отправляли заявку, проигнорируйте это сообщение`, // plain text body
            // html: "<b>Hello world?</b>", // html body
        })
        .catch(console.error);

    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    //
    // NOTE: You can go to https://forwardemail.net/my-account/emails to see your email delivery status and preview
    //       Or you can use the "preview-email" npm package to preview emails locally in browsers and iOS Simulator
    //       <https://github.com/forwardemail/preview-email>
    //
};
