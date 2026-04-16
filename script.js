const progress = document.getElementById("progress");
const dayButtons = document.querySelectorAll(".day");
const dayDetails = document.querySelectorAll(".day-detail");
const pageSections = document.querySelectorAll("[data-page]");
const routeLinks = document.querySelectorAll("[data-route]");
const langToggle = document.getElementById("langToggle");
const routes = new Set(["home", "conference", "transport", "stay", "itinerary", "budget", "documents"]);
const originalText = new WeakMap();
let currentLang = localStorage.getItem("aib-lang") || "zh";

const translations = {
  "總覽": "Overview",
  "會議": "Conference",
  "交通": "Transport",
  "住宿": "Stay",
  "行程": "Itinerary",
  "報帳": "Budget",
  "文件": "Links",
  "英國研討會旅遊手冊": "UK Conference Travel Handbook",
  "台北出發，經法蘭克福抵達曼徹斯特。前半段完成 AIB 2026 發表與報帳資料，7/4 起移動到倫敦，把大笨鐘、博物館、格林威治、百貨與經典街區排成一條舒服的旅程。": "Depart from Taipei, transfer in Frankfurt, and arrive in Manchester. The first half is for AIB 2026 presentations and reimbursement documents; from 4 July, move to London for Big Ben, museums, Greenwich, department stores, and classic neighborhoods.",
  "行程安排": "View Itinerary",
  "報帳整理": "Budget",
  "旅程日期": "Travel Dates",
  "住宿": "Stay",
  "Manchester 已訂；London 尚未定": "Manchester booked; London pending",
  "航線": "Route",
  "出發前最重要的四件事": "Four Essentials Before Departure",
  "會議、航班、住宿與報帳先整理好，後面的旅行就可以放心享受。": "Keep the conference, flights, stay, and reimbursement details organized first, then enjoy the trip with less friction.",
  "會議日期": "Conference Dates",
  "AIB 官方公告地點為 Manchester，主會議集中在 7/1-7/3。": "The official AIB location is Manchester, with the main conference concentrated on 1-3 July.",
  "待補倫敦": "London pending",
  "INNSiDE Manchester 已訂；7/4 起倫敦住宿尚未定。": "INNSiDE Manchester is booked; London accommodation from 4 July is still pending.",
  "機票": "Flights",
  "台北出發，法蘭克福轉機，回程曼城經希斯洛返台。": "Depart Taipei, transfer in Frankfurt, and return from Manchester via Heathrow.",
  "會議費": "Conference Fee",
  "Conference Fee NT$10,413 / £245 / US$325，加上 AIB 會員費 NT$1,282 / £30 / US$40。": "Conference Fee NT$10,413 / £245 / US$325 plus AIB membership NT$1,282 / £30 / US$40.",
  "會議資訊": "Conference",
  "AIB 發表、會議日期與 Manchester 會議節奏。": "AIB presentations, conference dates, and Manchester conference rhythm.",
  "航班與火車": "Flights & Trains",
  "台北往返英國航班，以及 Manchester 到 London 來回火車。": "Taipei-UK flights and round-trip trains between Manchester and London.",
  "住宿安排": "Accommodation",
  "INNSiDE Manchester 訂房資訊與倫敦住宿待辦。": "INNSiDE Manchester booking details and London accommodation tasks.",
  "倫敦行程": "London Itinerary",
  "7/4 起倫敦旅遊，每天只看當天重點。": "London travel from 4 July, with each day kept focused.",
  "AIB 費用、國科會日支費、機票與住宿金額。": "AIB fees, NSTC daily allowance, flights, and accommodation amounts.",
  "文件清單": "Document Links",
  "接受函、邀請函、收據、ETA 與常用連結。": "Acceptance letters, invitation letter, receipts, ETA, and useful links.",
  "我的發表與會議重點": "Presentations & Conference Notes",
  "AIB 2026 會議期間為 2026/06/29-2026/07/03，主辦地在 Manchester。你目前已有 Competitive Presentation 與 Interactive Presentation 的接受通知，邀請函也已下載。": "AIB 2026 runs from 29 June to 3 July 2026 in Manchester. Competitive Presentation and Interactive Presentation acceptances are confirmed, and the invitation letter has been downloaded.",
  "已接受發表": "Accepted Work",
  "Competitive Presentation：已接受，可作為會議發表證明。": "Competitive Presentation: accepted and usable as presentation proof.",
  "Interactive Presentation：已接受，可作為會議發表證明。": "Interactive Presentation: accepted and usable as presentation proof.",
  "正式題名、作者與場次時間：以 AIB 系統最後公布議程為準。": "Final title, authors, and session time should follow the final AIB program.",
  "這篇研究探討新興科技公司如何在制度模糊、監管分散與大眾信任不足的環境中，先建立合法性，再推動主流採用。文章以 cryptocurrency 與 blockchain ventures 為脈絡，說明企業如何透過 regulatory alignment、institutional bridging 與 ecosystem orchestration，把具爭議的新科技轉化為可被市場與制度接受的發展路徑。": "This paper examines how emerging technology firms build legitimacy before mainstream adoption under institutional ambiguity, fragmented regulation, and public skepticism. Using cryptocurrency and blockchain ventures as the context, it explains how regulatory alignment, institutional bridging, and ecosystem orchestration help transform contested technologies into market- and institutionally accepted pathways.",
  "這篇研究分析早期科技新創如何透過技術揭露向投資人傳遞能力與可信度。文章使用 Gartner Hype Cycle 加權的技術揭露指標與 Heckman two-stage framework，區分投資人的初始篩選與後續資金配置，說明何時技術敘事能成為有效訊號，而不是市場噪音。": "This paper analyzes how early-stage technology startups use technical disclosure to signal capability and credibility to investors. It develops a Gartner Hype Cycle-weighted disclosure measure and applies a Heckman two-stage framework to distinguish initial investor screening from later capital allocation, clarifying when technology narratives function as meaningful signals rather than market noise.",
  "會議節奏": "Conference Rhythm",
  "Research and Policy Dialogue，下午/晚上接 Opening Plenary 與 Reception": "Research and Policy Dialogue, followed by Opening Plenary and Reception",
  "照片來源": "Photo Source",
  "航班與轉機": "Flights & Transfers",
  "去程經法蘭克福抵達曼徹斯特，回程從曼徹斯特經倫敦希斯洛返台。": "Outbound flight transfers in Frankfurt to Manchester; return flight departs Manchester via London Heathrow to Taipei.",
  "去程": "Outbound",
  "回程": "Return",
  "台北桃園 T1": "Taipei Taoyuan T1",
  "法蘭克福 T3": "Frankfurt T3",
  "法蘭克福 T1": "Frankfurt T1",
  "曼徹斯特 T2": "Manchester T2",
  "倫敦希斯洛 T5": "London Heathrow T5",
  "倫敦希斯洛 T3": "London Heathrow T3",
  "機票報帳": "Flight Reimbursement",
  "總額 NT$92,439 / £2,176 / US$2,885。票面價 NT$76,447 / £1,800 / US$2,386；稅金與航空公司附加費另列在票價明細截圖。": "Total NT$92,439 / £2,176 / US$2,885. Base fare NT$76,447 / £1,800 / US$2,386; taxes and carrier-imposed fees are shown separately in the fare screenshot.",
  "轉機提醒": "Transfer Note",
  "去程 FRA 轉機 3 小時，回程 LHR 轉機 1 小時 55 分。回程為 MAN 起飛，後續旅遊若去倫敦，仍要留意不要跳過 MAN-LHR 航段。": "Outbound FRA transfer is 3 hours; return LHR transfer is 1 hour 55 minutes. The return starts from MAN, so do not skip the MAN-LHR sector even if the post-conference trip is in London.",
  "Manchester ↔ London 火車": "Manchester ↔ London Train",
  "7/4 從 Manchester 前往 London，7/10 晚上或 7/11 一早回 Manchester。主要路線是 Avanti West Coast 直達車：Manchester Piccadilly ↔ London Euston。": "Travel from Manchester to London on 4 July, then return to Manchester on the evening of 10 July or early 11 July. The main route is Avanti West Coast direct: Manchester Piccadilly ↔ London Euston.",
  "建議搭法": "Recommended Plan",
  "7/4 去程": "4 July Outbound",
  "Manchester Piccadilly → London Euston，建議 10:00-12:00 之間出發，約 2 小時 15 分抵達。到倫敦後先寄放行李，再排 Westminster / Big Ben / London Eye。": "Manchester Piccadilly → London Euston, ideally departing between 10:00 and 12:00, with a journey time of about 2h15m. Store luggage first, then visit Westminster / Big Ben / London Eye.",
  "7/10 回程": "10 July Return",
  "London Euston → Manchester Piccadilly，建議傍晚或晚上回 Manchester 住一晚。這樣 7/11 去 Manchester Airport 搭 18:10 航班最安心。": "London Euston → Manchester Piccadilly, ideally returning in the evening and staying one night in Manchester. This gives the safest buffer for the 18:10 flight from Manchester Airport on 11 July.",
  "票價估算": "Fare Estimate",
  "每人單程，最便宜但綁定指定班次；越早買越划算。": "Per person one-way, cheapest but tied to a specific train; earlier booking is usually better.",
  "每人單程，彈性較高，適合不想被班次綁死。": "Per person one-way, more flexible and suitable if you do not want to be tied to one train.",
  "每人單程，最彈性但價格最高，不建議作為首選。": "Per person one-way, most flexible but the most expensive, so not the first choice.",
  "來回預算抓法": "Round-Trip Budget",
  "每人來回 Advance：抓 NT$2,846 / £67 / US$89 起；兩人來回抓 NT$5,692 / £134 / US$178 起。": "Per person round-trip Advance: from NT$2,846 / £67 / US$89; two people from NT$5,692 / £134 / US$178.",
  "每人來回 Off-Peak：約 NT$6,627-6,797 / £156-£160 / US$207-212；兩人約 NT$13,254-13,594 / £312-£320 / US$414-424。": "Per person round-trip Off-Peak: about NT$6,627-6,797 / £156-£160 / US$207-212; two people about NT$13,254-13,594 / £312-£320 / US$414-424.",
  "若買 Two Together Railcard：Railcard NT$1,487 / £35 / US$46，兩人一起搭可省 1/3，週末全天可用、平日 09:30 後可用。": "With a Two Together Railcard: NT$1,487 / £35 / US$46. Two passengers traveling together can save 1/3; valid all day on weekends and after 09:30 on weekdays.",
  "7/4 是週六、7/10 是週五；7/10 若用 Railcard，建議選 09:30 後的車。": "4 July is Saturday and 10 July is Friday; if using the Railcard on 10 July, choose trains after 09:30.",
  "訂票提醒": "Booking Note",
  "Advance ticket 通常 12 週前開賣，單程票、指定班次、不可退票，但可在出發前改票並可能收 NT$425 / £10 / US$13 手續費加價差。建議直接用 Avanti 或 National Rail 查價與購票，避免第三方手續費。": "Advance tickets usually open about 12 weeks ahead. They are one-way, train-specific, and non-refundable, but can usually be changed before departure with a possible NT$425 / £10 / US$13 fee plus fare difference. Book directly with Avanti or National Rail to avoid third-party fees.",
  "倫敦與曼徹斯特市內交通": "London & Manchester Local Transit",
  "以公開票價與官方規則整理，保留行程需要的資訊，不放個人付款、帳號、訂位或憑證細節。": "Organized from public fare rules only, with no personal payment, account, booking, or receipt details.",
  "市中心與多數景點一天最高扣到這個金額；單程範例約 NT$153 / £3.60 / US$4.80 peak、NT$132 / £3.10 / US$4.10 off-peak。": "Most central London sightseeing is capped at this daily amount; example single fare is about NT$153 / £3.60 / US$4.80 peak and NT$132 / £3.10 / US$4.10 off-peak.",
  "含 Greenwich / Cutty Sark 這類稍外圍行程時，可用這個日上限估算。": "Use this daily cap for slightly outer trips such as Greenwich / Cutty Sark.",
  "若有 Heathrow 或更外圍移動，用這個上限抓預算；Heathrow Express 不含在 TfL cap 內。": "Use this cap for Heathrow or outer-zone travel; Heathrow Express is not included in the TfL cap.",
  "建議用同一張 contactless 卡、Apple Pay / Google Pay 或 Oyster，全程同一個媒介進出站。": "Use one contactless card, Apple Pay / Google Pay, or Oyster consistently for all taps.",
  "Tube / DLR / Elizabeth line 要 touch in + touch out；公車只要上車 touch in。": "Tube / DLR / Elizabeth line require touch in and touch out; buses only require touch in.",
  "倫敦旅遊段大多落在 Zone 1-2；Greenwich 多抓 Zone 1-3，比買 Day Travelcard 更直覺。": "Most London sightseeing falls in Zones 1-2; estimate Zone 1-3 for Greenwich, which is usually simpler than buying a Day Travelcard.",
  "INNSiDE Manchester 周邊以 Deansgate-Castlefield / St Peter's Square 一帶最方便。": "Around INNSiDE Manchester, Deansgate-Castlefield / St Peter's Square are the most convenient stops.",
  "Manchester Airport 在 Zone 4，進市區需涵蓋所有經過的 zones。": "Manchester Airport is in Zone 4; travel to the city requires all zones passed through.",
  "Metrolink 一日票 all zones：anytime NT$302 / £7.10 / US$9.40；off-peak NT$208 / £4.90 / US$6.50。": "Metrolink all-zones day ticket: anytime NT$302 / £7.10 / US$9.40; off-peak NT$208 / £4.90 / US$6.50.",
  "搭 Metrolink 可用 contactless 在月台讀卡機 touch in / touch out，系統會算單程、日上限或週上限。": "For Metrolink, use contactless at platform readers to touch in and touch out; the system calculates single fares and daily/weekly caps.",
  "若只在市中心短程移動，Zone 1 一日票 anytime NT$115 / £2.70 / US$3.60；off-peak NT$81 / £1.90 / US$2.50；若會搭到機場或跨區，改抓 all zones。": "For short city-centre trips only, Zone 1 day tickets are anytime NT$115 / £2.70 / US$3.60 and off-peak NT$81 / £1.90 / US$2.50; use all-zones if going to the airport or crossing zones.",
  "電車上不能買票；搭車前要先買好票或成功 touch in，避免罰款。": "You cannot buy tickets on the tram; buy before boarding or touch in successfully to avoid penalties.",
  "基本資訊": "Key Details",
  "入住": "Check-in",
  "退房": "Check-out",
  "2026/06/30 15:00 後": "After 15:00, 2026/06/30",
  "2026/07/05 12:00 前": "Before 12:00, 2026/07/05",
  "5 晚，Twin Bed，2 人": "5 nights, twin beds, 2 guests",
  "地址": "Address",
  "電話": "Phone",
  "價格與政策": "Cost & Policy",
  "房價總額：NT$38,270 / GBP 900.90 / US$1,194，已含 20% 稅。": "Total room rate: NT$38,270 / GBP 900.90 / US$1,194, including 20% tax.",
  "平均每晚：約 NT$7,646 / GBP 180 / US$239。": "Average per night: about NT$7,646 / GBP 180 / US$239.",
  "當地旅遊稅：NT$51 / GBP 1.20 / US$1.60 每房每晚，5 晚約 NT$255 / GBP 6 / US$8，現場付。": "Local visitor charge: NT$51 / GBP 1.20 / US$1.60 per room per night; about NT$255 / GBP 6 / US$8 for 5 nights, paid locally.",
  "6/29 15:00 前取消免費；之後取消或 no-show 可能收 1 晚房費。": "Free cancellation before 15:00 on 29 June; later cancellation or no-show may charge 1 night's room rate.",
  "入住需押金，可刷卡或金融卡。": "A deposit is required at check-in by credit/debit card.",
  "倫敦住宿尚未定": "London Stay Pending",
  "如果 7/4 就前往倫敦，INNSiDE Manchester 的 7/4 晚可能需要確認是否保留或調整。倫敦住宿建議找 Covent Garden、Bloomsbury、South Kensington、Paddington 或 King's Cross 附近。": "If moving to London on 4 July, confirm whether the 4 July night at INNSiDE Manchester should be kept or adjusted. For London, consider Covent Garden, Bloomsbury, South Kensington, Paddington, or King's Cross.",
  "7/4 起倫敦旅遊行程": "London Itinerary From 4 July",
  "前段留給 AIB 研討會，後段把倫敦景點依區域排開。回程票是 7/11 從 Manchester 起飛，建議 7/10 晚上或 7/11 一早回 Manchester。": "Keep the first part for AIB, then group London sights by area. The return flight departs Manchester on 11 July, so return to Manchester on the evening of 10 July or early 11 July.",
  "6/29-6/30 出發與抵達": "6/29-6/30 Departure & Arrival",
  "7/1-7/3 AIB 主會議": "7/1-7/3 AIB Main Conference",
  "7/4 前往倫敦": "7/4 To London",
  "7/5 大英博物館": "7/5 British Museum",
  "7/6 格林威治": "7/6 Greenwich",
  "7/7 西敏寺與倫敦塔": "7/7 Westminster & Tower",
  "7/8 南肯辛頓": "7/8 South Kensington",
  "7/9 購物與劇院": "7/9 Shopping & Theatre",
  "7/10 緩衝回曼城": "7/10 Return Buffer",
  "7/11-7/12 回程": "7/11-7/12 Return",
  "台北出發，抵達 Manchester 後先穩定節奏": "Depart Taipei and settle into Manchester",
  "6/30 10:40 抵達 MAN，建議直接進城、寄放行李、午餐與輕鬆散步。15:00 後入住 INNSiDE Manchester，晚上不要排太滿，留體力給 7/1 後的會議。": "Arrive at MAN at 10:40 on 30 June. Go into the city, store luggage, have lunch, and keep the day light. Check in at INNSiDE Manchester after 15:00 and keep the evening easy for the conference days.",
  "會議核心日": "Core Conference Days",
  "7/1-7/3 以 AIB 主會議、發表、networking、晚間 reception 為主。每天早上保留 30 分鐘交通緩衝，晚上只排近距離餐廳。": "1-3 July are for AIB main sessions, presentations, networking, and evening receptions. Keep a 30-minute transport buffer each morning and choose nearby restaurants at night.",
  "Manchester → London，先用夜景進入倫敦": "Manchester → London, start with the night views",
  "上午從 Manchester Piccadilly 搭 Avanti West Coast 到 London Euston，直達約 2 小時 15 分。先寄放行李或入住，下午排 Westminster 周邊散步：Big Ben、大笨鐘、Westminster Bridge、London Eye 外觀。晚上可去 Regent Street / Oxford Street，順路逛 Selfridges 的 Jellycat，或把 Harrods 留到南肯辛頓那天。": "Take Avanti West Coast from Manchester Piccadilly to London Euston in the morning, about 2h15m direct. Store luggage or check in, then walk around Westminster, Big Ben, Westminster Bridge, and the London Eye exterior. In the evening, go to Regent Street / Oxford Street and Selfridges Jellycat, or save Harrods for South Kensington day.",
  "大英博物館 + Tottenham Court Road + Chinatown": "British Museum + Tottenham Court Road + Chinatown",
  "白天以 British Museum 為主，從 Tottenham Court Road 或 Holborn 進出都方便。下午可接 Covent Garden、Soho、Oxford Street，晚上安排 Chinatown 或附近餐廳。這天適合把購物清單先看一輪，不要排太多遠距離移動。": "Focus on the British Museum by day, with convenient access via Tottenham Court Road or Holborn. Add Covent Garden, Soho, or Oxford Street in the afternoon, then Chinatown or nearby dinner at night. Keep the day compact.",
  "格林威治一日：天文台、Cutty Sark、河岸": "Greenwich Day: Observatory, Cutty Sark, Riverside",
  "白天安排 Greenwich：Royal Observatory、Prime Meridian、Cutty Sark、Greenwich Market 與河岸散步。天氣好可加 IFS Cloud Cable Car。晚上回市中心，可安排 Leadenhall Market 晚餐，再去 Fortnum & Mason 買茶與伴手禮。": "Spend the day in Greenwich: Royal Observatory, Prime Meridian, Cutty Sark, Greenwich Market, and the riverside. If weather is good, add IFS Cloud Cable Car. Return to central London for Leadenhall Market dinner and Fortnum & Mason shopping.",
  "白金漢宮、西敏寺、聖保羅、倫敦塔": "Buckingham Palace, Westminster, St Paul's, Tower",
  "上午從 Buckingham Palace、St James's Park、Westminster Abbey 開始。下午可排 St Paul's Cathedral，再到 Tower of London / Tower Bridge。傍晚視天氣與體力決定是否搭 London Eye，看夕陽或夜景最漂亮。": "Start with Buckingham Palace, St James's Park, and Westminster Abbey. In the afternoon, visit St Paul's Cathedral and Tower of London / Tower Bridge. Decide on the London Eye near sunset depending on weather and energy.",
  "Natural History Museum + ICL + Harrods": "Natural History Museum + ICL + Harrods",
  "白天排 South Kensington：Natural History Museum、Victoria and Albert Museum 可二選一或視體力加排，順路逛 Imperial College London 周邊。下午接 Hyde Park / Kensington Gardens，晚上去 Harrods，Jellycat、伴手禮與百貨都可以一起處理。": "Spend the day in South Kensington: Natural History Museum, optionally Victoria and Albert Museum, and the Imperial College London area. Add Hyde Park / Kensington Gardens, then Harrods in the evening for Jellycat, gifts, and department store shopping.",
  "購物、街區與劇院緩衝日": "Shopping, Neighborhoods & Theatre Buffer",
  "這天保留彈性：想購物可排 Oxford Street、Regent Street、Liberty、Selfridges；想拍照可排 Notting Hill 或 Covent Garden；晚上可以看 West End musical。這天也適合補買 Fortnum & Mason、Harrods 或 Boots 清單。": "Keep this day flexible: Oxford Street, Regent Street, Liberty, and Selfridges for shopping; Notting Hill or Covent Garden for photos; a West End musical at night. Also useful for Fortnum & Mason, Harrods, or Boots shopping.",
  "倫敦最後整理，晚上或隔天一早回 Manchester": "Final London errands, then return to Manchester",
  "上午留給未完成的景點或購物，下午整理行李。因為 7/11 18:10 是從 Manchester 起飛，最穩是 7/10 晚上從 London Euston 搭火車回 Manchester Piccadilly 住一晚；如果想多留倫敦，7/11 早上回 Manchester 也要抓很大的延誤緩衝。": "Use the morning for unfinished sights or shopping, then pack in the afternoon. Because the 18:10 flight on 11 July departs Manchester, the safest plan is to return from London Euston to Manchester Piccadilly on 10 July and stay overnight. If staying in London longer, allow a large delay buffer on 11 July.",
  "Manchester → London Heathrow → Taipei": "Manchester → London Heathrow → Taipei",
  "7/11 18:10 從 Manchester 機場出發，19:15 抵達 London Heathrow，再接 21:10 CI 82 回台北。7/12 18:05 抵達台北桃園。": "Depart Manchester Airport at 18:10 on 11 July, arrive London Heathrow at 19:15, then take CI 82 at 21:10 to Taipei. Arrive Taipei Taoyuan at 18:05 on 12 July.",
  "AIB 費用與報帳整理": "AIB Budget & Reimbursement",
  "把金額、用途與憑證放在同一張表，之後申請補助或報帳時比較快核對。": "Keep amounts, purpose, and supporting documents in one table for easier funding and reimbursement checks.",
  "匯率估算": "Exchange Estimate",
  "USD 1 ≈ NT$32.04；GBP 1 ≈ NT$42.48；GBP 1 ≈ US$1.33。實際報帳仍以學校核定匯率、刷卡入帳或承辦規定為準。": "USD 1 ≈ NT$32.04; GBP 1 ≈ NT$42.48; GBP 1 ≈ US$1.33. Final reimbursement should follow the university-approved rate, card settlement, or administrative rules.",
  "項目": "Item",
  "金額": "Amount",
  "用途": "Purpose",
  "憑證": "Proof",
  "國際機票": "International flights",
  "機票付款明細截圖": "Flight payment screenshot",
  "AIB 會員費用": "AIB membership fee",
  "國科會日支生活費（Manchester）": "NSTC daily allowance (Manchester)",
  "115 年日支表：英國 Manchester 未單列，適用 United Kingdom Other": "2026 daily allowance table: Manchester is not listed separately, so United Kingdom Other applies.",
  "依學校與國科會核定日數報支": "Reimburse according to approved days and university/NSTC rules.",
  "INNSiDE Manchester，5 晚，已含 20% 稅": "INNSiDE Manchester, 5 nights, including 20% tax",
  "訂房確認信": "Booking confirmation",
  "每人約 NT$2,846 / GBP 67 / US$89 起": "From about NT$2,846 / GBP 67 / US$89 per person",
  "7/4 去倫敦、7/10 或 7/11 回曼徹斯特": "London on 4 July; return to Manchester on 10 or 11 July",
  "訂票後補上 e-ticket / receipt": "Add e-ticket / receipt after booking",
  "倫敦住宿": "London accommodation",
  "待定": "Pending",
  "7/4 起倫敦旅遊段，住宿尚未定": "London travel segment from 4 July; accommodation pending",
  "訂房後補上 confirmation / invoice": "Add confirmation / invoice after booking",
  "約 NT$255 / GBP 6 / US$8": "About NT$255 / GBP 6 / US$8",
  "NT$51 / GBP 1.20 / US$1.60 每房每晚，現場付": "NT$51 / GBP 1.20 / US$1.60 per room per night, paid locally",
  "會議付款明細": "Conference Payment",
  "Conference Fee NT$10,413 / GBP 245 / US$325；Doctoral Travel Stipend Donation NT$0 / GBP 0 / US$0；General AIB Donation NT$0 / GBP 0 / US$0；Total Payment NT$10,413 / GBP 245 / US$325；Payment Type: Credit Card Online。": "Conference Fee NT$10,413 / GBP 245 / US$325; Doctoral Travel Stipend Donation NT$0 / GBP 0 / US$0; General AIB Donation NT$0 / GBP 0 / US$0; Total Payment NT$10,413 / GBP 245 / US$325; Payment Type: Credit Card Online.",
  "國科會日支費": "NSTC Daily Allowance",
  "2026 適用 115 年新版日支表。英國 London 為 NT$16,340 / GBP 385 / US$510 每日，其他地區為 NT$10,381 / GBP 244 / US$324 每日；AIB 研討會在 Manchester，故以 NT$10,381 / GBP 244 / US$324 每日編列。實際可報天數仍以核定與學校承辦規定為準。": "The 2026 table applies. London is NT$16,340 / GBP 385 / US$510 per day; other UK areas are NT$10,381 / GBP 244 / US$324 per day. Since AIB is in Manchester, use NT$10,381 / GBP 244 / US$324 per day. Actual reimbursable days follow approval and university rules.",
  "報帳包建議順序": "Suggested Reimbursement Packet",
  "接受函 2 份、邀請函、會議費收據、AIB 會員費收據、機票行程與付款明細、飯店訂房確認、入住後正式發票。": "Two acceptance letters, invitation letter, conference fee receipt, AIB membership receipt, flight itinerary and payment details, hotel booking confirmation, and final hotel invoice after stay.",
  "常用連結": "Useful Links",
  "AIB 2026 官網": "AIB 2026 Website",
  "會議時程": "Program",
  "AIB 註冊": "AIB Registration",
  "TfL 2026 票價": "TfL 2026 Fares",
  "Metrolink 一日票": "Metrolink Day Ticket",
  "臺灣銀行匯率": "Bank of Taiwan FX Rates",
  "115 年國外日支表": "2026 Daily Allowance Table",
  "AIB 2026 Manchester 英國研討會旅遊手冊": "AIB 2026 Manchester UK Travel Handbook",
  "回到總覽": "Back to Overview"
};

function updateProgress() {
  const scrollTop = window.scrollY;
  const height = document.documentElement.scrollHeight - window.innerHeight;
  const percent = height > 0 ? (scrollTop / height) * 100 : 0;
  progress.style.width = `${percent}%`;
}

function currentRoute() {
  const route = window.location.hash.replace("#", "");
  return routes.has(route) ? route : "home";
}

function renderRoute(shouldScroll = false) {
  const route = currentRoute();

  pageSections.forEach((section) => {
    section.hidden = section.dataset.page !== route;
  });

  routeLinks.forEach((link) => {
    const isActive = link.dataset.route === route;
    link.classList.toggle("active", isActive);
    if (isActive) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });

  if (shouldScroll) {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  updateProgress();
}

dayButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const targetId = button.dataset.day;

    dayButtons.forEach((item) => item.classList.toggle("active", item === button));
    dayDetails.forEach((detail) => detail.classList.toggle("active", detail.id === targetId));
  });
});

window.addEventListener("hashchange", () => renderRoute(true));
window.addEventListener("scroll", updateProgress, { passive: true });

function translateTextNode(node) {
  if (!originalText.has(node)) {
    originalText.set(node, node.nodeValue);
  }

  const original = originalText.get(node);
  const trimmed = original.trim();
  if (!trimmed) return;

  const leading = original.match(/^\s*/)[0];
  const trailing = original.match(/\s*$/)[0];
  const translated = currentLang === "en" ? translations[trimmed] : trimmed;
  node.nodeValue = `${leading}${translated || trimmed}${trailing}`;
}

function applyLanguage() {
  document.documentElement.lang = currentLang === "en" ? "en" : "zh-Hant";

  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const parent = node.parentElement;
      if (!parent || parent.closest("#langToggle") || ["SCRIPT", "STYLE"].includes(parent.tagName)) {
        return NodeFilter.FILTER_REJECT;
      }
      return NodeFilter.FILTER_ACCEPT;
    }
  });

  const nodes = [];
  while (walker.nextNode()) {
    nodes.push(walker.currentNode);
  }
  nodes.forEach(translateTextNode);

  langToggle.textContent = currentLang === "en" ? "中文" : "EN";
  langToggle.setAttribute("aria-label", currentLang === "en" ? "切換至中文" : "Switch to English");
}

langToggle.addEventListener("click", () => {
  currentLang = currentLang === "en" ? "zh" : "en";
  localStorage.setItem("aib-lang", currentLang);
  applyLanguage();
});

renderRoute(false);
applyLanguage();
updateProgress();
