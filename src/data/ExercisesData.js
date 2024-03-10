export class exerciseCategory {
    constructor(id, title, titleColor, buttonColor, iconContainer, iconColor) {
      this.id = id;
      this.title = title;
      this.titleColor = titleColor;
      this.buttonColor = buttonColor;
      this.iconContainer = iconContainer;
      this.iconColor = iconColor;
    }
}
export const EXERCISESCATEGORIES = [
  new exerciseCategory('c1', 'Chest',       '#FFFFFF', '#272D34', '#303740', '#FFFFFF'),
  new exerciseCategory('c2', 'Back',        '#272D34', '#E1F0F4', '#D2E9EF', '#272D34'),
  new exerciseCategory('c3', 'Shoulders',   '#272D34', '#fef1e0', '#fde9c8', '#272D34'),
  new exerciseCategory('c4', 'Arms',        '#FFFFFF', '#272D34', '#303740', '#FFFFFF'),
  new exerciseCategory('c5', 'Legs',        '#272D34', '#E1F0F4', '#D2E9EF', '#272D34'),
  new exerciseCategory('c6', 'Abs',         '#272D34', '#fef1e0', '#fde9c8', '#272D34'),
  new exerciseCategory('c7', 'Cardio',      '#FFFFFF', '#272D34', '#303740', '#FFFFFF'),
  new exerciseCategory('c8', 'Body Weight', '#272D34', '#E1F0F4', '#D2E9EF', '#272D34')
];






export class MealCategory {
    constructor(id, title, titleColor, buttonColor, iconContainer, iconColor) {
      this.id = id;
      this.title = title;
      this.titleColor = titleColor;
      this.buttonColor = buttonColor;
      this.iconContainer = iconContainer;
      this.iconColor = iconColor;
    }
  }
  export const MEALCATEGORIES = [                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
    new MealCategory('mc1', 'Balanced',  '#FFFFFF', '#272D34', '#303740', '#FFFFFF'),
    new MealCategory('mc2', 'Low Carb ', '#272D34', '#E1F0F4', '#D2E9EF', '#272D34'),
    new MealCategory('mc3', 'Vegan',     '#272D34', '#fef1e0', '#fde9c8', '#272D34'),
    new MealCategory('mc4', 'Bulking',   '#FFFFFF', '#272D34', '#303740', '#FFFFFF'),
  ];







export class exercise {
    constructor(id, categoryIds, imageUrl, name, setsAndReps, equipment, ) {
      this.id = id;
      this.categoryIds = categoryIds;
      this.imageUrl = imageUrl;
      this.name = name;
      this.setsAndReps = setsAndReps;
      this.equipment = equipment;
    }
}


  
export const EXERCISES = [
//chest
    new exercise('e1', ['c1'], 'imageUrl1', 'Bench Press', '4 sets of 10 reps', 'Barbell'),
    new exercise('e2', ['c1'], 'imageUrl1', 'Incline Dumbbell Press', '3 sets of 12 reps', 'Dumbbells'),
    new exercise('e3', ['c1'], 'imageUrl1', 'Chest Flyes', '3 sets of 15 reps', 'Cable Machine'),
    new exercise('e4', ['c1'], 'imageUrl1', 'Push-ups', '3 sets of 15 reps', 'Body Weight'),
    new exercise('e5', ['c1'], 'imageUrl1', 'Machine Chest Press', '4 sets of 12 reps', 'Machine'),
    new exercise('e6', ['c1'], 'imageUrl1', 'Decline Barbell Press', '3 sets of 10 reps', 'Barbell'),
    new exercise('e7', ['c1'], 'imageUrl1', 'Dumbbell Pullover', '3 sets of 12 reps', 'Dumbbells'),
    new exercise('e8', ['c1'], 'imageUrl1', 'Dips', '3 sets of 12 reps', 'Parallel Bars'),
    new exercise('e9', ['c1'], 'imageUrl1', 'Machine Pec Deck', '4 sets of 15 reps', 'Machine'),
    new exercise('e10', ['c1'], 'imageUrl1', 'Chest Press Machine', '3 sets of 12 reps', 'Machine'),
    new exercise('e11', ['c1'], 'imageUrl1', 'Cable Crossover', '3 sets of 15 reps', 'Cable Machine'),
    new exercise('e12', ['c1'], 'imageUrl1', 'Bodyweight Dips', '3 sets of 10 reps', 'Body Weight'),

//back
    new exercise('e13', ['c2'], 'imageUrl1', 'Deadlift', '4 sets of 8 reps', 'Barbell'),
    new exercise('e14', ['c2'], 'imageUrl1', 'Lat Pulldown', '3 sets of 12 reps', 'Machine'),
    new exercise('e15', ['c2'], 'imageUrl1', 'Bent Over Rows', '4 sets of 10 reps', 'Barbell'),
    new exercise('e16', ['c2'], 'imageUrl1', 'T-Bar Rows', '3 sets of 12 reps', 'T-Bar Row Machine'),
    new exercise('e17', ['c2'], 'imageUrl1', 'Single Arm Dumbbell Row', '3 sets of 15 reps', 'Dumbbell'),
    new exercise('e18', ['c2'], 'imageUrl1', 'Pull-ups', '3 sets of 10 reps', 'Pull-up Bar'),
    new exercise('e19', ['c2'], 'imageUrl1', 'Seated Cable Row', '4 sets of 12 reps', 'Cable Machine'),
    new exercise('e20', ['c2'], 'imageUrl1', 'Face Pulls', '3 sets of 15 reps', 'Cable Machine'),
    new exercise('e21', ['c2'], 'imageUrl1', 'Hyperextensions', '3 sets of 12 reps', 'Roman Chair'),
    new exercise('e22', ['c2'], 'imageUrl1', 'Machine Back Extension', '3 sets of 15 reps', 'Machine'),
    new exercise('e23', ['c2'], 'imageUrl1', 'Chin-ups', '3 sets of 10 reps', 'Pull-up Bar'),
    new exercise('e24', ['c2'], 'imageUrl1', 'Barbell Shrugs', '4 sets of 12 reps', 'Barbell'),
  
//shoulders
    new exercise('e25', ['c3'], 'imageUrl1', 'Overhead Press', '4 sets of 10 reps', 'Barbell'),
    new exercise('e26', ['c3'], 'imageUrl1', 'Lateral Raises', '3 sets of 15 reps', 'Dumbbells'),
    new exercise('e27', ['c3'], 'imageUrl1', 'Front Raises', '3 sets of 12 reps', 'Dumbbells'),
    new exercise('e28', ['c3'], 'imageUrl1', 'Machine Shoulder Press', '4 sets of 12 reps', 'Machine'),
    new exercise('e29', ['c3'], 'imageUrl1', 'Face Pulls', '3 sets of 15 reps', 'Cable Machine'),
    new exercise('e30', ['c3'], 'imageUrl1', 'Reverse Flyes', '3 sets of 15 reps', 'Dumbbells'),
    new exercise('e31', ['c3'], 'imageUrl1', 'Shrugs', '4 sets of 12 reps', 'Barbell'),
    new exercise('e32', ['c3'], 'imageUrl1', 'Upright Rows', '3 sets of 12 reps', 'Barbell'),
    new exercise('e33', ['c3'], 'imageUrl1', 'Arnold Press', '3 sets of 12 reps', 'Dumbbells'),
    new exercise('e34', ['c3'], 'imageUrl1', 'Lateral Cable Raises', '3 sets of 15 reps', 'Cable Machine'),
    new exercise('e35', ['c3'], 'imageUrl1', 'Barbell Overhead Shrug', '4 sets of 12 reps', 'Barbell'),
    new exercise('e36', ['c3'], 'imageUrl1', 'Handstand Push-ups', '3 sets of 10 reps', 'Body Weight'),
  
 //arms
    new exercise('e37', ['c4'], 'imageUrl1', 'Bicep Curls', '3 sets of 12 reps', 'Dumbbells'),
    new exercise('e38', ['c4'], 'imageUrl1', 'Tricep Dips', '3 sets of 10 reps', 'Body Weight'),
    new exercise('e39', ['c4'], 'imageUrl1', 'Hammer Curls', '3 sets of 15 reps', 'Dumbbells'),
    new exercise('e40', ['c4'], 'imageUrl1', 'Skull Crushers', '3 sets of 12 reps', 'Barbell'),
    new exercise('e41', ['c4'], 'imageUrl1', 'Preacher Curls', '3 sets of 12 reps', 'EZ Bar'),
    new exercise('e42', ['c4'], 'imageUrl1', 'Tricep Kickbacks', '3 sets of 15 reps', 'Dumbbells'),
    new exercise('e43', ['c4'], 'imageUrl1', 'Barbell Bicep Curls', '4 sets of 12 reps', 'Barbell'),
    new exercise('e44', ['c4'], 'imageUrl1', 'Cable Tricep Pushdowns', '4 sets of 15 reps', 'Cable Machine'),
    new exercise('e45', ['c4'], 'imageUrl1', 'Concentration Curls', '3 sets of 12 reps', 'Dumbbells'),
    new exercise('e46', ['c4'], 'imageUrl1', 'Tricep Overhead Extension', '3 sets of 15 reps', 'Dumbbells'),
    new exercise('e47', ['c4'], 'imageUrl1', 'Zottman Curls', '3 sets of 12 reps', 'Dumbbells'),
    new exercise('e48', ['c4'], 'imageUrl1', 'Diamond Push-ups', '3 sets of 12 reps', 'Body Weight'),
 
//legs
    new exercise('e49', ['c5'], 'imageUrl1', 'Squats', '4 sets of 10 reps', 'Barbell'),
    new exercise('e50', ['c5'], 'imageUrl1', 'Leg Press', '3 sets of 12 reps', 'Machine'),
    new exercise('e51', ['c5'], 'imageUrl1', 'Lunges', '3 sets of 15 reps', 'Dumbbells'),
    new exercise('e52', ['c5'], 'imageUrl1', 'Leg Extensions', '4 sets of 12 reps', 'Machine'),
    new exercise('e53', ['c5'], 'imageUrl1', 'Hamstring Curls', '3 sets of 12 reps', 'Machine'),
    new exercise('e54', ['c5'], 'imageUrl1', 'Calf Raises', '4 sets of 15 reps', 'Smith Machine'),
    new exercise('e55', ['c5'], 'imageUrl1', 'Step-ups', '3 sets of 12 reps', 'Dumbbells'),
    new exercise('e56', ['c5'], 'imageUrl1', 'Box Jumps', '3 sets of 10 reps', 'Box'),
    new exercise('e57', ['c5'], 'imageUrl1', 'Sumo Deadlift', '4 sets of 10 reps', 'Barbell'),
    new exercise('e58', ['c5'], 'imageUrl1', 'Hack Squats', '3 sets of 12 reps', 'Machine'),
    new exercise('e59', ['c5'], 'imageUrl1', 'Romanian Deadlift', '3 sets of 12 reps', 'Barbell'),
    new exercise('e60', ['c5'], 'imageUrl1', 'Pistol Squats', '3 sets of 10 reps', 'Body Weight'),

//abs
    new exercise('e61', ['c6'], 'imageUrl1', 'Crunches', '3 sets of 15 reps', 'Body Weight'),
    new exercise('e62', ['c6'], 'imageUrl1', 'Plank', '3 sets of 1 minute', 'Body Weight'),
    new exercise('e63', ['c6'], 'imageUrl1', 'Russian Twists', '3 sets of 20 reps', 'Medicine Ball'),
    new exercise('e64', ['c6'], 'imageUrl1', 'Hanging Leg Raises', '3 sets of 12 reps', 'Pull-up Bar'),
    new exercise('e65', ['c6'], 'imageUrl1', 'Woodchoppers', '3 sets of 15 reps', 'Cable Machine'),
    new exercise('e66', ['c6'], 'imageUrl1', 'Bicycle Crunches', '3 sets of 20 reps', 'Body Weight'),
    new exercise('e67', ['c6'], 'imageUrl1', 'Reverse Crunches', '3 sets of 15 reps', 'Body Weight'),
    new exercise('e68', ['c6'], 'imageUrl1', 'Oblique Crunches', '3 sets of 15 reps', 'Body Weight'),
    new exercise('e69', ['c6'], 'imageUrl1', 'Plank Twists', '3 sets of 20 reps', 'Body Weight'),
    new exercise('e70', ['c6'], 'imageUrl1', 'Hollow Body Hold', '3 sets of 30 seconds', 'Body Weight'),
    new exercise('e71', ['c6'], 'imageUrl1', 'Dragon Flags', '3 sets of 10 reps', 'Body Weight'),
    new exercise('e72', ['c6'], 'imageUrl1', 'Leg Raises', '3 sets of 15 reps', 'Body Weight'),

//cardio
    new exercise('e73', ['c7'], 'imageUrl1', 'Running', 'Interval Training', 'None'),
    new exercise('e74', ['c7'], 'imageUrl1', 'Cycling', '30 minutes', 'Stationary Bike'),
    new exercise('e75', ['c7'], 'imageUrl1', 'Jump Rope', '3 sets of 5 minutes', 'Jump Rope'),
    new exercise('e76', ['c7'], 'imageUrl1', 'Rowing', '20 minutes', 'Rowing Machine'),
    new exercise('e77', ['c7'], 'imageUrl1', 'Burpees', '3 sets of 15 reps', 'Body Weight'),
    new exercise('e78', ['c7'], 'imageUrl1', 'High Knees', '3 sets of 1 minute', 'None'),
    new exercise('e79', ['c7'], 'imageUrl1', 'Elliptical Training', '25 minutes', 'Elliptical Machine'),
    new exercise('e80', ['c7'], 'imageUrl1', 'Sprinting', '10 sets of 100 meters', 'None'),
    new exercise('e81', ['c7'], 'imageUrl1', 'Stair Climbing', '20 minutes', 'Staircase'),
    new exercise('e82', ['c7'], 'imageUrl1', 'Kickboxing', '3 sets of 5 minutes', 'None'),
    new exercise('e83', ['c7'], 'imageUrl1', 'Swimming', '30 minutes', 'Pool'),
    new exercise('e84', ['c7'], 'imageUrl1', 'Mountain Climbers', '3 sets of 20 reps', 'None'),

//bodyWeight
    new exercise('e85', ['c8'], 'imageUrl1', 'Push-ups', '3 sets of 15 reps', 'Body Weight'),
    new exercise('e86', ['c8'], 'imageUrl1', 'Pull-ups', '3 sets of 10 reps', 'Pull-up Bar'),
    new exercise('e87', ['c8'], 'imageUrl1', 'Dips', '3 sets of 12 reps', 'Parallel Bars'),
    new exercise('e88', ['c8'], 'imageUrl1', 'Bodyweight Squats', '4 sets of 15 reps', 'Body Weight'),
    new exercise('e89', ['c8'], 'imageUrl1', 'Lunges', '3 sets of 12 reps', 'Body Weight'),
    new exercise('e90', ['c8'], 'imageUrl1', 'Burpees', '3 sets of 10 reps', 'Body Weight'),
    new exercise('e91', ['c8'], 'imageUrl1', 'Mountain Climbers', '3 sets of 20 reps', 'None'),
    new exercise('e92', ['c8'], 'imageUrl1', 'Plank', '3 sets of 1 minute', 'Body Weight'),
    new exercise('e93', ['c8'], 'imageUrl1', 'Jumping Jacks', '3 sets of 1 minute', 'None'),
    new exercise('e94', ['c8'], 'imageUrl1', 'Handstand Push-ups', '3 sets of 8 reps', 'Wall'),
    new exercise('e95', ['c8'], 'imageUrl1', 'L-Sit', '3 sets of 15 seconds', 'Parallel Bars'),
    new exercise('e96', ['c8'], 'imageUrl1', 'Pistol Squats', '3 sets of 10 reps', 'Body Weight'),
]










export class meal {
    constructor(id, categoryIds, title, affordability, complexity, imageUrl, duration, ingredients, steps) {
      this.id = id;
      this.categoryIds = categoryIds;
      this.title = title;
      this.affordability = affordability;
      this.complexity = complexity;
      this.imageUrl = imageUrl;
      this.duration = duration;
      this.ingredients = ingredients;
      this.steps = steps;
    }
  }




export const MEALS = [
 
    new meal(
        'm1',
        ['mc1'],
        'Grilled Chicken Salad',
        'Affordable',
        'Simple',
        'imageUrl1',
        30,
        ['Chicken Breast', 'Mixed Greens', 'Cherry Tomatoes', 'Cucumber', 'Olive Oil'],
        [
        '1. Marinate chicken with olive oil, salt, and pepper.',
        '2. Grill chicken until fully cooked.',
        '3. Chop mixed greens, tomatoes, and cucumber.',
        '4. Combine grilled chicken and vegetables.',
        '5. Drizzle with olive oil and serve.'
        ]
    ),
    new meal(
        'm2',
        ['mc1'],
        'Quinoa-Stuffed Bell Peppers',
        'Moderate',
        'Intermediate',
        'imageUrl2',
        45,
        ['Quinoa', 'Bell Peppers', 'Black Beans', 'Corn', 'Tomato Sauce'],
        [
        '1. Cook quinoa according to package instructions.',
        '2. Cut bell peppers in half and remove seeds.',
        '3. Mix quinoa, black beans, corn, and tomato sauce.',
        '4. Stuff bell peppers with the mixture.',
        '5. Bake until peppers are tender.'
        ]
    ),
    new meal(
        'm3',
        ['mc1'],
        'Salmon with Lemon-Dill Sauce',
        'Expensive',
        'Intermediate',
        'imageUrl3',
        35,
        ['Salmon Fillet', 'Lemon', 'Dill', 'Olive Oil', 'Asparagus'],
        [
        '1. Season salmon with salt, pepper, and olive oil.',
        '2. Grill or bake salmon until it flakes easily.',
        '3. Mix fresh lemon juice with chopped dill for sauce.',
        '4. Serve salmon over a bed of asparagus.',
        '5. Drizzle with lemon-dill sauce.'
        ]
    ),
    new meal(
        'm4',
        ['mc1'],
        'Mediterranean Quinoa Bowl',
        'Affordable',
        'Simple',
        'imageUrl4',
        30,
        ['Quinoa', 'Chickpeas', 'Cucumber', 'Tomatoes', 'Feta Cheese'],
        [
        '1. Cook quinoa and chickpeas.',
        '2. Dice cucumber and tomatoes.',
        '3. Mix quinoa, chickpeas, cucumber, tomatoes, and feta.',
        '4. Drizzle with olive oil and toss.',
        '5. Serve as a refreshing Mediterranean bowl.'
        ]
    ),
    new meal(
        'm5',
        ['mc1'],
        'Turkey and Sweet Potato Skillet',
        'Moderate',
        'Simple',
        'imageUrl5',
        40,
        ['Ground Turkey', 'Sweet Potatoes', 'Onions', 'Bell Peppers', 'Spinach'],
        [
        '1. Brown ground turkey in a skillet.',
        '2. Add diced sweet potatoes and cook until tender.',
        '3. Sauté onions, bell peppers, and spinach.',
        '4. Combine all ingredients in the skillet.',
        '5. Season with desired spices and serve.'
        ]
    ),
    new meal(
        'm6',
        ['mc1'],
        'Vegetarian Buddha Bowl',
        'Affordable',
        'Simple',
        'imageUrl6',
        35,
        ['Quinoa', 'Chickpeas', 'Avocado', 'Carrots', 'Tahini Dressing'],
        [
        '1. Cook quinoa and roast chickpeas.',
        '2. Slice avocado and shred carrots.',
        '3. Assemble quinoa, chickpeas, avocado, and carrots in a bowl.',
        '4. Drizzle with tahini dressing.',
        '5. Garnish with sesame seeds.'
        ]
    ),
    new meal(
        'm7',
        ['mc1'],
        'Lemon Garlic Shrimp Stir-Fry',
        'Expensive',
        'Intermediate',
        'imageUrl7',
        25,
        ['Shrimp', 'Broccoli', 'Bell Peppers', 'Snow Peas', 'Soy Sauce'],
        [
        '1. Sauté shrimp in olive oil until pink.',
        '2. Add broccoli, bell peppers, and snow peas.',
        '3. Stir in minced garlic and lemon juice.',
        '4. Season with soy sauce.',
        '5. Serve over rice or noodles.'
        ]
    ),
    new meal(
        'm8',
        ['mc1'],
        'Caprese Avocado Salad',
        'Moderate',
        'Simple',
        'imageUrl8',
        20,
        ['Avocado', 'Tomatoes', 'Mozzarella', 'Basil', 'Balsamic Glaze'],
        [
        '1. Slice avocado, tomatoes, and mozzarella.',
        '2. Arrange on a plate with fresh basil leaves.',
        '3. Drizzle with balsamic glaze.',
        '4. Season with salt and pepper.',
        '5. Enjoy this refreshing Caprese salad.'
        ]
    ),
    new meal(
        'm9',
        ['mc1'],
        'Teriyaki Chicken Bowl',
        'Moderate',
        'Intermediate',
        'imageUrl9',
        30,
        ['Chicken Thighs', 'Teriyaki Sauce', 'Broccoli', 'Carrots', 'White Rice'],
        [
        '1. Grill or bake chicken thighs with teriyaki sauce.',
        '2. Steam broccoli and carrots until tender.',
        '3. Slice chicken and arrange with veggies over rice.',
        '4. Drizzle with extra teriyaki sauce.',
        '5. Garnish with sesame seeds.'
        ]
    ),
    new meal(
        'm10',
        ['mc1'],
        'Mango Chicken Quinoa Bowl',
        'Expensive',
        'Intermediate',
        'imageUrl10',
        40,
        ['Chicken Breast', 'Quinoa', 'Mango', 'Red Bell Pepper', 'Cilantro'],
        [
        '1. Grill chicken until fully cooked.',
        '2. Cook quinoa according to package instructions.',
        '3. Dice mango and red bell pepper.',
        '4. Mix quinoa, mango, bell pepper, and chopped cilantro.',
        '5. Top with sliced grilled chicken.'
        ]
    ),

    new meal(
        'm11',
        ['mc2'],
        'Zucchini Noodles with Pesto',
        'Moderate',
        'Intermediate',
        'imageUrl11',
        25,
        ['Zucchini', 'Basil Pesto', 'Cherry Tomatoes', 'Parmesan Cheese'],
        [
        '1. Spiralize zucchini into noodles.',
        '2. Heat a pan and sauté zucchini until slightly tender.',
        '3. Mix in basil pesto and cherry tomatoes.',
        '4. Grate Parmesan cheese on top.',
        '5. Serve warm.'
        ]
    ),
    new meal(
        'm12',
        ['mc2'],
        'Keto Cauliflower Pizza',
        'Expensive',
        'Intermediate',
        'imageUrl12',
        40,
        ['Cauliflower Rice', 'Mozzarella Cheese', 'Eggs', 'Tomato Sauce', 'Pepperoni'],
        [
        '1. Mix cauliflower rice, mozzarella cheese, and eggs to form a dough.',
        '2. Press the dough into a pizza shape on a baking sheet.',
        '3. Bake until crust is golden brown.',
        '4. Spread tomato sauce, cheese, and pepperoni on top.',
        '5. Bake until cheese is melted and bubbly.'
        ]
    ),
    new meal(
        'm13',
        ['mc2'],
        'Grilled Salmon with Avocado Salsa',
        'Expensive',
        'Simple',
        'imageUrl13',
        30,
        ['Salmon Fillet', 'Avocado', 'Tomato', 'Red Onion', 'Lime'],
        [
        '1. Season salmon with salt, pepper, and olive oil.',
        '2. Grill salmon until it flakes easily.',
        '3. Dice avocado, tomato, and red onion for salsa.',
        '4. Mix salsa ingredients and squeeze lime over.',
        '5. Serve salmon topped with avocado salsa.'
        ]
    ),
    new meal(
        'm14',
        ['mc2'],
        'Eggplant Lasagna',
        'Affordable',
        'Intermediate',
        'imageUrl14',
        45,
        ['Eggplant', 'Ground Beef', 'Ricotta Cheese', 'Mozzarella', 'Tomato Sauce'],
        [
        '1. Slice eggplant into thin rounds.',
        '2. Grill or roast eggplant until tender.',
        '3. Brown ground beef in a skillet.',
        '4. Layer eggplant, beef, ricotta, mozzarella, and tomato sauce.',
        '5. Bake until cheese is melted and bubbly.'
        ]
    ),
    new meal(
        'm15',
        ['mc2'],
        'Cajun Shrimp and Cauliflower Rice',
        'Moderate',
        'Intermediate',
        'imageUrl15',
        35,
        ['Shrimp', 'Cauliflower Rice', 'Bell Peppers', 'Onions', 'Cajun Seasoning'],
        [
        '1. Sauté shrimp in Cajun seasoning until cooked.',
        '2. Cook cauliflower rice in the same pan.',
        '3. Sauté bell peppers and onions until tender.',
        '4. Mix everything together in the pan.',
        '5. Serve hot.'
        ]
    ),
    new meal(
        'm16',
        ['mc2'],
        'Avocado and Bacon Stuffed Mushrooms',
        'Expensive',
        'Simple',
        'imageUrl16',
        30,
        ['Mushrooms', 'Avocado', 'Bacon', 'Cream Cheese', 'Chives'],
        [
        '1. Remove stems from mushrooms and hollow out the caps.',
        '2. Mix cream cheese, avocado, bacon, and chives.',
        '3. Stuff mushroom caps with the mixture.',
        '4. Bake until mushrooms are tender.',
        '5. Garnish with extra bacon and chives.'
        ]
    ),
    new meal(
        'm17',
        ['mc2'],
        'Greek Salad with Chicken Souvlaki',
        'Moderate',
        'Simple',
        'imageUrl17',
        25,
        ['Chicken Breast', 'Cucumber', 'Tomatoes', 'Feta Cheese', 'Kalamata Olives'],
        [
        '1. Marinate chicken in Greek spices and grill until done.',
        '2. Chop cucumber, tomatoes, and olives.',
        '3. Assemble salad with feta cheese.',
        '4. Slice chicken and place on top of the salad.',
        '5. Drizzle with olive oil and serve.'
        ]
    ),
    new meal(
        'm18',
        ['mc2'],
        'Stuffed Bell Peppers with Ground Turkey',
        'Affordable',
        'Intermediate',
        'imageUrl18',
        40,
        ['Bell Peppers', 'Ground Turkey', 'Brown Rice', 'Black Beans', 'Tomato Sauce'],
        [
        '1. Cut bell peppers in half and remove seeds.',
        '2. Brown ground turkey and cook brown rice.',
        '3. Mix turkey, rice, black beans, and tomato sauce.',
        '4. Stuff bell peppers with the mixture.',
        '5. Bake until peppers are tender.'
        ]
    ),
    new meal(
        'm19',
        ['mc2'],
        'Salmon and Asparagus Foil Packets',
        'Expensive',
        'Simple',
        'imageUrl19',
        30,
        ['Salmon Fillet', 'Asparagus', 'Lemon', 'Dill', 'Olive Oil'],
        [
        '1. Place salmon fillet on a sheet of foil.',
        '2. Arrange asparagus around the salmon.',
        '3. Drizzle with olive oil and sprinkle with dill.',
        '4. Squeeze lemon juice over the top.',
        '5. Seal the foil and bake until salmon is cooked.'
        ]
    ),
    new meal(
        'm20',
        ['mc2'],
        'Cauliflower Fried Rice with Shrimp',
        'Moderate',
        'Intermediate',
        'imageUrl20',
        35,
        ['Cauliflower Rice', 'Shrimp', 'Peas', 'Carrots', 'Soy Sauce'],
        [
        '1. Sauté shrimp until cooked.',
        '2. Add cauliflower rice, peas, and carrots to the pan.',
        '3. Stir in soy sauce and cook until vegetables are tender.',
        '4. Mix in cooked shrimp.',
        '5. Serve hot.'
        ]
    ),

    new meal(
        'm21',
        ['mc3'],
        'Chickpea and Spinach Curry',
        'Affordable',
        'Intermediate',
        'imageUrl21',
        40,
        ['Chickpeas', 'Spinach', 'Coconut Milk', 'Tomatoes', 'Curry Spices'],
        [
        '1. Cook chickpeas until tender.',
        '2. Sauté spinach in a pan until wilted.',
        '3. Combine chickpeas, spinach, coconut milk, and diced tomatoes.',
        '4. Add curry spices and simmer for 30 minutes.',
        '5. Serve with rice.'
        ]
    ),
    new meal(
        'm22',
        ['mc3'],
        'Vegetable Stir-Fry with Tofu',
        'Affordable',
        'Simple',
        'imageUrl22',
        30,
        ['Tofu', 'Broccoli', 'Bell Peppers', 'Carrots', 'Soy Sauce'],
        [
        '1. Press tofu to remove excess water and cut into cubes.',
        '2. Sauté tofu until golden brown.',
        '3. Add broccoli, bell peppers, and carrots.',
        '4. Stir in soy sauce and cook until vegetables are tender.',
        '5. Serve over rice or noodles.'
        ]
    ),
    new meal(
        'm23',
        ['mc3'],
        'Quinoa and Black Bean Bowl',
        'Affordable',
        'Simple',
        'imageUrl23',
        35,
        ['Quinoa', 'Black Beans', 'Corn', 'Avocado', 'Lime'],
        [
        '1. Cook quinoa according to package instructions.',
        '2. Mix quinoa with black beans, corn, and diced avocado.',
        '3. Squeeze lime juice over the top.',
        '4. Toss everything together.',
        '5. Enjoy a simple and nutritious bowl.'
        ]
    ),
    new meal(
        'm24',
        ['mc3'],
        'Sweet Potato and Chickpea Curry',
        'Affordable',
        'Intermediate',
        'imageUrl24',
        45,
        ['Sweet Potatoes', 'Chickpeas', 'Coconut Milk', 'Curry Spices', 'Cilantro'],
        [
        '1. Roast sweet potatoes until tender.',
        '2. Cook chickpeas until heated through.',
        '3. Combine sweet potatoes, chickpeas, coconut milk, and curry spices.',
        '4. Simmer for 30 minutes.',
        '5. Garnish with fresh cilantro.'
        ]
    ),
    new meal(
        'm25',
        ['mc3'],
        'Lentil and Vegetable Stew',
        'Affordable',
        'Intermediate',
        'imageUrl25',
        50,
        ['Lentils', 'Carrots', 'Celery', 'Tomatoes', 'Vegetable Broth'],
        [
        '1. Sauté carrots, celery, and tomatoes in a pot.',
        '2. Add lentils and vegetable broth.',
        '3. Simmer until lentils are tender.',
        '4. Season with herbs and spices.',
        '5. Serve as a hearty vegetable stew.'
        ]
    ),
    new meal(
        'm26',
        ['mc3'],
        'Vegan Pad Thai',
        'Moderate',
        'Intermediate',
        'imageUrl26',
        40,
        ['Rice Noodles', 'Tofu', 'Bean Sprouts', 'Peanuts', 'Soy Sauce'],
        [
        '1. Cook rice noodles according to package instructions.',
        '2. Sauté tofu until golden brown.',
        '3. Add cooked noodles, bean sprouts, and peanuts.',
        '4. Stir in soy sauce and cook until heated through.',
        '5. Garnish with lime wedges.'
        ]
    ),
    new meal(
        'm27',
        ['mc3'],
        'Mushroom and Spinach Stuffed Peppers',
        'Affordable',
        'Intermediate',
        'imageUrl27',
        45,
        ['Portobello Mushrooms', 'Spinach', 'Brown Rice', 'Tomato Sauce', 'Vegan Cheese'],
        [
        '1. Sauté mushrooms and spinach until cooked.',
        '2. Mix in cooked brown rice and tomato sauce.',
        '3. Stuff peppers with the mixture.',
        '4. Top with vegan cheese.',
        '5. Bake until peppers are tender.'
        ]
    ),
    new meal(
        'm28',
        ['mc3'],
        'Chickpea and Avocado Wrap',
        'Affordable',
        'Simple',
        'imageUrl28',
        20,
        ['Chickpeas', 'Avocado', 'Tomatoes', 'Lettuce', 'Whole Wheat Wrap'],
        [
        '1. Mash chickpeas and mix with diced avocado.',
        '2. Spread the mixture onto a whole wheat wrap.',
        '3. Add sliced tomatoes and lettuce.',
        '4. Roll up the wrap and cut in half.',
        '5. Enjoy this quick and tasty chickpea and avocado wrap.'
        ]
    ),
    new meal(
        'm29',
        ['mc3'],
        'Vegan Pesto Pasta',
        'Moderate',
        'Simple',
        'imageUrl29',
        30,
        ['Whole Wheat Pasta', 'Cherry Tomatoes', 'Basil Pesto', 'Spinach', 'Nutritional Yeast'],
        [
        '1. Cook whole wheat pasta according to package instructions.',
        '2. Mix in cherry tomatoes, basil pesto, and spinach.',
        '3. Sprinkle with nutritional yeast for added flavor.',
        '4. Toss everything together.',
        '5. Serve warm.'
        ]
    ),
    new meal(
        'm30',
        ['mc3'],
        'Vegan Buddha Bowl',
        'Affordable',
        'Simple',
        'imageUrl30',
        35,
        ['Quinoa', 'Chickpeas', 'Avocado', 'Carrots', 'Tahini Dressing'],
        [
        '1. Cook quinoa and roast chickpeas.',
        '2. Slice avocado and shred carrots.',
        '3. Assemble quinoa, chickpeas, avocado, and carrots in a bowl.',
        '4. Drizzle with tahini dressing.',
        '5. Garnish with sesame seeds.'
        ]
    ),

    new meal(
        'm31',
        ['mc4'],
        'Protein-Packed Smoothie Bowl',
        'Moderate',
        'Simple',
        'imageUrl31',
        15,
        ['Protein Powder', 'Greek Yogurt', 'Mixed Berries', 'Almond Butter', 'Granola'],
        [
        '1. Blend protein powder, Greek yogurt, and mixed berries until smooth.',
        '2. Pour into a bowl.',
        '3. Top with a spoonful of almond butter and granola.',
        '4. Garnish with additional berries.',
        '5. Enjoy as a hearty smoothie bowl.'
        ]
    ),
    new meal(
        'm32',
        ['mc4'],
        'Banana and Peanut Butter Oatmeal',
        'Affordable',
        'Simple',
        'imageUrl32',
        20,
        ['Oats', 'Banana', 'Peanut Butter', 'Almond Milk', 'Chia Seeds'],
        [
        '1. Cook oats with almond milk until creamy.',
        '2. Slice banana and stir into the oatmeal.',
        '3. Drizzle with peanut butter and sprinkle with chia seeds.',
        '4. Mix everything together.',
        '5. Enjoy a delicious and energizing bowl of oatmeal.'
        ]
    ),
    new meal(
        'm33',
        ['mc4'],
        'Chicken and Quinoa Power Bowl',
        'Expensive',
        'Intermediate',
        'imageUrl33',
        40,
        ['Chicken Breast', 'Quinoa', 'Sweet Potatoes', 'Broccoli', 'Cashews'],
        [
        '1. Grill chicken until fully cooked.',
        '2. Cook quinoa according to package instructions.',
        '3. Roast sweet potatoes and broccoli.',
        '4. Assemble quinoa, chicken, sweet potatoes, broccoli, and cashews in a bowl.',
        '5. Drizzle with your favorite dressing.'
        ]
    ),
    new meal(
        'm34',
        ['mc4'],
        'Peanut Butter Banana Protein Pancakes',
        'Moderate',
        'Simple',
        'imageUrl34',
        30,
        ['Protein Powder', 'Oats', 'Banana', 'Peanut Butter', 'Almond Milk'],
        [
        '1. Blend oats, protein powder, banana, and almond milk.',
        '2. Cook pancakes on a griddle or skillet.',
        '3. Stack pancakes and spread each layer with peanut butter.',
        '4. Top with sliced banana.',
        '5. Enjoy a protein-packed pancake stack.'
        ]
    ),
    new meal(
        'm35',
        ['mc4'],
    'Turkey and Quinoa Stuffed Peppers',
        'Moderate',
        'Intermediate',
        'imageUrl35',
        45,
        ['Bell Peppers', 'Ground Turkey', 'Quinoa', 'Black Beans', 'Tomato Sauce'],
        [
        '1. Cut bell peppers in half and remove seeds.',
        '2. Brown ground turkey and cook quinoa.',
        '3. Mix turkey, quinoa, black beans, and tomato sauce.',
        '4. Stuff bell peppers with the mixture.',
        '5. Bake until peppers are tender.'
        ]
    ),
    new meal(
        'm36',
        ['mc4'],
        'Salmon and Sweet Potato Mash',
        'Expensive',
        'Intermediate',
        'imageUrl36',
        35,
        ['Salmon Fillet', 'Sweet Potatoes', 'Coconut Oil', 'Green Beans', 'Lemon'],
        [
        '1. Season salmon with salt, pepper, and lemon juice.',
        '2. Bake salmon until it flakes easily.',
        '3. Boil sweet potatoes until soft and mash with coconut oil.',
        '4. Steam green beans until tender.',
        '5. Serve salmon over sweet potato mash with green beans on the side.'
        ]
    ),
    new meal(
        'm37',
        ['mc4'],
        'Chickpea and Spinach Power Salad',
        'Affordable',
        'Simple',
        'imageUrl37',
        25,
        ['Chickpeas', 'Spinach', 'Quinoa', 'Cherry Tomatoes', 'Olive Oil'],
        [
        '1. Roast chickpeas until crispy.',
        '2. Cook quinoa according to package instructions.',
        '3. Chop spinach and tomatoes.',
        '4. Mix chickpeas, quinoa, spinach, and tomatoes.',
        '5. Drizzle with olive oil and toss.'
        ]
    ),
    new meal(
        'm38',
        ['mc4'],
        'Blueberry Almond Overnight Oats',
        'Affordable',
        'Simple',
        'imageUrl38',
        10,
        ['Oats', 'Almond Milk', 'Blueberries', 'Almonds', 'Maple Syrup'],
        [
        '1. Mix oats and almond milk in a jar or container.',
        '2. Add blueberries and chopped almonds.',
        '3. Drizzle with maple syrup.',
        '4. Stir well and refrigerate overnight.',
        '5. Enjoy a quick and nutritious breakfast.'
        ]
    ),
    new meal(
        'm39',
        ['mc4'],
        'Chicken and Vegetable Stir-Fry with Rice',
        'Moderate',
        'Intermediate',
        'imageUrl39',
        30,
        ['Chicken Breast', 'Broccoli', 'Bell Peppers', 'Carrots', 'Soy Sauce'],
        [
        '1. Slice chicken into strips and cook in a wok.',
        '2. Add chopped broccoli, bell peppers, and carrots.',
        '3. Stir in soy sauce and cook until vegetables are tender.',
        '4. Serve over cooked rice.',
        '5. Enjoy a delicious and nutritious chicken and vegetable stir-fry.'
        ]
    ),
    new meal(
        'm40',
        ['mc4'],
        'Avocado and Chickpea Wrap',
        'Affordable',
        'Simple',
        'imageUrl40',
        20,
        ['Chickpeas', 'Avocado', 'Tomatoes', 'Lettuce', 'Whole Wheat Wrap'],
        [
        '1. Mash chickpeas and mix with diced avocado.',
        '2. Spread the mixture onto a whole wheat wrap.',
        '3. Add sliced tomatoes and lettuce.',
        '4. Roll up the wrap and cut in half.',
        '5. Enjoy this quick and tasty avocado and chickpea wrap.'
        ]
    )
]




