(() => {
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
  reminders: { zh: "備忘", en: "Notes", fr: "Notes", de: "Hinweise" }
};

const statusLabels = {
  confirmed: { zh: "已確認", en: "Confirmed", fr: "Confirmé", de: "Bestätigt" },
  pending: { zh: "還沒定", en: "Pending", fr: "En attente", de: "Offen" },
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
  londonHotel: "NT$41,649 / 約 GBP 980 / 約 EUR 1,147 / 約 US$1,300",
  londonHotelPerNight: "NT$13,883 / 約 GBP 327 / 約 EUR 382 / 約 US$433",
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

const hotelImage = "./assets/innside-manchester.jpg";
const riuImage = "./assets/riu-plaza-london-the-westminster.png";
const pullmanImage = "./assets/pullman-paris-tour-eiffel.jpg";
const frankfurtOldTownImage = "./assets/frankfurt-roemerberg.jpg";
const londonWestminsterImage = "./assets/london-westminster.jpg";
const parisLouvreImage = "./assets/paris-louvre.jpg";
const parisArcImage = "./assets/paris-arc-de-triomphe.jpg";
const parisMontmartreImage = "./assets/paris-montmartre.jpg";

const tripData = {
  lastUpdated: "2026-09-13",
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
      lead: { zh: "兩場發表的時間、教室和要帶的資料。", en: "Times, rooms, and materials for both presentations." }
    },
    transport: {
      kicker: { zh: "交通規劃", en: "Transport" },
      title: { zh: "火車與市內交通", en: "Trains & Local Transit" },
      lead: { zh: "跨城火車、Eurostar、機場接駁和市區交通。", en: "Intercity trains, Eurostar, airport transfers, and local transport." }
    },
    flights: {
      kicker: { zh: "航班安排", en: "Flights" },
      title: { zh: "機票與轉機", en: "Flight Plan & Transfers" },
      lead: { zh: "去程、巴黎回曼徹斯特，以及返台航段。", en: "Outbound flights, Paris to Manchester, and the flights home." }
    },
    stay: {
      kicker: { zh: "住宿安排", en: "Accommodation" },
      title: { zh: "四段住宿", en: "Four Stays" },
      lead: { zh: "曼徹斯特、倫敦、巴黎與 CDG 機場住宿都已確認。", en: "Manchester, London, Paris, and the CDG airport hotel are confirmed." }
    },
    itinerary: {
      kicker: { zh: "每日行程", en: "Itinerary" },
      title: { zh: "每天怎麼走", en: "Day-by-Day Plan" },
      lead: { zh: "一天一張卡，直接看交通、地點、住宿和當天要帶的東西。", en: "One card per day with transport, stops, hotel, and what to carry." }
    },
    shopping: {
      kicker: { zh: "英國購物", en: "Shopping" },
      title: { zh: "英國購物清單", en: "UK Shopping List" },
      lead: { zh: "茶葉、餅乾、果醬、超市零食和藥妝，按類別記在這頁。", en: "Tea, biscuits, preserves, supermarket snacks, and pharmacy items, grouped by category." }
    },
    souvenirs: {
      kicker: { zh: "伴手禮整理", en: "Souvenirs" },
      title: { zh: "英法德帶什麼回來", en: "What to Bring Back from the UK, France, and Germany" },
      lead: { zh: "英國、法國、德國各列幾樣好買、好裝行李的東西。", en: "A short list of gifts that are easy to buy and pack in each country." }
    },
    map: {
      kicker: { zh: "旅程地圖", en: "Travel Map" },
      title: { zh: "德英法旅程地圖", en: "Germany · UK · France Travel Map" },
      lead: { zh: "法蘭克福、曼徹斯特、倫敦和巴黎的地點與每日路線。", en: "Saved places and daily routes for Frankfurt, Manchester, London, and Paris." }
    },
    budget: {
      kicker: { zh: "預算整理", en: "Budget" },
      title: { zh: "費用與票券", en: "Travel Costs & Tickets" },
      lead: { zh: "可報帳、自費、已付款和還沒買的項目分開記。", en: "Reimbursable, self-funded, paid, and unbooked costs are listed separately." }
    },
    reminders: {
      kicker: { zh: "行前提醒", en: "Reminders" },
      title: { zh: "出發前再看一次", en: "Check Before Leaving" },
      lead: { zh: "還沒訂的、要離線保存的、到機場才處理的，都列在這裡。", en: "Bookings, offline copies, and airport tasks that still need a check." }
    },
    firstTime: {
      kicker: { zh: "德英法行前提醒", en: "Germany · UK · France Travel Notes" },
      title: { zh: "德英法出發前備忘", en: "Germany · UK · France Notes" },
      lead: { zh: "入境、付款、網路、插頭、退稅和隨身安全。", en: "Entry, payment, mobile data, plugs, tax refund, and personal safety." }
    },
    documents: {
      kicker: { zh: "官方連結", en: "Official Links" },
      title: { zh: "文件與連結", en: "Documents & Links" },
      lead: { zh: "只放官方連結和文件名稱；訂位代碼、票號與個資不公開。", en: "Official links and document names only. Booking references, ticket numbers, and personal details stay private." }
    }
  },
  reminders: [
    { status: "confirmed", title: { zh: "倫敦住宿", en: "London accommodation" }, body: { zh: "7/4–7/7 住 Riu Plaza London The Westminster。7/4 走西敏，7/7 從 St Pancras 搭車。", en: "Stay at Riu Plaza London The Westminster from 4-7 July. Use 4 July for Westminster and leave from St Pancras on 7 July." } },
    { status: "book", title: { zh: "曼徹斯特到倫敦", en: "Manchester to London" }, body: { zh: "7/4 搭 Avanti West Coast，直達約 2 小時 10 分。車票還沒買。", en: "Take Avanti West Coast on 4 July. The direct trip is about 2h10; tickets are not booked yet." } },
    { status: "book", title: { zh: "倫敦到巴黎", en: "London to Paris" }, body: { zh: "7/7 從 St Pancras 搭 Eurostar。預留安檢與護照查驗，提早 75–90 分鐘到站。", en: "Take Eurostar from St Pancras on 7 July. Allow for security and passport checks and arrive 75-90 minutes early." } },
    { status: "alert", title: { zh: "巴黎退稅", en: "Paris tax refund" }, body: { zh: "如果在巴黎有買精品或高單價東西，店裡先拿 détaxe / tax free 表單。7/11 離開歐盟時，先在 CDG 驗證退稅，再去托運行李。", en: "If you buy luxury or higher-value items in Paris, ask for the détaxe / tax free form in the shop. On 11 July, validate the refund at CDG before checking your bags." } },
    { status: "confirmed", title: { zh: "eSIM / 漫遊", en: "eSIM / roaming" }, body: { zh: "歐洲 39 國 15 天 eSIM 已買。出發前安裝，抵達後再啟用；原門號保留收簡訊與驗證碼。", en: "The 39-country Europe eSIM for 15 days is purchased. Install it before departure, activate it after landing, and keep the main number for SMS and verification codes." } },
    { status: "reimburse", title: { zh: "報帳資料", en: "Reimbursement packet" }, body: { zh: "可報帳項目：國際機票、AIB 會議費、AIB 會員費、國科會日支費。倫敦與巴黎另列自費。", en: "Claimable items: international flights, AIB conference fee, AIB membership fee, and NSTC allowance. London and Paris are self-funded." } },
    { status: "confirmed", title: { zh: "7/11 回程", en: "11 July return flights" }, body: { zh: "7/11 先從巴黎飛曼徹斯特，再接 BA 1371 和 CI 0082 回台北。這天不要再排別的。", en: "On 11 July, fly Paris to Manchester first, then connect to BA 1371 and CI 0082 back to Taipei. Keep the day for flights only." } }
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
        body: { zh: "ETA 已連結護照。手機和雲端各存一份核准信，臨時被問時不用再找信件。", en: "The ETA is linked to the passport. Keep one copy of the approval on the phone and another in cloud storage." },
        source: "https://www.gov.uk/guidance/check-when-you-can-get-an-electronic-travel-authorisation-eta"
      },
      {
        status: "alert",
        title: { zh: "不要帶肉類、乳製品入境", en: "Avoid meat and dairy in luggage" },
        body: { zh: "從台灣入境英國，不帶肉類與乳製品。餅乾、巧克力或乾燥麵條若不確定，出發前再查官方清單。", en: "When entering Great Britain from Taiwan, do not bring meat or dairy. Check the official list for biscuits, chocolate, or dried noodles if unsure." },
        source: "https://www.gov.uk/guidance/personal-food-plant-and-animal-product-imports"
      },
      {
        status: "alert",
        title: { zh: "英國入境免稅額", en: "UK personal allowance" },
        body: { zh: "自用品與禮物超過個人免稅額就要申報。高價商品保留收據，也不要替別人帶商業用途物品。", en: "Declare personal goods and gifts that exceed the allowance. Keep receipts for expensive items and do not carry commercial goods for someone else." },
        source: "https://www.gov.uk/duty-free-goods/arrivals-from-outside-the-eu"
      },
      {
        status: "confirmed",
        title: { zh: "巴黎退稅流程", en: "Paris tax refund" },
        body: { zh: "如果同一天、同一家店的含稅消費超過 100 歐元，就可以請店裡開 détaxe / tax free 表單。7/11 離開歐盟時，先在 CDG 做退稅驗證，再去托運行李。", en: "If you spend more than 100 euros including tax in the same shop on the same day, ask for the détaxe / tax free form. When leaving the EU on 11 July, validate the refund at CDG before checking your bags." },
        source: "https://www.douane.gouv.fr/fiche/la-detaxe-en-france-pour-les-touristes-pablo"
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
        body: { zh: "英國靠左行駛。過馬路先看地上的 LOOK RIGHT / LOOK LEFT，不要照在台灣的習慣直接走。", en: "Traffic drives on the left. Follow the LOOK RIGHT / LOOK LEFT markings instead of relying on habit." }
      },
      {
        status: "confirmed",
        title: { zh: "手扶梯右站左走", en: "Stand right, walk left" },
        body: { zh: "倫敦地鐵手扶梯右站左行。帶大件行李就靠右站好，不要在扶梯上搬動。", en: "Stand on the right and walk on the left on London Underground escalators. With large luggage, stay on the right and do not move it on the escalator." }
      },
      {
        status: "optional",
        title: { zh: "備一點現金，但不用太多", en: "Carry a little cash, not a lot" },
        body: { zh: "英國大多可刷卡，交通也用感應付款。身上留少量英鎊給小店、寄物櫃或刷卡失敗時使用。", en: "Cards and contactless payments work in most places. Carry a small amount of GBP for small shops, lockers, or payment failures." }
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
        title: { zh: "eSIM 先裝，主門號先留著", en: "Install the eSIM, keep your main number" },
        body: { zh: "歐洲 39 國 15 天 eSIM 已經買了，出發前先裝進手機，到歐洲再開。原本門號先別關，收簡訊、銀行驗證碼和臨時聯絡還是會用到。", en: "The 39-country Europe eSIM for 15 days is already bought. Install it before departure and switch it on once you are in Europe. Keep your main number active for SMS, banking codes, and backup contact." }
      },
      {
        status: "confirmed",
        title: { zh: "小費怎麼給", en: "Tipping" },
        body: { zh: "餐廳常自動加 service charge，帳單有寫就不必再給。沒有 service charge、服務也不錯時，可抓 10% 左右；咖啡店、速食與外帶不需要。", en: "Restaurants often add a service charge; if it is on the bill, you do not need to add more. If there is no service charge and service is good, around 10% is fine. Cafes, fast food, and takeaway do not require tips." }
      },
      {
        status: "alert",
        title: { zh: "手機與包包放內側", en: "Keep phone and bag inward" },
        body: { zh: "倫敦熱門景點、地鐵口與購物街人多，手機不要長時間拿在馬路側。包包拉鍊朝內，護照與備用卡分開放。", en: "Busy London sights, Tube entrances, and shopping streets can be crowded. Avoid holding your phone on the road side for long; keep zippers inward and separate your passport from backup cards." }
      },
      {
        status: "alert",
        title: { zh: "CDG 那天時間抓寬", en: "Keep extra time at CDG" },
        body: { zh: "前一晚雖然住 Novotel CDG，7/11 仍要預留排隊時間。要退稅就約 09:00 進 2E；不退稅則約 09:30。", en: "Even with the Novotel CDG stay, allow time for queues on 11 July. Enter Terminal 2E around 09:00 for tax refund or 09:30 without it." }
      },
      {
        status: "optional",
        title: { zh: "排隊與基本禮貌", en: "Queues and basic manners" },
        body: { zh: "Please、thank you、sorry、excuse me 已經夠用。大家通常照順序排隊；要問路或借過，先說 excuse me。", en: "Please, thank you, sorry, and excuse me are enough. Queue in order, and start with excuse me when asking for directions or space to pass." }
      }
    ],
    firstDay: [
      { zh: "抵達後先確認回程與轉機資料都在手機離線檔案裡。", en: "After arrival, make sure return and transfer details are saved offline on your phone." },
      { zh: "從機場到飯店先用同一張交通付款工具，避免日上限失效。", en: "Use the same payment method for airport-to-city transport to keep fare capping simple." },
      { zh: "15:00 後入住 INNSiDE Manchester；若太早到，先寄放行李與吃點東西。", en: "INNSiDE Manchester check-in is after 15:00; if you arrive early, leave luggage and get food." },
      { zh: "第一晚只安排補水、洗澡、整理文件和睡覺。", en: "Use the first evening for water, a shower, document checks, and sleep." }
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
      terminals: { zh: "抵達 T3，先轉去 T1；進城搭 Frankfurt Airport Regionalbahnhof 的 S8 / S9，回來再走 T1 出境。", en: "Arrive at T3, move to T1, use the Regionalbahnhof S8 / S9 for the city stop, then return through T1 for the Lufthansa departure." },
      notes: [
        { zh: "CI 抵達後先看螢幕確認 LH 0946，再從 T3 接駁去 T1；目前 Skyline 停駛，先以機場接駁巴士為主。", en: "After CI arrives, confirm LH 0946 on the screens, then move from T3 to T1; use the airport shuttle bus while the Skyline service is unavailable." },
        { zh: "進城這段可搭 S8 或 S9 去 Hauptwache，老城一圈再回來；如果不想走太滿，也可以直接縮成羅馬廣場和美因河。", en: "Take S8 or S9 into Hauptwache for the old-town loop, or keep it shorter with just Römerberg and the river if the layover feels too long already." },
        { zh: "若去法蘭克福動物園，約 13:30 前回到 T1，預留安檢、吃東西和找登機門的時間。LH 0946 於 16:20 起飛。", en: "If you visit Frankfurt Zoo, return to Terminal 1 by about 13:30 for security, food, and the gate. LH 0946 departs at 16:20." },
        { zh: "若登機證未一次拿齊，抵達後找 Lufthansa / transfer counter 或自助機補印。", en: "If boarding passes are not issued through, use a Lufthansa transfer counter or kiosk after arrival." }
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
      status: "confirmed",
      title: "Riu Plaza London The Westminster",
      city: { zh: "倫敦", en: "London" },
      image: riuImage,
      imageAlt: { zh: "Riu Plaza London The Westminster 訂房畫面", en: "Booking view for Riu Plaza London The Westminster" },
      link: "https://www.google.com/maps/search/?api=1&query=Riu+Plaza+London+The+Westminster",
      facts: [
        { zh: "日期：2026/07/04 – 2026/07/07（3 晚）", en: "Dates: 4 Jul 2026 – 7 Jul 2026 (3 nights)" },
        { zh: "飯店：Riu Plaza London The Westminster", en: "Hotel: Riu Plaza London The Westminster" },
        { zh: `訂房總價：${money.londonHotel}`, en: `Booking total: ${money.londonHotel}` },
        { zh: `平均每晚：約 ${money.londonHotelPerNight}`, en: `Average per night: ${money.londonHotelPerNight}` },
        { zh: "狀態：倫敦住宿已確認", en: "Status: London stay confirmed" }
      ],
      note: { zh: "7/4–7/7 住 Riu Plaza London The Westminster。抵達當天走西敏，7/7 直接前往 St Pancras。", en: "Stay at Riu Plaza London The Westminster from 4-7 July. Walk Westminster on arrival day and head to St Pancras on 7 July." }
    },
    {
      status: "confirmed",
      title: { zh: "巴黎住宿", en: "Paris hotel" },
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
        { zh: "位置：步行可到艾菲爾鐵塔與塞納河", en: "Location: walking distance to the Eiffel Tower and the Seine" },
        { zh: "狀態：訂房已確認", en: "Status: booking confirmed" }
      ],
      note: { zh: "7/7–7/10 住 Pullman Paris Tour Eiffel。高樓層陽台看得到鐵塔；晚上想休息，就直接在房間看亮燈。", en: "Stay at Pullman Paris Tour Eiffel from 7-10 July. The high-floor balcony faces the tower, so there is no need to go out again for the lights at night." }
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
        { zh: "位置：Roissypole RER 站旁，可接 CDG 各航廈", en: "Location: next to Roissypole RER, with connections to the CDG terminals" },
        { zh: "地址：Paris Street, Roissypole RER, 93290 Tremblay-en-France", en: "Address: Paris Street, Roissypole RER, 93290 Tremblay-en-France" },
        { zh: `刷卡紀錄：${money.cdgHotel}`, en: `Payment note: ${money.cdgHotel}` },
        { zh: "狀態：回程前一晚已確認", en: "Status: confirmed for the night before departure" }
      ],
      note: { zh: "7/10 晚住 Novotel Paris Charles-de-Gaulle Airport。隔天不用從市區趕路，早上直接去 2E 辦退稅、托運和報到。", en: "Stay at Novotel Paris Charles-de-Gaulle Airport on 10 July. The next morning starts at the airport, with tax refund, bag drop, and check-in at Terminal 2E." }
    },
    {
      status: "optional",
      title: { zh: "曼徹斯特備選飯店", en: "Manchester hotel alternatives" },
      city: { zh: "曼徹斯特", en: "Manchester" },
      facts: [
        { zh: "Manchester Marriott", en: "Manchester Marriott" },
        { zh: "Hyatt Regency Manchester", en: "Hyatt Regency Manchester" },
        { zh: "Hilton Manchester Deansgate", en: "Hilton Manchester Deansgate" }
      ],
      note: { zh: "目前住 INNSiDE。若訂房有變，再比較這三間，不用先花時間重找。", en: "INNSiDE is the current booking. Compare these three only if that reservation changes." }
    }
  ],
  itinerary: [
    { date: "6/29-6/30", city: { zh: "Taipei → Frankfurt → Manchester", en: "Taipei → Frankfurt → Manchester" }, kind: "travel", theme: { zh: "長程飛行與法蘭克福轉機", en: "Long-haul flights and the Frankfurt layover" }, title: { zh: "台北出發，法蘭克福停半天", en: "Taipei departure and a half-day in Frankfurt" }, status: "confirmed", must: ["CI 0061｜TPE 22:20 → FRA 06:50(+1)", "T3 → T1｜接駁後搭 S8 / S9 進 Hauptwache", "羅馬廣場 → 鐵橋 → 法蘭克福大教堂", "LH 0946｜FRA 16:20 → MAN 17:10", "入住曼徹斯特"], optional: ["時間夠再去法蘭克福動物園", "體力普通就只走羅馬廣場和美因河", "MainNizza 或老城附近吃午餐", "抵達曼徹斯特後吃飯、補水、整理文件"], tickets: ["法蘭克福老城散步免費", "法蘭克福動物園：學生票 6 歐、Frankfurt Card 折後約 10 歐", "午餐依實際消費"], notes: ["先確認 LH 0946 和回機場時間。老城看體力，動物園可以當天取消。"] },
    { date: "6/30-7/3", city: { zh: "Manchester", en: "Manchester" }, kind: "conference", theme: { zh: "AIB 會議和曼徹斯特停留", en: "Conference days and the Manchester stay" }, title: { zh: "AIB 2026 這幾天", en: "The AIB 2026 days" }, status: "confirmed", must: ["AIB Conference", "Presentation", "Networking"], optional: ["空檔回飯店整理簡報", "附近簡單晚餐"], tickets: ["景點門票：GBP 0；以會議活動為主"], notes: ["這幾天就以 AIB 為主。兩場發表都已確認，會議前後不要把行程塞太滿。"] },
    { date: "7/4", city: { zh: "Manchester → London", en: "Manchester → London" }, kind: "travel", theme: { zh: "曼徹斯特到倫敦", en: "Manchester to London" }, title: { zh: "搭火車到倫敦，晚上走西敏", en: "Train to London and an evening in Westminster" }, status: "confirmed", must: ["Avanti West Coast", "Manchester → London", "入住 Riu Plaza London The Westminster"], optional: ["抵達後 Big Ben", "Westminster Abbey 外觀", "London Eye 河岸"], tickets: ["火車票還沒買", "地標散步：免費"], notes: ["抵達後先辦入住。還有精神再走 Big Ben、西敏橋和 London Eye 河岸。"] },
    { date: "7/5", city: { zh: "London", en: "London" }, kind: "free", theme: { zh: "白金漢宮、公園和 Harrods", en: "Buckingham Palace, the parks, and Harrods" }, title: { zh: "白金漢宮、Covent Garden、Harrods", en: "Buckingham Palace, Covent Garden, and Harrods" }, status: "confirmed", must: ["Buckingham Palace", "St. James's Park", "Covent Garden", "Harrods"], optional: ["Leicester Square", "Piccadilly Circus", "Green Park"], tickets: ["街區散步免費；主要花費看購物和下午茶"], notes: ["上午看白金漢宮，穿過公園去 Covent Garden；Harrods 放傍晚。"] },
    { date: "7/6", city: { zh: "London", en: "London" }, kind: "free", theme: { zh: "Bond Street、Mayfair 和 Soho", en: "Bond Street, Mayfair, and Soho" }, title: { zh: "精品街、百貨和 Soho 晚餐", en: "Shopping streets, department stores, and dinner in Soho" }, status: "confirmed", must: ["Bond Street", "Selfridges", "Mayfair", "Soho / Chinatown"], optional: ["Oxford Street", "Regent Street", "West End"], tickets: ["街區散步免費；購物依實際安排"], notes: ["上午逛 Bond Street，下午看 Mayfair 或 Selfridges，晚上到 Soho。隔天搭 Eurostar，不要太晚回飯店。"] },
    { date: "7/7", city: { zh: "London → Paris", en: "London → Paris" }, kind: "travel", theme: { zh: "Eurostar 與巴黎第一晚", en: "Eurostar and the first evening in Paris" }, title: { zh: "抵達巴黎，入住 Pullman", en: "Arrive in Paris and check into Pullman" }, status: "confirmed", must: ["Eurostar｜St Pancras → Gare du Nord", "入住 Pullman Paris Tour Eiffel", "艾菲爾鐵塔夜景", "Pullman 陽台看鐵塔"], optional: ["塞納河邊散步"], tickets: ["Eurostar 這段還沒買", "鐵塔周邊散步免費"], notes: ["提早 75–90 分鐘到 St Pancras。抵達巴黎後先去 Pullman 放行李，晚上只排鐵塔附近。"] },
    { date: "7/8", city: { zh: "Paris", en: "Paris" }, kind: "free", theme: { zh: "羅浮宮、右岸和百貨屋頂", en: "The Louvre, the Right Bank, and the rooftop" }, title: { zh: "羅浮宮與歌劇院一帶", en: "The Louvre and the Opéra area" }, status: "confirmed", must: ["Louvre Museum", "Place Vendôme", "Galeries Lafayette 頂樓", "巴黎歌劇院周邊"], optional: ["右岸咖啡館小停留"], tickets: ["Louvre 要去再訂時段", "老佛爺百貨頂樓免費"], notes: ["上午看羅浮宮。下午走 Place Vendôme、歌劇院周邊和老佛爺頂樓。"] },
    { date: "7/9", city: { zh: "Paris", en: "Paris" }, kind: "free", theme: { zh: "右岸大道、精品街和塞納河", en: "Right Bank avenues, shopping, and the Seine" }, title: { zh: "Avenue Montaigne、香榭麗舍、凱旋門", en: "Avenue Montaigne, the Champs-Elysees, and the Arc" }, status: "confirmed", must: ["Avenue Montaigne", "Champs-Elysees", "Arc de Triomphe", "塞納河夜景"], optional: ["精品購物", "晚餐後再看一次鐵塔"], tickets: ["街區散步與購物：依實際消費", "想上凱旋門再另外買票"], notes: ["三個地點都在右岸，排同一天即可。晚上視體力到塞納河走一段。"] },
    { date: "7/10", city: { zh: "Paris", en: "Paris" }, kind: "free", theme: { zh: "蒙馬特、最後採買與前往 CDG", en: "Montmartre, final shopping, and CDG" }, title: { zh: "蒙馬特，晚上住機場", en: "Montmartre and an airport overnight" }, status: "confirmed", must: ["Sacré-Cœur / Montmartre", "巴黎最後採購", "回 Pullman 拿寄放行李", "入住巴黎戴高樂機場候機樓諾富特酒店"], optional: ["沿途街角拍照"], tickets: ["聖心堂與蒙馬特散步免費"], notes: ["上午去聖心堂和蒙馬特。下午回 Pullman 拿行李，再直接叫車去 Novotel CDG。"] },
    { date: "7/11-7/12", city: { zh: "Paris → Manchester → Heathrow → Taipei", en: "Paris → Manchester → Heathrow → Taipei" }, kind: "travel", theme: { zh: "三段航班返台", en: "Three flights home" }, title: { zh: "巴黎出發，隔天回到台北", en: "Leave Paris and arrive in Taipei the next day" }, status: "confirmed", must: ["Novotel Paris Charles-de-Gaulle Airport → CDG Terminal 2E", "Air France Business Standard｜CDG 12:50 → MAN 13:25", "BA 1371｜MAN 18:10 → LHR 19:15", "CI 0082｜LHR 21:10 → TPE 18:05(+1)"], optional: ["巴黎上午只排簡單移動"], tickets: ["AF 歐洲段：約 EUR 354.05 / NT$12,930"], notes: ["上午直接去 CDG 2E。從巴黎飛曼徹斯特後，接 BA 1371 到希斯洛，再轉 CI 0082 回台北。"] }
  ],
  attractionCosts: [
    { status: "confirmed", day: "6/30", attraction: "Frankfurt Card / Frankfurt Zoo", fee: "EUR 6-13", estimate: "約 NT$225-488 / GBP 5-11 / EUR 6-13 / US$7-14", note: { zh: "如果想跑到動物園，先看學生票能不能用；Frankfurt Card 也能折一些交通和門票。", en: "If you want the zoo stop, check whether the student ticket works; the Frankfurt Card can also help with transport and admission." }, source: "https://frankfurt.de/english/discover-and-experience/frankfurt-card" },
    { status: "confirmed", day: "7/4", attraction: "Big Ben / Westminster Abbey / London Eye riverside", fee: "Free", estimate: "NT$0 / GBP 0 / US$0", note: { zh: "入住 Riu 後走西敏一圈，景點先看外觀。", en: "Walk the Westminster loop after checking into Riu and see the landmarks from outside." }, source: "https://www.visitlondon.com/" },
    { status: "confirmed", day: "7/5", attraction: "Buckingham Palace / St James's Park / Covent Garden / Harrods", fee: "Free entry", estimate: "NT$0 / GBP 0 / US$0", note: { zh: "白金漢宮與公園免費；Harrods 的花費看當天購物。", en: "Buckingham Palace exterior and the park are free; Harrods spending depends on purchases." }, source: "https://www.harrods.com/" },
    { status: "confirmed", day: "7/6", attraction: "Bond Street / Mayfair / Soho", fee: "Free", estimate: "NT$0 / GBP 0 / US$0", note: { zh: "上午逛 Bond Street，下午走 Mayfair，晚上到 Soho。", en: "Visit Bond Street in the morning, walk Mayfair in the afternoon, and go to Soho in the evening." }, source: "https://www.visitlondon.com/" },
    { status: "pending", day: "7/7", attraction: "Eurostar", fee: { zh: "這段還沒買", en: "Not booked yet" }, estimate: { zh: "到站時間要抓寬", en: "Leave extra time at St Pancras" }, note: { zh: "車程約 2 小時 20 分。St Pancras 至少提早 75–90 分鐘到，還要過安檢和護照檢查。", en: "The trip takes about 2h20. Reach St Pancras 75-90 minutes early for security and passport control." }, source: "https://www.eurostar.com/" },
    { status: "optional", day: "7/7", attraction: "Eiffel Tower", fee: { zh: "想上塔再另外買", en: "Only if you want to go up" }, estimate: { zh: "當天再看體力和時段", en: "Check the timing and your energy first" }, note: { zh: "只看夜景的話，塔下和 Trocadéro 都不用門票。", en: "For the night view only, the tower base and Trocadéro do not require a ticket." }, source: "https://www.toureiffel.paris/en" },
    { status: "optional", day: "7/8", attraction: "Louvre Museum", fee: { zh: "要去再訂票", en: "Book only if you are going" }, estimate: { zh: "以官網時段和票價為準", en: "Use the official timeslots and pricing" }, note: { zh: "先訂時段票，避免把時間花在現場排隊。", en: "Book a timed ticket to avoid spending the morning in the queue." }, source: "https://www.louvre.fr/en" },
    { status: "confirmed", day: "7/9", attraction: "Champs-Elysees / Arc de Triomphe", fee: "Depends", estimate: "依實際安排 / Depends / Depends", note: { zh: "香榭麗舍大道散步免費，若上凱旋門再另外查票。", en: "Walking the Champs-Elysees is free; check separately if you want Arc entry." }, source: "https://www.paris-arc-de-triomphe.fr/en/" },
    { status: "optional", day: "7/10", attraction: "Seine river cruise", fee: { zh: "有空再加", en: "Only if time still feels open" }, estimate: { zh: "票價看公司和時段", en: "Price depends on operator and time" }, note: { zh: "這段不一定要先訂。如果 7/9 晚上已經走過塞納河，就不必再硬加。", en: "You do not have to book this in advance. If you already walked the Seine on 9 July, there is no need to force it in again." }, source: "https://www.bateauxparisiens.com/en.html" }
  ],
  mapRouteUrl: "https://www.google.com/maps/dir/Frankfurt+Airport+Regionalbahnhof/Frankfurt+Hauptwache/R%C3%B6merberg+Frankfurt/Eiserner+Steg+Frankfurt/Frankfurt+Cathedral/Frankfurt+Zoo/Frankfurt+Airport+Regionalbahnhof/Manchester+Airport/INNSiDE+Manchester/Manchester+Piccadilly/London+Euston/Big+Ben/Harrods/Covent+Garden/Piccadilly+Circus/London+St+Pancras+International/Gare+du+Nord/Pullman+Paris+Tour+Eiffel/Eiffel+Tower/Louvre+Museum/Place+Vendome+Paris/Galeries+Lafayette+Haussmann/Avenue+Montaigne+Paris/Arc+de+Triomphe/Sacre-Coeur+Paris/Novotel+Paris+Charles-de-Gaulle+Airport/Charles+de+Gaulle+Airport+Terminal+2E/Manchester+Airport",
  mapLocations: [
    { status: "confirmed", city: "Frankfurt", title: { zh: "Frankfurt Airport Regionalbahnhof", en: "Frankfurt Airport Regionalbahnhof" }, query: "Frankfurt Airport Regionalbahnhof", note: { zh: "法蘭克福進城和回機場都會用到的 S-Bahn 站。", en: "The S-Bahn station for both the city stop and the airport return." } },
    { status: "confirmed", city: "Frankfurt", title: { zh: "Hauptwache", en: "Hauptwache" }, query: "Frankfurt Hauptwache", note: { zh: "搭 S8 / S9 進城後在這裡下車，再往老城走。", en: "Get off the S8 or S9 here, then walk toward the old town." } },
    { status: "confirmed", city: "Frankfurt", title: { zh: "Römerberg", en: "Römerberg" }, query: "Römerberg Frankfurt", note: { zh: "老城主廣場，可先走旅客服務中心、正義女神和舊市政廳。", en: "The old-town square, with the visitor centre, Justice Fountain, and the old town hall." } },
    { status: "confirmed", city: "Frankfurt", title: { zh: "Eiserner Steg", en: "Eiserner Steg" }, query: "Eiserner Steg Frankfurt", note: { zh: "從羅馬廣場走到河邊時會經過，短停也能排。", en: "It sits between Römerberg and the river and also fits the shorter route." } },
    { status: "confirmed", city: "Frankfurt", title: { zh: "Frankfurt Cathedral", en: "Frankfurt Cathedral" }, query: "Frankfurt Cathedral", note: { zh: "短版老城路線可在這裡折返。", en: "Turn back here on the shorter old-town route." } },
    { status: "confirmed", city: "Frankfurt", title: { zh: "Frankfurt Zoo", en: "Frankfurt Zoo" }, query: "Frankfurt Zoo", note: { zh: "選配行程；只有能在 13:30 前回 T1 才去。", en: "Optional; visit only if you can return to Terminal 1 before 13:30." } },
    { status: "confirmed", city: "Manchester", title: { zh: "Manchester Airport", en: "Manchester Airport" }, query: "Manchester Airport", note: { zh: "6/30 抵達，7/11 從這裡轉往希斯洛。", en: "Arrive here on 30 June and return on 11 July for the Heathrow connection." } },
    { status: "confirmed", city: "Manchester", title: { zh: "INNSiDE Manchester", en: "INNSiDE Manchester" }, query: "INNSiDE Manchester 1 First Street Manchester", note: { zh: "6/30–7/5 住宿，地址在 1 First Street。", en: "Hotel from 30 June to 5 July at 1 First Street." } },
    { status: "confirmed", city: "Manchester", title: { zh: "Alliance Manchester Business School", en: "Alliance Manchester Business School" }, query: "Alliance Manchester Business School Booth Street West Manchester", note: { zh: "7/1 Competitive 發表所在的 AMBS。從 INNSiDE 走路就能到。", en: "The AMBS venue for the 1 July Competitive session. It is walkable from INNSiDE." } },
    { status: "confirmed", city: "Manchester", title: { zh: "University Place", en: "University Place" }, query: "University Place Oxford Road Manchester", note: { zh: "7/3 Interactive 發表所在的 UP。從 INNSiDE 直接步行即可。", en: "The UP venue for the 3 July Interactive session. It is also a direct walk from INNSiDE." } },
    { status: "book", city: "Manchester", title: { zh: "Manchester Piccadilly", en: "Manchester Piccadilly" }, query: "Manchester Piccadilly Station", note: { zh: "7/4 前往 London Euston 的起點。", en: "The starting point for the 4 July train to London Euston." } },
    { status: "book", city: "London", title: { zh: "London Euston", en: "London Euston" }, query: "London Euston Station", note: { zh: "從曼徹斯特抵達倫敦的主要車站。", en: "The main London arrival station from Manchester." } },
    { status: "confirmed", city: "London", title: { zh: "Big Ben / Westminster", en: "Big Ben / Westminster" }, query: "Big Ben London", note: { zh: "7/4 入住 Riu 後，傍晚從這裡開始步行。", en: "Start the evening walk here after checking into Riu on 4 July." } },
    { status: "confirmed", city: "London", title: { zh: "Westminster Abbey", en: "Westminster Abbey" }, query: "Westminster Abbey London", note: { zh: "和 Big Ben、西敏橋排在同一晚，不用另外跨區。", en: "Keep it on the same evening as Big Ben and Westminster Bridge." } },
    { status: "confirmed", city: "London", title: { zh: "London Eye", en: "London Eye" }, query: "London Eye", note: { zh: "第一晚走西敏橋後，到河岸看夜景。", en: "See the riverside at night after Westminster Bridge." } },
    { status: "confirmed", city: "London", title: { zh: "Buckingham Palace", en: "Buckingham Palace" }, query: "Buckingham Palace", note: { zh: "7/5 上午先看外觀，時間對得上再看衛兵交接。", en: "Use it for the 5 July morning and only stay for the guard change if timing really fits." } },
    { status: "confirmed", city: "London", title: { zh: "St. James's Park", en: "St. James's Park" }, query: "St James's Park London", note: { zh: "7/5 從白金漢宮穿過公園，再往 Covent Garden。", en: "Walk through the park from Buckingham Palace toward Covent Garden on 5 July." } },
    { status: "confirmed", city: "London", title: { zh: "Harrods", en: "Harrods" }, query: "Harrods London", note: { zh: "7/5 傍晚逛百貨，晚餐留在 Knightsbridge 一帶。", en: "Visit in the late afternoon on 5 July and have dinner around Knightsbridge." } },
    { status: "confirmed", city: "London", title: { zh: "Bond Street", en: "Bond Street" }, query: "Bond Street London", note: { zh: "Chanel、Dior、LV、YSL 可集中看。", en: "A compact area for Chanel, Dior, Louis Vuitton, and YSL." } },
    { status: "confirmed", city: "London", title: { zh: "Covent Garden", en: "Covent Garden" }, query: "Covent Garden London", note: { zh: "7/5 中午後從 St. James's Park 前往。", en: "Continue here from St. James's Park after lunch on 5 July." } },
    { status: "confirmed", city: "London", title: { zh: "Piccadilly Circus", en: "Piccadilly Circus" }, query: "Piccadilly Circus London", note: { zh: "從 Covent Garden 往 Regent Street 走時可以經過。", en: "Pass through on the walk from Covent Garden toward Regent Street." } },
    { status: "confirmed", city: "London", title: { zh: "Selfridges", en: "Selfridges" }, query: "Selfridges London", note: { zh: "逛完 Bond Street 還想看百貨，再走到這裡。", en: "Add it after Bond Street if there is still time for a department store." } },
    { status: "book", city: "London", title: { zh: "St Pancras International", en: "St Pancras International" }, query: "St Pancras International", note: { zh: "7/7 Eurostar 前往巴黎的起點。", en: "The 7 July Eurostar departure point to Paris." } },
    { status: "confirmed", city: "Paris", title: { zh: "Pullman Paris Tour Eiffel", en: "Pullman Paris Tour Eiffel" }, query: "Pullman Paris Tour Eiffel", note: { zh: "7/7–7/10 住宿；訂的是高樓層鐵塔景陽台房。", en: "Hotel from 7-10 July, booked in a high-floor balcony room with a tower view." } },
    { status: "confirmed", city: "Paris", title: { zh: "Eiffel Tower", en: "Eiffel Tower" }, query: "Eiffel Tower", note: { zh: "7/7 晚上從 Pullman 步行前往。", en: "Walk here from Pullman on the evening of 7 July." } },
    { status: "confirmed", city: "Paris", title: { zh: "Trocadéro", en: "Trocadéro" }, query: "Trocadero Paris", note: { zh: "7/7 晚上的鐵塔拍照點。", en: "Tower photo stop for the evening of 7 July." } },
    { status: "confirmed", city: "Paris", title: { zh: "Louvre Museum", en: "Louvre Museum" }, query: "Louvre Museum", note: { zh: "7/8 上午依預約時段入館。", en: "Enter at the booked time on the morning of 8 July." } },
    { status: "confirmed", city: "Paris", title: { zh: "Tuileries Garden", en: "Tuileries Garden" }, query: "Tuileries Garden Paris", note: { zh: "7/8 離開羅浮宮後，穿過花園前往協和廣場。", en: "Cross the garden toward Place de la Concorde after the Louvre on 8 July." } },
    { status: "confirmed", city: "Paris", title: { zh: "Place de la Concorde", en: "Place de la Concorde" }, query: "Place de la Concorde Paris", note: { zh: "7/8 穿過杜樂麗花園後會到這裡，再往 Place Vendôme。", en: "Reach it after crossing the Tuileries on 8 July, then continue to Place Vendôme." } },
    { status: "confirmed", city: "Paris", title: { zh: "Place Vendôme", en: "Place Vendôme" }, query: "Place Vendôme Paris", note: { zh: "7/8 羅浮宮後步行前往，再到歌劇院區。", en: "Walk here after the Louvre on 8 July, then continue to the Opéra district." } },
    { status: "confirmed", city: "Paris", title: { zh: "Avenue Montaigne", en: "Avenue Montaigne" }, query: "Avenue Montaigne Paris", note: { zh: "7/9 與香榭麗舍、凱旋門排在同一天。", en: "Visit on 9 July with the Champs-Elysees and Arc de Triomphe." } },
    { status: "confirmed", city: "Paris", title: { zh: "Champs-Elysees / Arc de Triomphe", en: "Champs-Elysees / Arc de Triomphe" }, query: "Arc de Triomphe Paris", note: { zh: "7/9 上午從凱旋門往香榭麗舍步行。", en: "Start at the Arc and walk down the Champs-Elysees on 9 July." } },
    { status: "confirmed", city: "Paris", title: { zh: "Galeries Lafayette Haussmann", en: "Galeries Lafayette Haussmann" }, query: "Galeries Lafayette Haussmann", note: { zh: "7/8 看頂樓；7/10 若有缺的東西再回來買。", en: "Visit the rooftop on 8 July and return on 10 July only for remaining purchases." } },
    { status: "confirmed", city: "Paris", title: { zh: "Saint-Germain-des-Prés", en: "Saint-Germain-des-Prés" }, query: "Saint-Germain-des-Prés Paris", note: { zh: "7/8 傍晚選配；羅浮宮待太久就取消。", en: "Optional on the evening of 8 July; skip it if the Louvre runs long." } },
    { status: "confirmed", city: "Paris", title: { zh: "Sacré-Cœur / Montmartre", en: "Sacré-Cœur / Montmartre" }, query: "Sacré-Cœur Paris", note: { zh: "巴黎最後一天的晨間散步。", en: "The morning walk for the last Paris day." } },
    { status: "confirmed", city: "Paris", title: { zh: "Seine", en: "Seine" }, query: "Seine River Paris", note: { zh: "7/9 晚上視體力散步或搭遊船。", en: "Walk by the river or take a cruise on the evening of 9 July, depending on energy." } },
    { status: "confirmed", city: "Paris", title: { zh: "Novotel Paris Charles-de-Gaulle Airport", en: "Novotel Paris Charles-de-Gaulle Airport" }, query: "Novotel Paris Charles-de-Gaulle Airport", note: { zh: "7/10 晚住機場旁，隔天直接去 2E 搭法航。", en: "Stay by the airport on 10 July, then go directly to Terminal 2E for Air France." } },
    { status: "confirmed", city: "Paris", title: { zh: "CDG Terminal 2E", en: "CDG Terminal 2E" }, query: "Charles de Gaulle Airport Terminal 2E", note: { zh: "7/11 Air France Business Standard 的出發點。", en: "The departure terminal for the 11 July Air France Business Standard flight." } },
  ],
  mapRoutes: [
    { status: "confirmed", label: { zh: "6/30 法蘭克福轉機散步", en: "30 Jun Frankfurt layover route" }, note: { zh: "FRA Regionalbahnhof → Hauptwache → Römerberg → 鐵橋 → 法蘭克福大教堂 → Frankfurt Zoo → 機場。", en: "FRA Regionalbahnhof → Hauptwache → Römerberg → Eiserner Steg → Frankfurt Cathedral → Frankfurt Zoo → airport." }, url: "https://www.google.com/maps/dir/Frankfurt+Airport+Regionalbahnhof/Frankfurt+Hauptwache/R%C3%B6merberg+Frankfurt/Eiserner+Steg+Frankfurt/Frankfurt+Cathedral/Frankfurt+Zoo/Frankfurt+Airport+Regionalbahnhof" },
    { status: "confirmed", label: { zh: "6/30 抵達曼徹斯特", en: "30 Jun Manchester arrival" }, note: { zh: "曼徹斯特機場 → INNSiDE Manchester", en: "MAN Airport → INNSiDE Manchester" }, url: "https://www.google.com/maps/dir/Manchester+Airport/INNSiDE+Manchester+1+First+Street+Manchester" },
    { status: "confirmed", label: { zh: "7/1 INNSiDE → AMBS", en: "1 Jul INNSiDE → AMBS" }, note: { zh: "步行約 12–15 分鐘。第一次走抓 20 分鐘，提早到 Room 3.006B。", en: "The walk takes about 12-15 minutes. Allow 20 minutes on the first day and arrive early at Room 3.006B." }, url: "https://www.google.com/maps/dir/INNSiDE+Manchester+1+First+Street+Manchester/Alliance+Manchester+Business+School+Booth+Street+West+Manchester" },
    { status: "confirmed", label: { zh: "7/3 INNSiDE → University Place", en: "3 Jul INNSiDE → University Place" }, note: { zh: "從 INNSiDE Manchester 走去 University Place，大約 15–18 分鐘。這場 09:30 開始，建議比前一天再早一點出門。", en: "Walk from INNSiDE Manchester to University Place in about 15-18 minutes. This session starts at 09:30, so leave a little earlier than on 1 July." }, url: "https://www.google.com/maps/dir/INNSiDE+Manchester+1+First+Street+Manchester/University+Place+Oxford+Road+Manchester" },
    { status: "book", label: { zh: "7/4 曼徹斯特 → 倫敦", en: "4 Jul Manchester → London" }, note: { zh: "Piccadilly → Euston，之後接 Big Ben、西敏寺外觀、國會大廈、西敏橋和 London Eye。", en: "Piccadilly → Euston, then continue to Big Ben, Westminster Abbey, Parliament, Westminster Bridge, and the London Eye." }, url: "https://www.google.com/maps/dir/Manchester+Piccadilly/London+Euston/Big+Ben+London/Westminster+Abbey/Houses+of+Parliament/Westminster+Bridge/London+Eye" },
    { status: "confirmed", label: { zh: "7/5 白金漢宮與 Harrods", en: "5 Jul Buckingham Palace and Harrods" }, note: { zh: "Buckingham Palace → St. James's Park → Covent Garden → Leicester Square → Piccadilly Circus → Harrods。", en: "Buckingham Palace → St. James's Park → Covent Garden → Leicester Square → Piccadilly Circus → Harrods." }, url: "https://www.google.com/maps/dir/Buckingham+Palace/St+James's+Park+London/Covent+Garden/Leicester+Square/Piccadilly+Circus/Harrods+London" },
    { status: "confirmed", label: { zh: "7/6 Bond Street 與 Soho", en: "6 Jul Bond Street and Soho" }, note: { zh: "Bond Street → Selfridges → Mayfair → Soho / Chinatown。", en: "Bond Street → Selfridges → Mayfair → Soho / Chinatown." }, url: "https://www.google.com/maps/dir/Bond+Street+London/Selfridges+London/Mayfair+London/Soho+London/Chinatown+London" },
    { status: "book", label: { zh: "7/7 倫敦 → 巴黎", en: "7 Jul London → Paris" }, note: { zh: "St Pancras → Gare du Nord → Pullman Paris Tour Eiffel。", en: "St Pancras → Gare du Nord → Pullman Paris Tour Eiffel." }, url: "https://www.google.com/maps/dir/St+Pancras+International/Gare+du+Nord/Pullman+Paris+Tour+Eiffel" },
    { status: "confirmed", label: { zh: "7/8 羅浮宮與塞納河", en: "8 Jul Louvre and Seine" }, note: { zh: "Pullman → Louvre → Tuileries → Place de la Concorde → Place Vendôme → Galeries Lafayette → Saint-Germain。", en: "Pullman → Louvre → Tuileries → Place de la Concorde → Place Vendôme → Galeries Lafayette → Saint-Germain." }, url: "https://www.google.com/maps/dir/Pullman+Paris+Tour+Eiffel/Louvre+Museum/Tuileries+Garden/Place+de+la+Concorde/Place+Vendome+Paris/Galeries+Lafayette+Haussmann/Saint-Germain-des-Pres" },
    { status: "confirmed", label: { zh: "7/9 巴黎右岸線", en: "9 Jul Right Bank line" }, note: { zh: "Arc de Triomphe → Champs-Elysees → Avenue Montaigne → Place Vendôme → Seine。", en: "Arc de Triomphe → Champs-Elysees → Avenue Montaigne → Place Vendôme → Seine." }, url: "https://www.google.com/maps/dir/Arc+de+Triomphe/Champs-Elysees/Avenue+Montaigne+Paris/Place+Vendome+Paris/Seine+River+Paris" },
    { status: "confirmed", label: { zh: "7/10 蒙馬特與 CDG", en: "10 Jul Montmartre and CDG move" }, note: { zh: "Sacré-Cœur → Place du Tertre → Pullman → Novotel Paris Charles-de-Gaulle Airport。", en: "Sacré-Cœur → Place du Tertre → Pullman → Novotel Paris Charles-de-Gaulle Airport." }, url: "https://www.google.com/maps/dir/Sacre-Coeur+Paris/Place+du+Tertre/Pullman+Paris+Tour+Eiffel/Novotel+Paris+Charles-de-Gaulle+Airport" },
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
    { item: { zh: "Eurostar 倫敦 → 巴黎", en: "Eurostar London → Paris" }, amount: { zh: "這段還沒買", en: "Not booked yet" }, amounts: { TWD: "這段還沒買", GBP: "Not booked yet", EUR: "Not booked yet", USD: "Not booked yet" }, status: "self", proof: { zh: "Eurostar 電子票與收據", en: "Eurostar e-ticket and receipt" }, notes: { zh: "7/7 從 St Pancras 出發，車程約 2 小時 20 分；提早 75–90 分鐘到站。", en: "Departs from St Pancras on 7 July, about 2h20 total; arrive 75-90 minutes early." } },
    { item: { zh: "巴黎 → 曼徹斯特航段", en: "Paris → Manchester flight" }, amount: { zh: "NT$12,930 / EUR 354.05", en: "NT$12,930 / EUR 354.05" }, amounts: { TWD: "NT$12,930", GBP: "約 GBP 300", EUR: "EUR 354.05", USD: "約 US$401" }, status: "self", proof: { zh: "Air France 電子票（敏感資訊不公開）與付款證明", en: "Air France e-ticket (sensitive details kept private) and payment proof" }, notes: { zh: "AF1068｜CDG T2E 12:50 → MAN T2 13:25；Business Standard、SkyPriority、2 件托運行李（每件 32kg）。", en: "AF1068 · CDG T2E 12:50 → MAN T2 13:25; Business Standard, SkyPriority, and 2 checked bags up to 32kg each." } },
    { item: { zh: "倫敦住宿", en: "London accommodation" }, amount: money.londonHotel, amounts: { TWD: "NT$41,649", GBP: "約 GBP 980", EUR: "約 EUR 1,147", USD: "約 US$1,300" }, status: "self", proof: { zh: "Riu Plaza London The Westminster 訂房確認與刷卡紀錄", en: "Riu Plaza London The Westminster confirmation and payment note" }, notes: { zh: `Riu Plaza London The Westminster｜7/4–7/7，共 3 晚；平均每晚約 ${money.londonHotelPerNight}。`, en: `Riu Plaza London The Westminster · 4-7 Jul · 3 nights; average per night about ${money.londonHotelPerNight}.` } },
    { item: { zh: "巴黎住宿", en: "Paris accommodation" }, amount: money.parisHotel, amounts: { TWD: "NT$70,243", GBP: "約 GBP 1,639", EUR: "EUR 1,915.58", USD: "約 US$2,170" }, status: "self", proof: { zh: "Pullman 訂房確認、Accor 訂單與付款紀錄", en: "Pullman booking confirmation, Accor order, and payment proof" }, notes: { zh: `Pullman Paris Tour Eiffel｜7/7–7/10，共 3 晚，鐵塔景陽台房；平均每晚約 ${money.parisHotelPerNight}。`, en: `Pullman Paris Tour Eiffel · 7-10 Jul · 3 nights · balcony room with Eiffel Tower view; average per night about ${money.parisHotelPerNight}.` } },
    { item: { zh: "CDG 機場住宿", en: "CDG airport hotel" }, amount: { zh: "NT$7,034（原幣未公開）", en: "NT$7,034 (original currency not shown publicly)" }, amounts: { TWD: "NT$7,034", GBP: "約 GBP 164", EUR: "約 EUR 192", USD: "約 US$217" }, status: "self", proof: { zh: "Novotel 訂房畫面與刷卡紀錄", en: "Novotel booking screen and payment note" }, notes: { zh: "巴黎戴高樂機場候機樓諾富特酒店｜7/10–7/11，共 1 晚；作為法航 7/11 航段前一晚的機場過夜。", en: "Novotel Paris Charles-de-Gaulle Airport · 10-11 Jul · 1 night; the airport overnight before the 11 July Air France departure." } },
    { item: { zh: "歐洲 eSIM / 網卡", en: "Europe eSIM / data" }, amount: { zh: "NT$1,219", en: "NT$1,219" }, amounts: { TWD: "NT$1,219", GBP: "約 GBP 29", EUR: "約 EUR 33", USD: "約 US$38" }, status: "self", proof: { zh: "訂單截圖（公開頁不放個資）", en: "Order screenshot (personal details kept private)" }, notes: { zh: "歐洲 39 國 15 天 eSIM。出發前先裝，落地再開；原本門號留著收簡訊與驗證碼。", en: "39-country Europe eSIM for 15 days. Install before departure, activate after landing, and keep your main number for SMS and verification codes." } },
    { item: { zh: "旅遊保險", en: "Travel insurance" }, amount: { zh: "NT$1,385", en: "NT$1,385" }, amounts: { TWD: "NT$1,385", GBP: "約 GBP 32", EUR: "約 EUR 41", USD: "約 US$43" }, status: "self", proof: { zh: "安達產險投保確認信與保費 PDF（公開頁不放保單號）", en: "Chubb confirmation email and premium PDF (policy number kept private)" }, notes: { zh: "安達產險旅綜保。保險期間從 2026/06/29 出發起到 2026/07/13；要找保單時，直接看確認信和保費 PDF。", en: "Chubb travel insurance, covering from departure on 29 Jun 2026 through 13 Jul 2026. When needed, go straight to the confirmation email and premium PDF." } },
    { item: { zh: "倫敦 / 巴黎景點與遊船", en: "London / Paris attractions and cruise" }, amount: { zh: "依實際選擇", en: "Depends on selected stops" }, amounts: { TWD: "依實際選擇", GBP: "Depends", EUR: "Depends", USD: "Depends" }, status: "self", proof: { zh: "線上購票收據", en: "Online ticket receipts" }, notes: { zh: "羅浮宮、凱旋門等需要時再訂，鐵塔夜景、Place Vendôme、香榭麗舍和多數街區可直接散步。", en: "Book the Louvre or Arc only if needed; the Eiffel night view, Place Vendôme, the Champs-Elysees, and most of the streets can stay open." } }
  ],
  links: [
    ["AIB 2026 website", "https://www.aib.world/events/2026-annual-meeting/"],
    ["AIB program overview", "https://www.aib.world/events/2026-annual-meeting/program/conference-overview/"],
    ["AIB schedule of sessions", "https://www.aib.world/events/2026-annual-meeting/program/schedule-of-sessions/"],
    ["AIB registration", "https://www.aib.world/events/2026-annual-meeting/attend/registration/"],
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
    ["EU ETIAS official site", "https://travel-europe.europa.eu/etias_en"],
    ["UK border control", "https://www.gov.uk/uk-border-control/at-border-control"],
    ["UK customs personal allowance", "https://www.gov.uk/duty-free-goods/arrivals-from-outside-the-eu"],
    ["France tax refund (détaxe)", "https://www.douane.gouv.fr/fiche/la-detaxe-en-france-pour-les-touristes-pablo"],
    ["Bringing food into Great Britain", "https://www.gov.uk/guidance/personal-food-plant-and-animal-product-imports"],
    ["INNSiDE Manchester", "https://www.melia.com/en/hotels/united-kingdom/manchester/innside-manchester"],
    ["Riu Plaza London The Westminster", "https://www.google.com/maps/search/?api=1&query=Riu+Plaza+London+The+Westminster"],
    ["Pullman Paris Tour Eiffel", "https://all.accor.com/hotel/7229/index.en.shtml"],
    ["Novotel Paris Charles-de-Gaulle Airport", "https://www.google.com/maps/search/?api=1&query=Novotel+Paris+Charles-de-Gaulle+Airport"],
    ["Bank of Taiwan FX rates", "https://rate.bot.com.tw/xrt?Lang=zh-TW"],
    ["115 年國外日支表", "https://dbas.tycg.gov.tw/News_Content.aspx?n=12154&s=1591826"]
  ]
};

const shoppingData = {
  highlights: [
    { label: { zh: "常見選擇", en: "Common picks" }, value: { zh: "茶葉、餅乾、果醬", en: "Tea, biscuits, preserves" } },
    { label: { zh: "門市", en: "Shops" }, value: { zh: "Fortnum、Twinings、M&S、Boots", en: "Fortnum, Twinings, M&S, Boots" } },
    { label: { zh: "較好打包", en: "Easy to pack" }, value: { zh: "茶包、shortbread、marmalade", en: "Tea bags, shortbread, marmalade" } }
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
          where: { zh: "Piccadilly 主店品項較多", en: "The Piccadilly flagship has the widest range" },
          source: "https://www.fortnumandmason.com/tea/black-tea"
        },
        {
          name: "Twinings",
          note: {
            zh: "English Breakfast、Earl Grey、Lady Grey 都常見，可依預算選茶包或茶罐。",
            en: "English Breakfast, Earl Grey, and Lady Grey are common. Choose tea bags or tins according to budget."
          },
          where: { zh: "可去 The Strand 門市", en: "Visit the Strand shop" },
          source: "https://twinings.co.uk/collections/black-tea"
        },
        {
          name: "Whittard of Chelsea",
          note: {
            zh: "有茶包、散茶和禮盒，也會推出季節口味。",
            en: "Tea bags, loose-leaf tea, gift boxes, and seasonal flavours are available."
          },
          where: { zh: "Covent Garden 或 Chelsea 一帶可逛", en: "Look around Covent Garden or Chelsea" },
          source: "https://www.whittard.co.uk/tea/"
        }
      ]
    },
    {
      title: { zh: "餅乾、shortbread、下午茶點心", en: "Biscuits, shortbread, and tea snacks" },
      lead: {
        zh: "盒裝和鐵盒較方便送人；注意體積和易碎程度。",
        en: "Boxes and tins are easy to gift; check the size and how easily they may break."
      },
      items: [
        {
          name: "Walkers Shortbread",
          note: {
            zh: "超市常見，鐵盒可送人，袋裝較省行李空間。",
            en: "Widely available in supermarkets. Tins work as gifts; bags take less luggage space."
          },
          where: { zh: "超市、百貨食品區都常見", en: "Easy to find in supermarkets and food halls" },
          source: "https://www.walkersshortbread.com/"
        },
        {
          name: "Fortnum biscuits",
          note: {
            zh: "可和茶葉一起買；先看盒子尺寸，避免佔掉太多行李空間。",
            en: "Buy them with tea, but check the box size before using too much luggage space."
          },
          where: { zh: "可和茶葉一起買", en: "Easy to pair with tea in one stop" },
          source: "https://www.fortnumandmason.com/biscuits"
        },
        {
          name: "Marks & Spencer biscuits",
          note: {
            zh: "餅乾、巧克力和小包裝禮盒都常見，市中心門市也多。",
            en: "Biscuits, chocolate, and small gift boxes are common, with many central branches."
          },
          where: { zh: "市中心門市很多", en: "Easy to find across city centres" },
          source: "https://www.marksandspencer.com/l/food-to-order/chocolate-biscuits-and-sweets"
        }
      ]
    },
    {
      title: { zh: "果醬、marmalade、英式 pantry", en: "Marmalade, jam, and pantry picks" },
      lead: {
        zh: "確定收禮的人會吃再買；玻璃瓶要包好並托運。",
        en: "Buy these for people who use spreads. Wrap glass jars well and check them in."
      },
      items: [
        {
          name: "Fortnum preserves",
          note: {
            zh: "橘子 marmalade、草莓 jam、lemon curd 都很常見，但玻璃瓶記得包好放托運。",
            en: "Orange marmalade, strawberry jam, and lemon curd are classic, but glass jars should be packed carefully in checked luggage."
          },
          where: { zh: "Fortnum 食品區品項較多", en: "Fortnum's food hall has a broad range" },
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
        zh: "自己用的零食、藥妝和臨時缺的旅行用品放這一區。",
        en: "This section is mostly for personal shopping or practical extras."
      },
      items: [
        {
          name: "M&S / Waitrose snacks",
          note: {
            zh: "M&S 可以一起看餅乾、巧克力、茶包禮盒；Waitrose 則適合找 pantry 類和茶點。",
            en: "M&S carries biscuits, chocolate, and boxed tea; Waitrose carries pantry items and tea snacks."
          },
          where: { zh: "倫敦市中心很容易遇到", en: "Easy to find around central London" },
          source: "https://www.marksandspencer.com/l/food-to-order/chocolate-biscuits-and-sweets"
        },
        {
          name: "Boots",
          note: {
            zh: "藥妝、護手霜、維他命和旅行用品可在 Boots 一次找。",
            en: "Use Boots for pharmacy items, hand cream, vitamins, and travel supplies."
          },
          where: { zh: "Oxford Street、車站附近常有大型門市", en: "Large branches are common near stations and main shopping streets" },
          source: "https://www.boots.com/"
        }
      ]
    }
  ],
  suggestions: [
    { title: { zh: "送老師或長輩", en: "For teachers or elders" }, text: { zh: "茶葉配餅乾或 marmalade，最常見。", en: "Tea with biscuits or marmalade is the most common combination." } },
    { title: { zh: "送朋友", en: "For friends" }, text: { zh: "M&S 小包裝或 Fortnum 盒裝茶點都方便分送。", en: "Small M&S packs or boxed Fortnum snacks are easy to share." } },
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
        zh: "英國先看茶葉、shortbread 和果醬。超市、百貨和機場都買得到。",
        en: "Start with tea, shortbread, and preserves. They are available in supermarkets, department stores, and airports."
      },
      picks: [
        {
          name: "Fortnum & Mason 茶葉",
          note: {
            zh: "送老師或長輩可看盒裝茶；自己喝則選茶包，比較省空間。",
            en: "Choose boxed tea for a formal gift or tea bags for personal use and easier packing."
          },
          goodFor: { zh: "送老師、長輩或正式一點的對象", en: "Good for teachers, elders, or formal gifts" },
          where: { zh: "Piccadilly 主店或機場門市", en: "Piccadilly flagship or airport branches" },
          source: "https://www.fortnumandmason.com/tea/black-tea"
        },
        {
          name: "Walkers Shortbread",
          note: {
            zh: "鐵盒適合送人，袋裝較不佔空間。也可以和茶葉一起買。",
            en: "Tins work as gifts; bags take less space. They can be paired with tea."
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
        zh: "巴黎先看茶、香水、香氛皂和護手霜。這些比馬卡龍好裝，也不怕長途飛行壓壞。",
        en: "Start with tea, perfume, soap, and hand cream. They pack better than fragile pastries."
      },
      picks: [
        {
          name: "Fragonard 香水或香氛皂",
          note: {
            zh: "小瓶香水和香氛皂不占太多空間。香水要依液體規定放行李。",
            en: "Small perfume bottles and soaps take little space. Pack perfume according to liquid rules."
          },
          goodFor: { zh: "平常會用香水或香氛皂的人", en: "For people who use perfume or scented soap" },
          where: { zh: "巴黎門市或百貨香氛區", en: "Paris boutiques or department-store beauty floors" },
          source: "https://www.fragonard.com/en-us/fragrances"
        },
        {
          name: "Palais des Thés 茶葉",
          note: {
            zh: "可看調香茶和茶罐。若英國已買很多茶，這項可以跳過。",
            en: "Look at flavoured tea and tins. Skip this if you have already bought enough tea in the UK."
          },
          goodFor: { zh: "平常有喝茶習慣的人", en: "For regular tea drinkers" },
          where: { zh: "巴黎門市或百貨茶區", en: "Paris boutiques and department-store tea sections" },
          source: "https://www.palaisdesthes.com/en/"
        },
        {
          name: "L'Occitane 護手霜與旅行組",
          note: {
            zh: "旅行組可自己用，小條護手霜可拆開分送。先看容量和托運規定。",
            en: "Use travel sets yourself or split small hand creams into gifts. Check sizes and baggage rules."
          },
          goodFor: { zh: "朋友、同事或自己用", en: "For friends, coworkers, or personal use" },
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
        zh: "德國這段停留短，超市或機場買軟糖、巧克力就可以。想買非食品，再看 Ampelmann 小物。",
        en: "The Germany stop is short, so use supermarkets or the airport for gummies and chocolate. Look at Ampelmann only if you want a non-food item."
      },
      picks: [
        {
          name: "HARIBO Goldbears",
          note: {
            zh: "超市、車站和機場都常見，小包裝方便分送。",
            en: "Common in supermarkets, stations, and airports; small packs are easy to share."
          },
          goodFor: { zh: "同事、朋友、多人分送", en: "Ideal for coworkers, friends, and group sharing" },
          where: { zh: "超市、車站、機場商店", en: "Supermarkets, stations, and airport shops" },
          source: "https://www.haribo.com/en-us/products/goldbears"
        },
        {
          name: "Ritter Sport 巧克力",
          note: {
            zh: "方形包裝好塞行李箱，可挑幾種口味。夏天要注意高溫。",
            en: "The square bars pack easily and come in many flavours. Protect them from summer heat."
          },
          goodFor: { zh: "喜歡巧克力或想分不同口味的人", en: "For chocolate lovers or mixed flavours" },
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
            zh: "不想再買零食，可以看杯子、帆布袋或文具。",
            en: "For a non-food gift, look at mugs, tote bags, or stationery."
          },
          goodFor: { zh: "朋友、文具控、喜歡城市紀念品的人", en: "Good for friends, stationery fans, and city-souvenir lovers" },
          where: { zh: "柏林門市、車站店、官方商店", en: "Berlin shops, station stores, and the official shop" },
          source: "https://www.ampelmannshop.com/"
        }
      ]
    }
  ],
  packing: [
    { zh: "茶葉、餅乾和巧克力可放行李箱空隙；餅乾外層要加硬盒。", en: "Tea, biscuits, and chocolate fit spare luggage gaps; protect biscuits with a rigid outer box." },
    { zh: "香水、護手霜、果醬這類液體或玻璃瓶，盡量放托運，外面再用衣服或氣泡袋包一下。", en: "Liquids and glass jars are better in checked luggage with a little padding." },
    { zh: "要在機場補買，就先預留托運重量和一個手提袋的空間。", en: "For airport shopping, leave checked-bag weight and room for one carry-on bag." }
  ]
};

const sectionNav = {
  home: [["overview", { zh: "總覽", en: "Overview" }], ["snapshot", { zh: "時間軸", en: "Timeline" }], ["highlights", { zh: "巴黎", en: "Paris" }], ["days", { zh: "每天", en: "Days" }], ["info", { zh: "資訊", en: "Info" }]],
  conference: [["accepted", { zh: "會議狀態", en: "Status" }], ["papers", { zh: "論文", en: "Papers" }], ["alerts", { zh: "提醒", en: "Notes" }], ["route", { zh: "路線", en: "Route" }], ["checklist", { zh: "文件", en: "Documents" }]],
  flights: [["overview", { zh: "航班總覽", en: "Overview" }], ["segments", { zh: "航段", en: "Segments" }], ["transfer", { zh: "轉機", en: "Transfers" }], ["notes", { zh: "票務備註", en: "Notes" }]],
  transport: [["flights", { zh: "航班", en: "Flights" }], ["transfer", { zh: "轉機", en: "Transfers" }], ["train", { zh: "火車", en: "Train" }], ["airport", { zh: "機場", en: "Airport" }], ["local", { zh: "市內交通", en: "Local transit" }]],
  stay: [["overview", { zh: "住宿總覽", en: "Overview" }], ["manchester", { zh: "曼徹斯特", en: "Manchester" }], ["london", { zh: "倫敦住宿", en: "London stay" }], ["paris", { zh: "巴黎住宿", en: "Paris stay" }], ["cdg", { zh: "機場過夜", en: "Airport stay" }], ["next", { zh: "下一步", en: "Next steps" }]],
  itinerary: [["timeline", { zh: "時間軸", en: "Timeline" }], ["paris-must-do", { zh: "巴黎地點", en: "Paris places" }], ["tickets", { zh: "景點費用", en: "Admission" }], ["return", { zh: "回程提醒", en: "Return" }]],
  shopping: [["shopping-overview", { zh: "總覽", en: "Overview" }], ["tea", { zh: "茶與點心", en: "Tea" }], ["pantry", { zh: "果醬與 pantry", en: "Pantry" }], ["essentials", { zh: "超市與藥妝", en: "Essentials" }]],
  souvenirs: [["souvenir-overview", { zh: "總覽", en: "Overview" }], ["uk", { zh: "英國", en: "UK" }], ["france", { zh: "法國", en: "France" }], ["germany", { zh: "德國", en: "Germany" }], ["packing", { zh: "打包提醒", en: "Packing" }]],
  map: [["travel-map", { zh: "地圖", en: "Map" }], ["route-links", { zh: "每日路線", en: "Routes" }], ["map-notes", { zh: "地圖備註", en: "Notes" }]],
  budget: [["expenses", { zh: "費用總覽", en: "Budget" }], ["totals", { zh: "小計", en: "Totals" }], ["proofs", { zh: "憑證", en: "Proofs" }]],
  reminders: [["pending", { zh: "旅程提醒", en: "Travel notes" }], ["quick-check", { zh: "出發前確認", en: "Final check" }]],
  firstTime: [["entry", { zh: "入境", en: "Entry" }], ["city", { zh: "城市移動", en: "City basics" }], ["daily", { zh: "日常提醒", en: "Daily notes" }], ["arrival", { zh: "抵達第一天", en: "First day" }]],
  documents: [["checklist", { zh: "文件清單", en: "Documents" }], ["links", { zh: "官方連結", en: "Links" }]]
};

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
    room: "2.217 (UP)",
    paperId: "ID# 1477",
    paperTitle: "Legitimacy-First Innovation: How Emerging Technology Firms Construct Mainstream Pathways Under Institutional Ambiguity",
    coauthor: { zh: "Meng Hsien Yen", en: "Meng Hsien Yen" }
  }
};

const dashboardData = {
  conferenceCards: [
    { status: "confirmed", title: { zh: "會議期間", en: "Conference period" }, value: "2026/06/30 - 2026/07/03", note: { zh: "Manchester", en: "Manchester" } },
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
    { date: "6/29", title: { zh: "抵達曼徹斯特", en: "Arrive in Manchester" }, note: { zh: "辦入住後確認兩個會場的步行路線。", en: "Check in, then confirm the walking routes to both venues." } },
    { date: "6/30", title: { zh: "開幕日", en: "Opening day" }, note: { zh: "會前活動、開幕與 reception。", en: "Pre-conference events, opening, and reception." } },
    { date: "7/1 - 7/3", title: { zh: "主會議", en: "Main conference" }, note: { zh: "照議程跑場次；每天回飯店前收好名片和收據。", en: "Follow the session schedule and put away cards and receipts before returning to the hotel each day." } },
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
    { status: "confirmed", title: { zh: "接受函", en: "Acceptance letters" }, note: { zh: "兩份接受函都存在會議資料夾。", en: "Both acceptance letters are saved in the conference folder." } },
    { status: "confirmed", title: { zh: "邀請函", en: "Invitation letter" }, note: { zh: "邀請函和入境文件放在一起。", en: "Keep the invitation letter with the entry documents." } },
    { status: "confirmed", title: { zh: "註冊收據", en: "Registration receipt" }, note: { zh: "AIB conference fee 已付款。", en: "AIB conference fee receipt is on file." } },
    { status: "confirmed", title: { zh: "機票收據", en: "Flight receipt" }, note: { zh: "機票行程單與付款明細已整理。", en: "Flight itinerary and payment proof are saved." } },
    { status: "confirmed", title: { zh: "住宿確認", en: "Hotel confirmation" }, note: { zh: "INNSiDE 訂房確認已存成離線檔。", en: "The INNSiDE confirmation is saved offline." } },
    { status: "confirmed", title: { zh: "ETA 與護照資料", en: "ETA / passport-related documents" }, note: { zh: "ETA 核准紀錄和護照影本放在同一個離線資料夾。", en: "Keep the ETA approval and passport copy in the same offline folder." } },
    { status: "reimburse", title: { zh: "報帳文件", en: "Reimbursement documents" }, note: { zh: "接受函、收據、行程單和付款明細分開存。", en: "File the acceptance letters, receipts, itinerary, and payment details separately." } },
    { status: "confirmed", title: { zh: "旅遊保險", en: "Travel insurance" }, note: { zh: "安達產險旅綜保已投保。保單確認信與保費 PDF 都已留存。", en: "Travel insurance with Chubb is confirmed. The confirmation email and premium PDF are both saved." } }
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
  { id: "conference-focus", number: "02", title: { zh: "AIB 會議", en: "AIB conference" }, target: "info" },
  { id: "city-route", number: "03", title: { zh: "城市路線", en: "City route" }, target: "overview" },
  { id: "highlights", number: "04", title: { zh: "巴黎", en: "Paris" }, target: "overview" },
  { id: "days", number: "05", title: { zh: "每日行程", en: "Day-by-day guide" }, target: "itinerary" },
  { id: "practical", number: "06", title: { zh: "住宿與交通", en: "Stay and transport" }, target: "hotels" }
];

const homeJourneyTimeline = [
  {
    date: "06/30",
    title: { zh: "Frankfurt", en: "Frankfurt" },
    note: { zh: "清晨抵達後進老城。動物園看時間與體力，最晚約 13:30 回到 T1。", en: "Go into the old town after landing. Add the zoo only if time allows and return to Terminal 1 around 13:30." }
  },
  {
    date: "06/30–07/03",
    title: { zh: "Manchester", en: "Manchester" },
    note: { zh: "AIB 2026 與兩場發表都在這幾天。發表前後不排遠的景點。", en: "AIB 2026 and both presentations fall on these days. Do not plan distant sightseeing around the sessions." }
  },
  {
    date: "07/04–07/06",
    title: { zh: "London", en: "London" },
    note: { zh: "第一晚走西敏；後兩天排白金漢宮、Covent Garden、Harrods、Bond Street 和 Soho。", en: "Walk Westminster on the first evening, then cover Buckingham Palace, Covent Garden, Harrods, Bond Street, and Soho over the next two days." }
  },
  {
    date: "07/07–07/10",
    title: { zh: "Paris", en: "Paris" },
    note: { zh: "住 Pullman。鐵塔、羅浮宮、右岸和蒙馬特分天安排，7/10 晚上移到 CDG。", en: "Stay at Pullman. Split the Eiffel Tower, Louvre, Right Bank, and Montmartre across separate days, then move to CDG on 10 July." }
  },
  {
    date: "07/11–07/12",
    title: { zh: "Return", en: "Return" },
    note: { zh: "CDG 飛曼徹斯特，轉希斯洛後搭華航回台北。", en: "Fly from CDG to Manchester, connect at Heathrow, then take China Airlines to Taipei." }
  }
];

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
  const label = session.label[lang] || session.label.en || session.label.zh || "";
  const dateLabel = session.dateLabel[lang] || session.dateLabel.en || session.dateLabel.zh || "";
  if (lang === "zh") {
    return `${label} 是 ${dateLabel} ${session.time}，${session.session}，地點在 ${session.room}。`;
  }
  return `${label} is on ${dateLabel}, ${session.time}, in ${session.session} at Room ${session.room}.`;
}

const parisMustDoItems = [
  {
    area: { zh: "7/7 夜晚", en: "7 Jul evening" },
    title: { zh: "艾菲爾鐵塔夜景", en: "Eiffel Tower at night" },
    tags: [{ zh: "夜景", en: "Night view" }, { zh: "拍照", en: "Photos" }],
    body: {
      zh: "辦好入住再去河邊或 Trocadéro 看亮燈。累了就回 Pullman，陽台還能看到鐵塔。",
      en: "Check in first, then watch the lights from the river or Trocadéro. Return to Pullman when tired; the balcony still faces the tower."
    }
  },
  {
    area: { zh: "7/8 上午", en: "8 Jul morning" },
    title: { zh: "羅浮宮", en: "The Louvre" },
    tags: [{ zh: "藝術", en: "Art" }, { zh: "館藏", en: "Collection" }],
    body: {
      zh: "早上進羅浮宮，先選好最想看的館藏。館很大，不用試著一次看完。",
      en: "Visit the Louvre in the morning and choose the collections in advance. The museum is too large to cover in one visit."
    }
  },
  {
    area: { zh: "7/8 下午", en: "8 Jul afternoon" },
    title: { zh: "老佛爺百貨頂樓", en: "Galeries Lafayette rooftop" },
    tags: [{ zh: "視角", en: "View" }, { zh: "拍照", en: "Photos" }],
    body: {
      zh: "逛完歌劇院周邊再上頂樓。這裡免費，停半小時看屋頂和市景即可。",
      en: "Go up after walking around the Opéra area. Entry is free, and half an hour is enough for the rooftops and city view."
    }
  },
  {
    area: { zh: "7/9 上午", en: "9 Jul morning" },
    title: { zh: "Avenue Montaigne 精品街", en: "Avenue Montaigne" },
    tags: [{ zh: "精品", en: "Luxury" }, { zh: "街景", en: "Street" }],
    body: {
      zh: "精品集中，想看的店先列好。沒有要進店就沿街走，不必花一整天。",
      en: "The boutiques are concentrated here. List the stores you want; if you are only looking, the avenue does not need a full day."
    }
  },
  {
    area: { zh: "7/9 白天", en: "9 Jul daytime" },
    title: { zh: "香榭麗舍大道", en: "Champs-Elysees" },
    tags: [{ zh: "大道", en: "Boulevard" }, { zh: "散步", en: "Walk" }],
    body: {
      zh: "從凱旋門往下走一段即可，不用走完整條。中途找地方吃午餐。",
      en: "Walk down from the Arc for part of the avenue; there is no need to cover the whole street. Stop for lunch on the way."
    }
  },
  {
    area: { zh: "7/9 下午", en: "9 Jul afternoon" },
    title: { zh: "凱旋門", en: "Arc de Triomphe" },
    tags: [{ zh: "地標", en: "Landmark" }, { zh: "登頂", en: "Rooftop" }],
    body: {
      zh: "和香榭麗舍排同一天。要登頂就先買票，單看外觀則不用留太久。",
      en: "Put it on the same day as the Champs-Elysees. Book ahead if going to the top; the exterior alone does not need much time."
    }
  },
  {
    area: { zh: "7/8 或 7/9", en: "8 or 9 Jul" },
    title: { zh: "Place Vendôme", en: "Place Vendôme" },
    tags: [{ zh: "珠寶", en: "Jewelry" }, { zh: "街角", en: "Corner" }],
    body: {
      zh: "從羅浮宮往歌劇院走時繞進去。拍照、看珠寶店櫥窗，停留不用超過半小時。",
      en: "Detour here while walking from the Louvre toward the Opéra. Allow no more than half an hour for photos and jewellery windows."
    }
  },
  {
    area: { zh: "7/9 夜晚", en: "9 Jul evening" },
    title: { zh: "塞納河夜景", en: "Seine at night" },
    tags: [{ zh: "夜景", en: "Night view" }, { zh: "散步", en: "Walk" }],
    body: {
      zh: "晚餐後到河邊走一段。若白天已經很累，就直接回 Pullman。",
      en: "Walk by the river after dinner. If the day has already been tiring, return directly to Pullman."
    }
  },
  {
    area: { zh: "7/10 上午", en: "10 Jul morning" },
    title: { zh: "聖心堂", en: "Sacré-Cœur" },
    tags: [{ zh: "高處", en: "Hilltop" }, { zh: "晨間", en: "Morning" }],
    body: {
      zh: "早上先到聖心堂，再走 Place du Tertre 和 La Maison Rose。中午前離開，下午還要拿行李。",
      en: "Start at Sacré-Cœur, then walk to Place du Tertre and La Maison Rose. Leave before noon because the luggage still needs collecting."
    }
  },
  {
    area: { zh: "7/7–7/10 夜晚", en: "7-10 Jul nights" },
    title: { zh: "Pullman 陽台看鐵塔", en: "The Pullman balcony tower view" },
    tags: [{ zh: "住宿", en: "Stay" }, { zh: "夜晚", en: "Night" }],
    body: {
      zh: "訂的是高樓層鐵塔景陽台房。晚上不想再出門，就買點吃的回房間看亮燈。",
      en: "The booking is for a high-floor balcony room with a tower view. On quiet evenings, bring food back and watch the lights from the room."
    }
  }
];

const dailyGuides = [
  {
    id: "day-1",
    day: "Day 1",
    date: "6/29-6/30",
    city: { zh: "Taipei → Frankfurt → Manchester", en: "Taipei → Frankfurt → Manchester" },
    theme: { zh: "長程飛行與法蘭克福轉機", en: "Long-haul flights and a Frankfurt layover" },
    intro: { zh: "清晨抵達法蘭克福，下午 16:20 再飛曼徹斯特。中間先走老城和美因河；動物園當天看時間，不去也沒關係。", en: "Land in Frankfurt early and fly to Manchester at 16:20. Use the layover for the old town and river; decide on the zoo that morning." },
    highlights: ["CI 0061", "S8 / S9", "Römerberg", "Frankfurt Zoo", "LH 0946", "INNSiDE Manchester"],
    route: [
      { label: { zh: "上午｜抵達與轉航廈", en: "Morning" }, text: { zh: "抵達後先確認 LH 0946 的航廈與登機證，再從 T3 到 T1，搭 S8 / S9 到 Hauptwache。", en: "Confirm the LH 0946 terminal and boarding pass, move from T3 to T1, then take S8 or S9 to Hauptwache." } },
      { label: { zh: "中午｜老城與美因河", en: "Noon" }, text: { zh: "走羅馬廣場、正義女神、舊市政廳、老聖尼古拉堂、鐵橋和大教堂。午餐預計去 MainNizza。", en: "Walk Römerberg, the Justice Fountain, the old town hall, St Nicholas Church, the Iron Bridge, and the cathedral. Lunch is planned at MainNizza." } },
      { label: { zh: "下午｜回 T1", en: "Afternoon" }, text: { zh: "若有去動物園，最晚約 13:30 回到 T1。之後過安檢、吃東西，等 16:20 的 Lufthansa。", en: "If visiting the zoo, return to T1 around 13:30. Clear security, get food, and wait for the 16:20 Lufthansa flight." } },
      { label: { zh: "夜晚｜今晚落腳", en: "Evening" }, text: { zh: "到曼徹斯特後先入住、吃點東西，第一晚不要再加行程。", en: "Arrive in Manchester, check in, eat something simple, and keep the evening light." } }
    ],
    notes: ["基本版只走老城和美因河；時間夠再加動物園。", "從動物園回機場可搭 U7 到 Konstablerwache，再轉 S8 / S9。", "登機證與離線票券放在手機同一個資料夾。T3 到 T1 的時間不要壓太緊。"],
    tickets: ["法蘭克福老城散步免費；動物園學生票 6 歐、Frankfurt Card 折後約 10 歐；午餐依現場消費。"]
  },
  {
    id: "day-2",
    day: "Day 2",
    date: "7/1",
    city: { zh: "Manchester", en: "Manchester" },
    theme: { zh: "Competitive 發表日", en: "Competitive presentation day" },
    intro: { zh: "15:15–16:30 在 AMBS Room 3.006B 發表。上午留在 Oxford Road 一帶，中午後把簡報和講稿再確認一次。", en: "The Competitive presentation runs from 15:15 to 16:30 in AMBS Room 3.006B. Stay near Oxford Road and check the slides and script again after lunch." },
    highlights: ["Session 3.4.11", "15:15–16:30", "Room 3.006B (AMBS)", "Competitive presentation"],
    route: [
      { label: { zh: "上午｜報到與場次", en: "Morning" }, text: { zh: "先到會場確認識別證、AMBS 位置和上午想聽的場次。今天不要離開 Oxford Road 太遠。", en: "Check the badge, the location of AMBS, and the morning sessions. Stay close to Oxford Road today." } },
      { label: { zh: "中午｜吃飯與最後確認", en: "Noon" }, text: { zh: "在會場附近吃飯，之後找安靜的地方開一次簡報、講稿和共同作者資料。", en: "Eat near the venue, then find a quiet place to open the slides, script, and coauthor details once more." } },
      { label: { zh: "下午｜Competitive 發表", en: "Afternoon" }, text: { zh: "15:15–16:30，Session 3.4.11，Room 3.006B (AMBS)。提早到教室測設備。", en: "15:15–16:30, Session 3.4.11, Room 3.006B (AMBS). Arrive early to test the room setup." } },
      { label: { zh: "夜晚｜把問題記下來", en: "Evening" }, text: { zh: "晚餐後回飯店，記下現場問題、聯絡人和需要補寄的資料。", en: "After dinner, return to the hotel and note the questions, contacts, and any files that need sending." } }
    ],
    notes: [conferenceSessionSentence("competitive", "zh"), "簡報、講稿和共同作者資料各存一份離線檔。"],
    tickets: ["今天不排市區景點。"]
  },
  {
    id: "day-3",
    day: "Day 3",
    date: "7/2",
    city: { zh: "Manchester", en: "Manchester" },
    theme: { zh: "AIB 場次與 Interactive 準備", en: "AIB sessions and Interactive preparation" },
    intro: { zh: "白天照議程聽場次。明早 09:30 有 Interactive 發表，下午把一頁 Executive Summary、8 分鐘口頭內容和交通時間確認好。", en: "Attend sessions during the day. The Interactive presentation is tomorrow at 09:30, so use the afternoon to check the one-page Executive Summary, the eight-minute talk, and the route to University Place." },
    highlights: ["AIB sessions", "Executive Summary", "8-minute talk", "University Place route"],
    route: [
      { label: { zh: "上午｜會議場次", en: "Morning" }, text: { zh: "照議程挑想聽的場次，空檔處理昨天發表後需要回覆的訊息。", en: "Choose the sessions that matter and use the gaps to answer follow-ups from yesterday's presentation." } },
      { label: { zh: "中午｜午餐與休息", en: "Noon" }, text: { zh: "在會場附近吃飯。下午要準備明天的 handout，不另外跑市區。", en: "Eat near the venue. The afternoon is for tomorrow's handout, so skip a city detour." } },
      { label: { zh: "下午｜Interactive 準備", en: "Afternoon" }, text: { zh: "印好一頁 Executive Summary，練一次 8 分鐘口頭內容。這場不用 PowerPoint。", en: "Print the one-page Executive Summary and rehearse the eight-minute talk once. This session does not use PowerPoint." } },
      { label: { zh: "夜晚｜早點休息", en: "Evening" }, text: { zh: "確認 University Place Room 2.217 的路線、鬧鐘和明早出門時間。", en: "Check the route to University Place Room 2.217, set the alarm, and decide when to leave in the morning." } }
    ],
    notes: ["明天 09:30–10:45 是 Interactive 場次，Room 2.217 (UP)。", "Executive Summary 紙本、備份檔和會場路線今晚確認完。"],
    tickets: ["今天不排門票景點。"]
  },
  {
    id: "day-4",
    day: "Day 4",
    date: "7/3",
    city: { zh: "Manchester", en: "Manchester" },
    theme: { zh: "Interactive 發表與會議最後一天", en: "Interactive presentation and final conference day" },
    intro: { zh: "Interactive 場次 09:30 開始，早一點從飯店出門。發表結束後再聽場次、聊合作，晚上整理隔天去倫敦的行李。", en: "The Interactive session starts at 09:30, so leave the hotel early. After presenting, attend sessions, speak with colleagues, and pack for London in the evening." },
    highlights: ["Interactive session", "09:30-10:45", "Room 2.217 (UP)", "conference close"],
    route: [
      { label: { zh: "上午｜Interactive 發表", en: "Morning" }, text: { zh: "09:30–10:45 在 Room 2.217 (UP)。帶一頁 Executive Summary；這場不用 PowerPoint。", en: "Present from 09:30-10:45 in Room 2.217 (UP). Bring the one-page Executive Summary; this session does not use PowerPoint." } },
      { label: { zh: "中午｜午餐", en: "Noon" }, text: { zh: "發表結束先吃飯。順便把現場收到的問題記下來。", en: "Have lunch after the presentation and write down the questions received in the room." } },
      { label: { zh: "下午｜最後幾場", en: "Afternoon" }, text: { zh: "下午挑最後想聽的場次，也把想聯絡的人找完。", en: "Attend the remaining priority sessions and speak with anyone still on the contact list." } },
      { label: { zh: "夜晚｜收行李", en: "Evening" }, text: { zh: "晚上把文件、票券和明天去倫敦的東西整理好。", en: "Get documents, tickets, and the London transfer ready before bed." } }
    ],
    notes: [conferenceSessionSentence("interactive", "zh"), "晚上整理會議文件與隔天的倫敦車票。"],
    tickets: ["會議日不另外安排門票行程。"]
  },
  {
    id: "day-5",
    day: "Day 5",
    date: "7/4",
    city: { zh: "Manchester → London", en: "Manchester → London" },
    theme: { zh: "搭火車到倫敦，晚上走西敏", en: "Train to London and an evening in Westminster" },
    intro: { zh: "從 Manchester Piccadilly 搭火車到 Euston，再到 Riu Plaza London The Westminster 辦入住。傍晚看 Big Ben、西敏寺外觀、國會大廈和 London Eye 河岸。", en: "Take the train from Manchester Piccadilly to Euston, then check into Riu Plaza London The Westminster. Spend the evening around Big Ben, Westminster Abbey, Parliament, and the London Eye riverside." },
    highlights: ["Avanti West Coast", "London Euston", "Big Ben", "Westminster Abbey", "London Eye"],
    route: [
      { label: { zh: "上午｜退房與進車站", en: "Morning" }, text: { zh: "從 INNSiDE 退房後到 Manchester Piccadilly。車票時間確定後，再反推離開飯店的時間。", en: "Check out of INNSiDE and go to Manchester Piccadilly. Once the train is booked, work backward to set the hotel departure time." } },
      { label: { zh: "中午｜Avanti 到 Euston", en: "Noon" }, text: { zh: "直達車約 2 小時 10 分。行李放好後，車上直接休息。", en: "The direct train takes about 2h10. Stow the bags and use the ride to rest." } },
      { label: { zh: "下午｜先入住，再走 Westminster", en: "Afternoon" }, text: { zh: "抵達後先把行李放進 Riu，再走 Big Ben、西敏寺外觀、國會大廈和西敏橋。", en: "Drop the bags at Riu first, then keep to Westminster: Big Ben, the Abbey exterior, Parliament, and Westminster Bridge." } },
      { label: { zh: "夜晚｜Covent Garden 或 Soho", en: "Evening" }, text: { zh: "到 Covent Garden 或 Soho 吃晚餐，之後回 Westminster。", en: "Have dinner in Covent Garden or Soho, then return to Westminster." } }
    ],
    notes: ["今天只有火車、入住和西敏散步。", "曼徹斯特住宿訂到 7/5，和倫敦 7/4 入住重疊一晚，出發前確認是否調整。"],
    tickets: ["Avanti 票價會依班次而變，建議先看 Advance。"]
  },
  {
    id: "day-6",
    day: "Day 6",
    date: "7/5",
    city: { zh: "London", en: "London" },
    theme: { zh: "白金漢宮、公園、Covent Garden 和 Harrods", en: "Buckingham Palace, the parks, Covent Garden, and Harrods" },
    intro: { zh: "上午看白金漢宮和衛兵交接時間，之後穿過 St. James's Park。中午後去 Covent Garden，傍晚到 Harrods。", en: "Check the guard-change timing at Buckingham Palace, then walk through St. James's Park. Go to Covent Garden after lunch and Harrods in the late afternoon." },
    highlights: ["Buckingham Palace", "St. James's Park", "Covent Garden", "Harrods"],
    route: [
      { label: { zh: "上午｜先看白金漢宮", en: "Morning" }, text: { zh: "白金漢宮先看外觀，時間對得上再看衛兵交接。", en: "Start with Buckingham Palace from the outside, and only stay for the guard change if the timing really fits." } },
      { label: { zh: "中午｜公園與 Covent Garden", en: "Noon" }, text: { zh: "穿過 St. James's Park 後，到 Covent Garden 吃午餐或喝茶。Green Park 視腳程再加。", en: "Walk through St. James's Park, then have lunch or tea at Covent Garden. Add Green Park only if the walking load is reasonable." } },
      { label: { zh: "下午｜Leicester、Piccadilly、Regent", en: "Afternoon" }, text: { zh: "從 Covent Garden 走到 Leicester Square、Piccadilly Circus，再看要不要逛 Regent Street。", en: "Walk from Covent Garden to Leicester Square and Piccadilly Circus, then decide whether to add Regent Street." } },
      { label: { zh: "夜晚｜Harrods 與晚餐", en: "Evening" }, text: { zh: "傍晚再去 Harrods。晚餐就近找 Knightsbridge 或 South Kensington。", en: "Keep Harrods for the late afternoon and stay nearby for dinner in Knightsbridge or South Kensington." } }
    ],
    notes: ["衛兵交接日期與時間出發前查官網。", "Harrods 排傍晚；下午不要再加離市中心太遠的地方。"],
    tickets: ["街區和百貨本身免費，花費取決於實際購物。"]
  },
  {
    id: "day-7",
    day: "Day 7",
    date: "7/6",
    city: { zh: "London", en: "London" },
    theme: { zh: "Bond Street、Mayfair 與 Soho", en: "Bond Street, Mayfair, and Soho" },
    intro: { zh: "上午逛 New Bond Street 和 Old Bond Street。下午在 Mayfair、Mount Street、Selfridges 裡選，不需要全部走完；晚上到 Soho 或 Chinatown 吃飯。", en: "Shop New Bond Street and Old Bond Street in the morning. In the afternoon, choose between Mayfair, Mount Street, and Selfridges instead of covering everything; eat in Soho or Chinatown." },
    highlights: ["New Bond Street", "Selfridges", "Mayfair", "Soho / Chinatown"],
    route: [
      { label: { zh: "上午｜Bond Street", en: "Morning" }, text: { zh: "上午先走 New Bond Street 和 Old Bond Street，精品比較集中。", en: "Begin with New Bond Street and Old Bond Street, where the luxury stretch is most concentrated." } },
      { label: { zh: "中午｜Selfridges / Oxford", en: "Noon" }, text: { zh: "中午前後如果想逛百貨，就接到 Selfridges、Oxford Street。", en: "Around midday, move toward Selfridges and Oxford Street if you want a department-store run." } },
      { label: { zh: "下午｜Mayfair / Regent", en: "Afternoon" }, text: { zh: "Mayfair、Mount Street、Regent Street 這段就看想逛多深，不用每一條都走完。", en: "Use the afternoon for Mayfair, Mount Street, and Regent Street without feeling the need to finish every block." } },
      { label: { zh: "夜晚｜Soho / Chinatown", en: "Evening" }, text: { zh: "晚上就往 Soho 或 Chinatown 收，想看劇的話也可以把 West End 放進來。", en: "End in Soho or Chinatown, and keep West End in mind only if a show still fits the energy of the day." } }
    ],
    notes: ["精品店若要預約，先把時間排在上午。", "隔天搭 Eurostar，今晚不要太晚回飯店。"],
    tickets: ["以步行和市區交通為主。"]
  },
  {
    id: "day-8",
    day: "Day 8",
    date: "7/7",
    city: { zh: "London → Paris", en: "London → Paris" },
    theme: { zh: "Eurostar、Pullman 與鐵塔夜景", en: "Eurostar, Pullman, and the Eiffel Tower at night" },
    intro: { zh: "退房後到 St Pancras 搭 Eurostar。抵達 Gare du Nord 後先去 Pullman 放行李，晚上走鐵塔、Trocadéro 和飯店陽台。", en: "Check out and take Eurostar from St Pancras. From Gare du Nord, go to Pullman first, then spend the evening at the tower, Trocadéro, and the hotel balcony." },
    highlights: ["St Pancras", "Eurostar", "Pullman Paris Tour Eiffel", "Eiffel Tower night view", "Balcony tower view"],
    route: [
      { label: { zh: "上午｜退房與前往 St Pancras", en: "Morning" }, text: { zh: "早上吃完早餐就退房。帶大件行李可直接叫車到 St Pancras。", en: "Check out after breakfast. With large luggage, take a taxi directly to St Pancras." } },
      { label: { zh: "中午｜Eurostar", en: "Noon" }, text: { zh: "Eurostar 這段不要抓太緊。提早 75–90 分鐘到 St Pancras，先過安檢和護照檢查，再等上車。", en: "Do not cut Eurostar too close. Reach St Pancras 75-90 minutes early, clear security and passport control, then wait for boarding." } },
      { label: { zh: "下午｜巴黎北站到 Pullman", en: "Afternoon" }, text: { zh: "帶大件行李建議從巴黎北站直接叫車去 Pullman；搭大眾運輸則先查轉乘與電梯。", en: "With large luggage, take a direct car from Gare du Nord to Pullman. For public transport, check transfers and lift access first." } },
      { label: { zh: "夜晚｜鐵塔與 Trocadéro", en: "Evening" }, text: { zh: "看完鐵塔和 Trocadéro 就回飯店。房間陽台也能看亮燈。", en: "See the tower and Trocadéro, then return to the hotel. The balcony also has a view of the lights." } }
    ],
    notes: ["第一晚只排鐵塔與 Trocadéro。", "回飯店後可從陽台看鐵塔亮燈。"],
    tickets: ["Eurostar 這段還沒買；St Pancras 建議提早 75–90 分鐘到站。"]
  },
  {
    id: "day-9",
    day: "Day 9",
    date: "7/8",
    city: { zh: "Paris", en: "Paris" },
    theme: { zh: "羅浮宮、塞納河與右岸延伸", en: "The Louvre, the Seine, and a longer Right Bank line" },
    intro: { zh: "上午進羅浮宮。從杜樂麗花園往協和廣場走，下午到 Place Vendôme、歌劇院和老佛爺頂樓；晚上視體力去塞納河。", en: "Visit the Louvre in the morning. Walk through Tuileries toward Place de la Concorde, then continue to Place Vendôme, the Opéra, and the Galeries Lafayette rooftop. Add the Seine in the evening if energy allows." },
    highlights: ["Louvre Museum", "Tuileries Garden", "Place Vendôme", "Seine / Left Bank"],
    route: [
      { label: { zh: "上午｜羅浮宮", en: "Morning" }, text: { zh: "依預約時段入館，只看事先列好的館藏。", en: "Enter at the booked time and focus on the selected collections." } },
      { label: { zh: "中午｜杜樂麗到協和", en: "Noon" }, text: { zh: "從杜樂麗花園走到協和廣場，午餐安排在沿線。", en: "Walk through Tuileries to Place de la Concorde and have lunch along the route." } },
      { label: { zh: "下午｜Place Vendôme 與歌劇院區", en: "Afternoon" }, text: { zh: "從協和廣場前往 Place Vendôme，再到老佛爺頂樓與歌劇院周邊。", en: "Continue from Place de la Concorde to Place Vendôme, the Galeries Lafayette rooftop, and the Opéra district." } },
      { label: { zh: "夜晚｜塞納河與左岸", en: "Evening" }, text: { zh: "傍晚走塞納河或 Saint-Germain，之後回 Pullman。", en: "Walk by the Seine or around Saint-Germain, then return to Pullman." } }
    ],
    notes: ["羅浮宮先訂時段，入館前把想看的館藏列好。", "如果博物館待太久，Saint-Germain 或塞納河可取消。"],
    tickets: ["Louvre 門票請依官網時段確認；老佛爺頂樓免費。"]
  },
  {
    id: "day-10",
    day: "Day 10",
    date: "7/9",
    city: { zh: "Paris", en: "Paris" },
    theme: { zh: "Avenue Montaigne、香榭麗舍與凱旋門", en: "Avenue Montaigne, the Champs-Elysees, and the Arc" },
    intro: { zh: "上午從凱旋門開始，再走香榭麗舍與 Avenue Montaigne。精品店依事先列好的名單逛；傍晚去 Place Vendôme，晚餐後再決定要不要走塞納河。", en: "Start at the Arc, then walk the Champs-Elysees and Avenue Montaigne. Visit only the boutiques already on the list, continue to Place Vendôme, and decide after dinner whether to walk by the Seine." },
    highlights: ["Avenue Montaigne", "Champs-Elysees", "Arc de Triomphe", "Seine night view"],
    route: [
      { label: { zh: "上午｜凱旋門", en: "Morning" }, text: { zh: "上午先到凱旋門。想上去看市景的話，這段就多留一點時間。", en: "Start at the Arc. If you plan to go up, give this first stop a little extra time." } },
      { label: { zh: "中午｜香榭麗舍", en: "Noon" }, text: { zh: "從凱旋門往下走，不用走完整條。午餐就在沿線找。", en: "Walk down from the Arc without covering the entire avenue. Have lunch somewhere along the route." } },
      { label: { zh: "下午｜Avenue Montaigne / Place Vendôme", en: "Afternoon" }, text: { zh: "下午逛 Avenue Montaigne，再搭車或步行到 Place Vendôme。", en: "Shop Avenue Montaigne, then take transport or walk to Place Vendôme." } },
      { label: { zh: "夜晚｜塞納河", en: "Evening" }, text: { zh: "晚上去塞納河邊走一下，之後再回 Pullman。", en: "Use the evening for the Seine, then head back to Pullman." } }
    ],
    notes: ["精品店不用每間都進，先看預約與想買的品牌。", "晚餐後若累了就回 Pullman，不必再跑鐵塔。"],
    tickets: ["大道與街區散步免費；若進凱旋門需另查票。"]
  },
  {
    id: "day-11",
    day: "Day 11",
    date: "7/10",
    city: { zh: "Paris", en: "Paris" },
    theme: { zh: "蒙馬特、拿行李、前往 CDG", en: "Montmartre, luggage pickup, and CDG" },
    intro: { zh: "早上去聖心堂和蒙馬特。中午後只選一間百貨補買，接著回 Pullman 拿寄放行李，晚上入住 Novotel CDG。", en: "Visit Sacré-Cœur and Montmartre in the morning. Choose one department store after lunch, collect the luggage at Pullman, and check into Novotel CDG in the evening." },
    highlights: ["Sacré-Cœur", "Montmartre", "最後採買", "Novotel CDG"],
    route: [
      { label: { zh: "上午｜聖心堂和蒙馬特", en: "Morning" }, text: { zh: "先到聖心堂，再走 Place du Tertre 和 La Maison Rose。中午前離開。", en: "Start at Sacré-Cœur, then walk to Place du Tertre and La Maison Rose. Leave before noon." } },
      { label: { zh: "中午｜最後採買", en: "Noon" }, text: { zh: "中午回市區補最後的伴手禮，可以從老佛爺、Printemps 或 Le Bon Marché 裡選一個。", en: "Use midday for the last shopping and pick only one department-store stop instead of trying to cover them all." } },
      { label: { zh: "下午｜回 Pullman 拿行李", en: "Afternoon" }, text: { zh: "回 Pullman 拿寄放行李，順便整理退稅單、收據與隔天票券。", en: "Collect the stored luggage at Pullman and sort tax forms, receipts, and next-day tickets." } },
      { label: { zh: "夜晚｜前往 CDG", en: "Evening" }, text: { zh: "帶大件行李建議從 Pullman 直接叫車到 Novotel CDG；搭大眾運輸則轉 RER 到 Roissypole。", en: "With large luggage, take a direct car from Pullman to Novotel CDG. For public transport, transfer to the RER for Roissypole." } }
    ],
    notes: ["下午不要再加景點，還要回飯店拿行李。", "前往 CDG 前，把法航、英航和華航票券存成離線檔案。"],
    tickets: ["聖心堂與蒙馬特散步免費；採買與交通依實際安排。"]
  },
  {
    id: "day-12",
    day: "Day 12",
    date: "7/11-7/12",
    city: { zh: "Paris → Manchester → Heathrow → Taipei", en: "Paris → Manchester → Heathrow → Taipei" },
    theme: { zh: "CDG 出發，轉兩次回台北", en: "CDG departure and two connections to Taipei" },
    intro: { zh: "上午進 CDG 2E 辦退稅與托運。接著搭 AF 1068 到曼徹斯特、BA 1371 到希斯洛，再轉 CI 0082 回台北。", en: "Go to CDG Terminal 2E for tax refund and bag drop, then take AF 1068 to Manchester, BA 1371 to Heathrow, and CI 0082 to Taipei." },
    highlights: ["AF 1068", "CDG T2E", "BA 1371", "CI 0082"],
    route: [
      { label: { zh: "上午｜CDG Terminal 2E", en: "Morning" }, text: { zh: "要退稅就約 09:00 進 2E；不退稅也不要晚於 09:30。先退稅，再托運。", en: "Enter Terminal 2E around 09:00 for tax refund, or by 09:30 without it. Validate the refund before bag drop." } },
      { label: { zh: "中午｜AF 1068", en: "Noon" }, text: { zh: "12:50 從 CDG 起飛，13:25 抵達 MAN T2。", en: "Depart CDG at 12:50 and arrive at MAN Terminal 2 at 13:25." } },
      { label: { zh: "下午｜BA 1371", en: "Afternoon" }, text: { zh: "18:10 從曼徹斯特飛希斯洛，19:15 抵達後跟著 Flight Connections。", en: "Fly from Manchester at 18:10. After landing at Heathrow at 19:15, follow Flight Connections." } },
      { label: { zh: "夜晚｜CI 0082", en: "Evening" }, text: { zh: "21:10 從希斯洛起飛，隔天 18:05 抵達台北。", en: "Depart Heathrow at 21:10 and arrive in Taipei at 18:05 the next day." } }
    ],
    notes: ["7/11 上午不要再排巴黎景點。", "不要跳過 MAN-LHR 航段，希斯洛轉機要跟著 Flight Connections 走。"],
    tickets: ["AF 歐洲段：約 EUR 354.05 / NT$12,930。"]
  }
];

const dayCardFrames = {
  "day-1": {
    location: { zh: "台北｜法蘭克福｜曼徹斯特", en: "Taipei | Frankfurt | Manchester" },
    tags: [{ zh: "長途飛行", en: "Long-haul" }, { zh: "轉機", en: "Layover" }, { zh: "老城", en: "Old town" }, { zh: "動物園可選", en: "Zoo optional" }],
    kicker: { zh: "長程飛行，中途進法蘭克福市區", en: "Long-haul flights with a short Frankfurt stop" },
    title: { zh: "先走法蘭克福老城，再飛曼徹斯特", en: "Frankfurt old town before the flight to Manchester" },
    note: { zh: "清晨抵達後先確認下一段航班。市區只排老城、美因河和午餐；時間不夠就不去動物園。", en: "Confirm the onward flight after landing. Keep the city stop to the old town, the river, and lunch; skip the zoo if time is short." },
    image: frankfurtOldTownImage,
    imageAlt: { zh: "法蘭克福老城與 Römerberg 景色", en: "Frankfurt old town and Römerberg" },
    imageCaption: { zh: "羅馬廣場、美因河和 MainNizza 都在短停路線上。最晚約 13:30 回到 T1。", en: "Römerberg, the Main, and MainNizza fit the short stop. Be back at Terminal 1 around 13:30." }
  },
  "day-2": {
    location: { zh: "曼徹斯特｜AIB 2026", en: "Manchester | AIB 2026" },
    tags: [{ zh: "發表", en: "Presentation" }, { zh: "15:15", en: "15:15" }, { zh: "AMBS", en: "AMBS" }],
    kicker: { zh: "Session 3.4.11｜15:15–16:30", en: "Session 3.4.11 | 15:15–16:30" },
    title: { zh: "Competitive 發表日", en: "Competitive presentation day" },
    note: { zh: "地點是 AMBS Room 3.006B。上午不要走遠，中午再開一次簡報和講稿，提早到教室測設備。", en: "The session is in AMBS Room 3.006B. Stay nearby, check the slides and script at lunch, and arrive early to test the room setup." }
  },
  "day-3": {
    location: { zh: "曼徹斯特｜AIB 會議", en: "Manchester | AIB conference" },
    tags: [{ zh: "會議", en: "Conference" }, { zh: "Handout", en: "Handout" }, { zh: "口頭練習", en: "Rehearsal" }],
    kicker: { zh: "聽場次，也準備明早的 Interactive", en: "Sessions and preparation for tomorrow's Interactive" },
    title: { zh: "把 Executive Summary 和 8 分鐘內容準備好", en: "Prepare the Executive Summary and eight-minute talk" },
    note: { zh: "白天照議程聽場次。下午印一頁 handout、練一次口頭內容，晚上確認 University Place 的路線。", en: "Attend sessions during the day. Print the one-page handout, rehearse once, and check the route to University Place in the evening." }
  },
  "day-4": {
    location: { zh: "曼徹斯特｜Interactive 發表", en: "Manchester | Interactive session" },
    tags: [{ zh: "發表", en: "Presentation" }, { zh: "09:30", en: "09:30" }, { zh: "無投影片", en: "No slides" }],
    kicker: { zh: "Session 5.1.20｜09:30–10:45", en: "Session 5.1.20 | 09:30–10:45" },
    title: { zh: "Interactive 發表與會議最後一天", en: "Interactive presentation and final conference day" },
    note: { zh: "地點是 University Place Room 2.217。帶一頁 Executive Summary，不用 PowerPoint；晚上整理倫敦火車票和行李。", en: "The session is in University Place Room 2.217. Bring the one-page Executive Summary; no PowerPoint is used. Pack for London in the evening." }
  },
  "day-5": {
    location: { zh: "曼徹斯特｜倫敦", en: "Manchester | London" },
    tags: [{ zh: "火車", en: "Rail" }, { zh: "轉場", en: "Transfer" }, { zh: "地標", en: "Landmarks" }],
    kicker: { zh: "Manchester Piccadilly → London Euston", en: "Manchester Piccadilly → London Euston" },
    title: { zh: "搭火車到倫敦，傍晚走西敏", en: "Train to London, then Westminster in the evening" },
    note: { zh: "抵達 Euston 後先到 Riu 放行李。傍晚只走 Big Ben、西敏橋和 London Eye 河岸。", en: "After reaching Euston, drop the bags at Riu. Keep the evening to Big Ben, Westminster Bridge, and the London Eye riverside." },
    image: londonWestminsterImage,
    imageAlt: { zh: "倫敦西敏一帶的大笨鐘與河岸景色", en: "Big Ben and the Westminster riverside in London" },
    imageCaption: { zh: "第一晚不跨區。西敏幾個地標走完，晚餐再去 Covent Garden 或 Soho。", en: "Stay in one area on the first night. After Westminster, have dinner in Covent Garden or Soho." }
  },
  "day-6": {
    location: { zh: "倫敦｜白金漢宮｜Covent Garden", en: "London | Buckingham Palace | Covent Garden" },
    tags: [{ zh: "皇室地標", en: "Royal landmark" }, { zh: "公園", en: "Park" }, { zh: "Harrods", en: "Harrods" }],
    kicker: { zh: "白金漢宮、公園與 Covent Garden", en: "Buckingham Palace, the parks, and Covent Garden" },
    title: { zh: "先看白金漢宮，傍晚再去 Harrods", en: "Buckingham Palace first, Harrods later" },
    note: { zh: "衛兵交接時間對得上再看。之後穿過 St. James's Park，到 Covent Garden 吃飯或喝茶，傍晚去 Harrods。", en: "Watch the guard change only if the timing fits. Walk through St. James's Park, stop at Covent Garden, and visit Harrods later." }
  },
  "day-7": {
    location: { zh: "倫敦｜Bond Street｜Mayfair｜Soho", en: "London | Bond Street | Mayfair | Soho" },
    tags: [{ zh: "精品", en: "Luxury" }, { zh: "百貨", en: "Department store" }, { zh: "晚餐", en: "Dinner" }],
    kicker: { zh: "Bond Street、Mayfair 與 Soho", en: "Bond Street, Mayfair, and Soho" },
    title: { zh: "精品店排上午，晚上到 Soho 吃飯", en: "Boutiques in the morning, dinner in Soho" },
    note: { zh: "New Bond Street、Old Bond Street 和 Selfridges 擇要逛。下午看體力加 Mayfair 或 Regent Street，晚上不要太晚回飯店。", en: "Choose between New Bond Street, Old Bond Street, and Selfridges. Add Mayfair or Regent Street if there is time, and return early before the Eurostar day." }
  },
  "day-8": {
    location: { zh: "倫敦｜巴黎", en: "London | Paris" },
    tags: [{ zh: "Eurostar", en: "Eurostar" }, { zh: "Pullman", en: "Pullman" }, { zh: "鐵塔夜景", en: "Tower night" }],
    kicker: { zh: "St Pancras → Gare du Nord → Pullman", en: "St Pancras → Gare du Nord → Pullman" },
    title: { zh: "搭 Eurostar 到巴黎，晚上看鐵塔", en: "Eurostar to Paris and the Eiffel Tower at night" },
    note: { zh: "提早 75–90 分鐘到 St Pancras。抵達巴黎後先去 Pullman 放行李，晚上看鐵塔和 Trocadéro。", en: "Reach St Pancras 75–90 minutes early. Drop the bags at Pullman after arriving in Paris, then see the tower and Trocadéro." },
    image: pullmanImage,
    imageAlt: { zh: "Pullman Paris Tour Eiffel 的陽台鐵塔景", en: "Balcony Eiffel Tower view at Pullman Paris Tour Eiffel" },
    imageCaption: { zh: "訂的是高樓層鐵塔景陽台房。看完夜景就回飯店，不必另外排晚場。", en: "The booking is for a high-floor balcony room with a tower view. Return after the night view instead of adding another late stop." }
  },
  "day-9": {
    location: { zh: "巴黎｜羅浮宮｜右岸", en: "Paris | Louvre | Right Bank" },
    tags: [{ zh: "藝術", en: "Art" }, { zh: "右岸", en: "Right Bank" }, { zh: "屋頂視角", en: "Rooftop view" }],
    kicker: { zh: "羅浮宮、Place Vendôme 與歌劇院區", en: "The Louvre, Place Vendôme, and the Opéra district" },
    title: { zh: "羅浮宮、Place Vendôme 和老佛爺放同一天", en: "The Louvre, Place Vendôme, and Galeries Lafayette" },
    note: { zh: "羅浮宮只看事先選好的館藏。下午走 Place Vendôme、老佛爺頂樓和歌劇院周邊；累了就取消塞納河。", en: "See the selected Louvre collections, then visit Place Vendôme, the Galeries Lafayette rooftop, and the Opéra district. Skip the Seine if the museum runs long." },
    image: parisLouvreImage,
    imageAlt: { zh: "羅浮宮外觀與巴黎右岸街景", en: "The Louvre exterior and the Paris Right Bank" },
    imageCaption: { zh: "羅浮宮排上午。博物館若待得久，下午只保留 Place Vendôme 和老佛爺。", en: "Book the Louvre for the morning. If the museum takes longer, keep only Place Vendôme and Galeries Lafayette afterward." }
  },
  "day-10": {
    location: { zh: "巴黎｜精品大道｜塞納河", en: "Paris | Luxury avenues | Seine" },
    tags: [{ zh: "精品", en: "Luxury" }, { zh: "夜景", en: "Night view" }, { zh: "地標", en: "Landmark" }],
    kicker: { zh: "凱旋門、香榭麗舍與 Avenue Montaigne", en: "The Arc, the Champs-Elysees, and Avenue Montaigne" },
    title: { zh: "Avenue Montaigne、香榭麗舍與凱旋門", en: "Avenue Montaigne, the Champs-Elysees, and the Arc" },
    note: { zh: "上午先看凱旋門，再走香榭麗舍和 Avenue Montaigne。精品店照名單逛，晚上有體力才去塞納河。", en: "Start at the Arc, then walk the Champs-Elysees and Avenue Montaigne. Use a shopping list, and add the Seine only if there is energy left." },
    image: parisArcImage,
    imageAlt: { zh: "凱旋門與香榭麗舍大道", en: "Arc de Triomphe and the Champs-Elysees" },
    imageCaption: { zh: "Avenue Montaigne、香榭麗舍和凱旋門都在右岸。是否登凱旋門，當天再看體力。", en: "Avenue Montaigne, the Champs-Elysees, and the Arc are all on the Right Bank. Decide on the Arc rooftop that day." }
  },
  "day-11": {
    location: { zh: "巴黎｜蒙馬特｜CDG", en: "Paris | Montmartre | CDG" },
    tags: [{ zh: "晨景", en: "Morning view" }, { zh: "最後採買", en: "Last shopping" }, { zh: "機場轉場", en: "Airport move" }],
    kicker: { zh: "上午蒙馬特，晚上住 CDG", en: "Montmartre in the morning, CDG at night" },
    title: { zh: "蒙馬特、最後採買與轉往機場", en: "Montmartre, final shopping, and the move toward the airport" },
    note: { zh: "早上走聖心堂、Place du Tertre 和 La Maison Rose。下午回市區採買、去 Pullman 拿行李，晚上入住 Novotel CDG。", en: "Visit Sacré-Cœur, Place du Tertre, and La Maison Rose in the morning. Shop in the afternoon, collect the bags at Pullman, and check into Novotel CDG at night." },
    image: parisMontmartreImage,
    imageAlt: { zh: "巴黎聖心堂與蒙馬特高地", en: "Sacré-Cœur and Montmartre in Paris" },
    imageCaption: { zh: "中午前離開蒙馬特。退稅單、戰利品和托運行李要在去機場前整理完。", en: "Leave Montmartre before noon. Sort the tax-refund forms, purchases, and checked baggage before heading to the airport." }
  },
  "day-12": {
    location: { zh: "巴黎｜曼徹斯特｜希斯洛｜台北", en: "Paris | Manchester | Heathrow | Taipei" },
    tags: [{ zh: "返程", en: "Return" }, { zh: "銜接", en: "Connections" }, { zh: "長途飛行", en: "Long-haul" }],
    kicker: { zh: "CDG → MAN → LHR → TPE", en: "CDG → MAN → LHR → TPE" },
    title: { zh: "退稅、三段航班與回台北", en: "Tax refund, three flights, and the return to Taipei" },
    note: { zh: "約 09:00 進 CDG 2E，先辦退稅再托運。AF 1068、BA 1371 和 CI 0082 都不要跳段。", en: "Enter CDG Terminal 2E around 09:00 and validate the tax refund before bag drop. Do not skip AF 1068, BA 1371, or CI 0082." }
  }
};

const localize = (zh, en = zh) => ({ zh, en });
const budgetLine = (labelZh, labelEn, valueZh, valueEn = valueZh) => ({
  label: localize(labelZh, labelEn),
  value: localize(valueZh, valueEn)
});

const itineraryQuickJump = [
  { id: "all", label: localize("全部", "All"), target: "day-1" },
  { id: "flights", label: localize("Flights", "Flights"), target: "day-1" },
  { id: "aib", label: localize("AIB", "AIB"), target: "day-2" },
  { id: "manchester", label: localize("Manchester", "Manchester"), target: "day-2" },
  { id: "london", label: localize("London", "London"), target: "day-5" },
  { id: "paris", label: localize("Paris", "Paris"), target: "day-8" },
  { id: "airport", label: localize("Airport", "Airport"), target: "day-11" }
];

const itineraryDayCards = [
  {
    id: "day-1",
    dateDisplay: localize("06 / 29 Mon – 06 / 30 Tue", "29 Jun Mon – 30 Jun Tue"),
    countryLine: localize("台灣・德國・英國", "Taiwan · Germany · United Kingdom"),
    themeLabel: localize("Flight Day", "Flight Day"),
    stay: localize("INNSiDE Manchester", "INNSiDE Manchester"),
    primaryTransport: localize("CI 0061 · LH 0946 · FRA rail", "CI 0061 · LH 0946 · FRA rail"),
    progressCity: localize("法蘭克福轉機段", "Frankfurt layover"),
    nextMove: localize("下一段會進 AIB 會議日", "Next up: AIB conference days"),
    categories: ["all", "flights", "airport"],
    essentials: [
      localize("護照"),
      localize("CI / LH 電子票"),
      localize("法蘭克福市區交通付款方式", "Frankfurt rail payment"),
      localize("行動電源"),
      localize("轉接頭"),
      localize("少量歐元現金", "Small amount of EUR cash")
    ],
    safety: [
      localize("法蘭克福只排老城、河邊和午餐，時間不夠就刪動物園。", "Keep Frankfurt to the old town, river, and lunch; skip the zoo if time is short."),
      localize("T3 轉 T1 與回機場都留一點餘裕。", "Leave extra time for the T3 → T1 transfer and the airport return.")
    ],
    budget: [
      budgetLine("早餐", "Breakfast", "機上 / 機場簡單處理", "On board / airport"),
      budgetLine("交通", "Transport", "FRA 機場鐵路與市區短程", "FRA rail + short city transit"),
      budgetLine("午餐", "Lunch", "MainNizza 或河邊附近彈性安排", "Flexible around MainNizza or the river"),
      budgetLine("門票", "Tickets", "動物園可選；不去也沒差", "Zoo optional"),
      budgetLine("晚餐", "Dinner", "飯店附近用餐", "Dinner near the hotel"),
      budgetLine("購物", "Shopping", "不安排", "None planned"),
      budgetLine("總額", "Total estimate", "機場交通、午餐與晚餐", "Airport transit, lunch, and dinner")
    ],
    timeline: [
      {
        time: localize("22:20 → 06:50+1", "22:20 → 06:50+1"),
        type: "flight",
        title: localize("CI 0061 台北飛法蘭克福", "CI 0061 from Taipei to Frankfurt"),
        location: localize("TPE 桃園機場 → FRA", "TPE Taipei Taoyuan Airport → FRA"),
        details: {
          address: localize("桃園國際機場第二航廈", "Taoyuan International Airport Terminal 2"),
          mapQuery: "Taoyuan International Airport Terminal 2",
          duration: localize("長程夜航。護照與下一段登機證放手邊。", "Long-haul overnight flight. Keep the passport and onward boarding pass nearby."),
          note: localize("抵達後先確認 Lufthansa 航段和 FRA 的航廈動線。", "Once in Frankfurt, confirm the Lufthansa segment and the terminal transfer."),
          documents: localize("護照、華航電子票、德國短停路線", "Passport, China Airlines e-ticket, Frankfurt layover notes")
        }
      },
      {
        time: localize("上午", "Morning"),
        type: "activity",
        title: localize("法蘭克福老城與美因河短停", "Frankfurt old town and Main river stop"),
        location: localize("Hauptwache / Römerberg / MainNizza", "Hauptwache / Römerberg / MainNizza"),
        details: {
          address: localize("Römerberg, 60311 Frankfurt am Main", "Römerberg, 60311 Frankfurt am Main"),
          mapQuery: "Römerberg Frankfurt am Main",
          duration: localize("市區最多停留 3–4 小時；短版只走老城和河邊。", "Allow no more than three to four hours in the city; the short version covers the old town and river."),
          note: localize("動物園只有時間充足才去，13:30 前要回到 T1。", "Visit the zoo only if time allows and return to Terminal 1 before 13:30."),
          documents: localize("Frankfurt Card / 動物園票券如果有買再拿出來", "Use Frankfurt Card / zoo ticket only if you actually decide to go")
        }
      },
      {
        time: localize("16:20 → 17:10", "16:20 → 17:10"),
        type: "flight",
        title: localize("LH 0946 前往曼徹斯特", "LH 0946 onward to Manchester"),
        location: localize("FRA Terminal 1 → MAN", "FRA Terminal 1 → MAN"),
        details: {
          address: localize("Frankfurt Airport Terminal 1", "Frankfurt Airport Terminal 1"),
          mapQuery: "Frankfurt Airport Terminal 1",
          duration: localize("航程約 50 分鐘。", "Flight time about 50 minutes."),
          note: localize("13:30 前回到 T1，重新過安檢並確認登機門。", "Return to Terminal 1 before 13:30, clear security, and confirm the gate."),
          documents: localize("Lufthansa 登機證", "Lufthansa boarding pass")
        }
      },
      {
        time: localize("夜晚", "Evening"),
        type: "hotel",
        title: localize("入住 INNSiDE Manchester", "Check into INNSiDE Manchester"),
        location: localize("1 First Street, Manchester", "1 First Street, Manchester"),
        details: {
          address: localize("1 First Street, Manchester M15 4RP, United Kingdom", "1 First Street, Manchester M15 4RP, United Kingdom"),
          mapQuery: "INNSiDE Manchester 1 First Street Manchester",
          duration: localize("辦入住、吃晚餐、休息。", "Check in, have dinner, and rest."),
          note: localize("第一晚不要再額外加景點。", "Do not add extra sightseeing to the first night."),
          documents: localize("住宿確認信", "Hotel booking confirmation")
        }
      }
    ]
  },
  {
    id: "day-2",
    dateDisplay: localize("07 / 01 Wed", "1 Jul Wed"),
    countryLine: localize("曼徹斯特・英國", "Manchester · United Kingdom"),
    themeLabel: localize("Competitive Session Day", "Competitive Session Day"),
    stay: localize("INNSiDE Manchester", "INNSiDE Manchester"),
    primaryTransport: localize("步行 / 會場動線", "Walking / venue flow"),
    progressCity: localize("曼徹斯特", "Manchester"),
    nextMove: localize("下一段是 7/2 會議日", "Next up: the 2 Jul conference day"),
    categories: ["all", "aib", "manchester"],
    conferenceSpotlight: {
      eyebrow: localize("Competitive Presentation", "Competitive Presentation"),
      title: localize("Session 3.4.11｜15:15–16:30", "Session 3.4.11 | 15:15–16:30"),
      chips: [localize("7/1"), localize("15:15–16:30"), localize("3.006B (AMBS)"), localize("Session 3.4.11")],
      facts: [
        budgetLine("論文", "Paper", conferenceSessions.competitive.paperTitle, conferenceSessions.competitive.paperTitle),
        budgetLine("共同作者", "Coauthor", "Chao Ya Wan", "Chao Ya Wan")
      ],
      note: localize("地點是 Room 3.006B (AMBS)。簡報、講稿和備份檔要有離線版本。", "The room is 3.006B (AMBS). Keep offline copies of the slides, script, and backup file.")
    },
    essentials: [
      localize("發表檔案與備份 PDF", "Slides and backup PDF"),
      localize("講稿 / 口條重點", "Speaking notes"),
      localize("筆電"),
      localize("名牌與名片", "Badge and business cards"),
      localize("水壺", "Water bottle"),
      localize("行動電源")
    ],
    safety: [
      localize("發表前留在 AMBS 附近，避免交通耽誤。", "Stay near AMBS before the presentation to avoid transport delays."),
      localize("簡報、講稿和備份檔再多存一份雲端。", "Keep one more cloud backup of slides and notes.")
    ],
    budget: [
      budgetLine("早餐", "Breakfast", "飯店內或附近簡單吃", "Simple hotel breakfast"),
      budgetLine("交通", "Transport", "步行 / 市內短程", "Walking / short local transit"),
      budgetLine("午餐", "Lunch", "會場附近，別吃太久", "Near the venue"),
      budgetLine("門票", "Tickets", "今天沒有景點票", "No attraction tickets"),
      budgetLine("晚餐", "Dinner", "發表後簡單吃", "Simple dinner after the session"),
      budgetLine("購物", "Shopping", "今天不安排", "Not for today"),
      budgetLine("總額", "Total estimate", "主要是餐費和市區交通", "Mainly food and local transport")
    ],
    timeline: [
      {
        time: localize("上午", "Morning"),
        type: "conference",
        title: localize("上午場次與簡報確認", "Morning sessions and presentation check"),
        location: localize("AMBS / 會議教室", "AMBS / conference rooms"),
        details: {
          address: localize("Alliance Manchester Business School, Booth Street West, Manchester", "Alliance Manchester Business School, Booth Street West, Manchester"),
          mapQuery: "Alliance Manchester Business School Manchester",
          duration: localize("上午主會議時段。", "Main morning conference block."),
          note: localize("確認下午使用的檔案版本、講稿順序和共同作者資料。", "Confirm the file version, speaking order, and coauthor details for the afternoon."),
          documents: localize("最終簡報、口頭重點、備用檔案", "Final slides, speaking notes, backup files")
        }
      },
      {
        time: localize("中午", "Noon"),
        type: "meal",
        title: localize("午餐與發表前確認", "Lunch and final check"),
        location: localize("會場附近", "Near the venue"),
        details: {
          duration: localize("午餐後回 AMBS，預留設備測試時間。", "Return to AMBS after lunch and allow time to test the equipment."),
          note: localize("吃完就回到會場附近，不必再多移動。", "Stay close to the venue after lunch.")
        }
      },
      {
        time: localize("15:15–16:30", "15:15–16:30"),
        type: "conference",
        title: localize("Competitive 場次發表", "Competitive presentation slot"),
        location: localize("Room 3.006B (AMBS)", "Room 3.006B (AMBS)"),
        details: {
          address: localize("Alliance Manchester Business School, Booth Street West, Manchester", "Alliance Manchester Business School, Booth Street West, Manchester"),
          mapQuery: "Alliance Manchester Business School Manchester",
          duration: localize("含同場發表與討論。", "Includes the full session and discussion."),
          note: localize("提早到 Room 3.006B，現場設備不要等到場次開始才測。", "Arrive early at Room 3.006B and test the equipment before the session starts."),
          documents: localize("最終簡報、口頭重點、備用檔案", "Final slides, speaking notes, backup files")
        }
      },
      {
        time: localize("夜晚", "Evening"),
        type: "reminder",
        title: localize("晚餐後回飯店", "Return to the hotel after dinner"),
        location: localize("INNSiDE Manchester", "INNSiDE Manchester"),
        details: {
          address: localize("1 First Street, Manchester M15 4RP, United Kingdom", "1 First Street, Manchester M15 4RP, United Kingdom"),
          mapQuery: "INNSiDE Manchester 1 First Street Manchester",
          duration: localize("發表後簡單吃飯就回去。", "Head back after a simple dinner."),
          note: localize("把現場問題、聯絡人和待補寄資料記下來。", "Note the questions, contacts, and any files that need sending.")
        }
      }
    ]
  },
  {
    id: "day-3",
    dateDisplay: localize("07 / 02 Thu", "2 Jul Thu"),
    countryLine: localize("曼徹斯特・英國", "Manchester · United Kingdom"),
    themeLabel: localize("AIB Conference Day", "AIB Conference Day"),
    stay: localize("INNSiDE Manchester", "INNSiDE Manchester"),
    primaryTransport: localize("步行 / 會場動線", "Walking / venue flow"),
    progressCity: localize("曼徹斯特", "Manchester"),
    nextMove: localize("下一段是 7/3 Interactive", "Next up: 3 Jul Interactive"),
    categories: ["all", "aib", "manchester"],
    conferenceSpotlight: {
      eyebrow: localize("AIB 2026 Manchester", "AIB 2026 Manchester"),
      title: localize("今天只排會議，不另外跑景點。", "Conference only today; skip sightseeing."),
      chips: [localize("AIB"), localize("Sessions"), localize("Networking"), localize("收據整理", "Receipts")],
      facts: [
        budgetLine("重點", "Focus", "挑重要場次，空檔吃飯或回訊息。", "Prioritize key sessions and use gaps for food or follow-ups."),
        budgetLine("晚上", "Evening", "回飯店整理筆記，也準備隔天 Interactive。", "Review notes at the hotel and prepare for tomorrow's Interactive session.")
      ],
      note: localize("今天沒有自己的發表。晚上要印好 7/3 的一頁摘要，並練一次 8 分鐘內容。", "There is no presentation today. Print tomorrow's one-page summary and rehearse the eight-minute talk tonight.")
    },
    essentials: [
      localize("會議 badge"),
      localize("筆電 / 平板", "Laptop / tablet"),
      localize("筆記本與筆", "Notebook and pen"),
      localize("Interactive 一頁摘要", "Interactive one-page summary"),
      localize("行動電源"),
      localize("水壺", "Water bottle")
    ],
    safety: [
      localize("場次空檔留在 Oxford Road 一帶，不另外進市中心。", "Stay around Oxford Road between sessions instead of going into the city centre."),
      localize("睡前再確認 7/3 的一頁摘要、八分鐘說明和備份。", "Before bed, recheck tomorrow's one-page summary, eight-minute explanation, and backups.")
    ],
    budget: [
      budgetLine("早餐", "Breakfast", "飯店或會場附近簡單吃", "Hotel or nearby"),
      budgetLine("交通", "Transport", "以步行為主", "Mostly walking"),
      budgetLine("午餐", "Lunch", "會場附近用餐", "Lunch near the venue"),
      budgetLine("門票", "Tickets", "今天沒有景點票", "No attraction tickets"),
      budgetLine("晚餐", "Dinner", "曼城市中心簡單吃", "Simple dinner in the city centre"),
      budgetLine("購物", "Shopping", "不安排", "None planned"),
      budgetLine("總額", "Total estimate", "會議日中低消費", "Low-to-moderate conference day")
    ],
    timeline: [
      {
        time: localize("上午", "Morning"),
        type: "conference",
        title: localize("上午場次", "Morning sessions"),
        location: localize("AIB 2026 會場", "AIB 2026 venue"),
        details: {
          address: localize("Alliance Manchester Business School, Booth Street West, Manchester", "Alliance Manchester Business School, Booth Street West, Manchester"),
          mapQuery: "Alliance Manchester Business School Manchester",
          duration: localize("上午主會議時段。", "Main morning conference block."),
          note: localize("先看議程中已標記的場次，換教室時間也要算進去。", "Use the marked sessions in the programme and include time to change rooms.")
        }
      },
      {
        time: localize("中午", "Noon"),
        type: "meal",
        title: localize("Oxford Road 午餐", "Lunch around Oxford Road"),
        location: localize("AMBS / Oxford Road 一帶", "AMBS / Oxford Road area"),
        details: {
          mapQuery: "Oxford Road Manchester lunch",
          duration: localize("在下午場次前回到會場。", "Return before the afternoon sessions."),
          note: localize("不另外排市區景點。", "No city sightseeing is planned.")
        }
      },
      {
        time: localize("下午", "Afternoon"),
        type: "conference",
        title: localize("下午場次與約談", "Afternoon sessions and meetings"),
        location: localize("AIB 2026 會場", "AIB 2026 venue"),
        details: {
          mapQuery: "University Place Manchester",
          duration: localize("下午主會議時段。", "Main afternoon conference block."),
          note: localize("先去已標記的場次，其他空檔再約人聊。", "Attend the marked sessions first and use the other gaps for meetings."),
          documents: localize("會議 agenda、當天筆記", "Conference agenda and notes")
        }
      },
      {
        time: localize("夜晚", "Evening"),
        type: "reminder",
        title: localize("準備明天的 Interactive", "Prepare for tomorrow's Interactive session"),
        location: localize("INNSiDE Manchester", "INNSiDE Manchester"),
        details: {
          address: localize("1 First Street, Manchester M15 4RP, United Kingdom", "1 First Street, Manchester M15 4RP, United Kingdom"),
          mapQuery: "INNSiDE Manchester 1 First Street Manchester",
          note: localize("印好一頁摘要，練一次 8 分鐘內容，確認明早走到 University Place 的時間。", "Print the one-page summary, rehearse the eight-minute talk, and check tomorrow's walk to University Place.")
        }
      }
    ]
  },
  {
    id: "day-4",
    dateDisplay: localize("07 / 03 Fri", "3 Jul Fri"),
    countryLine: localize("曼徹斯特・英國", "Manchester · United Kingdom"),
    themeLabel: localize("Interactive Presentation Day", "Interactive Presentation Day"),
    stay: localize("INNSiDE Manchester", "INNSiDE Manchester"),
    primaryTransport: localize("步行到 University Place", "Walk to University Place"),
    progressCity: localize("曼徹斯特", "Manchester"),
    nextMove: localize("下一段移動去倫敦", "Next move: rail to London"),
    categories: ["all", "aib", "manchester"],
    conferenceSpotlight: {
      eyebrow: localize("AIB 2026 Manchester", "AIB 2026 Manchester"),
      title: localize("Session 5.1.20｜09:30–10:45", "Session 5.1.20 | 09:30–10:45"),
      chips: [localize("Interactive"), localize("09:30–10:45"), localize("Room 2.217 (UP)"), localize("No PowerPoint")],
      facts: [
        budgetLine("Venue", "Venue", "Room 2.217, University Place", "Room 2.217, University Place"),
        budgetLine("Limit", "Limit", "口頭 8 分鐘", "8-minute presentation"),
        budgetLine("Discussion", "Discussion", "討論約 7 分鐘", "About 7 minutes discussion"),
        budgetLine("Bring", "Bring", "一頁 Executive Summary / handout", "One-page Executive Summary / handout"),
        budgetLine("Dress", "Dress code", "business casual / academic professional", "business casual / academic professional")
      ],
      note: localize("這場不放 PowerPoint。把 handout、多印幾份備用，並比 7/1 再早一點出門。", "There is no PowerPoint for this session. Bring extra handouts and leave earlier than you did on 1 July.")
    },
    essentials: [
      localize("Executive Summary / handout"),
      localize("名牌", "Badge"),
      localize("business casual 穿著", "Business casual outfit"),
      localize("筆記本"),
      localize("水壺", "Water bottle"),
      localize("明天倫敦移動票券", "Tomorrow's London transfer details")
    ],
    safety: [
      localize("09:30 開始，從飯店步行去 UP 這段不要壓線。", "The 09:30 start means the walk to UP should not be tight."),
      localize("這場不用 PowerPoint；帶 handout，口頭內容控制在 8 分鐘。", "This session does not use PowerPoint. Bring the handout and keep the talk to eight minutes.")
    ],
    budget: [
      budgetLine("早餐", "Breakfast", "出門前先吃，別拖到會場", "Eat before leaving"),
      budgetLine("交通", "Transport", "步行為主", "Mostly walking"),
      budgetLine("午餐", "Lunch", "發表後再好好吃", "Eat properly after the session"),
      budgetLine("門票", "Tickets", "今天沒有景點票", "No attraction tickets"),
      budgetLine("晚餐", "Dinner", "飯店附近用餐，之後收行李", "Dinner near the hotel, then pack"),
      budgetLine("購物", "Shopping", "今天不排", "Skip for today"),
      budgetLine("總額", "Total estimate", "餐費與市區短程交通", "Food and short local transport")
    ],
    timeline: [
      {
        time: localize("08:45 左右出門", "Leave around 08:45"),
        type: "transport",
        title: localize("從 INNSiDE 走去 University Place", "Walk from INNSiDE to University Place"),
        location: localize("INNSiDE → University Place", "INNSiDE → University Place"),
        details: {
          address: localize("University Place, Oxford Road, Manchester M13 9PL, United Kingdom", "University Place, Oxford Road, Manchester M13 9PL, United Kingdom"),
          mapQuery: "University Place Oxford Road Manchester",
          duration: localize("步行約 15–18 分鐘。", "About 15-18 minutes on foot."),
          note: localize("第一次走抓 20 分鐘，08:45 左右出門。", "Allow 20 minutes on the first walk and leave around 08:45."),
          documents: localize("handout、名牌、會議 agenda", "Handout, badge, conference agenda")
        }
      },
      {
        time: localize("09:30–10:45", "09:30–10:45"),
        type: "conference",
        title: localize("Interactive 發表", "Interactive presentation"),
        location: localize("Room 2.217 (UP)", "Room 2.217 (UP)"),
        details: {
          address: localize("University Place, Oxford Road, Manchester M13 9PL, United Kingdom", "University Place, Oxford Road, Manchester M13 9PL, United Kingdom"),
          mapQuery: "University Place Oxford Road Manchester",
          duration: localize("口頭 8 分鐘，加上討論約 7 分鐘。", "8-minute talk with around 7 minutes for discussion."),
          note: localize("發表前後不排別的活動，避免換教室或聊天拖到時間。", "Do not schedule anything around the presentation in case room changes or conversations run long."),
          documents: localize("Executive Summary / handout、多一份備用", "Executive Summary / handout with extra copies")
        }
      },
      {
        time: localize("中午到下午", "Noon to afternoon"),
        type: "conference",
        title: localize("午餐、下午場次與約談", "Lunch, afternoon sessions, and meetings"),
        location: localize("AIB 2026 會場", "AIB 2026 venue"),
        details: {
          duration: localize("發表結束後再看下午議程。", "Check the afternoon programme after the presentation."),
          note: localize("發表結束後先吃飯，再看還想留哪一場。", "Eat first after the presentation, then decide which final sessions still matter.")
        }
      },
      {
        time: localize("夜晚", "Evening"),
        type: "reminder",
        title: localize("回飯店收行李，準備明天往倫敦", "Pack at the hotel for tomorrow's London move"),
        location: localize("INNSiDE Manchester", "INNSiDE Manchester"),
        details: {
          address: localize("1 First Street, Manchester M15 4RP, United Kingdom", "1 First Street, Manchester M15 4RP, United Kingdom"),
          mapQuery: "INNSiDE Manchester 1 First Street Manchester",
          duration: localize("確認 Avanti 車票、Riu 訂房和退房時間。", "Check the Avanti ticket, Riu booking, and checkout time."),
          documents: localize("Avanti 票券、Riu 訂房、明日行程", "Avanti ticket, Riu booking, tomorrow's route")
        }
      }
    ]
  },
  {
    id: "day-5",
    dateDisplay: localize("07 / 04 Sat", "4 Jul Sat"),
    countryLine: localize("曼徹斯特・英國 → 倫敦・英國", "Manchester · United Kingdom → London · United Kingdom"),
    themeLabel: localize("Rail Transfer Day", "Rail Transfer Day"),
    stay: localize("Riu Plaza London The Westminster", "Riu Plaza London The Westminster"),
    primaryTransport: localize("Avanti West Coast · Piccadilly → Euston", "Avanti West Coast · Piccadilly → Euston"),
    progressCity: localize("倫敦", "London"),
    nextMove: localize("下一段是白金漢宮和 Covent Garden", "Next up: Buckingham Palace and Covent Garden"),
    categories: ["all", "london"],
    essentials: [
      localize("Avanti 車票"),
      localize("Riu 訂房確認", "Riu hotel booking"),
      localize("感應卡 / Apple Pay", "Contactless card / Apple Pay"),
      localize("雨傘", "Umbrella"),
      localize("手機充電", "Phone charger"),
      localize("輕便晚餐預算", "Dinner budget")
    ],
    safety: [
      localize("抵達 Euston 後先去 Riu 放行李，再到 Westminster。", "After arriving at Euston, drop the bags at Riu before going to Westminster."),
      localize("晚上 Soho / Covent Garden 人多，手機不要拿外側。", "In Soho or Covent Garden, keep your phone away from the outer hand.")
    ],
    budget: [
      budgetLine("早餐", "Breakfast", "曼城離開前簡單吃", "Simple before leaving Manchester"),
      budgetLine("交通", "Transport", "Avanti 車票＋倫敦地鐵 / 計程車", "Avanti + Tube / taxi"),
      budgetLine("午餐", "Lunch", "火車前後彈性安排", "Flexible around the train"),
      budgetLine("門票", "Tickets", "Westminster 這圈以外觀為主", "Westminster is mostly exterior views"),
      budgetLine("晚餐", "Dinner", "Covent Garden / Soho", "Covent Garden / Soho"),
      budgetLine("購物", "Shopping", "不安排", "None planned"),
      budgetLine("總額", "Total estimate", "交通日＋一頓晚餐", "Transfer day plus dinner")
    ],
    timeline: [
      {
        time: localize("上午", "Morning"),
        type: "transport",
        title: localize("退房後前往 Manchester Piccadilly", "Check out and head to Manchester Piccadilly"),
        location: localize("INNSiDE → Manchester Piccadilly", "INNSiDE → Manchester Piccadilly"),
        details: {
          address: localize("Manchester Piccadilly Station, Manchester M1 2BN, United Kingdom", "Manchester Piccadilly Station, Manchester M1 2BN, United Kingdom"),
          mapQuery: "Manchester Piccadilly Station",
          duration: localize("從飯店到車站約 10 分鐘車程，仍要看當天交通。", "The drive from the hotel to the station is about ten minutes, depending on traffic."),
          note: localize("退房後直接去車站，確認月台與車廂。", "Go directly to the station after checkout and confirm the platform and carriage.")
        }
      },
      {
        time: localize("中午", "Noon"),
        type: "transport",
        title: localize("Avanti West Coast 南下倫敦", "Take Avanti West Coast south to London"),
        location: localize("Manchester Piccadilly → London Euston", "Manchester Piccadilly → London Euston"),
        details: {
          address: localize("London Euston Station, London NW1 2RT, United Kingdom", "London Euston Station, London NW1 2RT, United Kingdom"),
          mapQuery: "London Euston Station",
          duration: localize("車程約 2 小時 10 分。", "Travel time around 2h10."),
          note: localize("行李放妥後在車上休息。", "Stow the luggage and rest on the train."),
          documents: localize("Avanti 電子票", "Avanti e-ticket")
        }
      },
      {
        time: localize("下午", "Afternoon"),
        type: "hotel",
        title: localize("入住 Riu，再走 Westminster", "Check into Riu, then walk Westminster"),
        location: localize("Riu Plaza London The Westminster / Big Ben / Westminster Bridge", "Riu Plaza London The Westminster / Big Ben / Westminster Bridge"),
        details: {
          address: localize("118 Westminster Bridge Rd, London SE1 7RW, United Kingdom", "118 Westminster Bridge Rd, London SE1 7RW, United Kingdom"),
          mapQuery: "Riu Plaza London The Westminster",
          duration: localize("Big Ben、西敏寺外觀、國會大廈和西敏橋都在附近。", "Big Ben, the Abbey exterior, Parliament, and Westminster Bridge are nearby."),
          note: localize("第一晚不跨區，走完就去吃飯。", "Stay in the area on the first night, then go to dinner."),
          documents: localize("Riu 訂房確認", "Riu booking confirmation")
        }
      },
      {
        time: localize("夜晚", "Evening"),
        type: "meal",
        title: localize("Covent Garden 或 Soho 吃飯", "Dinner in Covent Garden or Soho"),
        location: localize("Covent Garden / Soho", "Covent Garden / Soho"),
        details: {
          mapQuery: "Covent Garden London",
          duration: localize("晚餐後就回 Westminster。", "Return to Westminster after dinner."),
          note: localize("明天一早還有白金漢宮，晚餐後回飯店。", "Return to the hotel after dinner because Buckingham Palace is planned for the morning.")
        }
      }
    ]
  },
  {
    id: "day-6",
    dateDisplay: localize("07 / 05 Sun", "5 Jul Sun"),
    countryLine: localize("倫敦・英國", "London · United Kingdom"),
    themeLabel: localize("London Sightseeing Day", "London Sightseeing Day"),
    stay: localize("Riu Plaza London The Westminster", "Riu Plaza London The Westminster"),
    primaryTransport: localize("Tube / 步行", "Tube / walking"),
    progressCity: localize("倫敦", "London"),
    nextMove: localize("下一段是 Bond Street 和 Mayfair", "Next up: Bond Street and Mayfair"),
    categories: ["all", "london"],
    essentials: [
      localize("感應卡 / Oyster", "Contactless card / Oyster"),
      localize("輕便外套", "Light jacket"),
      localize("雨傘", "Umbrella"),
      localize("水壺", "Water bottle"),
      localize("行動電源"),
      localize("百貨購物袋空間", "Room for shopping")
    ],
    safety: [
      localize("衛兵交接時間出發前查官網；時間不合就只看外觀。", "Check the official guard-change schedule before departure; see the exterior only if the timing does not fit."),
      localize("Harrods 和 Knightsbridge 人多時，手機和卡片都收好。", "Around Harrods and Knightsbridge, keep phone and cards tucked in.")
    ],
    budget: [
      budgetLine("早餐", "Breakfast", "飯店或附近咖啡", "Hotel or nearby coffee"),
      budgetLine("交通", "Transport", "Tube / 步行", "Tube / walking"),
      budgetLine("午餐", "Lunch", "Covent Garden 附近", "Around Covent Garden"),
      budgetLine("門票", "Tickets", "主要地點不需門票", "Most stops do not require tickets"),
      budgetLine("晚餐", "Dinner", "Knightsbridge / South Kensington", "Knightsbridge / South Kensington"),
      budgetLine("購物", "Shopping", "Harrods 依實際消費", "Actual spending at Harrods"),
      budgetLine("總額", "Total estimate", "交通、餐費與 Harrods 購物", "Transport, meals, and Harrods shopping")
    ],
    timeline: [
      {
        time: localize("上午", "Morning"),
        type: "activity",
        title: localize("Buckingham Palace 外觀與拍照", "Buckingham Palace exterior and photos"),
        location: localize("Buckingham Palace", "Buckingham Palace"),
        details: {
          address: localize("Buckingham Palace, London SW1A 1AA, United Kingdom", "Buckingham Palace, London SW1A 1AA, United Kingdom"),
          mapQuery: "Buckingham Palace",
          duration: localize("先看外觀；官網確認有衛兵交接再提早到。", "See the exterior first; arrive early only if the official schedule confirms the guard change."),
          note: localize("拍照後從 St. James's Park 往 Covent Garden。", "After photos, walk through St. James's Park toward Covent Garden.")
        }
      },
      {
        time: localize("中午", "Noon"),
        type: "activity",
        title: localize("St. James's Park 接 Covent Garden", "Walk St. James's Park into Covent Garden"),
        location: localize("St. James's Park / Green Park / Covent Garden", "St. James's Park / Green Park / Covent Garden"),
        details: {
          mapQuery: "St James's Park London",
          duration: localize("穿過 St. James's Park 後，到 Covent Garden 吃午餐。", "Walk through St. James's Park, then have lunch at Covent Garden."),
          note: localize("Green Park 只有時間充足才加。", "Add Green Park only if time allows.")
        }
      },
      {
        time: localize("下午", "Afternoon"),
        type: "activity",
        title: localize("Leicester Square、Piccadilly、Regent Street", "Leicester Square, Piccadilly, and Regent Street"),
        location: localize("Leicester Square / Piccadilly Circus / Regent Street", "Leicester Square / Piccadilly Circus / Regent Street"),
        details: {
          mapQuery: "Piccadilly Circus London",
          duration: localize("從 Covent Garden 走到 Leicester Square，再到 Piccadilly Circus。", "Walk from Covent Garden to Leicester Square, then Piccadilly Circus."),
          note: localize("Regent Street 視步行量決定是否加入。", "Add Regent Street only if the walking load is manageable.")
        }
      },
      {
        time: localize("傍晚到夜晚", "Late afternoon to evening"),
        type: "meal",
        title: localize("Harrods 與晚餐", "Harrods and dinner"),
        location: localize("Harrods / Knightsbridge / South Kensington", "Harrods / Knightsbridge / South Kensington"),
        details: {
          address: localize("87-135 Brompton Rd, London SW1X 7XL, United Kingdom", "87-135 Brompton Rd, London SW1X 7XL, United Kingdom"),
          mapQuery: "Harrods London",
          duration: localize("逛完 Harrods 後在 Knightsbridge 或 South Kensington 吃晚餐。", "After Harrods, have dinner in Knightsbridge or South Kensington."),
          note: localize("精品和伴手禮先照清單買。", "Use the shopping list for boutiques and gifts.")
        }
      }
    ]
  },
  {
    id: "day-7",
    dateDisplay: localize("07 / 06 Mon", "6 Jul Mon"),
    countryLine: localize("倫敦・英國", "London · United Kingdom"),
    themeLabel: localize("London Shopping Day", "London Shopping Day"),
    stay: localize("Riu Plaza London The Westminster", "Riu Plaza London The Westminster"),
    primaryTransport: localize("Tube / 步行", "Tube / walking"),
    progressCity: localize("倫敦", "London"),
    nextMove: localize("下一段 Eurostar 進巴黎", "Next move: Eurostar into Paris"),
    categories: ["all", "london"],
    essentials: [
      localize("感應卡 / Oyster", "Contactless card / Oyster"),
      localize("購物清單", "Shopping list"),
      localize("可折疊購物袋", "Foldable shopping bag"),
      localize("手機充電", "Phone charger"),
      localize("Eurostar 票務待確認筆記", "Eurostar booking note"),
      localize("護照位置先確認", "Know where your passport is")
    ],
    safety: [
      localize("隔天搭 Eurostar，今晚不要太晚回飯店。", "Eurostar is tomorrow, so return to the hotel early."),
      localize("Soho 和 Chinatown 人潮多，手機別外露。", "In Soho and Chinatown, avoid holding your phone on the outside.")
    ],
    budget: [
      budgetLine("早餐", "Breakfast", "飯店或附近咖啡", "Hotel or nearby coffee"),
      budgetLine("交通", "Transport", "Tube / 步行", "Tube / walking"),
      budgetLine("午餐", "Lunch", "Bond Street / Selfridges 周邊", "Around Bond Street / Selfridges"),
      budgetLine("門票", "Tickets", "若看 West End 需另算", "Only if you add a West End show"),
      budgetLine("晚餐", "Dinner", "Soho / Chinatown", "Soho / Chinatown"),
      budgetLine("購物", "Shopping", "依精品與百貨實際消費", "Actual boutique and department-store spending"),
      budgetLine("總額", "Total estimate", "餐費、交通與購物另計", "Meals and transport; shopping separate")
    ],
    timeline: [
      {
        time: localize("上午", "Morning"),
        type: "activity",
        title: localize("New Bond Street / Old Bond Street", "New Bond Street / Old Bond Street"),
        location: localize("New Bond Street / Old Bond Street", "New Bond Street / Old Bond Street"),
        details: {
          mapQuery: "New Bond Street London",
          duration: localize("精品店集中，上午人通常較少。", "The boutiques are close together and are usually quieter in the morning."),
          note: localize("照品牌清單走，沒列的店先跳過。", "Follow the brand list and skip shops that are not on it.")
        }
      },
      {
        time: localize("中午", "Noon"),
        type: "activity",
        title: localize("Selfridges / Oxford Street", "Selfridges / Oxford Street"),
        location: localize("Selfridges / Oxford Street", "Selfridges / Oxford Street"),
        details: {
          address: localize("400 Oxford St, London W1A 1AB, United Kingdom", "400 Oxford St, London W1A 1AB, United Kingdom"),
          mapQuery: "Selfridges London",
          duration: localize("要逛百貨就去 Selfridges；否則直接到 Mayfair。", "Go to Selfridges for the department store; otherwise continue to Mayfair.")
        }
      },
      {
        time: localize("下午", "Afternoon"),
        type: "activity",
        title: localize("Mayfair / Mount Street / Regent Street", "Mayfair / Mount Street / Regent Street"),
        location: localize("Mayfair / Regent Street", "Mayfair / Regent Street"),
        details: {
          mapQuery: "Mayfair London",
          duration: localize("Mayfair、Mount Street 和 Regent Street 擇一到兩區。", "Choose one or two areas among Mayfair, Mount Street, and Regent Street."),
          note: localize("如果買得差不多，就把行李空間也一起想好。", "If shopping starts to add up, keep luggage space in mind.")
        }
      },
      {
        time: localize("夜晚", "Evening"),
        type: "meal",
        title: localize("Soho / Chinatown 晚餐", "Dinner in Soho / Chinatown"),
        location: localize("Soho / Chinatown / West End", "Soho / Chinatown / West End"),
        details: {
          mapQuery: "Soho London",
          duration: localize("晚餐、甜點；West End 演出需另行訂票。", "Dinner and dessert; a West End show requires a separate booking."),
          note: localize("明天要去 St Pancras，今晚早一點回 Westminster。", "Head back to Westminster a bit earlier because St Pancras comes tomorrow.")
        }
      }
    ]
  },
  {
    id: "day-8",
    dateDisplay: localize("07 / 07 Tue", "7 Jul Tue"),
    countryLine: localize("倫敦・英國 → 巴黎・法國", "London · United Kingdom → Paris · France"),
    themeLabel: localize("Eurostar Transfer Day", "Eurostar Transfer Day"),
    stay: localize("Pullman Paris Tour Eiffel", "Pullman Paris Tour Eiffel"),
    primaryTransport: localize("St Pancras → Gare du Nord → Pullman", "St Pancras → Gare du Nord → Pullman"),
    progressCity: localize("巴黎", "Paris"),
    nextMove: localize("下一段是羅浮宮與右岸", "Next up: the Louvre and the Right Bank"),
    categories: ["all", "paris"],
    essentials: [
      localize("護照"),
      localize("Eurostar 票券"),
      localize("Pullman 訂房確認", "Pullman booking"),
      localize("感應卡 / 少量歐元", "Contactless card / EUR cash"),
      localize("充電線與轉接頭", "Cable and adapter"),
      localize("eSIM 已開通確認", "eSIM check")
    ],
    safety: [
      localize("St Pancras 提早 75–90 分鐘到，不要壓線。", "Reach St Pancras 75-90 minutes early."),
      localize("巴黎北站和地鐵帶行李時，包包放前面，手機不要拿在外側。", "At Gare du Nord and on the Metro, keep the bag in front and the phone away from the outer hand.")
    ],
    budget: [
      budgetLine("早餐", "Breakfast", "Riu 周邊咖啡 / 簡單吃", "Coffee or something small near Riu"),
      budgetLine("交通", "Transport", "Eurostar＋巴黎進市區", "Eurostar + Paris arrival transit"),
      budgetLine("午餐", "Lunch", "St Pancras / 車上彈性安排", "Flexible at St Pancras or on the train"),
      budgetLine("門票", "Tickets", "今天沒有景點票", "No attraction tickets today"),
      budgetLine("晚餐", "Dinner", "鐵塔附近或 Pullman 周邊", "Near the tower or Pullman"),
      budgetLine("購物", "Shopping", "不安排", "None planned"),
      budgetLine("總額", "Total estimate", "Eurostar、市區交通和晚餐", "Eurostar, local transport, and dinner")
    ],
    timeline: [
      {
        time: localize("上午", "Morning"),
        type: "transport",
        title: localize("從 Riu 出發去 St Pancras", "Leave Riu for St Pancras"),
        location: localize("Riu Plaza London The Westminster → St Pancras", "Riu Plaza London The Westminster → St Pancras"),
        details: {
          address: localize("118 Westminster Bridge Rd, London SE1 7RW, United Kingdom", "118 Westminster Bridge Rd, London SE1 7RW, United Kingdom"),
          mapQuery: "St Pancras International",
          duration: localize("帶大件行李建議直接叫車。", "A direct car is recommended with large luggage."),
          note: localize("早上只喝咖啡或補買東西，不要離飯店和車站太遠。", "Use the morning for coffee or a final purchase and stay near the hotel and station.")
        }
      },
      {
        time: localize("中午", "Noon"),
        type: "transport",
        title: localize("Eurostar 進巴黎", "Take Eurostar into Paris"),
        location: localize("St Pancras → Paris Gare du Nord", "St Pancras → Paris Gare du Nord"),
        details: {
          address: localize("St Pancras International, Euston Rd, London N1C 4QP, United Kingdom", "St Pancras International, Euston Rd, London N1C 4QP, United Kingdom"),
          mapQuery: "St Pancras International",
          duration: localize("車程約 2 小時 20 分，市中心直達市中心。", "Around 2h20 city centre to city centre."),
          note: localize("這段像火車加過關，安檢與護照檢查都在上車前。", "This works like a train plus border control, all before boarding."),
          documents: localize("護照、Eurostar 票券", "Passport and Eurostar ticket")
        }
      },
      {
        time: localize("下午", "Afternoon"),
        type: "hotel",
        title: localize("巴黎北站進 Pullman", "Move from Gare du Nord to Pullman"),
        location: localize("Gare du Nord → Pullman Paris Tour Eiffel", "Gare du Nord → Pullman Paris Tour Eiffel"),
        details: {
          address: localize("18 Avenue de Suffren, Entrée au 22 rue Jean Rey, 75015 Paris, France", "18 Avenue de Suffren, Entrée au 22 rue Jean Rey, 75015 Paris, France"),
          mapQuery: "Pullman Paris Tour Eiffel",
          duration: localize("帶大件行李建議直接叫車。", "A direct taxi or ride-hailing car is recommended with large luggage."),
          note: localize("先辦入住、確認陽台景觀，再到鐵塔附近。", "Check in and confirm the balcony view before going to the tower."),
          documents: localize("Pullman 訂房與入住資料", "Pullman booking and check-in note")
        }
      },
      {
        time: localize("夜晚", "Evening"),
        type: "activity",
        title: localize("鐵塔夜景、Trocadéro 與 Pullman 陽台", "Eiffel Tower lights, Trocadéro, and the Pullman balcony"),
        location: localize("Champ de Mars / Eiffel Tower / Trocadéro", "Champ de Mars / Eiffel Tower / Trocadéro"),
        details: {
          mapQuery: "Trocadero Paris",
          duration: localize("第一晚只排鐵塔和 Trocadéro。", "Keep the first night to the tower and Trocadéro."),
          note: localize("看完 Trocadéro 後回飯店，鐵塔亮燈可在陽台看。", "Return after Trocadéro and watch the tower lights from the balcony.")
        }
      }
    ]
  },
  {
    id: "day-9",
    dateDisplay: localize("07 / 08 Wed", "8 Jul Wed"),
    countryLine: localize("巴黎・法國", "Paris · France"),
    themeLabel: localize("Louvre Day", "Louvre Day"),
    stay: localize("Pullman Paris Tour Eiffel", "Pullman Paris Tour Eiffel"),
    primaryTransport: localize("Metro / 步行", "Metro / walking"),
    progressCity: localize("巴黎", "Paris"),
    nextMove: localize("下一段是右岸精品線", "Next up: the Right Bank shopping line"),
    categories: ["all", "paris"],
    essentials: [
      localize("Louvre 門票 / 時段", "Louvre ticket / time slot"),
      localize("輕便外套", "Light layer"),
      localize("水壺", "Water bottle"),
      localize("感應卡 / Navigo", "Transit card"),
      localize("行動電源"),
      localize("小型防盜包", "Small secure bag")
    ],
    safety: [
      localize("羅浮宮先列想看的館藏，避免在館內來回走。", "List the Louvre collections in advance to avoid unnecessary walking."),
      localize("巴黎地鐵和熱門景點旁，注意扒手與簽名板。", "On the Metro and around major sights, watch out for pickpockets and clipboard scams.")
    ],
    budget: [
      budgetLine("早餐", "Breakfast", "Pullman / 附近咖啡", "Pullman / nearby coffee"),
      budgetLine("交通", "Transport", "Metro / 步行", "Metro / walking"),
      budgetLine("午餐", "Lunch", "羅浮宮周邊", "Near the Louvre"),
      budgetLine("門票", "Tickets", "羅浮宮需要時段票", "Louvre timed ticket"),
      budgetLine("晚餐", "Dinner", "左岸或回鐵塔附近", "Left Bank or back near the tower"),
      budgetLine("購物", "Shopping", "Place Vendôme / 老佛爺依實際消費", "Actual spending around Place Vendôme / Galeries Lafayette"),
      budgetLine("總額", "Total estimate", "羅浮宮門票、交通與餐費", "Louvre ticket, transport, and meals")
    ],
    timeline: [
      {
        time: localize("上午", "Morning"),
        type: "activity",
        title: localize("羅浮宮", "The Louvre"),
        location: localize("Louvre Museum", "Louvre Museum"),
        details: {
          address: localize("Rue de Rivoli, 75001 Paris, France", "Rue de Rivoli, 75001 Paris, France"),
          mapQuery: "Louvre Museum",
          duration: localize("依預約時段入館，只看事先列好的館藏。", "Enter at the booked time and focus on the selected collections."),
          note: localize("蒙娜麗莎、勝利女神、米洛的維納斯和拿破崙三世套房可先標在館內地圖。", "Mark the Mona Lisa, Winged Victory, Venus de Milo, and Napoleon III Apartments on the museum map.")
        }
      },
      {
        time: localize("中午", "Noon"),
        type: "meal",
        title: localize("杜樂麗花園到協和廣場", "Walk Tuileries into Place de la Concorde"),
        location: localize("Tuileries / Place de la Concorde", "Tuileries / Place de la Concorde"),
        details: {
          mapQuery: "Tuileries Garden Paris",
          duration: localize("從羅浮宮穿過杜樂麗花園到協和廣場。", "Walk from the Louvre through Tuileries to Place de la Concorde."),
          note: localize("午餐安排在羅浮宮或杜樂麗附近。", "Have lunch near the Louvre or Tuileries.")
        }
      },
      {
        time: localize("下午", "Afternoon"),
        type: "activity",
        title: localize("Place Vendôme、老佛爺頂樓與歌劇院周邊", "Place Vendôme, the Galeries rooftop, and the Opéra area"),
        location: localize("Place Vendôme / Galeries Lafayette / Opéra", "Place Vendôme / Galeries Lafayette / Opéra"),
        details: {
          mapQuery: "Place Vendome Paris",
          duration: localize("羅浮宮後再往 Place Vendôme 和歌劇院走。", "Continue from the Louvre toward Place Vendôme and the Opéra district."),
          note: localize("老佛爺頂樓免費；拍完市景後再到歌劇院周邊。", "The Galeries rooftop is free; continue to the Opéra area after the city view.")
        }
      },
      {
        time: localize("傍晚到夜晚", "Late afternoon to evening"),
        type: "activity",
        title: localize("塞納河與左岸", "The Seine and the Left Bank"),
        location: localize("Seine / Saint-Germain-des-Prés", "Seine / Saint-Germain-des-Prés"),
        details: {
          mapQuery: "Saint-Germain-des-Pres Paris",
          duration: localize("沿河散步 30–45 分鐘，再回 Pullman。", "Walk by the river for 30–45 minutes, then return to Pullman."),
          note: localize("羅浮宮若待超過預計時間，晚上那段直接取消。", "If the Louvre runs long, cancel the evening stop.")
        }
      }
    ]
  },
  {
    id: "day-10",
    dateDisplay: localize("07 / 09 Thu", "9 Jul Thu"),
    countryLine: localize("巴黎・法國", "Paris · France"),
    themeLabel: localize("Paris Shopping Day", "Paris Shopping Day"),
    stay: localize("Pullman Paris Tour Eiffel", "Pullman Paris Tour Eiffel"),
    primaryTransport: localize("Metro / 步行", "Metro / walking"),
    progressCity: localize("巴黎", "Paris"),
    nextMove: localize("下一段是蒙馬特和 CDG handoff", "Next up: Montmartre and the CDG handoff"),
    categories: ["all", "paris"],
    essentials: [
      localize("感應卡 / Navigo", "Transit card"),
      localize("購物袋", "Shopping bag"),
      localize("退稅單收納空間", "Room for tax forms"),
      localize("行動電源"),
      localize("水壺", "Water bottle"),
      localize("信用卡與少量現金", "Credit card and a little cash")
    ],
    safety: [
      localize("Avenue Montaigne、香榭一帶人多，包包往前背。", "Around Avenue Montaigne and the Champs, keep the bag in front."),
      localize("高價購物收據和 détaxe 表單先收好，不要散掉。", "Keep luxury receipts and détaxe forms together.")
    ],
    budget: [
      budgetLine("早餐", "Breakfast", "Pullman / 附近咖啡", "Pullman / nearby coffee"),
      budgetLine("交通", "Transport", "Metro / 步行", "Metro / walking"),
      budgetLine("午餐", "Lunch", "香榭麗舍周邊", "Around the Champs-Elysees"),
      budgetLine("門票", "Tickets", "若進凱旋門需另算", "Add only if you enter the Arc"),
      budgetLine("晚餐", "Dinner", "塞納河或 Pullman 附近", "Near the Seine or Pullman"),
      budgetLine("購物", "Shopping", "依精品清單實際消費", "Actual spending from the boutique list"),
      budgetLine("總額", "Total estimate", "交通與餐費；購物另計", "Transport and meals; shopping separate")
    ],
    timeline: [
      {
        time: localize("上午", "Morning"),
        type: "activity",
        title: localize("凱旋門", "Arc de Triomphe"),
        location: localize("Arc de Triomphe", "Arc de Triomphe"),
        details: {
          address: localize("Pl. Charles de Gaulle, 75008 Paris, France", "Pl. Charles de Gaulle, 75008 Paris, France"),
          mapQuery: "Arc de Triomphe",
          duration: localize("想上去看市景就多留一點時間。", "Stay longer only if you plan to go up."),
          note: localize("是否登頂當天決定；之後沿香榭麗舍往下走。", "Decide on the rooftop that day, then walk down the Champs-Elysees.")
        }
      },
      {
        time: localize("中午", "Noon"),
        type: "meal",
        title: localize("香榭麗舍大道", "Champs-Elysees"),
        location: localize("Champs-Elysees", "Champs-Elysees"),
        details: {
          mapQuery: "Champs-Elysees Paris",
          duration: localize("午餐安排在香榭麗舍沿線。", "Have lunch along the Champs-Elysees."),
          note: localize("不必走完整條，也不需要每間店都進。", "There is no need to cover the entire avenue or enter every shop.")
        }
      },
      {
        time: localize("下午", "Afternoon"),
        type: "activity",
        title: localize("Avenue Montaigne 與 Place Vendôme", "Avenue Montaigne and Place Vendôme"),
        location: localize("Avenue Montaigne / Place Vendôme", "Avenue Montaigne / Place Vendôme"),
        details: {
          mapQuery: "Avenue Montaigne Paris",
          duration: localize("Avenue Montaigne 看精品，之後再到 Place Vendôme。", "Visit the boutiques on Avenue Montaigne, then continue to Place Vendôme."),
          note: localize("先列要看的品牌，不用每一間都進去。", "List the priority brands instead of entering every store.")
        }
      },
      {
        time: localize("夜晚", "Evening"),
        type: "activity",
        title: localize("塞納河散步，再回 Pullman", "Walk by the Seine, then return to Pullman"),
        location: localize("Seine riverside", "Seine riverside"),
        details: {
          mapQuery: "Seine River Paris",
          duration: localize("晚餐後走 30–45 分鐘。", "Walk for 30–45 minutes after dinner."),
          note: localize("走完直接回 Pullman；鐵塔亮燈在陽台看。", "Return to Pullman afterward and watch the tower lights from the balcony.")
        }
      }
    ]
  },
  {
    id: "day-11",
    dateDisplay: localize("07 / 10 Fri", "10 Jul Fri"),
    countryLine: localize("巴黎・法國 → CDG Airport", "Paris · France → CDG Airport"),
    themeLabel: localize("Airport Transfer Day", "Airport Transfer Day"),
    stay: localize("Novotel Paris Charles-de-Gaulle Airport", "Novotel Paris Charles-de-Gaulle Airport"),
    primaryTransport: localize("Metro / 車 / RER to Roissypole", "Metro / car / RER to Roissypole"),
    progressCity: localize("巴黎最後一天", "Last Paris day"),
    nextMove: localize("下一段就是 AF 1068 回曼徹斯特", "Next up: AF 1068 back to Manchester"),
    categories: ["all", "paris", "airport"],
    essentials: [
      localize("AF / BA / CI 票券整理", "AF / BA / CI tickets"),
      localize("護照"),
      localize("退稅表單與收據", "Tax refund forms and receipts"),
      localize("Novotel 訂房確認", "Novotel booking"),
      localize("行李重量概念", "Baggage plan"),
      localize("充電器與藥品", "Chargers and medicine")
    ],
    safety: [
      localize("蒙馬特和百貨人多，地鐵上注意扒手。", "Watch for pickpockets in Montmartre and on the Metro."),
      localize("晚上去 CDG 前，先把隔天所有票券離線存好。", "Before heading to CDG, save all next-day tickets offline.")
    ],
    budget: [
      budgetLine("早餐", "Breakfast", "Pullman / 蒙馬特附近", "Pullman / near Montmartre"),
      budgetLine("交通", "Transport", "市內移動＋去 CDG", "City movement + CDG transfer"),
      budgetLine("午餐", "Lunch", "老佛爺 / Printemps / Le Bon Marché 附近", "Near Galeries Lafayette / Printemps / Le Bon Marché"),
      budgetLine("門票", "Tickets", "聖心堂免費；圓頂另計", "Sacré-Cœur is free; dome ticket separate"),
      budgetLine("晚餐", "Dinner", "Novotel 或機場附近", "At Novotel or near the airport"),
      budgetLine("購物", "Shopping", "依最後採買實際消費", "Actual final shopping"),
      budgetLine("總額", "Total estimate", "市區交通、機場車資與餐費", "City transit, airport transfer, and meals")
    ],
    timeline: [
      {
        time: localize("上午", "Morning"),
        type: "activity",
        title: localize("聖心堂與蒙馬特", "Sacré-Cœur and Montmartre"),
        location: localize("Sacré-Cœur / Montmartre", "Sacré-Cœur / Montmartre"),
        details: {
          address: localize("35 Rue du Chevalier de la Barre, 75018 Paris, France", "35 Rue du Chevalier de la Barre, 75018 Paris, France"),
          mapQuery: "Sacre-Coeur Paris",
          duration: localize("聖心堂、Place du Tertre、La Maison Rose；中午前離開。", "Sacré-Cœur, Place du Tertre, and La Maison Rose; leave before noon."),
          note: localize("地鐵站與階梯附近人多，包包放前面。", "Keep the bag in front around the Metro and the steps.")
        }
      },
      {
        time: localize("中午", "Noon"),
        type: "activity",
        title: localize("最後採買", "Final shopping"),
        location: localize("Galeries Lafayette / Printemps / Le Bon Marché", "Galeries Lafayette / Printemps / Le Bon Marché"),
        details: {
          mapQuery: "Galeries Lafayette Haussmann",
          duration: localize("老佛爺、Printemps、Le Bon Marché 三選一。", "Choose one: Galeries Lafayette, Printemps, or Le Bon Marché."),
          note: localize("有退稅商品就當場拿表單，收據放進退稅資料夾。", "Ask for the tax-free form at the store and place the receipt in the refund folder."),
          documents: localize("退稅單與購物收據", "Tax forms and shopping receipts")
        }
      },
      {
        time: localize("下午", "Afternoon"),
        type: "hotel",
        title: localize("回 Pullman 拿寄放行李", "Return to Pullman for stored luggage"),
        location: localize("Pullman Paris Tour Eiffel", "Pullman Paris Tour Eiffel"),
        details: {
          address: localize("18 Avenue de Suffren, Entrée au 22 rue Jean Rey, 75015 Paris, France", "18 Avenue de Suffren, Entrée au 22 rue Jean Rey, 75015 Paris, France"),
          mapQuery: "Pullman Paris Tour Eiffel",
          duration: localize("取回寄放行李，確認沒有物品留在櫃台。", "Collect the stored bags and check that nothing remains at the desk."),
          note: localize("先把購物收據、票券和退稅單整理進同一包。", "Put receipts, tickets, and tax papers in one place before leaving.")
        }
      },
      {
        time: localize("夜晚", "Evening"),
        type: "transport",
        title: localize("從 Pullman 轉去 Novotel CDG", "Move from Pullman to Novotel CDG"),
        location: localize("Pullman → Novotel Paris Charles-de-Gaulle Airport", "Pullman → Novotel Paris Charles-de-Gaulle Airport"),
        details: {
          address: localize("巴黎街道，諾斯波爾 (Roissypole) RER 火車站，93290 Tremblay-en-France，法國", "Paris Street, Roissypole RER station, 93290 Tremblay-en-France, France"),
          mapQuery: "Novotel Paris Charles-de-Gaulle Airport",
          duration: localize("帶大件行李建議直接叫車到飯店。", "A direct car to the hotel is recommended with large luggage."),
          note: localize("搭大眾運輸則轉 RER 到 Roissypole，先查當天電梯與營運狀況。", "For public transport, take the RER to Roissypole and check lift access and service status first."),
          documents: localize("Novotel 訂房、隔天法航電子票", "Novotel booking and the Air France e-ticket")
        }
      }
    ]
  },
  {
    id: "day-12",
    dateDisplay: localize("07 / 11 Sat – 07 / 12 Sun", "11 Jul Sat – 12 Jul Sun"),
    countryLine: localize("巴黎・法國 → 曼徹斯特・英國 → 倫敦・英國 → 台北・台灣", "Paris · France → Manchester · United Kingdom → London · United Kingdom → Taipei · Taiwan"),
    themeLabel: localize("Return Flight Day", "Return Flight Day"),
    stay: localize("回程機上", "Overnight on the way home"),
    primaryTransport: localize("AF 1068 · BA 1371 · CI 0082", "AF 1068 · BA 1371 · CI 0082"),
    progressCity: localize("回程接駁", "Homeward connections"),
    nextMove: localize("最後回到台北", "Final stop: Taipei"),
    categories: ["all", "flights", "airport"],
    essentials: [
      localize("護照"),
      localize("AF / BA / CI 電子票"),
      localize("退稅完成證明", "Tax refund validation"),
      localize("信用卡與少量現金", "Credit card and a little cash"),
      localize("藥品與保養品分開放", "Medicine and toiletries"),
      localize("行動電源與充電線", "Power bank and cable")
    ],
    safety: [
      localize("CDG 不要壓線；若要退稅，先驗證再托運。", "Do not cut CDG close; if claiming tax back, validate before bag drop."),
      localize("不要漏掉 MAN → LHR 這段，主票是連在一起的。", "Do not miss the MAN → LHR leg because the ticketed chain stays connected.")
    ],
    budget: [
      budgetLine("早餐", "Breakfast", "Novotel / 機場簡單處理", "Novotel / airport"),
      budgetLine("交通", "Transport", "Novotel → CDG 航廈", "Novotel → CDG terminal"),
      budgetLine("午餐", "Lunch", "機上或轉機時簡單吃", "On board or during transfer"),
      budgetLine("門票", "Tickets", "今天沒有景點票", "No attraction tickets"),
      budgetLine("晚餐", "Dinner", "回程機上", "On the flight"),
      budgetLine("購物", "Shopping", "不安排", "None planned"),
      budgetLine("總額", "Total estimate", "機場支出與轉機餐費", "Airport spending and transfer meals")
    ],
    timeline: [
      {
        time: localize("上午", "Morning"),
        type: "transport",
        title: localize("Novotel 進 CDG Terminal 2E", "Move from Novotel into CDG Terminal 2E"),
        location: localize("Novotel CDG → CDG T2E", "Novotel CDG → CDG T2E"),
        details: {
          address: localize("Paris Street, Roissypole RER station, 93290 Tremblay-en-France, France", "Paris Street, Roissypole RER station, 93290 Tremblay-en-France, France"),
          mapQuery: "Charles de Gaulle Airport Terminal 2E",
          duration: localize("如果要辦退稅，建議 09:00 左右進 2E。", "If you need tax refund validation, aim to be in 2E around 09:00."),
          note: localize("電子票列最晚報到 11:50，但退稅、托運和安檢都需要時間。", "The e-ticket lists 11:50 as the latest check-in, but tax refund, bag drop, and security all take time."),
          documents: localize("退稅單、法航登機證、托運行李規則", "Tax papers, Air France boarding pass, baggage allowance")
        }
      },
      {
        time: localize("12:50 → 13:25", "12:50 → 13:25"),
        type: "flight",
        title: localize("AF 1068 巴黎飛曼徹斯特", "AF 1068 from Paris to Manchester"),
        location: localize("CDG T2E → MAN T2", "CDG T2E → MAN T2"),
        details: {
          address: localize("Charles de Gaulle Airport Terminal 2E", "Charles de Gaulle Airport Terminal 2E"),
          mapQuery: "Charles de Gaulle Airport Terminal 2E",
          duration: localize("Business Standard / SkyPriority。", "Business Standard / SkyPriority."),
          note: localize("這段可用法航 Lounge、優先報到與優先登機。", "This segment comes with lounge access, priority check-in, and priority boarding."),
          documents: localize("Air France 電子票、座位 4A、行李額度", "Air France e-ticket, seat 4A, baggage allowance")
        }
      },
      {
        time: localize("18:10 → 19:15", "18:10 → 19:15"),
        type: "flight",
        title: localize("BA 1371 曼徹斯特飛希斯洛", "BA 1371 from Manchester to Heathrow"),
        location: localize("MAN → LHR", "MAN → LHR"),
        details: {
          mapQuery: "Manchester Airport Terminal 3",
          duration: localize("這段不能漏掉，後面華航還接在同一張票上。", "Do not skip this leg because the China Airlines ticket follows on the same chain."),
          note: localize("到希斯洛後照 Flight Connections 指標走。", "At Heathrow, follow the Flight Connections signs.")
        }
      },
      {
        time: localize("21:10 → 18:05+1", "21:10 → 18:05+1"),
        type: "flight",
        title: localize("CI 0082 希斯洛回台北", "CI 0082 from Heathrow back to Taipei"),
        location: localize("LHR → TPE", "LHR → TPE"),
        details: {
          mapQuery: "Heathrow Terminal 4",
          duration: localize("夜航後於隔天 18:05 抵達台北。", "The overnight flight arrives in Taipei at 18:05 the next day."),
          note: localize("護照、登機證、藥品與充電線放在隨身包。", "Keep the passport, boarding passes, medicine, and cable in the carry-on bag.")
        }
      }
    ]
  }
];

const conferenceAlerts = [
  {
    tag: "AIB",
    status: "alert",
    title: { zh: "註冊與收據", en: "Registration and receipts" },
    body: { zh: "註冊確認、付款證明和收據放在同一個資料夾。", en: "Keep the registration confirmation, payment proof, and receipt in one folder." }
  },
  {
    tag: "Hotel",
    status: "alert",
    title: { zh: "曼徹斯特飯店取消規則", en: "Manchester hotel cancellation policy" },
    body: { zh: "這間 24 小時內取消或 no-show 會收 1 晚。7/4 那段如果要改，先看這條。", en: "This hotel charges one night for cancellation within 24 hours or no-show. Recheck this if the 4 July plan changes." }
  },
  {
    tag: "Budget",
    status: "reimburse",
    title: { zh: "報帳資料順序", en: "Reimbursement documents" },
    body: { zh: "機票、AIB 會議費、會員費和日支費先放同一個資料夾。", en: "Keep flights, AIB fees, membership, and daily allowance papers in one folder." }
  },
  {
    tag: "Visa",
    status: "confirmed",
    title: { zh: "護照、ETA、保險", en: "Passport, ETA, and insurance" },
    body: { zh: "護照、ETA 核准紀錄和安達產險保單都留離線版。真的要找時，直接翻保險確認信和保費 PDF。", en: "Keep your passport, ETA approval, and Chubb insurance details available offline. When needed, go straight to the insurance confirmation email and premium PDF." }
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
      { label: { zh: "Slides", en: "Slides" }, value: { zh: "出發前再看一次", en: "Check once more before departure" } },
      { label: { zh: "Script", en: "Script" }, value: { zh: "發表前再順一次", en: "Run through it again before presenting" } },
      { label: { zh: "Printout", en: "Printout" }, value: { zh: "有需要再印", en: "Print only if needed" } }
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
      { label: { zh: "Slides", en: "Slides" }, value: { zh: "出發前再看一次", en: "Check once more before departure" } },
      { label: { zh: "Script", en: "Script" }, value: { zh: "發表前再順一次", en: "Run through it again before presenting" } },
      { label: { zh: "Printout", en: "Printout" }, value: { zh: "現場需要再印", en: "Print only if the session needs it" } }
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
      { id: "departure-london-hotel", text: { zh: "Riu Plaza London The Westminster 的訂房確認先離線存好。", en: "Keep the Riu Plaza London The Westminster confirmation saved offline." } }
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
      { id: "essentials-insurance", text: { zh: "安達產險旅綜保已投保，保單確認信與保費 PDF 都已留存。", en: "Chubb travel insurance is confirmed, and both the confirmation email and premium PDF are saved." } },
      { id: "essentials-packing", text: { zh: "出發前最後檢查藥品、衣物與會議穿著。", en: "Do a final check on medicine, clothing, and conference outfits." } }
    ]
  }
];

const STORAGE_KEYS = {
  checklist: "aibChecklistState",
  currency: "aibCurrency",
  language: "aib-lang"
};

const SUPPORTED_LANGUAGE_IDS = new Set(["zh", "en", "fr", "de"]);
const HOME_TAB_IDS = new Set(homeSectionTabs.map((tab) => tab.id));
const HOME_DEFAULT_TAB = (homeSectionTabs[0] && homeSectionTabs[0].id) || "overview";

  window.HandbookData = {
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
    handbookContents,
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
  };
})();
