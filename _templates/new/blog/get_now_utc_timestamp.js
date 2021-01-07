let timezoneOffset = new Date().getTimezoneOffset(); // to get user time in UTC
let now = new Date(),
    nowUtc = new Date(now.getTime() + timezoneOffset * 60000);
    nowTimestamp = nowUtc.getTime();

  console.log('TIMESTAMP: ' + nowTimestamp + '\n')
  console.log('--------| Meta |--------');
  console.log('Now UTC: ' + nowUtc.toLocaleDateString() + ' ' + nowUtc.toLocaleTimeString())
  console.log('Now: ' + now.toLocaleDateString() + ' ' + now.toLocaleTimeString())
