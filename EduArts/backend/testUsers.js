const mongoose = require('mongoose');
const User = require('./models/User'); // make sure the path is correct
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(async () => {
  console.log('MongoDB connected');
  const users = await User.find();
  console.log(users); // logs all users in terminal
  process.exit();
})
.catch(err => console.log(err));
