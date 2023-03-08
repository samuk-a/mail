import MailService from '../service/mail.js';

class Mail {
    constructor () { }

    async create(req, res) {
        const { to, subject, message } = req.body;

        await MailService.sendMail({ to, subject, message });

        return res.status(200).json({ message: 'Email enviado com sucesso' });
    }
}

export default new Mail();