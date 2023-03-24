function showSelectedZone(event) {
  if (event.target.value.length > 0) {
    if (event.target.value === `paris`) {
      let currentDateElement = document.querySelector(`#paris`);
      let currentDate = moment()
        .tz(`Europe/Paris`)
        .format(`dddd, MMMM  D, YYYY h:mmA`);
      alert(`It is currently ${currentDate} in Paris/Europe`);
    }
    if (event.target.value === `tokyo`) {
      alert(`nihao`);
    }
    if (event.target.value === `sydney`) {
      alert(`lalal`);
    }
  }
}
let timeZoneSelect = document.querySelector(`#time-zones`);
timeZoneSelect.addEventListener(`change`, showSelectedZone);
