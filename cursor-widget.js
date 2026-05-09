// CURSOR WIDGET EXPERIMENT
// To remove: delete this file + the script tag in v5.html (marked with !! CURSOR WIDGET EXPERIMENT !!)

(function () {
  if (window.innerWidth <= 767) return;

  // ── Inject styles ──
  const style = document.createElement('style');
  style.textContent = `
    #cursor-widget {
      position: fixed;
      bottom: 32px;
      right: 32px;
      width: 68px;
      height: 68px;
      background: #1D1D1D;
      border-radius: 50%;
      cursor: pointer;
      z-index: 9998;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 4px 24px rgba(0,0,0,0.35);
      transition: transform 0.18s ease, box-shadow 0.18s ease, opacity 0.3s ease;
      user-select: none;
    }
    #cursor-widget:hover {
      transform: scale(1.1);
      box-shadow: 0 6px 28px rgba(0,0,0,0.45);
    }
    #cursor-widget.spotlight-on {
      box-shadow: 0 0 0 3px #FF5E2D, 0 6px 28px rgba(255,94,45,0.5);
    }
    .cw-face {
      display: flex;
      gap: 9px;
      align-items: center;
    }
    .cw-eye {
      width: 22px;
      height: 22px;
      background: #ffffff;
      border-radius: 50%;
      position: relative;
      overflow: hidden;
      flex-shrink: 0;
    }
    .cw-pupil {
      width: 11px;
      height: 11px;
      background: #1D1D1D;
      border-radius: 50%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      transition: transform 0.04s linear;
      will-change: transform;
    }
    .cw-pupil::after {
      content: '';
      width: 3px;
      height: 3px;
      background: #ffffff;
      border-radius: 50%;
      position: absolute;
      top: 2px;
      left: 2px;
    }
    #cursor-spotlight-canvas {
      position: fixed;
      inset: 0;
      z-index: 9997;
      pointer-events: none;
      display: none;
    }
    .cw-hint {
      position: fixed;
      bottom: 110px;
      right: 32px;
      background: #1D1D1D;
      color: #ffffff;
      font-family: sans-serif;
      font-size: 11px;
      padding: 5px 10px;
      border-radius: 6px;
      opacity: 0;
      transform: translateY(6px);
      transition: opacity 0.2s ease, transform 0.2s ease;
      pointer-events: none;
      white-space: nowrap;
      z-index: 9998;
    }
    #cursor-widget:hover + .cw-hint {
      opacity: 1;
      transform: translateY(0);
    }
    .cw-love-msg {
      position: fixed;
      bottom: 140px;
      right: 32px;
      background: #ffffff;
      color: #000000;
      font-family: 'Switzer', sans-serif;
      font-weight: 500;
      font-size: 8px;
      padding: 3.5px 7.5px;
      border-radius: 3px;
      white-space: nowrap;
      z-index: 9998;
      pointer-events: none;
      opacity: 0;
      transform: translateY(8px);
      transition: opacity 0.25s ease, transform 0.25s ease;
    }
    .cw-love-msg.visible {
      opacity: 1;
      transform: translateY(0);
    }
    .cw-esc-msg {
      position: fixed;
      bottom: 32px;
      left: 32px;
      background: transparent;
      color: #ffffff;
      font-family: 'Switzer', sans-serif;
      font-weight: 500;
      font-size: 16px;
      padding: 7px 15px;
      white-space: nowrap;
      z-index: 9998;
      pointer-events: none;
      opacity: 0;
      transform: translateY(8px);
      transition: opacity 0.25s ease, transform 0.25s ease;
    }
    .cw-esc-msg.visible {
      opacity: 1;
      transform: translateY(0);
    }
  `;
  document.head.appendChild(style);

  // ── Build DOM ──
  const widget = document.createElement('div');
  widget.id = 'cursor-widget';
  widget.setAttribute('title', 'Click to toggle spotlight');
  widget.innerHTML = `
    <div class="cw-face">
      <div class="cw-eye cw-eye--left"><div class="cw-pupil"></div></div>
      <div class="cw-eye cw-eye--right"><div class="cw-pupil"></div></div>
    </div>
  `;
  document.body.appendChild(widget);

  const hint = document.createElement('div');
  hint.className = 'cw-hint';
  hint.textContent = 'Click for spotlight';
  document.body.appendChild(hint);

  const loveMsg = document.createElement('div');
  loveMsg.className = 'cw-love-msg';
  loveMsg.textContent = 'We love following the User';
  document.body.appendChild(loveMsg);

  const escMsg = document.createElement('div');
  escMsg.className = 'cw-esc-msg';
  escMsg.textContent = 'Press Esc to exit spotlight';
  document.body.appendChild(escMsg);

  const canvas = document.createElement('canvas');
  canvas.id = 'cursor-spotlight-canvas';
  document.body.appendChild(canvas);
  const ctx = canvas.getContext('2d');

  // ── State ──
  let spotlightActive = false;
  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let rafId = null;

  const leftEye  = widget.querySelector('.cw-eye--left');
  const rightEye = widget.querySelector('.cw-eye--right');
  const pupils   = widget.querySelectorAll('.cw-pupil');

  // ── Eye tracking ──
  function getEyeCenter(el) {
    const r = el.getBoundingClientRect();
    return { x: r.left + r.width / 2, y: r.top + r.height / 2 };
  }

  function updatePupils() {
    [leftEye, rightEye].forEach((eye, i) => {
      const c = getEyeCenter(eye);
      const angle = Math.atan2(mouseY - c.y, mouseX - c.x);
      const travel = 5;
      const px = Math.cos(angle) * travel;
      const py = Math.sin(angle) * travel;
      pupils[i].style.transform = `translate(calc(-50% + ${px}px), calc(-50% + ${py}px))`;
    });
  }

  // ── Canvas spotlight ──
  function resizeCanvas() {
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  function drawFrame() {
    if (!spotlightActive) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Dark overlay base
    ctx.fillStyle = 'rgba(0, 0, 0, 0.88)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const eyes = [getEyeCenter(leftEye), getEyeCenter(rightEye)];

    // Beam cones from each eye toward cursor
    eyes.forEach(eye => {
      const angle  = Math.atan2(mouseY - eye.y, mouseX - eye.x);
      const dist   = Math.hypot(mouseX - eye.x, mouseY - eye.y) + 150;
      const spread = 0.22;

      ctx.save();
      ctx.globalCompositeOperation = 'destination-out';
      ctx.beginPath();
      ctx.moveTo(eye.x, eye.y);
      ctx.arc(eye.x, eye.y, dist, angle - spread, angle + spread);
      ctx.closePath();
      const beamGrad = ctx.createRadialGradient(eye.x, eye.y, 0, eye.x, eye.y, dist);
      beamGrad.addColorStop(0,   'rgba(0,0,0,0.9)');
      beamGrad.addColorStop(0.6, 'rgba(0,0,0,0.5)');
      beamGrad.addColorStop(1,   'rgba(0,0,0,0)');
      ctx.fillStyle = beamGrad;
      ctx.fill();
      ctx.restore();
    });

    // Bright circle at cursor
    ctx.save();
    ctx.globalCompositeOperation = 'destination-out';
    const spotGrad = ctx.createRadialGradient(mouseX, mouseY, 0, mouseX, mouseY, 110);
    spotGrad.addColorStop(0,   'rgba(0,0,0,1)');
    spotGrad.addColorStop(0.55,'rgba(0,0,0,0.85)');
    spotGrad.addColorStop(1,   'rgba(0,0,0,0)');
    ctx.fillStyle = spotGrad;
    ctx.beginPath();
    ctx.arc(mouseX, mouseY, 110, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();

    rafId = requestAnimationFrame(drawFrame);
  }

  function enableSpotlight() {
    spotlightActive = true;
    widget.classList.add('spotlight-on');
    resizeCanvas();
    canvas.style.display = 'block';
    cancelAnimationFrame(rafId);
    drawFrame();
    loveMsg.classList.add('visible');
    escMsg.classList.add('visible');
  }

  function disableSpotlight() {
    spotlightActive = false;
    widget.classList.remove('spotlight-on');
    cancelAnimationFrame(rafId);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    canvas.style.display = 'none';
    loveMsg.classList.remove('visible');
    escMsg.classList.remove('visible');
  }

  // ── Events ──
  document.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    updatePupils();
  });

  widget.addEventListener('click', () => {
    spotlightActive ? disableSpotlight() : enableSpotlight();
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && spotlightActive) disableSpotlight();
  });

  window.addEventListener('resize', () => {
    if (spotlightActive) resizeCanvas();
  });

  // ── Hide widget when footer is reached ──
  const footer = document.querySelector('.site-footer');
  if (footer) {
    const footerObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        disableSpotlight();
        widget.style.opacity = '0';
        widget.style.pointerEvents = 'none';
        hint.style.opacity = '0';
        loveMsg.classList.remove('visible');
        escMsg.classList.remove('visible');
      } else {
        widget.style.opacity = '1';
        widget.style.pointerEvents = 'auto';
      }
    }, { threshold: 0.1 });
    footerObserver.observe(footer);
  }

})();;
