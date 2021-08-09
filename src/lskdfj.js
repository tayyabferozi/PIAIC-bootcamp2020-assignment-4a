var adjustBackgroundPlayback = function () {
  if (redQueen_alice.playbackRate < 0.8) {
    sceneries.forEach(function (anim) {
      anim.playbackRate = (redQueen_alice.playbackRate / 2) * -1;
    });
  } else if (redQueen_alice.playbackRate > 1.2) {
    sceneries.forEach(function (anim) {
      anim.playbackRate = redQueen_alice.playbackRate / 2;
    });
  } else {
    sceneries.forEach(function (anim) {
      anim.playbackRate = 0;
    });
  }
};
adjustBackgroundPlayback();

/* If Alice and the Red Queen are running at a speed of 1, the background doesn't move. */
/* But if they fall under 1, the background slides backwards */
setInterval(function () {
  /* Set decay */
  if (redQueen_alice.playbackRate > 0.4) {
    redQueen_alice.playbackRate *= 0.9;
  }
  adjustBackgroundPlayback();
}, 3000);

var goFaster = function () {
  /* But you can speed them up by giving the screen a click or a tap. */
  redQueen_alice.playbackRate *= 1.1;
  adjustBackgroundPlayback();
};

document.addEventListener("click", goFaster);
document.addEventListener("touchstart", goFaster);
