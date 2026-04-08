import cloudinary, { UploadApiErrorResponse, UploadApiResponse } from 'cloudinary';

export function uploads(
  file: string,
  public_id?: string,
  overwrite?: boolean,
  invalidate?: boolean
): Promise<UploadApiResponse | UploadApiErrorResponse | undefined> {
  return new Promise((resolve) => {
    cloudinary.v2.uploader.upload(
      file,
      {
        public_id,
        overwrite,
        invalidate,
        chunk_size: 500000,
        resource_type: 'video', // video
      },
      (error, result) => {
        if (error) {
          resolve(error);
        } else {
          resolve(result);
        }
      }
    );
  });
};

export function videoUpload(
  file: string,
  public_id?: string,
  overwrite?: boolean,
  invalidate?: boolean
): Promise<UploadApiResponse | UploadApiErrorResponse | undefined> {
  return new Promise((resolve) => {
    cloudinary.v2.uploader.upload(
      file,
      {
        public_id,
        overwrite,
        invalidate,
        resource_type: 'auto', // zip, pdf, doc, docx, xls, xlsx, ppt, pptx
      },
      (error, result) => {
        if (error) {
          resolve(error);
        } else {
          resolve(result);
        }
      }
    );
  });
} ;
