import express from "express";
import cors from "cors";
import mysql from "mysql2/promise";
import adminRoutes from "../router/admin.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 5000;

const connection = await mysql.createConnection({
    host: "bkd0tkqe4pywqvphn92c-mysql.services.clever-cloud.com",
    user: "urz0ziojlffpstv8",
    password: "aTSzBPPk550WXbyJ1Cqh",
    database: "bkd0tkqe4pywqvphn92c"
});

app.post("/login", async (req, res) => {
    const { email, password } = req.body;

    try {
        const [adminResults] = await connection.query(
            "SELECT * FROM movieadminlist WHERE emailAddress = ?", [email]
        );

        if (adminResults.length > 0) {
            if (adminResults[0].password === password) {
                return res.sendStatus(201);
            }
        }

        const [userResults] = await connection.query(
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
        const table = email.includes("admin") ? "movieadminlist" : "movieuserlist";

        await connection.query(
            `INSERT INTO ${table} (emailAddress, password) VALUES (?, ?)`, [email, password]
        );

        res.sendStatus(201);
    } catch (error) {
        console.error(error);
        res.sendStatus(500);
    }
});

app.post("/updatePassword", async (req, res) => {
    const { email, newPassword } = req.body;
    try {
        await connection.query("UPDATE movieuserlist SET password = ? WHERE emailAddress = ?", [newPassword, email]);
        res.sendStatus(200);
    } catch (error) {
        console.error(error);
        res.sendStatus(500);
    }
});

app.use("/admin", adminRoutes);

app.listen(PORT, () => {
    console.log("Server listening on Port", PORT);
});
