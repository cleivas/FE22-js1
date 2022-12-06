const helpAnimation = {
  targets: "#container h1",
  translateY: "-5rem",
  delay: anime.stagger(100),
  direction: "alternate",
  easing: "easeOutSine",
  duration: 200,
  loop: true,
  autoplay: false,
};

const help = anime(helpAnimation);
// help.play();

const playBtn = document.querySelector("#play");
const pauseBtn = document.querySelector("#pause");
const stopBtn = document.querySelector("#stop");

playBtn.addEventListener("click", help.play);
pauseBtn.addEventListener("click", help.pause);
stopBtn.addEventListener("click", function() {
  help.restart();
  help.pause();
});
