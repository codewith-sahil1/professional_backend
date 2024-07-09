import { v2 as cloudinary } from "cloudinary"
import fs from "fs"


cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_SECRECT_KEY  // Click 'View Credentials' below to copy your API secret
});


//  uplaoding the file in the clodinary cloud
const uplaodCloundinary = async (localFilePath) => {

    try {

        if (!localFilePath) return null

        //  upload the find in the cloudinary
        const response = await cloudinary.uploader.upload(localFilePath, {

            resource_type: "auto"
        })

        //  file has been uploaded successfully

        console.log("file is uploaded in cloudinary", response.url);
        return response;
    } catch (error) {
        fs.unlinkSync(localFilePath)// remove the locally saved temporary file as the uplaod operation got failed...
    }
}

export default {uplaodCloundinary}