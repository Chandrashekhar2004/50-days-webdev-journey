const mongoose = require('mongoose');
const Chat = require('./models/chat');

main()
    .then(() => {
        console.log("Connection successful");
    }
    ).catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let allChat = [{
    from: "Neha",
    to: "Rohit",
    message: "Hello Rohit, how are you?",
    created_at: new Date()
},
{
    from: "Rohit",
    to: "Neha",
    message: "Hi Neha, I'm doing well. How about you?",
    created_at: new Date()
},
{
    from: "Neha",
    to: "Rohit",
    message: "I'm good too! Are you free this weekend?",
    created_at: new Date()
},
{
    from: "Rohit",
    to: "Neha",
    message: "Yes, I am. Let's catch up!",
    created_at: new Date()
}
];

// Chat.insertMany(allChat);