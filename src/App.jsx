import React from 'react'
import { Routes, Route, Link } from "react-router"

// ==========================================
// 1. หน้าแรก (Home Page)
// ==========================================
function Home() {
  return (
    <div style={{ textAlign: 'center', padding: '60px 20px', background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)', borderRadius: '20px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
      <h1 style={{ fontSize: '2.8rem', color: '#1a202c', marginBottom: '20px', lineHeight: '1.2' }}>
        ขับเคลื่อนธุรกิจของคุณ <br />
        <span style={{ color: '#4f46e5' }}>ด้วยซอฟต์แวร์ระดับพรีเมียม</span>
      </h1>
      <p style={{ fontSize: '1.1rem', color: '#4a5568', maxWidth: '600px', margin: '0 auto 30px auto', lineHeight: '1.6' }}>
        เราคือผู้เชี่ยวชาญด้านการพัฒนาเว็บไซต์ แอปพลิเคชัน และดีไซน์ UI/UX ที่จะช่วยเปลี่ยนไอเดียของคุณให้กลายเป็นความจริงที่จับต้องได้
      </p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '15px' }}>
        <Link to="/services" style={{ background: '#4f46e5', color: 'white', padding: '12px 24px', borderRadius: '10px', textDecoration: 'none', fontWeight: 'bold', boxShadow: '0 4px 6px rgba(79, 70, 229, 0.2)' }}>
          ดูบริการของเรา
        </Link>
        <Link to="/contact" style={{ background: 'white', color: '#4a5568', padding: '12px 24px', borderRadius: '10px', textDecoration: 'none', fontWeight: 'bold', border: '1px solid #cbd5e0' }}>
          ติดต่อโปรเจกต์ใหม่
        </Link>
      </div>
    </div>
  );
}

// ==========================================
// 2. หน้าเกี่ยวกับเรา (About Page)
// ==========================================
function About() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <h1 style={{ fontSize: '2rem', color: '#1a202c', borderBottom: '3px solid #4f46e5', paddingBottom: '10px', display: 'inline-block' }}>
        เกี่ยวกับเรา
      </h1>
      <p style={{ color: '#4a5568', lineHeight: '1.8', marginTop: '20px', fontSize: '1.05rem' }}>
        บริษัท TechVibe Studio ก่อตั้งขึ้นด้วยความตั้งใจที่จะส่งมอบเทคโนโลยีที่ทันสมัยและใช้งานง่ายให้กับธุรกิจทุกระดับ 
        ทีมงานของเราประกอบไปด้วย Developer และ Designer ไฟแรงที่พร้อมจะส่งมอบงานที่มีคุณภาพดีที่สุดให้กับคุณ
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginTop: '40px' }}>
        <div style={{ padding: '25px', background: 'white', borderRadius: '15px', boxShadow: '0 4px 6px rgba(0,0,0,0.02)', border: '1px solid #edf2f7' }}>
          <h3 style={{ color: '#4f46e5', margin: '0 0 10px 0', fontSize: '1.2rem' }}>💡 วิสัยทัศน์</h3>
          <p style={{ color: '#718096', fontSize: '0.95rem', margin: 0, lineHeight: '1.5' }}>เป็นผู้นำด้านการสร้างสรรค์นวัตกรรมดิจิทัลที่ตอบโจทย์ผู้ใช้งานจริงและสร้างการเติบโตอย่างยั่งยืน</p>
        </div>
        <div style={{ padding: '25px', background: 'white', borderRadius: '15px', boxShadow: '0 4px 6px rgba(0,0,0,0.02)', border: '1px solid #edf2f7' }}>
          <h3 style={{ color: '#4f46e5', margin: '0 0 10px 0', fontSize: '1.2rem' }}>🤝 คุณค่าของเรา</h3>
          <p style={{ color: '#718096', fontSize: '0.95rem', margin: 0, lineHeight: '1.5' }}>เราใส่ใจในทุกรายละเอียด ซื่อสัตย์ต่อลูกค้า และไม่เคยหยุดพัฒนาเทคโนโลยีให้ทันโลกอยู่เสมอ</p>
        </div>
      </div>
    </div>
  );
}

// ==========================================
// 3. หน้าบริการ (Services Page)
// ==========================================
function Services() {
  const serviceList = [
    { title: "Web Development", desc: "พัฒนาเว็บไซต์องค์กร E-commerce และ Web Application ด้วยเทคโนโลยีสมัยใหม่ รองรับทุกหน้าจอ", icon: "🌐" },
    { title: "Mobile App", desc: "ออกแบบและพัฒนาแอปพลิเคชันบน iOS และ Android ที่ลื่นไหล เสถียร และตอบโจทย์ผู้ใช้", icon: "📱" },
    { title: "UI/UX Design", desc: "ออกแบบหน้าตาการใช้งาน (UI) และประสบการณ์ผู้ใช้ (UX) ให้สวยงาม ทันสมัย และใช้งานง่าย", icon: "🎨" }
  ];

  return (
    <div style={{ padding: '20px' }}>
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ fontSize: '2rem', color: '#1a202c', margin: '0 0 10px 0' }}>บริการของเรา</h1>
        <p style={{ color: '#718096', margin: 0 }}>เลือกบริการที่ใช่ เพื่อนำธุรกิจของคุณก้าวไปสู่อีกขั้นของโลกดิจิทัล</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
        {serviceList.map((item, index) => (
          <div key={index} style={{ background: 'white', padding: '30px', borderRadius: '20px', border: '1px solid #edf2f7', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.05)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ fontSize: '2.5rem', marginBottom: '15px' }}>{item.icon}</div>
              <h3 style={{ fontSize: '1.25rem', color: '#2d3748', margin: '0 0 10px 0' }}>{item.title}</h3>
              <p style={{ color: '#718096', fontSize: '0.95rem', lineHeight: '1.6', margin: '0 0 20px 0' }}>{item.desc}</p>
            </div>
            <span style={{ color: '#4f46e5', fontWeight: 'bold', fontSize: '0.9rem', cursor: 'pointer', marginTop: 'auto' }}>
              รายละเอียดเพิ่มเติม &rarr;
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ==========================================
// 4. หน้าติดต่อเรา (Contact Page - หน้าที่ 4 ที่เพิ่มใหม่)
// ==========================================
function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("ส่งข้อความสำเร็จ! ทีมงานจะติดต่อกลับโดยเร็วที่สุด");
  };

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '20px' }}>
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ fontSize: '2rem', color: '#1a202c', margin: '0 0 10px 0' }}>ติดต่อเรา</h1>
        <p style={{ color: '#718096', margin: 0 }}>มีโปรเจกต์ในใจหรือต้องการคำปรึกษา? ส่งข้อความหาเราได้เลย!</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
        {/* ฝั่งข้อมูลการติดต่อ */}
        <div style={{ background: '#4f46e5', color: 'white', padding: '40px', borderRadius: '20px', boxShadow: '0 10px 20px rgba(79, 70, 229, 0.15)' }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '25px', color: '#ffffff' }}>ข้อมูลการติดต่อ</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <p style={{ margin: 0, fontSize: '1rem' }}>📍 123 อาคารซอฟต์แวร์พลาซ่า ชั้น 5 กรุงเทพฯ 10110</p>
            <p style={{ margin: 0, fontSize: '1rem' }}>📞 02-123-4567</p>
            <p style={{ margin: 0, fontSize: '1rem' }}>✉️ contact@techvibestudio.com</p>
            <p style={{ margin: 0, fontSize: '1rem' }}>⏰ จันทร์ - ศุกร์ | 09:00 - 18:00 น.</p>
          </div>
        </div>

        {/* ฝั่งฟอร์มส่งข้อความ */}
        <form onSubmit={handleSubmit} style={{ background: 'white', padding: '30px', borderRadius: '20px', border: '1px solid #edf2f7', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.05)', display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500', fontSize: '0.9rem' }}>ชื่อของคุณ</label>
            <input type="text" placeholder="สมชาย ใจดี" required style={{ width: '100%', padding: '10px 15px', borderRadius: '8px', border: '1px solid #cbd5e0', boxSizing: 'border-box' }} />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500', fontSize: '0.9rem' }}>อีเมล</label>
            <input type="email" placeholder="somchai@email.com" required style={{ width: '100%', padding: '10px 15px', borderRadius: '8px', border: '1px solid #cbd5e0', boxSizing: 'border-box' }} />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500', fontSize: '0.9rem' }}>รายละเอียดโปรเจกต์</label>
            <textarea rows="4" placeholder="พิมพ์ข้อความของคุณที่นี่..." required style={{ width: '100%', padding: '10px 15px', borderRadius: '8px', border: '1px solid #cbd5e0', boxSizing: 'border-box', resize: 'none' }}></textarea>
          </div>
          <button type="submit" style={{ background: '#4f46e5', color: 'white', padding: '12px', borderRadius: '8px', border: 'none', fontWeight: 'bold', cursor: 'pointer', marginTop: '10px', boxShadow: '0 4px 6px rgba(79, 70, 229, 0.2)' }}>
            ส่งข้อความ
          </button>
        </form>
      </div>
    </div>
  );
}

// ==========================================
// 5. หน้าไม่พบข้อมูล (NotFound Page)
// ==========================================
function NotFound() {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1 style={{ fontSize: '4rem', color: '#e53e3e', margin: 0 }}>404</h1>
      <p style={{ fontSize: '1.2rem', color: '#4a5568' }}>ไม่พบหน้าเว็บที่คุณต้องการ</p>
      <Link to="/" style={{ color: '#4f46e5', textDecoration: 'none', fontWeight: 'bold' }}>กลับหน้าแรก</Link>
    </div>
  );
}

// ==========================================
// ไฟล์หลัก (App Component)
// ==========================================
export default function App() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f7fafc', color: '#2d3748', fontFamily: 'sans-serif', display: 'flex', flexDirection: 'column' }}>
      
      {/* Navigation Bar */}
      <nav style={{ backgroundColor: 'white', boxShadow: '0 2px 4px rgba(0,0,0,0.04)', position: 'sticky', top: 0, zIndex: 100 }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '15px' }}>
          <div style={{ fontSize: '1.4rem', fontWeight: 'bold', color: '#4f46e5' }}>TechVibe Studio</div>
          <div style={{ display: 'flex', gap: '25px' }}>
            <Link to="/" style={{ textDecoration: 'none', color: '#4a5568', fontWeight: '500' }}>หน้าแรก</Link>
            <Link to="/about" style={{ textDecoration: 'none', color: '#4a5568', fontWeight: '500' }}>เกี่ยวกับเรา</Link>
            <Link to="/services" style={{ textDecoration: 'none', color: '#4a5568', fontWeight: '500' }}>บริการของเรา</Link>
            <Link to="/contact" style={{ textDecoration: 'none', color: '#4a5568', fontWeight: '500' }}>ติดต่อเรา</Link> {/* เมนูหน้าที่ 4 */}
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <main style={{ maxWidth: '1100px', width: '100%', margin: '40px auto', padding: '0 20px', flex: 1, boxSizing: 'border-box' }}>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} /> {/* Route หน้าที่ 4 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer style={{ backgroundColor: '#1a202c', color: '#a0aec0', padding: '20px', textAlign: 'center', fontSize: '0.9rem', marginTop: '60px' }}>
        &copy; 2026 TechVibe Studio. All rights reserved.
      </footer>

    </div>
  );
} 