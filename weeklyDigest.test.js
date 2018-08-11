const moment = require('moment');

jest.mock('moment', () => () => {
  return {
    toObject: function () {
      return {
        years: 2016
      }
    }
  }
});

jest.mock('./markdownBody', () => () => Promise.resolve('hello'));

const weeklyDigest = require('./weeklyDigest');

test('weeklyDigest is working', async () => {
  const { year, body } = await weeklyDigest();
  expect(year).toBe(2016);
  expect(body).toBe('hello');
})
