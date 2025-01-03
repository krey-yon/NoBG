import axios from "axios";
import fs from "fs";
import FormData from "form-data";
import User from '../models/userModel.js';

//controller function to remove bg from image

const removeBg = async (req, res) => {
    try {
        
    } catch (error) {
        console.log(error);
        res.json({ message: "Error removing background" });
    }
};