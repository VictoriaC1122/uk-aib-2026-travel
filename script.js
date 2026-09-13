const handbookData = window.HandbookData;

if (!handbookData) {
  const content = document.getElementById("page-content");
  if (content) {
    const fallback = document.createElement("section");
    fallback.className = "section compact-section render-fallback";
    const title = document.createElement("h1");
    title.textContent = "AIB 2026 Manchester";
    const message = document.createElement("p");
    message.textContent = "行程資料沒有載入，請重新整理頁面。";
    const link = document.createElement("a");
    link.className = "button primary";
    link.href = "./index.html";
    link.textContent = "回首頁";
    fallback.appendChild(title);
    fallback.appendChild(message);
    fallback.appendChild(link);
    while (content.firstChild) content.removeChild(content.firstChild);
    content.appendChild(fallback);
  }
  document.body.dataset.renderState = "fallback";
  throw new Error("handbook-data.js failed to load.");
}

const {
  pages,
  primaryNavPageIds,
  primaryNavLabels,
  statusLabels,
  money,
  currencies,
  languageOptions,
  tripData,
  shoppingData,
  souvenirData,
  sectionNav,
  conferenceSessions,
  dashboardData,
  homeSectionTabs,
  homeJourneyTimeline,
  parisMustDoItems,
  dailyGuides,
  dayCardFrames,
  itineraryQuickJump,
  itineraryDayCards,
  conferenceAlerts,
  paperCards,
  checklistGroups,
  STORAGE_KEYS,
  SUPPORTED_LANGUAGE_IDS,
  HOME_TAB_IDS,
  HOME_DEFAULT_TAB
} = handbookData;

const state = {
  lang: getStoredLang(),
  currency: getStoredCurrency()
};

const dailyGuideLookup = new Map(dailyGuides.map((day) => [day.id, day]));
const itineraryDayLookup = new Map(itineraryDayCards.map((day) => [day.id, day]));
const itineraryTypeMeta = {
  flight: { icon: "✈️", label: { zh: "航班", en: "Flight" } },
  transport: { icon: "🚆", label: { zh: "移動", en: "Transport" } },
  hotel: { icon: "🏨", label: { zh: "住宿", en: "Hotel" } },
  activity: { icon: "📍", label: { zh: "行程", en: "Activity" } },
  meal: { icon: "🍽", label: { zh: "餐食", en: "Meal" } },
  conference: { icon: "🎤", label: { zh: "會議", en: "Conference" } },
  reminder: { icon: "⚠️", label: { zh: "提醒", en: "Reminder" } }
};

function conferenceSessionSentence(sessionKey, lang = "zh") {
  const session = conferenceSessions[sessionKey];
  if (!session) return "";
  const sessionLabel = (session.label && (session.label[lang] || session.label.en || session.label.zh)) || "";
  const dateLabel = (session.dateLabel && (session.dateLabel[lang] || session.dateLabel.en || session.dateLabel.zh)) || "";
  if (lang === "zh") {
    return `${sessionLabel} 是 ${dateLabel} ${session.time}，${session.session}，地點在 ${session.room}。`;
  }
  return `${sessionLabel} is on ${dateLabel}, ${session.time}, in ${session.session} at Room ${session.room}.`;
}

function renderParisMustDoCard(item, index) {
  return `
    <article class="paris-mustdo-card">
      <div class="paris-mustdo-top">
        <span class="paris-mustdo-index">${String(index + 1).padStart(2, "0")}</span>
        <span class="paris-mustdo-area">${escapeHtml(t(item.area))}</span>
      </div>
      <h3>${escapeHtml(t(item.title))}</h3>
      <div class="paris-mustdo-tags">
        ${item.tags.map((tag) => `<span>${escapeHtml(t(tag))}</span>`).join("")}
      </div>
      <p>${escapeHtml(t(item.body))}</p>
    </article>
  `;
}

function readStoredValue(key, fallback, options = {}) {
  const { parse = (value) => value, validate = () => true } = options;
  try {
    const rawValue = localStorage.getItem(key);
    if (rawValue == null) return fallback;
    const parsedValue = parse(rawValue);
    return validate(parsedValue) ? parsedValue : fallback;
  } catch (_error) {
    return fallback;
  }
}

function writeStoredValue(key, value, options = {}) {
  const { serialize = (currentValue) => String(currentValue) } = options;
  try {
    localStorage.setItem(key, serialize(value));
  } catch (_error) {
    // localStorage may be unavailable in private browsing.
  }
}

function queryAll(selector, root = document) {
  return [...root.querySelectorAll(selector)];
}

function bindOnce(element, boundKey, eventName, handler) {
  if (element.dataset[boundKey]) return;
  element.dataset[boundKey] = "true";
  element.addEventListener(eventName, handler);
}

function disconnectObservers(observers) {
  observers.forEach((observer) => observer.disconnect());
  return [];
}

function hashValue(value = "") {
  return value.replace(/^#/, "");
}

function getLinkTargetId(link, datasetKey) {
  return link.dataset[datasetKey] || hashValue(link.getAttribute("href") || "");
}

function toggleActiveLinkSet(links, activeId, getTargetId) {
  links.forEach((link) => {
    const active = getTargetId(link) === activeId;
    link.classList.toggle("active", active);
    if (active) link.setAttribute("aria-current", "true");
    else link.removeAttribute("aria-current");
  });
}

function observeMostVisibleSection(sections, onVisible, options) {
  if (!sections.length || typeof IntersectionObserver === "undefined") return null;
  const observer = new IntersectionObserver((entries) => {
    const visibleEntry = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (visibleEntry && visibleEntry.target && visibleEntry.target.id) onVisible(visibleEntry.target.id);
  }, options);
  sections.forEach((section) => observer.observe(section));
  return observer;
}

function getChecklistStore() {
  return readStoredValue(STORAGE_KEYS.checklist, {}, {
    parse: (value) => JSON.parse(value),
    validate: (value) => value && typeof value === "object" && !Array.isArray(value)
  });
}

function setChecklistItem(id, checked) {
  const store = getChecklistStore();
  store[id] = checked;
  writeStoredValue(STORAGE_KEYS.checklist, store, {
    serialize: (value) => JSON.stringify(value)
  });
}

function isChecklistItemChecked(id) {
  return Boolean(getChecklistStore()[id]);
}

function t(value) {
  if (typeof value === "string") return value;
  if (!value) return "";
  return value[state.lang] || value.en || value.zh || "";
}

function currentDocumentLang() {
  return {
    zh: "zh-Hant",
    en: "en",
    fr: "fr",
    de: "de"
  }[state.lang] || "en";
}

const interfaceCopy = {
  zh: {
    preferences: "語言與幣別",
    interfaceLanguage: "介面語言",
    displayCurrency: "顯示幣別",
    closePreferences: "關閉設定",
    handbookTabs: "旅遊手冊分頁",
    skipToContent: "跳到主要內容",
    tripStatus: "旅程狀態",
    confirmedSessions: "兩場發表已確認",
    openStatus: "查看兩場發表",
    conferencePlan: "查看 AIB 會議",
    currentCard: "目前查看",
    translationCoverage: "完整資料以中文版為準；英文、法文與德文版翻譯介面，地名保留原文。"
  },
  en: {
    preferences: "Language & currency",
    interfaceLanguage: "Interface language",
    displayCurrency: "Display currency",
    closePreferences: "Close settings",
    handbookTabs: "Travel handbook tabs",
    skipToContent: "Skip to main content",
    tripStatus: "Trip status",
    confirmedSessions: "Both sessions confirmed",
    openStatus: "View both sessions",
    conferencePlan: "View AIB conference",
    currentCard: "Currently viewing",
    translationCoverage: "Chinese is the complete edition. English, French, and German modes translate the main interface; some detailed notes remain in English."
  },
  fr: {
    preferences: "Langue et devise",
    interfaceLanguage: "Langue de l’interface",
    displayCurrency: "Devise affichée",
    closePreferences: "Fermer les réglages",
    handbookTabs: "Onglets du carnet de voyage",
    skipToContent: "Aller au contenu principal",
    tripStatus: "État du voyage",
    confirmedSessions: "Deux présentations confirmées",
    openStatus: "Voir les deux sessions",
    conferencePlan: "Voir la conférence AIB",
    currentCard: "Carte affichée",
    translationCoverage: "Le chinois est la version complète. L’interface est traduite en français, mais certains détails restent en anglais."
  },
  de: {
    preferences: "Sprache und Währung",
    interfaceLanguage: "Oberflächensprache",
    displayCurrency: "Angezeigte Währung",
    closePreferences: "Einstellungen schließen",
    handbookTabs: "Reisehandbuch-Navigation",
    skipToContent: "Zum Hauptinhalt springen",
    tripStatus: "Reisestatus",
    confirmedSessions: "Zwei Vorträge bestätigt",
    openStatus: "Beide Vorträge ansehen",
    conferencePlan: "AIB-Konferenz ansehen",
    currentCard: "Aktuelle Karte",
    translationCoverage: "Chinesisch ist die vollständige Fassung. Die Oberfläche ist auf Deutsch, einzelne Detailtexte bleiben auf Englisch."
  }
};

function uiCopy(key) {
  return (interfaceCopy[state.lang] && interfaceCopy[state.lang][key])
    || interfaceCopy.en[key]
    || key;
}

function languageSwitchLabel(language) {
  const languageName = t(language.name);
  if (state.lang === "fr") return `Passer en ${languageName}`;
  if (state.lang === "de") return `Zu ${languageName} wechseln`;
  if (state.lang === "zh") return `切換為${languageName}`;
  return `Switch language to ${languageName}`;
}

function currencySwitchLabel(currency) {
  const currencyName = t(currency.label);
  if (state.lang === "fr") return `Afficher les prix en ${currencyName}`;
  if (state.lang === "de") return `Preise in ${currencyName} anzeigen`;
  if (state.lang === "zh") return `切換為${currencyName}`;
  return `Show prices in ${currencyName}`;
}

function getStoredCurrency() {
  return readStoredValue(STORAGE_KEYS.currency, "TWD");
}

function storeCurrency(currency) {
  state.currency = currency;
  writeStoredValue(STORAGE_KEYS.currency, currency);
}

function budgetAmount(row) {
  return (row.amounts && row.amounts[state.currency]) || t(row.amount);
}

function statusChip(status) {
  const label = statusLabels[status] ? t(statusLabels[status]) : status;
  return `<span class="status-chip status-${escapeHtml(status)}">${escapeHtml(label)}</span>`;
}

function sectionHeading(eyebrow, title, body = "", options = {}) {
  const centerClass = options.center ? " center" : "";
  const subClass = options.sub ? " sub-heading" : "";
  const bodyMarkup = body ? `<p>${escapeHtml(body)}</p>` : "";
  return `
    <div class="section-heading${centerClass}${subClass}">
      <p class="eyebrow">${escapeHtml(eyebrow)}</p>
      <h2>${escapeHtml(title)}</h2>
      ${bodyMarkup}
    </div>
  `;
}

function renderList(items, className = "clean-list") {
  if (!items || !items.length) return "";
  const classAttr = className ? ` class="${escapeHtml(className)}"` : "";
  return `<ul${classAttr}>${items.map((item) => `<li>${escapeHtml(t(item))}</li>`).join("")}</ul>`;
}

function renderSummaryCard({ status, title, value, note, facts, image, imageAlt, photos }) {
  const valueMarkup = value ? `<strong>${escapeHtml(t(value))}</strong>` : "";
  const factsMarkup = facts ? renderList(facts) : "";
  const noteMarkup = note ? `<p>${escapeHtml(t(note))}</p>` : "";
  const imageMarkup = image ? `
    <div class="summary-card-media">
      <img class="summary-card-image" src="${escapeHtml(image)}" alt="${escapeHtml(t(imageAlt || title))}" width="1600" height="1000" loading="lazy" decoding="async" data-image-fallback />
    </div>
  ` : "";
  const galleryMarkup = photos && photos.length ? `
    <div class="summary-card-gallery${photos.length === 1 ? " single" : ""}">
      ${photos.map((photo) => `
        <figure class="summary-photo-tile">
          <img class="summary-photo-image" src="${escapeHtml(photo.src)}" alt="${escapeHtml(t(photo.alt || photo.label || title))}" width="1600" height="1000" loading="lazy" decoding="async" data-image-fallback />
          ${photo.label ? `<figcaption>${escapeHtml(t(photo.label))}</figcaption>` : ""}
        </figure>
      `).join("")}
    </div>
  ` : "";
  return `
    <article class="summary-card${image || (photos && photos.length) ? " with-media" : ""}">
      ${imageMarkup}
      ${galleryMarkup}
      ${status ? statusChip(status) : ""}
      <h3>${escapeHtml(t(title))}</h3>
      ${valueMarkup}
      ${factsMarkup}
      ${noteMarkup}
    </article>
  `;
}

function renderMetaRow(items, className = "") {
  const validItems = (items || []).filter((item) => item && item.label && item.value);
  if (!validItems.length) return "";
  const classAttr = className ? ` ${escapeHtml(className)}` : "";
  return `
    <div class="meta-row${classAttr}">
      ${validItems.map((item) => `
        <div class="meta-pill">
          <span>${escapeHtml(t(item.label))}</span>
          <strong>${escapeHtml(t(item.value))}</strong>
        </div>
      `).join("")}
    </div>
  `;
}

function renderStaySnapshotCard({ city, hotel, dates, status, note }) {
  return `
    <article class="stay-overview-card">
      <div class="stay-overview-card-head">
        <span class="stay-overview-city">${escapeHtml(t(city))}</span>
        ${statusChip(status)}
      </div>
      <h3>${escapeHtml(t(hotel))}</h3>
      <strong>${escapeHtml(t(dates))}</strong>
      <p>${escapeHtml(t(note))}</p>
    </article>
  `;
}

function renderStayStatCard(label, value, note = "") {
  return `
    <article class="stay-stat-card">
      <span>${escapeHtml(t(label))}</span>
      <strong>${escapeHtml(t(value))}</strong>
      ${note ? `<p>${escapeHtml(t(note))}</p>` : ""}
    </article>
  `;
}

function renderStayInfoList(items) {
  return `
    <div class="stay-info-list">
      ${items.map((item) => `
        <div class="stay-info-item">
          <span>${escapeHtml(t(item.label))}</span>
          <strong>${escapeHtml(t(item.value))}</strong>
        </div>
      `).join("")}
    </div>
  `;
}

function renderStayWarningOptions(options) {
  return `
    <div class="stay-warning-options">
      ${options.map((item) => `
        <div>
          <strong>${escapeHtml(t(item.title))}</strong>
          <span>${escapeHtml(t(item.note))}</span>
        </div>
      `).join("")}
    </div>
  `;
}

function renderStayNextSteps(items) {
  return `
    <ol class="stay-next-steps">
      ${items.map((item) => `
        <li>
          <strong>${escapeHtml(t(item.title))}</strong>
          <span>${escapeHtml(t(item.note))}</span>
        </li>
      `).join("")}
    </ol>
  `;
}

function renderMiniHighlightCard(label, value) {
  return `
    <article class="mini-highlight">
      <div class="mini-highlight-label">${escapeHtml(t(label))}</div>
      <div class="mini-highlight-value">${escapeHtml(t(value))}</div>
    </article>
  `;
}

function renderAppTag(label) {
  return `<span class="app-tag">${escapeHtml(t(label))}</span>`;
}

function renderHomeTabs() {
  return `
    <div class="handbook-tabs-shell" aria-label="${escapeHtml(uiCopy("handbookTabs"))}">
      <nav class="handbook-tabs-track" role="tablist" aria-label="${escapeHtml(uiCopy("handbookTabs"))}">
        ${homeSectionTabs.map((tab, index) => `
          <a
            href="#${tab.id}"
            class="handbook-tab-link${index === 0 ? " active" : ""}"
            id="home-tab-${tab.id}"
            role="tab"
            data-home-tab="${tab.id}"
            aria-controls="${tab.id}"
            aria-selected="${index === 0 ? "true" : "false"}"
            aria-label="${escapeHtml(t(tab.label))}"
            tabindex="${index === 0 ? "0" : "-1"}"
          >
            <span>${escapeHtml(t(tab.label))}</span>
          </a>
        `).join("")}
      </nav>
    </div>
  `;
}

function renderPaperCard(paper) {
  return `
    <article class="paper-card">
      <div class="paper-card-head">
        <div>
          ${renderAppTag(paper.tag)}
          <h3>${escapeHtml(paper.title)}</h3>
        </div>
        ${statusChip("confirmed")}
      </div>
      <div class="paper-session-badge">${escapeHtml(t(paper.session))}</div>
      ${paper.schedule && paper.schedule.length ? renderMetaRow(paper.schedule, "paper-meta-row") : ""}
      <p class="paper-coauthor"><strong>${state.lang !== "zh" ? "Coauthor" : "共同作者"}</strong> ${escapeHtml(t(paper.coauthor))}</p>
      <div class="paper-prep-block">
        <div class="paper-prep-title">${state.lang !== "zh" ? "Preparation checklist" : "準備清單"}</div>
        ${renderList(paper.checklist[state.lang] || paper.checklist.en || paper.checklist.zh, "plain-list")}
      </div>
      <div class="paper-status-row">
        ${paper.placeholders.map((item) => `
          <div class="paper-status-pill">
            <span>${escapeHtml(t(item.label))}</span>
            <strong>${escapeHtml(t(item.value))}</strong>
          </div>
        `).join("")}
      </div>
    </article>
  `;
}

function renderChecklistBoard() {
  return `
    <div class="checklist-groups">
      ${checklistGroups.map((group) => `
        <article class="checklist-group-card">
          <div class="checklist-group-head">
            ${renderAppTag({ zh: "出發前確認", en: "Checklist" })}
            <h3>${escapeHtml(t(group.title))}</h3>
          </div>
          <div class="checklist-items">
            ${group.items.map((item) => {
              const checked = isChecklistItemChecked(item.id);
              return `
                <label class="checklist-item${checked ? " checked" : ""}">
                  <input type="checkbox" data-checklist-id="${escapeHtml(item.id)}" ${checked ? "checked" : ""} />
                  <span class="checkmark" aria-hidden="true"></span>
                  <span class="checklist-text">${escapeHtml(t(item.text))}</span>
                </label>
              `;
            }).join("")}
          </div>
        </article>
      `).join("")}
    </div>
  `;
}

function renderBudgetCards(rows) {
  return `
    <div class="budget-card-list">
      ${rows.map((row) => `
        <article class="budget-mobile-card">
          <div class="budget-mobile-head">
            <div>
              ${renderAppTag(row.status === "reimburse" ? "Budget" : "Cost")}
              <h3>${escapeHtml(t(row.item))}</h3>
            </div>
            ${statusChip(row.status)}
          </div>
          <div class="budget-mobile-amounts">
            <div><span>GBP</span><strong>${escapeHtml((row.amounts && row.amounts.GBP) || "-")}</strong></div>
            <div><span>TWD</span><strong>${escapeHtml((row.amounts && row.amounts.TWD) || "-")}</strong></div>
            <div><span>EUR</span><strong>${escapeHtml((row.amounts && row.amounts.EUR) || "-")}</strong></div>
            <div><span>USD</span><strong>${escapeHtml((row.amounts && row.amounts.USD) || "-")}</strong></div>
          </div>
          <p>${escapeHtml(t(row.notes))}</p>
        </article>
      `).join("")}
    </div>
  `;
}

function externalLink(href, label, className = "") {
  const classAttr = className ? ` class="${escapeHtml(className)}"` : "";
  return `<a${classAttr} href="${escapeHtml(href)}" target="_blank" rel="noreferrer noopener">${escapeHtml(label)} <span aria-hidden="true">↗</span></a>`;
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function getStoredLang() {
  return readStoredValue(STORAGE_KEYS.language, "zh", {
    validate: (value) => SUPPORTED_LANGUAGE_IDS.has(value)
  });
}

function storeLang(lang) {
  writeStoredValue(STORAGE_KEYS.language, lang);
}

function renderChrome() {
  const pageId = document.body.dataset.page || "home";
  const navIds = primaryNavPageIds.includes(pageId) ? primaryNavPageIds : [...primaryNavPageIds, pageId];
  const primaryNav = navIds.map((id) => pages.find((page) => page.id === id)).filter(Boolean);
  const labelForPage = (page) => primaryNavLabels[page.id] || page.label;
  const nav = primaryNav
    .map((page) => {
      const active = page.id === pageId ? ' class="nav-item active" aria-current="page"' : ' class="nav-item"';
      return `<a href="${page.href}" data-nav="${page.id}"${active}>${t(labelForPage(page))}</a>`;
    })
    .join("");
  const langButtons = languageOptions
    .map((lang) => `
      <button class="pill-btn${state.lang === lang.id ? " active" : ""}" type="button" data-lang="${lang.id}" aria-pressed="${state.lang === lang.id ? "true" : "false"}" aria-label="${escapeHtml(languageSwitchLabel(lang))}">${lang.label}</button>
    `)
    .join("");
  const currencyButtons = currencies
    .map((currency) => {
      const label = state.lang !== "zh" ? currency.id : t(currency.label);
      return `<button class="pill-btn${state.currency === currency.id ? " active" : ""}" type="button" data-currency="${currency.id}" aria-pressed="${state.currency === currency.id ? "true" : "false"}" aria-label="${escapeHtml(currencySwitchLabel(currency))}">${escapeHtml(label)}</button>`;
    })
    .join("");

  const headerSlot = document.querySelector("[data-site-header]");
  const homeTabsSlot = document.querySelector("[data-home-tabs]");
  const footerSlot = document.querySelector("[data-site-footer]");
  const skipLink = document.querySelector(".skip-link");
  const activeLanguage = languageOptions.find((language) => language.id === state.lang) || languageOptions[0];
  const preferencePanel = `
    <details class="preference-menu" data-preference-menu>
      <summary class="preference-summary" aria-label="${escapeHtml(uiCopy("preferences"))}">
        <span class="preference-summary-icon" aria-hidden="true">Aa</span>
        <strong>${escapeHtml(activeLanguage.label)} · ${escapeHtml(state.currency)}</strong>
      </summary>
      <div class="preference-popover">
        <div class="preference-group lang-buttons" role="group" aria-label="${escapeHtml(uiCopy("interfaceLanguage"))}">
          <div class="preference-label">${escapeHtml(uiCopy("interfaceLanguage"))}</div>
          <div class="preference-options">${langButtons}</div>
        </div>
        <div class="preference-group currency-buttons" role="group" aria-label="${escapeHtml(uiCopy("displayCurrency"))}">
          <div class="preference-label">${escapeHtml(uiCopy("displayCurrency"))}</div>
          <div class="preference-options">${currencyButtons}</div>
        </div>
        <p class="preference-note">${escapeHtml(uiCopy("translationCoverage"))}</p>
        <button class="preference-close" type="button" data-preference-close>${escapeHtml(uiCopy("closePreferences"))}</button>
      </div>
    </details>
  `;

  if (skipLink) skipLink.textContent = uiCopy("skipToContent");

  if (headerSlot) {
    headerSlot.innerHTML = `
      <div class="topbar handbook-topbar${pageId === "home" ? " home-toolbar" : ""}">
        <a class="handbook-brand" href="./index.html" aria-label="${state.lang !== "zh" ? "Back to overview" : "回到總覽"}">
          <span>AIB 2026 Manchester</span>
          <small>${state.lang !== "zh" ? "Germany · UK · France travel handbook" : "德英法之旅手冊"}</small>
        </a>
        <div class="home-toolbar-actions">${preferencePanel}</div>
      </div>
      ${pageId === "home" ? "" : `
        <nav class="main-nav handbook-main-nav" aria-label="${state.lang !== "zh" ? "Primary page tabs" : "主要分頁"}">
          ${nav}
        </nav>
      `}
    `;
  }

  if (homeTabsSlot) {
    homeTabsSlot.innerHTML = pageId === "home" ? renderHomeTabs() : "";
  }

  if (footerSlot) {
    footerSlot.innerHTML = `
    <footer class="site-footer handbook-footer">
        <p>${state.lang !== "zh" ? "AIB 2026 Manchester · Germany · UK · France travel handbook" : "AIB 2026 Manchester · 德英法之旅手冊"}</p>
      <a href="./index.html">${state.lang !== "zh" ? "Back to overview" : "回到總覽"}</a>
    </footer>
  `;
  }

  document.querySelectorAll("[data-lang]").forEach((button) => {
    button.addEventListener("click", () => {
      state.lang = button.dataset.lang;
      storeLang(state.lang);
      safeRenderApp();
    });
  });

  scrollActiveMobileNavIntoView();
}

function scrollActiveMobileNavIntoView() {
  const active = document.querySelector(".main-nav .nav-item.active, .bottom-nav .bottom-nav-item.active");
  if (!active || window.matchMedia("(min-width: 761px)").matches) return;
  requestAnimationFrame(() => {
    active.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  });
}

const localeTextOverrides = {
  fr: {
    "Overview": "Aperçu",
    "Conference": "Conférence",
    "Flights": "Vols",
    "Stay": "Séjour",
    "Transport": "Transports",
    "Budget": "Budget",
    "Checklist": "Checklist",
    "Itinerary": "Programme",
    "Shopping": "Shopping",
    "Travel Notes": "Notes de voyage",
    "Germany · UK · France Notes": "Notes Allemagne · Royaume-Uni · France",
    "Map": "Carte",
    "Language": "Langue",
    "Currency": "Devise",
    "Back to overview": "Retour à l’aperçu",
    "Back to dashboard": "Retour au tableau de bord",
    "Useful links": "Liens utiles",
    "Travel overview": "Vue d’ensemble",
    "Conference details": "Détails de la conférence",
    "Dates": "Dates",
    "Cities": "Villes",
    "Status": "Statut",
    "Last updated": "Dernière mise à jour",
    "Navigate": "Navigation",
    "Snapshot": "Repères",
    "City": "Ville",
    "Hotel": "Hôtel",
    "Focus": "Focus",
    "Dashboard": "Tableau de bord",
    "Quick access": "Accès rapide",
    "Academic Conference Travel Dashboard": "Tableau de bord du voyage de conférence universitaire",
    "Travel Overview": "Aperçu du voyage",
    "Key Timeline": "Temps forts",
    "Conference Details": "Détails de la conférence",
    "Hotel & Stay": "Hôtel & séjour",
    "Transportation Plan": "Plan de transport",
    "Funding & Expense Notes": "Budget & dépenses",
    "Pre-departure Checklist": "Checklist avant départ",
    "Flight Overview": "Aperçu des vols",
    "Flight Segments": "Segments de vol",
    "Transfers": "Correspondances",
    "Ticket Notes": "Notes billets",
    "Flight total": "Total vols",
    "Conference fee": "Frais de conférence",
    "AIB membership fee": "Cotisation AIB",
    "Manchester hotel": "Hôtel à Manchester",
    "Train estimate": "Estimation train",
    "Pending items": "À confirmer",
    "Self-funded": "À sa charge",
    "Personal Share": "Part personnelle",
    "Proofs": "Justificatifs",
    "Document Checklist": "Checklist des documents",
    "Useful Links": "Liens utiles",
    "Reminders": "Rappels",
    "Final Check": "Dernière vérification",
    "Entry": "Entrée",
    "City Basics": "Repères sur place",
    "Daily Notes": "Notes du quotidien",
    "First Day": "Premier jour",
    "Confirmed": "Confirmé",
    "Pending": "En attente",
    "To book": "À réserver",
    "To reimburse": "À rembourser",
    "Self-funded known subtotal": "Sous-total personnel connu",
    "NSTC daily allowance": "Indemnité journalière NSTC",
    "Hotel per person": "Hôtel par personne",
    "Per person / night": "Par personne / nuit",
    "Known personal self-funded": "Dépenses personnelles connues",
    "Papers": "Papers",
    "Alerts": "Rappels",
    "Top": "Haut",
    "Back to top": "Retour en haut",
    "Open booking": "Voir la réservation",
    "Map": "Carte",
    "Section navigation": "Navigation des sections",
    "Language and currency controls": "Réglages langue et devise",
    "Language switcher": "Choix de langue",
    "Currency switcher": "Choix de devise",
    "Primary page tabs": "Navigation principale",
    "Primary mobile navigation": "Navigation mobile principale"
  },
  de: {
    "Overview": "Überblick",
    "Conference": "Konferenz",
    "Flights": "Flüge",
    "Stay": "Unterkunft",
    "Transport": "Verkehr",
    "Budget": "Budget",
    "Checklist": "Checkliste",
    "Itinerary": "Reiseplan",
    "Shopping": "Einkauf",
    "Travel Notes": "Reisenotizen",
    "Germany · UK · France Notes": "Hinweise zu Deutschland · Großbritannien · Frankreich",
    "Map": "Karte",
    "Language": "Sprache",
    "Currency": "Währung",
    "Back to overview": "Zurück zur Übersicht",
    "Back to dashboard": "Zurück zum Dashboard",
    "Useful links": "Nützliche Links",
    "Travel overview": "Reiseüberblick",
    "Conference details": "Konferenzdetails",
    "Dates": "Daten",
    "Cities": "Städte",
    "Status": "Status",
    "Last updated": "Zuletzt aktualisiert",
    "Navigate": "Navigation",
    "Snapshot": "Kurzüberblick",
    "City": "Stadt",
    "Hotel": "Hotel",
    "Focus": "Fokus",
    "Dashboard": "Dashboard",
    "Quick access": "Schnellzugriff",
    "Academic Conference Travel Dashboard": "Dashboard für die akademische Konferenzreise",
    "Travel Overview": "Reiseüberblick",
    "Key Timeline": "Zeitachse",
    "Conference Details": "Konferenzdetails",
    "Hotel & Stay": "Hotel & Aufenthalt",
    "Transportation Plan": "Transportplan",
    "Funding & Expense Notes": "Finanzen & Ausgaben",
    "Pre-departure Checklist": "Checkliste vor Abreise",
    "Flight Overview": "Flugüberblick",
    "Flight Segments": "Flugabschnitte",
    "Transfers": "Umstiege",
    "Ticket Notes": "Ticketnotizen",
    "Flight total": "Flugsumme",
    "Conference fee": "Konferenzgebühr",
    "AIB membership fee": "AIB-Mitgliedsbeitrag",
    "Manchester hotel": "Hotel in Manchester",
    "Train estimate": "Zugschätzung",
    "Pending items": "Offene Punkte",
    "Self-funded": "Selbst bezahlt",
    "Personal Share": "Persönlicher Anteil",
    "Proofs": "Nachweise",
    "Document Checklist": "Dokumenten-Checkliste",
    "Useful Links": "Nützliche Links",
    "Reminders": "Hinweise",
    "Final Check": "Letzter Check",
    "Entry": "Einreise",
    "City Basics": "Vor Ort",
    "Daily Notes": "Alltagshinweise",
    "First Day": "Erster Tag",
    "Confirmed": "Bestätigt",
    "Pending": "Offen",
    "To book": "Zu buchen",
    "To reimburse": "Abzurechnen",
    "Self-funded known subtotal": "Bekannte private Summe",
    "NSTC daily allowance": "NSTC-Tagespauschale",
    "Hotel per person": "Hotel pro Person",
    "Per person / night": "Pro Person / Nacht",
    "Known personal self-funded": "Bekannte private Ausgaben",
    "Papers": "Papers",
    "Alerts": "Hinweise",
    "Top": "Nach oben",
    "Back to top": "Zurück nach oben",
    "Open booking": "Buchung öffnen",
    "Map": "Karte",
    "Section navigation": "Abschnittsnavigation",
    "Language and currency controls": "Sprache und Währung",
    "Language switcher": "Sprachauswahl",
    "Currency switcher": "Währungsauswahl",
    "Primary page tabs": "Hauptnavigation",
    "Primary mobile navigation": "Mobile Hauptnavigation"
  }
};

function applySecondaryLocaleText() {
  if (!["fr", "de"].includes(state.lang)) return;
  const dict = localeTextOverrides[state.lang];
  if (!dict) return;

  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      if (!node.nodeValue || !node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
      const parent = node.parentElement;
      if (!parent || ["SCRIPT", "STYLE"].includes(parent.tagName)) return NodeFilter.FILTER_REJECT;
      return NodeFilter.FILTER_ACCEPT;
    }
  });

  const textNodes = [];
  while (walker.nextNode()) textNodes.push(walker.currentNode);

  textNodes.forEach((node) => {
    const raw = node.nodeValue;
    const trimmed = raw.trim();
    if (dict[trimmed]) {
      node.nodeValue = raw.replace(trimmed, dict[trimmed]);
    }
  });

  document.querySelectorAll("[aria-label],[title],[placeholder]").forEach((element) => {
    ["aria-label", "title", "placeholder"].forEach((attribute) => {
      const value = element.getAttribute(attribute);
      if (value && dict[value]) {
        element.setAttribute(attribute, dict[value]);
      }
    });
  });
}

function renderHero(pageId) {
  const hero = tripData.hero[pageId] || tripData.hero.home;
  const homePage = pageId === "home";
  const heroTitle = escapeHtml(t(hero.title)).replace("\n", "<br />");
  if (homePage) {
    const sessionSummary = [conferenceSessions.competitive, conferenceSessions.interactive];
    const heroStatusContent = `
      <div class="hero-session-list">
        ${sessionSummary.map((session) => `
          <article class="hero-session-row">
            <span>${escapeHtml(t(session.dateLabel))} · ${escapeHtml(t(session.label))}</span>
            <strong>${escapeHtml(session.time)} · ${escapeHtml(session.room)}</strong>
          </article>
        `).join("")}
      </div>
      <div class="hero-booking-status">
        <span>${escapeHtml(t({ zh: "目前狀態", en: "Current status", fr: "État actuel", de: "Aktueller Stand" }))}</span>
        <strong>${escapeHtml(t({ zh: "主段已定，後段細節持續補齊", en: "Core route confirmed; later details still being filled in", fr: "Le parcours principal est confirmé; les derniers détails restent à compléter", de: "Die Hauptroute steht; letzte Details werden noch ergänzt" }))}</strong>
      </div>
      <p class="hero-summary-note">${escapeHtml(t({
        zh: "四段住宿已確認。Eurostar 班次與 7/10 離開 Pullman 的時間還要補上。",
        en: "All four hotels are confirmed. The Eurostar service and the 10 July departure time from Pullman still need confirmation.",
        fr: "Les quatre hôtels sont confirmés. Le train Eurostar et l’heure de départ du Pullman le 10 juillet restent à confirmer.",
        de: "Alle vier Hotels sind bestätigt. Der Eurostar-Zug und die Abfahrtszeit vom Pullman am 10. Juli müssen noch bestätigt werden."
      }))}</p>
    `;
    return `
      <div class="editorial-hero mobile-dashboard-hero handbook-home-hero hero-content hero-home-shell">
        <section class="hero-home-main">
          <p class="eyebrow">${escapeHtml(t({ zh: "AIB 會議與德英法行程", en: "AIB conference and Germany · UK · France itinerary", fr: "Conférence AIB et itinéraire Allemagne · Royaume-Uni · France", de: "AIB-Konferenz und Route durch Deutschland · Großbritannien · Frankreich" }))}</p>
          <h1>AIB 2026 Manchester</h1>
          <div class="hero-subtitle">${escapeHtml(t({ zh: "德英法之旅手冊", en: "Germany · UK · France", fr: "Allemagne · Royaume-Uni · France", de: "Deutschland · Großbritannien · Frankreich" }))}</div>
          <div class="hero-dates">2026 / 06 / 29 – 2026 / 07 / 12</div>
          <div class="destinations">${escapeHtml(t({ zh: "法蘭克福 • 曼徹斯特 • 倫敦 • 巴黎", en: "Frankfurt • Manchester • London • Paris", fr: "Francfort • Manchester • Londres • Paris", de: "Frankfurt • Manchester • London • Paris" }))}</div>
          <p class="hero-intro">${escapeHtml(t({
            zh: "法蘭克福轉機時進市區半天，接著到曼徹斯特參加 AIB。7/4 去倫敦，7/7 搭 Eurostar 到巴黎。",
            en: "Use the Frankfurt layover for a half-day in the city, then fly to Manchester for AIB. Travel to London on 4 July and Paris on 7 July.",
            fr: "Pendant l’escale à Francfort, passez une demi-journée en ville, puis prenez le vol pour Manchester et l’AIB. Londres est prévu le 4 juillet, Paris le 7 juillet.",
            de: "Während des Aufenthalts in Frankfurt ist ein halber Tag in der Stadt geplant, danach folgt der Flug zur AIB nach Manchester. London ist am 4. Juli, Paris am 7. Juli vorgesehen."
          }))}</p>
          <p class="hero-serif-note">${escapeHtml(t({
            zh: "Competitive 在 7/1，Interactive 在 7/3。兩天都不排跨區行程。",
            en: "Competitive is on 1 July and Interactive is on 3 July. Do not plan cross-city trips on either day.",
            fr: "La session Competitive a lieu le 1er juillet et la session Interactive le 3 juillet. Aucun long déplacement ces deux jours.",
            de: "Competitive findet am 1. Juli statt, Interactive am 3. Juli. An beiden Tagen sind keine längeren Stadtfahrten geplant."
          }))}</p>
          <div class="hero-actions editorial-hero-actions">
            <a class="button primary hero-action-primary" href="#itinerary" data-home-tab-jump="itinerary">${escapeHtml(t({ zh: "看每日安排", en: "Open daily itinerary", fr: "Ouvrir l’itinéraire", de: "Tagesplan öffnen" }))}</a>
            <a class="button secondary hero-action-secondary" href="#info" data-home-tab-jump="info">${escapeHtml(uiCopy("conferencePlan"))}</a>
          </div>
        </section>
        <aside class="hero-overview-panel hero-status-desktop" aria-label="${escapeHtml(uiCopy("tripStatus"))}">
          <div class="hero-overview-head">
            <span>${escapeHtml(uiCopy("tripStatus"))}</span>
            <strong>${escapeHtml(uiCopy("confirmedSessions"))}</strong>
          </div>
          ${heroStatusContent}
        </aside>
        <details class="hero-mobile-status">
          <summary>
            <span>${escapeHtml(uiCopy("confirmedSessions"))}</span>
            <strong>${escapeHtml(uiCopy("openStatus"))}</strong>
          </summary>
          <div class="hero-mobile-status-body">${heroStatusContent}</div>
        </details>
      </div>
    `;
  }
  const homeSectionByPage = {
    conference: "info",
    flights: "flights",
    transport: "info",
    stay: "hotels",
    itinerary: "itinerary",
    shopping: "info",
    souvenirs: "info",
    map: "info",
    budget: "budget",
    reminders: "info",
    firstTime: "visa",
    documents: "links"
  };
  const homeSection = homeSectionByPage[pageId] || "overview";
  return `
    <div class="chapter-hero-shell">
      <section class="hero-copy chapter-hero-card hero-content">
        <p class="eyebrow">${escapeHtml(t(hero.kicker))}</p>
        <h1>${heroTitle}</h1>
        <p class="hero-serif-note">${escapeHtml(t(hero.lead))}</p>
        <a class="chapter-back-link" href="./index.html#${homeSection}">${state.lang !== "zh" ? "Back to the main handbook" : "回到主手冊"}<span aria-hidden="true">→</span></a>
      </section>
    </div>
  `;
}

function renderQuickNav(pageId) {
  if (pageId === "home") return "";
  const items = sectionNav[pageId] || [];
  if (!items.length) return "";
  return `
    <nav class="quick-nav" aria-label="${state.lang !== "zh" ? "Section navigation" : "頁面段落導覽"}">
      ${items.map(([id, label], index) => `
        <a href="#${escapeHtml(id)}" class="${index === 0 ? "active" : ""}" data-page-anchor="${escapeHtml(id)}">${escapeHtml(t(label))}</a>
      `).join("")}
    </nav>
  `;
}

function getPublicLink(name) {
  const matchedLink = tripData.links.find(([label]) => label === name);
  return (matchedLink && matchedLink[1]) || "#";
}

function renderHomeSectionIntro(label, title, body) {
  return `
    <div class="tab-panel-intro">
      <span class="section-label">${escapeHtml(label)}</span>
      <h2>${escapeHtml(title)}</h2>
      <p>${escapeHtml(body)}</p>
    </div>
  `;
}

function renderRouteLine() {
  return `
    <div class="handbook-route-line" aria-label="${state.lang !== "zh" ? "Travel route" : "旅程路線"}">
      <span>Frankfurt</span>
      <i aria-hidden="true"></i>
      <span>Manchester</span>
      <i aria-hidden="true"></i>
      <span>London</span>
      <i aria-hidden="true"></i>
      <span>Paris</span>
    </div>
  `;
}

function renderHeroSummaryRows() {
  return `
    <div class="handbook-summary-panel">
      ${renderHandbookSummaryRow(state.lang !== "zh" ? "Conference" : "AIB 會議", "AIB 2026 Manchester · 6/30–7/3")}
      ${renderHandbookSummaryRow(state.lang !== "zh" ? "Confirmed stays" : "已確認住宿", "INNSiDE · Riu Westminster · Pullman · Novotel CDG")}
      ${renderHandbookSummaryRow(state.lang !== "zh" ? "Intercity route" : "跨城移動", state.lang !== "zh" ? "Manchester rail → London · Eurostar → Paris" : "曼徹斯特搭火車到倫敦 · Eurostar 到巴黎")}
      ${renderHandbookSummaryRow(state.lang !== "zh" ? "Still to confirm" : "還要確認", state.lang !== "zh" ? "Eurostar booking · Pullman departure time" : "Eurostar 訂位 · 7/10 離開 Pullman 的時間")}
    </div>
  `;
}

function renderHomeOverviewPanel() {
  return `
    <section class="home-tab-panel-block">
      ${renderHomeSectionIntro(
        state.lang !== "zh" ? "Overview" : "總覽",
        state.lang !== "zh" ? "The whole route, before the daily details." : "四個城市，兩場發表。",
        state.lang !== "zh"
          ? "AIB comes first. London and Paris follow once the conference is complete."
          : "6/30 抵達曼徹斯特，7/4 到倫敦，7/7 搭 Eurostar 去巴黎。"
      )}
      <div class="handbook-overview-layout compact">
        <div class="handbook-overview-copy">
          <p>${state.lang !== "zh" ? "Frankfurt is a short stop. Manchester is for the conference. London stays around Westminster, and Paris stays around Pullman, the Louvre, and the Right Bank." : "法蘭克福只是短停；曼徹斯特以會議為主。倫敦住 Westminster，巴黎則以 Pullman、羅浮宮和右岸為中心。"}</p>
          ${renderRouteLine()}
        </div>
        ${renderHeroSummaryRows()}
      </div>
    </section>
    <section class="home-tab-panel-block">
      ${renderHomeSectionIntro(
        state.lang !== "zh" ? "Timeline" : "時間軸",
        state.lang !== "zh" ? "Read the route once before opening the details." : "日期和城市",
        state.lang !== "zh" ? "Frankfurt first, then Manchester, then London, then Paris." : "法蘭克福短停後進曼徹斯特；會議結束再到倫敦和巴黎。"
      )}
      <div class="snapshot-timeline handbook-home-timeline">
        ${homeJourneyTimeline.map(renderHandbookTimelineEntry).join("")}
      </div>
    </section>
    <section class="home-tab-panel-block overview-conference-strip">
      <article class="overview-editorial-block">
        <span class="editorial-note-label">${state.lang !== "zh" ? "AIB 2026" : "AIB 2026"}</span>
        <h3>${state.lang !== "zh" ? "AIB in Manchester" : "曼徹斯特這幾天以 AIB 為主"}</h3>
        <p>${state.lang !== "zh" ? "Both sessions are confirmed. Keep their times and rooms visible." : "兩場發表都已確認。日期、時間和教室都列在下面。"} </p>
        <div class="meta-row">
          <div class="meta-pill"><span>${escapeHtml(t(conferenceSessions.competitive.label))}</span><strong>${escapeHtml(t(conferenceSessions.competitive.dateLabel))} · ${escapeHtml(conferenceSessions.competitive.time.replace("-", "–"))} · ${escapeHtml(conferenceSessions.competitive.room.replace(" (AMBS)", ""))}</strong></div>
          <div class="meta-pill"><span>${escapeHtml(t(conferenceSessions.interactive.label))}</span><strong>${escapeHtml(t(conferenceSessions.interactive.dateLabel))} · ${escapeHtml(conferenceSessions.interactive.time.replace("-", "–"))} · ${escapeHtml(conferenceSessions.interactive.room.replace(" (UP)", ""))}</strong></div>
        </div>
      </article>
    </section>
    <section class="home-tab-panel-block">
      ${renderHomeSectionIntro(
        state.lang !== "zh" ? "Paris" : "巴黎",
        state.lang !== "zh" ? "Paris from 7 to 10 July" : "7/7–7/10 巴黎安排",
        state.lang !== "zh" ? "Pullman, the tower, the Louvre, and the Right Bank are the main pieces." : "住 Pullman 三晚。鐵塔、羅浮宮、右岸購物和蒙馬特分四天安排。"
      )}
      <div class="paris-mustdo-grid compact">
        ${parisMustDoItems.map(renderParisMustDoCard).join("")}
      </div>
    </section>
  `;
}

function renderDaySelector() {
  return `
    <nav class="day-selector-bar" aria-label="${state.lang !== "zh" ? "Day selector" : "每日切換"}">
      ${itineraryDayCards.map((day) => `
        <a class="day-selector-link" href="#${escapeHtml(day.id)}" data-day-target="${escapeHtml(day.id)}" aria-label="${escapeHtml(`${day.id} · ${t(day.dateDisplay)}`)}">
          <span>${escapeHtml((dailyGuideLookup.get(day.id) || {}).day || day.id.toUpperCase())}</span>
          <strong>${escapeHtml(t(day.dateDisplay))}</strong>
        </a>
      `).join("")}
    </nav>
  `;
}

function journeyMapUrl(query) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

function appleMapUrl(query) {
  return `https://maps.apple.com/?q=${encodeURIComponent(query)}`;
}

function getItineraryProgressSnapshot(activeId = itineraryDayCards[0] && itineraryDayCards[0].id) {
  const activeIndex = Math.max(0, itineraryDayCards.findIndex((day) => day.id === activeId));
  const activeDay = itineraryDayCards[activeIndex] || itineraryDayCards[0];
  const total = itineraryDayCards.length || 1;
  const nextDay = itineraryDayCards[activeIndex + 1];
  return {
    activeDay,
    activeIndex,
    total,
    progress: ((activeIndex + 1) / total) * 100,
    nextMove: nextDay ? t(activeDay.nextMove || nextDay.themeLabel) : (state.lang !== "zh" ? "Trip complete" : "最後一段就是返程")
  };
}

function renderItineraryProgress(activeId = itineraryDayCards[0] && itineraryDayCards[0].id) {
  const snapshot = getItineraryProgressSnapshot(activeId);
  const activeGuide = dailyGuideLookup.get(snapshot.activeDay.id);
  return `
    <section class="itinerary-progress-panel" data-itinerary-progress>
      <div class="itinerary-progress-head">
        <span class="section-label">${escapeHtml(uiCopy("currentCard"))}</span>
        <strong data-progress-day>${escapeHtml(`${activeGuide ? activeGuide.day : snapshot.activeDay.id} / ${snapshot.total}`)}</strong>
      </div>
      <div class="itinerary-progress-grid">
        <article>
          <span>${state.lang !== "zh" ? "Current city" : "目前所在"}</span>
          <strong data-progress-city>${escapeHtml(t(snapshot.activeDay.progressCity))}</strong>
        </article>
        <article>
          <span>${state.lang !== "zh" ? "Next move" : "下一段"}</span>
          <strong data-progress-next>${escapeHtml(snapshot.nextMove)}</strong>
        </article>
      </div>
      <div class="itinerary-progress-track" aria-hidden="true">
        <span data-progress-fill style="width:${snapshot.progress}%"></span>
      </div>
    </section>
  `;
}

function renderItineraryQuickJump() {
  return `
    <nav class="itinerary-quickjump" aria-label="${state.lang !== "zh" ? "Itinerary quick jump" : "行程快速跳轉"}">
      ${itineraryQuickJump.map((item, index) => `
        <a
          class="itinerary-quickjump-link${index === 0 ? " active" : ""}"
          href="#${escapeHtml(item.target)}"
          data-journey-jump="${escapeHtml(item.id)}"
        >
          ${escapeHtml(t(item.label))}
        </a>
      `).join("")}
    </nav>
  `;
}

function renderItineraryToolkit() {
  return `
    <div class="itinerary-tools-stack">
      ${renderItineraryProgress()}
      ${renderItineraryQuickJump()}
      ${renderDaySelector()}
    </div>
  `;
}

function renderTimelineTypeBadge(type) {
  const meta = itineraryTypeMeta[type] || itineraryTypeMeta.activity;
  return `<span class="timeline-type-badge timeline-type-${escapeHtml(type)}">${escapeHtml(meta.icon)} ${escapeHtml(t(meta.label))}</span>`;
}

function renderTimelineDetails(details = {}) {
  const rows = [
    details.address ? `<div><span>${state.lang !== "zh" ? "Address" : "地址"}</span><strong>${escapeHtml(t(details.address))}</strong></div>` : "",
    details.duration ? `<div><span>${state.lang !== "zh" ? "Estimated duration" : "預估停留"}</span><strong>${escapeHtml(t(details.duration))}</strong></div>` : "",
    details.documents ? `<div><span>${state.lang !== "zh" ? "Bring / booking" : "文件 / 訂位"}</span><strong>${escapeHtml(t(details.documents))}</strong></div>` : "",
    details.note ? `<div><span>${state.lang !== "zh" ? "Note" : "提醒"}</span><strong>${escapeHtml(t(details.note))}</strong></div>` : ""
  ].filter(Boolean).join("");

  const mapQuery = details.mapQuery || t(details.address || "");
  const actions = mapQuery ? `
    <div class="timeline-detail-actions">
      ${externalLink(journeyMapUrl(mapQuery), state.lang !== "zh" ? "Google Maps" : "Google 地圖", "text-link-button")}
      ${externalLink(appleMapUrl(mapQuery), state.lang !== "zh" ? "Apple Maps" : "Apple 地圖", "text-link-button")}
      ${details.address ? `<button type="button" class="text-link-button copy-link-button" data-copy-text="${escapeHtml(t(details.address))}" data-copy-success="${escapeHtml(state.lang !== "zh" ? "Copied" : "已複製")}">${state.lang !== "zh" ? "Copy address" : "複製地址"}</button>` : ""}
    </div>
  ` : "";

  if (!rows && !actions) return "";
  return `
    <details class="timeline-detail-disclosure">
      <summary>${state.lang !== "zh" ? "More details" : "看詳細資訊"}</summary>
      ${rows ? `<div class="timeline-detail-grid">${rows}</div>` : ""}
      ${actions}
    </details>
  `;
}

function renderTimelineEvent(event, index, guide) {
  const meta = itineraryTypeMeta[event.type] || itineraryTypeMeta.activity;
  const fallbackRoute = guide && guide.route && guide.route[index] ? guide.route[index] : null;
  const description = event.description || (fallbackRoute ? fallbackRoute.text : "");
  return `
    <article class="timeline-item timeline-item-${escapeHtml(event.type)}">
      <div class="timeline-time">${escapeHtml(t(event.time || ""))}</div>
      <div class="timeline-rail" aria-hidden="true">
        <span class="timeline-icon">${escapeHtml(meta.icon)}</span>
      </div>
      <div class="timeline-content">
        <div class="timeline-content-top">
          ${renderTimelineTypeBadge(event.type)}
          <h3>${escapeHtml(t(event.title || (fallbackRoute && fallbackRoute.label) || ""))}</h3>
        </div>
        ${event.location ? `<p class="timeline-location">${escapeHtml(t(event.location))}</p>` : ""}
        ${description ? `<p class="timeline-description">${escapeHtml(t(description))}</p>` : ""}
        ${renderTimelineDetails(event.details)}
      </div>
    </article>
  `;
}

function renderConferenceSpotlight(spotlight) {
  if (!spotlight) return "";
  return `
    <aside class="day-conference-spotlight">
      <div class="day-conference-head">
        <span class="section-label">${escapeHtml(t(spotlight.eyebrow))}</span>
        <h3>${escapeHtml(t(spotlight.title))}</h3>
      </div>
      <div class="day-conference-chips">
        ${(spotlight.chips || []).map((chip) => `<span>${escapeHtml(t(chip))}</span>`).join("")}
      </div>
      ${spotlight.facts && spotlight.facts.length ? `
        <div class="day-conference-facts">
          ${spotlight.facts.map((fact) => `
            <div>
              <span>${escapeHtml(t(fact.label))}</span>
              <strong>${escapeHtml(t(fact.value))}</strong>
            </div>
          `).join("")}
        </div>
      ` : ""}
      ${spotlight.note ? `<p>${escapeHtml(t(spotlight.note))}</p>` : ""}
    </aside>
  `;
}

function renderDayEssentials(items = []) {
  if (!items.length) return "";
  return `
    <details class="day-support-panel">
      <summary class="day-support-summary">
        <span>
          <small>${escapeHtml(t({ zh: "隨身物品", en: "Essentials", fr: "À emporter", de: "Mitnehmen" }))}</small>
          <strong>${escapeHtml(t({ zh: "今天帶什麼", en: "What to carry today", fr: "À garder dans le sac", de: "Heute dabeihaben" }))}</strong>
        </span>
        <em>${items.length}</em>
      </summary>
      <div class="day-support-body">
        <div class="day-support-chips">
          ${items.map((item) => `<span>${escapeHtml(t(item))}</span>`).join("")}
        </div>
      </div>
    </details>
  `;
}

function renderDaySafety(items = []) {
  if (!items.length) return "";
  return `
    <details class="day-support-panel">
      <summary class="day-support-summary">
        <span>
          <small>${escapeHtml(t({ zh: "安全與備忘", en: "Notes & safety", fr: "Notes et sécurité", de: "Hinweise und Sicherheit" }))}</small>
          <strong>${escapeHtml(t({ zh: "今天要留意的事", en: "What to watch today", fr: "Points à surveiller", de: "Heute beachten" }))}</strong>
        </span>
        <em>${items.length}</em>
      </summary>
      <div class="day-support-body">
        <ul class="day-support-list">
          ${items.map((item) => `<li>${escapeHtml(t(item))}</li>`).join("")}
        </ul>
      </div>
    </details>
  `;
}

function renderDayBudget(items = []) {
  if (!items.length) return "";
  return `
    <details class="day-support-panel budget">
      <summary class="day-support-summary">
        <span>
          <small>${escapeHtml(t({ zh: "花費", en: "Budget", fr: "Budget", de: "Budget" }))}</small>
          <strong>${escapeHtml(t({ zh: "今天的預算備忘", en: "Today's budget notes", fr: "Budget du jour", de: "Budget für heute" }))}</strong>
        </span>
        <em>${items.length}</em>
      </summary>
      <div class="day-support-body">
        <div class="day-budget-grid">
          ${items.map((item) => `
            <div class="day-budget-row">
              <span>${escapeHtml(t(item.label))}</span>
              <strong>${escapeHtml(t(item.value))}</strong>
            </div>
          `).join("")}
        </div>
      </div>
    </details>
  `;
}

function renderPrintableItinerarySummary() {
  return `
    <section class="itinerary-print-sheet" aria-hidden="true">
      <div class="section-label">${state.lang !== "zh" ? "Print Summary" : "列印摘要"}</div>
      <div class="itinerary-print-grid">
        ${itineraryDayCards.map((card) => {
          const guide = dailyGuideLookup.get(card.id);
          return `
            <article class="itinerary-print-card">
              <strong>${escapeHtml(guide ? guide.day : card.id)}</strong>
              <span>${escapeHtml(t(card.dateDisplay))}</span>
              <h3>${escapeHtml(t(card.themeLabel))}</h3>
              <p>${escapeHtml(t((card.countryLine || guide.city)))}</p>
              <p>${escapeHtml(t(card.stay))}</p>
              <p>${escapeHtml(t(card.primaryTransport))}</p>
              <small>${escapeHtml((guide && guide.highlights ? guide.highlights.slice(0, 4).join(" · ") : ""))}</small>
            </article>
          `;
        }).join("")}
      </div>
    </section>
  `;
}

function renderDayHandbookCard(card) {
  const guide = dailyGuideLookup.get(card.id);
  const frame = dayCardFrames[card.id] || {};
  const tags = frame.tags || [];
  const firstEvent = (card.timeline || [])[0];
  if (!guide) return "";
  return `
    <section class="day-card itinerary-day-card" id="${escapeHtml(card.id)}">
      <header class="day-card-header">
        <div class="day-card-topline">
          <div class="day-pill">${escapeHtml(guide.day)}</div>
          <div class="day-date">${escapeHtml(t(card.dateDisplay))}</div>
        </div>
        <div class="day-location">${escapeHtml(t(frame.location || guide.city))}</div>
        ${card.countryLine ? `<p class="day-country">${escapeHtml(t(card.countryLine))}</p>` : ""}
        <div class="day-tags">
          ${tags.map((tag) => `<span>${escapeHtml(t(tag))}</span>`).join("")}
        </div>
        <p class="day-kicker">${escapeHtml(t(frame.kicker || guide.theme))}</p>
        <h2 class="day-title">${escapeHtml(t(frame.title || guide.theme))}</h2>
        <p class="day-description">${escapeHtml(t(guide.intro))}</p>
      </header>
      <dl class="day-key-facts">
        ${firstEvent ? `
          <div>
            <dt>${state.lang !== "zh" ? "First item" : "第一段"}</dt>
            <dd>${escapeHtml(t(firstEvent.time))} · ${escapeHtml(t(firstEvent.title))}</dd>
          </div>
        ` : ""}
        <div>
          <dt>${state.lang !== "zh" ? "Tonight" : "今晚住哪"}</dt>
          <dd>${escapeHtml(t(card.stay))}</dd>
        </div>
        <div>
          <dt>${state.lang !== "zh" ? "Main transport" : "主要交通"}</dt>
          <dd>${escapeHtml(t(card.primaryTransport))}</dd>
        </div>
      </dl>
      <div class="day-note"><strong>${state.lang !== "zh" ? "Remember" : "今天記得"}</strong><span>${escapeHtml(t(frame.note || (guide.notes && guide.notes[0]) || ""))}</span></div>
      ${renderConferenceSpotlight(card.conferenceSpotlight)}
      <div class="day-route-summary">
        <span>${state.lang !== "zh" ? "Route" : "今天路線"}</span>
        <p>${guide.highlights.map((item) => escapeHtml(item)).join(" → ")}</p>
      </div>
      <div class="day-timeline-block">
        <div class="day-flow-head">
          <span class="section-label">${state.lang !== "zh" ? "Timeline" : "今日時間軸"}</span>
          <h3>${state.lang !== "zh" ? "Times and transfers" : "時間與移動"}</h3>
        </div>
        <div class="day-timeline-list">
          ${(card.timeline || []).map((event, index) => renderTimelineEvent(event, index, guide)).join("")}
        </div>
      </div>
      ${frame.image ? `
        <figure class="day-visual" data-image-frame>
          <img src="${escapeHtml(frame.image)}" alt="${escapeHtml(t(frame.imageAlt || frame.title || guide.city))}" width="1600" height="900" loading="lazy" decoding="async" data-image-fallback />
          <div class="day-visual-fallback" role="status">${state.lang !== "zh" ? "Photo unavailable. The itinerary remains available below." : "照片暫時無法顯示，行程內容仍可正常使用。"}</div>
          ${frame.imageCaption ? `<figcaption class="day-visual-caption">${escapeHtml(t(frame.imageCaption))}</figcaption>` : ""}
        </figure>
      ` : ""}
      <div class="day-support-grid">
        ${renderDayEssentials(card.essentials)}
        ${renderDaySafety(card.safety)}
        ${renderDayBudget(card.budget)}
      </div>
    </section>
  `;
}

function renderHomeHotelsPanel() {
  return `
    <section class="home-tab-panel-block">
      ${renderHomeSectionIntro(
        state.lang !== "zh" ? "Hotels" : "住宿",
        state.lang !== "zh" ? "Four stays across Manchester, London, and Paris." : "四段住宿",
        state.lang !== "zh" ? "INNSiDE for AIB, Riu in Westminster, Pullman in Paris, then Novotel by CDG." : "AIB 期間住 INNSiDE，倫敦住 Riu Westminster，巴黎住 Pullman，回程前一晚住 Novotel CDG。"
      )}
      <div class="hotel-ledger">
        <article class="hotel-ledger-entry">
          <div class="hotel-ledger-head">
            <span class="section-label">${state.lang !== "zh" ? "Conference base" : "會議據點"}</span>
            <h3>INNSiDE Manchester</h3>
          </div>
          <p>${state.lang !== "zh" ? "30 Jun to 5 Jul · Twin room · 1 First Street. Stay here through the conference." : "6/30–7/5，Twin room，位在 1 First Street。會議這幾天就住這裡。"} </p>
          ${renderMetaRow([
            { label: state.lang !== "zh" ? "Stay" : "入住", value: "2026/06/30 – 2026/07/05" },
            { label: state.lang !== "zh" ? "Use" : "用途", value: state.lang !== "zh" ? "Walk to both conference venues" : "步行前往兩個會場" },
            { label: state.lang !== "zh" ? "Cost" : "費用", value: "GBP 900.90" }
          ])}
        </article>
        <article class="hotel-ledger-entry">
          <div class="hotel-ledger-head">
            <span class="section-label">${state.lang !== "zh" ? "London stay" : "倫敦住宿"}</span>
            <h3>Riu Plaza London The Westminster</h3>
          </div>
          <p>${state.lang !== "zh" ? "Confirmed for 4-7 July. Allow extra time to reach St Pancras with luggage on 7 July." : "已確認 7/4–7/7。7/7 帶行李去 St Pancras，出發時間要抓寬。"} </p>
          ${renderMetaRow([
            { label: state.lang !== "zh" ? "Stay" : "入住", value: "2026/07/04 – 2026/07/07" },
            { label: state.lang !== "zh" ? "Use" : "用途", value: state.lang !== "zh" ? "Westminster and St Pancras" : "走西敏，7/7 前往 St Pancras" },
            { label: state.lang !== "zh" ? "Status" : "狀態", value: state.lang !== "zh" ? "Confirmed" : "已確認" }
          ])}
        </article>
        <article class="hotel-ledger-entry featured">
          <div class="hotel-ledger-head">
            <span class="section-label">${state.lang !== "zh" ? "Paris stay" : "巴黎住宿"}</span>
            <h3>Pullman Paris Tour Eiffel</h3>
          </div>
          <p>${state.lang !== "zh" ? "7 Jul to 10 Jul · Deluxe room, high floor, balcony, Eiffel Tower view. Stay here for the Paris days." : "7/7–7/10，Deluxe room，高樓層、陽台、Eiffel Tower view。巴黎這幾晚就住這裡。"} </p>
          ${renderMetaRow([
            { label: state.lang !== "zh" ? "Stay" : "入住", value: "2026/07/07 – 2026/07/10" },
            { label: state.lang !== "zh" ? "Use" : "用途", value: state.lang !== "zh" ? "Paris hotel and tower-view balcony" : "巴黎住宿與鐵塔景陽台" },
            { label: state.lang !== "zh" ? "Cost" : "費用", value: "EUR 1,915.58 / NT$70,243" }
          ])}
          <div class="hotel-feature-note">${state.lang !== "zh" ? "The high-floor balcony room has an Eiffel Tower view." : "訂的是高樓層陽台房，可從房內看艾菲爾鐵塔。"} </div>
        </article>
        <article class="hotel-ledger-entry">
          <div class="hotel-ledger-head">
            <span class="section-label">${state.lang !== "zh" ? "Departure eve" : "回程前一晚"}</span>
            <h3>${state.lang !== "zh" ? "Novotel Paris Charles-de-Gaulle Airport" : "巴黎戴高樂機場候機樓諾富特酒店"}</h3>
          </div>
          <p>${state.lang !== "zh" ? "10-11 Jul by Roissypole RER. Go from here to Terminal 2E in the morning." : "7/10–7/11，位在 Roissypole RER 旁。隔天早上從這裡去 Terminal 2E。"} </p>
          ${renderMetaRow([
            { label: state.lang !== "zh" ? "Stay" : "入住", value: "2026/07/10 – 2026/07/11" },
            { label: state.lang !== "zh" ? "Use" : "用途", value: state.lang !== "zh" ? "Morning access to Terminal 2E" : "隔天早上前往 Terminal 2E" },
            { label: state.lang !== "zh" ? "Cost" : "費用", value: "NT$7,034" }
          ])}
        </article>
      </div>
      <a class="text-link-button" href="./stay.html">${state.lang !== "zh" ? "Open hotel details" : "看住宿細節"}</a>
    </section>
  `;
}

function renderHomeLinksPanel() {
  const linkGroups = [
    {
      title: state.lang !== "zh" ? "Conference and flights" : "會議與機票",
      items: [
        ["AIB 2026 website", getPublicLink("AIB 2026 website")],
        ["AIB program overview", getPublicLink("AIB program overview")],
        ["AIB registration", getPublicLink("AIB registration")],
        ["Air France", getPublicLink("Air France")]
      ]
    },
    {
      title: state.lang !== "zh" ? "Hotels and routes" : "飯店與路線",
      items: [
        ["INNSiDE Manchester", getPublicLink("INNSiDE Manchester")],
        ["Pullman Paris Tour Eiffel", getPublicLink("Pullman Paris Tour Eiffel")],
        ["Novotel Paris Charles-de-Gaulle Airport", getPublicLink("Novotel Paris Charles-de-Gaulle Airport")],
        ["Riu Plaza London The Westminster", getPublicLink("Riu Plaza London The Westminster")],
        [state.lang !== "zh" ? "Daily route maps" : "每日路線地圖", "./map.html"]
      ]
    },
    {
      title: state.lang !== "zh" ? "Rail and city transit" : "火車與市內交通",
      items: [
        ["Avanti Manchester → London", getPublicLink("Avanti Manchester → London")],
        ["National Rail", getPublicLink("National Rail")],
        ["Eurostar London to Paris", getPublicLink("Eurostar London to Paris")],
        ["TfL fare capping", getPublicLink("TfL fare capping")]
      ]
    }
  ];

  return `
    <section class="home-tab-panel-block">
      ${renderHomeSectionIntro(
        state.lang !== "zh" ? "Links" : "連結",
        state.lang !== "zh" ? "Conference, hotel, train, and map links." : "會議、飯店、火車與地圖連結。",
        state.lang !== "zh" ? "Official pages and saved route maps only." : "只列官方網站與已存的路線地圖。"
      )}
      <div class="link-ledger">
        ${linkGroups.map((group) => `
          <section class="link-ledger-group">
            <h3>${escapeHtml(group.title)}</h3>
            <div class="link-ledger-list">
              ${group.items.map(([label, href]) => href.startsWith("./")
                ? `<a class="link-ledger-row" href="${escapeHtml(href)}"><span>${escapeHtml(label)}</span><strong>${state.lang !== "zh" ? "Open" : "前往"}</strong></a>`
                : `<a class="link-ledger-row" href="${escapeHtml(href)}" target="_blank" rel="noreferrer noopener"><span>${escapeHtml(label)}</span><strong>↗</strong></a>`
              ).join("")}
            </div>
          </section>
        `).join("")}
      </div>
    </section>
  `;
}

function renderHomeFlightsPanel() {
  return `
    <section class="home-tab-panel-block">
      ${renderHomeSectionIntro(
        state.lang !== "zh" ? "Flights" : "機票",
        state.lang !== "zh" ? "Five flight segments from Taipei and back." : "五段航班與轉機順序。",
        state.lang !== "zh" ? "The China Airlines ticket has four segments; AF1068 is booked separately." : "華航主票含四段，AF1068 另外購買。"
      )}
      <div class="route-ledger">
        <article class="route-ledger-entry">
          <span class="section-label">${state.lang !== "zh" ? "Outbound" : "去程"}</span>
          <h3>TPE → FRA → MAN</h3>
          <p>${state.lang !== "zh" ? "The first two legs are CI 0061 and LH 0946." : "主票前兩段是 CI 0061 和 LH 0946。"} </p>
        </article>
        <article class="route-ledger-entry">
          <span class="section-label">${state.lang !== "zh" ? "Europe segment" : "歐洲段"}</span>
          <h3>CDG → MAN</h3>
          <p>${state.lang !== "zh" ? "AF1068 leaves CDG Terminal 2E at 12:50 and reaches Manchester at 13:25." : "AF1068 12:50 從戴高樂 2E 出發，13:25 抵達曼徹斯特。"} </p>
        </article>
        <article class="route-ledger-entry">
          <span class="section-label">${state.lang !== "zh" ? "Homebound" : "回程"}</span>
          <h3>MAN → LHR → TPE</h3>
          <p>${state.lang !== "zh" ? "The last two legs are BA 1371 and CI 0082." : "主票後兩段是 BA 1371 和 CI 0082。"} </p>
        </article>
      </div>
      <a class="text-link-button" href="./flights.html">${state.lang !== "zh" ? "Open the full flight page" : "查看完整機票頁"}</a>
    </section>
  `;
}

function renderHomeInfoPanel() {
  return `
    <section class="home-tab-panel-block">
      ${renderHomeSectionIntro(
        state.lang !== "zh" ? "Info" : "資訊",
        state.lang !== "zh" ? "Conference, transfers, packing, and airport timing." : "會議、轉乘、行李與機場時間。",
        state.lang !== "zh" ? "Use these notes before leaving the hotel or airport." : "離開飯店或機場前，核對這一頁。"
      )}
      <div class="info-ledger">
        <section class="info-ledger-block">
          <span class="section-label">${state.lang !== "zh" ? "Conference overview" : "AIB 會議"}</span>
          <h3>${state.lang !== "zh" ? "Two confirmed presentations in Manchester" : "曼徹斯特兩場發表已確認"}</h3>
          <p>${state.lang !== "zh" ? `${conferenceSessionSentence("competitive", "en")} ${conferenceSessionSentence("interactive", "en")}` : `${conferenceSessionSentence("competitive", "zh")} ${conferenceSessionSentence("interactive", "zh")}`} </p>
        </section>
        <section class="info-ledger-block">
          <span class="section-label">${state.lang !== "zh" ? "Venue route" : "會場路線"}</span>
          <p>${state.lang !== "zh" ? "Both sessions are walkable from INNSiDE. On 1 July, keep 12-15 minutes for AMBS; on 3 July, keep 15-18 minutes for University Place and leave a bit earlier." : "兩場都能從 INNSiDE 直接走去。7/1 去 AMBS 抓 12–15 分鐘；7/3 去 University Place 抓 15–18 分鐘，這天再早一點出門。"} </p>
        </section>
        <section class="info-ledger-block">
          <span class="section-label">${state.lang !== "zh" ? "Transport notes" : "交通提醒"}</span>
          <p>${state.lang !== "zh" ? "There is time to leave the airport in Frankfurt. The Heathrow connection is only 1 hour 55 minutes. Take the train to London on 4 July and Eurostar to Paris on 7 July." : "法蘭克福轉機時間足夠進市區；希斯洛轉機只有 1 小時 55 分。7/4 搭火車去倫敦，7/7 搭 Eurostar 去巴黎。"} </p>
        </section>
        <section class="info-ledger-block">
          <span class="section-label">${state.lang !== "zh" ? "Packing and safety" : "行李與安全"}</span>
          <p>${state.lang !== "zh" ? "Bring a Type G adapter, keep ETA and passport copies offline, and do not leave your phone hanging outward in London or Paris." : "英國段記得 Type G 轉接頭，ETA 和護照資料留離線版本；倫敦和巴黎人多的地方，手機不要一直拿在外側。"} </p>
        </section>
        <section class="info-ledger-block">
          <span class="section-label">${state.lang !== "zh" ? "Weather and dressing" : "天氣與穿搭"}</span>
          <p>${state.lang !== "zh" ? "Pack light layers, conference clothes for Manchester, and walking shoes for London and Paris." : "衣物以薄長袖和可疊穿外套為主。曼徹斯特準備會議服裝，倫敦和巴黎帶好走的鞋。"} </p>
        </section>
        <section class="info-ledger-block">
          <span class="section-label">${state.lang !== "zh" ? "Phone and data" : "eSIM 與連線"}</span>
          <p>${state.lang !== "zh" ? "The Europe eSIM is purchased. Install it in Taiwan and switch it on after landing. Keep the main number active for SMS, bank codes, and urgent calls." : "歐洲 eSIM 已購買。在台灣先安裝，落地後再啟用；原門號保留收簡訊、銀行驗證碼與緊急電話。"} </p>
        </section>
        <section class="info-ledger-block">
          <span class="section-label">${state.lang !== "zh" ? "CDG morning" : "CDG 早上怎麼抓"}</span>
          <p>${state.lang !== "zh" ? "On 11 July, reach Terminal 2E around 09:00 if you need tax-refund validation, or around 09:30 if you do not." : "7/11 若要辦退稅，09:00 左右抵達 Terminal 2E；不辦退稅則抓 09:30 左右。"} </p>
        </section>
      </div>
      <a class="text-link-button" href="./conference.html">${state.lang !== "zh" ? "Open the full conference page" : "查看完整會議頁"}</a>
    </section>
  `;
}

function renderHomeBudgetPanel() {
  return `
    <section class="home-tab-panel-block">
      ${renderHomeSectionIntro(
        state.lang !== "zh" ? "Budget" : "預算",
        state.lang !== "zh" ? "Claims and self-funded costs." : "可報帳與自費分開記。",
        state.lang !== "zh" ? "Use this page to check amounts and payment records." : "這頁用來核對金額與付款紀錄。"
      )}
      <div class="budget-ledger">
        <div class="budget-ledger-block">
          <span class="section-label">${state.lang !== "zh" ? "Funding" : "可報帳"}</span>
          <div class="budget-ledger-rows">
            ${tripData.expenses.map((row) => `
              <div class="budget-ledger-row">
                <strong>${escapeHtml(t(row.item))}</strong>
                <span>${escapeHtml(budgetAmount(row))}</span>
              </div>
            `).join("")}
          </div>
        </div>
        <div class="budget-ledger-block">
          <span class="section-label">${state.lang !== "zh" ? "Self-funded" : "自費"}</span>
          <div class="budget-ledger-rows">
            ${tripData.selfFundedExpenses.slice(0, 6).map((row) => `
              <div class="budget-ledger-row">
                <strong>${escapeHtml(t(row.item))}</strong>
                <span>${escapeHtml(budgetAmount(row))}</span>
              </div>
            `).join("")}
          </div>
        </div>
      </div>
      <a class="text-link-button" href="./budget.html">${state.lang !== "zh" ? "Open the full budget page" : "查看完整預算頁"}</a>
    </section>
  `;
}

function renderHomeVisaPanel() {
  return `
    <section class="home-tab-panel-block">
      ${renderHomeSectionIntro(
        state.lang !== "zh" ? "Visa and entry" : "簽證與入境",
        state.lang !== "zh" ? "Entry documents, insurance, customs, and tax refund." : "入境文件、保險、海關與退稅。",
        state.lang !== "zh" ? "The trip enters the UK first and France later by Eurostar." : "先入境英國，7/7 再搭 Eurostar 進法國。"
      )}
      <div class="visa-ledger">
        <article class="visa-ledger-entry">
          <h3>${state.lang !== "zh" ? "United Kingdom" : "英國"}</h3>
          <p>${state.lang !== "zh" ? "Keep passport, ETA, conference letter, return flight, and the first hotel booking ready offline." : "護照、ETA 核准紀錄、會議邀請函、回程機票和第一段住宿資料，建議都留一份離線版本。"} </p>
        </article>
        <article class="visa-ledger-entry">
          <h3>${state.lang !== "zh" ? "France / Schengen" : "法國／申根"}</h3>
          <p>${state.lang !== "zh" ? "ETIAS is not required for this July 2026 Paris stay; the EU says it will begin in the final quarter of 2026. Store the hotel, Eurostar, and onward ticket files in the same offline folder." : "這趟 2026 年 7 月的巴黎行程不需要 ETIAS；歐盟預計 2026 年第 4 季才啟用。住宿、Eurostar 與回程票券存進同一個離線資料夾。"} </p>
        </article>
        <article class="visa-ledger-entry">
          <h3>${state.lang !== "zh" ? "Customs, tax, and insurance" : "海關、退稅與保險"}</h3>
          <p>${state.lang !== "zh" ? "Keep the bigger shopping receipts from Paris. If you are claiming tax back, ask for the détaxe form in the shop and do the CDG validation before you check your bags. The Chubb confirmation email and premium PDF should also stay offline with the claim contact details." : "如果巴黎有比較大筆的購物，收據先留好，也記得在店裡拿 détaxe / tax free 表單。7/11 到 CDG 先辦退稅驗證，再去托運行李；安達產險的確認信、保費 PDF 和理賠聯絡資訊也一起離線存好。"} </p>
        </article>
      </div>
      <a class="text-link-button" href="./first-time.html">${state.lang !== "zh" ? "Open the travel notes page" : "查看德英法提醒"}</a>
    </section>
  `;
}

function renderHomeEnglishPanel() {
  return `
    <section class="home-tab-panel-block english-overview-panel">
      ${renderHomeSectionIntro(
        "English Overview",
        "AIB 2026 Manchester · Germany, UK, and France",
        "Dates, cities, presentation sessions, hotels, and transfers in English."
      )}
      <p>After the Frankfurt layover, the trip continues to Manchester for AIB 2026 and two confirmed presentations. London follows on 4 July, then Eurostar to Paris on 7 July.</p>
      <p>The hotels are INNSiDE Manchester, Riu Plaza London The Westminster, Pullman Paris Tour Eiffel, and Novotel Paris CDG Airport.</p>
      <div class="snapshot-timeline handbook-home-timeline english">
        ${homeJourneyTimeline.map(renderHandbookTimelineEntry).join("")}
      </div>
    </section>
  `;
}

function renderHome() {
  return `
    ${renderQuickNav("home")}
    <div class="home-tab-panels">
      <section class="home-tab-panel active" id="overview" data-home-panel="overview" role="tabpanel" aria-labelledby="home-tab-overview" aria-hidden="false">
        ${renderHomeOverviewPanel()}
      </section>
      <section class="home-tab-panel" id="itinerary" data-home-panel="itinerary" role="tabpanel" aria-labelledby="home-tab-itinerary" aria-hidden="true" hidden>
        <section class="home-tab-panel-block">
          ${renderHomeSectionIntro(
            state.lang !== "zh" ? "Itinerary" : "行程",
            state.lang !== "zh" ? "Depart Taipei on 29 June and return on 12 July." : "6/29 從台北出發，7/12 回到台灣。",
            state.lang !== "zh" ? "Each card lists that day's times, addresses, tickets, and what to carry." : "每張卡都有當天的時間、地址、票券和要帶的東西。"
          )}
          ${renderItineraryToolkit()}
          ${renderPrintableItinerarySummary()}
          <div class="day-card-stack">
            ${itineraryDayCards.map(renderDayHandbookCard).join("")}
          </div>
        </section>
      </section>
      <section class="home-tab-panel" id="hotels" data-home-panel="hotels" role="tabpanel" aria-labelledby="home-tab-hotels" aria-hidden="true" hidden>
        ${renderHomeHotelsPanel()}
      </section>
      <section class="home-tab-panel" id="links" data-home-panel="links" role="tabpanel" aria-labelledby="home-tab-links" aria-hidden="true" hidden>
        ${renderHomeLinksPanel()}
      </section>
      <section class="home-tab-panel" id="flights" data-home-panel="flights" role="tabpanel" aria-labelledby="home-tab-flights" aria-hidden="true" hidden>
        ${renderHomeFlightsPanel()}
      </section>
      <section class="home-tab-panel" id="info" data-home-panel="info" role="tabpanel" aria-labelledby="home-tab-info" aria-hidden="true" hidden>
        ${renderHomeInfoPanel()}
      </section>
      <section class="home-tab-panel" id="budget" data-home-panel="budget" role="tabpanel" aria-labelledby="home-tab-budget" aria-hidden="true" hidden>
        ${renderHomeBudgetPanel()}
      </section>
      <section class="home-tab-panel" id="visa" data-home-panel="visa" role="tabpanel" aria-labelledby="home-tab-visa" aria-hidden="true" hidden>
        ${renderHomeVisaPanel()}
      </section>
      <section class="home-tab-panel" id="en" data-home-panel="en" role="tabpanel" aria-labelledby="home-tab-en" aria-hidden="true" hidden>
        ${renderHomeEnglishPanel()}
      </section>
    </div>
  `;
}

function renderHandbookSummaryRow(label, value) {
  return `
    <div class="handbook-summary-row">
      <span>${escapeHtml(label)}</span>
      <strong>${escapeHtml(value)}</strong>
    </div>
  `;
}

function renderHandbookTimelineEntry(item) {
  return `
    <article class="snapshot-timeline-item">
      <span class="snapshot-timeline-date">${escapeHtml(item.date)}</span>
      <div class="snapshot-timeline-copy">
        <h3>${escapeHtml(t(item.title))}</h3>
        <p>${escapeHtml(t(item.note))}</p>
      </div>
    </article>
  `;
}

const pageDescriptions = {
  conference: { zh: "會議日期、教室和要帶的資料。", en: "Conference dates, rooms, and what to bring." },
  flights: { zh: "去程、回程、德英法移動段與轉機整理。", en: "Outbound, return, Germany-UK-France segments, and transfer notes." },
  transport: { zh: "火車、Eurostar 與市內交通。", en: "Train, Eurostar, and local transit." },
  stay: { zh: "曼徹斯特、倫敦 Riu、巴黎 Pullman 和 CDG 前一晚怎麼接。", en: "Manchester, the London Riu stay, Pullman in Paris, and the final CDG overnight." },
  itinerary: { zh: "每日安排、巴黎四天與回程轉機。", en: "Daily plans, four days in Paris, and the return connections." },
  shopping: { zh: "茶葉、餅乾、果醬與超市購物清單。", en: "Tea, biscuits, preserves, and useful shopping notes." },
  souvenirs: { zh: "英國、法國、德國伴手禮整理。", en: "Souvenir notes for the UK, France, and Germany." },
  map: { zh: "主要地點、每日路線與地圖連結。", en: "Key locations, daily routes, and map links." },
  budget: { zh: "可報帳和自費分開整理，金額也一起換算。", en: "Funding and expense notes, with four-currency amounts." },
  reminders: { zh: "出發前再看一次的提醒，還有路上容易忘的事。", en: "Final checks before departure and the things easiest to forget on the road." },
  firstTime: { zh: "英國與法國的入境、付款和安全事項。", en: "Entry, payment, and safety notes for the UK and France." },
  documents: { zh: "文件清單與官方連結。", en: "Document checklist and official links." }
};

function renderAlert(alert) {
  return `
    <aside class="alert-card" role="note">
      <div>${statusChip("alert")}<h3>${escapeHtml(t(alert.title))}</h3></div>
      <p>${escapeHtml(t(alert.body))}</p>
    </aside>
  `;
}

function renderDesktopPageShell(pageId, options, content) {
  const items = sectionNav[pageId] || [];
  const meta = options.meta || [];
  return `
    <div class="desktop-page-shell handbook-page-shell">
      <section class="section compact-section page-intro-section">
        <article class="section-card page-intro-card">
          <div class="section-label">${escapeHtml(t(options.label))}</div>
          <h2>${escapeHtml(t(options.title))}</h2>
          ${options.note ? `<p class="lead">${escapeHtml(t(options.note))}</p>` : ""}
          ${meta.length ? `
            <div class="page-meta-strip">
              ${meta.map((item) => `
                <article class="page-meta-card">
                  <span>${escapeHtml(t(item.label))}</span>
                  <strong>${escapeHtml(t(item.value))}</strong>
                </article>
              `).join("")}
            </div>
          ` : ""}
          <nav class="page-inline-nav" aria-label="${state.lang !== "zh" ? "Page navigation" : "頁面導覽"}">
            ${items.map(([id, label]) => `<a href="#${escapeHtml(id)}" class="desktop-anchor-link" data-page-anchor="${escapeHtml(id)}">${escapeHtml(t(label))}</a>`).join("")}
          </nav>
        </article>
      </section>
      <div class="desktop-page-main handbook-page-main">
        ${content}
      </div>
    </div>
  `;
}

function renderConference() {
  return renderDesktopPageShell("conference", {
    label: { zh: "Conference", en: "Conference" },
    title: { zh: "會議手冊", en: "Conference Handbook" },
    note: { zh: "會議時間、兩場發表和要帶的資料，都放在這一頁。", en: "Conference details, presentation slots, and the files you need stay on this page." },
    meta: [
      { label: { zh: "AIB", en: "AIB" }, value: "2026" },
      { label: { zh: "城市", en: "City" }, value: "Manchester" },
      { label: { zh: "註冊狀態", en: "Registration" }, value: { zh: "已付款", en: "Paid" } },
      { label: { zh: "論文", en: "Papers" }, value: { zh: "Competitive + Interactive", en: "Competitive + Interactive" } }
    ]
  }, `
    ${renderQuickNav("conference")}
    <section class="section compact-section" id="accepted">
      ${sectionHeading(
        state.lang !== "zh" ? "Conference Overview" : "會議總覽",
        state.lang !== "zh" ? "Dates, rooms, and presentation files" : "兩場發表的日期、教室和文件",
        state.lang !== "zh" ? "Check the official schedule again if AIB publishes an update." : "以下依 AIB 議程整理；若官方改版，以最新議程為準。"
      )}
      <div class="summary-grid two">
        ${dashboardData.conferenceCards.map(renderSummaryCard).join("")}
      </div>
    </section>
    <section class="section compact-section" id="papers">
      ${sectionHeading(state.lang !== "zh" ? "Presentation Sessions" : "發表場次", state.lang !== "zh" ? "Competitive on 1 July and Interactive on 3 July." : "Competitive 在 7/1，Interactive 在 7/3。")}
      <div class="paper-grid">
        ${paperCards.map(renderPaperCard).join("")}
      </div>
    </section>
    <section class="section compact-section" id="alerts">
      ${sectionHeading(
        state.lang !== "zh" ? "Academic Notes" : "會議提醒",
        state.lang !== "zh" ? "Timing, files, and what to bring" : "發表前再看",
        state.lang !== "zh" ? "Review these notes before the conference and on the night before each presentation." : "會議開始前看一次，兩場發表的前一晚各確認一次。"
      )}
      <div class="alert-card-grid">
        ${conferenceAlerts.map((alert) => `
          <article class="alert-card app-alert-card">
            <div class="alert-card-head">
              ${renderAppTag(alert.tag)}
              ${statusChip(alert.status)}
            </div>
            <h3>${escapeHtml(t(alert.title))}</h3>
            <p>${escapeHtml(t(alert.body))}</p>
          </article>
        `).join("")}
      </div>
      <div class="timeline-list conference-rhythm-list">
        ${dashboardData.conferenceTimeline.map((item) => `<article><strong>${escapeHtml(item.date)}</strong><p>${escapeHtml(t(item.title))} · ${escapeHtml(t(item.note))}</p></article>`).join("")}
      </div>
    </section>
    <section class="section compact-section" id="route">
      ${sectionHeading(
        state.lang !== "zh" ? "From hotel to venue" : "從飯店到會場",
        state.lang !== "zh" ? "Walking routes from INNSiDE" : "從 INNSiDE 步行過去",
        state.lang !== "zh" ? "AMBS is a 12-15 minute walk; University Place is a 15-18 minute walk." : "INNSiDE 到 AMBS 約走 12–15 分鐘；到 University Place 約走 15–18 分鐘。"
      )}
      <div class="summary-grid two">
        <article class="summary-card">
          ${statusChip("confirmed")}
          <h3>${state.lang !== "zh" ? "1 Jul · Competitive" : "7/1 · Competitive"}</h3>
          <strong>${state.lang !== "zh" ? "INNSiDE → Alliance Manchester Business School" : "INNSiDE → Alliance Manchester Business School"}</strong>
          ${renderMetaRow([
            { label: state.lang !== "zh" ? "Walk" : "步行", value: state.lang !== "zh" ? "about 12-15 min" : "約 12–15 分鐘" },
            { label: state.lang !== "zh" ? "Session" : "場次", value: `${conferenceSessions.competitive.time} · ${conferenceSessions.competitive.room}` },
            { label: state.lang !== "zh" ? "Leave" : "出門", value: state.lang !== "zh" ? "20 min early is safer" : "第一次走抓 20 分鐘較穩" }
          ])}
          <p>${state.lang !== "zh" ? "Walk from First Street toward Booth Street West and enter AMBS from that side." : "從 First Street 往 Booth Street West 步行，由該側進入 AMBS。"} </p>
          ${externalLink("https://www.google.com/maps/dir/INNSiDE+Manchester+1+First+Street+Manchester/Alliance+Manchester+Business+School+Booth+Street+West+Manchester", state.lang !== "zh" ? "Open the map route" : "開啟地圖路線", "text-link-button")}
        </article>
        <article class="summary-card">
          ${statusChip("confirmed")}
          <h3>${state.lang !== "zh" ? "3 Jul · Interactive" : "7/3 · Interactive"}</h3>
          <strong>${state.lang !== "zh" ? "INNSiDE → University Place" : "INNSiDE → University Place"}</strong>
          ${renderMetaRow([
            { label: state.lang !== "zh" ? "Walk" : "步行", value: state.lang !== "zh" ? "about 15-18 min" : "約 15–18 分鐘" },
            { label: state.lang !== "zh" ? "Session" : "場次", value: `${conferenceSessions.interactive.time} · ${conferenceSessions.interactive.room}` },
            { label: state.lang !== "zh" ? "Leave" : "出門", value: state.lang !== "zh" ? "Leave a little earlier" : "這天再早一點出門" }
          ])}
          <p>${state.lang !== "zh" ? "The session starts at 09:30. Walk toward Oxford Road and enter University Place before 09:15." : "場次 09:30 開始。往 Oxford Road 步行，09:15 前進入 University Place。"} </p>
          ${externalLink("https://www.google.com/maps/dir/INNSiDE+Manchester+1+First+Street+Manchester/University+Place+Oxford+Road+Manchester", state.lang !== "zh" ? "Open the map route" : "開啟地圖路線", "text-link-button")}
        </article>
      </div>
    </section>
    <section class="section compact-section" id="checklist">
      ${sectionHeading(state.lang !== "zh" ? "Conference Documents" : "會議文件", state.lang !== "zh" ? "Files to keep ready" : "到曼徹斯特前先存好")}
      <div class="checklist-grid">
        ${dashboardData.documentChecklist.slice(0, 4).map((item) => `
          <article class="checklist-card">
            ${statusChip(item.status)}
            <h3>${escapeHtml(t(item.title))}</h3>
            <p>${escapeHtml(t(item.note))}</p>
          </article>
        `).join("")}
      </div>
    </section>
  `);
}

function renderTransport() {
  const trainSummaryCards = [
    {
      status: "book",
      title: { zh: "7/4 曼徹斯特 → 倫敦", en: "4 Jul Manchester → London" },
      value: { zh: "Manchester Piccadilly → London Euston", en: "Manchester Piccadilly → London Euston" },
      note: { zh: "Avanti West Coast 直達約 2 小時 10 分。", en: "Direct Avanti West Coast, about 2h10m." },
      meta: [
        { label: { zh: "建議時段", en: "Window" }, value: { zh: "中午前後", en: "Late morning to midday" } },
        { label: { zh: "票種", en: "Fare" }, value: "Advance / Off-Peak" },
        { label: { zh: "提醒", en: "Reminder" }, value: { zh: "越早查越好", en: "Check early" } }
      ]
    },
    {
      status: "book",
      title: { zh: "7/7 倫敦 → 巴黎", en: "7 Jul London → Paris" },
      value: { zh: "St Pancras → Paris Gare du Nord", en: "St Pancras → Paris Gare du Nord" },
      note: { zh: "Eurostar 約 2 小時 16 分，市中心直達市中心。", en: "Eurostar takes about 2h16 city centre to city centre." },
      meta: [
        { label: { zh: "建議時段", en: "Window" }, value: { zh: "上午或中午", en: "Morning or midday" } },
        { label: { zh: "票種", en: "Fare" }, value: "Eurostar Standard / Plus / Premier" },
        { label: { zh: "提醒", en: "Reminder" }, value: { zh: "St Pancras 建議提早到站", en: "Arrive early at St Pancras" } }
      ]
    }
  ];

  return `
    ${renderQuickNav("transport")}
    <section class="section compact-section" id="flights">
      ${sectionHeading(
        state.lang !== "zh" ? "Cross-city movement" : "跨城市移動",
        state.lang !== "zh" ? "Flights, trains, and airport transfers" : "航班、火車與機場轉乘",
        state.lang !== "zh" ? "Flight numbers stay on the flight page. Rail and local transfer notes are collected here." : "航班號碼看機票頁；曼徹斯特到倫敦、倫敦到巴黎和機場接駁看這裡。"
      )}
      <div class="summary-grid two">
        <article class="summary-card">
          ${statusChip("confirmed")}
          <h3>${state.lang !== "zh" ? "Flight details" : "航班細節"}</h3>
          <strong>${state.lang !== "zh" ? "Outbound, return, and Europe segment" : "去程、回程與歐洲段"}</strong>
          <p>${state.lang !== "zh" ? "Flight numbers, terminals, baggage, and transfer times are listed on the flight page." : "機票頁列出航班號碼、航廈、行李額度與轉機時間。"} </p>
          ${externalLink("./flights.html", state.lang !== "zh" ? "Open flight page" : "前往機票頁", "text-link-button")}
        </article>
        <article class="summary-card">
          ${statusChip("alert")}
          <h3>${state.lang !== "zh" ? "Return route" : "回程路線"}</h3>
          <strong>${state.lang !== "zh" ? "TPE → FRA → MAN · CDG → MAN → LHR → TPE" : "TPE → FRA → MAN · CDG → MAN → LHR → TPE"}</strong>
          <p>${state.lang !== "zh" ? "Even though the last city days are in London and Paris, the return still starts from Manchester." : "雖然後段會在倫敦和巴黎停留，但回程機票仍然是從曼徹斯特開始接回台灣。"} </p>
        </article>
      </div>
    </section>
    <section class="section compact-section" id="transfer">
      ${sectionHeading(
        state.lang !== "zh" ? "Transfers" : "轉機資訊",
        state.lang !== "zh" ? "Frankfurt and Heathrow connections" : "法蘭克福與希斯洛轉機",
        state.lang !== "zh" ? "Terminal details can change; follow airport screens and airline updates on the day." : "航廈資訊可能調整，當天以機場螢幕與航空公司通知為準。"
      )}
      <div class="transfer-grid">
        ${tripData.transfers.map(renderTransferCard).join("")}
      </div>
    </section>
    <section class="section compact-section" id="train">
      ${sectionHeading(
        state.lang !== "zh" ? "Rail & Eurostar" : "鐵路段落",
        state.lang !== "zh" ? "Manchester to London, then London to Paris" : "7/4 到倫敦，7/7 到巴黎",
        state.lang !== "zh" ? "Avanti arrives at Euston. Eurostar leaves from St Pancras three days later." : "Avanti 抵達 Euston；三天後從 St Pancras 搭 Eurostar。"
      )}
      <div class="summary-grid">
        ${trainSummaryCards.map((item) => `
          <article class="summary-card">
            ${statusChip(item.status)}
            <h3>${escapeHtml(t(item.title))}</h3>
            <strong>${escapeHtml(t(item.value))}</strong>
            ${renderMetaRow(item.meta)}
            <p>${escapeHtml(t(item.note))}</p>
          </article>
        `).join("")}
      </div>
      <div class="fare-grid dashboard-fares">
        ${tripData.trainFares.map((fare) => `
          <article>
            ${statusChip(fare.status)}
            <h3>${escapeHtml(fare.item)}</h3>
            <strong>${escapeHtml(t(fare.amount))}</strong>
            <p>${escapeHtml(t(fare.note))}</p>
          </article>
        `).join("")}
      </div>
      <div class="summary-grid two">
        <article class="summary-card">
          ${statusChip("book")}
          <h3>${state.lang !== "zh" ? "London to France by train" : "倫敦去法國的火車"}</h3>
          <strong>${state.lang !== "zh" ? "Eurostar · St Pancras → Paris Gare du Nord" : "Eurostar · St Pancras → Paris Gare du Nord"}</strong>
          ${renderMetaRow([
            { label: state.lang !== "zh" ? "Travel time" : "車程", value: state.lang !== "zh" ? "about 2h16" : "約 2 小時 16 分" },
            { label: state.lang !== "zh" ? "Arrival" : "抵達", value: state.lang !== "zh" ? "city centre to city centre" : "市中心直達市中心" },
            { label: state.lang !== "zh" ? "Documents" : "文件", value: state.lang !== "zh" ? "passport required" : "需帶護照" }
          ])}
          <p>${state.lang !== "zh" ? "Eurostar runs directly from St Pancras to Gare du Nord." : "Eurostar 從 St Pancras 直達巴黎北站，車程約 2 小時 16 分。"} </p>
        </article>
        <article class="summary-card">
          ${statusChip("alert")}
          <h3>${state.lang !== "zh" ? "Before boarding at St Pancras" : "St Pancras 上車前"}</h3>
          <strong>${state.lang !== "zh" ? "Check-in and border checks happen before boarding" : "上車前就會完成報到與邊境檢查"}</strong>
          ${renderMetaRow([
            { label: state.lang !== "zh" ? "Arrival time" : "建議到站", value: state.lang !== "zh" ? "75-90 min early" : "提早 75–90 分鐘" },
            { label: state.lang !== "zh" ? "Gate close" : "關門時間", value: state.lang !== "zh" ? "30 min before departure" : "發車前 30 分鐘關閘門" },
            { label: state.lang !== "zh" ? "Luggage" : "行李", value: state.lang !== "zh" ? "2 bags + 1 small hand bag" : "2 件行李 + 1 件小型手提" }
          ])}
          <p>${state.lang !== "zh" ? "Security and passport control happen before boarding." : "安檢與護照檢查都在上車前完成，不能照一般火車的時間到站。"} </p>
        </article>
      </div>
      <div class="summary-grid two">
        <article class="summary-card">
          ${statusChip("confirmed")}
          <h3>${state.lang !== "zh" ? "From Riu to St Pancras" : "Riu 去 St Pancras 怎麼抓"}</h3>
          <strong>${state.lang !== "zh" ? "Leave from Westminster with time in hand" : "從 Westminster 出發，時間抓寬一點"}</strong>
          ${renderMetaRow([
            { label: state.lang !== "zh" ? "Base" : "出發點", value: "Riu Plaza London The Westminster" },
            { label: state.lang !== "zh" ? "Options" : "方式", value: state.lang !== "zh" ? "Taxi, or Tube with one transfer" : "計程車，或搭 Tube 轉乘一次" },
            { label: state.lang !== "zh" ? "Buffer" : "抓寬", value: state.lang !== "zh" ? "Aim to arrive 75-90 min before departure" : "目標是發車前 75–90 分鐘到站" }
          ])}
          <p>${state.lang !== "zh" ? "Take a taxi from Riu when carrying large bags. If using the Tube, allow extra time for the transfer, station walk, security, and passport control." : "帶大件行李可從 Riu 直接叫車到 St Pancras。搭 Tube 的話，多留轉乘、站內步行、安檢和護照查驗時間。"} </p>
        </article>
        <article class="summary-card">
          ${statusChip("confirmed")}
          <h3>${state.lang !== "zh" ? "Pullman to Novotel CDG" : "Pullman 去 CDG Novotel 怎麼走"}</h3>
          <strong>${state.lang !== "zh" ? "Choose based on luggage" : "依行李件數選交通"}</strong>
          ${renderMetaRow([
            { label: state.lang !== "zh" ? "Direct" : "直達", value: state.lang !== "zh" ? "Taxi / ride-hailing car" : "計程車 / 叫車" },
            { label: state.lang !== "zh" ? "Public transport" : "大眾運輸", value: state.lang !== "zh" ? "RER to Roissypole" : "搭 RER 到 Roissypole" },
            { label: state.lang !== "zh" ? "Use case" : "適合情況", value: state.lang !== "zh" ? "After Pullman luggage pickup" : "回 Pullman 拿行李之後" }
          ])}
          <p>${state.lang !== "zh" ? "On 10 July, return to Pullman for the stored bags and continue to Novotel CDG. Take a car with large luggage; otherwise use the RER to Roissypole." : "7/10 回 Pullman 取寄放行李後前往 Novotel CDG。大件行李多時叫車；否則可搭 RER 到 Roissypole。"} </p>
        </article>
      </div>
    </section>
    <section class="section compact-section" id="airport">
      ${sectionHeading(
        state.lang !== "zh" ? "Airport and tax refund" : "機場與退稅",
        state.lang !== "zh" ? "Timing for the 11 July departure." : "7/11 的機場時間與辦理順序。",
        state.lang !== "zh" ? "Complete tax-refund validation before bag drop, then continue to check-in and security." : "需要退稅時，先完成退稅驗證，再辦報到、托運與安檢。"
      )}
      <div class="summary-grid two">
        <article class="summary-card">
          ${statusChip("confirmed")}
          <h3>${state.lang !== "zh" ? "How to claim the Paris tax refund" : "巴黎退稅怎麼辦"}</h3>
          <strong>${state.lang !== "zh" ? "Ask in the shop, then validate at CDG" : "店裡先拿表單，CDG 再驗證"}</strong>
          ${renderMetaRow([
            { label: state.lang !== "zh" ? "Threshold" : "門檻", value: state.lang !== "zh" ? "same day + same shop + at least EUR 100 incl. tax" : "同一天、同一家店，滿 100 歐元含稅" },
            { label: state.lang !== "zh" ? "Form" : "表單", value: state.lang !== "zh" ? "détaxe / tax free" : "détaxe / tax free" },
            { label: state.lang !== "zh" ? "Order" : "順序", value: state.lang !== "zh" ? "refund first, bags second" : "先退稅，再托運" }
          ])}
          <p>${state.lang !== "zh" ? "If Paris shopping is worth claiming back, ask for the détaxe form at the store and keep the receipts together. On 11 July, do the validation at CDG before you drop your checked bags." : "如果巴黎這段有買比較大筆的東西，當下就先請店裡開 détaxe / tax free 表單，收據也放一起。7/11 到 CDG 先做退稅驗證，再去托運行李。"} </p>
          ${externalLink("https://www.douane.gouv.fr/fiche/la-detaxe-en-france-pour-les-touristes-pablo", state.lang !== "zh" ? "Official French customs guidance" : "法國海關官方退稅說明", "text-link-button")}
        </article>
        <article class="summary-card">
          ${statusChip("alert")}
          <h3>${state.lang !== "zh" ? "How much time to keep at CDG" : "CDG 這天要抓多久"}</h3>
          <strong>${state.lang !== "zh" ? "Keep more time than the airline minimum" : "比航空公司最低時間再抓寬一點"}</strong>
          ${renderMetaRow([
            { label: state.lang !== "zh" ? "Flight" : "航班", value: "AF1068 · 12:50 · CDG T2E" },
            { label: state.lang !== "zh" ? "If refund" : "要退稅", value: state.lang !== "zh" ? "be in T2E around 09:00" : "09:00 左右進 2E" },
            { label: state.lang !== "zh" ? "No refund" : "不退稅", value: state.lang !== "zh" ? "reach T2E around 09:30" : "09:30 左右抵達 2E" }
          ])}
          <p>${state.lang !== "zh" ? "The e-ticket says latest check-in 11:50, but this is not the day to test that limit. Even with the Novotel airport stay, leave room for tax refund, bag drop, and any summer queue." : "電子機票上寫的最晚報到是 11:50，但這天不建議去試那個極限。就算前一晚住在 Novotel 機場飯店，也先把退稅、托運和暑假排隊時間都算進去。"} </p>
        </article>
        <article class="summary-card">
          ${statusChip("confirmed")}
          <h3>${state.lang !== "zh" ? "Novotel CDG to Terminal 2E" : "Novotel CDG 去 2E 怎麼走"}</h3>
          <strong>${state.lang !== "zh" ? "Allow 20-30 minutes from the hotel to Terminal 2E" : "飯店到 2E 預留 20–30 分鐘"}</strong>
          ${renderMetaRow([
            { label: state.lang !== "zh" ? "Base" : "出發點", value: "Novotel Paris Charles-de-Gaulle Airport" },
            { label: state.lang !== "zh" ? "Direction" : "方式", value: state.lang !== "zh" ? "follow the airport connection / Roissypole flow" : "照機場接駁 / Roissypole 指標走" },
            { label: state.lang !== "zh" ? "Buffer" : "緩衝", value: state.lang !== "zh" ? "keep 20-30 min door to terminal" : "抓 20–30 分鐘進航廈" }
          ])}
          <p>${state.lang !== "zh" ? "Allow 20-30 minutes from the hotel door to Terminal 2E, then add time for queues." : "從飯店房門到 Terminal 2E 抓 20–30 分鐘，另外再算退稅、托運和安檢排隊。"} </p>
        </article>
      </div>
    </section>
    <section class="section compact-section" id="local">
      ${sectionHeading(
        state.lang !== "zh" ? "City movement" : "城市內移動",
        state.lang !== "zh" ? "London and Manchester transport and payment." : "倫敦與曼徹斯特市區交通。",
        state.lang !== "zh" ? "Transport systems, payment methods, and saved routes." : "列出交通系統、付款方式與已存路線。"
      )}
      <div class="summary-grid two">
        ${tripData.localTransit.map((city) => `
          <article class="summary-card">
            <h3>${escapeHtml(t(city.city))}</h3>
            ${renderMetaRow(
              state.lang !== "zh"
                ? [
                    { label: "Mode", value: city.city.en === "London" ? "Tube / Elizabeth line / DLR" : "Metrolink / Bee Network" },
                    { label: "Payment", value: city.city.en === "London" ? "Contactless / Oyster" : "Contactless / tickets" }
                  ]
                : [
                    { label: "系統", value: city.city.zh === "倫敦" ? "Tube / Elizabeth line / DLR" : "Metrolink / Bee Network" },
                    { label: "付款", value: city.city.zh === "倫敦" ? "感應支付 / Oyster" : "感應支付 / 車票" }
                  ]
            )}
            ${renderList(city.items)}
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function renderFlights() {
  return renderDesktopPageShell("flights", {
    label: { zh: "Flights", en: "Flights" },
    title: { zh: "航班與轉機", en: "Flights & Transfers" },
    note: { zh: "去程、巴黎回曼徹斯特、返台航段與兩次轉機。", en: "Outbound, Paris to Manchester, return flights, and both transfers." },
    meta: [
      { label: { zh: "主路線", en: "Main route" }, value: "TPE → FRA → MAN" },
      { label: { zh: "回程", en: "Return" }, value: "CDG → MAN → LHR → TPE" },
      { label: { zh: "長轉機", en: "Long layover" }, value: { zh: "法蘭克福", en: "Frankfurt" } },
      { label: { zh: "票價", en: "Flight total" }, value: money.flight }
    ]
  }, `
    ${renderQuickNav("flights")}
    <section class="section compact-section" id="overview">
      ${sectionHeading(state.lang !== "zh" ? "Flight Overview" : "航班總覽", state.lang !== "zh" ? "Five segments from Taipei and back" : "五段航班", state.lang !== "zh" ? "The China Airlines ticket contains four segments; AF1068 was purchased separately." : "華航主票含 CI 0061、LH 0946、BA 1371、CI 0082；AF1068 另外購買。")}
      <div class="summary-grid three desktop-flight-grid">
        <article class="summary-card">${statusChip("confirmed")}<h3>${state.lang !== "zh" ? "Outbound" : "去程"}</h3><strong>TPE → FRA → MAN</strong><p>${state.lang !== "zh" ? "The first two ticketed legs are CI 0061 and LH 0946." : "主票前兩段是 CI 0061 和 LH 0946。"} </p></article>
        <article class="summary-card">${statusChip("self")}<h3>${state.lang !== "zh" ? "Europe segment" : "歐洲段"}</h3><strong>CDG → MAN</strong><p>${state.lang !== "zh" ? "Air France Business Standard on 11 July, then continue to the BA/CI chain." : "7/11 法航商務艙從巴黎回曼徹斯特，再接 BA 與華航返台。"}</p></article>
        <article class="summary-card">${statusChip("confirmed")}<h3>${state.lang !== "zh" ? "Homebound" : "回程"}</h3><strong>MAN → LHR → TPE</strong><p>${state.lang !== "zh" ? "The final two ticketed legs are BA 1371 and CI 0082." : "主票後兩段是 BA 1371 和 CI 0082。"} </p></article>
      </div>
    </section>
    <section class="section compact-section" id="segments">
      ${sectionHeading(state.lang !== "zh" ? "Flight Segments" : "航段", state.lang !== "zh" ? "Ticket details and timing" : "每段機票與時間")}
      <div class="flight-grid">
        ${tripData.flights.map((flight) => `
          <article class="flight-card">
            <div class="flight-head">${statusChip("confirmed")}<strong>${t(flight.label)} · ${flight.date}</strong></div>
            ${renderMetaRow([
              { label: state.lang !== "zh" ? "Route" : "路線", value: flight.legs.map((leg) => `${leg.from} → ${leg.to}`).join(" · ") },
              { label: state.lang !== "zh" ? "Flights" : "航班", value: flight.legs.map((leg) => leg.flight).join(" / ") },
              { label: state.lang !== "zh" ? "Key note" : "重點", value: flight.note ? t(flight.note) : (state.lang !== "zh" ? (flight.label.en === "Outbound" ? "Frankfurt transfer" : "Starts from Manchester") : (flight.label.zh === "去程" ? "法蘭克福轉機" : "回程從曼徹斯特起飛")) }
            ], "flight-meta")}
            ${flight.legs.map((leg) => `
              <div class="route">
                <div><b>${escapeHtml(leg.from)}</b><span>${escapeHtml(leg.time.split(" → ")[0])}<br />${escapeHtml(t(leg.detail))}</span></div>
                <div class="line">${escapeHtml(leg.flight)}<br />${escapeHtml(leg.duration)}</div>
                <div><b>${escapeHtml(leg.to)}</b><span>${escapeHtml(leg.time.split(" → ")[1])}</span></div>
              </div>
            `).join("")}
            ${t(flight.label) === t({ zh: "巴黎回曼城", en: "Paris → Manchester" }) ? `
              ${renderMetaRow([
                { label: state.lang !== "zh" ? "Check-in" : "最晚報到", value: "11:50" },
                { label: state.lang !== "zh" ? "Checked baggage" : "托運行李", value: state.lang !== "zh" ? "2 × 32 kg" : "2 件，每件 32kg" },
                { label: state.lang !== "zh" ? "Airport" : "出發航廈", value: "CDG Terminal 2E" }
              ], "flight-meta")}
              <p class="flight-extra-copy">${state.lang !== "zh"
                ? "This public version keeps the useful travel details only. Booking reference, ticket number, FOID, QR code, and seat assignment stay in private notes."
                : "公開頁面只列航班、時間、航廈與行李額度。定位編號、票號、證件資訊、QR code 和座位號保留在私人檔案。"
              }</p>
            ` : ""}
          </article>
        `).join("")}
      </div>
    </section>
    <section class="section compact-section" id="transfer">
      ${sectionHeading(state.lang !== "zh" ? "Transfers" : "轉機", state.lang !== "zh" ? "Frankfurt and Heathrow notes" : "法蘭克福與希斯洛提醒")}
      <div class="transfer-grid">
        ${tripData.transfers.map(renderTransferCard).join("")}
      </div>
    </section>
    <section class="section compact-section" id="notes">
      ${sectionHeading(state.lang !== "zh" ? "Ticket Notes" : "票務備註", state.lang !== "zh" ? "Payment and connection notes" : "票價與銜接備註")}
      <div class="note-grid">
        <article><h3>${state.lang !== "zh" ? "International flight total" : "國際機票"}</h3><p>${money.flight}. ${state.lang !== "zh" ? "Base fare and taxes are already saved in the fare screenshot." : "票面價、稅金和航空公司附加費都已經留在票價明細截圖。"}</p></article>
        <article><h3>${state.lang !== "zh" ? "Paris to Manchester" : "巴黎回曼徹斯特"}</h3><p>${state.lang !== "zh" ? "AF1068 leaves CDG Terminal 2E at 12:50 and lands at Manchester Terminal 2 at 13:25. Latest check-in shown on the e-ticket is 11:50." : "AF1068 會在 12:50 從戴高樂 2E 起飛，13:25 抵達曼徹斯特 T2。電子機票上列的最晚報到時間是 11:50。"}</p></article>
        <article><h3>${state.lang !== "zh" ? "Air France Business at CDG" : "戴高樂法航商務艙權益"}</h3><p>${state.lang !== "zh" ? "The e-ticket shows Business + SkyPriority. In practice, this usually means priority check-in, bag drop, security / border shortcuts where available, lounge access on the day, and priority boarding." : "票面上有 Business 和 SkyPriority。實際到機場時，通常可用優先報到 / 托運、機場提供時的優先安檢或邊檢動線、當日可用的法航 Lounge，以及優先登機。"}</p></article>
        <article><h3>${state.lang !== "zh" ? "Baggage and privacy" : "行李與隱私"}</h3><p>${state.lang !== "zh" ? "The ticket confirms 2 checked bags up to 32 kg each. Booking reference, ticket number, FOID, and other personal identifiers are intentionally kept off the public site." : "電子機票確認這段可托運 2 件行李、每件 32kg。定位號、票號、FOID 和其他個人識別資訊則刻意不放在公開網站上。"}</p></article>
        <article><h3>${state.lang !== "zh" ? "Return reminder" : "回程提醒"}</h3><p>${state.lang !== "zh" ? "Do not skip the MAN-LHR segment. The ticketed chain still runs BA 1371 → CI 0082, even if the previous night is in Paris." : "不要跳過 MAN-LHR 這一段。就算前一晚人在巴黎，主票回程還是 BA 1371 → CI 0082 這條線。"} </p></article>
      </div>
    </section>
  `);
}

function renderStay() {
  const manchesterStay = tripData.stay[0];
  const londonStay = tripData.stay[1];
  const parisStay = tripData.stay[2];
  const cdgStay = tripData.stay[3];
  const stayOverviewEntries = [
    {
      city: { zh: "Manchester", en: "Manchester" },
      hotel: manchesterStay.title,
      dates: { zh: "6/30 – 7/5｜INNSiDE Manchester", en: "30 Jun – 5 Jul · INNSiDE Manchester" },
      status: "confirmed",
      note: { zh: "6/30–7/5，會議期間固定住這裡。", en: "Stay here from 30 June to 5 July for the conference." }
    },
    {
      city: { zh: "London", en: "London" },
      hotel: { zh: "Riu Plaza London The Westminster", en: "Riu Plaza London The Westminster" },
      dates: { zh: "7/4 – 7/7｜3 晚", en: "4 Jul – 7 Jul · 3 nights" },
      status: "confirmed",
      note: { zh: "7/4–7/7，Riu 已確認。", en: "Riu is confirmed for 4-7 July." }
    },
    {
      city: { zh: "Paris", en: "Paris" },
      hotel: parisStay.title,
      dates: { zh: "7/7 – 7/10｜3 晚", en: "7 Jul – 10 Jul · 3 nights" },
      status: "confirmed",
      note: { zh: "高樓層陽台房，可看艾菲爾鐵塔。", en: "High-floor balcony room with an Eiffel Tower view." }
    },
    {
      city: { zh: "CDG Airport", en: "CDG Airport" },
      hotel: { zh: "Novotel Paris CDG Airport", en: "Novotel Paris CDG Airport" },
      dates: { zh: "7/10 – 7/11｜1 晚", en: "10 Jul – 11 Jul · 1 night" },
      status: "confirmed",
      note: { zh: "7/10 住機場旁，隔天直接去 2E。", en: "Stay by the airport on 10 July, then go directly to Terminal 2E." }
    }
  ];
  const manchesterInfoItems = [
    { label: state.lang !== "zh" ? "Check-in" : "入住", value: state.lang !== "zh" ? "30 Jun 2026 after 15:00" : "2026/06/30 15:00 後" },
    { label: state.lang !== "zh" ? "Check-out" : "退房", value: state.lang !== "zh" ? "5 Jul 2026 before 12:00" : "2026/07/05 12:00 前" },
    { label: state.lang !== "zh" ? "Address" : "地址", value: "1 First Street, Manchester" },
    { label: state.lang !== "zh" ? "Cancellation" : "取消規則", value: state.lang !== "zh" ? "Within 24 hours = 1 night penalty" : "入住前 24 小時內取消 = 1 晚房費" }
  ];
  const manchesterStats = [
    { label: state.lang !== "zh" ? "Total for the room" : "總價", value: money.hotel, note: state.lang !== "zh" ? "Twin room for two guests, taxes included." : "雙床房、兩人入住，已含稅。" },
    { label: state.lang !== "zh" ? "Per person" : "每人約", value: money.hotelPerPersonTotal, note: state.lang !== "zh" ? "The personal share before local visitor charge." : "兩人平均分攤，旅遊稅另計。" },
    { label: state.lang !== "zh" ? "Average per night" : "平均每晚", value: money.hotelPerNight, note: state.lang !== "zh" ? "Calculated across five nights." : "以五晚計算。" },
    { label: state.lang !== "zh" ? "Visitor charge" : "旅遊稅", value: money.visitorCharge, note: state.lang !== "zh" ? "Paid locally at the hotel." : "現場支付；兩人合計約這個數字。" }
  ];
  const londonSummary = [
    { label: state.lang !== "zh" ? "Stay dates" : "入住日期", value: state.lang !== "zh" ? "4 Jul – 7 Jul 2026" : "2026/07/04 – 2026/07/07" },
    { label: state.lang !== "zh" ? "Nights" : "晚數", value: state.lang !== "zh" ? "3 nights" : "3 晚" },
    { label: state.lang !== "zh" ? "Use" : "用途", value: state.lang !== "zh" ? "Westminster and the 7 July St Pancras departure" : "走西敏，7/7 前往 St Pancras" },
    { label: state.lang !== "zh" ? "Booking total" : "總價", value: money.londonHotel, note: state.lang !== "zh" ? `Average per night: ${money.londonHotelPerNight}` : `平均每晚約 ${money.londonHotelPerNight}` }
  ];
  const londonInfoItems = [
    { label: state.lang !== "zh" ? "Hotel" : "飯店", value: "Riu Plaza London The Westminster" },
    { label: state.lang !== "zh" ? "Area" : "區域", value: state.lang !== "zh" ? "Westminster / Victoria side" : "Westminster / Victoria 一帶" },
    { label: state.lang !== "zh" ? "Location" : "位置", value: state.lang !== "zh" ? "Near Westminster; allow extra time for St Pancras on 7 July." : "靠近 Westminster；7/7 去 St Pancras 時要多抓行李移動時間。" },
    { label: state.lang !== "zh" ? "Proof" : "憑證", value: state.lang !== "zh" ? "Booking confirmed, payment saved" : "訂房已確認，付款紀錄已留存" }
  ];
  const londonAreaChips = ["Westminster", "Victoria", "St James's", "Covent Garden", "St Pancras"];
  const overlapOptions = [
    {
      title: { zh: "保留備案", en: "Keep as backup" },
      note: { zh: "7/4 仍去倫敦，但曼徹斯特房間也保留一晚。會多付一晚房費。", en: "Travel to London on 4 July but keep the Manchester room for one extra night. This means paying for both." }
    },
    {
      title: { zh: "取消最後一晚", en: "Cancel the last night" },
      note: { zh: "若 7/4 確定搭火車到倫敦，請先看 INNSiDE 的取消規則。", en: "If the 4 July train to London is confirmed, check INNSiDE's cancellation terms first." }
    },
    {
      title: { zh: "7/5 再移動", en: "Move on 5 July" },
      note: { zh: "住完曼徹斯特訂房再走，但倫敦會少一晚。", en: "Use the final Manchester night, but lose one night in London." }
    }
  ];
  const pullmanSummary = [
    { label: state.lang !== "zh" ? "Stay dates" : "入住日期", value: state.lang !== "zh" ? "7 Jul – 10 Jul 2026" : "2026/07/07 – 2026/07/10" },
    { label: state.lang !== "zh" ? "Nights" : "晚數", value: state.lang !== "zh" ? "3 nights" : "3 晚" },
    { label: state.lang !== "zh" ? "Room" : "房型", value: state.lang !== "zh" ? "Deluxe Room · High Floor · Balcony · Eiffel Tower View" : "Deluxe Room · 高樓層 · 陽台 · 鐵塔景" },
    { label: state.lang !== "zh" ? "Booking total" : "總價", value: money.parisHotel, note: state.lang !== "zh" ? `Average per night: ${money.parisHotelPerNight}` : `平均每晚約 ${money.parisHotelPerNight}` }
  ];
  const pullmanFeatureChips = [
    state.lang !== "zh" ? "32 sqm" : "32㎡",
    state.lang !== "zh" ? "High floor" : "高樓層",
    state.lang !== "zh" ? "Private balcony" : "私人陽台",
    state.lang !== "zh" ? "Eiffel Tower view" : "艾菲爾鐵塔景觀",
    state.lang !== "zh" ? "Balcony photo spot" : "陽台拍照",
    state.lang !== "zh" ? "Walkable to Seine" : "近塞納河"
  ];
  const cdgInfoItems = [
    { label: state.lang !== "zh" ? "Stay" : "入住", value: state.lang !== "zh" ? "10 Jul – 11 Jul 2026" : "2026/07/10 – 2026/07/11" },
    { label: state.lang !== "zh" ? "Address" : "地址", value: "Paris Street, Roissypole RER, 93290 Tremblay-en-France" },
    { label: state.lang !== "zh" ? "Payment note" : "付款紀錄", value: money.cdgHotel },
    { label: state.lang !== "zh" ? "Transit" : "交通", value: state.lang !== "zh" ? "Roissypole RER by the CDG terminals" : "位在 Roissypole RER 旁，可轉往 CDG 各航廈" }
  ];
  const stayNextSteps = [
    {
      title: { zh: "決定 7/4 曼徹斯特最後一晚要不要保留。", en: "Decide what to do with the 4 July Manchester overlap." },
      note: { zh: "Riu 已確認 7/4 入住；INNSiDE 則訂到 7/5，兩邊重疊一晚。", en: "Riu starts on 4 July, while INNSiDE runs through 5 July, so the bookings overlap for one night." }
    },
    {
      title: { zh: "把 Eurostar 訂下來。", en: "Book the Eurostar segment." },
      note: { zh: "7/7 從 Riu 前往 St Pancras；發車前還要完成安檢和護照檢查。", en: "Travel from Riu to St Pancras on 7 July and allow time for security and passport control before departure." }
    },
    {
      title: { zh: "確認 Pullman 退房後到 CDG Novotel 的移動方式。", en: "Check the Pullman → CDG Novotel move." },
      note: { zh: "大件行李多時直接叫車；否則可搭 RER 到 Roissypole。", en: "Take a car with large luggage; otherwise use the RER to Roissypole." }
    },
    {
      title: { zh: "再看一次各飯店取消期限與付款狀態。", en: "Review cancellation windows and payment status." },
      note: { zh: "四間住宿都已確認；把取消期限、付款紀錄和訂房確認信再核對一次。", en: "All four stays are confirmed. Recheck cancellation deadlines, payments, and confirmation emails." }
    }
  ];

  return renderDesktopPageShell("stay", {
    label: { zh: "Hotel", en: "Hotel" },
    title: { zh: "住宿筆記", en: "Stay Notes" },
    note: { zh: "四間飯店的日期、費用、地址和移動提醒。", en: "Dates, costs, addresses, and transfer notes for all four hotels." },
    meta: [
      { label: { zh: "曼徹斯特住宿", en: "Manchester hotel" }, value: "INNSiDE Manchester" },
      { label: { zh: "倫敦住宿", en: "London hotel" }, value: "Riu Plaza Westminster" },
      { label: { zh: "巴黎住宿", en: "Paris hotel" }, value: "Pullman Paris Tour Eiffel" },
      { label: { zh: "回程前一晚", en: "Departure eve" }, value: { zh: "Novotel CDG", en: "Novotel CDG" } }
    ]
  }, `
    ${renderQuickNav("stay")}
    <section class="section compact-section" id="overview">
      <article class="section-card">
        <div class="section-label">${state.lang !== "zh" ? "Accommodation overview" : "住宿總覽"}</div>
        <h2>${state.lang !== "zh" ? "Four confirmed stays" : "四段住宿都已確認"}</h2>
        <p class="lead">${state.lang !== "zh" ? "INNSiDE for AIB, Riu in Westminster, Pullman in Paris, and Novotel by CDG." : "AIB 期間住 INNSiDE，倫敦住 Riu Westminster，巴黎住 Pullman，7/10 住 Novotel CDG。"} </p>
        <div class="stay-overview-grid">
          ${stayOverviewEntries.map(renderStaySnapshotCard).join("")}
        </div>
      </article>
    </section>
    <section class="section compact-section" id="manchester">
      <article class="section-card">
        <div class="section-label">${state.lang !== "zh" ? "Manchester base" : "Manchester｜會議據點"}</div>
        <h2>${state.lang !== "zh" ? "INNSiDE Manchester" : "AIB 期間住 INNSiDE Manchester"}</h2>
        <p class="lead">${state.lang !== "zh" ? "Stay from 30 June to 5 July and walk to both presentation venues." : "6/30 入住、7/5 退房。兩個發表會場都可從飯店步行前往。"}</p>
        <div class="stay-spotlight-grid">
          <article class="stay-card-rich with-image handbook-stay-spotlight">
            <div class="stay-card-image-wrap">
              <img class="stay-card-image" src="${escapeHtml(manchesterStay.image)}" alt="${escapeHtml(t(manchesterStay.title))}" width="1050" height="700" loading="lazy" decoding="async" />
            </div>
            <div class="stay-card-top">
              <div class="stay-card-head">
                <div class="stay-card-kicker">${escapeHtml(t(manchesterStay.city))}</div>
                <h3 class="stay-card-local">${escapeHtml(t(manchesterStay.title))}</h3>
                <p class="stay-card-note">${escapeHtml(t(manchesterStay.note))}</p>
              </div>
              <div class="stay-side">
                ${statusChip(manchesterStay.status)}
                <a class="stay-map-link" href="https://www.google.com/maps/search/?api=1&query=INNSiDE+Manchester+1+First+Street+Manchester" target="_blank" rel="noreferrer noopener">${state.lang !== "zh" ? "Map" : "地圖"}</a>
              </div>
            </div>
            ${renderStayInfoList(manchesterInfoItems)}
          </article>
          <div class="stay-price-grid">
            ${manchesterStats.map((item) => renderStayStatCard(item.label, item.value, item.note)).join("")}
          </div>
        </div>
      </article>
    </section>
    <section class="section compact-section" id="london">
      <article class="section-card">
        <div class="section-label">${state.lang !== "zh" ? "London stay" : "London｜已確認住宿"}</div>
        <h2>${state.lang !== "zh" ? "Riu Plaza London The Westminster" : "倫敦住 Riu Plaza London The Westminster"}</h2>
        <p class="lead">${state.lang !== "zh" ? "Confirmed from 4 to 7 July. Westminster is nearby; allow extra time for the trip to St Pancras with luggage." : "已確認 7/4–7/7。飯店靠近 Westminster；7/7 帶行李去 St Pancras 時多抓一點時間。"} </p>
        <div class="stay-warning-card">
          <div class="stay-warning-head">
            ${statusChip("alert")}
            <h3>${state.lang !== "zh" ? "The bookings overlap on 4 July" : "7/4 同時訂了曼徹斯特與倫敦"}</h3>
          </div>
          <p>${state.lang !== "zh" ? "INNSiDE is booked through 5 July and Riu starts on 4 July. Decide whether to cancel the final Manchester night." : "INNSiDE 訂到 7/5 退房，Riu 則是 7/4 入住。要不要取消曼徹斯特最後一晚，出發前請決定。"} </p>
          ${renderStayWarningOptions(overlapOptions)}
        </div>
        <div class="stay-spotlight-grid">
          <article class="stay-card-rich with-image handbook-stay-spotlight">
            <div class="stay-card-image-wrap">
              <img class="stay-card-image" src="${escapeHtml(londonStay.image)}" alt="${escapeHtml(t(londonStay.imageAlt))}" width="1206" height="2622" loading="lazy" decoding="async" />
            </div>
            <div class="stay-card-top">
              <div class="stay-card-head">
                <div class="stay-card-kicker">London</div>
                <h3 class="stay-card-local">Riu Plaza London The Westminster</h3>
                <p class="stay-card-note">${state.lang !== "zh" ? "Close to Westminster. Covent Garden is a short ride away; St Pancras requires a separate transfer." : "靠近 Westminster；到 Covent Garden 搭一小段車，7/7 再轉往 St Pancras。"} </p>
              </div>
              <div class="stay-side">
                ${statusChip("confirmed")}
                <a class="stay-map-link" href="https://www.google.com/maps/search/?api=1&query=Riu+Plaza+London+The+Westminster" target="_blank" rel="noreferrer noopener">${state.lang !== "zh" ? "Map" : "地圖"}</a>
              </div>
            </div>
            ${renderStayInfoList(londonInfoItems)}
          </article>
          <div class="stay-price-grid">
            ${londonSummary.map((item) => renderStayStatCard(item.label, item.value, item.note)).join("")}
            <article class="stay-stat-card">
              <span>${state.lang !== "zh" ? "Nearby areas" : "附近區域"}</span>
              <strong>${state.lang !== "zh" ? "Westminster / Victoria / St Pancras" : "Westminster / Victoria / St Pancras"}</strong>
              <p>${state.lang !== "zh" ? "Westminster and Victoria are nearby; St Pancras is the departure station on 7 July." : "Westminster 和 Victoria 在飯店附近；7/7 從 St Pancras 出發。"} </p>
              <div class="stay-area-chip-cloud">
                ${londonAreaChips.map((area) => `<span>${escapeHtml(area)}</span>`).join("")}
              </div>
            </article>
          </div>
        </div>
      </article>
    </section>
    <section class="section compact-section" id="paris">
      <article class="section-card paris-spotlight-card">
        <div class="section-label">${state.lang !== "zh" ? "Paris stay" : "Paris｜Pullman Paris Tour Eiffel"}</div>
        <h2>${state.lang !== "zh" ? "Three nights at Pullman Paris Tour Eiffel" : "Pullman Paris Tour Eiffel 住三晚"}</h2>
        <p class="lead">${state.lang !== "zh" ? "Confirmed from 7 to 10 July in a high-floor balcony room with an Eiffel Tower view." : "已確認 7/7–7/10，高樓層陽台房，可看艾菲爾鐵塔。"} </p>
        <div class="paris-spotlight-grid">
          <div class="paris-spotlight-copy">
            <div class="stay-price-grid pullman-summary-grid">
              ${pullmanSummary.map((item) => renderStayStatCard(item.label, item.value, item.note)).join("")}
            </div>
            <div class="paris-feature-chips">
              ${pullmanFeatureChips.map((item) => `<span>${escapeHtml(item)}</span>`).join("")}
            </div>
            <div class="paris-spotlight-body">
              <p>${state.lang !== "zh" ? "The Eiffel Tower and the Seine are within walking distance. Return to the room for the tower lights instead of adding another late trip." : "鐵塔和塞納河都能步行到。晚上想看亮燈，回房間陽台即可，不必再搭車。"} </p>
              <p>${state.lang !== "zh" ? "On 10 July, leave the bags after checkout, collect them after Montmartre and shopping, then go to Novotel CDG." : "7/10 退房後寄放行李。蒙馬特和採買結束，再回飯店拿行李去 Novotel CDG。"} </p>
              <p>${state.lang !== "zh" ? `The current booking amount shown on the payment record is NT$70,243 / EUR 1,915.58, which works out to about ${money.parisHotelPerNight} per night.` : `目前訂房付款紀錄顯示總額為 NT$70,243 / EUR 1,915.58，換算平均每晚約 ${money.parisHotelPerNight}。`}</p>
            </div>
          </div>
          <div class="paris-spotlight-side">
            <div class="paris-spotlight-photo-wrap">
              <img class="paris-spotlight-photo" src="${escapeHtml(parisStay.image)}" alt="${escapeHtml(t(parisStay.imageAlt))}" width="1206" height="2196" loading="lazy" decoding="async" />
            </div>
            <div class="paris-spotlight-note">
              <h3>${state.lang !== "zh" ? "Room and location" : "房間與位置"}</h3>
              ${renderList([
                state.lang !== "zh" ? "The balcony faces the Eiffel Tower." : "私人陽台面向艾菲爾鐵塔。",
                state.lang !== "zh" ? "The room is 32 sqm with one king bed and one sofa bed." : "房間 32㎡，一張特大床與一張沙發床。",
                state.lang !== "zh" ? "The Eiffel Tower and the Seine are nearby." : "步行可到艾菲爾鐵塔與塞納河。"
              ], "plain-list")}
            </div>
            <div class="paris-spotlight-note">
              <h3>${state.lang !== "zh" ? "After Pullman" : "7/10 之後"}</h3>
              <p>${state.lang !== "zh" ? "Check out on 10 July, store the bags, return for them in the afternoon, then travel to Novotel CDG." : "7/10 退房後寄放行李，下午回來取件，再前往 Novotel CDG。"} </p>
            </div>
          </div>
        </div>
      </article>
    </section>
    <section class="section compact-section" id="cdg">
      <article class="section-card functional-stay-card">
        <div class="section-label">${state.lang !== "zh" ? "Airport stay" : "機場過夜安排"}</div>
        <h2>${state.lang !== "zh" ? "Stay by CDG before the flight" : "7/10 晚住 CDG 機場旁"}</h2>
        <p class="lead">${state.lang !== "zh" ? "Check in after collecting the Pullman luggage. Go to Terminal 2E the next morning for tax refund, bag drop, and AF1068." : "從 Pullman 拿完行李後入住。隔天早上到 Terminal 2E 辦退稅、托運，再搭 AF1068。"} </p>
        <div class="stay-spotlight-grid airport-grid">
          <article class="stay-card-rich with-image airport-stay-panel">
            <div class="stay-card-image-wrap">
              <img class="stay-card-image" src="${escapeHtml(cdgStay.image)}" alt="${escapeHtml(t(cdgStay.imageAlt))}" width="1978" height="706" loading="lazy" decoding="async" />
            </div>
            <div class="stay-card-top">
              <div class="stay-card-head">
                <div class="stay-card-kicker">${escapeHtml(t(cdgStay.city))}</div>
                <h3 class="stay-card-local">${escapeHtml(t(cdgStay.title))}</h3>
                <p class="stay-card-note">${escapeHtml(t(cdgStay.note))}</p>
              </div>
              <div class="stay-side">
                ${statusChip(cdgStay.status)}
                <a class="stay-map-link" href="${escapeHtml(cdgStay.link)}" target="_blank" rel="noreferrer noopener">${state.lang !== "zh" ? "Map" : "地圖"}</a>
              </div>
            </div>
          </article>
          <div class="stay-info-stack">
            ${renderStayInfoList(cdgInfoItems)}
            <div class="functional-stay-note">
              <p>${state.lang !== "zh" ? "After check-in, sort the tax-refund forms and checked baggage before sleeping." : "入住後把退稅單、收據和托運行李整理好，隔天不用重打包。"} </p>
            </div>
          </div>
        </div>
      </article>
    </section>
    <section class="section compact-section" id="next">
      <article class="section-card">
        <div class="section-label">${state.lang !== "zh" ? "Next steps" : "下一步確認清單"}</div>
        <h2>${state.lang !== "zh" ? "Four checks before departure" : "出發前還有四件事"}</h2>
        <p class="lead">${state.lang !== "zh" ? "Resolve the 4 July overlap, book Eurostar, choose the Pullman-to-CDG transfer, and recheck cancellation deadlines." : "處理 7/4 重疊住宿、購買 Eurostar、決定 Pullman 到 CDG 的交通，並核對取消期限。"} </p>
        ${renderStayNextSteps(stayNextSteps)}
      </article>
    </section>
  `);
}

function renderItinerary() {
  return `
    <section class="section compact-section" id="timeline">
      <article class="section-card handbook-itinerary-card">
        <div class="section-label">${state.lang !== "zh" ? "Itinerary" : "每日旅程"}</div>
        <h2>${state.lang !== "zh" ? "Daily times, places, and transport" : "每日時間、地點與交通"}</h2>
        <p class="lead">${state.lang !== "zh" ? "Each card lists the hotel, transfers, addresses, and what to carry that day." : "每張卡列出住宿、移動、地址和當天要帶的東西。"} </p>
        ${renderItineraryToolkit()}
        ${renderPrintableItinerarySummary()}
        <div class="day-card-stack">
          ${itineraryDayCards.map(renderDayHandbookCard).join("")}
        </div>
      </article>
    </section>
    <section class="section compact-section" id="paris-must-do">
      <article class="section-card paris-mustdo-section-card">
        ${sectionHeading(
          state.lang !== "zh" ? "Paris Places" : "巴黎地點備忘",
        state.lang !== "zh" ? "Ten places across four days" : "十個地點，分四天看",
        state.lang !== "zh" ? "Use the dates on each item. Skip anything that makes the day too full." : "每個地點都有建議日期。當天走不完就刪，不必全部完成。"
      )}
        <div class="paris-mustdo-grid">
          ${parisMustDoItems.map(renderParisMustDoCard).join("")}
        </div>
      </article>
    </section>
    <section class="section compact-section" id="tickets">
      ${sectionHeading(
        state.lang !== "zh" ? "Admission" : "景點與票價",
        state.lang !== "zh" ? "Fees and booking status" : "門票價格與預訂狀態",
        state.lang !== "zh" ? "Recheck official prices before booking for July 2026." : "價格依目前資料整理；下訂前請回官網確認 2026 年 7 月票價。"
      )}
      <div class="ticket-grid">
        ${tripData.attractionCosts.map((item) => `
          <article class="ticket-card">
            <div class="ticket-card-head"><span>${escapeHtml(item.day)}</span>${statusChip(item.status)}</div>
            <h3>${escapeHtml(item.attraction)}</h3>
            <strong>${escapeHtml(item.fee)}</strong>
            <p>${escapeHtml(item.estimate)}</p>
            <small>${escapeHtml(t(item.note))}</small>
            ${externalLink(item.source, state.lang !== "zh" ? "Official source" : "官方來源")}
          </article>
        `).join("")}
      </div>
    </section>
    <section class="section compact-section" id="return">
      ${renderAlert({ title: { zh: "7/11 不排巴黎市區行程", en: "No Paris sightseeing on 11 July" }, body: { zh: "09:00 左右進 CDG 2E，依序搭 AF1068、BA1371、CI0082。登機證和電子票先存離線版本。", en: "Enter CDG Terminal 2E around 09:00, then take AF1068, BA1371, and CI0082 in order. Save boarding passes and e-tickets offline." } })}
    </section>
  `;
}

function renderShoppingCategory(category, index) {
  return `
    <section class="section compact-section"${index === 0 ? ' id="tea"' : index === 2 ? ' id="pantry"' : index === 3 ? ' id="essentials"' : ""}>
      <article class="section-card">
        <div class="section-label">${escapeHtml(t(category.title))}</div>
        <h2>${escapeHtml(t(category.title))}</h2>
        <p class="lead">${escapeHtml(t(category.lead))}</p>
        <div class="shopping-grid">
          ${category.items.map((item) => `
            <article class="shopping-card">
              <div class="shopping-card-top">
                <h3>${escapeHtml(item.name)}</h3>
                ${statusChip(index === 3 ? "optional" : "confirmed")}
              </div>
              <p>${escapeHtml(t(item.note))}</p>
              ${renderMetaRow([
                { label: state.lang !== "zh" ? "Where to look" : "去哪裡找", value: item.where }
              ])}
              ${externalLink(item.source, state.lang !== "zh" ? "Official page" : "官方頁面", "shopping-link")}
            </article>
          `).join("")}
        </div>
      </article>
    </section>
  `;
}

function renderShopping() {
  return `
    ${renderQuickNav("shopping")}
    <section class="section compact-section" id="shopping-overview">
      <article class="section-card intro-card">
        <div class="section-label">${state.lang !== "zh" ? "Shopping Guide" : "購物指南"}</div>
        <h2>${state.lang !== "zh" ? "Tea, biscuits, preserves, and a few practical extras." : "茶葉、餅乾、果醬，還有幾樣實用的東西。"}</h2>
        <p class="lead">${state.lang !== "zh" ? "A simple list of common UK souvenirs and where to look for them." : "把常見的英國伴手禮和購買方向整理在這裡。"}</p>
        <div class="hero-actions">
          <a class="button secondary" href="./souvenirs.html">${state.lang !== "zh" ? "UK / France / Germany gift page" : "前往英法德伴手禮頁"}</a>
        </div>
        <div class="itinerary-highlights">
          ${shoppingData.highlights.map((item) => renderMiniHighlightCard(item.label, item.value)).join("")}
        </div>
        <div class="summary-grid three shopping-suggestion-grid">
          ${shoppingData.suggestions.map((item) => `
            <article class="summary-card">
              <h3>${escapeHtml(t(item.title))}</h3>
              <p>${escapeHtml(t(item.text))}</p>
            </article>
          `).join("")}
        </div>
      </article>
    </section>
    ${shoppingData.categories.map((category, index) => renderShoppingCategory(category, index)).join("")}
    <section class="section compact-section">
      <article class="section-card">
        <div class="section-label">${state.lang !== "zh" ? "Packing Notes" : "打包提醒"}</div>
        <h2>${state.lang !== "zh" ? "What travels well" : "哪些東西最好帶"}</h2>
        <div class="bullet-stack shopping-note-list">
          ${shoppingData.packing.map((item) => `
            <article class="bullet-card">
              <p class="bullet-desc">${escapeHtml(t(item))}</p>
            </article>
          `).join("")}
        </div>
      </article>
    </section>
  `;
}

function renderSouvenirCountry(country) {
  return `
    <section class="section compact-section" id="${escapeHtml(country.id)}">
      <article class="section-card">
        <div class="section-label">${escapeHtml(t(country.label))}</div>
        <h2>${escapeHtml(t(country.title))}</h2>
        <p class="lead">${escapeHtml(t(country.lead))}</p>
        <div class="shopping-grid">
          ${country.picks.map((item, index) => `
            <article class="shopping-card">
              <div class="shopping-card-top">
                <h3>${escapeHtml(item.name)}</h3>
                ${statusChip(index === country.picks.length - 1 && country.id === "germany" ? "optional" : "confirmed")}
              </div>
              <p>${escapeHtml(t(item.note))}</p>
              ${renderMetaRow([
                { label: state.lang !== "zh" ? "Good for" : "適合送誰", value: item.goodFor },
                { label: state.lang !== "zh" ? "Where to look" : "去哪裡找", value: item.where }
              ])}
              ${externalLink(item.source, state.lang !== "zh" ? "Official page" : "官方頁面", "shopping-link")}
            </article>
          `).join("")}
        </div>
      </article>
    </section>
  `;
}

function renderSouvenirs() {
  return `
    ${renderQuickNav("souvenirs")}
    <section class="section compact-section" id="souvenir-overview">
      <article class="section-card intro-card">
        <div class="section-label">${state.lang !== "zh" ? "Gift Guide" : "伴手禮指南"}</div>
        <h2>${state.lang !== "zh" ? "Souvenirs from the UK, France, and Germany" : "英國、法國、德國伴手禮"}</h2>
        <p class="lead">${state.lang !== "zh" ? "Prioritise items that fit in checked luggage and do not need refrigeration." : "以不需冷藏、可放進托運行李的品項為主。"}</p>
        <div class="hero-actions">
          <a class="button secondary" href="./shopping.html">${state.lang !== "zh" ? "Back to UK shopping page" : "回到英國購物頁"}</a>
        </div>
        <div class="itinerary-highlights">
          ${souvenirData.highlights.map((item) => renderMiniHighlightCard(item.label, item.value)).join("")}
        </div>
        <div class="summary-grid three shopping-suggestion-grid">
          ${[
            {
              title: { zh: "一般送禮", en: "General gifts" },
              text: { zh: "英國茶葉、德國巧克力、法國護手霜，品項和價格都容易比較。", en: "Compare UK tea, German chocolate, and French hand cream by size and price." }
            },
            {
              title: { zh: "當地品項", en: "Local products" },
              text: { zh: "法國香氛、德國馬滋潘和英國 marmalade 可在各城市採買。", en: "Look for French fragrance, German marzipan, and British marmalade in each city." }
            },
            {
              title: { zh: "最後補買", en: "Last-minute items" },
              text: { zh: "茶包、軟糖和巧克力可在回程前購買，記得先確認行李空間。", en: "Buy tea bags, gummies, and chocolate near the end, after checking luggage space." }
            }
          ].map((item) => `
            <article class="summary-card">
              <h3>${escapeHtml(t(item.title))}</h3>
              <p>${escapeHtml(t(item.text))}</p>
            </article>
          `).join("")}
        </div>
      </article>
    </section>
    ${souvenirData.countries.map(renderSouvenirCountry).join("")}
    <section class="section compact-section" id="packing">
      <article class="section-card">
        <div class="section-label">${state.lang !== "zh" ? "Packing Notes" : "打包提醒"}</div>
        <h2>${state.lang !== "zh" ? "Packing food, liquids, and fragile items" : "食物、液體和易碎品分開放"}</h2>
        <div class="bullet-stack shopping-note-list">
          ${souvenirData.packing.map((item) => `
            <article class="bullet-card">
              <p class="bullet-desc">${escapeHtml(t(item))}</p>
            </article>
          `).join("")}
        </div>
      </article>
    </section>
  `;
}

function renderTransferCard(item) {
  return `
    <article class="transfer-card">
      <div class="transfer-card-head">
        ${statusChip(item.status)}
        <span>${escapeHtml(item.route)}</span>
      </div>
      <h3>${escapeHtml(t(item.airport))}</h3>
      ${renderMetaRow([
        { label: state.lang !== "zh" ? "Layover" : "停留", value: item.layover },
        { label: state.lang !== "zh" ? "Terminal flow" : "航廈", value: item.terminals }
      ])}
      ${renderList(item.notes, "transfer-notes")}
      ${externalLink(item.source, state.lang !== "zh" ? "Official airport guidance" : "機場官方轉機資訊")}
    </article>
  `;
}

function mapEmbedUrl(query) {
  return `https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`;
}

function displayCity(city) {
  if (state.lang !== "zh") return city;
  const labels = { Frankfurt: "法蘭克福", Manchester: "曼徹斯特", London: "倫敦", Paris: "巴黎" };
  return labels[city] || city;
}

function mapCityNote(city) {
  if (state.lang !== "zh") {
    if (city === "Manchester") return "Keep this side practical: airport, hotel, the two conference venues, and the station south to London.";
    if (city === "Frankfurt") return "For the Frankfurt layover, save the airport rail, old town, river, and return route.";
    if (city === "Paris") return "Save Pullman, the Right Bank, the Louvre, Montmartre, and the route to CDG.";
    return "Save Westminster, the department stores, shopping streets, and St Pancras for London.";
  }
  if (city === "Manchester") return "曼徹斯特存機場、INNSiDE、兩個會場和 Piccadilly 車站。";
  if (city === "Frankfurt") return "法蘭克福存機場鐵路、老城、美因河與回機場路線。";
  if (city === "Paris") return "巴黎存 Pullman、右岸、羅浮宮、蒙馬特與 CDG 路線。";
  return "倫敦存 Westminster、百貨、精品街與 St Pancras。";
}

function renderMap() {
  const defaultLocation = tripData.mapLocations[0];
  const cityGroups = [...new Set(tripData.mapLocations.map((item) => item.city))];
  return `
    ${renderQuickNav("map")}
    <section class="section compact-section" id="travel-map">
      ${sectionHeading(
        state.lang !== "zh" ? "Travel Map" : "旅程地圖",
        state.lang !== "zh" ? "Saved places and daily routes" : "地點與每日路線",
        state.lang !== "zh" ? "Select a place for the map, or open a complete daily route." : "選地點看地圖，或直接打開當天完整路線。"
      )}
      <div class="map-actions">
        ${externalLink(tripData.mapRouteUrl, state.lang !== "zh" ? "Open full route in Google Maps" : "開啟完整 Google 地圖路線")}
      </div>
      <div class="map-layout">
        <div class="map-list" aria-label="${state.lang !== "zh" ? "Map locations" : "地圖地點"}">
          ${tripData.mapLocations.map((location, index) => `
            <button class="map-location-button${index === 0 ? " active" : ""}" type="button" data-map-query="${escapeHtml(location.query)}" aria-pressed="${index === 0 ? "true" : "false"}">
              <span class="map-location-top"><span>${escapeHtml(displayCity(location.city))}</span>${statusChip(location.status)}</span>
              <span class="map-location-title">${escapeHtml(t(location.title))}</span>
              <span class="map-location-note">${escapeHtml(t(location.note))}</span>
            </button>
          `).join("")}
        </div>
        <div class="map-frame-wrap">
          <iframe id="travelMapFrame" title="${state.lang !== "zh" ? "AIB 2026 Germany · UK · France travel map" : "AIB 2026 德英法旅程地圖"}" src="${mapEmbedUrl(defaultLocation.query)}" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </section>
    <section class="section compact-section" id="route-links">
      ${sectionHeading(state.lang !== "zh" ? "Daily Routes" : "每日路線", state.lang !== "zh" ? "Open the day you need" : "打開那一天的路")}
      <div class="map-day-routes">
        ${tripData.mapRoutes.map((route) => `
          <a class="map-day-route-link" href="${escapeHtml(route.url)}" target="_blank" rel="noreferrer noopener">
            <span class="map-day-route-head">${statusChip(route.status)}</span>
            <span class="map-day-route-title">${escapeHtml(t(route.label))}</span>
            <span class="map-day-route-note">${escapeHtml(t(route.note))}</span>
          </a>
        `).join("")}
      </div>
    </section>
    <section class="section compact-section" id="map-notes">
      <div class="summary-grid two">
        ${cityGroups.map((city) => `
          <article class="summary-card">
            <h3>${escapeHtml(displayCity(city))}</h3>
            <p>${escapeHtml(mapCityNote(city))}</p>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function expenseTableHeads() {
  return state.lang !== "zh"
    ? ["Item", "NTD", "GBP", "EUR", "USD", "Status", "Receipt / proof", "Notes"]
    : ["項目", "新台幣", "英鎊", "歐元", "美元", "狀態", "收據 / 憑證", "備註"];
}

function renderExpenseTable(rows, label) {
  const heads = expenseTableHeads();
  return `
    <div class="mobile-table" role="region" aria-label="${escapeHtml(label)}">
      <table>
        <thead><tr>${heads.map((head) => `<th>${escapeHtml(head)}</th>`).join("")}</tr></thead>
        <tbody>
          ${rows.map((row) => `
            <tr>
              <td data-label="${escapeHtml(heads[0])}">${escapeHtml(t(row.item))}</td>
              <td data-label="${escapeHtml(heads[1])}" class="budget-amount-cell">${escapeHtml((row.amounts && row.amounts.TWD) || "-")}</td>
              <td data-label="${escapeHtml(heads[2])}" class="budget-amount-cell">${escapeHtml((row.amounts && row.amounts.GBP) || "-")}</td>
              <td data-label="${escapeHtml(heads[3])}" class="budget-amount-cell">${escapeHtml((row.amounts && row.amounts.EUR) || "-")}</td>
              <td data-label="${escapeHtml(heads[4])}" class="budget-amount-cell">${escapeHtml((row.amounts && row.amounts.USD) || "-")}</td>
              <td data-label="${escapeHtml(heads[5])}">${statusChip(row.status)}</td>
              <td data-label="${escapeHtml(heads[6])}">${escapeHtml(t(row.proof))}</td>
              <td data-label="${escapeHtml(heads[7])}">${escapeHtml(t(row.notes))}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>`;
}

function currencySwitcher() {
  return `
    <div class="currency-switcher" aria-label="${state.lang !== "zh" ? "Currency selector" : "貨幣切換"}">
      <span>${state.lang !== "zh" ? "Currency" : "切換貨幣"}</span>
      <div>
        ${currencies.map((currency) => `
          <button type="button" class="${state.currency === currency.id ? "active" : ""}" data-currency="${currency.id}">
            ${escapeHtml(t(currency.label))}
          </button>
        `).join("")}
      </div>
    </div>
  `;
}

function renderBudget() {
  const totals = {
    TWD: { reimburse: "NT$156,039", self: "NT$170,410", personalSelf: "約 NT$19,263", hotelPerson: "NT$19,135", hotelPersonNight: "NT$3,827" },
    GBP: { reimburse: "GBP 3,671", self: "約 GBP 3,990", personalSelf: "GBP 453.45", hotelPerson: "GBP 450.45", hotelPersonNight: "GBP 90.09" },
    EUR: { reimburse: "EUR 4,293", self: "約 EUR 4,670", personalSelf: "約 EUR 531", hotelPerson: "EUR 527", hotelPersonNight: "EUR 105" },
    USD: { reimburse: "US$4,870", self: "約 US$5,290", personalSelf: "約 US$601", hotelPerson: "US$597", hotelPersonNight: "US$119" }
  };
  const selectedTotals = totals[state.currency] || totals.TWD;
  return renderDesktopPageShell("budget", {
    label: { zh: "Budget", en: "Budget" },
    title: { zh: "費用整理", en: "Travel Cost Notes" },
    note: { zh: "可報帳、自費與票券費用分開列。", en: "Reimbursable items, self-funded costs, and ticket notes are listed separately." },
    meta: [
      { label: { zh: "機票", en: "Flights" }, value: money.flight },
      { label: { zh: "會議費", en: "Conference fee" }, value: money.conference },
      { label: { zh: "會員費", en: "Membership" }, value: money.membership },
      { label: { zh: "住宿", en: "Hotel" }, value: money.hotel }
    ]
  }, `
    ${renderQuickNav("budget")}
    <section class="section compact-section" id="expenses">
      ${sectionHeading(
        state.lang !== "zh" ? "Funding & Expense Notes" : "費用與票券整理",
        state.lang !== "zh" ? "Conference claims, hotel costs, and the later travel spend" : "把會議可報帳、自費住宿與後段交通費拆開來看",
        state.lang !== "zh" ? "Each item keeps all four currency amounts, with conference claims separated from personal travel costs." : "每筆保留四幣別金額，會議報帳與個人旅行支出分開列。"
      )}
      <div class="summary-grid three">
        <article class="summary-card">${statusChip("reimburse")}<h3>${state.lang !== "zh" ? "Flight total" : "機票總額"}</h3><strong>${money.flight}</strong>${renderMetaRow([{ label: state.lang !== "zh" ? "Status" : "狀態", value: state.lang !== "zh" ? "Claimable" : "可報帳" }, { label: state.lang !== "zh" ? "Proof" : "憑證", value: state.lang !== "zh" ? "Fare details saved" : "票價明細已存" }])}</article>
        <article class="summary-card">${statusChip("reimburse")}<h3>${state.lang !== "zh" ? "Conference fee" : "會議費"}</h3><strong>${money.conference}</strong>${renderMetaRow([{ label: state.lang !== "zh" ? "Status" : "狀態", value: state.lang !== "zh" ? "Claimable" : "可報帳" }, { label: state.lang !== "zh" ? "Proof" : "憑證", value: state.lang !== "zh" ? "Receipt ready" : "收據已備" }])}</article>
        <article class="summary-card">${statusChip("reimburse")}<h3>${state.lang !== "zh" ? "AIB membership fee" : "AIB 會員費"}</h3><strong>${money.membership}</strong>${renderMetaRow([{ label: state.lang !== "zh" ? "Status" : "狀態", value: state.lang !== "zh" ? "Claimable" : "可報帳" }, { label: state.lang !== "zh" ? "Proof" : "憑證", value: state.lang !== "zh" ? "Receipt ready" : "收據已備" }])}</article>
        <article class="summary-card">${statusChip("self")}<h3>${state.lang !== "zh" ? "Manchester hotel" : "曼徹斯特住宿"}</h3><strong>${money.hotel}</strong>${renderMetaRow([{ label: state.lang !== "zh" ? "Stay" : "住宿", value: state.lang !== "zh" ? "5 nights / 2 guests" : "5 晚 / 2 人" }, { label: state.lang !== "zh" ? "Personal share" : "個人分攤", value: money.hotelPerPersonTotal }])}</article>
        <article class="summary-card">${statusChip("self")}<h3>${state.lang !== "zh" ? "Paris hotel" : "巴黎住宿"}</h3><strong>${money.parisHotel}</strong>${renderMetaRow([{ label: state.lang !== "zh" ? "Stay" : "住宿", value: state.lang !== "zh" ? "3 nights" : "3 晚" }, { label: state.lang !== "zh" ? "Room" : "房型", value: state.lang !== "zh" ? "Balcony Eiffel Tower View" : "陽台鐵塔景房" }])}</article>
        <article class="summary-card">${statusChip("self")}<h3>${state.lang !== "zh" ? "Train estimate" : "火車預估"}</h3><strong>${t(money.trainAdvance)}</strong>${renderMetaRow([{ label: state.lang !== "zh" ? "Type" : "票種", value: "Advance / Off-Peak" }, { label: state.lang !== "zh" ? "Railcard" : "Railcard", value: money.railcard }])}</article>
        <article class="summary-card">${statusChip("pending")}<h3>${state.lang !== "zh" ? "Still to sort out" : "還要再看"}</h3><strong>${state.lang !== "zh" ? "Eurostar / optional attraction tickets" : "Eurostar / 可選景點票券"}</strong>${renderMetaRow([{ label: state.lang !== "zh" ? "Action" : "處理", value: state.lang !== "zh" ? "Book and review" : "出發前再補" }, { label: state.lang !== "zh" ? "Timing" : "時點", value: state.lang !== "zh" ? "Before departure" : "出發前" }])}</article>
      </div>
      ${currencySwitcher()}
      ${renderBudgetCards(tripData.expenses)}
      ${renderExpenseTable(tripData.expenses, state.lang !== "zh" ? "Reimbursable expenses" : "可報帳項目")}
      ${sectionHeading(
        state.lang !== "zh" ? "Self-funded" : "自費",
        state.lang !== "zh" ? "Personal travel costs" : "自費項目",
        state.lang !== "zh" ? "Keep receipts for your own records; these stay outside the reimbursement total." : "以下費用可留收據自用，不列入這次報帳金額。",
        { sub: true }
      )}
      ${renderBudgetCards(tripData.selfFundedExpenses)}
      ${renderExpenseTable(tripData.selfFundedExpenses, state.lang !== "zh" ? "Self-funded expenses" : "自費項目")}
    </section>
    <section class="section compact-section" id="totals">
      <div class="summary-grid three">
        <article class="summary-card">${statusChip("reimburse")}<h3>${state.lang !== "zh" ? "Reimbursement total" : "可報帳小計"}</h3><strong>${selectedTotals.reimburse}</strong><p>${state.lang !== "zh" ? "Flights, AIB conference fee, AIB membership fee, and Manchester daily allowance for 5 conference days." : "含機票、AIB 會議費、AIB 會員費，以及曼徹斯特研討會 5 天日支費。"}</p></article>
        <article class="summary-card">${statusChip("reimburse")}<h3>${state.lang !== "zh" ? "NSTC daily allowance" : "國科會日支費"}</h3><strong>${tripData.expenses[3].amounts[state.currency]}</strong><p>${state.lang !== "zh" ? "Calculated for 5 conference days." : "以研討會 5 天計算。"}</p></article>
        <article class="summary-card">${statusChip("self")}<h3>${state.lang !== "zh" ? "Self-funded known subtotal" : "已知自費小計"}</h3><strong>${selectedTotals.self}</strong><p>${state.lang !== "zh" ? "Current known self-funded items include Manchester, the London hotel, Pullman Paris, the Novotel CDG overnight, the Air France Paris-Manchester segment, and the visitor charge. Eurostar and any extra attraction tickets still sit outside this subtotal." : "目前已知自費包含曼徹斯特住宿與旅遊稅、倫敦住宿、Pullman 巴黎住宿、Novotel CDG 機場過夜，以及巴黎回曼徹斯特的法航航段；Eurostar 和額外景點票券先不算在裡面。"}</p></article>
      </div>
    </section>
    <section class="section compact-section" id="personal-costs">
      ${sectionHeading(
        state.lang !== "zh" ? "Personal Share" : "個人花費",
        state.lang !== "zh" ? "Current personal accommodation estimate" : "目前個人住宿分攤估算",
        state.lang !== "zh" ? "The Manchester room is priced for two guests, so the personal share is calculated as half of the room total." : "曼徹斯特住宿是兩人房價，個人分攤先抓總價的一半。"
      )}
      <div class="summary-grid three">
        <article class="summary-card">${statusChip("self")}<h3>${state.lang !== "zh" ? "Hotel per person" : "住宿一人總額"}</h3><strong>${selectedTotals.hotelPerson}</strong><p>${state.lang !== "zh" ? "INNSiDE Manchester, 5 nights, half of the two-person room total." : "INNSiDE Manchester 5 晚，兩人房價的一半。"}</p></article>
        <article class="summary-card">${statusChip("self")}<h3>${state.lang !== "zh" ? "Per person / night" : "一人一晚"}</h3><strong>${selectedTotals.hotelPersonNight}</strong><p>${state.lang !== "zh" ? "Average personal room share per night." : "平均每晚的個人住宿分攤。"}</p></article>
        <article class="summary-card">${statusChip("self")}<h3>${state.lang !== "zh" ? "Known personal self-funded" : "目前個人已知自費"}</h3><strong>${selectedTotals.personalSelf}</strong><p>${state.lang !== "zh" ? "This line still only tracks the Manchester room share plus half of the visitor charge. London, Paris, and CDG stays remain in the overall self-funded total above." : "這一格目前只先算曼徹斯特住宿個人分攤和旅遊稅一半；倫敦、巴黎和 CDG 的住宿都先放在上面的整體自費小計。"} </p></article>
      </div>
    </section>
    <section class="section compact-section" id="proofs">
      ${sectionHeading(state.lang !== "zh" ? "Proofs" : "憑證", state.lang !== "zh" ? "Reimbursement documents" : "報帳資料順序")}
      <ol class="proof-list">
        <li>${state.lang !== "zh" ? "Acceptance letters x 2" : "接受函 2 份"}</li>
        <li>${state.lang !== "zh" ? "AIB invitation letter" : "AIB 邀請函"}</li>
        <li>${state.lang !== "zh" ? "AIB conference fee receipt" : "AIB 會議註冊費收據"}</li>
        <li>${state.lang !== "zh" ? "AIB membership fee receipt" : "AIB 會員費收據"}</li>
        <li>${state.lang !== "zh" ? "Flight itinerary and payment details" : "機票行程單與付款明細"}</li>
        <li>${state.lang !== "zh" ? "ROC Year 115 overseas daily allowance table / NSTC reference" : "115 年國外日支表 / 國科會日支費參考"}</li>
      </ol>
    </section>
  `);
}

function renderDocuments() {
  return `
    ${renderQuickNav("documents")}
    <section class="section compact-section" id="checklist">
      ${sectionHeading(state.lang !== "zh" ? "Travel Documents" : "常用文件", state.lang !== "zh" ? "Keep phone and paper copies" : "手機與紙本各放一份", state.lang !== "zh" ? "Ready and missing documents are listed separately." : "已備妥和未完成的文件分開列。")}
      ${renderChecklistBoard()}
      <div class="checklist-grid">
        ${dashboardData.documentChecklist.map((item) => `
          <article class="checklist-card">
            ${statusChip(item.status)}
            <h3>${escapeHtml(t(item.title))}</h3>
            <p>${escapeHtml(t(item.note))}</p>
          </article>
        `).join("")}
      </div>
    </section>
    <section class="section compact-section" id="links">
      ${sectionHeading(state.lang !== "zh" ? "Useful Links" : "官方連結", state.lang !== "zh" ? "Official pages used in this handbook" : "本手冊用到的官方頁面")}
      <div class="link-grid">
        ${tripData.links.map(([label, href]) => externalLink(href, label)).join("")}
      </div>
    </section>
  `;
}

function renderReminders() {
  return `
    ${renderQuickNav("reminders")}
    <section class="section compact-section" id="pending">
      ${sectionHeading(
        state.lang !== "zh" ? "Reminders" : "提醒",
        state.lang !== "zh" ? "Things to check before departure" : "出發前再看一次。"
      )}
      <div class="reminder-grid">
        ${tripData.reminders.map((item) => `
          <article class="reminder-card">
            <div>${statusChip(item.status)}<h3>${escapeHtml(t(item.title))}</h3></div>
            <p>${escapeHtml(t(item.body))}</p>
          </article>
        `).join("")}
      </div>
    </section>
    <section class="section compact-section" id="quick-check">
      ${sectionHeading(
        state.lang !== "zh" ? "Final Check" : "行前核對",
        state.lang !== "zh" ? "A short final list" : "最後再對一次"
      )}
      <div class="proof-list checklist-list">
        ${[
          state.lang !== "zh" ? "Passport and UK ETA are ready." : "護照和 UK ETA 再看一次。",
          state.lang !== "zh" ? "AIB receipts and letters are saved for reimbursement." : "AIB 收據、接受函和邀請函都先存好。",
          state.lang !== "zh" ? "The Europe eSIM is installed and the main number is left on for SMS." : "歐洲 eSIM 先裝好，原本門號留著收簡訊。",
          state.lang !== "zh" ? "The Chubb insurance confirmation email and premium PDF are saved offline." : "安達產險確認信和保費 PDF 都先離線存好。",
          state.lang !== "zh" ? "Manchester-London trains are checked before prices rise." : "曼徹斯特到倫敦火車票再查一次。",
          state.lang !== "zh" ? "Riu, Pullman, and Novotel confirmations are saved offline." : "Riu、Pullman 和 Novotel 的訂房確認都先離線存好。",
          state.lang !== "zh" ? "Paris tax refund forms and receipts stay together; do the validation before baggage drop." : "巴黎退稅表單和收據先放一起，7/11 先辦退稅再托運。",
          state.lang !== "zh" ? "Even from the Novotel CDG stay, keep 2E timing generous on 11 July." : "7/11 就算前一晚住在 Novotel CDG，也先把 2E 的時間抓寬。",
          state.lang !== "zh" ? "Return routing starts at MAN and includes MAN-LHR." : "回程從 MAN 出發，MAN-LHR 這段不能跳過。"
        ].map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
      </div>
    </section>
  `;
}

function renderFirstTimeNoteCard(item) {
  const sourceMarkup = item.source
    ? externalLink(item.source, state.lang !== "zh" ? "Official source" : "官方資料")
    : "";
  return `
    <article class="first-note-card">
      <div class="first-note-head">
        ${statusChip(item.status)}
        <h3>${escapeHtml(t(item.title))}</h3>
      </div>
      <p>${escapeHtml(t(item.body))}</p>
      ${sourceMarkup}
    </article>
  `;
}

function renderFirstTime() {
  return `
    ${renderQuickNav("firstTime")}
    <section class="section compact-section first-time-intro" id="entry">
      ${sectionHeading(
        state.lang !== "zh" ? "Entry" : "入境",
        state.lang !== "zh" ? "Documents, ETA, and what to keep ready" : "文件、ETA 與入境時手邊要有的東西",
        state.lang !== "zh" ? "A short and clear explanation is enough: conference first, then London travel." : "入境時簡單說明：先到曼徹斯特參加會議，後面再去倫敦和巴黎。"
      )}
      <div class="first-note-grid">
        ${tripData.firstTimeNotes.essentials.map(renderFirstTimeNoteCard).join("")}
      </div>
    </section>
    <section class="section compact-section" id="city">
      ${sectionHeading(
        state.lang !== "zh" ? "City Basics" : "城市移動",
        state.lang !== "zh" ? "Transport, payment, and street rhythm" : "交通付款、走路和街上要注意的事"
      )}
      <div class="first-note-grid">
        ${tripData.firstTimeNotes.city.map(renderFirstTimeNoteCard).join("")}
      </div>
    </section>
    <section class="section compact-section" id="daily">
      ${sectionHeading(
        state.lang !== "zh" ? "Daily Notes" : "日常提醒",
        state.lang !== "zh" ? "Notes for streets, payments, and meals" : "走路、付款和用餐時要記得的事"
      )}
      <div class="first-note-grid">
        ${tripData.firstTimeNotes.daily.map(renderFirstTimeNoteCard).join("")}
      </div>
    </section>
    <section class="section compact-section" id="arrival">
      ${sectionHeading(
        state.lang !== "zh" ? "First Day" : "抵達第一天",
        state.lang !== "zh" ? "After landing in Manchester" : "抵達曼徹斯特之後"
      )}
      <div class="arrival-card">
        <div>
          ${statusChip("confirmed")}
          <h3>${state.lang !== "zh" ? "Check in, eat, and prepare for AIB" : "入住、吃飯、準備隔天會議"}</h3>
          <p>${state.lang !== "zh" ? "After reaching Manchester, check in, eat nearby, set the alarm, and check the conference files." : "抵達曼徹斯特後辦入住、在附近吃飯，接著確認鬧鐘和會議文件。"} </p>
        </div>
        ${renderList(tripData.firstTimeNotes.firstDay, "arrival-list")}
      </div>
    </section>
  `;
}

const renderers = {
  home: renderHome,
  conference: renderConference,
  flights: renderFlights,
  transport: renderTransport,
  stay: renderStay,
  itinerary: renderItinerary,
  shopping: renderShopping,
  souvenirs: renderSouvenirs,
  map: renderMap,
  budget: renderBudget,
  reminders: renderReminders,
  firstTime: renderFirstTime,
  documents: renderDocuments
};

let homeHashChangeHandler = null;
let desktopAnchorObservers = [];
let dayGuideObserver = null;
let preferenceDismissHandler = null;
const staticFallbackMarkup = {
  header: null,
  tabs: null,
  hero: null,
  content: null,
  footer: null
};

function captureStaticFallbackMarkup() {
  const headerSlot = document.querySelector("[data-site-header]");
  const tabsSlot = document.querySelector("[data-home-tabs]");
  const heroSlot = document.querySelector("[data-page-hero]");
  const contentSlot = document.getElementById("page-content");
  const footerSlot = document.querySelector("[data-site-footer]");

  if (staticFallbackMarkup.header === null && headerSlot) staticFallbackMarkup.header = headerSlot.innerHTML;
  if (staticFallbackMarkup.tabs === null && tabsSlot) staticFallbackMarkup.tabs = tabsSlot.innerHTML;
  if (staticFallbackMarkup.hero === null && heroSlot) staticFallbackMarkup.hero = heroSlot.innerHTML;
  if (staticFallbackMarkup.content === null && contentSlot) staticFallbackMarkup.content = contentSlot.innerHTML;
  if (staticFallbackMarkup.footer === null && footerSlot) staticFallbackMarkup.footer = footerSlot.innerHTML;
}

function restoreStaticFallbackMarkup() {
  const headerSlot = document.querySelector("[data-site-header]");
  const tabsSlot = document.querySelector("[data-home-tabs]");
  const heroSlot = document.querySelector("[data-page-hero]");
  const contentSlot = document.getElementById("page-content");
  const footerSlot = document.querySelector("[data-site-footer]");

  if (headerSlot && staticFallbackMarkup.header !== null) headerSlot.innerHTML = staticFallbackMarkup.header;
  if (tabsSlot && staticFallbackMarkup.tabs !== null) tabsSlot.innerHTML = staticFallbackMarkup.tabs;
  if (heroSlot && staticFallbackMarkup.hero !== null) heroSlot.innerHTML = staticFallbackMarkup.hero;
  if (contentSlot && staticFallbackMarkup.content !== null) contentSlot.innerHTML = staticFallbackMarkup.content;
  if (footerSlot && staticFallbackMarkup.footer !== null) footerSlot.innerHTML = staticFallbackMarkup.footer;
}

function renderApp() {
  const pageId = document.body.dataset.page || "home";
  document.documentElement.lang = currentDocumentLang();
  renderChrome();
  const heroSlot = document.querySelector("[data-page-hero]");
  if (heroSlot) heroSlot.innerHTML = renderHero(pageId);
  const content = document.getElementById("page-content");
  if (content) {
    const pageRenderer = renderers[pageId];
    content.innerHTML = pageRenderer ? pageRenderer() : renderHome();
  }
  wireMap();
  wireCurrencySwitcher();
  wirePreferenceMenus();
  wireChecklistBoard();
  wireHomeTabs();
  wireDesktopAnchors();
  wireBackToTop();
  wireHashDrivenSections();
  wireDayGuideNav();
  wireCopyButtons();
  wireImageFallbacks();
  updateProgress();
  applySecondaryLocaleText();
}

function safeRenderApp() {
  captureStaticFallbackMarkup();
  try {
    renderApp();
    document.body.dataset.renderState = "ready";
  } catch (error) {
    restoreStaticFallbackMarkup();
    document.body.dataset.renderState = "fallback";
    console.error("Render failure:", error);
  }
}

function wireCurrencySwitcher() {
  queryAll("[data-currency]").forEach((button) => {
    button.addEventListener("click", () => {
      storeCurrency(button.dataset.currency);
      safeRenderApp();
    });
  });
}

function wirePreferenceMenus() {
  const menus = queryAll("[data-preference-menu]");
  if (preferenceDismissHandler) {
    document.removeEventListener("pointerdown", preferenceDismissHandler);
    preferenceDismissHandler = null;
  }
  if (!menus.length) return;

  menus.forEach((menu) => {
    bindOnce(menu, "boundPreferenceEscape", "keydown", (event) => {
      if (event.key !== "Escape") return;
      menu.open = false;
      const summary = menu.querySelector("summary");
      if (summary) summary.focus();
    });
    const closeButton = menu.querySelector("[data-preference-close]");
    if (closeButton) {
      bindOnce(closeButton, "boundPreferenceClose", "click", () => {
        menu.open = false;
        const summary = menu.querySelector("summary");
        if (summary) summary.focus();
      });
    }
  });

  preferenceDismissHandler = (event) => {
    menus.forEach((menu) => {
      if (menu.open && !menu.contains(event.target)) menu.open = false;
    });
  };
  document.addEventListener("pointerdown", preferenceDismissHandler);
}

function wireImageFallbacks() {
  queryAll("[data-image-fallback]").forEach((image) => {
    const markUnavailable = () => {
      const frame = image.closest("[data-image-frame]");
      if (frame) frame.classList.add("image-unavailable");
    };
    bindOnce(image, "boundImageFallback", "error", markUnavailable);
    if (image.complete && image.naturalWidth === 0) markUnavailable();
  });
}

function wireChecklistBoard() {
  queryAll("[data-checklist-id]").forEach((input) => {
    bindOnce(input, "boundChecklist", "change", () => {
      const checked = input.checked;
      setChecklistItem(input.dataset.checklistId, checked);
      const checklistItem = input.closest(".checklist-item");
      if (checklistItem) checklistItem.classList.toggle("checked", checked);
    });
  });
}

function wireHomeTabs() {
  if ((document.body.dataset.page || "home") !== "home") {
    if (homeHashChangeHandler) {
      window.removeEventListener("hashchange", homeHashChangeHandler);
      homeHashChangeHandler = null;
    }
    return;
  }
  const tabs = queryAll("[data-home-tab]");
  const panels = queryAll("[data-home-panel]");
  const tabJumps = queryAll("[data-home-tab-jump]");
  if (!tabs.length || !panels.length) return;

  const shouldAutoScrollPanels = () => window.matchMedia("(max-width: 820px)").matches;

  const setActive = (id, updateHash = true, scrollIntoPanels = true) => {
    const nextId = HOME_TAB_IDS.has(id) ? id : HOME_DEFAULT_TAB;
    tabs.forEach((tab) => {
      const active = tab.dataset.homeTab === nextId;
      tab.classList.toggle("active", active);
      tab.setAttribute("aria-selected", active ? "true" : "false");
      tab.tabIndex = active ? 0 : -1;
      if (active) {
        tab.setAttribute("aria-current", "page");
        if (shouldAutoScrollPanels()) {
          tab.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
        }
      } else {
        tab.removeAttribute("aria-current");
      }
    });
    panels.forEach((panel) => {
      const active = panel.dataset.homePanel === nextId;
      panel.hidden = !active;
      panel.classList.toggle("active", active);
      panel.setAttribute("aria-hidden", active ? "false" : "true");
    });
    if (updateHash) {
      history.replaceState(null, "", `#${nextId}`);
    }
    if (scrollIntoPanels && shouldAutoScrollPanels()) {
      const homePanels = document.querySelector(".home-tab-panels");
      if (homePanels) homePanels.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  tabs.forEach((tab) => {
    bindOnce(tab, "boundHomeTab", "click", (event) => {
      event.preventDefault();
      setActive(tab.dataset.homeTab);
    });
    bindOnce(tab, "boundHomeTabKeys", "keydown", (event) => {
      const currentIndex = tabs.indexOf(tab);
      let nextIndex = currentIndex;
      if (event.key === "ArrowRight") nextIndex = (currentIndex + 1) % tabs.length;
      else if (event.key === "ArrowLeft") nextIndex = (currentIndex - 1 + tabs.length) % tabs.length;
      else if (event.key === "Home") nextIndex = 0;
      else if (event.key === "End") nextIndex = tabs.length - 1;
      else return;
      event.preventDefault();
      tabs[nextIndex].focus();
      setActive(tabs[nextIndex].dataset.homeTab);
    });
  });

  tabJumps.forEach((link) => {
    bindOnce(link, "boundHomeTabJump", "click", (event) => {
      const target = link.dataset.homeTabJump;
      if (!target) return;
      event.preventDefault();
      setActive(target);
    });
  });

  const syncFromHash = () => {
    const hash = hashValue(window.location.hash);
    setActive(HOME_TAB_IDS.has(hash) ? hash : HOME_DEFAULT_TAB, false, false);
  };

  syncFromHash();
  if (homeHashChangeHandler) {
    window.removeEventListener("hashchange", homeHashChangeHandler);
  }
  homeHashChangeHandler = syncFromHash;
  window.addEventListener("hashchange", homeHashChangeHandler);
}

function wireDesktopAnchors() {
  desktopAnchorObservers = disconnectObservers(desktopAnchorObservers);
  const groups = [
    { selector: "[data-desktop-anchor]", key: "desktopAnchor" },
    { selector: "[data-page-anchor]", key: "pageAnchor" }
  ];

  groups.forEach(({ selector, key }) => {
    const links = queryAll(selector);
    if (!links.length) return;

    const setActive = (id) => toggleActiveLinkSet(links, id, (link) => link.dataset[key]);

    links.forEach((link) => {
      bindOnce(link, `bound${key[0].toUpperCase()}${key.slice(1)}`, "click", () => {
        setActive(link.dataset[key]);
      });
    });

    const sections = links
      .map((link) => document.getElementById(link.dataset[key]))
      .filter(Boolean);

    if (!sections.length) return;

    const observer = observeMostVisibleSection(sections, setActive, {
      rootMargin: "-18% 0px -58% 0px",
      threshold: [0.2, 0.45, 0.7]
    });

    if (observer) desktopAnchorObservers.push(observer);
    setActive(sections[0].id);
  });
}

function wireMap() {
  const frame = document.getElementById("travelMapFrame");
  if (!frame) return;
  const buttons = queryAll(".map-location-button");
  buttons.forEach((button) => {
    bindOnce(button, "boundMapButton", "click", () => {
      buttons.forEach((item) => {
        item.classList.remove("active");
        item.setAttribute("aria-pressed", "false");
      });
      button.classList.add("active");
      button.setAttribute("aria-pressed", "true");
      frame.src = mapEmbedUrl(button.dataset.mapQuery);
    });
  });
}

function updateProgress() {
  const progress = document.getElementById("progress");
  if (!progress) return;
  const height = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.width = `${height > 0 ? (window.scrollY / height) * 100 : 0}%`;
}

function wireBackToTop() {
  const button = document.getElementById("backToTop");
  if (!button) return;
  button.textContent = "↑";
  button.setAttribute("aria-label", state.lang !== "zh" ? "Back to top" : "回到上方");
  bindOnce(button, "boundBackToTop", "click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}

function openHashTarget(hash) {
  const targetId = hashValue(hash);
  if (!targetId) return;
  const target = document.getElementById(targetId);
  if (!target) return;
  const details = target.querySelector("details");
  if (details) details.setAttribute("open", "open");
}

function wireHashDrivenSections() {
  openHashTarget(window.location.hash);
  if (document.body.dataset.hashBound) return;
  document.body.dataset.hashBound = "true";
  window.addEventListener("hashchange", () => {
    openHashTarget(window.location.hash);
  });
}

function updateItineraryProgressPanels(activeId) {
  const snapshot = getItineraryProgressSnapshot(activeId);
  const activeGuide = dailyGuideLookup.get(snapshot.activeDay.id);
  queryAll("[data-itinerary-progress]").forEach((panel) => {
    const dayNode = panel.querySelector("[data-progress-day]");
    const cityNode = panel.querySelector("[data-progress-city]");
    const nextNode = panel.querySelector("[data-progress-next]");
    const fillNode = panel.querySelector("[data-progress-fill]");
    if (dayNode) dayNode.textContent = `${activeGuide ? activeGuide.day : snapshot.activeDay.id} / ${snapshot.total}`;
    if (cityNode) cityNode.textContent = t(snapshot.activeDay.progressCity);
    if (nextNode) nextNode.textContent = snapshot.nextMove;
    if (fillNode) fillNode.style.width = `${snapshot.progress}%`;
  });
}

function updateItineraryJumpState(activeId) {
  const day = itineraryDayLookup.get(activeId);
  const activeGroup = day && day.categories
    ? ["airport", "paris", "london", "manchester", "aib", "flights"].find((group) => day.categories.includes(group)) || "all"
    : "all";
  toggleActiveLinkSet(queryAll("[data-journey-jump]"), activeGroup, (link) => link.dataset.journeyJump || "");
}

function wireDayGuideNav() {
  if (dayGuideObserver) {
    dayGuideObserver.disconnect();
    dayGuideObserver = null;
  }
  const links = queryAll("[data-day-target]");
  if (!links.length) return;

  const setActive = (id) => {
    toggleActiveLinkSet(links, id, (link) => getLinkTargetId(link, "dayTarget"));
    updateItineraryProgressPanels(id);
    updateItineraryJumpState(id);
  };

  links.forEach((link) => {
    bindOnce(link, "boundDayGuide", "click", () => {
      const id = getLinkTargetId(link, "dayTarget");
      if (id) setActive(id);
    });
  });

  const sections = links
    .map((link) => getLinkTargetId(link, "dayTarget"))
    .map((targetId) => targetId ? document.getElementById(targetId) : null)
    .filter(Boolean);

  const hashId = hashValue(window.location.hash);
  if (hashId && document.getElementById(hashId)) setActive(hashId);
  else if (sections[0] && sections[0].id) setActive(sections[0].id);

  const observer = observeMostVisibleSection(sections, setActive, {
    rootMargin: "-22% 0px -58% 0px",
    threshold: [0.15, 0.35, 0.6]
  });

  dayGuideObserver = observer;
}

function copyTextToClipboard(text) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    return navigator.clipboard.writeText(text);
  }

  return new Promise((resolve, reject) => {
    try {
      const textarea = document.createElement("textarea");
      textarea.value = text;
      textarea.setAttribute("readonly", "readonly");
      textarea.style.position = "absolute";
      textarea.style.left = "-9999px";
      document.body.appendChild(textarea);
      textarea.select();
      const copied = document.execCommand("copy");
      document.body.removeChild(textarea);
      if (!copied) throw new Error("Copy command failed.");
      resolve();
    } catch (error) {
      reject(error);
    }
  });
}

function wireCopyButtons() {
  queryAll("[data-copy-text]").forEach((button) => {
    bindOnce(button, "boundCopyText", "click", async () => {
      const originalText = button.textContent;
      try {
        await copyTextToClipboard(button.dataset.copyText || "");
        button.textContent = button.dataset.copySuccess || (state.lang !== "zh" ? "Copied" : "已複製");
      } catch (error) {
        console.error("Copy failed:", error);
        button.textContent = state.lang !== "zh" ? "Copy failed" : "複製失敗";
      }

      window.setTimeout(() => {
        button.textContent = originalText;
      }, 1200);
    });
  });
}

window.addEventListener("scroll", () => {
  updateProgress();
  const backToTop = document.getElementById("backToTop");
  if (backToTop) backToTop.classList.toggle("visible", window.scrollY > 500);
}, { passive: true });

document.addEventListener("click", (event) => {
  if (event.defaultPrevented) return;
  const link = event.target.closest('a[href^="#"]');
  if (!link || link.matches("[data-home-tab], [data-home-tab-jump]")) return;
  const target = document.querySelector(link.getAttribute("href"));
  if (!target) return;
  event.preventDefault();
  const details = target.querySelector("details");
  if (details) details.setAttribute("open", "open");
  history.replaceState(null, "", link.getAttribute("href"));
  target.scrollIntoView({ behavior: "smooth", block: "start" });
});

safeRenderApp();
