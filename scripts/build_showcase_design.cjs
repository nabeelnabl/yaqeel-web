const fs = require('fs');
const path = require('path');

// Load mockup data
const mockupData = JSON.parse(fs.readFileSync('extracted_design/mockup_data.json', 'utf8'));

// Load current design HTML
const originalHtml = fs.readFileSync('extracted_design/final_design.html', 'utf8');

// The old .blue element
const oldBlueRegex = /<div class="blue">[\s\S]*?<\/div><\/div><\/section>/;

// The new horizontal mockup showcase markup
const newMockupShowcase = `
<div class="mockup-theater" id="mobile-showcase">
  <!-- Header / Navigation Bar -->
  <div class="th-head">
    <div class="th-meta">
      <span class="eyebrow" style="color:#6D96FF">Mobile-First Architecture</span>
      <h3 class="serif" style="color:#fff;font-size:clamp(24px,3.2vw,36px);margin-top:6px;line-height:1.2">Your whole institute, run on mobile.</h3>
      <p style="color:rgba(255,255,255,0.72);font-size:14px;margin-top:6px;max-width:34em">No clunky desktop computers or training seminars. Every daily task is designed for teachers and management on handheld smartphones.</p>
    </div>
    <!-- Horizontal Module Tabs -->
    <div class="th-tabs" role="tablist" aria-label="Mobile modules">
      <button class="th-tab active" data-index="0" type="button" role="tab" aria-selected="true"><span class="th-dot" style="background:#1FA855"></span>Attendance</button>
      <button class="th-tab" data-index="1" type="button" role="tab" aria-selected="false"><span class="th-dot" style="background:#2F6BFF"></span>Fees & Ledger</button>
      <button class="th-tab" data-index="2" type="button" role="tab" aria-selected="false"><span class="th-dot" style="background:#7C5CFF"></span>Exams & Marks</button>
      <button class="th-tab" data-index="3" type="button" role="tab" aria-selected="false"><span class="th-dot" style="background:#F5A524"></span>Teacher Payroll</button>
    </div>
  </div>

  <!-- Horizontal Scrolling Track -->
  <div class="th-track" id="thTrack">
    
    <!-- Slide 0: Attendance -->
    <div class="th-slide" data-slide="0">
      <div class="th-card">
        <div class="th-content">
          <div class="th-badge" style="--bc:#1FA855">Daily Roll Call</div>
          <h4>Mark 60 students in 10 seconds. Parents alerted instantly.</h4>
          <p>Tap a student's name to record absence. Automated WhatsApp notifications reach parents on their own with zero awkward phone calls or manual register tearing.</p>
          <div class="th-tags">
            <span>⚡ 10-sec class roll call</span>
            <span>💬 Auto WhatsApp alerts</span>
            <span>📋 Live absentee summary</span>
          </div>
        </div>
        <div class="th-img-box">
          <img src="${mockupData.attendance.b64}" alt="Yaqeel Attendance Mobile Mockup" loading="lazy">
        </div>
      </div>
    </div>

    <!-- Slide 1: Fees -->
    <div class="th-slide" data-slide="1">
      <div class="th-card">
        <div class="th-content">
          <div class="th-badge" style="--bc:#2F6BFF">Fee Ledger & Dues</div>
          <h4>Real-time collections & WhatsApp receipts with QR code.</h4>
          <p>See paid, pending and overdue balances class-wise in real time. Generate institute-branded receipts with instant verification QR codes in one tap.</p>
          <div class="th-tags">
            <span>💳 Real-time fee tracking</span>
            <span>🧾 QR-verified digital receipts</span>
            <span>📲 Gentle WhatsApp reminders</span>
          </div>
        </div>
        <div class="th-img-box">
          <img src="${mockupData.fees.b64}" alt="Yaqeel Fees Mobile Mockup" loading="lazy">
        </div>
      </div>
    </div>

    <!-- Slide 2: Exams -->
    <div class="th-slide" data-slide="2">
      <div class="th-card">
        <div class="th-content">
          <div class="th-badge" style="--bc:#7C5CFF">Examinations & Reports</div>
          <h4>Marks entry, instant ranks & 1-click PDF cards.</h4>
          <p>Enter test scores directly on mobile. Overall percentages, class averages and rankings calculate instantly, ready to be dispatched to parents on WhatsApp.</p>
          <div class="th-tags">
            <span>📄 Branded PDF report cards</span>
            <span>📊 Auto grade & rank calculation</span>
            <span>📈 Subject-wise performance</span>
          </div>
        </div>
        <div class="th-img-box">
          <img src="${mockupData.exams.b64}" alt="Yaqeel Exams Mobile Mockup" loading="lazy">
        </div>
      </div>
    </div>

    <!-- Slide 3: Payroll -->
    <div class="th-slide" data-slide="3">
      <div class="th-card">
        <div class="th-content">
          <div class="th-badge" style="--bc:#111">Teacher Payroll</div>
          <h4>Lecture hours to payout slips on phone, no spreadsheets.</h4>
          <p>Log faculty working days, lecture hours and monthly payout statements cleanly. Teachers mark attendance and enter grades without ever viewing fee data.</p>
          <div class="th-tags">
            <span>⏱️ Lecture hours tracker</span>
            <span>📅 Monthly attendance calendar</span>
            <span>🔒 Secure role isolation</span>
          </div>
        </div>
        <div class="th-img-box">
          <img src="${mockupData.payroll.b64}" alt="Yaqeel Payroll Mobile Mockup" loading="lazy">
        </div>
      </div>
    </div>

  </div>

  <!-- Footer controls -->
  <div class="th-foot">
    <div class="th-dots" id="thDots">
      <button class="th-dot-btn active" data-index="0" aria-label="Go to Slide 1"></button>
      <button class="th-dot-btn" data-index="1" aria-label="Go to Slide 2"></button>
      <button class="th-dot-btn" data-index="2" aria-label="Go to Slide 3"></button>
      <button class="th-dot-btn" data-index="3" aria-label="Go to Slide 4"></button>
    </div>
    <div class="th-arrows">
      <button class="th-arrow prev" id="thPrev" aria-label="Previous slide">‹</button>
      <button class="th-arrow next" id="thNext" aria-label="Next slide">›</button>
    </div>
  </div>
</div>
</div></section>
`;

// Additional CSS for the mockup theater
const showcaseCss = `
/* Mockup Theater - Mobile Showcase */
.mockup-theater{
  margin-top: 36px;
  background: radial-gradient(120% 120% at 50% 0%, #15244C 0%, #0C152E 50%, #060B18 100%);
  border: 1px solid rgba(255,255,255,0.12);
  border-radius: 28px;
  padding: 36px 32px 28px;
  color: #fff;
  position: relative;
  overflow: hidden;
  box-shadow: 0 32px 64px -24px rgba(6,12,32,0.5);
}
.th-head{
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 24px;
  flex-wrap: wrap;
  padding-bottom: 24px;
  border-bottom: 1px solid rgba(255,255,255,0.1);
}
.th-tabs{
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  background: rgba(255,255,255,0.06);
  padding: 5px;
  border-radius: 12px;
  border: 1px solid rgba(255,255,255,0.08);
}
.th-tab{
  background: transparent;
  border: 1px solid transparent;
  color: rgba(255,255,255,0.65);
  font: 500 13px/1 Geist,system-ui,sans-serif;
  padding: 8px 14px;
  border-radius: 8px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 7px;
  transition: all .2s ease;
}
.th-tab:hover{
  color: #fff;
  background: rgba(255,255,255,0.08);
}
.th-tab.active{
  background: #fff;
  color: #0A0A0A;
  border-color: #fff;
  font-weight: 600;
  box-shadow: 0 4px 12px rgba(0,0,0,0.25);
}
.th-dot{
  width: 6px;
  height: 6px;
  border-radius: 50%;
  display: inline-block;
}
.th-track{
  display: flex;
  gap: 24px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scrollbar-width: none;
  -webkit-overflow-scrolling: touch;
  padding: 32px 0 20px;
}
.th-track::-webkit-scrollbar{
  display: none;
}
.th-slide{
  flex: 0 0 100%;
  scroll-snap-align: center;
  scroll-snap-stop: always;
}
.th-card{
  display: grid;
  grid-template-columns: 1.05fr 1fr;
  gap: 40px;
  align-items: center;
  background: rgba(255,255,255,0.03);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 20px;
  padding: 32px 36px;
  min-height: 480px;
}
.th-badge{
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: .08em;
  text-transform: uppercase;
  color: #fff;
  background: var(--bc, #2F6BFF);
  padding: 4px 10px;
  border-radius: 6px;
  margin-bottom: 16px;
}
.th-content h4{
  font-size: clamp(24px, 2.6vw, 34px);
  line-height: 1.15;
  color: #fff;
  font-weight: 500;
  letter-spacing: -.02em;
}
.th-content p{
  color: rgba(255,255,255,0.72);
  font-size: 15px;
  line-height: 1.6;
  margin-top: 14px;
  max-width: 32em;
}
.th-tags{
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 24px;
}
.th-tags span{
  font-size: 12px;
  color: rgba(255,255,255,0.85);
  background: rgba(255,255,255,0.08);
  border: 1px solid rgba(255,255,255,0.12);
  padding: 6px 12px;
  border-radius: 8px;
  font-weight: 500;
}
.th-img-box{
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
.th-img-box img{
  width: 100%;
  max-width: 440px;
  max-height: 440px;
  height: auto;
  object-fit: contain;
  filter: drop-shadow(0 20px 30px rgba(0,0,0,0.45));
  transition: transform .3s ease;
}
.th-card:hover .th-img-box img{
  transform: translateY(-4px) scale(1.02);
}
.th-foot{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 8px;
  padding-top: 16px;
  border-top: 1px solid rgba(255,255,255,0.06);
}
.th-dots{
  display: flex;
  gap: 8px;
}
.th-dot-btn{
  width: 28px;
  height: 6px;
  border-radius: 99px;
  background: rgba(255,255,255,0.2);
  border: 0;
  cursor: pointer;
  transition: all .2s ease;
  padding: 0;
}
.th-dot-btn.active{
  background: #fff;
  width: 44px;
}
.th-arrows{
  display: flex;
  gap: 8px;
}
.th-arrow{
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: rgba(255,255,255,0.08);
  border: 1px solid rgba(255,255,255,0.14);
  color: #fff;
  font-size: 20px;
  line-height: 1;
  display: grid;
  place-items: center;
  cursor: pointer;
  transition: all .2s;
  padding: 0;
}
.th-arrow:hover{
  background: rgba(255,255,255,0.2);
  transform: scale(1.05);
}
@media(max-width:860px){
  .mockup-theater{
    padding: 24px 16px 20px;
    border-radius: 22px;
    margin-top: 24px;
  }
  .th-head{
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }
  .th-tabs{
    width: 100%;
    overflow-x: auto;
    flex-wrap: nowrap;
    padding: 4px;
    scrollbar-width: none;
    -webkit-overflow-scrolling: touch;
  }
  .th-tabs::-webkit-scrollbar{
    display: none;
  }
  .th-tab{
    flex-shrink: 0;
    font-size: 12px;
    padding: 7px 12px;
  }
  .th-card{
    grid-template-columns: 1fr;
    gap: 20px;
    padding: 20px 18px 24px;
    min-height: auto;
  }
  .th-img-box{
    order: -1;
  }
  .th-img-box img{
    max-width: 290px;
    max-height: 290px;
  }
  .th-content h4{
    font-size: 22px;
  }
  .th-content p{
    font-size: 14px;
  }
  .th-tags{
    gap: 6px;
  }
  .th-tags span{
    font-size: 11px;
    padding: 5px 9px;
  }
}
`;

// Additional JS for the horizontal slider
const showcaseJs = `
// Horizontal Mockup Showcase Controls
(function(){
  var track = document.getElementById("thTrack");
  var tabs = document.querySelectorAll(".th-tab");
  var dots = document.querySelectorAll(".th-dot-btn");
  var slides = document.querySelectorAll(".th-slide");
  if (!track || !slides.length) return;

  function goToSlide(idx) {
    if (idx < 0 || idx >= slides.length) return;
    var target = slides[idx];
    track.scrollTo({ left: target.offsetLeft - track.offsetLeft, behavior: "smooth" });
    updateActive(idx);
  }

  function updateActive(idx) {
    tabs.forEach(function(t, i){ t.classList.toggle("active", i === idx); t.setAttribute("aria-selected", i === idx); });
    dots.forEach(function(d, i){ d.classList.toggle("active", i === idx); });
  }

  tabs.forEach(function(t){
    t.addEventListener("click", function(){ goToSlide(+t.getAttribute("data-index")); });
  });

  dots.forEach(function(d){
    d.addEventListener("click", function(){ goToSlide(+d.getAttribute("data-index")); });
  });

  var prevBtn = document.getElementById("thPrev");
  var nextBtn = document.getElementById("thNext");

  function getCurrentIdx() {
    var sl = track.scrollLeft;
    var w = track.offsetWidth || 1;
    return Math.round(sl / w);
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", function(){
      var cur = getCurrentIdx();
      goToSlide(Math.max(0, cur - 1));
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", function(){
      var cur = getCurrentIdx();
      goToSlide(Math.min(slides.length - 1, cur + 1));
    });
  }

  var scrollTimer = null;
  track.addEventListener("scroll", function(){
    if (scrollTimer) clearTimeout(scrollTimer);
    scrollTimer = setTimeout(function(){
      var idx = getCurrentIdx();
      updateActive(idx);
    }, 50);
  }, { passive: true });
})();
`;

// Inject CSS before </style>
let updatedHtml = originalHtml.replace('</style>', showcaseCss + '\n</style>');

// Replace .blue with newMockupShowcase
if (oldBlueRegex.test(updatedHtml)) {
  updatedHtml = updatedHtml.replace(oldBlueRegex, newMockupShowcase);
  console.log('Replaced .blue with horizontal mockup theater!');
} else {
  console.error('Could not find .blue regex match!');
  process.exit(1);
}

// Inject JS before </body>
updatedHtml = updatedHtml.replace('</body>', '<script>\n' + showcaseJs + '\n</script>\n</body>');

// Save updated files
fs.writeFileSync('extracted_design/final_design.html', updatedHtml, 'utf8');
fs.writeFileSync('index.html', updatedHtml, 'utf8');

const downloadPathEnDash = 'C:/Users/nabee/Downloads/Yaqeel \u2013 Attendance, fees and exams for schools and tuition centres.html';
const downloadPathHyphen = 'C:/Users/nabee/Downloads/Yaqeel - Attendance, fees and exams for schools and tuition centres.html';

fs.writeFileSync(downloadPathEnDash, updatedHtml, 'utf8');
fs.writeFileSync(downloadPathHyphen, updatedHtml, 'utf8');

console.log('Successfully saved to all files! Final HTML length:', updatedHtml.length);
