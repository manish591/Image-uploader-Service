import { v2 as cloudinary } from 'cloudinary';
import config from 'config';

cloudinary.config(config.get('cloudinary'));

export default cloudinary;