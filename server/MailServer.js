/**
 * Created by dillo_000 on 4/17/2017.
 */
const nodemailer = require('nodemailer');

class MailServer {
    constructor(_emailUser, _emailPass) {
        this.emailUser = _emailUser;
        this.smtpTransport = nodemailer.createTransport({
            service: "gmail",
            host: "smtp.gmail.com",
            auth: {
                user: _emailUser,
                pass: _emailPass
            }
        });
    }

    send = (_req, _res) => {
        let mailOptions = {
            from : _req.body.from,
            to : this.emailUser,
            subject : _req.body.subject,
            text : _req.body.text
        };

        this.smtpTransport.sendMail(mailOptions, function(error, response){
            if(error){
                console.log(error);
            }else{
                console.log("Email sent: " + response.message);
            }
        });
    }
}

module.exports = MailServer;
