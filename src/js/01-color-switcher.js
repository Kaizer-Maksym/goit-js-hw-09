const refs = {
  startBtn: document.querySelector('[data-start]'),
  stopBtn: document.querySelector('[data-stop]'),
  body: document.querySelector('body'),
};

refs.stopBtn.setAttribute('disabled', true);

const changeColorPalette = {
  intervalId: null,

  start() {
    this.intervalId = setInterval(() => {
      getRandomHexColor();
    }, 1000);

    refs.startBtn.setAttribute('disabled', true);
    refs.stopBtn.removeAttribute('disabled');
  },

  stop() {
    clearInterval(this.intervalId);
    refs.startBtn.removeAttribute('disabled');
    refs.stopBtn.setAttribute('disabled', true);
  },
};

refs.startBtn.addEventListener('click', () => {
  changeColorPalette.start();
});
refs.stopBtn.addEventListener('click', () => {
  changeColorPalette.stop();
});

function getRandomHexColor() {
  return (refs.body.style.backgroundColor = `#${Math.floor(
    Math.random() * 16777215
  ).toString(16)}`);
}
