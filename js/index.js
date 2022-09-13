const time = document.querySelector('.preview__watch-time');
function showTime() {
    const options = {hour: 'numeric', minute: 'numeric',};
    const date = new Date();
    const currentTime = date.toLocaleTimeString();
    time.textContent = currentTime;
    setTimeout(showTime, 1000);
    showDate()
}
showTime();
function showDate() {
    const dateStr = document.querySelector('.preview__watch-date');
    const weekdayStr = document.querySelector('.preview__watch-weekday');
    const date = new Date();
    const optionsMonth = {month: 'long',};
    let month = date.toLocaleDateString('en-US', optionsMonth)
    const optionsDay = {day: 'numeric',};
    let day = date.toLocaleDateString('en-US', optionsDay)
    const optionsWeekday = {weekday: 'long',};
    let weekday = date.toLocaleDateString('en-US', optionsWeekday)
    dateStr.textContent = `${month.substring(0,4)} ${day}`;
    weekdayStr.textContent = `${weekday}`
}

