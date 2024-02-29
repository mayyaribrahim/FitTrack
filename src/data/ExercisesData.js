export class exercise {
    constructor(id, categoryIds, name, setsAndReps, equipment) {
      this.id = id;
      this.categoryIds = categoryIds;
      this.name = name;
      this.setsAndReps = setsAndReps;
      this.equipment = equipment;
    }
}
  


export class exerciseCategory {
    constructor(id, title, titleColor, buttonColor) {
      this.id = id;
      this.title = title;
      this.titleColor = titleColor;
      this.buttonColor = buttonColor;
    }
}
  







export const EXERCISESCATEGORIES = [
  new exerciseCategory('c1', 'Chest', '#FFFFFF', '#272D34'),
  new exerciseCategory('c2', 'Back', '#272D34', '#E1F0F4'),
  new exerciseCategory('c3', 'Shoulders', '#272D34', '#FFE9CA'),
  new exerciseCategory('c4', 'Arms', '#FFFFFF', '#272D34'),
  new exerciseCategory('c5', 'Legs', '#272D34', '#E1F0F4'),
  new exerciseCategory('c6', 'Abs', '#272D34', '#FFE9CA'),
  new exerciseCategory('c7', 'Cardio', '#FFFFFF', '#272D34'),
  new exerciseCategory('c8', 'Body Weight', '#272D34', '#E1F0F4')
];






export const EXERCISES = [
//chest
    new exercise('e1', ['c1'], 'Bench Press', '4 sets of 10 reps', 'Barbell'),
    new exercise('e2', ['c1'], 'Incline Dumbbell Press', '3 sets of 12 reps', 'Dumbbells'),
    new exercise('e3', ['c1'], 'Chest Flyes', '3 sets of 15 reps', 'Cable Machine'),
    new exercise('e4', ['c1'], 'Push-ups', '3 sets of 15 reps', 'Body Weight'),
    new exercise('e5', ['c1'], 'Machine Chest Press', '4 sets of 12 reps', 'Machine'),
    new exercise('e6', ['c1'], 'Decline Barbell Press', '3 sets of 10 reps', 'Barbell'),
    new exercise('e7', ['c1'], 'Dumbbell Pullover', '3 sets of 12 reps', 'Dumbbells'),
    new exercise('e8', ['c1'], 'Dips', '3 sets of 12 reps', 'Parallel Bars'),
    new exercise('e9', ['c1'], 'Machine Pec Deck', '4 sets of 15 reps', 'Machine'),
    new exercise('e10', ['c1'], 'Chest Press Machine', '3 sets of 12 reps', 'Machine'),
    new exercise('e11', ['c1'], 'Cable Crossover', '3 sets of 15 reps', 'Cable Machine'),
    new exercise('e12', ['c1'], 'Bodyweight Dips', '3 sets of 10 reps', 'Body Weight'),

//back
    new exercise('e13', ['c2'], 'Deadlift', '4 sets of 8 reps', 'Barbell'),
    new exercise('e14', ['c2'], 'Lat Pulldown', '3 sets of 12 reps', 'Machine'),
    new exercise('e15', ['c2'], 'Bent Over Rows', '4 sets of 10 reps', 'Barbell'),
    new exercise('e16', ['c2'], 'T-Bar Rows', '3 sets of 12 reps', 'T-Bar Row Machine'),
    new exercise('e17', ['c2'], 'Single Arm Dumbbell Row', '3 sets of 15 reps', 'Dumbbell'),
    new exercise('e18', ['c2'], 'Pull-ups', '3 sets of 10 reps', 'Pull-up Bar'),
    new exercise('e19', ['c2'], 'Seated Cable Row', '4 sets of 12 reps', 'Cable Machine'),
    new exercise('e20', ['c2'], 'Face Pulls', '3 sets of 15 reps', 'Cable Machine'),
    new exercise('e21', ['c2'], 'Hyperextensions', '3 sets of 12 reps', 'Roman Chair'),
    new exercise('e22', ['c2'], 'Machine Back Extension', '3 sets of 15 reps', 'Machine'),
    new exercise('e23', ['c2'], 'Chin-ups', '3 sets of 10 reps', 'Pull-up Bar'),
    new exercise('e24', ['c2'], 'Barbell Shrugs', '4 sets of 12 reps', 'Barbell'),
  
//shoulders
    new exercise('e25', ['c3'], 'Overhead Press', '4 sets of 10 reps', 'Barbell'),
    new exercise('e26', ['c3'], 'Lateral Raises', '3 sets of 15 reps', 'Dumbbells'),
    new exercise('e27', ['c3'], 'Front Raises', '3 sets of 12 reps', 'Dumbbells'),
    new exercise('e28', ['c3'], 'Machine Shoulder Press', '4 sets of 12 reps', 'Machine'),
    new exercise('e29', ['c3'], 'Face Pulls', '3 sets of 15 reps', 'Cable Machine'),
    new exercise('e30', ['c3'], 'Reverse Flyes', '3 sets of 15 reps', 'Dumbbells'),
    new exercise('e31', ['c3'], 'Shrugs', '4 sets of 12 reps', 'Barbell'),
    new exercise('e32', ['c3'], 'Upright Rows', '3 sets of 12 reps', 'Barbell'),
    new exercise('e33', ['c3'], 'Arnold Press', '3 sets of 12 reps', 'Dumbbells'),
    new exercise('e34', ['c3'], 'Lateral Cable Raises', '3 sets of 15 reps', 'Cable Machine'),
    new exercise('e35', ['c3'], 'Barbell Overhead Shrug', '4 sets of 12 reps', 'Barbell'),
    new exercise('e36', ['c3'], 'Handstand Push-ups', '3 sets of 10 reps', 'Body Weight'),
  
 //arms
    new exercise('e37', ['c4'], 'Bicep Curls', '3 sets of 12 reps', 'Dumbbells'),
    new exercise('e38', ['c4'], 'Tricep Dips', '3 sets of 10 reps', 'Body Weight'),
    new exercise('e39', ['c4'], 'Hammer Curls', '3 sets of 15 reps', 'Dumbbells'),
    new exercise('e40', ['c4'], 'Skull Crushers', '3 sets of 12 reps', 'Barbell'),
    new exercise('e41', ['c4'], 'Preacher Curls', '3 sets of 12 reps', 'EZ Bar'),
    new exercise('e42', ['c4'], 'Tricep Kickbacks', '3 sets of 15 reps', 'Dumbbells'),
    new exercise('e43', ['c4'], 'Barbell Bicep Curls', '4 sets of 12 reps', 'Barbell'),
    new exercise('e44', ['c4'], 'Cable Tricep Pushdowns', '4 sets of 15 reps', 'Cable Machine'),
    new exercise('e45', ['c4'], 'Concentration Curls', '3 sets of 12 reps', 'Dumbbells'),
    new exercise('e46', ['c4'], 'Tricep Overhead Extension', '3 sets of 15 reps', 'Dumbbells'),
    new exercise('e47', ['c4'], 'Zottman Curls', '3 sets of 12 reps', 'Dumbbells'),
    new exercise('e48', ['c4'], 'Diamond Push-ups', '3 sets of 12 reps', 'Body Weight'),
 
//legs
    new exercise('e49', ['c5'], 'Squats', '4 sets of 10 reps', 'Barbell'),
    new exercise('e50', ['c5'], 'Leg Press', '3 sets of 12 reps', 'Machine'),
    new exercise('e51', ['c5'], 'Lunges', '3 sets of 15 reps', 'Dumbbells'),
    new exercise('e52', ['c5'], 'Leg Extensions', '4 sets of 12 reps', 'Machine'),
    new exercise('e53', ['c5'], 'Hamstring Curls', '3 sets of 12 reps', 'Machine'),
    new exercise('e54', ['c5'], 'Calf Raises', '4 sets of 15 reps', 'Smith Machine'),
    new exercise('e55', ['c5'], 'Step-ups', '3 sets of 12 reps', 'Dumbbells'),
    new exercise('e56', ['c5'], 'Box Jumps', '3 sets of 10 reps', 'Box'),
    new exercise('e57', ['c5'], 'Sumo Deadlift', '4 sets of 10 reps', 'Barbell'),
    new exercise('e58', ['c5'], 'Hack Squats', '3 sets of 12 reps', 'Machine'),
    new exercise('e59', ['c5'], 'Romanian Deadlift', '3 sets of 12 reps', 'Barbell'),
    new exercise('e60', ['c5'], 'Pistol Squats', '3 sets of 10 reps', 'Body Weight'),

//abs
    new exercise('e61', ['c6'], 'Crunches', '3 sets of 15 reps', 'Body Weight'),
    new exercise('e62', ['c6'], 'Plank', '3 sets of 1 minute', 'Body Weight'),
    new exercise('e63', ['c6'], 'Russian Twists', '3 sets of 20 reps', 'Medicine Ball'),
    new exercise('e64', ['c6'], 'Hanging Leg Raises', '3 sets of 12 reps', 'Pull-up Bar'),
    new exercise('e65', ['c6'], 'Woodchoppers', '3 sets of 15 reps', 'Cable Machine'),
    new exercise('e66', ['c6'], 'Bicycle Crunches', '3 sets of 20 reps', 'Body Weight'),
    new exercise('e67', ['c6'], 'Reverse Crunches', '3 sets of 15 reps', 'Body Weight'),
    new exercise('e68', ['c6'], 'Oblique Crunches', '3 sets of 15 reps', 'Body Weight'),
    new exercise('e69', ['c6'], 'Plank Twists', '3 sets of 20 reps', 'Body Weight'),
    new exercise('e70', ['c6'], 'Hollow Body Hold', '3 sets of 30 seconds', 'Body Weight'),
    new exercise('e71', ['c6'], 'Dragon Flags', '3 sets of 10 reps', 'Body Weight'),
    new exercise('e72', ['c6'], 'Leg Raises', '3 sets of 15 reps', 'Body Weight'),

//cardio
    new exercise('e73', ['c7'], 'Running', 'Interval Training', 'None'),
    new exercise('e74', ['c7'], 'Cycling', '30 minutes', 'Stationary Bike'),
    new exercise('e75', ['c7'], 'Jump Rope', '3 sets of 5 minutes', 'Jump Rope'),
    new exercise('e76', ['c7'], 'Rowing', '20 minutes', 'Rowing Machine'),
    new exercise('e77', ['c7'], 'Burpees', '3 sets of 15 reps', 'Body Weight'),
    new exercise('e78', ['c7'], 'High Knees', '3 sets of 1 minute', 'None'),
    new exercise('e79', ['c7'], 'Elliptical Training', '25 minutes', 'Elliptical Machine'),
    new exercise('e80', ['c7'], 'Sprinting', '10 sets of 100 meters', 'None'),
    new exercise('e81', ['c7'], 'Stair Climbing', '20 minutes', 'Staircase'),
    new exercise('e82', ['c7'], 'Kickboxing', '3 sets of 5 minutes', 'None'),
    new exercise('e83', ['c7'], 'Swimming', '30 minutes', 'Pool'),
    new exercise('e84', ['c7'], 'Mountain Climbers', '3 sets of 20 reps', 'None'),

//bodyWeight
    new exercise('e85', ['c8'], 'Push-ups', '3 sets of 15 reps', 'Body Weight'),
    new exercise('e86', ['c8'], 'Pull-ups', '3 sets of 10 reps', 'Pull-up Bar'),
    new exercise('e87', ['c8'], 'Dips', '3 sets of 12 reps', 'Parallel Bars'),
    new exercise('e88', ['c8'], 'Bodyweight Squats', '4 sets of 15 reps', 'Body Weight'),
    new exercise('e89', ['c8'], 'Lunges', '3 sets of 12 reps', 'Body Weight'),
    new exercise('e90', ['c8'], 'Burpees', '3 sets of 10 reps', 'Body Weight'),
    new exercise('e91', ['c8'], 'Mountain Climbers', '3 sets of 20 reps', 'None'),
    new exercise('e92', ['c8'], 'Plank', '3 sets of 1 minute', 'Body Weight'),
    new exercise('e93', ['c8'], 'Jumping Jacks', '3 sets of 1 minute', 'None'),
    new exercise('e94', ['c8'], 'Handstand Push-ups', '3 sets of 8 reps', 'Wall'),
    new exercise('e95', ['c8'], 'L-Sit', '3 sets of 15 seconds', 'Parallel Bars'),
    new exercise('e96', ['c8'], 'Pistol Squats', '3 sets of 10 reps', 'Body Weight'),
  ]






