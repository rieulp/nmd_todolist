const today = document.querySelector('#today');
const clock = document.querySelector('#clock');

const getDate = () => {
  const date = new Date();
  today.innerText = `${date.toLocaleDateString(navigator.language, { year: 'numeric', month: 'short', day: 'numeric', weekday: 'short' })}`;
};
const getClock = () => {
  const date = new Date();
  if (new Date(today.innerText).getDate() !== date.getDate()) getDate();
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');
  clock.innerText = `${hours}:${minutes}:${seconds}`;
};

getDate();
getClock();
setInterval(getClock, 1000);
