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
  reminders: { zh: "貼心提醒", en: "Notes", fr: "Notes", de: "Hinweise" }
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
      lead: { zh: "兩場發表、時間、教室和要帶的文件，都放這頁。", en: "This page keeps the two presentations, timing, rooms, and key files together." }
    },
    transport: {
      kicker: { zh: "交通規劃", en: "Transport" },
      title: { zh: "火車與市內交通", en: "Trains & Local Transit" },
      lead: { zh: "城市之間怎麼接、到了當地搭什麼，這頁一起看。", en: "This page keeps the city-to-city moves and local transit in one place." }
    },
    flights: {
      kicker: { zh: "航班安排", en: "Flights" },
      title: { zh: "機票與轉機", en: "Flight Plan & Transfers" },
      lead: { zh: "去程、回程和巴黎回曼徹斯特都放這裡。", en: "Outbound, return, and the Paris-to-Manchester segment all live here." }
    },
    stay: {
      kicker: { zh: "住宿安排", en: "Accommodation" },
      title: { zh: "住宿與城市切換", en: "Accommodation & City Split" },
      lead: { zh: "曼徹斯特、倫敦、Pullman 和 CDG 前一晚都接好了。剩下就是把移動抓順。", en: "Manchester, London, Pullman, and the CDG overnight are set. The main thing left is keeping the handoffs clean." }
    },
    itinerary: {
      kicker: { zh: "每日行程", en: "Itinerary" },
      title: { zh: "每日旅行指南", en: "Daily Travel Guide" },
      lead: { zh: "每天去哪裡、怎麼移動、晚上住哪裡，都放在同一張卡。", en: "Each day keeps the route, movement, and overnight plan in one card." }
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
      lead: { zh: "英國這幾天，再加上德國、法國移動前會用到的提醒，都放這裡。", en: "UK, Germany, and France travel notes collected in one place before the trip." }
    },
    documents: {
      kicker: { zh: "官方連結", en: "Official Links" },
      title: { zh: "文件與連結", en: "Documents & Links" },
      lead: { zh: "這裡只放公開連結和文件種類，不會放私人資料。", en: "Only public official links and document reminders are listed. Booking numbers, payment details, emails, and private receipt contents are excluded." }
    }
  },
  reminders: [
    { status: "confirmed", title: { zh: "倫敦住宿", en: "London accommodation" }, body: { zh: "7/4–7/7 住 Riu Plaza London The Westminster。這段先顧 Westminster、Covent Garden，還有 7/7 去 St Pancras 的路。", en: "For 4-7 July, stay at Riu Plaza London The Westminster. The key parts are Westminster, Covent Garden, and the move to St Pancras on 7 July." } },
    { status: "book", title: { zh: "曼徹斯特到倫敦", en: "Manchester to London" }, body: { zh: "7/4 搭 Avanti West Coast 最單純，直達約 2 小時 10 分。火車時間先抓好就行。", en: "On 4 July, Avanti West Coast is the simplest option at about 2h10 direct. Just keep the train timing clear." } },
    { status: "book", title: { zh: "倫敦到巴黎", en: "London to Paris" }, body: { zh: "7/7 從 St Pancras 搭 Eurostar。這段不要壓線，提早 75–90 分鐘到站比較安心。", en: "On 7 July, take Eurostar from St Pancras. Do not cut it too close; arriving 75-90 minutes early is safer." } },
    { status: "alert", title: { zh: "巴黎退稅", en: "Paris tax refund" }, body: { zh: "如果在巴黎有買精品或高單價東西，店裡先拿 détaxe / tax free 表單。7/11 離開歐盟時，先在 CDG 驗證退稅，再去托運行李。", en: "If you buy luxury or higher-value items in Paris, ask for the détaxe / tax free form in the shop. On 11 July, validate the refund at CDG before checking your bags." } },
    { status: "confirmed", title: { zh: "eSIM / 漫遊", en: "eSIM / roaming" }, body: { zh: "歐洲 39 國 15 天 eSIM 已買。出發前先裝好，落地再開；原本門號留著收簡訊和驗證碼就好。", en: "The 39-country Europe eSIM for 15 days is already purchased. Install it before departure, turn it on after landing, and keep your main number for SMS and verification codes." } },
    { status: "reimburse", title: { zh: "報帳資料", en: "Reimbursement packet" }, body: { zh: "可報帳還是看國際機票、AIB 會議費、AIB 會員費和國科會日支費。倫敦、巴黎段另外算。", en: "Claims stay limited to international flights, the AIB conference fee, the AIB membership fee, and NSTC allowance. London and Paris stay separate." } },
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
      },
      {
        status: "confirmed",
        title: { zh: "巴黎退稅可以辦，但別拖到最後", en: "You can claim the Paris tax refund, just do not leave it too late" },
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
        title: { zh: "eSIM 先裝，主門號先留著", en: "Install the eSIM, keep your main number" },
        body: { zh: "歐洲 39 國 15 天 eSIM 已經買了，出發前先裝進手機，到歐洲再開。原本門號先別關，收簡訊、銀行驗證碼和臨時聯絡還是會用到。", en: "The 39-country Europe eSIM for 15 days is already bought. Install it before departure and switch it on once you are in Europe. Keep your main number active for SMS, banking codes, and backup contact." }
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
        status: "alert",
        title: { zh: "CDG 那天時間抓寬", en: "Keep extra time at CDG" },
        body: { zh: "7/11 就算前一晚住在 Novotel CDG，也不要壓線。若還要辦退稅，建議 09:00 左右就進 2E 航廈區；不辦退稅也抓 09:30 左右比較穩。", en: "Even with the Novotel CDG overnight on 10 July, do not cut 11 July too close. If you still need a tax refund, aim to be inside the Terminal 2E area around 09:00; even without it, around 09:30 is safer." }
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
      terminals: { zh: "抵達 T3，先轉去 T1；進城搭 Frankfurt Airport Regionalbahnhof 的 S8 / S9，回來再走 T1 出境。", en: "Arrive at T3, move to T1, use the Regionalbahnhof S8 / S9 for the city stop, then return through T1 for the Lufthansa departure." },
      notes: [
        { zh: "CI 抵達後先看螢幕確認 LH 0946，再從 T3 接駁去 T1；目前 Skyline 停駛，先以機場接駁巴士為主。", en: "After CI arrives, confirm LH 0946 on the screens, then move from T3 to T1; use the airport shuttle bus while the Skyline service is unavailable." },
        { zh: "進城這段可搭 S8 或 S9 去 Hauptwache，老城一圈再回來；如果不想走太滿，也可以直接縮成羅馬廣場和美因河。", en: "Take S8 or S9 into Hauptwache for the old-town loop, or keep it shorter with just Römerberg and the river if the layover feels too long already." },
        { zh: "若要照 PPT 動線去法蘭克福動物園，最晚大約 13:30 回到 T1 比較穩，這樣還有時間整理、吃點東西，再接 16:20 的 Lufthansa。", en: "If you follow the zoo version of the route, try to be back at T1 around 13:30 so there is still time to reset, eat, and catch the 16:20 Lufthansa flight." },
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
      note: { zh: "這段就直接住 Riu Plaza London The Westminster。7/4 抵達後接 Westminster 一圈很順，7/7 早上再往 St Pancras 去搭 Eurostar 也不會太繞。", en: "This chapter now stays at Riu Plaza London The Westminster. It works cleanly for the first Westminster walk on 4 July and still keeps the St Pancras move on 7 July manageable." }
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
    { date: "6/29-6/30", city: { zh: "Taipei → Frankfurt → Manchester", en: "Taipei → Frankfurt → Manchester" }, kind: "travel", theme: { zh: "長程飛行、法蘭克福老城與動物園轉機線", en: "Long-haul flying, Frankfurt old town, and the zoo layover route" }, title: { zh: "出發、法蘭克福轉機散步，再接曼徹斯特", en: "Departure, a Frankfurt stop, and the final leg into Manchester" }, status: "confirmed", must: ["CI 0061｜TPE 22:20 → FRA 06:50(+1)", "T3 → T1｜接駁後搭 S8 / S9 進 Hauptwache", "羅馬廣場 → 鐵橋 → 法蘭克福大教堂", "LH 0946｜FRA 16:20 → MAN 17:10", "入住曼徹斯特"], optional: ["如果時間順，再把法蘭克福動物園一起走掉", "如果只想走短版，就留在羅馬廣場、美因河和午餐", "MainNizza 或老城附近找午餐", "抵達後輕鬆吃晚餐、補水、整理文件"], tickets: ["法蘭克福老城散步免費", "法蘭克福動物園：學生票 6 歐、Frankfurt Card 折後約 10 歐", "午餐依實際消費"], notes: ["這天的重點是把長途飛行和轉機走順。老城和動物園都是加分，不用每個點都硬走滿。"] },
    { date: "6/30-7/3", city: { zh: "Manchester", en: "Manchester" }, kind: "conference", theme: { zh: "AIB 會議和曼徹斯特停留", en: "Conference days and the Manchester stay" }, title: { zh: "AIB 2026 這幾天", en: "The AIB 2026 days" }, status: "confirmed", must: ["AIB Conference", "Presentation", "Networking"], optional: ["空檔回飯店整理簡報", "附近簡單晚餐"], tickets: ["景點門票：GBP 0；以會議活動為主"], notes: ["這幾天就以 AIB 為主。兩場發表都已確認，會議前後不要把行程塞太滿。"] },
    { date: "7/4", city: { zh: "Manchester → London", en: "Manchester → London" }, kind: "travel", theme: { zh: "從曼徹斯特進倫敦", en: "From Manchester into London" }, title: { zh: "轉進倫敦", en: "Move into London" }, status: "confirmed", must: ["Avanti West Coast", "Manchester → London", "入住 Riu Plaza London The Westminster"], optional: ["抵達後 Big Ben", "Westminster Abbey 外觀", "London Eye 河岸"], tickets: ["火車票還沒買", "地標散步：免費"], notes: ["這天先把曼徹斯特和倫敦接順就好。到倫敦後先入住 Riu，再走西敏一帶，不用急著排太多點。"] },
    { date: "7/5", city: { zh: "London", en: "London" }, kind: "free", theme: { zh: "白金漢宮、公園和 Harrods", en: "Buckingham Palace, the parks, and Harrods" }, title: { zh: "倫敦 Day 2", en: "London Day 2" }, status: "confirmed", must: ["Buckingham Palace", "St. James's Park", "Covent Garden", "Harrods"], optional: ["Leicester Square", "Piccadilly Circus", "Green Park"], tickets: ["街區散步免費；主要花費看購物和下午茶"], notes: ["先看白金漢宮，再慢慢接到 Covent Garden 和 Harrods。今天不用再插進太多別的點。"] },
    { date: "7/6", city: { zh: "London", en: "London" }, kind: "free", theme: { zh: "Bond Street、Mayfair 和 Soho", en: "Bond Street, Mayfair, and Soho" }, title: { zh: "倫敦 Day 3", en: "London Day 3" }, status: "confirmed", must: ["Bond Street", "Selfridges", "Mayfair", "Soho / Chinatown"], optional: ["Oxford Street", "Regent Street", "West End"], tickets: ["街區散步免費；購物依實際安排"], notes: ["Bond Street、Mayfair 和 Soho 放同一天最順。晚上不要拖太晚，隔天還要去搭 Eurostar。"] },
    { date: "7/7", city: { zh: "London → Paris", en: "London → Paris" }, kind: "travel", theme: { zh: "Eurostar 進巴黎，第一晚就留給鐵塔", en: "Eurostar into Paris, with the first night kept for the tower" }, title: { zh: "抵達巴黎，入住 Pullman", en: "Arrive in Paris and check into Pullman" }, status: "confirmed", must: ["Eurostar｜St Pancras → Gare du Nord", "入住 Pullman Paris Tour Eiffel", "艾菲爾鐵塔夜景", "Pullman 陽台看鐵塔"], optional: ["塞納河邊散步"], tickets: ["Eurostar 這段還沒買", "鐵塔周邊散步免費"], notes: ["Riu 到 St Pancras 先抓出門時間，Eurostar 這段提早到站比較安心。到了巴黎就先去 Pullman，不用一落地就趕景點。"] },
    { date: "7/8", city: { zh: "Paris", en: "Paris" }, kind: "free", theme: { zh: "羅浮宮、右岸和百貨屋頂", en: "The Louvre, the Right Bank, and the rooftop stop" }, title: { zh: "巴黎 Day 2", en: "Paris Day 2" }, status: "confirmed", must: ["Louvre Museum", "Place Vendôme", "Galeries Lafayette 頂樓", "巴黎歌劇院周邊"], optional: ["右岸咖啡館小停留"], tickets: ["Louvre 要去再訂時段", "老佛爺百貨頂樓免費"], notes: ["這天就順著右岸走。上午先看羅浮宮，之後再接 Place Vendôme、歌劇院一帶和老佛爺頂樓。"] },
    { date: "7/9", city: { zh: "Paris", en: "Paris" }, kind: "free", theme: { zh: "右岸大道、精品街和塞納河", en: "Right Bank avenues, shopping, and the Seine" }, title: { zh: "巴黎 Day 3", en: "Paris Day 3" }, status: "confirmed", must: ["Avenue Montaigne", "Champs-Elysees", "Arc de Triomphe", "塞納河夜景"], optional: ["精品購物", "晚餐後再看一次鐵塔"], tickets: ["街區散步與購物：依實際消費", "想上凱旋門再另外買票"], notes: ["Avenue Montaigne、香榭麗舍和凱旋門可以排同一天。晚上再去塞納河邊，不用每個地方都待很久。"] },
    { date: "7/10", city: { zh: "Paris", en: "Paris" }, kind: "free", theme: { zh: "蒙馬特、最後採買與轉往機場", en: "Montmartre, final shopping, and the shift to the airport" }, title: { zh: "巴黎 Day 4", en: "Paris Day 4" }, status: "confirmed", must: ["Sacré-Cœur / Montmartre", "巴黎最後採購", "回 Pullman 拿寄放行李", "入住巴黎戴高樂機場候機樓諾富特酒店"], optional: ["沿途街角拍照"], tickets: ["聖心堂與蒙馬特散步免費"], notes: ["最後一天不要塞太滿。上午去聖心堂和蒙馬特，下午把採買和行李收好；帶著行李時，Pullman → Novotel 直接叫車最省事。"] },
    { date: "7/11-7/12", city: { zh: "Paris → Manchester → Heathrow → Taipei", en: "Paris → Manchester → Heathrow → Taipei" }, kind: "travel", theme: { zh: "回程接駁與長途返台", en: "Connection day and the long flight home" }, title: { zh: "回程返台", en: "Return to Taipei" }, status: "confirmed", must: ["Novotel Paris Charles-de-Gaulle Airport → CDG Terminal 2E", "Air France Business Standard｜CDG 12:50 → MAN 13:25", "BA 1371｜MAN 18:10 → LHR 19:15", "CI 0082｜LHR 21:10 → TPE 18:05(+1)"], optional: ["巴黎上午只排簡單移動"], tickets: ["AF 歐洲段：約 EUR 354.05 / NT$12,930"], notes: ["這一天以順利銜接航段為主。從機場飯店接進 2E 航廈後，就把體力留給巴黎到曼徹斯特、再接希斯洛返台的長路。"] }
  ],
  attractionCosts: [
    { status: "confirmed", day: "6/30", attraction: "Frankfurt Card / Frankfurt Zoo", fee: "EUR 6-13", estimate: "約 NT$225-488 / GBP 5-11 / EUR 6-13 / US$7-14", note: { zh: "如果想跑到動物園，先看學生票能不能用；Frankfurt Card 也能折一些交通和門票。", en: "If you want the zoo stop, check whether the student ticket works; the Frankfurt Card can also help with transport and admission." }, source: "https://frankfurt.de/english/discover-and-experience/frankfurt-card" },
    { status: "confirmed", day: "7/4", attraction: "Big Ben / Buckingham Palace / St James's Park", fee: "Free", estimate: "NT$0 / GBP 0 / US$0", note: { zh: "這三個點適合排成第一天的西敏散步。", en: "These three work well as a Westminster walk on the first London day." }, source: "https://www.visitlondon.com/" },
    { status: "confirmed", day: "7/5", attraction: "Harrods / Bond Street", fee: "Free entry", estimate: "NT$0 / GBP 0 / US$0", note: { zh: "精品街與百貨入店免費，主要成本會落在購物本身。", en: "Department stores and shopping streets are free to enter; the cost depends on actual purchases." }, source: "https://www.harrods.com/" },
    { status: "confirmed", day: "7/6", attraction: "Covent Garden / Piccadilly Circus", fee: "Free", estimate: "NT$0 / GBP 0 / US$0", note: { zh: "以街區散步與自由活動為主。", en: "This day is built around walking the area and keeping time flexible." }, source: "https://www.visitlondon.com/" },
    { status: "pending", day: "7/7", attraction: "Eurostar", fee: { zh: "這段還沒買", en: "Not booked yet" }, estimate: { zh: "先把到站時間抓寬", en: "Leave extra time at St Pancras" }, note: { zh: "車程約 2 小時 20 分。這段先當成火車加過關，St Pancras 提早 75–90 分鐘到比較安心。", en: "About 2h20. Treat it like a train plus border control, and aim to reach St Pancras 75-90 minutes early." }, source: "https://www.eurostar.com/" },
    { status: "optional", day: "7/7", attraction: "Eiffel Tower", fee: { zh: "想上塔再另外買", en: "Only if you want to go up" }, estimate: { zh: "先看當天體力和時段", en: "Check the timing and your energy first" }, note: { zh: "如果只想看夜景，在塔下和 Trocadéro 其實就很夠。", en: "If the point is the night view, the tower base and Trocadéro may already be enough." }, source: "https://www.toureiffel.paris/en" },
    { status: "optional", day: "7/8", attraction: "Louvre Museum", fee: { zh: "要去再訂票", en: "Book only if you are going" }, estimate: { zh: "以官網時段和票價為準", en: "Use the official timeslots and pricing" }, note: { zh: "羅浮宮比較適合先訂時段，不然現場容易拖很久。", en: "The Louvre is better with a timeslot booked ahead; otherwise the line can eat up too much time." }, source: "https://www.louvre.fr/en" },
    { status: "confirmed", day: "7/9", attraction: "Champs-Elysees / Arc de Triomphe", fee: "Depends", estimate: "依實際安排 / Depends / Depends", note: { zh: "香榭麗舍大道散步免費，若上凱旋門再另外查票。", en: "Walking the Champs-Elysees is free; check separately if you want Arc entry." }, source: "https://www.paris-arc-de-triomphe.fr/en/" },
    { status: "optional", day: "7/10", attraction: "Seine river cruise", fee: { zh: "有空再加", en: "Only if time still feels open" }, estimate: { zh: "票價看公司和時段", en: "Price depends on operator and time" }, note: { zh: "這段不一定要先訂。如果 7/9 晚上已經走過塞納河，就不必再硬加。", en: "You do not have to book this in advance. If you already walked the Seine on 9 July, there is no need to force it in again." }, source: "https://www.bateauxparisiens.com/en.html" }
  ],
  mapRouteUrl: "https://www.google.com/maps/dir/Frankfurt+Airport+Regionalbahnhof/Frankfurt+Hauptwache/R%C3%B6merberg+Frankfurt/Eiserner+Steg+Frankfurt/Frankfurt+Cathedral/Frankfurt+Zoo/Frankfurt+Airport+Regionalbahnhof/Manchester+Airport/INNSiDE+Manchester/Manchester+Piccadilly/London+Euston/Big+Ben/Harrods/Covent+Garden/Piccadilly+Circus/London+St+Pancras+International/Gare+du+Nord/Pullman+Paris+Tour+Eiffel/Eiffel+Tower/Louvre+Museum/Place+Vendome+Paris/Galeries+Lafayette+Haussmann/Avenue+Montaigne+Paris/Arc+de+Triomphe/Sacre-Coeur+Paris/Novotel+Paris+Charles-de-Gaulle+Airport/Charles+de+Gaulle+Airport+Terminal+2E/Manchester+Airport",
  mapLocations: [
    { status: "confirmed", city: "Frankfurt", title: { zh: "Frankfurt Airport Regionalbahnhof", en: "Frankfurt Airport Regionalbahnhof" }, query: "Frankfurt Airport Regionalbahnhof", note: { zh: "法蘭克福進城和回機場都會用到的 S-Bahn 站。", en: "The S-Bahn station for both the city stop and the airport return." } },
    { status: "confirmed", city: "Frankfurt", title: { zh: "Hauptwache", en: "Hauptwache" }, query: "Frankfurt Hauptwache", note: { zh: "S8 / S9 進城後最順的下車點。", en: "The cleanest stop to start the short city walk from the airport." } },
    { status: "confirmed", city: "Frankfurt", title: { zh: "Römerberg", en: "Römerberg" }, query: "Römerberg Frankfurt", note: { zh: "老城主廣場，可先走旅客服務中心、正義女神和舊市政廳。", en: "The old-town square, with the visitor centre, Justice Fountain, and the old town hall." } },
    { status: "confirmed", city: "Frankfurt", title: { zh: "Eiserner Steg", en: "Eiserner Steg" }, query: "Eiserner Steg Frankfurt", note: { zh: "接到美因河最順，也很適合只走短版時停一下。", en: "An easy bridge stop for the river section, especially if the walk stays short." } },
    { status: "confirmed", city: "Frankfurt", title: { zh: "Frankfurt Cathedral", en: "Frankfurt Cathedral" }, query: "Frankfurt Cathedral", note: { zh: "老城一圈走到這裡差不多就夠了。", en: "A good natural turn point if you want to keep the old-town loop compact." } },
    { status: "confirmed", city: "Frankfurt", title: { zh: "Frankfurt Zoo", en: "Frankfurt Zoo" }, query: "Frankfurt Zoo", note: { zh: "如果想把長轉機走得更完整，動物園是可選加碼。", en: "An optional extra if you want to make fuller use of the long layover." } },
    { status: "confirmed", city: "Manchester", title: { zh: "Manchester Airport", en: "Manchester Airport" }, query: "Manchester Airport", note: { zh: "抵達與回程都會經過的城市門口。", en: "The city gateway for both arrival and departure." } },
    { status: "confirmed", city: "Manchester", title: { zh: "INNSiDE Manchester", en: "INNSiDE Manchester" }, query: "INNSiDE Manchester 1 First Street Manchester", note: { zh: "會議期間的住宿基地，靠近 First Street 與市中心。", en: "The conference stay base near First Street and the city centre." } },
    { status: "confirmed", city: "Manchester", title: { zh: "Alliance Manchester Business School", en: "Alliance Manchester Business School" }, query: "Alliance Manchester Business School Booth Street West Manchester", note: { zh: "7/1 Competitive 發表所在的 AMBS。從 INNSiDE 走路就能到。", en: "The AMBS venue for the 1 July Competitive session. It is walkable from INNSiDE." } },
    { status: "confirmed", city: "Manchester", title: { zh: "University Place", en: "University Place" }, query: "University Place Oxford Road Manchester", note: { zh: "7/3 Interactive 發表所在的 UP。從 INNSiDE 直接步行即可。", en: "The UP venue for the 3 July Interactive session. It is also a direct walk from INNSiDE." } },
    { status: "book", city: "Manchester", title: { zh: "Manchester Piccadilly", en: "Manchester Piccadilly" }, query: "Manchester Piccadilly Station", note: { zh: "7/4 前往 London Euston 的起點。", en: "The starting point for the 4 July train to London Euston." } },
    { status: "book", city: "London", title: { zh: "London Euston", en: "London Euston" }, query: "London Euston Station", note: { zh: "從曼徹斯特抵達倫敦的主要車站。", en: "The main London arrival station from Manchester." } },
    { status: "confirmed", city: "London", title: { zh: "Big Ben / Westminster", en: "Big Ben / Westminster" }, query: "Big Ben London", note: { zh: "適合放在抵達倫敦後的第一段散步。", en: "A good first stop after arriving in London." } },
    { status: "confirmed", city: "London", title: { zh: "Westminster Abbey", en: "Westminster Abbey" }, query: "Westminster Abbey London", note: { zh: "和 Big Ben、西敏橋排成同一圈最順。", en: "Works best on the same Westminster loop as Big Ben and the bridge." } },
    { status: "confirmed", city: "London", title: { zh: "London Eye", en: "London Eye" }, query: "London Eye", note: { zh: "第一晚如果只留一段河岸夜景，放這裡就夠。", en: "If you only keep one riverside night view on the first evening, this is enough." } },
    { status: "confirmed", city: "London", title: { zh: "Buckingham Palace", en: "Buckingham Palace" }, query: "Buckingham Palace", note: { zh: "7/5 上午先看外觀，時間對得上再看衛兵交接。", en: "Use it for the 5 July morning and only stay for the guard change if timing really fits." } },
    { status: "confirmed", city: "London", title: { zh: "St. James's Park", en: "St. James's Park" }, query: "St James's Park London", note: { zh: "白金漢宮旁邊的公園，接 Covent Garden 很順。", en: "The park beside Buckingham Palace and a natural bridge toward Covent Garden." } },
    { status: "confirmed", city: "London", title: { zh: "Harrods", en: "Harrods" }, query: "Harrods London", note: { zh: "Day 2 的購物主點。", en: "The main shopping stop for Day 2." } },
    { status: "confirmed", city: "London", title: { zh: "Bond Street", en: "Bond Street" }, query: "Bond Street London", note: { zh: "Chanel、Dior、LV、YSL 可集中看。", en: "A compact area for Chanel, Dior, Louis Vuitton, and YSL." } },
    { status: "confirmed", city: "London", title: { zh: "Covent Garden", en: "Covent Garden" }, query: "Covent Garden London", note: { zh: "倫敦 Day 3 的第一站。", en: "The first stop on London Day 3." } },
    { status: "confirmed", city: "London", title: { zh: "Piccadilly Circus", en: "Piccadilly Circus" }, query: "Piccadilly Circus London", note: { zh: "Covent Garden 後接續最順。", en: "Pairs naturally after Covent Garden." } },
    { status: "confirmed", city: "London", title: { zh: "Selfridges", en: "Selfridges" }, query: "Selfridges London", note: { zh: "Bond Street 後如果想接百貨，這裡最順。", en: "The easiest department-store stop to pair after Bond Street." } },
    { status: "book", city: "London", title: { zh: "St Pancras International", en: "St Pancras International" }, query: "St Pancras International", note: { zh: "7/7 Eurostar 前往巴黎的起點。", en: "The 7 July Eurostar departure point to Paris." } },
    { status: "confirmed", city: "Paris", title: { zh: "Pullman Paris Tour Eiffel", en: "Pullman Paris Tour Eiffel" }, query: "Pullman Paris Tour Eiffel", note: { zh: "巴黎最後三晚住這裡，重點是陽台看鐵塔。", en: "The main stay for the last three Paris nights, centered on the balcony tower view." } },
    { status: "confirmed", city: "Paris", title: { zh: "Eiffel Tower", en: "Eiffel Tower" }, query: "Eiffel Tower", note: { zh: "抵達巴黎後的第一個城市重點。", en: "The first big Paris stop after arrival." } },
    { status: "confirmed", city: "Paris", title: { zh: "Trocadéro", en: "Trocadéro" }, query: "Trocadero Paris", note: { zh: "第一晚拍鐵塔很順，也適合晚上回頭再看一次。", en: "A strong first-night tower photo point, and easy to return to later." } },
    { status: "confirmed", city: "Paris", title: { zh: "Louvre Museum", en: "Louvre Museum" }, query: "Louvre Museum", note: { zh: "巴黎 Day 2 的主要行程。", en: "The anchor stop for Paris Day 2." } },
    { status: "confirmed", city: "Paris", title: { zh: "Tuileries Garden", en: "Tuileries Garden" }, query: "Tuileries Garden Paris", note: { zh: "羅浮宮後先走這裡，再接協和廣場很順。", en: "A natural bridge after the Louvre before heading toward Concorde." } },
    { status: "confirmed", city: "Paris", title: { zh: "Place de la Concorde", en: "Place de la Concorde" }, query: "Place de la Concorde Paris", note: { zh: "右岸和塞納河這段的中繼點。", en: "A useful midpoint between the Right Bank and the river." } },
    { status: "confirmed", city: "Paris", title: { zh: "Place Vendôme", en: "Place Vendôme" }, query: "Place Vendôme Paris", note: { zh: "羅浮宮之後很適合接進右岸街景。", en: "A graceful Right Bank stop after the Louvre." } },
    { status: "confirmed", city: "Paris", title: { zh: "Avenue Montaigne", en: "Avenue Montaigne" }, query: "Avenue Montaigne Paris", note: { zh: "巴黎精品街主段。", en: "The core luxury-shopping avenue in Paris." } },
    { status: "confirmed", city: "Paris", title: { zh: "Champs-Elysees / Arc de Triomphe", en: "Champs-Elysees / Arc de Triomphe" }, query: "Arc de Triomphe Paris", note: { zh: "巴黎 Day 3 的主景與購物段。", en: "The main Paris Day 3 landmark and shopping corridor." } },
    { status: "confirmed", city: "Paris", title: { zh: "Galeries Lafayette Haussmann", en: "Galeries Lafayette Haussmann" }, query: "Galeries Lafayette Haussmann", note: { zh: "巴黎最後一日的採買點。", en: "A strong final shopping stop in Paris." } },
    { status: "confirmed", city: "Paris", title: { zh: "Saint-Germain-des-Prés", en: "Saint-Germain-des-Prés" }, query: "Saint-Germain-des-Prés Paris", note: { zh: "羅浮宮和塞納河後，可以慢慢接過來。", en: "A softer district to move into after the Louvre and the Seine." } },
    { status: "confirmed", city: "Paris", title: { zh: "Sacré-Cœur / Montmartre", en: "Sacré-Cœur / Montmartre" }, query: "Sacré-Cœur Paris", note: { zh: "巴黎最後一天的晨間散步。", en: "The morning walk for the last Paris day." } },
    { status: "confirmed", city: "Paris", title: { zh: "Seine", en: "Seine" }, query: "Seine River Paris", note: { zh: "可接塞納河遊船。", en: "Easy to pair with a Seine cruise." } },
    { status: "confirmed", city: "Paris", title: { zh: "Novotel Paris Charles-de-Gaulle Airport", en: "Novotel Paris Charles-de-Gaulle Airport" }, query: "Novotel Paris Charles-de-Gaulle Airport", note: { zh: "7/10–7/11 的機場過夜，隔天接法航比較從容。", en: "The airport overnight stay on 10-11 July, making the Air France departure easier." } },
    { status: "confirmed", city: "Paris", title: { zh: "CDG Terminal 2E", en: "CDG Terminal 2E" }, query: "Charles de Gaulle Airport Terminal 2E", note: { zh: "7/11 Air France Business Standard 的出發點。", en: "The departure terminal for the 11 July Air France Business Standard flight." } },
  ],
  mapRoutes: [
    { status: "confirmed", label: { zh: "6/30 法蘭克福轉機散步", en: "30 Jun Frankfurt layover route" }, note: { zh: "FRA Regionalbahnhof → Hauptwache → Römerberg → 鐵橋 → 法蘭克福大教堂 → Frankfurt Zoo → 機場。", en: "FRA Regionalbahnhof → Hauptwache → Römerberg → Eiserner Steg → Frankfurt Cathedral → Frankfurt Zoo → airport." }, url: "https://www.google.com/maps/dir/Frankfurt+Airport+Regionalbahnhof/Frankfurt+Hauptwache/R%C3%B6merberg+Frankfurt/Eiserner+Steg+Frankfurt/Frankfurt+Cathedral/Frankfurt+Zoo/Frankfurt+Airport+Regionalbahnhof" },
    { status: "confirmed", label: { zh: "6/30 抵達曼徹斯特", en: "30 Jun Manchester arrival" }, note: { zh: "曼徹斯特機場 → INNSiDE Manchester", en: "MAN Airport → INNSiDE Manchester" }, url: "https://www.google.com/maps/dir/Manchester+Airport/INNSiDE+Manchester+1+First+Street+Manchester" },
    { status: "confirmed", label: { zh: "7/1 INNSiDE → AMBS", en: "1 Jul INNSiDE → AMBS" }, note: { zh: "從 INNSiDE Manchester 走去 Alliance Manchester Business School，大約 12–15 分鐘。第一次走的話，抓 20 分鐘比較穩。", en: "Walk from INNSiDE Manchester to Alliance Manchester Business School in about 12-15 minutes. If it is your first time, give yourself closer to 20 minutes." }, url: "https://www.google.com/maps/dir/INNSiDE+Manchester+1+First+Street+Manchester/Alliance+Manchester+Business+School+Booth+Street+West+Manchester" },
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
  home: [["overview", { zh: "總覽", en: "Overview" }], ["snapshot", { zh: "時間軸", en: "Timeline" }], ["highlights", { zh: "巴黎", en: "Paris" }], ["days", { zh: "每天", en: "Days" }], ["info", { zh: "資訊", en: "Info" }]],
  conference: [["accepted", { zh: "會議狀態", en: "Status" }], ["papers", { zh: "論文", en: "Papers" }], ["alerts", { zh: "提醒", en: "Notes" }], ["route", { zh: "路線", en: "Route" }], ["checklist", { zh: "文件", en: "Documents" }]],
  flights: [["overview", { zh: "航班總覽", en: "Overview" }], ["segments", { zh: "航段", en: "Segments" }], ["transfer", { zh: "轉機", en: "Transfers" }], ["notes", { zh: "票務備註", en: "Notes" }]],
  transport: [["flights", { zh: "航班", en: "Flights" }], ["transfer", { zh: "轉機", en: "Transfers" }], ["train", { zh: "火車", en: "Train" }], ["airport", { zh: "機場", en: "Airport" }], ["local", { zh: "市內交通", en: "Local transit" }]],
  stay: [["overview", { zh: "住宿總覽", en: "Overview" }], ["manchester", { zh: "曼徹斯特", en: "Manchester" }], ["london", { zh: "倫敦住宿", en: "London stay" }], ["paris", { zh: "巴黎住宿", en: "Paris stay" }], ["cdg", { zh: "機場過夜", en: "Airport stay" }], ["next", { zh: "下一步", en: "Next steps" }]],
  itinerary: [["timeline", { zh: "時間軸", en: "Timeline" }], ["paris-must-do", { zh: "巴黎必去", en: "Paris must-do" }], ["tickets", { zh: "景點費用", en: "Admission" }], ["return", { zh: "回程提醒", en: "Return" }]],
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
    note: { zh: "先在法蘭克福轉一下。老城、美因河和動物園看體力選，不要排太滿。", en: "Use Frankfurt as a light layover stop. Start with the old town, then add the river or zoo only if energy still feels good." }
  },
  {
    date: "06/30–07/03",
    title: { zh: "Manchester", en: "Manchester" },
    note: { zh: "AIB 2026 這幾天放在這裡。兩場發表都已確認，前後不要再塞遠的景點。", en: "The AIB 2026 conference days stay here, with both presentations confirmed and the surrounding days kept clear." }
  },
  {
    date: "07/04–07/06",
    title: { zh: "London", en: "London" },
    note: { zh: "西敏先看，後面再留時間給百貨、精品街和街區散步。", en: "Start with Westminster, then leave time for department stores, shopping streets, and slower neighbourhood walks." }
  },
  {
    date: "07/07–07/10",
    title: { zh: "Paris", en: "Paris" },
    note: { zh: "巴黎不要排成打卡清單。鐵塔、右岸、羅浮宮和 Pullman 分開看就好。", en: "Do not turn Paris into a checklist. Let the tower, the Right Bank, the Louvre, and Pullman stay as separate parts of the trip." }
  },
  {
    date: "07/11–07/12",
    title: { zh: "Return", en: "Return" },
    note: { zh: "從巴黎接回曼徹斯特與希斯洛，再一路返台。", en: "From Paris back through Manchester and Heathrow, then home." }
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
      zh: "第一晚只留給鐵塔就好。先去河邊或 Trocadéro 看燈亮，之後回 Pullman 就行。",
      en: "The first Paris evening is best left to the tower. Watch the lights come on from the riverbank or the square, then let the balcony view give the night a quieter second peak."
    }
  },
  {
    area: { zh: "7/8 上午", en: "8 Jul morning" },
    title: { zh: "羅浮宮", en: "The Louvre" },
    tags: [{ zh: "藝術", en: "Art" }, { zh: "經典", en: "Classic" }],
    body: {
      zh: "羅浮宮放早上最順。挑幾個最想看的館別，不用硬走完全部。",
      en: "The Louvre fits best in the clearest part of the day. Choose a few rooms you really care about and let the Right Bank streets carry the museum mood outward."
    }
  },
  {
    area: { zh: "7/8 下午", en: "8 Jul afternoon" },
    title: { zh: "老佛爺百貨頂樓", en: "Galeries Lafayette rooftop" },
    tags: [{ zh: "視角", en: "View" }, { zh: "拍照", en: "Photos" }],
    body: {
      zh: "老佛爺頂樓接在右岸這天後面就好。上去看一下屋頂和歌劇院一帶，拍幾張照就夠。",
      en: "The rooftop is a strong high-point for the Right Bank day. It gives the Opéra district and the Paris rooftops a layered view that photographs beautifully."
    }
  },
  {
    area: { zh: "7/9 上午", en: "9 Jul morning" },
    title: { zh: "Avenue Montaigne 精品街", en: "Avenue Montaigne" },
    tags: [{ zh: "精品", en: "Luxury" }, { zh: "街景", en: "Street" }],
    body: {
      zh: "如果只留一段精品街時間，Avenue Montaigne 就很夠了。這裡比較適合慢慢走。",
      en: "If Paris gets one polished luxury stretch, this is the one. The avenue feels calmer than a rushed shopping sprint and rewards a slower walk."
    }
  },
  {
    area: { zh: "7/9 白天", en: "9 Jul daytime" },
    title: { zh: "香榭麗舍大道", en: "Champs-Elysees" },
    tags: [{ zh: "大道", en: "Boulevard" }, { zh: "散步", en: "Walk" }],
    body: {
      zh: "香榭麗舍不用急著走完。沿路停一下、看一下街景，比硬趕完整條更好。",
      en: "The Champs-Elysees works best as a paced walk rather than a rush. A pause for coffee or lunch nearby makes the boulevard feel far more generous."
    }
  },
  {
    area: { zh: "7/9 下午", en: "9 Jul afternoon" },
    title: { zh: "凱旋門", en: "Arc de Triomphe" },
    tags: [{ zh: "地標", en: "Landmark" }, { zh: "主景", en: "Signature" }],
    body: {
      zh: "凱旋門接在香榭麗舍後面最順。一路走過去就好，不用另外拆成大行程。",
      en: "The Arc works well when the light is still clear and the avenue leads directly into it. Up close, it carries the city’s grand and ceremonial side very clearly."
    }
  },
  {
    area: { zh: "7/8 或 7/9", en: "8 or 9 Jul" },
    title: { zh: "Place Vendôme", en: "Place Vendôme" },
    tags: [{ zh: "珠寶", en: "Jewelry" }, { zh: "街角", en: "Corner" }],
    body: {
      zh: "Place Vendôme 不用待很久，但值得順路繞一下。剛好可以接在羅浮宮和右岸中間。",
      en: "Place Vendôme does not need much time, but it is worth the detour. Its quiet polish adds a distinctly Parisian pause between museums and boutiques."
    }
  },
  {
    area: { zh: "7/9 夜晚", en: "9 Jul evening" },
    title: { zh: "塞納河夜景", en: "Seine at night" },
    tags: [{ zh: "夜景", en: "Night view" }, { zh: "散步", en: "Walk" }],
    body: {
      zh: "白天走完大道和精品街後，晚上去塞納河邊走一小段就好。這樣剛好。",
      en: "If the day has been polished and bright, the Seine softens everything at night. Even a short walk here is enough to slow the city back down."
    }
  },
  {
    area: { zh: "7/10 上午", en: "10 Jul morning" },
    title: { zh: "聖心堂", en: "Sacré-Cœur" },
    tags: [{ zh: "高處", en: "Hilltop" }, { zh: "晨間", en: "Morning" }],
    body: {
      zh: "聖心堂放在最後一個早上最順。趁人還沒那麼多時先去，再接蒙馬特。",
      en: "Sacré-Cœur suits the final Paris morning, before the city fully speeds up. The steps, the height, and the nearby lanes give the day a lighter beginning."
    }
  },
  {
    area: { zh: "7/7–7/10 夜晚", en: "7-10 Jul nights" },
    title: { zh: "Pullman 陽台看鐵塔", en: "The Pullman balcony tower view" },
    tags: [{ zh: "住宿", en: "Stay" }, { zh: "夜晚", en: "Night" }],
    body: {
      zh: "Pullman 這幾晚的重點就是陽台。如果房間看得到鐵塔，晚上就回房間看燈亮起來。",
      en: "The high-floor balcony room turns Pullman into more than just a hotel. Coming back at night to a quiet tower view gives the Paris chapter a very complete finish."
    }
  }
];

const dailyGuides = [
  {
    id: "day-1",
    day: "Day 1",
    date: "6/29-6/30",
    city: { zh: "Taipei → Frankfurt → Manchester", en: "Taipei → Frankfurt → Manchester" },
    theme: { zh: "長程飛行、法蘭克福老城與動物園轉機線", en: "Long-haul travel, the Frankfurt old town, and the zoo layover route" },
    intro: { zh: "第一天先把飛行和轉機走順。法蘭克福這段可以照著老城線走一圈；如果體力普通，就留在羅馬廣場和美因河附近，不必硬跑滿。動物園是加碼，當天看時間再決定。", en: "The first day is about keeping the flight and transfer clean. Frankfurt can hold a proper old-town walk if energy is still there, while the zoo stays optional and only fits if the layover still feels easy." },
    highlights: ["CI 0061", "S8 / S9", "Römerberg", "Frankfurt Zoo", "LH 0946", "INNSiDE Manchester"],
    route: [
      { label: { zh: "上午｜先把機場段接好", en: "Morning" }, text: { zh: "清晨到法蘭克福後先確認 LH 0946，再從 T3 轉去 T1，搭 S8 / S9 進 Hauptwache。", en: "After landing in Frankfurt, confirm LH 0946, transfer from T3 to T1, and use S8 or S9 into Hauptwache." } },
      { label: { zh: "中午｜老城到美因河", en: "Noon" }, text: { zh: "先走羅馬廣場、正義女神、舊市政廳和老聖尼古拉堂，再接鐵橋和大教堂。午餐如果想坐一下，就留給 MainNizza。", en: "Start with Römerberg, the Justice Fountain, the old town hall, and St Nicholas Church, then continue to the Iron Bridge and the cathedral. MainNizza works well if you want a seated lunch." } },
      { label: { zh: "下午｜回 T1 等 Lufthansa", en: "Afternoon" }, text: { zh: "如果有跑到動物園，最晚大約 13:30 回到 T1 比較安心。之後就休息、吃點東西，等 16:20 的 Lufthansa。", en: "If the zoo stays in the plan, being back at T1 around 13:30 keeps the afternoon comfortable before the 16:20 Lufthansa departure." } },
      { label: { zh: "夜晚｜今晚落腳", en: "Evening" }, text: { zh: "到曼徹斯特後先入住、吃點東西，第一晚不要再加行程。", en: "Arrive in Manchester, check in, eat something simple, and keep the evening light." } }
    ],
    notes: ["法蘭克福這段不用硬跑滿。老城短版和動物園版都可以，當天看體力再決定。", "如果要照 PPT 路線跑到 Zoo，回程可走 U7 到 Konstablerwache，再轉 S8 / S9 回機場。", "重要文件、登機證和離線票券先放在同一個地方。T3 轉 T1 這段也先留一點彈性。"],
    tickets: ["法蘭克福老城散步免費；動物園學生票 6 歐、Frankfurt Card 折後約 10 歐；午餐依現場消費。"]
  },
  {
    id: "day-2",
    day: "Day 2",
    date: "7/1",
    city: { zh: "Manchester", en: "Manchester" },
    theme: { zh: "會議這幾天開始", en: "The conference days begin here" },
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
    highlights: ["Interactive session", "09:30-10:45", "Room 2.217 (UP)", "conference close"],
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
    theme: { zh: "先把曼徹斯特和倫敦接順，再走西敏這一圈", en: "Connect Manchester into London cleanly, then keep to Westminster" },
    intro: { zh: "今天先從曼徹斯特進倫敦。先住進 Riu Plaza London The Westminster，再走西敏這一圈就好：大笨鐘、西敏寺外觀、國會大廈、西敏橋，最後接 London Eye 河岸。", en: "Move from Manchester into London first. Check into Riu Plaza London The Westminster, then keep the first evening to Westminster: Big Ben, the Abbey exterior, Parliament, Westminster Bridge, and the riverside by the London Eye." },
    highlights: ["Avanti West Coast", "London Euston", "Big Ben", "Westminster Abbey", "London Eye"],
    route: [
      { label: { zh: "上午｜離開曼徹斯特", en: "Morning" }, text: { zh: "早上從 Manchester Piccadilly 出發，先把火車這段走順。", en: "Leave from Manchester Piccadilly and settle into the rail move south." } },
      { label: { zh: "中午｜火車南下", en: "Noon" }, text: { zh: "Avanti 大約 2 小時 10 分，剛好拿來換城市。", en: "The Avanti ride takes about 2h10 and cleanly shifts the trip from conference mode into travel mode." } },
      { label: { zh: "下午｜先入住，再走 Westminster", en: "Afternoon" }, text: { zh: "抵達後先把行李放進 Riu，再走 Big Ben、西敏寺外觀、國會大廈和西敏橋。", en: "Drop the bags at Riu first, then keep to Westminster: Big Ben, the Abbey exterior, Parliament, and Westminster Bridge." } },
      { label: { zh: "夜晚｜Covent Garden 或 Soho", en: "Evening" }, text: { zh: "晚上找 Covent Garden 或 Soho 吃飯就好，第一晚不要再排太多。", en: "Dinner in Covent Garden or Soho is enough for the first London night; there is no need to force in more." } }
    ],
    notes: ["今天先把火車、入住和西敏這段接好就行。", "Riu 住在 Westminster 這側，後面幾天往市中心走都方便。"],
    tickets: ["Avanti 票價會依班次而變，建議先看 Advance。"]
  },
  {
    id: "day-6",
    day: "Day 6",
    date: "7/5",
    city: { zh: "London", en: "London" },
    theme: { zh: "白金漢宮、公園、Covent Garden 和 Harrods", en: "Buckingham Palace, the parks, Covent Garden, and Harrods" },
    intro: { zh: "今天從白金漢宮開始，先走 St. James's Park 和 Green Park，再把 Covent Garden、Leicester Square、Piccadilly Circus 和 Harrods 接在一起。", en: "Start with Buckingham Palace, then let the parks ease into Covent Garden, Leicester Square, Piccadilly Circus, and Harrods." },
    highlights: ["Buckingham Palace", "St. James's Park", "Covent Garden", "Harrods"],
    route: [
      { label: { zh: "上午｜先看白金漢宮", en: "Morning" }, text: { zh: "白金漢宮先看外觀，時間對得上再看衛兵交接。", en: "Start with Buckingham Palace from the outside, and only stay for the guard change if the timing really fits." } },
      { label: { zh: "中午｜公園和 Covent Garden", en: "Noon" }, text: { zh: "St. James's Park 和 Green Park 先慢慢走，再接 Covent Garden 吃飯或喝茶。", en: "Walk St. James’s Park and Green Park slowly, then move toward Covent Garden for lunch or tea." } },
      { label: { zh: "下午｜Leicester、Piccadilly、Regent", en: "Afternoon" }, text: { zh: "Covent Garden 之後順著 Leicester Square、Piccadilly Circus 和 Regent Street 往下走。", en: "From Covent Garden, let the route run naturally through Leicester Square, Piccadilly Circus, and Regent Street." } },
      { label: { zh: "夜晚｜Harrods 與晚餐", en: "Evening" }, text: { zh: "傍晚再去 Harrods。晚餐就近找 Knightsbridge 或 South Kensington。", en: "Keep Harrods for the late afternoon and stay nearby for dinner in Knightsbridge or South Kensington." } }
    ],
    notes: ["白金漢宮、公園和 Covent Garden 放同一天最順。", "Harrods 留傍晚最剛好，前面就不要再插太遠的地方。"],
    tickets: ["街區和百貨本身免費，花費取決於實際購物。"]
  },
  {
    id: "day-7",
    day: "Day 7",
    date: "7/6",
    city: { zh: "London", en: "London" },
    theme: { zh: "Bond Street、Mayfair、Soho 放同一天", en: "Bond Street, Mayfair, and Soho in one day" },
    intro: { zh: "這天就走 Bond Street、Mayfair、Oxford / Regent Street 和 Soho 這條線。想逛精品就多留一點時間在 New Bond Street 和 Mount Street；想多逛百貨，就往 Selfridges 接過去。", en: "Use one line for this day: Bond Street, Mayfair, Oxford or Regent Street, then Soho. Spend more time in New Bond Street and Mount Street if shopping is the point; shift toward Selfridges if you want department stores instead." },
    highlights: ["New Bond Street", "Selfridges", "Mayfair", "Soho / Chinatown"],
    route: [
      { label: { zh: "上午｜Bond Street", en: "Morning" }, text: { zh: "上午先走 New Bond Street 和 Old Bond Street，精品比較集中。", en: "Begin with New Bond Street and Old Bond Street, where the luxury stretch is most concentrated." } },
      { label: { zh: "中午｜Selfridges / Oxford", en: "Noon" }, text: { zh: "中午前後如果想逛百貨，就接到 Selfridges、Oxford Street。", en: "Around midday, move toward Selfridges and Oxford Street if you want a department-store run." } },
      { label: { zh: "下午｜Mayfair / Regent", en: "Afternoon" }, text: { zh: "Mayfair、Mount Street、Regent Street 這段就看想逛多深，不用每一條都走完。", en: "Use the afternoon for Mayfair, Mount Street, and Regent Street without feeling the need to finish every block." } },
      { label: { zh: "夜晚｜Soho / Chinatown", en: "Evening" }, text: { zh: "晚上就往 Soho 或 Chinatown 收，想看劇的話也可以把 West End 放進來。", en: "End in Soho or Chinatown, and keep West End in mind only if a show still fits the energy of the day." } }
    ],
    notes: ["Bond Street、Mayfair、Soho 放同一天最順。", "隔天要搭 Eurostar，今晚不要玩太晚。"],
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
      { label: { zh: "上午｜從 Westminster 收好出發", en: "Morning" }, text: { zh: "早上只留給咖啡和最後採買。從 Riu 去 St Pancras 不算遠，但還是先抓好出門時間。", en: "Keep the morning to coffee and any last shopping. Riu is manageable to St Pancras, but still leave enough time to move." } },
      { label: { zh: "中午｜Eurostar", en: "Noon" }, text: { zh: "Eurostar 這段不要抓太緊。提早 75–90 分鐘到 St Pancras，先過安檢和護照檢查，再等上車。", en: "Do not cut Eurostar too close. Reach St Pancras 75-90 minutes early, clear security and passport control, then wait for boarding." } },
      { label: { zh: "下午｜巴黎北站到 Pullman", en: "Afternoon" }, text: { zh: "到巴黎北站後，如果帶著行李，直接叫車去 Pullman 最省力。想省一點再轉地鐵或 RER。", en: "Once at Gare du Nord, a taxi or ride-hailing car is the easiest way to Pullman with luggage. Use Metro or RER only if you want the cheaper option." } },
      { label: { zh: "夜晚｜巴黎第一晚", en: "Evening" }, text: { zh: "晚上把鐵塔、Trocadéro 和陽台留給第一晚就好。", en: "Give the first Paris night only to the tower, Trocadéro, and the Pullman balcony." } }
    ],
    notes: ["巴黎第一晚不要排太滿，鐵塔和 Pullman 就夠了。", "如果房間真的看得到鐵塔，晚上就不用再一直往外跑。"],
    tickets: ["Eurostar 這段還沒買；St Pancras 建議提早 75–90 分鐘到站。"]
  },
  {
    id: "day-9",
    day: "Day 9",
    date: "7/8",
    city: { zh: "Paris", en: "Paris" },
    theme: { zh: "羅浮宮、塞納河與右岸延伸", en: "The Louvre, the Seine, and a longer Right Bank line" },
    intro: { zh: "羅浮宮和塞納河可以放同一天，晚上再回鐵塔附近。Place Vendôme、老佛爺頂樓和歌劇院周邊就順著右岸一起走，不用拆太碎。", en: "The Louvre and the Seine sit well together. Place Vendôme, the Galeries Lafayette rooftop, and the Opéra area can stay in the same Right Bank stretch without breaking the day into tiny pieces." },
    highlights: ["Louvre Museum", "Tuileries Garden", "Place Vendôme", "Seine / Left Bank"],
    route: [
      { label: { zh: "上午｜羅浮宮", en: "Morning" }, text: { zh: "羅浮宮建議排上午，先看最想看的幾個館別就好，不用硬拚全部。", en: "Use the morning for the Louvre and keep the visit selective instead of trying to finish everything." } },
      { label: { zh: "中午｜杜樂麗到協和", en: "Noon" }, text: { zh: "從杜樂麗花園慢慢接到協和廣場，午餐找順路的地方就行。", en: "Let Tuileries and Place de la Concorde bridge the middle of the day, then stop wherever lunch feels easy." } },
      { label: { zh: "下午｜右岸延伸", en: "Afternoon" }, text: { zh: "下午再把 Place Vendôme、老佛爺頂樓和歌劇院周邊接起來。", en: "Use the afternoon to connect Place Vendôme, the Galeries Lafayette rooftop, and the Opéra streets." } },
      { label: { zh: "夜晚｜塞納河與左岸", en: "Evening" }, text: { zh: "傍晚接塞納河和 Saint-Germain，晚上再回鐵塔附近。", en: "Take the evening toward the Seine and Saint-Germain, then head back to the tower side later on." } }
    ],
    notes: ["羅浮宮和塞納河放同一天最順。", "右岸這段不用每個點都待很久，路線接起來就好。"],
    tickets: ["Louvre 門票請依官網時段確認；老佛爺頂樓免費。"]
  },
  {
    id: "day-10",
    day: "Day 10",
    date: "7/9",
    city: { zh: "Paris", en: "Paris" },
    theme: { zh: "Avenue Montaigne、香榭麗舍與凱旋門", en: "Avenue Montaigne, the Champs-Elysees, and the Arc" },
    intro: { zh: "Avenue Montaigne、香榭麗舍和凱旋門放同一天最順。不一定每一間都要逛，重點是把右岸這一段走順，最後再去凡登廣場和塞納河。", en: "Avenue Montaigne, the Champs-Elysees, and the Arc work best as one Right Bank line, with Place Vendôme and the Seine softening the evening." },
    highlights: ["Avenue Montaigne", "Champs-Elysees", "Arc de Triomphe", "Seine night view"],
    route: [
      { label: { zh: "上午｜凱旋門", en: "Morning" }, text: { zh: "上午先到凱旋門。想上去看市景的話，這段就多留一點時間。", en: "Start at the Arc. If you plan to go up, give this first stop a little extra time." } },
      { label: { zh: "中午｜香榭麗舍", en: "Noon" }, text: { zh: "中午沿著香榭麗舍慢慢走，找地方吃飯就好。", en: "Use midday for the Champs-Elysees and keep lunch simple somewhere along the boulevard." } },
      { label: { zh: "下午｜Avenue Montaigne / Place Vendôme", en: "Afternoon" }, text: { zh: "下午再接 Avenue Montaigne 和 Place Vendôme，這樣右岸這條線就完整了。", en: "Finish the Right Bank line by moving through Avenue Montaigne and Place Vendôme." } },
      { label: { zh: "夜晚｜塞納河", en: "Evening" }, text: { zh: "晚上去塞納河邊走一下，之後再回 Pullman。", en: "Use the evening for the Seine, then head back to Pullman." } }
    ],
    notes: ["這天就是右岸這條線，不用每段都待很久。", "如果晚餐後還有力氣，再回鐵塔附近看一次夜景也可以。"],
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
      { label: { zh: "上午｜聖心堂和蒙馬特", en: "Morning" }, text: { zh: "上午先走聖心堂、Place du Tertre 和 La Maison Rose，蒙馬特這段慢慢看就好。", en: "Keep the morning for Sacré-Cœur, Place du Tertre, and La Maison Rose, and let Montmartre stay slow." } },
      { label: { zh: "中午｜最後採買", en: "Noon" }, text: { zh: "中午回市區補最後的伴手禮，可以從老佛爺、Printemps 或 Le Bon Marché 裡選一個。", en: "Use midday for the last shopping and pick only one department-store stop instead of trying to cover them all." } },
      { label: { zh: "下午｜回 Pullman 拿行李", en: "Afternoon" }, text: { zh: "下午回 Pullman 拿寄放行李，這樣巴黎這段就差不多收好了。", en: "Go back to Pullman for the stored luggage and let that mark the proper end of the Paris chapter." } },
      { label: { zh: "夜晚｜前往 CDG", en: "Evening" }, text: { zh: "晚上從 Pullman 帶著行李直接叫車去 Novotel CDG 最省力；如果想省一點，再改搭 RER 進 Roissypole。", en: "With luggage, the easiest move from Pullman to Novotel CDG is a direct taxi or ride-hailing car. Use RER to Roissypole only if you want the cheaper option." } }
    ],
    notes: ["這天不要再加太多點，把巴黎這段收好就夠了。", "去 CDG 前先把隔天法航、英航和華航資料都離線存好。"],
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
    tags: [{ zh: "長途飛行", en: "Long-haul" }, { zh: "轉機", en: "Layover" }, { zh: "老城", en: "Old town" }, { zh: "動物園可選", en: "Zoo optional" }],
    kicker: { zh: "出發、轉機與法蘭克福老城", en: "Departure, the transfer, and a Frankfurt old-town stop" },
    title: { zh: "德英法旅程的出發日", en: "The departure day that opens the Germany-UK-France route" },
    note: { zh: "今天的重點很簡單：飛行、轉機、進城、再回機場都走順。法蘭克福這段能走多少算多少，不用硬撐。", en: "The point of the day is simple: fly, transfer, step into the city a little, then get back to the airport without forcing the schedule." },
    image: frankfurtOldTownImage,
    imageAlt: { zh: "法蘭克福老城與 Römerberg 景色", en: "Frankfurt old town and Römerberg" },
    imageCaption: { zh: "法蘭克福如果有力氣，就先走老城這段；沒有也沒關係，重點是把轉機和進城接順。", en: "If energy allows, start with the old town. If not, just keep the layover and airport return comfortable." }
  },
  "day-2": {
    location: { zh: "曼徹斯特｜AIB 2026", en: "Manchester | AIB 2026" },
    tags: [{ zh: "會議", en: "Conference" }, { zh: "交流", en: "Networking" }, { zh: "別排太滿", en: "Steady pace" }],
    kicker: { zh: "這天先專心開會", en: "Let the route turn fully toward the conference" },
    title: { zh: "第一個完整會議日", en: "The first full conference day" },
    note: { zh: "這幾天以 AIB 為主就好，別急著把城市行程塞進來。", en: "Let the conference rhythm settle first. Manchester does not need to compete with sightseeing during these core days." }
  },
  "day-3": {
    location: { zh: "曼徹斯特｜AIB 會議", en: "Manchester | AIB conference" },
    tags: [{ zh: "會議", en: "Conference" }, { zh: "發表準備", en: "Presentation prep" }, { zh: "留白", en: "Breathing room" }],
    kicker: { zh: "場次和發表準備交錯的一天", en: "A day where sessions, conversations, and preparation overlap" },
    title: { zh: "把會議內容和發表準備放前面", en: "The day when the academic core feels fully in motion" },
    note: { zh: "今天不用另外加景點，把會議和發表準備顧好就夠了。", en: "It is better to let the conference and presentation preparation take the lead than to force extra city stops into the margins." }
  },
  "day-4": {
    location: { zh: "曼徹斯特｜Interactive 發表", en: "Manchester | Interactive session" },
    tags: [{ zh: "發表", en: "Presentation" }, { zh: "最後一天", en: "Last conference day" }, { zh: "整理", en: "Reset" }],
    kicker: { zh: "先把 Interactive 顧好", en: "Keep the Interactive session first" },
    title: { zh: "Interactive 發表後，晚上先收行李", en: "The Interactive session first, then pack for London" },
    note: { zh: "今天先把 Interactive 場次顧好。剩下就是把會議收完，晚上順手整理明天去倫敦的東西。", en: "Keep the Interactive session first. After that, finish the conference day and pack for London in the evening." }
  },
  "day-5": {
    location: { zh: "曼徹斯特｜倫敦", en: "Manchester | London" },
    tags: [{ zh: "火車", en: "Rail" }, { zh: "轉場", en: "Transfer" }, { zh: "地標", en: "Landmarks" }],
    kicker: { zh: "離開會議城市，進入倫敦第一段街景", en: "Leaving the conference city and stepping into London" },
    title: { zh: "離開曼徹斯特，往倫敦走", en: "Heading south and letting London unfold" },
    note: { zh: "今天的重點就是把北邊的會議城市，順順接到倫敦第一晚。", en: "The beauty of the day is in the switch itself: Manchester in the morning, Westminster by the afternoon." },
    image: londonWestminsterImage,
    imageAlt: { zh: "倫敦西敏一帶的大笨鐘與河岸景色", en: "Big Ben and the Westminster riverside in London" },
    imageCaption: { zh: "第一晚就走西敏這一圈。Big Ben、西敏橋和 London Eye 接在一起就很夠了。", en: "For the first London evening, Westminster is enough: Big Ben, Westminster Bridge, and the London Eye in one easy line." }
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
    note: { zh: "巴黎第一晚先把 Pullman 和陽台安頓好，再去看鐵塔就夠了。", en: "The Paris chapter works best when Pullman comes first: settle the room and balcony view, then let the tower lights take over the evening." },
    image: pullmanImage,
    imageAlt: { zh: "Pullman Paris Tour Eiffel 的陽台鐵塔景", en: "Balcony Eiffel Tower view at Pullman Paris Tour Eiffel" },
    imageCaption: { zh: "Pullman 這幾晚的重點就是陽台。如果房間看得到鐵塔，晚上就不用一直往外跑。", en: "The whole point of Pullman is the balcony. If the room sees the tower, there is no need to keep heading back out at night." }
  },
  "day-9": {
    location: { zh: "巴黎｜羅浮宮｜右岸", en: "Paris | Louvre | Right Bank" },
    tags: [{ zh: "藝術", en: "Art" }, { zh: "右岸", en: "Right Bank" }, { zh: "屋頂視角", en: "Rooftop view" }],
    kicker: { zh: "把藝術與右岸街景接在一起", en: "Bringing art and the Right Bank into one day" },
    title: { zh: "羅浮宮、Place Vendôme 和老佛爺放同一天", en: "After the Louvre, letting Paris continue through its streets" },
    note: { zh: "這一天就走一條線：羅浮宮、Place Vendôme、老佛爺頂樓和歌劇院周邊。", en: "This day works best as one line: the Louvre, Place Vendôme, the Galeries Lafayette rooftop, and the Opéra district, moving from artworks into the city’s own expression." },
    image: parisLouvreImage,
    imageAlt: { zh: "羅浮宮外觀與巴黎右岸街景", en: "The Louvre exterior and the Paris Right Bank" },
    imageCaption: { zh: "羅浮宮排在白天，右岸和塞納河放到後面，這樣巴黎會比較順。", en: "Keep the Louvre for daytime, then let the Right Bank and Seine follow later. The whole day reads better that way." }
  },
  "day-10": {
    location: { zh: "巴黎｜精品大道｜塞納河", en: "Paris | Luxury avenues | Seine" },
    tags: [{ zh: "精品", en: "Luxury" }, { zh: "夜景", en: "Night view" }, { zh: "經典地標", en: "Classics" }],
    kicker: { zh: "把右岸這幾個地方排在同一天", en: "Give Paris its most polished day here" },
    title: { zh: "Avenue Montaigne、香榭麗舍與凱旋門", en: "Avenue Montaigne, the Champs-Elysees, and the Arc" },
    note: { zh: "白天走精品街和大道，晚上去塞納河邊，這樣安排最順。", en: "Walk the luxury streets and the grand axis by day, then give the evening to the Seine so the polished and the softer sides of Paris stay together." },
    image: parisArcImage,
    imageAlt: { zh: "凱旋門與香榭麗舍大道", en: "Arc de Triomphe and the Champs-Elysees" },
    imageCaption: { zh: "Avenue Montaigne、香榭麗舍和凱旋門排在同一天就好，不用每段都待很久。", en: "Keep Avenue Montaigne, the Champs-Elysees, and the Arc together. There is no need to stay too long at every stop." }
  },
  "day-11": {
    location: { zh: "巴黎｜蒙馬特｜CDG", en: "Paris | Montmartre | CDG" },
    tags: [{ zh: "晨景", en: "Morning view" }, { zh: "最後採買", en: "Last shopping" }, { zh: "機場轉場", en: "Airport move" }],
    kicker: { zh: "巴黎最後一天，不急著趕景點", en: "The final Paris day should not feel rushed" },
    title: { zh: "蒙馬特、最後採買與轉往機場", en: "Montmartre, final shopping, and the move toward the airport" },
    note: { zh: "這天就把巴黎收好：上午蒙馬特，下午拿行李，晚上去 CDG。", en: "The last Paris day is more about a graceful finish: Montmartre in the morning, a slower afternoon for final shopping, then a calm move to Novotel Paris Charles-de-Gaulle Airport." },
    image: parisMontmartreImage,
    imageAlt: { zh: "巴黎聖心堂與蒙馬特高地", en: "Sacré-Cœur and Montmartre in Paris" },
    imageCaption: { zh: "巴黎最後一天不要再衝太多點。上午留給蒙馬特，下午把行李和最後採買收好就好。", en: "Do not cram the final Paris day. Give the morning to Montmartre, then use the afternoon to finish shopping and collect the luggage." }
  },
  "day-12": {
    location: { zh: "巴黎｜曼徹斯特｜希斯洛｜台北", en: "Paris | Manchester | Heathrow | Taipei" },
    tags: [{ zh: "返程", en: "Return" }, { zh: "銜接", en: "Connections" }, { zh: "長途飛行", en: "Long-haul" }],
    kicker: { zh: "把整段返程接得乾淨", en: "Keeping the return chain clean and steady" },
    title: { zh: "回家的這一天，重點是順順銜接", en: "The homebound day is about smooth connections" },
    note: { zh: "這天不再排景點，最重要的是把每一段銜接走順。", en: "The last day no longer needs one more sightseeing moment; what matters is keeping each connection between Paris, Manchester, and Heathrow steady." }
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
      localize("法蘭克福先走順，不要把短停排滿。", "Keep Frankfurt easy and do not overfill the layover."),
      localize("T3 轉 T1 與回機場都留一點餘裕。", "Leave extra time for the T3 → T1 transfer and the airport return.")
    ],
    budget: [
      budgetLine("早餐", "Breakfast", "機上 / 機場簡單處理", "On board / airport"),
      budgetLine("交通", "Transport", "FRA 機場鐵路與市區短程", "FRA rail + short city transit"),
      budgetLine("午餐", "Lunch", "MainNizza 或河邊附近彈性安排", "Flexible around MainNizza or the river"),
      budgetLine("門票", "Tickets", "動物園可選；不去也沒差", "Zoo optional"),
      budgetLine("晚餐", "Dinner", "曼徹斯特簡單吃就好", "Keep dinner simple in Manchester"),
      budgetLine("購物", "Shopping", "今天先不排", "Skip for today"),
      budgetLine("總額", "Total estimate", "以移動順利為主，花費先抓彈性", "Keep this day flexible around the transfers")
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
          duration: localize("長程夜航，先把睡眠和文件顧好。", "Long-haul overnight flight."),
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
          duration: localize("抓 3–4 小時就夠；體力普通就只看老城和河邊。", "Three to four hours is enough; the old town plus river is already enough."),
          note: localize("動物園是加碼選項，不必為了它把回機場時間壓太緊。", "The zoo is optional. Do not squeeze the airport return for it."),
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
          note: localize("最晚 13:30 左右回到 T1 會比較穩。", "Being back at T1 around 13:30 keeps the layover comfortable."),
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
          duration: localize("入住後只留簡單晚餐和休息。", "After check-in, keep the night to dinner and rest."),
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
      title: localize("下午的場次先留白，不要再插遠的安排。", "Keep the afternoon clear for the presentation slot."),
      chips: [localize("7/1"), localize("15:15–16:30"), localize("3.006B (AMBS)"), localize("Session 3.4.11")],
      facts: [
        budgetLine("論文", "Paper", conferenceSessions.competitive.paperTitle, conferenceSessions.competitive.paperTitle),
        budgetLine("共同作者", "Coauthor", "Chao Ya Wan", "Chao Ya Wan")
      ],
      note: localize("競爭場次前後都不要塞別的。把發表資料、講稿和備份檔都先放手邊。", "Keep the time around the competitive slot clear and keep your slides, script, and backup files close.")
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
      localize("發表前後不要跑遠，讓腦袋留白。", "Do not wander far before or after the presentation."),
      localize("簡報、講稿和備份檔再多存一份雲端。", "Keep one more cloud backup of slides and notes.")
    ],
    budget: [
      budgetLine("早餐", "Breakfast", "飯店內或附近簡單吃", "Simple hotel breakfast"),
      budgetLine("交通", "Transport", "步行 / 市內短程", "Walking / short local transit"),
      budgetLine("午餐", "Lunch", "會場附近，別吃太久", "Near the venue"),
      budgetLine("門票", "Tickets", "今天沒有景點票", "No attraction tickets"),
      budgetLine("晚餐", "Dinner", "發表後簡單吃", "Simple dinner after the session"),
      budgetLine("購物", "Shopping", "今天不安排", "Not for today"),
      budgetLine("總額", "Total estimate", "維持低消費，把力氣留給場次", "Keep spending light and save energy for the session")
    ],
    timeline: [
      {
        time: localize("上午", "Morning"),
        type: "conference",
        title: localize("上午先跑主要場次，下午前把資料看熟", "Use the morning for sessions and final prep"),
        location: localize("AMBS / 會議教室", "AMBS / conference rooms"),
        details: {
          address: localize("Alliance Manchester Business School, Booth Street West, Manchester", "Alliance Manchester Business School, Booth Street West, Manchester"),
          mapQuery: "Alliance Manchester Business School Manchester",
          duration: localize("上午主會議時段。", "Main morning conference block."),
          note: localize("把下午要說的版本、順序和重點再看一遍。", "Use the morning to review the final speaking flow."),
          documents: localize("最終簡報、口頭重點、備用檔案", "Final slides, speaking notes, backup files")
        }
      },
      {
        time: localize("中午", "Noon"),
        type: "meal",
        title: localize("午餐後留一點安靜時間", "Keep lunch and a quiet reset"),
        location: localize("會場附近", "Near the venue"),
        details: {
          duration: localize("不用排很滿，讓下午前有一點空白。", "Leave a little empty space before the afternoon."),
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
          note: localize("這段就是今天最重要的行程，其他事都往旁邊讓。", "This is the anchor of the day; let everything else step aside for it."),
          documents: localize("最終簡報、口頭重點、備用檔案", "Final slides, speaking notes, backup files")
        }
      },
      {
        time: localize("夜晚", "Evening"),
        type: "reminder",
        title: localize("晚上不要再排景點，先回飯店休息", "Skip sightseeing and reset at the hotel"),
        location: localize("INNSiDE Manchester", "INNSiDE Manchester"),
        details: {
          address: localize("1 First Street, Manchester M15 4RP, United Kingdom", "1 First Street, Manchester M15 4RP, United Kingdom"),
          mapQuery: "INNSiDE Manchester 1 First Street Manchester",
          duration: localize("發表後簡單吃飯就回去。", "Head back after a simple dinner."),
          note: localize("如果腦袋還停在發表內容，晚上就不要再加行程。", "If the presentation is still on your mind, leave the evening empty.")
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
      title: localize("今天照會議節奏走，不另外趕景點。", "Follow the conference rhythm and skip extra sightseeing."),
      chips: [localize("AIB"), localize("Sessions"), localize("Networking"), localize("收據整理", "Receipts")],
      facts: [
        budgetLine("重點", "Focus", "挑重要場次，空檔留給交流和休息。", "Prioritize key sessions and leave room for conversations and rest."),
        budgetLine("晚上", "Evening", "回飯店整理筆記，也準備隔天 Interactive。", "Review notes at the hotel and prepare for tomorrow's Interactive session.")
      ],
      note: localize("今天沒有自己的發表。場次之間不用排滿，晚上再把 7/3 的講義和摘要確認一次。", "You are not presenting today. Keep space between sessions and review tomorrow's handout and summary tonight.")
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
      localize("會議空檔留在校園附近，不用特地跑市區。", "Stay near campus between sessions rather than crossing town."),
      localize("睡前再確認 7/3 的一頁摘要、八分鐘說明和備份。", "Before bed, recheck tomorrow's one-page summary, eight-minute explanation, and backups.")
    ],
    budget: [
      budgetLine("早餐", "Breakfast", "飯店或會場附近簡單吃", "Hotel or nearby"),
      budgetLine("交通", "Transport", "以步行為主", "Mostly walking"),
      budgetLine("午餐", "Lunch", "會場附近就好", "Keep it near the venue"),
      budgetLine("門票", "Tickets", "今天沒有景點票", "No attraction tickets"),
      budgetLine("晚餐", "Dinner", "曼城市中心簡單吃", "Simple dinner in the city centre"),
      budgetLine("購物", "Shopping", "今天先不排", "Skip for today"),
      budgetLine("總額", "Total estimate", "會議日中低消費", "Low-to-moderate conference day")
    ],
    timeline: [
      {
        time: localize("上午", "Morning"),
        type: "conference",
        title: localize("上午挑重要場次，別把每一格都排滿", "Choose the key morning sessions"),
        location: localize("AIB 2026 會場", "AIB 2026 venue"),
        details: {
          address: localize("Alliance Manchester Business School, Booth Street West, Manchester", "Alliance Manchester Business School, Booth Street West, Manchester"),
          mapQuery: "Alliance Manchester Business School Manchester",
          duration: localize("上午主會議時段。", "Main morning conference block."),
          note: localize("場次之間留一點走路、喝水和整理筆記的時間。", "Leave a little time between sessions to walk, drink water, and organize notes.")
        }
      },
      {
        time: localize("中午", "Noon"),
        type: "meal",
        title: localize("午餐留在 Oxford Road 一帶", "Keep lunch around Oxford Road"),
        location: localize("AMBS / Oxford Road 一帶", "AMBS / Oxford Road area"),
        details: {
          mapQuery: "Oxford Road Manchester lunch",
          duration: localize("抓一頓不趕路的午餐。", "Use the break for an easy lunch."),
          note: localize("吃完慢慢走回會場，不要另外插景點。", "Walk back to the venue without adding another stop.")
        }
      },
      {
        time: localize("下午", "Afternoon"),
        type: "conference",
        title: localize("下午繼續 sessions 與交流", "Continue with sessions and networking"),
        location: localize("AIB 2026 會場", "AIB 2026 venue"),
        details: {
          mapQuery: "University Place Manchester",
          duration: localize("下午主會議時段。", "Main afternoon conference block."),
          note: localize("優先去真正想聽的場次，其餘時間留給交流。", "Prioritize the sessions you genuinely want and leave the rest for conversations."),
          documents: localize("會議 agenda、當天筆記", "Conference agenda and notes")
        }
      },
      {
        time: localize("夜晚", "Evening"),
        type: "reminder",
        title: localize("回飯店整理筆記，也準備明天的 Interactive", "Review notes and prepare for tomorrow's Interactive session"),
        location: localize("INNSiDE Manchester", "INNSiDE Manchester"),
        details: {
          address: localize("1 First Street, Manchester M15 4RP, United Kingdom", "1 First Street, Manchester M15 4RP, United Kingdom"),
          mapQuery: "INNSiDE Manchester 1 First Street Manchester",
          note: localize("一頁摘要、八分鐘說明和備份都再看一次；確認好就早點休息。", "Check the one-page summary, eight-minute explanation, and backups once more, then rest.")
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
      title: localize("Interactive 場次的重點都放這裡。", "Everything key for the Interactive session stays here."),
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
      localize("沒有 PowerPoint，手邊只留 handout 和口條節奏。", "There is no PowerPoint, so keep only the handout and speaking rhythm in hand.")
    ],
    budget: [
      budgetLine("早餐", "Breakfast", "出門前先吃，別拖到會場", "Eat before leaving"),
      budgetLine("交通", "Transport", "步行為主", "Mostly walking"),
      budgetLine("午餐", "Lunch", "發表後再好好吃", "Eat properly after the session"),
      budgetLine("門票", "Tickets", "今天沒有景點票", "No attraction tickets"),
      budgetLine("晚餐", "Dinner", "簡單吃，順便整理明天", "Simple dinner before packing"),
      budgetLine("購物", "Shopping", "今天不排", "Skip for today"),
      budgetLine("總額", "Total estimate", "會議最後一天，維持輕量", "Light final conference day")
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
          note: localize("第一次走的話，抓 20 分鐘比較穩。", "If the route is unfamiliar, give yourself closer to 20 minutes."),
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
          note: localize("今天的節奏就繞著這場走。發表前後都先留白。", "Let the day orbit this session and keep the surrounding time open."),
          documents: localize("Executive Summary / handout、多一份備用", "Executive Summary / handout with extra copies")
        }
      },
      {
        time: localize("中午到下午", "Noon to afternoon"),
        type: "conference",
        title: localize("午餐後把最後幾場和最後幾個人聊完", "Use the afternoon to close the conference well"),
        location: localize("AIB 2026 會場", "AIB 2026 venue"),
        details: {
          duration: localize("把最後交流集中在這段。", "Use this window for final conversations."),
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
          duration: localize("今晚就把火車票、Riu 訂房和行李收好。", "Use tonight to sort the train ticket, the Riu booking, and the luggage."),
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
      localize("Euston 出站後先把飯店 check-in 接好，再去散步。", "Check into the hotel first after Euston, then start walking."),
      localize("晚上 Soho / Covent Garden 人多，手機不要拿外側。", "In Soho or Covent Garden, keep your phone away from the outer hand.")
    ],
    budget: [
      budgetLine("早餐", "Breakfast", "曼城離開前簡單吃", "Simple before leaving Manchester"),
      budgetLine("交通", "Transport", "Avanti 車票＋倫敦地鐵 / 計程車", "Avanti + Tube / taxi"),
      budgetLine("午餐", "Lunch", "火車前後彈性安排", "Flexible around the train"),
      budgetLine("門票", "Tickets", "Westminster 這圈以外觀為主", "Westminster is mostly exterior views"),
      budgetLine("晚餐", "Dinner", "Covent Garden / Soho", "Covent Garden / Soho"),
      budgetLine("購物", "Shopping", "今天先不急著買", "No rush to shop today"),
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
          duration: localize("先把南下倫敦這段接順。", "This is the key transfer into London."),
          note: localize("早上不再排別的，把退房和車站動線顧好。", "Do not add extra stops before the station.")
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
          note: localize("火車上就是換城市的空檔，不用再排事情。", "Use the train simply as the city-change buffer."),
          documents: localize("Avanti 電子票", "Avanti e-ticket")
        }
      },
      {
        time: localize("下午", "Afternoon"),
        type: "hotel",
        title: localize("先入住 Riu，再走 Westminster 經典地標", "Check into Riu, then walk the Westminster landmarks"),
        location: localize("Riu Plaza London The Westminster / Big Ben / Westminster Bridge", "Riu Plaza London The Westminster / Big Ben / Westminster Bridge"),
        details: {
          address: localize("118 Westminster Bridge Rd, London SE1 7RW, United Kingdom", "118 Westminster Bridge Rd, London SE1 7RW, United Kingdom"),
          mapQuery: "Riu Plaza London The Westminster",
          duration: localize("Big Ben、西敏寺外觀、國會大廈、西敏橋接成一小圈。", "Big Ben, the Abbey exterior, Parliament, and Westminster Bridge in one easy loop."),
          note: localize("第一晚只走這一圈就夠了。", "That single Westminster loop is enough for the first London night."),
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
          note: localize("第一晚不用硬逛太晚。", "There is no need to push the first London night too late.")
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
      localize("Buckingham Palace 那一帶走慢一點就好，不用趕衛兵交接。", "Do not rush the guard change if it does not fit naturally."),
      localize("Harrods 和 Knightsbridge 人多時，手機和卡片都收好。", "Around Harrods and Knightsbridge, keep phone and cards tucked in.")
    ],
    budget: [
      budgetLine("早餐", "Breakfast", "飯店或附近咖啡", "Hotel or nearby coffee"),
      budgetLine("交通", "Transport", "Tube / 步行", "Tube / walking"),
      budgetLine("午餐", "Lunch", "Covent Garden 附近", "Around Covent Garden"),
      budgetLine("門票", "Tickets", "今天多數是街區散步", "Mostly open-air walking today"),
      budgetLine("晚餐", "Dinner", "Knightsbridge / South Kensington", "Knightsbridge / South Kensington"),
      budgetLine("購物", "Shopping", "Harrods 視當天狀況", "Harrods if it feels right"),
      budgetLine("總額", "Total estimate", "城市散步＋百貨日", "City walk and department-store day")
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
          duration: localize("先看外觀，衛兵交接有遇到再看。", "Start with the exterior and watch the guard change only if timing fits."),
          note: localize("這段不要排太趕，拍完再接公園。", "Do not over-schedule this stop.")
        }
      },
      {
        time: localize("中午", "Noon"),
        type: "activity",
        title: localize("St. James's Park 接 Covent Garden", "Walk St. James's Park into Covent Garden"),
        location: localize("St. James's Park / Green Park / Covent Garden", "St. James's Park / Green Park / Covent Garden"),
        details: {
          mapQuery: "St James's Park London",
          duration: localize("公園慢慢走，再往 Covent Garden 吃飯。", "Walk through the parks before moving into Covent Garden for lunch."),
          note: localize("這條線本來就順，不用再插遠的點。", "This line already works well as it is.")
        }
      },
      {
        time: localize("下午", "Afternoon"),
        type: "activity",
        title: localize("Leicester Square、Piccadilly、Regent Street", "Leicester Square, Piccadilly, and Regent Street"),
        location: localize("Leicester Square / Piccadilly Circus / Regent Street", "Leicester Square / Piccadilly Circus / Regent Street"),
        details: {
          mapQuery: "Piccadilly Circus London",
          duration: localize("順著街區慢慢接，不用硬走完每一條。", "Let the districts connect naturally without trying to finish every block."),
          note: localize("下午茶如果想坐一下，也可以放在 Covent Garden。", "Tea is easier to fit back in Covent Garden if needed.")
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
          duration: localize("百貨、美食區與晚餐放在同一段。", "Keep Harrods and dinner in the same zone."),
          note: localize("Harrods 留到傍晚最剛好。", "Harrods fits best later in the day.")
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
      localize("今天可以逛，但晚上不要玩太晚，隔天要進巴黎。", "You can shop today, but keep the night lighter because Paris comes next."),
      localize("Soho 和 Chinatown 人潮多，手機別外露。", "In Soho and Chinatown, avoid holding your phone on the outside.")
    ],
    budget: [
      budgetLine("早餐", "Breakfast", "飯店或附近咖啡", "Hotel or nearby coffee"),
      budgetLine("交通", "Transport", "Tube / 步行", "Tube / walking"),
      budgetLine("午餐", "Lunch", "Bond Street / Selfridges 周邊", "Around Bond Street / Selfridges"),
      budgetLine("門票", "Tickets", "若看 West End 需另算", "Only if you add a West End show"),
      budgetLine("晚餐", "Dinner", "Soho / Chinatown", "Soho / Chinatown"),
      budgetLine("購物", "Shopping", "今天可能是倫敦購物主日", "Main London shopping day"),
      budgetLine("總額", "Total estimate", "彈性最大的一天", "Most flexible spend day")
    ],
    timeline: [
      {
        time: localize("上午", "Morning"),
        type: "activity",
        title: localize("Bond Street 精品街先走", "Start with Bond Street"),
        location: localize("New Bond Street / Old Bond Street", "New Bond Street / Old Bond Street"),
        details: {
          mapQuery: "New Bond Street London",
          duration: localize("精品集中，上午先看最順。", "Morning is the cleanest time to walk the luxury stretch."),
          note: localize("先看最想逛的品牌，不用每間都進。", "Start with the brands you care about most.")
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
          duration: localize("想逛百貨就接這段，不想也可以直接留在 Mayfair。", "Use this if you want a department store; otherwise stay in Mayfair.")
        }
      },
      {
        time: localize("下午", "Afternoon"),
        type: "activity",
        title: localize("Mayfair / Mount Street / Regent Street", "Mayfair / Mount Street / Regent Street"),
        location: localize("Mayfair / Regent Street", "Mayfair / Regent Street"),
        details: {
          mapQuery: "Mayfair London",
          duration: localize("下午就順著街區走，不急著全逛完。", "Use the afternoon to drift through the streets without trying to finish them all."),
          note: localize("如果買得差不多，就把行李空間也一起想好。", "If shopping starts to add up, keep luggage space in mind.")
        }
      },
      {
        time: localize("夜晚", "Evening"),
        type: "meal",
        title: localize("Soho / Chinatown 收尾", "Finish in Soho / Chinatown"),
        location: localize("Soho / Chinatown / West End", "Soho / Chinatown / West End"),
        details: {
          mapQuery: "Soho London",
          duration: localize("晚餐或甜點就好，想看劇再看精神。", "Dinner or dessert is enough; only add a show if the energy still fits."),
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
      localize("巴黎北站和地鐵帶行李時，手機和包包都顧好。", "At Gare du Nord and on the Metro, keep a close eye on your bag and phone.")
    ],
    budget: [
      budgetLine("早餐", "Breakfast", "Riu 周邊咖啡 / 簡單吃", "Coffee or something small near Riu"),
      budgetLine("交通", "Transport", "Eurostar＋巴黎進市區", "Eurostar + Paris arrival transit"),
      budgetLine("午餐", "Lunch", "St Pancras / 車上彈性安排", "Flexible at St Pancras or on the train"),
      budgetLine("門票", "Tickets", "今天沒有景點票", "No attraction tickets today"),
      budgetLine("晚餐", "Dinner", "鐵塔附近或 Pullman 周邊", "Near the tower or Pullman"),
      budgetLine("購物", "Shopping", "今天先不排", "Not for today"),
      budgetLine("總額", "Total estimate", "交通日，先把抵達接順", "Transfer day focused on a smooth arrival")
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
          duration: localize("帶大件行李就直接叫車最省事。", "With luggage, a direct car is the easiest option."),
          note: localize("早上只留給咖啡和最後採買，不要再跑太遠。", "Keep the morning to coffee and last shopping only.")
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
          duration: localize("帶行李時直接叫車最省力。", "A direct taxi or ride-hailing car is easiest with luggage."),
          note: localize("先把房間和陽台安頓好，再想晚上要不要出門。", "Settle the room and balcony first before deciding how much to go out."),
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
          duration: localize("第一晚只留給鐵塔就夠了。", "Giving the first night only to the tower is enough."),
          note: localize("如果房間陽台就看得到鐵塔，晚上不用一直往外跑。", "If the balcony already sees the tower, there is no need to keep running back out.")
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
      localize("羅浮宮只看想看的館別，不要把自己走到太累。", "Only see the Louvre rooms you care about most."),
      localize("巴黎地鐵和熱門景點旁，注意扒手與簽名板。", "On the Metro and around major sights, watch out for pickpockets and clipboard scams.")
    ],
    budget: [
      budgetLine("早餐", "Breakfast", "Pullman / 附近咖啡", "Pullman / nearby coffee"),
      budgetLine("交通", "Transport", "Metro / 步行", "Metro / walking"),
      budgetLine("午餐", "Lunch", "羅浮宮周邊", "Near the Louvre"),
      budgetLine("門票", "Tickets", "羅浮宮需要時段票", "Louvre timed ticket"),
      budgetLine("晚餐", "Dinner", "左岸或回鐵塔附近", "Left Bank or back near the tower"),
      budgetLine("購物", "Shopping", "今天以街區為主", "Mostly street browsing today"),
      budgetLine("總額", "Total estimate", "博物館日＋簡單晚餐", "Museum day plus dinner")
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
          duration: localize("早上先看最想看的幾個館別就好。", "Use the morning for the rooms you care about most."),
          note: localize("不用硬拚整個羅浮宮。", "There is no need to force the whole museum.")
        }
      },
      {
        time: localize("中午", "Noon"),
        type: "meal",
        title: localize("杜樂麗花園到協和廣場", "Walk Tuileries into Place de la Concorde"),
        location: localize("Tuileries / Place de la Concorde", "Tuileries / Place de la Concorde"),
        details: {
          mapQuery: "Tuileries Garden Paris",
          duration: localize("中午放慢一點，順著花園走。", "Let midday slow down through the gardens."),
          note: localize("午餐找順路的地方就好。", "Take lunch wherever feels easy along the way.")
        }
      },
      {
        time: localize("下午", "Afternoon"),
        type: "activity",
        title: localize("Place Vendôme、老佛爺頂樓與歌劇院周邊", "Place Vendôme, the Galeries rooftop, and the Opéra area"),
        location: localize("Place Vendôme / Galeries Lafayette / Opéra", "Place Vendôme / Galeries Lafayette / Opéra"),
        details: {
          mapQuery: "Place Vendome Paris",
          duration: localize("把右岸延伸留在下午，路線會比較順。", "The Right Bank extension sits well in the afternoon."),
          note: localize("老佛爺頂樓不用待太久，拍完就好。", "The rooftop only needs a short stop.")
        }
      },
      {
        time: localize("傍晚到夜晚", "Late afternoon to evening"),
        type: "activity",
        title: localize("塞納河與左岸", "The Seine and the Left Bank"),
        location: localize("Seine / Saint-Germain-des-Prés", "Seine / Saint-Germain-des-Prés"),
        details: {
          mapQuery: "Saint-Germain-des-Pres Paris",
          duration: localize("河邊走一段，再回鐵塔附近就好。", "Walk a stretch of the river, then head back near the tower."),
          note: localize("巴黎不要排成 checklist，這樣一天就很夠了。", "Do not turn Paris into a checklist; this is enough for one day.")
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
      budgetLine("晚餐", "Dinner", "塞納河後再看當天狀況", "Decide after the Seine walk"),
      budgetLine("購物", "Shopping", "今天是精品購物主日", "Main luxury-shopping day"),
      budgetLine("總額", "Total estimate", "看購物而定，彈性最大", "Most flexible day depending on shopping")
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
          note: localize("上午先看凱旋門，後面就順著大道走。", "Start here so the rest of the day can follow the avenue.")
        }
      },
      {
        time: localize("中午", "Noon"),
        type: "meal",
        title: localize("香榭麗舍大道", "Champs-Elysees"),
        location: localize("Champs-Elysees", "Champs-Elysees"),
        details: {
          mapQuery: "Champs-Elysees Paris",
          duration: localize("邊走邊吃就好，不用特別趕。", "Walk and eat without forcing the pace."),
          note: localize("這段是散步加看街景，不必每間店都進。", "Use this for walking and city views rather than trying every shop.")
        }
      },
      {
        time: localize("下午", "Afternoon"),
        type: "activity",
        title: localize("Avenue Montaigne 與 Place Vendôme", "Avenue Montaigne and Place Vendôme"),
        location: localize("Avenue Montaigne / Place Vendôme", "Avenue Montaigne / Place Vendôme"),
        details: {
          mapQuery: "Avenue Montaigne Paris",
          duration: localize("精品街和珠寶街放同一天就好。", "Keep the luxury avenue and Vendôme on the same day."),
          note: localize("不一定每一間都要逛，右岸這條線走順就夠了。", "You do not need to enter every store; the route matters more.")
        }
      },
      {
        time: localize("夜晚", "Evening"),
        type: "activity",
        title: localize("塞納河邊收尾，再回 Pullman", "Finish by the Seine, then return to Pullman"),
        location: localize("Seine riverside", "Seine riverside"),
        details: {
          mapQuery: "Seine River Paris",
          duration: localize("晚餐後走一小段就很夠。", "A short riverside walk after dinner is enough."),
          note: localize("如果還有力氣，再回鐵塔附近看一次夜景也可以。", "If you still have energy, a final tower look works well.")
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
      budgetLine("早餐", "Breakfast", "巴黎最後一個早上簡單吃", "Simple final Paris breakfast"),
      budgetLine("交通", "Transport", "市內移動＋去 CDG", "City movement + CDG transfer"),
      budgetLine("午餐", "Lunch", "市區最後採買時順路吃", "Eat during the last city shopping run"),
      budgetLine("門票", "Tickets", "今天多半是街區與採買", "Mostly neighbourhood stops today"),
      budgetLine("晚餐", "Dinner", "機場飯店附近簡單處理", "Simple near the airport hotel"),
      budgetLine("購物", "Shopping", "最後採買依實際", "Last shopping as needed"),
      budgetLine("總額", "Total estimate", "市區最後一天＋機場轉場", "Final city day plus airport transfer")
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
          duration: localize("上午慢慢走就夠，不用再排太多。", "A gentle morning here is enough."),
          note: localize("最後一天先看高處，心情會比較鬆。", "A hilltop morning makes the last Paris day feel lighter.")
        }
      },
      {
        time: localize("中午", "Noon"),
        type: "activity",
        title: localize("最後採買", "Final shopping"),
        location: localize("Galeries Lafayette / Printemps / Le Bon Marché", "Galeries Lafayette / Printemps / Le Bon Marché"),
        details: {
          mapQuery: "Galeries Lafayette Haussmann",
          duration: localize("三選一就好，不用每間都跑。", "Pick one store instead of trying them all."),
          note: localize("最後採買留在中午到下午最剛好。", "Midday into afternoon is the right spot for final shopping."),
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
          duration: localize("拿完行李就代表巴黎這段收好了。", "Picking up the luggage marks the close of the Paris chapter."),
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
          duration: localize("帶著行李時，直接叫車最省力。", "With luggage, a direct car is the easiest option."),
          note: localize("如果想省一點，再搭 RER 進 Roissypole。", "Use the RER into Roissypole only if you want the cheaper option."),
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
      budgetLine("購物", "Shopping", "今天不排", "Skip for today"),
      budgetLine("總額", "Total estimate", "純移動日", "Pure transfer day")
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
          note: localize("就算住機場，也不要拿最晚報到時間去賭。", "Even with an airport hotel, do not gamble with the latest check-in time."),
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
          duration: localize("最後一段長程夜航，今晚就專心順順回家。", "This final overnight flight is just about getting home smoothly."),
          note: localize("把重要文件和充電線放手邊，轉機時比較省事。", "Keep important papers and your cable close to hand for the transfer.")
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
    body: { zh: "註冊、付款和收據先收在一起。之後要對資料時比較快。", en: "Keep registration, payment, and receipts together so they are easy to check later." }
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
