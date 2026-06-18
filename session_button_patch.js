// ============================================================
// PATCH: renderSessionButton — MANUAL OPEN/CLOSE (no auto-session)
// 
// In app_v3.html, find the renderSessionButton async function.
// Replace EVERYTHING from:
//
//   if (!isRecovery) {
//
// ...all the way to the closing brace of the function (the } before the next
// async function or comment block).
//
// Replace it with the code below:
// ============================================================

  // Manual session management — always show open/close button
  const isOpen = session && session.opened && !session.completed;

  if (isOpen) {
    const recoveryNote = isRecovery ? `<div class="hint" style="margin-top:4px;color:var(--blue);">📅 Recovery: ${formatDateLong(_recoveryDateISO)}</div>` : '';
    wrap.innerHTML = `
      ${schedInfo}
      <button class="btn btn-session-green" id="sessionToggleBtn">🟢 In Session — tap to close</button>
      <div class="countdown-bar" id="countdownBar">⏱ ${getCountdownStr(grade, section)}</div>
      ${recoveryNote}
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
    const recoveryNote = isRecovery ? `<div class="hint" style="margin-top:4px;color:var(--blue);">📅 Recovery: ${formatDateLong(_recoveryDateISO)}</div>` : '';
    wrap.innerHTML = `
      ${schedInfo}
      <button class="btn btn-session-yellow" id="sessionToggleBtn">🟡 Open Attendance</button>
      ${recoveryNote}
    `;
    document.getElementById('sessionToggleBtn').addEventListener('click', async () => {
      await openSession(grade, section, dateISO);
      renderSessionButton();
      renderQR();
    });
    document.getElementById('completeBtn').setAttribute('disabled','disabled');
  }

// ============================================================
// ALSO: In renderSessionBanner(), find:
//   Session will open automatically at scheduled time
// Replace with:
//   Tap 🟡 Open Attendance above to start
// ============================================================
