//api controller fnction to managae clerk user with the database
// http://localhost:3000/api/user/webhooks 
import { Webhook } from 'svix';
import User from '../models/userModel.js';

const clerkWebhook = async (req, res) => {
    try {
     //create a svix instance with clerk webhook secret
     const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);
     await whook.verify(JSON.stringify(req.body), {
        "svix-id": req.headers['svix-id'],
        "svix-timestamp": req.headers['svix-timestamp'],
        "svix-signature": req.headers['svix-signature'],
    });

    const { data, type } = req.body;

    switch (type) {
        case "user.created":{
            const userData = {
                clerkId: data.id,
                email: data.email_addresses[0].email_address,
                firstName: data.first_name,
                lastName: data.last_name,
                photo: data.image_url,
            }
            await User.create(userData);
            res.status(200).json({ message: "User created" });
            break;
        }
        case "user.updated":{
            const userData = {
                email: data.email_addresses[0].email_address,
                firstName: data.first_name,
                lastName: data.last_name,
                photo: data.image_url,
            }
            await User.findOneAndUpdate({ clerkId: data.id }, userData);
            res.status(200).json({ message: "User updated" });
            break;
        }
        case "user.deleted":{
            await User.findOneAndDelete({ clerkId: data.id });
            res.status(200).json({ message: "User deleted" });
            break;
        }
        default:
            break;
    }
    } catch (error) {
        console.log(error);
    }
};

export { clerkWebhook };