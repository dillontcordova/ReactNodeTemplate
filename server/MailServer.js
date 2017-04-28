/**
 * Created by dillo_000 on 4/17/2017.
 */
const nodemailer = require('nodemailer');

class MailServer {
    constructor(_emailUser) {
        this.emailUser = _emailUser;
        this.smtpTransport = nodemailer.createTransport({
            service: "gmail",
            auth: {
                type: 'OAuth2',
                user: _emailUser,
                clientId: '663837738277-3qutt6p8mjn4dlt7viekfnj3sn1dr2ek.apps.googleusercontent.com',
                clientSecret: 'mXutHPJ5rLIRF1HGI7V9yqVK',
                refreshToken: '1/uVLdXqRpgL9yD6ChyZO1U47frrXNNykuAllrwNNn9ds',
                accessToken: 'ya29.GlsxBEoT9BQfqSf0oh8_3vXRvCox0w9BpoerWNPekU4SDY3tEx5tonXCAuHLjGldMtWTWuSAfnh1BXrZSz8vWxaIavPGOoA68R9jabI1mo6hWGgv99308PjGWnbe'
            }
        });
    }

    send = (_req, _res) => {
        // let bodyText = _req.body.from + ' has emailed you with an email address of: ' + ;
        let mailOptions = {
            from : _req.body.from,
            to : this.emailUser,
            subject : _req.body.subject || 'Website Offer',
            text : _req.body.text
        };
        console.log(mailOptions);
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
