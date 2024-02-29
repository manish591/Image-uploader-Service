import { Router } from 'express';
import uploader from '../controllers/upload';
import uploadFile from '../middlewares/upload';

const router = Router();

router.post('/', uploadFile.single('uploaded'), uploader.uploadFile);

export default router;