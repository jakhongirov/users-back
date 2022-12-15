const requestIP = require('request-ip');
const model = require('./model');

module.exports = {
    GET_USERS: async (req, res) => {
        try {
            const { id, phone, name, surname, age } = req.query;

            if (id || phone || name || surname || age) {
                if (id) {
                    const foundbyIdUser = await model.getfoundbyIdUser(id);
                    return res.json({
                        status: 200,
                        message: "Success",
                        data: foundbyIdUser
                    });
                } else if (phone) {
                    const foundbyPhoneUser = await model.getfoundbyPhoneUser(phone);
                    return res.json({
                        status: 200,
                        message: "Success",
                        data: foundbyPhoneUser
                    });
                } else if (name) {
                    const foundbyNameUser = await model.getfoundbyNameUser(name);
                    return res.json({
                        status: 200,
                        message: "Success",
                        data: foundbyNameUser
                    });
                } else if (surname) {
                    const foundbySurnameUser = await model.getfoundbySurnameUser(surname);
                    return res.json({
                        status: 200,
                        message: "Success",
                        data: foundbySurnameUser
                    });
                } else if (age) {
                    const foundbyAgeUser = await model.getfoundbyAgeUser(age);
                    return res.json({
                        status: 200,
                        message: "Success",
                        data: foundbyAgeUser
                    });
                }
            } else {
                const allUsers = await model.getallUsers();
                return res.json({
                    status: 200,
                    message: "Success",
                    data: allUsers
                });
            }

        } catch (error) {
            console.log(error);
            res.json({
                status: 500,
                message: "Internal Server Error"
            })
        }
    },

    POST_USER: async (req, res) => {
        try {
            const { name, surname, age, phone, who, password } = req.body
            const location = requestIP.getClientIp(req);

            const addUser = await model.postUser(name, surname, age, phone, who, password, location)

            return res.json({
                status: 200,
                message: "Added",
                data: addUser
            });

        } catch (error) {
            console.log(error);
            res.json({
                status: 500,
                message: "Internal Server Error"
            })
        }
    },

    PUT_USER: async (req, res) => {
        try {
            const { id, name, surname, age, phone, password, who } = req.body
            const location = requestIP.getClientIp(req);

            const updatedUser = await model.putUser(id, name, surname, age, phone, password, who, location);
            return res.json({
                status: 200,
                message: "Updated",
                data: updatedUser
            });

        } catch (error) {
            console.log(error);
            res.json({
                status: 500,
                message: "Internal Server Error"
            })
        }
    },

    DELETE_USER: async (req, res) => {
        try {
            const { id } = req.body
            const deleteUser = await model.deleteUser(id);
            return res.json({
                status: 200,
                message: "Deleted",
                data: deleteUser
            });
        } catch (error) {
            console.log(error);
            res.json({
                status: 500,
                message: "Internal Server Error"
            })
        }
    }
}