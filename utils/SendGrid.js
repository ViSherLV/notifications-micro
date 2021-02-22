const sgMail = require('@sendgrid/mail');
const API_KEY = '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';

class SendGrid {
    static initialize() {
        sgMail.setApiKey(API_KEY);
    };

    static sendMessage({ to, subject, text, html }) {
        const message = {
            to,
            from: 'vishersb@gmail.com',
            subject,
            text: 'Hello from sendgrid, Victor',
            html: html,
        };
        sgMail.send(message)
            .then(res => console.log(`Email sent`))
            .catch(error => console.log(error.message))
    }

};

module.exports = {
    SendGrid
}