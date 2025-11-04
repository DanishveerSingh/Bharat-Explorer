const QUESTIONS = [
  {
    id: 1,
    category: "cuisine",
    region: "Andaman & Nicobar Island",
    question:
      "What is a central ingredient in Andaman & Nicobar's cuisine due to its abundant marine resources?",
    options: [
      "Imported spices",
      "Fresh seafood",
      "Dairy products",
      "Root vegetables",
    ],
    correct: "Fresh seafood",
  },
  {
    id: 2,
    category: "culture",
    region: "Andaman & Nicobar Island",
    question:
      "Handicrafts in the Andaman & Nicobar Islands are widely produced from which natural materials?",
    options: [
      "Shells and bamboo",
      "Silk and cotton",
      "Clay and terracotta",
      "Iron and brass",
    ],
    correct: "Shells and bamboo",
  },
  {
    id: 3,
    category: "cultural_sight",
    region: "Andaman & Nicobar Island",
    question:
      "Which historic site in Port Blair is a poignant reminder of India’s struggle for independence?",
    options: [
      "Cellular Jail",
      "Havelock Island",
      "Radhanagar Beach",
      "Ross Island",
    ],
    correct: "Cellular Jail",
  },
  {
    id: 4,
    category: "cuisine",
    region: "Andhra Pradesh",
    question:
      "What tangy chutney, made from sorrel leaves, is a staple in Andhra Pradesh?",
    options: [
      "Kalamkari",
      "Pesarattu",
      "Andhra Chicken Curry",
      "Gongura Pachadi",
    ],
    correct: "Gongura Pachadi",
  },
  {
    id: 5,
    category: "culture",
    region: "Andhra Pradesh",
    question:
      "Which classical dance form was born in a small village in Andhra Pradesh?",
    options: ["Kuchipudi", "Kalamkari", "Kudumbi", "Bharatanatyam"],
    correct: "Kuchipudi",
  },
  {
    id: 6,
    category: "cultural_sight",
    region: "Andhra Pradesh",
    question:
      "The Borra Caves in Andhra Pradesh are known for their magnificent formations of what?",
    options: ["Limestone", "Volcanic rock", "Granite", "Sandstone"],
    correct: "Limestone",
  },
  {
    id: 7,
    category: "cuisine",
    region: "Arunachal Pradesh",
    question: "What is Zan, a staple food in Arunachal Pradesh?",
    options: [
      "A fermented bamboo curry",
      "A type of flatbread",
      "A spicy noodle soup",
      "A simple millet porridge",
    ],
    correct: "A simple millet porridge",
  },
  {
    id: 8,
    category: "culture",
    region: "Arunachal Pradesh",
    question: "Arunachal Pradesh is often called the 'Land of the...' what?",
    options: ["Thunder Dragon", "Rising Sun", "White Orchids", "Red Rivers"],
    correct: "Rising Sun",
  },
  {
    id: 9,
    category: "cultural_sight",
    region: "Arunachal Pradesh",
    question:
      "Which famous monastery in Arunachal Pradesh stands grand and serene, its chants echoing through the mountains?",
    options: [
      "Namdroling Monastery",
      "Tawang Monastery",
      "Hemis Monastery",
      "Rumtek Monastery",
    ],
    correct: "Tawang Monastery",
  },
  {
    id: 10,
    category: "cuisine",
    region: "Assam",
    question: "What is Khaar, a unique Assamese dish?",
    options: [
      "A sweet rice cake",
      "An alkaline curry made with raw papaya",
      "A tangy fish curry",
      "A fermented bamboo shoot pickle",
    ],
    correct: "An alkaline curry made with raw papaya",
  },
  {
    id: 11,
    category: "culture",
    region: "Assam",
    question:
      "Muga silk, an ancient craft of Assam, is known for what exclusive color?",
    options: ["Emerald green", "Royal blue", "Golden", "Deep red"],
    correct: "Golden",
  },
  {
    id: 12,
    category: "cultural_sight",
    region: "Assam",
    question: "What is Majuli, a famous sight in Assam?",
    options: [
      "The state's capital city",
      "The world’s largest river island",
      "Home of the one-horned rhinoceros",
      "A sacred Shakti Peetha",
    ],
    correct: "The world’s largest river island",
  },
  {
    id: 13,
    category: "cuisine",
    region: "Bihar",
    question:
      "Thekua, a traditional sweet from Bihar, is made during which grand festival?",
    options: ["Diwali", "Chhath Puja", "Holi", "Bihu"],
    correct: "Chhath Puja",
  },
  {
    id: 14,
    category: "culture",
    region: "Bihar",
    question:
      "Madhubani painting, a world-renowned folk art from Bihar, originated in which region?",
    options: ["Magadh", "Mithila", "Anga", "Bhojpur"],
    correct: "Mithila",
  },
  {
    id: 15,
    category: "cultural_sight",
    region: "Bihar",
    question:
      "The Mahabodhi Temple at Bodh Gaya marks the site where Lord Buddha...",
    options: [
      "Attained enlightenment",
      "Passed away",
      "Was born",
      "Gave his first sermon",
    ],
    correct: "Attained enlightenment",
  },
  {
    id: 16,
    category: "cuisine",
    region: "Chhattisgarh",
    question: "What is Bafauri, a traditional delicacy from Chhattisgarh?",
    options: [
      "A crispy chickpea snack",
      "A sesame and jaggery laddoo",
      "Soft rice-flour dumplings",
      "Steamed lentil dumplings",
    ],
    correct: "Steamed lentil dumplings",
  },
  {
    id: 17,
    category: "culture",
    region: "Chhattisgarh",
    question:
      "Pandwani, a folk singing tradition from Chhattisgarh, narrates the epic tales of what?",
    options: [
      "The Ramayana",
      "Local deities",
      "The Mahabharata",
      "The harvest season",
    ],
    correct: "The Mahabharata",
  },
  {
    id: 18,
    category: "cultural_sight",
    region: "Chhattisgarh",
    question:
      "The majestic Chitrakote Falls in Chhattisgarh is often called the...",
    options: [
      '"Oldest Buddhist site"',
      '"Highest peak in the state"',
      '"Niagara of India"',
      '"Pride of Bastar"',
    ],
    correct: '"Niagara of India"',
  },
  {
    id: 19,
    category: "cuisine",
    region: "Delhi",
    question: "What is Daulat ki Chaat, a unique winter delicacy in Delhi?",
    options: [
      "A type of stuffed parantha",
      "An airy, frothy sweet treat",
      "A creamy Mughlai chicken dish",
      "A spicy chickpea curry",
    ],
    correct: "An airy, frothy sweet treat",
  },
  {
    id: 20,
    category: "culture",
    region: "Delhi",
    question:
      "Delhi’s culture is a rich tapestry woven from Mughal grandeur and which other two influences?",
    options: [
      "Tibetan Buddhism and tribal arts",
      "Dravidian traditions and colonial charm",
      "Punjabi vigor and cosmopolitan modernity",
      "Bengali literature and Maratha history",
    ],
    correct: "Punjabi vigor and cosmopolitan modernity",
  },
  {
    id: 21,
    category: "cultural_sight",
    region: "Delhi",
    question:
      "Which Delhi monument, a UNESCO World Heritage site, serves as the venue for the annual Independence Day celebrations?",
    options: ["India Gate", "Humayun's Tomb", "The Red Fort", "Qutub Minar"],
    correct: "The Red Fort",
  },
  {
    id: 22,
    category: "cuisine",
    region: "Goa",
    question:
      "Vindaloo, a famous Goan dish, was originally derived from which country's recipes?",
    options: ["British", "French", "Dutch", "Portuguese"],
    correct: "Portuguese",
  },
  {
    id: 23,
    category: "culture",
    region: "Goa",
    question: "What is Mando music in Goa?",
    options: [
      "A colorful Portuguese-influenced parade",
      "A blend of Konkani lyrics with Western harmonies",
      "An energetic rural dance",
      "A type of seafood",
    ],
    correct: "A blend of Konkani lyrics with Western harmonies",
  },
  {
    id: 24,
    category: "cultural_sight",
    region: "Goa",
    question: "The quaint Latin Quarter of Panaji is known for its...",
    options: [
      "Spice plantations and wildlife",
      "Portuguese-style houses and cobblestone streets",
      "Golden beaches and water sports",
      "Historic churches and forts",
    ],
    correct: "Portuguese-style houses and cobblestone streets",
  },
  {
    id: 25,
    category: "cuisine",
    region: "Gujarat",
    question: "What is Khandvi from Gujarat?",
    options: [
      "A soft, fermented rice and chickpea snack",
      "A colorful platter of many dishes",
      "A hearty mixed vegetable dish",
      "Rolled-up savory rolls made from gram flour",
    ],
    correct: "Rolled-up savory rolls made from gram flour",
  },
  {
    id: 26,
    category: "culture",
    region: "Gujarat",
    question:
      "Which lively dance, performed during Navratri in Gujarat, symbolizes fertility?",
    options: ["Ghoomar", "Garba", "Lavani", "Bhangra"],
    correct: "Garba",
  },
  {
    id: 27,
    category: "cultural_sight",
    region: "Gujarat",
    question:
      "Gir National Park in Gujarat is the last refuge for which animal?",
    options: [
      "Snow leopards",
      "Asiatic lions",
      "Bengal tigers",
      "One-horned rhinos",
    ],
    correct: "Asiatic lions",
  },
  {
    id: 28,
    category: "cuisine",
    region: "Haryana",
    question:
      "Kachri ki Chutney from Haryana is a tangy and spicy chutney prepared from what?",
    options: [
      "Millet porridge",
      "Dried beans",
      "Wild cucumbers",
      "Sweet pancakes",
    ],
    correct: "Wild cucumbers",
  },
  {
    id: 29,
    category: "culture",
    region: "Haryana",
    question: "What is Raagni, a famous part of Haryana's cultural fabric?",
    options: [
      "A form of folk singing",
      "A type of bright floral embroidery",
      "A traditional male attire",
      "A festive sweet dish",
    ],
    correct: "A form of folk singing",
  },
  {
    id: 30,
    category: "cultural_sight",
    region: "Haryana",
    question:
      "Which legendary battlefield of the Mahabharata is a sacred pilgrimage site in Haryana?",
    options: ["Morni Hills", "Panipat", "Kurukshetra", "Sultanpur"],
    correct: "Kurukshetra",
  },
  {
    id: 31,
    category: "cuisine",
    region: "Himachal Pradesh",
    question: "What is Chana Madra, a regional favorite from Himachal Pradesh?",
    options: [
      "A type of flatbread",
      "Chickpeas slow-cooked in a rich yogurt gravy",
      "A lavish thali served at celebrations",
      "A soft steamed wheat bread",
    ],
    correct: "Chickpeas slow-cooked in a rich yogurt gravy",
  },
  {
    id: 32,
    category: "culture",
    region: "Himachal Pradesh",
    question: "What is the Nati folk dance of Himachal Pradesh?",
    options: [
      "A traditional steamed bread",
      "A joyous expression performed in colorful costumes",
      "A week-long festival for local deities",
      "A type of woolen handicraft",
    ],
    correct: "A joyous expression performed in colorful costumes",
  },
  {
    id: 33,
    category: "cultural_sight",
    region: "Himachal Pradesh",
    question:
      "Spiti Valley in Himachal Pradesh is known for its stark, high-altitude desert landscape and...",
    options: [
      "Adventure sports like skiing",
      "Tea plantations",
      "Colonial-era Mall Road",
      "Ancient monasteries",
    ],
    correct: "Ancient monasteries",
  },
  {
    id: 34,
    category: "cuisine",
    region: "Jammu & Kashmir",
    question: "What is Kahwa, a traditional beverage from Jammu & Kashmir?",
    options: [
      "A long woolen cloak",
      "Baby potatoes in a spicy gravy",
      "A fragrant lamb curry",
      "Green tea infused with saffron, almonds, and spices",
    ],
    correct: "Green tea infused with saffron, almonds, and spices",
  },
  {
    id: 35,
    category: "culture",
    region: "Jammu & Kashmir",
    question:
      "What are Pherans, part of the traditional attire in the Kashmir valley?",
    options: [
      "Thick woolen robes from Ladakh",
      "Colorful skirts with blouses",
      "Long woolen cloaks",
      "A type of green tea",
    ],
    correct: "Long woolen cloaks",
  },
  {
    id: 36,
    category: "cultural_sight",
    region: "Jammu & Kashmir",
    question:
      "Dal Lake in Srinagar is famous for its tranquil waters and traditional wooden boats called what?",
    options: ["Kayaks", "Houseboats", "Shikaras", "Gondolas"],
    correct: "Shikaras",
  },
  {
    id: 37,
    category: "cuisine",
    region: "Jharkhand",
    question: "What is Rugra, a rare seasonal delicacy from Jharkhand?",
    options: [
      "A seasonal mushroom found in forests",
      "A deep-fried rice and lentil dish",
      "A type of tribal mural",
      "A soft rice-flour flatbread",
    ],
    correct: "A seasonal mushroom found in forests",
  },
  {
    id: 38,
    category: "culture",
    region: "Jharkhand",
    question:
      "Sohrai paintings from Jharkhand are beautiful tribal murals made using what?",
    options: [
      "Natural pigments",
      "Woven silk threads",
      "Inlaid metal",
      "Oil-based paints",
    ],
    correct: "Natural pigments",
  },
  {
    id: 39,
    category: "cultural_sight",
    region: "Jharkhand",
    question:
      "The Baidyanath Jyotirlinga Temple in Deoghar is one of the most revered shrines of which deity?",
    options: ["Goddess Durga", "Lord Shiva", "Lord Vishnu", "Lord Buddha"],
    correct: "Lord Shiva",
  },
  {
    id: 40,
    category: "cuisine",
    region: "Karnataka",
    question:
      "Ragi Mudde, a nourishing dish from Karnataka, is made from what?",
    options: [
      "A crisp golden crepe",
      "A type of classical music",
      "Finger millet balls",
      "A lentil and rice dish",
    ],
    correct: "Finger millet balls",
  },
  {
    id: 41,
    category: "culture",
    region: "Karnataka",
    question: "What is Yakshagana from Karnataka?",
    options: [
      "A New Year festival",
      "A vibrant theatrical dance-drama",
      "A form of classical music",
      "A type of sandalwood carving",
    ],
    correct: "A vibrant theatrical dance-drama",
  },
  {
    id: 42,
    category: "cultural_sight",
    region: "Karnataka",
    question:
      "The majestic ruins of Hampi, a UNESCO World Heritage Site, were the capital of which empire?",
    options: [
      "Vijayanagara Empire",
      "Mughal Empire",
      "Chola Empire",
      "Maurya Empire",
    ],
    correct: "Vijayanagara Empire",
  },
  {
    id: 43,
    category: "cuisine",
    region: "Kerala",
    question: "What is a Kerala Sadya?",
    options: [
      "A soft, delicate rice pancake",
      "A classical dance-drama",
      "A grand vegetarian feast served on a banana leaf",
      "A spicy fish curry with tamarind",
    ],
    correct: "A grand vegetarian feast served on a banana leaf",
  },
  {
    id: 44,
    category: "culture",
    region: "Kerala",
    question:
      "Which classical dance-drama from Kerala is known for its vivid costumes and intricate facial expressions?",
    options: ["Kathakali", "Bharatanatyam", "Kuchipudi", "Theyyam"],
    correct: "Kathakali",
  },
  {
    id: 45,
    category: "cultural_sight",
    region: "Kerala",
    question:
      "The serene backwaters of Alleppey are threaded with canals and dotted with what?",
    options: [
      "Tea and spice plantations",
      "Dutch palaces",
      "Ancient forts",
      "Traditional houseboats",
    ],
    correct: "Traditional houseboats",
  },
  {
    id: 46,
    category: "cuisine",
    region: "Lakshadweep Island",
    question:
      "Tuna Curry, a local favorite in Lakshadweep, is typically simmered in fragrant spices and what?",
    options: ["Yogurt", "Coconut milk", "Mustard oil", "Tamarind paste"],
    correct: "Coconut milk",
  },
  {
    id: 47,
    category: "culture",
    region: "Lakshadweep Island",
    question:
      "Handicrafts in Lakshadweep are evident in items made from coir, which is derived from what?",
    options: ["Clay", "Seashells", "Coconut husks", "Bamboo"],
    correct: "Coconut husks",
  },
  {
    id: 48,
    category: "cultural_sight",
    region: "Lakshadweep Island",
    question:
      "Which island in Lakshadweep is a paradise for nature lovers with turquoise lagoons, known as a top destination for eco-tourism?",
    options: ["Bangaram Atoll", "Kavaratti", "Minicoy Island", "Agatti Island"],
    correct: "Bangaram Atoll",
  },
  {
    id: 49,
    category: "cuisine",
    region: "Madhya Pradesh",
    question: "What is Bhutte Ka Kees, a unique dish from Madhya Pradesh?",
    options: [
      "A sweet crispy snack",
      "Flattened rice breakfast",
      "A grated corn delicacy",
      "Wheat balls served with dal",
    ],
    correct: "A grated corn delicacy",
  },
  {
    id: 50,
    category: "culture",
    region: "Madhya Pradesh",
    question:
      "Gond paintings from Madhya Pradesh are a tribal art form characterized by intricate patterns and what?",
    options: [
      "Vivid colors depicting nature and mythology",
      "Delicate hand-stitched patterns",
      "Blue and white hues",
      "Silver inlay work",
    ],
    correct: "Vivid colors depicting nature and mythology",
  },
  {
    id: 51,
    category: "cultural_sight",
    region: "Madhya Pradesh",
    question:
      "Kanha National Park in Madhya Pradesh was the inspiration for which famous book?",
    options: [
      "The God of Small Things",
      "The Jungle Book",
      "A Passage to India",
      "Malgudi Days",
    ],
    correct: "The Jungle Book",
  },
  {
    id: 52,
    category: "cuisine",
    region: "Maharashtra",
    question:
      "Puran poli, part of the iconic Marathi thali, is what type of dish?",
    options: [
      "Spiced vegetable mash",
      "Sweet stuffed flatbread",
      "Fried snack sandwich",
      "A type of seafood curry",
    ],
    correct: "Sweet stuffed flatbread",
  },
  {
    id: 53,
    category: "culture",
    region: "Maharashtra",
    question:
      "Which powerful empire, founded by Shivaji Maharaj, is a key part of Maharashtra's history?",
    options: [
      "Maurya Empire",
      "Maratha Empire",
      "Vijayanagara Empire",
      "Mughal Empire",
    ],
    correct: "Maratha Empire",
  },
  {
    id: 54,
    category: "cultural_sight",
    region: "Maharashtra",
    question:
      "Hill stations like Matheran and Panchgani are located in which mountain range in Maharashtra?",
    options: ["Aravalli", "Vindhya", "Himalayas", "Sahyadri"],
    correct: "Sahyadri",
  },
  {
    id: 55,
    category: "cuisine",
    region: "Manipur",
    question:
      "Chak-hao Kheer from Manipur is a dessert made from what unique ingredient, giving it a striking purple hue?",
    options: [
      "Black rice",
      "Bamboo shoots",
      "Mashed vegetables",
      "Fermented fish",
    ],
    correct: "Black rice",
  },
  {
    id: 56,
    category: "culture",
    region: "Manipur",
    question:
      "The Ras Leela, a classical dance from Manipur, is based on the divine love of whom?",
    options: [
      "Local deities",
      "Shiva and Parvati",
      "Rama and Sita",
      "Lord Krishna and Radha",
    ],
    correct: "Lord Krishna and Radha",
  },
  {
    id: 57,
    category: "cultural_sight",
    region: "Manipur",
    question:
      "What is unique about the Keibul Lamjao National Park in Manipur?",
    options: [
      "It is home to the Royal Bengal Tiger",
      "It is the world’s only floating wildlife sanctuary",
      "It is known for its limestone caves",
      "It is a high-altitude desert",
    ],
    correct: "It is the world’s only floating wildlife sanctuary",
  },
  {
    id: 58,
    category: "cuisine",
    region: "Meghalaya",
    question:
      "Dohneiiong, a unique pork curry from Meghalaya, is flavored with what?",
    options: [
      "Fermented soybeans",
      "Bamboo shoots",
      "Black sesame seeds",
      "Red rice",
    ],
    correct: "Black sesame seeds",
  },
  {
    id: 59,
    category: "culture",
    region: "Meghalaya",
    question: "The Wangala festival in Meghalaya is also known as the...",
    options: [
      "100 Drums Dance",
      "Harvest Festival",
      "New Year Festival",
      "Spring Festival",
    ],
    correct: "100 Drums Dance",
  },
  {
    id: 60,
    category: "cultural_sight",
    region: "Meghalaya",
    question:
      "The Living Root Bridges in Meghalaya are a natural wonder formed by guiding the roots of which tree?",
    options: ["Banyan trees", "Rubber trees", "Teak trees", "Peepal trees"],
    correct: "Rubber trees",
  },
  {
    id: 61,
    category: "cuisine",
    region: "Mizoram",
    question: "What is Bai, a staple favorite in Mizoram?",
    options: [
      "A mixed vegetable curry with five spices",
      "Rice cooked in meat broth",
      "A nourishing stew with vegetables and bamboo shoots",
      "A traditional bamboo dance",
    ],
    correct: "A nourishing stew with vegetables and bamboo shoots",
  },
  {
    id: 62,
    category: "culture",
    region: "Mizoram",
    question: "The famous Cheraw dance from Mizoram is also known as the...",
    options: ["Drum dance", "Harvest dance", "Warrior dance", "Bamboo dance"],
    correct: "Bamboo dance",
  },
  {
    id: 63,
    category: "cultural_sight",
    region: "Mizoram",
    question:
      "Which is the tallest waterfall in Mizoram, standing as a symbol of untouched serenity?",
    options: [
      "Dassam Falls",
      "Nohkalikai Falls",
      "Chitrakote Falls",
      "Vantawng Falls",
    ],
    correct: "Vantawng Falls",
  },
  {
    id: 64,
    category: "cuisine",
    region: "Nagaland",
    question: "What is Axone, the 'soul of Naga kitchens'?",
    options: [
      "Smoked pork with bamboo",
      "A rice porridge with meat",
      "A type of harvest festival",
      "A fermented soybean chutney",
    ],
    correct: "A fermented soybean chutney",
  },
  {
    id: 65,
    category: "culture",
    region: "Nagaland",
    question:
      "The world-famous Hornbill Festival in Nagaland is also known as the...",
    options: [
      "New Year Festival",
      "Festival of Festivals",
      "Festival of Lights",
      "Harvest Festival",
    ],
    correct: "Festival of Festivals",
  },
  {
    id: 66,
    category: "cultural_sight",
    region: "Nagaland",
    question:
      "The Kohima War Cemetery is a poignant reminder of the sacrifices made during which war?",
    options: [
      "The Kargil War",
      "World War I",
      "The 1962 Indo-China War",
      "World War II",
    ],
    correct: "World War II",
  },
  {
    id: 67,
    category: "cuisine",
    region: "Odisha",
    question: "What is Chenna Poda, a famous sweet from Odisha?",
    options: [
      "A caramelized cottage cheese dessert",
      "Fermented rice water",
      "Lentils cooked with vegetables",
      "A classical dance form",
    ],
    correct: "A caramelized cottage cheese dessert",
  },
  {
    id: 68,
    category: "culture",
    region: "Odisha",
    question:
      "The exquisite Silver Filigree work, known for its intricate patterns, is a famous craft from which city in Odisha?",
    options: ["Konark", "Cuttack", "Bhubaneswar", "Puri"],
    correct: "Cuttack",
  },
  {
    id: 69,
    category: "cultural_sight",
    region: "Odisha",
    question: "Chilika Lake in Odisha is known as Asia's largest...",
    options: [
      "River island",
      "Salt desert",
      "Brackish water lagoon",
      "Freshwater lake",
    ],
    correct: "Brackish water lagoon",
  },
  {
    id: 70,
    category: "cuisine",
    region: "Punjab",
    question:
      "Sarson da saag is a staple in Punjab during winter months and is paired with what?",
    options: ["Lassi", "Naan", "Butter chicken", "Makki di roti"],
    correct: "Makki di roti",
  },
  {
    id: 71,
    category: "culture",
    region: "Punjab",
    question:
      "Which energetic folk dance is performed by men in Punjab, often accompanied by the Dhol?",
    options: ["Bhangra", "Garba", "Gidda", "Ghoomar"],
    correct: "Bhangra",
  },
  {
    id: 72,
    category: "cultural_sight",
    region: "Punjab",
    question:
      "The Golden Temple in Amritsar, the holiest shrine in Sikhism, is also known as...",
    options: [
      "Anandpur Sahib",
      "Wagah Border",
      "Harmandir Sahib",
      "Jallianwala Bagh",
    ],
    correct: "Harmandir Sahib",
  },
  {
    id: 73,
    category: "cuisine",
    region: "Rajasthan",
    question:
      "Gatte ki Sabzi, a signature curry of Rajasthan, is made from what?",
    options: [
      "A type of folk dance",
      "Gram flour (besan) dumplings",
      "A disc-shaped sweet",
      "Lentils and baked wheat balls",
    ],
    correct: "Gram flour (besan) dumplings",
  },
  {
    id: 74,
    category: "culture",
    region: "Rajasthan",
    question:
      "Which Rajasthani folk dance is known as the dance of the snake charmer community?",
    options: ["Garba", "Bhangra", "Kalbeliya", "Ghoomar"],
    correct: "Kalbeliya",
  },
  {
    id: 75,
    category: "cultural_sight",
    region: "Rajasthan",
    question:
      "The Hawa Mahal in Jaipur is also known as the 'Palace of...' what?",
    options: ["Lakes", "Winds", "Joy", "Mirrors"],
    correct: "Winds",
  },
  {
    id: 76,
    category: "cuisine",
    region: "Sikkim",
    question: "What is Gundruk, a traditional preparation from Sikkim?",
    options: [
      "A fermented leafy green preparation",
      "Steamed dumplings",
      "A hearty noodle soup",
      "A Tibetan New Year festival",
    ],
    correct: "A fermented leafy green preparation",
  },
  {
    id: 77,
    category: "culture",
    region: "Sikkim",
    question: "Losar, a vibrant festival in Sikkim, celebrates what?",
    options: [
      "The harvest season",
      "The Tibetan New Year",
      "The monsoon",
      "The birth of Buddha",
    ],
    correct: "The Tibetan New Year",
  },
  {
    id: 78,
    category: "cultural_sight",
    region: "Sikkim",
    question:
      "Which high-altitude pass in Sikkim, located on the Indo-China border, is a gateway to historic trade routes?",
    options: ["Nathula Pass", "Sela Pass", "Zoji La Pass", "Khardung La"],
    correct: "Nathula Pass",
  },
  {
    id: 79,
    category: "cuisine",
    region: "Tamil Nadu",
    question: "Puliyodarai, a temple-specialty dish from Tamil Nadu, is what?",
    options: [
      "A classical dance form",
      "Tamarind rice",
      "A harvest festival",
      "A fiery chicken dish",
    ],
    correct: "Tamarind rice",
  },
  {
    id: 80,
    category: "culture",
    region: "Tamil Nadu",
    question:
      "Which classical dance form from Tamil Nadu conveys stories through expressive gestures and rhythmic grace?",
    options: ["Kuchipudi", "Bharatanatyam", "Odissi", "Kathakali"],
    correct: "Bharatanatyam",
  },
  {
    id: 81,
    category: "cultural_sight",
    region: "Tamil Nadu",
    question:
      "The Brihadeeswarar Temple in Thanjavur is a UNESCO World Heritage marvel from which dynasty?",
    options: ["Pallava", "Pandya", "Gupta", "Chola"],
    correct: "Chola",
  },
  {
    id: 82,
    category: "cuisine",
    region: "Telangana",
    question: "What is Jonna Rotte, a wholesome bread from Telangana?",
    options: [
      "A millet bread",
      "A crispy rice flour pancake",
      "A fragrant rice and meat dish",
      "A silver inlay craft",
    ],
    correct: "A millet bread",
  },
  {
    id: 83,
    category: "culture",
    region: "Telangana",
    question:
      "Bathukamma, a cherished celebration in Telangana, is what kind of festival?",
    options: [
      "A colorful floral festival",
      "An ancient warrior dance",
      "A silver inlay craft",
      "A New Year celebration",
    ],
    correct: "A colorful floral festival",
  },
  {
    id: 84,
    category: "cultural_sight",
    region: "Telangana",
    question:
      "The majestic Golconda Fort, once the seat of powerful rulers, resonates with tales of...",
    options: [
      "Diamonds, valor, and empire",
      "Floral festivals and dances",
      "Ancient rock-cut sculptures",
      "The world's largest film studio",
    ],
    correct: "Diamonds, valor, and empire",
  },
  {
    id: 85,
    category: "cuisine",
    region: "Tripura",
    question: "What is Chakhwi, a rustic curry from Tripura?",
    options: [
      "A curry made from bamboo shoots, jackfruit, and pork",
      "A traditional fish stew",
      "A spicy bamboo shoot pickle",
      "A handwoven cloth",
    ],
    correct: "A curry made from bamboo shoots, jackfruit, and pork",
  },
  {
    id: 86,
    category: "culture",
    region: "Tripura",
    question:
      "The graceful Hojagiri dance from Tripura is performed by which tribe?",
    options: ["Reang tribe", "Tripuri tribe", "Khasi tribe", "Garo tribe"],
    correct: "Reang tribe",
  },
  {
    id: 87,
    category: "cultural_sight",
    region: "Tripura",
    question:
      "What is Neermahal in Tripura, which floats like a dream on Rudrasagar Lake?",
    options: [
      "A Lake Palace",
      "A royal museum",
      "A site with ancient rock-cut sculptures",
      "A tribal village",
    ],
    correct: "A Lake Palace",
  },
  {
    id: 88,
    category: "cuisine",
    region: "Uttar Pradesh",
    question:
      "Tunde Kababi, succulent and aromatic kebabs, are a famous delicacy from which city in Uttar Pradesh?",
    options: ["Lucknow", "Agra", "Varanasi", "Mathura"],
    correct: "Lucknow",
  },
  {
    id: 9,
    category: "culture",
    region: "Uttar Pradesh",
    question:
      "Chikankari, a celebrated craft from Lucknow, is what type of art?",
    options: [
      "Delicate hand-stitched embroidery",
      "A classical dance form",
      "A way of preparing kebabs",
      "A type of betel leaf",
    ],
    correct: "Delicate hand-stitched embroidery",
  },
  {
    id: 90,
    category: "cultural_sight",
    region: "Uttar Pradesh",
    question:
      "The Taj Mahal, a UNESCO World Heritage site in Agra, stands as a timeless symbol of what?",
    options: ["Love", "War", "Religion", "Knowledge"],
    correct: "Love",
  },
  {
    id: 91,
    category: "cuisine",
    region: "Uttarakhand",
    question: "What is Kafuli, a beloved dish from Uttarakhand?",
    options: [
      "A thick, nutritious curry from spinach",
      "A spiced potato preparation",
      "A caramelized fudge sweet",
      "A type of folk song",
    ],
    correct: "A thick, nutritious curry from spinach",
  },
  {
    id: 92,
    category: "culture",
    region: "Uttarakhand",
    question:
      "The handwoven pichhora is what type of traditional attire in Uttarakhand?",
    options: ["A shawl", "A cap", "A tunic", "A woolen cloak"],
    correct: "A shawl",
  },
  {
    id: 93,
    category: "cultural_sight",
    region: "Uttarakhand",
    question:
      "The Char Dham pilgrimage circuit in Uttarakhand comprises Badrinath, Kedarnath, Gangotri, and which other site?",
    options: ["Yamunotri", "Haridwar", "Rishikesh", "Nanda Devi"],
    correct: "Yamunotri",
  },
  {
    id: 94,
    category: "cuisine",
    region: "West Bengal",
    question: "What is Shukto, a dish from West Bengal?",
    options: [
      "A mixed vegetable curry with a bitter-sweet taste",
      "A light and flavorful fish curry",
      "Soft, spongy cheese balls in syrup",
      "A type of handwoven saree",
    ],
    correct: "A mixed vegetable curry with a bitter-sweet taste",
  },
  {
    id: 95,
    category: "culture",
    region: "West Bengal",
    question:
      "Rabindra Sangeet, the timeless songs of West Bengal, were written and composed by whom?",
    options: [
      "Rabindranath Tagore",
      "Satyajit Ray",
      "Bankim Chandra Chatterjee",
      "Kazi Nazrul Islam",
    ],
    correct: "Rabindranath Tagore",
  },
  {
    id: 96,
    category: "cultural_sight",
    region: "West Bengal",
    question:
      "The Sundarbans in West Bengal, the world’s largest mangrove forest, is home to which elusive animal?",
    options: [
      "Royal Bengal Tiger",
      "Asiatic Lion",
      "One-horned Rhinoceros",
      "Snow Leopard",
    ],
    correct: "Royal Bengal Tiger",
  },
  {
    id: 97,
    category: "culture",
    region: "Rajasthan",
    question:
      "Blue Pottery, a unique craft famous in Jaipur, is known for its...",
    options: [
      "Vibrant blue and white hues",
      "Snake-charming music",
      "Swirling, colorful skirts",
      "Gram flour dumplings",
    ],
    correct: "Vibrant blue and white hues",
  },
  {
    id: 98,
    category: "cultural_sight",
    region: "Maharashtra",
    question:
      "The famed Ajanta and Ellora caves in Maharashtra are a testament to the state's...",
    options: [
      "Rich history and patronage of arts",
      "Modern film industry",
      "Coastal Konkani cuisine",
      "Monsoon landscapes",
    ],
    correct: "Rich history and patronage of arts",
  },
  {
    id: 99,
    category: "cuisine",
    region: "Tamil Nadu",
    question:
      "Chettinad chicken, a famous dish from Tamil Nadu, is known for what characteristic?",
    options: [
      "Fiery with spices",
      "Mild and sweet",
      "Made with tamarind and rice",
      "A type of vegetarian feast",
    ],
    correct: "Fiery with spices",
  },
  {
    id: 100,
    category: "cultural_sight",
    region: "Assam",
    question:
      "The Kamakhya Temple in Assam, overlooking Guwahati, is one of India's most sacred...",
    options: [
      "Shakti Peethas",
      "River islands",
      "National parks",
      "Tea gardens",
    ],
    correct: "Shakti Peethas",
  },
];

export default QUESTIONS;
