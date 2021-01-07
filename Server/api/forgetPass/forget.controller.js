
// Services
const forgetService = require('./forget.service');
const userService = require('../user/user.service');

async function forget(req, res) {
    const { mail } = req.body;

    const user = await userService.getByEmail(mail);

    if (!user) {
        return res.status(401)
            .json({ message: 'Email not founded, please try check and try again or signup.' });
    }

    const token = await forgetService.createToken();


}


module.exports = {

}
