const pages = [
  { id: "home", label: { zh: "總覽", en: "Overview", fr: "Aperçu", de: "Überblick" }, href: "./index.html" },
  { id: "conference", label: { zh: "會議", en: "Conference", fr: "Conférence", de: "Konferenz" }, href: "./conference.html" },
  { id: "flights", label: { zh: "機票", en: "Flights", fr: "Vols", de: "Flüge" }, href: "./flights.html" },
  { id: "transport", label: { zh: "交通", en: "Transport", fr: "Transports", de: "Verkehr" }, href: "./transport.html" },
  { id: "stay", label: { zh: "住宿", en: "Stay", fr: "Séjour", de: "Unterkunft" }, href: "./stay.html" },
  { id: "itinerary", label: { zh: "行程", en: "Itinerary", fr: "Programme", de: "Reiseplan" }, href: "./itinerary.html" },
  { id: "shopping", label: { zh: "購物", en: "Shopping", fr: "Shopping", de: "Einkauf" }, href: "./shopping.html" },
  { id: "souvenirs", label: { zh: "伴手禮", en: "Souvenirs", fr: "Souvenirs", de: "Mitbringsel" }, href: "./souvenirs.html" },
  { id: "budget", label: { zh: "預算", en: "Budget", fr: "Budget", de: "Budget" }, href: "./budget.html" },
  { id: "reminders", label: { zh: "旅程筆記", en: "Travel Notes", fr: "Notes de voyage", de: "Reisenotizen" }, href: "./reminders.html" },
  { id: "firstTime", label: { zh: "歐洲提醒", en: "Europe Notes", fr: "Notes Europe", de: "Europa-Hinweise" }, href: "./first-time.html" },
  { id: "map", label: { zh: "地圖", en: "Map", fr: "Carte", de: "Karte" }, href: "./map.html" },
  { id: "documents", label: { zh: "文件", en: "Documents", fr: "Documents", de: "Dokumente" }, href: "./links.html" }
];

const primaryNavPageIds = ["home", "itinerary", "transport", "stay", "conference", "reminders"];

const primaryNavLabels = {
  home: { zh: "總覽", en: "Overview", fr: "Aperçu", de: "Überblick" },
  itinerary: { zh: "每日行程", en: "Itinerary", fr: "Programme", de: "Reiseplan" },
  transport: { zh: "交通", en: "Transport", fr: "Transports", de: "Verkehr" },
  stay: { zh: "住宿", en: "Stay", fr: "Séjour", de: "Unterkunft" },
  conference: { zh: "會議", en: "Conference", fr: "Conférence", de: "Konferenz" },
  reminders: { zh: "貼心提醒", en: "Notes", fr: "Notes", de: "Hinweise" }
};

const statusLabels = {
  confirmed: { zh: "已確認", en: "Confirmed", fr: "Confirmé", de: "Bestätigt" },
  pending: { zh: "待確認", en: "Pending", fr: "En attente", de: "Offen" },
  book: { zh: "待預訂", en: "To book", fr: "À réserver", de: "Zu buchen" },
  reimburse: { zh: "待報帳", en: "To reimburse", fr: "À rembourser", de: "Abzurechnen" },
  self: { zh: "自費", en: "Self-funded", fr: "À sa charge", de: "Selbst bezahlt" },
  optional: { zh: "可選", en: "Optional", fr: "Optionnel", de: "Optional" },
  alert: { zh: "留意", en: "Note", fr: "À noter", de: "Hinweis" }
};

const money = {
  flight: "NT$92,439 / GBP 2,176 / EUR 2,545 / US$2,885",
  conference: "NT$10,413 / GBP 245 / EUR 286 / US$325",
  membership: "NT$1,282 / GBP 30 / EUR 35 / US$40",
  hotel: "NT$38,270 / GBP 900.90 / EUR 1,054 / US$1,194",
  hotelPerNight: "NT$7,654 / GBP 180.18 / EUR 211 / US$239",
  hotelPerPersonTotal: "NT$19,135 / GBP 450.45 / EUR 527 / US$597",
  hotelPerPersonNight: "NT$3,827 / GBP 90.09 / EUR 105 / US$119",
  visitorCharge: "約 NT$255 / GBP 6 / EUR 7 / US$8",
  visitorChargePerPerson: "約 NT$128 / GBP 3 / EUR 4 / US$4",
  personalKnownSelfFunded: "約 NT$19,263 / GBP 453.45 / EUR 531 / US$601",
  manchesterDaily: "NT$10,381 / GBP 244 / EUR 285 / US$324 / day",
  manchesterDaily5: "NT$51,905 / GBP 1,220 / EUR 1,427 / US$1,620",
  londonDaily: "NT$16,340 / GBP 385 / EUR 450 / US$510 / day",
  trainAdvance: { zh: "每人來回 NT$2,846 起 / GBP 67 起 / EUR 78 起 / US$89 起", en: "per person return from NT$2,846 / GBP 67 / EUR 78 / US$89" },
  railcard: "NT$1,487 / GBP 35 / EUR 41 / US$46"
};

const homeOverviewCards = [
  {
    tag: { zh: "旅程", en: "Trip" },
    title: { zh: "旅程總覽", en: "Travel Overview" },
    value: { zh: "Jun 29 – Jul 12, 2026", en: "Jun 29 – Jul 12, 2026" },
    note: { zh: "法蘭克福轉機開場，曼徹斯特會議居中，最後再往倫敦與巴黎。", en: "Frankfurt opens the route, Manchester holds the conference, and London with Paris follow after." }
  },
  {
    tag: { zh: "城市", en: "City" },
    title: { zh: "目的地", en: "Destination" },
    value: { zh: "Frankfurt transit · Manchester · London · Paris", en: "Frankfurt transit · Manchester · London · Paris" },
    note: { zh: "會議主段在曼徹斯特，後面再往倫敦和巴黎走。", en: "The conference base is Manchester, followed by London and Paris." }
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
    note: { zh: "曼徹斯特已定，倫敦和巴黎也列了想住的地方。", en: "Manchester is set; London and Paris first choices are listed." }
  },
  {
    tag: { zh: "狀態", en: "Status" },
    title: { zh: "目前狀態", en: "Status" },
    value: { zh: "大致成形", en: "Core route in place" },
    note: { zh: "航班和會議都定了，後段城市安排還在補。", en: "Flights and conference are set; the later-city plan is being refined." }
  }
];

const homeKeyTimeline = [
  {
    date: "Jun 30",
    title: { zh: "抵達曼徹斯特", en: "Arrival in Manchester" },
    note: { zh: "法蘭克福轉機後到曼徹斯特，先入住、調整一下節奏。", en: "Arrive in Manchester after Frankfurt and settle into the conference week." }
  },
  {
    date: "Jun 30 – Jul 3",
    title: { zh: "AIB 2026 會議", en: "AIB 2026 Conference" },
    note: { zh: "會議主日程、發表與交流集中在這段時間。", en: "Main conference sessions, presentations, and networking are centered here." }
  },
  {
    date: "Jul 4 – Jul 7",
    title: { zh: "倫敦段", en: "London segment" },
    note: { zh: "從曼徹斯特南下倫敦，排幾個地標和購物行程。", en: "Travel south to London for landmarks, shopping, and city days." }
  },
  {
    date: "Jul 7 – Jul 11",
    title: { zh: "巴黎段", en: "Paris segment" },
    note: { zh: "搭 Eurostar 到巴黎，接著走鐵塔、羅浮宮和香榭麗舍。", en: "Take Eurostar to Paris for the Eiffel Tower, the Louvre, and the Champs-Elysees." }
  },
  {
    date: "Jul 11",
    title: { zh: "巴黎 → 曼徹斯特 → 回程", en: "Paris → Manchester → homebound" },
    note: { zh: "中午從巴黎飛曼徹斯特，晚上再接 BA 和華航回台灣。", en: "Fly from Paris to Manchester at midday, then connect to BA and China Airlines in the evening." }
  }
];

const currencies = [
  { id: "TWD", label: { zh: "新台幣", en: "TWD", fr: "TWD", de: "TWD" }, prefix: "NT$" },
  { id: "GBP", label: { zh: "英鎊", en: "GBP", fr: "GBP", de: "GBP" }, prefix: "GBP" },
  { id: "EUR", label: { zh: "歐元", en: "EUR", fr: "EUR", de: "EUR" }, prefix: "EUR" },
  { id: "USD", label: { zh: "美元", en: "USD", fr: "USD", de: "USD" }, prefix: "US$" }
];

const languageOptions = [
  { id: "zh", label: "繁中", name: { zh: "繁體中文", en: "Traditional Chinese", fr: "chinois traditionnel", de: "Traditionelles Chinesisch" } },
  { id: "en", label: "EN", name: { zh: "英文", en: "English", fr: "anglais", de: "Englisch" } },
  { id: "fr", label: "FR", name: { zh: "法文", en: "French", fr: "français", de: "Französisch" } },
  { id: "de", label: "DE", name: { zh: "德文", en: "German", fr: "allemand", de: "Deutsch" } }
];

const hotelImage = "https://englandrover.com/wp-content/uploads/2018/11/innside-melia-manchester-05.jpg";

const tripData = {
  lastUpdated: "2026-04-17 12:05",
  hero: {
    home: {
      kicker: { zh: "旅程總覽", en: "Trip Overview" },
      title: { zh: "AIB 2026 Manchester", en: "AIB 2026 Manchester" },
      lead: {
        zh: "Europe Travel Handbook",
        en: "Europe Travel Handbook"
      }
    },
    conference: {
      kicker: { zh: "會議安排", en: "Conference" },
      title: { zh: "會議手冊", en: "Conference Handbook" },
      lead: { zh: "會議日期、發表時段、現場節奏和需要留著的文件，都放在這頁。", en: "Conference dates, presentation slots, on-site rhythm, and the key files all stay together here." }
    },
    transport: {
      kicker: { zh: "交通規劃", en: "Transport" },
      title: { zh: "火車與市內交通", en: "Trains & Local Transit" },
      lead: { zh: "這頁集中看城市之間的火車移動，以及倫敦、曼徹斯特、巴黎市內怎麼移動。", en: "This page keeps rail movement between cities together with local transit in London, Manchester, and Paris." }
    },
    flights: {
      kicker: { zh: "航班安排", en: "Flights" },
      title: { zh: "機票與轉機", en: "Flight Plan & Transfers" },
      lead: { zh: "去程、回程和巴黎回曼徹斯特的航段都放在這裡，轉機也一起整理。", en: "Outbound, return, and the Paris-to-Manchester segment live here, together with the transfer notes." }
    },
    stay: {
      kicker: { zh: "住宿安排", en: "Accommodation" },
      title: { zh: "住宿與城市切換", en: "Accommodation & City Split" },
      lead: { zh: "曼徹斯特的會議住宿已定，倫敦和巴黎也先把想住的地方列出來。", en: "The Manchester conference stay is set, while London and Paris are organized into first-choice and backup stays." }
    },
    itinerary: {
      kicker: { zh: "每日行程", en: "Itinerary" },
      title: { zh: "每日旅行指南", en: "Daily Travel Guide" },
      lead: { zh: "把每一天的城市步調、移動方式和沿途重點放在一起，讀起來更像旅程手冊。", en: "Each day keeps its route, pace, and practical details together, so it reads more like a travel guide than a list." }
    },
    shopping: {
      kicker: { zh: "英國購物", en: "Shopping" },
      title: { zh: "英國有什麼值得買", en: "What to Buy in the UK" },
      lead: { zh: "把茶葉、餅乾、果醬、超市零食和藥妝分開放，逛起來比較順手。", en: "Tea, biscuits, preserves, supermarket snacks, and pharmacy staples are grouped separately for easier browsing." }
    },
    souvenirs: {
      kicker: { zh: "伴手禮整理", en: "Souvenirs" },
      title: { zh: "英法德帶什麼回來", en: "What to Bring Back from the UK, France, and Germany" },
      lead: { zh: "把英國、法國、德國比較好買、也比較好帶回來的伴手禮分開整理，臨時要買也比較好下手。", en: "A compact guide to the UK, France, and Germany gift picks that are easy to buy and easy to bring home." }
    },
    map: {
      kicker: { zh: "旅程地圖", en: "Travel Map" },
      title: { zh: "歐洲旅程地圖", en: "Europe Travel Map" },
      lead: { zh: "把法蘭克福、曼徹斯特、倫敦和巴黎的重要地點跟移動路線放在一起。", en: "Key Frankfurt, Manchester, London, and Paris stops, plus the main travel routes, in one map." }
    },
    budget: {
      kicker: { zh: "預算整理", en: "Budget" },
      title: { zh: "費用與票券", en: "Travel Costs & Tickets" },
      lead: { zh: "把可報帳、自費與票券費用分開整理，臨時要核對時比較快。", en: "Reimbursable items, self-funded costs, and ticket notes are separated here for quick checking." }
    },
    reminders: {
      kicker: { zh: "行前提醒", en: "Reminders" },
      title: { zh: "旅程提醒與出發前確認", en: "Travel Notes Before Departure" },
      lead: { zh: "把出發前想再看一次的細節留在這裡，不讓它們分散在各頁。", en: "Use this page for the last practical checks before leaving, without scattering them across the site." }
    },
    firstTime: {
      kicker: { zh: "歐洲行前提醒", en: "Europe Travel Notes" },
      title: { zh: "這趟歐洲行前要留意的事", en: "Practical Notes Before the Europe Trip" },
      lead: { zh: "英國主段加上德國、法國移動前會用到的提醒，整理在這一頁。", en: "UK, Germany, and France travel notes collected in one place before the trip." }
    },
    documents: {
      kicker: { zh: "官方連結", en: "Official Links" },
      title: { zh: "文件與連結", en: "Documents & Links" },
      lead: { zh: "這裡只放公開連結和文件種類，不會放私人資料。", en: "Only public official links and document reminders are listed. Booking numbers, payment details, emails, and private receipt contents are excluded." }
    }
  },
  summaryCards: [
    { status: "confirmed", title: { zh: "AIB 會議日期", en: "AIB conference dates" }, value: "2026/06/30 - 2026/07/03", note: { zh: "主段在曼徹斯特，重點是發表和交流。", en: "Manchester conference days, centered on presentations and networking." } },
    { status: "confirmed", title: { zh: "整段旅程日期", en: "Trip dates" }, value: "2026/06/29 - 2026/07/12", note: { zh: "曼徹斯特 → 倫敦 → 巴黎 → 曼徹斯特。", en: "Manchester → London → Paris → Manchester." } },
    { status: "confirmed", title: { zh: "曼徹斯特住宿狀態", en: "Manchester hotel status" }, value: "INNSiDE Manchester", note: { zh: "6/30-7/5 已訂，雙床房，2 人，房價 GBP 900.90。", en: "Booked for 30 June-5 July, twin beds for two guests, GBP 900.90." } },
    { status: "book", title: { zh: "後段住宿規劃", en: "Later-stay planning" }, value: { zh: "倫敦 3 晚 / 巴黎 4 晚", en: "3 nights London / 4 nights Paris" }, note: { zh: "倫敦和巴黎都先排了想住的地方。", en: "First-choice stays are listed for both London and Paris." } }
  ],
  todos: [
    { status: "book", text: { zh: "倫敦住宿先看 The Langham London，不合適的話再比 The Clermont Charing Cross。", en: "For London, check The Langham London first, then The Clermont Charing Cross." } },
    { status: "book", text: { zh: "7/4 曼徹斯特到倫敦的 Avanti West Coast 車票還沒買。", en: "The 4 July Avanti West Coast ticket from Manchester to London is still open." } },
    { status: "book", text: { zh: "7/7 倫敦到巴黎的 Eurostar 還要補訂。", en: "The 7 July Eurostar from London to Paris still needs to be booked." } },
    { status: "reimburse", text: { zh: "接受函、邀請函、AIB 收據和國際航班憑證放在同一個資料夾。", en: "Keep acceptance letters, the invitation, AIB receipts, and international flight proofs together." } },
    { status: "confirmed", text: { zh: "Interactive 發表已確認：7/3 09:30-10:45，Room 2217 (UP)。", en: "Interactive presentation confirmed: 3 Jul, 09:30-10:45, Room 2217 (UP)." } }
  ],
  alerts: [
    {
      title: { zh: "7/4 住宿與移動要再對一次", en: "Re-check the 4 July stay handoff" },
      body: { zh: "曼徹斯特訂房目前到 7/5 退房，但行程規劃是 7/4 轉往倫敦。等倫敦住宿確定後，再看這晚要不要留著當緩衝。", en: "The Manchester booking currently runs until 5 July, while the route moves to London on 4 July. Decide later whether to keep that extra night as a buffer." }
    }
  ],
  reminders: [
    { status: "book", title: { zh: "倫敦住宿", en: "London accommodation" }, body: { zh: "7/4–7/7 先看 The Langham London；如果想住得更靠車站，就改看 The Clermont Charing Cross。", en: "For 4-7 July, start with The Langham London; The Clermont Charing Cross is the more station-friendly alternative." } },
    { status: "book", title: { zh: "曼徹斯特到倫敦", en: "Manchester to London" }, body: { zh: "7/4 可以搭 Avanti West Coast，直達約 2 小時 10 分。Advance 票早點看通常比較有空間。", en: "For 4 July, Avanti West Coast is the cleanest option at about 2h10 direct. Advance fares are best checked early." } },
    { status: "book", title: { zh: "倫敦到巴黎", en: "London to Paris" }, body: { zh: "7/7 可以搭 Eurostar，市中心直達市中心，車程大約 2 小時 20 分。", en: "For 7 July, Eurostar is the simplest city-centre to city-centre option at about 2h20." } },
    { status: "reimburse", title: { zh: "報帳資料", en: "Reimbursement packet" }, body: { zh: "這次可報帳還是以國際機票、AIB 會議費、AIB 會員費和國科會日支費為主；倫敦、巴黎段另外列自費。", en: "Claims remain limited to international flights, the AIB conference fee, the AIB membership fee, and NSTC allowance; London and Paris stay self-funded." } },
    { status: "confirmed", title: { zh: "7/11 回程串接", en: "11 July flight chain" }, body: { zh: "7/11 會先從巴黎飛曼徹斯特，再接 BA1371 和 CI82 回台北，中間時間要抓緊一點。", en: "On 11 July, fly Paris to Manchester first, then connect to BA1371 and CI82 back to Taipei, keeping a close eye on the transfer rhythm." } }
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
      summary: { zh: "這篇研究在看新興科技公司怎麼在制度模糊、監管分散、社會信任又還不夠的情況下，先把合法性慢慢建立起來。文章以 cryptocurrency 與 blockchain ventures 為脈絡，整理企業如何靠 regulatory alignment、institutional bridging 和 ecosystem orchestration，讓原本帶有爭議的新科技一步步走向主流。", en: "This paper examines how emerging technology firms build legitimacy before mainstream adoption under institutional ambiguity, fragmented regulation, and public skepticism. Using cryptocurrency and blockchain ventures as the context, it explains how regulatory alignment, institutional bridging, and ecosystem orchestration help turn contested technologies into accepted market pathways." }
    },
    {
      status: "confirmed",
      type: "Interactive / paper summary",
      title: "Signal or Noise? Maturity-Adjusted Technical Disclosure and Multi-Stage Startup Funding Decisions",
      summary: { zh: "這篇研究在看早期科技新創怎麼用技術揭露讓投資人感覺到它的能力和可信度。文章使用 Gartner Hype Cycle 加權的技術揭露指標和 Heckman two-stage framework，把投資人的前段篩選和後段資金配置分開來看，也更清楚看出什麼時候技術敘事會被當成有效訊號，而不是噪音。", en: "This paper analyzes how early-stage technology startups use technical disclosure to signal capability and credibility to investors. It develops a Gartner Hype Cycle-weighted disclosure measure and uses a Heckman two-stage framework to distinguish initial investor screening from later capital allocation." }
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
      note: { zh: "AF1068｜Air France Business Standard", en: "AF1068 · Air France Business Standard" },
      legs: [
        { from: "CDG", to: "MAN", flight: "AF 1068", time: "12:50 → 13:25", duration: "1h 35m", detail: { zh: "巴黎戴高樂 T2E → 曼徹斯特 T2", en: "Paris CDG T2E → Manchester T2" } }
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
    { status: "book", item: "Advance", amount: { zh: "單程 NT$1,423 起 / GBP 33.50 起 / EUR 39 起 / US$44 起", en: "From NT$1,423 / GBP 33.50 / EUR 39 / US$44" }, note: { zh: "最便宜但綁定指定班次；越早買越划算。", en: "Cheapest, train-specific, and best bought early." } },
    { status: "optional", item: "Off-Peak", amount: { zh: "單程 NT$3,228-3,398 / GBP 76-80 / EUR 89-94 / US$101-106", en: "NT$3,228-3,398 / GBP 76-80 / EUR 89-94 / US$101-106" }, note: { zh: "彈性較高，適合不想被指定班次綁死。", en: "More flexible if you do not want to be tied to a single service." } },
    { status: "optional", item: "Two Together Railcard", amount: money.railcard, note: { zh: "兩人同行可省 1/3；週末全天、平日 09:30 後可用。", en: "Two people traveling together can save 1/3; valid all day weekends and after 09:30 weekdays." } }
  ],
  localTransit: [
    { city: { zh: "倫敦", en: "London" }, items: [
      { zh: "Zone 1-2 每日上限：NT$378 / GBP 8.90 / EUR 10.40 / US$12", en: "Zones 1-2 cap: NT$378 / GBP 8.90 / EUR 10.40 / US$12" },
      { zh: "Zone 1-3 每日上限：NT$446 / GBP 10.50 / EUR 12.30 / US$14", en: "Zones 1-3 cap: NT$446 / GBP 10.50 / EUR 12.30 / US$14" },
      { zh: "Zone 1-6 每日上限：NT$692 / GBP 16.30 / EUR 19.10 / US$22", en: "Zones 1-6 cap: NT$692 / GBP 16.30 / EUR 19.10 / US$22" },
      { zh: "全程使用同一張感應信用卡、Apple Pay、Google Pay 或 Oyster 進出站。", en: "Use the same contactless card / Apple Pay / Google Pay / Oyster for all taps." }
    ] },
    { city: { zh: "曼徹斯特", en: "Manchester" }, items: [
      { zh: "INNSiDE Manchester 附近可利用 Deansgate-Castlefield 或 St Peter's Square。", en: "INNSiDE Manchester: Deansgate-Castlefield / St Peter's Square nearby." },
      { zh: "機場位於 Zone 4；機場往返市區可用全區票。", en: "Airport is Zone 4; use all zones for airport-city trips." },
      { zh: "全區日票：NT$302 / GBP 7.10 / EUR 8.30 / US$9.40；離峰 NT$208 / GBP 4.90 / EUR 5.70 / US$6.50。", en: "All-zones day ticket: NT$302 / GBP 7.10 / EUR 8.30 / US$9.40 anytime; NT$208 / GBP 4.90 / EUR 5.70 / US$6.50 off-peak." },
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
    { date: "6/29-6/30", city: { zh: "Taipei → Frankfurt → Manchester", en: "Taipei → Frankfurt → Manchester" }, kind: "travel", theme: { zh: "長程飛行與轉機城市散步", en: "Long-haul departure and a layover city walk" }, title: { zh: "出發、法蘭克福轉機與抵達曼徹斯特", en: "Departure, Frankfurt stop, and arrival in Manchester" }, status: "confirmed", must: ["CI61｜TPE 22:20 → FRA 06:50(+1)", "法蘭克福轉機散步：羅馬廣場 → 美因河 → MainNizza 午餐 → 歐元符號", "LH946｜FRA 16:20 → MAN 17:10", "入住曼徹斯特"], optional: ["如果時間順，可以在河邊多待一下", "抵達後輕鬆吃晚餐", "補水、整理文件、調時差"], tickets: ["法蘭克福散步：景點免費；午餐依實際消費"], notes: ["這一天先用長程飛行把旅程拉開，法蘭克福的長轉機剛好能留一段短短的城市散步，再把節奏慢慢接回曼徹斯特。"] },
    { date: "6/30-7/3", city: { zh: "Manchester", en: "Manchester" }, kind: "conference", theme: { zh: "會議主段與城市節奏", en: "Conference core and city rhythm" }, title: { zh: "AIB 2026 主會議", en: "AIB 2026 conference" }, status: "confirmed", must: ["AIB Conference", "Presentation", "Networking"], optional: ["空檔回飯店整理簡報", "附近簡單晚餐"], tickets: ["景點門票：GBP 0；以會議活動為主"], notes: ["這幾天的主軸很清楚，就是把發表、交流和每天的會議節奏走穩；城市本身留在空檔裡慢慢看就好。"] },
    { date: "7/4", city: { zh: "Manchester → London", en: "Manchester → London" }, kind: "travel", theme: { zh: "從會議城市轉進倫敦街景", en: "From the conference city into London streets" }, title: { zh: "轉往倫敦", en: "Move to London" }, status: "book", must: ["Avanti West Coast", "Manchester → London", "約 2 小時 10 分"], optional: ["抵達後 Big Ben", "Buckingham Palace", "St James's Park"], tickets: ["火車票待訂", "地標散步：免費"], notes: ["上午離開曼徹斯特之後，下午就能把倫敦的第一段西敏散步接進來，從城市移動自然過渡到旅遊節奏。"] },
    { date: "7/5", city: { zh: "London", en: "London" }, kind: "free", theme: { zh: "精品街區與城市光澤", en: "Luxury streets and city polish" }, title: { zh: "倫敦 Day 2", en: "London Day 2" }, status: "pending", must: ["Harrods", "Bond Street"], optional: ["Chanel", "Dior", "Louis Vuitton", "YSL"], tickets: ["百貨與精品街散步：免費"], notes: ["這一天適合把步調放在精品街區與百貨之間，讓逛街、喝咖啡和市區移動自然串成一段輕鬆的城市午後。"] },
    { date: "7/6", city: { zh: "London", en: "London" }, kind: "free", theme: { zh: "街區漫步與自由留白", en: "Neighbourhood walks and open time" }, title: { zh: "倫敦 Day 3", en: "London Day 3" }, status: "pending", must: ["Covent Garden", "Piccadilly Circus"], optional: ["自由活動"], tickets: ["街區散步：免費"], notes: ["這天更像留給倫敦市中心的一次慢走，先走街區，再把剩下的時間留給臨時想停下來的店、巷子或咖啡館。"] },
    { date: "7/7", city: { zh: "London → Paris", en: "London → Paris" }, kind: "travel", theme: { zh: "城市切換與巴黎初見", en: "A city shift and first glimpse of Paris" }, title: { zh: "Eurostar 前往巴黎", en: "Eurostar to Paris" }, status: "book", must: ["Eurostar", "約 2 小時 20 分", "市中心直達市中心"], optional: ["抵達後 Eiffel Tower", "夜景"], tickets: ["Eurostar 票待訂", "艾菲爾鐵塔票價待查"], notes: ["從倫敦進巴黎的這一段很適合當成旅程的轉場，白天把城市換掉，晚上就留給鐵塔和第一眼的巴黎夜色。"] },
    { date: "7/8", city: { zh: "Paris", en: "Paris" }, kind: "free", theme: { zh: "博物館日與河岸步調", en: "Museum day and a slower riverside pace" }, title: { zh: "巴黎 Day 2", en: "Paris Day 2" }, status: "pending", must: ["Louvre Museum"], optional: ["周邊散步"], tickets: ["Louvre 票價待查"], notes: ["這天把重心放在羅浮宮，前後則留一點散步空間，讓博物館的密度和巴黎街景之間有自然的呼吸。"] },
    { date: "7/9", city: { zh: "Paris", en: "Paris" }, kind: "free", theme: { zh: "大道景觀與城市主景", en: "Grand boulevards and signature landmarks" }, title: { zh: "巴黎 Day 3", en: "Paris Day 3" }, status: "pending", must: ["Champs-Elysees", "Arc de Triomphe"], optional: ["精品購物"], tickets: ["街區散步與購物：依實際消費"], notes: ["這一天適合把巴黎最具代表性的城市景觀排在一起，白天看大道與凱旋門，沿途再慢慢收進想逛的精品店。"] },
    { date: "7/10", city: { zh: "Paris", en: "Paris" }, kind: "free", theme: { zh: "最後採買與塞納河收尾", en: "Final shopping and a Seine-side close" }, title: { zh: "巴黎 Day 4", en: "Paris Day 4" }, status: "pending", must: ["Galeries Lafayette Haussmann", "Seine", "塞納河遊船"], optional: ["最後採買"], tickets: ["遊船票價待查"], notes: ["最後一天不用排得太滿，白天留給採買，傍晚再把節奏交給塞納河，讓巴黎用比較柔和的方式收尾。"] },
    { date: "7/11-7/12", city: { zh: "Paris → Manchester → Heathrow → Taipei", en: "Paris → Manchester → Heathrow → Taipei" }, kind: "travel", theme: { zh: "回程接駁與長途返台", en: "Connection day and the long flight home" }, title: { zh: "回程返台", en: "Return to Taipei" }, status: "confirmed", must: ["Air France Business Standard｜CDG 12:50 → MAN 13:25", "BA1371｜MAN 18:10 → LHR 19:15", "CI82｜LHR 21:10 → TPE 18:05(+1)"], optional: ["巴黎上午只排簡單移動"], tickets: ["AF 歐洲段：約 EUR 354.05 / NT$12,930"], notes: ["這一天以順利銜接航段為主，上午不必再塞景點，把體力留給巴黎到曼徹斯特、再接希斯洛返台的長路。"] }
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
    { item: { zh: "國際機票", en: "International flights" }, amount: money.flight, amounts: { TWD: "NT$92,439", GBP: "GBP 2,176", EUR: "EUR 2,545", USD: "US$2,885" }, status: "reimburse", proof: { zh: "機票行程單與付款截圖", en: "Flight itinerary + payment screenshot" }, notes: { zh: "TPE-FRA-MAN / MAN-LHR-TPE；7/11 巴黎回曼徹斯特另列自費", en: "TPE-FRA-MAN / MAN-LHR-TPE; the 11 Jul Paris-Manchester segment is listed separately as self-funded" } },
    { item: { zh: "AIB 會議註冊費", en: "AIB Conference Fee" }, amount: money.conference, amounts: { TWD: "NT$10,413", GBP: "GBP 245", EUR: "EUR 286", USD: "US$325" }, status: "reimburse", proof: { zh: "AIB 付款收據", en: "AIB payment receipt" }, notes: { zh: "會議費 US$325；捐款 US$0。", en: "Conference fee US$325; donation US$0." } },
    { item: { zh: "AIB 會員費", en: "AIB membership fee" }, amount: money.membership, amounts: { TWD: "NT$1,282", GBP: "GBP 30", EUR: "EUR 35", USD: "US$40" }, status: "reimburse", proof: { zh: "AIB 會員費收據", en: "AIB membership receipt" }, notes: { zh: "AIB 40 美元收據。", en: "AIB US$40 receipt." } },
    { item: { zh: "國科會曼徹斯特日支費", en: "NSTC daily allowance - Manchester" }, amount: money.manchesterDaily5, amounts: { TWD: "NT$51,905", GBP: "GBP 1,220", EUR: "EUR 1,427", USD: "US$1,620" }, status: "reimburse", proof: { zh: "115 年國外日支表", en: "NSTC overseas daily allowance table" }, notes: { zh: "NT$10,381 / GBP 244 / EUR 285 / US$324 每日 × 研討會 5 天。", en: "NT$10,381 / GBP 244 / EUR 285 / US$324 per day × 5 conference days." } }
  ],
  selfFundedExpenses: [
    { item: { zh: "INNSiDE Manchester 住宿", en: "INNSiDE Manchester accommodation" }, amount: money.hotel, amounts: { TWD: "NT$38,270", GBP: "GBP 900.90", EUR: "EUR 1,054", USD: "US$1,194" }, status: "self", proof: { zh: "訂房確認與最終發票", en: "Booking confirmation + final invoice" }, notes: { zh: `兩人 5 晚總價；一人 5 晚約 ${money.hotelPerPersonTotal}，一人一晚約 ${money.hotelPerPersonNight}。`, en: `Total for two guests for 5 nights; per person about ${money.hotelPerPersonTotal}, or ${money.hotelPerPersonNight} per night.` } },
    { item: { zh: "曼徹斯特旅遊稅", en: "Manchester visitor charge" }, amount: money.visitorCharge, amounts: { TWD: "約 NT$255", GBP: "GBP 6", EUR: "EUR 7", USD: "US$8" }, status: "self", proof: { zh: "退房收據", en: "Check-out receipt" }, notes: { zh: `GBP 1.20 / 房 / 晚，現場支付；一人約 ${money.visitorChargePerPerson}。`, en: `GBP 1.20 per room per night, paid locally; about ${money.visitorChargePerPerson} per person.` } },
    { item: { zh: "曼徹斯特 → 倫敦火車", en: "Manchester → London train" }, amount: { zh: "每人單程 NT$1,423 起 / GBP 33.50 起 / EUR 39 起 / US$44 起", en: "per person one-way from NT$1,423 / GBP 33.50 / EUR 39 / US$44" }, amounts: { TWD: "NT$1,423 起", GBP: "GBP 33.50 起", EUR: "EUR 39 起", USD: "US$44 起" }, status: "self", proof: { zh: "訂票後的電子票與收據", en: "E-ticket / receipt after booking" }, notes: { zh: "7/4 建議搭 Avanti West Coast。", en: "Avanti West Coast is the current recommendation for 4 July." } },
    { item: { zh: "Eurostar 倫敦 → 巴黎", en: "Eurostar London → Paris" }, amount: { zh: "待確認", en: "TBD" }, amounts: { TWD: "待確認", GBP: "TBD", EUR: "TBD", USD: "TBD" }, status: "self", proof: { zh: "Eurostar 電子票與收據", en: "Eurostar e-ticket and receipt" }, notes: { zh: "7/7 出發，車程約 2 小時 20 分。", en: "Departure is on 7 July, with a journey of about 2h20." } },
    { item: { zh: "巴黎 → 曼徹斯特航段", en: "Paris → Manchester flight" }, amount: { zh: "NT$12,930 / EUR 354.05", en: "NT$12,930 / EUR 354.05" }, amounts: { TWD: "NT$12,930", GBP: "約 GBP 300", EUR: "EUR 354.05", USD: "待確認" }, status: "self", proof: { zh: "Air France 電子票（敏感資訊不公開）與付款證明", en: "Air France e-ticket (sensitive details kept private) and payment proof" }, notes: { zh: "AF1068｜CDG T2E 12:50 → MAN T2 13:25；Business Standard、SkyPriority、2 件托運行李（每件 32kg）。", en: "AF1068 · CDG T2E 12:50 → MAN T2 13:25; Business Standard, SkyPriority, and 2 checked bags up to 32kg each." } },
    { item: { zh: "倫敦住宿", en: "London accommodation" }, amount: { zh: "待確認", en: "TBD" }, amounts: { TWD: "待確認", GBP: "TBD", EUR: "TBD", USD: "TBD" }, status: "self", proof: { zh: "預訂後的確認信與發票", en: "Confirmation / invoice after booking" }, notes: { zh: "首選 The Langham London，備選 The Clermont Charing Cross。", en: "The Langham London is the first choice, with The Clermont Charing Cross as the alternative." } },
    { item: { zh: "巴黎住宿", en: "Paris accommodation" }, amount: { zh: "待確認", en: "TBD" }, amounts: { TWD: "待確認", GBP: "TBD", EUR: "TBD", USD: "TBD" }, status: "self", proof: { zh: "預訂後的確認信與發票", en: "Confirmation / invoice after booking" }, notes: { zh: "首選 Pullman Paris Tour Eiffel。", en: "Pullman Paris Tour Eiffel is the current first choice." } },
    { item: { zh: "倫敦 / 巴黎景點與遊船", en: "London / Paris attractions and cruise" }, amount: { zh: "依實際選擇", en: "Depends on selected stops" }, amounts: { TWD: "依實際選擇", GBP: "Depends", EUR: "Depends", USD: "Depends" }, status: "self", proof: { zh: "線上購票收據", en: "Online ticket receipts" }, notes: { zh: "目前確定有免費散步景點，也保留 Eiffel Tower、Louvre 與塞納河遊船的彈性。", en: "The route includes free city walks, with Eiffel Tower, the Louvre, and a Seine cruise left flexible." } }
  ],
  links: [
    ["AIB 2026 website", "https://www.aib.world/events/2026/"],
    ["AIB program overview", "https://www.aib.world/events/2026/program/conference-overview/"],
    ["AIB registration", "https://www.aib.world/events/2026/attend/registration/"],
    ["Avanti Manchester → London", "https://www.avantiwestcoast.co.uk/travel-information/train-times/manchester-piccadilly/london-euston"],
    ["National Rail", "https://www.nationalrail.co.uk/"],
    ["Two Together Railcard", "https://www.nationalrail.co.uk/tickets-railcards-offers/promotions/two-together-railcard/"],
    ["Eurostar", "https://www.eurostar.com/"],
    ["Eurostar London to Paris", "https://www.eurostar.com/uk-en/train/london-to-paris"],
    ["Eurostar check-in times", "https://www.eurostar.com/uk-en/travel-info/your-trip/check-in"],
    ["Eurostar luggage allowance", "https://www.eurostar.com/uk-en/travel-info/travel-planning/luggage"],
    ["Air France", "https://wwws.airfrance.com/"],
    ["Air France SkyPriority", "https://wwws.airfrance.fr/en/information/aeroport/skypriority"],
    ["Air France lounges", "https://wwws.airfrance.fr/en/information/prepare/salons"],
    ["Air France baggage information", "https://wwws.airfrance.fr/en/information/bagages"],
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

const souvenirData = {
  highlights: [
    { label: { zh: "這頁看什麼", en: "What this page covers" }, value: { zh: "英國、法國、德國伴手禮", en: "UK, France, and Germany gift ideas" } },
    { label: { zh: "最好帶回台灣", en: "Easy to pack" }, value: { zh: "茶葉、巧克力、軟糖、香氛", en: "Tea, chocolate, gummies, fragrance" } },
    { label: { zh: "打包重點", en: "Packing note" }, value: { zh: "液體與玻璃瓶盡量放托運", en: "Glass jars and liquids are better in checked luggage" } }
  ],
  countries: [
    {
      id: "uk",
      label: { zh: "United Kingdom", en: "United Kingdom" },
      title: { zh: "英國伴手禮", en: "UK Souvenirs" },
      lead: {
        zh: "英國這段最穩的還是茶葉、shortbread 和果醬。東西不難買，也很適合送人。",
        en: "Tea, shortbread, and preserves are still the safest UK souvenirs: easy to buy and easy to gift."
      },
      picks: [
        {
          name: "Fortnum & Mason 茶葉",
          note: {
            zh: "如果想買一樣看起來很英國、送人也穩的東西，茶葉通常最不容易出錯。",
            en: "If you want one polished UK gift, tea is usually the easiest place to start."
          },
          goodFor: { zh: "送老師、長輩或正式一點的對象", en: "Good for teachers, elders, or formal gifts" },
          where: { zh: "Piccadilly 主店或機場門市", en: "Piccadilly flagship or airport branches" },
          source: "https://www.fortnumandmason.com/tea/black-tea"
        },
        {
          name: "Walkers Shortbread",
          note: {
            zh: "奶油香很穩，鐵盒或盒裝都很好送，也很適合跟茶葉一起配。",
            en: "A dependable butter-rich gift, especially in tins or boxed packs."
          },
          goodFor: { zh: "同事、朋友、家人一起分著吃", en: "Easy for colleagues, friends, or family sharing" },
          where: { zh: "超市、食品區、機場免稅常見", en: "Common in supermarkets, food halls, and airport shops" },
          source: "https://www.walkersshortbread.com/"
        },
        {
          name: "Tiptree 果醬與 marmalade",
          note: {
            zh: "如果對方平常會吃吐司或早餐抹醬，果醬會比餅乾更有記憶點。",
            en: "A good alternative if the person you are buying for actually uses breakfast spreads."
          },
          goodFor: { zh: "喜歡早餐抹醬、茶點的人", en: "Best for people who genuinely like spreads and tea snacks" },
          where: { zh: "Waitrose、食品店、百貨超市", en: "Waitrose, food shops, and department-store groceries" },
          source: "https://www.tiptree.com/collections/jams"
        }
      ]
    },
    {
      id: "france",
      label: { zh: "France", en: "France" },
      title: { zh: "法國伴手禮", en: "France Souvenirs" },
      lead: {
        zh: "巴黎這段比較適合買有香氣、有包裝感的東西。比起硬塞太多甜點，選茶、香氛或護手霜會更好帶。",
        en: "Paris is a good place for fragrance, tea, and polished small gifts that travel better than fragile desserts."
      },
      picks: [
        {
          name: "Fragonard 香水或香氛皂",
          note: {
            zh: "如果想帶一點法國氣味回來，這類小瓶香水或香氛皂最有旅行感。",
            en: "Small perfume bottles or soaps feel especially Parisian without taking too much luggage space."
          },
          goodFor: { zh: "喜歡香氛、包裝漂亮小物的人", en: "Great for fragrance lovers and gift-focused shopping" },
          where: { zh: "巴黎門市或百貨香氛區", en: "Paris boutiques or department-store beauty floors" },
          source: "https://www.fragonard.com/en-us/fragrances"
        },
        {
          name: "Palais des Thés 茶葉",
          note: {
            zh: "如果不想只買英式茶，法國茶店的調香茶和茶罐也很適合當伴手禮。",
            en: "A nice switch if you want something more distinctly French than classic British tea."
          },
          goodFor: { zh: "平常有喝茶習慣、喜歡茶罐包裝的人", en: "Good for tea drinkers who enjoy a more giftable presentation" },
          where: { zh: "巴黎門市或百貨茶區", en: "Paris boutiques and department-store tea sections" },
          source: "https://www.palaisdesthes.com/en/"
        },
        {
          name: "L'Occitane 護手霜與旅行組",
          note: {
            zh: "這類東西很適合補自己，也很適合拆開分送，不會像大型保養品那麼有負擔。",
            en: "Easy for self-use or splitting into small gifts, without the weight of full-size skincare."
          },
          goodFor: { zh: "朋友、同事，或自己補貨", en: "A safe choice for friends, coworkers, or yourself" },
          where: { zh: "百貨、機場、觀光區門市都常見", en: "Easy to find in department stores, airports, and tourist areas" },
          source: "https://fr.loccitane.com/"
        }
      ]
    },
    {
      id: "germany",
      label: { zh: "Germany", en: "Germany" },
      title: { zh: "德國伴手禮", en: "Germany Souvenirs" },
      lead: {
        zh: "德國段比較適合買零食和經典小物。價格通常比巴黎、倫敦輕一點，買起來也比較沒有壓力。",
        en: "Germany is especially good for snacks and small classics that feel familiar but still distinct."
      },
      picks: [
        {
          name: "HARIBO Goldbears",
          note: {
            zh: "最經典也最好買，適合臨時補貨，分送也很方便。",
            en: "The easiest classic to grab if you want something simple, recognizable, and shareable."
          },
          goodFor: { zh: "同事、朋友、多人分送", en: "Ideal for coworkers, friends, and group sharing" },
          where: { zh: "超市、車站、機場商店", en: "Supermarkets, stations, and airport shops" },
          source: "https://www.haribo.com/en-us/products/goldbears"
        },
        {
          name: "Ritter Sport 巧克力",
          note: {
            zh: "一格一格方塊巧克力很好塞行李箱，口味也多，很適合挑幾種回來。",
            en: "The square bars travel well and make it easy to mix a few flavors in one shop."
          },
          goodFor: { zh: "喜歡巧克力、想一次買很多種口味的人", en: "Great for chocolate lovers and flavor variety" },
          where: { zh: "超市、車站便利店、機場", en: "Supermarkets, station kiosks, and airports" },
          source: "https://www.ritter-sport.com/en/our-chocolate"
        },
        {
          name: "Niederegger 馬滋潘",
          note: {
            zh: "如果對方喜歡杏仁糖或歐陸甜點，這個會比一般巧克力更有記憶點。",
            en: "A more distinctive pick if the recipient likes marzipan or classic European sweets."
          },
          goodFor: { zh: "家人、長輩，或本來就喜歡 marzipan 的人", en: "Best for family, elders, or anyone who already likes marzipan" },
          where: { zh: "百貨食品區、德國超市、機場店", en: "Food halls, German supermarkets, and airport shops" },
          source: "https://shop.niederegger.de/"
        },
        {
          name: "Ampelmann 小物",
          note: {
            zh: "如果想帶一點不是吃的東西，像杯子、帆布袋、文具這種柏林感小物就很剛好。",
            en: "If you want a non-food souvenir, Berlin-themed Ampelmann goods are an easy option."
          },
          goodFor: { zh: "朋友、文具控、喜歡城市紀念品的人", en: "Good for friends, stationery fans, and city-souvenir lovers" },
          where: { zh: "柏林門市、車站店、官方商店", en: "Berlin shops, station stores, and the official shop" },
          source: "https://www.ampelmannshop.com/"
        }
      ]
    }
  ],
  packing: [
    { zh: "茶葉、餅乾、巧克力最適合塞在行李箱縫隙裡，重量也比較好抓。", en: "Tea, biscuits, and chocolate are the easiest to tuck into spare luggage space." },
    { zh: "香水、護手霜、果醬這類液體或玻璃瓶，盡量放托運，外面再用衣服或氣泡袋包一下。", en: "Liquids and glass jars are better in checked luggage with a little padding." },
    { zh: "最後如果還想在機場補買，先留一點重量和空間，不然手上會變得很滿。", en: "If you plan to buy more at the airport, leave a bit of bag space and weight up front." }
  ]
};

const sectionNav = {
  home: [["overview", { zh: "旅程總覽", en: "Travel Overview" }], ["snapshot", { zh: "旅程摘要", en: "Trip Snapshot" }], ["highlights", { zh: "旅程亮點", en: "Journey Highlights" }], ["days", { zh: "每日預覽", en: "Day-by-Day Preview" }], ["info", { zh: "實用資訊", en: "Practical Info" }]],
  conference: [["accepted", { zh: "會議狀態", en: "Status" }], ["papers", { zh: "論文", en: "Papers" }], ["alerts", { zh: "提醒", en: "Notes" }], ["checklist", { zh: "文件", en: "Documents" }]],
  flights: [["overview", { zh: "航班總覽", en: "Overview" }], ["segments", { zh: "航段", en: "Segments" }], ["transfer", { zh: "轉機", en: "Transfers" }], ["notes", { zh: "票務備註", en: "Notes" }]],
  transport: [["flights", { zh: "航班", en: "Flights" }], ["transfer", { zh: "轉機", en: "Transfers" }], ["train", { zh: "火車", en: "Train" }], ["local", { zh: "市內交通", en: "Local transit" }]],
  stay: [["overview", { zh: "住宿總覽", en: "Overview" }], ["decision", { zh: "後段住宿", en: "Later stays" }], ["areas", { zh: "住宿建議", en: "Useful picks" }]],
  itinerary: [["timeline", { zh: "時間軸", en: "Timeline" }], ["tickets", { zh: "景點費用", en: "Admission" }], ["return", { zh: "回程提醒", en: "Return" }]],
  shopping: [["shopping-overview", { zh: "總覽", en: "Overview" }], ["tea", { zh: "茶與點心", en: "Tea" }], ["pantry", { zh: "果醬與 pantry", en: "Pantry" }], ["essentials", { zh: "超市與藥妝", en: "Essentials" }]],
  souvenirs: [["souvenir-overview", { zh: "總覽", en: "Overview" }], ["uk", { zh: "英國", en: "UK" }], ["france", { zh: "法國", en: "France" }], ["germany", { zh: "德國", en: "Germany" }], ["packing", { zh: "打包提醒", en: "Packing" }]],
  map: [["travel-map", { zh: "地圖", en: "Map" }], ["route-links", { zh: "每日路線", en: "Routes" }], ["map-notes", { zh: "地圖備註", en: "Notes" }]],
  budget: [["expenses", { zh: "費用總覽", en: "Budget" }], ["totals", { zh: "小計", en: "Totals" }], ["proofs", { zh: "憑證", en: "Proofs" }]],
  reminders: [["pending", { zh: "旅程提醒", en: "Travel notes" }], ["quick-check", { zh: "出發前確認", en: "Final check" }]],
  firstTime: [["entry", { zh: "入境", en: "Entry" }], ["city", { zh: "城市移動", en: "City basics" }], ["daily", { zh: "日常提醒", en: "Daily notes" }], ["arrival", { zh: "抵達第一天", en: "First day" }]],
  documents: [["checklist", { zh: "文件清單", en: "Documents" }], ["links", { zh: "官方連結", en: "Links" }]]
};

const readingGuides = {
  conference: [
    { zh: "兩篇 AIB 發表已確認，頁面只放題名與簡介。", en: "Two AIB presentations are confirmed; only titles and short summaries are shown." },
    { zh: "兩場發表的正式 session 時間都已補上。", en: "The formal session times for both presentations are now added." },
    { zh: "接受函和邀請函主要是拿來證明會議發表和出國目的。", en: "Acceptance and invitation letters support the conference and travel purpose." }
  ],
  flights: [
    { zh: "國際線和歐洲段都集中在這頁，查機票時比較不用來回翻。", en: "Long-haul and Europe flight segments are grouped here to keep the ticket view simple." },
    { zh: "法蘭克福是長轉機，希斯洛則要抓緊節奏。", en: "Frankfurt is the long layover; Heathrow is the tighter one." },
    { zh: "巴黎回程先飛回曼徹斯特，再接 BA 和華航返台。", en: "The Paris segment returns to Manchester before the BA and China Airlines journey home." }
  ],
  transport: [
    { zh: "國際航班已確認，回程從曼徹斯特起飛。", en: "International flights are confirmed; the return journey begins in Manchester." },
    { zh: "法蘭克福是長轉機，希斯洛則是緊一點的轉機節奏。", en: "Frankfurt is the long layover, while Heathrow remains the tighter connection." },
    { zh: "英國段先是曼徹斯特到倫敦，接著再搭 Eurostar 到巴黎。", en: "Within Europe, the route moves from Manchester to London first, then on to Paris by Eurostar." },
    { zh: "倫敦與曼徹斯特市內交通都以感應付款為主。", en: "Local transit in London and Manchester is planned around contactless payment." }
  ],
  stay: [
    { zh: "曼徹斯特住宿已訂，倫敦和巴黎也都先列了方向。", en: "Manchester is booked, and London and Paris now have first-choice stays listed." },
    { zh: "7/4 晚的住宿日期有重疊，可以先留著當緩衝。", en: "The 4 July night overlaps and can remain a buffer." },
    { zh: "倫敦先看動線，巴黎就看景和住起來的感覺。", en: "London prioritizes access; Paris leans more toward atmosphere and view." }
  ],
  itinerary: [
    { zh: "每日行程改成一張張可展開的旅程卡，移動、散步與會議節奏都接得起來。", en: "Each day now opens as a travel card, keeping movement, walking routes, and conference rhythm together." },
    { zh: "後段改成倫敦 3 晚、巴黎 4 晚，城市切換都補進去了。", en: "The later route is now London for 3 nights and Paris for 4 nights, with each city move added in." },
    { zh: "另外還要訂票的，主要是 Avanti、Eurostar 和幾個巴黎景點。", en: "The main items still needing tickets are Avanti, Eurostar, and a few Paris attractions." }
  ],
  map: [
    { zh: "點地點卡片，右側地圖就會跟著換。", en: "Tap a place card to change the map." },
    { zh: "每天的路線都可以直接打開 Google 地圖。", en: "Daily route links open directly in Google Maps." },
    { zh: "曼徹斯特以交通移動為主，倫敦景點之間比較適合一路散步串起來。", en: "Manchester is more transit-focused, while London is easier to connect on foot between sights." }
  ],
  budget: [
    { zh: "報帳只列機票、AIB 會議費、AIB 會員費與國科會日支費。", en: "Claims include only flights, AIB conference fee, AIB membership fee, and NSTC daily allowance." },
    { zh: "住宿、火車、景點與倫敦旅遊列在自費。", en: "Accommodation, trains, attractions, and London travel stay self-funded." },
    { zh: "報帳憑證順序已整理在頁面底部。", en: "The proof order is listed at the bottom of the page." }
  ],
  reminders: [
    { zh: "這頁只放還要再看一次的事。", en: "This page keeps only items that need a second check." },
    { zh: "住宿、火車、報帳與回程航段是最重要的核對點。", en: "Accommodation, trains, reimbursement, and return routing are the main checks." },
    { zh: "出發前可以把這頁當成最後確認清單。", en: "Use this page as the final pre-departure checklist." }
  ],
  firstTime: [
    { zh: "入境文件、ETA、住宿與回程資料放在同一處，手機離線也能開。", en: "Keep entry documents, ETA, accommodation, and return details together and available offline." },
    { zh: "倫敦交通用同一張卡或同一支手機刷進刷出。", en: "Use the same card or device to tap in and out on London transport." },
    { zh: "食物、免稅額與高單價購物以 GOV.UK 規則為準。", en: "Food, customs allowances, and high-value shopping should follow GOV.UK rules." }
  ],
  documents: [
    { zh: "只放官方連結與文件類型，不公開私人憑證內容。", en: "Only official links and document types are shown; private proof details are not public." },
    { zh: "報帳、簽證和旅行確認資料都可以照著這頁核對。", en: "Use this page to check reimbursement, travel authorization, and travel proof links." },
    { zh: "訂位編號、付款資訊與 email 不放在公開頁面。", en: "Booking numbers, payment details, and email addresses stay off the public site." }
  ]
};

const dashboardData = {
  topStatus: [
    { status: "confirmed", title: { zh: "會議日期", en: "Conference dates" }, value: "2026/06/30 - 2026/07/03", note: { zh: "AIB Manchester", en: "AIB Manchester" } },
    { status: "confirmed", title: { zh: "機票已訂", en: "Flight booked" }, value: "TPE → FRA → MAN", note: { zh: "巴黎回曼城後再接返台", en: "Paris returns to Manchester before heading home" } },
    { status: "confirmed", title: { zh: "曼徹斯特住宿已訂", en: "Manchester hotel booked" }, value: "INNSiDE Manchester", note: { zh: "6/30 - 7/5", en: "30 Jun - 5 Jul" } },
    { status: "book", title: { zh: "後段住宿規劃", en: "Later-stay planning" }, value: { zh: "倫敦 / 巴黎", en: "London / Paris" }, note: { zh: "先列了想住的地方", en: "First-choice stays listed" } },
    { status: "reimburse", title: { zh: "可報帳項目", en: "Reimbursement items" }, value: { zh: "4 項", en: "4 items" }, note: { zh: "機票、會議費、會員費、日支費", en: "Flights, fee, membership, allowance" } },
    { status: "pending", title: { zh: "文件清單", en: "Documents checklist" }, value: { zh: "國際段 + 歐洲段一起整理", en: "Long-haul and Europe legs tracked together" }, note: { zh: "文件頁可逐項確認", en: "Tracked in the documents page" } }
  ],
  quickActions: [
    ["overview", { zh: "查看總覽", en: "View overview" }, { zh: "先看目前進度", en: "Start with the current status" }],
    ["schedule", { zh: "查看行程", en: "View itinerary" }, { zh: "每日旅程、城市轉場和沿途節奏", en: "Daily route, city shifts, and the travel rhythm" }],
    ["hotel", { zh: "查看住宿", en: "Review hotel" }, { zh: "曼徹斯特已訂，倫敦和巴黎也先排了方向", en: "Manchester booked, with London and Paris first choices" }],
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
    { date: "09:30 - 10:45", title: { zh: "Interactive 發表時段", en: "Interactive presentation slot" }, note: { zh: "Session 5.1.20 · Track 4 · Room 2217 (UP)", en: "Session 5.1.20 · Track 4 · Room 2217 (UP)" } }
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
        { date: "2026/06/29 - 06/30", city: { zh: "Taipei → Frankfurt → Manchester", en: "Taipei → Frankfurt → Manchester" }, purpose: { zh: "飛往英國，法蘭克福轉機順走市區，再入住飯店", en: "Fly to the UK, use the Frankfurt layover for a short city walk, then check in" }, transport: { zh: "CI 61 / LH 946", en: "CI 61 / LH 946" }, reminders: [{ zh: "法蘭克福長轉機約 9 小時 30 分。", en: "Frankfurt layover is about 9h30." }, { zh: "轉機散步可走：羅馬廣場 → 美因河散步 → MainNizza 海鮮午餐 → 歐元符號 → 回機場。", en: "A good layover route is Romerberg → Main river walk → MainNizza seafood lunch → Euro sign → airport." }, { zh: "15:00 後可入住 INNSiDE Manchester。", en: "INNSiDE Manchester check-in starts after 15:00." }], optional: [{ zh: "第一晚保留休息時間。", en: "Keep the first evening light." }] }
      ]
    },
    {
      title: { zh: "AIB conference days", en: "AIB conference days" },
      entries: [
        { date: "2026/06/30 - 07/03", city: { zh: "Manchester", en: "Manchester" }, purpose: { zh: "參加 AIB 會議", en: "Attend AIB conference" }, transport: { zh: "步行 / 市內交通", en: "Walk / local transit" }, reminders: [{ zh: "會議主軸是 AIB Conference、Presentation、Networking。", en: "The conference rhythm centers on AIB sessions, presentation, and networking." }, { zh: "Competitive 發表已確認：15:15-16:30，Room 3.006B (AMBS)。", en: "Competitive presentation confirmed: 15:15-16:30, Room 3.006B (AMBS)." }, { zh: "Interactive 發表已確認：7/3 09:30-10:45，Room 2217 (UP)。", en: "Interactive presentation confirmed: 3 Jul, 09:30-10:45, Room 2217 (UP)." }, { zh: "會議收據與證明每天整理。", en: "Organize receipts and proofs daily." }], optional: [{ zh: "晚間活動視體力安排。", en: "Evening plans can stay flexible." }] }
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
  { id: "snapshot", label: { zh: "摘要", en: "Snapshot" }, icon: "schedule" },
  { id: "highlights", label: { zh: "亮點", en: "Highlights" }, icon: "papers" },
  { id: "days", label: { zh: "每日故事", en: "Day by Day" }, icon: "hotel" },
  { id: "info", label: { zh: "實用資訊", en: "Practical Info" }, icon: "checklist" }
];

const tripSnapshotCards = [
  {
    label: { zh: "天數", en: "Trip length" },
    value: { zh: "14 天", en: "14 days" },
    note: { zh: "從 6/29 晚出發，到 7/12 抵台。", en: "Departing late on 29 Jun and arriving back on 12 Jul." }
  },
  {
    label: { zh: "國家與城市", en: "Countries & cities" },
    value: { zh: "德國轉機 · 英國主段 · 法國收尾", en: "Germany transit · UK core · France finish" },
    note: { zh: "法蘭克福、倫敦、曼徹斯特、巴黎。", en: "Frankfurt, London, Manchester, and Paris." }
  },
  {
    label: { zh: "旅程核心", en: "Core purpose" },
    value: "AIB 2026 Manchester",
    note: { zh: "會議發表是主軸，城市旅行接在後半段。", en: "The conference is the anchor; the city travel follows after it." }
  },
  {
    label: { zh: "主要交通", en: "Main transport" },
    value: { zh: "飛機 · 火車 · 城市步行", en: "Flights · rail · city walking" },
    note: { zh: "長程航班、英國火車、Eurostar 與市區移動。", en: "Long-haul flights, UK rail, Eurostar, and city transit." }
  },
  {
    label: { zh: "旅程節奏", en: "Travel rhythm" },
    value: { zh: "轉機 → 曼徹斯特會議 → 倫敦 → 巴黎", en: "Transit → Manchester conference → London → Paris" },
    note: { zh: "先落地曼徹斯特完成會議主段，再把倫敦與巴黎接成後半段旅行。", en: "The conference days come first in Manchester, followed by London and then Paris." }
  },
  {
    label: { zh: "體力感受", en: "Pace" },
    value: { zh: "前後段移動較多，中段較穩", en: "More movement at the ends, steadier in the middle" },
    note: { zh: "長轉機、城市切換和回程串接要留體力。", en: "Save energy for the layovers, city changes, and the return chain." }
  }
];

const journeyHighlights = [
  {
    city: { zh: "Frankfurt transit", en: "Frankfurt transit" },
    date: "6/30",
    title: { zh: "短暫轉機，也順手走進歐洲第一段街景", en: "A brief layover that still opens with a first European city walk" },
    body: { zh: "從羅馬廣場、美因河到 MainNizza 午餐，這段法蘭克福停留像是替旅程暖機，讓長途飛行和正式會議之間多了一個輕巧的過渡。", en: "Romerberg, the Main river, and a lunch stop at MainNizza give the long Frankfurt layover a softer start before Manchester." }
  },
  {
    city: { zh: "London", en: "London" },
    date: "7/4–7/6",
    title: { zh: "三天倫敦，留給地標、街區與城市光澤", en: "Three London days for landmarks, streets, and city polish" },
    body: { zh: "西敏散步、Harrods、Bond Street、Covent Garden 和 Piccadilly Circus，這段不求塞滿，而是讓倫敦用自己的節奏慢慢展開。", en: "Westminster walks, Harrods, Bond Street, Covent Garden, and Piccadilly Circus shape the London stretch at an unhurried pace." }
  },
  {
    city: { zh: "Manchester", en: "Manchester" },
    date: "6/30–7/3",
    title: { zh: "AIB 2026 Manchester 是這趟旅程的核心", en: "AIB 2026 Manchester stays at the center of the trip" },
    body: { zh: "會議、發表和交流把曼徹斯特這幾天定成整趟旅程的主軸，也讓前後的城市段有了很清楚的重心。", en: "Conference sessions, presentations, and networking make Manchester the academic heart of the journey." }
  },
  {
    city: { zh: "Paris", en: "Paris" },
    date: "7/7–7/11",
    title: { zh: "巴黎留給街景、博物館、購物與法式餐桌", en: "Paris closes with museums, shopping, and the rhythm of the city" },
    body: { zh: "鐵塔、羅浮宮、香榭麗舍和塞納河，把旅行最後一段留給巴黎最有代表性的城市景觀，也替返程前的幾天加上一點柔和的餘味。", en: "The Eiffel Tower, Louvre, Champs-Elysees, and Seine give the last days a more leisurely and atmospheric finish." }
  },
  {
    city: { zh: "Cross-country movement", en: "Cross-country movement" },
    date: "6/29–7/11",
    title: { zh: "英法移動與歐洲銜接，也是這趟旅程的一部分", en: "The movement between countries is part of the travel story too" },
    body: { zh: "從 CI、Lufthansa、Avanti、Eurostar 到 Air France 和 BA，這趟旅程不是只看目的地，也是在不同城市節奏之間慢慢切換。", en: "CI, Lufthansa, Avanti, Eurostar, Air France, and BA together shape a route defined as much by movement as by the stops themselves." }
  }
];

const journeyRouteCards = [
  {
    date: "6/30",
    title: { zh: "法蘭克福轉機", en: "Frankfurt transit" },
    body: { zh: "用半天城市散步，把長途飛行和歐洲的第一段街景接在一起。", en: "A short city walk softens the long-haul arrival into the first European streets." }
  },
  {
    date: "6/30–7/3",
    title: { zh: "曼徹斯特會議主段", en: "Manchester conference days" },
    body: { zh: "AIB 2026 是整趟旅程的核心，發表與交流都集中在這幾天。", en: "AIB 2026 anchors the trip, with presentations and conference exchanges concentrated here." }
  },
  {
    date: "7/4–7/6",
    title: { zh: "倫敦城市段", en: "London chapter" },
    body: { zh: "從西敏地標到街區散步，把倫敦留給比較從容的城市節奏。", en: "From Westminster to slower district walks, London opens in a calmer city rhythm." }
  },
  {
    date: "7/7–7/10",
    title: { zh: "巴黎收尾", en: "Paris finish" },
    body: { zh: "博物館、河岸、精品街與法式餐桌，把最後幾天留給巴黎。", en: "Museums, river walks, grand boulevards, and long dinners bring the route to Paris." }
  },
  {
    date: "7/11–7/12",
    title: { zh: "返程串接", en: "Homebound connections" },
    body: { zh: "巴黎、曼徹斯特、希斯洛一路接回台北，最後一天以轉場順利為優先。", en: "Paris, Manchester, and Heathrow connect in sequence, with the last day centered on a clean route home." }
  }
];

const practicalGuideSections = [
  {
    title: { zh: "航班資訊", en: "Flights" },
    summary: { zh: "去程、回程和巴黎回曼徹斯特的歐洲段都已經整理好。", en: "Outbound, return, and the Paris-Manchester Europe segment are all organized." },
    points: [
      { zh: "去程：TPE → FRA → MAN。", en: "Outbound: TPE → FRA → MAN." },
      { zh: "回程：CDG → MAN → LHR → TPE。", en: "Return: CDG → MAN → LHR → TPE." },
      { zh: "法蘭克福是長轉機，希斯洛則要抓得比較緊。", en: "Frankfurt is the long layover; Heathrow is the tighter one." }
    ],
    href: "./flights.html",
    cta: { zh: "看機票與轉機", en: "Open flight page" }
  },
  {
    title: { zh: "住宿資訊", en: "Stay" },
    summary: { zh: "曼徹斯特已訂，倫敦與巴黎都有首選。", en: "Manchester is booked, and London and Paris already have first-choice stays." },
    points: [
      { zh: "曼徹斯特：INNSiDE Manchester。", en: "Manchester: INNSiDE Manchester." },
      { zh: "倫敦：The Langham London / The Clermont Charing Cross。", en: "London: The Langham London / The Clermont Charing Cross." },
      { zh: "巴黎：Pullman Paris Tour Eiffel。", en: "Paris: Pullman Paris Tour Eiffel." }
    ],
    href: "./stay.html",
    cta: { zh: "看住宿安排", en: "Open stay page" }
  },
  {
    title: { zh: "交通提醒", en: "Transport" },
    summary: { zh: "英國段以火車為主，倫敦到巴黎則接 Eurostar。", en: "Rail shapes the UK leg, with Eurostar linking London and Paris." },
    points: [
      { zh: "Manchester → London 建議先查 Avanti Advance 票。", en: "Check Avanti Advance fares for Manchester → London." },
      { zh: "Eurostar 建議提早到 St Pancras。", en: "Arrive at St Pancras early for Eurostar." },
      { zh: "倫敦與曼徹斯特市內交通都以感應支付最方便。", en: "Contactless payment is still the easiest for both London and Manchester." }
    ],
    href: "./transport.html",
    cta: { zh: "看交通安排", en: "Open transport page" }
  },
  {
    title: { zh: "會議資訊", en: "Conference" },
    summary: { zh: "會議發表是這趟旅程最重要的主軸。", en: "The conference presentations remain the main purpose of the trip." },
    points: [
      { zh: "AIB 2026 Manchester：6/30–7/3。", en: "AIB 2026 Manchester: 30 Jun-3 Jul." },
      { zh: "Competitive 和 Interactive 兩場都已確認。", en: "Both Competitive and Interactive sessions are confirmed." },
      { zh: "接受函、邀請函和收據都已經整理。", en: "Acceptance letters, the invitation, and receipts are already organized." }
    ],
    href: "./conference.html",
    cta: { zh: "看會議頁", en: "Open conference page" }
  },
  {
    title: { zh: "行李與穿搭", en: "Packing" },
    summary: { zh: "這趟需要同時照顧長途飛行、會議日和城市散步。", en: "Packing needs to work for long flights, conference days, and city walking." },
    points: [
      { zh: "會議日以穩重、舒適的正式穿著為主。", en: "Conference days call for polished but comfortable outfits." },
      { zh: "倫敦與巴黎都要保留適合步行的鞋。", en: "Leave room for shoes that can handle long city walks." },
      { zh: "英國與法國段氣溫差異不大，但室內外溫差仍要用薄外套處理。", en: "A light layer still helps with indoor-outdoor shifts in both the UK and France." }
    ],
    href: "./reminders.html",
    cta: { zh: "看行前提醒", en: "Open travel notes" }
  },
  {
    title: { zh: "付款與票券", en: "Payment & tickets" },
    summary: { zh: "需要另外處理的主要是火車、Eurostar 和部分巴黎門票。", en: "The main open items are rail tickets, Eurostar, and a few Paris admissions." },
    points: [
      { zh: "倫敦、曼徹斯特交通大多可直接感應支付。", en: "Most London and Manchester transit works fine with contactless payment." },
      { zh: "巴黎景點票券建議依當天節奏再決定。", en: "Paris attraction tickets can stay flexible a little longer." },
      { zh: "高單價購物與伴手禮建議保留收據。", en: "Keep receipts for higher-value purchases and gifts." }
    ],
    href: "./budget.html",
    cta: { zh: "看費用頁", en: "Open budget page" }
  },
  {
    title: { zh: "貼心提醒", en: "Travel notes" },
    summary: { zh: "最後幾天的城市切換和回程接駁，節奏比前段更重要。", en: "The last city changes and the return chain need a little more attention than the early days." },
    points: [
      { zh: "7/11 不要把巴黎上午排太滿。", en: "Keep the Paris morning on 11 Jul light." },
      { zh: "曼徹斯特與倫敦住宿日期要再對一次。", en: "Double-check the Manchester and London stay dates." },
      { zh: "重要文件和票券先留離線版本。", en: "Keep important files and tickets offline." }
    ],
    href: "./first-time.html",
    cta: { zh: "看更多提醒", en: "Open Europe notes" }
  }
];

const dailyGuides = [
  {
    id: "day-1",
    day: "Day 1",
    date: "6/29-6/30",
    city: { zh: "Taipei → Frankfurt → Manchester", en: "Taipei → Frankfurt → Manchester" },
    theme: { zh: "長程飛行、轉機散步與抵達曼徹斯特", en: "Long-haul travel, a Frankfurt walk, and arrival in Manchester" },
    intro: { zh: "旅程從長途飛行展開，法蘭克福的長轉機不只是等待，而是一段剛好能舒展身體、慢慢進入歐洲節奏的小散步。傍晚再接上飛往曼徹斯特的航段，把第一天穩穩落在飯店。", en: "The trip opens with the long-haul flight, and the Frankfurt layover becomes a small city walk before the final segment into Manchester." },
    highlights: ["CI61", "羅馬廣場", "MainNizza", "LH946", "INNSiDE Manchester"],
    route: [
      { label: { zh: "上午｜抵達歐洲", en: "Morning" }, text: { zh: "清晨抵達法蘭克福，先確認接續航班，再把轉機時間留給一小段城市散步。", en: "Arrive in Frankfurt, check the onward flight, then use part of the layover for a short walk." } },
      { label: { zh: "中午｜午間風味", en: "Noon" }, text: { zh: "沿著羅馬廣場和美因河慢慢走，到 MainNizza 吃午餐，讓旅程從飛機模式慢慢換到城市模式。", en: "Walk from Romerberg toward the Main river and stop for lunch at MainNizza." } },
      { label: { zh: "下午｜回到機場", en: "Afternoon" }, text: { zh: "經過歐元符號後回機場，預留緩衝再接 Lufthansa 前往曼徹斯特。", en: "Head back after the Euro sign stop and leave enough buffer before Lufthansa." } },
      { label: { zh: "夜晚｜今晚落腳", en: "Evening" }, text: { zh: "抵達曼徹斯特後先入住、吃點東西，第一晚不要排太滿，讓身體先適應。", en: "Arrive in Manchester, check in, eat something simple, and keep the evening light." } }
    ],
    notes: ["法蘭克福這段雖然是轉機，但其實很適合當成旅程的第一段暖身。", "重要文件、登機證和離線票券先整理在同一個地方。"],
    tickets: ["法蘭克福散步景點免費，午餐依現場消費。"]
  },
  {
    id: "day-2",
    day: "Day 2",
    date: "7/1",
    city: { zh: "Manchester", en: "Manchester" },
    theme: { zh: "會議主段正式開始", en: "The conference days begin in earnest" },
    intro: { zh: "從今天開始，旅程進入最核心的學術段落。白天以 AIB 會議節奏為主，晚一點再把城市留給簡單散步或晚餐，讓這幾天穩穩圍繞著會議展開。", en: "The academic core begins here, with the day shaped mainly by the conference and the city saved for smaller moments after sessions." },
    highlights: ["AIB Conference", "會議 sessions", "Networking", "Manchester city centre"],
    route: [
      { label: { zh: "上午｜進入會議節奏", en: "Morning" }, text: { zh: "早上以報到、session 和第一段交流為主，把時間先交給會議本身。", en: "Settle into sessions and the first conversations of the conference day." } },
      { label: { zh: "中午｜午間空檔", en: "Noon" }, text: { zh: "午間保留給簡單用餐和場次轉換，不急著往市區跑。", en: "Keep lunch simple and use the break for session changes rather than a longer city detour." } },
      { label: { zh: "下午｜主會議時段", en: "Afternoon" }, text: { zh: "下午繼續 conference 主段，把重心放在內容和交流。", en: "Stay with the main conference rhythm through the afternoon." } },
      { label: { zh: "夜晚｜城市留白", en: "Evening" }, text: { zh: "晚餐或短散步就好，讓體力留給接下來幾天。", en: "Keep the evening open for dinner or a short walk and save energy for the days ahead." } }
    ],
    notes: ["第一個完整會議日不必再加太多旅遊安排。", "收據和文件可以每天回飯店就先整理。"],
    tickets: ["當天以會議安排為主，景點不另外收費。"]
  },
  {
    id: "day-3",
    day: "Day 3",
    date: "7/2",
    city: { zh: "Manchester", en: "Manchester" },
    theme: { zh: "會議日、交流與發表節奏", en: "Conference sessions, exchanges, and presentation rhythm" },
    intro: { zh: "這一天仍然圍繞著會議走，但節奏會更像一個完整的學術工作日：場次、交流、發表準備和城市間短暫呼吸，會自然交錯在一起。", en: "This day stays anchored in the conference rhythm, with sessions, networking, and presentation prep woven together." },
    highlights: ["AIB sessions", "presentation prep", "networking", "Manchester"],
    route: [
      { label: { zh: "上午｜場次與內容", en: "Morning" }, text: { zh: "上午先把主要場次走穩，讓會議內容成為今天的主軸。", en: "Use the morning for the main session blocks and keep the academic focus steady." } },
      { label: { zh: "中午｜午間交流", en: "Noon" }, text: { zh: "中午可以留給簡單社交和 brief 的休息。", en: "Keep noon for light networking and a brief pause." } },
      { label: { zh: "下午｜發表準備", en: "Afternoon" }, text: { zh: "下午把簡報、講稿和進場節奏再確認一次，讓後面的發表更穩。", en: "Use the afternoon to double-check slides, notes, and the flow into the presentation." } },
      { label: { zh: "夜晚｜把節奏收回來", en: "Evening" }, text: { zh: "晚上不用硬排景點，留給休息和整理。", en: "Do not force extra sightseeing into the evening; keep it for rest and reset." } }
    ],
    notes: ["如果 competitive 場次安排在這段會議日內，當天就把其他活動留白一點。", "會議日之間最重要的是把體力配得剛剛好。"],
    tickets: ["仍以會議安排為主。"]
  },
  {
    id: "day-4",
    day: "Day 4",
    date: "7/3",
    city: { zh: "Manchester", en: "Manchester" },
    theme: { zh: "Interactive 發表與會議收尾", en: "Interactive presentation and conference close" },
    intro: { zh: "今天比較像把會議主段慢慢收起來的一天。Interactive session 是重點，其他時間則留給最後的交流、整理與準備轉往倫敦。", en: "The final conference day centers on the Interactive session, with the rest of the time helping the Manchester chapter close more gently." },
    highlights: ["Interactive session", "09:30-10:45", "Room 2217 (UP)", "conference close"],
    route: [
      { label: { zh: "上午｜核心發表", en: "Morning" }, text: { zh: "Interactive 發表時段是今天最重要的重心，先把進場、簡報和會議節奏留在最前面。", en: "The Interactive presentation is the day’s anchor, so keep entry, slides, and timing front and center." } },
      { label: { zh: "中午｜緩一口氣", en: "Noon" }, text: { zh: "發表結束後，用午間空檔把節奏慢慢放下來。", en: "After the presentation, use lunch to come back down into a calmer pace." } },
      { label: { zh: "下午｜最後交流", en: "Afternoon" }, text: { zh: "下午適合把會議最後的場次、交流和收尾整理完成。", en: "Use the afternoon for the final conversations and the last pieces of the conference." } },
      { label: { zh: "夜晚｜準備離開曼徹斯特", en: "Evening" }, text: { zh: "晚上把文件、票券和明天往倫敦的移動收好。", en: "Get documents, tickets, and the London transfer ready before bed." } }
    ],
    notes: ["Interactive 發表已確認為 7/3 09:30-10:45，Room 2217 (UP)。", "今天也適合把會議相關文件再整理一次。"],
    tickets: ["會議日不另外安排門票行程。"]
  },
  {
    id: "day-5",
    day: "Day 5",
    date: "7/4",
    city: { zh: "Manchester → London", en: "Manchester → London" },
    theme: { zh: "離開會議城市，走進倫敦第一段街景", en: "Leaving the conference city and stepping into London" },
    intro: { zh: "這一天像是旅程的轉場。上午把曼徹斯特收尾，中午前後南下倫敦，下午就能接上西敏一帶最經典的城市步調。", en: "This day feels like a transition chapter: leave Manchester, head south, and let Westminster set the tone of London." },
    highlights: ["Avanti West Coast", "London Euston", "Big Ben", "Buckingham Palace", "St James's Park"],
    route: [
      { label: { zh: "上午｜離開曼徹斯特", en: "Morning" }, text: { zh: "早上從 Manchester Piccadilly 出發，準備搭火車進倫敦。", en: "Leave from Manchester Piccadilly and settle into the rail move south." } },
      { label: { zh: "中午｜英國段鐵路移動", en: "Noon" }, text: { zh: "Avanti 大約 2 小時 10 分，剛好把會議節奏換成旅行節奏。", en: "The Avanti ride takes about 2h10 and cleanly shifts the trip from conference mode into travel mode." } },
      { label: { zh: "下午｜西敏散步", en: "Afternoon" }, text: { zh: "抵達後可先走 Big Ben、Buckingham Palace 和 St James's Park，讓倫敦第一眼落在最經典的城市畫面。", en: "After arrival, Big Ben, Buckingham Palace, and St James’s Park give London its classic opening scene." } },
      { label: { zh: "夜晚｜今晚落腳", en: "Evening" }, text: { zh: "晚上回到飯店，把之後幾天的步調留給市中心慢慢展開。", en: "Settle into the hotel and leave the next days to unfold at a city pace." } }
    ],
    notes: ["這天移動比景點更重要，不要把行程排太緊。", "如果倫敦住宿還沒最後確認，先以 Euston 周邊動線為優先。"],
    tickets: ["Avanti 票價會依班次而變，建議先看 Advance。"]
  },
  {
    id: "day-6",
    day: "Day 6",
    date: "7/5",
    city: { zh: "London", en: "London" },
    theme: { zh: "精品街區與倫敦城市光澤", en: "Luxury streets and the polished side of London" },
    intro: { zh: "這一天適合把倫敦的購物氣氛、百貨與精品街區慢慢串起來，不必趕景點，而是讓城市的光澤感自己浮出來。", en: "Let the day stay with London’s polished shopping districts rather than trying to rush between landmarks." },
    highlights: ["Harrods", "Bond Street", "Chanel", "Dior"],
    route: [
      { label: { zh: "上午｜城市醒來", en: "Morning" }, text: { zh: "上午可以從較慢的節奏開始，不急著一早就塞滿移動。", en: "Start the morning gently and leave room for the day to open up." } },
      { label: { zh: "中午｜午間風味", en: "Noon" }, text: { zh: "中午前後移動到 Harrods 一帶，順著百貨與街區慢慢逛。", en: "Head toward Harrods around midday and move through the district at an easy pace." } },
      { label: { zh: "下午｜核心街區", en: "Afternoon" }, text: { zh: "下午把 Bond Street 和精品街排在一起，動線最順。", en: "Keep Bond Street and the luxury stretch together through the afternoon." } },
      { label: { zh: "夜晚｜今日餐桌", en: "Evening" }, text: { zh: "晚上留給晚餐和沿街散步，讓購物日有一個比較輕鬆的收尾。", en: "End with dinner and a slower walk so the shopping day can taper off naturally." } }
    ],
    notes: ["這天主要是城市享受，不用逼自己一定買什麼。", "如果有高單價購物，記得把收據留好。"],
    tickets: ["街區和百貨本身免費，花費取決於實際購物。"]
  },
  {
    id: "day-7",
    day: "Day 7",
    date: "7/6",
    city: { zh: "London", en: "London" },
    theme: { zh: "街區漫步與自由留白", en: "Neighbourhood walks and a more open city day" },
    intro: { zh: "這一天比較像把倫敦留給自己。從 Covent Garden 到 Piccadilly Circus，不是急著趕點，而是保留一些停下來的空白。", en: "This day is less about checking off landmarks and more about letting central London breathe a little." },
    highlights: ["Covent Garden", "Piccadilly Circus", "自由活動"],
    route: [
      { label: { zh: "上午｜街區醒來", en: "Morning" }, text: { zh: "上午先走 Covent Garden，把倫敦比較輕鬆的一面留在今天。", en: "Begin around Covent Garden and let the day start on London’s lighter side." } },
      { label: { zh: "中午｜午間留白", en: "Noon" }, text: { zh: "中午可以挑一間順眼的餐廳或咖啡店，讓這天不要太像趕場。", en: "Keep lunch open enough for whichever place feels right that day." } },
      { label: { zh: "下午｜沿途亮點", en: "Afternoon" }, text: { zh: "下午慢慢接到 Piccadilly Circus，沿途就把想逛的地方順著看。", en: "Ease toward Piccadilly Circus and let the route itself guide the afternoon." } },
      { label: { zh: "夜晚｜城市自由時間", en: "Evening" }, text: { zh: "今晚適合把剩下想補的地方留進來，也可以直接早點回飯店。", en: "Use the evening for unfinished stops or simply return early." } }
    ],
    notes: ["這天最好不要排太硬，因為隔天還要接 Eurostar。", "如果前兩天有想回頭再看的地方，就留在今天。"],
    tickets: ["以步行和市區交通為主。"]
  },
  {
    id: "day-8",
    day: "Day 8",
    date: "7/7",
    city: { zh: "London → Paris", en: "London → Paris" },
    theme: { zh: "離開倫敦，進入巴黎第一眼", en: "Leaving London and stepping into Paris" },
    intro: { zh: "搭 Eurostar 進巴黎，是這趟旅程最漂亮的一次城市切換。白天從倫敦出發，晚上就能把巴黎鐵塔和夜景接進旅程裡。", en: "The Eurostar move turns the trip into its French chapter, with Paris waiting at the end of the day." },
    highlights: ["St Pancras", "Eurostar", "Paris Gare du Nord", "Eiffel Tower"],
    route: [
      { label: { zh: "上午｜倫敦收尾", en: "Morning" }, text: { zh: "早上先整理行李，預留時間前往 St Pancras。", en: "Pack up in the morning and leave enough time for St Pancras." } },
      { label: { zh: "中午｜跨國移動", en: "Noon" }, text: { zh: "Eurostar 讓這段移動很俐落，從一個城市中心直接接到另一個城市中心。", en: "Eurostar keeps the move clean: city centre to city centre." } },
      { label: { zh: "下午｜巴黎初見", en: "Afternoon" }, text: { zh: "抵達巴黎後先移動到飯店，把步調放慢，再開始巴黎第一段街景。", en: "After arriving in Paris, head to the hotel first and ease into the city." } },
      { label: { zh: "夜晚｜城市夜色", en: "Evening" }, text: { zh: "晚上可以把鐵塔或周邊夜景留給巴黎第一眼。", en: "Leave the Eiffel Tower or a nearby night view for Paris’s first impression." } }
    ],
    notes: ["Eurostar 上車前就會完成護照檢查，提早到站比較安心。", "這天的美感在於城市切換本身，不必再塞滿其他景點。"],
    tickets: ["Eurostar 票待訂；若想上鐵塔需另外查正式票。"]
  },
  {
    id: "day-9",
    day: "Day 9",
    date: "7/8",
    city: { zh: "Paris", en: "Paris" },
    theme: { zh: "博物館日與塞納河一帶的步調", en: "A museum day with a slower Paris pace" },
    intro: { zh: "今天把焦點留給羅浮宮。前後不必再塞太多行程，讓一整天可以專心待在博物館和巴黎的街景裡。", en: "This day gives its weight to the Louvre, with enough air around it to keep the city from feeling rushed." },
    highlights: ["Louvre Museum", "巴黎街景", "河岸散步"],
    route: [
      { label: { zh: "上午｜核心景點", en: "Morning" }, text: { zh: "上午直接把重心放在羅浮宮，讓最重要的博物館留在精神最好的時段。", en: "Use the clearest part of the day for the Louvre itself." } },
      { label: { zh: "中午｜午間風味", en: "Noon" }, text: { zh: "中午附近簡單用餐，讓節奏不要被趕路切碎。", en: "Keep lunch nearby so the day does not break apart into too much movement." } },
      { label: { zh: "下午｜沿途亮點", en: "Afternoon" }, text: { zh: "下午留給周邊街景或河岸散步，讓博物館日有呼吸。", en: "Use the afternoon for the surrounding streets or a quieter river walk." } },
      { label: { zh: "夜晚｜今晚落腳", en: "Evening" }, text: { zh: "晚上回飯店休息，讓巴黎的節奏慢慢沉下來。", en: "Return to the hotel and let the pace settle." } }
    ],
    notes: ["羅浮宮這天不建議再排太多別的大景點。", "如果想拍照，前後留一點散步時間會更舒服。"],
    tickets: ["Louvre 門票請依官網時段確認。"]
  },
  {
    id: "day-10",
    day: "Day 10",
    date: "7/9",
    city: { zh: "Paris", en: "Paris" },
    theme: { zh: "大道景觀、凱旋門與巴黎主景", en: "Grand boulevards, the Arc, and a classic Paris scene" },
    intro: { zh: "今天比較像巴黎城市主景的一天。香榭麗舍大道和凱旋門放在一起，讓城市的尺度感和華麗感在同一段路裡慢慢出來。", en: "This day belongs to Paris in its broad, ceremonial, and more cinematic scale." },
    highlights: ["Champs-Elysees", "Arc de Triomphe", "精品購物"],
    route: [
      { label: { zh: "上午｜城市主景", en: "Morning" }, text: { zh: "上午可以先往凱旋門或大道一帶移動，讓視線先打開。", en: "Move toward the Arc or the avenue in the morning and let the city open wide." } },
      { label: { zh: "中午｜午間風味", en: "Noon" }, text: { zh: "中午沿著大道附近找餐廳或咖啡館，保留一點巴黎式停留。", en: "Use the avenue or nearby streets for a slower lunch break." } },
      { label: { zh: "下午｜沿途亮點", en: "Afternoon" }, text: { zh: "下午再把精品街與周邊想逛的店一路接起來。", en: "Use the afternoon to fold in nearby shopping or any boutiques that matter most." } },
      { label: { zh: "夜晚｜城市餘韻", en: "Evening" }, text: { zh: "晚上可以把巴黎這一段最華麗的城市印象收進來。", en: "Let the evening hold on to the most polished side of Paris." } }
    ],
    notes: ["這天適合把購物和景觀放在一起，不用拆成太多點。", "如果體力夠，再看要不要進一步延伸夜景。"],
    tickets: ["街景免費，若進 Arc 需另查票。"]
  },
  {
    id: "day-11",
    day: "Day 11",
    date: "7/10",
    city: { zh: "Paris", en: "Paris" },
    theme: { zh: "最後採買與塞納河收尾", en: "Final shopping and a Seine-side close" },
    intro: { zh: "巴黎最後一天不必再用力衝景點，留給採買、整理與塞納河邊的慢慢收尾，反而更像旅行真正結束前的樣子。", en: "The final Paris day works best when it softens rather than accelerates, leaving room for purchases and the Seine." },
    highlights: ["Galeries Lafayette", "Seine", "遊船", "最後採買"],
    route: [
      { label: { zh: "上午｜最後採買", en: "Morning" }, text: { zh: "上午把想補買的東西集中處理，讓行李和購物都能有條理地收尾。", en: "Use the morning for last shopping and to make the suitcase logic easier." } },
      { label: { zh: "中午｜午間風味", en: "Noon" }, text: { zh: "中午簡單休息一下，讓最後一天不要又變成趕行程。", en: "Keep lunch calm and avoid turning the final day into another rush." } },
      { label: { zh: "下午｜河岸步調", en: "Afternoon" }, text: { zh: "下午把巴黎交給塞納河，讓城市以比較柔和的方式收尾。", en: "Give the afternoon to the Seine so the city can close in a gentler way." } },
      { label: { zh: "夜晚｜今晚落腳", en: "Evening" }, text: { zh: "回飯店整理明天的航班文件與行李，讓返程日輕一點。", en: "Return to the hotel and get tomorrow’s flight documents and luggage in order." } }
    ],
    notes: ["塞納河遊船可視體力和天氣決定。", "晚上先把隔天回程串接資料整理好。"],
    tickets: ["遊船票依實際選擇而定。"]
  },
  {
    id: "day-12",
    day: "Day 12",
    date: "7/11-7/12",
    city: { zh: "Paris → Manchester → Heathrow → Taipei", en: "Paris → Manchester → Heathrow → Taipei" },
    theme: { zh: "巴黎收束、歐洲段接駁與返台", en: "Closing Paris and connecting all the way home" },
    intro: { zh: "最後一天的重點不是景點，而是把回程接得乾淨。巴黎到曼徹斯特、再到希斯洛，最後回台北，這整段需要留出足夠的餘裕。", en: "The last day is about clean connections rather than extra sightseeing, keeping the route back home steady all the way through." },
    highlights: ["AF1068", "CDG T2E", "BA1371", "CI82"],
    route: [
      { label: { zh: "上午｜離開巴黎", en: "Morning" }, text: { zh: "上午只保留最必要的移動，提早前往 CDG。", en: "Keep only the essential movement in the morning and head early to CDG." } },
      { label: { zh: "中午｜巴黎回曼徹斯特", en: "Noon" }, text: { zh: "法航商務艙這一段是回程串接的起點，先把節奏穩住。", en: "The Air France business segment starts the homeward chain, so keep things smooth and steady." } },
      { label: { zh: "下午｜英國境內轉場", en: "Afternoon" }, text: { zh: "抵達曼徹斯特後，接著再轉往希斯洛。", en: "After Manchester, move straight into the Heathrow connection." } },
      { label: { zh: "夜晚｜長途返台", en: "Evening" }, text: { zh: "CI82 把這趟旅程真正收回台北，最後就只剩休息和回家。", en: "CI82 closes the journey and turns it fully toward home." } }
    ],
    notes: ["7/11 上午不要再排巴黎景點。", "不要跳過 MAN-LHR 航段，希斯洛轉機要跟著 Flight Connections 走。"],
    tickets: ["AF 歐洲段：約 EUR 354.05 / NT$12,930。"]
  }
];

const dailyGuideSections = [
  {
    id: "chapter-arrival",
    range: "6/29–6/30",
    title: { zh: "抵達歐洲與進入會議前夕", en: "Arrival in Europe and the eve of the conference" },
    lead: { zh: "這一段把長途飛行、法蘭克福轉機散步和曼徹斯特落腳接在一起，像是旅程的開場。", en: "This chapter connects the long-haul flight, the Frankfurt layover walk, and the first evening in Manchester." },
    dayIds: ["day-1"]
  },
  {
    id: "chapter-manchester",
    range: "7/1–7/3",
    title: { zh: "曼徹斯特會議主段", en: "The Manchester conference chapter" },
    lead: { zh: "AIB 2026 是整趟旅程的核心，這幾天圍繞著會議節奏、發表與交流慢慢展開。", en: "AIB 2026 stays at the center of the route, with these days shaped by sessions, presentations, and conference conversations." },
    dayIds: ["day-2", "day-3", "day-4"]
  },
  {
    id: "chapter-london",
    range: "7/4–7/6",
    title: { zh: "倫敦城市段", en: "The London city chapter" },
    lead: { zh: "離開曼徹斯特之後，旅程回到城市漫步、百貨與街區節奏，讓倫敦慢慢展開。", en: "After Manchester, the route returns to city walks, department stores, and an easier London rhythm." },
    dayIds: ["day-5", "day-6", "day-7"]
  },
  {
    id: "chapter-paris",
    range: "7/7–7/10",
    title: { zh: "巴黎段與旅行收尾", en: "Paris and the softer travel finish" },
    lead: { zh: "從 Eurostar 進巴黎之後，把博物館、河岸與採買留在最後幾天，讓旅程慢慢收束。", en: "Once Eurostar reaches Paris, the final days shift toward museums, river walks, and a softer close." },
    dayIds: ["day-8", "day-9", "day-10", "day-11"]
  },
  {
    id: "chapter-return",
    range: "7/11–7/12",
    title: { zh: "返程串接", en: "The route home" },
    lead: { zh: "最後一天不拼景點，而是把巴黎、曼徹斯特與希斯洛的接駁走順。", en: "The final chapter is about clean connections rather than one last round of sightseeing." },
    dayIds: ["day-12"]
  }
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
      { label: { zh: "場次", en: "Session" }, value: { zh: "Session 5.1.20", en: "Session 5.1.20" } },
      { label: { zh: "主題軌", en: "Track" }, value: { zh: "Track 4. Global Strategy and Organization", en: "Track 4. Global Strategy and Organization" } },
      { label: { zh: "時間", en: "Time" }, value: "09:30-10:45" },
      { label: { zh: "地點", en: "Room" }, value: "2217 (UP)" }
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
      { id: "registration-program", text: { zh: "Competitive 與 Interactive 的正式 session 時間都已補上。", en: "Both Competitive and Interactive session times are already added." } }
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
  return value?.[state.lang] || value?.en || value?.zh || "";
}

function currentDocumentLang() {
  return {
    zh: "zh-Hant",
    en: "en",
    fr: "fr",
    de: "de"
  }[state.lang] || "en";
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
    <nav class="mobile-section-tabs" aria-label="${state.lang !== "zh" ? "Overview section tabs" : "總覽區塊導覽"}">
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
            <div><span>GBP</span><strong>${escapeHtml(row.amounts?.GBP || "-")}</strong></div>
            <div><span>TWD</span><strong>${escapeHtml(row.amounts?.TWD || "-")}</strong></div>
            <div><span>EUR</span><strong>${escapeHtml(row.amounts?.EUR || "-")}</strong></div>
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
    const lang = localStorage.getItem("aib-lang");
    return ["zh", "en", "fr", "de"].includes(lang) ? lang : "zh";
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
  const navIds = primaryNavPageIds.includes(pageId) ? primaryNavPageIds : [...primaryNavPageIds, pageId];
  const primaryNav = navIds.map((id) => pages.find((page) => page.id === id)).filter(Boolean);
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
  const langButtons = languageOptions
    .map((lang) => `
      <button class="pill-btn${state.lang === lang.id ? " active" : ""}" type="button" data-lang="${lang.id}" aria-label="${state.lang === "zh" ? `切換為${t(lang.name)}` : `Switch language to ${lang.name.en}`}">${lang.label}</button>
    `)
    .join("");
  const currencyButtons = currencies
    .map((currency) => {
      const label = state.lang !== "zh" ? currency.id : t(currency.label);
      return `<button class="pill-btn${state.currency === currency.id ? " active" : ""}" type="button" data-currency="${currency.id}" aria-label="${state.lang !== "zh" ? `Switch currency to ${currency.id}` : `切換為${t(currency.label)}` }">${escapeHtml(label)}</button>`;
    })
    .join("");

  document.querySelector("[data-site-header]").innerHTML = `
    <div class="language-selector" aria-label="${state.lang !== "zh" ? "Language and currency controls" : "語言與貨幣控制"}">
      <div class="lang-buttons" role="tablist" aria-label="${state.lang !== "zh" ? "Language switcher" : "語言切換"}">
        ${langButtons}
      </div>
      <div class="currency-buttons" role="tablist" aria-label="${state.lang !== "zh" ? "Currency switcher" : "貨幣切換"}">
        ${currencyButtons}
      </div>
    </div>
    <nav class="main-nav handbook-main-nav" aria-label="${state.lang !== "zh" ? "Primary page tabs" : "主要分頁"}">
      ${nav}
    </nav>
  `;

  document.querySelector("[data-site-footer]").innerHTML = `
    <footer class="site-footer handbook-footer">
        <p>${state.lang !== "zh" ? "AIB 2026 Manchester · Europe travel handbook" : "AIB 2026 Manchester · 英法歐洲旅程手冊"}</p>
      <a href="./index.html">${state.lang !== "zh" ? "Back to overview" : "回到總覽"}</a>
    </footer>
    ${pageId === "home"
      ? ""
      : `<nav class="bottom-nav" aria-label="${state.lang !== "zh" ? "Primary mobile navigation" : "主要手機導覽"}">${bottomNav}</nav>`
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
    "Europe Notes": "Notes Europe",
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
    "Europe Notes": "Europa-Hinweise",
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
      if (!node.nodeValue?.trim()) return NodeFilter.FILTER_REJECT;
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
    const signalCards = [
      [{ zh: "會議主段", en: "Conference base" }, { zh: "Manchester · 6/30–7/3", en: "Manchester · Jun 30-3 Jul" }],
      [{ zh: "後段路線", en: "Later route" }, { zh: "London · Paris", en: "London · Paris" }],
      [{ zh: "住宿", en: "Hotel" }, "INNSiDE Manchester"],
      [{ zh: "發表", en: "Papers" }, { zh: "Competitive + Interactive", en: "Competitive + Interactive" }]
    ];
    const heroFacts = [
      [{ zh: "旅程日期", en: "Trip dates" }, { zh: "2026/06/29 – 2026/07/12", en: "2026/06/29 – 2026/07/12" }],
      [{ zh: "主要城市", en: "Cities" }, { zh: "法蘭克福 · 曼徹斯特 · 倫敦 · 巴黎", en: "Frankfurt · Manchester · London · Paris" }],
      [{ zh: "發表場次", en: "Sessions" }, { zh: "兩場都已確認", en: "Both sessions confirmed" }],
      [{ zh: "目前狀態", en: "Status" }, { zh: "主段已定，後段細節持續補齊", en: "Core route set, later details still being refined" }]
    ];
    return `
      <div class="editorial-hero mobile-dashboard-hero handbook-home-hero hero-content">
        <p class="eyebrow">${state.lang !== "zh" ? "Academic Conference Travel Handbook" : "學術會議旅程手冊"}</p>
        <h1>${state.lang !== "zh" ? "AIB 2026 Manchester" : "AIB 2026 Manchester"}</h1>
        <div class="hero-subtitle">${state.lang !== "zh" ? "UK & France Travel Handbook" : "英國・法國旅遊手冊"}</div>
        <div class="hero-dates">${state.lang !== "zh" ? "2026 / 06 / 29 - 2026 / 07 / 12" : "2026 / 06 / 29 - 2026 / 07 / 12"}</div>
        <div class="destinations">${state.lang !== "zh" ? "Frankfurt • Manchester • London • Paris" : "法蘭克福 • 曼徹斯特 • 倫敦 • 巴黎"}</div>
        <p class="hero-intro">${state.lang !== "zh" ? "The route begins with a brief Frankfurt layover, settles first into Manchester for AIB 2026, then opens into London streets before ending with museums, shopping, and long dinners in Paris." : "旅程從法蘭克福短暫轉機開始，先在曼徹斯特完成 AIB 2026 的學術主段，再轉進倫敦的城市節奏，最後以巴黎的街景、博物館與法式餐桌收尾。"}</p>
        <div class="hero-signal-strip" aria-label="${state.lang !== "zh" ? "Trip snapshot" : "旅程摘要"}">
          ${signalCards.map(([label, value]) => `
            <article class="hero-signal-card">
              <span>${escapeHtml(t(label))}</span>
              <strong>${escapeHtml(t(value))}</strong>
            </article>
          `).join("")}
        </div>
        <div class="hero-actions editorial-hero-actions">
          <a class="button primary" href="#days">${state.lang !== "zh" ? "Open the daily guide" : "打開每日行程"}</a>
          <a class="button secondary" href="#highlights">${state.lang !== "zh" ? "See the trip highlights" : "先看旅程亮點"}</a>
        </div>
        <div class="hero-facts">
          ${heroFacts.map(([label, value]) => `
            <article class="hero-fact">
              <span>${escapeHtml(t(label))}</span>
              <strong>${escapeHtml(t(value))}</strong>
            </article>
          `).join("")}
        </div>
      </div>
    `;
  }
  return `
    <div class="hero-grid handbook-hero-grid chapter-hero-grid">
      <section class="hero-copy chapter-hero-card hero-content">
        <p class="eyebrow">${escapeHtml(t(hero.kicker))}</p>
        <h1>${heroTitle}</h1>
        <p class="hero-serif-note">${escapeHtml(t(hero.lead))}</p>
        <div class="chapter-hero-meta">
          <article class="chapter-hero-fact">
            <span>${state.lang !== "zh" ? "Trip window" : "旅程日期"}</span>
            <strong>2026/06/29 – 2026/07/12</strong>
          </article>
          <article class="chapter-hero-fact">
            <span>${state.lang !== "zh" ? "Main cities" : "主要城市"}</span>
            <strong>${state.lang !== "zh" ? "Frankfurt · Manchester · London · Paris" : "法蘭克福 · 曼徹斯特 · 倫敦 · 巴黎"}</strong>
          </article>
          <article class="chapter-hero-fact">
            <span>${state.lang !== "zh" ? "Focus" : "這頁重點"}</span>
            <strong>${escapeHtml(t(pageDescriptions[pageId] || { zh: "旅程章節", en: "Travel chapter" }))}</strong>
          </article>
        </div>
        <div class="hero-actions">
          <a class="button primary" href="./index.html">${state.lang !== "zh" ? "Back to overview" : "回到旅程總覽"}</a>
          <a class="button secondary" href="./links.html">${state.lang !== "zh" ? "Useful links" : "常用連結"}</a>
        </div>
      </section>
    </div>
  `;
}

function renderQuickNav(pageId) {
  return "";
}

function renderReadingGuide(pageId) {
  return "";
}

function renderHome() {
  return `
    <section class="section home-handbook-section" id="overview">
      <article class="section-card intro-card handbook-intro-card">
        ${sectionHeading(
          state.lang !== "zh" ? "Travel Overview" : "旅程總覽",
          state.lang !== "zh" ? "Frankfurt opens the route, Manchester anchors the conference, and London with Paris shape the later chapters." : "法蘭克福是開場，曼徹斯特是核心，倫敦與巴黎則把後半段慢慢展開。",
          state.lang !== "zh" ? "After the Frankfurt layover, the route settles first into Manchester for AIB 2026, then turns toward London and finishes in Paris with museums, river walks, and longer evenings." : "從法蘭克福轉機開始，先在曼徹斯特把 AIB 2026 的會議主段走穩，再接上倫敦與巴黎，讓後半段回到城市散步、博物館與晚餐的節奏。"
        )}
        <div class="journey-route-grid">
          ${journeyRouteCards.map(renderJourneyRouteCard).join("")}
        </div>
        <div class="summary-grid home-overview-grid handbook-overview-grid">
          ${homeOverviewCards.map((card) => `
            <article class="summary-card travel-overview-card">
              ${renderAppTag(card.tag)}
              <h3>${escapeHtml(t(card.title))}</h3>
              <strong>${escapeHtml(t(card.value))}</strong>
              <p>${escapeHtml(t(card.note))}</p>
            </article>
          `).join("")}
        </div>
      </article>
    </section>

    <section class="section home-handbook-section" id="snapshot">
      <article class="section-card handbook-snapshot-card">
        ${sectionHeading(
          state.lang !== "zh" ? "Trip Snapshot" : "旅程摘要",
          state.lang !== "zh" ? "A compact reading of the whole route." : "先把整趟旅程濃縮成一頁。",
          state.lang !== "zh" ? "This is the fast way to understand where the conference sits, how many cities are involved, and what kind of rhythm the route has." : "這一區先回答幾個最重要的問題：會議放在哪裡、整趟會去哪些城市、移動感大不大、住宿與體力要留意什麼。"
        )}
        <div class="snapshot-grid">
          ${tripSnapshotCards.map(renderSnapshotCard).join("")}
        </div>
      </article>
    </section>

    <section class="section home-handbook-section" id="highlights">
      <article class="section-card handbook-highlights-card">
        ${sectionHeading(
          state.lang !== "zh" ? "Journey Highlights" : "旅程亮點",
          state.lang !== "zh" ? "The chapters that define the trip." : "把這趟旅程最有畫面的段落先拉出來。",
          state.lang !== "zh" ? "Rather than a long list of places, these cards keep the trip in five clearer scenes." : "不用先記所有地點，先抓住整趟旅程的幾個核心畫面：轉機、城市、會議、巴黎，以及城市之間的移動。"
        )}
        <div class="journey-highlight-grid">
          ${journeyHighlights.map(renderJourneyHighlightCard).join("")}
        </div>
      </article>
    </section>

    <section class="section home-handbook-section" id="days">
      <article class="section-card handbook-days-card">
        ${sectionHeading(
          state.lang !== "zh" ? "Day-by-Day Preview" : "每日行程預覽",
          state.lang !== "zh" ? "Read the route chapter by chapter before moving into the full day guide." : "先把旅程讀成幾個章節，再往下進到每天的細節。",
          state.lang !== "zh" ? "Instead of twelve flat cards, the route is grouped the way the trip will actually feel on the road: arrival, conference, London, Paris, and the way home." : "這一段不再只是十二張平鋪的卡，而是照旅途中真正會感受到的節奏來分：抵達、會議主段、倫敦、巴黎，最後再接回程。"
        )}
        <div class="day-chapter-grid">
          ${dailyGuideSections.map(renderDayChapterPreview).join("")}
        </div>
      </article>
    </section>

    <section class="section home-handbook-section" id="info">
      <article class="section-card handbook-practical-card">
        ${sectionHeading(
          state.lang !== "zh" ? "Practical Info" : "實用資訊",
          state.lang !== "zh" ? "Keep the details tidy, but out of the way of the main travel story." : "把會一直用到的實用資訊收乾淨，但不讓它搶走旅程主畫面。",
          state.lang !== "zh" ? "Flights, stays, transport, conference notes, packing, and payment reminders are grouped here for the quieter planning layer." : "航班、住宿、交通、會議、行李和付款資訊都留在這裡。需要時很好找，但不會擠在首頁最前面。"
        )}
        <div class="practical-guide-grid">
          ${practicalGuideSections.map((section, index) => renderPracticalGuideCard(section, index)).join("")}
        </div>
      </article>
    </section>
  `;
}

const pageDescriptions = {
  conference: { zh: "會議日期、註冊狀態與現場節奏。", en: "Conference dates, registration status, and event rhythm." },
  flights: { zh: "去程、回程、歐洲段與轉機整理。", en: "Outbound, return, Europe segment, and transfer notes." },
  transport: { zh: "火車、Eurostar 與市內交通。", en: "Train, Eurostar, and local transit." },
  stay: { zh: "已訂住宿、待定住宿與區域決策。", en: "Booked stay, pending stay, and area decisions." },
  itinerary: { zh: "時間軸行程、景點費用與回程提醒。", en: "Timeline itinerary, attraction costs, and return notes." },
  shopping: { zh: "茶葉、餅乾、果醬與超市購物清單。", en: "Tea, biscuits, preserves, and useful shopping notes." },
  souvenirs: { zh: "英國、法國、德國伴手禮整理。", en: "Souvenir notes for the UK, France, and Germany." },
  map: { zh: "主要地點、每日路線與地圖連結。", en: "Key locations, daily routes, and map links." },
  budget: { zh: "可報帳和自費分開整理，金額也一起換算。", en: "Funding and expense notes, with three-currency amounts." },
  reminders: { zh: "還沒處理完的事和出發前最後再看一次的提醒。", en: "Pending items and final travel notes." },
  firstTime: { zh: "這趟歐洲行前可先看的實用提醒。", en: "Practical notes to review before this Europe trip." },
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

function renderSnapshotCard(card) {
  return `
    <article class="snapshot-card">
      <span class="snapshot-label">${escapeHtml(t(card.label))}</span>
      <strong class="snapshot-value">${escapeHtml(t(card.value))}</strong>
      <p>${escapeHtml(t(card.note))}</p>
    </article>
  `;
}

function renderJourneyHighlightCard(item) {
  return `
    <article class="highlight-story-card">
      <div class="highlight-story-top">
        <span class="highlight-city">${escapeHtml(t(item.city))}</span>
        <span class="highlight-date">${escapeHtml(item.date)}</span>
      </div>
      <h3>${escapeHtml(t(item.title))}</h3>
      <p>${escapeHtml(t(item.body))}</p>
    </article>
  `;
}

function renderDayPreviewCard(day) {
  return `
    <a class="day-story-card" href="./itinerary.html#${escapeHtml(day.id)}">
      <div class="day-story-top">
        <span class="day-story-index">${escapeHtml(day.day)}</span>
        <span class="day-story-date">${escapeHtml(day.date)}</span>
      </div>
      <div class="day-story-city">${escapeHtml(t(day.city))}</div>
      <h3>${escapeHtml(t(day.theme))}</h3>
      <p>${escapeHtml(t(day.intro))}</p>
      <div class="day-story-highlights">
        ${day.highlights.slice(0, 4).map((item) => `<span>${escapeHtml(item)}</span>`).join("")}
      </div>
      <div class="day-story-link">${state.lang !== "zh" ? "Open the full day" : "展開當日詳細行程"}</div>
    </a>
  `;
}

function getDayGuideById(id) {
  return dailyGuides.find((day) => day.id === id) || null;
}

function renderDayChapterPreview(section) {
  const days = section.dayIds.map(getDayGuideById).filter(Boolean);
  return `
    <article class="day-chapter-card">
      <div class="day-chapter-head">
        <div>
          <span class="day-chapter-range">${escapeHtml(section.range)}</span>
          <h3>${escapeHtml(t(section.title))}</h3>
        </div>
        <span class="day-chapter-count">${state.lang !== "zh" ? `${days.length} days` : `${days.length} 天`}</span>
      </div>
      <p class="day-chapter-lead">${escapeHtml(t(section.lead))}</p>
      <div class="day-chapter-days">
        ${days.map((day) => `
          <a class="day-chapter-day" href="./itinerary.html#${escapeHtml(day.id)}">
            <span>${escapeHtml(day.day)}</span>
            <strong>${escapeHtml(t(day.theme))}</strong>
            <small>${escapeHtml(day.date)} · ${escapeHtml(t(day.city))}</small>
          </a>
        `).join("")}
      </div>
      <a class="day-chapter-link" href="./itinerary.html#${escapeHtml(section.id)}">${state.lang !== "zh" ? "Read this chapter" : "看這一段旅程"}</a>
    </article>
  `;
}

function renderJourneyRouteCard(item) {
  return `
    <article class="journey-route-card">
      <span class="journey-route-date">${escapeHtml(item.date)}</span>
      <h3>${escapeHtml(t(item.title))}</h3>
      <p>${escapeHtml(t(item.body))}</p>
    </article>
  `;
}

function renderPracticalGuideCard(section, index) {
  return `
    <details class="practical-guide-card"${index === 0 ? " open" : ""}>
      <summary>
        <div>
          <span class="practical-kicker">${state.lang !== "zh" ? "Practical Info" : "實用資訊"}</span>
          <h3>${escapeHtml(t(section.title))}</h3>
        </div>
        <span class="practical-summary">${escapeHtml(t(section.summary))}</span>
      </summary>
      <div class="practical-guide-body">
        ${renderList(section.points, "plain-list")}
        <a class="text-link-button" href="${escapeHtml(section.href)}">${escapeHtml(t(section.cta))}</a>
      </div>
    </details>
  `;
}

function dayGuideMeta(day) {
  const metaMap = {
    "day-1": [
      [{ zh: "移動方式", en: "Movement" }, { zh: "CI61 / 法蘭克福散步 / LH946", en: "CI61 / Frankfurt walk / LH946" }],
      [{ zh: "今晚落腳", en: "Tonight" }, "INNSiDE Manchester"],
      [{ zh: "這天重心", en: "Focus" }, { zh: "順利落地、調時差、把文件放好", en: "Land smoothly, adjust to time, and keep the documents in order" }]
    ],
    "day-2": [
      [{ zh: "移動方式", en: "Movement" }, { zh: "步行 / 會場動線", en: "Walking / conference venue flow" }],
      [{ zh: "今晚落腳", en: "Tonight" }, "INNSiDE Manchester"],
      [{ zh: "這天重心", en: "Focus" }, { zh: "先把會議節奏走穩", en: "Settle into the conference rhythm" }]
    ],
    "day-3": [
      [{ zh: "移動方式", en: "Movement" }, { zh: "步行 / 市內交通", en: "Walking / local transit" }],
      [{ zh: "今晚落腳", en: "Tonight" }, "INNSiDE Manchester"],
      [{ zh: "這天重心", en: "Focus" }, { zh: "會議內容與發表準備", en: "Conference sessions and presentation prep" }]
    ],
    "day-4": [
      [{ zh: "移動方式", en: "Movement" }, { zh: "會議場內移動", en: "Movement around the conference venue" }],
      [{ zh: "今晚落腳", en: "Tonight" }, "INNSiDE Manchester"],
      [{ zh: "這天重心", en: "Focus" }, { zh: "Interactive 發表與會議收束", en: "Interactive session and closing the conference chapter" }]
    ],
    "day-5": [
      [{ zh: "移動方式", en: "Movement" }, { zh: "Avanti West Coast", en: "Avanti West Coast" }],
      [{ zh: "今晚落腳", en: "Tonight" }, { zh: "倫敦住宿", en: "London hotel" }],
      [{ zh: "這天重心", en: "Focus" }, { zh: "城市切換與倫敦第一眼", en: "The city change and London’s first impression" }]
    ],
    "day-6": [
      [{ zh: "移動方式", en: "Movement" }, { zh: "Tube / 步行", en: "Tube / walking" }],
      [{ zh: "今晚落腳", en: "Tonight" }, { zh: "倫敦住宿", en: "London hotel" }],
      [{ zh: "這天重心", en: "Focus" }, { zh: "精品街區與城市光澤", en: "Shopping streets and London’s polished side" }]
    ],
    "day-7": [
      [{ zh: "移動方式", en: "Movement" }, { zh: "步行 / Tube", en: "Walking / Tube" }],
      [{ zh: "今晚落腳", en: "Tonight" }, { zh: "倫敦住宿", en: "London hotel" }],
      [{ zh: "這天重心", en: "Focus" }, { zh: "自由留白，替明天的 Eurostar 留力", en: "Leave the day open and save energy for Eurostar" }]
    ],
    "day-8": [
      [{ zh: "移動方式", en: "Movement" }, { zh: "Eurostar", en: "Eurostar" }],
      [{ zh: "今晚落腳", en: "Tonight" }, "Pullman Paris Tour Eiffel"],
      [{ zh: "這天重心", en: "Focus" }, { zh: "從倫敦順順轉進巴黎", en: "A clean shift from London into Paris" }]
    ],
    "day-9": [
      [{ zh: "移動方式", en: "Movement" }, { zh: "Metro / 步行", en: "Metro / walking" }],
      [{ zh: "今晚落腳", en: "Tonight" }, "Pullman Paris Tour Eiffel"],
      [{ zh: "這天重心", en: "Focus" }, { zh: "把時間留給羅浮宮與周邊街景", en: "Give the day to the Louvre and nearby streets" }]
    ],
    "day-10": [
      [{ zh: "移動方式", en: "Movement" }, { zh: "Metro / 步行", en: "Metro / walking" }],
      [{ zh: "今晚落腳", en: "Tonight" }, "Pullman Paris Tour Eiffel"],
      [{ zh: "這天重心", en: "Focus" }, { zh: "巴黎主景、香榭麗舍與凱旋門", en: "The main Paris landmarks and boulevard rhythm" }]
    ],
    "day-11": [
      [{ zh: "移動方式", en: "Movement" }, { zh: "Metro / 步行 / 視情況搭船", en: "Metro / walking / optional cruise" }],
      [{ zh: "今晚落腳", en: "Tonight" }, "Pullman Paris Tour Eiffel"],
      [{ zh: "這天重心", en: "Focus" }, { zh: "最後採買，替巴黎留一個柔和收尾", en: "Final shopping and a softer Paris close" }]
    ],
    "day-12": [
      [{ zh: "移動方式", en: "Movement" }, { zh: "AF1068 / BA1371 / CI82", en: "AF1068 / BA1371 / CI82" }],
      [{ zh: "今晚落腳", en: "Tonight" }, { zh: "回程機上", en: "Overnight on the way home" }],
      [{ zh: "這天重心", en: "Focus" }, { zh: "把巴黎、曼徹斯特與希斯洛順順接起來", en: "Keep Paris, Manchester, and Heathrow flowing cleanly" }]
    ]
  };
  return (metaMap[day.id] || []).map(([label, value]) => ({ label, value }));
}

function renderDayGuideNav() {
  return `
    <nav class="day-guide-nav" aria-label="${state.lang !== "zh" ? "Daily guide navigation" : "每日行程導覽"}">
      ${dailyGuides.map((day) => `
        <a class="day-guide-link" href="#${escapeHtml(day.id)}">
          <span>${escapeHtml(day.day)}</span>
          <strong>${escapeHtml(day.date)}</strong>
        </a>
      `).join("")}
    </nav>
  `;
}

function renderDayGuideCard(day, index, openByDefault = false) {
  const meta = dayGuideMeta(day);
  return `
    <article class="day-guide-card" id="${escapeHtml(day.id)}">
      <details class="day-guide-panel"${openByDefault ? " open" : ""}>
        <summary class="day-guide-summary">
          <div class="day-guide-header">
            <div>
              <span class="day-guide-index">${escapeHtml(day.day)}</span>
              <span class="day-guide-date">${escapeHtml(day.date)}</span>
            </div>
            <span class="day-guide-city">${escapeHtml(t(day.city))}</span>
          </div>
          <h3>${escapeHtml(t(day.theme))}</h3>
          <p class="day-guide-intro">${escapeHtml(t(day.intro))}</p>
          <div class="day-story-highlights">
            ${day.highlights.map((item) => `<span>${escapeHtml(item)}</span>`).join("")}
          </div>
        </summary>
        <div class="day-guide-body">
          <div class="guide-meta-row">
            <div>
              <span>${state.lang !== "zh" ? "City" : "城市"}</span>
              <strong>${escapeHtml(t(day.city))}</strong>
            </div>
            <div>
              <span>${state.lang !== "zh" ? "Day theme" : "當日主題"}</span>
              <strong>${escapeHtml(t(day.theme))}</strong>
            </div>
            ${meta.map((item) => `
              <div>
                <span>${escapeHtml(t(item.label))}</span>
                <strong>${escapeHtml(t(item.value))}</strong>
              </div>
            `).join("")}
          </div>
          <div class="guide-block">
            <div class="guide-block-title">${state.lang !== "zh" ? "Route flow" : "今日路線"}</div>
            <div class="day-moment-grid">
              ${day.route.map((step) => `
                <article class="moment-card">
                  <span>${escapeHtml(t(step.label))}</span>
                  <p>${escapeHtml(t(step.text))}</p>
                </article>
              `).join("")}
            </div>
          </div>
          <div class="guide-detail-grid">
            <article class="guide-detail-card">
              <div class="guide-detail-title">${state.lang !== "zh" ? "今日亮點" : "今日亮點"}</div>
              ${renderList(day.highlights, "plain-list")}
            </article>
            <article class="guide-detail-card">
              <div class="guide-detail-title">${state.lang !== "zh" ? "貼心提醒" : "貼心提醒"}</div>
              ${renderList(day.notes, "plain-list")}
            </article>
            <article class="guide-detail-card">
              <div class="guide-detail-title">${state.lang !== "zh" ? "花費參考" : "花費參考"}</div>
              ${renderList(day.tickets, "plain-list")}
            </article>
          </div>
        </div>
      </details>
    </article>
  `;
}

function renderDayGuideSection(section, sectionIndex) {
  const days = section.dayIds.map(getDayGuideById).filter(Boolean);
  return `
    <section class="day-guide-section" id="${escapeHtml(section.id)}">
      <div class="day-guide-section-head">
        <div class="day-guide-section-copy">
          <span class="day-guide-section-range">${escapeHtml(section.range)}</span>
          <h3>${escapeHtml(t(section.title))}</h3>
          <p>${escapeHtml(t(section.lead))}</p>
        </div>
      </div>
      <div class="day-guide-list">
        ${days.map((day, index) => renderDayGuideCard(day, index, sectionIndex === 0 && index === 0)).join("")}
      </div>
    </section>
  `;
}

function renderDesktopPageShell(pageId, options, content) {
  const items = sectionNav[pageId] || [];
  const meta = options.meta || [];
  return `
    <div class="desktop-page-shell handbook-page-shell">
      <section class="section compact-section page-intro-section" id="overview">
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
    note: { zh: "把會議資訊、發表場次和現場提醒放在同一頁。", en: "Conference details, presentation slots, and session notes are gathered here." },
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
      ${sectionHeading(state.lang !== "zh" ? "Conference Status" : "會議狀態", state.lang !== "zh" ? "Core conference items" : "會議核心資訊", state.lang !== "zh" ? "Only neutral conference logistics are shown here." : "這頁只保留中性的會議與文件資訊。")}
      <div class="summary-grid two">
        ${dashboardData.conferenceCards.map(renderSummaryCard).join("")}
      </div>
    </section>
    <section class="section compact-section" id="papers">
      ${sectionHeading(state.lang !== "zh" ? "Papers" : "論文", state.lang !== "zh" ? "Conference paper cards" : "會議論文卡片", state.lang !== "zh" ? "Keep the two session formats separate so preparation is easier to track." : "把兩種 session 形式分開看，準備時會比較清楚。")}
      <div class="paper-grid">
        ${paperCards.map(renderPaperCard).join("")}
      </div>
    </section>
    <section class="section compact-section" id="alerts">
      ${sectionHeading(state.lang !== "zh" ? "Alerts" : "提醒", state.lang !== "zh" ? "Conference-facing reminders" : "和會議直接相關的提醒")}
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
      ${sectionHeading(state.lang !== "zh" ? "Conference Documents" : "會議文件", state.lang !== "zh" ? "Files to keep ready" : "會議相關文件整理")}
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
    ${renderReadingGuide("transport")}
    <section class="section compact-section" id="flights">
      ${sectionHeading(state.lang !== "zh" ? "Flights" : "航班", state.lang !== "zh" ? "Flight page moved out" : "航班已獨立成頁", state.lang !== "zh" ? "Open the dedicated flight page for ticket details, transfer notes, and the Paris-Manchester segment." : "機票、轉機與巴黎回曼徹斯特的航段已獨立成頁，這裡先留交通總覽。")}
      <div class="summary-grid two">
        <article class="summary-card">
          ${statusChip("confirmed")}
          <h3>${state.lang !== "zh" ? "Dedicated flight page" : "獨立機票頁"}</h3>
          <strong>${state.lang !== "zh" ? "Outbound, return, and Europe segment" : "去程、回程與歐洲段一起看"}</strong>
          <p>${state.lang !== "zh" ? "If you want to check flight numbers, terminals, and transfer rhythm, that page is now the cleanest place." : "如果要核對航班號碼、航廈和轉機節奏，直接看機票頁會最清楚。"}</p>
          ${externalLink("./flights.html", state.lang !== "zh" ? "Open flight page" : "前往機票頁", "text-link-button")}
        </article>
        <article class="summary-card">
          ${statusChip("alert")}
          <h3>${state.lang !== "zh" ? "Keep the route in mind" : "路線先記住"}</h3>
          <strong>${state.lang !== "zh" ? "TPE → FRA → MAN · CDG → MAN → LHR → TPE" : "TPE → FRA → MAN · CDG → MAN → LHR → TPE"}</strong>
          <p>${state.lang !== "zh" ? "The return still starts from Manchester, even though the final city days are in London and Paris." : "雖然後段會在倫敦和巴黎停留，但回程機票仍然是從曼徹斯特開始接回台灣。"}</p>
        </article>
      </div>
    </section>
    <section class="section compact-section" id="transfer">
      ${sectionHeading(
        state.lang !== "zh" ? "Transfers" : "轉機資訊",
        state.lang !== "zh" ? "Frankfurt and Heathrow connection notes" : "法蘭克福與希斯洛轉機注意事項",
        state.lang !== "zh" ? "Terminals and gates can change; use the airport screens on the day." : "航廈與登機門可能調整，當天以機場螢幕與航空公司通知為準。"
      )}
      <div class="transfer-grid">
        ${tripData.transfers.map(renderTransferCard).join("")}
      </div>
    </section>
    <section class="section compact-section" id="train">
      ${sectionHeading(state.lang !== "zh" ? "Rail & Eurostar" : "火車與 Eurostar", state.lang !== "zh" ? "Manchester, London, and Paris rail links" : "曼徹斯特、倫敦與巴黎的鐵路移動")}
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
          <p>${state.lang !== "zh" ? "This is the cleanest London-to-France move: leave from St Pancras and arrive straight into central Paris at Gare du Nord." : "這段最順的做法就是直接搭 Eurostar，從 St Pancras 出發，抵達巴黎北站後就已經在市中心。"}</p>
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
          <p>${state.lang !== "zh" ? "Eurostar recommends arriving about 75 to 90 minutes early. For Standard and Plus, check-in closes 30 minutes before departure, so leave enough time for security and passport control." : "Eurostar 這段比較像搭火車和過關的混合流程。提早到站會比較從容，因為安檢、護照檢查都在上車前完成，Standard / Plus 通常會在發車前 30 分鐘關閘門。"}</p>
        </article>
      </div>
    </section>
    <section class="section compact-section" id="local">
      ${sectionHeading(state.lang !== "zh" ? "Getting Around" : "市內交通", state.lang !== "zh" ? "London and Manchester local transport" : "倫敦與曼徹斯特市內交通")}
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
    note: { zh: "去程、回程、巴黎回曼徹斯特，以及兩段轉機節奏都收在這裡。", en: "Outbound, return, the Paris-to-Manchester segment, and both transfer notes stay together here." },
    meta: [
      { label: { zh: "主路線", en: "Main route" }, value: "TPE → FRA → MAN" },
      { label: { zh: "回程", en: "Return" }, value: "CDG → MAN → LHR → TPE" },
      { label: { zh: "長轉機", en: "Long layover" }, value: { zh: "法蘭克福", en: "Frankfurt" } },
      { label: { zh: "票價", en: "Flight total" }, value: money.flight }
    ]
  }, `
    ${renderQuickNav("flights")}
    ${renderReadingGuide("flights")}
    <section class="section compact-section" id="overview">
      ${sectionHeading(state.lang !== "zh" ? "Flight Overview" : "航班總覽", state.lang !== "zh" ? "The whole route in one view" : "整段航班先看一眼", state.lang !== "zh" ? "This page keeps the long-haul tickets and the Europe segment together so the route is easier to follow." : "把國際段和歐洲段放在一起看，路線會比較直覺。")}
      <div class="summary-grid three desktop-flight-grid">
        <article class="summary-card">${statusChip("confirmed")}<h3>${state.lang !== "zh" ? "Outbound" : "去程"}</h3><strong>TPE → FRA → MAN</strong><p>${state.lang !== "zh" ? "CI 61, then LH 946 after the Frankfurt layover." : "先搭 CI 61 到法蘭克福，再接 LH 946 進曼徹斯特。"}</p></article>
        <article class="summary-card">${statusChip("self")}<h3>${state.lang !== "zh" ? "Europe segment" : "歐洲段"}</h3><strong>CDG → MAN</strong><p>${state.lang !== "zh" ? "Air France Business Standard on 11 July, then continue to the BA/CI chain." : "7/11 法航商務艙從巴黎回曼徹斯特，再接 BA 與華航返台。"}</p></article>
        <article class="summary-card">${statusChip("confirmed")}<h3>${state.lang !== "zh" ? "Homebound" : "回程"}</h3><strong>MAN → LHR → TPE</strong><p>${state.lang !== "zh" ? "Return still starts from Manchester, even if the final nights are elsewhere." : "即使後面在倫敦、巴黎停留，回程還是從曼徹斯特開始。"}</p></article>
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
        <article><h3>${state.lang !== "zh" ? "Return reminder" : "回程提醒"}</h3><p>${state.lang !== "zh" ? "Do not skip the MAN-LHR segment. The ticket chain still starts from Manchester." : "不要跳過 MAN-LHR 這一段，整張回程票還是從曼徹斯特開始。"}</p></article>
      </div>
    </section>
  `);
}

function renderStay() {
  return renderDesktopPageShell("stay", {
    label: { zh: "Hotel", en: "Hotel" },
    title: { zh: "住宿筆記", en: "Stay Notes" },
    note: { zh: "曼徹斯特已訂，倫敦與巴黎則另外整理成後半段住宿方向。", en: "Manchester is booked, while London and Paris are kept as the later stay plan." },
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
      <div class="section-label">${state.lang !== "zh" ? "Stay Plan" : "住宿安排"}</div>
      <h2>${state.lang !== "zh" ? "Manchester is fixed, and the later-city stays are lined up." : "曼徹斯特已定，後段城市住宿也排出方向了。"}</h2>
      <p class="lead">${state.lang !== "zh" ? "The conference hotel is fixed first, then London and Paris are compared by access, atmosphere, and route convenience." : "先把會議那幾天住穩，再把倫敦與巴黎依交通、氣質和動線排出首選。"}</p>
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
                <a class="stay-map-link" href="${escapeHtml(stay.link)}" target="_blank" rel="noreferrer noopener">${state.lang !== "zh" ? "View hotel" : "查看飯店"}</a>
              </div>
            </div>
            <div class="stay-detail-chips">
              <span>${state.lang !== "zh" ? "Jun 30 – Jul 5, 2026" : "2026/06/30 – 2026/07/05"}</span>
              <span>${state.lang !== "zh" ? "5 nights" : "5 晚"}</span>
              <span>${state.lang !== "zh" ? "The INNSiDE Room Twin Bed" : "The INNSiDE Room Twin Bed"}</span>
              <span>approx. GBP 900.90</span>
              <span>${money.hotelPerPersonTotal}</span>
            </div>
            <div class="booking-facts">
              <div><span>${state.lang !== "zh" ? "Address" : "地址"}</span><strong>1 First Street, Manchester</strong></div>
              <div><span>${state.lang !== "zh" ? "Guests" : "入住人數"}</span><strong>${state.lang !== "zh" ? "2 guests" : "2 人"}</strong></div>
              <div><span>${state.lang !== "zh" ? "Cancellation" : "取消規則"}</span><strong>${state.lang !== "zh" ? "Within 24 hours = 1 night penalty" : "24 小時內取消 = 1 晚房費"}</strong></div>
            </div>
            <div class="booking-action-row">
              <a class="button secondary" href="https://www.melia.com/en/hotels/united-kingdom/manchester/innside-manchester" target="_blank" rel="noreferrer noopener" aria-label="${state.lang !== "zh" ? "Open booking page" : "開啟訂房頁"}">${state.lang !== "zh" ? "Open booking" : "查看訂房"}</a>
              <a class="button secondary" href="https://www.google.com/maps/search/?api=1&query=INNSiDE+Manchester+1+First+Street+Manchester" target="_blank" rel="noreferrer noopener" aria-label="${state.lang !== "zh" ? "Open map" : "開啟地圖"}">${state.lang !== "zh" ? "Map" : "地圖"}</a>
              <a class="button secondary" href="./links.html" aria-label="${state.lang !== "zh" ? "Open contact and links page" : "開啟連結頁"}">${state.lang !== "zh" ? "Links" : "連結"}</a>
              <a class="button secondary" href="./budget.html" aria-label="${state.lang !== "zh" ? "Open reimbursement page" : "開啟費用頁"}">${state.lang !== "zh" ? "Expense notes" : "費用說明"}</a>
            </div>
            ${renderList(stay.facts, "stay-facts")}
          </article>
        `).join("")}
      </div>
      </article>
    </section>
    <section class="section compact-section" id="decision">
      <article class="section-card">
      <div class="section-label">${state.lang !== "zh" ? "Later-City Stays" : "後段住宿安排"}</div>
      <h2>${state.lang !== "zh" ? "London and Paris stays" : "倫敦與巴黎住宿"}</h2>
      <p class="lead">${state.lang !== "zh" ? "London stays closer to the rail rhythm, while Paris leans more toward the travel atmosphere." : "倫敦先看交通與步行便利，巴黎則更偏向旅程感與景觀。"}</p>
      <div class="summary-grid two">
        ${tripData.stay.slice(1).map(renderSummaryCard).join("")}
        <article class="summary-card">
          ${statusChip("pending")}
          <h3>${state.lang !== "zh" ? "Why these choices fit" : "這些選擇為什麼順"}</h3>
          ${renderMetaRow([
            { label: state.lang !== "zh" ? "London" : "倫敦", value: state.lang !== "zh" ? "Rail and central access" : "車站動線與市中心步行" },
            { label: state.lang !== "zh" ? "Paris" : "巴黎", value: state.lang !== "zh" ? "Tower view and relaxed stay" : "鐵塔景與旅行感" }
          ])}
          ${renderList([
            state.lang !== "zh" ? "The Langham London: strongest first-choice city stay." : "The Langham London：整體質感最好，最像這段旅程的主住宿。",
            state.lang !== "zh" ? "The Clermont Charing Cross: better if station access matters most." : "The Clermont Charing Cross：如果更在意車站動線，會更直接。",
            state.lang !== "zh" ? "Pullman Paris Tour Eiffel: matches the Paris skyline mood best." : "Pullman Paris Tour Eiffel：最貼近巴黎段想要的鐵塔景節奏。",
            state.lang !== "zh" ? "Manchester alternatives stay useful if the conference base changes later." : "Manchester 的三間建議可留著，若後面想換飯店就直接比。"
          ])}
        </article>
      </div>
      ${renderAlert(tripData.alerts[0])}
      </article>
    </section>
    <section class="section compact-section" id="areas">
      ${sectionHeading(state.lang !== "zh" ? "Useful Picks" : "住宿建議關鍵字", state.lang !== "zh" ? "Hotels and station areas worth keeping in view" : "把目前最值得留意的飯店與區域放在一起")}
      <div class="tag-cloud">
        ${["The Langham London", "The Clermont Charing Cross", "Pullman Paris Tour Eiffel", "Manchester Marriott", "Hyatt Regency Manchester", "Hilton Manchester Deansgate"].map((area) => `<span>${area}</span>`).join("")}
      </div>
    </section>
  `);
}

function renderItinerary() {
  return `
    ${renderQuickNav("itinerary")}
    <section class="section compact-section" id="timeline">
      <article class="section-card handbook-itinerary-card">
        <div class="section-label">${state.lang !== "zh" ? "Day by Day" : "每日旅程"}</div>
        <h2>${state.lang !== "zh" ? "Daily travel guide" : "每日旅行指南"}</h2>
        <p class="lead">${state.lang !== "zh" ? "This page is arranged the way the route unfolds in real time: first the arrival, then the conference days, then London, then Paris, and finally the way home. Open one day when you need detail, or stay at the chapter level when you only need the next move." : "這一頁照旅程真正展開的順序來讀：先抵達、再進會議主段，接著是倫敦、巴黎，最後才是返程。旅途中如果只是想確認下一段，可以停在章節層；要看細節，再打開當天就好。"}</p>
        <div class="itinerary-highlights">
          ${[
            [{ zh: "旅程主軸", en: "Travel arc" }, { zh: "法蘭克福轉機 → 曼徹斯特會議 → 倫敦 → 巴黎", en: "Frankfurt transit → Manchester conference → London → Paris" }],
            [{ zh: "核心目的", en: "Core purpose" }, { zh: "AIB 2026 發表與歐洲旅行", en: "AIB 2026 presentations with a Europe route" }],
            [{ zh: "閱讀方式", en: "Reading style" }, { zh: "先看章節，再展開每天", en: "Read by chapter, then open the day you need" }]
          ].map(([label, value]) => renderMiniHighlightCard(label, value)).join("")}
        </div>
        ${renderDayGuideNav()}
        <div class="day-guide-sections">
          ${dailyGuideSections.map(renderDayGuideSection).join("")}
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
      ${renderAlert({ title: { zh: "回程串接要留足緩衝", en: "Leave enough margin for the return chain" }, body: { zh: "最後一天的重點是把巴黎、曼徹斯特和希斯洛的三段移動順順接起來。巴黎上午不建議再排其他景點，重要文件也先整理成離線版本。", en: "The last day works best when Paris, Manchester, and Heathrow connect cleanly. Keep the Paris morning light and make sure all important files are available offline." } })}
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
              title: { zh: "想買得有記憶點", en: "More distinctive picks" },
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
          <iframe id="travelMapFrame" title="${state.lang !== "zh" ? "AIB 2026 Europe travel map" : "AIB 2026 歐洲旅程地圖"}" src="${mapEmbedUrl(defaultLocation.query)}" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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
            <p>${city === "Manchester"
              ? (state.lang !== "zh" ? "Keep this side practical: airport, hotel, station, and conference-day movement." : "這一側保持實用：機場、飯店、車站與會議日移動。")
              : (state.lang !== "zh" ? "London focuses on museums, major sights, and the main walking areas between them." : "倫敦以博物館、主要景點與步行可串接的區域為主。")
            }</p>
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
              <td data-label="${escapeHtml(heads[1])}" class="budget-amount-cell">${escapeHtml(row.amounts?.TWD || "-")}</td>
              <td data-label="${escapeHtml(heads[2])}" class="budget-amount-cell">${escapeHtml(row.amounts?.GBP || "-")}</td>
              <td data-label="${escapeHtml(heads[3])}" class="budget-amount-cell">${escapeHtml(row.amounts?.EUR || "-")}</td>
              <td data-label="${escapeHtml(heads[4])}" class="budget-amount-cell">${escapeHtml(row.amounts?.USD || "-")}</td>
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
    TWD: { reimburse: "NT$156,039", self: "NT$38,525", personalSelf: "約 NT$19,263", hotelPerson: "NT$19,135", hotelPersonNight: "NT$3,827" },
    GBP: { reimburse: "GBP 3,671", self: "GBP 906.90", personalSelf: "GBP 453.45", hotelPerson: "GBP 450.45", hotelPersonNight: "GBP 90.09" },
    EUR: { reimburse: "EUR 4,293", self: "EUR 1,061", personalSelf: "約 EUR 531", hotelPerson: "EUR 527", hotelPersonNight: "EUR 105" },
    USD: { reimburse: "US$4,870", self: "US$1,202", personalSelf: "約 US$601", hotelPerson: "US$597", hotelPersonNight: "US$119" }
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
    ${renderReadingGuide("budget")}
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
        <article class="summary-card">${statusChip("self")}<h3>${state.lang !== "zh" ? "Train estimate" : "火車預估"}</h3><strong>${t(money.trainAdvance)}</strong>${renderMetaRow([{ label: state.lang !== "zh" ? "Type" : "票種", value: "Advance / Off-Peak" }, { label: state.lang !== "zh" ? "Railcard" : "Railcard", value: money.railcard }])}</article>
        <article class="summary-card">${statusChip("pending")}<h3>${state.lang !== "zh" ? "Pending items" : "待確認項目"}</h3><strong>${state.lang !== "zh" ? "London hotel / London transit / attraction mix" : "倫敦住宿 / 倫敦交通 / 景點組合"}</strong>${renderMetaRow([{ label: state.lang !== "zh" ? "Action" : "處理", value: state.lang !== "zh" ? "Book and review" : "預訂與確認" }, { label: state.lang !== "zh" ? "Timing" : "時點", value: state.lang !== "zh" ? "Before departure" : "出發前" }])}</article>
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
        <article class="summary-card">${statusChip("self")}<h3>${state.lang !== "zh" ? "Self-funded known subtotal" : "已知自費小計"}</h3><strong>${selectedTotals.self}</strong><p>${state.lang !== "zh" ? "Current known self-funded items include Manchester hotel and visitor charge. London hotel and detailed attraction choices remain open." : "目前已知自費包含曼徹斯特住宿與旅遊稅；倫敦住宿與景點組合仍待確認。"}</p></article>
      </div>
    </section>
    <section class="section compact-section" id="personal-costs">
      ${sectionHeading(
        state.lang !== "zh" ? "Personal Share" : "個人花費",
        state.lang !== "zh" ? "Current personal accommodation estimate" : "目前個人住宿分攤估算",
        state.lang !== "zh" ? "The Manchester room is priced for two guests, so the personal share is calculated as half of the room total." : "曼徹斯特住宿目前是兩人房價，因此個人分攤以總價除以 2 估算。"
      )}
      <div class="summary-grid three">
        <article class="summary-card">${statusChip("self")}<h3>${state.lang !== "zh" ? "Hotel per person" : "住宿一人總額"}</h3><strong>${selectedTotals.hotelPerson}</strong><p>${state.lang !== "zh" ? "INNSiDE Manchester, 5 nights, half of the two-person room total." : "INNSiDE Manchester 5 晚，兩人房價的一半。"}</p></article>
        <article class="summary-card">${statusChip("self")}<h3>${state.lang !== "zh" ? "Per person / night" : "一人一晚"}</h3><strong>${selectedTotals.hotelPersonNight}</strong><p>${state.lang !== "zh" ? "Average personal room share per night." : "平均每晚的個人住宿分攤。"}</p></article>
        <article class="summary-card">${statusChip("self")}<h3>${state.lang !== "zh" ? "Known personal self-funded" : "目前個人已知自費"}</h3><strong>${selectedTotals.personalSelf}</strong><p>${state.lang !== "zh" ? "Manchester hotel share plus half of the visitor charge. London stay, trains, and attractions are not included yet." : "含曼徹斯特住宿個人分攤與旅遊稅一半；尚未包含倫敦住宿、火車與景點門票。"}</p></article>
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
    ${renderReadingGuide("documents")}
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
    ${renderReadingGuide("reminders")}
    <section class="section compact-section" id="pending">
      ${sectionHeading(
        state.lang !== "zh" ? "Reminders" : "提醒",
        state.lang !== "zh" ? "Things to check before departure" : "出發前要再看一次的事"
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
        state.lang !== "zh" ? "Small list, big peace of mind" : "少一點慌張，多一點安心"
      )}
      <div class="proof-list checklist-list">
        ${[
          state.lang !== "zh" ? "Passport and UK ETA are ready." : "護照與 UK ETA 已確認。",
          state.lang !== "zh" ? "AIB receipts and letters are saved for reimbursement." : "AIB 收據、接受函與邀請函已存好。",
          state.lang !== "zh" ? "Manchester-London trains are checked before prices rise." : "曼徹斯特到倫敦火車票已再次查價。",
          state.lang !== "zh" ? "London accommodation is booked or intentionally left open." : "倫敦住宿已預訂，或確認保留彈性。",
          state.lang !== "zh" ? "Return routing starts at MAN and includes MAN-LHR." : "回程從 MAN 出發，MAN-LHR 航段不可跳過。"
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
    ${renderReadingGuide("firstTime")}
    <section class="section compact-section first-time-intro" id="entry">
      ${sectionHeading(
        state.lang !== "zh" ? "Entry" : "入境",
        state.lang !== "zh" ? "Documents, ETA, and what to keep ready" : "文件、ETA 與入境時手邊要有的東西",
        state.lang !== "zh" ? "A short and clear explanation is enough: conference first, then London travel." : "入境時簡單說明：先到曼徹斯特參加會議，之後再到倫敦旅行。"
      )}
      <div class="first-note-grid">
        ${tripData.firstTimeNotes.essentials.map(renderFirstTimeNoteCard).join("")}
      </div>
    </section>
    <section class="section compact-section" id="city">
      ${sectionHeading(
        state.lang !== "zh" ? "City Basics" : "城市移動",
        state.lang !== "zh" ? "Transport, payment, and street rhythm" : "交通付款、走路與城市節奏"
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
          <p>${state.lang !== "zh" ? "The best first-day plan is not ambitious. It is clean, hydrated, and ready for the conference." : "第一天不需要太用力。能順利抵達、吃點東西、整理文件、調整時差，就很好。"}</p>
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

function renderApp() {
  const pageId = document.body.dataset.page || "home";
  document.documentElement.lang = currentDocumentLang();
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
  wireHashDrivenSections();
  wireDayGuideNav();
  updateProgress();
  applySecondaryLocaleText();
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
  button.textContent = state.lang !== "zh" ? "Top" : "上方";
  button.setAttribute("aria-label", state.lang !== "zh" ? "Back to top" : "回到上方");
  if (button.dataset.bound) return;
  button.dataset.bound = "true";
  button.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}

function openHashTarget(hash) {
  if (!hash) return;
  const target = document.querySelector(hash);
  if (!target) return;
  target.querySelector("details")?.setAttribute("open", "open");
}

function wireHashDrivenSections() {
  openHashTarget(window.location.hash);
  if (document.body.dataset.hashBound) return;
  document.body.dataset.hashBound = "true";
  window.addEventListener("hashchange", () => {
    openHashTarget(window.location.hash);
  });
}

function wireDayGuideNav() {
  const links = [...document.querySelectorAll(".day-guide-link")];
  if (!links.length) return;

  const setActive = (id) => {
    links.forEach((link) => {
      const active = link.getAttribute("href") === `#${id}`;
      link.classList.toggle("active", active);
      if (active) link.setAttribute("aria-current", "true");
      else link.removeAttribute("aria-current");
    });
  };

  links.forEach((link) => {
    if (link.dataset.bound) return;
    link.dataset.bound = "true";
    link.addEventListener("click", () => {
      const id = link.getAttribute("href")?.replace(/^#/, "");
      if (id) setActive(id);
    });
  });

  const sections = links
    .map((link) => {
      const targetId = link.getAttribute("href")?.replace(/^#/, "");
      return targetId ? document.getElementById(targetId) : null;
    })
    .filter(Boolean);

  const hashId = window.location.hash.replace(/^#/, "");
  if (hashId && document.getElementById(hashId)) setActive(hashId);
  else if (sections[0]?.id) setActive(sections[0].id);

  if (!sections.length || typeof IntersectionObserver === "undefined") return;

  const observer = new IntersectionObserver((entries) => {
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (visible?.target?.id) setActive(visible.target.id);
  }, {
    rootMargin: "-22% 0px -58% 0px",
    threshold: [0.15, 0.35, 0.6]
  });

  sections.forEach((section) => observer.observe(section));
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
  target.querySelector("details")?.setAttribute("open", "open");
  history.replaceState(null, "", link.getAttribute("href"));
  target.scrollIntoView({ behavior: "smooth", block: "start" });
});

renderApp();
