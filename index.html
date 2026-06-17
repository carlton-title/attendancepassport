<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
<title>Attendance Passport</title>
<!-- APP VERSION: v3.1 WELCOME-FIX -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js"></script>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@500;600;700;800&family=Sarabun:wght@400;500;600;700&family=Space+Mono:wght@400;700&display=swap');
  :root{
    --paper:#FBF6EC;--paper-edge:#F0E7D4;--ink:#1F2B3E;--ink-soft:#5B6B85;
    --green:#3FA34D;--green-bg:#E5F5E8;--blue:#3B6FB6;--blue-bg:#E7EFFB;
    --red:#D6483F;--red-bg:#FBE9E7;--pink:#D6437F;--pink-bg:#FCE7F0;
    --gold:#E8A23D;--gold-bg:#FDF1DE;--line:#E3D9C4;
    --yellow:#F5C518;--yellow-dark:#c9a000;
    --purple:#7B4FBF;--purple-dark:#5c3a8f;--purple-bg:#F0E8FA;
  }
  *{box-sizing:border-box;}
  html,body{margin:0;padding:0;}
  body{font-family:'Sarabun',sans-serif;background:var(--paper);background-image:radial-gradient(circle at 1px 1px,rgba(31,43,62,0.04) 1px,transparent 0);background-size:22px 22px;color:var(--ink);min-height:100vh;-webkit-font-smoothing:antialiased;}
  .app{max-width:880px;margin:0 auto;padding:20px 16px 60px;}
  header{display:flex;align-items:center;justify-content:space-between;margin-bottom:18px;flex-wrap:wrap;gap:12px;}
  .brand{display:flex;align-items:center;gap:12px;}
  .brand-mark{width:46px;height:46px;border-radius:12px;background:var(--ink);color:var(--paper);display:flex;align-items:center;justify-content:center;font-family:'Baloo 2',sans-serif;font-weight:800;font-size:22px;transform:rotate(-4deg);box-shadow:3px 3px 0 var(--gold);}
  .brand-text h1{font-family:'Baloo 2',sans-serif;font-weight:800;font-size:1.5rem;margin:0;letter-spacing:0.5px;}
  .brand-text p{margin:0;font-size:0.8rem;color:var(--ink-soft);font-weight:500;}
  .mode-switch{display:flex;gap:6px;background:#fff;border:2px solid var(--ink);border-radius:999px;padding:4px;box-shadow:3px 3px 0 var(--line);}
  .mode-switch button{border:none;background:transparent;font-family:'Baloo 2',sans-serif;font-weight:700;font-size:0.85rem;padding:8px 18px;border-radius:999px;cursor:pointer;color:var(--ink-soft);transition:all .15s;}
  .mode-switch button.active{background:var(--ink);color:var(--paper);}
  .card{background:#fff;border:2px solid var(--ink);border-radius:18px;padding:22px;margin-bottom:18px;box-shadow:5px 5px 0 var(--line);position:relative;}
  .card h2{font-family:'Baloo 2',sans-serif;font-weight:700;font-size:1.15rem;margin:0 0 14px;display:flex;align-items:center;gap:8px;}
  .eyebrow{font-family:'Space Mono',monospace;font-size:0.7rem;letter-spacing:2px;text-transform:uppercase;color:var(--ink-soft);margin:0 0 4px;font-weight:700;}
  label{font-size:0.8rem;font-weight:600;color:var(--ink-soft);display:block;margin-bottom:4px;}
  select,input{font-family:'Sarabun',sans-serif;font-size:0.95rem;padding:10px 12px;border:2px solid var(--ink);border-radius:10px;background:#fff;color:var(--ink);width:100%;}
  .row{display:flex;gap:12px;flex-wrap:wrap;}
  .row>div{flex:1;min-width:120px;}
  .btn{font-family:'Baloo 2',sans-serif;font-weight:700;font-size:0.95rem;border:2px solid var(--ink);border-radius:12px;padding:12px 20px;cursor:pointer;background:#fff;color:var(--ink);box-shadow:3px 3px 0 var(--ink);transition:transform .08s;display:inline-flex;align-items:center;gap:8px;}
  .btn:active{transform:translate(2px,2px);box-shadow:1px 1px 0 var(--ink);}
  .btn-primary{background:var(--ink);color:var(--paper);}
  .btn-green{background:var(--green);color:#fff;border-color:#2c7a37;box-shadow:3px 3px 0 #2c7a37;}
  .btn-blue{background:var(--blue);color:#fff;border-color:#2a5489;box-shadow:3px 3px 0 #2a5489;}
  .btn-red{background:var(--red);color:#fff;border-color:#a8362f;box-shadow:3px 3px 0 #a8362f;}
  .btn-pink{background:var(--pink);color:#fff;border-color:#a8326a;box-shadow:3px 3px 0 #a8326a;}
  .btn-purple{background:var(--purple);color:#fff;border-color:var(--purple-dark);box-shadow:3px 3px 0 var(--purple-dark);}
  .btn-yellow{background:var(--yellow);color:#000;border-color:var(--yellow-dark);box-shadow:3px 3px 0 var(--yellow-dark);}
  .btn-sm{padding:6px 12px;font-size:0.78rem;border-radius:8px;box-shadow:2px 2px 0 var(--ink);}
  .btn-sm:active{box-shadow:1px 1px 0 var(--ink);transform:translate(1px,1px);}
  .btn[disabled]{opacity:0.45;cursor:not-allowed;}
  .qr-wrap{display:flex;flex-direction:column;align-items:center;gap:12px;padding:10px 0;}
  #qrcode{padding:16px;background:#fff;border:3px solid var(--ink);border-radius:16px;box-shadow:5px 5px 0 var(--gold);}
  .qr-link{font-family:'Space Mono',monospace;font-size:0.75rem;color:var(--ink-soft);word-break:break-all;text-align:center;background:var(--paper-edge);padding:8px 12px;border-radius:8px;max-width:100%;}
  .session-banner{display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:10px;background:var(--gold-bg);border:2px dashed var(--gold);border-radius:12px;padding:12px 16px;margin-bottom:14px;}
  .session-banner .label{font-family:'Baloo 2',sans-serif;font-weight:700;font-size:0.95rem;}
  .session-banner .sub{font-size:0.78rem;color:var(--ink-soft);font-family:'Space Mono',monospace;}
  .stamp{width:34px;height:34px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:1.05rem;font-weight:800;flex-shrink:0;border:2.5px solid currentColor;}
  .stamp-green{color:var(--green);background:var(--green-bg);}
  .stamp-blue{color:var(--blue);background:var(--blue-bg);}
  .stamp-red{color:var(--red);background:var(--red-bg);}
  .stamp-pink{color:var(--red);background:var(--pink-bg);border-color:var(--pink);}
  .stamp-purple{color:var(--purple);background:var(--purple-bg);border-color:var(--purple);}
  .stamp-gray{color:#9aa3b2;background:#F1F2F5;border-style:dashed;}
  .table-wrap{overflow-x:auto;border:2px solid var(--ink);border-radius:14px;}
  table{width:100%;border-collapse:collapse;font-size:0.85rem;min-width:680px;}
  thead th{background:var(--ink);color:var(--paper);font-family:'Baloo 2',sans-serif;font-weight:700;padding:10px 8px;text-align:left;font-size:0.78rem;text-transform:uppercase;letter-spacing:0.5px;position:sticky;top:0;}
  tbody td{padding:8px;border-bottom:1px solid var(--line);vertical-align:middle;}
  tbody tr:nth-child(even){background:#FCFAF4;}
  tbody tr:hover{background:var(--gold-bg);}
  .col-no{width:36px;text-align:center;font-family:'Space Mono',monospace;color:var(--ink-soft);}
  .col-id{font-family:'Space Mono',monospace;font-size:0.8rem;}
  .col-status{display:flex;align-items:center;gap:8px;}
  .remark-text{font-size:0.72rem;color:var(--ink-soft);}
  .ts-text{font-size:0.68rem;color:var(--ink-soft);font-family:'Space Mono',monospace;line-height:1.3;}
  .status-actions{display:flex;gap:4px;}
  .status-actions .btn-sm{width:64px;justify-content:center;text-align:center;padding:6px 4px;}
  .stats{display:flex;gap:10px;flex-wrap:wrap;margin-bottom:14px;}
  .stat{flex:1;min-width:90px;border:2px solid var(--ink);border-radius:12px;padding:10px 14px;text-align:center;background:#fff;}
  .stat .num{font-family:'Baloo 2',sans-serif;font-weight:800;font-size:1.6rem;}
  .stat .lbl{font-size:0.7rem;color:var(--ink-soft);text-transform:uppercase;letter-spacing:1px;font-weight:600;}
  .stat.green .num{color:var(--green);}
  .stat.blue .num{color:var(--blue);}
  .stat.red .num{color:var(--red);}
  .stat.pink .num{color:var(--pink);}
  .passport{background:#fff;border:3px solid var(--ink);border-radius:20px;box-shadow:6px 6px 0 var(--gold);overflow:hidden;}
  .passport-header{background:var(--ink);color:var(--paper);padding:20px 22px;display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:10px;}
  .passport-header h2{margin:0;font-family:'Baloo 2',sans-serif;font-size:1.3rem;}
  .passport-header .sub{font-size:0.8rem;opacity:0.75;margin-top:4px;}
  .passport-id{font-family:'Space Mono',monospace;background:rgba(255,255,255,0.12);padding:6px 12px;border-radius:8px;font-size:0.85rem;}
  .passport-body{padding:18px 22px;}
  .week-block{margin-bottom:18px;}
  .week-title{font-family:'Baloo 2',sans-serif;font-weight:700;font-size:0.95rem;display:flex;align-items:baseline;gap:8px;margin-bottom:10px;border-bottom:2px dotted var(--line);padding-bottom:6px;}
  .stamp-row{display:flex;align-items:center;gap:12px;padding:8px 0;flex-wrap:wrap;}
  .stamp-row .meta{flex:1;min-width:160px;}
  .stamp-row .meta .status-name{font-weight:700;font-size:0.85rem;}
  .stamp-row .meta .status-detail{font-size:0.72rem;color:var(--ink-soft);font-family:'Space Mono',monospace;}
  .current-week{background:var(--gold-bg);border:2px solid var(--gold);border-radius:14px;padding:12px 14px;margin-bottom:16px;}
  .current-week .week-title{border-bottom:2px dotted rgba(232,162,61,0.4);}
  .this-week-badge{font-family:'Space Mono',monospace;font-size:0.65rem;letter-spacing:1.5px;text-transform:uppercase;background:var(--ink);color:var(--gold);padding:3px 9px;border-radius:999px;font-weight:700;margin-right:4px;}
  .history-section{margin-top:4px;}
  .history-label{font-family:'Space Mono',monospace;font-size:0.7rem;letter-spacing:2px;text-transform:uppercase;color:var(--ink-soft);font-weight:700;margin-bottom:8px;}
  .week-accordion{border:2px solid var(--line);border-radius:12px;margin-bottom:8px;overflow:hidden;background:#fff;}
  .week-accordion summary{list-style:none;cursor:pointer;padding:10px 14px;display:flex;align-items:center;justify-content:space-between;gap:10px;flex-wrap:wrap;font-family:'Baloo 2',sans-serif;font-weight:700;font-size:0.88rem;}
  .week-accordion summary::-webkit-details-marker{display:none;}
  .week-accordion summary::before{content:'▸';display:inline-block;margin-right:8px;color:var(--ink-soft);transition:transform .15s;font-size:0.75rem;}
  .week-accordion[open] summary::before{transform:rotate(90deg);}
  .week-accordion .acc-title .range{font-size:0.72rem;color:var(--ink-soft);font-weight:500;font-family:'Space Mono',monospace;margin-left:6px;}
  .week-accordion .acc-summary{display:flex;gap:10px;font-family:'Space Mono',monospace;font-size:0.78rem;font-weight:700;}
  .acc-complete{color:var(--ink-soft);text-transform:uppercase;letter-spacing:1px;font-size:0.7rem;}
  .week-accordion .acc-content{padding:0 14px 10px;border-top:2px dotted var(--line);}
  .rep-green{color:var(--green);}
  .rep-blue{color:var(--blue);}
  .rep-red{color:var(--red);}
  .rep-pink{color:var(--pink);}
  .ds-section{border:2px solid var(--ink);border-radius:14px;margin-bottom:16px;overflow:hidden;background:#fff;}
  .ds-section summary.ds-section-header::-webkit-details-marker{display:none;}
  .ds-section summary.ds-section-header{list-style:none;}
  .ds-section-header{background:var(--ink);color:var(--paper);padding:10px 16px;font-family:'Baloo 2',sans-serif;font-weight:700;font-size:1rem;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px;}
  .ds-section-header .ds-stats{font-family:'Space Mono',monospace;font-size:0.78rem;font-weight:700;display:flex;gap:10px;color:var(--paper);}
  .ds-table{width:100%;border-collapse:collapse;font-size:0.82rem;}
  .ds-table th,.ds-table td{padding:6px 10px;text-align:left;border-bottom:1px solid var(--line);}
  .ds-table th{font-family:'Space Mono',monospace;font-size:0.68rem;letter-spacing:1px;text-transform:uppercase;color:var(--ink-soft);font-weight:700;background:var(--paper-edge);}
  .nc-marker{display:flex;align-items:flex-start;gap:10px;padding:10px 12px;border-radius:12px;background:var(--paper-edge);border:2px solid var(--line);margin-bottom:8px;}
  .nc-marker .nc-icon{font-size:1.1rem;margin-top:1px;}
  .nc-marker .nc-text{flex:1;}
  .nc-marker .nc-title{font-family:'Baloo 2',sans-serif;font-weight:700;font-size:0.88rem;}
  .nc-marker .nc-sub{font-size:0.75rem;color:var(--ink-soft);margin-top:2px;}
  .nc-banner{background:var(--paper-edge);border:2px dashed var(--line);border-radius:12px;padding:14px 16px;text-align:center;}
  .nc-banner .nc-banner-title{font-family:'Baloo 2',sans-serif;font-weight:800;font-size:1.05rem;margin-bottom:4px;}
  .nc-banner .nc-banner-sub{font-size:0.82rem;color:var(--ink-soft);}
  textarea.nc-input{font-family:'Sarabun',sans-serif;font-size:0.9rem;padding:10px 12px;border:2px solid var(--ink);border-radius:10px;background:#fff;color:var(--ink);width:100%;min-height:60px;resize:vertical;}
  .empty{text-align:center;padding:40px 20px;color:var(--ink-soft);}
  .empty .big{font-size:2.5rem;margin-bottom:8px;}
  .hint{font-size:0.78rem;color:var(--ink-soft);margin-top:8px;}
  .pill{display:inline-block;font-family:'Space Mono',monospace;font-size:0.7rem;background:var(--paper-edge);border-radius:999px;padding:3px 10px;border:1px solid var(--line);}
  .flex-between{display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:10px;}
  .toast{position:fixed;bottom:20px;left:50%;transform:translateX(-50%);background:var(--ink);color:var(--paper);padding:12px 22px;border-radius:999px;font-family:'Baloo 2',sans-serif;font-weight:700;font-size:0.9rem;box-shadow:0 4px 14px rgba(0,0,0,0.25);z-index:999;opacity:0;pointer-events:none;transition:opacity .25s,transform .25s;}
  .toast.show{opacity:1;transform:translateX(-50%) translateY(-4px);}
  .qr-fullscreen{position:fixed;inset:0;background:var(--paper);display:none;align-items:center;justify-content:center;z-index:1000;cursor:pointer;}
  .qr-fullscreen.show{display:flex;}
  .qrf-content{display:flex;flex-direction:column;align-items:center;gap:24px;text-align:center;padding:20px;}
  .qrf-label{font-family:'Baloo 2',sans-serif;font-weight:800;font-size:2rem;color:var(--ink);}
  #qrcodeFullscreen{background:#fff;padding:24px;border-radius:24px;border:4px solid var(--ink);box-shadow:8px 8px 0 var(--gold);}
  #qrcodeFullscreen img,#qrcodeFullscreen canvas{width:min(70vw,70vh)!important;height:min(70vw,70vh)!important;}
  .qrf-hint{font-family:'Space Mono',monospace;font-size:0.95rem;color:var(--ink-soft);letter-spacing:1px;}
  .modal-overlay{position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(31,43,62,0.45);display:flex;align-items:center;justify-content:center;z-index:1000;padding:16px;}
  .modal-box{max-width:420px;width:100%;margin:0;}
  .session-info-card{background:var(--ink);color:var(--paper);border-color:var(--ink);box-shadow:5px 5px 0 var(--gold);}
  .session-info-card .eyebrow{color:var(--gold);font-family:'Baloo 2',sans-serif;font-weight:700;font-size:0.95rem;letter-spacing:0;text-transform:none;margin:0 0 12px;}
  .session-info-grid{display:flex;align-items:center;gap:20px;flex-wrap:wrap;}
  .si-clock{display:flex;flex-direction:row;align-items:baseline;justify-content:center;gap:8px;background:rgba(255,255,255,0.06);border:2px solid rgba(255,255,255,0.15);border-radius:14px;padding:14px 20px;min-width:140px;}
  .si-time{font-family:'Space Mono',monospace;font-weight:700;font-size:1.7rem;letter-spacing:1px;}
  .si-ampm{font-family:'Space Mono',monospace;font-weight:700;font-size:1.7rem;letter-spacing:1px;color:var(--gold);}
  .si-dates{flex:1;min-width:200px;}
  .si-en-date{font-family:'Baloo 2',sans-serif;font-weight:700;font-size:1.15rem;color:var(--paper);}
  .si-th-date{font-size:0.85rem;opacity:0.8;margin-top:2px;color:var(--paper);}
  .capture-bar{display:flex;justify-content:center;gap:8px;margin-top:12px;flex-wrap:wrap;}

  /* PIN overlay */
  .pin-overlay{position:fixed;inset:0;background:rgba(31,43,62,0.85);display:none;z-index:2000;}
  .pin-overlay.show{display:flex;align-items:center;justify-content:center;}
  .pin-box{background:#fff;border:3px solid var(--ink);border-radius:20px;padding:32px;max-width:320px;width:100%;text-align:center;box-shadow:8px 8px 0 var(--gold);}
  .pin-box h2{font-family:'Baloo 2',sans-serif;font-size:1.3rem;margin:0 0 8px;}
  .pin-box p{font-size:0.85rem;color:var(--ink-soft);margin:0 0 20px;}
  .pin-input{font-family:'Space Mono',monospace;font-size:1.5rem;letter-spacing:6px;text-align:center;padding:12px;border:2px solid var(--ink);border-radius:10px;width:100%;margin-bottom:14px;}
  .pin-error{color:var(--red);font-size:0.82rem;margin-top:-8px;margin-bottom:10px;display:none;}

  /* Session button */
  .session-btn-wrap{display:flex;flex-direction:column;align-items:flex-start;gap:8px;margin-bottom:14px;}
  .btn-session-yellow{background:var(--yellow);color:#000;border-color:var(--yellow-dark);box-shadow:3px 3px 0 var(--yellow-dark);font-size:1rem;padding:14px 24px;border-radius:14px;}
  .btn-session-green{background:var(--green);color:#fff;border-color:#2c7a37;box-shadow:3px 3px 0 #2c7a37;font-size:1rem;padding:14px 24px;border-radius:14px;}
  .btn-session-disabled{background:#ccc;color:#888;border-color:#aaa;box-shadow:3px 3px 0 #aaa;font-size:1rem;padding:14px 24px;border-radius:14px;cursor:not-allowed;}
  .countdown-bar{font-family:'Space Mono',monospace;font-size:0.85rem;color:var(--green);font-weight:700;padding:6px 12px;background:var(--green-bg);border-radius:8px;border:1px solid var(--green);}
  .schedule-info{font-size:0.78rem;color:var(--ink-soft);font-family:'Space Mono',monospace;}

  /* Missed attendance recovery */
  .recovery-card{background:var(--blue-bg);border:2px solid var(--blue);border-radius:14px;padding:16px;margin-top:14px;}
  .recovery-card h3{font-family:'Baloo 2',sans-serif;font-weight:700;font-size:0.95rem;margin:0 0 12px;color:var(--blue);}

  @media(max-width:600px){.brand-text h1{font-size:1.2rem;}.card{padding:16px;}table{font-size:0.78rem;}}
</style>
</head>

<body>
<!-- TEACHER AUTH OVERLAY -->
<div class="pin-overlay" id="teacherAuthOverlay">
  <div class="pin-box" style="max-width:380px;max-height:90vh;overflow-y:auto;">

    <!-- LOGIN SCREEN -->
    <div id="authLoginScreen">
      <div style="font-size:2rem;margin-bottom:8px;">👩‍🏫</div>
      <h2>Teacher Login</h2>
      <p style="margin:0 0 16px;font-size:0.85rem;color:var(--ink-soft);">Enter your credentials to access the dashboard</p>
      <div style="text-align:left;margin-bottom:10px;">
        <label style="font-size:0.8rem;font-weight:600;color:var(--ink-soft);">Email</label>
        <input type="email" id="loginEmail" placeholder="your@email.com" style="width:100%;padding:10px 12px;border:2px solid var(--ink);border-radius:10px;font-size:0.95rem;margin-top:4px;">
      </div>
      <div style="text-align:left;margin-bottom:16px;">
        <label style="font-size:0.8rem;font-weight:600;color:var(--ink-soft);">Password</label>
        <input type="password" id="loginPassword" placeholder="••••••••" style="width:100%;padding:10px 12px;border:2px solid var(--ink);border-radius:10px;font-size:0.95rem;margin-top:4px;">
      </div>
      <div id="loginError" style="color:var(--red);font-size:0.82rem;margin-bottom:10px;display:none;"></div>
      <button class="btn btn-primary" style="width:100%;margin-bottom:10px;" onclick="teacherLogin()">🔓 Login</button>
      <div style="display:flex;justify-content:space-between;gap:8px;margin-top:4px;">
        <button class="btn btn-sm" style="flex:1;" onclick="showAuthScreen('authRegisterScreen')">📝 Register</button>
        <button class="btn btn-sm" style="flex:1;" onclick="showAuthScreen('authForgotScreen')">🔑 Forgot Password</button>
      </div>
      <div style="margin-top:10px;border-top:1px dashed var(--line);padding-top:10px;">
        <button class="btn btn-sm" style="width:100%;" onclick="backToWelcome()">← Back</button>
      </div>
    </div>

    <!-- REGISTER SCREEN -->
    <div id="authRegisterScreen" style="display:none;">
      <div style="font-size:2rem;margin-bottom:8px;">📝</div>
      <h2>Teacher Registration</h2>
      <p style="margin:0 0 16px;font-size:0.82rem;color:var(--ink-soft);">Your details will be sent to the app owner for verification.</p>
      <div style="text-align:left;margin-bottom:8px;">
        <label style="font-size:0.8rem;font-weight:600;color:var(--ink-soft);">Full Name</label>
        <input type="text" id="regName" placeholder="Your full name" style="width:100%;padding:10px 12px;border:2px solid var(--ink);border-radius:10px;font-size:0.95rem;margin-top:4px;">
      </div>
      <div style="text-align:left;margin-bottom:8px;">
        <label style="font-size:0.8rem;font-weight:600;color:var(--ink-soft);">Email Address</label>
        <input type="email" id="regEmail" placeholder="your@email.com" style="width:100%;padding:10px 12px;border:2px solid var(--ink);border-radius:10px;font-size:0.95rem;margin-top:4px;">
      </div>
      <div style="text-align:left;margin-bottom:8px;">
        <label style="font-size:0.8rem;font-weight:600;color:var(--ink-soft);">Security Question 1</label>
        <select id="regQ1" style="width:100%;padding:10px 12px;border:2px solid var(--ink);border-radius:10px;font-size:0.9rem;margin-top:4px;">
          <option value="">Select a question...</option>
          <option>What is your mother's maiden name?</option>
          <option>What was the name of your first pet?</option>
          <option>What city were you born in?</option>
          <option>What was your childhood nickname?</option>
          <option>What is the name of your favorite teacher?</option>
        </select>
        <input type="text" id="regA1" placeholder="Your answer" style="width:100%;padding:8px 12px;border:2px solid var(--line);border-radius:10px;font-size:0.9rem;margin-top:6px;">
      </div>
      <div style="text-align:left;margin-bottom:12px;">
        <label style="font-size:0.8rem;font-weight:600;color:var(--ink-soft);">Security Question 2</label>
        <select id="regQ2" style="width:100%;padding:10px 12px;border:2px solid var(--ink);border-radius:10px;font-size:0.9rem;margin-top:4px;">
          <option value="">Select a question...</option>
          <option>What is your oldest sibling's middle name?</option>
          <option>What street did you grow up on?</option>
          <option>What was the make of your first car?</option>
          <option>What was the name of your elementary school?</option>
          <option>What is your favorite movie?</option>
        </select>
        <input type="text" id="regA2" placeholder="Your answer" style="width:100%;padding:8px 12px;border:2px solid var(--line);border-radius:10px;font-size:0.9rem;margin-top:6px;">
      </div>
      <div id="regError" style="color:var(--red);font-size:0.82rem;margin-bottom:10px;display:none;"></div>
      <div id="regSuccess" style="color:var(--green);font-size:0.82rem;margin-bottom:10px;display:none;"></div>
      <button class="btn btn-primary" style="width:100%;margin-bottom:10px;" id="regSubmitBtn" onclick="submitRegistration()">📧 Verify Email & Register</button>
      <button class="btn btn-sm" style="width:100%;" onclick="showAuthScreen('authLoginScreen')">← Back to Login</button>
    </div>

    <!-- EMAIL VERIFICATION SCREEN -->
    <div id="authVerifyScreen" style="display:none;">
      <div style="font-size:2rem;margin-bottom:8px;">📧</div>
      <h2>Verify Your Email</h2>
      <p style="margin:0 0 4px;font-size:0.85rem;color:var(--ink-soft);">A 6-digit code was sent to:</p>
      <p style="margin:0 0 16px;font-weight:700;font-size:0.9rem;" id="verifyEmailLabel"></p>
      <div style="text-align:left;margin-bottom:12px;">
        <label style="font-size:0.8rem;font-weight:600;color:var(--ink-soft);">Verification Code</label>
        <input type="text" id="verifyCode" inputmode="numeric" maxlength="6" placeholder="000000" style="width:100%;padding:12px;border:2px solid var(--ink);border-radius:10px;font-size:1.5rem;letter-spacing:6px;text-align:center;margin-top:4px;">
      </div>
      <div id="verifyError" style="color:var(--red);font-size:0.82rem;margin-bottom:10px;display:none;"></div>
      <button class="btn btn-primary" style="width:100%;margin-bottom:10px;" onclick="submitVerifyCode()">✅ Confirm Code</button>
      <button class="btn btn-sm" style="width:100%;" onclick="showAuthScreen('authRegisterScreen')">← Back</button>
    </div>

    <!-- SET PASSWORD SCREEN -->
    <div id="authSetPasswordScreen" style="display:none;">
      <div style="font-size:2rem;margin-bottom:8px;">🔐</div>
      <h2>Set Your Password</h2>
      <p style="margin:0 0 16px;font-size:0.85rem;color:var(--ink-soft);">Create a permanent password for your account.</p>
      <div style="text-align:left;margin-bottom:8px;">
        <label style="font-size:0.8rem;font-weight:600;color:var(--ink-soft);">New Password</label>
        <input type="password" id="newPassword" placeholder="Min. 8 characters" style="width:100%;padding:10px 12px;border:2px solid var(--ink);border-radius:10px;font-size:0.95rem;margin-top:4px;">
      </div>
      <div style="text-align:left;margin-bottom:12px;">
        <label style="font-size:0.8rem;font-weight:600;color:var(--ink-soft);">Confirm Password</label>
        <input type="password" id="confirmPassword" placeholder="Repeat password" style="width:100%;padding:10px 12px;border:2px solid var(--ink);border-radius:10px;font-size:0.95rem;margin-top:4px;">
      </div>
      <div id="setPassError" style="color:var(--red);font-size:0.82rem;margin-bottom:10px;display:none;"></div>
      <button class="btn btn-primary" style="width:100%;" onclick="submitSetPassword()">💾 Save Password</button>
    </div>

    <!-- FORGOT PASSWORD SCREEN -->
    <div id="authForgotScreen" style="display:none;">
      <div style="font-size:2rem;margin-bottom:8px;">🔑</div>
      <h2>Reset Password</h2>
      <p style="margin:0 0 16px;font-size:0.85rem;color:var(--ink-soft);">Enter your registered email to begin the reset process.</p>
      <div style="text-align:left;margin-bottom:12px;">
        <label style="font-size:0.8rem;font-weight:600;color:var(--ink-soft);">Email Address</label>
        <input type="email" id="forgotEmail" placeholder="your@email.com" style="width:100%;padding:10px 12px;border:2px solid var(--ink);border-radius:10px;font-size:0.95rem;margin-top:4px;">
      </div>
      <div id="forgotError" style="color:var(--red);font-size:0.82rem;margin-bottom:10px;display:none;"></div>
      <button class="btn btn-primary" style="width:100%;margin-bottom:10px;" onclick="submitForgotEmail()">📧 Send Verification Code</button>
      <button class="btn btn-sm" style="width:100%;" onclick="showAuthScreen('authLoginScreen')">← Back to Login</button>
    </div>

    <!-- RESET VERIFY SCREEN -->
    <div id="authResetVerifyScreen" style="display:none;">
      <div style="font-size:2rem;margin-bottom:8px;">🔐</div>
      <h2>Verify Identity</h2>
      <p style="margin:0 0 16px;font-size:0.85rem;color:var(--ink-soft);">Enter the code sent to your email and answer your security question.</p>
      <div style="text-align:left;margin-bottom:10px;">
        <label style="font-size:0.8rem;font-weight:600;color:var(--ink-soft);">Verification Code</label>
        <input type="text" id="resetVerifyCode" inputmode="numeric" maxlength="6" placeholder="000000" style="width:100%;padding:12px;border:2px solid var(--ink);border-radius:10px;font-size:1.5rem;letter-spacing:6px;text-align:center;margin-top:4px;">
      </div>
      <div style="text-align:left;margin-bottom:12px;">
        <label style="font-size:0.8rem;font-weight:600;color:var(--ink-soft);" id="resetSecurityQ">Security Question</label>
        <input type="text" id="resetSecurityA" placeholder="Your answer" style="width:100%;padding:10px 12px;border:2px solid var(--ink);border-radius:10px;font-size:0.95rem;margin-top:4px;">
      </div>
      <div id="resetVerifyError" style="color:var(--red);font-size:0.82rem;margin-bottom:10px;display:none;"></div>
      <button class="btn btn-primary" style="width:100%;margin-bottom:10px;" onclick="submitResetVerify()">✅ Verify & Reset</button>
      <button class="btn btn-sm" style="width:100%;" onclick="showAuthScreen('authForgotScreen')">← Back</button>
    </div>

  </div>
</div>

<!-- PIN OVERLAY (shown only after choosing Teacher) -->
<div class="pin-overlay" id="pinOverlay">
  <div class="pin-box">
    <div style="font-size:2rem;margin-bottom:8px;">🔐</div>
    <h2>Teacher Access</h2>
    <p>Enter your PIN to access the teacher dashboard</p>
    <input class="pin-input" id="pinInput" type="password" inputmode="numeric" maxlength="6" placeholder="••••••">
    <div class="pin-error" id="pinError">Incorrect PIN. Try again.</div>
    <button class="btn btn-primary" style="width:100%;margin-bottom:12px;" onclick="checkPin()">Unlock</button>
    <button class="btn btn-sm" style="width:100%;" onclick="backToWelcome()">← Back</button>
  </div>
</div>

<div class="app">
  <header>
    <div class="brand">
      <div class="brand-mark">A</div>
      <div class="brand-text">
        <h1>Attendance Passport</h1>
        <p>QR Check-In &amp; Class Roster Tracker</p>
      </div>
    </div>

  </header>

  <!-- TEACHER VIEW -->
  <div id="teacherView" style="display:none;">

    <div class="card">
      <p class="eyebrow">Class Session</p>
      <h2>📋 Choose your class</h2>
      <div class="row">
        <div><label for="gradeSelect">Grade Level</label><select id="gradeSelect"></select></div>
        <div><label for="sectionSelect">Section</label><select id="sectionSelect"></select></div>
      </div>
    </div>

    <div class="card">
      <p class="eyebrow">Check-in</p>
      <h2>📱 Session &amp; QR Code</h2>
      <div id="sessionBannerWrap"></div>

      <!-- Session button -->
      <div class="session-btn-wrap" id="sessionBtnWrap"></div>

      <!-- Missed attendance recovery -->
      <div class="recovery-card" id="recoveryCard" style="display:none;">
        <h3>📅 Missed Attendance Recovery</h3>
        <div class="row">
          <div>
            <label for="recoveryDate">Missed Date</label>
            <input type="date" id="recoveryDate">
          </div>
        </div>
        <div class="hint" id="recoveryHint" style="margin-top:8px;"></div>
        <button class="btn btn-sm btn-blue" id="recoveryOpenBtn" style="margin-top:10px;" disabled>📂 Open Recovery Session</button>
      </div>

      <div class="qr-wrap" id="qrWrapEl">
        <div id="qrcode"></div>
        <div class="qr-link" id="qrLink"></div>
        <button class="btn btn-sm" id="fullscreenQrBtn" style="margin-top:10px;">🖥️ Fullscreen QR</button>
      </div>
      <div class="hint" id="qrHintEl">Students scan this to open the check-in page, then enter their 5-digit Student ID.</div>
      <div class="flex-between" id="qrButtonsEl" style="margin-top:14px;">
        <button class="btn btn-red" id="completeBtn" disabled>🔒 Close Attendance</button>
      </div>
      <div class="hint" id="completeHint" style="display:none;"></div>
    </div>

    <div class="card">
      <p class="eyebrow">Roster &amp; Status</p>
      <div class="flex-between">
        <h2 style="margin:0;">🧑‍🎓 Class Roster — <span id="rosterTitle"></span></h2>
        <div style="display:flex;align-items:center;gap:10px;">
          <span class="pill" id="todayPill"></span>
          <button class="btn btn-sm" id="refreshBtn">🔄 Refresh</button>
          <button class="btn btn-sm btn-primary" id="reportBtn">🖨️ Report</button>
        </div>
      </div>
      <div class="stats" id="statsRow"></div>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th class="col-no">No.</th><th>Student ID</th><th>Name</th><th>Nickname</th>
              <th>Status</th><th>Timestamp</th><th>Manual Override</th>
            </tr>
          </thead>
          <tbody id="rosterBody"></tbody>
        </table>
      </div>
      <div class="hint">Manual tags: <span class="pill">Late</span> arrived during class, <span class="pill">Skipped</span> in school but skipped class, <span class="pill">Excuse</span> valid reason, <span class="pill">Absent</span> not in school.</div>
    </div>

    <div class="card">
      <p class="eyebrow">History</p>
      <h2 style="margin:0 0 10px;">📅 View Past Weeks</h2>
      <div id="pastWeeksWrap"></div>
    </div>

    <div class="card">
      <p class="eyebrow">History</p>
      <h2 style="margin:0 0 10px;">📆 Daily Summary</h2>
      <div class="row" style="align-items:flex-end;">
        <div style="max-width:220px;"><label for="dailySummaryDate">Date</label><input type="date" id="dailySummaryDate"></div>
        <div style="flex:0;"><button class="btn btn-sm btn-primary" id="dailySummaryBtn" style="margin-bottom:1px;">🔍 View Day</button></div>
      </div>
      <div id="dailySummaryWrap" style="margin-top:14px;"></div>
    </div>

    <div class="card" style="border-color:var(--line);">
      <p class="eyebrow">Manage</p>
      <h2 style="margin:0 0 4px;">🚫 No Class</h2>
      <div class="hint" id="noClassDateLabel" style="margin-top:0;margin-bottom:12px;"></div>
      <div id="noClassWrap"></div>
    </div>

  </div>

  <!-- REPORT MODAL -->
  <div id="reportModalOverlay" class="modal-overlay" style="display:none;">
    <div class="modal-box card">
      <p class="eyebrow">Printable Report</p>
      <h2>🖨️ Attendance Report</h2>
      <div class="row">
        <div><label for="reportFrom">From</label><input type="date" id="reportFrom"></div>
        <div><label for="reportTo">To</label><input type="date" id="reportTo"></div>
      </div>
      <div class="flex-between" style="margin-top:16px;">
        <button class="btn" id="reportCancelBtn">Cancel</button>
        <button class="btn btn-primary" id="reportGenerateBtn">📄 Generate &amp; Print</button>
      </div>
    </div>
  </div>

  <!-- STUDENT VIEW -->
  <div id="studentView" style="display:none;">
    <div class="card session-info-card" id="sessionInfoCard" style="display:none;">
      <p class="eyebrow" id="siWeek">—</p>
      <div class="session-info-grid">
        <div class="si-clock">
          <div class="si-time" id="siTime">--:--</div>
          <div class="si-ampm" id="siAmpm">--</div>
        </div>
        <div class="si-dates">
          <div class="si-en-date" id="siEnDate">—</div>
          <div class="si-th-date" id="siThDate">—</div>
        </div>
      </div>
    </div>

    <div class="card" id="studentLogin">
      <p class="eyebrow">Student Check-in</p>
      <h2>🎫 Enter your Student ID</h2>
      <div id="stuClassInfo" style="margin-bottom:12px;font-size:0.85rem;color:var(--ink-soft);font-family:'Space Mono',monospace;"></div>
      <div>
        <label for="stuId">Your 5-digit Student ID</label>
        <input id="stuId" type="text" inputmode="numeric" maxlength="5" placeholder="e.g. 12345">
      </div>
      <button class="btn btn-green" id="checkInBtn" style="margin-top:14px;width:100%;justify-content:center;">✅ Tag Me Present</button>
      <div class="hint" id="checkInMsg"></div>
    </div>

    <div id="studentPassportWrap"></div>
  </div>
</div>

<div class="toast" id="toast"></div>
<div class="qr-fullscreen" id="qrFullscreen">
  <div class="qrf-content">
    <div class="qrf-label" id="qrfLabel"></div>
    <div id="qrcodeFullscreen"></div>
    <div class="qrf-hint">Tap anywhere or press Esc to close</div>
  </div>
</div>

<script>
const ROSTER = [{"grade":"M3","section":2,"students":[{"no":1,"studentId":"37581","nickname":"Q"},{"no":2,"studentId":"37582","nickname":"Premium"},{"no":3,"studentId":"37583","nickname":"Mos"},{"no":4,"studentId":"37584","nickname":"Tang"},{"no":5,"studentId":"37585","nickname":"Aom"},{"no":6,"studentId":"37586","nickname":"First"},{"no":7,"studentId":"37587","nickname":"Techin"},{"no":8,"studentId":"37588","nickname":"Oat"},{"no":9,"studentId":"37589","nickname":"Phat"},{"no":10,"studentId":"37590","nickname":"Guy"},{"no":11,"studentId":"37591","nickname":"Jay"},{"no":12,"studentId":"37592","nickname":"Zee"},{"no":13,"studentId":"37593","nickname":"Poom"},{"no":14,"studentId":"37594","nickname":"Dew"},{"no":15,"studentId":"37596","nickname":"Phum 2"},{"no":16,"studentId":"37597","nickname":"Water"},{"no":17,"studentId":"37598","nickname":"Phum 1"},{"no":18,"studentId":"37599","nickname":"Kawjao"},{"no":19,"studentId":"37600","nickname":"Tae"},{"no":20,"studentId":"37601","nickname":"Palm"},{"no":21,"studentId":"37602","nickname":"Auto"},{"no":22,"studentId":"37603","nickname":"Ploy"},{"no":23,"studentId":"37604","nickname":"Temduang"},{"no":24,"studentId":"37606","nickname":"Yaya"},{"no":25,"studentId":"37607","nickname":"L"},{"no":26,"studentId":"37608","nickname":"Khao"},{"no":27,"studentId":"37609","nickname":"Na"},{"no":28,"studentId":"37611","nickname":"Kam1"},{"no":29,"studentId":"37615","nickname":"Kam2"},{"no":30,"studentId":"37618","nickname":"Kib"},{"no":31,"studentId":"37620","nickname":"Maysa"},{"no":32,"studentId":"37621","nickname":"Fa"},{"no":33,"studentId":"37622","nickname":"Fanta"},{"no":34,"studentId":"39688","nickname":"Wawa"},{"no":35,"studentId":"33680","nickname":"Pang"}]},{"grade":"M3","section":4,"students":[{"no":1,"studentId":"37667","nickname":"Fiw"},{"no":2,"studentId":"37668","nickname":"Kaow"},{"no":3,"studentId":"37669","nickname":"tolap"},{"no":4,"studentId":"37670","nickname":"Drift"},{"no":5,"studentId":"37671","nickname":"Fakhram"},{"no":6,"studentId":"37674","nickname":"Tee"},{"no":7,"studentId":"37675","nickname":"Angpao"},{"no":8,"studentId":"37676","nickname":"Eik"},{"no":9,"studentId":"37677","nickname":"Pai"},{"no":10,"studentId":"37678","nickname":"Wine"},{"no":11,"studentId":"37679","nickname":"Peem"},{"no":12,"studentId":"37680","nickname":"Garfield"},{"no":13,"studentId":"37681","nickname":"Bellda"},{"no":14,"studentId":"37682","nickname":"Nooyim"},{"no":15,"studentId":"37683","nickname":"Pakwan"},{"no":16,"studentId":"37684","nickname":"Fahsai"},{"no":17,"studentId":"37685","nickname":"Foam"},{"no":18,"studentId":"37686","nickname":"Thadcha"},{"no":19,"studentId":"37687","nickname":"Rak"},{"no":20,"studentId":"37688","nickname":"Play"},{"no":21,"studentId":"37689","nickname":"Jiw"},{"no":22,"studentId":"37690","nickname":"Fern"},{"no":23,"studentId":"37691","nickname":"Omyim"},{"no":24,"studentId":"37692","nickname":"Ice"},{"no":25,"studentId":"37693","nickname":"Apo"},{"no":26,"studentId":"37694","nickname":"Ploy"},{"no":27,"studentId":"37695","nickname":"Pakkad"},{"no":28,"studentId":"37698","nickname":"Jenny"},{"no":29,"studentId":"37700","nickname":"Bonus"},{"no":30,"studentId":"37701","nickname":"Veeta"},{"no":31,"studentId":"37702","nickname":"Aing"},{"no":32,"studentId":"37703","nickname":"Ongfong"},{"no":33,"studentId":"37704","nickname":"Am"},{"no":34,"studentId":"37705","nickname":"Fangkhaw"},{"no":35,"studentId":"37706","nickname":"Meena"},{"no":36,"studentId":"37707","nickname":"Earth"},{"no":37,"studentId":"39678","nickname":"Non"}]},{"grade":"M3","section":6,"students":[{"no":1,"studentId":"37750","nickname":"Pepper"},{"no":2,"studentId":"37751","nickname":"Model"},{"no":3,"studentId":"37752","nickname":"Fuas"},{"no":4,"studentId":"37753","nickname":"Guitar"},{"no":5,"studentId":"37754","nickname":"Mos"},{"no":6,"studentId":"37756","nickname":"Tle"},{"no":7,"studentId":"37757","nickname":"Earth"},{"no":8,"studentId":"37758","nickname":"Aomsub"},{"no":9,"studentId":"37759","nickname":"Ninja"},{"no":10,"studentId":"37760","nickname":"PP"},{"no":11,"studentId":"37761","nickname":"Porch"},{"no":12,"studentId":"37762","nickname":"Sand"},{"no":13,"studentId":"37763","nickname":"Folk"},{"no":14,"studentId":"37764","nickname":"Phu"},{"no":15,"studentId":"37765","nickname":"Pooh"},{"no":16,"studentId":"37766","nickname":"Toomtam"},{"no":17,"studentId":"37767","nickname":"Shisha"},{"no":18,"studentId":"37768","nickname":"Idea"},{"no":19,"studentId":"37769","nickname":"Pan"},{"no":20,"studentId":"37770","nickname":"Cartoon"},{"no":21,"studentId":"37771","nickname":"Pang"},{"no":22,"studentId":"37772","nickname":"Noodee"},{"no":23,"studentId":"37774","nickname":"Ink"},{"no":24,"studentId":"37775","nickname":"Benz"},{"no":25,"studentId":"37776","nickname":"Pu"},{"no":26,"studentId":"37777","nickname":"Playfa"},{"no":27,"studentId":"37778","nickname":"Sushi"},{"no":28,"studentId":"37780","nickname":"Pitchayapha"},{"no":29,"studentId":"37781","nickname":"Xiider"},{"no":30,"studentId":"37782","nickname":"Rinrada"},{"no":31,"studentId":"37783","nickname":"Somjeed"},{"no":32,"studentId":"37784","nickname":"Gift"},{"no":33,"studentId":"37785","nickname":"Khawhom"},{"no":34,"studentId":"37788","nickname":"Lukwa"},{"no":35,"studentId":"37789","nickname":"So"},{"no":36,"studentId":"37790","nickname":"Fern"},{"no":37,"studentId":"37791","nickname":"Mai"},{"no":38,"studentId":"37792","nickname":"Aingdaw"}]},{"grade":"M3","section":10,"students":[{"no":1,"studentId":"37917","nickname":"Kanpoo"},{"no":2,"studentId":"37918","nickname":"Nerd"},{"no":3,"studentId":"37919","nickname":"Kim"},{"no":4,"studentId":"37920","nickname":"Hon"},{"no":5,"studentId":"37921","nickname":"Fok"},{"no":6,"studentId":"37922","nickname":"August"},{"no":7,"studentId":"37923","nickname":"Donut"},{"no":8,"studentId":"37924","nickname":"Tonkaw"},{"no":9,"studentId":"37925","nickname":"Tatah"},{"no":10,"studentId":"37926","nickname":"Meo"},{"no":11,"studentId":"37927","nickname":"Shopping"},{"no":12,"studentId":"37928","nickname":"Poo"},{"no":13,"studentId":"37929","nickname":"Tomon"},{"no":14,"studentId":"37930","nickname":"Fluke"},{"no":15,"studentId":"37931","nickname":"Mon"},{"no":16,"studentId":"37932","nickname":"Kam"},{"no":17,"studentId":"37933","nickname":"Pang"},{"no":18,"studentId":"37934","nickname":"Pinkaew"},{"no":19,"studentId":"37935","nickname":"BB2"},{"no":20,"studentId":"37938","nickname":"Praew"},{"no":21,"studentId":"37939","nickname":"Minnie"},{"no":22,"studentId":"37940","nickname":"Cartoon1"},{"no":23,"studentId":"37942","nickname":"Panghorm"},{"no":24,"studentId":"37943","nickname":"Namtan"},{"no":25,"studentId":"37944","nickname":"Natcha"},{"no":26,"studentId":"37945","nickname":"Priew"},{"no":27,"studentId":"37946","nickname":"Namfah"},{"no":28,"studentId":"37950","nickname":"Kate"},{"no":29,"studentId":"37951","nickname":"Cartoon2"},{"no":30,"studentId":"37952","nickname":"BB1"},{"no":31,"studentId":"37953","nickname":"Fair"},{"no":32,"studentId":"37954","nickname":"Leon"},{"no":33,"studentId":"37956","nickname":"Aimimm"}]},{"grade":"M3","section":12,"students":[{"no":1,"studentId":"37996","nickname":"Kanin"},{"no":2,"studentId":"37997","nickname":"Thung"},{"no":3,"studentId":"37998","nickname":"Ford"},{"no":4,"studentId":"37999","nickname":"Unic"},{"no":5,"studentId":"38000","nickname":"Tan"},{"no":6,"studentId":"38001","nickname":"Action"},{"no":7,"studentId":"38002","nickname":"Gun"},{"no":8,"studentId":"38003","nickname":"Game"},{"no":9,"studentId":"38004","nickname":"Wai"},{"no":10,"studentId":"38005","nickname":"Kang"},{"no":11,"studentId":"38006","nickname":"Boat"},{"no":12,"studentId":"38007","nickname":"Chev"},{"no":13,"studentId":"38010","nickname":"Lookbas"},{"no":14,"studentId":"38011","nickname":"Win"},{"no":15,"studentId":"38012","nickname":"Tablet"},{"no":16,"studentId":"38013","nickname":"Klao"},{"no":17,"studentId":"38014","nickname":"Baifern"},{"no":18,"studentId":"38015","nickname":"Manaw"},{"no":19,"studentId":"38016","nickname":"Grace"},{"no":20,"studentId":"38017","nickname":"Pim"},{"no":21,"studentId":"38018","nickname":"Saipan"},{"no":22,"studentId":"38019","nickname":"Praew"},{"no":23,"studentId":"38020","nickname":"Cheer"},{"no":24,"studentId":"38022","nickname":"Naphat"},{"no":25,"studentId":"38023","nickname":"Gambum 1"},{"no":26,"studentId":"38025","nickname":"Nuea"},{"no":27,"studentId":"38027","nickname":"Pink"},{"no":28,"studentId":"38028","nickname":"Fanta"},{"no":29,"studentId":"38029","nickname":"Chompoo"},{"no":30,"studentId":"38030","nickname":"Bel"},{"no":31,"studentId":"38031","nickname":"Eve"},{"no":32,"studentId":"38032","nickname":"Gambum 2"},{"no":33,"studentId":"38033","nickname":"Kartoon"},{"no":34,"studentId":"38034","nickname":"Tonkhao"}]},{"grade":"M4","section":1,"students":[{"no":1,"studentId":"36771","nickname":"Ton"},{"no":2,"studentId":"36788","nickname":"Hoy"},{"no":3,"studentId":"36830","nickname":"Ploy 1"},{"no":4,"studentId":"36835","nickname":"Beer"},{"no":5,"studentId":"36838","nickname":"Palm"},{"no":6,"studentId":"36840","nickname":"Mean"},{"no":7,"studentId":"36845","nickname":"Line"},{"no":8,"studentId":"36850","nickname":"Fang 1"},{"no":9,"studentId":"36857","nickname":"Bas"},{"no":10,"studentId":"36886","nickname":"August"},{"no":11,"studentId":"36889","nickname":"Ploy 2"},{"no":12,"studentId":"36905","nickname":"Gew"},{"no":13,"studentId":"36934","nickname":"Cha"},{"no":14,"studentId":"36939","nickname":"Tan"},{"no":15,"studentId":"36951","nickname":"Yu"},{"no":16,"studentId":"36970","nickname":"Farn"},{"no":17,"studentId":"36975","nickname":"Korn"},{"no":18,"studentId":"36989","nickname":"Pai"},{"no":19,"studentId":"36991","nickname":"Mix"},{"no":20,"studentId":"36997","nickname":"Yo"},{"no":21,"studentId":"37013","nickname":"Mook"},{"no":22,"studentId":"37032","nickname":"Wan"},{"no":23,"studentId":"37044","nickname":"Baitoey"},{"no":24,"studentId":"37063","nickname":"Jay"},{"no":25,"studentId":"37116","nickname":"Tanwan"},{"no":26,"studentId":"37129","nickname":"Fang 2"},{"no":27,"studentId":"37140","nickname":"Mochi"},{"no":28,"studentId":"39503","nickname":"Fang 3"},{"no":29,"studentId":"39504","nickname":"Aum"},{"no":30,"studentId":"39505","nickname":"Kito"},{"no":31,"studentId":"39506","nickname":"Vayu"},{"no":32,"studentId":"39507","nickname":"Aom"},{"no":33,"studentId":"39508","nickname":"Idea"},{"no":34,"studentId":"39509","nickname":"Paerw"},{"no":35,"studentId":"39510","nickname":"Kawfang"},{"no":36,"studentId":"39511","nickname":"Yew"},{"no":37,"studentId":"39512","nickname":"Maysa"},{"no":38,"studentId":"39513","nickname":"Pao"},{"no":39,"studentId":"39514","nickname":"Ming"},{"no":40,"studentId":"39515","nickname":"Fah"}]},{"grade":"M4","section":2,"students":[{"no":1,"studentId":"36120","nickname":"Kun"},{"no":2,"studentId":"36175","nickname":"Li"},{"no":3,"studentId":"36428","nickname":"Maprang"},{"no":4,"studentId":"36782","nickname":"Sunday"},{"no":5,"studentId":"36785","nickname":"Film 1"},{"no":6,"studentId":"36804","nickname":"Nxmpxn"},{"no":7,"studentId":"36811","nickname":"Nack"},{"no":8,"studentId":"36813","nickname":"Guy"},{"no":9,"studentId":"36867","nickname":"Save"},{"no":10,"studentId":"36956","nickname":"Film 2"},{"no":11,"studentId":"36965","nickname":"Naming"},{"no":12,"studentId":"36967","nickname":"Kingpai"},{"no":13,"studentId":"36968","nickname":"Bonus"},{"no":14,"studentId":"36990","nickname":"Poon"},{"no":15,"studentId":"37004","nickname":"Palm"},{"no":16,"studentId":"37019","nickname":"Jay"},{"no":17,"studentId":"37026","nickname":"Aut"},{"no":18,"studentId":"37029","nickname":"Kong"},{"no":19,"studentId":"37067","nickname":"Thanwa"},{"no":20,"studentId":"37077","nickname":"Porsche"},{"no":21,"studentId":"37085","nickname":"Aung"},{"no":22,"studentId":"37090","nickname":"Kwan"},{"no":23,"studentId":"37105","nickname":"Manaw"},{"no":24,"studentId":"37127","nickname":"Wunsen"},{"no":25,"studentId":"37149","nickname":"Gun"},{"no":26,"studentId":"39516","nickname":"King"},{"no":27,"studentId":"39517","nickname":"Phai"},{"no":28,"studentId":"39518","nickname":"Gae"},{"no":29,"studentId":"39519","nickname":"Diamond"},{"no":30,"studentId":"39521","nickname":"Cee"},{"no":31,"studentId":"39522","nickname":"Path"},{"no":32,"studentId":"39523","nickname":""},{"no":33,"studentId":"39524","nickname":"Bas"},{"no":34,"studentId":"39525","nickname":"Aom"},{"no":35,"studentId":"39526","nickname":""},{"no":36,"studentId":"39527","nickname":"Ball"},{"no":37,"studentId":"39528","nickname":"Boss"},{"no":38,"studentId":"39529","nickname":"Gohung"},{"no":39,"studentId":"39530","nickname":"Cherry"},{"no":40,"studentId":"39531","nickname":"Kay"}]},{"grade":"M4","section":3,"students":[{"no":1,"studentId":"36770","nickname":"Tete"},{"no":2,"studentId":"36839","nickname":"Pai"},{"no":3,"studentId":"36877","nickname":"Guitar"},{"no":4,"studentId":"36883","nickname":"Meiji"},{"no":5,"studentId":"36890","nickname":"Tonhm"},{"no":6,"studentId":"36923","nickname":"Fame"},{"no":7,"studentId":"36924","nickname":"Baikhao"},{"no":8,"studentId":"36958","nickname":"Bell"},{"no":9,"studentId":"36977","nickname":"Tawan"},{"no":10,"studentId":"36982","nickname":"Bom"},{"no":11,"studentId":"36993","nickname":"Jigzaw"},{"no":12,"studentId":"36998","nickname":"Amirkhan"},{"no":13,"studentId":"37007","nickname":"Namprik"},{"no":14,"studentId":"37008","nickname":"Kafiw"},{"no":15,"studentId":"37033","nickname":"Chawanlak"},{"no":16,"studentId":"37035","nickname":"Natthida"},{"no":17,"studentId":"37039","nickname":"Tonhoom"},{"no":18,"studentId":"37045","nickname":"Pham"},{"no":19,"studentId":"37100","nickname":"Pleng"},{"no":20,"studentId":"37162","nickname":"Tiewkhao"},{"no":21,"studentId":"37182","nickname":"Namkaeng"},{"no":22,"studentId":"37192","nickname":"Anchisa"},{"no":23,"studentId":"37210","nickname":"Auto"},{"no":24,"studentId":"39532","nickname":"Kate"},{"no":25,"studentId":"39533","nickname":"Namo"},{"no":26,"studentId":"39534","nickname":"Ing-On"},{"no":27,"studentId":"39535","nickname":"Nampan"},{"no":28,"studentId":"39536","nickname":"Nathiphy"},{"no":29,"studentId":"39537","nickname":"Nammo"},{"no":30,"studentId":"39538","nickname":"Khaohom"},{"no":31,"studentId":"39539","nickname":"Pakkad"},{"no":32,"studentId":"39540","nickname":"Thanachot"},{"no":33,"studentId":"39541","nickname":"Benochaimt"},{"no":34,"studentId":"39542","nickname":"Neem"},{"no":35,"studentId":"39543","nickname":"Gus"},{"no":36,"studentId":"39544","nickname":"May"},{"no":37,"studentId":"39545","nickname":"Nun"},{"no":38,"studentId":"39546","nickname":"Maysa"},{"no":39,"studentId":"39547","nickname":"Kaimook"},{"no":40,"studentId":"39548","nickname":"Mix"}]},{"grade":"M4","section":4,"students":[{"no":1,"studentId":"36803","nickname":"Piano"},{"no":2,"studentId":"36812","nickname":"Kool"},{"no":3,"studentId":"36828","nickname":"Dew"},{"no":4,"studentId":"36836","nickname":"Kan"},{"no":5,"studentId":"36864","nickname":"Name"},{"no":6,"studentId":"36938","nickname":"Namo 1"},{"no":7,"studentId":"36942","nickname":"Pun"},{"no":8,"studentId":"36960","nickname":"Manow"},{"no":9,"studentId":"36963","nickname":"Praewa"},{"no":10,"studentId":"36974","nickname":"Eye"},{"no":11,"studentId":"36979","nickname":"Stam"},{"no":12,"studentId":"36999","nickname":"Mint 2"},{"no":13,"studentId":"37038","nickname":"Ice 1"},{"no":14,"studentId":"37050","nickname":"Mild"},{"no":15,"studentId":"37051","nickname":"Mint 1"},{"no":16,"studentId":"37052","nickname":"Nadear"},{"no":17,"studentId":"37053","nickname":"Ploy"},{"no":18,"studentId":"37071","nickname":"Mos"},{"no":19,"studentId":"37089","nickname":"Yewwa"},{"no":20,"studentId":"37120","nickname":"Program"},{"no":21,"studentId":"37154","nickname":"Numnuea"},{"no":22,"studentId":"39549","nickname":"Thip"},{"no":23,"studentId":"39550","nickname":"Eye"},{"no":24,"studentId":"39551","nickname":"Dew"},{"no":25,"studentId":"39552","nickname":"Kim"},{"no":26,"studentId":"39553","nickname":"Meemee"},{"no":27,"studentId":"39554","nickname":"Ping"},{"no":28,"studentId":"39555","nickname":"Aingeye"},{"no":29,"studentId":"39556","nickname":"Kanja"},{"no":30,"studentId":"39557","nickname":"Cream"},{"no":31,"studentId":"39558","nickname":"Noodee"},{"no":32,"studentId":"39559","nickname":"Baitoey"},{"no":33,"studentId":"39560","nickname":"Biw"},{"no":34,"studentId":"39561","nickname":"Golf"},{"no":35,"studentId":"39562","nickname":"Minnie"},{"no":36,"studentId":"39563","nickname":"Aom"},{"no":37,"studentId":"39564","nickname":"Namo 2"},{"no":38,"studentId":"39565","nickname":"Ice 2"},{"no":39,"studentId":"39566","nickname":"Pang"},{"no":40,"studentId":"39567","nickname":"Sunz"}]},{"grade":"M4","section":5,"students":[{"no":1,"studentId":"36405","nickname":"Title"},{"no":2,"studentId":"36790","nickname":"Patty"},{"no":3,"studentId":"36797","nickname":"Nam"},{"no":4,"studentId":"36802","nickname":"Khilg"},{"no":5,"studentId":"36817","nickname":"Blossom"},{"no":6,"studentId":"36824","nickname":"Ray"},{"no":7,"studentId":"36842","nickname":"Karn"},{"no":8,"studentId":"36846","nickname":"Tonaor"},{"no":9,"studentId":"36879","nickname":"Nicha"},{"no":10,"studentId":"36884","nickname":"Euhseon"},{"no":11,"studentId":"36906","nickname":"Kartoon"},{"no":12,"studentId":"36910","nickname":"Pun"},{"no":13,"studentId":"36912","nickname":"In"},{"no":14,"studentId":"36916","nickname":"Mint"},{"no":15,"studentId":"36926","nickname":"Ping"},{"no":16,"studentId":"36928","nickname":"Jade"},{"no":17,"studentId":"37014","nickname":"Dutch Mill"},{"no":18,"studentId":"37027","nickname":"Man-u"},{"no":19,"studentId":"37031","nickname":"Praew"},{"no":20,"studentId":"37057","nickname":"Satang"},{"no":21,"studentId":"37114","nickname":"Tankooh"},{"no":22,"studentId":"39568","nickname":"May"},{"no":23,"studentId":"39569","nickname":"Focus"},{"no":24,"studentId":"39570","nickname":"Pauk"},{"no":25,"studentId":"39571","nickname":"Khao"},{"no":26,"studentId":"39572","nickname":"Ja"},{"no":27,"studentId":"39573","nickname":"Toon"},{"no":28,"studentId":"39574","nickname":"Namwan"},{"no":29,"studentId":"39575","nickname":"Aum"},{"no":30,"studentId":"39576","nickname":"Fafay"},{"no":31,"studentId":"39577","nickname":"Zoey"},{"no":32,"studentId":"39578","nickname":"Aoom"},{"no":33,"studentId":"39679","nickname":"Pompom"}]},{"grade":"M4","section":6,"students":[{"no":1,"studentId":"36768","nickname":"Comford"},{"no":2,"studentId":"36784","nickname":"Pao"},{"no":3,"studentId":"36871","nickname":"Gunn"},{"no":4,"studentId":"36888","nickname":"Ploy"},{"no":5,"studentId":"36893","nickname":"Fah"},{"no":6,"studentId":"36922","nickname":"Peaky"},{"no":7,"studentId":"36986","nickname":"Kao"},{"no":8,"studentId":"37021","nickname":"Geno"},{"no":9,"studentId":"37042","nickname":"Ming"},{"no":10,"studentId":"37110","nickname":"Nam"},{"no":11,"studentId":"37126","nickname":"Lukked"},{"no":12,"studentId":"37133","nickname":"Tam"},{"no":13,"studentId":"37139","nickname":"Fangkhaw"},{"no":14,"studentId":"37142","nickname":"Pam"},{"no":15,"studentId":"37155","nickname":"Manu"},{"no":16,"studentId":"37157","nickname":"Mon"},{"no":17,"studentId":"37165","nickname":"Zee"},{"no":18,"studentId":"37166","nickname":"Khoahom"},{"no":19,"studentId":"37189","nickname":"Manaw"},{"no":20,"studentId":"37193","nickname":"Annfuse"},{"no":21,"studentId":"37201","nickname":"Titan"},{"no":22,"studentId":"37538","nickname":"Fang"},{"no":23,"studentId":"39579","nickname":"View"},{"no":24,"studentId":"39580","nickname":"Irin 1"},{"no":25,"studentId":"39581","nickname":"Pooklook"},{"no":26,"studentId":"39582","nickname":"Cake"},{"no":27,"studentId":"39583","nickname":"Gafew"},{"no":28,"studentId":"39584","nickname":"Boom"},{"no":29,"studentId":"39585","nickname":"Hom"},{"no":30,"studentId":"39586","nickname":"Om Am"},{"no":31,"studentId":"39587","nickname":"Not"},{"no":32,"studentId":"39588","nickname":"Khaimuk"},{"no":33,"studentId":"39589","nickname":"Tong"},{"no":34,"studentId":"39590","nickname":"Jang"},{"no":35,"studentId":"39591","nickname":"Prem"},{"no":36,"studentId":"39592","nickname":"Sun"},{"no":37,"studentId":"39593","nickname":"Irin 2"},{"no":38,"studentId":"39594","nickname":"Whan"},{"no":39,"studentId":"39595","nickname":"Fadia"},{"no":40,"studentId":"39596","nickname":"Satang"}]},{"grade":"M4","section":7,"students":[{"no":1,"studentId":"36801","nickname":"Chompu"},{"no":2,"studentId":"36807","nickname":"Khaofang"},{"no":3,"studentId":"36913","nickname":"Nicha"},{"no":4,"studentId":"36919","nickname":"Pan"},{"no":5,"studentId":"37012","nickname":"Koy"},{"no":6,"studentId":"37041","nickname":"Khim"},{"no":7,"studentId":"37048","nickname":"Ploy"},{"no":8,"studentId":"37054","nickname":"Prim"},{"no":9,"studentId":"37084","nickname":"Champhgne"},{"no":10,"studentId":"37086","nickname":"Manyu"},{"no":11,"studentId":"37123","nickname":"Hya"},{"no":12,"studentId":"37130","nickname":"Milk"},{"no":13,"studentId":"37143","nickname":"Stamp"},{"no":14,"studentId":"37144","nickname":"Aom"},{"no":15,"studentId":"37147","nickname":"Aum"},{"no":16,"studentId":"37158","nickname":"Film"},{"no":17,"studentId":"37160","nickname":"Organ"},{"no":18,"studentId":"37163","nickname":"San"},{"no":19,"studentId":"37173","nickname":"Praewa"},{"no":20,"studentId":"37183","nickname":"Pornphachara"},{"no":21,"studentId":"37188","nickname":"Krathin"},{"no":22,"studentId":"39597","nickname":"Owen"},{"no":23,"studentId":"39598","nickname":"Pin"},{"no":24,"studentId":"39599","nickname":"Earth"},{"no":25,"studentId":"39600","nickname":"Pao"},{"no":26,"studentId":"39601","nickname":"Tangmo"},{"no":27,"studentId":"39602","nickname":"Art"},{"no":28,"studentId":"39603","nickname":"Protae"},{"no":29,"studentId":"39604","nickname":"Gam"},{"no":30,"studentId":"39605","nickname":"Cream"},{"no":31,"studentId":"39606","nickname":"Pao"},{"no":32,"studentId":"39607","nickname":"Nom"},{"no":33,"studentId":"39608","nickname":"Pink"},{"no":34,"studentId":"39610","nickname":"Phakwan"},{"no":35,"studentId":"39611","nickname":"Mamiwe"},{"no":36,"studentId":"39612","nickname":"Mamay"},{"no":37,"studentId":"39613","nickname":"Kak"},{"no":38,"studentId":"39614","nickname":"Kay"},{"no":39,"studentId":"39615","nickname":"Film"},{"no":40,"studentId":"39617","nickname":"Eve"}]},{"grade":"M4","section":8,"students":[{"no":1,"studentId":"36988","nickname":"Fresh"},{"no":2,"studentId":"37064","nickname":"Pao"},{"no":3,"studentId":"37093","nickname":"Khaimook"},{"no":4,"studentId":"37107","nickname":"Best"},{"no":5,"studentId":"37111","nickname":"Beam"},{"no":6,"studentId":"37112","nickname":"Scale"},{"no":7,"studentId":"37118","nickname":"Wan"},{"no":8,"studentId":"37119","nickname":"Euro"},{"no":9,"studentId":"37121","nickname":"Namcha 1"},{"no":10,"studentId":"37124","nickname":"Kan"},{"no":11,"studentId":"37125","nickname":"Ploy"},{"no":12,"studentId":"37134","nickname":"Ice"},{"no":13,"studentId":"37136","nickname":"Pream"},{"no":14,"studentId":"37137","nickname":"Mook"},{"no":15,"studentId":"37141","nickname":"Fahsai"},{"no":16,"studentId":"37145","nickname":"Bumbim"},{"no":17,"studentId":"37146","nickname":"Pakad"},{"no":18,"studentId":"37148","nickname":"Earn"},{"no":19,"studentId":"37150","nickname":"Tonkla"},{"no":20,"studentId":"37156","nickname":"Pun"},{"no":21,"studentId":"37168","nickname":"Cream"},{"no":22,"studentId":"37170","nickname":"Mint"},{"no":23,"studentId":"37177","nickname":"Namtan"},{"no":24,"studentId":"37195","nickname":"Bonus"},{"no":25,"studentId":"39618","nickname":"Kuptun"},{"no":26,"studentId":"39619","nickname":"Tangtai"},{"no":27,"studentId":"39620","nickname":"Worawit"},{"no":28,"studentId":"39621","nickname":"Jirapinya"},{"no":29,"studentId":"39622","nickname":"Monruedi"},{"no":30,"studentId":"39623","nickname":"Penneung"},{"no":31,"studentId":"39624","nickname":"Namcha 2"},{"no":32,"studentId":"39625","nickname":"Por"},{"no":33,"studentId":"39626","nickname":"Kluay"},{"no":34,"studentId":"39627","nickname":"Film"},{"no":35,"studentId":"39628","nickname":"Nattaphon"},{"no":36,"studentId":"39629","nickname":"Kaoiao"},{"no":37,"studentId":"39630","nickname":"Toey"},{"no":38,"studentId":"39631","nickname":"Namwan"},{"no":39,"studentId":"39632","nickname":"Ked"},{"no":40,"studentId":"39633","nickname":"Nam"}]},{"grade":"M4","section":9,"students":[{"no":1,"studentId":"36795","nickname":"Meen"},{"no":2,"studentId":"36897","nickname":"Phokha"},{"no":3,"studentId":"37059","nickname":"Jam"},{"no":4,"studentId":"37066","nickname":"Kungfu 1"},{"no":5,"studentId":"37122","nickname":"Eric"},{"no":6,"studentId":"37138","nickname":"Numnuea"},{"no":7,"studentId":"37153","nickname":"Teerapat"},{"no":8,"studentId":"37176","nickname":"Preaw"},{"no":9,"studentId":"37200","nickname":"Tennis"},{"no":10,"studentId":"37204","nickname":"Kungfu 2"},{"no":11,"studentId":"37207","nickname":"Kafiw"},{"no":12,"studentId":"37208","nickname":"Fiwjer"},{"no":13,"studentId":"37211","nickname":"JJ"},{"no":14,"studentId":"37212","nickname":"Baitoey"},{"no":15,"studentId":"37213","nickname":"Poppy"},{"no":16,"studentId":"37215","nickname":"Smile"},{"no":17,"studentId":"37216","nickname":"Khowhom"},{"no":18,"studentId":"37217","nickname":"Pai"},{"no":19,"studentId":"37218","nickname":"Ying"},{"no":20,"studentId":"37219","nickname":"Tonnam"},{"no":21,"studentId":"37220","nickname":"Satang"},{"no":22,"studentId":"37221","nickname":"Aoey"},{"no":23,"studentId":"37222","nickname":"Nana"},{"no":24,"studentId":"37224","nickname":"Boklook"},{"no":25,"studentId":"37225","nickname":"Fom"},{"no":26,"studentId":"37227","nickname":"Ice"},{"no":27,"studentId":"37228","nickname":"O-May"},{"no":28,"studentId":"37229","nickname":"Gun"},{"no":29,"studentId":"37231","nickname":"Aeiy"},{"no":30,"studentId":"37232","nickname":"Praewa"},{"no":31,"studentId":"37235","nickname":"Nam'ing"},{"no":32,"studentId":"37236","nickname":"AongAey"},{"no":33,"studentId":"37264","nickname":"Phet"},{"no":34,"studentId":"39634","nickname":"Frame"},{"no":35,"studentId":"39635","nickname":"Kao"},{"no":36,"studentId":"39636","nickname":"Tang"},{"no":37,"studentId":"39637","nickname":"Tonkla"},{"no":38,"studentId":"39638","nickname":"Max"},{"no":39,"studentId":"39639","nickname":"Tawan"},{"no":40,"studentId":"39640","nickname":"Sea"}]},{"grade":"M4","section":10,"students":[{"no":1,"studentId":"36894","nickname":"Gust"},{"no":2,"studentId":"36895","nickname":"Khan/ Mab"},{"no":3,"studentId":"36903","nickname":"Kot"},{"no":4,"studentId":"36909","nickname":"Thicha"},{"no":5,"studentId":"36917","nickname":"Napha"},{"no":6,"studentId":"36918","nickname":"Kafae"},{"no":7,"studentId":"36921","nickname":"Grace"},{"no":8,"studentId":"36971","nickname":"Aom"},{"no":9,"studentId":"37000","nickname":"Nanikhing"},{"no":10,"studentId":"37017","nickname":"Ain"},{"no":11,"studentId":"37020","nickname":"Pao"},{"no":12,"studentId":"37034","nickname":"Kaimook"},{"no":13,"studentId":"37040","nickname":"Now"},{"no":14,"studentId":"37194","nickname":"Nai"},{"no":15,"studentId":"37196","nickname":"Tee"},{"no":16,"studentId":"37247","nickname":"Korn"},{"no":17,"studentId":"37259","nickname":"Rin"},{"no":18,"studentId":"39641","nickname":"Mark"},{"no":19,"studentId":"39642","nickname":"Ice"},{"no":20,"studentId":"39643","nickname":"Jaja"},{"no":21,"studentId":"39644","nickname":"Lek"},{"no":22,"studentId":"39645","nickname":"Win"},{"no":23,"studentId":"39646","nickname":"Mint"},{"no":24,"studentId":"39647","nickname":"Kaowtip"},{"no":25,"studentId":"39648","nickname":"Stang"},{"no":26,"studentId":"39649","nickname":"Chompoo"},{"no":27,"studentId":"39650","nickname":"Kam"},{"no":28,"studentId":"39651","nickname":"Ploy"},{"no":29,"studentId":"39652","nickname":"First"}]},{"grade":"M4","section":11,"students":[{"no":1,"studentId":"36896","nickname":"BeeBee"},{"no":2,"studentId":"36898","nickname":"Prab"},{"no":3,"studentId":"36944","nickname":"Real"},{"no":4,"studentId":"36980","nickname":"Mon1"},{"no":5,"studentId":"36987","nickname":"Dan"},{"no":6,"studentId":"37115","nickname":"Gun"},{"no":7,"studentId":"37117","nickname":"Paint"},{"no":8,"studentId":"37164","nickname":"Q"},{"no":9,"studentId":"37167","nickname":"Noona"},{"no":10,"studentId":"37171","nickname":"View"},{"no":11,"studentId":"37202","nickname":"Satang"},{"no":12,"studentId":"37244","nickname":"Fifa"},{"no":13,"studentId":"37273","nickname":"Mon2"},{"no":14,"studentId":"37537","nickname":"Aomsin"},{"no":15,"studentId":"39653","nickname":"Porche"},{"no":16,"studentId":"39654","nickname":"Phum"},{"no":17,"studentId":"39655","nickname":"Jaiya"},{"no":18,"studentId":"39656","nickname":"Pao"},{"no":19,"studentId":"39657","nickname":"Frash"},{"no":20,"studentId":"39658","nickname":"Non"},{"no":21,"studentId":"39659","nickname":"Prink"},{"no":22,"studentId":"39660","nickname":"Irin"}]},{"grade":"M4","section":12,"students":[{"no":1,"studentId":"36787","nickname":"Pancake"},{"no":2,"studentId":"36796","nickname":"Peiyw"},{"no":3,"studentId":"36799","nickname":"Sand"},{"no":4,"studentId":"36914","nickname":"VR"},{"no":5,"studentId":"36932","nickname":"Night"},{"no":6,"studentId":"36952","nickname":"Keane"},{"no":7,"studentId":"36959","nickname":"Khim"},{"no":8,"studentId":"36966","nickname":"Jeed"},{"no":9,"studentId":"36981","nickname":"Art"},{"no":10,"studentId":"37009","nickname":"Meena"},{"no":11,"studentId":"37046","nickname":"Nana"},{"no":12,"studentId":"37055","nickname":"Namoun"},{"no":13,"studentId":"37058","nickname":"Bahmee"},{"no":14,"studentId":"37097","nickname":"Paint"},{"no":15,"studentId":"37104","nickname":"Peemai"},{"no":16,"studentId":"37131","nickname":"Aungpao"},{"no":17,"studentId":"37132","nickname":"Sa"},{"no":18,"studentId":"37159","nickname":"Mammass"},{"no":19,"studentId":"37169","nickname":"View"},{"no":20,"studentId":"37180","nickname":"Kantong"},{"no":21,"studentId":"37181","nickname":"Aem"},{"no":22,"studentId":"37186","nickname":"Kartai"},{"no":23,"studentId":"37198","nickname":"Smart"},{"no":24,"studentId":"37205","nickname":"Jeen"},{"no":25,"studentId":"37206","nickname":"Nuea"},{"no":26,"studentId":"37209","nickname":"Mark"},{"no":27,"studentId":"37233","nickname":"Meen"},{"no":28,"studentId":"37271","nickname":"Zee"},{"no":29,"studentId":"38277","nickname":"Namthip"},{"no":30,"studentId":"39661","nickname":"Tar"},{"no":31,"studentId":"39662","nickname":"Baifern"},{"no":32,"studentId":"39663","nickname":"Yaem"},{"no":33,"studentId":"39664","nickname":"Mew"},{"no":34,"studentId":"39665","nickname":"Kiv"},{"no":35,"studentId":"39666","nickname":"Meiw"}]},{"grade":"M4","section":13,"students":[{"no":1,"studentId":"36900","nickname":"Nuea"},{"no":2,"studentId":"37015","nickname":"Mudmee"},{"no":3,"studentId":"37108","nickname":"Todd"},{"no":4,"studentId":"37135","nickname":"Pim"},{"no":5,"studentId":"37197","nickname":"Kao"},{"no":6,"studentId":"37199","nickname":"Benten"},{"no":7,"studentId":"37230","nickname":"Madmee"},{"no":8,"studentId":"37234","nickname":"Namwan"},{"no":9,"studentId":"37239","nickname":"Pond"},{"no":10,"studentId":"37241","nickname":"Pun"},{"no":11,"studentId":"37242","nickname":"Dome"},{"no":12,"studentId":"37243","nickname":"AB"},{"no":13,"studentId":"37246","nickname":"Pong"},{"no":14,"studentId":"37248","nickname":"Mac"},{"no":15,"studentId":"37249","nickname":"Munggorn"},{"no":16,"studentId":"37250","nickname":"It"},{"no":17,"studentId":"37252","nickname":"Tan"},{"no":18,"studentId":"37254","nickname":"Nam"},{"no":19,"studentId":"37255","nickname":"Endu"},{"no":20,"studentId":"37257","nickname":"Kan"},{"no":21,"studentId":"37258","nickname":"Looktan"},{"no":22,"studentId":"37261","nickname":"Nooin"},{"no":23,"studentId":"37262","nickname":"Nut"},{"no":24,"studentId":"37265","nickname":"Ice"},{"no":25,"studentId":"37268","nickname":"Prae"},{"no":26,"studentId":"37270","nickname":"Kokluai"},{"no":27,"studentId":"39667","nickname":"Pinto"},{"no":28,"studentId":"39668","nickname":"Nick"},{"no":29,"studentId":"39669","nickname":"Sek"},{"no":30,"studentId":"39670","nickname":"Indo"},{"no":31,"studentId":"39671","nickname":"Kong"},{"no":32,"studentId":"39672","nickname":"Thakky"},{"no":33,"studentId":"39673","nickname":"Gress"},{"no":34,"studentId":"39674","nickname":"Guts"},{"no":35,"studentId":"39675","nickname":"First"}]}];
</script>
<script>
/* ============================================================
   CONSTANTS & CONFIG
   ============================================================ */
const TEACHER_PIN = "082713";
const SUPABASE_URL = "https://ekleolcjjpgsvlqyivyy.supabase.co";
const SUPABASE_KEY = "sb_publishable_B0yJw0--56jd012N5PaFcA_z2ay1TIz";
const SUPABASE_REST = `${SUPABASE_URL}/rest/v1/attendance_data`;

const SECTIONS_BY_GRADE = { "M3": [2,4,6,10,12], "M4": [1,2,3,4,5,6,7,8,9,10,11,12,13] };
const GRADES = Object.keys(SECTIONS_BY_GRADE);

// Class schedule — day: 0=Mon,1=Tue,2=Wed,3=Thu,4=Fri
const CLASS_SCHEDULE = {
  "M3": {
    2:  { day:2, start:"13:00", end:"13:50" },
    4:  { day:1, start:"13:50", end:"14:40" },
    6:  { day:3, start:"13:50", end:"14:40" },
    10: { day:3, start:"13:00", end:"13:50" },
    12: { day:0, start:"08:30", end:"09:20" },
  },
  "M4": {
    1:  { day:0, start:"14:40", end:"15:30" },
    2:  { day:4, start:"13:00", end:"13:50" },
    3:  { day:0, start:"13:00", end:"13:50" },
    4:  { day:2, start:"10:10", end:"11:00" },
    5:  { day:0, start:"11:00", end:"11:50" },
    6:  { day:4, start:"10:10", end:"11:00" },
    7:  { day:2, start:"14:40", end:"15:30" },
    8:  { day:1, start:"14:40", end:"15:30" },
    9:  { day:1, start:"13:00", end:"13:50" },
    10: { day:0, start:"09:20", end:"10:10" },
    11: { day:3, start:"11:00", end:"11:50" },
    12: { day:3, start:"14:40", end:"15:30" },
    13: { day:4, start:"11:00", end:"11:50" },
  }
};

const STATUS = { NONE:"none", PRESENT:"present", EXCUSE:"excuse", ABSENT:"absent", SKIPPED:"skipped", LATE:"late" };

/* ============================================================
   PIN MANAGEMENT
   ============================================================ */
let teacherUnlocked = false;

function chooseTeacher() {
  document.getElementById('welcomeOverlay').classList.remove('show');
  // Show PIN box for owner, auth overlay for other teachers
  document.getElementById('pinOverlay').classList.add('show');
  document.getElementById('pinInput').value = '';
  document.getElementById('pinError').style.display = 'none';
  // Add link to teacher login below PIN
  if (!document.getElementById('teacherLoginLink')) {
    const link = document.createElement('div');
    link.id = 'teacherLoginLink';
    link.style.cssText = 'margin-top:10px;border-top:1px dashed var(--line);padding-top:10px;';
    link.innerHTML = '<button class="btn btn-sm" style="width:100%;" onclick="showTeacherAuthOverlay()">Not the owner? Login / Register here</button>';
    document.getElementById('pinOverlay').querySelector('.pin-box').appendChild(link);
  }
  setTimeout(() => document.getElementById('pinInput').focus(), 100);
}

function chooseStudent() {
  document.getElementById('welcomeOverlay').classList.remove('show');
  switchToStudent();
}

function backToWelcome() {
  // No welcome screen — just hide auth overlays and show PIN
  document.getElementById('teacherAuthOverlay').classList.remove('show');
  document.getElementById('pinOverlay').classList.add('show');
  setTimeout(() => document.getElementById('pinInput').focus(), 100);
}

function checkPin() {
  const val = document.getElementById('pinInput').value.trim();
  if (val === TEACHER_PIN) {
    teacherUnlocked = true;
    document.getElementById('pinOverlay').classList.remove('show');
    showTeacherView();
  } else {
    document.getElementById('pinError').style.display = 'block';
    document.getElementById('pinInput').value = '';
    document.getElementById('pinInput').focus();
  }
}

function requirePin() {
  if (teacherUnlocked) {
    showTeacherView();
  } else {
    document.getElementById('welcomeOverlay').classList.remove('show');
    document.getElementById('pinOverlay').classList.add('show');
    document.getElementById('pinInput').value = '';
    document.getElementById('pinError').style.display = 'none';
    setTimeout(() => document.getElementById('pinInput').focus(), 100);
  }
}

function goToStudentView() {
  document.getElementById('pinOverlay').classList.remove('show');
  document.getElementById('welcomeOverlay').classList.remove('show');
  switchToStudent();
}

document.getElementById('pinInput').addEventListener('keydown', (e) => {
  if (e.key === 'Enter') checkPin();
});

/* ============================================================
   STORAGE
   ============================================================ */
function emptySectionData() {
  return { sessions:{}, records:{}, logs:{}, noClassDates:{} };
}

async function loadSectionData(grade, section) {
  const key = `attendance:${grade}:${section}`;
  try {
    const res = await fetch(`${SUPABASE_REST}?key=eq.${encodeURIComponent(key)}&select=value`, {
      headers: { "apikey": SUPABASE_KEY, "Authorization": `Bearer ${SUPABASE_KEY}` }
    });
    if (!res.ok) throw new Error(`Load failed: ${res.status}`);
    const rows = await res.json();
    if (rows && rows.length > 0 && rows[0].value) return rows[0].value;
  } catch(e) { console.error("Load failed", e); }
  return emptySectionData();
}

async function saveSectionData(grade, section, data) {
  // Update logs before saving
  if (!data.logs) data.logs = {};
  const today = getTargetDateISO();
  Object.keys(data.records || {}).forEach(sid => {
    const rec = data.records[sid];
    if (rec.sessionDate === today) {
      if (!data.logs[sid]) data.logs[sid] = [];
      const log = data.logs[sid];
      const existingIdx = log.findIndex(e => e.sessionDate === today);
      if (rec.status === STATUS.NONE) {
        if (existingIdx >= 0) log.splice(existingIdx, 1);
      } else {
        const entry = { sessionDate: rec.sessionDate, status: rec.status, timestamp: rec.timestamp, remark: rec.remark };
        if (existingIdx >= 0) log[existingIdx] = entry;
        else log.push(entry);
      }
    }
  });

  const key = `attendance:${grade}:${section}`;
  try {
    const res = await fetch(`${SUPABASE_REST}?on_conflict=key`, {
      method: "POST",
      headers: {
        "apikey": SUPABASE_KEY, "Authorization": `Bearer ${SUPABASE_KEY}`,
        "Content-Type": "application/json", "Prefer": "resolution=merge-duplicates"
      },
      body: JSON.stringify({ key, value: data, updated_at: new Date().toISOString() })
    });
    if (!res.ok) throw new Error(`Save failed: ${res.status}`);
  } catch(e) { console.error("Save failed", e); }
}

async function loadGlobalData() {
  const key = "attendance:global";
  try {
    const res = await fetch(`${SUPABASE_REST}?key=eq.${encodeURIComponent(key)}&select=value`, {
      headers: { "apikey": SUPABASE_KEY, "Authorization": `Bearer ${SUPABASE_KEY}` }
    });
    if (!res.ok) throw new Error();
    const rows = await res.json();
    if (rows && rows.length > 0 && rows[0].value) return rows[0].value;
  } catch(e) {}
  return { noClassDays:{} };
}

async function saveGlobalData(data) {
  const key = "attendance:global";
  try {
    await fetch(`${SUPABASE_REST}?on_conflict=key`, {
      method: "POST",
      headers: {
        "apikey": SUPABASE_KEY, "Authorization": `Bearer ${SUPABASE_KEY}`,
        "Content-Type": "application/json", "Prefer": "resolution=merge-duplicates"
      },
      body: JSON.stringify({ key, value: data, updated_at: new Date().toISOString() })
    });
  } catch(e) { console.error("Save global failed", e); }
}

/* ============================================================
   DATE / TIME HELPERS (Bangkok UTC+7)
   ============================================================ */
function getBangkokNow() {
  const now = new Date();
  const bkk = new Date(now.getTime() + 7 * 60 * 60 * 1000);
  return bkk;
}

function todayISO() {
  const b = getBangkokNow();
  return `${b.getUTCFullYear()}-${String(b.getUTCMonth()+1).padStart(2,'0')}-${String(b.getUTCDate()).padStart(2,'0')}`;
}

function getCurrentTimeStr() {
  const b = getBangkokNow();
  return `${String(b.getUTCHours()).padStart(2,'0')}:${String(b.getUTCMinutes()).padStart(2,'0')}`;
}

function getDayOfWeek() {
  // 0=Mon..4=Fri, returns -1 for weekends
  const d = getBangkokNow().getUTCDay();
  if (d === 0 || d === 6) return -1;
  return d - 1;
}

function getDayOfWeekFromISO(dateISO) {
  const d = new Date(dateISO + "T00:00:00Z").getUTCDay();
  if (d === 0 || d === 6) return -1;
  return d - 1;
}

// Target date for session operations (today by default, or recovery date)
let _targetDateISO = null;
function getTargetDateISO() { return _targetDateISO || todayISO(); }
function setTargetDate(iso) { _targetDateISO = iso; }
function clearTargetDate() { _targetDateISO = null; }

function formatTimestamp(date) {
  const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  let h = date.getHours(); const m = date.getMinutes();
  const ampm = h >= 12 ? "PM" : "AM";
  h = h % 12; if (h === 0) h = 12;
  const mm = m < 10 ? ("0"+m) : m;
  return `${months[date.getMonth()]} ${String(date.getDate()).padStart(2,'0')}, ${days[date.getDay()]} ${h}:${mm} ${ampm} ${date.getFullYear()}`;
}

function formatDateLong(dateISO) {
  const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  const d = new Date(dateISO + "T00:00:00");
  return `${months[d.getMonth()]} ${String(d.getDate()).padStart(2,'0')}, ${days[d.getDay()]}`;
}

/* ============================================================
   SEMESTER CALENDAR
   ============================================================ */
const SEMESTER_START_ISO = "2026-05-18";
const SEMESTER_TOTAL_WEEKS = 16;
const LIVE_TRACKING_START_ISO = "2026-06-15";
const MONTHS_FULL = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const MONTHS_SHORT = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

function addDays(isoDate, days) {
  const d = new Date(isoDate + "T00:00:00");
  d.setDate(d.getDate() + days);
  return d;
}
function dateToISO(d) {
  return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
}

function buildSemesterCalendar() {
  const cal = [];
  cal.push(makeWeekEntry(null, SEMESTER_START_ISO));
  for (let w = 1; w <= SEMESTER_TOTAL_WEEKS; w++) {
    cal.push(makeWeekEntry(w, dateToISO(addDays(SEMESTER_START_ISO, w * 7))));
  }
  return cal;
}

function makeWeekEntry(weekNum, startISO) {
  const start = new Date(startISO + "T00:00:00");
  const end = addDays(startISO, 4);
  let rangeStr, rangeStrFull;
  if (start.getMonth() === end.getMonth()) {
    rangeStr = `${MONTHS_SHORT[start.getMonth()]} ${start.getDate()}-${end.getDate()}`;
    rangeStrFull = `${MONTHS_FULL[start.getMonth()]} ${start.getDate()}-${end.getDate()} ${end.getFullYear()}`;
  } else {
    rangeStr = `${MONTHS_SHORT[start.getMonth()]} ${start.getDate()} - ${MONTHS_SHORT[end.getMonth()]} ${end.getDate()}`;
    rangeStrFull = `${MONTHS_FULL[start.getMonth()]} ${start.getDate()} - ${MONTHS_FULL[end.getMonth()]} ${end.getDate()} ${end.getFullYear()}`;
  }
  const label = weekNum === null ? "Orientation Week" : `Week ${weekNum}`;
  return { weekNum, label, startISO, endISO: dateToISO(end), rangeStr, rangeStrFull, fullLabel: `${label} ${rangeStrFull}` };
}

const SEMESTER_CALENDAR = buildSemesterCalendar();

function findCalendarWeek(dateISO) {
  const date = new Date(dateISO + "T00:00:00");
  for (let i = 0; i < SEMESTER_CALENDAR.length; i++) {
    const w = SEMESTER_CALENDAR[i];
    const weekStart = new Date(w.startISO + "T00:00:00");
    const weekEndSun = addDays(w.startISO, 6);
    if (date >= weekStart && date <= weekEndSun) return w;
  }
  const date0 = new Date(SEMESTER_CALENDAR[0].startISO + "T00:00:00");
  if (date < date0) return SEMESTER_CALENDAR[0];
  return SEMESTER_CALENDAR[SEMESTER_CALENDAR.length - 1];
}

function getWeekInfo(_, dateISO) {
  const w = findCalendarWeek(dateISO);
  return { weekNum: w.weekNum === null ? 0 : w.weekNum, weekLabel: w.label, rangeStr: w.rangeStr, rangeStrFull: w.rangeStrFull, fullLabel: w.fullLabel };
}

/* ============================================================
   SCHEDULE HELPERS
   ============================================================ */
function getSchedule(grade, section) {
  return CLASS_SCHEDULE[grade]?.[section] || null;
}

function timeToMinutes(timeStr) {
  const [h, m] = timeStr.split(':').map(Number);
  return h * 60 + m;
}

function isWithinSchedule(grade, section, dateISO) {
  // Returns true if current Bangkok time is within the class window on dateISO's day of week
  const sched = getSchedule(grade, section);
  if (!sched) return false;
  const targetDay = getDayOfWeekFromISO(dateISO);
  if (targetDay !== sched.day) return false;
  // Must be used on the same day of week as the target date
  const todayDay = getDayOfWeek();
  if (todayDay !== sched.day) return false;
  const nowMins = timeToMinutes(getCurrentTimeStr());
  const startMins = timeToMinutes(sched.start);
  const endMins = timeToMinutes(sched.end);
  return nowMins >= startMins && nowMins < endMins;
}

function getCountdownStr(grade, section) {
  const sched = getSchedule(grade, section);
  if (!sched) return '';
  const nowMins = timeToMinutes(getCurrentTimeStr());
  const endMins = timeToMinutes(sched.end);
  const remaining = endMins - nowMins;
  if (remaining <= 0) return '0:00';
  const h = Math.floor(remaining / 60);
  const m = remaining % 60;
  return h > 0 ? `${h}h ${m}m` : `${m} min`;
}

function generateToken() {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  return Array.from({length:8}, () => chars[Math.floor(Math.random()*chars.length)]).join('');
}

/* ============================================================
   ROSTER
   ============================================================ */
function getRoster(grade, section) {
  const found = ROSTER.find(r => r.grade === grade && r.section === section);
  return found ? found.students : [];
}

/* ============================================================
   NO CLASS INFO
   ============================================================ */
async function getNoClassInfo(grade, section, dateISO) {
  const globalData = await loadGlobalData();
  const sectionData = await loadSectionData(grade, section);
  const whole = globalData?.noClassDays?.[dateISO] || null;
  const sectionMarker = sectionData?.noClassDates?.[dateISO] || null;
  return { whole, section: sectionMarker, any: !!(whole || sectionMarker), sectionData, globalData };
}

/* ============================================================
   TOAST
   ============================================================ */
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(t._timer);
  t._timer = setTimeout(() => t.classList.remove('show'), 2200);
}

/* ============================================================
   TAB SWITCHING
   ============================================================ */
let currentGrade = 'M3';
let currentSection = 2;
let _clockTimer = null;
let _sessionTimer = null;
let _autoCheckTimer = null;

function showTeacherView() {
  document.getElementById('teacherView').style.display = 'block';
  document.getElementById('studentView').style.display = 'none';
  clearTargetDate();
  renderRoster();
  startAutoCheckTimer();
}

function switchToStudent() {
  document.getElementById('studentView').style.display = 'block';
  document.getElementById('teacherView').style.display = 'none';
  // Show class info from QR
  const infoEl = document.getElementById('stuClassInfo');
  if (infoEl && _qrGrade && _qrSection) {
    infoEl.textContent = `📋 ${_qrGrade} / Section ${_qrSection}`;
  }
  stopAutoCheckTimer();
  renderSessionInfo();
}

/* ============================================================
   AUTO-CHECK TIMER (checks every 30s if session should open/close in browser)
   Note: real auto open/close is handled by edge function.
   This just refreshes the UI to reflect database state.
   ============================================================ */
function startAutoCheckTimer() {
  stopAutoCheckTimer();
  _autoCheckTimer = setInterval(() => {
    renderSessionButton();
    renderRoster();
  }, 30000);
}

function stopAutoCheckTimer() {
  if (_autoCheckTimer) { clearInterval(_autoCheckTimer); _autoCheckTimer = null; }
}

/* ============================================================
   GRADE/SECTION SELECTS
   ============================================================ */
function populateSectionOptions(selectEl, grade) {
  selectEl.innerHTML = '';
  (SECTIONS_BY_GRADE[grade] || []).forEach(s => {
    const opt = document.createElement('option');
    opt.value = s; opt.textContent = "Section " + s;
    selectEl.appendChild(opt);
  });
}

// Teacher selects
const gradeSelect = document.getElementById('gradeSelect');
const sectionSelect = document.getElementById('sectionSelect');
GRADES.forEach(g => {
  const opt = document.createElement('option');
  opt.value = g; opt.textContent = g;
  gradeSelect.appendChild(opt);
});
populateSectionOptions(sectionSelect, gradeSelect.value);
currentGrade = gradeSelect.value;
currentSection = parseInt(sectionSelect.value);

gradeSelect.addEventListener('change', () => {
  currentGrade = gradeSelect.value;
  populateSectionOptions(sectionSelect, currentGrade);
  currentSection = parseInt(sectionSelect.value);
  clearTargetDate();
  _recoveryActive = false;
  _recoveryDateISO = null;
  renderRoster();
  renderQR();
});
sectionSelect.addEventListener('change', () => {
  currentSection = parseInt(sectionSelect.value);
  clearTargetDate();
  _recoveryActive = false;
  _recoveryDateISO = null;
  renderRoster();
  renderQR();
});

// Student selects
const stuGrade = document.getElementById('stuGrade');
const stuSection = document.getElementById('stuSection');
GRADES.forEach(g => {
  const opt = document.createElement('option');
  opt.value = g; opt.textContent = g;
  stuGrade.appendChild(opt);
});
populateSectionOptions(stuSection, stuGrade.value);
// stuGrade listener removed — grade set from QR
// stuSection listener removed — section set from QR

/* ============================================================
   QR CODE
   ============================================================ */
function getBaseStudentURL() {
  const url = new URL(window.location.href);
  url.search = ''; url.hash = '';
  return url.toString();
}

async function buildStudentLink(grade, section, dateISO) {
  const base = `${getBaseStudentURL()}?mode=student&grade=${grade}&section=${section}`;
  // QR is only active if currently within schedule window
  if (!isCurrentlyInWindow(grade, section)) {
    return base; // no token = expired QR for students
  }
  const data = await loadSectionData(grade, section);
  const session = data.sessions?.[dateISO];
  if (session && session.opened && !session.completed && session.token) {
    return `${base}&token=${session.token}&scheduleEnd=${getSchedule(grade,section)?.end||''}`;
  }
  return base;
}

async function renderQR() {
  const grade = currentGrade, section = currentSection;
  const dateISO = getTargetDateISO();
  const link = await buildStudentLink(grade, section, dateISO);
  document.getElementById('qrLink').textContent = link;
  const qrEl = document.getElementById('qrcode');
  qrEl.innerHTML = '';
  try {
    new QRCode(qrEl, { text: link, width: 180, height: 180, colorDark: "#1F2B3E", colorLight: "#ffffff", correctLevel: QRCode.CorrectLevel.M });
  } catch(e) { console.error("QR failed", e); }
}

const qrFullscreen = document.getElementById('qrFullscreen');
document.getElementById('fullscreenQrBtn').addEventListener('click', async () => {
  const grade = currentGrade, section = currentSection;
  const link = await buildStudentLink(grade, section, getTargetDateISO());
  document.getElementById('qrfLabel').textContent = `${grade} / Section ${section}`;
  qrFullscreen.classList.add('show');
  const qrfEl = document.getElementById('qrcodeFullscreen');
  qrfEl.innerHTML = '';
  try {
    new QRCode(qrfEl, { text: link, width: 360, height: 360, colorDark: "#1F2B3E", colorLight: "#ffffff", correctLevel: QRCode.CorrectLevel.M });
  } catch(e) {}
});
qrFullscreen.addEventListener('click', () => qrFullscreen.classList.remove('show'));
document.addEventListener('keydown', e => { if (e.key === 'Escape') qrFullscreen.classList.remove('show'); });

/* ============================================================
   SESSION BUTTON & QR LOGIC
   ============================================================ */

// Track recovery state in memory only (resets on page close)
let _recoveryActive = false; // true when teacher has initiated a recovery session
let _recoveryDateISO = null; // the missed date being recovered
let _countdownInterval = null;

// Returns true if current Bangkok time is within the schedule window for grade/section
function isCurrentlyInWindow(grade, section) {
  const sched = getSchedule(grade, section);
  if (!sched) return false;
  const todayDay = getDayOfWeek();
  if (todayDay !== sched.day) return false;
  const nowMins = timeToMinutes(getCurrentTimeStr());
  const startMins = timeToMinutes(sched.start);
  const endMins = timeToMinutes(sched.end);
  return nowMins >= startMins && nowMins < endMins;
}

// QR is valid if current time is within this class's schedule window TODAY
// For recovery sessions, QR is valid if recovery is active and within window
function isQRActive(grade, section) {
  if (_recoveryActive && _recoveryDateISO) {
    return isCurrentlyInWindow(grade, section);
  }
  return isCurrentlyInWindow(grade, section);
}

function getCountdownStr(grade, section) {
  const sched = getSchedule(grade, section);
  if (!sched) return '';
  const nowMins = timeToMinutes(getCurrentTimeStr());
  const endMins = timeToMinutes(sched.end);
  const remaining = endMins - nowMins;
  if (remaining <= 0) return 'Session time ended';
  const h = Math.floor(remaining / 60);
  const m = remaining % 60;
  return h > 0 ? `${h}h ${m}m remaining` : `${m} min remaining`;
}

async function renderSessionButton() {
  const grade = currentGrade, section = currentSection;
  const dateISO = getTargetDateISO();
  const sched = getSchedule(grade, section);
  const data = await loadSectionData(grade, section);
  const session = data.sessions?.[dateISO];
  const wrap = document.getElementById('sessionBtnWrap');

  const ncInfo = await getNoClassInfo(grade, section, dateISO);
  if (ncInfo.any) { wrap.innerHTML = ''; return; }

  if (_countdownInterval) { clearInterval(_countdownInterval); _countdownInterval = null; }

  const schedInfo = sched ? (() => {
    const dayNames = ["Monday","Tuesday","Wednesday","Thursday","Friday"];
    return `<div class="schedule-info">📅 ${dayNames[sched.day]}s &nbsp;⏰ ${sched.start}–${sched.end}</div>`;
  })() : '';

  const isRecovery = _recoveryActive && _recoveryDateISO;
  const withinWindow = isCurrentlyInWindow(grade, section);

  if (!isRecovery) {
    // Normal mode — always greyed out, sessions managed by edge function
    const isOpen = session && session.opened && !session.completed;
    if (isOpen) {
      // Show green in-session with countdown (auto-managed)
      wrap.innerHTML = `
        ${schedInfo}
        <button class="btn btn-session-green" disabled>🟢 In Session (Auto)</button>
        <div class="countdown-bar" id="countdownBar">⏱ ${getCountdownStr(grade, section)}</div>
      `;
      _countdownInterval = setInterval(() => {
        const bar = document.getElementById('countdownBar');
        if (bar) bar.textContent = `⏱ ${getCountdownStr(grade, section)}`;
      }, 30000);
    } else {
      wrap.innerHTML = `
        ${schedInfo}
        <button class="btn btn-session-disabled" disabled>🔘 Session (Auto-managed)</button>
        <div class="hint" style="margin-top:4px;">Sessions open and close automatically at scheduled times</div>
      `;
    }
    return;
  }

  // Recovery mode
  if (!withinWindow) {
    wrap.innerHTML = `
      ${schedInfo}
      <button class="btn btn-session-disabled" disabled>🔘 Start Session</button>
      <div class="hint" style="margin-top:4px;color:var(--red);">Outside schedule window — recovery only works during ${sched?.start}–${sched?.end}</div>
    `;
    return;
  }

  const isOpen = session && session.opened && !session.completed;

  if (isOpen) {
    wrap.innerHTML = `
      ${schedInfo}
      <button class="btn btn-session-green" id="sessionToggleBtn">🟢 In Session — tap to close</button>
      <div class="countdown-bar" id="countdownBar">⏱ ${getCountdownStr(grade, section)}</div>
    `;
    _countdownInterval = setInterval(() => {
      const bar = document.getElementById('countdownBar');
      if (bar) bar.textContent = `⏱ ${getCountdownStr(grade, section)}`;
    }, 30000);
    document.getElementById('sessionToggleBtn').addEventListener('click', async () => {
      await closeSession(grade, section, dateISO);
      renderSessionButton();
    });
    document.getElementById('completeBtn').removeAttribute('disabled');
  } else {
    wrap.innerHTML = `
      ${schedInfo}
      <button class="btn btn-session-yellow" id="sessionToggleBtn">🟡 Start Session</button>
      <div class="hint" style="margin-top:4px;">Recovery for ${formatDateLong(_recoveryDateISO)}</div>
    `;
    document.getElementById('sessionToggleBtn').addEventListener('click', async () => {
      await openSession(grade, section, dateISO);
      renderSessionButton();
      renderQR();
    });
    document.getElementById('completeBtn').setAttribute('disabled','disabled');
  }
}

async function openSession(grade, section, dateISO) {
  const data = await loadSectionData(grade, section);
  if (!data.sessions) data.sessions = {};
  if (!data.records) data.records = {};
  const now = new Date().toISOString();
  data.sessions[dateISO] = { opened:true, completed:false, openedAt:now, completedAt:null, token:generateToken() };
  const roster = getRoster(grade, section);
  roster.forEach(stu => {
    const rec = data.records[stu.studentId];
    if (!rec || rec.sessionDate !== dateISO) {
      data.records[stu.studentId] = { status:STATUS.NONE, timestamp:null, sessionDate:dateISO, remark:"" };
    }
  });
  await saveSectionData(grade, section, data);
  showToast("Session opened!");
  renderRoster();
  renderQR();
}

async function closeSession(grade, section, dateISO) {
  const data = await loadSectionData(grade, section);
  const now = new Date().toISOString();
  if (!data.sessions?.[dateISO]) return;
  const roster = getRoster(grade, section);
  roster.forEach(stu => {
    const rec = data.records[stu.studentId];
    if (!rec || rec.status === STATUS.NONE) {
      data.records[stu.studentId] = {
        status: STATUS.ABSENT, timestamp: now, sessionDate: dateISO,
        remark: "No scan recorded — marked absent at attendance close"
      };
    }
  });
  data.sessions[dateISO].completed = true;
  data.sessions[dateISO].completedAt = now;
  await saveSectionData(grade, section, data);
  showToast("Session closed — unscanned students marked Absent");
  renderRoster();
  renderQR();
}

// Close attendance button
document.getElementById('completeBtn').addEventListener('click', () => {
  closeSession(currentGrade, currentSection, getTargetDateISO());
});

/* ============================================================
   MISSED ATTENDANCE RECOVERY
   ============================================================ */
function renderRecoveryCard() {
  const grade = currentGrade, section = currentSection;
  const sched = getSchedule(grade, section);
  if (!sched) return;

  const card = document.getElementById('recoveryCard');
  card.style.display = 'block';

  const dateInput = document.getElementById('recoveryDate');
  const hintEl = document.getElementById('recoveryHint');
  const openBtn = document.getElementById('recoveryOpenBtn');

  dateInput.max = (() => {
    // Max is yesterday
    const d = new Date(getBangkokNow().getTime() - 86400000);
    return dateToISO(d);
  })();

  dateInput.addEventListener('change', () => {
    const selected = dateInput.value;
    if (!selected) { hintEl.textContent = ''; openBtn.disabled = true; return; }

    const selectedDay = getDayOfWeekFromISO(selected);
    const todayDay = getDayOfWeek();
    const dayNames = ["Monday","Tuesday","Wednesday","Thursday","Friday"];

    if (selectedDay !== sched.day) {
      hintEl.innerHTML = `<span style="color:var(--red)">⚠️ ${grade}/Section ${section} meets on ${dayNames[sched.day]}s. Please select a ${dayNames[sched.day]}.</span>`;
      openBtn.disabled = true;
      _recoveryActive = false;
      _recoveryDateISO = null;
      return;
    }

    if (todayDay !== sched.day) {
      hintEl.innerHTML = `<span style="color:var(--red)">⚠️ Recovery sessions can only be opened on ${dayNames[sched.day]}s. Come back on a ${dayNames[sched.day]}.</span>`;
      openBtn.disabled = true;
      _recoveryActive = false;
      _recoveryDateISO = null;
      return;
    }

    const withinTime = isCurrentlyInWindow(grade, section);
    if (!withinTime) {
      hintEl.innerHTML = `<span style="color:var(--red)">⚠️ Recovery only works between ${sched.start}–${sched.end}. Current time is outside the window.</span>`;
      openBtn.disabled = true;
      _recoveryActive = false;
      _recoveryDateISO = null;
      return;
    }

    hintEl.innerHTML = `<span style="color:var(--green)">✅ Ready to recover ${formatDateLong(selected)} for ${grade}/Section ${section} (${sched.start}–${sched.end})</span>`;
    openBtn.disabled = false;
    // Activate recovery mode
    _recoveryActive = true;
    _recoveryDateISO = selected;
    setTargetDate(selected);
    renderSessionButton();
  });

  openBtn.addEventListener('click', async () => {
    const selected = dateInput.value;
    if (!selected) return;
    _recoveryActive = true;
    _recoveryDateISO = selected;
    setTargetDate(selected);
    await openSession(grade, section, selected);
    renderSessionButton();
    renderQR();
    showToast(`Recovery session started for ${formatDateLong(selected)}`);
  });
}

/* ============================================================
   NO CLASS CONTROLS
   ============================================================ */
async function renderNoClass() {
  const grade = currentGrade, section = currentSection;
  const today = todayISO();
  const wrap = document.getElementById('noClassWrap');
  document.getElementById('noClassDateLabel').textContent = `${formatDateLong(today)}, ${new Date().getFullYear()} · ${grade} / Section ${section}`;

  const info = await getNoClassInfo(grade, section, today);
  let html = '';

  if (info.whole) {
    html += `<div class="nc-marker"><div class="nc-icon">📅</div><div class="nc-text"><div class="nc-title">Whole day — ${info.whole.reason}</div><div class="nc-sub">Applies to all sections</div></div><button class="btn btn-sm" data-nc-remove="whole">✕ Remove</button></div>`;
  }
  if (info.section) {
    html += `<div class="nc-marker"><div class="nc-icon">🚫</div><div class="nc-text"><div class="nc-title">This section — ${info.section.reason}</div><div class="nc-sub">${grade} / Section ${section} only</div></div><button class="btn btn-sm" data-nc-remove="section">✕ Remove</button></div>`;
  }
  if (info.any) html += `<div class="hint" style="margin-top:6px;">QR check-in is disabled for this section today.</div>`;

  const actionBtns = [];
  if (!info.whole) actionBtns.push(`<button class="btn btn-sm" id="ncMarkWholeBtn">📅 Mark whole day No Class</button>`);
  if (!info.section) actionBtns.push(`<button class="btn btn-sm" id="ncMarkSectionBtn">🚫 Mark this section No Class</button>`);
  if (actionBtns.length > 0) html += `<div class="flex-between" style="gap:8px;margin-top:${info.any?'10px':'0'};">${actionBtns.join('')}</div>`;

  html += `
    <div id="ncWholeForm" style="display:none;margin-top:10px;">
      <label>Reason (whole day)</label>
      <select id="ncWholeReasonSelect" style="margin-bottom:8px;">
        <option value="Holiday">Holiday</option>
        <option value="School activity">School activity</option>
        <option value="custom">Custom...</option>
      </select>
      <textarea class="nc-input" id="ncWholeCustom" placeholder="e.g. Christmas Day" style="display:none;margin-bottom:8px;"></textarea>
      <div class="flex-between" style="gap:8px;">
        <button class="btn btn-sm btn-primary" id="ncWholeApplyBtn">✅ Apply to all sections</button>
        <button class="btn btn-sm" id="ncWholeCancelBtn">Cancel</button>
      </div>
    </div>
    <div id="ncSectionForm" style="display:none;margin-top:10px;">
      <label>Remark (this section only)</label>
      <textarea class="nc-input" id="ncSectionCustom" placeholder="e.g. Teachers meeting" style="margin-bottom:8px;"></textarea>
      <div class="flex-between" style="gap:8px;">
        <button class="btn btn-sm btn-primary" id="ncSectionApplyBtn">✅ Apply to this section</button>
        <button class="btn btn-sm" id="ncSectionCancelBtn">Cancel</button>
      </div>
    </div>`;
  wrap.innerHTML = html;

  wrap.querySelectorAll('button[data-nc-remove]').forEach(btn => {
    btn.addEventListener('click', async () => {
      const which = btn.getAttribute('data-nc-remove');
      if (which === 'whole') {
        const gd = await loadGlobalData();
        if (gd.noClassDays) delete gd.noClassDays[today];
        await saveGlobalData(gd);
      } else {
        const sd = await loadSectionData(grade, section);
        if (sd.noClassDates) delete sd.noClassDates[today];
        await saveSectionData(grade, section, sd);
      }
      showToast("No Class marker removed");
      renderNoClass(); renderQR();
    });
  });

  const markWholeBtn = document.getElementById('ncMarkWholeBtn');
  if (markWholeBtn) markWholeBtn.addEventListener('click', () => {
    document.getElementById('ncWholeForm').style.display = 'block';
    markWholeBtn.style.display = 'none';
    document.getElementById('ncMarkSectionBtn')?.style.setProperty('display','none');
  });
  const markSectionBtn = document.getElementById('ncMarkSectionBtn');
  if (markSectionBtn) markSectionBtn.addEventListener('click', () => {
    document.getElementById('ncSectionForm').style.display = 'block';
    markSectionBtn.style.display = 'none';
    document.getElementById('ncMarkWholeBtn')?.style.setProperty('display','none');
  });

  const wholeSelect = document.getElementById('ncWholeReasonSelect');
  const wholeCustom = document.getElementById('ncWholeCustom');
  if (wholeSelect) wholeSelect.addEventListener('change', () => {
    wholeCustom.style.display = wholeSelect.value === 'custom' ? 'block' : 'none';
  });

  document.getElementById('ncWholeCancelBtn')?.addEventListener('click', () => renderNoClass());
  document.getElementById('ncWholeApplyBtn')?.addEventListener('click', async () => {
    let reason = wholeSelect.value;
    if (reason === 'custom') { reason = wholeCustom.value.trim(); if (!reason) { showToast("Please enter a remark"); return; } }
    const gd = await loadGlobalData();
    if (!gd.noClassDays) gd.noClassDays = {};
    gd.noClassDays[today] = { reason };
    await saveGlobalData(gd);
    showToast("Marked whole day as No Class");
    renderNoClass(); renderQR();
  });
  document.getElementById('ncSectionCancelBtn')?.addEventListener('click', () => renderNoClass());
  document.getElementById('ncSectionApplyBtn')?.addEventListener('click', async () => {
    const custom = document.getElementById('ncSectionCustom').value.trim();
    if (!custom) { showToast("Please enter a remark"); return; }
    const sd = await loadSectionData(grade, section);
    if (!sd.noClassDates) sd.noClassDates = {};
    sd.noClassDates[today] = { reason: custom };
    await saveSectionData(grade, section, sd);
    showToast("Marked this section as No Class");
    renderNoClass(); renderQR();
  });
}

/* ============================================================
   SESSION BANNER
   ============================================================ */
async function renderSessionBanner(data) {
  const grade = currentGrade, section = currentSection;
  const dateISO = getTargetDateISO();
  const session = data.sessions?.[dateISO];
  const wrap = document.getElementById('sessionBannerWrap');
  const qrWrapEl = document.getElementById('qrWrapEl');
  const qrHintEl = document.getElementById('qrHintEl');
  const qrButtonsEl = document.getElementById('qrButtonsEl');
  const completeHint = document.getElementById('completeHint');

  const ncInfo = await getNoClassInfo(grade, section, dateISO);
  if (ncInfo.any) {
    const reasons = [ncInfo.whole, ncInfo.section].filter(Boolean).map(r => r.reason);
    wrap.innerHTML = `<div class="nc-banner"><div class="nc-banner-title">🚫 No Class</div><div class="nc-banner-sub">${reasons.join(' · ')}</div></div>`;
    qrWrapEl.style.display = 'none'; qrHintEl.style.display = 'none'; qrButtonsEl.style.display = 'none';
    completeHint.style.display = 'none';
    return;
  }
  qrWrapEl.style.display = ''; qrHintEl.style.display = ''; qrButtonsEl.style.display = '';

  const isRecovery = _targetDateISO && _targetDateISO !== todayISO();
  const dateLabel = isRecovery ? `Recovery: ${formatDateLong(dateISO)}` : dateISO;

  if (session && session.completed) {
    wrap.innerHTML = `<div class="session-banner" style="background:var(--red-bg);border-color:var(--red);">
      <div><div class="label">🔒 Session Closed — ${dateLabel}</div><div class="sub">Closed: ${session.completedAt ? formatTimestamp(new Date(session.completedAt)) : ''}</div></div>
      <button class="btn btn-sm" id="reopenSessionBtn">↩️ Reopen</button>
    </div>`;
    completeHint.style.display = 'block';
    completeHint.innerHTML = `Unscanned students marked <strong style="color:var(--red)">Absent</strong>. Override below or click <strong>Reopen</strong> to let students scan again.`;
    document.getElementById('reopenSessionBtn').addEventListener('click', async () => {
      const d = await loadSectionData(grade, section);
      if (d.sessions?.[dateISO]) {
        d.sessions[dateISO].completed = false;
        d.sessions[dateISO].completedAt = null;
        d.sessions[dateISO].token = generateToken();
        await saveSectionData(grade, section, d);
        showToast("Session reopened");
        renderRoster(); renderQR();
      }
    });
  } else if (session && session.opened) {
    wrap.innerHTML = `<div class="session-banner"><div><div class="label">🟢 Session Open — ${dateLabel}</div><div class="sub">Students can scan now</div></div></div>`;
    completeHint.style.display = 'none';
  } else {
    wrap.innerHTML = `<div class="session-banner"><div><div class="label">⚪ No session — ${dateLabel}</div><div class="sub">Session will open automatically at scheduled time</div></div></div>`;
    completeHint.style.display = 'none';
  }
}

/* ============================================================
   ROSTER
   ============================================================ */
async function renderRoster() {
  const grade = currentGrade, section = currentSection;
  const dateISO = getTargetDateISO();
  document.getElementById('rosterTitle').textContent = `${grade} / Section ${section}`;
  document.getElementById('todayPill').textContent = formatTimestamp(new Date());

  const roster = getRoster(grade, section);
  const data = await loadSectionData(grade, section);
  const session = data.sessions?.[dateISO];

  await renderNoClass();
  await renderSessionBanner(data);
  await renderSessionButton();
  renderRecoveryCard();
  renderPastWeeks();

  let countGreen=0, countBlue=0, countRed=0, countPink=0, countPurple=0, countNone=0;
  const tbody = document.getElementById('rosterBody');
  tbody.innerHTML = '';

  roster.forEach(stu => {
    const rec = data.records?.[stu.studentId];
    let status = STATUS.NONE, ts = null, remark = "";
    if (rec && rec.sessionDate === dateISO) {
      status = rec.status; ts = rec.timestamp; remark = rec.remark || "";
    }

    if (status === STATUS.PRESENT) countGreen++;
    else if (status === STATUS.LATE) countPurple++;
    else if (status === STATUS.EXCUSE) countBlue++;
    else if (status === STATUS.ABSENT) countRed++;
    else if (status === STATUS.SKIPPED) countPink++;
    else countNone++;

    const tr = document.createElement('tr');
    let stampHtml, tsHtml;
    const wi = ts ? getWeekInfo(null, dateISO) : null;

    if (status === STATUS.PRESENT) {
      stampHtml = `<div class="stamp stamp-green">✓</div><div><div class="status-name" style="color:var(--green)">Present</div><div class="remark-text">${remark||'Scanned QR'}</div></div>`;
      tsHtml = ts ? `${formatTimestamp(new Date(ts))}${wi?`<br>${wi.weekLabel} · ${wi.rangeStr}`:''}` : '—';
    } else if (status === STATUS.LATE) {
      stampHtml = `<div class="stamp stamp-purple">✕</div><div><div class="status-name" style="color:var(--purple)">Late</div><div class="remark-text">${remark||'Arrived late to class'}</div></div>`;
      tsHtml = ts ? formatTimestamp(new Date(ts)) : '—';
    } else if (status === STATUS.EXCUSE) {
      stampHtml = `<div class="stamp stamp-blue">✓</div><div><div class="status-name" style="color:var(--blue)">Excuse</div><div class="remark-text">${remark||'Excused by teacher'}</div></div>`;
      tsHtml = ts ? formatTimestamp(new Date(ts)) : '—';
    } else if (status === STATUS.ABSENT) {
      stampHtml = `<div class="stamp stamp-red">✕</div><div><div class="status-name" style="color:var(--red)">Absent</div><div class="remark-text">${remark||'No scan recorded'}</div></div>`;
      tsHtml = ts ? formatTimestamp(new Date(ts)) : '—';
    } else if (status === STATUS.SKIPPED) {
      stampHtml = `<div class="stamp stamp-pink">✕</div><div><div class="status-name" style="color:var(--pink)">Skipped</div><div class="remark-text">${remark||'Marked as skipped'}</div></div>`;
      tsHtml = ts ? formatTimestamp(new Date(ts)) : '—';
    } else {
      stampHtml = `<div class="stamp stamp-gray">·</div><div><div class="status-name" style="color:#9aa3b2">Pending</div><div class="remark-text">Waiting for scan</div></div>`;
      tsHtml = '—';
    }

    tr.innerHTML = `
      <td class="col-no">${stu.no}</td>
      <td class="col-id">${stu.studentId}</td>
      <td>${stu.thaiName||'—'}</td>
      <td>${stu.nickname||'—'}</td>
      <td><div class="col-status">${stampHtml}</div></td>
      <td class="ts-text">${tsHtml}</td>`;
    const tdActions = document.createElement('td');
    tdActions.innerHTML = `<div class="status-actions">
      <button class="btn btn-sm btn-purple" data-action="late" data-id="${stu.studentId}">Late</button>
      <button class="btn btn-sm btn-pink" data-action="skipped" data-id="${stu.studentId}">Skipped</button>
      <button class="btn btn-sm btn-blue" data-action="excuse" data-id="${stu.studentId}">Excuse</button>
      <button class="btn btn-sm btn-red" data-action="absent" data-id="${stu.studentId}">Absent</button>
    </div>`;
    tr.appendChild(tdActions);
    tbody.appendChild(tr);
  });

  document.getElementById('statsRow').innerHTML = `
    <div class="stat green"><div class="num">${countGreen}</div><div class="lbl">Present</div></div>
    <div class="stat" style="--num-color:var(--purple);"><div class="num" style="color:var(--purple);">${countPurple}</div><div class="lbl">Late</div></div>
    <div class="stat blue"><div class="num">${countBlue}</div><div class="lbl">Excused</div></div>
    <div class="stat red"><div class="num">${countRed}</div><div class="lbl">Absent</div></div>
    <div class="stat pink"><div class="num">${countPink}</div><div class="lbl">Skipped</div></div>
    <div class="stat"><div class="num">${countNone}</div><div class="lbl">Pending</div></div>`;

  tbody.querySelectorAll('button[data-action]').forEach(btn => {
    btn.addEventListener('click', async () => {
      await manualOverride(grade, section, btn.getAttribute('data-id'), btn.getAttribute('data-action'));
    });
  });

  renderQR();
}

async function manualOverride(grade, section, studentId, action) {
  const data = await loadSectionData(grade, section);
  const dateISO = getTargetDateISO();
  // For recovery: timestamp uses the missed DATE but real current TIME
  const realNow = new Date();
  let tsISO;
  if (_recoveryActive && _recoveryDateISO) {
    // Build timestamp: missed date + current time
    const missedDate = new Date(_recoveryDateISO + "T00:00:00");
    const combined = new Date(
      missedDate.getFullYear(), missedDate.getMonth(), missedDate.getDate(),
      realNow.getHours(), realNow.getMinutes(), realNow.getSeconds()
    );
    tsISO = combined.toISOString();
  } else {
    tsISO = realNow.toISOString();
  }
  if (!data.records) data.records = {};
  let status, remark;
  if (action === "late") { status=STATUS.LATE; remark="Arrived late to class"; }
  else if (action === "skipped") { status=STATUS.SKIPPED; remark="On campus but did not attend class"; }
  else if (action === "excuse") { status=STATUS.EXCUSE; remark="Valid absence (extracurricular or school activity)"; }
  else { status=STATUS.ABSENT; remark="Did not come to school"; }
  data.records[studentId] = { status, timestamp:tsISO, sessionDate:dateISO, remark };
  await saveSectionData(grade, section, data);
  showToast(`Marked as ${action.toUpperCase()}`);
  renderRoster();
}

/* ============================================================
   PAST WEEKS VIEW
   ============================================================ */
let _allSectionsCache = null;
async function loadAllSectionsData(forceRefresh=false) {
  if (_allSectionsCache && !forceRefresh) return _allSectionsCache;
  const combos = [];
  GRADES.forEach(g => (SECTIONS_BY_GRADE[g]||[]).forEach(s => combos.push({grade:g, section:s})));
  const results = await Promise.all(combos.map(async c => {
    const data = await loadSectionData(c.grade, c.section);
    return {...c, data};
  }));
  results.sort((a,b) => a.grade !== b.grade ? a.grade.localeCompare(b.grade) : a.section - b.section);
  _allSectionsCache = results;
  return results;
}

// A session is "valid" only if it was properly completed (not an accidental unclosed session)
function isValidSession(session) {
  if (!session) return false;
  return session.opened && session.completed;
}

async function renderPastWeeks() {
  const wrap = document.getElementById('pastWeeksWrap');
  const today = todayISO();
  const todayWeek = findCalendarWeek(today);
  const pastWeeks = SEMESTER_CALENDAR
    .filter(w => w.startISO < todayWeek.startISO)
    .sort((a,b) => b.startISO.localeCompare(a.startISO));

  if (pastWeeks.length === 0) {
    wrap.innerHTML = `<div class="empty" style="padding:20px 0;">No past weeks yet.</div>`;
    return;
  }

  // Preserve accordion state
  const openPaths = new Set();
  wrap.querySelectorAll(':scope > details').forEach((el, wi) => {
    if (el.open) {
      openPaths.add(`${wi}`);
      el.querySelectorAll(':scope > .acc-content > details').forEach((dayEl, di) => {
        if (dayEl.open) openPaths.add(`${wi}-${di}`);
      });
    }
  });

  // Only show loading on first render
  if (!wrap.firstElementChild) {
    wrap.innerHTML = `<div class="empty" style="padding:20px 0;">Loading…</div>`;
  }

  const allSections = await loadAllSectionsData();
  const globalData = await loadGlobalData();

  const items = pastWeeks.map(w => {
    const weekDates = [];
    for (let d = 0; d < 5; d++) weekDates.push(dateToISO(addDays(w.startISO, d)));

    let totalPresent=0, totalLate=0, totalExcuse=0, totalAbsent=0, totalSkipped=0, hasData=false;
    weekDates.forEach(dateISO => {
      allSections.forEach(({data}) => {
        const session = data.sessions?.[dateISO];
        if (!isValidSession(session)) return; // skip unclosed/mistaken sessions
        hasData = true;
        Object.values(data.logs||{}).forEach(log => {
          const entry = log.find(e => e.sessionDate === dateISO);
          if (!entry) return;
          if (entry.status === STATUS.PRESENT) totalPresent++;
          else if (entry.status === STATUS.LATE) totalLate++;
          else if (entry.status === STATUS.EXCUSE) totalExcuse++;
          else if (entry.status === STATUS.ABSENT) totalAbsent++;
          else if (entry.status === STATUS.SKIPPED) totalSkipped++;
        });
      });
    });

    if (!hasData) {
      return `<details class="week-accordion">
        <summary><span class="acc-title">${w.label} <span class="range">${w.rangeStr}</span></span><span class="acc-summary acc-complete">No data</span></summary>
        <div class="acc-content"><div class="empty" style="padding:12px 0;font-size:0.8rem;">No attendance recorded for this week.</div></div>
      </details>`;
    }

    const dayAccordions = weekDates.map(dateISO => {
      const d = new Date(dateISO + "T00:00:00");
      const dayName = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][d.getDay()];
      const dayHtml = renderSectionsForDateHTML(dateISO, allSections, globalData);
      const inner = dayHtml === null
        ? `<div class="empty" style="padding:12px 0;font-size:0.8rem;">No attendance recorded.</div>`
        : dayHtml;
      return `<details class="week-accordion" style="margin-bottom:6px;">
        <summary><span class="acc-title">${dayName} <span class="range">${d.getMonth()+1}/${d.getDate()}</span></span>${dayHtml===null?'<span class="acc-summary acc-complete">No data</span>':''}</summary>
        <div class="acc-content" style="padding-top:10px;">${inner}</div>
      </details>`;
    }).join('');

    return `<details class="week-accordion">
      <summary>
        <span class="acc-title">${w.label} <span class="range">${w.rangeStr}</span></span>
        <span class="acc-summary">
          <span class="rep-green">✓ ${totalPresent}</span>
          <span class="rep-purple" style="color:var(--purple);">✕ ${totalLate}</span>
          <span class="rep-blue">✓ ${totalExcuse}</span>
          <span class="rep-red">✕ ${totalAbsent}</span>
          <span class="rep-pink">✕ ${totalSkipped}</span>
        </span>
      </summary>
      <div class="acc-content">${dayAccordions}</div>
    </details>`;
  }).join('');

  wrap.innerHTML = items;

  // Restore accordion state
  if (openPaths.size > 0) {
    wrap.querySelectorAll(':scope > details').forEach((el, wi) => {
      if (openPaths.has(`${wi}`)) {
        el.open = true;
        el.querySelectorAll(':scope > .acc-content > details').forEach((dayEl, di) => {
          if (openPaths.has(`${wi}-${di}`)) dayEl.open = true;
        });
      }
    });
  }
}

function renderSectionsForDateHTML(dateISO, allSections, globalData) {
  const wholeMarker = globalData?.noClassDays?.[dateISO] || null;
  const relevant = allSections.filter(r => {
    const session = r.data.sessions?.[dateISO];
    const sectionMarker = r.data.noClassDates?.[dateISO] || null;
    return isValidSession(session) || wholeMarker || sectionMarker;
  });
  if (relevant.length === 0) return null;

  // Sort by scheduled start time for that day
  relevant.sort((a, b) => {
    const sa = CLASS_SCHEDULE[a.grade]?.[a.section];
    const sb = CLASS_SCHEDULE[b.grade]?.[b.section];
    if (!sa) return 1;
    if (!sb) return -1;
    return timeToMinutes(sa.start) - timeToMinutes(sb.start);
  });

  return relevant.map(({grade, section, data}) => {
    const sectionMarker = data.noClassDates?.[dateISO] || null;
    const session = data.sessions?.[dateISO];

    if (!isValidSession(session) && (wholeMarker || sectionMarker)) {
      const reasons = [wholeMarker, sectionMarker].filter(Boolean).map(r => r.reason);
      return `<div class="ds-section" style="opacity:0.7;">
        <div class="ds-section-header" style="background:var(--ink-soft);">
          <div>🧑‍🎓 ${grade} / Section ${section} — 🚫 No Class</div>
        </div>
        <div style="padding:12px 16px;font-size:0.85rem;color:var(--ink-soft);">${reasons.join(' · ')}</div>
      </div>`;
    }

    if (!isValidSession(session)) return ''; // skip unclosed sessions

    const roster = getRoster(grade, section);
    let countGreen=0, countBlue=0, countRed=0, countPink=0, countPurple=0, countNone=0;
    const rows = roster.map(stu => {
      const log = data.logs?.[stu.studentId] || [];
      const entry = log.find(e => e.sessionDate === dateISO);
      const status = entry ? entry.status : STATUS.NONE;
      if (status===STATUS.PRESENT) countGreen++;
      else if (status===STATUS.LATE) countPurple++;
      else if (status===STATUS.EXCUSE) countBlue++;
      else if (status===STATUS.ABSENT) countRed++;
      else if (status===STATUS.SKIPPED) countPink++;
      else countNone++;
      if (status===STATUS.PRESENT){ stampHtml=`<div class="stamp stamp-green">✓</div><div><div class="status-name" style="color:var(--green)">Present</div><div class="remark-text">${entry?entry.remark||'Scanned QR':''}</div></div>`; tsHtml=entry&&entry.timestamp?formatTimestamp(new Date(entry.timestamp)):'—'; }
      else if (status===STATUS.LATE){ stampHtml=`<div class="stamp stamp-purple">✕</div><div><div class="status-name" style="color:var(--purple)">Late</div><div class="remark-text">${entry?entry.remark||'Arrived late':''}</div></div>`; tsHtml=entry&&entry.timestamp?formatTimestamp(new Date(entry.timestamp)):'—'; }
      else if (status===STATUS.EXCUSE){ stampHtml=`<div class="stamp stamp-blue">✓</div><div><div class="status-name" style="color:var(--blue)">Excuse</div><div class="remark-text">${entry?entry.remark||'Excused':'' }</div></div>`; tsHtml=entry&&entry.timestamp?formatTimestamp(new Date(entry.timestamp)):'—'; }
      else if (status===STATUS.ABSENT){ stampHtml=`<div class="stamp stamp-red">✕</div><div><div class="status-name" style="color:var(--red)">Absent</div><div class="remark-text">${entry?entry.remark||'No scan':'No scan'}</div></div>`; tsHtml=entry&&entry.timestamp?formatTimestamp(new Date(entry.timestamp)):'—'; }
      else if (status===STATUS.SKIPPED){ stampHtml=`<div class="stamp stamp-pink">✕</div><div><div class="status-name" style="color:var(--pink)">Skipped</div><div class="remark-text">${entry?entry.remark||'Skipped':''}</div></div>`; tsHtml=entry&&entry.timestamp?formatTimestamp(new Date(entry.timestamp)):'—'; }
      else { stampHtml=`<div class="stamp stamp-gray">·</div><div><div class="status-name" style="color:#9aa3b2">—</div></div>`; tsHtml='—'; }
      return `<tr><td class="col-no">${stu.no}</td><td class="col-id">${stu.studentId}</td><td>${stu.thaiName||'—'}</td><td>${stu.nickname||'—'}</td><td><div class="col-status">${stampHtml}</div></td><td class="ts-text">${tsHtml}</td></tr>`;
    }).join('');

    const sched = CLASS_SCHEDULE[grade]?.[section];
    const schedTime = sched ? ` · ${sched.start}–${sched.end}` : '';
    const completedLabel = `🔒 Closed · ${session.completedAt ? formatTimestamp(new Date(session.completedAt)) : ''}`;
    const uid = `ds-${grade}-${section}-${dateISO}`.replace(/[^a-zA-Z0-9-]/g,'_');
    return `<div class="ds-section">
      <div class="ds-section-header" style="cursor:pointer;" onclick="document.getElementById('${uid}').style.display=document.getElementById('${uid}').style.display==='none'?'block':'none'">
        <div>🧑‍🎓 ${grade} / Section ${section}${schedTime} — <span style="font-family:'Space Mono',monospace;font-size:0.78rem;font-weight:400;">${completedLabel}</span></div>
        <div class="ds-stats">
          <span style="color:#9CE6A8;">✓ ${countGreen}</span>
          <span style="color:#C9A0FF;">✕ ${countPurple}</span>
          <span style="color:#A9C8FF;">✓ ${countBlue}</span>
          <span style="color:#FFB3AC;">✕ ${countRed}</span>
          <span style="color:#F9B8D4;">✕ ${countPink}</span>
          <span style="color:#cfd6e3;">· ${countNone}</span>
          <span style="opacity:0.6;font-size:0.75rem;">▼ tap to expand</span>
        </div>
      </div>
      <div id="${uid}" style="display:none;">
        <div class="table-wrap" style="border:none;border-radius:0;">
          <table class="ds-table">
            <thead><tr><th class="col-no">No.</th><th>Student ID</th><th>Name</th><th>Nickname</th><th>Status</th><th>Timestamp</th></tr></thead>
            <tbody>${rows}</tbody>
          </table>
        </div>
      </div>
    </div>`;
  }).join('');
}

/* ============================================================
   DAILY SUMMARY
   ============================================================ */
async function renderDailySummary(dateISO) {
  const wrap = document.getElementById('dailySummaryWrap');
  wrap.innerHTML = `<div class="empty" style="padding:20px 0;">Loading…</div>`;
  const allSections = await loadAllSectionsData();
  const globalData = await loadGlobalData();
  const html = renderSectionsForDateHTML(dateISO, allSections, globalData);
  if (!html) {
    wrap.innerHTML = `<div class="empty" style="padding:30px 20px;"><div class="big">🗒️</div>No completed attendance sessions on this date.</div>`;
    return;
  }
  wrap.innerHTML = html;
}

document.getElementById('dailySummaryDate').value = todayISO();
document.getElementById('dailySummaryBtn').addEventListener('click', () => {
  const dateISO = document.getElementById('dailySummaryDate').value;
  if (!dateISO) { showToast("Please choose a date"); return; }
  renderDailySummary(dateISO);
});

/* ============================================================
   STUDENT VIEW
   ============================================================ */
const THAI_DAYS = ["วันอาทิตย์","วันจันทร์","วันอังคาร","วันพุธ","วันพฤหัสบดี","วันศุกร์","วันเสาร์"];
const THAI_MONTHS = ["มกราคม","กุมภาพันธ์","มีนาคม","เมษายน","พฤษภาคม","มิถุนายน","กรกฎาคม","สิงหาคม","กันยายน","ตุลาคม","พฤศจิกายน","ธันวาคม"];

function formatThaiDate(date) {
  return `${THAI_DAYS[date.getDay()]}ที่ ${date.getDate()} ${THAI_MONTHS[date.getMonth()]} ${date.getFullYear()+543}`;
}

// Grade/section from QR URL stored here for student check-in
let _qrGrade = null;
let _qrSection = null;

function applyURLParams() {
  const params = new URLSearchParams(window.location.search);
  const g = params.get('grade'), s = params.get('section');
  if (g && GRADES.includes(g)) _qrGrade = g;
  if (s) _qrSection = parseInt(s);
}

async function renderSessionInfo() {
  const grade = _qrGrade, section = _qrSection;
  if (!grade || !section) return;
  const data = await loadSectionData(grade, section);
  const card = document.getElementById('sessionInfoCard');
  const today = todayISO();
  const session = data.sessions?.[today];
  if (!session || !session.opened || session.completed) {
    card.style.display = 'none';
    if (_clockTimer) { clearInterval(_clockTimer); _clockTimer = null; }
    return;
  }
  card.style.display = 'block';
  const wi = getWeekInfo(null, today);
  document.getElementById('siWeek').textContent = `${wi.weekLabel} ${wi.rangeStrFull}`;
  function tick() {
    const now = new Date();
    let h = now.getHours(); const m = now.getMinutes(); const s = now.getSeconds();
    const ampm = h >= 12 ? "PM" : "AM";
    h = h % 12; if (h === 0) h = 12;
    document.getElementById('siTime').textContent = `${h}:${String(m).padStart(2,'0')}`;
    document.getElementById('siAmpm').textContent = ampm;
    const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    document.getElementById('siEnDate').textContent = `${days[now.getDay()]}, ${months[now.getMonth()]} ${now.getDate()}, ${now.getFullYear()}`;
    document.getElementById('siThDate').textContent = formatThaiDate(now);
  }
  tick();
  if (_clockTimer) clearInterval(_clockTimer);
  _clockTimer = setInterval(tick, 1000);
}

document.getElementById('checkInBtn').addEventListener('click', async () => {
  const grade = _qrGrade, section = _qrSection;
  if (!grade || !section) {
    document.getElementById('checkInMsg').innerHTML = `<span style="color:var(--red);font-weight:600;">⚠️ Invalid QR code. Please scan the QR code provided by your teacher.</span>`;
    return;
  }
  const sid = document.getElementById('stuId').value.trim();
  const msgEl = document.getElementById('checkInMsg');

  if (!/^\d{5}$/.test(sid)) { msgEl.innerHTML = `<span style="color:var(--red);font-weight:600;">⚠️ Please enter a valid 5-digit Student ID.</span>`; return; }

  const roster = getRoster(grade, section);
  const student = roster.find(s => s.studentId === sid);
  if (!student) { msgEl.innerHTML = `<span style="color:var(--red);font-weight:600;">⚠️ Student ID not found in ${grade} / Section ${section}.</span>`; return; }

  const data = await loadSectionData(grade, section);
  const today = todayISO();
  const session = data.sessions?.[today];

  const ncInfo = await getNoClassInfo(grade, section, today);
  if (ncInfo.any) { msgEl.innerHTML = `<span style="color:var(--red);font-weight:600;">🚫 No class today.</span>`; return; }

  // QR valid only if currently within schedule window
  const sched = getSchedule(grade, section);
  if (!sched) { msgEl.innerHTML = `<span style="color:var(--red);font-weight:600;">⚠️ No schedule found for this class.</span>`; return; }

  const params = new URLSearchParams(window.location.search);
  const urlToken = params.get('token');
  const urlScheduleEnd = params.get('scheduleEnd');

  // Check if QR is still within its valid schedule window
  const nowMins = timeToMinutes(getCurrentTimeStr());
  const endMins = urlScheduleEnd ? timeToMinutes(urlScheduleEnd) : timeToMinutes(sched.end);
  const startMins = timeToMinutes(sched.start);

  if (nowMins < startMins || nowMins >= endMins) {
    msgEl.innerHTML = `<span style="color:var(--red);font-weight:600;">⚠️ This QR code has expired. Ask your teacher to show the current QR code.</span>`;
    return;
  }

  if (!session || !session.opened) { msgEl.innerHTML = `<span style="color:var(--red);font-weight:600;">⚠️ No attendance session is open right now.</span>`; return; }
  if (session.completed) { msgEl.innerHTML = `<span style="color:var(--red);font-weight:600;">⚠️ Today's attendance has already been closed.</span>`; return; }
  if (session.token && urlToken !== session.token) { msgEl.innerHTML = `<span style="color:var(--red);font-weight:600;">⚠️ This QR code has expired. Please scan the current QR code.</span>`; return; }

  const now = new Date().toISOString();
  if (!data.records) data.records = {};
  const existing = data.records[sid];
  if (existing && existing.sessionDate === today && existing.status === STATUS.PRESENT) {
    msgEl.innerHTML = `<span style="color:var(--green);font-weight:600;">✅ Already marked present (${formatTimestamp(new Date(existing.timestamp))}).</span>`;
  } else {
    data.records[sid] = { status:STATUS.PRESENT, timestamp:now, sessionDate:today, remark:"Present" };
    await saveSectionData(grade, section, data);
    msgEl.innerHTML = `<span style="color:var(--green);font-weight:600;">✅ Marked present! ${formatTimestamp(new Date(now))}</span>`;
  }
  renderStudentPassport(grade, section, sid, student);
});

async function renderStudentPassport(grade, section, sid, student) {
  const data = await loadSectionData(grade, section);
  const wrap = document.getElementById('studentPassportWrap');
  const log = data.logs?.[sid] || [];
  const weeksByKey = {};
  log.forEach(entry => {
    const w = findCalendarWeek(entry.sessionDate);
    const key = w.startISO;
    if (!weeksByKey[key]) weeksByKey[key] = { info:w, entries:[] };
    weeksByKey[key].entries.push(entry);
  });

  function buildStampRow(entry) {
    let stamp, label, detail;
    if (entry.status===STATUS.PRESENT){ stamp=`<div class="stamp stamp-green">✓</div>`; label=`<span style="color:var(--green)">Present</span>`; }
    else if (entry.status===STATUS.LATE){ stamp=`<div class="stamp stamp-purple">✕</div>`; label=`<span style="color:var(--purple)">Late</span> — ${entry.remark||'Arrived late'}`; }
    else if (entry.status===STATUS.EXCUSE){ stamp=`<div class="stamp stamp-blue">✓</div>`; label=`<span style="color:var(--blue)">Excused</span> — ${entry.remark||''}`; }
    else if (entry.status===STATUS.SKIPPED){ stamp=`<div class="stamp stamp-pink">✕</div>`; label=`<span style="color:var(--pink)">Skipped</span>`; }
    else { stamp=`<div class="stamp stamp-red">✕</div>`; label=`<span style="color:var(--red)">Absent</span>`; }
    return `<div class="stamp-row">${stamp}<div class="meta"><div class="status-name">${label}</div><div class="status-detail">${detail}</div></div></div>`;
  }

  const todayWeek = findCalendarWeek(todayISO());
  const isLive = todayISO() >= LIVE_TRACKING_START_ISO;
  let currentWeekHtml = '';
  if (isLive) {
    const w = weeksByKey[todayWeek.startISO];
    let rows = w && w.entries.length > 0 ? w.entries.sort((a,b)=>new Date(b.timestamp||b.sessionDate)-new Date(a.timestamp||a.sessionDate)).map(buildStampRow).join('') : `<div class="empty" style="padding:16px 0;">No record yet this week.</div>`;
    currentWeekHtml = `<div class="week-block current-week"><div class="week-title"><span class="this-week-badge">This Week</span>${todayWeek.label} <span class="range">${todayWeek.rangeStr}</span></div>${rows}</div>`;
  }

  const accordionWeeks = SEMESTER_CALENDAR.filter(w => {
    if (isLive && w.startISO === todayWeek.startISO) return false;
    if (w.startISO > todayWeek.startISO) return false;
    return true;
  }).sort((a,b) => b.startISO.localeCompare(a.startISO));

  let accordionHtml = '';
  if (accordionWeeks.length > 0) {
    const items = accordionWeeks.map(w => {
      const wdata = weeksByKey[w.startISO];
      let rows, summaryHtml;
      if (wdata && wdata.entries.length > 0) {
        wdata.entries.sort((a,b)=>new Date(b.timestamp||b.sessionDate)-new Date(a.timestamp||a.sessionDate));
        rows = wdata.entries.map(buildStampRow).join('');
        const counts = {present:0,late:0,excuse:0,absent:0,skipped:0};
        wdata.entries.forEach(e => { if(e.status===STATUS.PRESENT)counts.present++; else if(e.status===STATUS.LATE)counts.late++; else if(e.status===STATUS.EXCUSE)counts.excuse++; else if(e.status===STATUS.ABSENT)counts.absent++; else if(e.status===STATUS.SKIPPED)counts.skipped++; });
        summaryHtml = `<span class="acc-summary"><span class="rep-green">✓ ${counts.present}</span><span style="color:var(--purple);">✕ ${counts.late}</span><span class="rep-blue">✓ ${counts.excuse}</span><span class="rep-red">✕ ${counts.absent}</span><span class="rep-pink">✕ ${counts.skipped}</span></span>`;
      } else {
        rows = `<div class="empty" style="padding:12px 0;font-size:0.8rem;">No record.</div>`;
        summaryHtml = `<span class="acc-summary acc-complete">Complete</span>`;
      }
      return `<details class="week-accordion"><summary><span class="acc-title">${w.label} <span class="range">${w.rangeStr}</span></span>${summaryHtml}</summary><div class="acc-content">${rows}</div></details>`;
    }).join('');
    accordionHtml = `<div class="history-section"><div class="history-label">Previous weeks</div>${items}</div>`;
  }

  const name = student.thaiName ? `${student.nickname} · ${student.thaiName}` : student.nickname;
  wrap.innerHTML = `<div class="passport" id="passportCapture">
    <div class="passport-header">
      <div><h2>${name}</h2><div class="sub">${grade} / Section ${section}</div></div>
      <div class="passport-id">ID ${sid}</div>
    </div>
    <div class="passport-body">${currentWeekHtml}${accordionHtml}</div>
  </div>
  <div class="capture-bar">
    <button class="btn btn-sm" id="captureBtn">📸 Save Screenshot</button>
    <button class="btn btn-sm" id="captureAllBtn">🖼️ Save Full History</button>
  </div>`;
  wireCaptureButton();
}

function wireCaptureButton() {
  document.getElementById('captureBtn')?.addEventListener('click', async () => {
    const el = document.getElementById('passportCapture');
    if (!el || typeof html2canvas === 'undefined') { showToast("Screenshot not available"); return; }
    const btn = document.getElementById('captureBtn');
    btn.disabled = true; btn.textContent = '⏳ Capturing...';
    try { const c = await html2canvas(el, {backgroundColor:'#ffffff',scale:2}); downloadCanvas(c,'attendance-passport'); showToast("Screenshot saved"); }
    catch(e) { showToast("Couldn't capture screenshot"); }
    btn.disabled = false; btn.textContent = '📸 Save Screenshot';
  });
  document.getElementById('captureAllBtn')?.addEventListener('click', async () => {
    const el = document.getElementById('passportCapture');
    if (!el || typeof html2canvas === 'undefined') { showToast("Screenshot not available"); return; }
    const btn = document.getElementById('captureAllBtn');
    btn.disabled = true; btn.textContent = '⏳ Capturing...';
    const accordions = el.querySelectorAll('details.week-accordion');
    const prev = []; accordions.forEach(d => { prev.push(d.open); d.open = true; });
    try { const c = await html2canvas(el, {backgroundColor:'#ffffff',scale:2}); downloadCanvas(c,'attendance-full-history'); showToast("Full history saved"); }
    catch(e) { showToast("Couldn't capture"); }
    accordions.forEach((d,i) => d.open = prev[i]);
    btn.disabled = false; btn.textContent = '🖼️ Save Full History';
  });
}

function downloadCanvas(canvas, prefix) {
  const link = document.createElement('a');
  const ts = new Date();
  const stamp = `${ts.getFullYear()}-${String(ts.getMonth()+1).padStart(2,'0')}-${String(ts.getDate()).padStart(2,'0')}_${String(ts.getHours()).padStart(2,'0')}${String(ts.getMinutes()).padStart(2,'0')}`;
  link.download = `${prefix}-${stamp}.png`;
  link.href = canvas.toDataURL('image/png');
  link.click();
}

/* ============================================================
   REPORT
   ============================================================ */
const reportOverlay = document.getElementById('reportModalOverlay');
document.getElementById('reportBtn').addEventListener('click', async () => {
  const data = await loadSectionData(currentGrade, currentSection);
  const sessionDates = Object.keys(data.sessions||{}).sort();
  const today = todayISO();
  document.getElementById('reportFrom').value = sessionDates.length ? sessionDates[0] : today;
  document.getElementById('reportTo').value = today;
  reportOverlay.style.display = 'flex';
});
document.getElementById('reportCancelBtn').addEventListener('click', () => reportOverlay.style.display = 'none');
reportOverlay.addEventListener('click', e => { if (e.target === reportOverlay) reportOverlay.style.display = 'none'; });
document.getElementById('reportGenerateBtn').addEventListener('click', async () => {
  const from = document.getElementById('reportFrom').value, to = document.getElementById('reportTo').value;
  if (!from || !to || from > to) { showToast("Please choose a valid date range"); return; }
  await generateReport(currentGrade, currentSection, from, to);
  reportOverlay.style.display = 'none';
});

function statusLabel(status) {
  if (status===STATUS.PRESENT) return {text:"Present",cls:"rep-green",mark:"✓"};
  if (status===STATUS.LATE) return {text:"Late",cls:"rep-purple",mark:"✕"};
  if (status===STATUS.EXCUSE) return {text:"Excuse",cls:"rep-blue",mark:"✓"};
  if (status===STATUS.ABSENT) return {text:"Absent",cls:"rep-red",mark:"✕"};
  if (status===STATUS.SKIPPED) return {text:"Skipped",cls:"rep-pink",mark:"✕"};
  return {text:"—",cls:"",mark:"·"};
}

async function generateReport(grade, section, fromISO, toISO) {
  const data = await loadSectionData(grade, section);
  const roster = getRoster(grade, section);
  // Only include properly completed sessions
  const allSessionDates = Object.keys(data.sessions||{}).filter(d => d >= fromISO && d <= toISO && isValidSession(data.sessions[d])).sort();
  if (allSessionDates.length === 0) { showToast("No completed sessions in that range"); return; }

  const summary = {};
  roster.forEach(stu => { summary[stu.studentId] = {present:0,excuse:0,absent:0,skipped:0}; });
  const studentRows = {};
  roster.forEach(stu => {
    const log = data.logs?.[stu.studentId] || [];
    const byDate = {};
    log.forEach(e => { byDate[e.sessionDate] = e; });
    const rows = allSessionDates.map(dateISO => {
      const entry = byDate[dateISO];
      const status = entry ? entry.status : STATUS.NONE;
      if (status===STATUS.PRESENT) summary[stu.studentId].present++;
      else if (status===STATUS.EXCUSE) summary[stu.studentId].excuse++;
      else if (status===STATUS.ABSENT) summary[stu.studentId].absent++;
      else if (status===STATUS.SKIPPED) summary[stu.studentId].skipped++;
      return { dateISO, status, timestamp: entry?.timestamp||null, remark: entry?.remark||null };
    });
    studentRows[stu.studentId] = rows;
  });

  const reportDate = formatTimestamp(new Date());
  let studentSections = '';
  roster.forEach(stu => {
    const rows = studentRows[stu.studentId];
    const s = summary[stu.studentId];
    let rowsHtml = '';
    rows.forEach(r => {
      const wi = getWeekInfo(null, r.dateISO);
      const sl = statusLabel(r.status);
      const tsStr = r.timestamp ? formatTimestamp(new Date(r.timestamp)) : '—';
      const remark = r.remark || (r.status===STATUS.PRESENT?"Present":r.status===STATUS.EXCUSE?"Excused":r.status===STATUS.ABSENT?"No scan recorded":r.status===STATUS.SKIPPED?"Skipped":"—");
      rowsHtml += `<tr><td>${formatDateLong(r.dateISO)}</td><td>${wi.weekLabel}<br><span style="color:#5B6B85;font-size:9px;">${wi.rangeStr}</span></td><td>${tsStr}</td><td class="${sl.cls}"><span>${sl.mark}</span> ${sl.text}</td><td>${remark}</td></tr>`;
    });
    studentSections += `<section style="margin-bottom:14px;page-break-inside:avoid;">
      <table style="width:100%;border-collapse:collapse;background:#1F2B3E;color:#FBF6EC;font-size:11px;"><tr>
        <td style="padding:6px 10px;font-family:monospace;width:60px;">No. ${stu.no}</td>
        <td style="padding:6px 10px;font-family:monospace;width:90px;">${stu.studentId}</td>
        <td style="padding:6px 10px;font-weight:600;">${stu.thaiName||''} ${stu.nickname?`(${stu.nickname})`:''}  </td>
        <td style="padding:6px 10px;text-align:right;font-family:monospace;white-space:nowrap;">
          <span style="color:#9CE6A8;">✓${s.present}</span> <span style="color:#A9C8FF;">✓${s.excuse}</span> <span style="color:#FFB3AC;">✕${s.absent}</span> <span style="color:#F9B8D4;">✕${s.skipped}</span>
        </td>
      </tr></table>
      <table style="width:100%;border-collapse:collapse;font-size:10.5px;">
        <thead><tr style="background:#F0E7D4;">
          <th style="padding:5px 10px;text-align:left;font-size:9px;letter-spacing:0.5px;border-bottom:1px solid #E3D9C4;">Date</th>
          <th style="padding:5px 10px;text-align:left;font-size:9px;">Week</th>
          <th style="padding:5px 10px;text-align:left;font-size:9px;">Timestamp</th>
          <th style="padding:5px 10px;text-align:left;font-size:9px;">Status</th>
          <th style="padding:5px 10px;text-align:left;font-size:9px;">Remark</th>
        </tr></thead>
        <tbody>${rowsHtml}</tbody>
      </table>
    </section>`;
  });

  const win = window.open('', '_blank');
  win.document.write(`<!DOCTYPE html><html><head><meta charset="UTF-8"><title>Report ${grade} S${section}</title>
  <style>body{font-family:Sarabun,sans-serif;color:#1F2B3E;margin:0;padding:24px;font-size:11px;}
  .rep-green{color:#3FA34D;font-weight:700;}.rep-blue{color:#3B6FB6;font-weight:700;}.rep-red{color:#D6483F;font-weight:700;}.rep-pink{color:#D6437F;font-weight:700;}.rep-purple{color:#7B4FBF;font-weight:700;}
  tbody td{padding:5px 10px;border-bottom:1px solid #EFEAE0;vertical-align:top;}
  .print-bar{position:sticky;top:0;background:#fff;padding:10px 0;border-bottom:1px dashed #ccc;text-align:right;margin-bottom:10px;}
  @media print{.print-bar{display:none;}}
  </style></head><body>
  <div class="print-bar"><button onclick="window.print()" style="background:#1F2B3E;color:#fff;border:none;padding:8px 18px;border-radius:8px;font-size:13px;cursor:pointer;">🖨️ Print / Save PDF</button></div>
  <div style="display:flex;justify-content:space-between;border-bottom:3px solid #1F2B3E;padding-bottom:10px;margin-bottom:14px;">
    <div><h1 style="font-size:18px;margin:0 0 4px;">Attendance Report</h1><div style="font-size:11px;color:#5B6B85;">Grade ${grade} · Section ${section}<br>Generated: ${reportDate}</div></div>
    <div style="text-align:right;font-size:11px;color:#5B6B85;">Sessions: ${allSessionDates.length}<br>Students: ${roster.length}</div>
  </div>
  ${studentSections}</body></html>`);
  win.document.close();
}

/* ============================================================
   REFRESH BUTTON
   ============================================================ */
document.getElementById('refreshBtn').addEventListener('click', () => {
  _allSectionsCache = null;
  renderRoster();
  showToast("Refreshed");
});

/* ============================================================
   INIT
   ============================================================ */
(function init() {
  const params = new URLSearchParams(window.location.search);
  document.getElementById('teacherView').style.display = 'none';
  document.getElementById('studentView').style.display = 'none';
  // Hide all overlays first
  ['teacherAuthOverlay','pinOverlay'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.classList.remove('show');
  });

  if (params.get('mode') === 'student') {
    // QR scan — go directly to student check-in
    applyURLParams();
    switchToStudent();
  } else if (params.toString() === '') {
    // Direct URL — teacher access, show PIN
    document.getElementById('pinOverlay').classList.add('show');
    setTimeout(() => document.getElementById('pinInput').focus(), 100);
  } else {
    // URL with unknown params — deny access
    document.getElementById('studentView').style.display = 'block';
    document.getElementById('studentLogin').innerHTML = `
      <div class="empty" style="padding:40px 20px;">
        <div class="big">🚫</div>
        <div style="font-family:'Baloo 2',sans-serif;font-weight:700;font-size:1.1rem;margin-bottom:8px;">Access Denied</div>
        <div style="font-size:0.85rem;color:var(--ink-soft);">This page can only be accessed by scanning the QR code provided by your teacher.</div>
      </div>`;
  }
})();

/* ============================================================
   TEACHER AUTH SYSTEM
   EmailJS: service_ojcbbq8
   Registration template: template_fq9m9o7
   Password reset template: template_69yssbx
   Public key: 0w1PHbNN6IPbmJ38h
   ============================================================ */

const EMAILJS_SERVICE = "service_ojcbbq8";
const EMAILJS_REG_TEMPLATE = "template_fq9m9o7";
const EMAILJS_RESET_TEMPLATE = "template_69yssbx";
const EMAILJS_PUBLIC_KEY = "0w1PHbNN6IPbmJ38h";
const OWNER_PIN = "082713";
const OWNER_EMAIL = "carltonescandor@yahoo.com";

// Teacher accounts stored in Supabase under key "teachers:accounts"
async function loadTeacherAccounts() {
  try {
    const res = await fetch(`${SUPABASE_REST}?key=eq.teachers%3Aaccounts&select=value`, {
      headers: { "apikey": SUPABASE_KEY, "Authorization": `Bearer ${SUPABASE_KEY}` }
    });
    const rows = await res.json();
    if (rows && rows.length > 0 && rows[0].value) return rows[0].value;
  } catch(e) {}
  return { accounts: {} };
}

async function saveTeacherAccounts(data) {
  await fetch(`${SUPABASE_REST}?on_conflict=key`, {
    method: "POST",
    headers: {
      "apikey": SUPABASE_KEY, "Authorization": `Bearer ${SUPABASE_KEY}`,
      "Content-Type": "application/json", "Prefer": "resolution=merge-duplicates"
    },
    body: JSON.stringify({ key: "teachers:accounts", value: data, updated_at: new Date().toISOString() })
  });
}

// Generate temp password: 8 chars alphanumeric
function generateTempPassword() {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789";
  return Array.from({length: 8}, () => chars[Math.floor(Math.random() * chars.length)]).join('');
}

// Generate 6-digit email verification code
function generateVerifyCode() {
  return String(Math.floor(100000 + Math.random() * 900000));
}

// Hash password (simple - for production use bcrypt)
async function hashPassword(password) {
  const encoder = new TextEncoder();
  const data = encoder.encode(password + "AttPassSalt2026");
  const hash = await crypto.subtle.digest('SHA-256', data);
  return Array.from(new Uint8Array(hash)).map(b => b.toString(16).padStart(2, '0')).join('');
}

// Send email via EmailJS
async function sendEmail(templateId, params) {
  const payload = {
    service_id: EMAILJS_SERVICE,
    template_id: templateId,
    user_id: EMAILJS_PUBLIC_KEY,
    template_params: params
  };
  const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });
  if (!res.ok) throw new Error("Email send failed: " + await res.text());
  return true;
}

// Auth state
let _currentTeacher = null; // { email, name } when logged in
let _verifyCode = null;
let _verifyEmail = null;
let _verifyExpiry = null;
let _resetCode = null;
let _resetEmail = null;
let _resetExpiry = null;
let _pendingResetData = null;

// ============================================================
// AUTH SCREENS HTML
// ============================================================
function getAuthScreensHTML() {
  return `
<!-- TEACHER AUTH OVERLAY -->
<div class="pin-overlay" id="teacherAuthOverlay">
  <div class="pin-box" style="max-width:380px;">

    <!-- LOGIN SCREEN -->
    <div id="authLoginScreen">
      <div style="font-size:2rem;margin-bottom:8px;">👩‍🏫</div>
      <h2>Teacher Login</h2>
      <p style="margin:0 0 16px;font-size:0.85rem;color:var(--ink-soft);">Enter your credentials to access the dashboard</p>
      <div style="text-align:left;margin-bottom:10px;">
        <label style="font-size:0.8rem;font-weight:600;color:var(--ink-soft);">Email</label>
        <input type="email" id="loginEmail" placeholder="your@email.com" style="width:100%;padding:10px 12px;border:2px solid var(--ink);border-radius:10px;font-size:0.95rem;margin-top:4px;">
      </div>
      <div style="text-align:left;margin-bottom:16px;">
        <label style="font-size:0.8rem;font-weight:600;color:var(--ink-soft);">Password</label>
        <input type="password" id="loginPassword" placeholder="••••••••" style="width:100%;padding:10px 12px;border:2px solid var(--ink);border-radius:10px;font-size:0.95rem;margin-top:4px;">
      </div>
      <div id="loginError" style="color:var(--red);font-size:0.82rem;margin-bottom:10px;display:none;"></div>
      <button class="btn btn-primary" style="width:100%;margin-bottom:10px;" onclick="teacherLogin()">🔓 Login</button>
      <div style="display:flex;justify-content:space-between;margin-top:4px;">
        <button class="btn btn-sm" onclick="showAuthScreen('authRegisterScreen')">📝 Register</button>
        <button class="btn btn-sm" onclick="showAuthScreen('authForgotScreen')">🔑 Forgot Password</button>
      </div>
      <div style="margin-top:10px;border-top:1px dashed var(--line);padding-top:10px;">
        <button class="btn btn-sm" style="width:100%;" onclick="backToWelcome()">← Back</button>
      </div>
    </div>

    <!-- REGISTER SCREEN -->
    <div id="authRegisterScreen" style="display:none;">
      <div style="font-size:2rem;margin-bottom:8px;">📝</div>
      <h2>Teacher Registration</h2>
      <p style="margin:0 0 16px;font-size:0.82rem;color:var(--ink-soft);">Fill in your details. A temporary password will be sent to the app owner for verification.</p>
      <div style="text-align:left;margin-bottom:8px;">
        <label style="font-size:0.8rem;font-weight:600;color:var(--ink-soft);">Full Name</label>
        <input type="text" id="regName" placeholder="Your full name" style="width:100%;padding:10px 12px;border:2px solid var(--ink);border-radius:10px;font-size:0.95rem;margin-top:4px;">
      </div>
      <div style="text-align:left;margin-bottom:8px;">
        <label style="font-size:0.8rem;font-weight:600;color:var(--ink-soft);">Email Address</label>
        <input type="email" id="regEmail" placeholder="your@email.com" style="width:100%;padding:10px 12px;border:2px solid var(--ink);border-radius:10px;font-size:0.95rem;margin-top:4px;">
      </div>
      <div style="text-align:left;margin-bottom:8px;">
        <label style="font-size:0.8rem;font-weight:600;color:var(--ink-soft);">Security Question 1</label>
        <select id="regQ1" style="width:100%;padding:10px 12px;border:2px solid var(--ink);border-radius:10px;font-size:0.9rem;margin-top:4px;">
          <option value="">Select a question...</option>
          <option>What is your mother's maiden name?</option>
          <option>What was the name of your first pet?</option>
          <option>What city were you born in?</option>
          <option>What was your childhood nickname?</option>
          <option>What is the name of your favorite teacher?</option>
        </select>
        <input type="text" id="regA1" placeholder="Your answer" style="width:100%;padding:8px 12px;border:2px solid var(--line);border-radius:10px;font-size:0.9rem;margin-top:6px;">
      </div>
      <div style="text-align:left;margin-bottom:12px;">
        <label style="font-size:0.8rem;font-weight:600;color:var(--ink-soft);">Security Question 2</label>
        <select id="regQ2" style="width:100%;padding:10px 12px;border:2px solid var(--ink);border-radius:10px;font-size:0.9rem;margin-top:4px;">
          <option value="">Select a question...</option>
          <option>What is your oldest sibling's middle name?</option>
          <option>What street did you grow up on?</option>
          <option>What was the make of your first car?</option>
          <option>What was the name of your elementary school?</option>
          <option>What is your favorite movie?</option>
        </select>
        <input type="text" id="regA2" placeholder="Your answer" style="width:100%;padding:8px 12px;border:2px solid var(--line);border-radius:10px;font-size:0.9rem;margin-top:6px;">
      </div>
      <div id="regError" style="color:var(--red);font-size:0.82rem;margin-bottom:10px;display:none;"></div>
      <div id="regSuccess" style="color:var(--green);font-size:0.82rem;margin-bottom:10px;display:none;"></div>
      <button class="btn btn-primary" style="width:100%;margin-bottom:10px;" id="regSubmitBtn" onclick="submitRegistration()">📧 Verify Email & Register</button>
      <button class="btn btn-sm" style="width:100%;" onclick="showAuthScreen('authLoginScreen')">← Back to Login</button>
    </div>

    <!-- EMAIL VERIFICATION SCREEN -->
    <div id="authVerifyScreen" style="display:none;">
      <div style="font-size:2rem;margin-bottom:8px;">📧</div>
      <h2>Verify Your Email</h2>
      <p style="margin:0 0 4px;font-size:0.85rem;color:var(--ink-soft);">A 6-digit code was sent to:</p>
      <p style="margin:0 0 16px;font-weight:700;font-size:0.9rem;" id="verifyEmailLabel"></p>
      <div style="text-align:left;margin-bottom:12px;">
        <label style="font-size:0.8rem;font-weight:600;color:var(--ink-soft);">Verification Code</label>
        <input type="text" id="verifyCode" inputmode="numeric" maxlength="6" placeholder="000000" style="width:100%;padding:12px;border:2px solid var(--ink);border-radius:10px;font-size:1.5rem;letter-spacing:6px;text-align:center;margin-top:4px;">
      </div>
      <div id="verifyError" style="color:var(--red);font-size:0.82rem;margin-bottom:10px;display:none;"></div>
      <button class="btn btn-primary" style="width:100%;margin-bottom:10px;" onclick="submitVerifyCode()">✅ Confirm Code</button>
      <button class="btn btn-sm" style="width:100%;" onclick="showAuthScreen('authRegisterScreen')">← Back</button>
    </div>

    <!-- SET PASSWORD SCREEN (first login with temp password) -->
    <div id="authSetPasswordScreen" style="display:none;">
      <div style="font-size:2rem;margin-bottom:8px;">🔐</div>
      <h2>Set Your Password</h2>
      <p style="margin:0 0 16px;font-size:0.85rem;color:var(--ink-soft);">Create a permanent password for your account.</p>
      <div style="text-align:left;margin-bottom:8px;">
        <label style="font-size:0.8rem;font-weight:600;color:var(--ink-soft);">New Password</label>
        <input type="password" id="newPassword" placeholder="Min. 8 characters" style="width:100%;padding:10px 12px;border:2px solid var(--ink);border-radius:10px;font-size:0.95rem;margin-top:4px;">
      </div>
      <div style="text-align:left;margin-bottom:12px;">
        <label style="font-size:0.8rem;font-weight:600;color:var(--ink-soft);">Confirm Password</label>
        <input type="password" id="confirmPassword" placeholder="Repeat password" style="width:100%;padding:10px 12px;border:2px solid var(--ink);border-radius:10px;font-size:0.95rem;margin-top:4px;">
      </div>
      <div id="setPassError" style="color:var(--red);font-size:0.82rem;margin-bottom:10px;display:none;"></div>
      <button class="btn btn-primary" style="width:100%;" onclick="submitSetPassword()">💾 Save Password</button>
    </div>

    <!-- FORGOT PASSWORD SCREEN -->
    <div id="authForgotScreen" style="display:none;">
      <div style="font-size:2rem;margin-bottom:8px;">🔑</div>
      <h2>Reset Password</h2>
      <p style="margin:0 0 16px;font-size:0.85rem;color:var(--ink-soft);">Enter your registered email to begin the reset process.</p>
      <div style="text-align:left;margin-bottom:12px;">
        <label style="font-size:0.8rem;font-weight:600;color:var(--ink-soft);">Email Address</label>
        <input type="email" id="forgotEmail" placeholder="your@email.com" style="width:100%;padding:10px 12px;border:2px solid var(--ink);border-radius:10px;font-size:0.95rem;margin-top:4px;">
      </div>
      <div id="forgotError" style="color:var(--red);font-size:0.82rem;margin-bottom:10px;display:none;"></div>
      <button class="btn btn-primary" style="width:100%;margin-bottom:10px;" onclick="submitForgotEmail()">📧 Send Verification Code</button>
      <button class="btn btn-sm" style="width:100%;" onclick="showAuthScreen('authLoginScreen')">← Back to Login</button>
    </div>

    <!-- RESET VERIFY SCREEN -->
    <div id="authResetVerifyScreen" style="display:none;">
      <div style="font-size:2rem;margin-bottom:8px;">📧</div>
      <h2>Email Verified</h2>
      <p style="margin:0 0 16px;font-size:0.85rem;color:var(--ink-soft);">Enter the code sent to your email, then answer your security question.</p>
      <div style="text-align:left;margin-bottom:10px;">
        <label style="font-size:0.8rem;font-weight:600;color:var(--ink-soft);">Verification Code</label>
        <input type="text" id="resetVerifyCode" inputmode="numeric" maxlength="6" placeholder="000000" style="width:100%;padding:12px;border:2px solid var(--ink);border-radius:10px;font-size:1.5rem;letter-spacing:6px;text-align:center;margin-top:4px;">
      </div>
      <div style="text-align:left;margin-bottom:12px;" id="resetSecurityWrap">
        <label style="font-size:0.8rem;font-weight:600;color:var(--ink-soft);" id="resetSecurityQ">Security Question</label>
        <input type="text" id="resetSecurityA" placeholder="Your answer" style="width:100%;padding:10px 12px;border:2px solid var(--ink);border-radius:10px;font-size:0.95rem;margin-top:4px;">
      </div>
      <div id="resetVerifyError" style="color:var(--red);font-size:0.82rem;margin-bottom:10px;display:none;"></div>
      <button class="btn btn-primary" style="width:100%;margin-bottom:10px;" onclick="submitResetVerify()">✅ Verify & Reset</button>
      <button class="btn btn-sm" style="width:100%;" onclick="showAuthScreen('authForgotScreen')">← Back</button>
    </div>

  </div>
</div>`;
}

// ============================================================
// AUTH FUNCTIONS
// ============================================================
function showAuthScreen(screenId) {
  ['authLoginScreen','authRegisterScreen','authVerifyScreen','authSetPasswordScreen','authForgotScreen','authResetVerifyScreen'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.style.display = id === screenId ? 'block' : 'none';
  });
}

function showTeacherAuthOverlay() {
  document.getElementById('teacherAuthOverlay').classList.add('show');
  showAuthScreen('authLoginScreen');
}

async function teacherLogin() {
  const email = document.getElementById('loginEmail').value.trim().toLowerCase();
  const password = document.getElementById('loginPassword').value;
  const errEl = document.getElementById('loginError');
  errEl.style.display = 'none';

  if (!email || !password) { errEl.textContent = 'Please enter email and password.'; errEl.style.display = 'block'; return; }

  const accounts = await loadTeacherAccounts();
  const account = accounts.accounts[email];

  if (!account) { errEl.textContent = 'Email not found. Please register first.'; errEl.style.display = 'block'; return; }
  if (!account.verified) { errEl.textContent = 'Account not yet verified by the app owner. Please wait.'; errEl.style.display = 'block'; return; }

  // Check if using temp password
  if (account.tempPassword && account.tempExpiry && new Date().getTime() < account.tempExpiry) {
    if (password === account.tempPassword) {
      // Correct temp password — prompt to set permanent password
      _currentTeacher = { email, name: account.name };
      document.getElementById('teacherAuthOverlay').classList.add('show');
      showAuthScreen('authSetPasswordScreen');
      return;
    }
  } else if (account.tempPassword && account.tempExpiry && new Date().getTime() >= account.tempExpiry) {
    errEl.textContent = 'Temporary password has expired. Please request a new one.'; errEl.style.display = 'block'; return;
  }

  // Check permanent password
  const hashed = await hashPassword(password);
  if (account.passwordHash !== hashed) { errEl.textContent = 'Incorrect password.'; errEl.style.display = 'block'; return; }

  // Login success
  _currentTeacher = { email, name: account.name };
  document.getElementById('teacherAuthOverlay').classList.remove('show');
  teacherUnlocked = true;
  showTeacherView();
  showToast(`Welcome, ${account.name}!`);
}

async function submitRegistration() {
  const name = document.getElementById('regName').value.trim();
  const email = document.getElementById('regEmail').value.trim().toLowerCase();
  const q1 = document.getElementById('regQ1').value;
  const a1 = document.getElementById('regA1').value.trim().toLowerCase();
  const q2 = document.getElementById('regQ2').value;
  const a2 = document.getElementById('regA2').value.trim().toLowerCase();
  const errEl = document.getElementById('regError');
  const successEl = document.getElementById('regSuccess');
  errEl.style.display = 'none'; successEl.style.display = 'none';

  if (!name) { errEl.textContent = 'Please enter your full name.'; errEl.style.display = 'block'; return; }
  if (!email || !email.includes('@')) { errEl.textContent = 'Please enter a valid email address.'; errEl.style.display = 'block'; return; }
  if (!q1 || !a1) { errEl.textContent = 'Please select and answer Security Question 1.'; errEl.style.display = 'block'; return; }
  if (!q2 || !a2) { errEl.textContent = 'Please select and answer Security Question 2.'; errEl.style.display = 'block'; return; }
  if (q1 === q2) { errEl.textContent = 'Please choose two different security questions.'; errEl.style.display = 'block'; return; }

  const accounts = await loadTeacherAccounts();
  if (accounts.accounts[email]) { errEl.textContent = 'This email is already registered.'; errEl.style.display = 'block'; return; }

  // Send email verification code
  const code = generateVerifyCode();
  _verifyCode = code;
  _verifyEmail = email;
  _verifyExpiry = new Date().getTime() + 10 * 60 * 1000; // 10 min

  // Store pending registration data
  _pendingResetData = { name, email, q1, a1: await hashPassword(a1), q2, a2: await hashPassword(a2) };

  const btn = document.getElementById('regSubmitBtn');
  btn.disabled = true; btn.textContent = '⏳ Sending...';

  try {
    await sendEmail(EMAILJS_REG_TEMPLATE, {
      teacher_name: name,
      teacher_email: email,
      temp_password: `VERIFY: ${code} (email verification code — expires in 10 minutes)`
    });
    document.getElementById('verifyEmailLabel').textContent = email;
    showAuthScreen('authVerifyScreen');
    showToast('Verification code sent to your email!');
  } catch(e) {
    errEl.textContent = 'Failed to send verification email. Please try again.';
    errEl.style.display = 'block';
  }
  btn.disabled = false; btn.textContent = '📧 Verify Email & Register';
}

async function submitVerifyCode() {
  const code = document.getElementById('verifyCode').value.trim();
  const errEl = document.getElementById('verifyError');
  errEl.style.display = 'none';

  if (!code) { errEl.textContent = 'Please enter the verification code.'; errEl.style.display = 'block'; return; }
  if (new Date().getTime() > _verifyExpiry) { errEl.textContent = 'Code expired. Please go back and try again.'; errEl.style.display = 'block'; return; }
  if (code !== _verifyCode) { errEl.textContent = 'Incorrect code. Please check your email.'; errEl.style.display = 'block'; return; }

  // Email verified — save pending account and notify owner
  const tempPass = generateTempPassword();
  const tempExpiry = new Date().getTime() + 60 * 60 * 1000; // 1 hour

  const accounts = await loadTeacherAccounts();
  accounts.accounts[_pendingResetData.email] = {
    name: _pendingResetData.name,
    email: _pendingResetData.email,
    q1: _pendingResetData.q1,
    a1Hash: _pendingResetData.a1,
    q2: _pendingResetData.q2,
    a2Hash: _pendingResetData.a2,
    verified: false, // owner must approve
    tempPassword: tempPass,
    tempExpiry,
    passwordHash: null,
    registeredAt: new Date().toISOString()
  };
  await saveTeacherAccounts(accounts);

  // Notify owner
  try {
    await sendEmail(EMAILJS_REG_TEMPLATE, {
      teacher_name: _pendingResetData.name,
      teacher_email: _pendingResetData.email,
      temp_password: tempPass
    });
    showAuthScreen('authLoginScreen');
    document.getElementById('loginError').style.display = 'none';
    showToast('Registration submitted! Wait for app owner approval.');
    // Show success message
    const errEl = document.getElementById('loginError');
    errEl.style.color = 'var(--green)';
    errEl.textContent = '✅ Registration sent to app owner. Once approved, use the temporary password they forward to you.';
    errEl.style.display = 'block';
    setTimeout(() => { errEl.style.color = 'var(--red)'; errEl.style.display = 'none'; }, 8000);
  } catch(e) {
    const errEl = document.getElementById('verifyError');
    errEl.textContent = 'Verified but failed to notify owner. Please contact the app owner directly.';
    errEl.style.display = 'block';
  }
}

async function submitSetPassword() {
  const newPass = document.getElementById('newPassword').value;
  const confirmPass = document.getElementById('confirmPassword').value;
  const errEl = document.getElementById('setPassError');
  errEl.style.display = 'none';

  if (newPass.length < 8) { errEl.textContent = 'Password must be at least 8 characters.'; errEl.style.display = 'block'; return; }
  if (newPass !== confirmPass) { errEl.textContent = 'Passwords do not match.'; errEl.style.display = 'block'; return; }

  const accounts = await loadTeacherAccounts();
  const account = accounts.accounts[_currentTeacher.email];
  account.passwordHash = await hashPassword(newPass);
  account.tempPassword = null;
  account.tempExpiry = null;
  account.verified = true;
  await saveTeacherAccounts(accounts);

  document.getElementById('teacherAuthOverlay').classList.remove('show');
  teacherUnlocked = true;
  showTeacherView();
  showToast(`Password set! Welcome, ${account.name}!`);
}

async function submitForgotEmail() {
  const email = document.getElementById('forgotEmail').value.trim().toLowerCase();
  const errEl = document.getElementById('forgotError');
  errEl.style.display = 'none';

  if (!email) { errEl.textContent = 'Please enter your email address.'; errEl.style.display = 'block'; return; }

  const accounts = await loadTeacherAccounts();
  const account = accounts.accounts[email];
  if (!account) { errEl.textContent = 'Email not found. Please register first.'; errEl.style.display = 'block'; return; }

  // Send verification code
  const code = generateVerifyCode();
  _resetCode = code;
  _resetEmail = email;
  _resetExpiry = new Date().getTime() + 10 * 60 * 1000;

  try {
    await sendEmail(EMAILJS_RESET_TEMPLATE, {
      teacher_name: account.name,
      teacher_email: email,
      temp_password: `VERIFY CODE: ${code} (expires in 10 minutes)`
    });
    // Show security question (randomly pick q1 or q2)
    const useQ1 = Math.random() > 0.5;
    document.getElementById('resetSecurityQ').textContent = useQ1 ? account.q1 : account.q2;
    _pendingResetData = { useQ1, account, email };
    showAuthScreen('authResetVerifyScreen');
    showToast('Verification code sent!');
  } catch(e) {
    errEl.textContent = 'Failed to send verification email. Please try again.';
    errEl.style.display = 'block';
  }
}

async function submitResetVerify() {
  const code = document.getElementById('resetVerifyCode').value.trim();
  const answer = document.getElementById('resetSecurityA').value.trim().toLowerCase();
  const errEl = document.getElementById('resetVerifyError');
  errEl.style.display = 'none';

  if (!code || !answer) { errEl.textContent = 'Please fill in all fields.'; errEl.style.display = 'block'; return; }
  if (new Date().getTime() > _resetExpiry) { errEl.textContent = 'Code expired. Please start over.'; errEl.style.display = 'block'; return; }
  if (code !== _resetCode) { errEl.textContent = 'Incorrect verification code.'; errEl.style.display = 'block'; return; }

  const { useQ1, account, email } = _pendingResetData;
  const answerHash = await hashPassword(answer);
  const correctHash = useQ1 ? account.a1Hash : account.a2Hash;

  if (answerHash !== correctHash) { errEl.textContent = 'Incorrect answer to security question.'; errEl.style.display = 'block'; return; }

  // Both verified — generate new temp password and notify owner
  const tempPass = generateTempPassword();
  const tempExpiry = new Date().getTime() + 60 * 60 * 1000;

  const accounts = await loadTeacherAccounts();
  accounts.accounts[email].tempPassword = tempPass;
  accounts.accounts[email].tempExpiry = tempExpiry;
  accounts.accounts[email].passwordHash = null;
  await saveTeacherAccounts(accounts);

  try {
    await sendEmail(EMAILJS_RESET_TEMPLATE, {
      teacher_name: account.name,
      teacher_email: email,
      temp_password: tempPass
    });
    showAuthScreen('authLoginScreen');
    const loginErr = document.getElementById('loginError');
    loginErr.style.color = 'var(--green)';
    loginErr.textContent = '✅ Reset request sent to app owner. Use the temporary password they forward to you within 1 hour.';
    loginErr.style.display = 'block';
    setTimeout(() => { loginErr.style.color = 'var(--red)'; loginErr.style.display = 'none'; }, 8000);
    showToast('Reset request sent to app owner!');
  } catch(e) {
    errEl.textContent = 'Verified but failed to notify owner. Please contact them directly.';
    errEl.style.display = 'block';
  }
}


// Auto-refresh teacher roster every 30s
setInterval(() => {
  if (document.getElementById('teacherView').style.display !== 'none' && document.visibilityState === 'visible') {
    renderRoster();
  }
}, 30000);
</script>
</body>
</html>
