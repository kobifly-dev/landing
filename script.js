const logo = '<img class="brand-mark" src="images/logo.svg" alt="Kobifly" />';
const whiteLogo = '<img class="brand-mark is-white" src="images/logo.svg" alt="Kobifly" />';

// Edit slide HTML here. updateSlide renders one full HTML slide at a time.
const slides = [
  {
    title: "Kobifly",
    html: `
      <section class="deck-slide cover-slide">
        ${logo}
        <img class="cover-art float-in" src="images/Page1.png" alt="Kobifly web and mobile product screens" />
        <div class="cover-copy">
          <div class="accent-line animate-in">
            <span class="accent-dots" aria-hidden="true"><span></span><span></span><span></span></span>
          </div>
          <h1 class="headline animate-in delay-1">Kobifly</h1>
          <p class="lead animate-in delay-2">
            KOBİ'lerin ihtiyaç duyduğu ürün ve hizmetlere en doğru ve avantajlı şekilde
            ulaşmasını sağlayan dijital çözüm ortağı.
          </p>
        </div>
      </section>
    `,
  },
  {
    title: "Problem",
    html: `
      <section class="deck-slide problem-slide">
        ${logo}
        <div class="network-art">
          <img class="scale-in" src="images/Page2.png" alt="KOBI financial ecosystem network" />
          <p class="copy animate-in delay-1">
            KOBİ'ler işlerini büyütmeye odaklanmak yerine, doğru çözümleri aramakla zaman kaybediyor.
          </p>
        </div>
        <div class="problem-grid">
          <article class="problem-card animate-in">
            <h2>Dağınık ve karmaşık KOBİ ekosistemi</h2>
            <p class="copy">
              KOBİ'ler finansal çözümleri, iş yazılımları ve operasyonel hizmetleri farklı
              platformlarda arıyor. Bu durum zaman kaybına ve karmaşık karar süreçlerine yol açıyor.
            </p>
          </article>
          <article class="problem-card is-orange animate-in delay-1">
            <h2>Zaman ve maliyet kaybı</h2>
            <p class="copy">
              Doğru ürünü veya hizmeti bulmak için harcanan zaman, iş süreçlerinde verimlilik
              kaybına ve fırsatların kaçmasına neden oluyor.
            </p>
          </article>
          <h2 class="problem-label animate-in delay-2">Problem</h2>
        </div>
      </section>
    `,
  },
  {
    title: "Çözüm",
    html: `
      <section class="deck-slide solution-slide is-dark">
        ${whiteLogo}
        <div class="solution-main">
          <h2 class="section-title animate-in">Çözüm:<br />Tek Platform, Tüm İhtiyaçlar</h2>
          <p class="copy animate-in delay-1">
            Kobifly, KOBİ'lerin finansal ürünlere, iş yazılımlarına ve operasyonel hizmetlere
            tek bir platform üzerinden, karşılaştırmalı ve avantajlı şekilde ulaşmasını sağlayan
            dijital bir çözümdür.
          </p>
          <p class="copy animate-in delay-2">
            KOBİ'ler farklı sağlayıcılar arasında kaybolmak yerine, ihtiyaçlarına en uygun çözümleri
            tek merkezden, şeffaf ve hızlı biçimde seçebilir.
          </p>
          <img class="product-panel scale-in delay-3" src="images/Page3.png" alt="Kobifly web platform interface" />
        </div>
        <div class="feature-stack">
          <article class="feature-card animate-in delay-1">
            <h3>Tüm KOBİ ihtiyaçları tek platformda</h3>
            <p class="copy">
              Finansal ürünler, POS çözümleri, iş yazılımları ve operasyonel hizmetler tek bir
              ekosistemde toplanır.
            </p>
          </article>
          <article class="feature-card animate-in delay-2">
            <h3>Karşılaştırmalı ve avantajlı seçim</h3>
            <p class="copy">
              KOBİ'ler farklı ürün ve hizmetleri karşılaştırarak kendileri için en doğru ve
              avantajlı seçimi yapabilir.
            </p>
          </article>
        </div>
      </section>
    `,
  },
  {
    title: "Pazar Fırsatı",
    html: `
      <section class="deck-slide market-slide">
        ${logo}
        <div class="market-copy">
          <img class="product-panel scale-in" src="images/Page3.png" alt="Kobifly campaign and opportunity interface" />
          <h2 class="section-title animate-in delay-1">Pazar Fırsatı</h2>
          <p class="lead animate-in delay-2">
            KOBİ'lerin dijital finans ve iş çözümlerine hızla yöneldiği, ölçeklenebilir pazar.
          </p>
          <article class="metric-card animate-in delay-3">
            <span>Türkiye genelinde hedeflenebilir KOBİ sayısı</span>
            <strong>3.9M+</strong>
            <span>Aktif ticari işletmeler</span>
          </article>
        </div>
        <article class="chart-card scale-in delay-1">
          <img class="market-chart" src="images/Page4.png" alt="KOBI market growth chart" />
          <p class="chart-caption">
            Türkiye'de milyonlarca KOBİ, finansal ürünler ve iş çözümleri için dijital
            platformlara yöneliyor.
          </p>
        </article>
      </section>
    `,
  },
  {
    title: "Gelir Modeli",
    html: `
      <section class="deck-slide revenue-slide">
        ${logo}
        <div class="revenue-copy">
          <h2 class="section-title animate-in">Gelir Modeli</h2>
          <p class="copy animate-in delay-1">Çok kanallı, ölçeklenebilir ve tekrarlayan gelir yapısı.</p>
          <div class="revenue-list">
            <article class="animate-in delay-1">
              <h3>Komisyon Bazlı Gelir Modeli</h3>
              <p class="copy">Kobifly üzerinden yönlendirilen kredi, POS, sigorta ve benzeri finansal ürün başvurularından komisyon geliri elde edilir.</p>
            </article>
            <article class="animate-in delay-2">
              <h3>Abonelik ve Premium Hizmetler</h3>
              <p class="copy">KOBİ'lere özel gelişmiş karşılaştırma araçları, kampanya erişimi ve ek desteklerle premium gelir oluşturulur.</p>
            </article>
            <article class="animate-in delay-3">
              <h3>Kurumsal ve Partner Gelirleri</h3>
              <p class="copy">Bankalar, yazılım firmaları ve hizmet sağlayıcıları için reklam, kampanya yayınlama ve hedefli erişim modelleri sunulur.</p>
            </article>
          </div>
        </div>
        <div class="page-stack scale-in delay-1">
          <img src="images/Page5.png" alt="Kobifly partner and campaign web pages" />
        </div>
      </section>
    `,
  },
  {
    title: "Rakip Karşılaştırması",
    html: `
      <section class="deck-slide compare-slide">
        ${logo}
        <div class="comparison">
          <img class="scale-in" src="images/Page6-a.png" alt="Feature comparison table" />
          <h2 class="section-title animate-in delay-1">Rakip Karşılaştırması</h2>
          <p class="copy animate-in delay-2">
            Kobifly, KOBİ'lerin finansal ve operasyonel karar alma sürecini uçtan uca
            kapsayan platform yaklaşımıyla pazardaki çözümlerden ayrışır.
          </p>
        </div>
        <img class="phone-art float-in delay-1" src="images/Page6-b.png" alt="Kobifly mobile app screen" />
      </section>
    `,
  },
  {
    title: "Büyüme Stratejisi",
    html: `
      <section class="deck-slide growth-slide">
        ${logo}
        <div class="growth-copy">
          <h2 class="section-title animate-in">Büyüme Stratejisi<br />(Go-To-Market)</h2>
          <p class="copy animate-in delay-1">
            Kobifly, dijital edinim, saha satış ve partner kanallarını birleştiren hibrit
            büyüme modeli ile ölçeklenir.
          </p>
          <img class="growth-photo scale-in delay-2" src="images/Page7.png" alt="Business people walking in an office" />
        </div>
        <div class="strategy-grid">
          <article class="strategy-card animate-in">
            <h3>Dijital Edinim</h3>
            <ul>
              <li>SEO ve içerik</li>
              <li>Karşılaştırma modülleri</li>
              <li>Yüksek niyetli inbound trafik</li>
            </ul>
          </article>
          <article class="strategy-card is-orange animate-in delay-1">
            <h3>Saha Satış Ekibi</h3>
            <ul>
              <li>İhtiyaca özel yönlendirme</li>
              <li>Yerinde ziyaret</li>
              <li>Doğru ürün eşleştirmesi</li>
            </ul>
          </article>
          <article class="strategy-card is-blue animate-in delay-2">
            <h3>Partner & Kurumsal Kanal</h3>
            <ul>
              <li>Bankalar</li>
              <li>Yazılım firmaları</li>
              <li>Hizmet sağlayıcılar</li>
            </ul>
          </article>
          <article class="strategy-card animate-in delay-3">
            <h3>Ölçekli Büyüme</h3>
            <ul>
              <li>Dijital ve saha kanalları</li>
              <li>Tekrarlanabilir satış akışı</li>
              <li>Partner odaklı yayılım</li>
            </ul>
          </article>
        </div>
      </section>
    `,
  },
  {
    title: "Kobifly Nasıl Çalışır?",
    html: `
      <section class="deck-slide workflow-slide">
        ${logo}
        <div class="workflow-top">
          <div>
            <h2 class="section-title animate-in">Kobifly Nasıl Çalışır?</h2>
            <p class="copy animate-in delay-1">
              Kobifly, KOBİ'lerin finansal ve operasyonel kararlarını tek platformdan,
              dijital ve saha destekli olarak yönetmesini sağlar.
            </p>
          </div>
          <div class="image-wrapper">
              <img class="float-in delay-2" src="images/Page8.png" alt="Kobifly web platform workflow" />
          </div>
        </div>
        <div class="steps animate-in delay-3">
          <article class="step-card step-purple" data-step="1">
            <span class="step-number">1</span>
            <h3>HIZLI KAYIT</h3>
            <p class="copy">Dakikalar içinde hesabını oluştur.</p>
          </article>
          <article class="step-card step-orange" data-step="2">
            <span class="step-number">2</span>
            <h3>İHTİYACINI BELİRLE</h3>
            <p class="copy">Ne aradığını seç: POS, kredi, kart, sigorta, kampanya.</p>
          </article>
          <article class="step-card step-blue" data-step="3">
            <span class="step-number">3</span>
            <h3>TEKLİFLERİ GÖR</h3>
            <p class="copy">Sana özel teklifleri tek ekranda incele.</p>
          </article>
          <article class="step-card step-orange" data-step="4">
            <span class="step-number">4</span>
            <h3>TEK TIKLA BAŞVUR</h3>
            <p class="copy">En iyi seçeneğe anında başvur.</p>
          </article>
          <article class="step-card step-purple" data-step="5">
            <span class="step-number">5</span>
            <h3>HEPSİNİ YÖNET</h3>
            <p class="copy">Tüm finansını tek panelden kontrol et.</p>
          </article>
        </div>
      </section>
    `,
  },
];

const slideContent = document.querySelector("#slide-content");
const requestedSlide = Number(new URLSearchParams(window.location.search).get("slide"));
let currentIndex =
  Number.isInteger(requestedSlide) && requestedSlide >= 1 && requestedSlide <= slides.length
    ? requestedSlide - 1
    : 0;
let pointerStartX = null;

const updateSlide = () => {
  const slide = slides[currentIndex];
  slideContent.innerHTML = slide.html;
  document.title = `${slide.title} | Kobifly`;
};

const goToSlide = (index) => {
  currentIndex = (index + slides.length) % slides.length;
  updateSlide();
};

document.addEventListener("click", (event) => {
  const button = event.target.closest("[data-action]");
  if (!button) return;

  if (button.dataset.action === "prev") {
    goToSlide(currentIndex - 1);
  }

  if (button.dataset.action === "next") {
    goToSlide(currentIndex + 1);
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") goToSlide(currentIndex - 1);
  if (event.key === "ArrowRight") goToSlide(currentIndex + 1);
});

slideContent.addEventListener("pointerdown", (event) => {
  pointerStartX = event.clientX;
});

slideContent.addEventListener("pointerup", (event) => {
  if (pointerStartX === null) return;

  const movement = event.clientX - pointerStartX;
  pointerStartX = null;

  if (Math.abs(movement) < 42) return;
  goToSlide(currentIndex + (movement < 0 ? 1 : -1));
});

updateSlide();
