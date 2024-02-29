import fs from 'fs/promises';

async function deleteFile(filePath: string) {
  try {
    await fs.unlink(filePath);
  } catch(err) {
    throw new Error('Error while deleting the file');
  }
}

export default deleteFile;