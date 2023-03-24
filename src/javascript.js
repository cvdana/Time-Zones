function showSelectedZone(event) {
  if (event.target.value.length > 0) {
    if (event.target.value === `paris`) {
      let currentDateElementParis = document.querySelector(`#paris`);
      let currentDate = moment()
        .tz(`Europe/Paris`)
        .format(`dddd, MMMM D, YYYY h:mm A`);
      alert(`It is currently ${currentDate} in Paris/Europe`);
    }
    if (event.target.value === `tokyo`) {
      let currentDateElementTokyo = document.querySelector(`#tokyo`);
      let currentDate = moment()
        .tz(`Asia/Tokyo`)
        .format(`dddd, MMMM D, YYYY h:mm A`);
      alert(`It is currently ${currentDate} in Tokyo/Asia`);
    }
    if (event.target.value === `sydney`) {
      let currentDateElementSydney = document.querySelector(`#sydney`);
      let currentDate = moment()
        .tz(`Australia/Sydney`)
        .format(`dddd, MMMM D, YYYY h:mm A`);
      alert(`It is currently ${currentDate} in Sydney/Australia`);
    }
  }
}
let timeZoneSelect = document.querySelector(`#time-zones`);
timeZoneSelect.addEventListener(`change`, showSelectedZone);
