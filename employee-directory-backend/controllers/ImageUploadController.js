/**
 * ImageUploadController.js
 *
 * @description :: Server-side logic for managing ImageUploads.
 */
module.exports = {
  /**
   * ImageUploadController.update()
   */
  upload: (req, res) => {
    try {
        return res.status(201).json({
            message: 'File uploaded successfully'
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: 'File failed to upload'
        });
    }
  },
};
