const model = require('./model');
const JWT = require('../../lib/jwt')

module.exports = {
    LOGIN: async (req, res) => {
        try {
            const { login, password } = req.body
            const foundAdmin = await model.getUser(login, password);


            if (foundAdmin) {
                const token = new JWT({ id: foundAdmin.id }).sign()
                res.json({
                    status: 200,
                    message: "Success",
                    token: token
                });
            } else {
                res.json({
                    status: 401,
                    message: "Unauthorized"
                });
            }



        } catch (error) {
            console.log(error)
            res.json({
                status: 500,
                message: error.message,
            })

        }
    }
}