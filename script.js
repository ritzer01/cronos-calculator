function escapeHTML(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;');
}

document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const tab = link.dataset.tab;

    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
    document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));

    link.classList.add('active');
    document.getElementById('panel-' + tab).classList.add('active');
  });
});



function fmt(n) {
  return Number(n).toLocaleString('pt-BR');
}

function fmtDate(d) {
  return d.toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' });
}


function diffDates(a, b) {
  let years  = b.getFullYear() - a.getFullYear();
  let months = b.getMonth()    - a.getMonth();
  let days   = b.getDate()     - a.getDate();

  if (days < 0) {
    months--;
    // dias no mês anterior a b
    days += new Date(b.getFullYear(), b.getMonth(), 0).getDate();
  }
  if (months < 0) {
    years--;
    months += 12;
  }
  return { years, months, days };
}

function totalDays(a, b) {
  return Math.floor((b - a) / 86400000);
}

function showError(id, msg) {
  const el = document.getElementById(id);
  el.classList.remove('hidden');
  el.innerHTML = `<div class="error-msg">${msg}</div>`;
}

function metricCard(num, lbl, highlight = false) {
  return `
    <div class="metric-card${highlight ? ' highlight' : ''}">
      <div class="metric-num">${fmt(num)}</div>
      <div class="metric-lbl">${lbl}</div>
    </div>`;
}

function totalItem(num, lbl) {
  return `
    <div class="total-item">
      <span class="t-num">${fmt(num)}</span>
      <span class="t-lbl">${lbl}</span>
    </div>`;
}



function calcIdade() {
  const val = document.getElementById('i-birth').value;
  if (!val) { showError('i-result', 'Informe uma data de nascimento.'); return; }

  const birth = new Date(val + 'T00:00:00');
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  if (birth > today) { showError('i-result', 'A data de nascimento não pode ser no futuro.'); return; }

  const { years, months, days } = diffDates(birth, today);
  const td   = totalDays(birth, today);
  const tw   = Math.floor(td / 7);
  const tm   = years * 12 + months;
  const th   = td * 24;

  const el = document.getElementById('i-result');
  el.classList.remove('hidden');
  el.innerHTML = `
    <div class="metrics-grid">
      ${metricCard(years,  'anos',  true)}
      ${metricCard(months, 'meses')}
      ${metricCard(days,   'dias')}
    </div>
    <div class="totals-bar">
      ${totalItem(td, 'dias no total')}
      <div class="totals-divider"></div>
      ${totalItem(tw, 'semanas')}
      <div class="totals-divider"></div>
      ${totalItem(tm, 'meses')}
      <div class="totals-divider"></div>
      ${totalItem(th, 'horas')}
    </div>`;
}



function calcDiff() {
  const sv = document.getElementById('d-start').value;
  const ev = document.getElementById('d-end').value;
  if (!sv || !ev) { showError('d-result', 'Informe as duas datas.'); return; }

  let a = new Date(sv + 'T00:00:00');
  let b = new Date(ev + 'T00:00:00');
  const inverted = a > b;
  if (inverted) [a, b] = [b, a];

  const { years, months, days } = diffDates(a, b);
  const td = totalDays(a, b);
  const tw = Math.floor(td / 7);
  const tm = years * 12 + months;

  const el = document.getElementById('d-result');
  el.classList.remove('hidden');
  el.innerHTML = `
    <div class="metrics-grid">
      ${metricCard(years,  'anos',  true)}
      ${metricCard(months, 'meses')}
      ${metricCard(days,   'dias')}
    </div>
    <div class="totals-bar">
      ${totalItem(td, 'dias')}
      <div class="totals-divider"></div>
      ${totalItem(tw, 'semanas')}
      <div class="totals-divider"></div>
      ${totalItem(tm, 'meses completos')}
      ${inverted ? '<span class="badge-past" style="margin-left:auto">ordem invertida</span>' : ''}
    </div>`;
}



function calcCountdown() {
  const val = document.getElementById('c-target').value;
  if (!val) { showError('c-result', 'Informe a data alvo.'); return; }

  const lbl    = document.getElementById('c-label').value.trim();
  const target = new Date(val + 'T00:00:00');
  const today  = new Date();
  today.setHours(0, 0, 0, 0);

  const isPast = target < today;
  const [a, b] = isPast ? [target, today] : [today, target];

  const td = totalDays(a, b);
  const { years, months, days } = diffDates(a, b);
  const tw = Math.floor(td / 7);

  const badge   = isPast
    ? '<span class="badge-past">já passou</span>'
    : '<span class="badge-future">em breve</span>';

  const pretext = isPast ? 'desde' : 'faltam para';

  const el = document.getElementById('c-result');
  el.classList.remove('hidden');
  el.innerHTML = `
    <div class="countdown-display">
      ${lbl ? `<p class="countdown-label-name">${escapeHTML(lbl)}</p>` : ''}
      <div class="countdown-big">${fmt(td)}</div>
      <div class="countdown-unit">dias ${pretext} ${fmtDate(target)} ${badge}</div>
    </div>
    <div class="metrics-grid">
      ${metricCard(years,  'anos')}
      ${metricCard(months, 'meses')}
      ${metricCard(days,   'dias')}
      ${metricCard(tw,     'semanas')}
    </div>`;
}



function calcHoras() {
  const sv = document.getElementById('h-start').value;
  const ev = document.getElementById('h-end').value;
  if (!sv || !ev) { showError('h-result', 'Informe os dois horários.'); return; }

  let a = new Date(sv);
  let b = new Date(ev);
  const inverted = a > b;
  if (inverted) [a, b] = [b, a];

  const diffMs  = b - a;
  const totSec  = Math.floor(diffMs / 1000);
  const totMin  = Math.floor(totSec / 60);
  const totHr   = Math.floor(totMin / 60);

  const h = Math.floor(diffMs / 3600000);
  const m = Math.floor((diffMs % 3600000) / 60000);
  const s = Math.floor((diffMs % 60000) / 1000);

  const td = Math.floor(diffMs / 86400000);
  const tw = Math.floor(td / 7);

  const el = document.getElementById('h-result');
  el.classList.remove('hidden');
  el.innerHTML = `
    <div class="metrics-grid">
      ${metricCard(h, 'horas',   true)}
      ${metricCard(m, 'minutos')}
      ${metricCard(s, 'segundos')}
    </div>
    <div class="totals-bar">
      ${totalItem(totHr,  'horas totais')}
      <div class="totals-divider"></div>
      ${totalItem(totMin, 'minutos')}
      <div class="totals-divider"></div>
      ${totalItem(totSec, 'segundos')}
      <div class="totals-divider"></div>
      ${totalItem(td, 'dias')}
      ${inverted ? '<span class="badge-past" style="margin-left:auto">ordem invertida</span>' : ''}
    </div>`;
}

function calcSemana() {
  const val = document.getElementById('w-date').value;
  if (!val) { showError('w-result', 'Informe uma data.'); return; }

  const target = new Date(val + 'T00:00:00');
  const today  = new Date();
  today.setHours(0, 0, 0, 0);

  const weekdayFull = target.toLocaleDateString('pt-BR', { weekday: 'long' });
  const weekdayCap  = weekdayFull.charAt(0).toUpperCase() + weekdayFull.slice(1);

  const isPast  = target < today;
  const isToday = target.getTime() === today.getTime();

  let badge, pretext;
  if (isToday) {
    badge = '<span class="badge-future">hoje</span>';
    pretext = 'é';
  } else if (isPast) {
    badge = '<span class="badge-past">já passou</span>';
    pretext = 'foi';
  } else {
    badge = '<span class="badge-future">futuro</span>';
    pretext = 'será';
  }

  const el = document.getElementById('w-result');
  el.classList.remove('hidden');
  el.innerHTML = `
    <div class="countdown-display">
      <div class="countdown-big" style="font-size: clamp(2.2rem, 6vw, 3.5rem);">${weekdayCap}</div>
      <div class="countdown-unit">${fmtDate(target)} ${pretext} ${weekdayCap.toLowerCase()} ${badge}</div>
    </div>`;
}

document.getElementById('btn-idade').addEventListener('click', calcIdade);
document.getElementById('btn-diff').addEventListener('click', calcDiff);
document.getElementById('btn-countdown').addEventListener('click', calcCountdown);
document.getElementById('btn-horas').addEventListener('click', calcHoras);
document.getElementById('btn-semana').addEventListener('click', calcSemana);
