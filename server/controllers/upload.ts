import { Request, Response } from 'express';
import cloudinary from '../utils/cloudinary';
import deleteFile from '../utils/deleteFile';

async function uploadFile(req: Request, res: Response) {
  try {
    if(req?.file) {
      const uploadedFile = await cloudinary.uploader.upload(req.file.path);
      res.status(200).json({
        message: 'file successfully uploaded',
        url: uploadedFile.url,
      });

      await deleteFile(req.file.path);
    }
  } catch(err) {
    res.status(500).json({
      message: 'Error while uploading the file',
    });
  }
}

export default {
  uploadFile
};
