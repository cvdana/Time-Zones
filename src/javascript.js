function updateTime() {
  let losAngelesElement = document.querySelector(`#los-angeles`);
  if (losAngelesElement) {
    let losAngelesDateElement = losAngelesElement.querySelector(`.date`);
    let losAngelesTimeElement = losAngelesElement.querySelector(`.time`);
    losAngelesTime = moment().tz(`America/Los_Angeles`);
    losAngelesDateElement.innerHTML = moment().format(`MMMM Do YYYY`);
    losAngelesTimeElement.innerHTML = losAngelesTime.format(
      `hh:mm:ss [<small>]A[</small>]`
    );
  }

  let parisElement = document.querySelector(`#paris`);
  if (parisElement) {
    let parisDateElement = parisElement.querySelector(`.date`);
    let parisTimeElement = parisElement.querySelector(`.time`);
    parisTime = moment().tz(`Europe/Paris`);
    parisDateElement.innerHTML = moment().format(`MMMM Do YYYY`);
    parisTimeElement.innerHTML = parisTime.format(
      `hh:mm:ss [<small>]A[</small>]`
    );
  }

  let dubaiElement = document.querySelector(`#dubai`);
  if (dubaiElement) {
    let dubaiDateElement = dubaiElement.querySelector(`.date`);
    let dubaiTimeElement = dubaiElement.querySelector(`.time`);
    dubaiTime = moment().tz(`Asia/Dubai`);
    dubaiDateElement.innerHTML = moment().format(`MMMM Do YYYY`);
    dubaiTimeElement.innerHTML = dubaiTime.format(
      `hh:mm:ss [<small>]A[</small>]`
    );
  }
}
updateTime();
setInterval(updateTime, 1000);

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === `current`) {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace(`_`, " ").split(`/`)[1];
  let cityCurrentTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector(`#cities`);
  citiesElement.innerHTML = `
  <div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityCurrentTime.format(`MMMM Do YYYY`)}</div>
          </div>
          <div class="time">${cityCurrentTime.format(
            `hh:mm:ss`
          )} <small>${cityCurrentTime.format(`A`)}</small></div>
        </div>
        <a href="/">All cities</a>
  `;
}
let citiesSelectElement = document.querySelector(`#time-zones`);
citiesSelectElement.addEventListener(`change`, updateCity);
