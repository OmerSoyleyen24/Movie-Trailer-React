import express from "express";
import cors from "cors";
import mysql from "mysql2/promise";

const app = express();
const router = express.Router();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const connection = await mysql.createConnection({
    host: "bkd0tkqe4pywqvphn92c-mysql.services.clever-cloud.com",
    user: "urz0ziojlffpstv8",
    password: "aTSzBPPk550WXbyJ1Cqh",
    database: "bkd0tkqe4pywqvphn92c"
});

router.get("/users", async (req, res) => {
    try {
        const [results] = await connection.query("SELECT * FROM movieuserlist");
        res.json(results);
    } catch (error) {
        console.error("Kullanıcılar alınırken bir hata oluştu:", error);
        res.status(500).send("İç Sunucu Hatası");
    }
});

router.post("/signup", async (req, res) => {
    const { email, password, confirmPassword } = req.body;

    if (password !== confirmPassword) {
        return res.status(400).send('Şifreler uyuşmuyor');
    }

    try {
        if (email.includes("admin")) {
            await connection.query(
                "INSERT INTO movieadminlist (emailAddress, password) VALUES (?, ?)", [email, password]
            );
        } else {
            await connection.query(
                "INSERT INTO movieuserlist (emailAddress, password) VALUES (?, ?)", [email, password]
            );
        }

        res.sendStatus(201);
    } catch (error) {
        console.error("Kayıt sırasında bir hata oluştu:", error);
        res.status(500).send("İç Sunucu Hatası");
    }
});

router.post("/updatePassword", async (req, res) => {
    const { email, newPassword } = req.body;

    try {
        const [result] = await connection.query(
            "UPDATE movieuserlist SET password = ? WHERE emailAddress = ?", [newPassword, email]
        );

        if (result.affectedRows === 0) {
            return res.status(404).send("Kullanıcı bulunamadı");
        }

        res.sendStatus(200);
    } catch (error) {
        console.error("Şifre güncellerken bir hata oluştu:", error);
        res.status(500).send("İç Sunucu Hatası");
    }
});

router.delete("/users/:email", async (req, res) => {
    const { email } = req.params;

    try {
        const [result] = await connection.query(
            "DELETE FROM movieuserlist WHERE emailAddress = ?", [email]
        );

        if (result.affectedRows === 0) {
            return res.status(404).send("Kullanıcı bulunamadı");
        }

        res.sendStatus(204);
    } catch (error) {
        console.error("Kullanıcı silinirken bir hata oluştu:", error);
        res.status(500).send("İç Sunucu Hatası");
    }
});

export default router;