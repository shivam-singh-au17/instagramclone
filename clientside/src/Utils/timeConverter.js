export function timeConverter(unixTime) {
  // time = id;
  let time = Date.now() - unixTime;
  let output = '';

  let year, month, day, hour, min, sec;

  if (time < 1000) {
    return 'just now';
  }
  if (time >= 12 * 30 * 24 * 60 * 60 * 1000) {
    year = Math.floor(time / (12 * 30 * 24 * 60 * 60 * 1000));
  } else if (time >= 30 * 24 * 60 * 60 * 1000) {
    month = Math.floor(time / (30 * 24 * 60 * 60 * 1000));
  } else if (time >= 24 * 60 * 60 * 1000) {
    day = Math.floor(time / (24 * 60 * 60 * 1000));
  } else if (time >= 60 * 60 * 1000) {
    hour = Math.floor(time / (60 * 60 * 1000));
  } else if (time >= 60 * 1000) {
    min = Math.floor(time / (60 * 1000));
  } else if (time < 60 * 1000) {
    sec = Math.floor(time / 1000);
  }

  if (year) {
    if (year === 1) {
      output += year + ' year ';
    } else {
      output += year + ' years ';
    }
  } else if (month) {
    if (month === 1) {
      output += month + ' month ';
    } else {
      output += month + ' months ';
    }
  } else if (day) {
    if (day === 1) {
      output += day + ' day ';
    } else {
      output += day + ' days ';
    }
  } else if (hour) {
    if (hour === 1) {
      output += hour + ' hour ';
    } else {
      output += hour + ' hours ';
    }
  } else if (min) {
    if (min === 1) {
      output += min + ' minute ';
    } else {
      output += min + ' minutes ';
    }
  } else if (sec) {
    if (sec === 1) {
      output += sec + ' second ';
    } else {
      output += sec + ' seconds ';
    }
  }
  return output.trim() + ' ago';
}
