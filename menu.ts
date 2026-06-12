// src/data/menu.ts
// South Beach Mount Martha — Complete Menu Data
// Source: New_Menu.pdf
// Dietary keys: GR = Gluten Reduced, GRA = Gluten Reduced Available,
//               V = Vegetarian, VA = Vegetarian Available, DF = Dairy Free

export type Dietary = 'GR' | 'GRA' | 'V' | 'VA' | 'DF'

export interface MenuItem {
  name: string
  description?: string
  price: number | string   // string for items like "2 ea", "35pp", "+4"
  dietary?: Dietary[]
  note?: string            // extra add-on info e.g. "add peanut butter +2"
}

export interface MenuSection {
  title: string
  subtitle?: string
  note?: string
  items: MenuItem[]
}

export interface MenuCategory {
  id: string
  title: string
  sections: MenuSection[]
}

// ─────────────────────────────────────────────
// SNACKS  (available all day / café counter)
// ─────────────────────────────────────────────
export const snacks: MenuSection[] = [
  {
    title: 'Snacks',
    items: [
      { name: 'Our Banana Bread', description: 'Butter, local honey', price: 12, dietary: ['V'] },
      { name: 'Fruit Toast', description: 'Butter, marmalade', price: 12, dietary: ['V'] },
      { name: 'Bircher Bowl', description: 'Apple bircher muesli, fresh fruit, maple syrup', price: 14 },
      { name: 'Sourdough Toast', description: 'With butter', price: 8, dietary: ['V', 'GRA'] },
      { name: 'Brekkie Burger', description: 'Fried egg, bacon, cheese, lettuce, onion jam', price: 16, dietary: ['GRA'] },
      { name: 'Crispy Fried Fish Roll', description: 'Beer battered flake, tartare sauce, lettuce, milk bun, dill', price: 19, dietary: ['DF'] },
      { name: 'Bowl of Fries', description: 'Lime & lemongrass salt, herb mayo', price: 10, dietary: ['V', 'GR'] },
      { name: 'Madeleines', description: 'Mini shell tea cakes', price: '2 ea' },
      { name: 'Macarons', description: 'Available in five flavours', price: '3 ea' },
    ],
  },
  {
    title: 'Pastries',
    subtitle: 'Baked in house every morning',
    note: 'Check our display for our daily changing selection of other sweets and pastries',
    items: [
      { name: 'Croissant', price: 5 },
      { name: 'Escargot', price: 6 },
      { name: 'Pain au Chocolat', price: 6 },
      { name: 'Almond Croissant', price: 6 },
    ],
  },
]

// ─────────────────────────────────────────────
// COFFEE & TEA
// ─────────────────────────────────────────────
export const coffeeAndTea: MenuSection[] = [
  {
    title: 'Coffee & Tea',
    subtitle: 'Allpress',
    items: [
      { name: 'Espresso / Black', price: 'Ask' },
      { name: 'Milk coffee', description: 'Cow, soy, almond, lactose free', price: 'Ask', note: '+$0.50 alt milk · +$0.75 macadamia or coconut · +$0.75 decaf · +$0.50 extra shot' },
      { name: 'Tea', description: 'English Breakfast, Earl Grey, Lemongrass & Ginger, Peppermint, Green, Chamomile', price: 5 },
      { name: 'Wet Chai', description: '9 spices', price: 6.50 },
    ],
  },
]

// ─────────────────────────────────────────────
// SHAKES & SMOOTHIES
// ─────────────────────────────────────────────
export const shakes: MenuSection[] = [
  {
    title: 'Shakes',
    items: [
      { name: 'Milkshake', description: 'Choc, banana, vanilla, strawberry, caramel', price: 9 },
    ],
  },
  {
    title: 'Smoothies',
    items: [
      { name: 'Banarama', description: 'Banana, oats, dates, cinnamon, Mount Martha honey & almond milk', price: 12 },
      { name: 'Green Goblin', description: 'Spinach, kale, mango, coconut milk', price: 12 },
      { name: 'Mango Berry', description: 'Mango, mixed berries, almond milk, Mount Martha honey', price: 12 },
    ],
  },
]

// ─────────────────────────────────────────────
// COLD PRESS & FRESH JUICE
// ─────────────────────────────────────────────
export const juice: MenuSection[] = [
  {
    title: 'Cold Press Juice',
    subtitle: 'Organic & Australian',
    items: [
      { name: 'Immunity', description: 'Carrot, orange, celery, lemon, turmeric', price: 9.80 },
      { name: 'Antiox', description: 'Apple, rhubarb, passionfruit, raspberry', price: 9.80 },
      { name: 'Tropical Bliss', description: 'Orange, mango, passionfruit, lucuma', price: 9.80 },
      { name: 'Botanical', description: 'Apple, spinach, kale, cucumber, celery, lettuce, lemon, ginger', price: 9.80 },
    ],
  },
  {
    title: 'Freshly Squeezed',
    items: [
      { name: 'Mix Up', description: 'Apple, orange, watermelon, mint', price: 11, note: '$8 kids' },
      { name: "Mum's Fav", description: 'Apple, orange, carrot, ginger', price: 11, note: '$8 kids' },
      { name: "What's Up Doc", description: 'Carrot, celery, apple, ginger', price: 11, note: '$8 kids' },
    ],
  },
]

// ─────────────────────────────────────────────
// EGGS ALL DAY
// ─────────────────────────────────────────────
export const eggsAllDay: MenuSection[] = [
  {
    title: 'Eggs All Day',
    items: [
      {
        name: 'Two Eggs',
        description: 'Poached, fried or scrambled (+$2) on buttered white sourdough toast',
        price: 15,
        dietary: ['GRA'],
        note: 'Sides: Roast Cherry Tomatoes +5 · Avocado +5 · Confit Mushrooms +5 · Sauté Spinach +4 · Grilled Broccolini +5 · Streaky Bacon +8 · Smoked Salmon +7 · Extra Egg +3 · Extra Scrambled Eggs +4 · Rösti +5 · Feta +4 · Hash Brown +4 · Chilli Sambal +2 · Hollandaise +4 · Pure Maple Syrup +4 · Spreads +2 · Swap to Gluten Reduced Bread +3',
      },
    ],
  },
]

// ─────────────────────────────────────────────
// HOT CAKES
// ─────────────────────────────────────────────
export const hotCakes: MenuSection[] = [
  {
    title: 'Two Stack Hot Cakes',
    subtitle: 'Two freshly made hot cakes with your choice of toppings',
    note: 'Extra hot cake +$4',
    items: [
      { name: 'Classic Lemon', description: 'Vanilla butter, powdered sugar', price: 15, dietary: ['V'] },
      { name: 'Maple', description: 'Maple syrup, ice cream', price: 15, dietary: ['V'] },
      { name: 'Canadian Bacon', description: 'Maple, butter', price: 23, note: 'Add a fried egg +$3' },
      { name: 'Berries Burst', description: 'Burst blueberries, strawberries, ice cream', price: 19, dietary: ['V'] },
    ],
  },
]

// ─────────────────────────────────────────────
// FOR THE LITTLE ONES
// ─────────────────────────────────────────────
export const kidsMenu: MenuSection[] = [
  {
    title: 'For the Little Ones',
    items: [
      { name: 'Egg n Bacon Toast', price: 10, dietary: ['GRA', 'VA'] },
      { name: 'Cheese Toastie', price: 8, dietary: ['GRA', 'VA'] },
      { name: 'Kids Hot Cake', description: 'Lemon, powdered sugar', price: 10, dietary: ['V'] },
      { name: 'Kids Banana Bread', description: 'Butter, fresh banana, honey', price: 8, dietary: ['V'] },
      { name: 'Cheese Burger', description: 'Pattie, cheese, tomato sauce, fries', price: 19, dietary: ['GRA'] },
      { name: 'Kids Fish & Chips', price: 19, dietary: ['GR', 'DF'] },
    ],
  },
]

// ─────────────────────────────────────────────
// ALL DAY DINING
// ─────────────────────────────────────────────
export const allDayDining: MenuSection[] = [
  {
    title: 'All Day Dining',
    items: [
      {
        name: 'Tropical Acai Bowl',
        description: 'Acai sorbet, mango, pineapple, coconut, honey clusters, fresh fruit',
        price: 23,
        dietary: ['V', 'DF', 'GR', 'VA'],
        note: 'Add peanut butter +$2',
      },
      {
        name: 'Avo Toast',
        description: 'White sourdough, feta, yuzu olive oil, lemon, nori',
        price: 18,
        dietary: ['V', 'GRA', 'DF'],
        note: 'Add poached egg +$3',
      },
      {
        name: 'The Benny',
        description: 'Two poached eggs with streaky bacon, hollandaise, fried capers and dill on white sourdough',
        price: 24,
        dietary: ['GRA'],
        note: 'Swap bacon for smoked salmon +$2',
      },
      {
        name: 'Chilli Scram',
        description: 'Scrambled eggs, coconut chilli sambal, pickled red onion, cucumber, coriander, roti',
        price: 24,
        dietary: ['V'],
        note: 'Add sticky pork belly (80g) +$8',
      },
      {
        name: 'Our Röstis',
        description: 'Burnt butter röstis, two poached eggs, roasted cherry tomatoes, broccolini, hollandaise, seven spice',
        price: 25,
        dietary: ['GR', 'V'],
      },
      {
        name: 'Salmon Bowl',
        description: 'Miso salmon, cucumber, edamame, broccolini, yuzu honey dressing, rice, pickled ginger, sesame',
        price: 28,
        dietary: ['GR', 'DF', 'VA'],
        note: 'Make it vegetarian — ask our team',
      },
      {
        name: 'Lemongrass Duck San Choy Bow',
        description: 'Fragrant confit duck, lettuce, cucumber, hoisin, candied peanuts, herbs',
        price: 27,
        dietary: ['GR', 'DF'],
      },
      {
        name: 'Red Caramel Pork Belly',
        description: 'Sweet & sticky pork belly, Vietnamese salad, roasted peanuts, fried shallots, chilli jam, lime',
        price: 29,
        dietary: ['GR', 'DF'],
        note: 'Add roti +$4',
      },
      {
        name: 'Crab Linguine',
        description: 'Swimmer crab, prawn, cherry tomato, garlic, chilli, capers, nori, herbs',
        price: 39,
      },
      {
        name: 'Fish & Chips',
        description: 'Beer battered flake, fries, lime & lemongrass salt, garden salad, lemon wedge, tartare sauce',
        price: 34,
        dietary: ['GR', 'DF'],
      },
      {
        name: 'Beef Burger',
        description: '120g beef patty, double cheese, lettuce, onion jam, burger sauce, fries',
        price: 26,
        dietary: ['GRA'],
        note: 'Make it a double +$7',
      },
      {
        name: 'Coconut & Lime Calamari Salad',
        description: 'Calamari, grilled pineapple, carrot, cucumber, leaves, fresh chilli, Thai coconut dressing',
        price: 29,
        dietary: ['GR', 'DF'],
      },
      {
        name: 'Greens for Days Salad',
        description: 'Grilled broccolini, edamame, mixed leaves, cherry tomatoes, feta, toasted walnuts, ginger & lime dressing, yuzu olive oil',
        price: 24,
        dietary: ['V', 'VA', 'GR'],
        note: 'Add poached chicken +$6',
      },
    ],
  },
]

// ─────────────────────────────────────────────
// AFTERNOON MENU  (Fri & Sat, Dec–Feb, from 4.30pm)
// ─────────────────────────────────────────────
export const afternoonMenu: MenuSection[] = [
  {
    title: 'Afternoon Menu',
    subtitle: 'Fridays & Saturdays · 4.30pm till close · Summer only (December – February)',
    items: [
      {
        name: 'Feed Me Set',
        description: "Chef's selection of our snack menu to share (minimum 4 people)",
        price: '35pp',
      },
      {
        name: 'Mini Prawn & Crab Roll',
        description: 'Yuzu mayo, dill, mini milk bun',
        price: 10,
      },
      {
        name: 'Crispy Fried Fish Roll',
        description: 'Beer battered flake, tartare sauce, lettuce, milk bun, dill',
        price: 19,
        dietary: ['DF'],
      },
      {
        name: 'Rice Paper Rolls',
        description: 'Hoisin dipping sauce — vegetarian or chicken available (2 pc)',
        price: 10,
      },
      {
        name: 'Red Duck San Choy Bow',
        description: 'Lettuce, hoisin, candied peanuts, cucumber, coriander',
        price: 10,
      },
      {
        name: 'Bowl of Fries',
        description: 'Lime & lemongrass salt, herb mayo',
        price: 10,
        dietary: ['V', 'GR'],
      },
      {
        name: 'Vegetarian Spring Rolls',
        description: 'Sweet chilli sauce',
        price: 15,
      },
    ],
  },
]

// ─────────────────────────────────────────────
// DRINKS — BUBBLES
// ─────────────────────────────────────────────
export const bubbles: MenuSection[] = [
  {
    title: 'Bubbles',
    items: [
      { name: "NV Varichon 'Privée | Charles de Saint Céran'", description: 'Blanc de Blancs Brut, Savoie, France', price: '13 / 52' },
      { name: 'NV Montalto', description: 'Pennon Hill Sparkling Rosé, MP, Victoria', price: '15 / 65' },
    ],
  },
]

// ─────────────────────────────────────────────
// DRINKS — WHITE WINE
// ─────────────────────────────────────────────
export const whites: MenuSection[] = [
  {
    title: 'Whites',
    items: [
      { name: '2025 Little Fox and Friends', description: 'Sauvignon Blanc, MP, Victoria', price: '13 / 52' },
      { name: "2022 Eden Hall 'Springton'", description: 'Riesling, Eden Valley, SA', price: '13 / 52' },
      { name: '2024 Range Life Grillo', description: 'McLaren Vale SA', price: '13 / 52' },
      { name: '2023 Yal Yal Road', description: 'Pinot Gris, MP, Victoria', price: '14 / 58' },
      { name: "2024 Devil's Baie", description: 'Chardonnay, MP, Victoria', price: '14 / 58' },
    ],
  },
]

// ─────────────────────────────────────────────
// DRINKS — ROSÉ
// ─────────────────────────────────────────────
export const rose: MenuSection[] = [
  {
    title: 'Rosé',
    items: [
      { name: ' 2023 Bouchard Ainé & Fils', description: 'Rosé, Languedoc, France', price: '13 / 52' },
    ],
  },
]

// ─────────────────────────────────────────────
// DRINKS — RED WINE
// ─────────────────────────────────────────────
export const reds: MenuSection[] = [
  {
    title: 'Reds',
    items: [
      { name: '2023/24 Little Fox and Friends', description: 'Pinot Noir, MP, Victoria', price: '14 / 58' },
      { name: '2023 Ricca Terra Juicy June', description: 'Negroamaro & Grenache, Riverland SA', price: '13 / 52' },
      { name: '2021 VieuxBourg Beaujolais', description: 'Villages AOP, Beaujolais, France', price: '15 / 65' },
      { name: '2019 Mosselini', description: 'Shiraz, MP, Victoria', price: '14 / 58' },
    ],
  },
]

// ─────────────────────────────────────────────
// DRINKS — TAP BEER & CIDER
// ─────────────────────────────────────────────
export const tapBeer: MenuSection[] = [
  {
    title: 'From the Tap',
    subtitle: 'Schooner',
    items: [
      { name: 'Great Northern Mid', price: 12 },
      { name: 'Balter XPA', price: 13 },
      { name: 'Asahi Super Dry', price: 14 },
      { name: 'Peroni Nastro Azzurro', price: 14 },
      { name: '2 Bays Brewing Co Draught', description: 'GF · Can', price: 10 },
      { name: 'Main Ridge Pear Cider', description: 'Bottle', price: 12 },
    ],
  },
]

// ─────────────────────────────────────────────
// DRINKS — COCKTAILS
// ─────────────────────────────────────────────
export const cocktails: MenuSection[] = [
  {
    title: 'Cocktails',
    items: [
      { name: 'Spritz', description: 'Aperol, Limoncello, Campari', price: 18 },
      { name: 'Gin Gimlet', price: 21 },
      { name: 'Bloody Mary', price: 21 },
      { name: 'Amaretto Sour', price: 21 },
      { name: 'Espresso Martini', price: 21 },
      { name: 'Mojito', price: 21 },
      { name: 'Frozen Margarita', price: 18 },
      { name: 'Frozen Piña Colada', price: 18 },
      { name: 'Hard Raspberry', price: 12 },
      { name: 'Hard Lemon', price: 12 },
    ],
  },
]

// ─────────────────────────────────────────────
// FULL MENU EXPORT — grouped by page/tab
// ─────────────────────────────────────────────
export const fullMenu: MenuCategory[] = [
  {
    id: 'snacks',
    title: 'Snacks & Pastries',
    sections: snacks,
  },
  {
    id: 'coffee',
    title: 'Coffee & Tea',
    sections: coffeeAndTea,
  },
  {
    id: 'drinks-cold',
    title: 'Juices & Shakes',
    sections: [...juice, ...shakes],
  },
  {
    id: 'eggs',
    title: 'Eggs All Day',
    sections: eggsAllDay,
  },
  {
    id: 'hot-cakes',
    title: 'Hot Cakes',
    sections: hotCakes,
  },
  {
    id: 'kids',
    title: 'For the Little Ones',
    sections: kidsMenu,
  },
  {
    id: 'all-day',
    title: 'All Day Dining',
    sections: allDayDining,
  },
  {
    id: 'afternoon',
    title: 'Afternoon Menu',
    sections: afternoonMenu,
  },
  {
    id: 'drinks',
    title: 'Drinks',
    sections: [...bubbles, ...whites, ...rose, ...reds, ...tapBeer, ...cocktails],
  },
]

// ─────────────────────────────────────────────
// ALLERGEN DISCLAIMER
// ─────────────────────────────────────────────
export const allergenNote =
  'Our menu may contain allergens and is prepared in a kitchen that handles nuts, shellfish and gluten. Whilst reasonable efforts are taken to accommodate guest dietary needs, we cannot guarantee that our food will be allergen free.'

export const surchargeNote =
  'Sundays incur a 10% surcharge. Public Holidays 20% surcharge. All credit card payments incur a 1.5% surcharge.'

// ─────────────────────────────────────────────
// DIETARY KEY
// ─────────────────────────────────────────────
export const dietaryKey: Record<Dietary, string> = {
  GR:  'Gluten Reduced',
  GRA: 'Gluten Reduced Available',
  V:   'Vegetarian',
  VA:  'Vegetarian Available',
  DF:  'Dairy Free',
}
