import axios from "axios";
import fs from "fs";
import FormData from "form-data";
import User from '../models/userModel.js';

//controller function to remove bg from image

const removeBg = async (req, res) => {
    try {
        console.log("removebgcalled");
        const { clerkId } = req.body;
        const user = await User.findById({clerkId});
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        const imagePath = req.file.path;

        //reading the image file
        const imageFile = fs.createReadStream(imagePath);
        const formdata = new FormData();
        formdata.append("image_file", imageFile);
        
        const { data } = await axios.post("https://clipdrop-api.co/remove-background/v1", formdata, {
            headers: {
                'x-api-key': process.env.CLIPDROP_API,
            },
            responseType: 'arraybuffer',
        });

        //saving the image file
        const base64Image = Buffer.from(data, 'binary').toString('base64');
        const resultImage = `data:${req.file.mimetype};base64,${base64Image}`;
        console.log(resultImage, base64Image);
        res.json({ resultImage });
    } catch (error) {
        console.log(error);
        res.json({ message: "Error removing background" });
    }
};

export { removeBg };