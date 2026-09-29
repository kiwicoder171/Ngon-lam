export interface Dish {
  id: string;
  category: 'signature' | 'soup' | 'rolls' | 'mains' | 'drinks';
  nameTh: string;
  nameEn: string;
  nameVi: string;
  price?: number;
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
  spiciness?: number;
  isVegetarianOption?: boolean;
}

export interface Review {
  id: string;
  source: 'google' | 'wongnai';
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
    badgeTh: '⭐ ยอดนิยมอันดับ 1',
    badgeEn: '⭐ #1 Best Seller',
    image: '/images/dishes/pho-bo.jpg',
    shortDescTh: 'น้ำซุปใสกลมกล่อมเคี่ยวกระดูกเนื้อ 12 ชม. เสิร์ฟพร้อมเนื้อสไลซ์นุ่มฉ่ำ ลวกสุกกำลังดี โรยผักชีฝรั่งและพริกไทยหอมกรุ่น',
    shortDescEn: 'Slow-simmered rich clear beef broth infused with star anise and cinnamon, served with tender beef slices and homemade meatballs.',
    detailedDescTh: 'หัวใจของเฝอหง่อนหลำคือความอดทนในการเคี่ยวกระดูกวัวคัดพิเศษข้ามคืนกว่า 12 ชั่วโมง เผาขิงและหอมแดงให้หอมกรุ่น ผสานสมุนไพร 8 ชนิดจากเวียดนาม น้ำซุปจึงหวานลึกธรรมชาติโดยไม่ต้องพึ่งผงชูรส เส้นเฝอนำเข้าเหนียวนุ่มกำลังดี',
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
    badgeTh: '🔥 ซิกเนเจอร์ 30 ปี',
    badgeEn: '🔥 30-Yr Heritage Signature',
    image: '/images/dishes/nem-nuong.jpg',
    shortDescTh: 'หมูปั้นก้อนย่างเตาถ่านหอมกรุ่น เสิร์ฟบนจานหลุมพร้อมแผ่นแป้งญวน น้ำจิ้มสูตรลับใส่ตับบดและงาคั่ว พร้อมเครื่องเคียงมะเฟืองและผักสดชุดใหญ่',
    shortDescEn: 'Charcoal-grilled pork patties served with delicate rice paper, organic herbs, fresh garlic, green mango, and our famous savory roasted liver dip.',
    detailedDescTh: 'แหนมเนืองสูตรดั้งเดิมแท้ๆ ที่ขึ้นชื่อที่สุดของร้านหง่อนหลำ หมูสับปรุงรสอย่างพิถีพิถันปั้นก้อนแล้วย่างเตาถ่านสดๆ ทีละชุด เพื่อให้ได้กลิ่นสโมกกี้อันเป็นเอกลักษณ์ เสิร์ฟคู่กับน้ำจิ้มอุ่นๆ ที่เคี่ยวจากตับบด มันหวาน ข้าวเหนียว และงาขาวคั่วหอมฟุ้ง',
    detailedDescEn: 'Our acclaimed signature dish. Hand-kneaded pork patties grilled over hot charcoal for an irresistible smoky aroma. Served alongside our labor-intensive warm dipping sauce made from braised pork liver, sweet rice paste, and golden toasted sesame.',
    ingredientsTh: ['หมูย่างเตาถ่านสูตรพิเศษ', 'น้ำจิ้มตับบดงาคั่วลับเฉพาะ', 'แผ่นแป้งญวนเหนียวนุ่ม', 'กล้วยดิบและมะเฟือง/มะม่วงเปรี้ยว', 'แตงกวา พริกขี้หนู และกระเทียมสด', 'ผักกาดหอม สะระแหน่ โหระพา แพว'],
    ingredientsEn: ['Charcoal grilled pork skewers', 'Secret liver-sesame dipping sauce', 'Soaked Vietnamese rice paper', 'Green plantain & sour mango', 'Fresh chilies & garlic cloves', 'Garden-fresh Vietnamese herbs'],
    chefNoteTh: 'การห่อแบบต้นตำรับ: วางผักกาดหอม ตามด้วยแผ่นแป้ง เนื้อหมู เครื่องเคียงทุกอย่างทีละนิด ราดน้ำจิ้มตับบด แล้วทานในคำเดียว',
    chefNoteEn: 'The traditional bite: layer the fresh lettuce leaf first, add soft rice paper, a piece of warm grilled pork, pinch of all condiments, generous spoonful of liver sauce, and wrap!',
    spiciness: 0,
  },
  {
    id: 'banh-cuon',
    category: 'rolls',
    nameTh: 'ข้าวเกรียบปากหม้อญวน แป้งสดนุ่มใส',
    nameEn: 'Fresh Steamed Rice Rolls (Bánh Cuốn)',
    nameVi: 'Bánh Cuốn Nhân Thịt Tôm',
    badgeTh: '🥣 นึ่งสดจานต่อจาน',
    badgeEn: '🥣 Steamed to Order',
    image: '/images/dishes/banh-cuon.jpg',
    shortDescTh: 'แป้งสดนึ่งบางใสห่อไส้หมูสับกุ้งสดผัดเห็ดหูหนู โรยหอมเจียวเหลืองกรอบ เสิร์ฟคู่น้ำจิ้มรสกลมกล่อมและหมูยออุบลแท้',
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
    id: 'goi-cuon-tom',
    category: 'rolls',
    nameTh: 'เปาะเปี๊ยะสดกุ้ง ผักสมุนไพรสด',
    nameEn: 'Fresh Vietnamese Prawn Summer Rolls',
    nameVi: 'Gỏi Cuốn Tôm Tươi',
    badgeTh: '🍤 กุ้งสดตัวโต',
    badgeEn: '🍤 Fresh Prawns',
    image: '/images/dishes/goi-cuon-tom.jpg',
    shortDescTh: 'แผ่นแป้งญวนใสสอดไส้กุ้งสดตัวโต เนื้อหวานกรอบ แนมด้วยผักกาดหอม สะระแหน่ และเส้นหมี่ จิ้มน้ำจิ้มถั่วบดสูตรเข้มข้น',
    shortDescEn: 'Translucent rice paper wrapped around plump poached prawns, fresh mint, crisp lettuce, and vermicelli, served with rich hoisin-peanut sauce.',
    detailedDescTh: 'เมนูสุขภาพยอดนิยมที่เน้นความสดใหม่ของวัตถุดิบ กุ้งขาวคัดไซส์ลวกสุกกำลังหวานกรอบ ห่อด้วยแผ่นแป้งญวนบางเหนียว สอดไส้สมุนไพรสดนานาชนิดที่ให้กลิ่นหอมชื่นใจทุกคำ จิ้มกับน้ำจิ้มถั่วบดสูตรเฉพาะของร้านที่เคี่ยวจนหอมมันกลมกล่อม',
    detailedDescEn: 'Light, vibrant, and bursting with freshness. Plump sweet prawns rolled tightly with fragrant Asian herbs, tender rice vermicelli, and crisp greens, accompanied by our house-made toasted peanut dip.',
    ingredientsTh: ['กุ้งสดลวกตัวโต', 'แผ่นแป้งญวนเวียดนาม', 'เส้นหมี่ลวกนุ่ม', 'ผักกาดหอมและสะระแหน่สด', 'น้ำจิ้มถั่วลิสงบดเข้มข้น'],
    ingredientsEn: ['Plump poached prawns', 'Thin rice paper wrapper', 'Rice vermicelli', 'Fresh garden mint & lettuce', 'Savory peanut dipping sauce'],
    chefNoteTh: 'จุ่มน้ำจิ้มถั่วบดให้ชุ่มคำ เพื่อให้ได้ความหวานมันของถั่วผสานกับความกรอบเด้งของเนื้อกุ้ง',
    chefNoteEn: 'Dip generously in the crushed peanut sauce for the perfect balance of savory creaminess and herbaceous crunch.',
    spiciness: 0,
  },
  {
    id: 'goi-cuon-thit',
    category: 'rolls',
    nameTh: 'เปาะเปี๊ยะสดหมู ห่อแป้งบางนุ่ม',
    nameEn: 'Fresh Pork Summer Rolls',
    nameVi: 'Gỏi Cuốn Thịt Heo',
    badgeTh: '🥢 ต้นตำรับหง่อนหลำ',
    badgeEn: '🥢 House Classic',
    image: '/images/dishes/goi-cuon-thit.jpg',
    shortDescTh: 'เปาะเปี๊ยะสดไส้หมูหมักสมุนไพรนุ่มละมุน ห่อผักสลัดสดสะอาด เสิร์ฟบนจานเซรามิกเอกลักษณ์ของร้านหง่อนหลำ',
    shortDescEn: 'Delicate fresh rice rolls filled with tender seasoned pork, fresh garden herbs, and vermicelli, served with traditional savory dip.',
    detailedDescTh: 'เปาะเปี๊ยะสดสูตรพิเศษที่เสิร์ฟในจานเซรามิกสกรีนชื่อร้าน Ngon-Lam เนื้อหมูหมักเครื่องเทศเวียดนามจนนุ่ม ห่อคู่กับผักสดและไข่เจียวเส้นบาง แป้งเหนียวนุ่มไม่ขาดง่าย ทานคู่กับน้ำจิ้มรสกลมกล่อม',
    detailedDescEn: 'A customer staple served on Ngon Lam signature tableware. Tender sliced pork seasoned with delicate Vietnamese spices, rolled with crisp salad greens and fresh herbs.',
    ingredientsTh: ['เนื้อหมูหมักสมุนไพรนุ่ม', 'แผ่นแป้งญวนเหนียวนุ่ม', 'ไข่เจียวเส้นบาง', 'ผักกาดหอมและสมุนไพรสด', 'น้ำจิ้มสูตรโบราณ'],
    ingredientsEn: ['Seasoned tender pork', 'Vietnamese rice paper', 'Shredded omelet', 'Fresh lettuce & herbs', 'Traditional dipping sauce'],
    chefNoteTh: 'เหมาะสำหรับทานเป็นจานเรียกน้ำย่อยเพื่อสุขภาพ รสชาติเบาสบายท้อง',
    chefNoteEn: 'The ideal wholesome appetizer to start your meal on a refreshing note.',
    spiciness: 0,
  },
  {
    id: 'cha-gio',
    category: 'rolls',
    nameTh: 'เปาะเปี๊ยะทอดเวียดนาม แป้งกรอบไส้แน่น',
    nameEn: 'Crispy Vietnamese Spring Rolls',
    nameVi: 'Chả Giò Giòn Rụm',
    badgeTh: '✨ แป้งกรอบสีทอง',
    badgeEn: '✨ Crispy & Golden',
    image: '/images/dishes/cha-gio.jpg',
    shortDescTh: 'แป้งเปาะเปี๊ยะญวนทอดจนกรอบฟูสีทอง ไม่อมน้ำมัน ไส้หมูสับเห็ดหูหนูและวุ้นเส้น เสิร์ฟพร้อมน้ำจิ้มอาจาดรสเปรี้ยวหวาน',
    shortDescEn: 'Crispy golden fried spring rolls stuffed with seasoned minced pork, wood-ear mushrooms, and glass noodles, served with sweet-tangy nuoc cham.',
    detailedDescTh: 'ความพิเศษอยู่ที่การใช้แผ่นแป้งเปาะเปี๊ยะแบบเวียดนามดั้งเดิม เมื่อทอดด้วยไฟที่แม่นยำจะได้ผิวสัมผัสที่เป็นเกล็ดกรอบละเอียด แตกในปาก ไส้ด้านในยังคงความชุ่มฉ่ำของเนื้อหมูและเห็ดหอม ทานคู่กับผักกาดหอมและใบสะระแหน่ตัดเลี่ยนได้ลงตัว',
    detailedDescEn: 'Crafted with paper-thin imported Vietnamese wrappers that fry to a light, bubbly, delicate crunch. Packed with seasoned pork, earthy wood ear mushrooms, and fragrant shallots.',
    ingredientsTh: ['แผ่นแป้งญวนทอดกรอบ', 'หมูบดคัดพิเศษ', 'เห็ดหูหนูและเห็ดหอม', 'วุ้นเส้นอบนุ่ม', 'น้ำจิ้มหวานอมเปรี้ยว (Nước Chấm)'],
    ingredientsEn: ['Crispy rice wrappers', 'Seasoned minced pork', 'Wood ear & shiitake mushrooms', 'Bean thread vermicelli', 'Sweet-sour pickled dipping sauce'],
    chefNoteTh: 'ห่อเปาะเปี๊ยะทอดด้วยผักกาดหอมและใบสะระแหน่ แล้วจิ้มน้ำจิ้มอาจาด ความเย็นสดชื่นของผักจะตัดกับความร้อนกรอบได้อย่างสมบูรณ์แบบ',
    chefNoteEn: 'Wrap a warm crispy roll inside a cool lettuce leaf with mint sprigs, then dip generously in nuoc cham sauce.',
    spiciness: 0,
  },
  {
    id: 'chao-tom',
    category: 'rolls',
    nameTh: 'กุ้งพันอ้อย ทอดสีทองบนก้านอ้อยหวาน',
    nameEn: 'Sugarcane Prawn Skewers (Chạo Tôm)',
    nameVi: 'Chạo Tôm Bọc Mía',
    badgeTh: '✨ ทอดสีทองกรอบนอกนุ่มเด้ง',
    badgeEn: '✨ Crispy & Juicy',
    image: '/images/dishes/chao-tom.jpg',
    shortDescTh: 'เนื้อกุ้งสดบดละเอียดปรุงรส พันบนก้านอ้อยหวานธรรมชาติแล้วทอดจนสีเหลืองทอง เสิร์ฟพร้อมเส้นหมี่ลวกและน้ำจิ้มสูตรเวียดนาม',
    shortDescEn: 'Minced seasoned prawn wrapped around sweet natural sugarcane skewers and golden-fried, served with fine rice vermicelli and dipping sauce.',
    detailedDescTh: 'หนึ่งในเมนูอาหารเวียดนามระดับชาววังที่ต้องใช้ความประณีตสูง เนื้อกุ้งทะเลสดบดจนเหนียวเด้ง ปรุงรสด้วยเครื่องเทศสูตรเฉพาะ นำมาพันรอบก้านอ้อยสดหวานธรรมชาติ เมื่อนำไปทอด ความหวานและกลิ่นหอมเฉพาะตัวของอ้อยจะซึมซับเข้าสู่เนื้อกุ้ง กัดคำไหนก็สัมผัสได้ถึงความกรอบนอก นุ่มเด้งฉ่ำใน เสิร์ฟคู่กับเส้นหมี่โรยน้ำมันกระเทียมและผักสด',
    detailedDescEn: 'An exquisite royal Vietnamese specialty. Fresh sea prawns minced and hand-beaten until bouncy, seasoned and wrapped around natural sweet sugarcane sticks before frying to golden perfection. The subtle sweetness of the sugarcane infuses into the succulent prawn meat. Served with steamed vermicelli and fresh garden greens.',
    ingredientsTh: ['เนื้อกุ้งทะเลบดเหนียวเด้ง', 'ก้านอ้อยหวานธรรมชาติ', 'เส้นหมี่ขาวลวกโรยน้ำมันกระเทียม', 'ผักกาดหอมและสะระแหน่', 'น้ำจิ้มสูตรเวียดนาม'],
    ingredientsEn: ['Hand-minced sweet sea prawn', 'Natural fresh sugarcane stalk', 'Fine steamed vermicelli with scallion oil', 'Crisp lettuce & fresh herbs', 'Traditional dipping sauce'],
    chefNoteTh: 'หลังจากทานเนื้อกุ้งหมด สามารถเคี้ยวก้านอ้อยเพื่อลิ้มรสความหวานฉ่ำตามแบบฉบับดั้งเดิม',
    chefNoteEn: 'After savoring the juicy prawn, gently chew the sugarcane stick to enjoy its natural sweet nectar as tradition dictates.',
    spiciness: 0,
  },
  {
    id: 'banh-canh',
    category: 'soup',
    nameTh: 'ก๋วยจั๊บญวน น้ำซุปกระดูกหมูเข้มข้น',
    nameEn: 'Vietnamese Noodle Soup (Bánh Canh)',
    nameVi: 'Bánh Canh Chả Lụa',
    badgeTh: '🍲 ซุปหวานธรรมชาติ',
    badgeEn: '🍲 Rich Bone Broth',
    image: '/images/dishes/banh-canh.jpg',
    shortDescTh: 'เส้นก๋วยจั๊บญวนเหนียวนุ่มในน้ำซุปเคี่ยวกระดูกหมูและหัวไชเท้าจนหวานกลมกล่อม ท็อปด้วยหมูยอ หมูสับ และหอมเจียวเจียวสด',
    shortDescEn: 'Chewy handmade tapioca noodles in a hearty simmered pork and radish broth, loaded with Vietnamese pork roll, minced pork, and fragrant shallots.',
    detailedDescTh: 'เมนูน้ำซุปร้อนๆ คลายหนาวที่คนรักเส้นต้องหลงรัก เส้นก๋วยจั๊บญวนเหนียวนุ่มเป็นเอกลักษณ์ ต้มในน้ำซุปกระดูกหมูที่เคี่ยวนานจนได้ความหวานละมุนจากหัวไชเท้าและกระดูกหมูแท้ๆ โรยด้วยพริกไทยดำป่นและหอมเจียวหอมฟุ้ง',
    detailedDescEn: 'A beloved Vietnamese comfort noodle soup. Thick, bouncy tapioca noodles simmered in a savory pork bone broth with sweet daikon radish, layered with authentic chả lụa sausage and golden crispy shallots.',
    ingredientsTh: ['เส้นก๋วยจั๊บญวนสดเหนียวนุ่ม', 'น้ำซุปเคี่ยวกระดูกหมูและหัวไชเท้า', 'หมูยออุบลแท้สไลซ์', 'หมูสับหมักพริกไทย', 'หอมเจียวและผักชีฝรั่ง'],
    ingredientsEn: ['Handcrafted tapioca noodles', 'Slow-simmered pork bone broth', 'Authentic Vietnamese pork roll', 'Seasoned minced pork', 'Crispy fried shallots & culantro'],
    chefNoteTh: 'โรยพริกไทยป่นเพิ่มความเผ็ดร้อน และทานตอนร้อนๆ เพื่อความเหนียวนุ่มที่สุดของเส้น',
    chefNoteEn: 'Dust with cracked black pepper and enjoy piping hot for the ultimate comforting texture.',
    spiciness: 0,
  },
  {
    id: 'bo-luc-lac',
    category: 'mains',
    nameTh: 'เนื้อลุกลัก ผัดพริกไทยดำฮานอย',
    nameEn: 'Vietnamese Shaking Beef (Bò Lúc Lắc)',
    nameVi: 'Bò Lúc Lắc',
    badgeTh: '🥩 เนื้อนุ่มชุ่มฉ่ำ',
    badgeEn: '🥩 Tender Sautéed Beef',
    image: '/images/dishes/bo-luc-lac.jpg',
    shortDescTh: 'เนื้อวัวคัดพิเศษหั่นเต๋า หมักเครื่องเทศผัดสะดุ้งไฟแรงกับหอมหัวใหญ่และพริกไทยดำ ซอสฉ่ำเข้าเนื้อ เสิร์ฟพร้อมสลัดมะเขือเทศและมะนาว',
    shortDescEn: 'Tender cubes of premium beef seared at high heat with caramelized onions and cracked black pepper, served with fresh tomato salad and lime.',
    detailedDescTh: 'จานเนื้อชื่อดังสไตล์ฝรั่งเศส-เวียดนามที่ใช้เทคนิคการกระดกกระทะไฟแรง (Lúc Lắc แปลว่า เขย่า) เนื้อวัวนุ่มชุ่มฉ่ำเคลือบซอสกระเทียมพริกไทยดำรสชาติเข้มข้น หอมกลิ่นคั่วกระทะ เสิร์ฟเคียงสลัดผักกรอบและมะนาวสด',
    detailedDescEn: 'Iconic French-Vietnamese wok-seared beef tenderloin tossed with sweet onions, rich garlic soy glaze, and coarse black pepper. Seared fast to lock in juices, served with crisp salad and fresh lime.',
    ingredientsTh: ['เนื้อวัวคัดพิเศษหมักนุ่ม', 'หอมหัวใหญ่ผัดหวาน', 'ซอสกระเทียมพริกไทยดำสูตรพิเศษ', 'สลัดมะเขือเทศและกะหล่ำปลี', 'มะนาวสด'],
    ingredientsEn: ['Premium tender beef cubes', 'Caramelized sweet onions', 'Savory black pepper glaze', 'Fresh garden salad & tomato', 'Fresh lime wedge'],
    chefNoteTh: 'บีบมะนาวสดลงบนเนื้อก่อนทาน ความเปรี้ยวของมะนาวจะตัดรสชาติซอสให้กลมกล่อมลงตัวอย่างยิ่ง',
    chefNoteEn: 'Squeeze the lime directly over the beef right before tasting to awaken the deep savory flavors.',
    spiciness: 1,
  },
  {
    id: 'thit-luc-lac',
    category: 'mains',
    nameTh: 'หมูลุกลัก ซอสกระทะร้อนเข้มข้น',
    nameEn: 'Vietnamese Sautéed Pork (Thịt Lúc Lắc)',
    nameVi: 'Thịt Heo Lúc Lắc',
    badgeTh: '🥓 ซอสสูตรเฉพาะ',
    badgeEn: '🥓 Savory Glazed Pork',
    image: '/images/dishes/thit-luc-lac.jpg',
    shortDescTh: 'สันคอหมูนุ่มหมักซอสสูตรเด็ด ผัดไฟแรงจนหอมกรุ่น ซอสเคลือบชิ้นหมูฉ่ำๆ ทานคู่สลัดราดน้ำสลัดโบราณและน้ำจิ้ม 2 สไตล์',
    shortDescEn: 'Succulent pork bites wok-tossed in a savory, aromatic glaze with sweet onions, served with classic fresh salad and house dips.',
    detailedDescTh: 'สำหรับผู้ที่ชื่นชอบเนื้อหมู สันคอหมูคัดพิเศษหมักเครื่องเทศจนนุ่มฉ่ำ ผัดในกระทะไฟแรงจนซอสเคลือบทุกชิ้นอย่างทั่วถึง รสชาติกลมกล่อมหอมกระเทียมพริกไทย เสิร์ฟพร้อมน้ำสลัดโบราณสูตรเฉพาะของร้าน',
    detailedDescEn: 'Tender marinated pork pieces flash-seared in high wok heat with our aromatic garlic-soy glaze. Juicy, rich, and paired with crisp refreshing salad and classic dipping sauces.',
    ingredientsTh: ['สันคอหมูหมักนุ่ม', 'ซอสผัดกระทะร้อนรสกลมกล่อม', 'สลัดผักและมะเขือเทศสด', 'น้ำสลัดโบราณหง่อนหลำ', 'น้ำจิ้มซีฟู้ดและน้ำจิ้มอาจาด'],
    ingredientsEn: ['Marinated tender pork collar', 'Wok-tossed savory glaze', 'Fresh tomato & cabbage slaw', 'Heritage house salad dressing', 'Duo dipping sauces'],
    chefNoteTh: 'ทานคู่กับข้าวสวยร้อนๆ หรือห่อด้วยผักสดก็เข้ากันได้ดีเยี่ยม',
    chefNoteEn: 'Pairs exceptionally with steaming jasmine rice or wrapped inside fresh crisp lettuce.',
    spiciness: 1,
  },
  {
    id: 'tom-ngon-lam',
    category: 'mains',
    nameTh: 'กุ้งหง่อนหลำ ซอสกระเทียมพริกไทย',
    nameEn: 'Signature Glazed Prawns with Vermicelli',
    nameVi: 'Tôm Sốt Ngon Lam',
    badgeTh: '👑 ซิกเนเจอร์ประจำร้าน',
    badgeEn: '👑 House Signature',
    image: '/images/dishes/tom-ngon-lam.jpg',
    shortDescTh: 'กุ้งสดตัวใหญ่ผัดเคลือบซอสสูตรเฉพาะของร้าน รสชาติเค็มหวานกลมกล่อม เสิร์ฟพร้อมเส้นหมี่ลวกนุ่มโรยต้นหอม',
    shortDescEn: 'Jumbo prawns pan-seared in a golden garlic-caramel reduction, served atop soft steamed vermicelli and fresh garden herbs.',
    detailedDescTh: 'เมนูซิกเนเจอร์ที่ตั้งชื่อตามร้าน กุ้งสดตัวโตเนื้อแน่นผัดเคลือบซอสสีอำพันที่มีรสชาติเค็มหวานกลมกล่อมเป็นเอกลักษณ์ เสิร์ฟคู่กับเส้นหมี่ขาวลวกนุ่มโรยน้ำมันกระเทียมเจียวและต้นหอม',
    detailedDescEn: 'Named after our restaurant, this house pride features jumbo sweet prawns glazed in a luscious garlic reduction, paired with delicate rice vermicelli and fresh scallion oil.',
    ingredientsTh: ['กุ้งสดตัวโตคัดพิเศษ', 'ซอสคาราเมลกระเทียมสูตรหง่อนหลำ', 'เส้นหมี่ขาวลวกนุ่ม', 'น้ำมันต้นหอมและกระเทียมเจียว', 'ผักกาดหอมสด'],
    ingredientsEn: ['Jumbo sweet prawns', 'Signature garlic caramel glaze', 'Steamed rice vermicelli', 'Scallion oil & fried garlic', 'Fresh crisp lettuce'],
    chefNoteTh: 'คลุกเส้นหมี่กับน้ำซอสเคลือบกุ้งในจาน ทานพร้อมเนื้อกุ้งเด้งกรอบ',
    chefNoteEn: 'Toss the vermicelli in the savory pan sauce before eating with each succulent prawn.',
    spiciness: 0,
  },
  {
    id: 'banh-xeo',
    category: 'mains',
    nameTh: 'ขนมเบื้องญวน แป้งบางกรอบสีทอง',
    nameEn: 'Crispy Vietnamese Crepe (Bánh Xèo)',
    nameVi: 'Bánh Xèo Giòn Rụm',
    badgeTh: '🥞 แป้งกรอบฟู',
    badgeEn: '🥞 Golden Crisp Crepe',
    image: '/images/dishes/banh-xeo.jpg',
    shortDescTh: 'แป้งเครปสีทองบางกรอบฟู ไส้ถั่วงอก กุ้ง หมูสับ และเต้าหู้ ทานแนมกับผักสดหลากหลายชนิดและน้ำจิ้มอาจาด',
    shortDescEn: 'Crispy, lacy turmeric rice flour crepe packed with sautéed shrimp, pork, bean sprouts, and herbs, served with sweet-sour dip.',
    detailedDescTh: 'ขนมเบื้องญวนสีทองอร่ามที่ทอดในกระทะเหล็กจนแป้งบางกรอบแตกฟอง ไส้ด้านในแน่นด้วยกุ้ง หมูสับ ถั่วงอกสด และสมุนไพร กลิ่นหอมขมิ้นอ่อนๆ เสิร์ฟพร้อมผักเคียงและน้ำจิ้มอาจาดรสหวานอมเปรี้ยว',
    detailedDescEn: 'A golden masterpiece cooked in a sizzling pan until wafer-thin and crackly. Filled with fresh prawns, seasoned pork, and crunchy bean sprouts, eaten wrapped in leafy greens with sweet nuoc cham.',
    ingredientsTh: ['แป้งข้าวเจ้าผสมขมิ้นทอดกรอบ', 'กุ้งสดและหมูสับปรุงรส', 'ถั่วงอกสดและเต้าหู้เหลือง', 'แตงกวาและผักเคียง', 'น้ำจิ้มอาจาดรสเปรี้ยวหวาน'],
    ingredientsEn: ['Turmeric rice crepe batter', 'Fresh shrimp & minced pork', 'Crisp bean sprouts & tofu', 'Cucumber & garden herbs', 'Sweet-sour pickled dipping sauce'],
    chefNoteTh: 'ตัดเป็นชิ้นพอดีคำ วางบนผักกาดหอม ใส่สะระแหน่ ราดน้ำจิ้มแล้วห่อทานกรอบๆ',
    chefNoteEn: 'Cut into bite-sized pieces, wrap with crisp lettuce and herbs, and drizzle with sauce for contrasting textures.',
    spiciness: 0,
  },
  {
    id: 'thit-nuong-la-lot',
    category: 'mains',
    nameTh: 'หมูย่างใบชะพลู เตาถ่านหอมกรุ่น',
    nameEn: 'Grilled Pork Wrapped in Betel Leaves',
    nameVi: 'Thịt Nướng Lá Lốt',
    badgeTh: '🌿 กลิ่นหอมเป็นเอกลักษณ์',
    badgeEn: '🌿 Aromatic Wild Betel',
    image: '/images/dishes/thit-nuong-la-lot.jpg',
    shortDescTh: 'หมูหมักปรุงรสห่อด้วยใบชะพลูสดแล้วนำไปย่างเตาถ่านจนส่งกลิ่นหอมเฉพาะตัว โรยถั่วลิสงคั่วและหอมเจียว เสิร์ฟพร้อมเส้นหมี่',
    shortDescEn: 'Seasoned minced pork wrapped in fragrant wild betel leaves and charcoal-grilled to perfection, topped with crushed peanuts and shallots.',
    detailedDescTh: 'หนึ่งในเมนูย่างเตาถ่านที่ได้รับคำชมมากที่สุดในรีวิว Google Maps ใบชะพลูสดห่อหุ้มหมูสับปรุงรส ย่างไฟอ่อนจนน้ำมันในเนื้อซึมเข้าใบชะพลู กลิ่นหอมสมุนไพรเตะจมูก เสิร์ฟพร้อมเส้นหมี่ลวกและน้ำจิ้มรสเด็ด',
    detailedDescEn: 'A standout customer favorite celebrated in our Google reviews. Ground pork infused with lemongrass and spices, tightly wrapped in piper sarmentosum (wild betel) leaves and slow-grilled over hot coals.',
    ingredientsTh: ['ใบชะพลูสดคัดใบ', 'หมูสับหมักเครื่องเทศเวียดนาม', 'ถั่วลิสงคั่วบดใหม่', 'หอมเจียวเหลืองกรอบ', 'เส้นหมี่ขาวลวกนุ่ม'],
    ingredientsEn: ['Fresh wild betel leaves', 'Spiced ground pork filling', 'Roasted crushed peanuts', 'Crispy fried shallots', 'Steamed fine vermicelli'],
    chefNoteTh: 'กลิ่นหอมของใบชะพลูย่างจะเข้ากันได้ดีที่สุดเมื่อทานคู่กับเส้นหมี่และผักสมุนไพรสด',
    chefNoteEn: 'The herbal warmth of grilled betel leaves pairs harmoniously with vermicelli and cool herbs.',
    spiciness: 0,
  },
  {
    id: 'nem-chua-ran',
    category: 'mains',
    nameTh: 'แหนมคลุกสมุนไพร ข้าวทอดกรอบ',
    nameEn: 'Crispy Rice Salad with Cured Pork (Nem Khluk)',
    nameVi: 'Nộm Nem Chua Cơm Cháy',
    badgeTh: '🌶️ ครบรสจัดจ้าน',
    badgeEn: '🌶️ Tangy & Crunchy',
    image: '/images/dishes/nem-chua-ran.jpg',
    shortDescTh: 'ข้าวทอดกรอบนอกนุ่มใน คลุกเคล้าแหนมสด ขิงซอย ถั่วลิสงคั่ว พริกแห้งทอด และผักสมุนไพร บีบมะนาวสดครบรสชาติแซ่บกลมกล่อม',
    shortDescEn: 'Crisp seasoned rice croquettes broken and tossed with tangy cured pork, fresh ginger julienne, roasted peanuts, fried chilies, and lime.',
    detailedDescTh: 'จานโปรดของสายชอบรสจัดจ้าน ข้าวปั้นปรุงรสทอดจนผิวนอกกรอบสีทอง นำมาขยำคลุกเคล้ากับแหนมหมูรสเปรี้ยวกำลังดี ขิงสดซอยละเอียด ถั่วลิสงคั่วหอม และพริกขี้หนูแห้งทอดกรอบ บีบมะนาวสดเพิ่มความจี๊ดจ๊าด',
    detailedDescEn: 'A sensational contrast of textures and bright flavors. Golden fried rice balls crumbled and hand-tossed with sour fermented pork, fragrant slivered ginger, toasted peanuts, and aromatic mint.',
    ingredientsTh: ['ข้าวทอดกรอบสูตรโบราณ', 'แหนมสดคุณภาพดี', 'ขิงสดซอยละเอียด', 'ถั่วลิสงคั่วใหม่', 'พริกแห้งทอดกรอบและมะนาวสด'],
    ingredientsEn: ['Crispy seasoned rice balls', 'Tangy cured pork (nem chua)', 'Julienned young ginger', 'Toasted whole peanuts', 'Crispy fried chilies & fresh lime'],
    chefNoteTh: 'ห่อด้วยใบชะพลูหรือผักกาดหอมเป็นคำๆ ความกรอบของข้าวและความเปรี้ยวของแหนมจะผสานกันอย่างลงตัว',
    chefNoteEn: 'Wrap spoonfuls in fresh betel or lettuce leaves for a handheld flavor bomb.',
    spiciness: 2,
  },
  {
    id: 'com-chien-oliu',
    category: 'mains',
    nameTh: 'ข้าวผัดหนำเลี๊ยบ หอมกลิ่นคั่วกระทะ',
    nameEn: 'Black Olive Fried Rice with Crispy Shallots',
    nameVi: 'Cơm Chiên Quả Cà Na',
    badgeTh: '🍚 เม็ดข้าวร่วนหอม',
    badgeEn: '🍚 Wok-Tossed Fragrant',
    image: '/images/dishes/com-chien-oliu.jpg',
    shortDescTh: 'ข้าวสวยเม็ดร่วนผัดคลุกเคล้าหนำเลี๊ยบและหมูสับด้วยไฟแรงจนหอมกลิ่นกระทะ โรยหอมเจียวกรอบ เสิร์ฟพร้อมพริกขี้หนู มะนาว และแตงกวา',
    shortDescEn: 'Wok-charred jasmine rice tossed with savory Chinese black olives, minced pork, and golden shallots, accompanied by fresh lime and chilies.',
    detailedDescTh: 'เมนูจานเดียวที่สั่งกันแทบทุกโต๊ะ ข้าวสวยหอมมะลิผัดด้วยไฟแรงจัดกับเนื้อหนำเลี๊ยบสับและหมูสับจนเม็ดข้าวเคลือบสีม่วงเข้มสวยงาม ได้กลิ่นหอมกระทะไหม้เบาๆ โรยหน้าด้วยหอมเจียวกรอบ เสิร์ฟพร้อมเครื่องเคียงมะนาวและพริกสด',
    detailedDescEn: 'A beloved staple bursting with deep savory umami. Jasmine rice stir-fried in a roaring hot wok with finely minced black olives and pork, topped with crispy fried shallots and served with fresh lime.',
    ingredientsTh: ['ข้าวหอมมะลิผัดร่วน', 'หนำเลี๊ยบคัดพิเศษสับละเอียด', 'หมูสับปรุงรส', 'หอมเจียวกรอบหอม', 'พริกขี้หนูซอยและมะนาวสด'],
    ingredientsEn: ['Wok-charred jasmine rice', 'Minced black olives', 'Seasoned ground pork', 'Crispy golden shallots', 'Fresh birds eye chilies & lime'],
    chefNoteTh: 'บีบมะนาวสดและคลุกเคล้าพริกขี้หนูซอยก่อนทาน รสเปรี้ยวเผ็ดจะช่วยชูรสชาติเค็มมันของหนำเลี๊ยบให้โดดเด่นขึ้น',
    chefNoteEn: 'Squeeze lime and mix fresh chilies throughout before enjoying for optimal savory-tangy balance.',
    spiciness: 1,
  },
  {
    id: 'ca-phe-viet',
    category: 'drinks',
    nameTh: 'กาแฟดริปเวียดนามแท้ (Cà Phê Sữa Đá)',
    nameEn: 'Traditional Vietnamese Drip Coffee',
    nameVi: 'Cà Phê Sữa Đá',
    badgeTh: '☕ เมล็ดดาลัดคั่วเข้ม',
    badgeEn: '☕ Dalat Robusta Roast',
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
    source: 'google',
    author: 'Thanaporn W.',
    authorTypeTh: 'Google Local Guide (ระดับ 7)',
    authorTypeEn: 'Google Local Guide (Level 7)',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop',
    rating: 5,
    dateTh: 'สัปดาห์ที่แล้ว',
    dateEn: '1 week ago',
    category: 'nem',
    textTh: 'ร้านอาหารเวียดนามระดับตำนานย่านสะพานเหลือง-จุฬาฯ ทานมาเกิน 15 ปีตั้งแต่สมัยเรียน แหนมเนืองคือที่สุด หมูย่างเตาถ่านหอมๆ น้ำจิ้มสูตรลับรสชาติกลมกล่อมไม่เหมือนใคร ผักสดให้มาแบบจัดเต็ม สะอาด เติมได้ไม่อั้น ประทับใจเสมอ',
    textEn: 'A legendary Vietnamese spot in Saphan Lueang - Chula. I have been dining here for over 15 years since my student days. The Nem Nướng is unbeatable — smoky charcoal-grilled pork patties with a rich, unique secret dipping sauce. The fresh herb basket is huge, crisp, and unlimited.',
    dishRecommendedTh: 'แหนมเนืองชุดใหญ่ & ผักสดไม่อั้น',
    dishRecommendedEn: 'Nem Nướng Platter & Fresh Herb Basket'
  },
  {
    id: 'rev-2',
    source: 'google',
    author: 'David L.',
    authorTypeTh: 'Google Reviewer (Expat in Bangkok)',
    authorTypeEn: 'Google Reviewer (Expat in Bangkok)',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
    rating: 5,
    dateTh: '2 สัปดาห์ก่อน',
    dateEn: '2 weeks ago',
    category: 'pho',
    textTh: 'One of the most authentic Vietnamese comfort food spots near Chula and Samyan! The Grilled Pork in Betel Leaves (หมูย่างใบชะพลู) and the Beef Phở are exceptional. The broth is clean, slow-simmered, and soothing without heavy MSG. Staff is warm and food comes out surprisingly fast.',
    textEn: 'One of the most authentic Vietnamese comfort food spots near Chula and Samyan! The Grilled Pork in Betel Leaves and Beef Phở are exceptional. The broth is clean, slow-simmered, and soothing without heavy MSG. Staff is warm and food comes out surprisingly fast.',
    dishRecommendedTh: 'หมูย่างใบชะพลู & เฝอเนื้อพิเศษ',
    dishRecommendedEn: 'Betel Leaf Pork & Special Beef Phở'
  },
  {
    id: 'rev-wongnai-1',
    source: 'wongnai',
    author: 'Ploy P. (Wongnai Elite)',
    authorTypeTh: 'Wongnai Elite • Top Reviewer',
    authorTypeEn: 'Wongnai Elite • Top Reviewer',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=200&auto=format&fit=crop',
    rating: 5,
    dateTh: 'สัปดาห์ก่อน',
    dateEn: '1 week ago',
    category: 'nem',
    textTh: 'ร้านอาหารเวียดนามเก่าแก่ย่านสะพานเหลือง ย้ายมาที่จุฬา ซอย 9 ร้านกว้างขวางขึ้น สะอาดสะอ้าน เมนูประจำที่ต้องสั่งคือ แหนมเนืองชุดใหญ่ หมูย่างหอมเตาถ่าน น้ำจิ้มสูตรตับบดงาคั่วโบราณเข้มข้นเป็นเอกลักษณ์ ข้าวเกรียบปากหม้อนุ่มลื่น กุ้งพันอ้อยชิ้นโต ให้ผักสดแบบจัดเต็มไม่มีกั๊ก ทานกี่ครั้งก็รักษามาตรฐานได้ดีมาก',
    textEn: 'A classic Vietnamese institution from Saphan Lueang, now at Chula Soi 9 with a spacious, clean dining hall. Must-order: Grand Nem Nướng set with smoky charcoal-grilled pork and their signature roasted liver & sesame dipping sauce. Bánh Cuốn is silky smooth, and sugarcane shrimp is plump and juicy. Fresh herbs are bountiful and crisp!',
    dishRecommendedTh: 'แหนมเนือง & กุ้งพันอ้อย',
    dishRecommendedEn: 'Nem Nướng & Sugarcane Shrimp'
  },
  {
    id: 'rev-3',
    source: 'google',
    author: 'คุณพิมพรรณ รัตนศิริ',
    authorTypeTh: 'Google Local Guide (ครอบครัวสามย่าน)',
    authorTypeEn: 'Google Local Guide (Family Diner)',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop',
    rating: 5,
    dateTh: 'เดือนที่แล้ว',
    dateEn: '1 month ago',
    category: 'nem',
    textTh: 'ข้าวเกรียบปากหม้อแป้งนุ่มบางเฉียบ ไส้หมูสับเห็ดหูหนูแน่นๆ โรยหอมเจียวเจียวใหม่กรอบหอม ปอเปี๊ยะทอดก็กรอบไม่อมน้ำมัน ทานกับผักสดตัดเลี่ยนได้ดีมาก ร้านติดแอร์นั่งสบาย เหมาะกับการพาครอบครัวมาทานมื้อกลางวันและเย็น',
    textEn: 'The steamed rice crepes (Bánh Cuốn) are wafer-thin and velvety, packed with savory seasoned pork and topped with freshly fried shallots. The crispy spring rolls are light, golden, and not oily at all. Clean air-conditioned room perfect for family dining.',
    dishRecommendedTh: 'ข้าวเกรียบปากหม้อ & ปอเปี๊ยะทอด',
    dishRecommendedEn: 'Bánh Cuốn & Crispy Spring Rolls'
  },
  {
    id: 'rev-wongnai-2',
    source: 'wongnai',
    author: 'Nutthawut K.',
    authorTypeTh: 'Wongnai Top 1% Eater',
    authorTypeEn: 'Wongnai Top 1% Eater',
    avatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=200&auto=format&fit=crop',
    rating: 5,
    dateTh: '2 สัปดาห์ก่อน',
    dateEn: '2 weeks ago',
    category: 'pho',
    textTh: 'ร้านประจำสมัยเรียนจุฬาฯ วันนี้กลับมาทานรสชาติยังอร่อยเหมือนเดิมไม่มีเปลี่ยน เฝอน้ำซุปใสรสกลมกล่อม ซดคล่องคอมาก หมูย่างใบชะพลูหอมกลิ่นย่างถ่านเตะจมูก ทานกับเส้นหมี่และน้ำจิ้มหวานเปรี้ยวเข้ากันสุดๆ อาหารออกเร็วมาก ราคาเป็นมิตรกับกระเป๋าเงิน',
    textEn: 'My favorite spot during my university years at Chula. Came back today and the flavors are still just as wonderful. The clear phở broth is deeply soothing and comforting. Charcoal grilled pork wrapped in betel leaves is exceptionally aromatic. Speedy service and very reasonable prices.',
    dishRecommendedTh: 'เฝอน้ำซุปใส & หมูย่างใบชะพลู',
    dishRecommendedEn: 'Clear Phở & Betel Leaf Pork'
  },
  {
    id: 'rev-4',
    source: 'google',
    author: 'คุณอนุชา เกียรติสกุล',
    authorTypeTh: 'ลูกค้าประจำย่านพระราม 4 - สามย่าน',
    authorTypeEn: 'Rama 4 - Samyan Resident',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop',
    rating: 5,
    dateTh: '2 เดือนก่อน',
    dateEn: '2 months ago',
    category: 'vibe',
    textTh: 'ร้านเวียดนามประจำบ้านเวลาอยากทานผักเพื่อสุขภาพ เมนูหลากหลายมีให้เลือกเยอะมาก สั่งเป็นเซตคือคุ้มค่า ปริมาณเยอะ รสชาติกลมกล่อมถูกปากคนไทย คุณภาพสม่ำเสมอมาตลอด 20 กว่าปี เดินทางสะดวกมาก เดินจาก MRT สามย่านมานิดเดียว',
    textEn: 'Our family staple restaurant for healthy, vegetable-rich meals. Huge variety with over 70 menu choices, and the combo sets offer fantastic value and portion sizes. Consistently delicious for over 20 years. Very convenient 5-min walk from MRT Samyan.',
    dishRecommendedTh: 'เซตแหนมเนือง & กุ้งพันอ้อย',
    dishRecommendedEn: 'Nem Nướng Set & Sugarcane Shrimp'
  },
  {
    id: 'rev-wongnai-3',
    source: 'wongnai',
    author: 'Chula Food Guide',
    authorTypeTh: 'Wongnai Community Reviewer',
    authorTypeEn: 'Wongnai Community Reviewer',
    avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=200&auto=format&fit=crop',
    rating: 5,
    dateTh: '3 สัปดาห์ก่อน',
    dateEn: '3 weeks ago',
    category: 'vibe',
    textTh: 'ร้านติดแอร์นั่งสบาย เหมาะกับพาเพื่อนหรือครอบครัวมาเลี้ยงสังสรรค์ เมนูมีให้เลือกเยอะกว่า 70 เมนู ชอบที่ผักสดล้างมาสะอาดมาก น้ำจิ้มขอเพิ่มได้ตลอด ใครชอบอาหารสุขภาพแนะนำเลยครับ เดินจาก MRT สามย่าน ประตู 2 แค่ 5 นาที',
    textEn: 'Comfortable air-conditioned space perfect for gathering with friends or family. Massive menu with over 70 authentic choices. The fresh vegetables are meticulously washed and unlimited. Highly recommended for healthy dining, only 5 mins walk from MRT Samyan Exit 2.',
    dishRecommendedTh: 'ยำไหลบัวกุ้งสด & แหนมเนือง',
    dishRecommendedEn: 'Lotus Stem Salad & Nem Nướng'
  }
];

export const DELIVERY_LINKS = {
  lineMan: 'https://lin.ee/FcVemHp?openExternalBrowser=1',
  robinhood: 'https://d.robinhood.co.th/s/GHsPi55?lang=TH',
  wongnai: 'https://www.wongnai.com/r/278219zl',
  googleMaps: 'https://maps.google.com/?q=ร้านอาหารเวียดนาม+หง่อนหลำ+จุฬา+ซอย+9',
};

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
