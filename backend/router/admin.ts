import express, { Request, Response, Router } from "express";
import { pool } from "../db"; 
import { RowDataPacket, ResultSetHeader } from "mysql2/promise";

const router: Router = express.Router();

router.get("/users", async (req: Request, res: Response) => {
    try {
        const [results] = await pool.query<RowDataPacket[]>("SELECT * FROM movieuserlist");
        res.json(results);
    } catch (error) {
        console.error("Kullanıcılar alınırken hata:", error);
        res.status(500).send("İç Sunucu Hatası");
    }
});

router.post("/signup", async (req: Request, res: Response) => {
    const { email, password, confirmPassword } = req.body;

    if (password !== confirmPassword) {
        return res.status(400).send('Şifreler uyuşmuyor');
    }

    try {
        const table = email.includes("admin") ? "movieadminlist" : "movieuserlist";
        await pool.query(
            `INSERT INTO ${table} (emailAddress, password) VALUES (?, ?)`, 
            [email, password]
        );
        res.sendStatus(201);
    } catch (error) {
        console.error("Kayıt sırasında hata:", error);
        res.status(500).send("İç Sunucu Hatası");
    }
});

router.post("/updatePassword", async (req: Request, res: Response) => {
    const { email, newPassword } = req.body;

    try {
        const [result] = await pool.query<ResultSetHeader>(
            "UPDATE movieuserlist SET password = ? WHERE emailAddress = ?", 
            [newPassword, email]
        );

        if (result.affectedRows === 0) {
            return res.status(404).send("Kullanıcı bulunamadı");
        }
        res.sendStatus(200);
    } catch (error) {
        console.error("Şifre güncellerken hata:", error);
        res.status(500).send("İç Sunucu Hatası");
    }
});

router.delete("/users/:email", async (req: Request, res: Response) => {
    const { email } = req.params;

    try {
        const [result] = await pool.query<ResultSetHeader>(
            "DELETE FROM movieuserlist WHERE emailAddress = ?", 
            [email]
        );

        if (result.affectedRows === 0) {
            return res.status(404).send("Kullanıcı bulunamadı");
        }
        res.sendStatus(204);
    } catch (error) {
        console.error("Kullanıcı silinirken hata:", error);
        res.status(500).send("İç Sunucu Hatası");
    }
});

export default router;