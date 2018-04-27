const { food, kebab } = require('./kebab');

test('kebabs a string, tastily', () => {
  const string = 'foo-bar-baz';
  const kebabString = kebab(string);
  expect(includesFood(kebabString)).toBe(true);
});

function includesFood(string) {
  for (const item of food) {
    if (string.includes(item)) return true;
  }

  return false;
}
