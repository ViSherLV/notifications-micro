const {getUsers} = require('../mongo/helpers');
const { SendGrid } = require('../utils/SendGrid')
const sendNotifications = async (data) =>{
    const {header, image, text, category, id} = data;

    const users = await getUsers();
    const allUsers = [];
    users.forEach(element => {
        allUsers.push(element.email);
    });

    allUsers.forEach((user)=>{
        SendGrid.sendMessage({
            to:user,
            subject: header,
            html: `<a href="http://localhost:3000/content/${id}"><img src="${image}"><h1>${header}</h1></a>`
        })
    });
}
module.exports = {
    sendNotifications,
}