const mongoose = require('mongoose');
const User = require('./models/User'); // make sure the path is correct
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(async () => {
  console.log('MongoDB connected');

  const users = [
    { name: "Alice", color: "Blue" },
    { name: "Bob", color: "Green" },
    { name: "Charlie", color: "Red" },
    { name: "Diana", color: "Yellow" },
    { name: "Eva", color: "Purple" },
    { name: "Frank", color: "Orange" },
    { name: "Grace", color: "Pink" },
    { name: "Hannah", color: "Cyan" },
    { name: "Ian", color: "Magenta" },
    { name: "Julia", color: "Brown" },
    { name: "Kevin", color: "Grey" },
    { name: "Laura", color: "Teal" }
  ];

  // Remove existing documents
  await User.deleteMany({});

  // Insert all 12 users
  await User.insertMany(users);

  console.log('12 users inserted successfully!');
  process.exit();
})
.catch(err => console.log(err));
