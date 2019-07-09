const mongoose = require('mongoose');
const Poll = require("./models/Poll");
const User = require("./models/User")

mongoose.connect("mongodb://localhost:27017/Poll", { useNewUrlParser: true });
/*
const user = new User({
    email: 'pedro3@gmail.com',
    name: "Pedro3"
});
user.save(function (err) {
    if (err) return console.log(err);
});

const poll = new Poll({
    title: 'Casino Royale3',
    description: "Ejemplo 3",
    //options: {"Votes": 5},
    user: user._id    // assign the _id from the person
});

poll.save(function (err) {
    if (err) return console.log(err);
    // thats it!
});
*/
Poll.find().populate('user').then(polls => {
    polls.forEach(p => console.log(`Poll ${p.title} creado por ${p.user.email}`));
  });
