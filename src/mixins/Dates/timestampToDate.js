const timestampToDate = (timestamp, seperator=' ', format=[]) => {
  let date = new Date();
  if (timestamp !== undefined) {
    date = new Date(timestamp*1000);
    if (format.length > 0) {
      let output = '';
      format.forEach((mat, index) => {
        switch (mat) {
          case 'd':
          case 'D':
            let day = date.getDate();
            if (day < 10) {
              day = `0${date.getDate()}`;
            }
            if (index !== (format.length - 1)) {
              day += seperator;
            }
            output += day;
            break;
          case 'm':
            let month = (date.getMonth() + 1);
            if (month < 10) {
              month = `0${month}`;
            }
            if (index !== (format.length - 1)) {
              month += seperator;
            }
            output += month;
            break;
          case 'M':
            let textMonth = indexToMonth(date.getMonth());
            if (index !== (format.length - 1)) {
              textMonth += seperator;
            }
            output += textMonth;
            break;
          case 'y':
          case 'Y':
          default:
            let year = date.getFullYear();
            if (index !== (format.length - 1)) {
              year += seperator;
            }
            output += year;
            break;
        }
      });
      return output;
    } else {
      return date.getFullYear();
    }
  }
};

const indexToMonth = (number) => {
  let text = '';
  switch (number) {
    case 0:
    default:
      text = 'Jan';
      break;
    case 1:
      text = 'Feb';
      break;
    case 2:
      text = 'Mar';
      break;
    case 3:
      text = 'Apr';
      break;
    case 4:
      text = 'May';
      break;
    case 5:
      text = 'Jun';
      break;
    case 6:
      text = 'Jul';
      break;
    case 7:
      text = 'Aug';
      break;
    case 8:
      text = 'Sep';
      break;
    case 9:
      text = 'Oct';
      break;
    case 10:
      text = 'Nov';
      break;
    case 11:
      text = 'Dec';
      break;
  }
  return text;
};

export default timestampToDate;
