import MailService from '../service/mail.js';

class Mail {
    constructor () { }

    async create(req, res) {
        const { from, to, subject, message } = req.body;

        await MailService.sendMail({ from, to, subject, message });

        return res.status(200).json({ status: 200, message: 'Email enviado com sucesso' });
    }
}

export default new Mail();