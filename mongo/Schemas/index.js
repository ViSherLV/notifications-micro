const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const usersSchema = new Schema({
    email: String,
    status: String,
}, { versionKey: false });
const Users = mongoose.model('Users', usersSchema)

module.exports = {
    Users,
}
// const post = {
//     header: 'Escape from GameStop stock drama with these deals',
//     image: image,
//     text: 'January 2021 has been full of important news, but it’s been a bit lousy when it comes to deals. Still, we’ve done our part in scouring all of the major retailers for discounts on products we care about (and we think you care about, too). There aren’t many brand-new deals to be found in this week’s dispatch, but go ahead and take a look if you haven’t been following them closely.',
//     id: '1223',
//     catregory: 'tech'
// // }

