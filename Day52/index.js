const mongoose = require('mongoose');

main().then((res) => {
    console.log('Connected to MongoDB');
})
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/test')
}
const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String
});

const User = mongoose.model('User', userSchema);

// const user2 = new User({
//     name: "eve",
//     age: 22,
//     email: "eve@example.com"
// });

// user2.save();

// User.insertMany([
//     { name: "peter", age: 30, email: "peter@example.com" },
//     { name: "bob", age: 25, email: "bob@example.com" },
//     { name: "charlie", age: 35, email: "charlie@example.com" }
// ]).then((res) => {
//     console.log(res);
// }).catch(err => console.log(err));


// User.find({ age: { $gt: 25 } }).then((res) => {
//     console.log(res);
// }).catch(err => console.log(err));

// User.findOne({ age: { $gte: 30 } }).then((res) => {
//     console.log(res);
// }).catch(err => console.log(err));

// User.findById("6a0c0afd2a5a9a679de793c6").then((res) => {
//     console.log(res);
// }).catch(err => console.log(err));

// User.find().then((res) => {
//     console.log(res);
// })

// User.findOneAndUpdate({ name: "bob" }, { age: 28 }, { new: true })
//     .then((res) => {
//         console.log(res);
//     })
//     .catch(err => console.log(err));


// User.findByIdAndDelete("6a0c0afd2a5a9a679de793c6")
//     .then((res) => {
//         console.log(res);
//     })
//     .catch(err => console.log(err));


const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String
    },
    publishedYear: {
        type: Number
    }
});

const Book = mongoose.model('Book', bookSchema);

const book1 = new Book({
    title: "The Great Gatsby",  
    author: "F. Scott Fitzgerald",
    publishedYear: 1925
});

book1.save()
    .then((res) => {
        console.log('Book saved:', res);
    })
    .catch(err => console.log(err));
