const express = require('express');
const mongoose = require('mongoose');

const app = express();
const axios = require('axios');
const port = 3000;

app.use(express.urlencoded({ extended: true }));

let password = '13031303';
let user = 'venkat';
mongoose.connect('mongodb+srv://'+user+':'+password+'@cluster0.1tiywpf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
    useNewUrlParser: true,
})
.then(() => {
    console.log('MongoDB connected successfully');
})
.catch((err) => {
    console.error('MongoDB connection error:', err.message);
});

const userSchema = new mongoose.Schema({
    name: String,
    userName:String,
    password:String,
    city:String,
    role:String,
});
const farmPostSchema= new mongoose.Schema({
    userName:String,
    name: String,
    item: String,
    quantity: Number,
    bulkPrice: Number,
    normalPrice: Number,
    ordered:Number,
    delivered:Number,
})


const User = mongoose.model('User', userSchema);
const FarmerPost= mongoose.model('FarmerPost', farmPostSchema);


app.post("/login", async (req, res) => {
    const { userName, password } = req.body;
    try {
        const check = await User.findOne({ userName: userName, password: password });

        if (check) {
            const userName = { userName };
            const accessToken = jwt.sign(userName, 'your-secret-key');
            console.log(accessToken);
            
            res.json({ status: "exist", accessToken: accessToken });
        } else {
            res.json({ status: "notexist" });
        }
    } catch (e) {
        res.json({ status: "fail" });
    }
});

app.post("/signup", async (req, res) => {
    const { name, userName, password, city, role } = req.body;

    try {
        const existingUser = await User.findOne({ userName: userName });

        if (existingUser) {
            return res.json("exist");
        }

        const newUser = new User({ name, userName, password , city, role});

        const savedUser = await newUser.save();
        res.json("success");
    } catch (error) {
        console.error(error);
        res.status(500).json("error");
    }
});

app.post('/api/farmers/post', async (req, res) => {
    const { userName, item, quantity, bulkPrice, normalPrice } = req.body;

    try {
        const user = await User.findOne({ userName: userName });

        if (!user) {
            return res.status(404).json({ status: 'error', message: 'User not found.' });
        }
        const newFarmerPost = new FarmerPost({
            userName:userName,
            name: user.name,
            item,
            quantity,
            bulkPrice,
            normalPrice,
        });

        const savedFarmerPost = await newFarmerPost.save();
        res.json({ status: 'success', data: savedFarmerPost });
    } catch (error) {
        console.error(error);
        res.status(500).json({ status: 'error', message: 'Failed to save farmer post.' });
    }
});

app.post('/api/farmers/viewOrders', async (req, res) => {
    try {
        const orders = await FarmerPost.find({ userName: userName});

        res.json({ status: 'success', data: orders });
    } catch (error) {
        console.error(error);
        res.status(500).json({ status: 'error', message: 'Failed to fetch orders.' });
    }
});

app.post('/api/students/buy', async (req, res) => {
    try {
        const posts = await FarmerPost.find({ quantity: { $gt: 0 } });

        res.json({ status: 'success', data: posts });
    } catch (error) {
        console.error(error);
        res.status(500).json({ status: 'error', message: 'Failed to fetch posts.' });
    }
})

app.post('/api/dining/buy', async (req, res) => {
    try {
        const posts = await FarmerPost.find({ quantity: { $gt: 0 } });

        res.json({ status: 'success', data: posts });
    } catch (error) {
        console.error(error);
        res.status(500).json({ status: 'error', message: 'Failed to fetch posts.' });
    }
})




app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
