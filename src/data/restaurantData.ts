export interface Dish {
  id: string;
  category: 'signature' | 'soup' | 'rolls' | 'drinks';
  nameTh: string;
  nameEn: string;
  nameVi: string;
  price: number;
  badgeTh?: string;
  badgeEn?: string;
  image: string;
  shortDescTh: string;
  shortDescEn: string;
  detailedDescTh: string;
  detailedDescEn: string;
  ingredientsTh: string[];
  ingredientsEn: string[];
  chefNoteTh: string;
  chefNoteEn: string;
  spiciness?: number; // 0-3
  isVegetarianOption?: boolean;
}

export interface Review {
  id: string;
  author: string;
  authorTypeTh: string;
  authorTypeEn: string;
  avatar: string;
  rating: number;
  dateTh: string;
  dateEn: string;
  category: 'pho' | 'nem' | 'vibe';
  textTh: string;
  textEn: string;
  dishRecommendedTh?: string;
  dishRecommendedEn?: string;
}

export const DISHES: Dish[] = [
  {
    id: 'pho-bo',
    category: 'soup',
    nameTh: 'เฝอเนื้อพิเศษ (ซุปเคี่ยวข้ามคืน 12 ชม.)',
    nameEn: 'Signature Beef Phở (12-Hour Broth)',
    nameVi: 'Phở Bò Đặc Biệt',
    price: 135,
    badgeTh: '⭐ ยอดนิยมอันดับ 1',
    badgeEn: '⭐ #1 Best Seller',
    image: 'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?q=80&w=900&auto=format&fit=crop',
    shortDescTh: 'น้ำซุปใสกลมกล่อมเคี่ยวกระดูกเนื้อ 12 ชม. เสิร์ฟพร้อมเนื้อสไลซ์นุ่ม ลิ้นวัวตุ๋น ลูกชิ้นเนื้อโฮมเมด และผักชีฝรั่ง',
    shortDescEn: 'Slow-simmered rich clear beef broth infused with star anise and cinnamon, served with tender beef slices and homemade meatballs.',
    detailedDescTh: 'หัวใจของเฝองอนหลำคือความอดทนในการเคี่ยวกระดูกวัวคัดพิเศษข้ามคืนกว่า 12 ชั่วโมง เผาขิงและหอมแดงให้หอมกรุ่น ผสานสมุนไพร 8 ชนิดจากเวียดนาม น้ำซุปจึงหวานลึกธรรมชาติโดยไม่ต้องพึ่งผงชูรส เส้นเฝอนำเข้าเหนียวนุ่มกำลังดี',
    detailedDescEn: 'The heart of our kitchen: marrow bones roasted and slow-simmered overnight for 12 hours with blackened ginger, roasted shallots, and hand-selected spices from northern Vietnam. Clear, aromatic, and deeply comforting.',
    ingredientsTh: ['เนื้อวัวพรีเมียมสไลซ์', 'เนื้อเปื่อยตุ๋นยาจีน', 'ลูกชิ้นเนื้อแท้', 'เส้นเฝอเวียดนามเหนียวนุ่ม', 'หอมหัวใหญ่สไลซ์บาง', 'ผักชีฝรั่งและใบโหระพา'],
    ingredientsEn: ['Premium sliced beef', 'Slow-braised beef brisket', 'Housemade beef balls', 'Authentic rice noodles', 'Thin sliced sweet onions', 'Culantro & Thai basil'],
    chefNoteTh: 'แนะนำให้ชิมน้ำซุปคำแรกก่อนปรุง แล้วบีบมะนาวสดแนมด้วยพริกเผาคั่วเองของทางร้านเพื่อเปิดมิติรสชาติ',
    chefNoteEn: 'Sip the pure broth first before seasoning. Add a squeeze of fresh lime and our house-roasted chili oil for authentic northern Vietnamese depth.',
    spiciness: 1,
  },
  {
    id: 'nem-nuong',
    category: 'rolls',
    nameTh: 'แหนมเนืองชุดใหญ่ (น้ำจิ้มตับบดงาคั่ว)',
    nameEn: 'Authentic Nem Nướng Platter',
    nameVi: 'Nem Nướng Nha Trang',
    price: 190,
    badgeTh: '🔥 ซิกเนเจอร์ 30 ปี',
    badgeEn: '🔥 30-Yr Heritage Signature',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=900&auto=format&fit=crop',
    shortDescTh: 'หมูปั้นก้อนย่างเตาถ่านหอมกรุ่น เสิร์ฟพร้อมแผ่นแป้งญวน น้ำจิ้มสูตรลับใส่ตับบดและงาคั่ว พร้อมเครื่องเคียงและผักสดชุดใหญ่',
    shortDescEn: 'Charcoal-grilled pork patties served with delicate rice paper, organic herbs, fresh garlic, green mango, and our famous savory roasted liver dip.',
    detailedDescTh: 'แหนมเนืองสูตรดั้งเดิมแท้ๆ ที่ขึ้นชื่อที่สุดของร้านงอนหลำ หมูสับปรุงรสอย่างพิถีพิถันปั้นก้อนแล้วย่างเตาถ่านสดๆ ทีละชุด เพื่อให้ได้กลิ่นสโมกกี้อันเป็นเอกลักษณ์ เสิร์ฟคู่กับน้ำจิ้มอุ่นๆ ที่เคี่ยวจากตับบด มันหวาน ข้าวเหนียว และงาขาวคั่วหอมฟุ้ง',
    detailedDescEn: 'Our acclaimed signature dish. Hand-kneaded pork patties grilled over hot charcoal for an irresistible smoky aroma. Served alongside our labor-intensive warm dipping sauce made from braised pork liver, sweet rice paste, and golden toasted sesame.',
    ingredientsTh: ['หมูย่างเตาถ่านสูตรพิเศษ', 'น้ำจิ้มตับบดงาคั่วลับเฉพาะ', 'แผ่นแป้งญวนเหนียวนุ่ม', 'กล้วยดิบและมะเฟือง/มะม่วงเปรี้ยว', 'แตงกวา พริกขี้หนู และกระเทียมสด', 'ผักกาดหอม สะระแหน่ โหระพา แพว'],
    ingredientsEn: ['Charcoal grilled pork skewers', 'Secret liver-sesame dipping sauce', 'Soaked Vietnamese rice paper', 'Green plantain & sour mango', 'Fresh chilies & garlic cloves', 'Garden-fresh Vietnamese herbs'],
    chefNoteTh: 'การห่อแบบต้นตำรับ: วางผักกาดหอม ตามด้วยแผ่นแป้ง เนื้อหมู เครื่องเคียงทุกอย่างทีละนิด ราดน้ำจิ้มตับบด แล้วทานในคำเดียว',
    chefNoteEn: 'The traditional bite: layer the fresh lettuce leaf first, add soft rice paper, a piece of warm grilled pork, pinch of all condiments, generous spoonful of liver sauce, and wrap!',
    spiciness: 0,
  },
  {
    id: 'cha-gio',
    category: 'rolls',
    nameTh: 'ปอเปี๊ยะทอดเวียดนาม แป้งกรอบไส้แน่น',
    nameEn: 'Crispy Vietnamese Spring Rolls',
    nameVi: 'Chả Giò Giòn Rụm',
    price: 110,
    badgeTh: '✨ กรอบไม่อมน้ำมัน',
    badgeEn: '✨ Crispy & Golden',
    image: 'https://images.unsplash.com/photo-1541518763669-27fef04b14ea?q=80&w=900&auto=format&fit=crop',
    shortDescTh: 'แป้งปอเปี๊ยะญวนทอดสีทองกรอบนาน ไส้หมูสับเห็ดหูหนู วุ้นเส้น และแครอท เสิร์ฟคู่น้ำจิ้มอาจาดรสกลมกล่อม',
    shortDescEn: 'Crispy golden fried spring rolls stuffed with seasoned minced pork, wood-ear mushrooms, and glass noodles, served with sweet-tangy nuoc cham.',
    detailedDescTh: 'ความพิเศษอยู่ที่การใช้แผ่นแป้งเปาะเปี๊ยะแบบเวียดนามดั้งเดิม เมื่อทอดด้วยไฟที่แม่นยำจะได้ผิวสัมผัสที่เป็นเกล็ดกรอบละเอียด แตกในปาก ไส้ด้านในยังคงความชุ่มฉ่ำของเนื้อหมูและเห็ดหอม ทานคู่กับผักกาดหอมและใบสะระแหน่ตัดเลี่ยนได้ลงตัว',
    detailedDescEn: 'Crafted with paper-thin imported Vietnamese wrappers that fry to a light, bubbly, delicate crunch. Packed with seasoned pork, earthy wood ear mushrooms, and fragrant shallots.',
    ingredientsTh: ['แผ่นแป้งญวนทอดกรอบ', 'หมูบดคัดพิเศษ', 'เห็ดหูหนูและเห็ดหอม', 'วุ้นเส้นอบนุ่ม', 'น้ำจิ้มหวานอมเปรี้ยว (Nước Chấm)'],
    ingredientsEn: ['Crispy rice wrappers', 'Seasoned minced pork', 'Wood ear & shiitake mushrooms', 'Bean thread vermicelli', 'Sweet-sour pickled dipping sauce'],
    chefNoteTh: 'ห่อปอเปี๊ยะทอดด้วยผักกาดหอมและใบสะระแหน่ แล้วจิ้มน้ำจิ้มอาจาด ความเย็นสดชื่นของผักจะตัดกับความร้อนกรอบได้อย่างสมบูรณ์แบบ',
    chefNoteEn: 'Wrap a warm crispy roll inside a cool lettuce leaf with mint sprigs, then dip generously in nuoc cham sauce.',
    spiciness: 0,
  },
  {
    id: 'banh-cuon',
    category: 'rolls',
    nameTh: 'ปากหม้อญวนแป้งสด ไส้หมูสับเห็ดหอม',
    nameEn: 'Steamed Rice Rolls (Bánh Cuốn)',
    nameVi: 'Bánh Cuốn Nóng',
    price: 120,
    badgeTh: '🥣 นึ่งสดจานต่อจาน',
    badgeEn: '🥣 Steamed to Order',
    image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?q=80&w=900&auto=format&fit=crop',
    shortDescTh: 'แป้งข้าวเจ้าสดนึ่งบนปากหม้อบางใสนุ่มลื่น ไส้หมูสับผัดพริกไทยดำและเห็ด โรยหอมเจียวทำเองและหมูยออุบลแท้',
    shortDescEn: 'Delicate freshly steamed rice crepes rolled with seasoned minced pork and shallots, topped with homemade fried shallots and Vietnamese ham.',
    detailedDescTh: 'กรรมวิธีการทำปากหม้อญวนแบบโบราณที่ละเลงแป้งสดลงบนผ้าขาวบางเหนือหม้อไอน้ำเดือดพล่าน แป้งจะบางเฉียบและนุ่มนวลลิ้น ไส้หมูสับผัดกับเห็ดหอมจนเข้าเนื้อ โรยด้วยหอมเจียวเจียวใหม่ทุกวัน เสิร์ฟพร้อมหมูยอนึ่งอย่างดี',
    detailedDescEn: 'Made fresh per order on a traditional steam cloth. The rice batter is spread wafer-thin, filled with sautéed savory pork and minced black fungus, rolled gently, and dressed with fragrant crispy golden shallots.',
    ingredientsTh: ['แป้งข้าวเจ้านึ่งสดบางใส', 'หมูสับผัดเห็ดหูหนูและหอมแดง', 'หมูยอนึ่งเนื้อแน่น', 'หอมเจียวกรอบหอม', 'น้ำจิ้มปรุงรสสไตล์ฮานอย'],
    ingredientsEn: ['Fresh steamed rice crepe', 'Sautéed minced pork & mushroom', 'Premium steamed chả lụa pork sausage', 'Freshly fried crispy shallots', 'Light seasoned fish sauce dip'],
    chefNoteTh: 'ต้องทานตอนร้อนๆ ทันทีที่ยกเสิร์ฟ จะได้สัมผัสความนุ่มละมุนของแป้งที่ละลายในปาก',
    chefNoteEn: 'Enjoy piping hot upon delivery to appreciate the velvety texture of the steamed rice roll.',
    spiciness: 0,
  },
  {
    id: 'pho-ga',
    category: 'soup',
    nameTh: 'เฝอไก่บ้านฉีก น้ำซุปสมุนไพรหอมละมุน',
    nameEn: 'Traditional Free-Range Chicken Phở',
    nameVi: 'Phở Gà Ta',
    price: 125,
    badgeTh: '🌿 ซุปใสคล่องคอ',
    badgeEn: '🌿 Light & Aromatic',
    image: 'https://images.unsplash.com/photo-1617093727343-374698b1b08d?q=80&w=900&auto=format&fit=crop',
    shortDescTh: 'น้ำซุปเคี่ยวโครงไก่และสมุนไพรสดสีทองใส ไก่บ้านเนื้อหนึบนุ่มกำลังดี กลิ่นหอมใบมะกรูดและพริกไทยขาว',
    shortDescEn: 'A comforting golden chicken broth simmered with roasted ginger and shallots, topped with tender hand-pulled chicken and fragrant herbs.',
    detailedDescTh: 'ทางเลือกยอดนิยมสำหรับผู้ที่ชอบซุปใสรสชาติละมุน น้ำซุปเคี่ยวจากไก่บ้านจนได้สีทองใสตามธรรมชาติ ไร้ความมันเลี่ยน เนื้อไก่ฉีกเป็นชิ้นพอดีคำ มีความฉ่ำนุ่ม โรยหน้าด้วยผักชีใบเลื่อยและใบมะกรูดซอยละเอียดแบบฉบับฮานอยดั้งเดิม',
    detailedDescEn: 'Simmered gently for hours with whole free-range chickens, yellow rock sugar, and roasted ginger. Lighter than beef phở, delicately perfumed with thin ribbons of kaffir lime leaf and fresh coriander.',
    ingredientsTh: ['ไก่บ้านต้มสุกฉีกชิ้นพอดีคำ', 'น้ำซุปไก่ทองใสเคี่ยวนาน', 'เส้นเฝอเวียดนาม', 'ใบมะกรูดซอยละเอียด', 'ต้นหอมและผักชีฝรั่ง'],
    ingredientsEn: ['Hand-pulled free-range chicken', 'Clear golden chicken broth', 'Silky phở noodles', 'Shredded kaffir lime leaves', 'Fresh scallions & cilantro'],
    chefNoteTh: 'เข้ากันได้ดีกับน้ำส้มสายชูกระเทียมดองของทางร้าน เพิ่มความสดชื่นและตัดรสได้กลมกล่อม',
    chefNoteEn: 'Pairs wonderfully with our house pickled garlic vinegar for an authentic northern zest.',
    spiciness: 0,
  },
  {
    id: 'ca-phe-viet',
    category: 'drinks',
    nameTh: 'กาแฟดริปเวียดนามแท้ (ร้อน / เย็น)',
    nameEn: 'Traditional Vietnamese Drip Coffee',
    nameVi: 'Cà Phê Sữa Đá',
    price: 65,
    badgeTh: '☕ เมล็ดดาลัดคั่วเข้ม',
    badgeEn: '☕ Dalat Roast Robusta',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=900&auto=format&fit=crop',
    shortDescTh: 'กาแฟโรบัสต้าคั่วเข้มจากที่ราบสูงดาลัด ดริปผ่านฟิลเตอร์โลหะ Phin แบบดั้งเดิม ผสานนมข้นหวานเข้มข้น หอมมันกลมกล่อม',
    shortDescEn: 'Bold slow-dripped Vietnamese Robusta coffee brewed via traditional stainless Phin filter, blended with sweet condensed milk.',
    detailedDescTh: 'สัมผัสประสบการณ์กาแฟเวียดนามแท้ๆ เมล็ดกาแฟส่งตรงจากเมืองดาลัด คั่วเข้มสไตล์ฝรั่งเศส ให้โน้ตช็อกโกแลตเข้มข้น ดริปหยดต่อหยดผ่านถ้วยดริปฟินสแตนเลส ผสมกับนมข้นหวานอย่างลงตัว ให้รสชาติเข้มข้น หอมกรุ่น ดื่มแล้วสดชื่นตลอดวัน',
    detailedDescEn: 'Authentic slow drip experience using premium dark roast beans sourced directly from the Dalat highlands. Thick, chocolatey, and delightfully potent, stirred over sweet condensed milk and poured over crushed ice.',
    ingredientsTh: ['เมล็ดกาแฟโรบัสต้าดาลัดแท้', 'นมข้นหวานคุณภาพดี', 'น้ำแข็งหลอดสะอาด'],
    ingredientsEn: ['Authentic Dalat Robusta beans', 'Sweetened condensed milk', 'Crushed ice'],
    chefNoteTh: 'สำหรับแบบเย็น ทิ้งให้ดริปจนหมดแก้วแล้วคนนมข้นให้ละลายเข้ากันก่อนเทลงแก้วน้ำแข็ง',
    chefNoteEn: 'Allow the phin filter to drip completely, then vigorously stir the coffee into the condensed milk before pouring over ice.',
    spiciness: 0,
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'rev-1',
    author: 'K. Tanaporn W.',
    authorTypeTh: 'ลูกค้าประจำ 12 ปี (Local Guide)',
    authorTypeEn: 'Regular Diner for 12 Years (Local Guide)',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop',
    rating: 5,
    dateTh: 'สัปดาห์ที่แล้ว',
    dateEn: '1 week ago',
    category: 'nem',
    textTh: 'เป็นร้านอาหารเวียดนามอันดับ 1 ในใจย่านจุฬาฯ เลยค่ะ กินมาตั้งแต่สมัยเรียนจนตอนนี้พาลูกมากิน แหนมเนืองน้ำจิ้มตับบดคือที่สุดในกรุงเทพฯ หอมงาคั่วเข้มข้น ผักสดสะอาดไม่อั้น เฝอก็น้ำซุปหวานกลมกล่อมมาก ราคาจับต้องได้สุดๆ',
    textEn: 'Hands down my favorite Vietnamese spot in Bangkok! Been eating here since my university days at Chula. The secret liver & sesame sauce for Nem Nướng is unbeatable. Generous crisp herbs and the phở broth has incredible depth without being greasy.',
    dishRecommendedTh: 'แหนมเนืองชุดใหญ่ & เฝอเนื้อพิเศษ',
    dishRecommendedEn: 'Nem Nướng Platter & Beef Phở'
  },
  {
    id: 'rev-2',
    author: 'Mark Henderson',
    authorTypeTh: 'นักท่องเที่ยวและ Expat ในไทย',
    authorTypeEn: 'Expat & Food Travel Writer',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
    rating: 5,
    dateTh: '3 สัปดาห์ก่อน',
    dateEn: '3 weeks ago',
    category: 'pho',
    textTh: 'I lived in Hanoi for two years, and Ngon Lam is the only place in central Bangkok that genuinely nails the clean, deeply aromatic 12-hour simmered Phở broth. The herbs are crisp and fresh, and the iced drip coffee is liquid gold.',
    textEn: 'I lived in Hanoi for two years, and Ngon Lam is the only place in central Bangkok that genuinely nails the clean, deeply aromatic 12-hour simmered Phở broth. The herbs are crisp and fresh, and the iced drip coffee is liquid gold.',
    dishRecommendedTh: 'Special Beef Phở & Cà phê sữa đá',
    dishRecommendedEn: 'Special Beef Phở & Cà phê sữa đá'
  },
  {
    id: 'rev-3',
    author: 'คุณพัชรินทร์ สุขเกษม',
    authorTypeTh: 'ครอบครัวย่านสามย่าน',
    authorTypeEn: 'Samyan Resident & Family Diner',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop',
    rating: 5,
    dateTh: 'เดือนที่แล้ว',
    dateEn: 'Last month',
    category: 'nem',
    textTh: 'ปอเปี๊ยะทอดที่นี่กรอบอร่อยมาก แป้งบางเป็นเกล็ด ไม่เหมือนร้านทั่วไปที่แป้งหนา ปากหม้อญวนก็นุ่มลื่นละลายในปาก คุณป้าเจ้าของร้านใจดี ยิ้มแย้มต้อนรับอบอุ่นเหมือนมากินข้าวบ้านเพื่อน แนะนำให้โทรจองก่อนถ้ามาช่วงเย็นวันเสาร์-อาทิตย์',
    textEn: 'The crispy spring rolls here are extraordinary — feather-light bubbly crunch without feeling heavy. Steamed bánh cuốn melts in your mouth. The hospitality is heartwarming like coming home for dinner. Call ahead if dining on weekend evenings!',
    dishRecommendedTh: 'ปอเปี๊ยะทอดเวียดนาม & ปากหม้อญวน',
    dishRecommendedEn: 'Crispy Spring Rolls & Bánh Cuốn'
  },
  {
    id: 'rev-4',
    author: 'ศิวกร เลิศวิจิตร',
    authorTypeTh: 'นิสิตจุฬาลงกรณ์มหาวิทยาลัย',
    authorTypeEn: 'Chulalongkorn University Alum',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop',
    rating: 5,
    dateTh: '2 เดือนก่อน',
    dateEn: '2 months ago',
    category: 'vibe',
    textTh: 'ร้านประจำของแก๊งเพื่อนเวลาอยากกินผักเพื่อสุขภาพ หรือเวลาต้องการซุปร้อนๆ บำรุงร่างกาย แนะนำเฝอเนื้อใส่พริกเผา บีบมะนาวสด หายเหนื่อยจากการอ่านหนังสือทันที เดินจาก MRT สามย่านแป๊บเดียว สะดวกมาก',
    textEn: 'Our go-to restaurant whenever we crave clean comfort food or need nourishing hot soup. Squeeze fresh lime and chili into the beef phở — instant bliss after long study sessions. Very easy walk from MRT Samyan.',
    dishRecommendedTh: 'เฝอเนื้อ & กาแฟดริป',
    dishRecommendedEn: 'Beef Phở & Drip Coffee'
  }
];

export interface RestaurantStatus {
  isOpen: boolean;
  statusTextTh: string;
  statusTextEn: string;
  hoursTextTh: string;
  hoursTextEn: string;
}

// Check real-time opening hours based on Bangkok timezone (UTC+7)
export const getRestaurantStatus = (): RestaurantStatus => {
  try {
    const now = new Date();
    // Convert to Bangkok time (UTC+7)
    const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
    const bangkokTime = new Date(utc + (3600000 * 7));
    
    const hours = bangkokTime.getHours();
    const minutes = bangkokTime.getMinutes();
    const currentMinutes = hours * 60 + minutes;

    // Open from 10:30 (630 min) to 20:30 (1230 min)
    const openMinutes = 10 * 60 + 30;
    const closeMinutes = 20 * 60 + 30;

    const isOpen = currentMinutes >= openMinutes && currentMinutes < closeMinutes;

    return {
      isOpen,
      statusTextTh: isOpen ? 'เปิดให้บริการอยู่ (ปิด 20:30 น.)' : 'ขณะนี้ร้านปิด (เปิด 10:30 น.)',
      statusTextEn: isOpen ? 'Open Now (Closes at 8:30 PM)' : 'Currently Closed (Opens at 10:30 AM)',
      hoursTextTh: 'เปิดบริการทุกวัน: 10:30 - 20:30 น.',
      hoursTextEn: 'Open Daily: 10:30 AM - 8:30 PM'
    };
  } catch {
    return {
      isOpen: true,
      statusTextTh: 'เปิดให้บริการอยู่ (10:30 - 20:30 น.)',
      statusTextEn: 'Open Daily (10:30 AM - 8:30 PM)',
      hoursTextTh: 'เปิดบริการทุกวัน: 10:30 - 20:30 น.',
      hoursTextEn: 'Open Daily: 10:30 AM - 8:30 PM'
    };
  }
};
