function showSelectedZone(event) {
  if (event.target.value.length > 0) {
    if (event.target.value === `paris`) {
      alert(`BOnjour`);
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
