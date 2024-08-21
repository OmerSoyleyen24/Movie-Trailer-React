import express from "express";
import cors from "cors";
import mysql from "mysql2";
import dotenv from "dotenv";
import adminRoutes from "../router/admin.js"

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

dotenv.config();

const PORT = 5000;

const connection = mysql.createConnection({
    host: DB_HOST,
    user: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_DBNAME
})

connection.connect();

app.post("/login", async (req, res) => {
    const { email, password } = req.body;

    try {
        const [adminResults] = await connection.promise().query(
            "SELECT * FROM movieadminlist WHERE emailAddress = ?", [email]
        );

        if (adminResults.length > 0) {
            if (adminResults[0].password === password) {
                return res.sendStatus(201);
            }
        }

        const [userResults] = await connection.promise().query(
            "SELECT * FROM movieuserlist WHERE emailAddress = ?", [email]
        );

        if (userResults.length > 0 && userResults[0].password === password) {
            return res.sendStatus(200);
        }

        return res.sendStatus(401);
    } catch (error) {
        console.error(error);
        return res.sendStatus(500);
    }
});

app.post("/signup", async (req, res) => {
    const { email, password, confirmPassword } = req.body;

    if (password !== confirmPassword) {
        return res.status(400).send('Şifreler uyuşmuyor');
    }

    try {
        if (email.includes("admin")) {
            await connection.promise().query(
                "INSERT INTO movieadminlist (emailAddress, password) VALUES (?, ?)", [email, password]
            );
        } else {
            await connection.promise().query(
                "INSERT INTO movieuserlist (emailAddress, password) VALUES (?, ?)", [email, password]
            );
        }

        res.sendStatus(201);
    } catch (error) {
        console.error(error);
        res.sendStatus(500);
    }
});

app.post("/updatePassword", (req, res) => {
    const { email, newPassword } = req.body;
    connection.query("UPDATE movieuserlist SET password = ? WHERE emailAddress = ?", [newPassword, email], function (error, result) {
        if (error) throw error;
        else {
            res.sendStatus(200);
        }
    })
})

app.use("/admin", adminRoutes);

app.listen(PORT, () => {
    console.log("Server listening on Port", PORT);
})