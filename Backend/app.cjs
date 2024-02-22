const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');



const app = express();
const axios = require('axios');
const port = 5000;
app.use(bodyParser.json());

const cors = require('cors');
app.use(cors());

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
    address:String,
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


const User = mongoose.model('user', userSchema);
const FarmerPost= mongoose.model('farmerpost', farmPostSchema);


app.post("/login", async (req, res) => {
    const { userName, password, role} = req.body;
    console.log(req.body)
        const check = await User.findOne({ userName: userName, password: password, role:role });

        if (check) {
            const accessToken = jwt.sign({ userName, role }, 'your-secret-key');
            console.log(accessToken);
            
            res.json({ status: "exist", accessToken: accessToken });
        } else {
            res.json({ status: "notexist" });
        }
});

app.post("/signup", async (req, res) => {
    const { name, userName, password, address, role } = req.body;

    try {
        const existingUser = await User.findOne({ userName: userName });

        if (existingUser) {
            return res.json("exist");
        }

        const newUser = new User({ name, userName, password , address, role});

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

app.get('/api/farmers/viewOrders', async (req, res) => {
    try {
        const orders = await FarmerPost.find({ userName: userName});

        res.json({ status: 'success', data: orders });
    } catch (error) {
        console.error(error);
        res.status(500).json({ status: 'error', message: 'Failed to fetch orders.' });
    }
});

app.get('/api/students/buy', async (req, res) => {
    try {
        const posts = await FarmerPost.find({ quantity: { $gt: 0 } });

        res.json({ status: 'success', data: posts });
    } catch (error) {
        console.error(error);
        res.status(500).json({ status: 'error', message: 'Failed to fetch posts.' });
    }
})

app.get('/api/dining/buy', async (req, res) => {
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
