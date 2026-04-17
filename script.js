const pages = [
  { id: "home", label: { zh: "總覽", en: "Overview" }, href: "./index.html" },
  { id: "conference", label: { zh: "會議", en: "Conference" }, href: "./conference.html" },
  { id: "transport", label: { zh: "交通", en: "Transport" }, href: "./transport.html" },
  { id: "stay", label: { zh: "住宿", en: "Stay" }, href: "./stay.html" },
  { id: "itinerary", label: { zh: "行程", en: "Itinerary" }, href: "./itinerary.html" },
  { id: "map", label: { zh: "地圖", en: "Map" }, href: "./map.html" },
  { id: "budget", label: { zh: "報帳", en: "Budget" }, href: "./budget.html" },
  { id: "documents", label: { zh: "連結", en: "Links" }, href: "./links.html" }
];

const statusLabels = {
  confirmed: { zh: "已確認", en: "Confirmed" },
  pending: { zh: "待確認", en: "Pending" },
  book: { zh: "待預訂", en: "To book" },
  reimburse: { zh: "待報帳", en: "To reimburse" },
  self: { zh: "自費", en: "Self-funded" },
  optional: { zh: "可選", en: "Optional" },
  alert: { zh: "留意", en: "Note" }
};

const money = {
  flight: "NT$92,439 / GBP 2,176 / US$2,885",
  conference: "NT$10,413 / GBP 245 / US$325",
  membership: "NT$1,282 / GBP 30 / US$40",
  hotel: "NT$38,270 / GBP 900.90 / US$1,194",
  visitorCharge: "約 NT$255 / GBP 6 / US$8",
  manchesterDaily: "NT$10,381 / GBP 244 / US$324 / day",
  manchesterDaily5: "NT$51,905 / GBP 1,220 / US$1,620",
  londonDaily: "NT$16,340 / GBP 385 / US$510 / day",
  trainAdvance: "每人來回 from NT$2,846 / GBP 67 / US$89",
  railcard: "NT$1,487 / GBP 35 / US$46"
};

const tripData = {
  lastUpdated: "2026-04-17 06:10",
  hero: {
    home: {
      kicker: "Trip Overview",
      title: { zh: "AIB 2026 Manchester\n英國研討會旅遊手冊", en: "AIB 2026 Manchester\nUK Travel Handbook" },
      lead: {
        zh: "從會議日程到倫敦午後，把航班、住宿、交通與費用收在同一本手冊裡。",
        en: "Conference days, London afternoons, and the practical details in one quiet handbook."
      }
    },
    conference: {
      kicker: "Conference",
      title: { zh: "AIB 發表與會議安排", en: "AIB Presentations & Conference Plan" },
      lead: { zh: "AIB 2026 Manchester 會議期間為 2026/06/29-2026/07/03。已收到 Competitive Presentation 與 Interactive Presentation 接受通知。", en: "AIB 2026 Manchester runs from 29 June to 3 July 2026. Competitive and Interactive Presentation acceptances are confirmed." }
    },
    transport: {
      kicker: "Transport",
      title: { zh: "航班、火車與市內交通", en: "Flights, Trains & Local Transit" },
      lead: { zh: "去程 TPE-FRA-MAN，7/4 移動到倫敦，回程仍由 Manchester 起飛，經 Heathrow 返台。", en: "Outbound route is TPE-FRA-MAN. Move to London on 4 July, then return to Manchester for the flight home via Heathrow." }
    },
    stay: {
      kicker: "Accommodation",
      title: { zh: "住宿與城市切換", en: "Accommodation & City Split" },
      lead: { zh: "Manchester 住宿已訂；London 住宿待確認，會依交通與街區便利性選擇。", en: "Manchester accommodation is booked; London accommodation is still to be confirmed based on access and neighborhood fit." }
    },
    itinerary: {
      kicker: "Itinerary",
      title: { zh: "每日行程安排", en: "Daily Itinerary" },
      lead: { zh: "每天只留下最值得走近的地方、可以隨心加上的片段，以及旅途中不想忘記的小提醒。", en: "Each day keeps the places worth approaching, the optional detours, and the small reminders that make travel easier." }
    },
    map: {
      kicker: "Travel Map",
      title: { zh: "英國旅程地圖", en: "UK Travel Map" },
      lead: { zh: "整理 Manchester 與 London 的主要地點、火車動線與每日路線。", en: "Key Manchester and London locations, train movements, and daily routes in one map." }
    },
    budget: {
      kicker: "Reimbursement",
      title: { zh: "費用與報帳整理", en: "Budget & Reimbursement" },
      lead: { zh: "新台幣、英鎊與美元並列，報帳與自費分開整理。", en: "TWD, GBP, and USD are shown together, with reimbursable and self-funded costs separated." }
    },
    documents: {
      kicker: "Official Links",
      title: { zh: "文件與官方連結", en: "Documents & Official Links" },
      lead: { zh: "只放公開官方連結與文件類型提醒，不揭露訂位編號、付款資訊、email 或私人收據內容。", en: "Only public official links and document reminders are listed. Booking numbers, payment details, emails, and private receipt contents are excluded." }
    }
  },
  summaryCards: [
    { status: "confirmed", title: { zh: "AIB conference dates", en: "AIB conference dates" }, value: "2026/06/29 - 2026/07/03", note: { zh: "主會議集中在 7/1-7/3，前段留給發表、networking 與報帳資料整理。", en: "Main conference activity is concentrated on 1-3 July, with presentations, networking, and reimbursement proofs." } },
    { status: "confirmed", title: { zh: "UK travel dates", en: "UK travel dates" }, value: "2026/06/29 - 2026/07/12", note: { zh: "6/30 抵達 Manchester，7/11 從 Manchester 起飛，7/12 抵達台北。", en: "Arrive Manchester on 30 June, depart Manchester on 11 July, arrive Taipei on 12 July." } },
    { status: "confirmed", title: { zh: "Manchester hotel status", en: "Manchester hotel status" }, value: "INNSiDE Manchester", note: { zh: "6/30-7/5 已訂，Twin Bed，2 人，房價 GBP 900.90。", en: "Booked for 30 June-5 July, twin beds for two guests, GBP 900.90." } },
    { status: "book", title: { zh: "London arrangement status", en: "London arrangement status" }, value: "7/4 起待預訂", note: { zh: "Euston、King's Cross、Bloomsbury 或 South Kensington 一帶，都適合把旅途放慢。", en: "Euston, King's Cross, Bloomsbury, and South Kensington would all keep the London stay easy and well-connected." } }
  ],
  todos: [
    { status: "alert", text: { zh: "7/4 的 Manchester 房晚與 London 行程有一點重疊，適合留作緩衝，也可以再斟酌調整。", en: "The 4 July Manchester night overlaps slightly with the London plan; it can stay as a buffer or be adjusted later." } },
    { status: "book", text: { zh: "London 住宿尚未預訂，優先考慮交通方便、回車站順路的區域。", en: "London accommodation is not booked yet; prioritize convenient areas with easy rail access." } },
    { status: "book", text: { zh: "Manchester Piccadilly 與 London Euston 之間的火車票尚未預訂。", en: "Manchester Piccadilly to London Euston train tickets are not booked yet." } },
    { status: "reimburse", text: { zh: "接受函、邀請函、AIB 收據、會員費與機票付款明細，會一起放進報帳資料夾。", en: "Acceptance letters, invitation, AIB receipts, membership, and flight payment details belong together in the reimbursement folder." } },
    { status: "pending", text: { zh: "AIB final program 公布後，再把正式場次時間補進會議頁。", en: "Final session times can be added after AIB publishes the final program." } }
  ],
  alerts: [
    {
      title: { zh: "Manchester / London 住宿日期可能重疊", en: "Manchester / London stay may overlap" },
      body: { zh: "INNSiDE Manchester 訂到 7/5 退房，而 London 的旅程從 7/4 展開。這一晚可以成為行李與會議後的緩衝，也可以在倫敦住宿確定後再調整。", en: "INNSiDE Manchester is booked until 5 July, while London begins on 4 July. That night can serve as a soft buffer after the conference, or be adjusted once London accommodation is set." }
    }
  ],
  paperSummaries: [
    {
      status: "confirmed",
      type: "Competitive / paper summary",
      title: "Legitimacy-First Innovation: How Emerging Technology Firms Construct Mainstream Pathways under Institutional Ambiguity",
      summary: { zh: "這篇研究探討新興科技公司如何在制度模糊、監管分散與大眾信任不足的環境中，以合法性建構作為主流採用的起點。文章以 cryptocurrency 與 blockchain ventures 為脈絡，說明企業如何透過 regulatory alignment、institutional bridging 與 ecosystem orchestration，把具爭議的新科技轉化為可被市場與制度接受的發展路徑。", en: "This paper examines how emerging technology firms build legitimacy before mainstream adoption under institutional ambiguity, fragmented regulation, and public skepticism. Using cryptocurrency and blockchain ventures as the context, it explains how regulatory alignment, institutional bridging, and ecosystem orchestration help turn contested technologies into accepted market pathways." }
    },
    {
      status: "confirmed",
      type: "Interactive / paper summary",
      title: "Signal or Noise? Maturity-Adjusted Technical Disclosure and Multi-Stage Startup Funding Decisions",
      summary: { zh: "這篇研究分析早期科技新創如何透過技術揭露向投資人傳遞能力與可信度。文章使用 Gartner Hype Cycle 加權的技術揭露指標與 Heckman two-stage framework，區分投資人的初始篩選與後續資金配置，說明何時技術敘事能成為有效訊號，而不是市場噪音。", en: "This paper analyzes how early-stage technology startups use technical disclosure to signal capability and credibility to investors. It develops a Gartner Hype Cycle-weighted disclosure measure and uses a Heckman two-stage framework to distinguish initial investor screening from later capital allocation." }
    }
  ],
  flights: [
    { label: { zh: "去程", en: "Outbound" }, date: "2026/06/29 - 06/30", legs: [{ from: "TPE", to: "FRA", flight: "CI 61", time: "22:40 → 06:50", duration: "14h 30m", detail: { zh: "台北桃園 T1 → 法蘭克福 T3", en: "Taipei Taoyuan T1 → Frankfurt T3" } }, { from: "FRA", to: "MAN", flight: "LH 4210", time: "09:50 → 10:40", duration: "1h 50m", detail: { zh: "法蘭克福 T1 → 曼徹斯特 T2", en: "Frankfurt T1 → Manchester T2" } }] },
    { label: { zh: "回程", en: "Return" }, date: "2026/07/11 - 07/12", legs: [{ from: "MAN", to: "LHR", flight: "BA 1371", time: "18:10 → 19:15", duration: "1h 05m", detail: { zh: "曼徹斯特 T2 → 倫敦希斯洛 T5", en: "Manchester T2 → London Heathrow T5" } }, { from: "LHR", to: "TPE", flight: "CI 82", time: "21:10 → 18:05", duration: "13h 55m", detail: { zh: "倫敦希斯洛 T3 → 台北桃園 T1", en: "London Heathrow T3 → Taipei Taoyuan T1" } }] }
  ],
  trainFares: [
    { status: "book", item: "Advance", amount: "from NT$1,423 / GBP 33.50 / US$44 one-way", note: { zh: "最便宜但綁定指定班次；越早買越划算。", en: "Cheapest, train-specific, and best bought early." } },
    { status: "optional", item: "Off-Peak", amount: "NT$3,228-3,398 / GBP 76-80 / US$101-106 one-way", note: { zh: "彈性較高，適合不想被指定班次綁死。", en: "More flexible if you do not want to be tied to a single service." } },
    { status: "optional", item: "Two Together Railcard", amount: money.railcard, note: { zh: "兩人同行可省 1/3；週末全天、平日 09:30 後可用。", en: "Two people traveling together can save 1/3; valid all day weekends and after 09:30 weekdays." } }
  ],
  localTransit: [
    { city: "London", items: ["Zones 1-2 cap: NT$378 / GBP 8.90 / US$12", "Zones 1-3 cap: NT$446 / GBP 10.50 / US$14", "Zones 1-6 cap: NT$692 / GBP 16.30 / US$22", "Use the same contactless card / Apple Pay / Google Pay / Oyster for all taps."] },
    { city: "Manchester", items: ["INNSiDE Manchester: Deansgate-Castlefield / St Peter's Square nearby.", "Airport is Zone 4; use all zones for airport-city trips.", "All-zones day ticket: NT$302 / GBP 7.10 / US$9.40 anytime; NT$208 / GBP 4.90 / US$6.50 off-peak.", "Buy or touch in before boarding Metrolink; no onboard purchase."] }
  ],
  stay: [
    { status: "confirmed", title: "INNSiDE Manchester", facts: ["Check-in: 2026/06/30 after 15:00", "Check-out: 2026/07/05 before 12:00", "Twin Bed, 2 guests, 5 nights", "1 First Street, Manchester", "+44 161 200 2500"], note: { zh: "房價總額 GBP 900.90，已含 20% 稅；旅遊稅 GBP 1.20 / 房 / 晚現場付。", en: "Total GBP 900.90 including 20% tax; local visitor charge GBP 1.20 per room per night is paid locally." } },
    { status: "book", title: "London accommodation", facts: ["From 2026/07/04", "Area ideas: Euston, King's Cross, Bloomsbury, South Kensington, Paddington"], note: { zh: "尚未預訂。Euston、King's Cross、Bloomsbury 與 South Kensington 都是可考慮區域。", en: "Not booked yet. Euston, King's Cross, Bloomsbury, and South Kensington are practical options." } },
    { status: "alert", title: "7/4 overlap decision", facts: ["Manchester booking covers 7/4 night", "London plan starts 7/4"], note: { zh: "這一晚可以留下 Manchester 的緩衝，也可以在 London 住宿落定後再讓日期更俐落。", en: "This night can remain as a Manchester buffer, or be refined once the London stay is set." } }
  ],
  itinerary: [
    { date: "6/29-6/30", title: { zh: "出發與抵達 Manchester", en: "Departure & arrival in Manchester" }, status: "confirmed", must: ["TPE 22:40 → FRA 06:50", "FRA 09:50 → MAN 10:40", "15:00 後入住 INNSiDE Manchester"], optional: ["市中心輕鬆散步", "補水、整理文件、調時差"], tickets: ["景點門票：GBP 0"], notes: ["晚上不要排太滿，保留體力給會議。"] },
    { date: "7/1-7/3", title: { zh: "AIB 主會議", en: "AIB main conference" }, status: "confirmed", must: ["AIB sessions / presentation", "Networking", "每日整理報帳與會議證明"], optional: ["Opening / reception", "近距離晚餐"], tickets: ["景點門票：GBP 0；以會議活動為主"], notes: ["每天早上保留至少 30 分鐘交通緩衝。"] },
    { date: "7/4", title: { zh: "Manchester → London", en: "Manchester → London" }, status: "book", must: ["Manchester Piccadilly → London Euston", "寄放行李或入住", "Westminster / Big Ben / London Eye 外觀"], optional: ["Regent Street / Oxford Street", "Selfridges Jellycat"], tickets: ["Big Ben / Westminster Bridge 外觀：免費", "London Eye 若搭乘：online from GBP 29 / walk-up GBP 39"], notes: ["Manchester 與 London 的住宿日期在這一天交會，需保留調整彈性。"] },
    { date: "7/5", title: { zh: "大英博物館與市中心", en: "British Museum & central London" }, status: "pending", must: ["British Museum", "Tottenham Court Road / Holborn", "Chinatown dinner"], optional: ["Covent Garden", "Soho", "Oxford Street"], tickets: ["British Museum 常設展：免費，可預約 free timed ticket", "特展另計，依展覽頁票價為準"], notes: ["市中心步行距離適中，可安排購物或晚餐。"] },
    { date: "7/6", title: { zh: "格林威治一日", en: "Greenwich day" }, status: "pending", must: ["Royal Observatory", "Prime Meridian", "Cutty Sark", "Greenwich Market"], optional: ["IFS Cloud Cable Car", "Leadenhall Market", "Fortnum & Mason"], tickets: ["Royal Observatory adult GBP 24 / student GBP 18", "Cutty Sark adult GBP 22 / student GBP 16.50", "Observatory + Cutty Sark Day Pass adult GBP 38 / student GBP 28.50", "IFS Cloud Cable Car one-way adult GBP 7；round trip GBP 13.50"], notes: ["可用倫敦 Zone 1-3 日上限估算交通。"] },
    { date: "7/7", title: { zh: "西敏寺、倫敦塔與河岸", en: "Westminster, Tower & riverside" }, status: "pending", must: ["Buckingham Palace", "St James's Park", "Westminster Abbey", "Tower Bridge"], optional: ["St Paul's Cathedral", "Tower of London", "London Eye sunset"], tickets: ["Buckingham Palace 外觀：免費；State Rooms 9 Jul 才開，advance adult GBP 33", "Westminster Abbey adult GBP 31 / student GBP 28", "St Paul's Cathedral adult GBP 27 / student GBP 24", "Tower of London adult GBP 37 / student GBP 29.50", "Tower Bridge adult GBP 18 / student GBP 13.50"], notes: ["依天氣與體力調整 London Eye。Buckingham Palace State Rooms 2026/07/09 才開放，7/7 只能排外觀與 Changing the Guard。"] },
    { date: "7/8", title: { zh: "South Kensington", en: "South Kensington" }, status: "pending", must: ["Natural History Museum", "Imperial College London", "Harrods"], optional: ["Victoria and Albert Museum", "Hyde Park / Kensington Gardens"], tickets: ["Natural History Museum 一般入場：免費，可預約", "V&A South Kensington 一般入場：免費", "Harrods 入店：免費，購物與餐飲另計"], notes: ["可在這一天安排 Harrods、Jellycat 與伴手禮。"] },
    { date: "7/9", title: { zh: "購物、街區與劇院緩衝", en: "Shopping, neighborhoods & theatre buffer" }, status: "optional", must: ["保留彈性"], optional: ["Liberty", "Selfridges", "Notting Hill", "Covent Garden", "West End musical"], tickets: ["街區散步與百貨入店：免費", "West End musical：依劇目與座位浮動，訂票前再查"], notes: ["適合補買 Fortnum & Mason、Harrods 或 Boots。"] },
    { date: "7/10", title: { zh: "倫敦收尾，回 Manchester", en: "Wrap London, return to Manchester" }, status: "book", must: ["整理行李", "London Euston → Manchester Piccadilly"], optional: ["上午補景點或購物"], notes: ["7/10 晚上回 Manchester 住一晚，會讓 7/11 的航班多一層安心。"] },
    { date: "7/11-7/12", title: { zh: "回程返台", en: "Return to Taipei" }, status: "confirmed", must: ["MAN 18:10 → LHR 19:15", "LHR 21:10 → TPE 18:05"], optional: ["白天只排低風險活動"], notes: ["回程不要跳過 MAN-LHR 航段。"] }
  ],
  attractionCosts: [
    { status: "confirmed", day: "7/5", attraction: "British Museum", fee: "Free", estimate: "NT$0 / GBP 0 / US$0", note: { zh: "常設展免費，可預約 free timed ticket；特展另計。", en: "Permanent collection is free; a free timed ticket can be booked. Special exhibitions cost extra." }, source: "https://www.britishmuseum.org/visit" },
    { status: "confirmed", day: "7/6", attraction: "Royal Observatory Greenwich", fee: "Adult GBP 24 / Student GBP 18", estimate: "成人約 NT$1,020 / GBP 24 / US$32", note: { zh: "若同日也去 Cutty Sark，Day Pass 通常更划算。", en: "If also visiting Cutty Sark, the Day Pass is usually better value." }, source: "https://www.rmg.co.uk/plan-your-visit/tickets-prices" },
    { status: "confirmed", day: "7/6", attraction: "Cutty Sark", fee: "Adult GBP 22 / Student GBP 16.50", estimate: "成人約 NT$935 / GBP 22 / US$29", note: { zh: "Greenwich 一日行程可與 Royal Observatory 合買 Day Pass。", en: "Can be combined with Royal Observatory using the Day Pass." }, source: "https://www.rmg.co.uk/plan-your-visit/tickets-prices" },
    { status: "optional", day: "7/6", attraction: "Royal Observatory + Cutty Sark Day Pass", fee: "Adult GBP 38 / Student GBP 28.50", estimate: "成人約 NT$1,614 / GBP 38 / US$51", note: { zh: "同日兩個都進去時，成人比單買省 GBP 8。", en: "If visiting both on the same day, adult Day Pass saves GBP 8 versus separate tickets." }, source: "https://www.rmg.co.uk/plan-your-visit/tickets-prices" },
    { status: "optional", day: "7/6", attraction: "IFS Cloud Cable Car", fee: "Adult one-way GBP 7 / round trip GBP 13.50", estimate: "單程約 NT$297 / GBP 7 / US$9；來回約 NT$574 / GBP 13.50 / US$18", note: { zh: "Pay as you go 不計入 TfL daily cap。", en: "Pay as you go journeys do not count towards TfL caps." }, source: "https://www.london.gov.uk/media/111830/download" },
    { status: "optional", day: "7/7", attraction: "Buckingham Palace State Rooms", fee: "Advance adult GBP 33 / on the day GBP 37", estimate: "預售成人約 NT$1,402 / GBP 33 / US$44", note: { zh: "2026 夏季開放 7/9-9/27；7/7 只能排外觀 / Changing the Guard。", en: "Summer 2026 opening is 9 Jul-27 Sep; on 7 Jul plan exterior / Changing the Guard only." }, source: "https://www.rct.uk/visit/the-state-rooms-buckingham-palace" },
    { status: "pending", day: "7/7", attraction: "Westminster Abbey", fee: "Adult GBP 31 / Student GBP 28", estimate: "成人約 NT$1,317 / GBP 31 / US$41", note: { zh: "是 working church，開放時間可能因儀式調整。", en: "It is a working church, so visiting hours may change for services." }, source: "https://www.westminster-abbey.org/visit-us/prices-entry-times/" },
    { status: "optional", day: "7/7", attraction: "St Paul's Cathedral", fee: "Adult GBP 27 / Student GBP 24", estimate: "成人約 NT$1,147 / GBP 27 / US$36", note: { zh: "Sightseeing tickets 含 Cathedral Floor、Crypt、Dome Galleries 與 multimedia guide。", en: "Sightseeing includes Cathedral Floor, Crypt, Dome Galleries, and multimedia guide." }, source: "https://www.stpauls.co.uk/ticket-types-and-prices" },
    { status: "optional", day: "7/7", attraction: "Tower of London", fee: "Adult GBP 37 / Student GBP 29.50", estimate: "成人約 NT$1,572 / GBP 37 / US$49", note: { zh: "含 Crown Jewels 與開放區域；熱門時段可提前訂票。", en: "Includes Crown Jewels and open public areas; tickets can be booked ahead for busy periods." }, source: "https://www.hrp.org.uk/tower-of-london/visit/tickets-and-prices/" },
    { status: "optional", day: "7/7", attraction: "Tower Bridge", fee: "Adult GBP 18 / Student GBP 13.50", estimate: "成人約 NT$765 / GBP 18 / US$24", note: { zh: "含 high-level walkways、glass floors、engine rooms。", en: "Includes high-level walkways, glass floors, and engine rooms." }, source: "https://www.towerbridge.org.uk/whats-on/entry-to-tower-bridge" },
    { status: "optional", day: "7/4 or 7/7", attraction: "London Eye", fee: "Online from GBP 29 / walk-up GBP 39", estimate: "線上成人約 NT$1,232 / GBP 29 / US$39 起", note: { zh: "票價浮動；越早線上訂通常越便宜。", en: "Dynamic pricing; booking online earlier is usually cheaper." }, source: "https://www.londoneye.com/ticket/" },
    { status: "confirmed", day: "7/8", attraction: "Natural History Museum", fee: "Free", estimate: "NT$0 / GBP 0 / US$0", note: { zh: "一般入場免費，熱門時段可預約 free ticket；特展另計。", en: "General admission is free; a free ticket can be booked for busy times. Special exhibitions cost extra." }, source: "https://www.nhm.ac.uk/visit.html" },
    { status: "confirmed", day: "7/8", attraction: "V&A South Kensington", fee: "Free", estimate: "NT$0 / GBP 0 / US$0", note: { zh: "一般入場免費，不需預約；特展 / 活動另計。", en: "General admission is free and no booking is needed; exhibitions/events may cost extra." }, source: "https://www.vam.ac.uk/visiting/visitor-information/" },
    { status: "confirmed", day: "7/8", attraction: "Harrods", fee: "Free entry", estimate: "NT$0 / GBP 0 / US$0", note: { zh: "入店免費；購物、餐飲與餐廳服務費另計。", en: "Store entry is free; shopping, dining, and service charges are separate." }, source: "https://www.harrods.com/" }
  ],
  mapRouteUrl: "https://www.google.com/maps/dir/Manchester+Airport/INNSiDE+Manchester/Manchester+Piccadilly/London+Euston/Big+Ben/British+Museum/Royal+Observatory+Greenwich/Cutty+Sark/Buckingham+Palace/Westminster+Abbey/Tower+Bridge/Natural+History+Museum/Harrods/Manchester+Airport",
  mapLocations: [
    { status: "confirmed", city: "Manchester", title: { zh: "Manchester Airport", en: "Manchester Airport" }, query: "Manchester Airport", note: { zh: "抵達與回程都會經過的城市門口。", en: "The city gateway for both arrival and departure." } },
    { status: "confirmed", city: "Manchester", title: { zh: "INNSiDE Manchester", en: "INNSiDE Manchester" }, query: "INNSiDE Manchester 1 First Street Manchester", note: { zh: "會議期間的住宿基地，靠近 First Street 與市中心。", en: "The conference stay base near First Street and the city centre." } },
    { status: "book", city: "Manchester", title: { zh: "Manchester Piccadilly", en: "Manchester Piccadilly" }, query: "Manchester Piccadilly Station", note: { zh: "7/4 前往 London Euston 的起點。", en: "The starting point for the 4 July train to London Euston." } },
    { status: "book", city: "London", title: { zh: "London Euston", en: "London Euston" }, query: "London Euston Station", note: { zh: "從曼徹斯特抵達倫敦的主要車站。", en: "The main London arrival station from Manchester." } },
    { status: "confirmed", city: "London", title: { zh: "Big Ben / Westminster", en: "Big Ben / Westminster" }, query: "Big Ben London", note: { zh: "倫敦第一眼的河岸輪廓，適合放在抵達午後。", en: "A classic riverside first look for the London arrival afternoon." } },
    { status: "confirmed", city: "London", title: { zh: "British Museum", en: "British Museum" }, query: "British Museum London", note: { zh: "7/5 的博物館主軸，常設展免費。", en: "The 5 July museum anchor, with free permanent collection entry." } },
    { status: "pending", city: "London", title: { zh: "Royal Observatory Greenwich", en: "Royal Observatory Greenwich" }, query: "Royal Observatory Greenwich", note: { zh: "7/6 格林威治的時間、經線與山坡視野。", en: "Time, the prime meridian, and hilltop views for 6 July." } },
    { status: "pending", city: "London", title: { zh: "Cutty Sark", en: "Cutty Sark" }, query: "Cutty Sark Greenwich", note: { zh: "格林威治河邊的帆船博物館。", en: "The riverside ship museum in Greenwich." } },
    { status: "optional", city: "London", title: { zh: "Buckingham Palace", en: "Buckingham Palace" }, query: "Buckingham Palace London", note: { zh: "7/7 以外觀與 St James's Park 的散步節奏為主。", en: "Best paired with St James's Park and an exterior visit on 7 July." } },
    { status: "pending", city: "London", title: { zh: "Westminster Abbey", en: "Westminster Abbey" }, query: "Westminster Abbey London", note: { zh: "西敏一帶的付費重點景點。", en: "A paid highlight around Westminster." } },
    { status: "optional", city: "London", title: { zh: "Tower Bridge", en: "Tower Bridge" }, query: "Tower Bridge London", note: { zh: "河岸收束與拍照都很漂亮的一站。", en: "A graceful riverside stop for views and photos." } },
    { status: "confirmed", city: "London", title: { zh: "Natural History Museum", en: "Natural History Museum" }, query: "Natural History Museum London", note: { zh: "7/8 South Kensington 的溫柔下午。", en: "A soft South Kensington afternoon for 8 July." } },
    { status: "confirmed", city: "London", title: { zh: "Harrods", en: "Harrods" }, query: "Harrods London", note: { zh: "伴手禮、Jellycat 與百貨。", en: "Souvenirs, Jellycat, and department-store shopping." } }
  ],
  mapRoutes: [
    { status: "confirmed", label: { zh: "6/30 抵達 Manchester", en: "30 Jun Manchester arrival" }, note: { zh: "MAN Airport → INNSiDE Manchester", en: "MAN Airport → INNSiDE Manchester" }, url: "https://www.google.com/maps/dir/Manchester+Airport/INNSiDE+Manchester+1+First+Street+Manchester" },
    { status: "book", label: { zh: "7/4 Manchester → London", en: "4 Jul Manchester → London" }, note: { zh: "Piccadilly → Euston，再走向 Westminster 的河岸。", en: "Piccadilly → Euston, then toward the Westminster riverside." }, url: "https://www.google.com/maps/dir/Manchester+Piccadilly/London+Euston/Big+Ben+London" },
    { status: "pending", label: { zh: "7/5 大英博物館", en: "5 Jul British Museum" }, note: { zh: "British Museum → Covent Garden / Soho 一帶。", en: "British Museum → Covent Garden / Soho area." }, url: "https://www.google.com/maps/dir/British+Museum/Covent+Garden/Soho+London" },
    { status: "pending", label: { zh: "7/6 Greenwich", en: "6 Jul Greenwich" }, note: { zh: "Royal Observatory → Cutty Sark → Greenwich Market。", en: "Royal Observatory → Cutty Sark → Greenwich Market." }, url: "https://www.google.com/maps/dir/Royal+Observatory+Greenwich/Cutty+Sark/Greenwich+Market" },
    { status: "pending", label: { zh: "7/7 西敏與河岸", en: "7 Jul Westminster & riverside" }, note: { zh: "Buckingham Palace → Westminster Abbey → Tower Bridge。", en: "Buckingham Palace → Westminster Abbey → Tower Bridge." }, url: "https://www.google.com/maps/dir/Buckingham+Palace/Westminster+Abbey/Tower+Bridge" },
    { status: "confirmed", label: { zh: "7/8 South Kensington", en: "8 Jul South Kensington" }, note: { zh: "Natural History Museum → V&A → Harrods。", en: "Natural History Museum → V&A → Harrods." }, url: "https://www.google.com/maps/dir/Natural+History+Museum+London/Victoria+and+Albert+Museum/Harrods+London" },
    { status: "book", label: { zh: "7/10 回 Manchester", en: "10 Jul return to Manchester" }, note: { zh: "London Euston → Manchester Piccadilly。", en: "London Euston → Manchester Piccadilly." }, url: "https://www.google.com/maps/dir/London+Euston/Manchester+Piccadilly" }
  ],
  expenses: [
    { item: "International flights", amount: money.flight, currency: "TWD / GBP / USD", status: "reimburse", proof: "Flight itinerary + payment screenshot", notes: "TPE-FRA-MAN / MAN-LHR-TPE" },
    { item: "AIB Conference Fee", amount: money.conference, currency: "TWD / GBP / USD", status: "reimburse", proof: "AIB payment receipt", notes: "Conference Fee US$325; donation US$0." },
    { item: "AIB membership fee", amount: money.membership, currency: "TWD / GBP / USD", status: "reimburse", proof: "AIB membership receipt", notes: "AIB 40 美元收據。" },
    { item: "NSTC daily allowance - Manchester", amount: money.manchesterDaily5, currency: "TWD / GBP / USD", status: "reimburse", proof: "115 年國外日支表", notes: "NT$10,381 / GBP 244 / US$324 per day × 5 conference days." }
  ],
  selfFundedExpenses: [
    { item: "INNSiDE Manchester", amount: money.hotel, currency: "TWD / GBP / USD", status: "self", proof: "Booking confirmation + final invoice", notes: "5 nights, includes 20% tax." },
    { item: "Manchester visitor charge", amount: money.visitorCharge, currency: "TWD / GBP / USD", status: "self", proof: "Check-out receipt", notes: "GBP 1.20 per room per night, paid locally." },
    { item: "Manchester ↔ London train", amount: money.trainAdvance, currency: "TWD / GBP / USD", status: "self", proof: "E-ticket / receipt after booking", notes: "7/4 outbound, 7/10 or 7/11 return." },
    { item: "London attraction tickets", amount: "Depends on selected paid attractions", currency: "TWD / GBP / USD", status: "self", proof: "Online ticket receipts", notes: "See Itinerary → Attraction fees. Many museums are free; paid items include Royal Observatory, Cutty Sark, Westminster Abbey, Tower sites, London Eye, etc." },
    { item: "London accommodation", amount: "TBD", currency: "TWD / GBP / USD", status: "self", proof: "Confirmation / invoice after booking", notes: "From 7/4; area not decided." }
  ],
  links: [
    ["AIB 2026 website", "https://www.aib.world/events/2026/"],
    ["AIB program overview", "https://www.aib.world/events/2026/program/conference-overview/"],
    ["AIB registration", "https://www.aib.world/events/2026/attend/registration/"],
    ["Avanti Manchester → London", "https://www.avantiwestcoast.co.uk/travel-information/train-times/manchester-piccadilly/london-euston"],
    ["Avanti London → Manchester", "https://www.avantiwestcoast.co.uk/travel-information/train-times/london-euston/manchester-piccadilly"],
    ["National Rail", "https://www.nationalrail.co.uk/"],
    ["Two Together Railcard", "https://www.nationalrail.co.uk/tickets-railcards-offers/promotions/two-together-railcard/"],
    ["TfL adult fares PDF", "https://content.tfl.gov.uk/adult-fares.pdf"],
    ["TfL fare capping", "https://tfl.gov.uk/fares/find-fares/capping"],
    ["Metrolink zones", "https://tfgm.com/tickets-and-passes/fare-zones/tram"],
    ["Metrolink day ticket", "https://tfgm.com/tickets-and-passes/tram-anytime-all-day-travelcard-adult"],
    ["UK ETA", "https://www.gov.uk/guidance/apply-for-an-electronic-travel-authorisation-eta"],
    ["INNSiDE Manchester", "https://www.melia.com/en/hotels/united-kingdom/manchester/innside-manchester"],
    ["Bank of Taiwan FX rates", "https://rate.bot.com.tw/xrt?Lang=zh-TW"],
    ["115 年國外日支表", "https://dbas.tycg.gov.tw/News_Content.aspx?n=12154&s=1591826"]
  ]
};

const sectionNav = {
  home: [["snapshot", "旅程一覽"], ["todo", "行前小記"], ["handoff", "分類索引"]],
  conference: [["accepted", "Accepted"], ["papers", "Papers"], ["rhythm", "Schedule"]],
  transport: [["flights", "Flights"], ["train", "Train"], ["local", "Local transit"]],
  stay: [["overview", "Overview"], ["conflict", "Conflict"], ["areas", "London areas"]],
  itinerary: [["daily", "每日行程"], ["tickets", "景點費用"], ["return", "回程提醒"]],
  map: [["travel-map", "Map"], ["route-links", "Routes"], ["map-notes", "Notes"]],
  budget: [["expenses", "費用明細"], ["totals", "金額小計"], ["proofs", "憑證順序"]],
  documents: [["links", "Official links"], ["privacy", "Privacy"]]
};

const state = {
  lang: getStoredLang()
};

function t(value) {
  if (typeof value === "string") return value;
  return value?.[state.lang] || value?.zh || "";
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
  if (!items?.length) return "";
  const classAttr = className ? ` class="${escapeHtml(className)}"` : "";
  return `<ul${classAttr}>${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`;
}

function renderSummaryCard({ status, title, value, note, facts }) {
  const valueMarkup = value ? `<strong>${escapeHtml(value)}</strong>` : "";
  const factsMarkup = facts ? renderList(facts) : "";
  const noteMarkup = note ? `<p>${escapeHtml(t(note))}</p>` : "";
  return `
    <article class="summary-card">
      ${status ? statusChip(status) : ""}
      <h3>${escapeHtml(t(title))}</h3>
      ${valueMarkup}
      ${factsMarkup}
      ${noteMarkup}
    </article>
  `;
}

function externalLink(href, label, className = "") {
  const classAttr = className ? ` class="${escapeHtml(className)}"` : "";
  return `<a${classAttr} href="${escapeHtml(href)}" target="_blank" rel="noreferrer noopener">${escapeHtml(label)} <span aria-hidden="true">↗</span></a>`;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function getStoredLang() {
  try {
    return localStorage.getItem("aib-lang") === "en" ? "en" : "zh";
  } catch {
    return "zh";
  }
}

function storeLang(lang) {
  try {
    localStorage.setItem("aib-lang", lang);
  } catch {
    // localStorage may be unavailable in private browsing.
  }
}

function renderChrome() {
  const pageId = document.body.dataset.page || "home";
  const nav = pages
    .map((page) => {
      const active = page.id === pageId ? ' class="active" aria-current="page"' : "";
      return `<a href="${page.href}" data-nav="${page.id}"${active}>${t(page.label)}</a>`;
    })
    .join("");

  document.querySelector("[data-site-header]").innerHTML = `
    <nav class="topbar" aria-label="${state.lang === "en" ? "Primary navigation" : "主要導覽"}">
      <a href="./index.html" class="brand"><span>AIB 2026</span><small>Manchester Notes</small></a>
      <div class="nav-pills">${nav}</div>
      <button class="lang-toggle" id="langToggle" type="button" aria-label="${state.lang === "en" ? "Switch to Chinese" : "Switch to English"}">${state.lang === "en" ? "中文" : "EN"}</button>
    </nav>
  `;

  document.querySelector("[data-site-footer]").innerHTML = `
    <footer class="site-footer">
      <p>${state.lang === "en" ? "AIB 2026 Manchester UK Travel Handbook" : "AIB 2026 Manchester 英國研討會旅遊手冊"}</p>
      <a href="./index.html">${state.lang === "en" ? "Back to overview" : "回到總覽"}</a>
    </footer>
  `;

  document.getElementById("langToggle")?.addEventListener("click", () => {
    state.lang = state.lang === "en" ? "zh" : "en";
    storeLang(state.lang);
    renderApp();
  });
}

function renderHero(pageId) {
  const hero = tripData.hero[pageId] || tripData.hero.home;
  const heroTitle = escapeHtml(t(hero.title)).replace("\n", "<br />");
  return `
    <div class="hero-grid handbook-hero-grid">
      <section class="hero-copy">
        <p class="eyebrow">${escapeHtml(hero.kicker)}</p>
        <h1>${heroTitle}</h1>
        <p class="hero-serif-note">${state.lang === "en" ? "Conference in Manchester. Travel in London." : "Conference in Manchester. Travel in London."}</p>
        <p class="hero-lead">${escapeHtml(t(hero.lead))}</p>
        <div class="hero-actions">
          <a class="button primary" href="./itinerary.html">${state.lang === "en" ? "Open itinerary" : "查看行程"}</a>
          <a class="button secondary" href="./budget.html">${state.lang === "en" ? "Open budget" : "查看報帳"}</a>
        </div>
      </section>
      <aside class="hero-panel dashboard-panel" aria-label="Trip snapshot">
        <div><span class="panel-label">${state.lang === "en" ? "Trip" : "旅程"}</span><strong>2026/06/29 - 2026/07/12</strong></div>
        <div><span class="panel-label">${state.lang === "en" ? "Conference" : "會議"}</span><strong>AIB 2026 Manchester</strong></div>
        <div><span class="panel-label">${state.lang === "en" ? "Stay" : "住宿"}</span><strong>${state.lang === "en" ? "Manchester booked / London pending" : "Manchester 已訂 / London 待訂"}</strong></div>
        <div><span class="panel-label">Last updated</span><strong>${tripData.lastUpdated}</strong></div>
      </aside>
    </div>
  `;
}

function renderQuickNav(pageId) {
  const items = sectionNav[pageId] || [];
  if (!items.length) return "";
  return `
    <nav class="quick-nav" aria-label="${state.lang === "en" ? "Section navigation" : "區塊導覽"}">
      ${items.map(([id, label]) => `<a href="#${escapeHtml(id)}">${escapeHtml(label)}</a>`).join("")}
    </nav>
  `;
}

function renderHome() {
  return `
    ${renderQuickNav("home")}
    <section class="section dashboard-section home-dashboard" id="snapshot">
      ${sectionHeading(
        state.lang === "en" ? "Overview" : "旅程總覽",
        state.lang === "en" ? "Conference schedule, travel plan, and budget" : "會議、交通、住宿與費用",
        state.lang === "en" ? "A practical handbook for the Manchester conference and London travel days." : "整理 Manchester 研討會與 London 旅遊段的重點資訊。",
        { center: true }
      )}
      <div class="command-board" aria-label="${state.lang === "en" ? "Trip highlights" : "旅程重點"}">
        <article class="command-primary">
          <span class="command-label">${state.lang === "en" ? "Current plan" : "目前安排"}</span>
          <h3>${state.lang === "en" ? "Manchester first, London after the conference." : "前段 Manchester 會議，後段 London 旅遊"}</h3>
          <p>${state.lang === "en" ? "Flights, conference fees, and the Manchester stay are confirmed. London accommodation and train tickets are still pending." : "航班、會議費與 Manchester 住宿已確認；London 住宿與火車票尚待預訂。"}</p>
        </article>
        <div class="command-metrics">
          <article><span>${state.lang === "en" ? "To claim" : "可報帳小計"}</span><strong>NT$156,039</strong></article>
          <article><span>${state.lang === "en" ? "Manchester stay" : "曼城住宿"}</span><strong>5 nights</strong></article>
          <article><span>${state.lang === "en" ? "London nights" : "倫敦夜晚"}</span><strong>${state.lang === "en" ? "open" : "未定"}</strong></article>
        </div>
      </div>
      <aside class="literary-strip" aria-label="${state.lang === "en" ? "Trip tone" : "旅程語氣"}">
        <span>Conference</span>
        <span>Research</span>
        <span>Museums</span>
        <span>Shopping</span>
      </aside>
      <div class="summary-grid premium-summary">
        ${tripData.summaryCards.map(renderSummaryCard).join("")}
      </div>
      ${renderAlert(tripData.alerts[0])}
    </section>
    <section class="section compact-section" id="todo">
      ${sectionHeading(
        state.lang === "en" ? "To-do" : "待辦事項",
        state.lang === "en" ? "Items still pending" : "尚未完成的事項"
      )}
      <div class="todo-list">
        ${tripData.todos.map((item) => `<article class="todo-item">${statusChip(item.status)}<p>${escapeHtml(t(item.text))}</p></article>`).join("")}
      </div>
    </section>
    <section class="section compact-section home-strip" aria-label="Trip highlights">
      <article>
        <span>01</span>
        <h3>${state.lang === "en" ? "Arrival" : "抵達"}</h3>
        <p>6/30 MAN 10:40 · INNSiDE after 15:00</p>
      </article>
      <article>
        <span>02</span>
        <h3>${state.lang === "en" ? "Conference" : "會議"}</h3>
        <p>7/1-7/3 · AIB main conference</p>
      </article>
      <article>
        <span>03</span>
        <h3>${state.lang === "en" ? "London" : "倫敦"}</h3>
        <p>7/4 · Manchester Piccadilly → Euston</p>
      </article>
      <article>
        <span>04</span>
        <h3>${state.lang === "en" ? "Return" : "回程"}</h3>
        <p>7/11 MAN → LHR → TPE</p>
      </article>
    </section>
    <section class="section compact-section" id="handoff">
      ${sectionHeading(
        state.lang === "en" ? "Sections" : "分類",
        state.lang === "en" ? "Browse by category" : "依類別查看",
        "",
        { center: true }
      )}
      <div class="page-grid handbook-page-grid">
        ${pages.slice(1).map((page, index) => `
          <a class="page-card" href="${page.href}">
            <span>${String(index + 1).padStart(2, "0")}</span>
            <strong>${escapeHtml(t(page.label))}</strong>
            <p>${escapeHtml(pageDescriptions[page.id][state.lang])}</p>
          </a>
        `).join("")}
      </div>
    </section>
  `;
}

const pageDescriptions = {
  conference: { zh: "發表文章、會議日期、接受狀態與 final program 待補提醒。", en: "Accepted work, conference dates, paper summaries, and final program reminders." },
  transport: { zh: "航班、Manchester-London 火車、倫敦與曼徹斯特市內交通。", en: "Flights, Manchester-London trains, and London/Manchester local transit." },
  stay: { zh: "Manchester 的房間、London 的空白，以及兩座城市之間的日期銜接。", en: "The Manchester room, the open London nights, and the handoff between the two cities." },
  itinerary: { zh: "每天的路線、停留與可以隨興加上的片段。", en: "Daily routes, pauses, and the optional moments that can be added along the way." },
  map: { zh: "曼徹斯特與倫敦主要地點、每日路線與完整 Google Maps 路線。", en: "Manchester and London map pins, daily route links, and the full Google Maps route." },
  budget: { zh: "三幣別費用表、憑證、狀態與報帳包順序。", en: "Three-currency expense table, proof, status, and reimbursement packet order." },
  documents: { zh: "官方連結與文件類型，不公開私人憑證細節。", en: "Official links and document categories without exposing private proof details." }
};

function renderAlert(alert) {
  return `
    <aside class="alert-card" role="note">
      <div>${statusChip("alert")}<h3>${escapeHtml(t(alert.title))}</h3></div>
      <p>${escapeHtml(t(alert.body))}</p>
    </aside>
  `;
}

function renderConference() {
  return `
    ${renderQuickNav("conference")}
    <section class="section compact-section" id="accepted">
      ${sectionHeading("Accepted Work", state.lang === "en" ? "Confirmed presentation status" : "已接受發表狀態")}
      <div class="summary-grid two">
        ${[
          { status: "confirmed", title: "Competitive Presentation", note: state.lang === "en" ? "Accepted and usable as conference presentation proof." : "已接受，可作為會議發表證明。" },
          { status: "confirmed", title: "Interactive Presentation", note: state.lang === "en" ? "Accepted and usable as conference presentation proof." : "已接受，可作為會議發表證明。" }
        ].map(renderSummaryCard).join("")}
      </div>
    </section>
    <section class="section compact-section" id="papers">
      ${sectionHeading(
        "Paper Summaries",
        state.lang === "en" ? "Presentation abstracts for the handbook" : "研討會文章名稱與簡介",
        state.lang === "en" ? "Only titles and short summaries are included; full papers are not published here." : "只放題名與簡介，不放全文。"
      )}
      <div class="stack">
        ${tripData.paperSummaries.map((paper) => `
          <article class="feature-card paper-card">
            <div class="card-meta">${statusChip(paper.status)}<span>${escapeHtml(paper.type)}</span></div>
            <h3>${escapeHtml(paper.title)}</h3>
            <p>${escapeHtml(t(paper.summary))}</p>
          </article>
        `).join("")}
      </div>
    </section>
    <section class="section compact-section" id="rhythm">
      ${sectionHeading("Schedule", state.lang === "en" ? "Conference rhythm" : "會議節奏")}
      <div class="timeline-list">
        <article><strong>6/29</strong><p>Pre-conference programming</p></article>
        <article><strong>6/30</strong><p>Research and Policy Dialogue / Opening Plenary / Reception</p></article>
        <article><strong>7/1-7/3</strong><p>Main Conference parallel sessions</p></article>
      </div>
    </section>
  `;
}

function renderTransport() {
  return `
    ${renderQuickNav("transport")}
    <section class="section compact-section" id="flights">
      ${sectionHeading(state.lang === "en" ? "Flights" : "航班", state.lang === "en" ? "Flight details" : "航班與轉機")}
      <div class="flight-grid">
        ${tripData.flights.map((flight) => `
          <article class="flight-card">
            <div class="flight-head">${statusChip("confirmed")}<strong>${t(flight.label)} · ${flight.date}</strong></div>
            ${flight.legs.map((leg) => `
              <div class="route">
                <div><b>${escapeHtml(leg.from)}</b><span>${escapeHtml(leg.time.split(" → ")[0])}<br />${escapeHtml(leg.detail[state.lang])}</span></div>
                <div class="line">${escapeHtml(leg.flight)}<br />${escapeHtml(leg.duration)}</div>
                <div><b>${escapeHtml(leg.to)}</b><span>${escapeHtml(leg.time.split(" → ")[1])}</span></div>
              </div>
            `).join("")}
          </article>
        `).join("")}
      </div>
      <div class="note-grid">
        <article><h3>${state.lang === "en" ? "Flight reimbursement" : "機票報帳"}</h3><p>${money.flight}. ${state.lang === "en" ? "Base fare and taxes are documented in the fare screenshot." : "票面價與稅金 / 航空公司附加費另列在票價明細截圖。"}</p></article>
        <article><h3>${state.lang === "en" ? "Transfer reminder" : "轉機提醒"}</h3><p>${state.lang === "en" ? "Return routing starts from MAN. Do not skip MAN-LHR even if the leisure portion is in London." : "回程為 MAN 起飛；即使後段在倫敦旅遊，也不要跳過 MAN-LHR 航段。"}</p></article>
      </div>
    </section>
    <section class="section compact-section" id="train">
      ${sectionHeading(state.lang === "en" ? "Train" : "火車", "Manchester ↔ London")}
      <div class="summary-grid">
        ${[
          { status: "book", title: "7/4 Manchester → London", note: `Manchester Piccadilly → London Euston, ${state.lang === "en" ? "direct Avanti West Coast, about 2h15m. A late-morning train keeps the day unhurried." : "Avanti West Coast 直達約 2 小時 15 分；上午晚一點出發，抵達倫敦時仍有從容的下午。"}` },
          { status: "book", title: "7/10 London → Manchester", note: state.lang === "en" ? "An evening return gives Manchester one quiet night before the flight." : "傍晚或晚上回到 Manchester，讓隔天航班前多一晚安定。" }
        ].map(renderSummaryCard).join("")}
      </div>
      <div class="fare-grid dashboard-fares">
        ${tripData.trainFares.map((fare) => `
          <article>
            ${statusChip(fare.status)}
            <h3>${escapeHtml(fare.item)}</h3>
            <strong>${escapeHtml(fare.amount)}</strong>
            <p>${escapeHtml(t(fare.note))}</p>
          </article>
        `).join("")}
      </div>
    </section>
    <section class="section compact-section" id="local">
      ${sectionHeading(state.lang === "en" ? "Getting Around" : "市內交通", state.lang === "en" ? "London & Manchester local transport" : "倫敦與曼徹斯特市內交通")}
      <div class="summary-grid two">
        ${tripData.localTransit.map((city) => `
          <article class="summary-card">
            <h3>${escapeHtml(city.city)}</h3>
            ${renderList(city.items)}
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function renderStay() {
  return `
    ${renderQuickNav("stay")}
    <section class="section compact-section" id="overview">
      ${sectionHeading(state.lang === "en" ? "Accommodation" : "住宿", state.lang === "en" ? "Where to stay" : "住宿安排")}
      <div class="summary-grid">
        ${tripData.stay.map(renderSummaryCard).join("")}
      </div>
    </section>
    <section class="section compact-section" id="conflict">${renderAlert(tripData.alerts[0])}</section>
    <section class="section compact-section" id="areas">
      ${sectionHeading("London Areas", state.lang === "en" ? "London neighborhoods to consider" : "幾個適合停留的倫敦街區")}
      <div class="tag-cloud">
        ${["Euston", "King's Cross", "Bloomsbury", "South Kensington", "Paddington", "Covent Garden"].map((area) => `<span>${area}</span>`).join("")}
      </div>
    </section>
  `;
}

function renderItinerary() {
  return `
    ${renderQuickNav("itinerary")}
    <section class="section compact-section" id="daily">
      ${sectionHeading(state.lang === "en" ? "Daily Plan" : "每日行程", state.lang === "en" ? "What to do each day" : "每天怎麼安排")}
      <div class="itinerary-grid">
        ${tripData.itinerary.map((day) => `
          <article class="itinerary-card">
            <div class="itinerary-head"><span>${escapeHtml(day.date)}</span>${statusChip(day.status)}</div>
            <h3>${escapeHtml(t(day.title))}</h3>
            ${renderMiniList(state.lang === "en" ? "Main stops" : "主要停留", day.must)}
            ${renderMiniList(state.lang === "en" ? "Optional" : "可選", day.optional)}
            ${day.tickets ? renderMiniList(state.lang === "en" ? "Admission / fees" : "門票 / 費用", day.tickets) : ""}
            ${renderMiniList(state.lang === "en" ? "Notes / transit" : "提醒 / 交通", day.notes)}
          </article>
        `).join("")}
      </div>
    </section>
    <section class="section compact-section" id="tickets">
      ${sectionHeading(
        state.lang === "en" ? "Admission" : "景點費用",
        state.lang === "en" ? "Attraction fees to check before booking" : "景點門票與預算估算",
        state.lang === "en" ? "Prices are current planning references. Re-check official sites before booking for July 2026." : "以下為目前查到的規劃參考價；2026/7 出發前請再以官方網站確認。"
      )}
      <div class="ticket-grid">
        ${tripData.attractionCosts.map((item) => `
          <article class="ticket-card">
            <div class="ticket-card-head"><span>${escapeHtml(item.day)}</span>${statusChip(item.status)}</div>
            <h3>${escapeHtml(item.attraction)}</h3>
            <strong>${escapeHtml(item.fee)}</strong>
            <p>${escapeHtml(item.estimate)}</p>
            <small>${escapeHtml(t(item.note))}</small>
            ${externalLink(item.source, state.lang === "en" ? "Official source" : "官方來源")}
          </article>
        `).join("")}
      </div>
    </section>
    <section class="section compact-section" id="return">
      ${renderAlert({ title: { zh: "7/11 航班從 Manchester 起飛", en: "11 July flight departs from Manchester" }, body: { zh: "後段雖然在倫敦旅遊，回程機票仍是 MAN-LHR-TPE。7/10 晚上回到 Manchester，會讓最後一天安靜許多。", en: "Even though the leisure segment is in London, the return ticket starts MAN-LHR-TPE. Returning to Manchester on the evening of 10 July keeps the final day calm." } })}
    </section>
  `;
}

function renderMiniList(title, items) {
  if (!items?.length) return "";
  return `<div class="mini-list"><strong>${escapeHtml(title)}</strong>${renderList(items, "")}</div>`;
}

function mapEmbedUrl(query) {
  return `https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`;
}

function renderMap() {
  const defaultLocation = tripData.mapLocations[0];
  const cityGroups = [...new Set(tripData.mapLocations.map((item) => item.city))];
  return `
    ${renderQuickNav("map")}
    <section class="section compact-section" id="travel-map">
      ${sectionHeading(
        state.lang === "en" ? "Travel Map" : "旅程地圖",
        state.lang === "en" ? "The route, opened gently" : "把路線輕輕展開",
        state.lang === "en" ? "Tap a place to open it in the map. The list keeps Manchester practical and London beautifully walkable." : "點選地點就能在右側地圖打開；曼徹斯特保留會議所需的俐落，倫敦則留給可以慢慢走的街景。"
      )}
      <div class="map-actions">
        ${externalLink(tripData.mapRouteUrl, state.lang === "en" ? "Open full route in Google Maps" : "開啟完整 Google Maps 路線")}
      </div>
      <div class="map-layout">
        <div class="map-list" aria-label="${state.lang === "en" ? "Map locations" : "地圖地點"}">
          ${tripData.mapLocations.map((location, index) => `
            <button class="map-location-button${index === 0 ? " active" : ""}" type="button" data-map-query="${escapeHtml(location.query)}" aria-pressed="${index === 0 ? "true" : "false"}">
              <span class="map-location-top"><span>${escapeHtml(location.city)}</span>${statusChip(location.status)}</span>
              <span class="map-location-title">${escapeHtml(t(location.title))}</span>
              <span class="map-location-note">${escapeHtml(t(location.note))}</span>
            </button>
          `).join("")}
        </div>
        <div class="map-frame-wrap">
          <iframe id="travelMapFrame" title="${state.lang === "en" ? "AIB 2026 UK travel map" : "AIB 2026 英國旅程地圖"}" src="${mapEmbedUrl(defaultLocation.query)}" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </section>
    <section class="section compact-section" id="route-links">
      ${sectionHeading(state.lang === "en" ? "Daily Routes" : "每日路線", state.lang === "en" ? "Open the day you need" : "打開那一天的路")}
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
            <h3>${escapeHtml(city)}</h3>
            <p>${city === "Manchester"
              ? (state.lang === "en" ? "Keep this side practical: airport, hotel, station, and conference-day movement." : "這一側保持實用：機場、飯店、車站與會議日移動。")
              : (state.lang === "en" ? "Keep this side slow: museums, riverside walks, royal landmarks, and shopping streets." : "這一側放慢：博物館、河岸、皇室地標與百貨街區。")
            }</p>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function expenseTableHeads() {
  return state.lang === "en"
    ? ["Item", "Amount", "Currency", "Status", "Receipt / proof", "Notes"]
    : ["項目", "金額", "幣別", "狀態", "收據 / 憑證", "備註"];
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
              <td data-label="${escapeHtml(heads[0])}">${escapeHtml(row.item)}</td>
              <td data-label="${escapeHtml(heads[1])}">${escapeHtml(row.amount)}</td>
              <td data-label="${escapeHtml(heads[2])}">${escapeHtml(row.currency)}</td>
              <td data-label="${escapeHtml(heads[3])}">${statusChip(row.status)}</td>
              <td data-label="${escapeHtml(heads[4])}">${escapeHtml(row.proof)}</td>
              <td data-label="${escapeHtml(heads[5])}">${escapeHtml(row.notes)}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>`;
}

function renderBudget() {
  const reimbursableTotals = "NT$156,039 / GBP 3,671 / US$4,870";
  const selfFundedKnown = "NT$38,525 / GBP 906.90 / US$1,202";
  return `
    ${renderQuickNav("budget")}
    <section class="section compact-section" id="expenses">
      ${sectionHeading(
        state.lang === "en" ? "Reimbursement" : "報帳",
        state.lang === "en" ? "Items to claim" : "可報帳項目",
        state.lang === "en" ? "Only these items are listed for reimbursement. Other trip costs are separated below as self-funded." : "目前只有以下項目列入報帳；其他旅遊相關費用另列在自費。"
      )}
      ${renderExpenseTable(tripData.expenses, state.lang === "en" ? "Reimbursable expenses" : "可報帳項目")}
      ${sectionHeading(
        state.lang === "en" ? "Self-funded" : "自費",
        state.lang === "en" ? "Personal travel costs" : "自費項目",
        state.lang === "en" ? "Keep receipts for personal records, but do not include these in the reimbursement total." : "以下可保留收據自用，但不列入這次報帳金額。",
        { sub: true }
      )}
      ${renderExpenseTable(tripData.selfFundedExpenses, state.lang === "en" ? "Self-funded expenses" : "自費項目")}
    </section>
    <section class="section compact-section" id="totals">
      <div class="summary-grid three">
        <article class="summary-card">${statusChip("reimburse")}<h3>${state.lang === "en" ? "Reimbursement total" : "可報帳小計"}</h3><strong>${reimbursableTotals}</strong><p>${state.lang === "en" ? "Flights, AIB conference fee, AIB membership fee, and Manchester daily allowance for 5 conference days." : "含機票、AIB 會議費、AIB 會員費，以及 Manchester 研討會 5 天日支費。"}</p></article>
        <article class="summary-card">${statusChip("reimburse")}<h3>${state.lang === "en" ? "NSTC daily allowance" : "國科會日支費"}</h3><strong>${money.manchesterDaily5}</strong><p>${state.lang === "en" ? "Manchester daily rate is NT$10,381 / GBP 244 / US$324 × 5 conference days." : "Manchester 日支費以 NT$10,381 / GBP 244 / US$324 × 研討會 5 天計算。"}</p></article>
        <article class="summary-card">${statusChip("self")}<h3>${state.lang === "en" ? "Self-funded known subtotal" : "已知自費小計"}</h3><strong>${selfFundedKnown}</strong><p>${state.lang === "en" ? "Known self-funded subtotal currently includes Manchester hotel and visitor charge only; London hotel, trains, and attraction tickets remain variable." : "目前只含 Manchester 住宿與旅遊稅；倫敦住宿、火車與景點門票會依實際預訂變動。"}</p></article>
      </div>
    </section>
    <section class="section compact-section" id="proofs">
      ${sectionHeading("Proofs", state.lang === "en" ? "Reimbursement documents" : "報帳資料順序")}
      <ol class="proof-list">
        <li>Acceptance letters x 2</li>
        <li>AIB invitation letter</li>
        <li>AIB conference fee receipt</li>
        <li>AIB membership fee receipt</li>
        <li>Flight itinerary and payment details</li>
        <li>115 年國外日支表 / NSTC daily allowance reference</li>
      </ol>
    </section>
  `;
}

function renderDocuments() {
  return `
    ${renderQuickNav("documents")}
    <section class="section compact-section" id="links">
      ${sectionHeading("Official Links", state.lang === "en" ? "Useful official links" : "常用官方連結")}
      <div class="link-grid">
        ${tripData.links.map(([label, href]) => externalLink(href, label)).join("")}
      </div>
    </section>
    <section class="section compact-section" id="privacy">
      <div class="privacy-note">
        ${statusChip("confirmed")}
        <h3>${state.lang === "en" ? "Privacy rule" : "公開頁面隱私原則"}</h3>
        <p>${state.lang === "en" ? "This page intentionally avoids booking numbers, payment card details, personal email, receipt IDs, and private files." : "此頁刻意不放訂位編號、信用卡資訊、個人 email、收據編號與私人檔案內容。"}</p>
      </div>
    </section>
  `;
}

const renderers = {
  home: renderHome,
  conference: renderConference,
  transport: renderTransport,
  stay: renderStay,
  itinerary: renderItinerary,
  map: renderMap,
  budget: renderBudget,
  documents: renderDocuments
};

function renderApp() {
  const pageId = document.body.dataset.page || "home";
  document.documentElement.lang = state.lang === "en" ? "en" : "zh-Hant";
  renderChrome();
  const heroSlot = document.querySelector("[data-page-hero]");
  if (heroSlot) heroSlot.innerHTML = renderHero(pageId);
  const content = document.getElementById("page-content");
  if (content) content.innerHTML = renderers[pageId]?.() || renderHome();
  wireMap();
  wireBackToTop();
  updateProgress();
}

function wireMap() {
  const frame = document.getElementById("travelMapFrame");
  if (!frame) return;
  document.querySelectorAll(".map-location-button").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".map-location-button").forEach((item) => {
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
  if (!button || button.dataset.bound) return;
  button.dataset.bound = "true";
  button.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}

window.addEventListener("scroll", () => {
  updateProgress();
  document.getElementById("backToTop")?.classList.toggle("visible", window.scrollY > 500);
}, { passive: true });

document.addEventListener("click", (event) => {
  const link = event.target.closest('a[href^="#"]');
  if (!link) return;
  const target = document.querySelector(link.getAttribute("href"));
  if (!target) return;
  event.preventDefault();
  target.scrollIntoView({ behavior: "smooth", block: "start" });
});

renderApp();
