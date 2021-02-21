const sgMail = require('@sendgrid/mail');
const API_KEY = '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';

class SendGrid {
    static initialize() {
        sgMail.setApiKey(API_KEY);
    };

    static sendMessage({ to, subject, text, html }) {
        const message = {
            to: 'slimbaron@gmail.com',
            from: 'vishersb@gmail.com',
            subject: 'Hello from sendgrid',
            text: 'Hello from sendgrim, Victor',
            html: `<h1>Hi world</h1>`
        };
        sgMail.send(message)
            .then(res => console.log(`Email sent`))
            .catch(error => console.log(error.message))
    }

};

module.exports = {
    SendGrid
}