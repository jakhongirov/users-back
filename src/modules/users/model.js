const { fetch, fetchALL } = require("../../lib/postgres");

const All_USERS = `
    SELECT
    *
    FROM
        users;
`;

const BY_ID = `
    SELECT
        *
    FROM
        users
    WHERE
        user_id = $1;
`;

const BY_PHONE = `
    SELECT
        *
    FROM
        users
    WHERE
        user_phone = $1;
`;

const BY_NAME = `
    SELECT
        *
    FROM
        users
    WHERE
        user_name = $1;
`;

const BY_SURNAME = `
    SELECT
        *
    FROM
        users
    WHERE
        user_surname = $1;
`;

const BY_AGE = `
    SELECT
        *
    FROM
        users
    WHERE
        user_surname = $1;
`;

const UPDATE_USER = `
    UPDATE
        users
    SET
        user_name = $2,
        user_surname = $3,
        user_age = $4,
        user_phone = $5,
        user_who = $7,
        user_password = $6,
        user_location = $8
    WHERE
        user_id = $1 RETURNING * ;
`;

const ADD_USER = `
    INSERT INTO
        users (
            user_name,
            user_surname,
            user_age,
            user_phone,
            user_who,
            user_password,
            user_location
        )
    VALUES
        (
            $1,
            $2,
            $3,
            $4,
            $5,
            $6,
            $7
        ) RETURNING *;
`

const DELETE_USER =`
    DELETE FROM
        users
    WHERE
        user_id = $1
    RETURNING *;
`

const getallUsers = () => fetchALL(All_USERS);
const getfoundbyIdUser = (id) => fetchALL(BY_ID, id);
const getfoundbyPhoneUser = (phone) => fetchALL(BY_PHONE, phone);
const getfoundbyNameUser = (name) => fetchALL(BY_NAME, name);
const getfoundbySurnameUser = (surname) => fetchALL(BY_SURNAME, surname);
const getfoundbyAgeUser = (age) => fetchALL(BY_AGE, age);
const putUser = (id, name, surname, age, phone, password, who, location) => fetch(UPDATE_USER, id, name, surname, age, phone, password, who, location)
const postUser = (name, surname, age, phone, who, password, location) => fetch(ADD_USER, name, surname, age, phone, who, password, location)
const deleteUser = (id) => fetch(DELETE_USER, id)

module.exports = {
    getallUsers,
    getfoundbyIdUser,
    getfoundbyPhoneUser,
    getfoundbyNameUser,
    getfoundbySurnameUser,
    getfoundbyAgeUser,
    putUser,
    postUser,
    deleteUser
};