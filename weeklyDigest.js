const moment = require('moment');

module.exports = () => {
  let headDateObject = moment('2016-02-01T00:00:00-06:00').toObject();
  console.log(headDateObject);
  return headDateObject.years;
}
