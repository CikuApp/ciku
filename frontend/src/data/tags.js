// Recipe filter tags
const tags = [
  {
    tagName: 'Difficulty',
    tagOptions: [
      { name: 'Beginner Cook', value: 'easy beginner_cook' },
      { name: '3 steps or less', value: '3_steps_or_less' },
      { name: '5 ingredients or less', value: '5_ingredients_or_less' },
      { name: '15 minutes or less', value: '15_minutes_or_less' },
      { name: '30 minutes or less', value: '30_minutes_or_less' },
      { name: '60 minutes or less', value: '60_minutes_or_less' },
      { name: '4 hours or less', value: '4_hours_or_less' }
    ]
  },
  {
    tagName: 'Dish Type',
    tagOptions: [
      { name: 'Appetizers', value: 'appetizers' },
      { name: 'Breads', value: 'breads' },
      { name: 'Breakfast', value: 'breakfast' },
      { name: 'Desserts', value: 'desserts' },
      { name: 'Dinner', value: 'dinner_party' },
      { name: 'Lunch', value: 'lunch' },
      { name: 'Main Dish', value: 'main_dish' },
      { name: 'Salad', value: 'salads' },
      { name: 'Side Dish', value: 'side_dishes' },
      { name: 'Smoothies', value: 'smoothies' }
    ]
  },
  {
    tagName: 'Cuisine',
    tagOptions: [
      { name: 'African', value: 'african' },
      { name: 'Asian', value: 'asian' },
      { name: 'Australian', value: 'australian' },
      { name: 'European', value: 'european' },
      { name: 'Indian', value: 'indian' },
      { name: 'Mexican', value: 'mexican' },
      { name: 'Middle Eastern', value: 'middle_eastern' },
      { name: 'North American', value: 'north_american' },
      { name: 'South American', value: 'south_american' },
      { name: 'South West Pacific', value: 'south_west_pacific' }
    ]
  },
  {
    tagName: 'Dietary Concern',
    tagOptions: [
      { name: 'Diabetic', value: 'diabetic' },
      { name: 'Egg-Free', value: 'egg_free' },
      { name: 'Gluten-Free', value: 'gluten_free' },
      { name: 'Healthy', value: 'healthy healthy_2' },
      { name: 'Kid-Friendly', value: 'kid_friendly' },
      { name: 'Kosher', value: 'kosher' },
      { name: 'Lactose-Free', value: 'dairy_free ' },
      { name: 'Low-Calorie', value: 'low_calorie' },
      { name: 'Low-Cholesterol', value: 'low_cholesterol' },
      { name: 'Low Fat', value: 'low_fat' },
      { name: 'Low Protein', value: 'low_protein' },
      { name: 'Low Saturated Fat', value: 'low_saturated_fat' },
      { name: 'Low Sodium', value: 'low_sodium' },
      { name: 'Low-Carb', value: 'low_carb' },
      { name: 'Nut-Free', value: 'nut_free' },
      { name: 'Vegan', value: 'vegan' },
      { name: 'Vegetarian', value: 'vegetarian' }
    ]
  }
];

export default tags;
