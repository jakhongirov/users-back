CREATE TABLE users (
    user_id bigserial PRIMARY KEY,
    user_name text not null,
    user_surname text not null,
    user_age varchar(3) not null,
    user_phone varchar(20) not null,
    user_who text not null,
    user_password varchar(32) not null,
    user_location varchar(200) not null
);

UPDATE
    users
SET
    user_name = $ 2,
    user_surname = $ 3,
    user_age = $ 4,
    user_phone = $ 5 user_password = $ 6 user_who = $ 7
WHERE
    user_id = $ 1 RETURNING *;

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
        $ 1,
        $ 2,
        $ 3,
        $ 4,
        $ 5,
        $ 6,
        $ 7
    ) RETURNING *;

DELETE FROM
    users
WHERE
    user_id = 3;