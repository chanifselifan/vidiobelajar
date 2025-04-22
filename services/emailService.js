import nodemailer from 'nodemailer';
import 'dotenv/config'; // Untuk memuat variabel lingkungan dari file .env

// Konfigurasi transporter email
const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: parseInt(process.env.EMAIL_PORT, 10), // Pastikan port berupa angka
    secure: process.env.EMAIL_PORT === '465', // Gunakan secure true jika port 465
    auth: {
        user: process.env.EMAIL_USER, // Alamat email pengirim
        pass: process.env.EMAIL_PASS, // Password atau App Password email pengirim
    },
});

// Fungsi untuk mengirim email
export async function sendEmail({ to, subject, html, text }) {
    try {
        const mailOptions = {
            from: process.env.EMAIL_FROM || process.env.EMAIL_USER, // Alamat email pengirim
            to, // Penerima email
            subject, // Subjek email
            html, // Konten email dalam format HTML
            text, // Konten email dalam format teks (opsional)
        };

        // Kirim email menggunakan transporter
        const info = await transporter.sendMail(mailOptions);
        console.log(`Email berhasil dikirim ke ${to}: ${info.messageId}`);
        return info;
    } catch (error) {
        console.error('Gagal mengirim email:', error.message);
        throw new Error('Gagal mengirim email: ' + error.message);
    }
}
