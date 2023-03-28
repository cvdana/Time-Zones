function updateTime() {
  let losAngelesElement = document.querySelector(`#los-angeles`);
  let losAngelesDateElement = losAngelesElement.querySelector(`.date`);
  let losAngelesTimeElement = losAngelesElement.querySelector(`.time`);
  losAngelesDateElement.innerHTML = moment().format(`MMMM Do YYYY`);
  losAngelesTimeElement.innerHTML = moment()
    .tz(`America/Los_Angeles`)
    .format(`H:mm:ss`);

  let parisElement = document.querySelector(`#paris`);
  let parisDateElement = parisElement.querySelector(`.date`);
  let parisTimeElement = parisElement.querySelector(`.time`);
  parisDateElement.innerHTML = moment().format(`MMMM Do YYYY`);
  parisTimeElement.innerHTML = moment().tz(`Europe/Paris`).format(`H:mm:ss`);
}
updateTime();
setInterval(updateTime, 1000);
