export const calculateMacros = (height, weight, age, selectedGoal, selectedDay) => {
    
    const heightInMeters = parseFloat(height) / 100;
  
    
    let bmr;
    if (selectedGoal === 'Weight Maintain') {
      bmr = 10 * parseFloat(weight) + 6.25 * parseFloat(height) - 5 * parseFloat(age) + 5;
    } else if (selectedGoal === 'Weight Loss') {
      bmr = 10 * parseFloat(weight) + 6.25 * parseFloat(height) - 5 * parseFloat(age) - 161;
    } else if (selectedGoal === 'Weight Gain') {
      bmr = 10 * parseFloat(weight) + 6.25 * parseFloat(height) - 5 * parseFloat(age) + 161;
    }

    //console.log('BMR:', bmr);
  
    // Adjust BMR based on activity level
    let activityFactor;
    if (selectedDay === 'little to no exercise') {
      activityFactor = 1.2;
    } else if (selectedDay === 'Exercise 1-3 times/week') {
      activityFactor = 1.375;
    } else if (selectedDay === 'Exercise 4-5 times/week') {
      activityFactor = 1.55;
    } else if (selectedDay === 'Exercise 6-7 times/week') {
      activityFactor = 1.725;
    }
  
    // Calculate Total Daily Energy Expenditure (TDEE)
    const tdee = bmr * activityFactor;
  
    // Determine macronutrient distribution based on goals
    let proteinPercentage, carbPercentage, fatPercentage;
    if (selectedGoal === 'Weight Maintain') {
      proteinPercentage = 0.25;
      carbPercentage = 0.45;
      fatPercentage = 0.30;
    } else if (selectedGoal === 'Weight Loss') {
      proteinPercentage = 0.30;
      carbPercentage = 0.40;
      fatPercentage = 0.30;
    } else if (selectedGoal === 'Weight Gain') {
      proteinPercentage = 0.30;
      carbPercentage = 0.50;
      fatPercentage = 0.20;
    }
  
    // Calculate macros in grams
    const protein = Math.round((proteinPercentage * tdee) / 4);
    const carbs = Math.round((carbPercentage * tdee) / 4);
    const fat = Math.round((fatPercentage * tdee) / 9);
    const calories = Math.round(tdee);
  
    // Output calculated macros
    console.log('height:', height);
    console.log('weight:', weight);
    console.log('age:', age);
    console.log('goal:', selectedGoal);
    console.log('day:', selectedDay);
    

    //outputs
    console.log('Protein (g):', protein);
    console.log('Carbs (g):', carbs);
    console.log('Fat (g):', fat);
    console.log('Calories:', calories);
  }
