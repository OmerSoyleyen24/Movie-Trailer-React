import express from "express";
import cors from "cors";
import mysql from "mysql2";

const router = express.Router();
router.use(cors());
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "BnYnMySQLHspActm26a",
    database: "MovieUserList"
});

connection.connect();

router.get("/users", async (req, res) => {
    try {
        const [results] = await connection.promise().query("SELECT * FROM movieuserlist");

        res.json(results);
    } catch (error) {
        console.error("Error fetching users:", error);
        res.status(500).send("Internal Server Error");
    }
});

router.post("/signup", async (req, res) => {
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

router.post("/updatePassword", (req, res) => {
    const { email, newPassword } = req.body;
    connection.query("UPDATE movieuserlist SET password = ? WHERE emailAddress = ?", [newPassword, email], function (error, result) {
        if (error) throw error;
        else {
            res.sendStatus(200);
        }
    })
})

router.delete("/users/:email", async (req, res) => {
    const { email } = req.params;
    try {
        const [results] = await connection.promise().query(
            "DELETE FROM movieuserlist WHERE emailAddress = ?", [email]
        );

        if (results.affectedRows === 0) {
            return res.status(404).send("Kullanıcı bulunamadı");
        }

        res.sendStatus(204);
    } catch (error) {
        console.error("Error deleting user:", error);
        res.status(500).send("Internal Server Error");
    }
});

export default router;