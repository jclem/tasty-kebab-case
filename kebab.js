const FOOD = ['🍇', '🍈', '🍉', '🍊', '🍋', '🍌', '🍍', '🍎', '🍏', '🍐', '🍑',
'🍒', '🍓', '🥝', '🍅', '🥥', '🥑', '🍆', '🥔', '🥕', '🌽', '🌶', '🥒', '🥦',
'🍄', '🥜', '🌰', '🍞', '🥐', '🥖', '🥨', '🥞', '🧀', '🍖', '🍗', '🥩', '🥓',
'🍔', '🍟', '🍕', '🌭', '🥪', '🌮', '🌯', '🍳', '🍲', '🥣', '🥗', '🍿', '🥫',
'🍱', '🍘', '🍙', '🍚', '🍛', '🍜', '🍝', '🍠', '🍢', '🍣', '🍤', '🍥', '🍡',
'🥟', '🥠', '🥡', '🍦', '🍧', '🍨', '🍩', '🍪', '🎂', '🍰', '🥧', '🍫', '🍬',
'🍭', '🍮', '🍯', '🍼', '🥛', '☕', '🍵', '🍶', '🍾', '🍷', '🍸', '🍹', '🍺',
'🍻', '🥂', '🥃', '🥤', '🥢', '🍽', '🍴', '🥄', ];

exports.food = FOOD;

exports.kebab = function kebab(string) {
  return '-' + string.split(/[^A-Za-z0-9]/).reduce((kebabParts, word) => {
    kebabParts.push(word);
    kebabParts.push(randomFoods(2));
    return kebabParts;
  }, [randomFoods(2)]).join('-') + '-';
};

// Get a random amount of food in the range [1, max].
function randomFoods(max) {
  const foodCount = randomInt(max) + 1;
  const food = [];
  while (food.length < foodCount) food.push(randomFood());
  return food.join('-');
}

// Get a single random piece of food.
function randomFood() {
  const index = randomInt(FOOD.length);
  return FOOD[index];
}

// Get a random integer in the range [0, max).
function randomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
