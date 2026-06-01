// ─── Cronos · LGPD / Consentimento de Cookies ───────────────────────────────
// Salva as preferências no localStorage sob a chave "cronos_consent".
// Só carrega scripts de terceiros (Analytics, AdSense) após consentimento.
// ─────────────────────────────────────────────────────────────────────────────

(function () {
  const STORAGE_KEY = 'cronos_consent';

  // Lê o consentimento salvo (null = ainda não respondeu)
  function getConsent() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch (_) {
      return null;
    }
  }

  // Salva o consentimento e esconde o banner
  function saveConsent(analytics, ads) {
    const payload = {
      analytics: !!analytics,
      ads:       !!ads,
      date:      new Date().toISOString()
    };
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
    } catch (_) {}

    hideBanner();
    if (payload.analytics) loadAnalytics();
    if (payload.ads)       loadAds();
  }

  function hideBanner() {
    const banner = document.getElementById('lgpd-banner');
    if (banner) {
      banner.classList.add('lgpd-hide');
      // Remove do DOM após a transição para não atrapalhar acessibilidade
      setTimeout(() => banner.remove(), 400);
    }
  }

  // ── Carregamento condicional de terceiros ──────────────────────────────────
  // Quando você tiver o ID do Google Analytics, substitua 'G-XXXXXXXXXX'.
  // Quando tiver o AdSense, descomente o bloco loadAds().

  function loadAnalytics() {
    // const GA_ID = 'G-XXXXXXXXXX';
    // const s = document.createElement('script');
    // s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    // s.async = true;
    // document.head.appendChild(s);
    // window.dataLayer = window.dataLayer || [];
    // function gtag(){ dataLayer.push(arguments); }
    // gtag('js', new Date());
    // gtag('config', GA_ID);
    console.log('[Cronos] Analytics autorizado — adicione seu GA_ID para ativar.');
  }

  function loadAds() {
    // const s = document.createElement('script');
    // s.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
    // s.async = true;
    // s.dataset.adClient = 'ca-pub-XXXXXXXXXXXXXXXX';
    // document.head.appendChild(s);
    console.log('[Cronos] Anúncios autorizados — adicione seu AdSense ID para ativar.');
  }

  // ── Renderiza o banner ─────────────────────────────────────────────────────
  function renderBanner() {
    const banner = document.createElement('div');
    banner.id = 'lgpd-banner';
    banner.setAttribute('role', 'dialog');
    banner.setAttribute('aria-modal', 'false');
    banner.setAttribute('aria-label', 'Preferências de privacidade');
    banner.innerHTML = `
      <div class="lgpd-inner">
        <div class="lgpd-text">
          <p class="lgpd-title">Sua privacidade</p>
          <p class="lgpd-desc">
            Usamos cookies essenciais para o funcionamento do site.
            Com sua permissão, também podemos usar cookies analíticos
            e publicitários. Veja nossa
            <a href="/privacidade.html" class="lgpd-link">Política de Privacidade</a>.
          </p>
        </div>

        <div class="lgpd-toggles">
          <label class="lgpd-toggle">
            <input type="checkbox" id="lgpd-chk-analytics">
            <span class="lgpd-toggle-label">Analíticos</span>
          </label>
          <label class="lgpd-toggle">
            <input type="checkbox" id="lgpd-chk-ads">
            <span class="lgpd-toggle-label">Publicitários</span>
          </label>
        </div>

        <div class="lgpd-actions">
          <button class="lgpd-btn lgpd-btn-accept-all" id="lgpd-accept-all">
            Aceitar todos
          </button>
          <button class="lgpd-btn lgpd-btn-save" id="lgpd-save">
            Salvar escolha
          </button>
          <button class="lgpd-btn lgpd-btn-reject" id="lgpd-reject">
            Só essenciais
          </button>
        </div>
      </div>
    `;

    document.body.appendChild(banner);

    document.getElementById('lgpd-accept-all').addEventListener('click', () => {
      saveConsent(true, true);
    });

    document.getElementById('lgpd-save').addEventListener('click', () => {
      const analytics = document.getElementById('lgpd-chk-analytics').checked;
      const ads       = document.getElementById('lgpd-chk-ads').checked;
      saveConsent(analytics, ads);
    });

    document.getElementById('lgpd-reject').addEventListener('click', () => {
      saveConsent(false, false);
    });
  }

  // ── Init ───────────────────────────────────────────────────────────────────
  function init() {
    const consent = getConsent();

    if (consent === null) {
      // Primeira visita: mostra o banner
      renderBanner();
    } else {
      // Visita recorrente: respeita a escolha salva sem mostrar o banner
      if (consent.analytics) loadAnalytics();
      if (consent.ads)       loadAds();
    }
  }

  // Espera o DOM estar pronto
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();