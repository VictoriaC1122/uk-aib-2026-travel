const pages = [
  { id: "home", label: { zh: "總覽", en: "Overview" }, href: "./index.html" },
  { id: "conference", label: { zh: "會議", en: "Conference" }, href: "./conference.html" },
  { id: "transport", label: { zh: "交通", en: "Transport" }, href: "./transport.html" },
  { id: "stay", label: { zh: "住宿", en: "Stay" }, href: "./stay.html" },
  { id: "itinerary", label: { zh: "行程", en: "Itinerary" }, href: "./itinerary.html" },
  { id: "shopping", label: { zh: "購物", en: "Shopping" }, href: "./shopping.html" },
  { id: "budget", label: { zh: "預算", en: "Budget" }, href: "./budget.html" },
  { id: "reminders", label: { zh: "旅程筆記", en: "Travel Notes" }, href: "./reminders.html" },
  { id: "firstTime", label: { zh: "初訪英國", en: "First UK Visit" }, href: "./first-time.html" },
  { id: "map", label: { zh: "地圖", en: "Map" }, href: "./map.html" },
  { id: "documents", label: { zh: "清單", en: "Checklist" }, href: "./links.html" }
];

const primaryNavPageIds = ["home", "conference", "stay", "transport", "budget", "documents"];

const primaryNavLabels = {};

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
  hotelPerNight: "NT$7,654 / GBP 180.18 / US$239",
  hotelPerPersonTotal: "NT$19,135 / GBP 450.45 / US$597",
  hotelPerPersonNight: "NT$3,827 / GBP 90.09 / US$119",
  visitorCharge: "約 NT$255 / GBP 6 / US$8",
  visitorChargePerPerson: "約 NT$128 / GBP 3 / US$4",
  personalKnownSelfFunded: "約 NT$19,263 / GBP 453.45 / US$601",
  manchesterDaily: "NT$10,381 / GBP 244 / US$324 / day",
  manchesterDaily5: "NT$51,905 / GBP 1,220 / US$1,620",
  londonDaily: "NT$16,340 / GBP 385 / US$510 / day",
  trainAdvance: { zh: "每人來回 NT$2,846 起 / GBP 67 起 / US$89 起", en: "per person return from NT$2,846 / GBP 67 / US$89" },
  railcard: "NT$1,487 / GBP 35 / US$46"
};

const homeOverviewCards = [
  {
    tag: { zh: "旅程", en: "Trip" },
    title: { zh: "旅程總覽", en: "Travel Overview" },
    value: { zh: "Jun 29 – Jul 12, 2026", en: "Jun 29 – Jul 12, 2026" },
    note: { zh: "先到曼徹斯特開會，再接倫敦與巴黎。", en: "Manchester for AIB first, followed by London and Paris." }
  },
  {
    tag: { zh: "城市", en: "City" },
    title: { zh: "目的地", en: "Destination" },
    value: { zh: "Manchester · London · Paris", en: "Manchester · London · Paris" },
    note: { zh: "主會議在曼徹斯特，後段接倫敦與巴黎。", en: "The conference base is Manchester, followed by London and Paris." }
  },
  {
    tag: { zh: "會議", en: "AIB" },
    title: { zh: "會議", en: "Conference" },
    value: "AIB 2026",
    note: { zh: "6/30–7/3，兩種發表形式都已確認。", en: "30 Jun-3 Jul, with both presentation formats confirmed." }
  },
  {
    tag: { zh: "住宿", en: "Hotel" },
    title: { zh: "住宿", en: "Hotel" },
    value: "INNSiDE Manchester",
    note: { zh: "曼徹斯特已定，倫敦與巴黎列出首選。", en: "Manchester is set; London and Paris first choices are listed." }
  },
  {
    tag: { zh: "狀態", en: "Status" },
    title: { zh: "目前狀態", en: "Status" },
    value: { zh: "已確認 · 規劃中", en: "Confirmed · Planning Dashboard" },
    note: { zh: "航班與會議已定，後段城市安排持續整理。", en: "Flights and conference are set; the later-city plan is being refined." }
  }
];

const homeKeyTimeline = [
  {
    date: "Jun 30",
    title: { zh: "抵達曼徹斯特", en: "Arrival in Manchester" },
    note: { zh: "法蘭克福轉機後抵達曼徹斯特，入住並進入會議節奏。", en: "Arrive in Manchester after Frankfurt and settle into the conference week." }
  },
  {
    date: "Jun 30 – Jul 3",
    title: { zh: "AIB 2026 會議", en: "AIB 2026 Conference" },
    note: { zh: "會議主日程、發表與交流集中在這段時間。", en: "Main conference sessions, presentations, and networking are centered here." }
  },
  {
    date: "Jul 4 – Jul 7",
    title: { zh: "倫敦段", en: "London segment" },
    note: { zh: "從曼徹斯特南下倫敦，安排地標散步、購物與城市行程。", en: "Travel south to London for landmarks, shopping, and city days." }
  },
  {
    date: "Jul 7 – Jul 11",
    title: { zh: "巴黎段", en: "Paris segment" },
    note: { zh: "搭 Eurostar 到巴黎，接續鐵塔、羅浮宮與香榭麗舍。", en: "Take Eurostar to Paris for the Eiffel Tower, the Louvre, and the Champs-Elysees." }
  },
  {
    date: "Jul 11",
    title: { zh: "巴黎 → 曼徹斯特 → 回程", en: "Paris → Manchester → homebound" },
    note: { zh: "中午從巴黎飛曼徹斯特，晚間接 BA 與華航返台。", en: "Fly from Paris to Manchester at midday, then connect to BA and China Airlines in the evening." }
  }
];

const currencies = [
  { id: "TWD", label: { zh: "新台幣", en: "TWD" }, prefix: "NT$" },
  { id: "GBP", label: { zh: "英鎊", en: "GBP" }, prefix: "GBP" },
  { id: "USD", label: { zh: "美元", en: "USD" }, prefix: "US$" }
];

const hotelImage = "https://englandrover.com/wp-content/uploads/2018/11/innside-melia-manchester-05.jpg";

const tripData = {
  lastUpdated: "2026-04-17 12:05",
  hero: {
    home: {
      kicker: { zh: "旅程總覽", en: "Trip Overview" },
      title: { zh: "AIB 2026 Manchester", en: "AIB 2026 Manchester" },
      lead: {
        zh: "UK Travel Handbook",
        en: "UK Travel Handbook"
      }
    },
    conference: {
      kicker: { zh: "會議安排", en: "Conference" },
      title: { zh: "會議總覽", en: "Conference Dashboard" },
      lead: { zh: "會議日期、註冊、現場節奏與需要保留的文件集中整理。", en: "Conference dates, registration, on-site rhythm, and supporting documents in one view." }
    },
    transport: {
      kicker: { zh: "交通規劃", en: "Transport" },
      title: { zh: "航班、火車與市內交通", en: "Flights, Trains & Local Transit" },
      lead: { zh: "去程 TPE-FRA-MAN，之後接曼徹斯特到倫敦、倫敦到巴黎，再由巴黎飛回曼徹斯特接續返台。", en: "Outbound route is TPE-FRA-MAN, followed by Manchester to London, London to Paris, and a Paris flight back to Manchester before heading home." }
    },
    stay: {
      kicker: { zh: "住宿安排", en: "Accommodation" },
      title: { zh: "住宿與城市切換", en: "Accommodation & City Split" },
      lead: { zh: "曼徹斯特會議住宿已定，倫敦與巴黎後段住宿則整理成首選與備選。", en: "The Manchester conference stay is set, while London and Paris are organized into first-choice and backup stays." }
    },
    itinerary: {
      kicker: { zh: "每日行程", en: "Itinerary" },
      title: { zh: "每日行程安排", en: "Daily Itinerary" },
      lead: { zh: "把會議主段、倫敦、巴黎與回程拆開整理，打開就能直接看當天安排。", en: "Conference days, London, Paris, and the final return are separated so each day reads quickly." }
    },
    shopping: {
      kicker: { zh: "英國購物", en: "Shopping" },
      title: { zh: "英國有什麼值得買", en: "What to Buy in the UK" },
      lead: { zh: "把茶葉、餅乾、果醬、超市零食與藥妝分開整理，逛的時候會比較順。", en: "Tea, biscuits, preserves, supermarket snacks, and pharmacy staples are grouped separately for easier browsing." }
    },
    map: {
      kicker: { zh: "旅程地圖", en: "Travel Map" },
      title: { zh: "英國旅程地圖", en: "UK Travel Map" },
      lead: { zh: "整理曼徹斯特與倫敦的主要地點、火車動線與每日路線。", en: "Key Manchester and London locations, train movements, and daily routes in one map." }
    },
    budget: {
      kicker: { zh: "預算整理", en: "Budget" },
      title: { zh: "預算、報帳與自費", en: "Budget, Claims & Self-Funded Costs" },
      lead: { zh: "可報帳與自費分開整理，並提供新台幣、英鎊與美元切換。", en: "Reimbursable and self-funded costs are separated, with TWD, GBP, and USD views." }
    },
    reminders: {
      kicker: { zh: "行前提醒", en: "Reminders" },
      title: { zh: "提醒與待確認事項", en: "Reminders & Pending Items" },
      lead: { zh: "把還沒完成的安排與需要再確認的細節放在這裡，出發前比較不會漏掉。", en: "Pending arrangements and final checks are collected here so nothing gets missed before departure." }
    },
    firstTime: {
      kicker: { zh: "初次到英國", en: "First UK Visit" },
      title: { zh: "第一次去英國的實用提醒", en: "First-Time UK Notes" },
      lead: { zh: "入境、付款、交通與安全重點整理在同一頁，第一次去英國也比較安心。", en: "Entry, payment, transport, and safety essentials collected in one page for a first UK trip." }
    },
    documents: {
      kicker: { zh: "官方連結", en: "Official Links" },
      title: { zh: "文件與官方連結", en: "Documents & Official Links" },
      lead: { zh: "只放公開官方連結與文件類型提醒，不揭露訂位編號、付款資訊、email 或私人收據內容。", en: "Only public official links and document reminders are listed. Booking numbers, payment details, emails, and private receipt contents are excluded." }
    }
  },
  summaryCards: [
    { status: "confirmed", title: { zh: "AIB 會議日期", en: "AIB conference dates" }, value: "2026/06/30 - 2026/07/03", note: { zh: "曼徹斯特主會議，重點放在發表與交流。", en: "Manchester conference days, centered on presentations and networking." } },
    { status: "confirmed", title: { zh: "整段旅程日期", en: "Trip dates" }, value: "2026/06/29 - 2026/07/12", note: { zh: "曼徹斯特 → 倫敦 → 巴黎 → 曼徹斯特。", en: "Manchester → London → Paris → Manchester." } },
    { status: "confirmed", title: { zh: "曼徹斯特住宿狀態", en: "Manchester hotel status" }, value: "INNSiDE Manchester", note: { zh: "6/30-7/5 已訂，雙床房，2 人，房價 GBP 900.90。", en: "Booked for 30 June-5 July, twin beds for two guests, GBP 900.90." } },
    { status: "book", title: { zh: "後段住宿規劃", en: "Later-stay planning" }, value: { zh: "倫敦 3 晚 / 巴黎 4 晚", en: "3 nights London / 4 nights Paris" }, note: { zh: "倫敦與巴黎都已列出首選住宿。", en: "First-choice stays are listed for both London and Paris." } }
  ],
  todos: [
    { status: "book", text: { zh: "倫敦住宿先看 The Langham London，其次 The Clermont Charing Cross。", en: "For London, check The Langham London first, then The Clermont Charing Cross." } },
    { status: "book", text: { zh: "7/4 曼徹斯特到倫敦的 Avanti West Coast 車票還沒買。", en: "The 4 July Avanti West Coast ticket from Manchester to London is still open." } },
    { status: "book", text: { zh: "7/7 倫敦到巴黎的 Eurostar 也還要補訂。", en: "The 7 July Eurostar from London to Paris still needs to be booked." } },
    { status: "reimburse", text: { zh: "接受函、邀請函、AIB 收據與國際航班憑證放同一個資料夾。", en: "Keep acceptance letters, the invitation, AIB receipts, and international flight proofs together." } },
    { status: "pending", text: { zh: "Interactive 發表時段等 final program 確認後再補進會議頁。", en: "The Interactive presentation slot can be added after the final program is confirmed." } }
  ],
  alerts: [
    {
      title: { zh: "7/4 住宿與移動要再對一次", en: "Re-check the 4 July stay handoff" },
      body: { zh: "曼徹斯特訂房目前到 7/5 退房，但行程規劃是 7/4 轉往倫敦。等倫敦住宿確定後，再決定是否保留這晚緩衝。", en: "The Manchester booking currently runs until 5 July, while the route moves to London on 4 July. Decide later whether to keep that extra night as a buffer." }
    }
  ],
  reminders: [
    { status: "book", title: { zh: "倫敦住宿", en: "London accommodation" }, body: { zh: "7/4–7/7 先看 The Langham London；若想住在更靠車站與劇院區，可改看 The Clermont Charing Cross。", en: "For 4-7 July, start with The Langham London; The Clermont Charing Cross is the more station-friendly alternative." } },
    { status: "book", title: { zh: "曼徹斯特到倫敦", en: "Manchester to London" }, body: { zh: "7/4 建議搭 Avanti West Coast，直達約 2 小時 10 分。Advance 票越早看越容易有好價。", en: "For 4 July, Avanti West Coast is the cleanest option at about 2h10 direct. Advance fares are best checked early." } },
    { status: "book", title: { zh: "倫敦到巴黎", en: "London to Paris" }, body: { zh: "7/7 建議搭 Eurostar，市中心直達市中心，車程約 2 小時 20 分。", en: "For 7 July, Eurostar is the simplest city-centre to city-centre option at about 2h20." } },
    { status: "reimburse", title: { zh: "報帳資料", en: "Reimbursement packet" }, body: { zh: "本次可報帳仍以國際機票、AIB 會議費、AIB 會員費與國科會日支費為主；倫敦、巴黎段另列自費。", en: "Claims remain limited to international flights, the AIB conference fee, the AIB membership fee, and NSTC allowance; London and Paris stay self-funded." } },
    { status: "confirmed", title: { zh: "7/11 回程串接", en: "11 July flight chain" }, body: { zh: "7/11 先從巴黎飛曼徹斯特，再接 BA1371 與 CI82 回台北，中間時間要留意轉機節奏。", en: "On 11 July, fly Paris to Manchester first, then connect to BA1371 and CI82 back to Taipei, keeping a close eye on the transfer rhythm." } }
  ],
  firstTimeNotes: {
    essentials: [
      {
        status: "confirmed",
        title: { zh: "入境文件放在手邊", en: "Keep entry documents close" },
        body: { zh: "護照、UK ETA 核准信、回程機票、住宿資料與 AIB 邀請函放在同一個容易拿的位置。台灣護照旅客通常會走人工查驗；被問目的時，簡短說明參加 AIB conference in Manchester，再接 London travel。", en: "Keep your passport, UK ETA approval, return ticket, accommodation details, and AIB invitation together. Taiwan passport holders should expect a staffed border check; if asked, briefly say you are attending the AIB conference in Manchester, followed by London travel." },
        source: "https://www.gov.uk/uk-border-control/at-border-control"
      },
      {
        status: "confirmed",
        title: { zh: "ETA 已核准，但仍帶著紀錄", en: "ETA approved, but keep the record" },
        body: { zh: "UK ETA 是登機與入境前的重要旅行授權。雖然系統會連到護照，手機與雲端仍留一份核准信，比現場翻信件安心。", en: "The UK ETA is an important travel authorization before boarding and arrival. It is linked to the passport, but keeping a copy on your phone and cloud storage makes checks easier." },
        source: "https://www.gov.uk/guidance/check-when-you-can-get-an-electronic-travel-authorisation-eta"
      },
      {
        status: "alert",
        title: { zh: "不要帶肉類、乳製品入境", en: "Avoid meat and dairy in luggage" },
        body: { zh: "從台灣等非歐盟地區入境英國，肉類與乳製品通常不能帶。餅乾、巧克力、乾燥麵條等較單純的包裝食品比較安全；不確定就不要帶，或出發前查官方清單。", en: "When entering Great Britain from outside the EU, meat and milk-based products are generally not allowed. Simple packaged snacks such as biscuits, chocolate, or plain dried noodles are usually safer; if unsure, skip it or check the official list before packing." },
        source: "https://www.gov.uk/guidance/personal-food-plant-and-animal-product-imports"
      },
      {
        status: "alert",
        title: { zh: "購物免稅額留一點餘裕", en: "Leave room in your customs allowance" },
        body: { zh: "從境外帶入英國的自用品與禮物有個人免稅額；若超過，需申報並可能繳稅。高單價購物與伴手禮建議留收據，也不要替別人攜帶商業用途物品。", en: "Goods and gifts brought into the UK have personal allowance limits. If you exceed them, you may need to declare and pay tax or duty. Keep receipts for higher-value purchases and do not carry commercial goods for someone else." },
        source: "https://www.gov.uk/duty-free-goods/arrivals-from-outside-the-eu"
      }
    ],
    city: [
      {
        status: "confirmed",
        title: { zh: "用同一張卡刷進刷出", en: "Tap with the same card" },
        body: { zh: "倫敦地鐵、巴士與火車使用 contactless、Apple Pay、Google Pay 或 Oyster 時，進出站要用同一張卡或同一支手機。巴士只需上車刷一次；地鐵與火車通常要進出站都刷。", en: "For London transport, use the same contactless card, Apple Pay, Google Pay, or Oyster card for the whole journey. Buses need one tap when boarding; Tube and rail journeys usually require tap in and tap out." },
        source: "https://tfl.gov.uk/fares/find-fares/capping"
      },
      {
        status: "alert",
        title: { zh: "過馬路先看右邊", en: "Look right first" },
        body: { zh: "英國靠左行駛，過馬路時先看的方向常和台灣相反。路口地上常有 LOOK RIGHT / LOOK LEFT，照著標示看會比較安全。", en: "Traffic drives on the left, so the first direction to check can feel opposite from Taiwan. Many crossings mark LOOK RIGHT / LOOK LEFT on the ground, which makes it easier to follow." }
      },
      {
        status: "confirmed",
        title: { zh: "手扶梯右站左走", en: "Stand right, walk left" },
        body: { zh: "倫敦地鐵手扶梯習慣右側站立、左側通行。若行李大，站穩、靠右，比急著走更安全。", en: "On London Underground escalators, stand on the right and leave the left side for walking. With luggage, staying steady on the right is better than rushing." }
      },
      {
        status: "optional",
        title: { zh: "備一點現金，但不用太多", en: "Carry a little cash, not a lot" },
        body: { zh: "英國多數地方可刷卡，交通也以感應付款為主。身上留少量英鎊給小店、寄物櫃或臨時情況即可，其他以信用卡與手機付款為主。", en: "Most places in the UK accept cards, and transport is contactless-friendly. Keep a small amount of GBP for small shops, lockers, or backup, and use cards or mobile wallets for most payments." }
      }
    ],
    daily: [
      {
        status: "confirmed",
        title: { zh: "插頭與充電", en: "Plugs and charging" },
        body: { zh: "英國使用 Type G 三孔插頭，電壓 230V。筆電與手機充電器通常支援 100-240V，但仍看一下變壓器標示；行動電源放隨身行李，不托運。", en: "The UK uses Type G three-pin plugs and 230V power. Laptop and phone chargers usually support 100-240V, but check the label. Power banks should stay in carry-on luggage." }
      },
      {
        status: "confirmed",
        title: { zh: "小費不用緊張", en: "Tipping is simple" },
        body: { zh: "餐廳常自動加 service charge，帳單有寫就不必再給。沒有 service charge、服務也不錯時，可抓 10% 左右；咖啡店、速食與外帶不需要。", en: "Restaurants often add a service charge; if it is on the bill, you do not need to add more. If there is no service charge and service is good, around 10% is fine. Cafes, fast food, and takeaway do not require tips." }
      },
      {
        status: "alert",
        title: { zh: "手機與包包放內側", en: "Keep phone and bag inward" },
        body: { zh: "倫敦熱門景點、地鐵口與購物街人多，手機不要長時間拿在馬路側。包包拉鍊朝內，護照與備用卡分開放。", en: "Busy London sights, Tube entrances, and shopping streets can be crowded. Avoid holding your phone on the road side for long; keep zippers inward and separate your passport from backup cards." }
      },
      {
        status: "optional",
        title: { zh: "英式禮貌簡短就好", en: "British politeness can be brief" },
        body: { zh: "Please、thank you、sorry、excuse me 很好用。排隊是基本默契；要問路或請人讓路，先說 excuse me 就很自然。", en: "Please, thank you, sorry, and excuse me go a long way. Queuing matters; if you need directions or space to pass, starting with excuse me feels natural." }
      }
    ],
    firstDay: [
      { zh: "抵達後先確認回程與轉機資料都在手機離線檔案裡。", en: "After arrival, make sure return and transfer details are saved offline on your phone." },
      { zh: "從機場到飯店先用同一張交通付款工具，避免日上限失效。", en: "Use the same payment method for airport-to-city transport to keep fare capping simple." },
      { zh: "15:00 後入住 INNSiDE Manchester；若太早到，先寄放行李與吃點東西。", en: "INNSiDE Manchester check-in is after 15:00; if you arrive early, leave luggage and get food." },
      { zh: "第一晚不要排太滿，先補水、洗澡、整理文件就好。", en: "Keep the first evening light: hydrate, shower, and organize your documents first." }
    ]
  },
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
    {
      label: { zh: "去程", en: "Outbound" },
      date: "2026/06/29 - 06/30",
      note: { zh: "法蘭克福長轉機後進曼徹斯特", en: "Long Frankfurt layover before Manchester" },
      legs: [
        { from: "TPE", to: "FRA", flight: "CI 61", time: "22:20 → 06:50", duration: "14h 30m", detail: { zh: "台北桃園 → 法蘭克福", en: "Taipei Taoyuan → Frankfurt" } },
        { from: "FRA", to: "MAN", flight: "LH 946", time: "16:20 → 17:10", duration: "1h 50m", detail: { zh: "法蘭克福 → 曼徹斯特", en: "Frankfurt → Manchester" } }
      ]
    },
    {
      label: { zh: "巴黎回曼城", en: "Paris → Manchester" },
      date: "2026/07/11",
      note: { zh: "Air France Business Standard", en: "Air France Business Standard" },
      legs: [
        { from: "CDG", to: "MAN", flight: "Air France", time: "12:50 → 13:25", duration: "1h 35m", detail: { zh: "巴黎戴高樂 T2E → 曼徹斯特 T2", en: "Paris CDG T2E → Manchester T2" } }
      ]
    },
    {
      label: { zh: "回程", en: "Return" },
      date: "2026/07/11 - 07/12",
      note: { zh: "回程由曼徹斯特起飛", en: "Return starts from Manchester" },
      legs: [
        { from: "MAN", to: "LHR", flight: "BA 1371", time: "18:10 → 19:15", duration: "1h 05m", detail: { zh: "曼徹斯特（多半 T3）→ 倫敦希斯洛 T5", en: "Manchester (likely T3) → London Heathrow T5" } },
        { from: "LHR", to: "TPE", flight: "CI 82", time: "21:10 → 18:05", duration: "13h 55m", detail: { zh: "倫敦希斯洛（華航常見 T4）→ 台北桃園 T1", en: "London Heathrow (China Airlines usually T4) → Taipei Taoyuan T1" } }
      ]
    }
  ],
  transfers: [
    {
      status: "confirmed",
      airport: { zh: "法蘭克福機場 FRA", en: "Frankfurt Airport FRA" },
      route: "CI 61 → LH 946",
      layover: { zh: "停留約 9 小時 30 分", en: "About 9h 30m layover" },
      terminals: { zh: "當天以機場螢幕與 Lufthansa 指示為準。", en: "Follow airport screens and Lufthansa guidance on the day." },
      notes: [
        { zh: "抵達後先看 Connecting Flights / Abflug 螢幕，確認 LH 946 的登機門與航廈。", en: "After arrival, check the Connecting Flights / departure screens for the LH 946 gate and terminal." },
        { zh: "這段是長轉機，可以留一點吃飯與休息時間，但仍要提早回到登機區。", en: "This is a long layover, so there is room for food and a short rest, but return to the gate area early." },
        { zh: "若登機證未一次拿齊，抵達後找 Lufthansa / transfer counter 或自助機補印。", en: "If boarding passes are not issued through, use a Lufthansa / transfer counter or kiosk after arrival." }
      ],
      source: "https://www.frankfurt-airport.com/en/flights-and-transfer/transferring-at-fra.html"
    },
    {
      status: "alert",
      airport: { zh: "倫敦希斯洛機場 LHR", en: "London Heathrow LHR" },
      route: "BA 1371 → CI 82",
      layover: { zh: "停留 1 小時 55 分", en: "1h 55m layover" },
      terminals: { zh: "票面規劃：T5 → T3。希斯洛轉機旅客需再過安檢。", en: "Ticketed plan: T5 → T3. Heathrow flight connections require security screening." },
      notes: [
        { zh: "BA 建議 T5 轉 T3 至少抓 90 分鐘；這段 1 小時 55 分高於建議，但仍偏緊。", en: "BA recommends at least 90 minutes for T5 to T3 connections; 1h 55m is above that but still tight." },
        { zh: "下機後跟著 purple Flight Connections 標示，不要走 arrivals / immigration 出境。", en: "Follow the purple Flight Connections signs after landing; do not follow arrivals / immigration." },
        { zh: "液體、筆電、行動電源等安檢規則先整理好，避免在轉機安檢卡住。", en: "Prepare liquids, laptop, and power banks for security to avoid delays at the transfer checkpoint." }
      ],
      source: "https://www.heathrow.com/connecting-flights"
    }
  ],
  trainFares: [
    { status: "book", item: "Advance", amount: { zh: "單程 NT$1,423 起 / GBP 33.50 起 / US$44 起", en: "From NT$1,423 / GBP 33.50 / US$44" }, note: { zh: "最便宜但綁定指定班次；越早買越划算。", en: "Cheapest, train-specific, and best bought early." } },
    { status: "optional", item: "Off-Peak", amount: { zh: "單程 NT$3,228-3,398 / GBP 76-80 / US$101-106", en: "NT$3,228-3,398 / GBP 76-80 / US$101-106" }, note: { zh: "彈性較高，適合不想被指定班次綁死。", en: "More flexible if you do not want to be tied to a single service." } },
    { status: "optional", item: "Two Together Railcard", amount: money.railcard, note: { zh: "兩人同行可省 1/3；週末全天、平日 09:30 後可用。", en: "Two people traveling together can save 1/3; valid all day weekends and after 09:30 weekdays." } }
  ],
  localTransit: [
    { city: { zh: "倫敦", en: "London" }, items: [
      { zh: "Zone 1-2 每日上限：NT$378 / GBP 8.90 / US$12", en: "Zones 1-2 cap: NT$378 / GBP 8.90 / US$12" },
      { zh: "Zone 1-3 每日上限：NT$446 / GBP 10.50 / US$14", en: "Zones 1-3 cap: NT$446 / GBP 10.50 / US$14" },
      { zh: "Zone 1-6 每日上限：NT$692 / GBP 16.30 / US$22", en: "Zones 1-6 cap: NT$692 / GBP 16.30 / US$22" },
      { zh: "全程使用同一張感應信用卡、Apple Pay、Google Pay 或 Oyster 進出站。", en: "Use the same contactless card / Apple Pay / Google Pay / Oyster for all taps." }
    ] },
    { city: { zh: "曼徹斯特", en: "Manchester" }, items: [
      { zh: "INNSiDE Manchester 附近可利用 Deansgate-Castlefield 或 St Peter's Square。", en: "INNSiDE Manchester: Deansgate-Castlefield / St Peter's Square nearby." },
      { zh: "機場位於 Zone 4；機場往返市區可用全區票。", en: "Airport is Zone 4; use all zones for airport-city trips." },
      { zh: "全區日票：NT$302 / GBP 7.10 / US$9.40；離峰 NT$208 / GBP 4.90 / US$6.50。", en: "All-zones day ticket: NT$302 / GBP 7.10 / US$9.40 anytime; NT$208 / GBP 4.90 / US$6.50 off-peak." },
      { zh: "搭乘 Metrolink 前先購票或感應進站，車上不售票。", en: "Buy or touch in before boarding Metrolink; no onboard purchase." }
    ] }
  ],
  stay: [
    {
      status: "confirmed",
      title: "INNSiDE Manchester",
      city: { zh: "曼徹斯特", en: "Manchester" },
      image: hotelImage,
      imageCredit: { zh: "Hotel photo via England Rover", en: "Hotel photo via England Rover" },
      link: "https://englandrover.com/listing/innside-by-melia/",
      facts: [
        { zh: "入住：2026/06/30 15:00 後", en: "Check-in: 30 Jun 2026 after 15:00" },
        { zh: "退房：2026/07/05 12:00 前", en: "Check-out: 5 Jul 2026 before 12:00" },
        { zh: "房型：雙床房，2 人，5 晚", en: "Room: twin beds, 2 guests, 5 nights" },
        { zh: `兩人總價：${money.hotel}，已含 20% 稅`, en: `Total for two guests: ${money.hotel}, including 20% tax` },
        { zh: `每晚房價：約 ${money.hotelPerNight}`, en: `Average per room night: ${money.hotelPerNight}` },
        { zh: `一人一晚：約 ${money.hotelPerPersonNight}`, en: `Per person per night: ${money.hotelPerPersonNight}` },
        { zh: `一人 5 晚住宿：約 ${money.hotelPerPersonTotal}`, en: `Per person for 5 nights: ${money.hotelPerPersonTotal}` },
        { zh: `旅遊稅另計：兩人約 ${money.visitorCharge}；一人約 ${money.visitorChargePerPerson}`, en: `Visitor charge paid locally: about ${money.visitorCharge} total, about ${money.visitorChargePerPerson} per person` },
        { zh: "地址：1 First Street, Manchester", en: "Address: 1 First Street, Manchester" }
      ],
      note: { zh: "目前住宿金額是兩人房價；個人住宿分攤約為一半。旅遊稅 GBP 1.20 / 房 / 晚現場付。", en: "The accommodation price is for two guests; the personal share is roughly half. Local visitor charge is GBP 1.20 per room per night and paid locally." }
    },
    {
      status: "book",
      title: { zh: "倫敦住宿首選", en: "London first-choice stay" },
      city: { zh: "倫敦", en: "London" },
      facts: [
        { zh: "日期：2026/07/04 – 2026/07/07（3 晚）", en: "Dates: 4 Jul 2026 – 7 Jul 2026 (3 nights)" },
        { zh: "首選：The Langham London", en: "First choice: The Langham London" },
        { zh: "備選：The Clermont Charing Cross", en: "Alternative: The Clermont Charing Cross" },
        { zh: "狀態：尚未預訂", en: "Status: not booked yet" }
      ],
      note: { zh: "這段以交通便利與市中心行程順手為優先，The Langham 氣質最好，Charing Cross 則更貼近移動動線。", en: "This stay prioritizes easy central access; The Langham is the stronger first choice, while Charing Cross is the more transit-friendly alternative." }
    },
    {
      status: "book",
      title: { zh: "巴黎住宿首選", en: "Paris first-choice stay" },
      city: { zh: "巴黎", en: "Paris" },
      facts: [
        { zh: "日期：2026/07/07 – 2026/07/11（4 晚）", en: "Dates: 7 Jul 2026 – 11 Jul 2026 (4 nights)" },
        { zh: "首選：Pullman Paris Tour Eiffel", en: "First choice: Pullman Paris Tour Eiffel" },
        { zh: "特色：艾菲爾鐵塔景", en: "Feature: Eiffel Tower view" },
        { zh: "狀態：尚未預訂", en: "Status: not booked yet" }
      ],
      note: { zh: "如果巴黎段想住得更有旅行感，這間最接近目前想像的節奏。", en: "If the Paris stay is meant to feel more like a destination trip, this is the clearest match so far." }
    },
    {
      status: "optional",
      title: { zh: "曼徹斯特住宿建議", en: "Manchester hotel ideas" },
      city: { zh: "曼徹斯特", en: "Manchester" },
      facts: [
        { zh: "Manchester Marriott", en: "Manchester Marriott" },
        { zh: "Hyatt Regency Manchester", en: "Hyatt Regency Manchester" },
        { zh: "Hilton Manchester Deansgate", en: "Hilton Manchester Deansgate" }
      ],
      note: { zh: "如果後續想改住更偏商務或景觀型飯店，這三間是目前比較值得看的方向。", en: "If the Manchester stay shifts toward a more business-forward or view-focused option, these are the current alternatives worth comparing." }
    }
  ],
  itinerary: [
    { date: "6/29-6/30", city: { zh: "Taipei → Frankfurt → Manchester", en: "Taipei → Frankfurt → Manchester" }, kind: "travel", title: { zh: "出發與抵達曼徹斯特", en: "Departure & arrival in Manchester" }, status: "confirmed", must: ["CI61｜TPE 22:20 → FRA 06:50(+1)", "LH946｜FRA 16:20 → MAN 17:10", "入住曼徹斯特"], optional: ["輕鬆吃晚餐", "補水、整理文件、調時差"], tickets: ["景點門票：GBP 0"], notes: ["法蘭克福是長轉機，適合保留休息與緩衝。"] },
    { date: "6/30-7/3", city: { zh: "Manchester", en: "Manchester" }, kind: "conference", title: { zh: "AIB 2026 主會議", en: "AIB 2026 conference" }, status: "confirmed", must: ["AIB Conference", "Presentation", "Networking"], optional: ["空檔回飯店整理簡報", "附近簡單晚餐"], tickets: ["景點門票：GBP 0；以會議活動為主"], notes: ["Competitive 發表時段已確認，Interactive 發表等 final program。"] },
    { date: "7/4", city: { zh: "Manchester → London", en: "Manchester → London" }, kind: "travel", title: { zh: "轉往倫敦", en: "Move to London" }, status: "book", must: ["Avanti West Coast", "Manchester → London", "約 2 小時 10 分"], optional: ["抵達後 Big Ben", "Buckingham Palace", "St James's Park"], tickets: ["火車票待訂", "地標散步：免費"], notes: ["倫敦住宿先看 The Langham London，其次 The Clermont Charing Cross。"] },
    { date: "7/5", city: { zh: "London", en: "London" }, kind: "free", title: { zh: "倫敦 Day 2", en: "London Day 2" }, status: "pending", must: ["Harrods", "Bond Street"], optional: ["Chanel", "Dior", "Louis Vuitton", "YSL"], tickets: ["百貨與精品街散步：免費"], notes: ["這天以精品購物與市區移動為主。"] },
    { date: "7/6", city: { zh: "London", en: "London" }, kind: "free", title: { zh: "倫敦 Day 3", en: "London Day 3" }, status: "pending", must: ["Covent Garden", "Piccadilly Circus"], optional: ["自由活動"], tickets: ["街區散步：免費"], notes: ["可保留彈性，補逛想重訪的店或景點。"] },
    { date: "7/7", city: { zh: "London → Paris", en: "London → Paris" }, kind: "travel", title: { zh: "Eurostar 前往巴黎", en: "Eurostar to Paris" }, status: "book", must: ["Eurostar", "約 2 小時 20 分", "市中心直達市中心"], optional: ["抵達後 Eiffel Tower", "夜景"], tickets: ["Eurostar 票待訂", "艾菲爾鐵塔票價待查"], notes: ["巴黎住宿首選是 Pullman Paris Tour Eiffel。"] },
    { date: "7/8", city: { zh: "Paris", en: "Paris" }, kind: "free", title: { zh: "巴黎 Day 2", en: "Paris Day 2" }, status: "pending", must: ["Louvre Museum"], optional: ["周邊散步"], tickets: ["Louvre 票價待查"], notes: ["如果前一晚到得晚，這天節奏可以放慢一點。"] },
    { date: "7/9", city: { zh: "Paris", en: "Paris" }, kind: "free", title: { zh: "巴黎 Day 3", en: "Paris Day 3" }, status: "pending", must: ["Champs-Elysees", "Arc de Triomphe"], optional: ["精品購物"], tickets: ["街區散步與購物：依實際消費"], notes: ["適合安排精品街區與城市主景。"] },
    { date: "7/10", city: { zh: "Paris", en: "Paris" }, kind: "free", title: { zh: "巴黎 Day 4", en: "Paris Day 4" }, status: "pending", must: ["Galeries Lafayette Haussmann", "Seine", "塞納河遊船"], optional: ["最後採買"], tickets: ["遊船票價待查"], notes: ["最後一天以輕鬆收尾為主。"] },
    { date: "7/11-7/12", city: { zh: "Paris → Manchester → Heathrow → Taipei", en: "Paris → Manchester → Heathrow → Taipei" }, kind: "travel", title: { zh: "回程返台", en: "Return to Taipei" }, status: "confirmed", must: ["Air France Business Standard｜CDG 12:50 → MAN 13:25", "BA1371｜MAN 18:10 → LHR 19:15", "CI82｜LHR 21:10 → TPE 18:05(+1)"], optional: ["巴黎上午只排簡單移動"], tickets: ["AF 歐洲段：約 EUR 354.05 / NT$12,000"], notes: ["Air France 段含商務艙、貴賓室、優先安檢與優先登機。"] }
  ],
  attractionCosts: [
    { status: "confirmed", day: "7/4", attraction: "Big Ben / Buckingham Palace / St James's Park", fee: "Free", estimate: "NT$0 / GBP 0 / US$0", note: { zh: "這三個點適合排成第一天的西敏散步。", en: "These three work well as a Westminster walk on the first London day." }, source: "https://www.visitlondon.com/" },
    { status: "confirmed", day: "7/5", attraction: "Harrods / Bond Street", fee: "Free entry", estimate: "NT$0 / GBP 0 / US$0", note: { zh: "精品街與百貨入店免費，主要成本會落在購物本身。", en: "Department stores and shopping streets are free to enter; the cost depends on actual purchases." }, source: "https://www.harrods.com/" },
    { status: "confirmed", day: "7/6", attraction: "Covent Garden / Piccadilly Circus", fee: "Free", estimate: "NT$0 / GBP 0 / US$0", note: { zh: "以街區散步與自由活動為主。", en: "This day is built around walking the area and keeping time flexible." }, source: "https://www.visitlondon.com/" },
    { status: "pending", day: "7/7", attraction: "Eurostar", fee: "TBD", estimate: "待訂 / TBD / TBD", note: { zh: "車程約 2 小時 20 分，市中心直達市中心。", en: "About 2h20 city centre to city centre." }, source: "https://www.eurostar.com/" },
    { status: "pending", day: "7/7", attraction: "Eiffel Tower", fee: "TBD", estimate: "待查 / TBD / TBD", note: { zh: "若想上塔或看夜景，建議另外確認正式票價與時段。", en: "If you want summit or night-view access, check the official ticket windows separately." }, source: "https://www.toureiffel.paris/en" },
    { status: "pending", day: "7/8", attraction: "Louvre Museum", fee: "TBD", estimate: "待查 / TBD / TBD", note: { zh: "正式票價與預約時段以羅浮宮官網為準。", en: "Use the Louvre's official site for current admission and timeslots." }, source: "https://www.louvre.fr/en" },
    { status: "confirmed", day: "7/9", attraction: "Champs-Elysees / Arc de Triomphe", fee: "Depends", estimate: "依實際安排 / Depends / Depends", note: { zh: "香榭麗舍大道散步免費，若上凱旋門再另外查票。", en: "Walking the Champs-Elysees is free; check separately if you want Arc entry." }, source: "https://www.paris-arc-de-triomphe.fr/en/" },
    { status: "pending", day: "7/10", attraction: "Seine river cruise", fee: "TBD", estimate: "待查 / TBD / TBD", note: { zh: "遊船票價依公司與時段而不同。", en: "Cruise pricing varies by operator and timeslot." }, source: "https://www.bateauxparisiens.com/en.html" }
  ],
  mapRouteUrl: "https://www.google.com/maps/dir/Manchester+Airport/INNSiDE+Manchester/Manchester+Piccadilly/London+Euston/Big+Ben/Harrods/Covent+Garden/Piccadilly+Circus/London+St+Pancras+International/Gare+du+Nord/Pullman+Paris+Tour+Eiffel/Eiffel+Tower/Louvre+Museum/Champs-Elysees/Arc+de+Triomphe/Galeries+Lafayette+Haussmann/Charles+de+Gaulle+Airport/Manchester+Airport",
  mapLocations: [
    { status: "confirmed", city: "Manchester", title: { zh: "Manchester Airport", en: "Manchester Airport" }, query: "Manchester Airport", note: { zh: "抵達與回程都會經過的城市門口。", en: "The city gateway for both arrival and departure." } },
    { status: "confirmed", city: "Manchester", title: { zh: "INNSiDE Manchester", en: "INNSiDE Manchester" }, query: "INNSiDE Manchester 1 First Street Manchester", note: { zh: "會議期間的住宿基地，靠近 First Street 與市中心。", en: "The conference stay base near First Street and the city centre." } },
    { status: "book", city: "Manchester", title: { zh: "Manchester Piccadilly", en: "Manchester Piccadilly" }, query: "Manchester Piccadilly Station", note: { zh: "7/4 前往 London Euston 的起點。", en: "The starting point for the 4 July train to London Euston." } },
    { status: "book", city: "London", title: { zh: "London Euston", en: "London Euston" }, query: "London Euston Station", note: { zh: "從曼徹斯特抵達倫敦的主要車站。", en: "The main London arrival station from Manchester." } },
    { status: "confirmed", city: "London", title: { zh: "Big Ben / Westminster", en: "Big Ben / Westminster" }, query: "Big Ben London", note: { zh: "適合放在抵達倫敦後的第一段散步。", en: "A good first stop after arriving in London." } },
    { status: "confirmed", city: "London", title: { zh: "Harrods", en: "Harrods" }, query: "Harrods London", note: { zh: "Day 2 的購物主點。", en: "The main shopping stop for Day 2." } },
    { status: "confirmed", city: "London", title: { zh: "Bond Street", en: "Bond Street" }, query: "Bond Street London", note: { zh: "Chanel、Dior、LV、YSL 可集中看。", en: "A compact area for Chanel, Dior, Louis Vuitton, and YSL." } },
    { status: "confirmed", city: "London", title: { zh: "Covent Garden", en: "Covent Garden" }, query: "Covent Garden London", note: { zh: "倫敦 Day 3 的第一站。", en: "The first stop on London Day 3." } },
    { status: "confirmed", city: "London", title: { zh: "Piccadilly Circus", en: "Piccadilly Circus" }, query: "Piccadilly Circus London", note: { zh: "Covent Garden 後接續最順。", en: "Pairs naturally after Covent Garden." } },
    { status: "book", city: "London", title: { zh: "St Pancras International", en: "St Pancras International" }, query: "St Pancras International", note: { zh: "7/7 Eurostar 前往巴黎的起點。", en: "The 7 July Eurostar departure point to Paris." } },
    { status: "book", city: "Paris", title: { zh: "Pullman Paris Tour Eiffel", en: "Pullman Paris Tour Eiffel" }, query: "Pullman Paris Tour Eiffel", note: { zh: "巴黎住宿首選，重點是鐵塔景。", en: "The Paris first-choice stay, mainly for the Eiffel Tower view." } },
    { status: "confirmed", city: "Paris", title: { zh: "Eiffel Tower", en: "Eiffel Tower" }, query: "Eiffel Tower", note: { zh: "抵達巴黎後的第一個城市重點。", en: "The first big Paris stop after arrival." } },
    { status: "confirmed", city: "Paris", title: { zh: "Louvre Museum", en: "Louvre Museum" }, query: "Louvre Museum", note: { zh: "巴黎 Day 2 的主要行程。", en: "The anchor stop for Paris Day 2." } },
    { status: "confirmed", city: "Paris", title: { zh: "Champs-Elysees / Arc de Triomphe", en: "Champs-Elysees / Arc de Triomphe" }, query: "Arc de Triomphe Paris", note: { zh: "巴黎 Day 3 的主景與購物段。", en: "The main Paris Day 3 landmark and shopping corridor." } },
    { status: "confirmed", city: "Paris", title: { zh: "Galeries Lafayette Haussmann", en: "Galeries Lafayette Haussmann" }, query: "Galeries Lafayette Haussmann", note: { zh: "巴黎最後一日的採買點。", en: "A strong final shopping stop in Paris." } },
    { status: "confirmed", city: "Paris", title: { zh: "Seine", en: "Seine" }, query: "Seine River Paris", note: { zh: "可接塞納河遊船。", en: "Easy to pair with a Seine cruise." } },
    { status: "confirmed", city: "Paris", title: { zh: "CDG Terminal 2E", en: "CDG Terminal 2E" }, query: "Charles de Gaulle Airport Terminal 2E", note: { zh: "7/11 Air France Business Standard 的出發點。", en: "The departure terminal for the 11 July Air France Business Standard flight." } },
  ],
  mapRoutes: [
    { status: "confirmed", label: { zh: "6/30 抵達曼徹斯特", en: "30 Jun Manchester arrival" }, note: { zh: "曼徹斯特機場 → INNSiDE Manchester", en: "MAN Airport → INNSiDE Manchester" }, url: "https://www.google.com/maps/dir/Manchester+Airport/INNSiDE+Manchester+1+First+Street+Manchester" },
    { status: "book", label: { zh: "7/4 曼徹斯特 → 倫敦", en: "4 Jul Manchester → London" }, note: { zh: "Piccadilly → Euston，之後接 Big Ben、Buckingham Palace、St James's Park。", en: "Piccadilly → Euston, then continue to Big Ben, Buckingham Palace, and St James's Park." }, url: "https://www.google.com/maps/dir/Manchester+Piccadilly/London+Euston/Big+Ben+London/Buckingham+Palace/St+James's+Park+London" },
    { status: "pending", label: { zh: "7/5 倫敦購物日", en: "5 Jul London shopping day" }, note: { zh: "Harrods → Bond Street。", en: "Harrods → Bond Street." }, url: "https://www.google.com/maps/dir/Harrods+London/Bond+Street+London" },
    { status: "pending", label: { zh: "7/6 倫敦市中心", en: "6 Jul central London" }, note: { zh: "Covent Garden → Piccadilly Circus。", en: "Covent Garden → Piccadilly Circus." }, url: "https://www.google.com/maps/dir/Covent+Garden/Piccadilly+Circus" },
    { status: "book", label: { zh: "7/7 倫敦 → 巴黎", en: "7 Jul London → Paris" }, note: { zh: "St Pancras → Gare du Nord → Pullman Paris Tour Eiffel。", en: "St Pancras → Gare du Nord → Pullman Paris Tour Eiffel." }, url: "https://www.google.com/maps/dir/St+Pancras+International/Gare+du+Nord/Pullman+Paris+Tour+Eiffel" },
    { status: "pending", label: { zh: "7/8 巴黎博物館日", en: "8 Jul Paris museum day" }, note: { zh: "Pullman → Louvre Museum。", en: "Pullman → Louvre Museum." }, url: "https://www.google.com/maps/dir/Pullman+Paris+Tour+Eiffel/Louvre+Museum" },
    { status: "pending", label: { zh: "7/9 巴黎景點與購物", en: "9 Jul Paris landmarks & shopping" }, note: { zh: "Champs-Elysees → Arc de Triomphe。", en: "Champs-Elysees → Arc de Triomphe." }, url: "https://www.google.com/maps/dir/Champs-Elysees/Arc+de+Triomphe" },
    { status: "pending", label: { zh: "7/10 巴黎收尾", en: "10 Jul Paris wrap-up" }, note: { zh: "Galeries Lafayette → Seine。", en: "Galeries Lafayette → Seine." }, url: "https://www.google.com/maps/dir/Galeries+Lafayette+Haussmann/Seine+River+Paris" },
    { status: "confirmed", label: { zh: "7/11 巴黎 → 曼徹斯特", en: "11 Jul Paris → Manchester" }, note: { zh: "CDG T2E → MAN T2，再接 BA 與華航。", en: "CDG T2E → MAN T2, then connect to BA and China Airlines." }, url: "https://www.google.com/maps/dir/Pullman+Paris+Tour+Eiffel/Charles+de+Gaulle+Airport+Terminal+2E" }
  ],
  expenses: [
    { item: { zh: "國際機票", en: "International flights" }, amount: money.flight, amounts: { TWD: "NT$92,439", GBP: "GBP 2,176", USD: "US$2,885" }, status: "reimburse", proof: { zh: "機票行程單與付款截圖", en: "Flight itinerary + payment screenshot" }, notes: { zh: "TPE-FRA-MAN / MAN-LHR-TPE；7/11 巴黎回曼徹斯特另列自費", en: "TPE-FRA-MAN / MAN-LHR-TPE; the 11 Jul Paris-Manchester segment is listed separately as self-funded" } },
    { item: { zh: "AIB 會議註冊費", en: "AIB Conference Fee" }, amount: money.conference, amounts: { TWD: "NT$10,413", GBP: "GBP 245", USD: "US$325" }, status: "reimburse", proof: { zh: "AIB 付款收據", en: "AIB payment receipt" }, notes: { zh: "會議費 US$325；捐款 US$0。", en: "Conference fee US$325; donation US$0." } },
    { item: { zh: "AIB 會員費", en: "AIB membership fee" }, amount: money.membership, amounts: { TWD: "NT$1,282", GBP: "GBP 30", USD: "US$40" }, status: "reimburse", proof: { zh: "AIB 會員費收據", en: "AIB membership receipt" }, notes: { zh: "AIB 40 美元收據。", en: "AIB US$40 receipt." } },
    { item: { zh: "國科會曼徹斯特日支費", en: "NSTC daily allowance - Manchester" }, amount: money.manchesterDaily5, amounts: { TWD: "NT$51,905", GBP: "GBP 1,220", USD: "US$1,620" }, status: "reimburse", proof: { zh: "115 年國外日支表", en: "NSTC overseas daily allowance table" }, notes: { zh: "NT$10,381 / GBP 244 / US$324 每日 × 研討會 5 天。", en: "NT$10,381 / GBP 244 / US$324 per day × 5 conference days." } }
  ],
  selfFundedExpenses: [
    { item: { zh: "INNSiDE Manchester 住宿", en: "INNSiDE Manchester accommodation" }, amount: money.hotel, amounts: { TWD: "NT$38,270", GBP: "GBP 900.90", USD: "US$1,194" }, status: "self", proof: { zh: "訂房確認與最終發票", en: "Booking confirmation + final invoice" }, notes: { zh: `兩人 5 晚總價；一人 5 晚約 ${money.hotelPerPersonTotal}，一人一晚約 ${money.hotelPerPersonNight}。`, en: `Total for two guests for 5 nights; per person about ${money.hotelPerPersonTotal}, or ${money.hotelPerPersonNight} per night.` } },
    { item: { zh: "曼徹斯特旅遊稅", en: "Manchester visitor charge" }, amount: money.visitorCharge, amounts: { TWD: "約 NT$255", GBP: "GBP 6", USD: "US$8" }, status: "self", proof: { zh: "退房收據", en: "Check-out receipt" }, notes: { zh: `GBP 1.20 / 房 / 晚，現場支付；一人約 ${money.visitorChargePerPerson}。`, en: `GBP 1.20 per room per night, paid locally; about ${money.visitorChargePerPerson} per person.` } },
    { item: { zh: "曼徹斯特 → 倫敦火車", en: "Manchester → London train" }, amount: { zh: "每人單程 NT$1,423 起 / GBP 33.50 起 / US$44 起", en: "per person one-way from NT$1,423 / GBP 33.50 / US$44" }, amounts: { TWD: "NT$1,423 起", GBP: "GBP 33.50 起", USD: "US$44 起" }, status: "self", proof: { zh: "訂票後的電子票與收據", en: "E-ticket / receipt after booking" }, notes: { zh: "7/4 建議搭 Avanti West Coast。", en: "Avanti West Coast is the current recommendation for 4 July." } },
    { item: { zh: "Eurostar 倫敦 → 巴黎", en: "Eurostar London → Paris" }, amount: { zh: "待確認", en: "TBD" }, amounts: { TWD: "待確認", GBP: "TBD", USD: "TBD" }, status: "self", proof: { zh: "Eurostar 電子票與收據", en: "Eurostar e-ticket and receipt" }, notes: { zh: "7/7 出發，車程約 2 小時 20 分。", en: "Departure is on 7 July, with a journey of about 2h20." } },
    { item: { zh: "巴黎 → 曼徹斯特航段", en: "Paris → Manchester flight" }, amount: { zh: "約 NT$12,000 / EUR 354.05", en: "About NT$12,000 / EUR 354.05" }, amounts: { TWD: "約 NT$12,000", GBP: "約 GBP 300", USD: "待確認" }, status: "self", proof: { zh: "Air France 電子票與付款證明", en: "Air France e-ticket and payment proof" }, notes: { zh: "Air France Business Standard；含 Lounge、優先安檢與優先登機。", en: "Air France Business Standard with lounge access, priority security, and priority boarding." } },
    { item: { zh: "倫敦住宿", en: "London accommodation" }, amount: { zh: "待確認", en: "TBD" }, amounts: { TWD: "待確認", GBP: "TBD", USD: "TBD" }, status: "self", proof: { zh: "預訂後的確認信與發票", en: "Confirmation / invoice after booking" }, notes: { zh: "首選 The Langham London，備選 The Clermont Charing Cross。", en: "The Langham London is the first choice, with The Clermont Charing Cross as the alternative." } },
    { item: { zh: "巴黎住宿", en: "Paris accommodation" }, amount: { zh: "待確認", en: "TBD" }, amounts: { TWD: "待確認", GBP: "TBD", USD: "TBD" }, status: "self", proof: { zh: "預訂後的確認信與發票", en: "Confirmation / invoice after booking" }, notes: { zh: "首選 Pullman Paris Tour Eiffel。", en: "Pullman Paris Tour Eiffel is the current first choice." } },
    { item: { zh: "倫敦 / 巴黎景點與遊船", en: "London / Paris attractions and cruise" }, amount: { zh: "依實際選擇", en: "Depends on selected stops" }, amounts: { TWD: "依實際選擇", GBP: "Depends", USD: "Depends" }, status: "self", proof: { zh: "線上購票收據", en: "Online ticket receipts" }, notes: { zh: "目前確定有免費散步景點，也保留 Eiffel Tower、Louvre 與塞納河遊船的彈性。", en: "The route includes free city walks, with Eiffel Tower, the Louvre, and a Seine cruise left flexible." } }
  ],
  links: [
    ["AIB 2026 website", "https://www.aib.world/events/2026/"],
    ["AIB program overview", "https://www.aib.world/events/2026/program/conference-overview/"],
    ["AIB registration", "https://www.aib.world/events/2026/attend/registration/"],
    ["Avanti Manchester → London", "https://www.avantiwestcoast.co.uk/travel-information/train-times/manchester-piccadilly/london-euston"],
    ["National Rail", "https://www.nationalrail.co.uk/"],
    ["Two Together Railcard", "https://www.nationalrail.co.uk/tickets-railcards-offers/promotions/two-together-railcard/"],
    ["Eurostar", "https://www.eurostar.com/"],
    ["Air France", "https://wwws.airfrance.com/"],
    ["TfL adult fares PDF", "https://content.tfl.gov.uk/adult-fares.pdf"],
    ["TfL fare capping", "https://tfl.gov.uk/fares/find-fares/capping"],
    ["Metrolink zones", "https://tfgm.com/tickets-and-passes/fare-zones/tram"],
    ["Metrolink day ticket", "https://tfgm.com/tickets-and-passes/tram-anytime-all-day-travelcard-adult"],
    ["UK ETA", "https://www.gov.uk/guidance/apply-for-an-electronic-travel-authorisation-eta"],
    ["UK border control", "https://www.gov.uk/uk-border-control/at-border-control"],
    ["UK customs personal allowance", "https://www.gov.uk/duty-free-goods/arrivals-from-outside-the-eu"],
    ["Bringing food into Great Britain", "https://www.gov.uk/guidance/personal-food-plant-and-animal-product-imports"],
    ["INNSiDE Manchester", "https://www.melia.com/en/hotels/united-kingdom/manchester/innside-manchester"],
    ["The Langham London", "https://www.langhamhotels.com/en/the-langham/london/"],
    ["The Clermont Charing Cross", "https://www.theclermont.co.uk/charing-cross/"],
    ["Pullman Paris Tour Eiffel", "https://all.accor.com/hotel/7229/index.en.shtml"],
    ["Bank of Taiwan FX rates", "https://rate.bot.com.tw/xrt?Lang=zh-TW"],
    ["115 年國外日支表", "https://dbas.tycg.gov.tw/News_Content.aspx?n=12154&s=1591826"]
  ]
};

const shoppingData = {
  highlights: [
    { label: { zh: "最穩定的伴手禮", en: "Most reliable picks" }, value: { zh: "茶葉、餅乾、果醬", en: "Tea, biscuits, preserves" } },
    { label: { zh: "最好買的地方", en: "Best places to shop" }, value: { zh: "Fortnum、Twinings、M&S、Boots", en: "Fortnum, Twinings, M&S, Boots" } },
    { label: { zh: "好帶回台灣", en: "Easy to pack" }, value: { zh: "茶包、shortbread、marmalade", en: "Tea bags, shortbread, marmalade" } }
  ],
  categories: [
    {
      title: { zh: "茶葉與茶具", en: "Tea and tea gifts" },
      lead: {
        zh: "茶葉通常最容易買，也最容易帶回來。",
        en: "Tea is usually the easiest category to buy and carry."
      },
      items: [
        {
          name: "Fortnum & Mason",
          note: {
            zh: "常見會看 Royal Blend、Earl Grey Classic、Breakfast Blend，也可以和餅乾或果醬一起買。",
            en: "Classic starting points are Royal Blend, Earl Grey Classic, and Breakfast Blend, often paired with biscuits or preserves."
          },
          where: { zh: "Piccadilly 主店最完整", en: "Best selection at the Piccadilly flagship" },
          source: "https://www.fortnumandmason.com/tea/black-tea"
        },
        {
          name: "Twinings",
          note: {
            zh: "English Breakfast、Earl Grey、Lady Grey 都很常見，價格也比較好入手。",
            en: "English Breakfast, Earl Grey, and Lady Grey are dependable if you want something classic and easier on budget."
          },
          where: { zh: "The Strand 店很有代表性", en: "The Strand shop is the iconic stop" },
          source: "https://twinings.co.uk/collections/black-tea"
        },
        {
          name: "Whittard of Chelsea",
          note: {
            zh: "包裝選擇很多，也常有季節口味。",
            en: "It feels slightly more gift-oriented, with a wide range and more seasonal presentation."
          },
          where: { zh: "Covent Garden 或 Chelsea 一帶可逛", en: "Look around Covent Garden or Chelsea" },
          source: "https://www.whittard.co.uk/tea/"
        }
      ]
    },
    {
      title: { zh: "餅乾、shortbread、下午茶點心", en: "Biscuits, shortbread, and tea snacks" },
      lead: {
        zh: "這一類很常拿來當伴手禮，盒裝也比較完整。",
        en: "These are common souvenir picks, especially in boxed or tinned formats."
      },
      items: [
        {
          name: "Walkers Shortbread",
          note: {
            zh: "蘇格蘭 shortbread 很常見，鐵盒版也方便送人。",
            en: "Classic Scottish shortbread with rich butter flavor; tins are especially good for gifting."
          },
          where: { zh: "超市、百貨食品區都常見", en: "Easy to find in supermarkets and food halls" },
          source: "https://www.walkersshortbread.com/"
        },
        {
          name: "Fortnum biscuits",
          note: {
            zh: "如果想找英式下午茶那種路線，可以看 Fortnum 的 biscuit selection。",
            en: "If you want something closer to a classic afternoon tea gift, Fortnum's biscuit range is an easy pick."
          },
          where: { zh: "可和茶葉一起買", en: "Easy to pair with tea in one stop" },
          source: "https://www.fortnumandmason.com/biscuits"
        },
        {
          name: "Marks & Spencer biscuits",
          note: {
            zh: "M&S 的餅乾和巧克力很常見，也比較好入手。",
            en: "M&S is a good middle ground if you want something polished without going fully luxury."
          },
          where: { zh: "市中心門市很多", en: "Easy to find across city centres" },
          source: "https://www.marksandspencer.com/l/food-to-order/chocolate-biscuits-and-sweets"
        }
      ]
    },
    {
      title: { zh: "果醬、marmalade、英式 pantry", en: "Marmalade, jam, and pantry picks" },
      lead: {
        zh: "如果平常會吃抹醬，果醬和 marmalade 也很適合買。",
        en: "If you actually use breakfast spreads, jams and marmalade are good picks."
      },
      items: [
        {
          name: "Fortnum preserves",
          note: {
            zh: "橘子 marmalade、草莓 jam、lemon curd 都很常見，但玻璃瓶記得包好放托運。",
            en: "Orange marmalade, strawberry jam, and lemon curd are classic, but glass jars should be packed carefully in checked luggage."
          },
          where: { zh: "Fortnum 食品區最齊", en: "Best range in Fortnum's food hall" },
          source: "https://www.fortnumandmason.com/food-hall/preserves-marmalades"
        },
        {
          name: "Tiptree",
          note: {
            zh: "Tiptree 的 jam 和 marmalade 也很常見，超市或食品店都可能看到。",
            en: "Tiptree jams and marmalades are also classic and often easier to spot in food shops or supermarkets."
          },
          where: { zh: "Waitrose、食品店可留意", en: "Check Waitrose and food shops" },
          source: "https://www.tiptree.com/collections/jams"
        }
      ]
    },
    {
      title: { zh: "超市零食與藥妝", en: "Supermarket snacks and pharmacy staples" },
      lead: {
        zh: "這一區比較偏自己用，或補一些實用小物。",
        en: "This section is mostly for personal shopping or practical extras."
      },
      items: [
        {
          name: "M&S / Waitrose snacks",
          note: {
            zh: "M&S 可以一起看餅乾、巧克力、茶包禮盒；Waitrose 則適合找 pantry 類和茶點。",
            en: "M&S is great for biscuits, chocolate, and boxed tea gifts, while Waitrose is good for pantry picks and tea snacks."
          },
          where: { zh: "倫敦市中心很容易遇到", en: "Easy to find around central London" },
          source: "https://www.marksandspencer.com/l/food-to-order/chocolate-biscuits-and-sweets"
        },
        {
          name: "Boots",
          note: {
            zh: "如果要買藥妝、護手霜、維他命或旅行用品，可以看 Boots。",
            en: "Boots is the easy stop for pharmacy basics, hand cream, vitamins, and travel supplies."
          },
          where: { zh: "Oxford Street、車站附近常有大型門市", en: "Large branches are common near stations and main shopping streets" },
          source: "https://www.boots.com/"
        }
      ]
    }
  ],
  suggestions: [
    { title: { zh: "送老師或長輩", en: "For teachers or elders" }, text: { zh: "茶葉配餅乾或 marmalade，最常見。", en: "Tea with biscuits or marmalade is the most common combination." } },
    { title: { zh: "送朋友", en: "For friends" }, text: { zh: "M&S 或 Fortnum 的盒裝茶點比較完整。", en: "Boxed tea snacks from M&S or Fortnum feel more complete." } },
    { title: { zh: "買給自己", en: "For yourself" }, text: { zh: "Boots、M&S、Waitrose 都很好逛。", en: "Boots, M&S, and Waitrose are all easy stops." } }
  ],
  packing: [
    { zh: "茶包、餅乾最適合手提或托運。", en: "Tea bags and biscuits are easy in either carry-on or checked luggage." },
    { zh: "果醬、lemon curd 這類玻璃瓶建議托運，並另外包好。", en: "Glass jars such as marmalade or lemon curd are better in checked luggage with extra padding." },
    { zh: "若最後在機場補買，先留一點行李重量與空間。", en: "Leave a little weight and space if you plan to buy extra at the airport." }
  ]
};

const sectionNav = {
  home: [["overview", { zh: "旅程總覽", en: "Travel Overview" }], ["timeline", { zh: "關鍵時間軸", en: "Key Timeline" }], ["conference", { zh: "會議資訊", en: "Conference Details" }], ["hotel", { zh: "住宿安排", en: "Hotel & Stay" }], ["transport", { zh: "交通規劃", en: "Transportation Plan" }], ["budget", { zh: "費用備註", en: "Funding & Expense Notes" }], ["checklist", { zh: "行前清單", en: "Pre-departure Checklist" }]],
  conference: [["accepted", { zh: "會議狀態", en: "Status" }], ["papers", { zh: "論文", en: "Papers" }], ["alerts", { zh: "提醒", en: "Alerts" }], ["checklist", { zh: "文件", en: "Checklist" }]],
  transport: [["flights", { zh: "航班", en: "Flights" }], ["transfer", { zh: "轉機", en: "Transfers" }], ["train", { zh: "火車", en: "Train" }], ["local", { zh: "市內交通", en: "Local transit" }]],
  stay: [["overview", { zh: "住宿總覽", en: "Overview" }], ["decision", { zh: "後段住宿", en: "Later stays" }], ["areas", { zh: "住宿建議", en: "Useful picks" }]],
  itinerary: [["timeline", { zh: "時間軸", en: "Timeline" }], ["tickets", { zh: "景點費用", en: "Admission" }], ["return", { zh: "回程提醒", en: "Return" }]],
  shopping: [["shopping-overview", { zh: "總覽", en: "Overview" }], ["tea", { zh: "茶與點心", en: "Tea" }], ["pantry", { zh: "果醬與 pantry", en: "Pantry" }], ["essentials", { zh: "超市與藥妝", en: "Essentials" }]],
  map: [["travel-map", { zh: "地圖", en: "Map" }], ["route-links", { zh: "每日路線", en: "Routes" }], ["map-notes", { zh: "地圖備註", en: "Notes" }]],
  budget: [["expenses", { zh: "費用總覽", en: "Budget" }], ["totals", { zh: "小計", en: "Totals" }], ["proofs", { zh: "憑證", en: "Proofs" }]],
  reminders: [["pending", { zh: "待處理", en: "Pending" }], ["quick-check", { zh: "最後確認", en: "Final check" }]],
  firstTime: [["entry", { zh: "入境", en: "Entry" }], ["city", { zh: "城市移動", en: "City basics" }], ["daily", { zh: "日常提醒", en: "Daily notes" }], ["arrival", { zh: "抵達第一天", en: "First day" }]],
  documents: [["checklist", { zh: "文件清單", en: "Checklist" }], ["links", { zh: "官方連結", en: "Links" }]]
};

const readingGuides = {
  conference: [
    { zh: "兩篇 AIB 發表已確認，頁面只放題名與簡介。", en: "Two AIB presentations are confirmed; only titles and short summaries are shown." },
    { zh: "正式場次時間等 final program 公布後再補。", en: "Formal session times will be added after the final program is published." },
    { zh: "接受函與邀請函用於證明會議發表與出國目的。", en: "Acceptance and invitation letters support the conference and travel purpose." }
  ],
  transport: [
    { zh: "國際航班已確認，回程從曼徹斯特起飛。", en: "International flights are confirmed; the return journey begins in Manchester." },
    { zh: "法蘭克福是長轉機，希斯洛則是緊一點的轉機節奏。", en: "Frankfurt is the long layover, while Heathrow remains the tighter connection." },
    { zh: "英國段先是曼徹斯特到倫敦，接著再搭 Eurostar 到巴黎。", en: "Within Europe, the route moves from Manchester to London first, then on to Paris by Eurostar." },
    { zh: "倫敦與曼徹斯特市內交通都以感應付款為主。", en: "Local transit in London and Manchester is planned around contactless payment." }
  ],
  stay: [
    { zh: "曼徹斯特住宿已訂，倫敦與巴黎都已列出首選。", en: "Manchester is booked, and London and Paris now have first-choice stays listed." },
    { zh: "7/4 晚的住宿日期有重疊，可保留為緩衝。", en: "The 4 July night overlaps and can remain a buffer." },
    { zh: "倫敦看動線，巴黎看景觀與旅行感。", en: "London prioritizes access; Paris leans more toward atmosphere and view." }
  ],
  itinerary: [
    { zh: "每日行程分成主要停留、可選、門票費用與交通提醒。", en: "Each day is separated into main stops, optional ideas, fees, and transit notes." },
    { zh: "後段改成倫敦 3 晚、巴黎 4 晚，城市切換都已補進去。", en: "The later route is now London for 3 nights and Paris for 4 nights, with each city move added in." },
    { zh: "需要另外訂票的項目主要是 Avanti、Eurostar 與部分巴黎景點。", en: "The main items still needing tickets are Avanti, Eurostar, and a few Paris attractions." }
  ],
  map: [
    { zh: "點地點卡片即可切換右側地圖。", en: "Tap a place card to change the map." },
    { zh: "每日路線可直接開啟 Google 地圖。", en: "Daily route links open directly in Google Maps." },
    { zh: "曼徹斯特以交通移動為主，倫敦景點之間較適合步行串接。", en: "Manchester is more transit-focused, while London is easier to connect on foot between sights." }
  ],
  budget: [
    { zh: "報帳只列機票、AIB 會議費、AIB 會員費與國科會日支費。", en: "Claims include only flights, AIB conference fee, AIB membership fee, and NSTC daily allowance." },
    { zh: "住宿、火車、景點與倫敦旅遊列在自費。", en: "Accommodation, trains, attractions, and London travel stay self-funded." },
    { zh: "報帳憑證順序已整理在頁面底部。", en: "The proof order is listed at the bottom of the page." }
  ],
  reminders: [
    { zh: "這頁只放需要再次確認的事情。", en: "This page keeps only items that need a second check." },
    { zh: "住宿、火車、報帳與回程航段是最重要的核對點。", en: "Accommodation, trains, reimbursement, and return routing are the main checks." },
    { zh: "出發前可把此頁當成最後確認清單。", en: "Use this page as the final pre-departure checklist." }
  ],
  firstTime: [
    { zh: "入境文件、ETA、住宿與回程資料放在同一處，手機離線也能開。", en: "Keep entry documents, ETA, accommodation, and return details together and available offline." },
    { zh: "倫敦交通用同一張卡或同一支手機刷進刷出。", en: "Use the same card or device to tap in and out on London transport." },
    { zh: "食物、免稅額與高單價購物以 GOV.UK 規則為準。", en: "Food, customs allowances, and high-value shopping should follow GOV.UK rules." }
  ],
  documents: [
    { zh: "只放官方連結與文件類型，不公開私人憑證內容。", en: "Only official links and document types are shown; private proof details are not public." },
    { zh: "報帳、簽證與旅行確認資料可以依此核對。", en: "Use this page to check reimbursement, travel authorization, and travel proof links." },
    { zh: "訂位編號、付款資訊與 email 不放在公開頁面。", en: "Booking numbers, payment details, and email addresses stay off the public site." }
  ]
};

const dashboardData = {
  topStatus: [
    { status: "confirmed", title: { zh: "會議日期", en: "Conference dates" }, value: "2026/06/30 - 2026/07/03", note: { zh: "AIB Manchester", en: "AIB Manchester" } },
    { status: "confirmed", title: { zh: "機票已訂", en: "Flight booked" }, value: "TPE → FRA → MAN", note: { zh: "巴黎回曼城後再接返台", en: "Paris returns to Manchester before heading home" } },
    { status: "confirmed", title: { zh: "曼徹斯特住宿已訂", en: "Manchester hotel booked" }, value: "INNSiDE Manchester", note: { zh: "6/30 - 7/5", en: "30 Jun - 5 Jul" } },
    { status: "book", title: { zh: "後段住宿規劃", en: "Later-stay planning" }, value: { zh: "倫敦 / 巴黎", en: "London / Paris" }, note: { zh: "已列首選與備選", en: "First-choice stays listed" } },
    { status: "reimburse", title: { zh: "可報帳項目", en: "Reimbursement items" }, value: { zh: "4 項", en: "4 items" }, note: { zh: "機票、會議費、會員費、日支費", en: "Flights, fee, membership, allowance" } },
    { status: "pending", title: { zh: "文件清單", en: "Documents checklist" }, value: { zh: "國際段 + 歐洲段一起整理", en: "Long-haul and Europe legs tracked together" }, note: { zh: "文件頁可逐項確認", en: "Tracked in the documents page" } }
  ],
  quickActions: [
    ["overview", { zh: "查看總覽", en: "View overview" }, { zh: "先看目前進度", en: "Start with the current status" }],
    ["schedule", { zh: "查看行程", en: "View itinerary" }, { zh: "每天的安排與提醒", en: "Daily plan and reminders" }],
    ["hotel", { zh: "查看住宿", en: "Review hotel" }, { zh: "曼徹斯特已訂，倫敦與巴黎有首選", en: "Manchester booked, with London and Paris first choices" }],
    ["papers", { zh: "查看論文", en: "Review papers" }, { zh: "Competitive 與 Interactive", en: "Competitive and Interactive" }],
    ["budget", { zh: "查看預算", en: "Reimbursement summary" }, { zh: "報帳與自費分開看", en: "Claims and self-funded costs" }],
    ["checklist", { zh: "文件清單", en: "Document checklist" }, { zh: "收據、確認信、ETA", en: "Receipts, confirmations, ETA" }]
  ],
  glance: [
    { label: { zh: "Trip period", en: "Trip period" }, value: "2026/06/29 – 2026/07/12" },
    { label: { zh: "Conference period", en: "Conference period" }, value: "2026/06/30 – 2026/07/03" },
    { label: { zh: "Main cities", en: "Main cities" }, value: { zh: "Manchester / London / Paris", en: "Manchester / London / Paris" } },
    { label: { zh: "Flight route", en: "Flight route" }, value: "TPE → FRA → MAN / CDG → MAN → LHR → TPE" },
    { label: { zh: "Hotel status", en: "Hotel status" }, value: { zh: "曼徹斯特已訂；倫敦、巴黎有首選", en: "Manchester booked; London and Paris have first choices" } },
    { label: { zh: "Pending decisions", en: "Pending decisions" }, value: { zh: "倫敦住宿、Eurostar、巴黎住宿", en: "London hotel, Eurostar, and Paris hotel" } }
  ],
  conferenceCards: [
    { status: "confirmed", title: { zh: "會議期間", en: "Conference period" }, value: "2026/06/29 - 2026/07/03", note: { zh: "Manchester", en: "Manchester" } },
    { status: "confirmed", title: { zh: "註冊狀態", en: "Registration" }, value: "US$325", note: { zh: "付款完成", en: "Paid" } },
    { status: "confirmed", title: { zh: "接受函", en: "Acceptance letters" }, value: { zh: "2 份", en: "2 files" }, note: { zh: "可作會議證明", en: "Saved for conference proof" } },
    { status: "confirmed", title: { zh: "已確認場次", en: "Confirmed session" }, value: { zh: "Competitive 發表時段已出來", en: "Competitive slot confirmed" }, note: { zh: "15:15-16:30 · Room 3.006B (AMBS)", en: "15:15-16:30 · Room 3.006B (AMBS)" } }
  ],
  conferenceTimeline: [
    { date: "6/29", title: { zh: "預備日", en: "Preparation day" }, note: { zh: "抵達與會前安排。", en: "Arrival and pre-conference setup." } },
    { date: "6/30", title: { zh: "開幕日", en: "Opening day" }, note: { zh: "會前活動、開幕與 reception。", en: "Pre-conference events, opening, and reception." } },
    { date: "7/1 - 7/3", title: { zh: "主會議", en: "Main conference" }, note: { zh: "平行場次、交流與收據整理。", en: "Sessions, networking, and receipt tracking." } },
    { date: "15:15 - 16:30", title: { zh: "Competitive 發表時段", en: "Competitive presentation slot" }, note: { zh: "Session 3.4.11 · Track 4 · Room 3.006B (AMBS)", en: "Session 3.4.11 · Track 4 · Room 3.006B (AMBS)" } },
    { date: { zh: "待補", en: "Pending" }, title: { zh: "Interactive 發表時段", en: "Interactive presentation slot" }, note: { zh: "等正式議程對應的場次時間後再補上。", en: "To be added after the final program confirms the interactive slot." } }
  ],
  timelineGroups: [
    {
      title: { zh: "Pre-trip preparation", en: "Pre-trip preparation" },
      entries: [
        { date: { zh: "出發前", en: "Before departure" }, city: { zh: "Taipei", en: "Taipei" }, purpose: { zh: "整理文件與待辦", en: "Prepare documents and pending items" }, transport: { zh: "—", en: "—" }, reminders: [{ zh: "確認 ETA、收據、接受函、邀請函。", en: "Check ETA, receipts, acceptance letters, and invitation letter." }, { zh: "倫敦住宿、Eurostar 與巴黎住宿仍需處理。", en: "London hotel, Eurostar, and Paris hotel still need action." }], optional: [{ zh: "把巴黎回曼徹斯特與回台航段存成離線檔。", en: "Save the Paris-Manchester and return-home flight details offline." }] }
      ]
    },
    {
      title: { zh: "Taipei → Manchester", en: "Taipei → Manchester" },
      entries: [
        { date: "2026/06/29 - 06/30", city: { zh: "Taipei → Frankfurt → Manchester", en: "Taipei → Frankfurt → Manchester" }, purpose: { zh: "飛往英國並入住飯店", en: "Fly to the UK and check in" }, transport: { zh: "CI 61 / LH 946", en: "CI 61 / LH 946" }, reminders: [{ zh: "法蘭克福長轉機約 9 小時 30 分。", en: "Frankfurt layover is about 9h30." }, { zh: "15:00 後可入住 INNSiDE Manchester。", en: "INNSiDE Manchester check-in starts after 15:00." }], optional: [{ zh: "第一晚保留休息時間。", en: "Keep the first evening light." }] }
      ]
    },
    {
      title: { zh: "AIB conference days", en: "AIB conference days" },
      entries: [
        { date: "2026/06/30 - 07/03", city: { zh: "Manchester", en: "Manchester" }, purpose: { zh: "參加 AIB 會議", en: "Attend AIB conference" }, transport: { zh: "步行 / 市內交通", en: "Walk / local transit" }, reminders: [{ zh: "會議主軸是 AIB Conference、Presentation、Networking。", en: "The conference rhythm centers on AIB sessions, presentation, and networking." }, { zh: "Competitive 發表已確認：15:15-16:30，Room 3.006B (AMBS)。", en: "Competitive presentation confirmed: 15:15-16:30, Room 3.006B (AMBS)." }, { zh: "會議收據與證明每天整理。", en: "Organize receipts and proofs daily." }], optional: [{ zh: "Interactive 發表時間等 final program 對齊後再補。", en: "Interactive presentation time can be added after the final program is aligned." }, { zh: "晚間活動視體力安排。", en: "Evening plans can stay flexible." }] }
      ]
    },
    {
      title: { zh: "Manchester → London", en: "Manchester → London" },
      entries: [
        { date: "2026/07/04", city: { zh: "Manchester → London", en: "Manchester → London" }, purpose: { zh: "移動到倫敦", en: "Transfer to London" }, transport: { zh: "Avanti West Coast", en: "Avanti West Coast" }, reminders: [{ zh: "約 2 小時 10 分，建議先查 Advance 票。", en: "About 2h10, so check Advance fares early." }, { zh: "抵達後可接 Big Ben、Buckingham Palace、St James's Park。", en: "After arrival, Big Ben, Buckingham Palace, and St James's Park fit naturally." }], optional: [{ zh: "The Langham London 是目前首選。", en: "The Langham London is the current first choice." }] }
      ]
    },
    {
      title: { zh: "London travel days", en: "London travel days" },
      entries: [
        { date: "2026/07/05", city: { zh: "London", en: "London" }, purpose: { zh: "Harrods 與 Bond Street", en: "Harrods and Bond Street" }, transport: { zh: "Tube / 步行", en: "Tube / walking" }, reminders: [{ zh: "精品街以實際購物預算為主。", en: "Budget depends on actual shopping." }], optional: [{ zh: "Chanel、Dior、LV、YSL 可一起排。", en: "Chanel, Dior, LV, and YSL can fit into the same route." }] },
        { date: "2026/07/06", city: { zh: "London", en: "London" }, purpose: { zh: "Covent Garden 與 Piccadilly Circus", en: "Covent Garden and Piccadilly Circus" }, transport: { zh: "Tube / 步行", en: "Tube / walking" }, reminders: [{ zh: "這天以街區散步與自由活動為主。", en: "This day is mainly for district walks and free time." }], optional: [{ zh: "保留彈性補逛前兩天沒走完的地方。", en: "Leave room for anything missed earlier." }] }
      ]
    },
    {
      title: { zh: "London → Paris", en: "London → Paris" },
      entries: [
        { date: "2026/07/07", city: { zh: "London → Paris", en: "London → Paris" }, purpose: { zh: "搭 Eurostar 到巴黎", en: "Take Eurostar to Paris" }, transport: { zh: "Eurostar", en: "Eurostar" }, reminders: [{ zh: "車程約 2 小時 20 分。", en: "Travel time is about 2h20." }, { zh: "抵達後先到 Pullman Paris Tour Eiffel。", en: "Head to Pullman Paris Tour Eiffel after arrival." }], optional: [{ zh: "晚上可排 Eiffel Tower 夜景。", en: "An Eiffel Tower night view fits well in the evening." }] }
      ]
    },
    {
      title: { zh: "Paris travel days", en: "Paris travel days" },
      entries: [
        { date: "2026/07/08", city: { zh: "Paris", en: "Paris" }, purpose: { zh: "Louvre Museum", en: "Louvre Museum" }, transport: { zh: "Metro / 步行", en: "Metro / walking" }, reminders: [{ zh: "票價與時段以官網為準。", en: "Use the official site for current admission and timing." }], optional: [{ zh: "周邊街區可順走。", en: "Nearby streets can be added naturally." }] },
        { date: "2026/07/09", city: { zh: "Paris", en: "Paris" }, purpose: { zh: "Champs-Elysees 與 Arc de Triomphe", en: "Champs-Elysees and Arc de Triomphe" }, transport: { zh: "Metro / 步行", en: "Metro / walking" }, reminders: [{ zh: "若要上凱旋門，票價另外查。", en: "Check separately if you want Arc admission." }], optional: [{ zh: "可加精品購物。", en: "Luxury shopping can be added." }] },
        { date: "2026/07/10", city: { zh: "Paris", en: "Paris" }, purpose: { zh: "Galeries Lafayette 與塞納河", en: "Galeries Lafayette and the Seine" }, transport: { zh: "Metro / 步行", en: "Metro / walking" }, reminders: [{ zh: "遊船票價依公司而異。", en: "Cruise pricing depends on the operator." }], optional: [{ zh: "最後採買留在這一天。", en: "Keep final shopping for this day." }] }
      ]
    },
    {
      title: { zh: "Paris → Manchester → Taipei", en: "Paris → Manchester → Taipei" },
      entries: [
        { date: "2026/07/11 - 07/12", city: { zh: "Paris → Manchester → Heathrow → Taipei", en: "Paris → Manchester → Heathrow → Taipei" }, purpose: { zh: "返台", en: "Fly home" }, transport: { zh: "Air France / BA 1371 / CI 82", en: "Air France / BA 1371 / CI 82" }, reminders: [{ zh: "Air France 段 12:50 從 CDG T2E 起飛，13:25 到 MAN T2。", en: "The Air France segment leaves CDG T2E at 12:50 and reaches MAN T2 at 13:25." }, { zh: "不要跳過 MAN-LHR 航段。", en: "Do not skip the MAN-LHR segment." }, { zh: "希斯洛轉機約 1 小時 55 分。", en: "Heathrow transfer is about 1h 55m." }], optional: [{ zh: "當天上午只安排簡單移動。", en: "Keep the morning very light." }] }
      ]
    }
  ],
  documentChecklist: [
    { status: "confirmed", title: { zh: "接受函", en: "Acceptance letters" }, note: { zh: "兩份接受函可作會議證明。", en: "Two acceptance letters saved for conference proof." } },
    { status: "confirmed", title: { zh: "邀請函", en: "Invitation letter" }, note: { zh: "可用於出國與行政資料。", en: "Saved for travel and admin support." } },
    { status: "confirmed", title: { zh: "註冊收據", en: "Registration receipt" }, note: { zh: "AIB conference fee 已付款。", en: "AIB conference fee receipt is on file." } },
    { status: "confirmed", title: { zh: "機票收據", en: "Flight receipt" }, note: { zh: "機票行程單與付款明細已整理。", en: "Flight itinerary and payment proof are saved." } },
    { status: "confirmed", title: { zh: "住宿確認", en: "Hotel confirmation" }, note: { zh: "曼徹斯特訂房確認可直接使用。", en: "Manchester hotel confirmation is ready to use." } },
    { status: "confirmed", title: { zh: "ETA 與護照資料", en: "ETA / passport-related documents" }, note: { zh: "ETA 核准紀錄與護照資料需放同一處。", en: "Keep ETA approval and passport details together." } },
    { status: "reimburse", title: { zh: "報帳文件", en: "Reimbursement documents" }, note: { zh: "報帳文件可依報帳頁順序整理。", en: "Arrange claim documents in the budget-page order." } },
    { status: "pending", title: { zh: "旅遊保險（如有）", en: "Travel insurance if applicable" }, note: { zh: "若有投保，再補上保單資訊。", en: "Add policy details only if insurance is purchased." } }
  ]
};

const homeSectionTabs = [
  { id: "overview", label: { zh: "總覽", en: "Overview" }, icon: "overview" },
  { id: "timeline", label: { zh: "時間軸", en: "Timeline" }, icon: "schedule" },
  { id: "conference", label: { zh: "會議", en: "Conference" }, icon: "papers" },
  { id: "hotel", label: { zh: "住宿", en: "Stay" }, icon: "hotel" },
  { id: "transport", label: { zh: "交通", en: "Transport" }, icon: "transport" },
  { id: "budget", label: { zh: "預算", en: "Budget" }, icon: "budget" },
  { id: "checklist", label: { zh: "清單", en: "Checklist" }, icon: "checklist" }
];

const conferenceAlerts = [
  {
    tag: "AIB",
    status: "alert",
    title: { zh: "5/15 註冊期限", en: "May 15 registration deadline" },
    body: { zh: "會議註冊、付款確認與相關文件請在期限前整理完成。", en: "Keep registration, payment confirmation, and related files in order before the deadline." }
  },
  {
    tag: "Hotel",
    status: "alert",
    title: { zh: "曼徹斯特飯店取消規則", en: "Manchester hotel cancellation policy" },
    body: { zh: "入住前 24 小時內取消或 no-show，會收 1 晚房費。", en: "Cancellation within 24 hours of arrival or no-show will incur a one-night charge." }
  },
  {
    tag: "Budget",
    status: "reimburse",
    title: { zh: "報帳資料順序", en: "Reimbursement documents" },
    body: { zh: "機票、AIB 會議費、AIB 會員費、日支費資料建議放在同一份資料夾。", en: "Keep flights, AIB fees, membership fee, and daily allowance papers together." }
  },
  {
    tag: "Visa",
    status: "confirmed",
    title: { zh: "護照、ETA、保險", en: "Passport, ETA, and insurance" },
    body: { zh: "護照、ETA 核准紀錄與保險資料若有，建議一起離線存好。", en: "Keep passport, ETA approval, and insurance details together and available offline if applicable." }
  }
];

const paperCards = [
  {
    tag: "Paper",
    title: "Signal or Noise? Maturity-Adjusted Technical Disclosure and Multi-Stage Startup Funding Decisions",
    session: { zh: "Competitive 發表", en: "Competitive Session" },
    coauthor: { zh: "共同作者資訊請見私人筆記", en: "Coauthor details are kept in private notes" },
    schedule: [
      { label: { zh: "場次", en: "Session" }, value: { zh: "Session 3.4.11", en: "Session 3.4.11" } },
      { label: { zh: "主題軌", en: "Track" }, value: { zh: "Track 4. Global Strategy and Organization", en: "Track 4. Global Strategy and Organization" } },
      { label: { zh: "時間", en: "Time" }, value: "15:15-16:30" },
      { label: { zh: "地點", en: "Room" }, value: "3.006B (AMBS)" }
    ],
    checklist: {
      zh: ["確認 session 時間", "整理簡報版本", "準備口頭講稿", "留一份紙本備用"],
      en: ["Confirm session time", "Finalize slide deck", "Prepare speaking script", "Keep one printed backup"]
    },
    placeholders: [
      { label: { zh: "Slides", en: "Slides" }, value: { zh: "待更新", en: "Pending" } },
      { label: { zh: "Script", en: "Script" }, value: { zh: "待更新", en: "Pending" } },
      { label: { zh: "Printout", en: "Printout" }, value: { zh: "待更新", en: "Pending" } }
    ]
  },
  {
    tag: "Paper",
    title: "Legitimacy-First Innovation: How Emerging Technology Firms Construct Mainstream Pathways Under Institutional Ambiguity",
    session: { zh: "Interactive 發表", en: "Interactive Session" },
    coauthor: { zh: "共同作者資訊請見私人筆記", en: "Coauthor details are kept in private notes" },
    schedule: [
      { label: { zh: "場次", en: "Session" }, value: { zh: "待 final program", en: "Pending final program" } },
      { label: { zh: "形式", en: "Format" }, value: { zh: "Interactive presentation", en: "Interactive presentation" } }
    ],
    checklist: {
      zh: ["確認互動展示形式", "整理簡報或海報內容", "準備簡短說明版本", "確認現場列印需求"],
      en: ["Confirm interactive format", "Prepare slides or poster content", "Write a short explanation version", "Check print needs"]
    },
    placeholders: [
      { label: { zh: "Slides", en: "Slides" }, value: { zh: "待更新", en: "Pending" } },
      { label: { zh: "Script", en: "Script" }, value: { zh: "待更新", en: "Pending" } },
      { label: { zh: "Printout", en: "Printout" }, value: { zh: "待更新", en: "Pending" } }
    ]
  }
];

const checklistGroups = [
  {
    id: "registration",
    title: { zh: "註冊前", en: "Before registration" },
    items: [
      { id: "registration-payment", text: { zh: "確認 AIB 會議註冊費與會員費收據。", en: "Confirm AIB conference and membership fee receipts." } },
      { id: "registration-letters", text: { zh: "接受函與邀請函留一份可隨時開啟的版本。", en: "Keep acceptance and invitation letters easy to open." } },
      { id: "registration-program", text: { zh: "final program 公布後補上正式 session 時間。", en: "Add session times after the final program is released." } }
    ]
  },
  {
    id: "departure",
    title: { zh: "出發前", en: "Before departure" },
    items: [
      { id: "departure-eta", text: { zh: "ETA、護照、回程機票與住宿資料一起存好。", en: "Keep ETA, passport, return flight, and stay details together." } },
      { id: "departure-train", text: { zh: "曼徹斯特往返倫敦火車票完成查價或預訂。", en: "Review or book Manchester-London train tickets." } },
      { id: "departure-london-hotel", text: { zh: "確認倫敦住宿，或保留明確的待定方案。", en: "Confirm London accommodation or keep a clear pending plan." } }
    ]
  },
  {
    id: "materials",
    title: { zh: "會議資料", en: "Conference materials" },
    items: [
      { id: "materials-competitive", text: { zh: "Competitive 發表的簡報版本已整理。", en: "Competitive Session slide deck is organized." } },
      { id: "materials-interactive", text: { zh: "Interactive 發表的展示內容已整理。", en: "Interactive Session presentation material is organized." } },
      { id: "materials-backup", text: { zh: "簡報、講稿、備用檔案有離線版本。", en: "Slides, script, and backup files are available offline." } }
    ]
  },
  {
    id: "reimbursement",
    title: { zh: "報帳文件", en: "Reimbursement documents" },
    items: [
      { id: "reimbursement-flight", text: { zh: "機票行程單與付款明細已整理。", en: "Flight itinerary and payment proof are saved." } },
      { id: "reimbursement-aib", text: { zh: "AIB 會議費與會員費收據已整理。", en: "AIB conference and membership receipts are saved." } },
      { id: "reimbursement-daily", text: { zh: "國科會日支費參考資料已備好。", en: "NSTC daily allowance reference is ready." } }
    ]
  },
  {
    id: "essentials",
    title: { zh: "旅行必需品", en: "Travel essentials" },
    items: [
      { id: "essentials-adapter", text: { zh: "Type G 轉接頭、充電器與行動電源已放進行李。", en: "Type G adapter, chargers, and power bank are packed." } },
      { id: "essentials-insurance", text: { zh: "旅遊保險若有投保，保單資訊已留存。", en: "If insured, travel insurance details are saved." } },
      { id: "essentials-packing", text: { zh: "出發前最後檢查藥品、衣物與會議穿著。", en: "Do a final check on medicine, clothing, and conference outfits." } }
    ]
  }
];

const state = {
  lang: getStoredLang(),
  currency: getStoredCurrency()
};

function getChecklistStore() {
  try {
    return JSON.parse(localStorage.getItem("aibChecklistState") || "{}");
  } catch {
    return {};
  }
}

function setChecklistItem(id, checked) {
  const store = getChecklistStore();
  store[id] = checked;
  try {
    localStorage.setItem("aibChecklistState", JSON.stringify(store));
  } catch {
    // localStorage may be unavailable in private browsing.
  }
}

function isChecklistItemChecked(id) {
  return Boolean(getChecklistStore()[id]);
}

function t(value) {
  if (typeof value === "string") return value;
  return value?.[state.lang] || value?.zh || "";
}

function getStoredCurrency() {
  try {
    return localStorage.getItem("aibCurrency") || "TWD";
  } catch {
    return "TWD";
  }
}

function storeCurrency(currency) {
  state.currency = currency;
  try {
    localStorage.setItem("aibCurrency", currency);
  } catch {
    // localStorage may be unavailable in private browsing.
  }
}

function budgetAmount(row) {
  return row.amounts?.[state.currency] || t(row.amount);
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
  return `<ul${classAttr}>${items.map((item) => `<li>${escapeHtml(t(item))}</li>`).join("")}</ul>`;
}

function renderScribbleNote(text, className = "") {
  return "";
}

function renderSummaryCard({ status, title, value, note, facts }) {
  const valueMarkup = value ? `<strong>${escapeHtml(t(value))}</strong>` : "";
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

function renderMetaRow(items, className = "") {
  const validItems = (items || []).filter((item) => item?.label && item?.value);
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

function renderOverviewStatCard({ title, value, note }) {
  return `
    <article class="overview-stat">
      <div class="overview-stat-label">${escapeHtml(t(title))}</div>
      <div class="overview-stat-value">${escapeHtml(t(value))}</div>
      ${note ? `<p>${escapeHtml(t(note))}</p>` : ""}
    </article>
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

function tabIcon(name) {
  const icons = {
    overview: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="4" width="8" height="7" rx="2"></rect><rect x="13" y="4" width="8" height="5" rx="2"></rect><rect x="13" y="11" width="8" height="9" rx="2"></rect><rect x="3" y="13" width="8" height="7" rx="2"></rect></svg>',
    schedule: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="5" width="16" height="15" rx="3"></rect><path d="M8 3v4M16 3v4M4 10h16"></path></svg>',
    hotel: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 20V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v14"></path><path d="M4 13h16"></path><path d="M8 8h2M14 8h2"></path></svg>',
    transport: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 17V9a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v8"></path><path d="M7 17h10"></path><path d="M8 20h.01M16 20h.01"></path><path d="M7 12h10"></path></svg>',
    papers: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 4h8l4 4v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"></path><path d="M15 4v5h5M9 13h6M9 17h6"></path></svg>',
    budget: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="6" width="18" height="12" rx="3"></rect><path d="M7 12h10M7 16h5"></path></svg>',
    checklist: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 11l2 2 4-5"></path><rect x="4" y="4" width="16" height="16" rx="3"></rect></svg>'
  };
  return icons[name] || icons.overview;
}

function renderHomeTabs() {
  return `
    <nav class="mobile-section-tabs" aria-label="${state.lang === "en" ? "Overview section tabs" : "總覽區塊導覽"}">
      ${homeSectionTabs.map((tab, index) => `
        <a
          href="#${tab.id}"
          class="mobile-section-tab${index === 0 ? " active" : ""}"
          data-home-tab="${tab.id}"
          aria-label="${escapeHtml(t(tab.label))}"
        >
          <span class="mobile-section-tab-icon">${tabIcon(tab.icon)}</span>
          <span>${escapeHtml(t(tab.label))}</span>
        </a>
      `).join("")}
    </nav>
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
      ${paper.schedule?.length ? renderMetaRow(paper.schedule, "paper-meta-row") : ""}
      <p class="paper-coauthor"><strong>${state.lang === "en" ? "Coauthor" : "共同作者"}</strong> ${escapeHtml(t(paper.coauthor))}</p>
      <div class="paper-prep-block">
        <div class="paper-prep-title">${state.lang === "en" ? "Preparation checklist" : "準備清單"}</div>
        ${renderList(paper.checklist[state.lang], "plain-list")}
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
            ${renderAppTag("Checklist")}
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
            <div><span>GBP</span><strong>${escapeHtml(row.amounts?.GBP || "-")}</strong></div>
            <div><span>TWD</span><strong>${escapeHtml(row.amounts?.TWD || "-")}</strong></div>
            <div><span>USD</span><strong>${escapeHtml(row.amounts?.USD || "-")}</strong></div>
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
  const primaryNav = primaryNavPageIds.map((id) => pages.find((page) => page.id === id)).filter(Boolean);
  const labelForPage = (page) => primaryNavLabels[page.id] || page.label;
  const nav = primaryNav
    .map((page) => {
      const active = page.id === pageId ? ' class="nav-item active" aria-current="page"' : ' class="nav-item"';
      return `<a href="${page.href}" data-nav="${page.id}"${active}>${t(labelForPage(page))}</a>`;
    })
    .join("");
  const bottomNav = primaryNav
    .map((page) => {
      const active = page.id === pageId ? ' class="bottom-nav-item active" aria-current="page"' : ' class="bottom-nav-item"';
      return `<a href="${page.href}" data-nav="${page.id}"${active}><span>${t(labelForPage(page))}</span></a>`;
    })
    .join("");
  const langButtons = [
    { id: "zh", label: "繁中" },
    { id: "en", label: "EN" }
  ]
    .map((lang) => `
      <button class="pill-btn${state.lang === lang.id ? " active" : ""}" type="button" data-lang="${lang.id}" aria-label="${lang.id === "en" ? "Switch language to English" : "Switch language to Traditional Chinese"}">${lang.label}</button>
    `)
    .join("");
  const currencyButtons = currencies
    .map((currency) => {
      const label = state.lang === "en" ? currency.id : t(currency.label);
      return `<button class="pill-btn${state.currency === currency.id ? " active" : ""}" type="button" data-currency="${currency.id}" aria-label="${state.lang === "en" ? `Switch currency to ${currency.id}` : `切換為${t(currency.label)}` }">${escapeHtml(label)}</button>`;
    })
    .join("");

  document.querySelector("[data-site-header]").innerHTML = `
    <div class="control-dock" aria-label="${state.lang === "en" ? "Language and currency controls" : "語言與貨幣控制"}">
      <div class="control-group">
        <div class="control-label">${state.lang === "en" ? "Language" : "語言"}</div>
        <div class="control-buttons" role="tablist" aria-label="${state.lang === "en" ? "Language switcher" : "語言切換"}">${langButtons}</div>
      </div>
      <div class="control-group">
        <div class="control-label">${state.lang === "en" ? "Currency" : "貨幣"}</div>
        <div class="control-buttons" role="tablist" aria-label="${state.lang === "en" ? "Currency switcher" : "貨幣切換"}">${currencyButtons}</div>
      </div>
    </div>
    <nav class="main-nav" aria-label="${state.lang === "en" ? "Primary page tabs" : "主要分頁"}">
      ${nav}
    </nav>
  `;

  document.querySelector("[data-site-footer]").innerHTML = `
    <footer class="site-footer">
      <p>AIB 2026 Manchester · ${state.lang === "en" ? "UK Travel Handbook" : "英國旅程手冊"}</p>
      <a href="./index.html">${state.lang === "en" ? "Back to overview" : "回到總覽"}</a>
    </footer>
    ${pageId === "home"
      ? renderHomeTabs()
      : `<nav class="bottom-nav" aria-label="${state.lang === "en" ? "Primary mobile navigation" : "主要手機導覽"}">${bottomNav}</nav>`
    }
  `;

  document.querySelectorAll("[data-lang]").forEach((button) => {
    button.addEventListener("click", () => {
      state.lang = button.dataset.lang;
      storeLang(state.lang);
      renderApp();
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

function renderHero(pageId) {
  const hero = tripData.hero[pageId] || tripData.hero.home;
  const homePage = pageId === "home";
  const heroTitle = escapeHtml(t(hero.title)).replace("\n", "<br />");
  if (homePage) {
    return `
      <div class="editorial-hero mobile-dashboard-hero">
        <p class="eyebrow">${state.lang === "en" ? "Academic Conference Travel Dashboard" : "學術會議旅程總覽"}</p>
        <h1>${state.lang === "en" ? "AIB 2026 Manchester" : "AIB 2026 Manchester"}</h1>
        <p class="hero-date-line">${state.lang === "en" ? "June 30 – July 5, 2026" : "2026 年 6 月 30 日 – 7 月 5 日"}</p>
        <p class="hero-location-line">${state.lang === "en" ? "Manchester, United Kingdom" : "英國曼徹斯特"}</p>
        <p class="hero-serif-note">${state.lang === "en" ? "Conference stay, hotel, papers, and the broader UK routing in one polished planning view." : "把會議住宿、發表安排與整段英國旅程收進同一個清楚的行前總覽。"}</p>
        <div class="hero-chip-row" aria-label="${state.lang === "en" ? "Trip summary" : "旅程摘要"}">
          <span class="hero-chip">${state.lang === "en" ? "AIB 2026" : "AIB 2026"}</span>
          <span class="hero-chip">${state.lang === "en" ? "Manchester, UK" : "Manchester, UK"}</span>
          <span class="hero-chip">${state.lang === "en" ? "INNSiDE Manchester" : "INNSiDE Manchester"}</span>
          <span class="hero-chip">${state.lang === "en" ? "Jun 30 – Jul 5, 2026" : "2026/06/30 – 2026/07/05"}</span>
          <span class="hero-chip">${state.lang === "en" ? "Competitive + Interactive Session" : "兩種發表形式"}</span>
        </div>
        <div class="hero-summary-grid hero-compact-summary">
          ${[
            [{ zh: "會議", en: "Conference" }, "AIB 2026"],
            [{ zh: "城市", en: "City" }, { zh: "Manchester", en: "Manchester" }],
            [{ zh: "住宿", en: "Hotel" }, "INNSiDE Manchester"],
            [{ zh: "停留", en: "Stay" }, { zh: "2026/06/30 – 2026/07/05", en: "Jun 30 – Jul 5, 2026" }],
            [{ zh: "發表", en: "Papers" }, { zh: "兩種發表形式", en: "Competitive + Interactive Session" }]
          ].map(([label, value]) => `
            <article class="summary-card hero-summary-card">
              <div class="summary-label">${escapeHtml(t(label))}</div>
              <div class="summary-value">${escapeHtml(t(value))}</div>
            </article>
          `).join("")}
        </div>
        <div class="hero-actions editorial-hero-actions">
          <a class="button primary" href="#overview">${state.lang === "en" ? "Travel overview" : "查看總覽"}</a>
          <a class="button secondary" href="#conference">${state.lang === "en" ? "Conference details" : "查看會議"}</a>
        </div>
      </div>
    `;
  }
  return `
    <div class="hero-grid handbook-hero-grid">
      <section class="hero-copy">
        <p class="eyebrow">${escapeHtml(t(hero.kicker))}</p>
        <h1>${heroTitle}</h1>
        <p class="hero-serif-note">${escapeHtml(t(hero.lead))}</p>
        <div class="hero-actions">
          <a class="button primary" href="./index.html">${state.lang === "en" ? "Back to dashboard" : "回到總覽"}</a>
          <a class="button secondary" href="./links.html">${state.lang === "en" ? "Useful links" : "常用連結"}</a>
        </div>
      </section>
      <aside class="hero-panel dashboard-panel" aria-label="${state.lang === "en" ? "Trip snapshot" : "旅程摘要"}">
        <div><span class="panel-label">${state.lang === "en" ? "Dates" : "日期"}</span><strong>2026/06/29 – 2026/07/12</strong></div>
        <div><span class="panel-label">${state.lang === "en" ? "Cities" : "城市"}</span><strong>Manchester · London · Paris</strong></div>
        <div><span class="panel-label">${state.lang === "en" ? "Status" : "狀態"}</span><strong>${state.lang === "en" ? "Flights booked · later stays in planning" : "機票已訂 · 後段住宿整理中"}</strong></div>
        <div><span class="panel-label">${state.lang === "en" ? "Last updated" : "最後更新"}</span><strong>${tripData.lastUpdated}</strong></div>
      </aside>
    </div>
  `;
}

function renderQuickNav(pageId) {
  const items = sectionNav[pageId] || [];
  if (!items.length) return "";
  return `
    <nav class="quick-nav" aria-label="${state.lang === "en" ? "Section navigation" : "區塊導覽"}">
      ${items.map(([id, label]) => `<a href="#${escapeHtml(id)}">${escapeHtml(t(label))}</a>`).join("")}
    </nav>
  `;
}

function renderReadingGuide(pageId) {
  return "";
}

function renderHome() {
  const conferenceCards = [
    {
      tag: { zh: "會議", en: "AIB" },
      title: { zh: "會議時段", en: "Conference Window" },
      value: { zh: "Jul 1 – Jul 4, 2026", en: "Jul 1 – Jul 4, 2026" },
      note: { zh: "主會議與交流活動集中在這幾天。", en: "Main sessions and networking are concentrated in these dates." }
    },
    {
      tag: { zh: "發表", en: "Paper" },
      title: { zh: "發表形式", en: "Presentation Format" },
      value: { zh: "Competitive + Interactive", en: "Competitive + Interactive" },
      note: { zh: "兩篇 paper 已分別確認會議形式。", en: "Both papers already have their presentation format confirmed." }
    },
    {
      tag: { zh: "安排", en: "Planning" },
      title: { zh: "場次時間", en: "Session Timing" },
      value: { zh: "Final program 待公布", en: "Final program pending" },
      note: { zh: "正式場次時間公布後，再補進會議頁。", en: "Session times can be added after the final program is released." }
    }
  ];

  const transportCards = [
    {
      tag: { zh: "航班", en: "Flight" },
      title: { zh: "國際航班", en: "International Flights" },
      value: "TPE → FRA → MAN / MAN → LHR → TPE",
      note: { zh: "去回程航班都已經固定，法蘭克福與希斯洛各有一段轉機。", en: "The international routing is fixed, with one transfer in Frankfurt and one in Heathrow." }
    },
    {
      tag: { zh: "火車", en: "Rail" },
      title: { zh: "Manchester ↔ London", en: "Manchester ↔ London" },
      value: { zh: "Piccadilly ↔ Euston", en: "Piccadilly ↔ Euston" },
      note: { zh: "英國段移動以火車為主，票種與時段可等倫敦住宿一起決定。", en: "UK intercity movement centers on rail, with fare choice best finalized alongside the London stay." }
    },
    {
      tag: { zh: "市內交通", en: "City" },
      title: { zh: "市內交通", en: "Local Transit" },
      value: { zh: "Tube / Metrolink / contactless", en: "Tube / Metrolink / contactless" },
      note: { zh: "市內移動以感應支付為主，倫敦與曼徹斯特都很好銜接。", en: "Local transit stays simple with contactless payment in both Manchester and London." }
    }
  ];

  return `
    <div class="desktop-dashboard-shell">
      <aside class="desktop-dashboard-sidebar" aria-label="${state.lang === "en" ? "Desktop overview navigation" : "桌機版總覽導覽"}">
        <div class="desktop-sidebar-card">
          <div class="section-label">${state.lang === "en" ? "Navigate" : "導覽"}</div>
          <nav class="desktop-anchor-nav">
            ${sectionNav.home.map(([id, label]) => `<a href="#${id}" class="desktop-anchor-link" data-desktop-anchor="${id}">${escapeHtml(t(label))}</a>`).join("")}
          </nav>
        </div>
        <div class="desktop-sidebar-card desktop-sidebar-meta">
          <div class="section-label">${state.lang === "en" ? "Snapshot" : "摘要"}</div>
          <div class="desktop-meta-list">
            <div><span>${state.lang === "en" ? "Conference" : "會議"}</span><strong>AIB 2026</strong></div>
            <div><span>${state.lang === "en" ? "City" : "城市"}</span><strong>Manchester</strong></div>
            <div><span>${state.lang === "en" ? "Hotel" : "飯店"}</span><strong>INNSiDE Manchester</strong></div>
            <div><span>${state.lang === "en" ? "Stay" : "住宿"}</span><strong>Jun 30 – Jul 5, 2026</strong></div>
          </div>
        </div>
      </aside>
      <div class="desktop-dashboard-main">
        <section class="section dashboard-section home-dashboard" id="overview">
          <article class="section-card intro-card mobile-overview-card desktop-overview-card">
            ${sectionHeading(
              state.lang === "en" ? "Travel Overview" : "旅程總覽",
              state.lang === "en" ? "A clear view of the conference week in Manchester." : "先把曼徹斯特這段會議旅程看清楚。",
              state.lang === "en" ? "The core stay is already in place, with the conference, hotel, and onward travel gathered in one calm overview." : "先把會議主段、住宿安排與後續移動放在同一個乾淨的總覽裡。"
            )}
            <div class="summary-grid home-overview-grid">
              ${homeOverviewCards.map((card) => `
                <article class="summary-card travel-overview-card">
                  ${renderAppTag(card.tag)}
                  <h3>${escapeHtml(t(card.title))}</h3>
                  <strong>${escapeHtml(t(card.value))}</strong>
                  <p>${escapeHtml(t(card.note))}</p>
                </article>
              `).join("")}
            </div>
            <div class="summary-grid two overview-support-grid">
              <article class="summary-card support-card">
                ${renderAppTag(state.lang === "en" ? "Focus" : "重點")}
                <h3>${state.lang === "en" ? "Conference purpose" : "會議主軸"}</h3>
                <p>${state.lang === "en" ? "This dashboard keeps the Manchester conference stay, the confirmed hotel, and the paper formats easy to scan before moving into the London part of the trip." : "首頁先聚焦曼徹斯特會議主段，把住宿、發表形式與旅程節奏整理得一眼就能看懂。"}</p>
              </article>
              <article class="summary-card support-card">
                ${renderAppTag(state.lang === "en" ? "Dashboard" : "導覽")}
                <h3>${state.lang === "en" ? "Quick access" : "快速切換"}</h3>
                <p>${state.lang === "en" ? "Use the tabs above for the full pages, or continue downward for the essential overview, timeline, hotel, transport, and planning notes." : "上方分頁可以直接進各頁，往下則是首頁版的會議、住宿、交通與行前重點。"}</p>
              </article>
            </div>
          </article>
        </section>
        <section class="section compact-section" id="timeline">
          <article class="section-card">
            ${sectionHeading(
              state.lang === "en" ? "Key Timeline" : "關鍵時間軸",
              state.lang === "en" ? "The conference week at a glance." : "先看這段旅程的主節奏。",
              state.lang === "en" ? "Arrival, conference days, and check-out are kept compact here before the fuller day-by-day itinerary." : "先用簡潔版看抵達、會議日程與退房節點，完整日程再到行程頁細看。"
            )}
            <div class="travel-timeline-grid">
              ${homeKeyTimeline.map((item, index) => `
                <article class="timeline-stage-card">
                  <div class="timeline-stage-top">
                    <span class="timeline-stage-date">${escapeHtml(item.date)}</span>
                    <span class="timeline-stage-index">${String(index + 1).padStart(2, "0")}</span>
                  </div>
                  <h3>${escapeHtml(t(item.title))}</h3>
                  <p>${escapeHtml(t(item.note))}</p>
                </article>
              `).join("")}
            </div>
          </article>
        </section>
        <section class="section compact-section" id="conference">
          <article class="section-card">
            ${sectionHeading(
              state.lang === "en" ? "Conference Details" : "會議資訊",
              state.lang === "en" ? "The academic core of the trip." : "這趟旅程的會議主段。",
              state.lang === "en" ? "Keep the event window, paper formats, and presentation preparation in one place." : "會議期間、paper 形式與發表準備集中在同一區塊。"
            )}
            <div class="summary-grid three conference-overview-grid">
              ${conferenceCards.map((card) => `
                <article class="summary-card conference-summary-card">
                  ${renderAppTag(card.tag)}
                  <h3>${escapeHtml(t(card.title))}</h3>
                  <strong>${escapeHtml(t(card.value))}</strong>
                  <p>${escapeHtml(t(card.note))}</p>
                </article>
              `).join("")}
            </div>
            <div class="paper-grid">
              ${paperCards.map(renderPaperCard).join("")}
            </div>
          </article>
        </section>
        <section class="section compact-section" id="hotel">
      <article class="section-card">
        ${sectionHeading(
          state.lang === "en" ? "Hotel & Stay" : "住宿安排",
          state.lang === "en" ? "The confirmed stay in Manchester comes first." : "先把已確認的曼徹斯特住宿收好。",
          state.lang === "en" ? "The conference hotel is fixed, while the London portion stays flexible until the preferred rail-facing area is chosen." : "會議主住宿已經固定，倫敦段則保留彈性，等區域和火車動線一起決定。"
        )}
        <div class="stay-list-rich app-stay-list">
          <article class="stay-card-rich with-image booking-card">
            <div class="stay-card-image-wrap">
              <img class="stay-card-image" src="${escapeHtml(hotelImage)}" alt="INNSiDE Manchester hotel exterior and room preview" loading="lazy" />
            </div>
            <div class="stay-card-top">
              <div class="stay-card-head">
                ${renderAppTag(state.lang === "en" ? "Hotel" : "住宿")}
                <h3 class="stay-card-local">INNSiDE Manchester</h3>
                <p class="stay-card-note">1 First Street, Manchester</p>
              </div>
              ${statusChip("confirmed")}
            </div>
            <div class="stay-detail-chips">
              <span>Jun 30 – Jul 5, 2026</span>
              <span>${state.lang === "en" ? "5 nights" : "5 晚"}</span>
              <span>${state.lang === "en" ? "The INNSiDE Room Twin Bed" : "The INNSiDE Room Twin Bed"}</span>
              <span>approx. GBP 900.90</span>
            </div>
            <div class="booking-facts">
              <div><span>${state.lang === "en" ? "Check-in" : "入住"}</span><strong>2026/06/30 15:00</strong></div>
              <div><span>${state.lang === "en" ? "Check-out" : "退房"}</span><strong>2026/07/05 12:00</strong></div>
              <div><span>${state.lang === "en" ? "Penalty" : "取消規則"}</span><strong>${state.lang === "en" ? "Within 24 hours = 1 night" : "24 小時內取消 = 1 晚房費"}</strong></div>
            </div>
            <div class="booking-action-row">
              <a class="button secondary" href="https://www.melia.com/en/hotels/united-kingdom/manchester/innside-manchester" target="_blank" rel="noreferrer noopener" aria-label="${state.lang === "en" ? "Open hotel booking page" : "開啟飯店頁面"}">${state.lang === "en" ? "Open booking" : "查看訂房"}</a>
              <a class="button secondary" href="https://www.google.com/maps/search/?api=1&query=INNSiDE+Manchester+1+First+Street+Manchester" target="_blank" rel="noreferrer noopener" aria-label="${state.lang === "en" ? "Open hotel on map" : "開啟地圖"}">${state.lang === "en" ? "Map" : "Map"}</a>
              <a class="button secondary" href="./links.html" aria-label="${state.lang === "en" ? "Open links page" : "開啟連結頁"}">${state.lang === "en" ? "Useful links" : "常用連結"}</a>
              <a class="button secondary" href="./budget.html" aria-label="${state.lang === "en" ? "Open funding notes page" : "開啟費用頁"}">${state.lang === "en" ? "Expense notes" : "費用說明"}</a>
            </div>
          </article>
          <article class="summary-card hotel-decision-card">
            ${renderAppTag(state.lang === "en" ? "Hotel" : "住宿")}
            ${statusChip("pending")}
            <h3>${state.lang === "en" ? "London stay still open" : "倫敦住宿仍待決定"}</h3>
            <p>${state.lang === "en" ? "Current priority: Euston, King's Cross, Bloomsbury, South Kensington, or Paddington." : "目前優先考慮 Euston、King's Cross、Bloomsbury、South Kensington 或 Paddington。"}</p>
            ${renderList([
              state.lang === "en" ? "Keep the return to London Euston simple." : "回到 London Euston 要方便。",
              state.lang === "en" ? "Museum days should stay easy on transit." : "博物館日的移動要順。",
              state.lang === "en" ? "7/4 may overlap with the Manchester booking." : "7/4 可能和曼徹斯特住宿重疊。"
            ], "plain-list")}
          </article>
        </div>
      </article>
    </section>
    <section class="section compact-section" id="transport">
      <article class="section-card">
        ${sectionHeading(
          state.lang === "en" ? "Transportation Plan" : "交通規劃",
          state.lang === "en" ? "Flights, rail movement, and city transit." : "把航班、火車與市內移動放在一起看。",
          state.lang === "en" ? "The long-haul flights are already fixed, while rail timing and local movement remain easy to refine around the stay." : "國際航班已經固定，火車時段與市內移動則可以配合住宿與每天行程再調整。"
        )}
        <div class="summary-grid three transport-plan-grid">
          ${transportCards.map((card) => `
            <article class="summary-card transport-summary-card">
              ${renderAppTag(card.tag)}
              <h3>${escapeHtml(t(card.title))}</h3>
              <strong>${escapeHtml(t(card.value))}</strong>
              <p>${escapeHtml(t(card.note))}</p>
            </article>
          `).join("")}
        </div>
      </article>
    </section>
    <section class="section compact-section" id="budget">
      <article class="section-card">
      ${sectionHeading(
        state.lang === "en" ? "Funding & Expense Notes" : "費用與行政備註",
        state.lang === "en" ? "Keep funding notes and travel admin in the quieter half of the page." : "把費用與行政相關內容留在頁面後段。",
        state.lang === "en" ? "Conference-related costs, hotel spend, and document order stay here so the top of the dashboard can remain focused on the trip itself." : "把會議費用、住宿花費與文件整理順序收在這裡，首頁前半段就能專心看旅程本身。"
      )}
      <div class="summary-grid three budget-summary-grid">
        <article class="summary-card">${renderAppTag(state.lang === "en" ? "Budget" : "費用")}<h3>${state.lang === "en" ? "Total expected cost" : "目前預估總額"}</h3><strong>${state.lang === "en" ? "TBD after London hotel" : "倫敦住宿確定後再更新"}</strong></article>
        <article class="summary-card">${renderAppTag(state.lang === "en" ? "Hotel" : "住宿")}<h3>${state.lang === "en" ? "Hotel cost" : "飯店費用"}</h3><strong>${money.hotel}</strong></article>
        <article class="summary-card">${renderAppTag("AIB")}<h3>${state.lang === "en" ? "Conference-related cost" : "會議相關費用"}</h3><strong>${money.conference}</strong><p>${state.lang === "en" ? `Membership ${money.membership}` : `會員費 ${money.membership}`}</p></article>
        <article class="summary-card">${renderAppTag(state.lang === "en" ? "Admin" : "行政")}<h3>${state.lang === "en" ? "Travel admin" : "旅程行政整理"}</h3><strong>${state.lang === "en" ? "Funding notes and supporting files" : "費用備註與相關文件"}</strong></article>
        <article class="summary-card">${renderAppTag(state.lang === "en" ? "Planning" : "規劃")}<h3>${state.lang === "en" ? "Open items" : "尚待安排"}</h3><strong>${state.lang === "en" ? "London hotel + rail timing" : "倫敦住宿與火車時段"}</strong></article>
      </div>
      ${renderBudgetCards([...tripData.expenses, ...tripData.selfFundedExpenses])}
      <div class="summary-grid two desktop-notes-grid">
        ${tripData.todos.map((item) => `
          <article class="summary-card note-card">
            ${statusChip(item.status)}
            <p>${escapeHtml(t(item.text))}</p>
          </article>
        `).join("")}
      </div>
      </article>
    </section>
    <section class="section compact-section" id="checklist">
      <article class="section-card">
        ${sectionHeading(
          state.lang === "en" ? "Pre-departure Checklist" : "行前確認清單",
          state.lang === "en" ? "The final practical layer before departure." : "出發前最後一層整理。",
          state.lang === "en" ? "Checklist state is stored locally in this browser, so the essentials stay easy to revisit." : "勾選狀態會留在這個瀏覽器裡，方便出發前再回來核對。"
        )}
        ${renderChecklistBoard()}
      </article>
    </section>
    <section class="section compact-section" id="quick-actions">
      <article class="section-card">
        ${sectionHeading(state.lang === "en" ? "Pages" : "頁面", state.lang === "en" ? "Full pages" : "完整頁面", state.lang === "en" ? "Open the dedicated page when you want the fuller handbook version." : "需要更完整的細節時，再進到各自的分頁。")}
        <div class="page-grid handbook-page-grid">
          ${pages.slice(1).map((page, index) => `
            <a class="page-card" href="${page.href}">
              <span>${String(index + 1).padStart(2, "0")}</span>
              <strong>${escapeHtml(t(page.label))}</strong>
              <p>${escapeHtml(pageDescriptions[page.id][state.lang])}</p>
            </a>
          `).join("")}
        </div>
      </article>
    </section>
      </div>
    </div>
  `;
}

const pageDescriptions = {
  conference: { zh: "會議日期、註冊狀態與現場節奏。", en: "Conference dates, registration status, and event rhythm." },
  transport: { zh: "航班、轉機、火車與市內交通。", en: "Flights, transfers, trains, and local transit." },
  stay: { zh: "已訂住宿、待定住宿與區域決策。", en: "Booked stay, pending stay, and area decisions." },
  itinerary: { zh: "時間軸行程、景點費用與回程提醒。", en: "Timeline itinerary, attraction costs, and return notes." },
  shopping: { zh: "茶葉、餅乾、果醬與超市購物清單。", en: "Tea, biscuits, preserves, and useful shopping notes." },
  map: { zh: "主要地點、每日路線與地圖連結。", en: "Key locations, daily routes, and map links." },
  budget: { zh: "Funding 與 expense notes，外加三幣別金額整理。", en: "Funding and expense notes, with three-currency amounts." },
  reminders: { zh: "待處理事項與旅程最後筆記。", en: "Pending items and final travel notes." },
  firstTime: { zh: "第一次去英國前可先看的實用提醒。", en: "Practical notes for a first UK trip." },
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
    <div class="desktop-page-shell">
      <aside class="desktop-page-sidebar" aria-label="${state.lang === "en" ? "Page navigation" : "頁面導覽"}">
        <div class="desktop-sidebar-card">
          <div class="section-label">${escapeHtml(t(options.label))}</div>
          <h3>${escapeHtml(t(options.title))}</h3>
          ${options.note ? `<p class="desktop-sidebar-note">${escapeHtml(t(options.note))}</p>` : ""}
          <nav class="desktop-anchor-nav">
            ${items.map(([id, label]) => `<a href="#${escapeHtml(id)}" class="desktop-anchor-link" data-page-anchor="${escapeHtml(id)}">${escapeHtml(t(label))}</a>`).join("")}
          </nav>
        </div>
        ${meta.length ? `
          <div class="desktop-sidebar-card desktop-sidebar-meta">
            <div class="section-label">${state.lang === "en" ? "Snapshot" : "摘要"}</div>
            <div class="desktop-meta-list">
              ${meta.map((item) => `
                <div>
                  <span>${escapeHtml(t(item.label))}</span>
                  <strong>${escapeHtml(t(item.value))}</strong>
                </div>
              `).join("")}
            </div>
          </div>
        ` : ""}
      </aside>
      <div class="desktop-page-main">
        ${content}
      </div>
    </div>
  `;
}

function renderConference() {
  return renderDesktopPageShell("conference", {
    label: { zh: "Conference", en: "Conference" },
    title: { zh: "會議頁面", en: "Conference page" },
    note: { zh: "這一頁集中看會議、paper 與提醒。", en: "Keep conference status, papers, and reminders in one place." },
    meta: [
      { label: { zh: "AIB", en: "AIB" }, value: "2026" },
      { label: { zh: "城市", en: "City" }, value: "Manchester" },
      { label: { zh: "註冊狀態", en: "Registration" }, value: { zh: "已付款", en: "Paid" } },
      { label: { zh: "論文", en: "Papers" }, value: { zh: "Competitive + Interactive", en: "Competitive + Interactive" } }
    ]
  }, `
    ${renderQuickNav("conference")}
    ${renderReadingGuide("conference")}
    <section class="section compact-section" id="accepted">
      ${sectionHeading(state.lang === "en" ? "Conference Status" : "會議狀態", state.lang === "en" ? "Core conference items" : "會議核心資訊", state.lang === "en" ? "Only neutral conference logistics are shown here." : "這頁只保留中性的會議與文件資訊。")}
      <div class="summary-grid two">
        ${dashboardData.conferenceCards.map(renderSummaryCard).join("")}
      </div>
    </section>
    <section class="section compact-section" id="papers">
      ${sectionHeading(state.lang === "en" ? "Papers" : "論文", state.lang === "en" ? "Conference paper cards" : "會議論文卡片", state.lang === "en" ? "Keep the two session formats separate so preparation is easier to track." : "把兩種 session 形式分開看，準備時會比較清楚。")}
      <div class="paper-grid">
        ${paperCards.map(renderPaperCard).join("")}
      </div>
    </section>
    <section class="section compact-section" id="alerts">
      ${sectionHeading(state.lang === "en" ? "Alerts" : "提醒", state.lang === "en" ? "Conference-facing reminders" : "和會議直接相關的提醒")}
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
    <section class="section compact-section" id="checklist">
      ${sectionHeading(state.lang === "en" ? "Conference Documents" : "會議文件", state.lang === "en" ? "Files to keep ready" : "會議相關文件整理")}
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
      note: { zh: "Eurostar 約 2 小時 20 分，市中心直達市中心。", en: "Eurostar takes about 2h20 city centre to city centre." },
      meta: [
        { label: { zh: "建議時段", en: "Window" }, value: { zh: "上午或中午", en: "Morning or midday" } },
        { label: { zh: "票種", en: "Fare" }, value: "Eurostar Standard / Plus" },
        { label: { zh: "提醒", en: "Reminder" }, value: { zh: "需提早到站安檢", en: "Arrive early for security" } }
      ]
    }
  ];

  return `
    ${renderQuickNav("transport")}
    ${renderReadingGuide("transport")}
    <section class="section compact-section" id="flights">
      ${sectionHeading(state.lang === "en" ? "Flights" : "航班", state.lang === "en" ? "Flight details" : "航班與轉機")}
      <div class="flight-grid">
        ${tripData.flights.map((flight) => `
          <article class="flight-card">
            <div class="flight-head">${statusChip("confirmed")}<strong>${t(flight.label)} · ${flight.date}</strong></div>
            ${renderMetaRow([
              { label: state.lang === "en" ? "Route" : "路線", value: flight.legs.map((leg) => `${leg.from} → ${leg.to}`).join(" · ") },
              { label: state.lang === "en" ? "Flights" : "航班", value: flight.legs.map((leg) => leg.flight).join(" / ") },
              { label: state.lang === "en" ? "Key note" : "重點", value: flight.note ? t(flight.note) : (state.lang === "en" ? (flight.label.en === "Outbound" ? "Frankfurt transfer" : "Starts from Manchester") : (flight.label.zh === "去程" ? "法蘭克福轉機" : "回程從曼徹斯特起飛")) }
            ], "flight-meta")}
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
        <article><h3>${state.lang === "en" ? "Transfer reminder" : "轉機提醒"}</h3><p>${state.lang === "en" ? "The return ticket starts from MAN. Do not skip the MAN-LHR segment even if you are staying in London before departure." : "回程機票從 MAN 開始；即使最後幾天在倫敦，也不要跳過 MAN-LHR 這一段。"}</p></article>
      </div>
    </section>
    <section class="section compact-section" id="transfer">
      ${sectionHeading(
        state.lang === "en" ? "Transfers" : "轉機資訊",
        state.lang === "en" ? "Frankfurt and Heathrow connection notes" : "法蘭克福與希斯洛轉機注意事項",
        state.lang === "en" ? "Terminals and gates can change; use the airport screens on the day." : "航廈與登機門可能調整，當天以機場螢幕與航空公司通知為準。"
      )}
      <div class="transfer-grid">
        ${tripData.transfers.map(renderTransferCard).join("")}
      </div>
    </section>
    <section class="section compact-section" id="train">
      ${sectionHeading(state.lang === "en" ? "Train" : "火車", state.lang === "en" ? "Manchester ↔ London" : "曼徹斯特 ↔ 倫敦")}
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
    </section>
    <section class="section compact-section" id="local">
      ${sectionHeading(state.lang === "en" ? "Getting Around" : "市內交通", state.lang === "en" ? "London & Manchester local transport" : "倫敦與曼徹斯特市內交通")}
      <div class="summary-grid two">
        ${tripData.localTransit.map((city) => `
          <article class="summary-card">
            <h3>${escapeHtml(t(city.city))}</h3>
            ${renderMetaRow(
              state.lang === "en"
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

function renderStay() {
  return renderDesktopPageShell("stay", {
    label: { zh: "Hotel", en: "Hotel" },
    title: { zh: "住宿頁面", en: "Accommodation page" },
    note: { zh: "這一頁把已訂住宿與倫敦、巴黎後段安排分開整理。", en: "Booked stay and the later London / Paris stay plan are separated here." },
    meta: [
      { label: { zh: "飯店", en: "Hotel" }, value: "INNSiDE Manchester" },
      { label: { zh: "住宿", en: "Stay" }, value: "Jun 30 – Jul 5, 2026" },
      { label: { zh: "房型", en: "Room" }, value: { zh: "Twin Bed", en: "Twin Bed" } },
      { label: { zh: "後段", en: "Later stays" }, value: { zh: "London / Paris", en: "London / Paris" } }
    ]
  }, `
    ${renderQuickNav("stay")}
    ${renderReadingGuide("stay")}
    <section class="section compact-section" id="overview">
      <article class="section-card">
      <div class="section-label">${state.lang === "en" ? "Stay Plan" : "住宿安排"}</div>
      <h2>${state.lang === "en" ? "Manchester is fixed, and the later-city stays are lined up." : "曼徹斯特已定，後段城市住宿也排出方向了。"}</h2>
      <p class="lead">${state.lang === "en" ? "The conference hotel is fixed first, then London and Paris are compared by access, atmosphere, and route convenience." : "先把會議那幾天住穩，再把倫敦與巴黎依交通、氣質和動線排出首選。"}</p>
      <div class="stay-list-rich">
        ${tripData.stay.slice(0, 1).map((stay, index) => `
          <article class="stay-card-rich${stay.image ? " with-image" : ""}">
            ${stay.image ? `
              <div class="stay-card-image-wrap">
                <img class="stay-card-image" src="${escapeHtml(stay.image)}" alt="${escapeHtml(t(stay.title))}" loading="lazy" />
              </div>
            ` : `<div class="stay-placeholder"><span>${String(index + 1).padStart(2, "0")}</span></div>`}
            <div class="stay-card-top">
              <div class="stay-card-head">
                <div class="stay-card-kicker">${escapeHtml(t(stay.city))}</div>
                <h3 class="stay-card-local">${escapeHtml(t(stay.title))}</h3>
                <p class="stay-card-note">${escapeHtml(t(stay.note))}</p>
              </div>
              <div class="stay-side">
                ${statusChip(stay.status)}
                <a class="stay-map-link" href="${escapeHtml(stay.link)}" target="_blank" rel="noreferrer noopener">${state.lang === "en" ? "View hotel" : "查看飯店"}</a>
              </div>
            </div>
            <div class="stay-detail-chips">
              <span>${state.lang === "en" ? "Jun 30 – Jul 5, 2026" : "2026/06/30 – 2026/07/05"}</span>
              <span>${state.lang === "en" ? "5 nights" : "5 晚"}</span>
              <span>${state.lang === "en" ? "The INNSiDE Room Twin Bed" : "The INNSiDE Room Twin Bed"}</span>
              <span>approx. GBP 900.90</span>
              <span>${money.hotelPerPersonTotal}</span>
            </div>
            <div class="booking-facts">
              <div><span>${state.lang === "en" ? "Address" : "地址"}</span><strong>1 First Street, Manchester</strong></div>
              <div><span>${state.lang === "en" ? "Guests" : "入住人數"}</span><strong>${state.lang === "en" ? "2 guests" : "2 人"}</strong></div>
              <div><span>${state.lang === "en" ? "Cancellation" : "取消規則"}</span><strong>${state.lang === "en" ? "Within 24 hours = 1 night penalty" : "24 小時內取消 = 1 晚房費"}</strong></div>
            </div>
            <div class="booking-action-row">
              <a class="button secondary" href="https://www.melia.com/en/hotels/united-kingdom/manchester/innside-manchester" target="_blank" rel="noreferrer noopener" aria-label="${state.lang === "en" ? "Open booking page" : "開啟訂房頁"}">${state.lang === "en" ? "Open booking" : "查看訂房"}</a>
              <a class="button secondary" href="https://www.google.com/maps/search/?api=1&query=INNSiDE+Manchester+1+First+Street+Manchester" target="_blank" rel="noreferrer noopener" aria-label="${state.lang === "en" ? "Open map" : "開啟地圖"}">${state.lang === "en" ? "Map" : "地圖"}</a>
              <a class="button secondary" href="./links.html" aria-label="${state.lang === "en" ? "Open contact and links page" : "開啟連結頁"}">${state.lang === "en" ? "Links" : "連結"}</a>
              <a class="button secondary" href="./budget.html" aria-label="${state.lang === "en" ? "Open reimbursement page" : "開啟費用頁"}">${state.lang === "en" ? "Expense notes" : "費用說明"}</a>
            </div>
            ${renderList(stay.facts, "stay-facts")}
          </article>
        `).join("")}
      </div>
      </article>
    </section>
    <section class="section compact-section" id="decision">
      <article class="section-card">
      <div class="section-label">${state.lang === "en" ? "Later-City Stays" : "後段住宿安排"}</div>
      <h2>${state.lang === "en" ? "London and Paris stays" : "倫敦與巴黎住宿"}</h2>
      <p class="lead">${state.lang === "en" ? "London stays closer to the rail rhythm, while Paris leans more toward the travel atmosphere." : "倫敦先看交通與步行便利，巴黎則更偏向旅程感與景觀。"}</p>
      <div class="summary-grid two">
        ${tripData.stay.slice(1).map(renderSummaryCard).join("")}
        <article class="summary-card">
          ${statusChip("pending")}
          <h3>${state.lang === "en" ? "Why these choices fit" : "這些選擇為什麼順"}</h3>
          ${renderMetaRow([
            { label: state.lang === "en" ? "London" : "倫敦", value: state.lang === "en" ? "Rail and central access" : "車站動線與市中心步行" },
            { label: state.lang === "en" ? "Paris" : "巴黎", value: state.lang === "en" ? "Tower view and relaxed stay" : "鐵塔景與旅行感" }
          ])}
          ${renderList([
            state.lang === "en" ? "The Langham London: strongest first-choice city stay." : "The Langham London：整體質感最好，最像這段旅程的主住宿。",
            state.lang === "en" ? "The Clermont Charing Cross: better if station access matters most." : "The Clermont Charing Cross：如果更在意車站動線，會更直接。",
            state.lang === "en" ? "Pullman Paris Tour Eiffel: matches the Paris skyline mood best." : "Pullman Paris Tour Eiffel：最貼近巴黎段想要的鐵塔景節奏。",
            state.lang === "en" ? "Manchester alternatives stay useful if the conference base changes later." : "Manchester 的三間建議可留著，若後面想換飯店就直接比。"
          ])}
        </article>
      </div>
      ${renderAlert(tripData.alerts[0])}
      </article>
    </section>
    <section class="section compact-section" id="areas">
      ${sectionHeading(state.lang === "en" ? "Useful Picks" : "住宿建議關鍵字", state.lang === "en" ? "Hotels and station areas worth keeping in view" : "把目前最值得留意的飯店與區域放在一起")}
      <div class="tag-cloud">
        ${["The Langham London", "The Clermont Charing Cross", "Pullman Paris Tour Eiffel", "Manchester Marriott", "Hyatt Regency Manchester", "Hilton Manchester Deansgate"].map((area) => `<span>${area}</span>`).join("")}
      </div>
    </section>
  `);
}

function renderItinerary() {
  return `
    ${renderQuickNav("itinerary")}
    ${renderReadingGuide("itinerary")}
    <section class="section compact-section" id="timeline">
      <article class="section-card">
      <div class="section-label">${state.lang === "en" ? "Day by Day" : "每日行程"}</div>
      <h2>${state.lang === "en" ? "Daily itinerary" : "每日行程"}</h2>
      <p class="lead">${state.lang === "en" ? "Open the day you need." : "要看哪一天，就打開哪一天。"}</p>
        <div class="itinerary-highlights">
        ${[
          [{ zh: "旅程長度", en: "Trip length" }, { zh: "14 天", en: "14 days" }],
          [{ zh: "主城市", en: "Main cities" }, { zh: "Manchester / London / Paris", en: "Manchester / London / Paris" }],
          [{ zh: "還沒定的事", en: "Open items" }, { zh: "倫敦住宿 / Eurostar / 巴黎住宿", en: "London hotel / Eurostar / Paris hotel" }]
        ].map(([label, value]) => renderMiniHighlightCard(label, value)).join("")}
      </div>
      <div class="itinerary-timeline">
        ${tripData.itinerary.map((day, index) => `
          <details class="day-card"${index === 0 ? " open" : ""}>
            <summary class="day-header">
              <div class="day-header-top">
                <span class="day-index">${state.lang === "en" ? `Day ${index + 1}` : `Day ${index + 1}`}</span>
                <span class="day-type-pill day-type-${escapeHtml(day.kind || "travel")}">
                  ${day.kind === "conference"
                    ? (state.lang === "en" ? "Conference" : "會議")
                    : day.kind === "free"
                      ? (state.lang === "en" ? "Free time" : "自由活動")
                      : (state.lang === "en" ? "Travel" : "旅程")}
                </span>
              </div>
              <h3 class="day-title">${escapeHtml(day.date)} · ${escapeHtml(t(day.title))}</h3>
              <p class="day-summary">${escapeHtml(t(day.notes?.[0] || day.must?.[0] || ""))}</p>
            </summary>
            <div class="day-content-top">
              <div class="day-focus-label">${state.lang === "en" ? "City" : "城市"}</div>
              <div class="day-focus-text">${escapeHtml(t(day.city || ""))}</div>
            </div>
            <div class="day-detail-list">
              <article class="day-detail-item">
                <div class="day-detail-title">${state.lang === "en" ? "Must-do" : "主要安排"}</div>
                <div class="day-detail-desc">${renderList(day.must, "plain-list")}</div>
              </article>
              ${day.optional?.length ? `
                <article class="day-detail-item">
                  <div class="day-detail-title">${state.lang === "en" ? "Optional" : "可彈性安排"}</div>
                  <div class="day-detail-desc">${renderList(day.optional, "plain-list")}</div>
                </article>
              ` : ""}
              ${day.tickets?.length ? `
                <article class="day-detail-item">
                  <div class="day-detail-title">${state.lang === "en" ? "Fees" : "費用"}</div>
                  <div class="day-detail-desc">${renderList(day.tickets, "plain-list")}</div>
                </article>
              ` : ""}
              ${day.notes?.length ? `
                <article class="day-detail-item">
                  <div class="day-detail-title">${state.lang === "en" ? "Notes" : "提醒"}</div>
                  <div class="day-detail-desc">${renderList(day.notes, "plain-list")}</div>
                </article>
              ` : ""}
            </div>
          </details>
        `).join("")}
      </div>
      </article>
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
      ${renderAlert({ title: { zh: "7/11 航班從曼徹斯特起飛", en: "11 July flight departs from Manchester" }, body: { zh: "雖然後面會在倫敦停留，回程機票仍是 MAN-LHR-TPE。建議 7/10 晚上先回到曼徹斯特。", en: "Even though the later days are in London, the return ticket still starts MAN-LHR-TPE. It is better to return to Manchester on the evening of 10 July." } })}
    </section>
  `;
}

function renderShoppingCategory(category, index) {
  const sectionIds = ["tea", "tea", "pantry", "essentials"];
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
                { label: state.lang === "en" ? "Where to look" : "去哪裡找", value: item.where }
              ])}
              ${externalLink(item.source, state.lang === "en" ? "Official page" : "官方頁面", "shopping-link")}
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
        <div class="section-label">${state.lang === "en" ? "Shopping Guide" : "購物指南"}</div>
        <h2>${state.lang === "en" ? "Tea, biscuits, preserves, and a few practical extras." : "茶葉、餅乾、果醬，還有幾樣實用的東西。"}</h2>
        <p class="lead">${state.lang === "en" ? "A simple list of common UK souvenirs and where to look for them." : "把常見的英國伴手禮和購買方向整理在這裡。"}</p>
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
        <div class="section-label">${state.lang === "en" ? "Packing Notes" : "打包提醒"}</div>
        <h2>${state.lang === "en" ? "What travels well" : "哪些東西最好帶"}</h2>
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

function renderMiniList(title, items) {
  if (!items?.length) return "";
  return `<div class="mini-list"><strong>${escapeHtml(title)}</strong>${renderList(items, "")}</div>`;
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
        { label: state.lang === "en" ? "Layover" : "停留", value: item.layover },
        { label: state.lang === "en" ? "Terminal flow" : "航廈", value: item.terminals }
      ])}
      ${renderList(item.notes, "transfer-notes")}
      ${externalLink(item.source, state.lang === "en" ? "Official airport guidance" : "機場官方轉機資訊")}
    </article>
  `;
}

function mapEmbedUrl(query) {
  return `https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`;
}

function displayCity(city) {
  if (state.lang === "en") return city;
  const labels = { Manchester: "曼徹斯特", London: "倫敦" };
  return labels[city] || city;
}

function renderMap() {
  const defaultLocation = tripData.mapLocations[0];
  const cityGroups = [...new Set(tripData.mapLocations.map((item) => item.city))];
  return `
    ${renderQuickNav("map")}
    ${renderReadingGuide("map")}
    <section class="section compact-section" id="travel-map">
      ${sectionHeading(
        state.lang === "en" ? "Travel Map" : "旅程地圖",
        state.lang === "en" ? "Places and routes at a glance" : "地點與路線一目了然",
        state.lang === "en" ? "Tap a place to open it on the map, or jump straight to each day's route." : "點一下地點就能在右側地圖查看，也可以直接打開每天的路線。"
      )}
      <div class="map-actions">
        ${externalLink(tripData.mapRouteUrl, state.lang === "en" ? "Open full route in Google Maps" : "開啟完整 Google 地圖路線")}
      </div>
      <div class="map-layout">
        <div class="map-list" aria-label="${state.lang === "en" ? "Map locations" : "地圖地點"}">
          ${tripData.mapLocations.map((location, index) => `
            <button class="map-location-button${index === 0 ? " active" : ""}" type="button" data-map-query="${escapeHtml(location.query)}" aria-pressed="${index === 0 ? "true" : "false"}">
              <span class="map-location-top"><span>${escapeHtml(displayCity(location.city))}</span>${statusChip(location.status)}</span>
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
            <h3>${escapeHtml(displayCity(city))}</h3>
            <p>${city === "Manchester"
              ? (state.lang === "en" ? "Keep this side practical: airport, hotel, station, and conference-day movement." : "這一側保持實用：機場、飯店、車站與會議日移動。")
              : (state.lang === "en" ? "London focuses on museums, major sights, and the main walking areas between them." : "倫敦以博物館、主要景點與步行可串接的區域為主。")
            }</p>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function expenseTableHeads() {
  return state.lang === "en"
    ? ["Item", "NTD", "GBP", "USD", "Status", "Receipt / proof", "Notes"]
    : ["項目", "新台幣", "英鎊", "美元", "狀態", "收據 / 憑證", "備註"];
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
              <td data-label="${escapeHtml(heads[1])}" class="budget-amount-cell">${escapeHtml(row.amounts?.TWD || "-")}</td>
              <td data-label="${escapeHtml(heads[2])}" class="budget-amount-cell">${escapeHtml(row.amounts?.GBP || "-")}</td>
              <td data-label="${escapeHtml(heads[3])}" class="budget-amount-cell">${escapeHtml(row.amounts?.USD || "-")}</td>
              <td data-label="${escapeHtml(heads[4])}">${statusChip(row.status)}</td>
              <td data-label="${escapeHtml(heads[5])}">${escapeHtml(t(row.proof))}</td>
              <td data-label="${escapeHtml(heads[6])}">${escapeHtml(t(row.notes))}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>`;
}

function currencySwitcher() {
  return `
    <div class="currency-switcher" aria-label="${state.lang === "en" ? "Currency selector" : "貨幣切換"}">
      <span>${state.lang === "en" ? "Currency" : "切換貨幣"}</span>
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
    TWD: { reimburse: "NT$156,039", self: "NT$38,525", personalSelf: "約 NT$19,263", hotelPerson: "NT$19,135", hotelPersonNight: "NT$3,827" },
    GBP: { reimburse: "GBP 3,671", self: "GBP 906.90", personalSelf: "GBP 453.45", hotelPerson: "GBP 450.45", hotelPersonNight: "GBP 90.09" },
    USD: { reimburse: "US$4,870", self: "US$1,202", personalSelf: "約 US$601", hotelPerson: "US$597", hotelPersonNight: "US$119" }
  };
  const selectedTotals = totals[state.currency] || totals.TWD;
  return renderDesktopPageShell("budget", {
    label: { zh: "Budget", en: "Budget" },
    title: { zh: "預算頁面", en: "Budget page" },
    note: { zh: "桌機版保留表格，旁邊可直接看主要金額。", en: "Desktop keeps the table while key figures stay visible in the sidebar." },
    meta: [
      { label: { zh: "機票", en: "Flights" }, value: money.flight },
      { label: { zh: "會議費", en: "Conference fee" }, value: money.conference },
      { label: { zh: "會員費", en: "Membership" }, value: money.membership },
      { label: { zh: "住宿", en: "Hotel" }, value: money.hotel }
    ]
  }, `
    ${renderQuickNav("budget")}
    ${renderReadingGuide("budget")}
    <section class="section compact-section" id="expenses">
      ${sectionHeading(
        state.lang === "en" ? "Budget Dashboard" : "預算總覽",
        state.lang === "en" ? "Claims, hotel costs, and pending spending" : "報帳、自費與待定花費",
        state.lang === "en" ? "Three-currency tables keep reimbursement and self-funded items separate." : "三幣別金額分開整理可報帳與自費項目。"
      )}
      <div class="summary-grid three">
        <article class="summary-card">${statusChip("reimburse")}<h3>${state.lang === "en" ? "Flight total" : "機票總額"}</h3><strong>${money.flight}</strong>${renderMetaRow([{ label: state.lang === "en" ? "Status" : "狀態", value: state.lang === "en" ? "Claimable" : "可報帳" }, { label: state.lang === "en" ? "Proof" : "憑證", value: state.lang === "en" ? "Fare details saved" : "票價明細已存" }])}</article>
        <article class="summary-card">${statusChip("reimburse")}<h3>${state.lang === "en" ? "Conference fee" : "會議費"}</h3><strong>${money.conference}</strong>${renderMetaRow([{ label: state.lang === "en" ? "Status" : "狀態", value: state.lang === "en" ? "Claimable" : "可報帳" }, { label: state.lang === "en" ? "Proof" : "憑證", value: state.lang === "en" ? "Receipt ready" : "收據已備" }])}</article>
        <article class="summary-card">${statusChip("reimburse")}<h3>${state.lang === "en" ? "AIB membership fee" : "AIB 會員費"}</h3><strong>${money.membership}</strong>${renderMetaRow([{ label: state.lang === "en" ? "Status" : "狀態", value: state.lang === "en" ? "Claimable" : "可報帳" }, { label: state.lang === "en" ? "Proof" : "憑證", value: state.lang === "en" ? "Receipt ready" : "收據已備" }])}</article>
        <article class="summary-card">${statusChip("self")}<h3>${state.lang === "en" ? "Manchester hotel" : "曼徹斯特住宿"}</h3><strong>${money.hotel}</strong>${renderMetaRow([{ label: state.lang === "en" ? "Stay" : "住宿", value: state.lang === "en" ? "5 nights / 2 guests" : "5 晚 / 2 人" }, { label: state.lang === "en" ? "Personal share" : "個人分攤", value: money.hotelPerPersonTotal }])}</article>
        <article class="summary-card">${statusChip("self")}<h3>${state.lang === "en" ? "Train estimate" : "火車預估"}</h3><strong>${t(money.trainAdvance)}</strong>${renderMetaRow([{ label: state.lang === "en" ? "Type" : "票種", value: "Advance / Off-Peak" }, { label: state.lang === "en" ? "Railcard" : "Railcard", value: money.railcard }])}</article>
        <article class="summary-card">${statusChip("pending")}<h3>${state.lang === "en" ? "Pending items" : "待確認項目"}</h3><strong>${state.lang === "en" ? "London hotel / London transit / attraction mix" : "倫敦住宿 / 倫敦交通 / 景點組合"}</strong>${renderMetaRow([{ label: state.lang === "en" ? "Action" : "處理", value: state.lang === "en" ? "Book and review" : "預訂與確認" }, { label: state.lang === "en" ? "Timing" : "時點", value: state.lang === "en" ? "Before departure" : "出發前" }])}</article>
      </div>
      ${currencySwitcher()}
      ${renderBudgetCards(tripData.expenses)}
      ${renderExpenseTable(tripData.expenses, state.lang === "en" ? "Reimbursable expenses" : "可報帳項目")}
      ${sectionHeading(
        state.lang === "en" ? "Self-funded" : "自費",
        state.lang === "en" ? "Personal travel costs" : "自費項目",
        state.lang === "en" ? "Keep receipts for your own records; these stay outside the reimbursement total." : "以下費用可留收據自用，不列入這次報帳金額。",
        { sub: true }
      )}
      ${renderBudgetCards(tripData.selfFundedExpenses)}
      ${renderExpenseTable(tripData.selfFundedExpenses, state.lang === "en" ? "Self-funded expenses" : "自費項目")}
    </section>
    <section class="section compact-section" id="totals">
      <div class="summary-grid three">
        <article class="summary-card">${statusChip("reimburse")}<h3>${state.lang === "en" ? "Reimbursement total" : "可報帳小計"}</h3><strong>${selectedTotals.reimburse}</strong><p>${state.lang === "en" ? "Flights, AIB conference fee, AIB membership fee, and Manchester daily allowance for 5 conference days." : "含機票、AIB 會議費、AIB 會員費，以及曼徹斯特研討會 5 天日支費。"}</p></article>
        <article class="summary-card">${statusChip("reimburse")}<h3>${state.lang === "en" ? "NSTC daily allowance" : "國科會日支費"}</h3><strong>${tripData.expenses[3].amounts[state.currency]}</strong><p>${state.lang === "en" ? "Calculated for 5 conference days." : "以研討會 5 天計算。"}</p></article>
        <article class="summary-card">${statusChip("self")}<h3>${state.lang === "en" ? "Self-funded known subtotal" : "已知自費小計"}</h3><strong>${selectedTotals.self}</strong><p>${state.lang === "en" ? "Current known self-funded items include Manchester hotel and visitor charge. London hotel and detailed attraction choices remain open." : "目前已知自費包含曼徹斯特住宿與旅遊稅；倫敦住宿與景點組合仍待確認。"}</p></article>
      </div>
    </section>
    <section class="section compact-section" id="personal-costs">
      ${sectionHeading(
        state.lang === "en" ? "Personal Share" : "個人花費",
        state.lang === "en" ? "Current personal accommodation estimate" : "目前個人住宿分攤估算",
        state.lang === "en" ? "The Manchester room is priced for two guests, so the personal share is calculated as half of the room total." : "曼徹斯特住宿目前是兩人房價，因此個人分攤以總價除以 2 估算。"
      )}
      <div class="summary-grid three">
        <article class="summary-card">${statusChip("self")}<h3>${state.lang === "en" ? "Hotel per person" : "住宿一人總額"}</h3><strong>${selectedTotals.hotelPerson}</strong><p>${state.lang === "en" ? "INNSiDE Manchester, 5 nights, half of the two-person room total." : "INNSiDE Manchester 5 晚，兩人房價的一半。"}</p></article>
        <article class="summary-card">${statusChip("self")}<h3>${state.lang === "en" ? "Per person / night" : "一人一晚"}</h3><strong>${selectedTotals.hotelPersonNight}</strong><p>${state.lang === "en" ? "Average personal room share per night." : "平均每晚的個人住宿分攤。"}</p></article>
        <article class="summary-card">${statusChip("self")}<h3>${state.lang === "en" ? "Known personal self-funded" : "目前個人已知自費"}</h3><strong>${selectedTotals.personalSelf}</strong><p>${state.lang === "en" ? "Manchester hotel share plus half of the visitor charge. London stay, trains, and attractions are not included yet." : "含曼徹斯特住宿個人分攤與旅遊稅一半；尚未包含倫敦住宿、火車與景點門票。"}</p></article>
      </div>
    </section>
    <section class="section compact-section" id="proofs">
      ${sectionHeading(state.lang === "en" ? "Proofs" : "憑證", state.lang === "en" ? "Reimbursement documents" : "報帳資料順序")}
      <ol class="proof-list">
        <li>${state.lang === "en" ? "Acceptance letters x 2" : "接受函 2 份"}</li>
        <li>${state.lang === "en" ? "AIB invitation letter" : "AIB 邀請函"}</li>
        <li>${state.lang === "en" ? "AIB conference fee receipt" : "AIB 會議註冊費收據"}</li>
        <li>${state.lang === "en" ? "AIB membership fee receipt" : "AIB 會員費收據"}</li>
        <li>${state.lang === "en" ? "Flight itinerary and payment details" : "機票行程單與付款明細"}</li>
        <li>${state.lang === "en" ? "ROC Year 115 overseas daily allowance table / NSTC reference" : "115 年國外日支表 / 國科會日支費參考"}</li>
      </ol>
    </section>
  `);
}

function renderDocuments() {
  return `
    ${renderQuickNav("documents")}
    ${renderReadingGuide("documents")}
    <section class="section compact-section" id="checklist">
      ${sectionHeading(state.lang === "en" ? "Document Checklist" : "文件清單", state.lang === "en" ? "Essential files for travel and reimbursement" : "旅程與報帳需要的文件", state.lang === "en" ? "Statuses are tracked as done, pending, or check again." : "每個項目都用狀態標示，方便出發前再核對。")}
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
      ${sectionHeading(state.lang === "en" ? "Useful Links" : "官方連結", state.lang === "en" ? "Official pages used in this handbook" : "本手冊用到的官方頁面")}
      <div class="link-grid">
        ${tripData.links.map(([label, href]) => externalLink(href, label)).join("")}
      </div>
    </section>
  `;
}

function renderReminders() {
  return `
    ${renderQuickNav("reminders")}
    ${renderReadingGuide("reminders")}
    <section class="section compact-section" id="pending">
      ${sectionHeading(
        state.lang === "en" ? "Reminders" : "提醒",
        state.lang === "en" ? "Things to check before departure" : "出發前要再看一次的事"
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
        state.lang === "en" ? "Final Check" : "行前核對",
        state.lang === "en" ? "Small list, big peace of mind" : "少一點慌張，多一點安心"
      )}
      <div class="proof-list checklist-list">
        ${[
          state.lang === "en" ? "Passport and UK ETA are ready." : "護照與 UK ETA 已確認。",
          state.lang === "en" ? "AIB receipts and letters are saved for reimbursement." : "AIB 收據、接受函與邀請函已存好。",
          state.lang === "en" ? "Manchester-London trains are checked before prices rise." : "曼徹斯特到倫敦火車票已再次查價。",
          state.lang === "en" ? "London accommodation is booked or intentionally left open." : "倫敦住宿已預訂，或確認保留彈性。",
          state.lang === "en" ? "Return routing starts at MAN and includes MAN-LHR." : "回程從 MAN 出發，MAN-LHR 航段不可跳過。"
        ].map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
      </div>
    </section>
  `;
}

function renderFirstTimeNoteCard(item) {
  const sourceMarkup = item.source
    ? externalLink(item.source, state.lang === "en" ? "Official source" : "官方資料")
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
    ${renderReadingGuide("firstTime")}
    <section class="section compact-section first-time-intro" id="entry">
      ${sectionHeading(
        state.lang === "en" ? "Entry" : "入境",
        state.lang === "en" ? "Documents, ETA, and what to keep ready" : "文件、ETA 與入境時手邊要有的東西",
        state.lang === "en" ? "A short and clear explanation is enough: conference first, then London travel." : "入境時簡單說明：先到曼徹斯特參加會議，之後再到倫敦旅行。"
      )}
      <div class="first-note-grid">
        ${tripData.firstTimeNotes.essentials.map(renderFirstTimeNoteCard).join("")}
      </div>
    </section>
    <section class="section compact-section" id="city">
      ${sectionHeading(
        state.lang === "en" ? "City Basics" : "城市移動",
        state.lang === "en" ? "Transport, payment, and street rhythm" : "交通付款、走路與城市節奏"
      )}
      <div class="first-note-grid">
        ${tripData.firstTimeNotes.city.map(renderFirstTimeNoteCard).join("")}
      </div>
    </section>
    <section class="section compact-section" id="daily">
      ${sectionHeading(
        state.lang === "en" ? "Daily Notes" : "日常提醒",
        state.lang === "en" ? "Small habits that make the trip smoother" : "幾個讓旅程更順的小習慣"
      )}
      <div class="first-note-grid">
        ${tripData.firstTimeNotes.daily.map(renderFirstTimeNoteCard).join("")}
      </div>
    </section>
    <section class="section compact-section" id="arrival">
      ${sectionHeading(
        state.lang === "en" ? "First Day" : "抵達第一天",
        state.lang === "en" ? "After landing in Manchester" : "抵達曼徹斯特之後"
      )}
      <div class="arrival-card">
        <div>
          ${statusChip("confirmed")}
          <h3>${state.lang === "en" ? "Keep the first evening light" : "第一晚留給安頓"}</h3>
          <p>${state.lang === "en" ? "The best first-day plan is not ambitious. It is clean, hydrated, and ready for the conference." : "第一天不需要太用力。能順利抵達、吃點東西、整理文件、調整時差，就很好。"}</p>
        </div>
        ${renderList(tripData.firstTimeNotes.firstDay, "arrival-list")}
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
  shopping: renderShopping,
  map: renderMap,
  budget: renderBudget,
  reminders: renderReminders,
  firstTime: renderFirstTime,
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
  wireCurrencySwitcher();
  wireChecklistBoard();
  wireHomeTabs();
  wireDesktopAnchors();
  wireBackToTop();
  updateProgress();
}

function wireCurrencySwitcher() {
  document.querySelectorAll("[data-currency]").forEach((button) => {
    button.addEventListener("click", () => {
      storeCurrency(button.dataset.currency);
      renderApp();
    });
  });
}

function wireChecklistBoard() {
  document.querySelectorAll("[data-checklist-id]").forEach((input) => {
    if (input.dataset.bound) return;
    input.dataset.bound = "true";
    input.addEventListener("change", () => {
      const checked = input.checked;
      setChecklistItem(input.dataset.checklistId, checked);
      input.closest(".checklist-item")?.classList.toggle("checked", checked);
    });
  });
}

function wireHomeTabs() {
  if ((document.body.dataset.page || "home") !== "home") return;
  const tabs = [...document.querySelectorAll("[data-home-tab]")];
  if (!tabs.length) return;

  const setActive = (id) => {
    tabs.forEach((tab) => {
      const active = tab.dataset.homeTab === id;
      tab.classList.toggle("active", active);
      if (active) tab.setAttribute("aria-current", "true");
      else tab.removeAttribute("aria-current");
    });
  };

  tabs.forEach((tab) => {
    if (tab.dataset.bound) return;
    tab.dataset.bound = "true";
    tab.addEventListener("click", () => setActive(tab.dataset.homeTab));
  });

  const sections = homeSectionTabs
    .map((tab) => document.getElementById(tab.id))
    .filter(Boolean);

  if (!sections.length || typeof IntersectionObserver === "undefined") return;

  const observer = new IntersectionObserver((entries) => {
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (visible?.target?.id) setActive(visible.target.id);
  }, {
    rootMargin: "-18% 0px -52% 0px",
    threshold: [0.2, 0.45, 0.7]
  });

  sections.forEach((section) => observer.observe(section));
}

function wireDesktopAnchors() {
  if (typeof IntersectionObserver === "undefined") return;
  const groups = [
    { selector: "[data-desktop-anchor]", key: "desktopAnchor" },
    { selector: "[data-page-anchor]", key: "pageAnchor" }
  ];

  groups.forEach(({ selector, key }) => {
    const links = [...document.querySelectorAll(selector)];
    if (!links.length) return;

    const setActive = (id) => {
      links.forEach((link) => {
        const active = link.dataset[key] === id;
        link.classList.toggle("active", active);
        if (active) link.setAttribute("aria-current", "true");
        else link.removeAttribute("aria-current");
      });
    };

    links.forEach((link) => {
      if (link.dataset.bound) return;
      link.dataset.bound = "true";
      link.addEventListener("click", () => setActive(link.dataset[key]));
    });

    const sections = links
      .map((link) => document.getElementById(link.dataset[key]))
      .filter(Boolean);

    if (!sections.length) return;

    const observer = new IntersectionObserver((entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible?.target?.id) setActive(visible.target.id);
    }, {
      rootMargin: "-18% 0px -58% 0px",
      threshold: [0.2, 0.45, 0.7]
    });

    sections.forEach((section) => observer.observe(section));
    setActive(sections[0].id);
  });
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
  if (!button) return;
  button.textContent = state.lang === "en" ? "Top" : "上方";
  button.setAttribute("aria-label", state.lang === "en" ? "Back to top" : "回到上方");
  if (button.dataset.bound) return;
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
