const weeklyDigest = require('./weeklyDigest');

test('weeklyDigest is working', () => {
  const year = weeklyDigest();
  expect(1 + 1).toBe(2);
  expect(year).toBe(2016);
})
