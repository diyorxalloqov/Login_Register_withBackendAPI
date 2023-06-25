// const express = require('express')
// const app = express();
// app.use(express.json());

// var users = []


// app.use((req, res, next) => {
//     res.setHeader("Access-Control-Allow-Origin", '*');
//     res.setHeader("Access-Control-Allow-Methods", 'GET,POST,PUT,DELETE');
//     res.setHeader("Access-Control-Allow-Headers", 'Content-type');
//     next();
// });

// app.post("/register", (req, res) => {

//     res.setHeader("Access-Control-Allow-Origin", '*');
//     res.setHeader("Access-Control-Allow-Methods", 'GET,POST,PUT,DELETE');
//     res.setHeader("Access-Control-Allow-Headers", 'Content-type');
//     const { email, password, f_name, l_name } = req.body;
//     if (!(email && password)) {
//         res.status(400).send({
//             "message": "Email yoki password xato"
//         });
//         return;
//     }
//     //check user
//     const user = "Flutter@gmail.com";

//     if (user === email) {
//         res.send({
//             "isRegistered": true,
//             "message": "Siz allaqachon ro'yxatdan o'tgansiz"
//         });
//         return;
//     }

//     // Register

//     users.push(req.body);
//     res.status(201).json({
//         "message": "User succesfully registered",
//         "acces_token": "asdfgnhmjnbvcxbnvcbncxvbcxvnbmbv"
//     })
//     return;
// });

// app.post("/login", (req, res) => {

//     res.setHeader("Access-Control-Allow-Origin", '*');
//     res.setHeader("Access-Control-Allow-Methods", 'GET,POST,PUT,DELETE');
//     res.setHeader("Access-Control-Allow-Headers", 'Content-type');
//     const { email, password } = req.body;
//     if (!(email && password)) {
//         res.status(400).send({
//             "message": "Email yoki password xato"
//         });
//     }
//     //check user

//     const user = "a";
//     const userPassword = "f";

//     if (user === email) {
//         // login
//         if (password === userPassword) {
//             res.status(200).json({
//                 "message": "User succesfully logged in",
//                 "access_token": "sadfgghdsfghjgffgahjkljhgf",
//             });
//             return;
//         }
//         else {
//             res.status(400).json({
//                 "message": "Email yoki parol xato",
//             });
//             return;
//         }
//     }
//     else {
//         res.status(409).json({
//             "message": "Siz hali ro'yxatdan o'tmagansiz",
//         });
//         return;

//     }
// });

// app.get('/users', (req, res) => {
//     res.setHeader("Access-Control-Allow-Origin", '*');
//     res.setHeader("Access-Control-Allow-Methods", 'GET,POST,PUT,DELETE');
//     res.setHeader("Access-Control-Allow-Headers", 'Content-type');
//     res.send(users);
// });

// app.put('/user/:id', (req, res) => {
//     res.setHeader("Access-Control-Allow-Origin", '*');
//     res.setHeader("Access-Control-Allow-Methods", 'GET,POST,PUT,DELETE');
//     res.setHeader("Access-Control-Allow-Headers", 'Content-type');
//     const { email, password, f_name, l_name } = req.body;
//     console.log(req.params.id);
//     var isEdited = false;
//     for (let index = 0; index < users.length; index++) {
//         if (users[index]["email"] === req.params.id) {
//             console.log("hello");
//             users[index] = req.body;
//             isEdited = true;
//         } else {
//             isEdited = false;
//         }
//     }
//     if (isEdited) {
//         res.status(200).json({
//             "message": "User info updated"
//         });
//     } else {
//         res.status(200).json({
//             "message": "User info not updated",
//             "error": "12335566532g3df"
//         });
//     }
// });

// var FintechHost = "192.168.42.184";
// var Home = "192.168.1.37";

// HOST = FintechHost;
// //192.168.42.184
// // 192.168.1.42


// PORT = 3000;

// app.listen(PORT, () => {
//     console.log(`YOUR SERVER RUNNING ON http://${HOST}:${PORT}/users`);
// });




/* there is fix in this code  */




const express = require('express');
const app = express();
app.use(express.json());

var users = [];

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", '*');
    res.setHeader("Access-Control-Allow-Methods", 'GET,POST,PUT,DELETE');
    res.setHeader("Access-Control-Allow-Headers", 'Content-type');
    next();
});

app.post("/register", (req, res) => {
    const { email, password, f_name, l_name } = req.body;
    if (!(email && password)) {
        return res.status(400).send({
            "message": "Email yoki password xato"
        });
    }

    // Check if user already exists
    const user = "Flutter@gmail.com";
    if (user === email) {
        return res.send({
            "isRegistered": true,
            "message": "Siz allaqachon ro'yxatdan o'tgansiz"
        });
    }

    // Register new user
    users.push(req.body);
    return res.status(201).json({
        "message": "User successfully registered",
        "access_token": "asdfgnhmjnbvcxbnvcbncxvbcxvnbmbv"
    });
});

app.post("/login", (req, res) => {
    const { email, password } = req.body;
    if (!(email && password)) {
        return res.status(400).send({
            "message": "Email yoki password xato"
        });
    }

    // Check user credentials
    const user = "d@gmail.com";
    const userPassword = "12345";

    if (user === email) {
        // Login
        if (password === userPassword) {
            return res.status(200).json({
                "message": "User successfully logged in",
                "access_token": "sadfgghdsfghjgffgahjkljhgf",
            });
        } else {
            return res.status(400).json({
                "message": "Email yoki parol xato",
            });
        }
    } else {
        return res.status(409).json({
            "message": "Siz hali ro'yxatdan o'tmagansiz",
        });
    }
});

app.get('/users', (req, res) => {
    res.send(users);
});

app.put('/user/:id', (req, res) => {
    const { email, password, f_name, l_name } = req.body;
    console.log(req.params.id);
    var isEdited = false;
    for (let index = 0; index < users.length; index++) {
        if (users[index]["email"] === req.params.id) {
            console.log("hello");
            users[index] = req.body;
            isEdited = true;
        } else {
            isEdited = false;
        }
    }
    if (isEdited) {
        return res.status(200).json({
            "message": "User info updated"
        });
    } else {
        return res.status(200).json({
            "message": "User info not updated",
            "error": "12335566532g3df"
        });
    }
});

var FintechHost = "192.168.42.184";
var Home = "192.168.1.37";

HOST = Home;
PORT = 3000;

app.listen(PORT, () => {
    console.log(`YOUR SERVER RUNNING ON http://${HOST}:${PORT}/users`);
});