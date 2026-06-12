import express, { Request, Response } from "express";
import cors from "cors";
import { pool } from "../db";
import adminRoutes from "../router/admin";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT: number = Number(process.env.PORT) || 5000;

// Login
app.post("/login", async (req: Request, res: Response) => {
    const { email, password } = req.body;
    try {
        const [adminResults]: any = await pool.query("SELECT * FROM movieadminlist WHERE emailAddress = ?", [email]);
        if (adminResults.length > 0 && adminResults[0].password === password) return res.sendStatus(201);

        const [userResults]: any = await pool.query("SELECT * FROM movieuserlist WHERE emailAddress = ?", [email]);
        if (userResults.length > 0 && userResults[0].password === password) return res.sendStatus(200);

        return res.sendStatus(401);
    } catch (error) {
        console.error(error);
        return res.sendStatus(500);
    }
});

// Signup
app.post("/signup", async (req: Request, res: Response) => {
    const { email, password, confirmPassword } = req.body;
    if (password !== confirmPassword) return res.status(400).send('Şifreler uyuşmuyor');
    try {
        const table = email.includes("admin") ? "movieadminlist" : "movieuserlist";
        await pool.query(`INSERT INTO ${table} (emailAddress, password) VALUES (?, ?)`, [email, password]);
        res.sendStatus(201);
    } catch (error) {
        console.error(error);
        res.sendStatus(500);
    }
});

app.use("/admin", adminRoutes);

// Bağlantı testi ve Başlatma
pool.getConnection()
    .then(() => {
        console.log("Veritabanı bağlantısı kuruldu.");
        app.listen(PORT, () => console.log("Server listening on Port", PORT));
    })
    .catch((err) => {
        console.error("Veritabanı hatası!", err);
        process.exit(1);
    });