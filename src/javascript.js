function showSelectedZone(event) {
  if (event.target.value.length > 0) {
    let currentDate = moment()
      .tz(event.target.value)
      .format(`dddd, MMMM D, YYYY h:mm A`);
    alert(`It is currently ${currentDate} in ${event.target.value}`);
  }
}
let timeZoneSelect = document.querySelector(`#time-zones`);
timeZoneSelect.addEventListener(`change`, showSelectedZone);
