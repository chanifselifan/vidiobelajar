import 'dotenv/config'; // Memuat variabel lingkungan dari file .env
import { sendEmail } from './services/emailService.js'; // Import fungsi sendEmail

(async () => {
    try {
        // Detail email untuk testing
        const emailDetails = {
            to: 'selifanchanif@gmail.com', // <--- SUDAH DIGANTI dengan email untuk testing
            subject: 'Test Pengiriman Email dari Script Node.js', // <--- Subjek sedikit diubah agar jelas
            html: '<p>Halo,</p><p>Ini adalah email test dari script Node.js saya. Jika email ini sampai, berarti fungsi sendEmail Anda berfungsi!</p>', // <--- HTML sedikit diubah
        };

        console.log('Script test: Memulai pengiriman email...'); // Log sebelum panggil sendEmail

        // Panggil fungsi sendEmail
        await sendEmail(emailDetails);

        // Jika berhasil
        console.log('Script test: Berhasil memanggil sendEmail. Cek log sendEmail selanjutnya.'); // Log setelah panggil sendEmail berhasil
    } catch (error) {
        // Jika gagal
        console.error('Script test: Gagal saat memanggil sendEmail:', error); // Log jika script test gagal
    }
})();
