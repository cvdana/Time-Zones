function updateTime() {
  let losAngelesElement = document.querySelector(`#los-angeles`);
  if (losAngelesElement) {
    let losAngelesDateElement = losAngelesElement.querySelector(`.date`);
    let losAngelesTimeElement = losAngelesElement.querySelector(`.time`);
    losAngelesDateElement.innerHTML = moment().format(`MMMM Do YYYY`);
    losAngelesTimeElement.innerHTML = moment()
      .tz(`America/Los_Angeles`)
      .format(`H:mm:ss`);
  }

  let parisElement = document.querySelector(`#paris`);
  if (parisElement) {
    let parisDateElement = parisElement.querySelector(`.date`);
    let parisTimeElement = parisElement.querySelector(`.time`);
    parisDateElement.innerHTML = moment().format(`MMMM Do YYYY`);
    parisTimeElement.innerHTML = moment().tz(`Europe/Paris`).format(`H:mm:ss`);
  }
}
updateTime();
setInterval(updateTime, 1000);

function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityName = cityTimeZone.replace(`_`, " ").split(`/`)[1];
  let cityCurrentTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector(`#cities`);
  citiesElement.innerHTML = `
  <div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityCurrentTime.format(`MMMM Do YYYY`)}</div>
          </div>
          <div class="time">${cityCurrentTime.format(`H:mm:ss`)}</div>
        </div>
  `;
}
let citiesSelectElement = document.querySelector(`#time-zones`);
citiesSelectElement.addEventListener(`change`, updateCity);
