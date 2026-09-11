const handbookData = window.HandbookData;

if (!handbookData) {
  const content = document.getElementById("page-content");
  if (content) {
    const fallback = document.createElement("section");
    fallback.className = "section compact-section render-fallback";
    const title = document.createElement("h1");
    title.textContent = "AIB 2026 Manchester";
    const message = document.createElement("p");
    message.textContent = "行程資料暫時沒有載入。請重新整理頁面，或先回到旅程總覽。";
    const link = document.createElement("a");
    link.className = "button primary";
    link.href = "./index.html";
    link.textContent = "回到旅程總覽";
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
    openStatus: "查看發表與待確認事項",
    conferencePlan: "查看 AIB 會議",
    currentCard: "目前查看",
    translationCoverage: "中文內容最完整；英文、法文與德文模式會翻譯主要介面，詳細行程必要時保留英文。"
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
    openStatus: "View sessions and open items",
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
    openStatus: "Voir les sessions et les points à confirmer",
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
    openStatus: "Vorträge und offene Punkte ansehen",
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
        zh: "Manchester、London、Pullman 與 Novotel CDG 已確認；還要確認 Eurostar 與 7/10 離開 Pullman 的時間。",
        en: "Manchester, London, Pullman, and Novotel CDG are confirmed; Eurostar and the 10 July Pullman departure time still need checking.",
        fr: "Manchester, Londres, le Pullman et le Novotel CDG sont confirmés; il reste à vérifier l’Eurostar et l’heure de départ du Pullman le 10 juillet.",
        de: "Manchester, London, Pullman und Novotel CDG sind bestätigt; Eurostar und die Abfahrtszeit vom Pullman am 10. Juli sind noch zu prüfen."
      }))}</p>
    `;
    return `
      <div class="editorial-hero mobile-dashboard-hero handbook-home-hero hero-content hero-home-shell">
        <section class="hero-home-main">
          <p class="eyebrow">${escapeHtml(t({ zh: "學術會議旅程手冊", en: "Academic conference travel handbook", fr: "Carnet de voyage académique", de: "Akademisches Reisehandbuch" }))}</p>
          <h1>AIB 2026 Manchester</h1>
          <div class="hero-subtitle">${escapeHtml(t({ zh: "德英法之旅手冊", en: "Germany · UK · France", fr: "Allemagne · Royaume-Uni · France", de: "Deutschland · Großbritannien · Frankreich" }))}</div>
          <div class="hero-dates">2026 / 06 / 29 – 2026 / 07 / 12</div>
          <div class="destinations">${escapeHtml(t({ zh: "法蘭克福 • 曼徹斯特 • 倫敦 • 巴黎", en: "Frankfurt • Manchester • London • Paris", fr: "Francfort • Manchester • Londres • Paris", de: "Frankfurt • Manchester • London • Paris" }))}</div>
          <p class="hero-intro">${escapeHtml(t({
            zh: "先在法蘭克福短暫轉機，再到曼徹斯特參加 AIB。會議結束後接倫敦與巴黎。",
            en: "A short Frankfurt stop comes first, followed by AIB in Manchester, then London and Paris.",
            fr: "Une courte escale à Francfort ouvre le voyage, avant l’AIB à Manchester, puis Londres et Paris.",
            de: "Nach einem kurzen Stopp in Frankfurt geht es zur AIB nach Manchester und danach weiter nach London und Paris."
          }))}</p>
          <p class="hero-serif-note">${escapeHtml(t({
            zh: "兩場發表都已確認。發表日不另外排遠程行程。",
            en: "Both presentations are confirmed. Keep presentation days free of distant plans.",
            fr: "Les deux présentations sont confirmées. Aucun trajet lointain les jours de présentation.",
            de: "Beide Vorträge sind bestätigt. An den Vortragstagen keine weiten Wege einplanen."
          }))}</p>
          <div class="hero-actions editorial-hero-actions">
            <a class="button primary hero-action-primary" href="#itinerary" data-home-tab-jump="itinerary">${escapeHtml(t({ zh: "打開每日行程", en: "Open daily itinerary", fr: "Ouvrir l’itinéraire", de: "Tagesplan öffnen" }))}</a>
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
      ${renderHandbookSummaryRow(state.lang !== "zh" ? "Conference" : "會議主段", "AIB 2026 Manchester · 6/30–7/3")}
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
        state.lang !== "zh" ? "The whole route, before the daily details." : "先把整段路線看懂。",
        state.lang !== "zh"
          ? "AIB comes first. London and Paris follow once the conference is complete."
          : "前段先顧 AIB，會議結束後再接倫敦與巴黎。"
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
        state.lang !== "zh" ? "Read the route once before opening the details." : "先順著日期看一遍就好。",
        state.lang !== "zh" ? "Frankfurt first, then Manchester, then London, then Paris." : "法蘭克福先轉一下，再進曼徹斯特，後面才是倫敦和巴黎。"
      )}
      <div class="snapshot-timeline handbook-home-timeline">
        ${homeJourneyTimeline.map(renderHandbookTimelineEntry).join("")}
      </div>
    </section>
    <section class="home-tab-panel-block overview-conference-strip">
      <article class="overview-editorial-block">
        <span class="editorial-note-label">${state.lang !== "zh" ? "AIB 2026" : "AIB 2026"}</span>
        <h3>${state.lang !== "zh" ? "Keep Manchester for AIB." : "曼徹斯特先留給 AIB。"}</h3>
        <p>${state.lang !== "zh" ? "Both sessions are confirmed, so Manchester can stay simple around the conference." : "兩場發表都已確認，所以曼徹斯特這幾天就圍著會議走。"} </p>
        <div class="meta-row">
          <div class="meta-pill"><span>${escapeHtml(t(conferenceSessions.competitive.label))}</span><strong>${escapeHtml(t(conferenceSessions.competitive.dateLabel))} · ${escapeHtml(conferenceSessions.competitive.time.replace("-", "–"))} · ${escapeHtml(conferenceSessions.competitive.room.replace(" (AMBS)", ""))}</strong></div>
          <div class="meta-pill"><span>${escapeHtml(t(conferenceSessions.interactive.label))}</span><strong>${escapeHtml(t(conferenceSessions.interactive.dateLabel))} · ${escapeHtml(conferenceSessions.interactive.time.replace("-", "–"))} · ${escapeHtml(conferenceSessions.interactive.room.replace(" (UP)", ""))}</strong></div>
        </div>
      </article>
    </section>
    <section class="home-tab-panel-block">
      ${renderHomeSectionIntro(
        state.lang !== "zh" ? "Paris" : "巴黎",
        state.lang !== "zh" ? "Keep the Paris days together." : "巴黎這幾天放一起看。",
        state.lang !== "zh" ? "Pullman, the tower, the Louvre, and the Right Bank are the main pieces." : "Pullman、鐵塔、羅浮宮和右岸放一起看就夠了。"
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
      <div class="day-note"><strong>${state.lang !== "zh" ? "Keep in mind" : "先記這件事"}</strong><span>${escapeHtml(t(frame.note || (guide.notes && guide.notes[0]) || ""))}</span></div>
      ${renderConferenceSpotlight(card.conferenceSpotlight)}
      <div class="day-route-summary">
        <span>${state.lang !== "zh" ? "Route" : "今天路線"}</span>
        <p>${guide.highlights.map((item) => escapeHtml(item)).join(" → ")}</p>
      </div>
      <div class="day-timeline-block">
        <div class="day-flow-head">
          <span class="section-label">${state.lang !== "zh" ? "Timeline" : "今日時間軸"}</span>
          <h3>${state.lang !== "zh" ? "Keep the day in this order." : "照這個順序走，旅途會比較順。"}</h3>
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
        state.lang !== "zh" ? "Each stay solves a different part of the route." : "每一段住宿都只是把路接順。",
        state.lang !== "zh" ? "Manchester stays with AIB, London stays by Westminster, Paris stays at Pullman, and the last night moves to CDG." : "曼徹斯特先顧 AIB，倫敦住 Westminster，巴黎住 Pullman，最後一晚再轉去 CDG。"
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
            { label: state.lang !== "zh" ? "Role" : "角色", value: state.lang !== "zh" ? "Conference base" : "會議期間據點" },
            { label: state.lang !== "zh" ? "Cost" : "費用", value: "GBP 900.90" }
          ])}
        </article>
        <article class="hotel-ledger-entry">
          <div class="hotel-ledger-head">
            <span class="section-label">${state.lang !== "zh" ? "London stay" : "倫敦住宿"}</span>
            <h3>Riu Plaza London The Westminster</h3>
          </div>
          <p>${state.lang !== "zh" ? "This one is fixed now. Stay near Westminster and keep 7 July simple for St Pancras." : "倫敦這幾晚現在定了。住 Westminster，7/7 去 St Pancras 也比較省事。"} </p>
          ${renderMetaRow([
            { label: state.lang !== "zh" ? "Stay" : "入住", value: "2026/07/04 – 2026/07/07" },
            { label: state.lang !== "zh" ? "Role" : "角色", value: state.lang !== "zh" ? "Westminster base" : "倫敦這幾晚的固定住宿" },
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
            { label: state.lang !== "zh" ? "Role" : "角色", value: state.lang !== "zh" ? "Paris stay" : "巴黎這幾晚的主住宿" },
            { label: state.lang !== "zh" ? "Cost" : "費用", value: "EUR 1,915.58 / NT$70,243" }
          ])}
          <div class="hotel-feature-note">${state.lang !== "zh" ? "If the room sees the tower, there is no need to keep heading back out at night." : "如果房間看得到鐵塔，晚上就不用一直往外跑。"} </div>
        </article>
        <article class="hotel-ledger-entry">
          <div class="hotel-ledger-head">
            <span class="section-label">${state.lang !== "zh" ? "Departure eve" : "回程前一晚"}</span>
            <h3>${state.lang !== "zh" ? "Novotel Paris Charles-de-Gaulle Airport" : "巴黎戴高樂機場候機樓諾富特酒店"}</h3>
          </div>
          <p>${state.lang !== "zh" ? "10 Jul to 11 Jul · Roissypole RER. This one is just there to make the airport morning easier." : "7/10–7/11，位在 Roissypole RER 旁。這晚就是讓隔天進機場輕鬆一點。"} </p>
          ${renderMetaRow([
            { label: state.lang !== "zh" ? "Stay" : "入住", value: "2026/07/10 – 2026/07/11" },
            { label: state.lang !== "zh" ? "Role" : "角色", value: state.lang !== "zh" ? "Airport handoff stay" : "回程前一晚機場據點" },
            { label: state.lang !== "zh" ? "Cost" : "費用", value: "NT$7,034" }
          ])}
        </article>
      </div>
      <a class="text-link-button" href="./stay.html">${state.lang !== "zh" ? "Open the full stay notes" : "查看完整住宿頁"}</a>
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
        state.lang !== "zh" ? "Keep the links you actually need in one place." : "把真的會用到的連結放一起。",
        state.lang !== "zh" ? "Conference, hotels, trains, and maps stay grouped here." : "會議、住宿、交通、地圖都收在這裡。"
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
        state.lang !== "zh" ? "Keep the whole flight chain in one place." : "先把整段機票看成一條線。",
        state.lang !== "zh" ? "Look at the main China Airlines ticket first, then the Paris-to-Manchester segment." : "先看華航主票四段，再看巴黎回曼徹斯特那段。"
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
        state.lang !== "zh" ? "Conference notes, movement, and the practical stuff." : "把會議、移動和提醒放一起。",
        state.lang !== "zh" ? "This page keeps only the things worth checking again on the road." : "這一頁只放路上真的會回頭看的事。"
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
          <p>${state.lang !== "zh" ? "Frankfurt is the longer layover, Heathrow is the tighter one. Manchester to London goes by rail, and London to Paris works best by Eurostar if you give St Pancras a little extra time." : "法蘭克福是長轉機，希斯洛比較緊；曼徹斯特到倫敦搭火車最單純，倫敦到巴黎就把 Eurostar 的到站時間抓寬一點。"} </p>
        </section>
        <section class="info-ledger-block">
          <span class="section-label">${state.lang !== "zh" ? "Packing and safety" : "行李與安全"}</span>
          <p>${state.lang !== "zh" ? "Bring a Type G adapter, keep ETA and passport copies offline, and do not leave your phone hanging outward in London or Paris." : "英國段記得 Type G 轉接頭，ETA 和護照資料留離線版本；倫敦和巴黎人多的地方，手機不要一直拿在外側。"} </p>
        </section>
        <section class="info-ledger-block">
          <span class="section-label">${state.lang !== "zh" ? "Weather and dressing" : "天氣與穿搭"}</span>
          <p>${state.lang !== "zh" ? "Light layers should be enough: conference clothes for Manchester, easy walking clothes for London and Paris." : "這趟以輕薄層次為主就好：曼徹斯特放正式一點的會議穿著，倫敦和巴黎記得好走的鞋。"} </p>
        </section>
        <section class="info-ledger-block">
          <span class="section-label">${state.lang !== "zh" ? "Phone and data" : "eSIM 與連線"}</span>
          <p>${state.lang !== "zh" ? "The Europe eSIM is already purchased. Install it before departure, switch it on after landing, and leave your main number active for SMS and banking codes." : "歐洲 eSIM 已經買了。先在台灣裝好，落地再開；原本門號留著收簡訊、銀行驗證碼和臨時聯絡就好。"} </p>
        </section>
        <section class="info-ledger-block">
          <span class="section-label">${state.lang !== "zh" ? "CDG morning" : "CDG 早上怎麼抓"}</span>
          <p>${state.lang !== "zh" ? "On 11 July, even with the Novotel CDG overnight, do not cut it too close. If you plan to validate a tax refund, aim for Terminal 2E around 09:00; otherwise around 09:30 is still more comfortable." : "7/11 就算前一晚住在 Novotel CDG，也不要壓線。這天如果要辦退稅，建議 09:00 左右就進 2E；不辦退稅也抓 09:30 左右比較穩。"} </p>
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
        state.lang !== "zh" ? "Keep claims and self-funded costs separate." : "把能報的和自費的分開放。",
        state.lang !== "zh" ? "This page is only for checking numbers." : "真的要對數字時，再看這頁就好。"
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
        state.lang !== "zh" ? "Keep entry notes in one place." : "把入境、文件和保險提醒放一起。",
        state.lang !== "zh" ? "Start with the UK, then keep the France notes nearby." : "這趟會先進英國，再往法國。這裡只留真的要記住的事。"
      )}
      <div class="visa-ledger">
        <article class="visa-ledger-entry">
          <h3>${state.lang !== "zh" ? "United Kingdom" : "英國"}</h3>
          <p>${state.lang !== "zh" ? "Keep passport, ETA, conference letter, return flight, and the first hotel booking ready offline." : "護照、ETA 核准紀錄、會議邀請函、回程機票和第一段住宿資料，建議都留一份離線版本。"} </p>
        </article>
        <article class="visa-ledger-entry">
          <h3>${state.lang !== "zh" ? "France / Schengen" : "法國／申根"}</h3>
          <p>${state.lang !== "zh" ? "For this July 2026 Paris stay, ETIAS is not yet required; the EU says it will begin in the final quarter of 2026. Keep the hotel, Eurostar, and onward ticket details together." : "這趟 2026 年 7 月的巴黎行程還不需要 ETIAS；歐盟預計 2026 年第 4 季才啟用。住宿、Eurostar 和後續回程資料放在一起就好。"} </p>
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
        "A short English reading of the route, for quick sharing or a calmer high-level check."
      )}
      <p>The trip starts with a Frankfurt layover, settles into Manchester for the AIB 2026 conference and two confirmed presentation sessions, moves south to London for three city days, and then continues to Paris for the final museum, shopping, and Eiffel Tower chapter.</p>
      <p>Manchester is for the conference days. London stays near Westminster so the city part and the St Pancras handoff stay simple. Paris then shifts the route toward Pullman and the Eiffel Tower view.</p>
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
            state.lang !== "zh" ? "Keep each travel day clear and self-contained." : "從出發、會議到英法移動，都照日期排好。",
            state.lang !== "zh" ? "Check the day's transport and stay first, then decide how much else to fit in." : "當天先看交通和住宿，再決定要不要加行程。"
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
  itinerary: { zh: "每日旅程、巴黎主線和回程怎麼接。", en: "Daily route guide, Paris days, and the way home." },
  shopping: { zh: "茶葉、餅乾、果醬與超市購物清單。", en: "Tea, biscuits, preserves, and useful shopping notes." },
  souvenirs: { zh: "英國、法國、德國伴手禮整理。", en: "Souvenir notes for the UK, France, and Germany." },
  map: { zh: "主要地點、每日路線與地圖連結。", en: "Key locations, daily routes, and map links." },
  budget: { zh: "可報帳和自費分開整理，金額也一起換算。", en: "Funding and expense notes, with four-currency amounts." },
  reminders: { zh: "出發前再看一次的提醒，還有路上容易忘的事。", en: "Final checks before departure and the things easiest to forget on the road." },
  firstTime: { zh: "這趟德英法之旅行前可先看的實用提醒。", en: "Practical notes to review before this Germany · UK · France trip." },
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
        state.lang !== "zh" ? "Keep the conference part exact." : "會議這幾天先顧好。",
        state.lang !== "zh" ? "Use this page for the parts that need to stay exact: time, room, files, and the conference days." : "這一頁只放需要很準的東西：時間、教室、文件，還有會議這幾天怎麼走。"
      )}
      <div class="summary-grid two">
        ${dashboardData.conferenceCards.map(renderSummaryCard).join("")}
      </div>
    </section>
    <section class="section compact-section" id="papers">
      ${sectionHeading(state.lang !== "zh" ? "Presentation Sessions" : "發表場次", state.lang !== "zh" ? "The two sessions are separated here for easier checking." : "兩場分開放，臨時要看比較快。")}
      <div class="paper-grid">
        ${paperCards.map(renderPaperCard).join("")}
      </div>
    </section>
    <section class="section compact-section" id="alerts">
      ${sectionHeading(
        state.lang !== "zh" ? "Academic Notes" : "會議提醒",
        state.lang !== "zh" ? "Timing, files, and what not to forget" : "把時間、文件和別忘記的事放一起",
        state.lang !== "zh" ? "Check this once before the conference starts, then again the night before each presentation." : "會前看一次，發表前一晚再回來看一次就好。"
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
        state.lang !== "zh" ? "Keep the walk simple on conference days." : "會議日就照最簡單的路走。",
        state.lang !== "zh" ? "Both venues are walkable from INNSiDE. Leave a little extra time the first day, and a little more on the early-morning interactive day." : "兩場都可以直接從 INNSiDE 步行過去。第一次走抓寬一點；7/3 那場早上 09:30 開始，再多留一點時間。"
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
          <p>${state.lang !== "zh" ? "From First Street, keep heading toward Booth Street West and AMBS. It is a short walk, so there is no need to overcomplicate the route." : "從 First Street 往 Booth Street West 那一側走就好。這段不遠，不用另外繞車站或搭車。"} </p>
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
          <p>${state.lang !== "zh" ? "This morning starts earlier, so keep breakfast and the walk straightforward. Heading through the Oxford Road side is the most direct way." : "這天比較早，早餐和出門動線都先抓簡單。沿 Oxford Road 那一帶走過去最直接。"} </p>
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
        state.lang !== "zh" ? "Read the route as one line." : "先把整趟移動看成一條線。",
        state.lang !== "zh" ? "Flight details stay on the flight page. This page keeps the route itself together." : "航班細節留在機票頁，這裡只管整條移動線。"
      )}
      <div class="summary-grid two">
        <article class="summary-card">
          ${statusChip("confirmed")}
          <h3>${state.lang !== "zh" ? "Dedicated flight page" : "獨立機票頁"}</h3>
          <strong>${state.lang !== "zh" ? "Outbound, return, and Europe segment" : "去程、回程與歐洲段一起看"}</strong>
          <p>${state.lang !== "zh" ? "Use that page for flight numbers, terminals, and transfer timing." : "如果要核對航班號碼、航廈和轉機時間，直接看機票頁最清楚。"} </p>
          ${externalLink("./flights.html", state.lang !== "zh" ? "Open flight page" : "前往機票頁", "text-link-button")}
        </article>
        <article class="summary-card">
          ${statusChip("alert")}
          <h3>${state.lang !== "zh" ? "Keep the route in mind" : "路線先記住"}</h3>
          <strong>${state.lang !== "zh" ? "TPE → FRA → MAN · CDG → MAN → LHR → TPE" : "TPE → FRA → MAN · CDG → MAN → LHR → TPE"}</strong>
          <p>${state.lang !== "zh" ? "Even though the last city days are in London and Paris, the return still starts from Manchester." : "雖然後段會在倫敦和巴黎停留，但回程機票仍然是從曼徹斯特開始接回台灣。"} </p>
        </article>
      </div>
    </section>
    <section class="section compact-section" id="transfer">
      ${sectionHeading(
        state.lang !== "zh" ? "Transfers" : "轉機資訊",
        state.lang !== "zh" ? "Frankfurt and Heathrow are just part of the move." : "法蘭克福和希斯洛都先當成移動的一部分看就好。",
        state.lang !== "zh" ? "Use these notes for the rough flow. On the day, still follow airport screens and airline updates." : "這裡先抓大方向。出發當天還是看機場螢幕和航空公司通知。"
      )}
      <div class="transfer-grid">
        ${tripData.transfers.map(renderTransferCard).join("")}
      </div>
    </section>
    <section class="section compact-section" id="train">
      ${sectionHeading(
        state.lang !== "zh" ? "Rail & Eurostar" : "鐵路段落",
        state.lang !== "zh" ? "Keep the UK train and Eurostar in one sequence." : "把英國火車和 Eurostar 放一起看。",
        state.lang !== "zh" ? "It is easier to think of the UK train and Eurostar as one handoff." : "把曼徹斯特進倫敦，再把倫敦進巴黎接順就好。"
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
          <p>${state.lang !== "zh" ? "This is the simplest London-to-Paris move: St Pancras to Gare du Nord, city centre to city centre." : "這段最順的做法就是直接搭 Eurostar。從 St Pancras 出發，到巴黎北站時就已經在市中心。"} </p>
        </article>
        <article class="summary-card">
          ${statusChip("alert")}
          <h3>${state.lang !== "zh" ? "Before boarding at St Pancras" : "St Pancras 上車前"}</h3>
          <strong>${state.lang !== "zh" ? "Check-in and border checks happen before boarding" : "上車前就會完成報到與邊境檢查"}</strong>
          ${renderMetaRow([
            { label: state.lang !== "zh" ? "Arrival time" : "建議到站", value: state.lang !== "zh" ? "75-90 min early is comfortable" : "提早 75-90 分鐘比較安心" },
            { label: state.lang !== "zh" ? "Gate close" : "關門時間", value: state.lang !== "zh" ? "30 min before departure" : "發車前 30 分鐘關閘門" },
            { label: state.lang !== "zh" ? "Luggage" : "行李", value: state.lang !== "zh" ? "2 bags + 1 small hand bag" : "2 件行李 + 1 件小型手提" }
          ])}
          <p>${state.lang !== "zh" ? "This works more like a train plus border control. Arrive early enough so security and passport checks do not stack all at once." : "Eurostar 這段比較像搭火車加過關。提早到站會比較從容，因為安檢和護照檢查都在上車前完成。"} </p>
        </article>
      </div>
      <div class="summary-grid two">
        <article class="summary-card">
          ${statusChip("confirmed")}
          <h3>${state.lang !== "zh" ? "From Riu to St Pancras" : "Riu 去 St Pancras 怎麼抓"}</h3>
          <strong>${state.lang !== "zh" ? "Leave from Westminster with time in hand" : "從 Westminster 出發，時間抓寬一點"}</strong>
          ${renderMetaRow([
            { label: state.lang !== "zh" ? "Base" : "出發點", value: "Riu Plaza London The Westminster" },
            { label: state.lang !== "zh" ? "Best option" : "建議方式", value: state.lang !== "zh" ? "Taxi or Tube with one easy transfer" : "計程車或搭 Tube，簡單轉一次就好" },
            { label: state.lang !== "zh" ? "Buffer" : "抓寬", value: state.lang !== "zh" ? "Aim to arrive 75-90 min before departure" : "目標是發車前 75–90 分鐘到站" }
          ])}
          <p>${state.lang !== "zh" ? "From Riu, keep this move simple. Big bags mean taxi. If you take the Tube, leave enough time so the station and checks do not all pile up." : "從 Riu 去 St Pancras，不用抓得太極限。帶大件行李就直接叫車；如果搭 Tube，也先把時間抓寬。"} </p>
        </article>
        <article class="summary-card">
          ${statusChip("confirmed")}
          <h3>${state.lang !== "zh" ? "Pullman to Novotel CDG" : "Pullman 去 CDG Novotel 怎麼走"}</h3>
          <strong>${state.lang !== "zh" ? "With luggage, direct is easier" : "帶著行李時，直接一點最省力"}</strong>
          ${renderMetaRow([
            { label: state.lang !== "zh" ? "Easiest" : "最輕鬆", value: state.lang !== "zh" ? "Taxi / ride-hailing car" : "計程車 / 叫車" },
            { label: state.lang !== "zh" ? "Cheaper" : "省一點", value: state.lang !== "zh" ? "RER to Roissypole" : "RER 進 Roissypole" },
            { label: state.lang !== "zh" ? "Use case" : "適合情況", value: state.lang !== "zh" ? "After Pullman luggage pickup" : "回 Pullman 拿行李之後" }
          ])}
          <p>${state.lang !== "zh" ? "On 10 July, finish the city first, go back to Pullman for the bags, then move straight to Novotel CDG. With luggage, a direct car is easiest." : "7/10 這天先走完市區，再回 Pullman 拿寄放行李，之後直接轉去 Novotel CDG。帶著行李時，直接叫車最省事。"} </p>
        </article>
      </div>
    </section>
    <section class="section compact-section" id="airport">
      ${sectionHeading(
        state.lang !== "zh" ? "Airport and tax refund" : "機場與退稅",
        state.lang !== "zh" ? "Use this for the 11 July airport flow." : "7/11 這天就看這一段。",
        state.lang !== "zh" ? "The key is simple: do not cut CDG too close, and handle the tax refund before checked baggage if you need it." : "重點很簡單：CDG 不要壓線；如果要辦退稅，就先辦退稅，再托運行李。"
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
            { label: state.lang !== "zh" ? "No refund" : "不退稅", value: state.lang !== "zh" ? "around 09:30 still feels safer" : "09:30 左右也比較穩" }
          ])}
          <p>${state.lang !== "zh" ? "The e-ticket says latest check-in 11:50, but this is not the day to test that limit. Even with the Novotel airport stay, leave room for tax refund, bag drop, and any summer queue." : "電子機票上寫的最晚報到是 11:50，但這天不建議去試那個極限。就算前一晚住在 Novotel 機場飯店，也先把退稅、托運和暑假排隊時間都算進去。"} </p>
        </article>
        <article class="summary-card">
          ${statusChip("confirmed")}
          <h3>${state.lang !== "zh" ? "Novotel CDG to Terminal 2E" : "Novotel CDG 去 2E 怎麼走"}</h3>
          <strong>${state.lang !== "zh" ? "The route is simple, but do not hurry it" : "這段不難，但也不用壓時間"}</strong>
          ${renderMetaRow([
            { label: state.lang !== "zh" ? "Base" : "出發點", value: "Novotel Paris Charles-de-Gaulle Airport" },
            { label: state.lang !== "zh" ? "Direction" : "方式", value: state.lang !== "zh" ? "follow the airport connection / Roissypole flow" : "照機場接駁 / Roissypole 指標走" },
            { label: state.lang !== "zh" ? "Buffer" : "緩衝", value: state.lang !== "zh" ? "keep 20-30 min door to terminal" : "抓 20–30 分鐘進航廈" }
          ])}
          <p>${state.lang !== "zh" ? "Because you are already sleeping at the airport, the hard part is done. Just keep the morning light, move into the terminal calmly, and leave room for queues." : "前一晚已經住到機場邊，最麻煩的長距離移動其實已經省掉了。早上就輕鬆進航廈，把時間留給排隊和手續。"} </p>
        </article>
      </div>
    </section>
    <section class="section compact-section" id="local">
      ${sectionHeading(
        state.lang !== "zh" ? "City movement" : "城市內移動",
        state.lang !== "zh" ? "Only keep the local network details you will actually use." : "市內交通只看真的會用到的部分。",
        state.lang !== "zh" ? "This section keeps only the practical pieces: which system to use, how to pay, and what kind of route is simplest." : "這一區只保留最實際的部分：搭什麼、怎麼付、哪種動線最省力。"
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
    note: { zh: "去程、回程、巴黎回曼徹斯特，以及兩段轉機都收在這裡。", en: "Outbound, return, the Paris-to-Manchester segment, and both transfer notes stay together here." },
    meta: [
      { label: { zh: "主路線", en: "Main route" }, value: "TPE → FRA → MAN" },
      { label: { zh: "回程", en: "Return" }, value: "CDG → MAN → LHR → TPE" },
      { label: { zh: "長轉機", en: "Long layover" }, value: { zh: "法蘭克福", en: "Frankfurt" } },
      { label: { zh: "票價", en: "Flight total" }, value: money.flight }
    ]
  }, `
    ${renderQuickNav("flights")}
    <section class="section compact-section" id="overview">
      ${sectionHeading(state.lang !== "zh" ? "Flight Overview" : "航班總覽", state.lang !== "zh" ? "The whole route in one view" : "先看主票四段，再看加購段", state.lang !== "zh" ? "This page keeps the long-haul tickets and the Europe segment together so the route is easier to follow." : "華航主票是四段：CI 0061、LH 0946、BA 1371、CI 0082。巴黎回曼徹斯特的 AF 1068 再另外放在一起看。")}
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
                : "公開頁面只放旅程上真的會用到的資訊。定位編號、票號、證件資訊、QR code 和座位號都留在私人檔案，不放上網。"
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
      note: { zh: "會議這幾天先住穩。", en: "Keep the conference days steady here." }
    },
    {
      city: { zh: "London", en: "London" },
      hotel: { zh: "Riu Plaza London The Westminster", en: "Riu Plaza London The Westminster" },
      dates: { zh: "7/4 – 7/7｜3 晚", en: "4 Jul – 7 Jul · 3 nights" },
      status: "confirmed",
      note: { zh: "倫敦這幾晚就先住 Westminster。", en: "The London chapter is fixed in Westminster." }
    },
    {
      city: { zh: "Paris", en: "Paris" },
      hotel: parisStay.title,
      dates: { zh: "7/7 – 7/10｜3 晚", en: "7 Jul – 10 Jul · 3 nights" },
      status: "confirmed",
      note: { zh: "這幾晚就住 Pullman，看鐵塔就好。", en: "Stay here for the last Paris nights and keep the tower close." }
    },
    {
      city: { zh: "CDG Airport", en: "CDG Airport" },
      hotel: { zh: "Novotel Paris CDG Airport", en: "Novotel Paris CDG Airport" },
      dates: { zh: "7/10 – 7/11｜1 晚", en: "10 Jul – 11 Jul · 1 night" },
      status: "confirmed",
      note: { zh: "把隔天去 2E 的路先接順。", en: "Makes the morning route to 2E easier." }
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
    { label: state.lang !== "zh" ? "Per person" : "每人約", value: money.hotelPerPersonTotal, note: state.lang !== "zh" ? "The personal share before local visitor charge." : "住宿分攤先看這一格，旅遊稅另計。" },
    { label: state.lang !== "zh" ? "Average per night" : "平均每晚", value: money.hotelPerNight, note: state.lang !== "zh" ? "Useful later when comparing London." : "後面比倫敦住宿時，這個數字比較直覺。" },
    { label: state.lang !== "zh" ? "Visitor charge" : "旅遊稅", value: money.visitorCharge, note: state.lang !== "zh" ? "Paid locally at the hotel." : "現場支付；兩人合計約這個數字。" }
  ];
  const londonSummary = [
    { label: state.lang !== "zh" ? "Stay dates" : "入住日期", value: state.lang !== "zh" ? "4 Jul – 7 Jul 2026" : "2026/07/04 – 2026/07/07" },
    { label: state.lang !== "zh" ? "Nights" : "晚數", value: state.lang !== "zh" ? "3 nights" : "3 晚" },
    { label: state.lang !== "zh" ? "Role" : "角色", value: state.lang !== "zh" ? "Westminster base before Paris" : "去巴黎前的倫敦固定住宿" },
    { label: state.lang !== "zh" ? "Booking total" : "總價", value: money.londonHotel, note: state.lang !== "zh" ? `Average per night: ${money.londonHotelPerNight}` : `平均每晚約 ${money.londonHotelPerNight}` }
  ];
  const londonInfoItems = [
    { label: state.lang !== "zh" ? "Hotel" : "飯店", value: "Riu Plaza London The Westminster" },
    { label: state.lang !== "zh" ? "Area" : "區域", value: state.lang !== "zh" ? "Westminster / Victoria side" : "Westminster / Victoria 一帶" },
    { label: state.lang !== "zh" ? "Why here" : "為什麼住這裡", value: state.lang !== "zh" ? "Works well for Westminster, Covent Garden, and the later St Pancras move." : "Westminster、Covent Garden 和後面去 St Pancras 的動線都比較好接。" },
    { label: state.lang !== "zh" ? "Proof" : "憑證", value: state.lang !== "zh" ? "Booking confirmed, payment saved" : "訂房已確認，付款紀錄已留存" }
  ];
  const londonAreaChips = ["Westminster", "Victoria", "St James's", "Covent Garden", "St Pancras"];
  const overlapOptions = [
    {
      title: { zh: "保留備案", en: "Keep as backup" },
      note: { zh: "如果會議後不想立刻搬，這是最保守的做法。", en: "Safest if you do not want to move right after the conference." }
    },
    {
      title: { zh: "取消最後一晚", en: "Cancel the last night" },
      note: { zh: "倫敦一旦訂好、也確定 7/4 移動，就能把這一晚收回來。", en: "Once London is locked in and 4 July is certain, this becomes the cleaner choice." }
    },
    {
      title: { zh: "7/5 再移動", en: "Move on 5 July" },
      note: { zh: "倫敦會少一晚，但整段銜接會最不費力。", en: "London becomes shorter, but the handoff stays easier." }
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
    state.lang !== "zh" ? "Photo-friendly stay" : "適合拍照",
    state.lang !== "zh" ? "Walkable to Seine" : "近塞納河"
  ];
  const cdgInfoItems = [
    { label: state.lang !== "zh" ? "Stay" : "入住", value: state.lang !== "zh" ? "10 Jul – 11 Jul 2026" : "2026/07/10 – 2026/07/11" },
    { label: state.lang !== "zh" ? "Address" : "地址", value: "Paris Street, Roissypole RER, 93290 Tremblay-en-France" },
    { label: state.lang !== "zh" ? "Payment note" : "付款紀錄", value: money.cdgHotel },
    { label: state.lang !== "zh" ? "Transit edge" : "交通優勢", value: state.lang !== "zh" ? "Roissypole RER next to CDG terminals" : "Roissypole RER 旁，接 CDG 航廈很順" }
  ];
  const stayNextSteps = [
    {
      title: { zh: "決定 7/4 曼徹斯特最後一晚要不要保留。", en: "Decide what to do with the 4 July Manchester overlap." },
      note: { zh: "Riu 已經訂好，現在只差要不要把曼徹斯特最後一晚留著當緩衝。", en: "Riu is already booked. The remaining decision is whether the last Manchester night should stay as buffer." }
    },
    {
      title: { zh: "把 Eurostar 訂下來。", en: "Book the Eurostar segment." },
      note: { zh: "7/7 從 Riu 去 St Pancras 不算複雜，但上車前還有安檢和護照檢查，這段先抓寬一點。", en: "The move from Riu to St Pancras is manageable, but Eurostar still needs time for security and passport control." }
    },
    {
      title: { zh: "確認 Pullman 退房後到 CDG Novotel 的移動方式。", en: "Check the Pullman → CDG Novotel move." },
      note: { zh: "如果帶著行李，直接叫車最省事；想省一點，再看 RER 進 Roissypole。", en: "With luggage, a direct car is easiest. Use the RER into Roissypole only if you want the cheaper option." }
    },
    {
      title: { zh: "再看一次各飯店取消期限與付款狀態。", en: "Review cancellation windows and payment status." },
      note: { zh: "曼徹斯特、Riu、Pullman 和 Novotel 都已經接好，現在主要就是再看取消期限和付款紀錄有沒有漏。", en: "Manchester, Riu, Pullman, and Novotel are all in place. This is now mostly a final check on cancellation windows and payments." }
    }
  ];

  return renderDesktopPageShell("stay", {
    label: { zh: "Hotel", en: "Hotel" },
    title: { zh: "住宿筆記", en: "Stay Notes" },
    note: { zh: "把每一段住哪裡放在一起看，轉城市時比較不會亂。", en: "Each stay is part of the route itself, linking the conference days, the city moves, and the final Paris evenings into one calmer rhythm." },
    meta: [
      { label: { zh: "會議據點", en: "Conference base" }, value: "INNSiDE Manchester" },
      { label: { zh: "倫敦主住宿", en: "London base" }, value: "Riu Plaza Westminster" },
      { label: { zh: "巴黎主住宿", en: "Paris anchor" }, value: "Pullman Paris Tour Eiffel" },
      { label: { zh: "回程前一晚", en: "Departure eve" }, value: { zh: "Novotel CDG", en: "Novotel CDG" } }
    ]
  }, `
    ${renderQuickNav("stay")}
    <section class="section compact-section" id="overview">
      <article class="section-card">
        <div class="section-label">${state.lang !== "zh" ? "Accommodation overview" : "住宿總覽"}</div>
        <h2>${state.lang !== "zh" ? "Each stay carries a different role in the route." : "每一段住宿都各有用途。"}</h2>
        <p class="lead">${state.lang !== "zh" ? "Manchester stays with the conference, Westminster holds the London days, Pullman carries Paris, and Novotel CDG keeps the flight morning easy." : "曼徹斯特先顧會議，倫敦住 Westminster，巴黎住 Pullman，最後一晚再轉去 CDG。"} </p>
        <div class="stay-overview-grid">
          ${stayOverviewEntries.map(renderStaySnapshotCard).join("")}
        </div>
      </article>
    </section>
    <section class="section compact-section" id="manchester">
      <article class="section-card">
        <div class="section-label">${state.lang !== "zh" ? "Manchester base" : "Manchester｜會議據點"}</div>
        <h2>${state.lang !== "zh" ? "Keep the conference stay simple." : "會議這幾天，住得穩最重要。"}</h2>
        <p class="lead">${state.lang !== "zh" ? "INNSiDE Manchester does the simple job: stay put, go to the conference, come back, and save energy for the later city moves." : "INNSiDE Manchester 的角色很單純：把 AIB 這幾天接穩，不要把體力花在搬飯店上。"}</p>
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
        <h2>${state.lang !== "zh" ? "London is fixed in Westminster." : "倫敦這段就直接住 Westminster。"}</h2>
        <p class="lead">${state.lang !== "zh" ? "This chapter now stays at Riu Plaza London The Westminster. You can check in, walk Westminster on the first evening, and still leave cleanly for St Pancras on 7 July." : "倫敦這幾晚就直接住 Riu Plaza London The Westminster。7/4 到了先接 Westminster 一圈，7/7 去 St Pancras 也不會太繞。"} </p>
        <div class="stay-warning-card">
          <div class="stay-warning-head">
            ${statusChip("alert")}
            <h3>${state.lang !== "zh" ? "7/4 overlaps with the Manchester booking" : "7/4 晚有重疊，需要先決定怎麼接"}</h3>
          </div>
          <p>${state.lang !== "zh" ? "Manchester is currently booked through 5 July, while the London plan starts on 4 July. Once London is fixed, decide whether that last Manchester night should stay as buffer or be released." : "曼徹斯特目前訂到 7/5 退房，但倫敦預計從 7/4 開始住。等倫敦確定後，再決定這一晚要不要留著當緩衝。"} </p>
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
                <p class="stay-card-note">${state.lang !== "zh" ? "Keep Westminster, Covent Garden, and the later St Pancras move inside one easy radius." : "Westminster、Covent Garden，還有後面去 St Pancras 的移動，都放在同一條比較好接的線上。"} </p>
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
              <span>${state.lang !== "zh" ? "Nearby rhythm" : "附近動線"}</span>
              <strong>${state.lang !== "zh" ? "Westminster / Victoria / St Pancras" : "Westminster / Victoria / St Pancras"}</strong>
              <p>${state.lang !== "zh" ? "These are the names worth keeping in mind when moving around London from this base." : "住在這裡時，主要就是記住 Westminster、Victoria，還有 7/7 要去的 St Pancras。"} </p>
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
        <h2>${state.lang !== "zh" ? "Let Pullman hold the Paris nights." : "巴黎這幾晚就把重點放在 Pullman。"}</h2>
        <p class="lead">${state.lang !== "zh" ? "Stay in the city during the day, then come back here at night. That is enough for the Paris part to feel complete." : "這三晚住 Pullman Paris Tour Eiffel。白天在城裡走，晚上回到房間和陽台看鐵塔，巴黎這段就會很順。"} </p>
        <div class="paris-spotlight-grid">
          <div class="paris-spotlight-copy">
            <div class="stay-price-grid pullman-summary-grid">
              ${pullmanSummary.map((item) => renderStayStatCard(item.label, item.value, item.note)).join("")}
            </div>
            <div class="paris-feature-chips">
              ${pullmanFeatureChips.map((item) => `<span>${escapeHtml(item)}</span>`).join("")}
            </div>
            <div class="paris-spotlight-body">
              <p>${state.lang !== "zh" ? "The reason to stay here is simple: daytime stays in the city, nighttime comes back to the balcony and the tower view." : "白天的巴黎留給羅浮宮、精品街、歌劇院周邊和塞納河，晚上就回到 Pullman 看鐵塔。這樣住最省力。"} </p>
              <p>${state.lang !== "zh" ? "It also keeps the Eiffel Tower and the Seine close, which makes the first evening and the final handoff to Novotel CDG easier." : "飯店離鐵塔與塞納河都近，第一晚看夜景、後面幾天散步，還有 7/10 回飯店拿寄放行李再轉去 CDG，動線都比較順。"} </p>
              <p>${state.lang !== "zh" ? `The current booking amount shown on the payment record is NT$70,243 / EUR 1,915.58, which works out to about ${money.parisHotelPerNight} per night.` : `目前訂房付款紀錄顯示總額為 NT$70,243 / EUR 1,915.58，換算平均每晚約 ${money.parisHotelPerNight}。`}</p>
            </div>
          </div>
          <div class="paris-spotlight-side">
            <div class="paris-spotlight-photo-wrap">
              <img class="paris-spotlight-photo" src="${escapeHtml(parisStay.image)}" alt="${escapeHtml(t(parisStay.imageAlt))}" width="1206" height="2196" loading="lazy" decoding="async" />
            </div>
            <div class="paris-spotlight-note">
              <h3>${state.lang !== "zh" ? "Why it fits this trip" : "為什麼很適合這趟旅程"}</h3>
              ${renderList([
                state.lang !== "zh" ? "The balcony means you do not need to keep going back out at night." : "陽台看得到鐵塔，晚上就不用一直往外跑。",
                state.lang !== "zh" ? "Easy for photos, shopping bags, and quieter evenings." : "很適合晚上拍照、帶著購物袋回飯店，最後幾晚也能過得輕鬆一點。",
                state.lang !== "zh" ? "Close enough to the Eiffel Tower and the Seine to keep the route simple." : "離鐵塔與塞納河夠近，行程不容易亂。"
              ], "plain-list")}
            </div>
            <div class="paris-spotlight-note">
              <h3>${state.lang !== "zh" ? "After Pullman" : "7/10 之後"}</h3>
              <p>${state.lang !== "zh" ? "Pullman ends on 10 Jul. After Montmartre and the last shopping stops, come back for the stored luggage and then move to Novotel CDG." : "Pullman 這段住到 7/10。白天走完聖心堂、蒙馬特和最後採買後，再回飯店拿寄放行李，晚上轉去 Novotel CDG 就好。"} </p>
            </div>
          </div>
        </div>
      </article>
    </section>
    <section class="section compact-section" id="cdg">
      <article class="section-card functional-stay-card">
        <div class="section-label">${state.lang !== "zh" ? "Airport stay" : "機場過夜安排"}</div>
        <h2>${state.lang !== "zh" ? "Make the airport morning easy." : "7/11 早上不用再趕。"}</h2>
        <p class="lead">${state.lang !== "zh" ? "This night is purely practical. Finish Paris first, then move out toward the airport and sleep closer to the flight." : "這一晚就是為了隔天方便。先把巴黎最後一天走完，晚上住到機場旁，隔天去 2E 會輕鬆很多。"} </p>
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
              <p>${state.lang !== "zh" ? "This is the handoff night between Paris and the return flights. Once Montmartre, the last shopping, and the Pullman luggage pickup are done, just move here and stop." : "這一晚就是把巴黎最後一天接到機場邊。蒙馬特、最後採買和 Pullman 拿行李結束後，直接轉過去，隔天就不會忙。"} </p>
            </div>
          </div>
        </div>
      </article>
    </section>
    <section class="section compact-section" id="next">
      <article class="section-card">
        <div class="section-label">${state.lang !== "zh" ? "Next steps" : "下一步確認清單"}</div>
        <h2>${state.lang !== "zh" ? "A few things are still worth checking." : "剩下幾個地方再確認一次。"}</h2>
        <p class="lead">${state.lang !== "zh" ? "The stays are mostly done now. What remains is the 4 July overlap, Eurostar, the Pullman-to-CDG move, and one last pass on payment and cancellation notes." : "住宿大致都接好了。現在剩的是 7/4 的重疊、Eurostar、Pullman 去 CDG 的移動方式，還有最後一次確認付款和取消期限。"} </p>
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
        <h2>${state.lang !== "zh" ? "The route, one day at a time" : "每天先看移動，再看行程"}</h2>
        <p class="lead">${state.lang !== "zh" ? "Each day starts with the route and stay, followed by the details that matter on the road." : "日期、城市、住宿和交通先排清楚；景點與提醒接在後面，不用來回找。"} </p>
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
          state.lang !== "zh" ? "Paris Must-Do Top 10" : "Paris Must-Do Top 10｜巴黎必去清單",
        state.lang !== "zh" ? "Ten Paris moments worth keeping nearby." : "把巴黎這幾天真的值得留的地方收在一起。",
        state.lang !== "zh" ? "These are not meant as a hard checklist. Think of them as the places that are easiest to fold into the Paris days." : "不用每個都當成一定要完成的清單。把這頁當成巴黎這幾天順路可以放進去的地方就好。"
      )}
        <div class="paris-mustdo-grid">
          ${parisMustDoItems.map(renderParisMustDoCard).join("")}
        </div>
      </article>
    </section>
    <section class="section compact-section" id="tickets">
      ${sectionHeading(
        state.lang !== "zh" ? "Admission" : "景點與票價",
        state.lang !== "zh" ? "Attraction fees to check before booking" : "把可能用到的門票與價格先放在一起",
        state.lang !== "zh" ? "Prices are current planning references. Re-check official sites before booking for July 2026." : "這裡先整理目前查到的票價方向，真正下訂前再回官網確認一次就好。"
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
      ${renderAlert({ title: { zh: "回程這天先顧好航段", en: "Keep the return day focused on the flights" }, body: { zh: "最後一天就是把巴黎、曼徹斯特和希斯洛這三段移動接順。巴黎上午不要再排別的，重要文件也先存成離線版本。", en: "The last day works best when Paris, Manchester, and Heathrow connect cleanly. Keep the Paris morning light and make sure all important files are available offline." } })}
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
        <h2>${state.lang !== "zh" ? "What is easiest to bring back from the UK, France, and Germany" : "英國、法國、德國有什麼比較適合帶回來"}</h2>
        <p class="lead">${state.lang !== "zh" ? "This page keeps the easy gift ideas together, especially the ones that still look nice after a long flight home." : "這頁先挑那種好買、好帶、飛一大圈回台灣也不太狼狽的伴手禮。"}</p>
        <div class="hero-actions">
          <a class="button secondary" href="./shopping.html">${state.lang !== "zh" ? "Back to UK shopping page" : "回到英國購物頁"}</a>
        </div>
        <div class="itinerary-highlights">
          ${souvenirData.highlights.map((item) => renderMiniHighlightCard(item.label, item.value)).join("")}
        </div>
        <div class="summary-grid three shopping-suggestion-grid">
          ${[
            {
              title: { zh: "想送得穩一點", en: "Safe gift picks" },
              text: { zh: "英國茶葉、德國巧克力、法國護手霜都很好下手。", en: "UK tea, German chocolate, and French hand cream are all easy choices." }
            },
            {
              title: { zh: "想買得更像當地", en: "More distinctive picks" },
              text: { zh: "法國香氛、德國馬滋潘、英國 marmalade 都比較有地方感。", en: "French fragrance, German marzipan, and British marmalade feel more location-specific." }
            },
            {
              title: { zh: "想最後一天再補貨", en: "Last-minute shopping" },
              text: { zh: "茶包、軟糖、巧克力最適合最後再買，行李安排也比較容易。", en: "Tea bags, gummies, and chocolate are the easiest last-minute picks." }
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
        <h2>${state.lang !== "zh" ? "Things that travel home more smoothly" : "哪些東西帶回來會比較順"}</h2>
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
    if (city === "Frankfurt") return "Frankfurt is the short layover chapter: airport rail, old town, the river, and the airport return.";
    if (city === "Paris") return "Paris is built around Pullman, the Right Bank, the Louvre, and the final airport handoff.";
    return "London is for the city walk: Westminster first, then department stores, shopping streets, and the St Pancras handoff.";
  }
  if (city === "Manchester") return "曼徹斯特這一段就看機場、飯店、兩個會場，還有南下倫敦的車站。";
  if (city === "Frankfurt") return "法蘭克福這段就是短停，重點只有機場鐵路、老城、美因河和回機場。";
  if (city === "Paris") return "巴黎就圍著 Pullman、右岸、羅浮宮和最後去機場那段看。";
  return "倫敦這邊先看 Westminster，再接百貨、精品街和 St Pancras。";
}

function renderMap() {
  const defaultLocation = tripData.mapLocations[0];
  const cityGroups = [...new Set(tripData.mapLocations.map((item) => item.city))];
  return `
    ${renderQuickNav("map")}
    <section class="section compact-section" id="travel-map">
      ${sectionHeading(
        state.lang !== "zh" ? "Travel Map" : "旅程地圖",
        state.lang !== "zh" ? "Places and routes at a glance" : "地點與路線一目了然",
        state.lang !== "zh" ? "Tap a place to open it on the map, or jump straight to each day's route." : "點一下地點就能在右側地圖查看，也可以直接打開每天的路線。"
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
    note: { zh: "把可報帳、自費與票券費用分開看，核對時會更快。", en: "Reimbursable items, self-funded costs, and ticket notes are separated for easier checking." },
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
        state.lang !== "zh" ? "Four-currency tables keep the conference claim items separate from the personal travel costs." : "四幣別金額把會議報帳項目與個人旅行支出分開整理，臨時要核對會比較清楚。"
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
      ${sectionHeading(state.lang !== "zh" ? "Travel Documents" : "文件清單", state.lang !== "zh" ? "Files to keep nearby during the trip" : "把旅途中會一直用到的文件收在同一頁", state.lang !== "zh" ? "Statuses are marked so you can do one last check before departure." : "每個項目都有狀態標示，出發前再看一次會更安心。")}
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
        state.lang !== "zh" ? "Small habits that make the trip smoother" : "幾個讓旅程更順的小習慣"
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
          <h3>${state.lang !== "zh" ? "Keep the first evening light" : "第一晚留給安頓"}</h3>
          <p>${state.lang !== "zh" ? "The best first-day plan is not ambitious. It is clean, hydrated, and ready for the conference." : "第一天不需要太用力。能順利抵達、吃點東西、整理文件、調整時差，就很好。"} </p>
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
