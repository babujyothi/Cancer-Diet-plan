import { Recipe } from '../types';

export const RECIPES: Recipe[] = [
  // SECTION 1: BREAKFAST (1-15)
  {
    id: "b1",
    name: "Spinach & Cheese Omelette",
    category: "breakfast",
    servings: 1,
    prepTime: 5,
    cookTime: 8,
    ingredients: [
      { name: "Fresh organic eggs", amount: "3 large (150g)" },
      { name: "Finely chopped spinach (soft leaves)", amount: "1 cup (30g)" },
      { name: "Grated cheddar cheese", amount: "20g" },
      { name: "Pure Ghee", amount: "10g" },
      { name: "Sea salt & fine black pepper", amount: "To taste" }
    ],
    equipment: ["Small hand whisk", "Fine-mesh strainer", "Non-stick frying pan", "Spatula"],
    prepSteps: [
      "Wash the spinach thoroughly under running water to remove any dirt. Dry it gently with a paper towel.",
      "Finely chop the spinach leaves. For gastric recovery, avoid thick stems; use tender leaves only.",
      "Crack 3 large eggs into a mixing bowl, sprinkle a pinch of sea salt, and hand-whisk vigorously for 60 seconds until light and frothy."
    ],
    cookSteps: [
      "Heat 10g of ghee in a non-stick pan on medium-low heat for 1 minute.",
      "Add the finely chopped spinach to the pan. Sauté for exactly 2 minutes until it collapses and becomes soft and thoroughly cooked.",
      "Pour the whisked eggs over the cooked spinach. Swirl the pan to distribute the eggs evenly.",
      "Cover the pan with a lid and cook on low heat for 3 minutes until the egg edges start to firm up.",
      "Uncover, sprinkle 20g of grated cheddar cheese over one half, flip the other half over to create a semi-circle.",
      "Cover again and cook for 1 additional minute until the cheese melts completely inside. Serve warm."
    ],
    nutrients: {
      calories: 350,
      protein: 24,
      fat: 28,
      netCarbs: 1.2,
      fiber: 0.8,
      vitamins: "High in Vitamin A, Vitamin K, Iron, and Zinc."
    },
    gastricSafeNote: "The spinach must be chopped super fine and well-cooked to break down tough fibers. Avoid raw spinach entirely to ease gastric digestion."
  },
  {
    id: "b2",
    name: "Mushroom Butter Fry",
    category: "breakfast",
    servings: 1,
    prepTime: 5,
    cookTime: 7,
    ingredients: [
      { name: "Buttery button mushrooms", amount: "200g" },
      { name: "Salted Butter, grass-fed", amount: "20g" },
      { name: "Crushed black pepper", amount: "1 tsp" },
      { name: "Sea salt", amount: "0.5 tsp" }
    ],
    equipment: ["Sauté pan", "Kitchen knife", "Cutting board"],
    prepSteps: [
      "Wipe the button mushrooms clean with a damp paper towel (avoid soaking in water to keep them from absorbing liquid).",
      "Slice mushrooms into even 5mm thick pieces."
    ],
    cookSteps: [
      "Melt 20g of salted butter in a sauté pan over medium-low heat until it foams gently (about 1 minute).",
      "Add the sliced mushrooms. Sauté them on medium heat for 4 minutes. They will release water first, and then absorb the butter back.",
      "Once mushrooms shrink and turn soft and brown, add 0.5 tsp of sea salt and 1 tsp of crushed black pepper.",
      "Sauté for 1-2 more minutes until they are thoroughly tender. Serve hot."
    ],
    nutrients: {
      calories: 220,
      protein: 6,
      fat: 21,
      netCarbs: 3.5,
      fiber: 2.1,
      vitamins: "Excellent source of Vitamin D, Selenium, Potassium, and B-vitamins."
    },
    gastricSafeNote: "Sauté the mushrooms completely until they shrink thoroughly and are golden brown. Spongy, undercooked mushrooms can feel heavy and resist gastric enzyme penetration."
  },
  {
    id: "b3",
    name: "Nut-Crust Dosa",
    category: "breakfast",
    servings: 1,
    prepTime: 15,
    cookTime: 8,
    ingredients: [
      { name: "Almonds (soaked & peeled)", amount: "10 pieces" },
      { name: "Walnuts (soaked 3 hours)", amount: "5 pieces" },
      { name: "Fresh egg", amount: "1 large" },
      { name: "Pure Ghee", amount: "10g" },
      { name: "Warm water", amount: "2 tbsp" },
      { name: "Sea salt", amount: "A pinch" }
    ],
    equipment: ["High-speed wet grinder/blender", "Dosa tawa or flat griddle", "Whisk"],
    prepSteps: [
      "Ensure almonds have been soaked in warm water overnight. Peel their tough skins completely.",
      "Grind the peeled almonds and soaked walnuts with 2 tbsp of warm water into a smooth, buttery paste with no grittiness.",
      "In a small bowl, crack 1 egg and whisk with a pinch of sea salt. Combine this thoroughly with the nut paste until it forms a thick pancake-like batter."
    ],
    cookSteps: [
      "Heat a flat griddle (tawa) on medium-low. Smear 5g of ghee onto the surface using a piece of silicone brush or sliced onion.",
      "Pour the nut egg batter in the center. Use a flat ladle to gently spread it outward into a 6-inch circle.",
      "Drizzle the remaining 5g of ghee around the edges.",
      "Cover the griddle with a lid and cook on very low flame for 4 minutes until the bottom is a deep golden brown.",
      "Carefully flip using a thin spatula. Cook the other side uncovered for 2-3 minutes. Serve warm."
    ],
    nutrients: {
      calories: 310,
      protein: 12,
      fat: 27,
      netCarbs: 2.5,
      fiber: 3.2,
      vitamins: "Abundant in Vitamin E, Magnesium, Calcium, and Omega-3 Fatty Acids."
    },
    gastricSafeNote: "High nut fiber can trigger reflux if raw. Soaking and grinding the nuts into a microscopic paste ensures it behaves like a flour-free, easily digestible flatbread."
  },
  {
    id: "b4",
    name: "Egg Bhurji (Scrambled)",
    category: "breakfast",
    servings: 1,
    prepTime: 5,
    cookTime: 10,
    ingredients: [
      { name: "Large fresh eggs", amount: "3" },
      { name: "Finely chopped onion (Pillar limit)", amount: "50g" },
      { name: "Green chili (deseeded, finely minced)", amount: "1" },
      { name: "Turmeric powder", amount: "0.25 tsp" },
      { name: "Virgin coconut oil", amount: "15ml" },
      { name: "Sea salt & coriander leaves", amount: "To taste" }
    ],
    equipment: ["Stir-fry kadai or wok", "Wooden spoon", "Chopping knife"],
    prepSteps: [
      "Chop onions extremely small. Deseed the green chili entirely and mince fine.",
      "Whisk 3 eggs with a pinch of salt and turmeric powder until uniform in color."
    ],
    cookSteps: [
      "Heat 15ml of virgin coconut oil in a kadai over standard low heat.",
      "Sauté onions and minced green chili together for 4 minutes until onions are sweet, translucent, and extremely soft.",
      "Lower the flame to its absolute minimum.",
      "Pour in the egg mixture and let it sit undisturbed for 15 seconds.",
      "Using a wooden spoon, gently fold the mixture from the edges toward the center. Avoid high heat scrambling, which makes rubbery crumbs.",
      "Gently fold for 3-4 minutes until moist, soft curds form. Garnish with a pinch of soft coriander and remove immediately from heat."
    ],
    nutrients: {
      calories: 340,
      protein: 19,
      fat: 28,
      netCarbs: 2.8,
      fiber: 0.6,
      vitamins: "Rich in Choline, Vitamin B6, Lutein, and Selenium."
    },
    gastricSafeNote: "Ensure the onions are sautéed until completely sweet and translucent; half-raw sulfur-rich onions can induce heavy flatulence and gastric pain."
  },
  {
    id: "b5",
    name: "Paneer \"Toast\"",
    category: "breakfast",
    servings: 1,
    prepTime: 5,
    cookTime: 8,
    ingredients: [
      { name: "Fresh organic block paneer", amount: "100g" },
      { name: "Pure Ghee", amount: "15g" },
      { name: "Ripe red tomato", amount: "40g" },
      { name: "Fresh coriander leaves", amount: "1 tbsp" },
      { name: "Sea salt & roasted cumin powder", amount: "To taste" }
    ],
    equipment: ["Thick-bottomed skillet", "Slicing knife", "Tongs"],
    prepSteps: [
      "Slice the block of paneer into two thick rectangular slabs (resembling bread toast).",
      "Very finely dice the tomato, discarding the tough green core."
    ],
    cookSteps: [
      "Melt 10g of ghee in a heavy skillet on medium heat.",
      "Place the paneer slabs carefully. Fry for 2-3 minutes on each side until they develop a beautiful golden skin. Transfer to a serving plate.",
      "In the same skillet, add the remaining 5g of ghee. Toss in the diced tomato and a pinch of salt.",
      "Sauté the tomatoes on medium-low for 2 minutes, crushing them with your spatula, until they break down into a soft, cooked compote.",
      "Top the golden paneer slabs with this soft tomato mixture and freshly chopped coriander."
    ],
    nutrients: {
      calories: 410,
      protein: 18,
      fat: 36,
      netCarbs: 2.1,
      fiber: 0.5,
      vitamins: "High in Bioavailable Calcium, Vitamin A, B2 (Riboflavin), and Lycopene."
    },
    gastricSafeNote: "Cook the tomato until it is completely soft and cooked; the skin should melt, as tough raw tomato skins can stick to an inflamed gastric mucosal layer."
  },
  {
    id: "b6",
    name: "Bottle Gourd (Sorakaya) Pancakes",
    category: "breakfast",
    servings: 1,
    prepTime: 10,
    cookTime: 10,
    ingredients: [
      { name: "Fresh bottle gourd (tender)", amount: "150g" },
      { name: "Whole egg", amount: "1 large" },
      { name: "Freshly ground black pepper", amount: "0.5 tsp" },
      { name: "Sea salt", amount: "0.25 tsp" },
      { name: "Virgin coconut oil", amount: "15g" }
    ],
    equipment: ["Hand-held vegetable grater", "Cotton squeeze cloth", "Small skillet", "Lid"],
    prepSteps: [
      "Peel the bottle gourd (Sorakaya) and grate it finely.",
      "Place the grated gourd in a clean cotton kitchen towel and squeeze firmly to express the watery juice (save the alkaline juice to drink warm later).",
      "In a bowl, mix the dried grated gourd pulp with 1 whole egg, black pepper, and salt until it forms an even paste."
    ],
    cookSteps: [
      "Heat 15g of virgin coconut oil in a small pan on medium-low heat.",
      "Spoon the gourd-egg mixture into the pan. Use your spoon to flatten it into 2 small circular pancakes (about 4 inches wide).",
      "Cover with a lid and cook on low for 5 minutes, allowing steam to soften the bottle gourd fibers thoroughly.",
      "Remove the lid, flip the pancakes, and cook the other side uncovered for 3-4 minutes until crispy golden-brown. Serve hot."
    ],
    nutrients: {
      calories: 230,
      protein: 8,
      fat: 21,
      netCarbs: 3.1,
      fiber: 1.8,
      vitamins: "Excellent mineral content: Potassium, Magnesium, Vitamin C, and B9 (Folate)."
    },
    gastricSafeNote: "Bottle gourd is an incredibly alkaline food that actively neutralizes stomach acidity. Steaming it covered during cooking makes the fiber perfectly digestible."
  },
  {
    id: "b7",
    name: "Egg Noodles",
    category: "breakfast",
    servings: 1,
    prepTime: 5,
    cookTime: 10,
    ingredients: [
      { name: "Fresh organic eggs", amount: "3" },
      { name: "Grated hard cabbage", amount: "50g" },
      { name: "Fresh black pepper powder", amount: "1 tsp" },
      { name: "Pure Ghee", amount: "15g" },
      { name: "Sea salt", amount: "0.5 tsp" }
    ],
    equipment: ["Large non-stick pan", "Sharp chef's knife", "Sauté pan"],
    prepSteps: [
      "Whisk 3 eggs with a pinch of salt until perfectly combined.",
      "Shred the sweet cabbage as finely as possible using a mandoline or chef's knife."
    ],
    cookSteps: [
      "Heat a broad non-stick pan on medium-low and coat with a thin film of ghee (about 3g).",
      "Pour egg batter in a thin layer. Cook for 2 minutes, then flip for 30 seconds to make a paper-thin flat omelette.",
      "Slide the flat omelette onto a cutting board, roll it tightly, and slice horizontally into 1/4-inch noodle-like ribbons.",
      "In another pan, melt the remaining 12g of ghee. Sauté cabbage with sea salt for 4 minutes until it turns glassy and soft.",
      "Add the omelette ribbons and pepper, tossing gently on low heat for 1 minute to incorporate. Serve immediate."
    ],
    nutrients: {
      calories: 360,
      protein: 20,
      fat: 30,
      netCarbs: 2.2,
      fiber: 1.1,
      vitamins: "Provides high levels of Choline, Vitamin K, Vitamin C, and Calcium."
    },
    gastricSafeNote: "Cabbage contains glutamine, a critical healing compound for gastric ulcers. Cooking it until transparent prevents any gaseous bloating."
  },
  {
    id: "b8",
    name: "Cauliflower Upma",
    category: "breakfast",
    servings: 1,
    prepTime: 10,
    cookTime: 12,
    ingredients: [
      { name: "Fresh Cauliflower florets", amount: "200g" },
      { name: "Mustard seeds", amount: "0.5 tsp" },
      { name: "Fresh curry leaves", amount: "5-6 pieces" },
      { name: "Finely grated fresh ginger", amount: "1 tsp" },
      { name: "Pure Ghee", amount: "15g" },
      { name: "Sea salt", amount: "0.5 tsp" }
    ],
    equipment: ["Food processor or manual cheese grater", "Sauté pan with a lid"],
    prepSteps: [
      "Wash cauliflower florets and pat completely dry.",
      "Pulse florets in a food processor or grate manually until they reach fine, uniform rice-like grains.",
      "Grate the ginger finely and chop curry leaves to release aromatic oils."
    ],
    cookSteps: [
      "Heat 15g of ghee in a pan on medium-low. Add mustard seeds and let them completely crackle for 30 seconds.",
      "Toss in the curry leaves and grated ginger; sauté for 45 seconds until highly fragrant.",
      "Add the riced cauliflower and sea salt. Stir well to coat the cauliflower in seasoned ghee.",
      "Drizzle 2 tbsp of water around the edges, immediately seal the pan with a tight-fitting lid, and steam on low for 7 minutes.",
      "Uncover, fluff with a fork daily, and cook uncovered for 2 minutes to let residual moisture evaporate. Enjoy soft."
    ],
    nutrients: {
      calories: 190,
      protein: 4,
      fat: 16,
      netCarbs: 4.2,
      fiber: 3.4,
      vitamins: "Rich in Vitamin C, K, B-complex, and Folate."
    },
    gastricSafeNote: "Steaming cauliflower thoroughly breaks down its sulfurous compounds and tough cell walls, reducing abdominal load and soothing digestion."
  },
  {
    id: "b9",
    name: "Avocado Egg Boat",
    category: "breakfast",
    servings: 1,
    prepTime: 3,
    cookTime: 15,
    ingredients: [
      { name: "Fully ripe Avocado", amount: "1 medium" },
      { name: "Fresh eggs", amount: "2 small" },
      { name: "Sea salt", amount: "0.25 tsp" },
      { name: "Freshly ground black pepper", amount: "0.5 tsp" }
    ],
    equipment: ["Steamer basket or pot", "Chef's knife"],
    prepSteps: [
      "Cut the avocado in half vertically, twist to separate, and remove the hard pit.",
      "With a spoon, scoop out roughly 1 tbsp of flesh from each center to create a slightly wider well for the egg yolk.",
      "Crack one small egg gently into each hollow avocado cup."
    ],
    cookSteps: [
      "Place a steamer basket in a cook pot filled with 1 inch of water. Bring water to a gentle boil.",
      "Carefully position the loaded avocado halves in the steamer basket.",
      "Cover the pot tightly and steam on medium-low force for exactly 12-15 minutes until the egg whites are firm and opaque, but some yolk remains soft.",
      "Remove cautiously, sprinkle with sea salt, ground pepper, and serve warm."
    ],
    nutrients: {
      calories: 380,
      protein: 14,
      fat: 34,
      netCarbs: 2.8,
      fiber: 10,
      vitamins: "Extremely high in Potassium, Vitamin E, Folate, and Lutein."
    },
    gastricSafeNote: "Steaming is preferred over baking for gastric cases because baked avocado skin can develop bitter, irritating browning. Steaming preserves clean, soothing fats."
  },
  {
    id: "b10",
    name: "Chicken Bits Omelette",
    category: "breakfast",
    servings: 1,
    prepTime: 8,
    cookTime: 8,
    ingredients: [
      { name: "Boiled soft chicken breast", amount: "80g" },
      { name: "Fresh chicken eggs", amount: "3" },
      { name: "Fine ground black pepper", amount: "1 tsp" },
      { name: "Pure Ghee", amount: "10g" },
      { name: "Sea salt", amount: "To taste" }
    ],
    equipment: ["Hand shredder or cutting board", "Whisking bowl", "Frying pan"],
    prepSteps: [
      "Boil chicken breast with a pinch of turmeric and salt until tender. Shred it into hair-thin strands.",
      "Whisk 3 eggs with salt and fine black pepper in a bowl for 1 minute until completely homogeneous."
    ],
    cookSteps: [
      "Heat 10g of ghee in a pan on medium-low.",
      "Scatter the shredded chicken breast uniformly across the pan. Sauté for 1 minute just to warm and coat in ghee.",
      "Slowly pour the whisked egg mixture over the chicken strands.",
      "Cover the pan with a lid, turn heat to low, and let it cook undisturbed for 4 minutes.",
      "Once the egg is completely cooked and solid, carefully slide it out onto your plate. Serve warm."
    ],
    nutrients: {
      calories: 390,
      protein: 36,
      fat: 26,
      netCarbs: 0.5,
      fiber: 0,
      vitamins: "High in Niacin (B3), B6, Selenium, and Phosphorus."
    },
    gastricSafeNote: "Shredding the chicken breast into fine, light threads removes any bulky meat structures, ensuring immediate gastric breakdown with minimal acid demand."
  },
  {
    id: "b11",
    name: "Coconut Flour Pancakes",
    category: "breakfast",
    servings: 1,
    prepTime: 5,
    cookTime: 8,
    ingredients: [
      { name: "Fine dried desiccated coconut powder", amount: "2 tbsp (14g)" },
      { name: "Fresh organic eggs", amount: "2" },
      { name: "Diluted thin homemade buttermilk", amount: "20ml" },
      { name: "Pure Ghee", amount: "10g" }
    ],
    equipment: ["Medium bowl", "Fork", "Crepe pan", "Turner"],
    prepSteps: [
      "In a medium bowl, crack 2 eggs and whisk with the 20ml of thin buttermilk.",
      "Add 2 tbsp of fine desiccated coconut powder.",
      "Mix well with a fork and let the batter rest for 2-3 minutes. This allows the coconut fibers to fully absorb liquid and create a cohesive batter."
    ],
    cookSteps: [
      "Heat 10g of ghee in a skillet on a low flame.",
      "Spoon the thick coconut batter onto the skillet, creating 2 small round pancakes.",
      "Cook on low heat for 4 minutes. Because there is no gluten, flip extremely gently once the bottom is solid and pale brown.",
      "Cook the flip-side for an additional 3 minutes. Keep pancakes highly soft and moist."
    ],
    nutrients: {
      calories: 280,
      protein: 15,
      fat: 23,
      netCarbs: 2.4,
      fiber: 3.8,
      vitamins: "Sufficient in Magnesium, Iron, Zinc, and Medium-chain fatty acids."
    },
    gastricSafeNote: "Do not let the pancakes over-fry or dry out. A dry pancake absorbs stomach moisture too quickly, so keep it tender and soft."
  },
  {
    id: "b12",
    name: "Spiced Boiled Eggs",
    category: "breakfast",
    servings: 1,
    prepTime: 10,
    cookTime: 2,
    ingredients: [
      { name: "Large fresh eggs", amount: "4" },
      { name: "Virgin coconut oil", amount: "10ml" },
      { name: "Fine black pepper and Sea salt", amount: "To taste" }
    ],
    equipment: ["Medium boiling pot", "Slicing knife"],
    prepSteps: [
      "Place 4 eggs in a pot. Cover with 1 inch of cold water.",
      "Bring to a boil, then turn down to simmer for exactly 9 minutes for hard-boiled.",
      "Plunge into cold water, peel carefully, and slice each egg cleanly in half."
    ],
    cookSteps: [
      "Arrange the peeled egg halves on a plate.",
      "Evenly drizzle 10ml of virgin coconut oil block over the yolks and whites.",
      "Dust lightly with sea salt and finely ground black pepper. Eat slowly, masticating completely."
    ],
    nutrients: {
      calories: 370,
      protein: 24,
      fat: 30,
      netCarbs: 1.6,
      fiber: 0,
      vitamins: "Rich in Lecithin, Vitamin A, Vitamin D, Selenium, and B12."
    },
    gastricSafeNote: "Drizzling eggs with virgin coconut oil coats the gastric tract and provides a direct, highly anti-inflammatory medium, reducing acid impact during digestion."
  },
  {
    id: "b13",
    name: "Zucchini Hash",
    category: "breakfast",
    servings: 1,
    prepTime: 5,
    cookTime: 10,
    ingredients: [
      { name: "Fresh green zucchini", amount: "150g" },
      { name: "Salted grass-fed butter", amount: "15g" },
      { name: "Fresh farm eggs", amount: "2 large" },
      { name: "Freshly crushed black pepper", amount: "0.5 tsp" }
    ],
    equipment: ["Vegetable grater", "Pan", "Spatula"],
    prepSteps: [
      "Grate the zucchini using the coarse settings of a hand grater.",
      "Gently press the grated zucchini between paper towels to absorb excess moisture (do not squeeze entirely dry, we want some steam)."
    ],
    cookSteps: [
      "Melt 15g of butter in a frying pan on a low flame.",
      "Add the grated zucchini. Sauté and stir on low heat for 5 minutes. The zucchini will steam and cook until beautifully glassy and soft.",
      "Pour 2 thoroughly beaten eggs directly over the cooked zucchini.",
      "Scramble gently with a spatula for 3-4 minutes until the eggs are cooked, but stay highly velvety and moist. Top with black pepper."
    ],
    nutrients: {
      calories: 290,
      protein: 15,
      fat: 25,
      netCarbs: 3.2,
      fiber: 1.5,
      vitamins: "Bountiful in Lutein, Zeaxanthin, Vitamin A, and Vitamin C."
    },
    gastricSafeNote: "Zucchini's soft-cooked fiber acts as a soothing gel for mucosal barriers, making this hash extremely easy to digest."
  },
  {
    id: "b14",
    name: "Creamy Paneer Scramble",
    category: "breakfast",
    servings: 1,
    prepTime: 5,
    cookTime: 8,
    ingredients: [
      { name: "Fresh and soft paneer", amount: "100g" },
      { name: "Turmeric powder", amount: "0.25 tsp" },
      { name: "Thick fresh cream (clarified curd top)", amount: "1 tbsp (15ml)" },
      { name: "Pure Ghee", amount: "10g" },
      { name: "Sea salt & minced cilantro", amount: "To taste" }
    ],
    equipment: ["Frying pan", "Mixing spoon"],
    prepSteps: [
      "With clean hands, crumble the fresh paneer into uniform fine bits.",
      "Measure exactly 15ml of heavy milk cream harvested from the top of cultured curds."
    ],
    cookSteps: [
      "Heat 10g of pure ghee in a pan on medium-low.",
      "Add the crumbled paneer and 0.25 tsp of turmeric powder. Stir continuously for 2 minutes to coat without allowing hard dry crusts.",
      "Add the fresh cream and sea salt. Reduce heat to absolute minimum and stir for 2 minutes.",
      "The result should be rich, moist, and creamy. Garnish with a tiny pinch of cilantro and plate."
    ],
    nutrients: {
      calories: 440,
      protein: 18,
      fat: 40,
      netCarbs: 2.6,
      fiber: 0.2,
      vitamins: "High in Calcium, Protein, Phosphorus, and riboflavin."
    },
    gastricSafeNote: "The fats inside cultured milk cream and ghee provide an alkaline, heavy-lining lipid coat to the lower stomach, soothing reflux and burning sensation."
  },
  {
    id: "b15",
    name: "Nut & Seed Porridge",
    category: "breakfast",
    servings: 1,
    prepTime: 10,
    cookTime: 10,
    ingredients: [
      { name: "Almonds (soaked, skinless)", amount: "10" },
      { name: "Raw pumpkin seeds", amount: "1 tbsp (10g)" },
      { name: "Homemade thin split buttermilk", amount: "100ml" },
      { name: "Organic cardamom powder", amount: "A pinch" }
    ],
    equipment: ["Stone mortars / high-speed mini jar", "Saucepan"],
    prepSteps: [
      "Skin the soaked almonds. Grind almonds and pumpkin seeds together in a mortar/grinder, adding a splash of the buttermilk, to make a completely velvety paste.",
      "Dilute the rest of the buttermilk to a very thin consistency."
    ],
    cookSteps: [
      "Transfer the smooth nut paste and 100ml of thin buttermilk into a small saucepan.",
      "Stir to dissolve all lumps.",
      "Place on very low flame and stir continuously with a spoon. Heat for 6-8 minutes until warm and slightly thickened.",
      "Add a pinch of cardamom powder. Do not boil or curdle. Consume slowly by spooning."
    ],
    nutrients: {
      calories: 180,
      protein: 8,
      fat: 15,
      netCarbs: 3.5,
      fiber: 2.8,
      vitamins: "Rich in Zinc, Calcium, Selenium in an easily assimilable format."
    },
    gastricSafeNote: "Warm, thin fluid density acts therapeutic to gastric recovery. Completely removes the digestive effort of chewing dry almonds and seeds."
  },

  // SECTION 2: LUNCH (1-15)
  {
    id: "l1",
    name: "Palak Chicken",
    category: "lunch",
    servings: 1,
    prepTime: 10,
    cookTime: 25,
    ingredients: [
      { name: "Fresh chicken breast, cubed", amount: "250g" },
      { name: "Fresh spinach leaves", amount: "2 bunches (200g)" },
      { name: "Fresh ginger-garlic paste", amount: "1 tsp" },
      { name: "Pure Ghee", amount: "20g" },
      { name: "Chopped onion (Pillar limit)", amount: "40g" },
      { name: "Turmeric", amount: "0.25 tsp" },
      { name: "Sea salt & lemon juice", amount: "To taste" }
    ],
    equipment: ["Boiling pot for spinach", "Blender", "Deep sauté pan with a lid"],
    prepSteps: [
      "Wash spinach leaves comprehensively. Blanch in boiling water for exactly 2 minutes, then plunge into cold water to preserve chlorophyll. Puree until glassy smooth.",
      "Clean chicken and cut into small bite-sized 3/4-inch cubes."
    ],
    cookSteps: [
      "Melt 20g of ghee in a heavy pot over medium heat. Sauté the 40g of chopped onion and ginger-garlic paste for 3 minutes until completely fragrant.",
      "Add chicken breast cubes and turmeric. Cover and cook on low heat for 10 minutes, letting the chicken cook in its own juices until tender.",
      "Pour in the spinach puree and sea salt. Stir well to coat the chicken.",
      "Cover and simmer on low heat for another 8 minutes until chicken is completely soft and cooked through.",
      "Turn off heat, squeeze half a fresh lemon juice (substitute for tamarind) and serve warm."
    ],
    nutrients: {
      calories: 460,
      protein: 58,
      fat: 22,
      netCarbs: 4.5,
      fiber: 2.6,
      vitamins: "High in Iron, Vitamin A, Folate, and Vitamin B12."
    },
    gastricSafeNote: "Pureed blanched spinach leaves are completely broken down, and cooking chicken in small soft cubes provides gentle digestible protein without heavy gastric acid demand."
  },
  {
    id: "l2",
    name: "Mutton Bone Broth Stew",
    category: "lunch",
    servings: 1,
    prepTime: 15,
    cookTime: 60,
    ingredients: [
      { name: "Mutton marrowbones", amount: "150g" },
      { name: "Mutton meat cubes", amount: "100g" },
      { name: "Peeled diced bottle gourd", amount: "100g" },
      { name: "Thoroughly crushed black pepper", amount: "1 tsp" },
      { name: "Pure Ghee", amount: "15g" },
      { name: "Sea salt & ginger paste", amount: "To taste" }
    ],
    equipment: ["Pressure cooker or heavy stock pot", "Ladle"],
    prepSteps: [
      "Wash bone and meat pieces thoroughly.",
      "Dice bottle gourd into tender small cubes."
    ],
    cookSteps: [
      "Heat 15g of ghee in a pressure cooker. Add meat pieces, bones, and 1 tsp of ginger paste. Sauté for 3 minutes to seal.",
      "Add 500ml of fresh water, sea salt, and half the black pepper. Close the cooker.",
      "Cook on medium high for 5 whistles, then reduce flame to low for 25 minutes to draw gelatin from marrowbone.",
      "Release steam. Open the cooker, add the tender bottle gourd cubes and the rest of the black pepper.",
      "Close and pressure cook for 1 final whistle (about 5 minutes) until bottle gourd is completely soft. Sip the rich broth and eat the soft meat."
    ],
    nutrients: {
      calories: 380,
      protein: 28,
      fat: 26,
      netCarbs: 2.5,
      fiber: 1.2,
      vitamins: "Full of Bioavailable Collagen, Gelatin, Magnesium, Phosphorus, and Calcium."
    },
    gastricSafeNote: "The gelatin and collagen present in slowly stewed bones act directly to patch and soothe an inflamed gastric lining, restoring barrier function."
  },
  {
    id: "l3",
    name: "Fish Tawa Fry",
    category: "lunch",
    servings: 1,
    prepTime: 10,
    cookTime: 10,
    ingredients: [
      { name: "Fresh boneless fish fillet (Murrel or Sea bass)", amount: "200g" },
      { name: "Turmeric powder", amount: "0.5 tsp" },
      { name: "Mild red chili powder", amount: "0.25 tsp" },
      { name: "Lemon juice", amount: "1 tbsp" },
      { name: "Cold-pressed virgin coconut oil", amount: "20ml" },
      { name: "Sea salt", amount: "To taste" }
    ],
    equipment: ["Flat iron tawa or skillet", "Spatula"],
    prepSteps: [
      "Pat dry the fish fillet with a clean paper towel.",
      "Mix turmeric, red chili powder, sea salt, and half the lemon juice into a light rub. Rub evenly onto the fish fillet. Let marinate for 10 minutes."
    ],
    cookSteps: [
      "Pour 20ml of coconut oil onto a thick flat iron tawa over medium-low heat.",
      "Place the fish fillet gently on the tawa. Fry on medium-low for exactly 5 minutes.",
      "Flip the fish fillet with a flat spatula carefully. Fry the second side for another 4-5 minutes until the fish flakes easily with a fork.",
      "Drizzle with the remaining lemon juice instantly of tamarind, and let it cool slightly before eating."
    ],
    nutrients: {
      calories: 320,
      protein: 42,
      fat: 22,
      netCarbs: 1.0,
      fiber: 0.1,
      vitamins: "High in Omega-3 (DHA/EPA), Vitamin D, Iodine, and B-complex."
    },
    gastricSafeNote: "Fish protein is highly delicate and breaks down much faster than red meat, causing lower stomach acid production and less mechanical stomach strain."
  },
  {
    id: "l4",
    name: "Cabbage \"Rice\" with Egg",
    category: "lunch",
    servings: 1,
    prepTime: 10,
    cookTime: 12,
    ingredients: [
      { name: "Fresh green cabbage shredded finely", amount: "200g" },
      { name: "Fresh farm eggs", amount: "2" },
      { name: "Fine black pepper and Sea salt", amount: "To taste" },
      { name: "Pure Ghee", amount: "15g" }
    ],
    equipment: ["Wok/broad pan", "Spatula"],
    prepSteps: [
      "Shred cabbage extremely fine so the pieces mimics rice grains. Squeeze slightly in a towel to extract excess moisture.",
      "Whisk 2 eggs in a small cup with salt."
    ],
    cookSteps: [
      "Heat 15g of ghee in a wok on medium-low heat.",
      "Add the finely shredded cabbage. Stir-fry for 6 minutes. The cabbage must cook through completely until translucent and glassy, losing its raw crispness.",
      "Make a well in the center of the cabbage, pour in the whisked eggs.",
      "Let the eggs sit for 30 seconds, then slowly incorporate them into the cabbage by folding gently for 4 minutes on low flame.",
      "Sprinkle black pepper and serve warm."
    ],
    nutrients: {
      calories: 270,
      protein: 15,
      fat: 22,
      netCarbs: 4.4,
      fiber: 2.8,
      vitamins: "Provides high levels of Choline, Vitamin U (methylmethionine), Vitamin K, and C."
    },
    gastricSafeNote: "Vitamin U in cooked cabbage is historically researched to heal peptic ulcers. Raw cabbage causes gas, but thoroughly soft-cooked cabbage is deeply healing."
  },
  {
    id: "l5",
    name: "Cauliflower Mash Mutton",
    category: "lunch",
    servings: 1,
    prepTime: 15,
    cookTime: 35,
    ingredients: [
      { name: "Tender goat meat chunks", amount: "150g" },
      { name: "Fresh cauliflower florets", amount: "250g" },
      { name: "Salted grass-fed butter", amount: "25g" },
      { name: "Turmeric powder", amount: "0.25 tsp" },
      { name: "Pure Ghee", amount: "10g" },
      { name: "Ginger paste & Sea salt", amount: "To taste" }
    ],
    equipment: ["Steamer pot", "Blender/Potato masher", "Stock pan with a lid"],
    prepSteps: [
      "Steam the cauliflower florets for 15 minutes till completely mushy.",
      "Puree cauliflower with 25g of butter and a pinch of salt until it looks like creamy potato mash.",
      "Cut goat meat into small pieces."
    ],
    cookSteps: [
      "In a separate stock pot, heat 10g of ghee. Sauté meat pieces with 1 tsp of ginger paste and turmeric for 3 minutes.",
      "Add 1.5 cups of water and salt. Cover and slow simmer on low heat for 30 minutes until meat is completely fall-apart tender.",
      "Place the comforting cauliflower butter mash in a bowl, create a depression, and pour the luscious mutton pieces and gravy over it. Consume warm."
    ],
    nutrients: {
      calories: 520,
      protein: 34,
      fat: 40,
      netCarbs: 5.0,
      fiber: 4.1,
      vitamins: "High in Potassium, Folate, Iron, Zinc, and Vitamin C."
    },
    gastricSafeNote: "Mushing the cauliflower acts as mechanical pre-digestion. Fall-apart slow-cooked meat ensures easy absorption for postoperative gastric tracts."
  },
  {
    id: "l6",
    name: "Ridge Gourd (Beerakaya) Prawns",
    category: "lunch",
    servings: 1,
    prepTime: 10,
    cookTime: 15,
    ingredients: [
      { name: "Tender peeled tiger prawns", amount: "150g" },
      { name: "Ridge Gourd (Beerakaya) peeled & cubed", amount: "250g" },
      { name: "Green chili paste (mild)", amount: "1/2 tsp" },
      { name: "Virgin coconut oil", amount: "20ml" },
      { name: "Turmeric powder", amount: "0.25 tsp" },
      { name: "Sea salt", amount: "To taste" }
    ],
    equipment: ["Chop-board", "Knife", "Kadai with lid"],
    prepSteps: [
      "Peel the sharp hard skins off the ridge gourd completely and cut the pure soft flesh into bite-sized cubes.",
      "Shell and devein the prawns thoroughly. Pat dry."
    ],
    cookSteps: [
      "Heat 20ml of coconut oil in a kadai on medium-low.",
      "Add the tender ridge gourd cubes and cook for 4 minutes. They will soften and sweat naturally.",
      "Stir in green chili paste, turmeric powder, and sea salt.",
      "Add the prawns. Cover the container with a lid and simmer on low for exactly 6-8 minutes.",
      "Gourd and prawns will cook in their sweet juices without needing added water. Do not overcook prawns or they turn rubbery."
    ],
    nutrients: {
      calories: 340,
      protein: 26,
      fat: 22,
      netCarbs: 3.8,
      fiber: 2.2,
      vitamins: "High in Vitamin A, Iron, Copper, and Zinc."
    },
    gastricSafeNote: "Ridge gourd (Beerakaya) has rich water content and high mucilage, making it a soothing layer for gastric lesions. Always cook it completely."
  },
  {
    id: "l7",
    name: "Egg Curry (No Tamarind)",
    category: "lunch",
    servings: 1,
    prepTime: 10,
    cookTime: 18,
    ingredients: [
      { name: "Hard-boiled eggs", amount: "4" },
      { name: "Finely minced tomato", amount: "50g" },
      { name: "Fine chopped onion", amount: "40g" },
      { name: "Freshly grated mature coconut", amount: "20g" },
      { name: "Ghee", amount: "15g" },
      { name: "Sea salt & coriander powder", amount: "To taste" }
    ],
    equipment: ["Blender for coconut paste", "Curry pot with lid"],
    prepSteps: [
      "Grind the 20g of fresh coconut with 2 tbsp of warm water into a thick, fine paste.",
      "Boil eggs, peel them, and pierce with a toothpick 3 times to let flavors enter."
    ],
    cookSteps: [
      "Heat 15g of ghee in a pan. Sauté onions and tomatoes together for 5 minutes with a pinch of salt until they form a highly soft paste-like base.",
      "Add turmeric, coriander powder, and the coconut paste. Cook on low for 3 minutes until oil separates.",
      "Pour in 150ml of warm water, add the hard-boiled eggs.",
      "Cover and simmer on low-flame for 8 minutes to thicken. Substitute lime juice for tamarind if you need sourness after cooking."
    ],
    nutrients: {
      calories: 420,
      protein: 25,
      fat: 34,
      netCarbs: 3.5,
      fiber: 1.5,
      vitamins: "Abundant in Choline, Lutein, Iron, and Vitamin D."
    },
    gastricSafeNote: "The acidic tamarind is strictly absent in this curry. Pure coconut paste provides high fats that neutralize gastric hyper-acidity."
  },
  {
    id: "l8",
    name: "Leafy Green Mutton",
    category: "lunch",
    servings: 1,
    prepTime: 15,
    cookTime: 40,
    ingredients: [
      { name: "Minced mutton meat (Kheema)", amount: "200g" },
      { name: "Amaranth leaves (Thotakura)", amount: "150g" },
      { name: "Pure Ghee", amount: "20g" },
      { name: "Turmeric and Ginger paste", amount: "1 tsp" },
      { name: "Sea salt", amount: "To taste" }
    ],
    equipment: ["Pressure cooker/Pan", "Chopper"],
    prepSteps: [
      "Thoroughly wash amaranth leaves and chop them extremely fine.",
      "Rinse minced mutton in a fine strainer and squeeze slightly."
    ],
    cookSteps: [
      "Heat 20g of ghee in a pressure cooker. Sauté ginger paste and turmeric for 1 minute.",
      "Add minced mutton and sauté for 5 minutes until meat loses its pinkness.",
      "Add minced amaranth leaves and sea salt, stirring to incorporate.",
      "Add half a cup of water, seal pressure cooker and cook for 4-5 whistles on medium flame.",
      "Allow pressure to release naturally, then simmer uncovered for 3 minutes to dry extra liquid. Eat using a spoon."
    ],
    nutrients: {
      calories: 490,
      protein: 36,
      fat: 35,
      netCarbs: 2.0,
      fiber: 2.5,
      vitamins: "High in Iron, Vitamin K, Calcium, and B-vitamins."
    },
    gastricSafeNote: "Amaranth (Thotakura) leaves are highly alkaline and very easy on a healing gut compared to heavy fibers. Minced meat ensures no major stomach kneading is required."
  },
  {
    id: "l9",
    name: "Butter Garlic Prawns",
    category: "lunch",
    servings: 1,
    prepTime: 5,
    cookTime: 8,
    ingredients: [
      { name: "Clean deveined prawns", amount: "180g" },
      { name: "Grass-fed butter", amount: "30g" },
      { name: "Minced fresh garlic cloves", amount: "1 tsp" },
      { name: "Fresh lemon juice", amount: "1 tbsp" },
      { name: "Finely crushed black pepper", amount: "0.5 tsp" }
    ],
    equipment: ["Sauté pan", "Spatula"],
    prepSteps: [
      "Wash prawns and dry with paper towels to ensure they sauté properly.",
      "Mince garlic until it is micro-fine."
    ],
    cookSteps: [
      "Heat 30g of butter in a pan on a very low flame until it melts down.",
      "Add the minced garlic and sauté for exactly 1 minute, keeping the butter pale yellow (do not burn the garlic).",
      "Raise heat slightly to medium-low, add the prawns to the butter.",
      "Sauté prawns for 2-3 minutes on one side until they turn pink.",
      "Flip, cook the second side for another 2 minutes.",
      "Stir in lemon juice, salt, and black pepper, then turn off heat immediately. Let it rest in the warm butter for 1 minute."
    ],
    nutrients: {
      calories: 390,
      protein: 34,
      fat: 27,
      netCarbs: 1.8,
      fiber: 0.1,
      vitamins: "Rich in Copper, Selenium, Vitamin A, and Riboflavin."
    },
    gastricSafeNote: "Sauté garlic on low heat; roasted garlic behaves smoothly, while raw, undercooked garlic contains spicy elements that can worsen acid reflux."
  },
  {
    id: "l10",
    name: "Mushroom & Spinach Saute",
    category: "lunch",
    servings: 1,
    prepTime: 10,
    cookTime: 12,
    ingredients: [
      { name: "White button mushrooms, sliced", amount: "250g" },
      { name: "Fresh spinach (tender baby leaves)", amount: "2 bunches (200g)" },
      { name: "Virgin coconut oil", amount: "20ml" },
      { name: "Sea salt & fine black pepper", amount: "To taste" }
    ],
    equipment: ["Large skillet", "Slicing board", "Knife"],
    prepSteps: [
      "Clean mushrooms and slice them thinly.",
      "Wash spinach leaves three times to ensure clean grit-free soft leaves. Chop finely."
    ],
    cookSteps: [
      "Heat 20ml of coconut oil in a broad skillet on medium flame.",
      "Add sliced mushrooms and cook for 5 minutes. Let their water evaporate completely until they turn a beautiful brown color.",
      "Toss in the finely chopped spinach and sea salt.",
      "Melt the spinach into the mushrooms on medium-low for exactly 3-4 minutes, turning occasionally until spinach is completely soft and cooked through.",
      "Finish with black pepper. Consumed soft and warm."
    ],
    nutrients: {
      calories: 250,
      protein: 10,
      fat: 21,
      netCarbs: 4.8,
      fiber: 3.8,
      vitamins: "Bountiful in Vitamin K, A, Folate, Iron, and Vitamin D."
    },
    gastricSafeNote: "Mushroom and spinach cooked together provide double soft-fiber advantages. Sauté until absolutely soft to make digestion effortless."
  },
  {
    id: "l11",
    name: "Bottle Gourd Chicken",
    category: "lunch",
    servings: 1,
    prepTime: 10,
    cookTime: 25,
    ingredients: [
      { name: "Chicken breast pieces (small cubes)", amount: "200g" },
      { name: "Diced bottle gourd", amount: "200g" },
      { name: "Pure Ghee", amount: "15g" },
      { name: "Turmeric powder & ginger paste", amount: "1 tsp" },
      { name: "Sea salt & ground cumin", amount: "To taste" }
    ],
    equipment: ["Saucepan with heavy lid"],
    prepSteps: [
      "Peel the bottle gourd, discard any hard seeds, and cut the soft flesh into small 1/2-inch cubes.",
      "Cut the chicken breast into matching small cubes."
    ],
    cookSteps: [
      "Heat 15g of ghee in a saucepan on medium-low. Add ginger paste and chicken cubes. Sauté for 3 minutes.",
      "Add turmeric powder, diced bottle gourd, and a pinch of salt. Toss well.",
      "Do not add any water. Cover tightly with a heavy lid.",
      "Turn the flame to its absolute minimum. Allow the bottle gourd to release its abundant water, creating a tender, self-cooked stew.",
      "Cook for 20 minutes until the chicken and bottle gourd are incredibly soft and mashable. Finish with cumin."
    ],
    nutrients: {
      calories: 360,
      protein: 44,
      fat: 18,
      netCarbs: 3.5,
      fiber: 2.2,
      vitamins: "High in Niacin, Vitamin B6, Selenium, and Vitamin C."
    },
    gastricSafeNote: "This cooling, alkaline stew has zero spices and rich hydration. The moisture is bound to gourd cells, protecting the gastric lining from physical friction."
  },
  {
    id: "l12",
    name: "Brinjal Egg Fry",
    category: "lunch",
    servings: 1,
    prepTime: 5,
    cookTime: 15,
    ingredients: [
      { name: "Tender small purple brinjal (eggplant)", amount: "150g" },
      { name: "Fresh chicken eggs", amount: "2" },
      { name: "Virgin coconut oil", amount: "20ml" },
      { name: "Mild homemade masala powder (cumin/coriander)", amount: "0.5 tsp" },
      { name: "Sea salt", amount: "To taste" }
    ],
    equipment: ["Frying pan", "Spatula"],
    prepSteps: [
      "Dice purple brinjal into very small 1cm cubes. Soak in salted water for 5 minutes to remove any natural bitter juices, then drain completely."
    ],
    cookSteps: [
      "Heat 20ml of coconut oil in a pan on medium-low.",
      "Add the brinjal cubes and sauté for 8 minutes. Sauté them continuously until the cubes turn completely soft and light golden-brown.",
      "Sprinkle salt and the mild cumin/coriander masala.",
      "Crack two eggs directly into the soft brinjal.",
      "Gently scramble for 3-4 minutes on low flame to combine. Sauté until egg is fully cooked but remains soft."
    ],
    nutrients: {
      calories: 320,
      protein: 15,
      fat: 26,
      netCarbs: 3.8,
      fiber: 3.2,
      vitamins: "Good in Potassium, Manganese, Vitamin B1, and B6."
    },
    gastricSafeNote: "Brinjal cooks down to a velvety consistency with minimal bulk fiber. Ensure the cubes are thoroughly sautéed until soft and cooked through."
  },
  {
    id: "l13",
    name: "Paneer Butter Masala",
    category: "lunch",
    servings: 1,
    prepTime: 10,
    cookTime: 15,
    ingredients: [
      { name: "Fresh firm paneer, cubed", amount: "150g" },
      { name: "Soft ripe tomato puree", amount: "100g" },
      { name: "Heaped grass-fed butter", amount: "30g" },
      { name: "Cultured cream (top of curd)", amount: "15ml" },
      { name: "Turmeric powder", amount: "0.25 tsp" },
      { name: "Sea salt & coriander powder", amount: "To taste" }
    ],
    equipment: ["Saucepan", "Hand-held blender"],
    prepSteps: [
      "Cut paneer into small cubes. Purée raw tomatoes till perfectly liquid.",
      "Measure out fresh heavy cream."
    ],
    cookSteps: [
      "Melt 30g of butter in a saucepan on a low, quiet flame.",
      "Pour in the tomato puree, turmeric, and coriander powder. Sauté for 6-8 minutes until the butter begins to separate from the cooked tomato paste.",
      "Add 100ml of water and sea salt. Bring to a gentle simmer for 2 minutes.",
      "Slide the soft paneer cubes into the sauce. Turn heat to low, cover, and let cook for 3 minutes to warm the paneer through.",
      "Stir in the 15ml of rich cream and turn off the heat immediately. Do not boil once cream is added."
    ],
    nutrients: {
      calories: 610,
      protein: 28,
      fat: 52,
      netCarbs: 4.8,
      fiber: 1.2,
      vitamins: "Bountiful in Bio-Calcium, Vitamin A, Vitamin D, and Riboflavin."
    },
    gastricSafeNote: "By cooking the tomato paste with heavy butter, we mask and neutralize any acidic irritation of tomatoes. Do not use ginger-garlic or hot chilies in this meal."
  },
  {
    id: "l14",
    name: "Fried Fish Soup",
    category: "lunch",
    servings: 1,
    prepTime: 10,
    cookTime: 15,
    ingredients: [
      { name: "Fresh firm white fish cubed", amount: "180g" },
      { name: "Peeled diced bottle gourd", amount: "100g" },
      { name: "Fresh ginger slices", amount: "1 tsp" },
      { name: "Virgin coconut oil", amount: "15ml" },
      { name: "Sea salt & coriander sprigs", amount: "To taste" }
    ],
    equipment: ["Frying pan", "Soup pot"],
    prepSteps: [
      "Dice bottle gourd. Slice ginger into thin straws.",
      "Lightly coat fish chunks with a pinch of salt."
    ],
    cookSteps: [
      "Heat 15ml of coconut oil in a pan. Fry the fish cubes on low heat for 2 minutes on each side just to firm their structure. Set aside.",
      "In a deep soup pot, bring 300ml of water to a boil, along with the diced bottle gourd, ginger slices, and salt.",
      "Simmer for 8 minutes until the bottle gourd is completely soft.",
      "Gently lower the pan-fried fish pieces into the boiling vegetable broth.",
      "Simmer very gently on low for 4 minutes so the fish finishes cooking and infuses the broth, but doesn't break. Enjoy warm by sipping."
    ],
    nutrients: {
      calories: 270,
      protein: 36,
      fat: 18,
      netCarbs: 1.8,
      fiber: 1.0,
      vitamins: "Rich in Iodine, Vitamin D, Potassium, and Choline."
    },
    gastricSafeNote: "The ginger-infused warm broth behaves as an anti-spasmodic, settling stomach contractions and aiding postoperative gastric clearing."
  },
  {
    id: "l15",
    name: "Mixed Veg Gali (Minced Mutton Veg)",
    category: "lunch",
    servings: 1,
    prepTime: 10,
    cookTime: 25,
    ingredients: [
      { name: "Minced goat mutton (Kheema)", amount: "100g" },
      { name: "Finely chopped cauliflower", amount: "100g" },
      { name: "Finely chopped cabbage", amount: "100g" },
      { name: "Ghee", amount: "20g" },
      { name: "Turmeric, sea salt, pepper", amount: "To taste" }
    ],
    equipment: ["Pressure cooker or sauté pot with cover"],
    prepSteps: [
      "Mince cabbage and cauliflower into tiny rice-like grains."
    ],
    cookSteps: [
      "Heat 20g of ghee in a pot on medium-low. Add 100g of minced mutton and sauté for 5 minutes until lightly browned.",
      "Add turmeric powder and 100ml of water. Cover and slow simmer for 12 minutes to make meat extremely tender.",
      "Stir in the chopped cauliflower, cabbage, and salt.",
      "Cover and simmer on low for an additional 8 minutes, letting the vegetables steam in the remaining meat juices.",
      "Complete with fine black pepper once all liquid has been absorbed. Perfect, easy-to-digest combo."
    ],
    nutrients: {
      calories: 380,
      protein: 22,
      fat: 28,
      netCarbs: 4.8,
      fiber: 3.5,
      vitamins: "B9 (Folate), Vitamin C, Vitamin K, and Iron."
    },
    gastricSafeNote: "Finely chopping vegetables and meat together provides a pre-chewed mechanical state. Fully steaming the mix reduces digestion strain to almost zero."
  },

  // SECTION 3: SNACKS (1-15)
  {
    id: "s1",
    name: "Bulletproof Coffee",
    category: "snacks",
    servings: 1,
    prepTime: 2,
    cookTime: 2,
    ingredients: [
      { name: "Fresh hot brewed black coffee", amount: "150ml" },
      { name: "Grass-fed unsalted butter", amount: "10g" },
      { name: "Warm liquid virgin coconut oil", amount: "10ml" }
    ],
    equipment: ["Blender or high-speed milk frother", "Hot mug"],
    prepSteps: [
      "Brew hot black coffee using freshly ground beans or organic spray-dried instant powder."
    ],
    cookSteps: [
      "Pour the hot coffee into a high-speed blender jar.",
      "Add 10g of butter and 10ml of virgin coconut oil.",
      "Blend on high speed for exactly 20 seconds. This step is critical: it emulsifies the fats with the water, turning it into a creamy, golden, froth-topped elixir. Serve warm."
    ],
    nutrients: {
      calories: 170,
      protein: 0.2,
      fat: 19,
      netCarbs: 0,
      fiber: 0,
      vitamins: "Provides high-grade MCT fats and trace fat-soluble vitamins (A, E, K)."
    },
    gastricSafeNote: "High speed blending breaks the fat molecules into tiny micelles. This prevents a floating slick of oil, which can sit heavily on a gastric reoccurrence stomach, allowing quick, comfortable stomach emptying."
  },
  {
    id: "s2",
    name: "Spiced Walnuts",
    category: "snacks",
    servings: 1,
    prepTime: 2,
    cookTime: 5,
    ingredients: [
      { name: "English walnuts, halves", amount: "5 pieces (15g)" },
      { name: "Pure Ghee", amount: "5g" },
      { name: "Sea salt & ground black pepper", amount: "To taste" }
    ],
    equipment: ["Small pans / heavy dry skillet"],
    prepSteps: [
      "Carefully inspect the walnuts for shell fragments."
    ],
    cookSteps: [
      "Melt 5g of ghee in a small pan on low flame.",
      "Add walnut halves. Roast slowly on low flame for exactly 4-5 minutes, turning often, until they smell nutty. Do not char them.",
      "Add sea salt and a pinch of black pepper, coat evenly, and transfer to a cooling plate. Chew very slowly and completely."
    ],
    nutrients: {
      calories: 140,
      protein: 2.5,
      fat: 13,
      netCarbs: 1.2,
      fiber: 1.0,
      vitamins: "Tremendous Omega-3, Copper, and Manganese."
    },
    gastricSafeNote: "Walnuts must be roasted on low ghee. Roasting breaks down raw phytic acids which irritate inflamed stomach tissues. Always chew to an absolute liquid before swallowing."
  },
  {
    id: "s3",
    name: "Roasted Pumpkin Seeds",
    category: "snacks",
    servings: 1,
    prepTime: 2,
    cookTime: 5,
    ingredients: [
      { name: "Raw, peeled pumpkin seeds (Pepitas)", amount: "2 tbsp (20g)" },
      { name: "Warm liquid virgin coconut oil", amount: "5ml" },
      { name: "Sea salt", amount: "To taste" }
    ],
    equipment: ["Frying pan", "Spatula"],
    prepSteps: [
      "Dry the pumpkin seeds if damp."
    ],
    cookSteps: [
      "Spoon 5ml of coco-oil into a frying pan on low heat.",
      "Add 20g of pumpkin seeds. Toast on a lower flame, shaking the pan constantly, for 4 minutes until they puff up and crackle lightly.",
      "Turn off the heat, toss with a touch of dry sea salt. Let cool to room temp before snacking."
    ],
    nutrients: {
      calories: 140,
      protein: 6,
      fat: 12,
      netCarbs: 2.1,
      fiber: 1.2,
      vitamins: "Brimming with Magnesium, Zinc, Phosphorus, and Iron."
    },
    gastricSafeNote: "Pumpkin seeds are highly alkaline. Small roasted quantities behave as a calming mineral supplement for ulcers, neutralizing sour acid reflux."
  },
  {
    id: "s4",
    name: "Fried Paneer Cubes",
    category: "snacks",
    servings: 1,
    prepTime: 2,
    cookTime: 6,
    ingredients: [
      { name: "Fresh full-fat paneer", amount: "100g" },
      { name: "Pure Ghee", amount: "20g" },
      { name: "Sea salt & cumin powder", amount: "To taste" }
    ],
    equipment: ["Skillet", "Tongs"],
    prepSteps: [
      "Cut paneer into small 1-inch thin cubes. Thoroughly blot moisture with paper towel to prevent ghee splattering."
    ],
    cookSteps: [
      "Melt 20g of ghee in a skillet over low-medium heat.",
      "Place paneer cubes in a single layer. Fry on medium-low for 3 minutes until base is light-gold, then flip.",
      "Cook for another 2-3 minutes. Keep the inside extremely moist and cushiony (do not allow them to dry out or brown hard).",
      "Toss lightly with sea salt and fresh roasted cumin powder."
    ],
    nutrients: {
      calories: 450,
      protein: 18,
      fat: 41,
      netCarbs: 2.2,
      fiber: 0.1,
      vitamins: "Excellent Calcium, Phosphorus, and Vitamin A."
    },
    gastricSafeNote: "Cook the paneer to a tender state only. Hard-fried, over-cooked, crispy paneer forms sharp edges that can scratch highly sensitive gastric lesions."
  },
  {
    id: "s5",
    name: "Clear Veg Soup",
    category: "snacks",
    servings: 1,
    prepTime: 5,
    cookTime: 15,
    ingredients: [
      { name: "Tender chopped bottle gourd", amount: "100g" },
      { name: "Finely sliced sweet cabbage", amount: "50g" },
      { name: "Virgin coconut oil", amount: "10ml" },
      { name: "Fresh black pepper & sea salt", amount: "To taste" }
    ],
    equipment: ["Soup saucepan", "Fine strainer"],
    prepSteps: [
      "Wash and chop cabbage and gourd finely."
    ],
    cookSteps: [
      "Combine bottle gourd, cabbage, sea salt, and 300ml of fresh water in a saucepan.",
      "Bring to a boil, then cover and slow simmer for 15 minutes to fully draw all soluble nutrients.",
      "Pour the soup through a strainer into a mug to separate the tough vegetable fibers.",
      "Stir 10ml of virgin coconut oil and black pepper directly into the warm clear vegetable broth. Sip slowly."
    ],
    nutrients: {
      calories: 100,
      protein: 1.0,
      fat: 10,
      netCarbs: 1.8,
      fiber: 0.2,
      vitamins: "Highly bioavailable Potassium, Vitamin C, and Alkaline mineral salts."
    },
    gastricSafeNote: "Straining out the fibrous vegetable structures ensures the drink is a highly concentrated, soothing alkaline liquid that calms hyperactive acid spasms without any solid bulk."
  },
  {
    id: "s6",
    name: "Lemon-Ginger Soda",
    category: "snacks",
    servings: 1,
    prepTime: 3,
    cookTime: 0,
    ingredients: [
      { name: "Fresh green key lemon", amount: "1" },
      { name: "Freshly squeezed warm ginger juice", amount: "1 tsp (5ml)" },
      { name: "Pure chilled zero-sugar carbonated club soda", amount: "200ml" }
    ],
    equipment: ["Lemon squeezer", "Grater and squeeze cloth", "Tall glass"],
    prepSteps: [
      "Grate a small piece of fresh ginger, wrap in cloth, and squeeze to obtain 1 tsp pure clear yellow ginger juice.",
      "Squeeze 1 whole fresh lemon."
    ],
    cookSteps: [
      "In a tall glass, combine the fresh lemon juice and clear ginger juice.",
      "Slowly pour 200ml of chilled club soda over the juices, letting the foam subside. (Do not add standard table salt or black salt, as raw salt in continuous sodas can irritate a healing gastric lining).",
      "Sip extremely slowly between meals."
    ],
    nutrients: {
      calories: 10,
      protein: 0.1,
      fat: 0,
      netCarbs: 0.8,
      fiber: 0,
      vitamins: "Bountiful in Vitamin C and active Gingerol compounds."
    },
    gastricSafeNote: "Ginger contains active gingerols which act as natural pro-kinetics, improving lower esophageal sphincter tone to physically lock down acid and accelerate stomach emptying."
  },
  {
    id: "s7",
    name: "Coconut Chunks",
    category: "snacks",
    servings: 1,
    prepTime: 2,
    cookTime: 0,
    ingredients: [
      { name: "Fully mature fresh dry coconut meat (Kobbera)", amount: "50g" }
    ],
    equipment: ["Slicing knife", "Chewing teeth!"],
    prepSteps: [
      "Cut the mature hard white coconut flesh into small wedge portions of approximately 10g each."
    ],
    cookSteps: [
      "Serve raw at room temperature.",
      "Take small bites and chew each bite continuously until it dissolves into a complete, warm cream inside the mouth before swallowing."
    ],
    nutrients: {
      calories: 180,
      protein: 1.8,
      fat: 17,
      netCarbs: 3.2,
      fiber: 4.5,
      vitamins: "Rich in Lauric acid, Potassium, Copper, and Manganese."
    },
    gastricSafeNote: "Masticating mature coconut creates a rich protective internal milk emulsion that coats sensitive gastric ulcer pathways. Excellent therapeutic tool to curb small hunger pangs."
  },
  {
    id: "s8",
    name: "Seed Mixture (Butter Roasted)",
    category: "snacks",
    servings: 1,
    prepTime: 2,
    cookTime: 6,
    ingredients: [
      { name: "Helianthus (sunflower) seeds", amount: "1 tbsp" },
      { name: "Raw, peeled pumpkin seeds", amount: "1 tbsp" },
      { name: "Watermelon seeds", amount: "1 tbsp" },
      { name: "Grass-fed butter", amount: "10g" },
      { name: "Sea salt", amount: "To taste" }
    ],
    equipment: ["Small non-stick pan", "Spatula"],
    prepSteps: [
      "Pre-mix the three seed types uniformly in a dry ramekin."
    ],
    cookSteps: [
      "In a skillet, melt 10g of butter on very low flame.",
      "Add the seed mixture. Roast slowly on a low simmer for 5-6 minutes, stirring continuously until they are light golden.",
      "Dust with a very light pinch of sea salt. Cool completely to room temperature before eating."
    ],
    nutrients: {
      calories: 210,
      protein: 8,
      fat: 19,
      netCarbs: 2.8,
      fiber: 2.2,
      vitamins: "Dense in Vitamin E, Magnesium, Zinc, and Selenium."
    },
    gastricSafeNote: "Butter roasting tenderizes the coarse outer skin of shelled seeds. However, restrict portions to 3 tbsp max to prevent heavy biliary fat-pumping workloads."
  },
  {
    id: "s9",
    name: "Hard-Boiled Egg (Single)",
    category: "snacks",
    servings: 1,
    prepTime: 10,
    cookTime: 0,
    ingredients: [
      { name: "Large poultry egg", amount: "1 (50g)" },
      { name: "Sea salt & black pepper", amount: "To taste" }
    ],
    equipment: ["Small egg saucepan", "Spoon"],
    prepSteps: [
      "Hard boil the egg for exactly 9 minutes, peel and slice in small halves."
    ],
    cookSteps: [
      "Dash with a delicate touch of sea salt and freshly crushed black pepper.",
      "Always eat in 4 distinct bites, chewing thoroughly."
    ],
    nutrients: {
      calories: 78,
      protein: 6,
      fat: 5.5,
      netCarbs: 0.4,
      fiber: 0,
      vitamins: "Choline, Lutein, Vitamin B12, and Vitamin D."
    },
    gastricSafeNote: "A single, clean, hard-boiled egg provides a small, highly digestible protein pulse of just 6g, stimulating minimal gastric digestive strain."
  },
  {
    id: "s10",
    name: "Bulletproof Green Tea",
    category: "snacks",
    servings: 1,
    prepTime: 2,
    cookTime: 2,
    ingredients: [
      { name: "EWG-certified green tea", amount: "1 bag" },
      { name: "Warm liquid virgin coconut oil", amount: "10ml" },
      { name: "Hot water", amount: "150ml" }
    ],
    equipment: ["Blender / immersion frother", "Cup"],
    prepSteps: [
      "Steep the green tea bag in 150ml of hot water (80°C) for flatly 2 minutes to extract mild catechins without bitter tannins."
    ],
    cookSteps: [
      "Pour hot green tea into the blender jar.",
      "Add 10ml of virgin coconut oil.",
      "Blend at highest speeds for 15 seconds until completely milky and smooth. Drink warm."
    ],
    nutrients: {
      calories: 80,
      protein: 0,
      fat: 10,
      netCarbs: 0,
      fiber: 0,
      vitamins: "High in Epigallocatechin gallate (EGCG) and Lauric Acid."
    },
    gastricSafeNote: "EGCG helps downregulate inflammatory cytokines in gastric mucosa, and coconut emulsification enables rapid transit into the small intestine."
  },
  {
    id: "s11",
    name: "Almond Butter",
    category: "snacks",
    servings: 1,
    prepTime: 10,
    cookTime: 0,
    ingredients: [
      { name: "Fresh almonds (soaked overnight, peeled)", amount: "10 pieces" },
      { name: "Pure warm Ghee", amount: "10g" }
    ],
    equipment: ["Stone mortars / Heavy spice grinder"],
    prepSteps: [
      "Pill the soaked almonds carefully to remove heavy skin fibers."
    ],
    cookSteps: [
      "Place skinless almonds in the mortar or heavy grinder.",
      "Add 10g of warm ghee.",
      "Grind continuously for 8-10 minutes until a light, extremely smooth almond-butter cream forms.",
      "Eat directly from the spoon, letting it wash softly down the throat."
    ],
    nutrients: {
      calories: 150,
      protein: 4,
      fat: 14,
      netCarbs: 1.0,
      fiber: 1.2,
      vitamins: "Superb Vitamin E, Calcium, and Zinc."
    },
    gastricSafeNote: "Pre-ground almond butter presents zero chewing issues, bypasses structural stomach mechanical breakdown, and is highly therapeutic to gastric tissues."
  },
  {
    id: "s12",
    name: "Chicken Clear Soup",
    category: "snacks",
    servings: 1,
    prepTime: 5,
    cookTime: 20,
    ingredients: [
      { name: "Clean chicken bones (backbone/neck)", amount: "150g" },
      { name: "Cold-pressed fresh lemon", amount: "0.5 tsp" },
      { name: "Black pepper & Sea salt & water", amount: "To taste" }
    ],
    equipment: ["Soup pot", "Strainer"],
    prepSteps: [
      "Rinse chicken bones well."
    ],
    cookSteps: [
      "Boil chicken bones in 400ml of water with a pinch of salt under medium-low simmer for 20 minutes.",
      "Strain the hot soup through a fine-mesh cloth/strainer to obtain a absolute clear liquid.",
      "Add a light drop of lemon juice (instantly of raw tamarind) and pepper. Drink as a comforting hydration fluid."
    ],
    nutrients: {
      calories: 60,
      protein: 6,
      fat: 3.5,
      netCarbs: 0.1,
      fiber: 0,
      vitamins: "Amino acids Glycine, Proline, Glutamine, Calcium, and Magnesium."
    },
    gastricSafeNote: "Extremely easy soup that floods the gut with direct amino-acid building blocks, assisting rapid gastric-epithelium cell repair."
  },
  {
    id: "s13",
    name: "Buttermilk (Diluted)",
    category: "snacks",
    servings: 1,
    prepTime: 3,
    cookTime: 0,
    ingredients: [
      { name: "Fresh full-fat whole milk cultured curd", amount: "2 tbsp (30g)" },
      { name: "Mineral water", amount: "1 Liter" },
      { name: "Roasted cumin powder (Jeera)", amount: "1 tsp" }
    ],
    equipment: ["Whisk / clean glass pitcher"],
    prepSteps: [
      "Ensure curd is fresh and not overly sour (which can cause acid reflux)."
    ],
    cookSteps: [
      "Add 2 tbsp of curd to a pitcher.",
      "Pour 1 liter of fresh water over the curd.",
      "Whisk vigorously for 2 minutes to completely split the fat and break the curd. (Do not use raw black salt; roasted cumin powder is perfect).",
      "Sip the diluted water slowly throughout the day between your meals."
    ],
    nutrients: {
      calories: 30,
      protein: 1.0,
      fat: 1.2,
      netCarbs: 1.5,
      fiber: 0,
      vitamins: "Probiotics, B-complex, Calcium, and hydrating electrolytes."
    },
    gastricSafeNote: "Extremely diluted buttermilk provides vital probiotics and minerals while optimizing gastric hydration. Spreading it across 1L ensures no volume overload."
  },
  {
    id: "s14",
    name: "Avocado Mash",
    category: "snacks",
    servings: 1,
    prepTime: 3,
    cookTime: 0,
    ingredients: [
      { name: "Fully soft-ripened Avocado", amount: "0.5 medium" },
      { name: "Lemon juice", amount: "1 tsp" },
      { name: "Sea salt & fine black pepper", amount: "To taste" }
    ],
    equipment: ["Spoon", "Mashing bowl"],
    prepSteps: [
      "Scoop out the half avocado flesh."
    ],
    cookSteps: [
      "Mash with a spoon in a bowl until completely smooth with no solid lumps.",
      "Mix in 1 tsp lemon juice and a touch of sea salt. Consume slowly as a velvet pudding."
    ],
    nutrients: {
      calories: 120,
      protein: 1.5,
      fat: 11,
      netCarbs: 1.2,
      fiber: 4.8,
      vitamins: "Extremely high in healing Potassium, Lutein, and Vitamin E."
    },
    gastricSafeNote: "Mashed avocado offers non-acidic, highly cushioning structural lipids that physically comfort inflamed stomach mucosal walls."
  },
  {
    id: "s15",
    name: "Flaxseed Powder Mix",
    category: "snacks",
    servings: 1,
    prepTime: 2,
    cookTime: 0,
    ingredients: [
      { name: "Organic gold flaxseed powder", amount: "2 tbsp (15g)" },
      { name: "Thin diluted homemade buttermilk", amount: "100ml" }
    ],
    equipment: ["Small glass", "Spoon"],
    prepSteps: [
      "Ensure flaxseed powder is freshly ground (stale powder can be rancid and trigger gastric pain)."
    ],
    cookSteps: [
      "Stir 2 tbsp of gold flaxseed powder into 100ml of thin buttermilk.",
      "Stir thoroughly and drink warm before it thickens into a dense gelatinous bulk. Chew slightly."
    ],
    nutrients: {
      calories: 90,
      protein: 3,
      fat: 6.5,
      netCarbs: 0.5,
      fiber: 4.5,
      vitamins: "High in Lignans, Soluble mucilage fiber, and Omega-3 (ALA)."
    },
    gastricSafeNote: "Flaxseed mucilage behaves as a literal physical shield, coating the gastric tract, protecting open lesions from biological digestive acid attacks."
  },

  // SECTION 4: DINNER (1-15)
  {
    id: "d1",
    name: "Chicken Clear Stew",
    category: "dinner",
    servings: 1,
    prepTime: 10,
    cookTime: 30,
    ingredients: [
      { name: "Chicken bones with soft muscle meat", amount: "200g" },
      { name: "Tender peeled bottle gourd cubed", amount: "100g" },
      { name: "Fresh ginger slices", amount: "1 tsp" },
      { name: "Cloves & cardamom shells", amount: "2 each" },
      { name: "Pure Ghee", amount: "10g" },
      { name: "Sea salt", amount: "To taste" }
    ],
    equipment: ["Soup stockpot", "Spatula"],
    prepSteps: [
      "Finely cube the soft bottle gourd, removing any seeds.",
      "Wash chicken pieces thoroughly."
    ],
    cookSteps: [
      "Heat 10g of ghee in a stockpot. Throw in cloves, cardamom, and ginger slices. Sauté for 45 seconds.",
      "Add chicken bones/meat. Sauté for 4 minutes until exterior colors turn light white.",
      "Add diced bottle gourd, sea salt, and 450ml of clean boiling water.",
      "Reduce heat to low, cover the pot tightly, and let it simmer for 25 minutes.",
      "The chicken meat must cook until it falls off the bone. Discard any hard whole spices before serving. Sip soup and eat soft meat."
    ],
    nutrients: {
      calories: 290,
      protein: 34,
      fat: 16,
      netCarbs: 2.2,
      fiber: 1.0,
      vitamins: "Magnesium, Potassium, Zinc, and Vitamin B-complex."
    },
    gastricSafeNote: "This soup provides zero heavy carbs, beautiful whole-spice digestive stimulants, and highly soft chicken meat which is gentle on sleep-time digestion."
  },
  {
    id: "d2",
    name: "Egg White Scramble",
    category: "dinner",
    servings: 1,
    prepTime: 3,
    cookTime: 5,
    ingredients: [
      { name: "Clean chicken eggs", amount: "4 (whites only)" },
      { name: "Finely minced fresh cilantro", amount: "1 tbsp" },
      { name: "Fresh deseeding green chili (minced)", amount: "0.5" },
      { name: "Virgin coconut oil", amount: "10ml" },
      { name: "Sea salt", amount: "To taste" }
    ],
    equipment: ["Small bowl", "Non-stick frying pan", "Spatula"],
    prepSteps: [
      "Crack 4 eggs, carefully separating the whites into a bowl. Discard or store yolks.",
      "Finely mince green chili (strictly deseeded) and cilantro leaves."
    ],
    cookSteps: [
      "Whisk egg whites with sea salt until highly frothy for 30 seconds.",
      "Heat 10ml of coconut oil in a pan on very low flame.",
      "Add egg whites and gently scramble on low heat for exactly 3 minutes.",
      "The whites should look like fluffy clouds; do not brown. Toss in minced coriander and remove from flame. Consume immediately."
    ],
    nutrients: {
      calories: 150,
      protein: 14,
      fat: 10,
      netCarbs: 0.5,
      fiber: 0.1,
      vitamins: "High in pure albumin, Selenium, Potassium, and Sodium."
    },
    gastricSafeNote: "Egg white and coconut oil are highly digestible and alkaline. A simple choice to relieve late-night hunger without generating any fatty acid reflux."
  },
  {
    id: "d3",
    name: "Cauliflower Steamed Steaks",
    category: "dinner",
    servings: 1,
    prepTime: 10,
    cookTime: 15,
    ingredients: [
      { name: "Thick round center slab of Cauliflower", amount: "200g" },
      { name: "Grass-fed butter", amount: "20g" },
      { name: "Fine ground black pepper", amount: "0.5 tsp" },
      { name: "Sea salt", amount: "To taste" }
    ],
    equipment: ["Steaming pot", "Griddle pan", "Spatula"],
    prepSteps: [
      "Wash a compact head of cauliflower. Slice carefully through the center to get a 1-inch thick solid 'steak'.",
      "Steam the cauliflower steak for 8 minutes until a knife slides through easily."
    ],
    cookSteps: [
      "Melt 20g of butter on a medium-low flat griddle pan.",
      "Carefully lift the steamed cauliflower steak and lay it flat in the butter.",
      "Sauté for 3 minutes on each side, basting with the melted butter, until golden brown.",
      "Top with sea salt and fine pepper. Enjoy soft and buttery."
    ],
    nutrients: {
      calories: 210,
      protein: 4,
      fat: 20,
      netCarbs: 4.2,
      fiber: 3.5,
      vitamins: "Incredibly high in Vitamin C, K, Iron, and Calcium."
    },
    gastricSafeNote: "Steaming the cauliflower first breaks down the tough plant cell walls, allowing the butter to saturate the steak completely for soothing gastric transit."
  },
  {
    id: "d4",
    name: "Mushroom Clear Broth",
    category: "dinner",
    servings: 1,
    prepTime: 5,
    cookTime: 15,
    ingredients: [
      { name: "Tender button mushrooms, sliced", amount: "150g" },
      { name: "Finely sliced fresh ginger root", amount: "1 tsp" },
      { name: "Finely minced coriander stems", amount: "1 tbsp" },
      { name: "Ghee", amount: "10g" },
      { name: "Sea salt", amount: "To taste" }
    ],
    equipment: ["Soup pot", "Spoon"],
    prepSteps: [
      "Wipe clean and thinly slice button mushrooms.",
      "Mince tender fresh coriander stems."
    ],
    cookSteps: [
      "Heat 10g of ghee in a soup pot on low. Sauté ginger slices and coriander stems for 1 minute.",
      "Add mushrooms and sauté for 4 minutes until they shrink and drop their water.",
      "Pour in 350ml of clean hot water, add sea salt.",
      "Bring soup to a boil, then cover and simmer on low flame for exactly 10 minutes until mushrooms are highly tender. Sip warm."
    ],
    nutrients: {
      calories: 120,
      protein: 4,
      fat: 10,
      netCarbs: 2.8,
      fiber: 1.8,
      vitamins: "B-complex, Potassium, Zinc, and Antioxidant Ergothioneines."
    },
    gastricSafeNote: "A highly light, mineral-rich soup. Soft button mushrooms and ginger stimulate gut flow, providing gastric clearing before bedtime."
  },
  {
    id: "d5",
    name: "Stir-fried Ladyfinger (Ondhi/Bhindi)",
    category: "dinner",
    servings: 1,
    prepTime: 8,
    cookTime: 12,
    ingredients: [
      { name: "Fresh tender Ladyfinger (Bhindi)", amount: "200g" },
      { name: "Virgin coconut oil", amount: "15ml" },
      { name: "Turmeric powder", amount: "0.25 tsp" },
      { name: "Sea salt", amount: "To taste" }
    ],
    equipment: ["Broad non-stick skillet", "Spatula"],
    prepSteps: [
      "Wash Ladyfinger and dry completely with a clean towel (wet bhindi turns highly sticky).",
      "Slice horizontally into 1/2-inch round discs."
    ],
    cookSteps: [
      "Heat 15ml of coconut oil in a broad frying skillet on medium-low.",
      "Add the sliced Ladyfinger disc and turmeric. Sauté on medium-low for 8 minutes.",
      "Stir occasionally. Sauté until the sticky mucilage strings completely disappear and the discs turn tender and slightly sweet.",
      "Toss with sea salt and serve warm."
    ],
    nutrients: {
      calories: 180,
      protein: 3.5,
      fat: 15,
      netCarbs: 4.8,
      fiber: 4.0,
      vitamins: "Loaded with Vitamin C, Vitamin K, Folate, and Calcium."
    },
    gastricSafeNote: "The mucilage in Ladyfinger acts as a natural soothing coating agent that physically repairs inflamed gut tracks. Do not spicy-fry."
  },
  {
    id: "d6",
    name: "Mutton Pepper Fry",
    category: "dinner",
    servings: 1,
    prepTime: 10,
    cookTime: 35,
    ingredients: [
      { name: "Tender boneless mutton pieces", amount: "200g" },
      { name: "Pure Ghee", amount: "20g" },
      { name: "Freshly crushed black pepper", amount: "1.5 tsp" },
      { name: "Sea salt & ginger paste", amount: "To taste" }
    ],
    equipment: ["Pressure cooker", "Frying pan"],
    prepSteps: [
      "Cut mutton into small 1/2-inch chunks.",
      "Coarsely crush fresh peppercorns in mortar."
    ],
    cookSteps: [
      "In a pressure cooker, cook mutton with a cup of water, salt, and 1 tsp ginger paste for 6 whistles until easily mashable.",
      "Drain any excess stock (use as warm drink later) to leave dry mutton pieces.",
      "Heat 20g of ghee in a frying pan on low flame.",
      "Sauté the tender mutton chunks in the ghee for exactly 5 minutes.",
      "Toss with 1.5 tsp of freshly crushed black pepper and a pinch of salt. Serve warm."
    ],
    nutrients: {
      calories: 390,
      protein: 34,
      fat: 28,
      netCarbs: 1.5,
      fiber: 0.6,
      vitamins: "Iron, Zinc, Vitamin B12, and Selenium."
    },
    gastricSafeNote: "Peppers contain piperine, which naturally increases pancreatic enzyme secretions. Slow-cooked soft mutton reduces stomach mechanical workload."
  },
  {
    id: "d7",
    name: "Zucchini Noodles",
    category: "dinner",
    servings: 1,
    prepTime: 5,
    cookTime: 5,
    ingredients: [
      { name: "Fresh green zucchini", amount: "200g" },
      { name: "Fresh grass-fed butter", amount: "15g" },
      { name: "Minced fresh garlic cloves", amount: "0.5 tsp" },
      { name: "Sea salt & fine black pepper", amount: "To taste" }
    ],
    equipment: ["Spiralizer / mandoline vegetable peeler", "Skillet"],
    prepSteps: [
      "Wash zucchini, pass through a spiralizer to create thin spaghetti-like coils.",
      "Mince the garlic extremely fine."
    ],
    cookSteps: [
      "Melt 15g of butter in a skillet on medium-low.",
      "Sauté the minced garlic for exactly 45 seconds until pale golden.",
      "Toss in the zucchini noodles and sea salt.",
      "Stir gently for 3-4 minutes on medium-low. Do not overcook: the zucchini must steam in its natural water and turn tender, not watery mush.",
      "Top with ground pepper and enjoy immediately."
    ],
    nutrients: {
      calories: 160,
      protein: 2.5,
      fat: 15,
      netCarbs: 3.8,
      fiber: 2.0,
      vitamins: "Vitamin A, Potassium, Vitamin C, and Folate."
    },
    gastricSafeNote: "A highly light, low-acid dinner. Butter lubricates the stomach walls, and gentle zucchini noodles are rapidly cleared within 45 minutes."
  },
  {
    id: "d8",
    name: "Fish Lemon Soup",
    category: "dinner",
    servings: 1,
    prepTime: 10,
    cookTime: 12,
    ingredients: [
      { name: "Fresh soft boneless fish cubes", amount: "180g" },
      { name: "Fresh key lemon juice", amount: "1 tbsp" },
      { name: "Finely chopped ginger root", amount: "1 tsp" },
      { name: "Virgin coconut oil", amount: "10ml" },
      { name: "Cilantro leaves", amount: "To taste" }
    ],
    equipment: ["Broad soup pan"],
    prepSteps: [
      "Cut fish into small 1-inch boneless cubes.",
      "Peel ginger root and chop fine."
    ],
    cookSteps: [
      "Bring 350ml of clean water to a quiet boil in a pan with chopped ginger and 10ml of coconut oil.",
      "Carefully slide the fresh fish cubes and a pinch of salt into the boiling water.",
      "Reduce heat instantly to low. Cover and simmer for 8 minutes.",
      "Check that fish chunks are tender. Turn off heat, squeeze 1 tbsp lemon juice, and garnish with fresh cilantro leaves. Sip warm."
    ],
    nutrients: {
      calories: 240,
      protein: 34,
      fat: 11,
      netCarbs: 1.0,
      fiber: 0.1,
      vitamins: "Iodine, Vitamin D, Selenium, and Vitamin C."
    },
    gastricSafeNote: "The acidic tamarind is zero. Lemon juice provides a clean alkaline shift inside the body, and the ginger-fish soup calms sleeping stomach acid secretions."
  },
  {
    id: "d9",
    name: "Soft Paneer Saute",
    category: "dinner",
    servings: 1,
    prepTime: 5,
    cookTime: 8,
    ingredients: [
      { name: "Fresh cushiony raw paneer", amount: "150g" },
      { name: "Soft ripe tomato (pureed)", amount: "50g" },
      { name: "Fresh curry leaves", amount: "5-6 pieces" },
      { name: "Pure Ghee", amount: "15g" },
      { name: "Sea salt & ground cumin", amount: "To taste" }
    ],
    equipment: ["Frying skillet", "Spatula"],
    prepSteps: [
      "Cut soft cottage cheese paneer into small square slices.",
      "Blend tomato into a thin, lump-free liquid puree."
    ],
    cookSteps: [
      "Heat 15g of ghee in a skillet on low. Sauté curry leaves for 30 seconds.",
      "Add the tomato puree and salt. Sauté for 3 minutes until the water is cooked out and the paste turns sweet.",
      "Slide in the paneer slices.",
      "Sauté gently on low for exactly 4 minutes to warm the paneer. Do not let paneer turn hard or crispy. Finish with a pinch of cumin and serve."
    ],
    nutrients: {
      calories: 510,
      protein: 26,
      fat: 45,
      netCarbs: 3.5,
      fiber: 0.6,
      vitamins: "High in digestible Calcium, Vitamin D, and Riboflavin."
    },
    gastricSafeNote: "Do not fry paneer beforehand. Heating it gently in warm, buttery sweet tomato paste makes it extremely tender, highly supportive of gastric repair."
  },
  {
    id: "d10",
    name: "Broccoli Butter Saute",
    category: "dinner",
    servings: 1,
    prepTime: 5,
    cookTime: 8,
    ingredients: [
      { name: "Tender fresh broccoli florets", amount: "150g" },
      { name: "Grass-fed butter", amount: "20g" },
      { name: "Fresh ground black pepper", amount: "0.5 tsp" },
      { name: "Sea salt", amount: "To taste" }
    ],
    equipment: ["Steam basket", "Sauté pan"],
    prepSteps: [
      "Trim broccoli into very small, bite-sized soft florets, discarding any hard woody stalks.",
      "Steam broccoli florets in a steamer pot for exactly 5 minutes until soft and bright green."
    ],
    cookSteps: [
      "Melt 20g of butter in a pan over low flame.",
      "Toss the soft-steamed broccoli florets into the pan.",
      "Sauté on low heat for exactly 2-3 minutes, coating all florets completely in rich butter.",
      "Toss with salt and pepper, and enjoy immediately."
    ],
    nutrients: {
      calories: 195,
      protein: 4,
      fat: 19,
      netCarbs: 3.5,
      fiber: 3.8,
      vitamins: "Brimming with Vitamin C, Folate, Vitamin K, and Potassium."
    },
    gastricSafeNote: "Always steam broccoli florets thoroughly and discard the stalks. Uncooked stalks contain lignins which are impossible to breakdown in postoperative stomachs."
  },
  {
    id: "d11",
    name: "Gourd Medley",
    category: "dinner",
    servings: 1,
    prepTime: 10,
    cookTime: 15,
    ingredients: [
      { name: "Peeled bottle gourd (Sorakaya)", amount: "100g" },
      { name: "Peeled ridge gourd (Beerakaya)", amount: "100g" },
      { name: "Snake gourd (Potlakaya)", amount: "50g" },
      { name: "Pure Ghee", amount: "15g" },
      { name: "Sea salt & cumin seeds", amount: "To taste" }
    ],
    equipment: ["Stock pan with tight cover"],
    prepSteps: [
      "Clean, peel, and cube both the bottle gourd and ridge gourd.",
      "De-seed and slice snake gourd into ultra thin circles."
    ],
    cookSteps: [
      "Heat 15g of ghee in a pan on medium-low. Add 0.5 tsp cumin seeds and crackle.",
      "Add bottle gourd, ridge gourd, and snake gourd slices, along with a pinch of salt.",
      "Stir well. Pour in 2 tbsp water, and seal pan with a cover.",
      "Cook on very low flame for 12 minutes. The gourds will cook down together into a incredibly soft, luscious water-rich medley. Fluff and serve warm."
    ],
    nutrients: {
      calories: 160,
      protein: 2.0,
      fat: 15,
      netCarbs: 4.2,
      fiber: 2.8,
      vitamins: "Rich in mineral Potassium, Magnesium, Vitamin C, and B9."
    },
    gastricSafeNote: "This medley of water-gourds is a master asset for soothing active stomach heat or reflux. Perfect comfort dinner."
  },
  {
    id: "d12",
    name: "Egg Drop Soup",
    category: "dinner",
    servings: 1,
    prepTime: 5,
    cookTime: 10,
    ingredients: [
      { name: "Fresh chicken eggs", amount: "2 large" },
      { name: "Shredded sweet cabbage cooked stock", amount: "300ml" },
      { name: "Pure Ghee", amount: "10g" },
      { name: "Sea salt & ground black pepper", amount: "To taste" }
    ],
    equipment: ["Soup pot", "Whisk"],
    prepSteps: [
      "Bring 300ml of cabbage vegetable stock (or salted water) to a quiet simmer.",
      "Whisk 2 eggs vigorously in a cup with a pinch of salt."
    ],
    cookSteps: [
      "Add 10g of ghee and sea salt to the boiling vegetable stock.",
      "Using a whisk or ladle, stir the boiling stock in one circular direction continuously to create a gentle whirlpool.",
      "Slowly drizzle the whisked eggs in a solid hair-thin stream into the vortex.",
      "Let the soup rest undisturbed for 30 seconds for the feathers to bloom.",
      "Gently stir in fine pepper. Serve piping warm."
    ],
    nutrients: {
      calories: 210,
      protein: 12,
      fat: 17,
      netCarbs: 0.8,
      fiber: 0.1,
      vitamins: "Provides high-grade B-vitamins, Vitamin A, Minerals, and Choline."
    },
    gastricSafeNote: "The feathered eggs are incredibly thin and light. This soup empty from the stomach in under 30 minutes, preventing any acid backlog during sleep."
  },
  {
    id: "d13",
    name: "Chicken Salad (Warm)",
    category: "dinner",
    servings: 1,
    prepTime: 10,
    cookTime: 12,
    ingredients: [
      { name: "Steamed chicken breast", amount: "150g" },
      { name: "Soft blanched shredded cabbage", amount: "80g" },
      { name: "Extra virgin olive oil", amount: "10ml" },
      { name: "Fresh lemon juice", amount: "1 tsp" },
      { name: "Sea salt & fine black pepper", amount: "To taste" }
    ],
    equipment: ["Mixing bowl", "Blender/Shredder"],
    prepSteps: [
      "Shred the warm cooked chicken breast into paper-thin strings.",
      "Blanch shredded cabbage in hot water for 3 minutes until completely limp."
    ],
    cookSteps: [
      "In a clean mixing bowl, toss the shredded warm chicken breast and warm blanched cabbage together.",
      "Drizzle 10ml of olive oil and 1 tsp of fresh lemon juice over the mixture.",
      "Add sea salt and ground black pepper. Toss cleanly with a fork and consume immediately while warm."
    ],
    nutrients: {
      calories: 320,
      protein: 34,
      fat: 18,
      netCarbs: 2.1,
      fiber: 1.5,
      vitamins: "High in Niacin, Vitamin K, Vitamin C, and Selenium."
    },
    gastricSafeNote: "Do not use cold, raw salad leaves. The warm blanched cabbage and olive oil provide high hydration and comfort, ensuring easy digestion."
  },
  {
    id: "d14",
    name: "Mashed Egg & Avocado",
    category: "dinner",
    servings: 1,
    prepTime: 5,
    cookTime: 0,
    ingredients: [
      { name: "Fully hard-boiled egg", amount: "1" },
      { name: "Fully soft-ripened Avocado", amount: "0.5 medium" },
      { name: "Sea salt & black pepper", amount: "To taste" }
    ],
    equipment: ["Mashing bowl", "Fork"],
    prepSteps: [
      "Hard boil 1 egg for 9 minutes, peel and warm-mush.",
      "Scoop out half of the soft avocado."
    ],
    cookSteps: [
      "In a bowl, combine the warm mashed egg and half avocado.",
      "Mash them together with a fork until the mixture achieves a smooth, velvety consistency.",
      "Add sea salt and a pinch of black pepper. Eat with a small spoon."
    ],
    nutrients: {
      calories: 200,
      protein: 7.5,
      fat: 18,
      netCarbs: 1.5,
      fiber: 4.8,
      vitamins: "Potassium, Vitamin E, Folate, Riboflavin, and Choline."
    },
    gastricSafeNote: "The combination of egg yolk lecithin and avocado lipids acts as an outstanding natural protective coating for active gastric inflammation."
  },
  {
    id: "d15",
    name: "Pureed Spinach Soup",
    category: "dinner",
    servings: 1,
    prepTime: 10,
    cookTime: 10,
    ingredients: [
      { name: "Fresh organic spinach leaves", amount: "2 bunches (200g)" },
      { name: "Fresh garlic cloves (crushed)", amount: "1" },
      { name: "Pure Ghee", amount: "15g" },
      { name: "Sea salt & cumin power", amount: "To taste" }
    ],
    equipment: ["Boiling pan", "Blender/immersion blender", "Sauté pan"],
    prepSteps: [
      "Wash spinach leaves three times to ensure full clean state.",
      "Blanch spinach leaves in boiling water for exactly 2 minutes, then blend into a completely smooth puree."
    ],
    cookSteps: [
      "Heat 15g of ghee in a sauté pan on low. Sauté the crushed garlic clove for 1 minute just to release flavor into the oil.",
      "Discard the solid garlic clove to avoid swallowing pieces.",
      "Pour the smooth spinach puree into the ghee.",
      "Simmer for exactly 5 minutes on low-flame, stirring continuously. Season with sea salt and a touch of cumin. Serve as a smooth, warm soup."
    ],
    nutrients: {
      calories: 170,
      protein: 5.5,
      fat: 15,
      netCarbs: 2.5,
      fiber: 2.2,
      vitamins: "Exceedingly high in Vitamin K, Vitamin A, Folate, Manganese, and Calcium."
    },
    gastricSafeNote: "Removing the raw garlic clove and blending the tender spinach creates a premium, high-alkaline digestive-soothing liquid for peaceful sleep."
  }
];
