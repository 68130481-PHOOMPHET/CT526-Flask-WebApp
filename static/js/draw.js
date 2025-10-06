// static/js/draw.js

document.addEventListener('DOMContentLoaded', function() {
    // 1. ค้นหา form จาก DOM
    const form = document.getElementById('drawForm');

    // ตรวจสอบว่ามีฟอร์มในหน้านี้หรือไม่ ป้องกัน error ในหน้าอื่น
    if (!form) {
        return;
    }
    
    // 2. ดึง URL ปลายทางที่ส่งมาจาก data attribute ของ form
    const formActionUrl = form.dataset.url;

    // 3. จัดการการ submit ฟอร์มเมื่อกดปุ่ม "Draw!"
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // ป้องกันไม่ให้ฟอร์ม submit แบบปกติ

        // 4. ดึงค่าจาก input fields
        const rows = document.getElementById('rowsInput').value;
        const char = document.getElementById('charInput').value;
        
        // 5. ตรวจสอบค่าที่กรอก
        if (rows && Number.isInteger(Number(rows)) && Number(rows) > 0) {
            // 6. สร้าง URL ใหม่พร้อมกับข้อมูล (query parameters)
            const url = new URL(window.location.origin + formActionUrl);
            url.searchParams.set('rows', rows);
            url.searchParams.set('char', char);

            // 7. สั่งให้เบราว์เซอร์ไปที่ URL ใหม่ (วิธีนี้ตรงไปตรงมาและทำงานได้ดีกับ no-cache header จาก app.py)
            window.location.href = url;
        } else {
            alert('Please enter a valid positive number for rows.');
        }
    });
});

