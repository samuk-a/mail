import nodemailer from 'nodemailer';

class Mail {
    constructor() {
        this.mailer = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            service: '',
            port: process.env.SMTP_PORT || 465,
            secure: true,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS
            }
        });

        this.mailer.verify((err, success) => {
            if (err) {
                console.log(err);
                throw new Error("Error to connect to mail service");
            } else {
                console.log("Successful connection to mail service");
            }
        })
    }

    async buildMail({from, to, subject, message}) {
        return {
            from,
            to,
            subject,
            html: message
        };
    }

    async sendMail({from, to, subject, message}) {
        const mail = await this.buildMail({
            from: from ?? process.env.SMTP_USER,
            to,
            subject,
            message
        });
        await this.mailer.sendMail(mail);
    }
}

export default new Mail();