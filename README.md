Project: CT526 Simple Flask Web Appโปรเจกต์นี้คือการสร้างเว็บแอปพลิเคชันอย่างง่ายด้วย Python Flask Framework ซึ่งประกอบด้วยหน้าเว็บหลายหน้าที่เชื่อมโยงกันผ่านหน้า Dashboard หลักFeaturesDashboard: หน้าหลักสำหรับนำทางไปยังส่วนต่างๆ ของเว็บAttraction Page: แสดงข้อมูลสถานที่ท่องเที่ยวพร้อมรูปภาพTechnology Page: แสดงข้อมูลเทคโนโลยีที่น่าสนใจStudent ID Page: แสดงรหัสนักศึกษาDraw Pattern Page: รับ Input จากผู้ใช้ผ่านฟอร์ม (จัดการด้วย JavaScript) เพื่อวาด Pattern ตามที่กำหนดTechnology StackBackend: Python, FlaskFrontend: HTML, Bootstrap 5, JavaScriptCore Principle: ใช้หลักการ Post/Redirect/Get (PRG) ที่จัดการผ่าน JavaScript (window.location.replace) เพื่อแก้ไขปัญหา Browser History Stack ทำให้ปุ่ม Back ทำงานได้อย่างถูกต้อง🚀 วิธีการติดตั้งและรันโปรเจกต์1. Clone Repositorygit clone <your-repository-url>
cd <your-repository-name>
2. สร้าง Virtual Environment (แนะนำ)# Windows
python -m venv venv
venv\Scripts\activate

# macOS / Linux
python3 -m venv venv
source venv/bin/activate
3. ติดตั้ง Dependenciesโปรเจกต์นี้มีไฟล์ requirements.txt ที่ระบุ Library ที่ต้องใช้ทั้งหมด ติดตั้งได้ด้วยคำสั่งเดียว:pip install -r requirements.txt
4. รันเว็บเซิร์ฟเวอร์python app.py
5. เข้าดูผลลัพธ์เปิด Web Browser แล้วเข้าไปที่: http://127.0.0.1:5000