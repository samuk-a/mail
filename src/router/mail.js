import { Router } from "express";

import Mail from "../controller/mail.js";

const router = Router();

router.post('/send', Mail.create);

export default router;