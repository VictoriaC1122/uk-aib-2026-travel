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
  { id: "firstTime", label: { zh: "德英法提醒", en: "Germany · UK · France Notes", fr: "Notes Allemagne · Royaume-Uni · France", de: "Hinweise zu Deutschland · Großbritannien · Frankreich" }, href: "./first-time.html" },
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
  compare: { zh: "比價中", en: "Comparing", fr: "En comparaison", de: "Im Vergleich" },
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
  parisHotel: "NT$70,243 / 約 GBP 1,639 / EUR 1,915.58 / 約 US$2,170",
  parisHotelPerNight: "NT$23,414 / 約 GBP 546 / EUR 638.53 / 約 US$723",
  cdgHotel: "NT$7,034 / 約 GBP 164 / 約 EUR 192 / 約 US$217",
  visitorCharge: "約 NT$255 / GBP 6 / EUR 7 / US$8",
  visitorChargePerPerson: "約 NT$128 / GBP 3 / EUR 4 / US$4",
  personalKnownSelfFunded: "約 NT$19,263 / GBP 453.45 / EUR 531 / US$601",
  manchesterDaily: "NT$10,381 / GBP 244 / EUR 285 / US$324 / day",
  manchesterDaily5: "NT$51,905 / GBP 1,220 / EUR 1,427 / US$1,620",
  londonDaily: "NT$16,340 / GBP 385 / EUR 450 / US$510 / day",
  trainAdvance: { zh: "每人來回 NT$2,846 起 / GBP 67 起 / EUR 78 起 / US$89 起", en: "per person return from NT$2,846 / GBP 67 / EUR 78 / US$89" },
  railcard: "NT$1,487 / GBP 35 / EUR 41 / US$46"
};

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
const langhamImage = "./assets/the-langham-london.jpg";
const clermontImage = "./assets/the-clermont-charing-cross.jpg";
const pullmanImage = "./assets/pullman-paris-tour-eiffel.jpg";

const tripData = {
  lastUpdated: "2026-04-17 12:05",
  hero: {
    home: {
      kicker: { zh: "旅程總覽", en: "Trip Overview" },
      title: { zh: "AIB 2026 Manchester", en: "AIB 2026 Manchester" },
      lead: {
        zh: "德英法之旅手冊",
        en: "Germany · UK · France Travel Handbook"
      }
    },
    conference: {
      kicker: { zh: "會議安排", en: "Conference" },
      title: { zh: "會議手冊", en: "Conference Handbook" },
      lead: { zh: "會議日期、兩場發表時間，還有該留著的文件，都放在這頁。", en: "Conference dates, presentation slots, on-site rhythm, and the key files all stay together here." }
    },
    transport: {
      kicker: { zh: "交通規劃", en: "Transport" },
      title: { zh: "火車與市內交通", en: "Trains & Local Transit" },
      lead: { zh: "城市之間怎麼移動、到了當地搭什麼，這頁一起看。", en: "This page keeps rail movement between cities together with local transit in London, Manchester, and Paris." }
    },
    flights: {
      kicker: { zh: "航班安排", en: "Flights" },
      title: { zh: "機票與轉機", en: "Flight Plan & Transfers" },
      lead: { zh: "去程、回程和巴黎回曼徹斯特都放這裡，轉機也一起整理。", en: "Outbound, return, and the Paris-to-Manchester segment live here, together with the transfer notes." }
    },
    stay: {
      kicker: { zh: "住宿安排", en: "Accommodation" },
      title: { zh: "住宿與城市切換", en: "Accommodation & City Split" },
      lead: { zh: "曼徹斯特、Pullman 和 CDG 前一晚都已定，現在主要只剩倫敦住宿。", en: "The Manchester conference stay is set, Pullman anchors the last Paris nights, and the 10-11 July CDG airport hotel is now in place; London is the main remaining stay to settle." }
    },
    itinerary: {
      kicker: { zh: "每日行程", en: "Itinerary" },
      title: { zh: "每日旅行指南", en: "Daily Travel Guide" },
      lead: { zh: "把每天會去哪裡、怎麼移動、晚上住哪裡都放在一起。", en: "Each day keeps its route, pace, and practical details together, so it reads more like a travel guide than a list." }
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
      title: { zh: "德英法旅程地圖", en: "Germany · UK · France Travel Map" },
      lead: { zh: "把法蘭克福、曼徹斯特、倫敦和巴黎會用到的地點放在一起。", en: "Key Frankfurt, Manchester, London, and Paris stops, plus the main travel routes, in one map." }
    },
    budget: {
      kicker: { zh: "預算整理", en: "Budget" },
      title: { zh: "費用與票券", en: "Travel Costs & Tickets" },
      lead: { zh: "把可報帳、自費與票券費用分開整理，臨時要核對時比較快。", en: "Reimbursable items, self-funded costs, and ticket notes are separated here for quick checking." }
    },
    reminders: {
      kicker: { zh: "行前提醒", en: "Reminders" },
      title: { zh: "旅程提醒與出發前確認", en: "Travel Notes Before Departure" },
      lead: { zh: "把出發前還想再看一次的事收在這裡。", en: "Use this page for the last practical checks before leaving, without scattering them across the site." }
    },
    firstTime: {
      kicker: { zh: "德英法行前提醒", en: "Germany · UK · France Travel Notes" },
      title: { zh: "這趟德英法之旅行前要留意的事", en: "Practical Notes Before the Germany · UK · France Trip" },
      lead: { zh: "英國主段加上德國、法國移動前會用到的提醒，都放這裡。", en: "UK, Germany, and France travel notes collected in one place before the trip." }
    },
    documents: {
      kicker: { zh: "官方連結", en: "Official Links" },
      title: { zh: "文件與連結", en: "Documents & Links" },
      lead: { zh: "這裡只放公開連結和文件種類，不會放私人資料。", en: "Only public official links and document reminders are listed. Booking numbers, payment details, emails, and private receipt contents are excluded." }
    }
  },
  reminders: [
    { status: "book", title: { zh: "倫敦住宿", en: "London accommodation" }, body: { zh: "7/4–7/7 先看 The Langham London；如果想省車站移動，就改看 The Clermont Charing Cross。", en: "For 4-7 July, start with The Langham London; The Clermont Charing Cross is the more station-friendly alternative." } },
    { status: "book", title: { zh: "曼徹斯特到倫敦", en: "Manchester to London" }, body: { zh: "7/4 可以搭 Avanti West Coast，直達約 2 小時 10 分。Advance 票早點看通常比較有空間。", en: "For 4 July, Avanti West Coast is the cleanest option at about 2h10 direct. Advance fares are best checked early." } },
    { status: "book", title: { zh: "倫敦到巴黎", en: "London to Paris" }, body: { zh: "7/7 可以搭 Eurostar，市中心直達市中心，車程大約 2 小時 20 分。", en: "For 7 July, Eurostar is the simplest city-centre to city-centre option at about 2h20." } },
    { status: "reimburse", title: { zh: "報帳資料", en: "Reimbursement packet" }, body: { zh: "這次可報帳還是以國際機票、AIB 會議費、AIB 會員費和國科會日支費為主；倫敦、巴黎段另外列自費。", en: "Claims remain limited to international flights, the AIB conference fee, the AIB membership fee, and NSTC allowance; London and Paris stay self-funded." } },
    { status: "confirmed", title: { zh: "7/11 回程", en: "11 July return flights" }, body: { zh: "7/11 會先從巴黎飛曼徹斯特，再接 BA 1371 和 CI 0082 回台北。這天不要再加別的安排。", en: "On 11 July, fly Paris to Manchester first, then connect to BA 1371 and CI 0082 back to Taipei. Keep the day focused on the flights." } }
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
  flights: [
    {
      label: { zh: "去程", en: "Outbound" },
      date: "2026/06/29 - 06/30",
      note: { zh: "華航主票前兩段：CI 0061 / LH 0946", en: "First two ticketed legs: CI 0061 / LH 0946" },
      legs: [
        { from: "TPE", to: "FRA", flight: "CI 0061", time: "22:20 → 06:50", duration: "14h 30m", detail: { zh: "台北桃園 → 法蘭克福", en: "Taipei Taoyuan → Frankfurt" } },
        { from: "FRA", to: "MAN", flight: "LH 0946", time: "16:20 → 17:10", duration: "1h 50m", detail: { zh: "法蘭克福 → 曼徹斯特", en: "Frankfurt → Manchester" } }
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
      note: { zh: "華航主票後兩段：BA 1371 / CI 0082", en: "Final two ticketed legs: BA 1371 / CI 0082" },
      legs: [
        { from: "MAN", to: "LHR", flight: "BA 1371", time: "18:10 → 19:15", duration: "1h 05m", detail: { zh: "曼徹斯特（多半 T3）→ 倫敦希斯洛 T5", en: "Manchester (likely T3) → London Heathrow T5" } },
        { from: "LHR", to: "TPE", flight: "CI 0082", time: "21:10 → 18:05", duration: "13h 55m", detail: { zh: "倫敦希斯洛（華航常見 T4）→ 台北桃園 T1", en: "London Heathrow (China Airlines usually T4) → Taipei Taoyuan T1" } }
      ]
    }
  ],
  transfers: [
    {
      status: "confirmed",
      airport: { zh: "法蘭克福機場 FRA", en: "Frankfurt Airport FRA" },
      route: "CI 0061 → LH 0946",
      layover: { zh: "停留約 9 小時 30 分", en: "About 9h 30m layover" },
      terminals: { zh: "當天以機場螢幕與 Lufthansa 指示為準。", en: "Follow airport screens and Lufthansa guidance on the day." },
      notes: [
        { zh: "抵達後先看 Connecting Flights / Abflug 螢幕，確認 LH 0946 的登機門與航廈。", en: "After arrival, check the Connecting Flights / departure screens for the LH 0946 gate and terminal." },
        { zh: "這段是長轉機，可以留一點吃飯與休息時間，但仍要提早回到登機區。", en: "This is a long layover, so there is room for food and a short rest, but return to the gate area early." },
        { zh: "若登機證未一次拿齊，抵達後找 Lufthansa / transfer counter 或自助機補印。", en: "If boarding passes are not issued through, use a Lufthansa / transfer counter or kiosk after arrival." }
      ],
      source: "https://www.frankfurt-airport.com/en/flights-and-transfer/transferring-at-fra.html"
    },
    {
      status: "alert",
      airport: { zh: "倫敦希斯洛機場 LHR", en: "London Heathrow LHR" },
      route: "BA 1371 → CI 0082",
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
      photos: [
        {
          src: langhamImage,
          label: { zh: "The Langham London", en: "The Langham London" },
          alt: { zh: "The Langham London 房景照片", en: "A room view at The Langham London" }
        },
        {
          src: clermontImage,
          label: { zh: "The Clermont Charing Cross", en: "The Clermont Charing Cross" },
          alt: { zh: "The Clermont Charing Cross 外觀照片", en: "An exterior view of The Clermont Charing Cross" }
        }
      ],
      facts: [
        { zh: "日期：2026/07/04 – 2026/07/07（3 晚）", en: "Dates: 4 Jul 2026 – 7 Jul 2026 (3 nights)" },
        { zh: "首選：The Langham London", en: "First choice: The Langham London" },
        { zh: "備選：The Clermont Charing Cross", en: "Alternative: The Clermont Charing Cross" },
        { zh: "狀態：尚未預訂", en: "Status: not booked yet" }
      ],
      note: { zh: "這段先看移動順不順。The Langham 房間和整體感覺比較好，Charing Cross 則比較省車程。", en: "This stay prioritizes easy central access; The Langham is the stronger first choice, while Charing Cross is the more transit-friendly alternative." }
    },
    {
      status: "confirmed",
      title: { zh: "巴黎住宿", en: "Paris anchor stay" },
      city: { zh: "巴黎", en: "Paris" },
      image: pullmanImage,
      imageAlt: { zh: "Pullman Paris Tour Eiffel 陽台與艾菲爾鐵塔景觀照片", en: "A balcony view toward the Eiffel Tower at Pullman Paris Tour Eiffel" },
      facts: [
        { zh: "日期：2026/07/07 – 2026/07/10（3 晚）", en: "Dates: 7 Jul 2026 – 10 Jul 2026 (3 nights)" },
        { zh: "飯店：Pullman Paris Tour Eiffel", en: "Hotel: Pullman Paris Tour Eiffel" },
        { zh: "房型：Deluxe Room, High Floor, 1 King Bed, 1 Sofa Bed, Balcony, Eiffel Tower View", en: "Room: Deluxe Room, High Floor, 1 King Bed, 1 Sofa Bed, Balcony, Eiffel Tower View" },
        { zh: `訂房總價：${money.parisHotel}`, en: `Booking total: ${money.parisHotel}` },
        { zh: `平均每晚：約 ${money.parisHotelPerNight}`, en: `Average per night: ${money.parisHotelPerNight}` },
        { zh: "特色：32㎡、高樓層、私人陽台、艾菲爾鐵塔景觀", en: "Features: 32 sqm, high floor, private balcony, Eiffel Tower view" },
        { zh: "位置：步行就能接到艾菲爾鐵塔與塞納河", en: "Location: an easy walk to the Eiffel Tower and the Seine" },
        { zh: "狀態：巴黎主住宿已確認", en: "Status: Paris anchor stay confirmed" }
      ],
      note: { zh: "這三晚就住 Pullman Paris Tour Eiffel。房間在高樓層，陽台看得到鐵塔，晚上回來不用再特地往外跑。", en: "These three nights stay at Pullman Paris Tour Eiffel, using a high-floor balcony room with an Eiffel Tower view as the main hotel highlight of the Paris chapter. The current booking total is NT$70,243 / EUR 1,915.58." }
    },
    {
      status: "confirmed",
      title: { zh: "CDG 回程前一晚", en: "CDG pre-departure stay" },
      city: { zh: "巴黎機場", en: "Paris airport" },
      image: "./assets/novotel-paris-cdg-airport.png",
      imageAlt: { zh: "巴黎戴高樂機場候機樓諾富特酒店訂房畫面", en: "Booking view for Novotel Paris Charles-de-Gaulle Airport" },
      link: "https://www.google.com/maps/search/?api=1&query=Novotel+Paris+Charles-de-Gaulle+Airport",
      facts: [
        { zh: "日期：2026/07/10 – 2026/07/11（1 晚）", en: "Dates: 10 Jul 2026 – 11 Jul 2026 (1 night)" },
        { zh: "飯店：巴黎戴高樂機場候機樓諾富特酒店", en: "Hotel: Novotel Paris Charles-de-Gaulle Airport" },
        { zh: "位置：Roissypole RER 站旁，接 CDG 航廈很順", en: "Location: next to Roissypole RER, with an easy transfer into CDG terminals" },
        { zh: "地址：Paris Street, Roissypole RER, 93290 Tremblay-en-France", en: "Address: Paris Street, Roissypole RER, 93290 Tremblay-en-France" },
        { zh: `刷卡紀錄：${money.cdgHotel}`, en: `Payment note: ${money.cdgHotel}` },
        { zh: "狀態：回程前一晚已確認", en: "Status: confirmed for the night before departure" }
      ],
      note: { zh: "7/10 晚不再只是泛稱 CDG 周邊住宿，而是直接住在巴黎戴高樂機場候機樓諾富特酒店。這樣 7/11 早上從飯店接進 2E 航廈會更從容。", en: "The 10 July night is no longer a vague airport-area buffer; it is now fixed at Novotel Paris Charles-de-Gaulle Airport, making the morning handoff into Terminal 2E much calmer." }
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
    { date: "6/29-6/30", city: { zh: "Taipei → Frankfurt → Manchester", en: "Taipei → Frankfurt → Manchester" }, kind: "travel", theme: { zh: "長程飛行與轉機城市散步", en: "Long-haul departure and a layover city walk" }, title: { zh: "出發、法蘭克福轉機與抵達曼徹斯特", en: "Departure, Frankfurt stop, and arrival in Manchester" }, status: "confirmed", must: ["CI 0061｜TPE 22:20 → FRA 06:50(+1)", "法蘭克福轉機散步：羅馬廣場 → 美因河 → MainNizza 午餐 → 歐元符號", "LH 0946｜FRA 16:20 → MAN 17:10", "入住曼徹斯特"], optional: ["如果時間順，可以在河邊多待一下", "抵達後輕鬆吃晚餐", "補水、整理文件、調時差"], tickets: ["法蘭克福散步：景點免費；午餐依實際消費"], notes: ["先把長途飛行和轉機走順就好。法蘭克福如果還有精神，再出去走一小段，晚上到曼徹斯特就休息。"] },
    { date: "6/30-7/3", city: { zh: "Manchester", en: "Manchester" }, kind: "conference", theme: { zh: "會議主段與城市安排", en: "Conference core and city rhythm" }, title: { zh: "AIB 2026 主會議", en: "AIB 2026 conference" }, status: "confirmed", must: ["AIB Conference", "Presentation", "Networking"], optional: ["空檔回飯店整理簡報", "附近簡單晚餐"], tickets: ["景點門票：GBP 0；以會議活動為主"], notes: ["這幾天就以 AIB 為主。兩場發表都已確認，會議前後不要把行程塞太滿。"] },
    { date: "7/4", city: { zh: "Manchester → London", en: "Manchester → London" }, kind: "travel", theme: { zh: "從會議城市轉進倫敦", en: "From the conference city into London streets" }, title: { zh: "轉往倫敦", en: "Move to London" }, status: "book", must: ["Avanti West Coast", "Manchester → London", "約 2 小時 10 分"], optional: ["抵達後 Big Ben", "Buckingham Palace", "St James's Park"], tickets: ["火車票待訂", "地標散步：免費"], notes: ["這天先把曼徹斯特和倫敦接順就好。到倫敦後可以先走西敏一帶，不用急著排太多點。"] },
    { date: "7/5", city: { zh: "London", en: "London" }, kind: "free", theme: { zh: "精品街區和百貨", en: "Luxury streets and city polish" }, title: { zh: "倫敦 Day 2", en: "London Day 2" }, status: "pending", must: ["Harrods", "Bond Street"], optional: ["Chanel", "Dior", "Louis Vuitton", "YSL"], tickets: ["百貨與精品街散步：免費"], notes: ["這一天就走 Harrods 和 Bond Street。中間想喝咖啡、想停就停，不用把景點塞進來。"] },
    { date: "7/6", city: { zh: "London", en: "London" }, kind: "free", theme: { zh: "街區漫步與自由留白", en: "Neighbourhood walks and open time" }, title: { zh: "倫敦 Day 3", en: "London Day 3" }, status: "pending", must: ["Covent Garden", "Piccadilly Circus"], optional: ["自由活動"], tickets: ["街區散步：免費"], notes: ["這天更像留給倫敦市中心的一次慢走，先走街區，再把剩下的時間留給臨時想停下來的店、巷子或咖啡館。"] },
    { date: "7/7", city: { zh: "London → Paris", en: "London → Paris" }, kind: "travel", theme: { zh: "Eurostar 進巴黎與鐵塔第一晚", en: "Eurostar into Paris and the first Eiffel evening" }, title: { zh: "抵達巴黎，入住 Pullman", en: "Arrive in Paris and check into Pullman" }, status: "confirmed", must: ["Eurostar｜St Pancras → Gare du Nord", "入住 Pullman Paris Tour Eiffel", "艾菲爾鐵塔夜景", "Pullman 陽台看鐵塔"], optional: ["塞納河邊散步"], tickets: ["Eurostar 票待訂", "鐵塔周邊散步免費"], notes: ["到巴黎後先把 Pullman 安頓好。晚上就留在鐵塔附近，看完夜景再回房間，不用再排別的。"] },
    { date: "7/8", city: { zh: "Paris", en: "Paris" }, kind: "free", theme: { zh: "羅浮宮、右岸街景與百貨屋頂", en: "The Louvre, Right Bank streets, and the department-store rooftop" }, title: { zh: "巴黎 Day 2", en: "Paris Day 2" }, status: "confirmed", must: ["Louvre Museum", "Place Vendôme", "Galeries Lafayette 頂樓", "巴黎歌劇院周邊"], optional: ["右岸咖啡館小停留"], tickets: ["Louvre 票價待查", "老佛爺百貨頂樓免費"], notes: ["這天就順著右岸走。上午先看羅浮宮，之後再接 Place Vendôme、歌劇院一帶和老佛爺頂樓。"] },
    { date: "7/9", city: { zh: "Paris", en: "Paris" }, kind: "free", theme: { zh: "右岸大道和塞納河", en: "Luxury avenues and the grand Paris landmarks" }, title: { zh: "巴黎 Day 3", en: "Paris Day 3" }, status: "confirmed", must: ["Avenue Montaigne", "Champs-Elysees", "Arc de Triomphe", "塞納河夜景"], optional: ["精品購物", "晚餐後再看一次鐵塔"], tickets: ["街區散步與購物：依實際消費", "凱旋門票價待查"], notes: ["Avenue Montaigne、香榭麗舍和凱旋門可以排同一天。晚上再去塞納河邊，不用每個地方都待很久。"] },
    { date: "7/10", city: { zh: "Paris", en: "Paris" }, kind: "free", theme: { zh: "蒙馬特、最後採買與轉往機場", en: "Montmartre, final shopping, and the shift to the airport" }, title: { zh: "巴黎 Day 4", en: "Paris Day 4" }, status: "confirmed", must: ["Sacré-Cœur / Montmartre", "巴黎最後採購", "回 Pullman 拿寄放行李", "入住巴黎戴高樂機場候機樓諾富特酒店"], optional: ["沿途街角拍照"], tickets: ["聖心堂與蒙馬特散步免費"], notes: ["最後一天不要塞太滿。上午去聖心堂和蒙馬特，下午把採買和行李收好，晚上直接轉到機場邊。"] },
    { date: "7/11-7/12", city: { zh: "Paris → Manchester → Heathrow → Taipei", en: "Paris → Manchester → Heathrow → Taipei" }, kind: "travel", theme: { zh: "回程接駁與長途返台", en: "Connection day and the long flight home" }, title: { zh: "回程返台", en: "Return to Taipei" }, status: "confirmed", must: ["Novotel Paris Charles-de-Gaulle Airport → CDG Terminal 2E", "Air France Business Standard｜CDG 12:50 → MAN 13:25", "BA 1371｜MAN 18:10 → LHR 19:15", "CI 0082｜LHR 21:10 → TPE 18:05(+1)"], optional: ["巴黎上午只排簡單移動"], tickets: ["AF 歐洲段：約 EUR 354.05 / NT$12,930"], notes: ["這一天以順利銜接航段為主。從機場飯店接進 2E 航廈後，就把體力留給巴黎到曼徹斯特、再接希斯洛返台的長路。"] }
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
  mapRouteUrl: "https://www.google.com/maps/dir/Manchester+Airport/INNSiDE+Manchester/Manchester+Piccadilly/London+Euston/Big+Ben/Harrods/Covent+Garden/Piccadilly+Circus/London+St+Pancras+International/Gare+du+Nord/Pullman+Paris+Tour+Eiffel/Eiffel+Tower/Louvre+Museum/Place+Vendome+Paris/Galeries+Lafayette+Haussmann/Avenue+Montaigne+Paris/Arc+de+Triomphe/Sacre-Coeur+Paris/Novotel+Paris+Charles-de-Gaulle+Airport/Charles+de+Gaulle+Airport+Terminal+2E/Manchester+Airport",
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
    { status: "confirmed", city: "Paris", title: { zh: "Pullman Paris Tour Eiffel", en: "Pullman Paris Tour Eiffel" }, query: "Pullman Paris Tour Eiffel", note: { zh: "巴黎最後三晚住這裡，重點是陽台看鐵塔。", en: "The main stay for the last three Paris nights, centered on the balcony tower view." } },
    { status: "confirmed", city: "Paris", title: { zh: "Eiffel Tower", en: "Eiffel Tower" }, query: "Eiffel Tower", note: { zh: "抵達巴黎後的第一個城市重點。", en: "The first big Paris stop after arrival." } },
    { status: "confirmed", city: "Paris", title: { zh: "Louvre Museum", en: "Louvre Museum" }, query: "Louvre Museum", note: { zh: "巴黎 Day 2 的主要行程。", en: "The anchor stop for Paris Day 2." } },
    { status: "confirmed", city: "Paris", title: { zh: "Place Vendôme", en: "Place Vendôme" }, query: "Place Vendôme Paris", note: { zh: "羅浮宮之後很適合接進右岸街景。", en: "A graceful Right Bank stop after the Louvre." } },
    { status: "confirmed", city: "Paris", title: { zh: "Avenue Montaigne", en: "Avenue Montaigne" }, query: "Avenue Montaigne Paris", note: { zh: "巴黎精品街主段。", en: "The core luxury-shopping avenue in Paris." } },
    { status: "confirmed", city: "Paris", title: { zh: "Champs-Elysees / Arc de Triomphe", en: "Champs-Elysees / Arc de Triomphe" }, query: "Arc de Triomphe Paris", note: { zh: "巴黎 Day 3 的主景與購物段。", en: "The main Paris Day 3 landmark and shopping corridor." } },
    { status: "confirmed", city: "Paris", title: { zh: "Galeries Lafayette Haussmann", en: "Galeries Lafayette Haussmann" }, query: "Galeries Lafayette Haussmann", note: { zh: "巴黎最後一日的採買點。", en: "A strong final shopping stop in Paris." } },
    { status: "confirmed", city: "Paris", title: { zh: "Sacré-Cœur / Montmartre", en: "Sacré-Cœur / Montmartre" }, query: "Sacré-Cœur Paris", note: { zh: "巴黎最後一天的晨間散步。", en: "The morning walk for the last Paris day." } },
    { status: "confirmed", city: "Paris", title: { zh: "Seine", en: "Seine" }, query: "Seine River Paris", note: { zh: "可接塞納河遊船。", en: "Easy to pair with a Seine cruise." } },
    { status: "confirmed", city: "Paris", title: { zh: "Novotel Paris Charles-de-Gaulle Airport", en: "Novotel Paris Charles-de-Gaulle Airport" }, query: "Novotel Paris Charles-de-Gaulle Airport", note: { zh: "7/10–7/11 的機場過夜，隔天接法航比較從容。", en: "The airport overnight stay on 10-11 July, making the Air France departure easier." } },
    { status: "confirmed", city: "Paris", title: { zh: "CDG Terminal 2E", en: "CDG Terminal 2E" }, query: "Charles de Gaulle Airport Terminal 2E", note: { zh: "7/11 Air France Business Standard 的出發點。", en: "The departure terminal for the 11 July Air France Business Standard flight." } },
  ],
  mapRoutes: [
    { status: "confirmed", label: { zh: "6/30 抵達曼徹斯特", en: "30 Jun Manchester arrival" }, note: { zh: "曼徹斯特機場 → INNSiDE Manchester", en: "MAN Airport → INNSiDE Manchester" }, url: "https://www.google.com/maps/dir/Manchester+Airport/INNSiDE+Manchester+1+First+Street+Manchester" },
    { status: "book", label: { zh: "7/4 曼徹斯特 → 倫敦", en: "4 Jul Manchester → London" }, note: { zh: "Piccadilly → Euston，之後接 Big Ben、Buckingham Palace、St James's Park。", en: "Piccadilly → Euston, then continue to Big Ben, Buckingham Palace, and St James's Park." }, url: "https://www.google.com/maps/dir/Manchester+Piccadilly/London+Euston/Big+Ben+London/Buckingham+Palace/St+James's+Park+London" },
    { status: "pending", label: { zh: "7/5 倫敦購物日", en: "5 Jul London shopping day" }, note: { zh: "Harrods → Bond Street。", en: "Harrods → Bond Street." }, url: "https://www.google.com/maps/dir/Harrods+London/Bond+Street+London" },
    { status: "pending", label: { zh: "7/6 倫敦市中心", en: "6 Jul central London" }, note: { zh: "Covent Garden → Piccadilly Circus。", en: "Covent Garden → Piccadilly Circus." }, url: "https://www.google.com/maps/dir/Covent+Garden/Piccadilly+Circus" },
    { status: "book", label: { zh: "7/7 倫敦 → 巴黎", en: "7 Jul London → Paris" }, note: { zh: "St Pancras → Gare du Nord → Pullman Paris Tour Eiffel。", en: "St Pancras → Gare du Nord → Pullman Paris Tour Eiffel." }, url: "https://www.google.com/maps/dir/St+Pancras+International/Gare+du+Nord/Pullman+Paris+Tour+Eiffel" },
    { status: "confirmed", label: { zh: "7/8 巴黎右岸日", en: "8 Jul Right Bank day" }, note: { zh: "Pullman → Louvre → Place Vendôme → Galeries Lafayette。", en: "Pullman → Louvre → Place Vendôme → Galeries Lafayette." }, url: "https://www.google.com/maps/dir/Pullman+Paris+Tour+Eiffel/Louvre+Museum/Place+Vendome+Paris/Galeries+Lafayette+Haussmann" },
    { status: "confirmed", label: { zh: "7/9 巴黎精品大道", en: "9 Jul Paris luxury avenue day" }, note: { zh: "Avenue Montaigne → Champs-Elysees → Arc de Triomphe → Seine。", en: "Avenue Montaigne → Champs-Elysees → Arc de Triomphe → Seine." }, url: "https://www.google.com/maps/dir/Avenue+Montaigne+Paris/Champs-Elysees/Arc+de+Triomphe/Seine+River+Paris" },
    { status: "confirmed", label: { zh: "7/10 蒙馬特與機場轉場", en: "10 Jul Montmartre and airport move" }, note: { zh: "Sacré-Cœur → Montmartre → Pullman → Novotel Paris Charles-de-Gaulle Airport。", en: "Sacré-Cœur → Montmartre → Pullman → Novotel Paris Charles-de-Gaulle Airport." }, url: "https://www.google.com/maps/dir/Sacre-Coeur+Paris/Montmartre+Paris/Pullman+Paris+Tour+Eiffel/Novotel+Paris+Charles-de-Gaulle+Airport" },
    { status: "confirmed", label: { zh: "7/11 巴黎 → 曼徹斯特", en: "11 Jul Paris → Manchester" }, note: { zh: "Novotel CDG → CDG T2E → MAN T2，再接 BA 與華航。", en: "Novotel CDG → CDG T2E → MAN T2, then connect to BA and China Airlines." }, url: "https://www.google.com/maps/dir/Novotel+Paris+Charles-de-Gaulle+Airport/Charles+de+Gaulle+Airport+Terminal+2E" }
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
    { item: { zh: "巴黎住宿", en: "Paris accommodation" }, amount: money.parisHotel, amounts: { TWD: "NT$70,243", GBP: "約 GBP 1,639", EUR: "EUR 1,915.58", USD: "約 US$2,170" }, status: "self", proof: { zh: "Pullman 訂房確認、Accor 訂單與付款紀錄", en: "Pullman booking confirmation, Accor order, and payment proof" }, notes: { zh: `Pullman Paris Tour Eiffel｜7/7–7/10，共 3 晚，鐵塔景陽台房；平均每晚約 ${money.parisHotelPerNight}。`, en: `Pullman Paris Tour Eiffel · 7-10 Jul · 3 nights · balcony room with Eiffel Tower view; average per night about ${money.parisHotelPerNight}.` } },
    { item: { zh: "CDG 機場住宿", en: "CDG airport hotel" }, amount: { zh: "NT$7,034（原幣未公開）", en: "NT$7,034 (original currency not shown publicly)" }, amounts: { TWD: "NT$7,034", GBP: "約 GBP 164", EUR: "約 EUR 192", USD: "約 US$217" }, status: "self", proof: { zh: "Novotel 訂房畫面與刷卡紀錄", en: "Novotel booking screen and payment note" }, notes: { zh: "巴黎戴高樂機場候機樓諾富特酒店｜7/10–7/11，共 1 晚；作為法航 7/11 航段前一晚的機場過夜。", en: "Novotel Paris Charles-de-Gaulle Airport · 10-11 Jul · 1 night; the airport overnight before the 11 July Air France departure." } },
    { item: { zh: "倫敦 / 巴黎景點與遊船", en: "London / Paris attractions and cruise" }, amount: { zh: "依實際選擇", en: "Depends on selected stops" }, amounts: { TWD: "依實際選擇", GBP: "Depends", EUR: "Depends", USD: "Depends" }, status: "self", proof: { zh: "線上購票收據", en: "Online ticket receipts" }, notes: { zh: "羅浮宮、凱旋門等需要時再訂，鐵塔夜景、Place Vendôme、香榭麗舍和多數街區可直接散步。", en: "Book the Louvre or Arc only if needed; the Eiffel night view, Place Vendôme, the Champs-Elysees, and most of the streets can stay open." } }
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
    ["Novotel Paris Charles-de-Gaulle Airport", "https://www.google.com/maps/search/?api=1&query=Novotel+Paris+Charles-de-Gaulle+Airport"],
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
            zh: "如果對方平常會吃吐司或早餐抹醬，果醬會比餅乾更合適。",
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
            zh: "如果對方喜歡杏仁糖或歐陸甜點，這個會比一般巧克力更對味。",
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
  home: [["overview", { zh: "旅程總覽", en: "Travel Overview" }], ["snapshot", { zh: "旅程摘要", en: "Trip Snapshot" }], ["highlights", { zh: "巴黎段", en: "Paris chapter" }], ["days", { zh: "每日預覽", en: "Day-by-Day Preview" }], ["info", { zh: "實用資訊", en: "Practical Info" }]],
  conference: [["accepted", { zh: "會議狀態", en: "Status" }], ["papers", { zh: "論文", en: "Papers" }], ["alerts", { zh: "提醒", en: "Notes" }], ["checklist", { zh: "文件", en: "Documents" }]],
  flights: [["overview", { zh: "航班總覽", en: "Overview" }], ["segments", { zh: "航段", en: "Segments" }], ["transfer", { zh: "轉機", en: "Transfers" }], ["notes", { zh: "票務備註", en: "Notes" }]],
  transport: [["flights", { zh: "航班", en: "Flights" }], ["transfer", { zh: "轉機", en: "Transfers" }], ["train", { zh: "火車", en: "Train" }], ["local", { zh: "市內交通", en: "Local transit" }]],
  stay: [["overview", { zh: "住宿總覽", en: "Overview" }], ["manchester", { zh: "曼徹斯特", en: "Manchester" }], ["london", { zh: "倫敦候選", en: "London options" }], ["paris", { zh: "巴黎住宿", en: "Paris stay" }], ["cdg", { zh: "機場過夜", en: "Airport stay" }], ["next", { zh: "下一步", en: "Next steps" }]],
  itinerary: [["timeline", { zh: "時間軸", en: "Timeline" }], ["paris-must-do", { zh: "巴黎必去", en: "Paris must-do" }], ["tickets", { zh: "景點費用", en: "Admission" }], ["return", { zh: "回程提醒", en: "Return" }]],
  shopping: [["shopping-overview", { zh: "總覽", en: "Overview" }], ["tea", { zh: "茶與點心", en: "Tea" }], ["pantry", { zh: "果醬與 pantry", en: "Pantry" }], ["essentials", { zh: "超市與藥妝", en: "Essentials" }]],
  souvenirs: [["souvenir-overview", { zh: "總覽", en: "Overview" }], ["uk", { zh: "英國", en: "UK" }], ["france", { zh: "法國", en: "France" }], ["germany", { zh: "德國", en: "Germany" }], ["packing", { zh: "打包提醒", en: "Packing" }]],
  map: [["travel-map", { zh: "地圖", en: "Map" }], ["route-links", { zh: "每日路線", en: "Routes" }], ["map-notes", { zh: "地圖備註", en: "Notes" }]],
  budget: [["expenses", { zh: "費用總覽", en: "Budget" }], ["totals", { zh: "小計", en: "Totals" }], ["proofs", { zh: "憑證", en: "Proofs" }]],
  reminders: [["pending", { zh: "旅程提醒", en: "Travel notes" }], ["quick-check", { zh: "出發前確認", en: "Final check" }]],
  firstTime: [["entry", { zh: "入境", en: "Entry" }], ["city", { zh: "城市移動", en: "City basics" }], ["daily", { zh: "日常提醒", en: "Daily notes" }], ["arrival", { zh: "抵達第一天", en: "First day" }]],
  documents: [["checklist", { zh: "文件清單", en: "Documents" }], ["links", { zh: "官方連結", en: "Links" }]]
};

const dashboardData = {
  conferenceCards: [
    { status: "confirmed", title: { zh: "會議期間", en: "Conference period" }, value: "2026/06/29 - 2026/07/03", note: { zh: "Manchester", en: "Manchester" } },
    { status: "confirmed", title: { zh: "註冊狀態", en: "Registration" }, value: "US$325", note: { zh: "付款完成", en: "Paid" } },
    { status: "confirmed", title: { zh: "接受函", en: "Acceptance letters" }, value: { zh: "2 份", en: "2 files" }, note: { zh: "可作會議證明", en: "Saved for conference proof" } },
    {
      status: "confirmed",
      title: { zh: "兩場發表", en: "Both sessions" },
      value: { zh: "時間和地點都已確認", en: "Time and room confirmed" },
      note: {
        zh: `${conferenceSessions.competitive.dateLabel.zh} ${conferenceSessions.competitive.time} · ${conferenceSessions.competitive.room} ／ ${conferenceSessions.interactive.dateLabel.zh} ${conferenceSessions.interactive.time} · ${conferenceSessions.interactive.room}`,
        en: `${conferenceSessions.competitive.dateLabel.en} ${conferenceSessions.competitive.time} · ${conferenceSessions.competitive.room} / ${conferenceSessions.interactive.dateLabel.en} ${conferenceSessions.interactive.time} · ${conferenceSessions.interactive.room}`
      }
    }
  ],
  conferenceTimeline: [
    { date: "6/29", title: { zh: "預備日", en: "Preparation day" }, note: { zh: "抵達與會前安排。", en: "Arrival and pre-conference setup." } },
    { date: "6/30", title: { zh: "開幕日", en: "Opening day" }, note: { zh: "會前活動、開幕與 reception。", en: "Pre-conference events, opening, and reception." } },
    { date: "7/1 - 7/3", title: { zh: "主會議", en: "Main conference" }, note: { zh: "平行場次、交流與收據整理。", en: "Sessions, networking, and receipt tracking." } },
    {
      date: `${conferenceSessions.competitive.dateLabel.zh} · ${conferenceSessions.competitive.time}`,
      title: { zh: "Competitive 發表時段", en: "Competitive presentation slot" },
      note: {
        zh: `${conferenceSessions.competitive.session} · ${conferenceSessions.competitive.sessionTitle} · ${conferenceSessions.competitive.room}`,
        en: `${conferenceSessions.competitive.session} · ${conferenceSessions.competitive.sessionTitle} · ${conferenceSessions.competitive.room}`
      }
    },
    {
      date: `${conferenceSessions.interactive.dateLabel.zh} · ${conferenceSessions.interactive.time}`,
      title: { zh: "Interactive 發表時段", en: "Interactive presentation slot" },
      note: {
        zh: `${conferenceSessions.interactive.session} · ${conferenceSessions.interactive.sessionTitle} · ${conferenceSessions.interactive.room}`,
        en: `${conferenceSessions.interactive.session} · ${conferenceSessions.interactive.sessionTitle} · ${conferenceSessions.interactive.room}`
      }
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
  { id: "overview", label: { zh: "總覽", en: "Overview", fr: "Aperçu", de: "Überblick" } },
  { id: "itinerary", label: { zh: "行程", en: "Itinerary", fr: "Programme", de: "Reiseplan" } },
  { id: "hotels", label: { zh: "住宿", en: "Hotels", fr: "Hôtels", de: "Hotels" } },
  { id: "links", label: { zh: "連結", en: "Links", fr: "Liens", de: "Links" } },
  { id: "flights", label: { zh: "機票", en: "Flights", fr: "Vols", de: "Flüge" } },
  { id: "info", label: { zh: "資訊", en: "Info", fr: "Infos", de: "Infos" } },
  { id: "budget", label: { zh: "預算", en: "Budget", fr: "Budget", de: "Budget" } },
  { id: "visa", label: { zh: "簽證", en: "Visa", fr: "Visa", de: "Visa" } },
  { id: "en", label: { zh: "EN", en: "EN", fr: "EN", de: "EN" } }
];

const handbookContents = [
  { id: "overview", number: "01", title: { zh: "旅程總覽", en: "Trip Overview" }, target: "overview" },
  { id: "conference-focus", number: "02", title: { zh: "AIB 會議主段", en: "AIB conference core" }, target: "info" },
  { id: "city-route", number: "03", title: { zh: "城市路線", en: "City route" }, target: "overview" },
  { id: "highlights", number: "04", title: { zh: "巴黎段", en: "Paris chapter" }, target: "overview" },
  { id: "days", number: "05", title: { zh: "每日行程", en: "Day-by-day guide" }, target: "itinerary" },
  { id: "practical", number: "06", title: { zh: "住宿與交通", en: "Stay and transport" }, target: "hotels" }
];

const homeJourneyTimeline = [
  {
    date: "06/30",
    title: { zh: "Frankfurt", en: "Frankfurt" },
    note: { zh: "短暫轉機散步，替歐洲段留下一個輕巧開場。", en: "A short layover walk that opens the Europe chapter gently." }
  },
  {
    date: "06/30–07/03",
    title: { zh: "Manchester", en: "Manchester" },
    note: { zh: "AIB 2026 會議主段與兩場發表都放在這裡。", en: "The AIB 2026 conference core and both presentations stay here." }
  },
  {
    date: "07/04–07/06",
    title: { zh: "London", en: "London" },
    note: { zh: "西敏地標、街區散步，還有比較鬆一點的倫敦步調。", en: "Westminster landmarks, neighbourhood walks, and a steadier city rhythm." }
  },
  {
    date: "07/07–07/10",
    title: { zh: "Paris", en: "Paris" },
    note: { zh: "鐵塔夜景、博物館、精品街與 Pullman 陽台視角。", en: "Tower nights, museums, shopping streets, and the Pullman balcony view." }
  },
  {
    date: "07/11–07/12",
    title: { zh: "Return", en: "Return" },
    note: { zh: "從巴黎接回曼徹斯特與希斯洛，再一路返台。", en: "From Paris back through Manchester and Heathrow, then home." }
  }
];

const conferenceSessions = {
  competitive: {
    label: { zh: "Competitive", en: "Competitive" },
    session: "Session 3.4.11",
    sessionNumber: "260411",
    sessionTitle: "Strategic Intellectual Property in Cross-Border Activities",
    track: "Track 4. Global Strategy and Organization",
    dateLabel: { zh: "7/1", en: "1 Jul" },
    dateKey: "2026/07/01",
    time: "15:15-16:30",
    room: "3.006B (AMBS)",
    paperId: "ID# 568",
    paperTitle: "Signal or Noise? Maturity-Adjusted Technical Disclosure and Multi-Stage Startup Funding Decisions",
    coauthor: { zh: "Chao Ya Wan", en: "Chao Ya Wan" }
  },
  interactive: {
    label: { zh: "Interactive", en: "Interactive" },
    session: "Session 5.1.20",
    sessionNumber: "260457",
    sessionTitle: "Legitimacy, Status, and Institutional Alignment in Global Strategy",
    track: "Track 4. Global Strategy and Organization",
    dateLabel: { zh: "7/3", en: "3 Jul" },
    dateKey: "2026/07/03",
    time: "09:30-10:45",
    room: "2217 (UP)",
    paperId: "ID# 1477",
    paperTitle: "Legitimacy-First Innovation: How Emerging Technology Firms Construct Mainstream Pathways Under Institutional Ambiguity",
    coauthor: { zh: "Meng Hsien Yen", en: "Meng Hsien Yen" }
  }
};

function sessionTitleWithNumber(session) {
  return `${session.sessionTitle} (Session# ${session.sessionNumber})`;
}

function buildConferenceSchedule(session) {
  return [
    { label: { zh: "場次", en: "Session" }, value: { zh: session.session, en: session.session } },
    { label: { zh: "Session 主題", en: "Session title" }, value: { zh: sessionTitleWithNumber(session), en: sessionTitleWithNumber(session) } },
    { label: { zh: "主題軌", en: "Track" }, value: { zh: session.track, en: session.track } },
    { label: { zh: "時間", en: "Time" }, value: session.time },
    { label: { zh: "地點", en: "Room" }, value: session.room },
    { label: { zh: "Paper ID", en: "Paper ID" }, value: session.paperId }
  ];
}

function conferenceSessionSentence(sessionKey, lang = "zh") {
  const session = conferenceSessions[sessionKey];
  if (!session) return "";
  if (lang === "zh") {
    return `${t(session.label)} 是 ${t(session.dateLabel)} ${session.time}，${session.session}，地點在 ${session.room}。`;
  }
  return `${t(session.label)} is on ${t(session.dateLabel)}, ${session.time}, in ${session.session} at Room ${session.room}.`;
}

const parisMustDoItems = [
  {
    area: { zh: "7/7 夜晚", en: "7 Jul evening" },
    title: { zh: "艾菲爾鐵塔夜景", en: "Eiffel Tower at night" },
    tags: [{ zh: "夜景", en: "Night view" }, { zh: "拍照", en: "Photos" }],
    body: {
      zh: "巴黎第一晚就留給鐵塔。等天色暗下來，去河邊或廣場看燈亮就好。回飯店後如果還能再從陽台看一次閃燈，這一晚就很夠了。",
      en: "The first Paris evening is best left to the tower. Watch the lights come on from the riverbank or the square, then let the balcony view give the night a quieter second peak."
    }
  },
  {
    area: { zh: "7/8 上午", en: "8 Jul morning" },
    title: { zh: "羅浮宮", en: "The Louvre" },
    tags: [{ zh: "藝術", en: "Art" }, { zh: "經典", en: "Classic" }],
    body: {
      zh: "羅浮宮放在精神最清楚的一個早上就好。不用貪多，挑幾個最想看的區。看完再往右岸接下去，整天會比較順。",
      en: "The Louvre fits best in the clearest part of the day. Choose a few rooms you really care about and let the Right Bank streets carry the museum mood outward."
    }
  },
  {
    area: { zh: "7/8 下午", en: "8 Jul afternoon" },
    title: { zh: "老佛爺百貨頂樓", en: "Galeries Lafayette rooftop" },
    tags: [{ zh: "視角", en: "View" }, { zh: "拍照", en: "Photos" }],
    body: {
      zh: "老佛爺頂樓很適合接在右岸這天後面。上去看一下巴黎屋頂線條和歌劇院周邊，拍幾張照就很夠。",
      en: "The rooftop is a strong high-point for the Right Bank day. It gives the Opéra district and the Paris rooftops a layered view that photographs beautifully."
    }
  },
  {
    area: { zh: "7/9 上午", en: "9 Jul morning" },
    title: { zh: "Avenue Montaigne 精品街", en: "Avenue Montaigne" },
    tags: [{ zh: "精品", en: "Luxury" }, { zh: "街景", en: "Street" }],
    body: {
      zh: "如果巴黎只想留一段精品街時間，Avenue Montaigne 就很夠了。這裡比較安靜，走得慢一點反而比較好。",
      en: "If Paris gets one polished luxury stretch, this is the one. The avenue feels calmer than a rushed shopping sprint and rewards a slower walk."
    }
  },
  {
    area: { zh: "7/9 白天", en: "9 Jul daytime" },
    title: { zh: "香榭麗舍大道", en: "Champs-Elysees" },
    tags: [{ zh: "大道", en: "Boulevard" }, { zh: "散步", en: "Walk" }],
    body: {
      zh: "香榭麗舍不用急著走完。沿路坐一下、看一下街景，比硬趕完整條更舒服。",
      en: "The Champs-Elysees works best as a paced walk rather than a rush. A pause for coffee or lunch nearby makes the boulevard feel far more generous."
    }
  },
  {
    area: { zh: "7/9 下午", en: "9 Jul afternoon" },
    title: { zh: "凱旋門", en: "Arc de Triomphe" },
    tags: [{ zh: "地標", en: "Landmark" }, { zh: "主景", en: "Signature" }],
    body: {
      zh: "凱旋門放在香榭麗舍後面最順。一路走過去就好，不用特地把它排成很大的行程。",
      en: "The Arc works well when the light is still clear and the avenue leads directly into it. Up close, it carries the city’s grand and ceremonial side very clearly."
    }
  },
  {
    area: { zh: "7/8 或 7/9", en: "8 or 9 Jul" },
    title: { zh: "Place Vendôme", en: "Place Vendôme" },
    tags: [{ zh: "珠寶", en: "Jewelry" }, { zh: "街角", en: "Corner" }],
    body: {
      zh: "Place Vendôme 不用待很久，但很值得順路繞一下。剛好可以接在羅浮宮和右岸中間，停一下再走。",
      en: "Place Vendôme does not need much time, but it is worth the detour. Its quiet polish adds a distinctly Parisian pause between museums and boutiques."
    }
  },
  {
    area: { zh: "7/9 夜晚", en: "9 Jul evening" },
    title: { zh: "塞納河夜景", en: "Seine at night" },
    tags: [{ zh: "夜景", en: "Night view" }, { zh: "散步", en: "Walk" }],
    body: {
      zh: "白天走完大道和精品街後，晚上去塞納河邊就好。走一小段、看看夜色，這天就差不多了。",
      en: "If the day has been polished and bright, the Seine softens everything at night. Even a short walk here is enough to slow the city back down."
    }
  },
  {
    area: { zh: "7/10 上午", en: "10 Jul morning" },
    title: { zh: "聖心堂", en: "Sacré-Cœur" },
    tags: [{ zh: "高處", en: "Hilltop" }, { zh: "晨間", en: "Morning" }],
    body: {
      zh: "聖心堂適合放在巴黎最後一個早上。趁人還沒那麼多時先去，走完再接蒙馬特就好。",
      en: "Sacré-Cœur suits the final Paris morning, before the city fully speeds up. The steps, the height, and the nearby lanes give the day a lighter beginning."
    }
  },
  {
    area: { zh: "7/7–7/10 夜晚", en: "7-10 Jul nights" },
    title: { zh: "Pullman 陽台看鐵塔", en: "The Pullman balcony tower view" },
    tags: [{ zh: "住宿", en: "Stay" }, { zh: "夜晚", en: "Night" }],
    body: {
      zh: "Pullman 這幾晚的重點就是陽台。如果房間看得到鐵塔，晚上就不用一直往外跑，回房間看燈亮起來就好。",
      en: "The high-floor balcony room turns Pullman into more than just a hotel. Coming back at night to a quiet tower view gives the Paris chapter a very complete finish."
    }
  }
];

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

const dailyGuides = [
  {
    id: "day-1",
    day: "Day 1",
    date: "6/29-6/30",
    city: { zh: "Taipei → Frankfurt → Manchester", en: "Taipei → Frankfurt → Manchester" },
    theme: { zh: "長程飛行、轉機散步與抵達曼徹斯特", en: "Long-haul travel, a Frankfurt walk, and arrival in Manchester" },
    intro: { zh: "第一天先把出發和轉機走順就好。法蘭克福如果還有體力，就出去走一小段；傍晚再接到曼徹斯特，晚上早點休息。", en: "The trip opens with the long-haul flight, and the Frankfurt layover becomes a small city walk before the final segment into Manchester." },
    highlights: ["CI 0061", "羅馬廣場", "MainNizza", "LH 0946", "INNSiDE Manchester"],
    route: [
      { label: { zh: "上午｜抵達歐洲", en: "Morning" }, text: { zh: "清晨到法蘭克福後先看好下一段航班，再決定要不要出去走。", en: "Arrive in Frankfurt, check the onward flight, then use part of the layover for a short walk." } },
      { label: { zh: "中午｜轉機散步", en: "Noon" }, text: { zh: "如果時間夠，就走羅馬廣場、美因河，再去 MainNizza 吃午餐。", en: "Walk from Romerberg toward the Main river and stop for lunch at MainNizza." } },
      { label: { zh: "下午｜回機場", en: "Afternoon" }, text: { zh: "下午提早回機場，不要把轉機抓得太緊。", en: "Head back after the Euro sign stop and leave enough buffer before Lufthansa." } },
      { label: { zh: "夜晚｜今晚落腳", en: "Evening" }, text: { zh: "到曼徹斯特後先入住、吃點東西，第一晚不要再加行程。", en: "Arrive in Manchester, check in, eat something simple, and keep the evening light." } }
    ],
    notes: ["法蘭克福這段不用貪多，走一小段就好。", "重要文件、登機證和離線票券先放在同一個地方。"],
    tickets: ["法蘭克福散步景點免費，午餐依現場消費。"]
  },
  {
    id: "day-2",
    day: "Day 2",
    date: "7/1",
    city: { zh: "Manchester", en: "Manchester" },
    theme: { zh: "會議主段正式開始", en: "The conference days begin in earnest" },
    intro: { zh: "從今天開始就以 AIB 為主。白天先把會議顧好，晚上頂多吃飯或散步，不用另外塞景點。", en: "The academic core begins here, with the day shaped mainly by the conference and the city saved for smaller moments after sessions." },
    highlights: ["AIB Conference", "會議 sessions", "Networking", "Manchester city centre"],
    route: [
      { label: { zh: "上午｜會議開始", en: "Morning" }, text: { zh: "早上先進會場，把 session 和第一輪交流走順。", en: "Settle into sessions and the first conversations of the conference day." } },
      { label: { zh: "中午｜簡單吃飯", en: "Noon" }, text: { zh: "中午先吃飯、休息，不用特地跑遠。", en: "Keep lunch simple and use the break for session changes rather than a longer city detour." } },
      { label: { zh: "下午｜主會議時段", en: "Afternoon" }, text: { zh: "下午繼續會議，把重點放在內容和交流。", en: "Stay with the main conference rhythm through the afternoon." } },
      { label: { zh: "夜晚｜先收早一點", en: "Evening" }, text: { zh: "晚上簡單吃個飯就好，把體力留給後面幾天。", en: "Keep the evening open for dinner or a short walk and save energy for the days ahead." } }
    ],
    notes: ["第一個完整會議日不必再加太多旅遊安排。", "收據和文件可以每天回飯店就先整理。"],
    tickets: ["當天以會議安排為主，景點不另外收費。"]
  },
  {
    id: "day-3",
    day: "Day 3",
    date: "7/2",
    city: { zh: "Manchester", en: "Manchester" },
    theme: { zh: "會議日、交流與發表", en: "Conference sessions, exchanges, and presentation rhythm" },
    intro: { zh: "今天還是會議日。場次、交流和發表準備會交錯在一起，所以行程不要另外排太多。", en: "This day stays anchored in the conference rhythm, with sessions, networking, and presentation prep woven together." },
    highlights: ["AIB sessions", "presentation prep", "networking", "Manchester"],
    route: [
      { label: { zh: "上午｜主要場次", en: "Morning" }, text: { zh: "上午先把主要場次走完，別讓外面的行程把會議切碎。", en: "Use the morning for the main session blocks and keep the academic focus steady." } },
      { label: { zh: "中午｜簡單交流", en: "Noon" }, text: { zh: "中午吃飯、聊一下，順便讓腦袋休息。", en: "Keep noon for light networking and a brief pause." } },
      { label: { zh: "下午｜確認發表資料", en: "Afternoon" }, text: { zh: "下午再把簡報、講稿和進場順序看一次。", en: "Use the afternoon to double-check slides, notes, and the flow into the presentation." } },
      { label: { zh: "夜晚｜休息", en: "Evening" }, text: { zh: "晚上不要硬排景點，回飯店整理就好。", en: "Do not force extra sightseeing into the evening; keep it for rest and reset." } }
    ],
    notes: [conferenceSessionSentence("competitive", "zh"), "這天如果還有發表準備，就把其他活動再減一點。"],
    tickets: ["仍以會議安排為主。"]
  },
  {
    id: "day-4",
    day: "Day 4",
    date: "7/3",
    city: { zh: "Manchester", en: "Manchester" },
    theme: { zh: "Interactive 發表與會議最後一天", en: "Interactive presentation and conference close" },
    intro: { zh: "今天先把 Interactive 發表顧好。其餘時間留給最後的交流，晚上再準備往倫敦。", en: "The final conference day centers on the Interactive session, with the rest of the time helping the Manchester chapter close more gently." },
    highlights: ["Interactive session", "09:30-10:45", "Room 2217 (UP)", "conference close"],
    route: [
      { label: { zh: "上午｜Interactive 發表", en: "Morning" }, text: { zh: "上午先專心把 Interactive 發表走完，其他事情都往後排。", en: "The Interactive presentation is the day’s anchor, so keep entry, slides, and timing front and center." } },
      { label: { zh: "中午｜先吃飯", en: "Noon" }, text: { zh: "發表結束後先吃飯，整個人先放鬆一下。", en: "After the presentation, use lunch to come back down into a calmer pace." } },
      { label: { zh: "下午｜最後交流", en: "Afternoon" }, text: { zh: "下午把最後幾場和最後幾個人聊完，就差不多了。", en: "Use the afternoon for the final conversations and the last pieces of the conference." } },
      { label: { zh: "夜晚｜收行李", en: "Evening" }, text: { zh: "晚上把文件、票券和明天去倫敦的東西整理好。", en: "Get documents, tickets, and the London transfer ready before bed." } }
    ],
    notes: [conferenceSessionSentence("interactive", "zh"), "今天也適合把會議相關文件再整理一次。"],
    tickets: ["會議日不另外安排門票行程。"]
  },
  {
    id: "day-5",
    day: "Day 5",
    date: "7/4",
    city: { zh: "Manchester → London", en: "Manchester → London" },
    theme: { zh: "離開會議城市，走進倫敦第一段街景", en: "Leaving the conference city and stepping into London" },
    intro: { zh: "今天就是移動日。上午離開曼徹斯特，下午進倫敦，先把西敏一帶幾個最經典的點走一遍就好。", en: "This day feels like a transition chapter: leave Manchester, head south, and let Westminster set the tone of London." },
    highlights: ["Avanti West Coast", "London Euston", "Big Ben", "Buckingham Palace", "St James's Park"],
    route: [
      { label: { zh: "上午｜離開曼徹斯特", en: "Morning" }, text: { zh: "早上從 Manchester Piccadilly 出發，先把火車這段走順。", en: "Leave from Manchester Piccadilly and settle into the rail move south." } },
      { label: { zh: "中午｜火車南下", en: "Noon" }, text: { zh: "Avanti 大約 2 小時 10 分，剛好拿來換城市。", en: "The Avanti ride takes about 2h10 and cleanly shifts the trip from conference mode into travel mode." } },
      { label: { zh: "下午｜先看西敏", en: "Afternoon" }, text: { zh: "抵達後先走 Big Ben、Buckingham Palace 和 St James's Park。", en: "After arrival, Big Ben, Buckingham Palace, and St James’s Park give London its classic opening scene." } },
      { label: { zh: "夜晚｜今晚落腳", en: "Evening" }, text: { zh: "晚上回飯店就好，後面還有兩個完整倫敦日。", en: "Settle into the hotel and leave the next days to unfold at a city pace." } }
    ],
    notes: ["這天移動比景點更重要，不要把行程排太緊。", "如果倫敦住宿還沒最後確認，先以 Euston 周邊動線為優先。"],
    tickets: ["Avanti 票價會依班次而變，建議先看 Advance。"]
  },
  {
    id: "day-6",
    day: "Day 6",
    date: "7/5",
    city: { zh: "London", en: "London" },
    theme: { zh: "精品街區和百貨", en: "Luxury streets and the polished side of London" },
    intro: { zh: "這天可以把百貨和精品街放在一起走，不用趕景點。重點是留時間給街區、百貨和下午茶。", en: "Let the day stay with London’s polished shopping districts rather than trying to rush between landmarks." },
    highlights: ["Harrods", "Bond Street", "Chanel", "Dior"],
    route: [
      { label: { zh: "上午｜晚一點出門", en: "Morning" }, text: { zh: "早上不用太趕，這天本來就不是靠密集跑點。", en: "Start the morning gently and leave room for the day to open up." } },
      { label: { zh: "中午｜Harrods 一帶", en: "Noon" }, text: { zh: "中午前後到 Harrods，順著百貨和附近街區走就好。", en: "Head toward Harrods around midday and move through the district at an easy pace." } },
      { label: { zh: "下午｜Bond Street", en: "Afternoon" }, text: { zh: "下午把 Bond Street 和精品街放在一起走，最省力。", en: "Keep Bond Street and the luxury stretch together through the afternoon." } },
      { label: { zh: "夜晚｜晚餐就好", en: "Evening" }, text: { zh: "晚上留給晚餐和散步，不用再加別的。", en: "End with dinner and a slower walk so the shopping day can taper off naturally." } }
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
    intro: { zh: "這天把倫敦留鬆一點。從 Covent Garden 到 Piccadilly Circus，想停就停，不用把路線排太硬。", en: "This day is less about checking off landmarks and more about letting central London breathe a little." },
    highlights: ["Covent Garden", "Piccadilly Circus", "自由活動"],
    route: [
      { label: { zh: "上午｜先走 Covent Garden", en: "Morning" }, text: { zh: "上午先在 Covent Garden 一帶走一圈。", en: "Begin around Covent Garden and let the day start on London’s lighter side." } },
      { label: { zh: "中午｜找地方坐一下", en: "Noon" }, text: { zh: "中午就找一間想坐的咖啡店或餐廳，不用特別追名單。", en: "Keep lunch open enough for whichever place feels right that day." } },
      { label: { zh: "下午｜接到 Piccadilly", en: "Afternoon" }, text: { zh: "下午再接到 Piccadilly Circus，路上想逛什麼就順著看。", en: "Ease toward Piccadilly Circus and let the route itself guide the afternoon." } },
      { label: { zh: "夜晚｜早點回去也可以", en: "Evening" }, text: { zh: "今晚可以補前兩天沒走完的地方，也可以直接早點回飯店。", en: "Use the evening for unfinished stops or simply return early." } }
    ],
    notes: ["這天最好不要排太硬，因為隔天還要接 Eurostar。", "如果前兩天有想回頭再看的地方，就留在今天。"],
    tickets: ["以步行和市區交通為主。"]
  },
  {
    id: "day-8",
    day: "Day 8",
    date: "7/7",
    city: { zh: "London → Paris", en: "London → Paris" },
    theme: { zh: "離開倫敦，住進 Pullman 與巴黎第一眼", en: "Leaving London, checking into Pullman, and meeting Paris for the first time" },
    intro: { zh: "今天從倫敦進巴黎。先把 Pullman 和房間安頓好，晚上再看鐵塔夜景；如果陽台看得到鐵塔，這晚就不用再跑太多地方。", en: "The Eurostar move turns the trip into its French chapter, linking London directly to Pullman before the Eiffel Tower lights take over the first evening." },
    highlights: ["St Pancras", "Eurostar", "Pullman Paris Tour Eiffel", "Eiffel Tower night view", "Balcony tower view"],
    route: [
      { label: { zh: "上午｜離開倫敦", en: "Morning" }, text: { zh: "早上提早去 St Pancras，不要把 Eurostar 抓太緊。", en: "Close the London chapter calmly and head to St Pancras with enough margin for the international leg." } },
      { label: { zh: "中午｜搭 Eurostar", en: "Noon" }, text: { zh: "這段移動很順，從市中心直接接到市中心。", en: "Eurostar keeps the move clean: city centre to city centre." } },
      { label: { zh: "下午｜先去 Pullman", en: "Afternoon" }, text: { zh: "到巴黎後先去 Pullman，把房間和陽台安頓好。", en: "After arriving in Paris, check into Pullman Paris Tour Eiffel and settle into the balcony-and-tower rhythm before doing anything else." } },
      { label: { zh: "夜晚｜鐵塔第一晚", en: "Evening" }, text: { zh: "晚上就留給鐵塔夜景，回房後再看一次陽台視角。", en: "Give the evening to the Eiffel Tower, then return for the balcony sparkle view that completes the first Paris night." } }
    ],
    notes: ["Eurostar 上車前就會完成護照檢查，提早到站比較安心。", "巴黎第一晚不要排太滿，鐵塔和 Pullman 就夠了。"],
    tickets: ["Eurostar 票待訂；鐵塔周邊夜景散步免費。"]
  },
  {
    id: "day-9",
    day: "Day 9",
    date: "7/8",
    city: { zh: "Paris", en: "Paris" },
    theme: { zh: "羅浮宮、Place Vendôme 與巴黎右岸", en: "The Louvre, Place Vendôme, and the Right Bank" },
    intro: { zh: "今天就順著右岸走。羅浮宮放前面，後面再接 Place Vendôme、老佛爺頂樓和歌劇院周邊，不用把點排得太碎。", en: "The Louvre anchors the day, but it flows outward into Place Vendôme, the Galeries Lafayette rooftop, and the streets around the Opéra." },
    highlights: ["Louvre Museum", "Place Vendôme", "Galeries Lafayette Rooftop", "Palais Garnier area"],
    route: [
      { label: { zh: "上午｜先看羅浮宮", en: "Morning" }, text: { zh: "上午先去羅浮宮，不用貪多，挑最想看的幾個區就好。", en: "Use the clearest morning hours for the Louvre, then ease back out through the courtyards and streets." } },
      { label: { zh: "中午｜接到 Place Vendôme", en: "Noon" }, text: { zh: "中午從羅浮宮接到 Place Vendôme，順便吃午餐。", en: "Move from the Louvre area toward Place Vendôme and keep lunch slow enough for the Right Bank mood to build." } },
      { label: { zh: "下午｜上屋頂看巴黎", en: "Afternoon" }, text: { zh: "下午走老佛爺頂樓和歌劇院周邊，這樣路線最順。", en: "Use the afternoon for the Galeries Lafayette rooftop and the Opéra district, moving between city views and street-level wandering." } },
      { label: { zh: "夜晚｜回 Pullman", en: "Evening" }, text: { zh: "晚上回 Pullman 就好，不用再加別的景點。", en: "Return to Pullman and let the room with its balcony view close the Right Bank day." } }
    ],
    notes: ["羅浮宮這天不要再加太多重景點。", "如果想在老佛爺頂樓拍照，傍晚前後的光線會很好。"],
    tickets: ["Louvre 門票請依官網時段確認；老佛爺頂樓免費。"]
  },
  {
    id: "day-10",
    day: "Day 10",
    date: "7/9",
    city: { zh: "Paris", en: "Paris" },
    theme: { zh: "Avenue Montaigne、香榭麗舍與凱旋門", en: "Avenue Montaigne, the Champs-Elysees, and the Arc" },
    intro: { zh: "Avenue Montaigne、香榭麗舍和凱旋門放同一天最順。不用每個地方都待很久，重點是把右岸那段走順。", en: "This is Paris at its most polished, beginning on Avenue Montaigne, stretching through the Champs-Elysees, and closing by the Seine." },
    highlights: ["Avenue Montaigne", "Champs-Elysees", "Arc de Triomphe", "Seine night view"],
    route: [
      { label: { zh: "上午｜先走 Avenue Montaigne", en: "Morning" }, text: { zh: "上午先走 Avenue Montaigne，街道安靜一點，也比較好看。", en: "Begin on Avenue Montaigne and let Paris’s cleanest luxury stretch open the day." } },
      { label: { zh: "中午｜接到香榭麗舍", en: "Noon" }, text: { zh: "中午再接到香榭麗舍，找地方吃飯、休息。", en: "Move into the Champs-Elysees for lunch and keep the pace deliberately unhurried." } },
      { label: { zh: "下午｜走到凱旋門", en: "Afternoon" }, text: { zh: "下午把凱旋門留在最後，剛好把這一段走完。", en: "Leave the Arc for the clearest part of the afternoon, then finish the boulevard at a measured pace." } },
      { label: { zh: "夜晚｜塞納河夜景", en: "Evening" }, text: { zh: "晚上去塞納河邊走一下，再回 Pullman。", en: "Give the evening to the Seine so the day closes with something gentler than the boulevard itself." } }
    ],
    notes: ["這天就把精品街和城市主景排在同一條線上。", "如果晚餐後還有體力，再回鐵塔附近看一次夜景也不錯。"],
    tickets: ["大道與街區散步免費；若進凱旋門需另查票。"]
  },
  {
    id: "day-11",
    day: "Day 11",
    date: "7/10",
    city: { zh: "Paris", en: "Paris" },
    theme: { zh: "蒙馬特晨景、最後採買與轉往 CDG", en: "Montmartre morning, final shopping, and the move to CDG" },
    intro: { zh: "巴黎最後一天不要再衝太多點。上午去聖心堂和蒙馬特，下午把最後採買和行李收好，晚上直接轉到 CDG。", en: "The final Paris day stays lighter, but Montmartre still gives it a distinctive opening before the luggage handoff and the move to Novotel Paris Charles-de-Gaulle Airport." },
    highlights: ["Sacré-Cœur", "Montmartre", "最後採買", "Novotel CDG"],
    route: [
      { label: { zh: "上午｜先去聖心堂", en: "Morning" }, text: { zh: "上午先去聖心堂和蒙馬特，趁還有精神時先走完。", en: "Start at Sacré-Cœur and Montmartre, giving the final Paris morning to higher views and slower streets." } },
      { label: { zh: "中午｜最後採買", en: "Noon" }, text: { zh: "中午之後把想補的伴手禮、藥妝或精品一次收好。", en: "Use midday and early afternoon to finish the last gifts, beauty buys, or boutique stops." } },
      { label: { zh: "下午｜回 Pullman 拿行李", en: "Afternoon" }, text: { zh: "下午回 Pullman 取寄放行李，這樣巴黎這段就算收好了。", en: "Return to Pullman for the stored luggage and let the Paris chapter close properly." } },
        { label: { zh: "夜晚｜前往 CDG", en: "Evening" }, text: { zh: "晚上直接轉往巴黎戴高樂機場候機樓諾富特酒店，隔天會輕鬆很多。", en: "Move to Novotel Paris Charles-de-Gaulle Airport for the night so the Air France departure can begin more calmly the next morning." } }
    ],
    notes: ["這天不用再塞別的點，把巴黎這段收好就行。", "去 CDG 前先把隔天的法航、英航和華航資料都離線存好。"],
    tickets: ["聖心堂與蒙馬特散步免費；採買與交通依實際安排。"]
  },
  {
    id: "day-12",
    day: "Day 12",
    date: "7/11-7/12",
    city: { zh: "Paris → Manchester → Heathrow → Taipei", en: "Paris → Manchester → Heathrow → Taipei" },
    theme: { zh: "巴黎收束、歐洲段接駁與返台", en: "Closing Paris and connecting all the way home" },
    intro: { zh: "最後一天就專心把回程接好。從 CDG 出發後，巴黎、曼徹斯特、希斯洛一路接回台北，不要再另外加行程。", en: "The last day is about clean connections rather than sightseeing, starting from Novotel Paris Charles-de-Gaulle Airport and keeping each onward segment steady." },
    highlights: ["AF 1068", "CDG T2E", "BA 1371", "CI 0082"],
    route: [
      { label: { zh: "上午｜從 CDG 出發", en: "Morning" }, text: { zh: "早上直接從機場住宿進航站，這樣會比較從容。", en: "Start directly from the airport stay into the terminal so the Air France leg can begin calmly." } },
      { label: { zh: "中午｜巴黎回曼徹斯特", en: "Noon" }, text: { zh: "法航這段是整個回程的起點，先把這段接好。", en: "The Air France business segment starts the homeward chain, so keep things smooth and steady." } },
      { label: { zh: "下午｜再接希斯洛", en: "Afternoon" }, text: { zh: "到曼徹斯特後，再接到希斯洛。", en: "After Manchester, move straight into the Heathrow connection." } },
      { label: { zh: "夜晚｜回台北", en: "Evening" }, text: { zh: "晚上搭 CI 0082 回台北，這天就以順順回家為主。", en: "CI 0082 closes the journey and turns it fully toward home." } }
    ],
    notes: ["7/11 上午不要再排巴黎景點。", "不要跳過 MAN-LHR 航段，希斯洛轉機要跟著 Flight Connections 走。"],
    tickets: ["AF 歐洲段：約 EUR 354.05 / NT$12,930。"]
  }
];

const dayCardFrames = {
  "day-1": {
    location: { zh: "台北｜法蘭克福｜曼徹斯特", en: "Taipei | Frankfurt | Manchester" },
    tags: [{ zh: "長途飛行", en: "Long-haul" }, { zh: "轉機", en: "Layover" }, { zh: "散步", en: "Walk" }, { zh: "輕鬆", en: "Light" }],
    kicker: { zh: "出發、飛行與旅程開場", en: "Departure, flying, and the opening of the trip" },
    title: { zh: "德英法旅程的出發日", en: "The departure day that opens the Germany-UK-France route" },
    note: { zh: "今天的重點很簡單：順順出境、順順轉機、順順抵達，把體力留給後面的會議與城市旅行。", en: "The goal is simple: leave cleanly, connect cleanly, and arrive with enough energy left for the conference and the city chapters ahead." }
  },
  "day-2": {
    location: { zh: "曼徹斯特｜AIB 2026", en: "Manchester | AIB 2026" },
    tags: [{ zh: "會議", en: "Conference" }, { zh: "交流", en: "Networking" }, { zh: "別排太滿", en: "Steady pace" }],
    kicker: { zh: "這天先專心開會", en: "Let the route turn fully toward the conference" },
    title: { zh: "第一個完整會議日", en: "The first full conference day" },
    note: { zh: "這幾天以 AIB 為主就好，別急著把城市行程塞進來。", en: "Let the conference rhythm settle first. Manchester does not need to compete with sightseeing during these core days." }
  },
  "day-3": {
    location: { zh: "曼徹斯特｜會議主段", en: "Manchester | Conference core" },
    tags: [{ zh: "會議", en: "Conference" }, { zh: "發表準備", en: "Presentation prep" }, { zh: "留白", en: "Breathing room" }],
    kicker: { zh: "場次和發表準備交錯的一天", en: "A day where sessions, conversations, and preparation overlap" },
    title: { zh: "把會議內容和發表準備放前面", en: "The day when the academic core feels fully in motion" },
    note: { zh: "今天不用另外加景點，把會議和發表準備顧好就夠了。", en: "It is better to let the conference and presentation preparation take the lead than to force extra city stops into the margins." }
  },
  "day-4": {
    location: { zh: "曼徹斯特｜Interactive 發表", en: "Manchester | Interactive session" },
    tags: [{ zh: "發表", en: "Presentation" }, { zh: "會議收尾", en: "Conference close" }, { zh: "整理", en: "Reset" }],
    kicker: { zh: "把會議主段收好", en: "Let the conference chapter close cleanly" },
    title: { zh: "Interactive 發表與曼徹斯特收尾", en: "The Interactive session and a softer Manchester close" },
    note: { zh: "最重要的是把 Interactive 場次顧好，其他事情都往後放。", en: "The Interactive slot is the anchor today; everything else can soften around it so the academic chapter closes properly." }
  },
  "day-5": {
    location: { zh: "曼徹斯特｜倫敦", en: "Manchester | London" },
    tags: [{ zh: "火車", en: "Rail" }, { zh: "轉場", en: "Transfer" }, { zh: "地標", en: "Landmarks" }],
    kicker: { zh: "離開會議城市，進入倫敦第一段街景", en: "Leaving the conference city and stepping into London" },
    title: { zh: "離開曼徹斯特，往倫敦走", en: "Heading south and letting London unfold" },
    note: { zh: "今天的重點就是把北邊的會議城市，順順接到倫敦第一晚。", en: "The beauty of the day is in the switch itself: Manchester in the morning, Westminster by the afternoon." }
  },
  "day-6": {
    location: { zh: "倫敦｜精品街與百貨", en: "London | Luxury streets and department stores" },
    tags: [{ zh: "精品", en: "Luxury" }, { zh: "百貨", en: "Department stores" }, { zh: "城市散步", en: "City walk" }],
    kicker: { zh: "把 Harrods 和 Bond Street 放在同一天", en: "London in its more polished register" },
    title: { zh: "Harrods 和 Bond Street 放同一天就好", en: "Giving Harrods and Bond Street a slower, more polished day" },
    note: { zh: "今天不用趕點，百貨、街景和晚餐順順接起來就好。", en: "A slower rhythm suits this day best; shopping, streets, and dinner should feel like one continuous city mood." }
  },
  "day-7": {
    location: { zh: "倫敦｜Covent Garden｜Piccadilly", en: "London | Covent Garden | Piccadilly" },
    tags: [{ zh: "街區", en: "Districts" }, { zh: "自由活動", en: "Free time" }, { zh: "留白", en: "Open" }],
    kicker: { zh: "讓倫敦留下一點鬆弛感", en: "Let London keep some looseness" },
    title: { zh: "最後一個倫敦日，不用排太滿", en: "The last London day is best kept a little slower" },
    note: { zh: "留一點空白給咖啡、補逛或單純散步，隔天進巴黎會比較輕鬆。", en: "Leave room for coffee, a return stop, or just a slower walk; that looseness helps the Paris transfer feel much calmer the next day." }
  },
  "day-8": {
    location: { zh: "倫敦｜巴黎", en: "London | Paris" },
    tags: [{ zh: "Eurostar", en: "Eurostar" }, { zh: "Pullman", en: "Pullman" }, { zh: "鐵塔夜景", en: "Tower night" }],
    kicker: { zh: "從倫敦進巴黎，讓鐵塔成為第一眼", en: "Entering Paris from London, with the tower as the first image" },
    title: { zh: "住進 Pullman，把巴黎第一晚留給鐵塔", en: "Checking into Pullman and giving the first Paris night to the Eiffel Tower" },
    note: { zh: "巴黎第一晚先把 Pullman 和陽台安頓好，再去看鐵塔就夠了。", en: "The Paris chapter works best when Pullman comes first: settle the room and balcony view, then let the tower lights take over the evening." }
  },
  "day-9": {
    location: { zh: "巴黎｜羅浮宮｜右岸", en: "Paris | Louvre | Right Bank" },
    tags: [{ zh: "藝術", en: "Art" }, { zh: "右岸", en: "Right Bank" }, { zh: "屋頂視角", en: "Rooftop view" }],
    kicker: { zh: "把藝術與右岸街景接在一起", en: "Bringing art and the Right Bank into one day" },
    title: { zh: "羅浮宮、Place Vendôme 和老佛爺放同一天", en: "After the Louvre, letting Paris continue through its streets" },
    note: { zh: "這一天就走一條線：羅浮宮、Place Vendôme、老佛爺頂樓和歌劇院周邊。", en: "This day works best as one line: the Louvre, Place Vendôme, the Galeries Lafayette rooftop, and the Opéra district, moving from artworks into the city’s own expression." }
  },
  "day-10": {
    location: { zh: "巴黎｜精品大道｜塞納河", en: "Paris | Luxury avenues | Seine" },
    tags: [{ zh: "精品", en: "Luxury" }, { zh: "夜景", en: "Night view" }, { zh: "經典地標", en: "Classics" }],
    kicker: { zh: "把右岸這幾個地方排在同一天", en: "Give Paris its most polished day here" },
    title: { zh: "Avenue Montaigne、香榭麗舍與凱旋門", en: "Avenue Montaigne, the Champs-Elysees, and the Arc" },
    note: { zh: "白天走精品街和大道，晚上去塞納河邊，這樣安排最順。", en: "Walk the luxury streets and the grand axis by day, then give the evening to the Seine so the polished and the softer sides of Paris stay together." }
  },
  "day-11": {
    location: { zh: "巴黎｜蒙馬特｜CDG", en: "Paris | Montmartre | CDG" },
    tags: [{ zh: "晨景", en: "Morning view" }, { zh: "最後採買", en: "Last shopping" }, { zh: "機場轉場", en: "Airport move" }],
    kicker: { zh: "巴黎最後一天，不急著趕景點", en: "The final Paris day should not feel rushed" },
    title: { zh: "蒙馬特、最後採買與轉往機場", en: "Montmartre, final shopping, and the move toward the airport" },
    note: { zh: "這天就把巴黎收好：上午蒙馬特，下午拿行李，晚上去 CDG。", en: "The last Paris day is more about a graceful finish: Montmartre in the morning, a slower afternoon for final shopping, then a calm move to Novotel Paris Charles-de-Gaulle Airport." }
  },
  "day-12": {
    location: { zh: "巴黎｜曼徹斯特｜希斯洛｜台北", en: "Paris | Manchester | Heathrow | Taipei" },
    tags: [{ zh: "返程", en: "Return" }, { zh: "銜接", en: "Connections" }, { zh: "長途飛行", en: "Long-haul" }],
    kicker: { zh: "把整段返程接得乾淨", en: "Keeping the return chain clean and steady" },
    title: { zh: "回家的這一天，重點是順順銜接", en: "The homebound day is about smooth connections" },
    note: { zh: "這天不再排景點，最重要的是把每一段銜接走順。", en: "The last day no longer needs one more sightseeing moment; what matters is keeping each connection between Paris, Manchester, and Heathrow steady." }
  }
};

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
    title: conferenceSessions.competitive.paperTitle,
    session: { zh: "Competitive 發表", en: "Competitive Session" },
    coauthor: { zh: `共同作者：${conferenceSessions.competitive.coauthor.zh}`, en: `Coauthor: ${conferenceSessions.competitive.coauthor.en}` },
    schedule: buildConferenceSchedule(conferenceSessions.competitive),
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
    title: conferenceSessions.interactive.paperTitle,
    session: { zh: "Interactive 發表", en: "Interactive Session" },
    coauthor: { zh: `共同作者：${conferenceSessions.interactive.coauthor.zh}`, en: `Coauthor: ${conferenceSessions.interactive.coauthor.en}` },
    schedule: buildConferenceSchedule(conferenceSessions.interactive),
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

function renderSummaryCard({ status, title, value, note, facts, image, imageAlt, photos }) {
  const valueMarkup = value ? `<strong>${escapeHtml(t(value))}</strong>` : "";
  const factsMarkup = facts ? renderList(facts) : "";
  const noteMarkup = note ? `<p>${escapeHtml(t(note))}</p>` : "";
  const imageMarkup = image ? `
    <div class="summary-card-media">
      <img class="summary-card-image" src="${escapeHtml(image)}" alt="${escapeHtml(t(imageAlt || title))}" loading="lazy" />
    </div>
  ` : "";
  const galleryMarkup = photos?.length ? `
    <div class="summary-card-gallery${photos.length === 1 ? " single" : ""}">
      ${photos.map((photo) => `
        <figure class="summary-photo-tile">
          <img class="summary-photo-image" src="${escapeHtml(photo.src)}" alt="${escapeHtml(t(photo.alt || photo.label || title))}" loading="lazy" />
          ${photo.label ? `<figcaption>${escapeHtml(t(photo.label))}</figcaption>` : ""}
        </figure>
      `).join("")}
    </div>
  ` : "";
  return `
    <article class="summary-card${image || photos?.length ? " with-media" : ""}">
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

function renderStayCandidateCard({ status, title, image, imageAlt, location, strengths, tradeoffs, fit, link }) {
  return `
    <article class="stay-candidate-card${image ? " with-image" : ""}">
      ${image ? `
        <div class="stay-card-image-wrap candidate-image-wrap">
          <img class="stay-card-image candidate-image" src="${escapeHtml(image)}" alt="${escapeHtml(t(imageAlt || title))}" loading="lazy" />
        </div>
      ` : ""}
      <div class="stay-candidate-copy">
        <div class="stay-candidate-head">
          ${statusChip(status)}
          <h3>${escapeHtml(t(title))}</h3>
        </div>
        <div class="stay-candidate-grid">
          <div class="stay-candidate-row">
            <span>${state.lang !== "zh" ? "Position" : "定位"}</span>
            <p>${escapeHtml(t(location))}</p>
          </div>
          <div class="stay-candidate-row">
            <span>${state.lang !== "zh" ? "Best part" : "優點"}</span>
            <p>${escapeHtml(t(strengths))}</p>
          </div>
          <div class="stay-candidate-row">
            <span>${state.lang !== "zh" ? "Watch-out" : "缺點"}</span>
            <p>${escapeHtml(t(tradeoffs))}</p>
          </div>
          <div class="stay-candidate-row">
            <span>${state.lang !== "zh" ? "Why it fits" : "適合原因"}</span>
            <p>${escapeHtml(t(fit))}</p>
          </div>
        </div>
        ${link ? `<a class="stay-map-link" href="${escapeHtml(link)}" target="_blank" rel="noreferrer noopener">${state.lang !== "zh" ? "View hotel" : "查看飯店"}</a>` : ""}
      </div>
    </article>
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
    <div class="handbook-tabs-shell" aria-label="${state.lang !== "zh" ? "Handbook tabs" : "旅遊手冊分頁"}">
      <nav class="handbook-tabs-track" aria-label="${state.lang !== "zh" ? "Handbook tabs" : "旅遊手冊分頁"}">
        ${homeSectionTabs.map((tab, index) => `
          <a
            href="#${tab.id}"
            class="handbook-tab-link${index === 0 ? " active" : ""}"
            data-home-tab="${tab.id}"
            aria-label="${escapeHtml(t(tab.label))}"
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
    <div class="topbar handbook-topbar">
      <a class="handbook-brand" href="./index.html" aria-label="${state.lang !== "zh" ? "Back to overview" : "回到總覽"}">
        <span>${state.lang !== "zh" ? "AIB 2026 Manchester" : "AIB 2026 Manchester"}</span>
        <small>${state.lang !== "zh" ? "Germany · UK · France travel handbook" : "德英法之旅手冊"}</small>
      </a>
      <div class="control-dock" aria-label="${state.lang !== "zh" ? "Language and currency controls" : "語言與貨幣控制"}">
        <div class="control-group lang-buttons" role="tablist" aria-label="${state.lang !== "zh" ? "Language switcher" : "語言切換"}">
          <div class="control-label">${state.lang !== "zh" ? "Language" : "語言"}</div>
          <div class="control-buttons">
            ${langButtons}
          </div>
        </div>
        <div class="control-group currency-buttons" role="tablist" aria-label="${state.lang !== "zh" ? "Currency switcher" : "貨幣切換"}">
          <div class="control-label">${state.lang !== "zh" ? "Currency" : "幣別"}</div>
          <div class="control-buttons">
            ${currencyButtons}
          </div>
        </div>
      </div>
    </div>
    ${pageId === "home" ? "" : `
      <nav class="main-nav handbook-main-nav" aria-label="${state.lang !== "zh" ? "Primary page tabs" : "主要分頁"}">
        ${nav}
      </nav>
    `}
  `;

  document.querySelector("[data-site-footer]").innerHTML = `
    <footer class="site-footer handbook-footer">
        <p>${state.lang !== "zh" ? "AIB 2026 Manchester · Germany · UK · France travel handbook" : "AIB 2026 Manchester · 德英法之旅手冊"}</p>
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
    const heroFacts = [
      [{ zh: "旅程日期", en: "Trip dates" }, { zh: "2026/06/29 – 2026/07/12", en: "2026/06/29 – 2026/07/12" }],
      [{ zh: "主要城市", en: "Cities" }, { zh: "法蘭克福 · 曼徹斯特 · 倫敦 · 巴黎", en: "Frankfurt · Manchester · London · Paris" }],
      [{ zh: "發表場次", en: "Sessions" }, { zh: "兩場都已確認", en: "Both sessions confirmed" }],
      [{ zh: "目前狀態", en: "Status" }, { zh: "主段已定，後段細節持續補齊", en: "Core route set, later details still being refined" }]
    ];
    return `
      <div class="editorial-hero mobile-dashboard-hero handbook-home-hero hero-content hero-home-shell">
        <section class="hero-home-main">
          <p class="eyebrow">${state.lang !== "zh" ? "Academic Conference Travel Handbook" : "學術會議旅程手冊"}</p>
          <h1>${state.lang !== "zh" ? "AIB 2026 Manchester" : "AIB 2026 Manchester"}</h1>
          <div class="hero-subtitle">${state.lang !== "zh" ? "Germany · UK · France Travel Handbook" : "德英法之旅手冊"}</div>
          <div class="hero-dates">${state.lang !== "zh" ? "2026 / 06 / 29 - 2026 / 07 / 12" : "2026 / 06 / 29 - 2026 / 07 / 12"}</div>
          <div class="destinations">${state.lang !== "zh" ? "Frankfurt • Manchester • London • Paris" : "法蘭克福 • 曼徹斯特 • 倫敦 • 巴黎"}</div>
          <p class="hero-intro">${state.lang !== "zh" ? "The route starts with a Frankfurt layover, moves into Manchester for AIB 2026, then leaves room for London and Paris afterward." : "先在法蘭克福轉一下，再進曼徹斯特把 AIB 這段走完。後面幾天再給倫敦和巴黎。"} </p>
          <p class="hero-serif-note">${state.lang !== "zh" ? "Keep the conference days clean in the middle, then use London and Paris for the city part of the trip." : "曼徹斯特這幾天先顧會議，不要排太滿。AIB 走完之後，再接倫敦和巴黎就好。"} </p>
          <div class="hero-actions editorial-hero-actions">
            <a class="button primary hero-action-primary" href="#itinerary" data-home-tab-jump="itinerary">${state.lang !== "zh" ? "Open the daily guide" : "打開每日行程"}</a>
            <a class="button secondary hero-action-secondary" href="#overview" data-home-tab-jump="overview">${state.lang !== "zh" ? "Read the overview first" : "先讀旅程總覽"}</a>
          </div>
        </section>
        <aside class="hero-overview-panel" aria-label="${state.lang !== "zh" ? "Trip status summary" : "旅程狀態摘要"}">
          <div class="hero-overview-head">
            <span>${state.lang !== "zh" ? "Trip summary" : "旅程摘要"}</span>
            <strong>${state.lang !== "zh" ? "A calm reading before the details" : "先看整體，再看細節"}</strong>
          </div>
          <div class="hero-facts hero-overview-grid hero-overview-rows">
            ${heroFacts.map(([label, value]) => `
              <article class="hero-fact">
                <span>${escapeHtml(t(label))}</span>
                <strong>${escapeHtml(t(value))}</strong>
              </article>
            `).join("")}
          </div>
          <p class="hero-summary-note">${state.lang !== "zh" ? "Manchester, Pullman Paris, and the final Novotel CDG night are set. The only part still open is London." : "曼徹斯特、巴黎 Pullman 和回程前一晚的 Novotel CDG 都已經定了。現在主要只剩倫敦還沒選。"} </p>
        </aside>
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
  if (pageId === "home") return renderHomeTabs();
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
  return tripData.links.find(([label]) => label === name)?.[1] || "#";
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
      ${renderHandbookSummaryRow(state.lang !== "zh" ? "Trip dates" : "旅程日期", "2026/06/29 – 2026/07/12")}
      ${renderHandbookSummaryRow(state.lang !== "zh" ? "Cities" : "主要城市", state.lang !== "zh" ? "Frankfurt · Manchester · London · Paris" : "法蘭克福 · 曼徹斯特 · 倫敦 · 巴黎")}
      ${renderHandbookSummaryRow(state.lang !== "zh" ? "Conference core" : "會議主段", "AIB 2026 Manchester · 6/30–7/3")}
      ${renderHandbookSummaryRow(state.lang !== "zh" ? "Travel rhythm" : "路線順序", state.lang !== "zh" ? "Transit → conference → London → Paris" : "轉機 → 會議 → 倫敦 → 巴黎")}
      <p class="handbook-summary-note">${state.lang !== "zh" ? "Manchester and Paris already have fixed stays. London stays more flexible, which keeps the later route easier to adjust without breaking the whole plan." : "曼徹斯特和巴黎都已有固定住宿，倫敦則保留彈性。這樣後段比較好調整，但不會打亂整條路線。"} </p>
    </div>
  `;
}

function renderHomeOverviewPanel() {
  return `
    <section class="home-tab-panel-block">
      ${renderHomeSectionIntro(
        state.lang !== "zh" ? "Overview" : "總覽",
        state.lang !== "zh" ? "AIB 2026 Manchester · Germany, UK, and France" : "AIB 2026 Manchester｜德英法之旅",
        state.lang !== "zh"
          ? "The trip begins with a brief Frankfurt layover, settles into Manchester for AIB 2026, opens into London after the conference, and closes with museums, shopping streets, and tower-view evenings in Paris."
          : "先在法蘭克福轉一下，再進曼徹斯特把 AIB 這段走完，後面幾天留給倫敦和巴黎。"
      )}
      <div class="handbook-overview-layout compact">
        <div class="handbook-overview-copy">
          <p>${state.lang !== "zh" ? "Read the route first. Open the detailed days only when you actually need them." : "先看整體路線就好。真的要用到哪一天，再打開細節。"} </p>
          <p>${state.lang !== "zh" ? "Manchester stays focused on the conference. London can stay loose. Paris is better kept to the Louvre, the Right Bank, and the Pullman nights." : "曼徹斯特這幾天以會議為主。倫敦可以留鬆一點。巴黎就抓羅浮宮、右岸和 Pullman 這條線。"} </p>
          ${renderRouteLine()}
        </div>
        ${renderHeroSummaryRows()}
      </div>
      ${renderHandbookToc()}
    </section>
    <section class="home-tab-panel-block">
      ${renderHomeSectionIntro(
        state.lang !== "zh" ? "Travel Timeline" : "旅程時間軸",
        state.lang !== "zh" ? "Read the route in order before opening the details." : "先順著日期看一次，再決定要往哪一天細讀。",
        state.lang !== "zh" ? "The trip works best as a straight timeline: a brief Frankfurt opening, Manchester at the center, London as the city chapter, and Paris as the softer finish." : "先把整條線看順：法蘭克福轉機、曼徹斯特會議、倫敦幾天、最後進巴黎。"
      )}
      <div class="snapshot-timeline handbook-home-timeline">
        ${homeJourneyTimeline.map(renderHandbookTimelineEntry).join("")}
      </div>
    </section>
    <section class="home-tab-panel-block overview-conference-strip">
      <article class="overview-editorial-block">
        <span class="editorial-note-label">${state.lang !== "zh" ? "AIB 2026" : "AIB 2026"}</span>
        <h3>${state.lang !== "zh" ? "Keep the conference days clear." : "會議這幾天先顧好。"}</h3>
        <p>${state.lang !== "zh" ? "Both presentation sessions are confirmed. That means the Manchester part should stay simple: sessions first, transport second, sightseeing only if there is room." : "兩場發表都已確認，所以曼徹斯特這幾天不要再塞遠的景點。先把會議、交通和資料顧好就行。"} </p>
        <div class="meta-row">
          <div class="meta-pill"><span>${escapeHtml(t(conferenceSessions.competitive.label))}</span><strong>${escapeHtml(t(conferenceSessions.competitive.dateLabel))} · ${escapeHtml(conferenceSessions.competitive.time.replace("-", "–"))} · ${escapeHtml(conferenceSessions.competitive.room.replace(" (AMBS)", ""))}</strong></div>
          <div class="meta-pill"><span>${escapeHtml(t(conferenceSessions.interactive.label))}</span><strong>${escapeHtml(t(conferenceSessions.interactive.dateLabel))} · ${escapeHtml(conferenceSessions.interactive.time.replace("-", "–"))} · ${escapeHtml(conferenceSessions.interactive.room.replace(" (UP)", ""))}</strong></div>
        </div>
      </article>
    </section>
    <section class="home-tab-panel-block">
      ${renderHomeSectionIntro(
        state.lang !== "zh" ? "Paris chapter" : "巴黎段",
        state.lang !== "zh" ? "The last days are easier to read when they stay together." : "巴黎這幾天另外留一區就好。",
        state.lang !== "zh" ? "Pullman, the tower nights, the Louvre, and the Right Bank are the parts worth keeping visible." : "Pullman、鐵塔夜景、羅浮宮和右岸這些地方，放在一起看最清楚。"
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
      ${dailyGuides.map((day) => `
        <a class="day-selector-link" href="#${escapeHtml(day.id)}" data-day-target="${escapeHtml(day.id)}">
          <span>${escapeHtml(day.day)}</span>
          <strong>${escapeHtml(day.date)}</strong>
        </a>
      `).join("")}
    </nav>
  `;
}

function renderDayHandbookCard(day) {
  const frame = dayCardFrames[day.id] || {};
  const tags = frame.tags || [];
  const meta = dayGuideMeta(day);
  return `
    <section class="day-card" id="${escapeHtml(day.id)}">
      <div class="day-card-topline">
        <div class="day-pill">${escapeHtml(day.day)}</div>
        <div class="day-date">${escapeHtml(day.date)}</div>
      </div>
      <div class="day-location">${escapeHtml(t(frame.location || day.city))}</div>
      <div class="day-tags">
        ${tags.map((tag) => `<span>${escapeHtml(t(tag))}</span>`).join("")}
      </div>
      <p class="day-kicker">${escapeHtml(t(frame.kicker || day.theme))}</p>
      <h2 class="day-title">${escapeHtml(t(frame.title || day.theme))}</h2>
      <p class="day-description">${escapeHtml(t(day.intro))}</p>
      <div class="day-note">${escapeHtml(t(frame.note || day.notes?.[0] || ""))}</div>
      <div class="day-flow">
        <h3>${state.lang !== "zh" ? "Today's route" : "今日路線"}</h3>
        <div class="day-flow-list">
          ${day.route.map((step) => `
            <div class="day-flow-row">
              <span class="day-flow-label">${escapeHtml(t(step.label))}</span>
              <p>${escapeHtml(t(step.text))}</p>
            </div>
          `).join("")}
        </div>
      </div>
      <div class="day-details">
        ${meta.map((item) => `
          <div class="detail-row">
            <span class="detail-label">${escapeHtml(t(item.label))}</span>
            <span class="detail-content">${escapeHtml(t(item.value))}</span>
          </div>
        `).join("")}
        <div class="detail-row">
          <span class="detail-label">${state.lang !== "zh" ? "Along the way" : "今天會經過"}</span>
          <span class="detail-content">${escapeHtml(day.highlights.join(" · "))}</span>
        </div>
        <div class="detail-row">
          <span class="detail-label">${state.lang !== "zh" ? "Note" : "貼心提醒"}</span>
          <span class="detail-content">${escapeHtml(t(day.notes?.[0] || ""))}</span>
        </div>
        <div class="detail-row">
          <span class="detail-label">${state.lang !== "zh" ? "Cost" : "花費參考"}</span>
          <span class="detail-content">${escapeHtml(t(day.tickets?.[0] || ""))}</span>
        </div>
      </div>
    </section>
  `;
}

function renderHomeHotelsPanel() {
  return `
    <section class="home-tab-panel-block">
      ${renderHomeSectionIntro(
        state.lang !== "zh" ? "Hotels" : "住宿",
        state.lang !== "zh" ? "Each stop has its own role." : "每一段住宿都有自己的用途。",
        state.lang !== "zh" ? "Manchester is for the conference days, London is still being chosen, Paris stays at Pullman, and the last night shifts to CDG." : "曼徹斯特先把會議這段住穩，倫敦還在選，巴黎住 Pullman，最後一晚再轉去 CDG。"
      )}
      <div class="hotel-ledger">
        <article class="hotel-ledger-entry">
          <div class="hotel-ledger-head">
            <span class="section-label">${state.lang !== "zh" ? "Conference base" : "會議據點"}</span>
            <h3>INNSiDE Manchester</h3>
          </div>
          <p>${state.lang !== "zh" ? "30 Jun to 5 Jul · Twin room · 1 First Street. This is the practical base for the AIB chapter, close enough to keep the conference days calm." : "6/30–7/5，Twin room，位在 1 First Street。會議這幾天就住這裡，不另外搬飯店。"} </p>
          ${renderMetaRow([
            { label: state.lang !== "zh" ? "Stay" : "入住", value: "2026/06/30 – 2026/07/05" },
            { label: state.lang !== "zh" ? "Role" : "角色", value: state.lang !== "zh" ? "Conference base" : "會議期間據點" },
            { label: state.lang !== "zh" ? "Cost" : "費用", value: "GBP 900.90" }
          ])}
        </article>
        <article class="hotel-ledger-entry">
          <div class="hotel-ledger-head">
            <span class="section-label">${state.lang !== "zh" ? "London chapter" : "倫敦段"}</span>
            <h3>${state.lang !== "zh" ? "The Langham London / The Clermont Charing Cross" : "The Langham London / The Clermont Charing Cross"}</h3>
          </div>
          <p>${state.lang !== "zh" ? "London is still open. The real choice is simple: nicer stay, or easier station movement." : "倫敦目前還保留彈性。要比的其實就兩件事：房間住得舒服一點，還是移動省力一點。"} </p>
          ${renderMetaRow([
            { label: state.lang !== "zh" ? "Stay" : "入住", value: "2026/07/04 – 2026/07/07" },
            { label: state.lang !== "zh" ? "Role" : "角色", value: state.lang !== "zh" ? "London base" : "倫敦這幾晚的落腳處" },
            { label: state.lang !== "zh" ? "Status" : "狀態", value: state.lang !== "zh" ? "To be finalized" : "待最後確認" }
          ])}
        </article>
        <article class="hotel-ledger-entry featured">
          <div class="hotel-ledger-head">
            <span class="section-label">${state.lang !== "zh" ? "Paris stay" : "巴黎住宿"}</span>
            <h3>Pullman Paris Tour Eiffel</h3>
          </div>
          <p>${state.lang !== "zh" ? "7 Jul to 10 Jul · Deluxe room, high floor, balcony, Eiffel Tower view. This is not only the Paris hotel; it is the visual center of the final chapter." : "7/7–7/10，Deluxe room，高樓層、陽台、Eiffel Tower view。巴黎這幾晚的重點就是這個房間和陽台。"} </p>
          ${renderMetaRow([
            { label: state.lang !== "zh" ? "Stay" : "入住", value: "2026/07/07 – 2026/07/10" },
            { label: state.lang !== "zh" ? "Role" : "角色", value: state.lang !== "zh" ? "Paris stay" : "巴黎這幾晚的主住宿" },
            { label: state.lang !== "zh" ? "Cost" : "費用", value: "EUR 1,915.58 / NT$70,243" }
          ])}
          <div class="hotel-feature-note">${state.lang !== "zh" ? "If the room sees the tower, there is no need to keep going back out at night." : "如果房間看得到鐵塔，晚上就不用一直往外跑。"} </div>
        </article>
        <article class="hotel-ledger-entry">
          <div class="hotel-ledger-head">
            <span class="section-label">${state.lang !== "zh" ? "Departure eve" : "回程前一晚"}</span>
            <h3>${state.lang !== "zh" ? "Novotel Paris Charles-de-Gaulle Airport" : "巴黎戴高樂機場候機樓諾富特酒店"}</h3>
          </div>
          <p>${state.lang !== "zh" ? "10 Jul to 11 Jul · Roissypole RER. This is the practical handoff stay that turns the Air France departure into a calmer airport morning." : "7/10–7/11，位在 Roissypole RER 旁。這晚的用途很單純，就是讓隔天去 2E 不用一早拖著行李穿城。"} </p>
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
        ["The Langham London", getPublicLink("The Langham London")],
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
        state.lang !== "zh" ? "Keep the useful links in one place." : "把真的會用到的連結收成一頁。",
        state.lang !== "zh" ? "Conference, hotels, trains, and maps are easier to find when they stay grouped." : "會議、住宿、交通、地圖分開放，旅途中比較好找。"
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
        state.lang !== "zh" ? "Keep all the flights in one place." : "把整段機票先當成一條路線來看。",
        state.lang !== "zh" ? "The long-haul ticket, the Paris return segment, and the final trip home are easier to check together." : "先看華航主票四段，再看巴黎回曼徹斯特的法航加購段，會比較清楚。"
      )}
      <div class="route-ledger">
        <article class="route-ledger-entry">
          <span class="section-label">${state.lang !== "zh" ? "Outbound" : "去程"}</span>
          <h3>TPE → FRA → MAN</h3>
          <p>${state.lang !== "zh" ? "The first two ticketed legs are CI 0061 and LH 0946. Taipei departs at 22:20, reaches Frankfurt at 06:50 the next morning, and then connects onward to Manchester at 16:20." : "華航主票前兩段是 CI 0061 和 LH 0946。台北 22:20 出發，隔天 06:50 到法蘭克福，再接 16:20 進曼徹斯特。"} </p>
        </article>
        <article class="route-ledger-entry">
          <span class="section-label">${state.lang !== "zh" ? "Europe segment" : "歐洲段"}</span>
          <h3>CDG → MAN</h3>
          <p>${state.lang !== "zh" ? "Air France Business Standard leaves CDG Terminal 2E at 12:50 and reaches Manchester Terminal 2 at 13:25." : "法航商務艙 AF1068 12:50 從戴高樂 2E 出發，13:25 抵達曼徹斯特第二航廈。"} </p>
        </article>
        <article class="route-ledger-entry">
          <span class="section-label">${state.lang !== "zh" ? "Homebound" : "回程"}</span>
          <h3>MAN → LHR → TPE</h3>
          <p>${state.lang !== "zh" ? "The last two ticketed legs are BA 1371 and CI 0082. Manchester leaves at 18:10, reaches Heathrow at 19:15, and then the China Airlines segment heads home at 21:10." : "華航主票後兩段是 BA 1371 和 CI 0082。18:10 從曼徹斯特起飛，19:15 抵達希斯洛，再接 21:10 的華航回台北。"} </p>
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
        state.lang !== "zh" ? "Conference notes, movement, weather, and travel basics." : "把會議、移動、穿搭與旅行提醒放在同一頁。",
        state.lang !== "zh" ? "Keep the practical things here, so they do not get mixed into the daily pages." : "這一頁只放真的會再拿出來看的事。"
      )}
      <div class="info-ledger">
        <section class="info-ledger-block">
          <span class="section-label">${state.lang !== "zh" ? "Conference overview" : "AIB 會議主段"}</span>
          <h3>${state.lang !== "zh" ? "Two confirmed presentations in Manchester" : "曼徹斯特兩場發表已確認"}</h3>
          <p>${state.lang !== "zh" ? `${conferenceSessionSentence("competitive", "en")} ${conferenceSessionSentence("interactive", "en")}` : `${conferenceSessionSentence("competitive", "zh")} ${conferenceSessionSentence("interactive", "zh")}`} </p>
        </section>
        <section class="info-ledger-block">
          <span class="section-label">${state.lang !== "zh" ? "Transport notes" : "交通提醒"}</span>
          <p>${state.lang !== "zh" ? "Frankfurt is the long layover chapter and Heathrow is the tighter one. The Manchester-to-London rail move is the clean bridge into the city chapter, and Eurostar keeps London and Paris connected city centre to city centre." : "法蘭克福是長轉機，希斯洛比較緊；曼徹斯特到倫敦先搭火車，倫敦到巴黎再接 Eurostar。"} </p>
        </section>
        <section class="info-ledger-block">
          <span class="section-label">${state.lang !== "zh" ? "Packing and safety" : "行李與安全"}</span>
          <p>${state.lang !== "zh" ? "Bring Type G adapters for the UK, keep ETA and passport copies offline, and stay light on visible valuables in London and Paris." : "英國段記得 Type G 轉接頭，ETA 與護照資料留離線版本；倫敦與巴黎人多的地方，手機不要一直拿在外側。"} </p>
        </section>
        <section class="info-ledger-block">
          <span class="section-label">${state.lang !== "zh" ? "Weather and dressing" : "天氣與穿搭"}</span>
          <p>${state.lang !== "zh" ? "This route will likely need light layers rather than heavy coats: conference-appropriate clothes for Manchester, relaxed city layers for London, and one slightly more polished evening look for Paris." : "這趟以輕薄層次為主就好：曼徹斯特放正式一點的會議穿著，倫敦和巴黎記得好走的鞋。"} </p>
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
        state.lang !== "zh" ? "Keep reimbursable and self-funded costs separate." : "把能報的和自費的分開放。",
        state.lang !== "zh" ? "Only come back here when you actually need to check the numbers." : "真的要對帳時，再來看這頁就好。"
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
        state.lang !== "zh" ? "Keep the border details in one place." : "把入境、文件與保險提醒放在一起。",
        state.lang !== "zh" ? "Start with the UK entry, then keep the France notes nearby. Only the things you really need are listed here." : "這趟會先進英國，再往法國。這裡只放真的要記住的事。"
      )}
      <div class="visa-ledger">
        <article class="visa-ledger-entry">
          <h3>${state.lang !== "zh" ? "United Kingdom" : "英國"}</h3>
          <p>${state.lang !== "zh" ? "Keep passport, ETA approval, conference letter, return flight, and the first hotel booking ready to open offline." : "護照、ETA 核准紀錄、會議邀請函、回程機票和第一段住宿資料，建議都留一份離線版本。"} </p>
        </article>
        <article class="visa-ledger-entry">
          <h3>${state.lang !== "zh" ? "France / Schengen" : "法國／申根"}</h3>
          <p>${state.lang !== "zh" ? "For the Paris segment, keep hotel details, Eurostar or flight records, and onward ticket notes together. ETIAS, if it becomes relevant for this route, should be re-checked against official guidance closer to departure." : "巴黎段記得把住宿、Eurostar 或航班資料和後續回程記錄放在一起；ETIAS 如果到出發前真的需要，再回官方網站看一次就好。"} </p>
        </article>
        <article class="visa-ledger-entry">
          <h3>${state.lang !== "zh" ? "Customs, tax, and insurance" : "海關、退稅與保險"}</h3>
          <p>${state.lang !== "zh" ? "If there are larger shopping items later in London or Paris, keep receipts. Insurance is not mandatory on this page, but if purchased, save the policy and claim contact details offline." : "如果後面在倫敦或巴黎有較大額購物，收據記得保留；保險若有投保，也建議把保單與理賠聯絡資訊一起離線存好。"} </p>
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
      <p>Manchester stays practical because it carries the academic core. London works as the city transition. Paris becomes the visual finish, especially with the Pullman balcony room facing the Eiffel Tower.</p>
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
      <section class="home-tab-panel active" id="overview" data-home-panel="overview">
        ${renderHomeOverviewPanel()}
      </section>
      <section class="home-tab-panel" id="itinerary" data-home-panel="itinerary" hidden>
        <section class="home-tab-panel-block">
          ${renderHomeSectionIntro(
            state.lang !== "zh" ? "Itinerary" : "行程",
            state.lang !== "zh" ? "Day by day, each page read as one chapter." : "一天一張大卡，把每天讀成一頁完整旅程。",
            state.lang !== "zh" ? "This section keeps one full page-card for each day, so the route reads like a travel handbook rather than a set of small admin boxes." : "每一天都整理成一張完整 itinerary card。旅途中只要往下翻，不用再在很多小卡之間找資訊。"
          )}
          ${renderDaySelector()}
          <div class="day-card-stack">
            ${dailyGuides.map(renderDayHandbookCard).join("")}
          </div>
        </section>
      </section>
      <section class="home-tab-panel" id="hotels" data-home-panel="hotels" hidden>
        ${renderHomeHotelsPanel()}
      </section>
      <section class="home-tab-panel" id="links" data-home-panel="links" hidden>
        ${renderHomeLinksPanel()}
      </section>
      <section class="home-tab-panel" id="flights" data-home-panel="flights" hidden>
        ${renderHomeFlightsPanel()}
      </section>
      <section class="home-tab-panel" id="info" data-home-panel="info" hidden>
        ${renderHomeInfoPanel()}
      </section>
      <section class="home-tab-panel" id="budget" data-home-panel="budget" hidden>
        ${renderHomeBudgetPanel()}
      </section>
      <section class="home-tab-panel" id="visa" data-home-panel="visa" hidden>
        ${renderHomeVisaPanel()}
      </section>
      <section class="home-tab-panel" id="en" data-home-panel="en" hidden>
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

function renderHandbookToc() {
  return `
    <nav class="handbook-toc" aria-label="${state.lang !== "zh" ? "Handbook contents" : "手冊目錄"}">
      ${handbookContents.map((item) => `
        <a class="handbook-toc-item" href="#${escapeHtml(item.target || item.id)}" data-home-tab-jump="${escapeHtml(item.target || item.id)}">
          <span class="handbook-toc-index">${escapeHtml(item.number)}</span>
          <span class="handbook-toc-label">${escapeHtml(t(item.title))}</span>
        </a>
      `).join("")}
    </nav>
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
  conference: { zh: "會議日期、發表時間和要帶的資料。", en: "Conference dates, registration status, and event rhythm." },
  flights: { zh: "去程、回程、德英法移動段與轉機整理。", en: "Outbound, return, Germany-UK-France segments, and transfer notes." },
  transport: { zh: "火車、Eurostar 與市內交通。", en: "Train, Eurostar, and local transit." },
  stay: { zh: "曼徹斯特會議住宿、巴黎 Pullman 與 CDG 回程前一晚安排。", en: "Manchester conference stay, the Pullman Paris chapter, and the final CDG overnight." },
  itinerary: { zh: "每日旅程、巴黎主線與回程銜接。", en: "Daily route guide, the Paris chapter, and the way home." },
  shopping: { zh: "茶葉、餅乾、果醬與超市購物清單。", en: "Tea, biscuits, preserves, and useful shopping notes." },
  souvenirs: { zh: "英國、法國、德國伴手禮整理。", en: "Souvenir notes for the UK, France, and Germany." },
  map: { zh: "主要地點、每日路線與地圖連結。", en: "Key locations, daily routes, and map links." },
  budget: { zh: "可報帳和自費分開整理，金額也一起換算。", en: "Funding and expense notes, with four-currency amounts." },
  reminders: { zh: "還沒處理完的事和出發前最後再看一次的提醒。", en: "Pending items and final travel notes." },
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

function dayGuideMeta(day) {
  const metaMap = {
    "day-1": [
      [{ zh: "移動方式", en: "Movement" }, { zh: "CI 0061 / 法蘭克福散步 / LH 0946", en: "CI 0061 / Frankfurt walk / LH 0946" }],
      [{ zh: "今晚落腳", en: "Tonight" }, "INNSiDE Manchester"],
      [{ zh: "這天重心", en: "Focus" }, { zh: "順利落地、調時差、把文件放好", en: "Land smoothly, adjust to time, and keep the documents in order" }]
    ],
    "day-2": [
      [{ zh: "移動方式", en: "Movement" }, { zh: "步行 / 會場動線", en: "Walking / conference venue flow" }],
      [{ zh: "今晚落腳", en: "Tonight" }, "INNSiDE Manchester"],
      [{ zh: "這天重心", en: "Focus" }, { zh: "先把會議這幾天顧好", en: "Settle into the conference rhythm" }]
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
      [{ zh: "這天重心", en: "Focus" }, { zh: "入住 Pullman，晚上把鐵塔留給巴黎第一眼", en: "Check into Pullman and let the Eiffel Tower shape the first Paris evening" }]
    ],
    "day-9": [
      [{ zh: "移動方式", en: "Movement" }, { zh: "Metro / 步行", en: "Metro / walking" }],
      [{ zh: "今晚落腳", en: "Tonight" }, "Pullman Paris Tour Eiffel"],
      [{ zh: "這天重心", en: "Focus" }, { zh: "羅浮宮、右岸街景與百貨屋頂", en: "The Louvre, Right Bank streets, and the rooftop view" }]
    ],
    "day-10": [
      [{ zh: "移動方式", en: "Movement" }, { zh: "Metro / 步行", en: "Metro / walking" }],
      [{ zh: "今晚落腳", en: "Tonight" }, "Pullman Paris Tour Eiffel"],
      [{ zh: "這天重心", en: "Focus" }, { zh: "精品大道、凱旋門與塞納河夜景", en: "Luxury avenues, the Arc, and the Seine at night" }]
    ],
    "day-11": [
      [{ zh: "移動方式", en: "Movement" }, { zh: "Metro / 步行 / 前往 Roissypole", en: "Metro / walking / onward to Roissypole" }],
      [{ zh: "今晚落腳", en: "Tonight" }, { zh: "Novotel Paris Charles-de-Gaulle Airport", en: "Novotel Paris Charles-de-Gaulle Airport" }],
      [{ zh: "這天重心", en: "Focus" }, { zh: "蒙馬特、最後採買與機場轉場", en: "Montmartre, final shopping, and the airport handoff" }]
    ],
    "day-12": [
      [{ zh: "移動方式", en: "Movement" }, { zh: "Novotel CDG / AF 1068 / BA 1371 / CI 0082", en: "Novotel CDG / AF 1068 / BA 1371 / CI 0082" }],
      [{ zh: "今晚落腳", en: "Tonight" }, { zh: "回程機上", en: "Overnight on the way home" }],
      [{ zh: "這天重心", en: "Focus" }, { zh: "把巴黎、曼徹斯特與希斯洛順順接起來", en: "Keep Paris, Manchester, and Heathrow flowing cleanly" }]
    ]
  };
  return (metaMap[day.id] || []).map(([label, value]) => ({ label, value }));
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
    note: { zh: "會議時間、兩場發表和要帶的資料，都放在這一頁。", en: "Conference details, presentation slots, and the before-and-after rhythm of AIB 2026 Manchester are gathered here." },
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
        state.lang !== "zh" ? "Use this page for the parts that need to stay exact: session timing, paper format, receipts, and the Manchester conference rhythm." : "這一頁只放需要很準的東西：場次時間、發表形式、收據，還有會議這幾天怎麼走。"
      )}
      <div class="summary-grid two">
        ${dashboardData.conferenceCards.map(renderSummaryCard).join("")}
      </div>
    </section>
    <section class="section compact-section" id="papers">
      ${sectionHeading(state.lang !== "zh" ? "Presentation Sessions" : "發表場次", state.lang !== "zh" ? "The two sessions, kept separate so they are easier to check." : "兩場分開看，比較不會搞混。")}
      <div class="paper-grid">
        ${paperCards.map(renderPaperCard).join("")}
      </div>
    </section>
    <section class="section compact-section" id="alerts">
      ${sectionHeading(
        state.lang !== "zh" ? "Academic Notes" : "會議提醒",
        state.lang !== "zh" ? "Timing, documents, and the conference rhythm" : "把時間、文件與會議安排放在一起看",
        state.lang !== "zh" ? "Check this once before the conference starts, then again the night before each presentation." : "這區適合會前再看一次，也適合發表前一晚回來確認。"
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
    <section class="section compact-section" id="flights">
      ${sectionHeading(
        state.lang !== "zh" ? "Cross-city movement" : "跨城市移動",
        state.lang !== "zh" ? "Read the route as one line." : "先把整趟德英法移動看成一條路線。",
        state.lang !== "zh" ? "Flight details stay on their own page, while this chapter keeps the route itself together: long-haul arrival, rail shifts, Eurostar, and the final return chain." : "航班細節留在機票頁，這裡只管整條移動線：長程飛行、英國火車、Eurostar 和最後回程。"
      )}
      <div class="summary-grid two">
        <article class="summary-card">
          ${statusChip("confirmed")}
          <h3>${state.lang !== "zh" ? "Dedicated flight page" : "獨立機票頁"}</h3>
          <strong>${state.lang !== "zh" ? "Outbound, return, and Europe segment" : "去程、回程與歐洲段一起看"}</strong>
          <p>${state.lang !== "zh" ? "If you want to check flight numbers, terminals, and transfer rhythm, that page is now the cleanest place." : "如果要核對航班號碼、航廈和轉機時間，直接看機票頁最清楚。"}</p>
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
        state.lang !== "zh" ? "Frankfurt and Heathrow are just part of the route." : "法蘭克福和希斯洛都先當成移動的一部分看就好。",
        state.lang !== "zh" ? "Terminals and gates can still change on the day, so these notes are here to support the route, not to replace airport screens." : "航廈和登機門還是可能臨時改，所以出發當天還是以機場螢幕和航空公司通知為準。"
      )}
      <div class="transfer-grid">
        ${tripData.transfers.map(renderTransferCard).join("")}
      </div>
    </section>
    <section class="section compact-section" id="train">
      ${sectionHeading(
        state.lang !== "zh" ? "Rail & Eurostar" : "鐵路段落",
        state.lang !== "zh" ? "Manchester, London, and Paris in one rail sequence" : "曼徹斯特、倫敦和巴黎先看成同一條鐵路段落",
        state.lang !== "zh" ? "It is easier to think of the UK train and Eurostar as one continuous handoff." : "把英國火車和倫敦進巴黎的 Eurostar 當成同一條移動線來安排，整趟會比較順。"
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
          <p>${state.lang !== "zh" ? "This is the cleanest London-to-France move: leave from St Pancras and arrive straight into central Paris at Gare du Nord." : "這段最順的做法就是直接搭 Eurostar。從 St Pancras 出發，到巴黎北站時就已經在市中心。"} </p>
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
          <p>${state.lang !== "zh" ? "Eurostar recommends arriving about 75 to 90 minutes early. For Standard and Plus, check-in closes 30 minutes before departure, so leave enough time for security and passport control." : "Eurostar 這段比較像搭火車加過關。提早到站會比較從容，因為安檢和護照檢查都在上車前完成。"} </p>
        </article>
      </div>
    </section>
    <section class="section compact-section" id="local">
      ${sectionHeading(
        state.lang !== "zh" ? "City movement" : "城市內移動",
        state.lang !== "zh" ? "Keep the local network simple enough to use on the road" : "市內交通只看真的會用到的部分",
        state.lang !== "zh" ? "These notes focus on the practical part only: which system to use, how to pay, and what kind of route is easiest once you are in the city." : "這一區只保留最實際的部分：搭什麼、怎麼付、哪種動線最省力。"
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
  const manchesterIdeas = tripData.stay[4];
  const londonAreas = ["Euston", "King's Cross", "Bloomsbury", "South Kensington", "Paddington"];
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
      hotel: { zh: "The Langham / Clermont", en: "The Langham / Clermont" },
      dates: { zh: "7/4 – 7/7｜3 晚待選", en: "4 Jul – 7 Jul · 3 nights still open" },
      status: "compare",
      note: { zh: "現在主要在比車站動線和住感。", en: "Mainly weighing station access against how the stay feels." }
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
  const londonCandidates = [
    {
      status: "compare",
      title: "The Langham London",
      image: londonStay.photos?.[0]?.src,
      imageAlt: londonStay.photos?.[0]?.alt,
      location: { zh: "如果想把倫敦住得像一段完整停留，這間最像主住宿。", en: "If London should feel like a proper stay, this is the most complete option." },
      strengths: { zh: "整體住感比較完整，放下行李後就能直接進入倫敦這段。", en: "Once the bags are down, the whole London stay feels more settled." },
      tradeoffs: { zh: "若重點是接火車和帶行李移動，未必比更靠車站的選擇直接。", en: "Not always the easiest pick if rail access comes first." },
      fit: { zh: "如果想讓倫敦這幾晚住得安靜一點、舒服一點，這間最順眼。", en: "Best if you want London to feel calm and properly lived-in." },
      link: "https://www.langhamhotels.com/en/the-langham/london/"
    },
    {
      status: "pending",
      title: "The Clermont Charing Cross",
      image: londonStay.photos?.[1]?.src,
      imageAlt: londonStay.photos?.[1]?.alt,
      location: { zh: "更偏交通與車站優勢，對後面移動比較友善。", en: "Leans more toward station convenience and easy onward movement." },
      strengths: { zh: "離交通樞紐近，若想把英國段與巴黎段接得俐落，這間比較省力。", en: "Cleaner if the UK-to-Paris handoff is the main priority." },
      tradeoffs: { zh: "如果比較在意房間住感，可能還是 The Langham 比較適合。", en: "The stay itself may feel less memorable than The Langham." },
      fit: { zh: "如果重心放在 Euston、St Pancras 和市中心移動，這間會省力很多。", en: "Very practical if Euston, St Pancras, and central movement matter most." },
      link: "https://www.theclermont.co.uk/charing-cross/"
    }
  ];
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
      title: { zh: "決定倫敦住宿最後版本。", en: "Choose the final London hotel." },
      note: { zh: "目前最清楚的還是 The Langham London 與 The Clermont Charing Cross。", en: "The clearest choices remain The Langham London and The Clermont Charing Cross." }
    },
    {
      title: { zh: "決定 7/4 曼徹斯特最後一晚要不要保留。", en: "Decide what to do with the 4 July Manchester overlap." },
      note: { zh: "這會連動倫敦住宿是否確認，以及你想不想保留一晚會議後的緩衝。", en: "That depends on the London booking and how much buffer you want after the conference." }
    },
    {
      title: { zh: "補上倫敦到巴黎的交通。", en: "Lock the London → Paris handoff." },
      note: { zh: "Eurostar 一旦訂好，倫敦接 Pullman 就會順很多。", en: "Once Eurostar is fixed, the London-to-Pullman move becomes much cleaner." }
    },
    {
      title: { zh: "確認 Pullman 退房後到 CDG Novotel 的移動方式。", en: "Check the Pullman → CDG Novotel move." },
      note: { zh: "把這段接順，最後一天就不會被行李和轉場打亂。", en: "Keep this transfer simple so the last Paris day stays light." }
    },
    {
      title: { zh: "再看一次各飯店取消期限與付款狀態。", en: "Review cancellation windows and payment status." },
      note: { zh: "曼徹斯特、Pullman 與 Novotel 都已接上，現在主要變數只剩倫敦。", en: "Manchester, Pullman, and Novotel are in place; London is the main variable left." }
    }
  ];

  return renderDesktopPageShell("stay", {
    label: { zh: "Hotel", en: "Hotel" },
    title: { zh: "住宿筆記", en: "Stay Notes" },
    note: { zh: "把每一段住哪裡放在一起看，轉城市時比較不會亂。", en: "Each stay is part of the route itself, linking the conference days, the city moves, and the final Paris evenings into one calmer rhythm." },
    meta: [
      { label: { zh: "會議據點", en: "Conference base" }, value: "INNSiDE Manchester" },
      { label: { zh: "巴黎主住宿", en: "Paris anchor" }, value: "Pullman Paris Tour Eiffel" },
      { label: { zh: "回程前一晚", en: "Departure eve" }, value: { zh: "Novotel CDG", en: "Novotel CDG" } },
      { label: { zh: "待補齊", en: "Still open" }, value: { zh: "倫敦住宿", en: "London stay" } }
    ]
  }, `
    ${renderQuickNav("stay")}
    <section class="section compact-section" id="overview">
      <article class="section-card">
        <div class="section-label">${state.lang !== "zh" ? "Accommodation overview" : "住宿總覽"}</div>
        <h2>${state.lang !== "zh" ? "Each stay carries a different role in the route." : "每一段住宿都各有用途。"}</h2>
        <p class="lead">${state.lang !== "zh" ? "Manchester keeps the conference days steady, London is still open, Pullman carries the Paris nights, and Novotel CDG keeps the flight morning easier." : "曼徹斯特先把會議主段住穩，倫敦還在選，巴黎住 Pullman，最後一晚再轉去 CDG。"} </p>
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
              <img class="stay-card-image" src="${escapeHtml(manchesterStay.image)}" alt="${escapeHtml(t(manchesterStay.title))}" loading="lazy" />
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
        <div class="section-label">${state.lang !== "zh" ? "London options" : "London｜候選住宿比較"}</div>
        <h2>${state.lang !== "zh" ? "London still needs one final decision." : "倫敦這幾晚，現在只差最後選擇。"}</h2>
        <p class="lead">${state.lang !== "zh" ? "London sits between the conference and Paris. What matters most here is whether the station move is easy and whether the room feels right after a full day out." : "倫敦夾在曼徹斯特和巴黎之間。現在要比的就是車站動線順不順，還有晚上回房間後住起來舒不舒服。"} </p>
        <div class="stay-warning-card">
          <div class="stay-warning-head">
            ${statusChip("alert")}
            <h3>${state.lang !== "zh" ? "7/4 overlaps with the Manchester booking" : "7/4 晚有重疊，需要先決定怎麼接"}</h3>
          </div>
          <p>${state.lang !== "zh" ? "Manchester is currently booked through 5 July, while the London plan starts on 4 July. Once London is fixed, decide whether that last Manchester night should stay as buffer or be released." : "曼徹斯特目前訂到 7/5 退房，但倫敦預計從 7/4 開始住。等倫敦確定後，再決定這一晚要不要留著當緩衝。"} </p>
          ${renderStayWarningOptions(overlapOptions)}
        </div>
        <div class="stay-candidate-grid-wrapper">
          ${londonCandidates.map(renderStayCandidateCard).join("")}
          <article class="stay-candidate-card areas-card">
            <div class="stay-candidate-copy">
              <div class="stay-candidate-head">
                ${statusChip("compare")}
                <h3>${state.lang !== "zh" ? "Other candidate areas" : "也值得看的區域"}</h3>
              </div>
              <div class="stay-candidate-grid">
                <div class="stay-candidate-row">
                  <span>${state.lang !== "zh" ? "Priority" : "目前重點"}</span>
                  <p>${state.lang !== "zh" ? "The route still wants rail convenience first, then a calm walking radius once luggage is dropped." : "目前仍以車站動線優先，接著才看放下行李後能不能舒舒服服走進市中心。"} </p>
                </div>
                <div class="stay-candidate-row">
                  <span>${state.lang !== "zh" ? "Useful areas" : "可留意區域"}</span>
                  <div class="stay-area-chip-cloud">
                    ${londonAreas.map((area) => `<span>${escapeHtml(area)}</span>`).join("")}
                  </div>
                </div>
                <div class="stay-candidate-row">
                  <span>${state.lang !== "zh" ? "Also worth keeping" : "備看飯店"}</span>
                  <p>${escapeHtml((manchesterIdeas.facts || []).map((item) => t(item)).join(" · "))}</p>
                </div>
              </div>
            </div>
          </article>
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
              <img class="paris-spotlight-photo" src="${escapeHtml(pullmanImage)}" alt="${escapeHtml(state.lang !== "zh" ? "Balcony Eiffel Tower view at Pullman Paris Tour Eiffel" : "Pullman Paris Tour Eiffel 陽台鐵塔景照片")}" loading="lazy" />
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
              <img class="stay-card-image" src="${escapeHtml(cdgStay.image)}" alt="${escapeHtml(t(cdgStay.imageAlt))}" loading="lazy" />
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
        <p class="lead">${state.lang !== "zh" ? "These are simply the last loose ends: London, the 4 July overlap, the Pullman-to-CDG move, and the payment/cancellation notes." : "這裡只放最後幾個還要確認的地方：倫敦住哪裡、7/4 怎麼接、Pullman 退房後怎麼去 CDG，還有取消與付款狀態。"} </p>
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
        <h2>${state.lang !== "zh" ? "One day, one full page-card" : "一天一張大卡，旅途中往下翻就好"}</h2>
        <p class="lead">${state.lang !== "zh" ? "Use this page like a printed itinerary booklet: each day has one full card with its route, stay, movement, and the one or two things worth keeping in mind." : "日期、城市、路線、住宿和提醒都放在一起。真的出門時，只要翻到那一天就好。"} </p>
        ${renderDaySelector()}
        <div class="day-card-stack">
          ${dailyGuides.map(renderDayHandbookCard).join("")}
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
  const labels = { Manchester: "曼徹斯特", London: "倫敦" };
  return labels[city] || city;
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
            <p>${city === "Manchester"
              ? (state.lang !== "zh" ? "Keep this side practical: airport, hotel, station, and conference-day movement." : "這一側保持實用：機場、飯店、車站與會議日移動。")
              : (state.lang !== "zh" ? "London focuses on museums, major sights, and the main walking areas between them." : "倫敦就看幾個主要地標和街區，不用再拉太遠。")
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
    TWD: { reimburse: "NT$156,039", self: "NT$128,732", personalSelf: "約 NT$19,263", hotelPerson: "NT$19,135", hotelPersonNight: "NT$3,827" },
    GBP: { reimburse: "GBP 3,671", self: "約 GBP 3,010", personalSelf: "GBP 453.45", hotelPerson: "GBP 450.45", hotelPersonNight: "GBP 90.09" },
    EUR: { reimburse: "EUR 4,293", self: "約 EUR 3,523", personalSelf: "約 EUR 531", hotelPerson: "EUR 527", hotelPersonNight: "EUR 105" },
    USD: { reimburse: "US$4,870", self: "約 US$3,990", personalSelf: "約 US$601", hotelPerson: "US$597", hotelPersonNight: "US$119" }
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
        <article class="summary-card">${statusChip("pending")}<h3>${state.lang !== "zh" ? "Pending items" : "待確認項目"}</h3><strong>${state.lang !== "zh" ? "London hotel / Eurostar" : "倫敦住宿 / Eurostar"}</strong>${renderMetaRow([{ label: state.lang !== "zh" ? "Action" : "處理", value: state.lang !== "zh" ? "Book and review" : "預訂與確認" }, { label: state.lang !== "zh" ? "Timing" : "時點", value: state.lang !== "zh" ? "Before departure" : "出發前" }])}</article>
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
        <article class="summary-card">${statusChip("self")}<h3>${state.lang !== "zh" ? "Self-funded known subtotal" : "已知自費小計"}</h3><strong>${selectedTotals.self}</strong><p>${state.lang !== "zh" ? "Current known self-funded items include the Manchester hotel, visitor charge, the Pullman Paris booking, the Novotel CDG overnight, and the Air France Paris-Manchester segment. London hotel, Eurostar, and attraction choices remain open." : "目前已知自費包含曼徹斯特住宿與旅遊稅、Pullman 巴黎住宿、Novotel CDG 機場過夜，以及巴黎回曼徹斯特的法航航段；倫敦住宿、Eurostar 和景點組合仍待確認。"}</p></article>
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
        state.lang !== "zh" ? "Things to check before departure" : "出發前再看一次的事"
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
        state.lang !== "zh" ? "Small list, big peace of mind" : "出發前最後看一遍"
      )}
      <div class="proof-list checklist-list">
        ${[
          state.lang !== "zh" ? "Passport and UK ETA are ready." : "護照和 UK ETA 再看一次。",
          state.lang !== "zh" ? "AIB receipts and letters are saved for reimbursement." : "AIB 收據、接受函和邀請函都先存好。",
          state.lang !== "zh" ? "Manchester-London trains are checked before prices rise." : "曼徹斯特到倫敦火車票再查一次。",
          state.lang !== "zh" ? "London accommodation is booked or intentionally left open." : "倫敦住宿如果還沒下，就先確認自己要不要保留彈性。",
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
  const panels = [...document.querySelectorAll("[data-home-panel]")];
  const tabJumps = [...document.querySelectorAll("[data-home-tab-jump]")];
  if (!tabs.length || !panels.length) return;

  const validIds = new Set(homeSectionTabs.map((tab) => tab.id));
  const fallbackId = homeSectionTabs[0]?.id || "overview";

  const setActive = (id, updateHash = true, scrollIntoPanels = true) => {
    const nextId = validIds.has(id) ? id : fallbackId;
    tabs.forEach((tab) => {
      const active = tab.dataset.homeTab === nextId;
      tab.classList.toggle("active", active);
      if (active) {
        tab.setAttribute("aria-current", "true");
        tab.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
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
    if (scrollIntoPanels) {
      document.querySelector(".home-tab-panels")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  tabs.forEach((tab) => {
    if (tab.dataset.bound) return;
    tab.dataset.bound = "true";
    tab.addEventListener("click", (event) => {
      event.preventDefault();
      setActive(tab.dataset.homeTab);
    });
  });

  tabJumps.forEach((link) => {
    if (link.dataset.bound) return;
    link.dataset.bound = "true";
    link.addEventListener("click", (event) => {
      const target = link.dataset.homeTabJump;
      if (!target) return;
      event.preventDefault();
      setActive(target);
    });
  });

  const syncFromHash = () => {
    const hash = window.location.hash.replace(/^#/, "");
    setActive(validIds.has(hash) ? hash : fallbackId, false, false);
  };

  syncFromHash();
  if (!document.body.dataset.homeHashBound) {
    document.body.dataset.homeHashBound = "true";
    window.addEventListener("hashchange", syncFromHash);
  }
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
  button.textContent = "↑";
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
  const links = [...document.querySelectorAll("[data-day-target], .day-guide-link")];
  if (!links.length) return;

  const setActive = (id) => {
    links.forEach((link) => {
      const targetId = link.dataset.dayTarget || link.getAttribute("href")?.replace(/^#/, "");
      const active = targetId === id;
      link.classList.toggle("active", active);
      if (active) link.setAttribute("aria-current", "true");
      else link.removeAttribute("aria-current");
    });
  };

  links.forEach((link) => {
    if (link.dataset.bound) return;
    link.dataset.bound = "true";
    link.addEventListener("click", () => {
      const id = link.dataset.dayTarget || link.getAttribute("href")?.replace(/^#/, "");
      if (id) setActive(id);
    });
  });

  const sections = links
    .map((link) => {
      const targetId = link.dataset.dayTarget || link.getAttribute("href")?.replace(/^#/, "");
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
