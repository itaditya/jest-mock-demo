const moment = require('moment');

const markdownBody = require('./markdownBody');

module.exports = async () => {
  let headDateObject = moment('2016-02-01T00:00:00-06:00').toObject();
  const body = await markdownBody();
  return {
    year: headDateObject.years,
    body: body
  }
}
