// ==========================================
// i18n Internationalization System
// ==========================================

const translations = {
    en: {
        // Navigation
        nav_overview: "OVERVIEW",
        nav_keywords: "KEYWORDS",
        nav_tribes: "TRIBES",
        nav_arenas: "ARENAS",
        nav_design: "DESIGN",
        nav_future: "FUTURE",

        // Cover
        cover_year: "2024 - 2025",
        cover_title: "INDONESIA<br>PHONE CASE<br>TREND REPORT",
        cover_subtitle: "The Tropical Mobile Lifestyle Decoded",
        cover_meta_1: "MARKET RESEARCH",
        cover_meta_2: "CONSUMER INSIGHTS",
        cover_meta_3: "DESIGN TRENDS",
        cover_scroll: "SCROLL",

        // Chapter 1
        ch1_number: "CHAPTER 01",
        ch1_title: "What We See",
        ch1_subtitle: "A silent revolution is unfolding in Indonesia's phone case market",
        ch1_quote: "\"The Indonesian phone case market is undergoing a silent revolution - from 'protection tool' to 'identity interface'.\"",
        ch1_p1: "Based on deep analysis of social media discussions, e-commerce data, tech blogger content, and consumer feedback, we observe that the Indonesian market is at a critical turning point. Consumer demand has split from a single \"protection-oriented\" approach into two poles: on one end, extreme pragmatic <strong>\"high-performance functionalism\"</strong> driven by tropical climate and heavy mobile gaming culture; on the other end, highly segmented <strong>\"tribalized aesthetics\"</strong> influenced by digital subcultures and identity politics.",
        ch1_p2: "The market is no longer just providing \"shells\" for phones - it's providing \"interfaces\" for consumers' lifestyles. Whether it's solving gaming frame drops caused by high temperatures, or gaining social currency in the \"Skena\" cultural circle, phone cases have evolved into multidimensional lifestyle products.",
        ch1_chart_title: "MARKET STRUCTURE: THE DUMBBELL PATTERN",
        ch1_dumbbell_left_value: "IDR 50K",
        ch1_dumbbell_left_label: "WHITE-LABEL ZONE<br>High Volume / Low Quality",
        ch1_dumbbell_gap_label: "VACUUM ZONE",
        ch1_dumbbell_gap_value: "IDR 200K - 400K",
        ch1_dumbbell_right_value: "IDR 800K+",
        ch1_dumbbell_right_label: "PREMIUM ZONE<br>International Brands",
        ch1_p3: "Through data capture and analysis from Tokopedia and Shopee, we mapped the current competitive landscape, clearly validating the existence of a \"Masstige\" vacuum zone. The Indonesian market presents an extreme \"dumbbell-shaped\" structure: one end is flooded with cheap white-label products under IDR 50,000 on Shopee - high volume but low quality, unable to meet the needs of an increasingly awakened middle class; the other end is dominated by international giants like Casetify and Otterbox in the IDR 800,000+ premium market.",
        ch1_psychology_title: "The Psychological Shift: From \"Kere Hore\" to \"Rational Vanity\"",
        ch1_p4: "Looking back over the past decade, Indonesia's consumer electronics market has long been dominated by <strong>\"Kere Hore\"</strong> culture - a local slang originating from forums like Kaskus, meaning \"poor but happy.\" In consumer behavior, this manifests as pursuing extreme value for money, even tolerating counterfeits and low-quality products.",
        ch1_p5: "However, with steady growth in Indonesia's per capita GDP in 2024-2025 and the maturation of digital natives, the market is experiencing a \"consumer awakening\" similar to China's 2014-2015 period. Today's target consumers (males aged 25-35) are no longer satisfied with the cheap feel of the ITC Roxy Mas era. They are beginning to exhibit a kind of <strong>\"Rational Vanity\"</strong>: they remain price-sensitive and refuse to blindly pay brand premiums (such as Casetify's high tariffs and shipping), but they desperately want to demonstrate their taste, professionalism, and control over quality of life through consumer goods.",
        ch1_p6: "They will pay for \"anti-yellowing technology,\" \"heat dissipation performance,\" or \"military-grade drop certification\" because these are quantifiable, verifiable values. This psychological shift creates a unique market opportunity.",
        ch1_data1_label: "MARKET TEMPERATURE",
        ch1_data1_value: "26-32°C",
        ch1_data1_desc: "Year-round average temperature across Indonesia, fundamentally reshaping product requirements",
        ch1_data2_label: "SMARTPHONE GROWTH",
        ch1_data2_value: "+4%",
        ch1_data2_desc: "Q3 2024 YoY growth, with clear premiumization trends from Xiaomi, OPPO, Vivo",
        ch1_data3_label: "TARGET DEMOGRAPHIC",
        ch1_data3_value: "25-35",
        ch1_data3_desc: "Urban males: heavy gamers, motorcycle commuters, tech-savvy consumers",
        ch1_img_text: "Jakarta street scene with young consumers using smartphones",
        ch1_img_desc: "Suggested: Urban lifestyle photography showing phone case as fashion accessory",

        // Chapter 2
        ch2_number: "CHAPTER 02",
        ch2_title: "4 Keywords from Tropical Users",
        ch2_subtitle: "Distilled from 100,000+ e-commerce reviews and social media conversations",

        // Keyword 1
        kw1_tag: "KEYWORD 01",
        kw1_title: "Anti-Panas",
        kw1_subtitle: "The Heat Crisis - When phone cases become thermal barriers",
        kw1_p1: "In the Indonesian market, <strong>\"Anti-Panas\" (heat-resistant/heat-dissipating)</strong> has surpassed drop protection to become the primary demand of high-performance user groups. This is not just a comfort issue - it's a performance defense war.",
        kw1_p2: "Indonesia maintains annual average temperatures between 26°C and 32°C year-round, with high humidity as the norm. This environmental baseline temperature greatly compresses the passive heat dissipation margin of smartphones. Meanwhile, Indonesia has one of the world's largest mobile esports player populations, with games like Mobile Legends: Bang Bang (MLBB), PUBG Mobile, and Genshin Impact serving as core national entertainment.",
        kw1_p3: "<strong>Pain Point Mechanism:</strong> When playing high-load games in high-temperature environments, the phone's SoC (System on Chip) quickly reaches thermal limits, forcing throttling. Users frequently complain in forums and comments that phone cases become \"insulation layers,\" exacerbating lag and frame drops.",
        kw1_p4: "<strong>User Cognition Upgrade:</strong> Consumers have received good market education. They explicitly point out that protective cases made of heavy silicone or ordinary TPU materials hinder heat dissipation. Anxiety about \"battery health\" has also intensified focus on heat dissipation performance, with users generally believing that heat accumulation accelerates lithium battery aging.",
        kw1_insight_label: "OUR OBSERVATION",
        kw1_insight: "Heat dissipation has surpassed drop protection as the primary demand for high-performance users. The phone case is no longer just a protective layer, but an efficient thermal interface connecting the phone with external cooling devices.",
        kw1_img: "Thermal imaging comparison: Phone with/without heat-dissipating case after 30min gaming",

        // Keyword 2
        kw2_tag: "KEYWORD 02",
        kw2_title: "Anti-Licin",
        kw2_subtitle: "The Grip Battle - Humidity meets glass surfaces",
        kw2_p1: "<strong>\"Licin\" (slippery)</strong> and <strong>\"Tangan Berkeringat\" (sweaty hands)</strong> are the second most frequent negative evaluation terms after heat dissipation. This directly relates to Indonesia's high humidity climate.",
        kw2_p2: "In high-humidity environments, palm sweat is difficult to evaporate. Current mainstream flagship phones generally use glass back panels, which have extremely low friction coefficients when wet, resulting in a terrible naked grip feel. Cheap glossy plastic cases, after absorbing sweat, form an oil film that produces the \"greasy feel\" and \"sticky feel\" that users extremely dislike.",
        kw2_p3: "Based on analysis of Shopee and Tokopedia reviews, we found that user evaluations of materials show clear polarization.",
        kw2_insight_label: "OUR OBSERVATION",
        kw2_insight: "Tactile experience is becoming an invisible purchase decision factor. The conflict between material properties and tropical climate creates a unique Indonesian market demand.",
        kw2_chart_title: "MATERIAL PREFERENCE INDEX",
        kw2_mat1: "Black Matte (Hitam Doff)",
        kw2_mat2: "Sandstone (Batu Pasir)",
        kw2_mat3: "Carbon Fiber (Karbon)",
        kw2_mat4: "Glossy Plastic",
        kw2_mat5: "Cheap Liquid Silicone",
        kw2_chart_note: "Positive sentiment ratio based on e-commerce review analysis",

        // Keyword 3
        kw3_tag: "KEYWORD 03",
        kw3_title: "Anti-Kuning",
        kw3_subtitle: "The Yellowing Anxiety - UV degradation in tropical sunlight",
        kw3_p1: "Although transparent cases (Clear Case) have huge sales volumes because they can showcase the phone's original color, they are also the category with the highest complaint rate. The intense UV radiation in Indonesia's environment accelerates the photo-oxidative degradation of TPU materials.",
        kw3_p2: "On DatascripMall blogs and Reddit forums, searches for \"Casing HP Menguning\" (phone case yellowing) remain consistently high. Located at the equator, Indonesia has year-round extremely high UV Index, combined with high humidity, causing ordinary TPU materials to undergo irreversible photo-oxidation reactions within 2-4 weeks. Users are extremely sensitive to this, even developing psychological defenses of \"transparent case = cheap/dirty.\"",
        kw3_p3: "We observed clear consumer stratification: one group accepts consumable logic, frequently replacing cases; another group is willing to pay 10x premium for durability, seeking \"PC back panel + TPU frame\" hybrid structures or high-end cases claiming to use Bayer anti-UV materials.",
        kw3_insight_label: "OUR OBSERVATION",
        kw3_insight: "Anti-yellowing is shifting from a \"bonus feature\" to an \"entry threshold.\" Beyond yellowing, users are extremely sensitive to \"rainbow effect\" (watermark patterns from transparent cases adhering to glass backs). Micro-dot anti-adhesion design is viewed as a mandatory basic feature.",
        kw3_data1_label: "DISPOSABLE LAYER",
        kw3_data1_value: "IDR 5-15K",
        kw3_data1_desc: "Replace when yellowed",
        kw3_data2_label: "PREMIUM LAYER",
        kw3_data2_value: "10x",
        kw3_data2_desc: "Willing to pay for durability",

        // Keyword 4
        kw4_tag: "KEYWORD 04",
        kw4_title: "MagSafe-ification",
        kw4_subtitle: "The Ecosystem Envy - Android users want in",
        kw4_p1: "This is an emerging latent pain point. MagSafe is Apple's proprietary ecosystem, but its convenience (magnetic card wallets, stands, car mounts) has made Android users envious.",
        kw4_p2: "<strong>Pain Point Description:</strong> Samsung S-series, Xiaomi, Poco, and other users find that when looking for accessories, a large number of quality accessories (such as magnetic power banks, minimalist stands) only support MagSafe.",
        kw4_p3: "<strong>\"Android MagSafe Case\"</strong> has become a hot search term. Users don't necessarily need wireless charging functionality - they need that magnetic ring to \"graft\" the massive MagSafe accessory ecosystem onto their Android phones. Review bloggers specifically test magnetic strength when reviewing Android phone cases, and this has become a new standard for evaluation.",
        kw4_insight_label: "OUR OBSERVATION",
        kw4_insight: "This isn't about wireless charging - it's about access rights to the accessory ecosystem. The desire of Android users for Apple's magnetic ecosystem is severely underestimated.",
        kw4_img: "MagSafe ecosystem accessories: wallet, stand, car mount, cooling fan",

        // Chapter 3
        ch3_number: "CHAPTER 03",
        ch3_title: "4 Aesthetic Tribes",
        ch3_subtitle: "Indonesian youth aesthetics are fragmenting into distinct identity-based tribes",
        ch3_quote: "\"We identified four clearly bounded aesthetic tribes. Phone cases have become tribal badges - social currency traded in the identity economy.\"",

        // Tribe 1
        tribe1_tag: "TRIBE 01",
        tribe1_title: "Skena",
        tribe1_subtitle: "Anti-polished DIY aesthetics derived from \"Scene\" culture",
        tribe1_img: "Mood Board: Sticker-bombed clear case with paracord lanyard and carabiner",
        tribe1_f1: "Clear case serves as canvas for self-expression",
        tribe1_f2: "Sticker bombing as attitude declaration",
        tribe1_f3: "Carabiner + paracord as identity badges",
        tribe1_f4: "Deliberately messy, overlapping, even torn aesthetic",
        tribe1_f5: "High-saturation color clashes: neon green + black, orange + purple",
        tribe1_origin: "<strong>Cultural Origins:</strong> Independent music scene, Y2K revival, Gorpcore outdoor functional wear. The term \"Skena\" derives from English \"Scene,\" originally referring to indie music circles, now evolved into a Gen-Z subculture encompassing music, fashion, and lifestyle.",

        // Tribe 2
        tribe2_tag: "TRIBE 02",
        tribe2_title: "Cowok Mamba",
        tribe2_subtitle: "Ultimate black devotees of urban functional minimalism",
        tribe2_img: "Mood Board: Matte black aramid fiber case on all-black desk setup",
        tribe2_f1: "Color palette: #000000 pure black to deep charcoal only",
        tribe2_f2: "Texture becomes the only expression - Matte, Sandstone, Carbon Fiber",
        tribe2_f3: "Clean lines, sharp edges, no decorative elements",
        tribe2_f4: "Preference for ultra-slim or moderate armor, rejecting bulk",
        tribe2_f5: "Material hierarchy: Skin-touch coating, sandstone grit, aramid weave",
        tribe2_origin: "<strong>Cultural Origins:</strong> Urban minimalism, High Streetwear. The term originates from internet slang for men who dress entirely in black, representing reverence for urban minimalism and premium street style.",

        // Tribe 3
        tribe3_tag: "TRIBE 03",
        tribe3_title: "Mecha",
        tribe3_subtitle: "Tech fetishism that externalizes internal structures",
        tribe3_img: "Mood Board: Transparent case with circuit board graphics and cyan MagSafe ring",
        tribe3_f1: "Transparent exploration: simulated motherboard, battery coils, processor graphics",
        tribe3_f2: "Industrial signage: \"WARNING: HIGH VOLTAGE\", \"SYSTEM READY\", \"SN: 89757\"",
        tribe3_f3: "Complex relief textures mimicking mech armor seams and rivets",
        tribe3_f4: "Neon accent colors: Cyan, Magenta, Cyber Yellow on silver/black base",
        tribe3_f5: "Monospace typography creating coding aesthetic",
        tribe3_origin: "<strong>Cultural Origins:</strong> Cyberpunk 2077, Gunpla model culture, Techwear fashion. This is a fetish aesthetic that externalizes technology's internal structures.",

        // Tribe 4
        tribe4_tag: "TRIBE 04",
        tribe4_title: "Old Money",
        tribe4_subtitle: "Quiet Luxury projected onto phone accessories",
        tribe4_img: "Mood Board: Saddle brown leather case with visible patina and minimal card slot",
        tribe4_f1: "Core material: Genuine leather with visible grain (pebbled, Napa)",
        tribe4_f2: "Earth tone palette: Saddle Brown, British Racing Green, Deep Navy, Burgundy",
        tribe4_f3: "Patina philosophy: cases that age beautifully with use",
        tribe4_f4: "Visible fine stitching adding handcrafted feel",
        tribe4_f5: "Anti-logo, anti-trend - demonstrating taste over brand display",
        tribe4_origin: "<strong>Cultural Origins:</strong> Global Quiet Luxury movement. This is an anti-trend trend, pursuing classic durable materials to demonstrate \"taste\" rather than \"logos\" as status signifiers.",

        // Chapter 4
        ch4_number: "CHAPTER 04",
        ch4_title: "3 Content Arenas",
        ch4_subtitle: "Phone cases are no longer just \"reviewed\" - they are \"curated\"",
        ch4_intro: "Indonesia's tech content ecosystem has completed an evolution from \"spec sheets\" to \"lifestyle curation.\" The product itself takes a back seat; the scenes and atmosphere it constructs become the core selling point. We observe three key content entry points where phone cases appear and the postures in which they appear.",

        // Arena 1
        arena1_number: "01",
        arena1_title: "Desk Setup",
        arena1_subtitle: "The Curated Workspace Aesthetic",
        arena1_p1: "Led by top bloggers like GadgetIn (David Brendi), along with countless mid-tier creators following their lead, a trend is emerging that treats digital products as interior design elements. Videos typically showcase extremely tidy, carefully lit desk environments with warm ambient lighting or RGB. No messy cables - everything in perfect order.",
        arena1_p2: "In this context, phone cases must integrate into the overall desk color scheme. If the desk setup is all black (Setup Hitam), the phone case must be matte black; if it's natural wood style, the phone case tends toward white or transparent. Bloggers describe standing cases as \"second screen\" tools for displaying notifications or serving as clocks, emphasizing their assistance with focus and workflow.",
        arena1_insight_label: "OUR OBSERVATION",
        arena1_insight: "Phone cases are transitioning from \"standalone product\" to \"scene component.\" This content creates \"bundle purchase\" desire - viewers want not just the phone case, but the matching keyboard, mouse pad, and screen light bar.",
        arena1_img: "Minimalist desk setup with phone on stand as \"second screen\"",
        arena1_img_desc: "Reference: GadgetIn style workspace photography",

        // Arena 2
        arena2_number: "02",
        arena2_title: "EDC (Everyday Carry)",
        arena2_subtitle: "The Knolling Ritual",
        arena2_p1: "Blogger Wasa Wirman is a representative figure in this field, elevating \"What's in my bag\" videos to an almost ritualistic level of refinement. The core of videos is arranging bag contents at 90-degree angles in flat-lay photography (Knolling). This requires phone cases to visually harmonize perfectly with wallets, keychains, multi-tools, and TWS earphone cases.",
        arena2_p2: "<strong>Texture Alignment:</strong> If the EDC theme is \"leather gentleman,\" the phone case must be genuine leather; if it's \"tactical functional,\" the phone case must be carbon fiber or military-grade rugged style. In EDC videos, bloggers demonstrate how phone cases slide into jeans pockets (testing friction) or whether they scratch when rubbing against other metal objects. This scenario-based testing is more persuasive than laboratory drop tests.",
        arena2_insight_label: "OUR OBSERVATION",
        arena2_insight: "Phone cases are undergoing \"scenario-based testing\" rather than laboratory testing. Future EDC content will become more segmented: \"motorcycle commute EDC\" (emphasizing drop and shock resistance), \"cafe work EDC\" (emphasizing lightweight stands).",
        arena2_img: "Knolling flat-lay: phone case alongside wallet, keys, multi-tool",
        arena2_img_desc: "Reference: Wasa Wirman style EDC photography",

        // Arena 3
        arena3_number: "03",
        arena3_title: "Mirror Selfie",
        arena3_subtitle: "The OOTD Centerpiece",
        arena3_p1: "On TikTok and Lemon8 (ByteDance's lifestyle app, extremely popular in Indonesia), phone cases have been completely stripped of their tech attributes and restored to pure fashion accessories. Mirror selfies are the ultimate phone case display scenario. Bloggers showcase their Outfit of the Day through mirror selfies, with the phone case as the most central element in the frame.",
        arena3_p2: "<strong>ASMR Unboxing:</strong> 15-second short videos focused on the sound of tearing packaging, the \"click\" of snapping the case onto the phone, and the crisp sound of nails tapping the back panel. This sensory stimulation directly drives impulse purchases.",
        arena3_p3: "<strong>Tag Tribalization:</strong> Content is precisely distributed through hashtags like #CowokMamba (black-clad males), #CewekKue (sweet colorful females), #Skena (subculture youth). Bloggers no longer say \"this case has good quality\" but rather \"this is a must-have item for Mamba boys.\"",
        arena3_insight_label: "OUR OBSERVATION",
        arena3_insight: "Phone cases have been restored to pure fashion accessories, completely stripped of tech attributes. The tribal hashtag system creates precise cultural targeting impossible through traditional marketing.",
        arena3_img: "Mirror selfie with phone case as OOTD focal point",
        arena3_img_desc: "Reference: TikTok/Lemon8 fashion content style",

        // Chapter 5
        ch5_number: "CHAPTER 05",
        ch5_title: "3 Design Languages",
        ch5_subtitle: "Distilled from thousands of products: three rising design vocabularies",
        ch5_intro: "The target demographic worships the \"OrbitGear\" functional style and \"Machine56\" cyber aesthetic. They disdain pure decoration and revere \"form follows function.\" From our analysis of thousands of products across e-commerce platforms and social media, we have identified three distinct design languages that are gaining momentum in the Indonesian market.",

        // Design Language 1
        dl1_number: "LANGUAGE 01",
        dl1_title: "Tech-Spec Aesthetic",
        dl1_subtitle: "Parametric Beauty",
        dl1_f1: "Technical parameters printed directly on case surface",
        dl1_f2: "\"PC COMPOSITE\" / \"DROP TEST: 3M\" / \"THERMAL VENT 2.0\"",
        dl1_f3: "Transparent windows showcasing internal structures",
        dl1_f4: "MagSafe coils and copper heat dissipation as visible features",
        dl1_f5: "Industrial warning labels as decorative elements",
        dl1_f6: "Yellow/black hazard stripes, red arrows",
        dl1_insight: "This is the visual outlet for \"Rational Vanity\" among tech-savvy males - using quantifiable parameters to replace logo showmanship. The \"spec sheet externalization\" design extremely appeals to the engineering mindset.",
        dl1_img: "Tech-Spec: Case with visible specs and industrial warnings",

        // Design Language 2
        dl2_number: "LANGUAGE 02",
        dl2_title: "Neo-Industrial",
        dl2_subtitle: "New Industrial Minimalism",
        dl2_f1: "Matte black, cement grey, titanium finishes",
        dl2_f2: "Minimalist lines rejecting all decoration",
        dl2_f3: "Function equals form philosophy",
        dl2_f4: "Braun-style restrained design language",
        dl2_f5: "Industrial precision in button cutouts",
        dl2_f6: "Monolithic appearance with hidden complexity",
        dl2_insight: "This is a rebellion against \"over-design\" - using restraint to convey professionalism. The return of Braun-style restrained aesthetics speaks to those who find most phone cases \"trying too hard.\"",
        dl2_img: "Neo-Industrial: Minimal matte case with Braun aesthetic",

        // Design Language 3
        dl3_number: "LANGUAGE 03",
        dl3_title: "Urban Tactical",
        dl3_subtitle: "City Tactical / Gorpcore",
        dl3_f1: "Military palette: Olive Drab, Khaki, Desert Sand",
        dl3_f2: "D-ring attachments and lanyard anchor points",
        dl3_f3: "MOLLE-compatible design elements",
        dl3_f4: "Nylon webbing integration",
        dl3_f5: "Outdoor functional accessorization",
        dl3_f6: "Direct alignment with OrbitGear design language",
        dl3_insight: "This is the materialization of \"urban explorer\" identity - even commuting requires a sense of equipment. Gorpcore's extension into phone accessories creates the perfect companion for messenger bags and technical wear.",
        dl3_img: "Urban Tactical: Military color case with MOLLE elements",

        // Chapter 6
        ch6_number: "CHAPTER 06",
        ch6_title: "Where It's Heading",
        ch6_subtitle: "Three transitions currently underway in the Indonesian phone case market",

        // Transitions
        trans1_number: "01",
        trans1_from: "FROM \"PROTECTION\"",
        trans1_to: "TO \"INTERFACE\"",
        trans1_desc: "Phone cases are becoming the central hub connecting accessory ecosystems. The case is no longer an endpoint but a platform - an interface that determines what additional functionality your phone can access.",
        trans2_number: "02",
        trans2_from: "FROM \"CATEGORY\"",
        trans2_to: "TO \"TRIBE\"",
        trans2_desc: "Aesthetic identity is replacing functional requirements as the primary purchase driver. Consumers are choosing cases that signal tribal membership rather than optimal protection specifications.",
        trans3_number: "03",
        trans3_from: "FROM \"PRODUCT\"",
        trans3_to: "TO \"CONTENT\"",
        trans3_desc: "Value is being redefined by content arenas. A phone case's worth is increasingly determined by how it performs in desk setups, EDC flat-lays, and mirror selfies - not lab tests.",

        // Closing
        closing_quote: "\"Those who understand the tropics will win the tropics.\"",

        // Footer
        footer_title: "Indonesia Phone Case Trend Report 2025",
        footer_source: "Data sources: Shopee, Tokopedia, Lazada, TikTok, Lemon8, YouTube"
    },
    zh: {
        // Navigation
        nav_overview: "概览",
        nav_keywords: "关键词",
        nav_tribes: "美学部落",
        nav_arenas: "内容场域",
        nav_design: "设计语言",
        nav_future: "趋势展望",

        // Cover
        cover_year: "2024 - 2025",
        cover_title: "印度尼西亚<br>手机壳<br>趋势报告",
        cover_subtitle: "解码热带移动生活方式",
        cover_meta_1: "市场研究",
        cover_meta_2: "消费者洞察",
        cover_meta_3: "设计趋势",
        cover_scroll: "向下滚动",

        // Chapter 1
        ch1_number: "第一章",
        ch1_title: "我们观察到了什么",
        ch1_subtitle: "印尼手机壳市场正在经历一场静默革命",
        ch1_quote: "\"印尼手机壳市场正在经历一场静默革命——从'保护工具'到'身份接口'。\"",
        ch1_p1: "基于对社交媒体讨论、电商数据、科技博主内容和消费者反馈的深度分析，我们观察到印尼市场正处于一个关键转折点。消费需求已从单一的\"保护导向\"分化为两极：一端是由热带气候和重度手游文化驱动的极端务实<strong>\"高性能功能主义\"</strong>；另一端是受数字亚文化和身份政治影响的高度细分<strong>\"部落化审美\"</strong>。",
        ch1_p2: "市场不再只是为手机提供\"外壳\"——而是为消费者的生活方式提供\"接口\"。无论是解决高温导致的游戏掉帧问题，还是在\"Skena\"文化圈中获得社交货币，手机壳已经演变成多维度的生活方式产品。",
        ch1_chart_title: "市场结构：哑铃型格局",
        ch1_dumbbell_left_value: "5万印尼盾",
        ch1_dumbbell_left_label: "白牌区<br>高销量 / 低质量",
        ch1_dumbbell_gap_label: "真空地带",
        ch1_dumbbell_gap_value: "20万 - 40万印尼盾",
        ch1_dumbbell_right_value: "80万+印尼盾",
        ch1_dumbbell_right_label: "高端区<br>国际品牌",
        ch1_p3: "通过对Tokopedia和Shopee的数据抓取和分析，我们绘制了当前的竞争格局，清晰验证了\"大众精品\"真空地带的存在。印尼市场呈现极端的\"哑铃型\"结构：一端是Shopee上充斥的5万印尼盾以下的廉价白牌产品——高销量但低质量，无法满足日益觉醒的中产阶级需求；另一端是Casetify和Otterbox等国际巨头主导的80万印尼盾以上的高端市场。",
        ch1_psychology_title: "心理转变：从\"Kere Hore\"到\"理性虚荣\"",
        ch1_p4: "回顾过去十年，印尼消费电子市场长期被<strong>\"Kere Hore\"</strong>文化主导——这是一个源自Kaskus等论坛的本地俚语，意为\"穷但开心\"。在消费行为上，这表现为追求极致性价比，甚至容忍假货和低质量产品。",
        ch1_p5: "然而，随着2024-2025年印尼人均GDP的稳步增长和数字原住民的成熟，市场正在经历类似中国2014-2015年的\"消费觉醒\"。如今的目标消费者（25-35岁男性）不再满足于ITC Roxy Mas时代的廉价感。他们开始展现出一种<strong>\"理性虚荣\"</strong>：他们仍然对价格敏感，拒绝盲目支付品牌溢价（如Casetify的高关税和运费），但他们迫切希望通过消费品展示自己的品味、专业性和对生活品质的掌控。",
        ch1_p6: "他们愿意为\"抗黄变技术\"、\"散热性能\"或\"军工级防摔认证\"付费，因为这些是可量化、可验证的价值。这种心理转变创造了独特的市场机会。",
        ch1_data1_label: "市场温度",
        ch1_data1_value: "26-32°C",
        ch1_data1_desc: "印尼全年平均温度，从根本上重塑了产品需求",
        ch1_data2_label: "智能手机增长",
        ch1_data2_value: "+4%",
        ch1_data2_desc: "2024年Q3同比增长，小米、OPPO、Vivo呈现明显高端化趋势",
        ch1_data3_label: "目标人群",
        ch1_data3_value: "25-35",
        ch1_data3_desc: "城市男性：重度游戏玩家、摩托车通勤者、科技爱好者",
        ch1_img_text: "雅加达街头使用智能手机的年轻消费者",
        ch1_img_desc: "建议：展示手机壳作为时尚配饰的都市生活摄影",

        // Chapter 2
        ch2_number: "第二章",
        ch2_title: "热带用户的四个关键词",
        ch2_subtitle: "从10万+电商评论和社交媒体对话中提炼",

        // Keyword 1
        kw1_tag: "关键词 01",
        kw1_title: "Anti-Panas（不要热）",
        kw1_subtitle: "散热危机——当手机壳变成保温层",
        kw1_p1: "在印尼市场，<strong>\"Anti-Panas\"（耐热/散热）</strong>已超越防摔保护，成为高性能用户群体的首要需求。这不仅仅是舒适度问题——而是一场性能保卫战。",
        kw1_p2: "印尼全年保持26°C至32°C的平均温度，高湿度是常态。这一环境基准温度大大压缩了智能手机的被动散热余量。与此同时，印尼拥有全球最大的移动电竞玩家群体之一，Mobile Legends: Bang Bang (MLBB)、PUBG Mobile和原神等游戏是核心国民娱乐。",
        kw1_p3: "<strong>痛点机制：</strong>在高温环境下玩高负载游戏时，手机的SoC（系统级芯片）很快达到热极限，被迫降频。用户在论坛和评论中频繁抱怨手机壳变成\"保温层\"，加剧卡顿和掉帧。",
        kw1_p4: "<strong>用户认知升级：</strong>消费者已接受良好的市场教育。他们明确指出厚重硅胶或普通TPU材料的保护壳会阻碍散热。对\"电池健康\"的焦虑也加剧了对散热性能的关注，用户普遍认为热量积累会加速锂电池老化。",
        kw1_insight_label: "我们的观察",
        kw1_insight: "散热已超越防摔成为高性能用户的首要需求。手机壳不再只是保护层，而是连接手机与外部散热设备的高效热接口。",
        kw1_img: "热成像对比：有/无散热壳玩游戏30分钟后的温度差异",

        // Keyword 2
        kw2_tag: "关键词 02",
        kw2_title: "Anti-Licin（不要滑）",
        kw2_subtitle: "握持之战——湿度与玻璃表面的冲突",
        kw2_p1: "<strong>\"Licin\"（滑）</strong>和<strong>\"Tangan Berkeringat\"（手汗）</strong>是仅次于散热的第二高频负面评价词。这与印尼的高湿度气候直接相关。",
        kw2_p2: "在高湿度环境下，手掌汗液难以蒸发。当前主流旗舰手机普遍使用玻璃后盖，湿润时摩擦系数极低，裸机握持感极差。廉价亮面塑料壳吸收汗液后形成油膜，产生用户极度厌恶的\"油腻感\"和\"粘腻感\"。",
        kw2_p3: "基于对Shopee和Tokopedia评论的分析，我们发现用户对材质的评价呈现明显两极分化。",
        kw2_insight_label: "我们的观察",
        kw2_insight: "触觉体验正在成为隐形的购买决策因子。材质特性与热带气候的冲突创造了独特的印尼市场需求。",
        kw2_chart_title: "材质偏好指数",
        kw2_mat1: "哑光黑 (Hitam Doff)",
        kw2_mat2: "砂岩质感 (Batu Pasir)",
        kw2_mat3: "碳纤维 (Karbon)",
        kw2_mat4: "亮面塑料",
        kw2_mat5: "廉价液态硅胶",
        kw2_chart_note: "基于电商评论分析的正面情绪比例",

        // Keyword 3
        kw3_tag: "关键词 03",
        kw3_title: "Anti-Kuning（不要黄）",
        kw3_subtitle: "发黄焦虑——热带阳光下的UV降解",
        kw3_p1: "尽管透明壳因为可以展示手机原色而拥有巨大销量，但它们也是投诉率最高的品类。印尼环境中强烈的紫外线辐射加速了TPU材料的光氧化降解。",
        kw3_p2: "在DatascripMall博客和Reddit论坛上，\"Casing HP Menguning\"（手机壳发黄）的搜索量居高不下。位于赤道的印尼全年UV指数极高，加上高湿度，导致普通TPU材料在2-4周内发生不可逆的光氧化反应。用户对此极度敏感，甚至形成了\"透明壳=廉价/脏\"的心理防线。",
        kw3_p3: "我们观察到明显的消费分层：一派接受消耗品逻辑，频繁更换壳；另一派愿意支付10倍溢价追求持久，寻求\"PC背板+TPU边框\"混合结构或声称使用拜耳抗UV材料的高端壳。",
        kw3_insight_label: "我们的观察",
        kw3_insight: "抗黄变正在从\"加分项\"变成\"准入门槛\"。除了发黄，用户对\"彩虹纹\"（透明壳贴合玻璃后盖产生的水印图案）也极度敏感。微点防粘设计被视为必备基础功能。",
        kw3_data1_label: "消耗品层",
        kw3_data1_value: "0.5-1.5万",
        kw3_data1_desc: "黄了就换",
        kw3_data2_label: "高端层",
        kw3_data2_value: "10倍",
        kw3_data2_desc: "愿为持久付费",

        // Keyword 4
        kw4_tag: "关键词 04",
        kw4_title: "MagSafe化（我也想要）",
        kw4_subtitle: "生态羡慕——Android用户想要接入",
        kw4_p1: "这是一个新兴的潜在痛点。MagSafe是苹果的专有生态系统，但其便利性（磁吸卡包、支架、车载支架）让Android用户羡慕不已。",
        kw4_p2: "<strong>痛点描述：</strong>三星S系列、小米、Poco等用户发现，在寻找配件时，大量优质配件（如磁吸充电宝、极简支架）只支持MagSafe。",
        kw4_p3: "<strong>\"Android MagSafe Case\"</strong>已成为热门搜索词。用户不一定需要无线充电功能——他们需要那个磁吸环来将庞大的MagSafe配件生态系统\"嫁接\"到他们的Android手机上。评测博主在评测Android手机壳时会专门测试磁吸强度，这已成为新的评价标准。",
        kw4_insight_label: "我们的观察",
        kw4_insight: "这不是关于无线充电——而是关于配件生态系统的接入权。Android用户对苹果磁吸生态的渴望被严重低估。",
        kw4_img: "MagSafe生态配件：卡包、支架、车载支架、散热风扇",

        // Chapter 3
        ch3_number: "第三章",
        ch3_title: "四个美学部落",
        ch3_subtitle: "印尼年轻人的审美正在碎片化为基于身份认同的不同部落",
        ch3_quote: "\"我们识别出四个界限分明的美学部落。手机壳已成为部落徽章——在身份经济中交易的社交货币。\"",

        // Tribe 1
        tribe1_tag: "部落 01",
        tribe1_title: "Skena（亚文化青年）",
        tribe1_subtitle: "源自\"Scene\"文化的反精致DIY美学",
        tribe1_img: "Mood Board：贴纸轰炸透明壳+伞绳挂带+登山扣",
        tribe1_f1: "透明壳作为自我表达的画布",
        tribe1_f2: "贴纸轰炸作为态度宣言",
        tribe1_f3: "登山扣+伞绳作为身份徽章",
        tribe1_f4: "刻意的凌乱、重叠、甚至撕裂美学",
        tribe1_f5: "高饱和度撞色：荧光绿+黑、橙+紫",
        tribe1_origin: "<strong>文化根源：</strong>独立音乐圈、Y2K复兴、Gorpcore户外机能风。\"Skena\"一词源自英语\"Scene\"，原指独立音乐圈，现已演变为涵盖音乐、时尚和生活方式的Z世代亚文化。",

        // Tribe 2
        tribe2_tag: "部落 02",
        tribe2_title: "Cowok Mamba（全黑主义者）",
        tribe2_subtitle: "城市机能极简主义的极致黑信徒",
        tribe2_img: "Mood Board：哑光黑芳纶纤维壳+全黑桌面",
        tribe2_f1: "色彩范围：仅限#000000纯黑到深炭灰",
        tribe2_f2: "质感成为唯一表达——哑光、砂岩、碳纤维",
        tribe2_f3: "干净线条、锐利边缘、无装饰元素",
        tribe2_f4: "偏好超薄或适度装甲，拒绝厚重",
        tribe2_f5: "材质层级：肤感涂层、砂岩颗粒、芳纶编织",
        tribe2_origin: "<strong>文化根源：</strong>城市极简主义、High Streetwear。该词源自网络俚语，指全身黑衣的男性，代表对城市极简和高端街头风格的崇敬。",

        // Tribe 3
        tribe3_tag: "部落 03",
        tribe3_title: "Mecha（机甲未来派）",
        tribe3_subtitle: "将内部结构外显化的科技恋物",
        tribe3_img: "Mood Board：电路板图案透明壳+青色MagSafe圈",
        tribe3_f1: "透视探索：模拟主板、电池线圈、处理器图形",
        tribe3_f2: "工业标识：\"WARNING: HIGH VOLTAGE\"、\"SYSTEM READY\"、\"SN: 89757\"",
        tribe3_f3: "模仿机甲装甲接缝和铆钉的复杂浮雕纹理",
        tribe3_f4: "霓虹点缀色：银/黑底上的青色、品红、赛博黄",
        tribe3_f5: "等宽字体营造编程美学",
        tribe3_origin: "<strong>文化根源：</strong>赛博朋克2077、高达模型文化、Techwear时尚。这是一种将技术内部结构外显化的恋物美学。",

        // Tribe 4
        tribe4_tag: "部落 04",
        tribe4_title: "Old Money（静奢派）",
        tribe4_subtitle: "Quiet Luxury在手机配件上的投射",
        tribe4_img: "Mood Board：马鞍棕皮壳+可见包浆+极简卡槽",
        tribe4_f1: "核心材质：可见纹理的真皮（鹅卵石纹、Napa）",
        tribe4_f2: "大地色调：马鞍棕、英国赛车绿、深海军蓝、勃艮第红",
        tribe4_f3: "包浆哲学：随使用而优雅老化的壳",
        tribe4_f4: "可见精细缝线增添手工感",
        tribe4_f5: "反Logo、反潮流——展示品味而非品牌",
        tribe4_origin: "<strong>文化根源：</strong>全球Quiet Luxury运动。这是一种反潮流的潮流，追求经典耐用材料来展示\"品味\"而非\"Logo\"作为地位标识。",

        // Chapter 4
        ch4_number: "第四章",
        ch4_title: "三个内容场域",
        ch4_subtitle: "手机壳不再只是被\"评测\"——而是被\"策展\"",
        ch4_intro: "印尼的科技内容生态已完成从\"参数表\"到\"生活方式策展\"的演变。产品本身退居次席；它构建的场景和氛围成为核心卖点。我们观察到手机壳出现的三个关键内容入口及其出现的姿态。",

        // Arena 1
        arena1_number: "01",
        arena1_title: "Desk Setup（桌面美学）",
        arena1_subtitle: "策展式工作空间美学",
        arena1_p1: "以GadgetIn（David Brendi）等头部博主为首，加上无数中腰部创作者跟风，一种将数字产品视为室内设计元素的趋势正在兴起。视频通常展示极度整洁、精心打光的桌面环境，配以暖色氛围灯或RGB。没有杂乱的线缆——一切井然有序。",
        arena1_p2: "在这种语境下，手机壳必须融入整体桌面配色。如果桌面是全黑（Setup Hitam），手机壳必须是哑光黑；如果是原木风格，手机壳则倾向于白色或透明。博主将支架壳描述为显示通知或充当时钟的\"第二屏\"工具，强调其对专注和工作流程的辅助。",
        arena1_insight_label: "我们的观察",
        arena1_insight: "手机壳正在从\"单品\"转变为\"场景组件\"。这类内容创造了\"捆绑购买\"欲望——观众不仅想要手机壳，还想要配套的键盘、鼠标垫和屏幕挂灯。",
        arena1_img: "极简桌面，手机放在支架上作为\"第二屏\"",
        arena1_img_desc: "参考：GadgetIn风格工作空间摄影",

        // Arena 2
        arena2_number: "02",
        arena2_title: "EDC（每日随身）",
        arena2_subtitle: "Knolling仪式",
        arena2_p1: "博主Wasa Wirman是这一领域的代表人物，将\"What's in my bag\"视频提升到近乎仪式化的精致程度。视频的核心是将包内物品以90度角排列进行平铺摄影（Knolling）。这要求手机壳与钱包、钥匙扣、多功能工具和TWS耳机盒在视觉上完美协调。",
        arena2_p2: "<strong>质感对齐：</strong>如果EDC主题是\"皮革绅士\"，手机壳必须是真皮；如果是\"战术机能\"，手机壳必须是碳纤维或军工级硬核风格。在EDC视频中，博主演示手机壳如何滑入牛仔裤口袋（测试摩擦力）或与其他金属物品摩擦时是否会刮花。这种场景化测试比实验室跌落测试更有说服力。",
        arena2_insight_label: "我们的观察",
        arena2_insight: "手机壳正在接受\"场景化测试\"而非实验室测试。未来EDC内容将更加细分：\"摩托车通勤EDC\"（强调防摔抗震）、\"咖啡馆办公EDC\"（强调轻便支架）。",
        arena2_img: "Knolling平铺：手机壳与钱包、钥匙、多功能工具并列",
        arena2_img_desc: "参考：Wasa Wirman风格EDC摄影",

        // Arena 3
        arena3_number: "03",
        arena3_title: "Mirror Selfie（对镜自拍）",
        arena3_subtitle: "OOTD的视觉中心",
        arena3_p1: "在TikTok和Lemon8（字节跳动的生活方式应用，在印尼极受欢迎）上，手机壳已被完全剥离科技属性，还原为纯粹的时尚配饰。对镜自拍是手机壳展示的终极场景。博主通过对镜自拍展示当日穿搭，手机壳是画面中最核心的元素。",
        arena3_p2: "<strong>ASMR开箱：</strong>15秒短视频聚焦撕包装的声音、壳扣上手机的\"咔嗒\"声、指甲敲击背板的清脆声。这种感官刺激直接驱动冲动购买。",
        arena3_p3: "<strong>标签部落化：</strong>内容通过#CowokMamba（黑衣男）、#CewekKue（甜美彩色女）、#Skena（亚文化青年）等标签精准分发。博主不再说\"这个壳质量好\"，而是说\"这是Mamba男孩的必备单品\"。",
        arena3_insight_label: "我们的观察",
        arena3_insight: "手机壳已还原为纯粹的时尚配饰，完全剥离科技属性。部落化标签系统创造了传统营销无法实现的精准文化定向。",
        arena3_img: "对镜自拍，手机壳作为OOTD焦点",
        arena3_img_desc: "参考：TikTok/Lemon8时尚内容风格",

        // Chapter 5
        ch5_number: "第五章",
        ch5_title: "三种设计语言",
        ch5_subtitle: "从数千款产品中提炼：三种正在崛起的设计词汇",
        ch5_intro: "目标人群崇拜\"OrbitGear\"机能风和\"Machine56\"赛博美学。他们鄙视纯装饰，崇尚\"形式追随功能\"。通过对电商平台和社交媒体上数千款产品的分析，我们识别出三种在印尼市场势头正盛的独特设计语言。",

        // Design Language 1
        dl1_number: "语言 01",
        dl1_title: "Tech-Spec Aesthetic",
        dl1_subtitle: "参数化美学",
        dl1_f1: "技术参数直接印在壳体表面",
        dl1_f2: "\"PC COMPOSITE\" / \"DROP TEST: 3M\" / \"THERMAL VENT 2.0\"",
        dl1_f3: "透明开窗展示内部结构",
        dl1_f4: "MagSafe线圈和铜质散热片作为可见特征",
        dl1_f5: "工业警示标签作为装饰元素",
        dl1_f6: "黄/黑警示条纹、红色箭头",
        dl1_insight: "这是科技男\"理性虚荣\"的视觉出口——用可量化参数取代Logo炫耀。\"参数表外显化\"设计极度吸引工程师思维。",
        dl1_img: "Tech-Spec：带可见参数和工业警示的壳",

        // Design Language 2
        dl2_number: "语言 02",
        dl2_title: "Neo-Industrial",
        dl2_subtitle: "新工业极简主义",
        dl2_f1: "哑光黑、水泥灰、钛色饰面",
        dl2_f2: "极简线条拒绝一切装饰",
        dl2_f3: "功能即形式哲学",
        dl2_f4: "Braun式克制设计语言",
        dl2_f5: "按键开孔的工业精度",
        dl2_f6: "整体外观隐藏复杂性",
        dl2_insight: "这是对\"过度设计\"的反叛——用克制传达专业感。Braun式克制美学的回归迎合了那些觉得大多数手机壳\"用力过猛\"的人。",
        dl2_img: "Neo-Industrial：Braun美学的极简哑光壳",

        // Design Language 3
        dl3_number: "语言 03",
        dl3_title: "Urban Tactical",
        dl3_subtitle: "城市战术 / Gorpcore",
        dl3_f1: "军事色调：橄榄绿、卡其、沙漠色",
        dl3_f2: "D型环扣和挂绳锚点",
        dl3_f3: "MOLLE兼容设计元素",
        dl3_f4: "尼龙织带整合",
        dl3_f5: "户外机能配件化",
        dl3_f6: "与OrbitGear设计语言直接对齐",
        dl3_insight: "这是\"城市探险者\"身份认同的物化——即使通勤也要装备感。Gorpcore向手机配件的延伸创造了邮差包和机能服的完美搭档。",
        dl3_img: "Urban Tactical：军事色系带MOLLE元素的壳",

        // Chapter 6
        ch6_number: "第六章",
        ch6_title: "我们看到的方向",
        ch6_subtitle: "印尼手机壳市场正在发生的三个转变",

        // Transitions
        trans1_number: "01",
        trans1_from: "从\"保护\"",
        trans1_to: "到\"接口\"",
        trans1_desc: "手机壳正在成为连接配件生态系统的中枢。壳不再是终点而是平台——一个决定你的手机可以接入哪些额外功能的接口。",
        trans2_number: "02",
        trans2_from: "从\"品类\"",
        trans2_to: "到\"部落\"",
        trans2_desc: "审美认同正在取代功能需求成为主要购买驱动力。消费者选择的是彰显部落成员身份的壳，而非最佳保护规格。",
        trans3_number: "03",
        trans3_from: "从\"产品\"",
        trans3_to: "到\"内容\"",
        trans3_desc: "价值正在被内容场域重新定义。手机壳的价值越来越多地取决于它在桌面布置、EDC平铺和对镜自拍中的表现——而非实验室测试。",

        // Closing
        closing_quote: "\"懂热带的，才能赢得热带。\"",

        // Footer
        footer_title: "印度尼西亚手机壳趋势报告 2025",
        footer_source: "数据来源：Shopee、Tokopedia、Lazada、TikTok、Lemon8、YouTube"
    }
};

// Current language
let currentLang = 'en';

// Initialize i18n
function initI18n() {
    // Check localStorage for saved language preference
    const savedLang = localStorage.getItem('reportLang');
    if (savedLang && translations[savedLang]) {
        currentLang = savedLang;
    }

    // Update language toggle buttons
    updateLangButtons();

    // Apply translations
    applyTranslations();
}

// Update language toggle button states
function updateLangButtons() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.lang === currentLang) {
            btn.classList.add('active');
        }
    });
}

// Switch language
function switchLanguage(lang) {
    if (translations[lang] && lang !== currentLang) {
        currentLang = lang;
        localStorage.setItem('reportLang', lang);
        updateLangButtons();
        applyTranslations();

        // Update html lang attribute
        document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
    }
}

// Apply translations to all elements with data-i18n attribute
function applyTranslations() {
    const t = translations[currentLang];

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        if (t[key]) {
            el.innerHTML = t[key];
        }
    });
}

// ==========================================
// Smooth Scroll Navigation
// ==========================================

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ==========================================
// Bar Chart Animation
// ==========================================

function initBarChartAnimation() {
    const observerOptions = {
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.querySelectorAll('.bar-fill').forEach(bar => {
                    const width = bar.style.width;
                    bar.style.width = '0';
                    setTimeout(() => {
                        bar.style.width = width;
                    }, 100);
                });
            }
        });
    }, observerOptions);

    document.querySelectorAll('.chart-container').forEach(chart => {
        observer.observe(chart);
    });
}

// ==========================================
// Header Scroll Effect
// ==========================================

function initHeaderScroll() {
    const header = document.querySelector('.header');
    if (!header) return;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            header.style.background = 'rgba(10, 10, 10, 0.98)';
        } else {
            header.style.background = 'rgba(10, 10, 10, 0.95)';
        }
    });
}

// ==========================================
// Fade In Animation on Scroll
// ==========================================

function initFadeInAnimation() {
    const fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.chapter-header, .quote-block, .data-card, .tribe-card, .transition-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        fadeObserver.observe(el);
    });
}

// ==========================================
// Initialize Everything on DOM Ready
// ==========================================

document.addEventListener('DOMContentLoaded', function() {
    initI18n();
    initSmoothScroll();
    initBarChartAnimation();
    initHeaderScroll();
    initFadeInAnimation();
    initTypewriterEffect();
});

// Export for global access
window.switchLanguage = switchLanguage;

// ==========================================
// Typewriter Effect for Quotes and Titles
// ==========================================

function initTypewriterEffect() {
    // 需要打字机效果的元素选择器
    const typewriterSelectors = [
        '.quote-text',
        '.chapter-title',
        '.section-subtitle',
        '.keyword-title',
        '.arena-title',
        '.design-lang-title',
        '.transition-title'
    ];

    // 收集所有需要打字机效果的元素
    const typewriterElements = [];
    typewriterSelectors.forEach(selector => {
        document.querySelectorAll(selector).forEach(el => {
            typewriterElements.push(el);
        });
    });

    // 为每个元素准备打字机效果
    typewriterElements.forEach(el => {
        // 保存原始文本和HTML
        el.dataset.originalText = el.textContent;
        el.dataset.originalHtml = el.innerHTML;
        el.classList.add('typewriter-ready');
    });

    // 使用 Intersection Observer 触发动画
    const typewriterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && entry.target.classList.contains('typewriter-ready')) {
                startTypewriterAnimation(entry.target);
                typewriterObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.3,
        rootMargin: '0px 0px -50px 0px'
    });

    typewriterElements.forEach(el => {
        typewriterObserver.observe(el);
    });
}

function startTypewriterAnimation(element) {
    const text = element.dataset.originalText;
    const isQuote = element.classList.contains('quote-text');

    // 移除准备状态，添加激活状态
    element.classList.remove('typewriter-ready');
    element.classList.add('typewriter-active');

    if (isQuote) {
        // 引用块使用逐字显示效果
        typewriterQuote(element, text);
    } else {
        // 标题使用逐字显示效果
        typewriterTitle(element, text);
    }
}

function typewriterQuote(element, text) {
    // 清空元素
    element.innerHTML = '';

    // 创建字符 span
    const chars = text.split('');
    chars.forEach((char, index) => {
        const span = document.createElement('span');
        span.className = 'char';
        span.textContent = char === ' ' ? '\u00A0' : char; // 使用不间断空格
        element.appendChild(span);
    });

    // 添加光标
    const cursor = document.createElement('span');
    cursor.className = 'typing-cursor';
    element.appendChild(cursor);

    // 逐字显示
    const charSpans = element.querySelectorAll('.char');
    let charIndex = 0;
    const typingSpeed = 25; // 每个字符的显示间隔（毫秒）

    function typeNextChar() {
        if (charIndex < charSpans.length) {
            charSpans[charIndex].classList.add('visible');
            charIndex++;
            setTimeout(typeNextChar, typingSpeed);
        } else {
            // 打字完成后，延迟移除光标
            setTimeout(() => {
                cursor.style.animation = 'none';
                cursor.style.opacity = '0';
                setTimeout(() => cursor.remove(), 300);
            }, 1500);
        }
    }

    // 开始打字动画
    setTimeout(typeNextChar, 300);
}

function typewriterTitle(element, text) {
    // 清空元素
    element.innerHTML = '';

    // 创建字符 span
    const chars = text.split('');
    chars.forEach((char, index) => {
        const span = document.createElement('span');
        span.className = 'title-char';
        if (char === ' ') {
            span.classList.add('space');
            span.innerHTML = '&nbsp;';
        } else {
            span.textContent = char;
        }
        element.appendChild(span);
    });

    // 逐字显示
    const charSpans = element.querySelectorAll('.title-char');
    let charIndex = 0;
    const typingSpeed = 40; // 标题打字速度稍慢

    function typeNextChar() {
        if (charIndex < charSpans.length) {
            charSpans[charIndex].classList.add('visible');
            charIndex++;
            setTimeout(typeNextChar, typingSpeed);
        }
    }

    // 开始打字动画
    setTimeout(typeNextChar, 200);
}
