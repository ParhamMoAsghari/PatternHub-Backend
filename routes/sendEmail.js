const express = require('express');
const nodemailer = require("nodemailer");
const router = express.Router();

const transporter = nodemailer.createTransport({
    host: "smtp.c1.liara.email",
    port: 587,
    secure: false,
    auth: {
        user: 'quizzical_black_fi7c4p',
        pass: '64361cd7-19d9-48b9-8717-0e1a0b165b09'
    }
});
router.post('/contactUs', async (req, res) => {
    const { email, subject, message } = req.body;

    const info = await transporter.sendMail({
        from: subject + '<mail@email.patternhub.ir>', // sender address
        to: "parhammohammadasghari@gmail.com", // list of receivers
        subject: subject, // Subject line
        text: message + "\n email : " + email, // plain text body
    });
    res.json(info);
});
module.exports = router;