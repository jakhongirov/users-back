const { fetch } = require("../../lib/postgres");

const foundUser = `
    SELECT
        *
    FROM
        users
    WHERE
        user_name = $1 and user_password = $2;
`;

const getUser = (login, password) => fetch(foundUser, login, password);


module.exports = {
    getUser
}