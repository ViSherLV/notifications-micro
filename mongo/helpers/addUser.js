const { Users } = require('../Schemas')

const addUser = async ({ email }) => {
    try {
        const user = new Users({ email });
        const result = await user.save();
        console.log(`result`, result)
        return result;
    } catch (e) {
        console.log(`error`, e)
    }

};
module.exports = {
    addUser,
}