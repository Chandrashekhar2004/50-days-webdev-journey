const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const Chat = require('./models/chat');
const methodOverride = require('method-override');



app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
main()
    .then(() => {
        console.log("Connection successful");
    })
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}
app.listen(8080, () => {
    console.log("Server is running on port 8080");
});



app.get('/', (req, res) => {
    res.send("root is working");
});

// index Route
app.get("/chats", async (req, res) => {
    let chats = await Chat.find();
    // console.log(chats);
    res.render("index.ejs", { chats });
});
// new Route
app.get("/chats/new", (req, res) => {
    res.render("new.ejs");
});
// create Route
app.post("/chats", async (req, res) => {
    let { from, to, message } = req.body;
    let newChat = new Chat({
        from: from,
        to: to,
        message: message,
        created_at: new Date(),
    });
    await newChat.save();
    res.redirect("/chats");
});

// edit Route
app.get("/chats/:id/edit", async (req, res) => {
    let { id } = req.params;
    let chat = await Chat.findById(id);
    res.render("edit.ejs", { chat });
});

// update Route
app.put("/chats/:id", async (req, res) => {
    let { id } = req.params;
    let { message: newMessage } = req.body;
    let updatedChat = await Chat.findByIdAndUpdate(id,
        { message: newMessage },
        { new: true }
    );
    res.redirect("/chats");
});

// delete Route
app.delete("/chats/:id", async (req, res) => {
    let { id } = req.params;
    let deletedChat = await Chat.findByIdAndDelete(id);
    console.log(deletedChat);
    res.redirect("/chats");
});