import "./App.css";
import useWebAnimations from "@wellyshen/use-web-animations";
import { useEffect } from "react";

let sceneryFrames = [
  { transform: "translateX(100%)" },
  { transform: "translateX(-100%)" },
];

let sceneryTimingBackground = {
  duration: 36000,
  iterations: Infinity,
};

let sceneryTimingForeground = {
  duration: 12000,
  iterations: Infinity,
};

let spriteFrames = [
  { transform: "translateY(0)" },
  { transform: "translateY(-100%)" },
];

function App() {
  const background1Movement = useWebAnimations({
    keyframes: sceneryFrames,
    timing: sceneryTimingBackground,
  });

  const background2Movement = useWebAnimations({
    keyframes: sceneryFrames,
    timing: sceneryTimingBackground,
  });

  const foreground1Movement = useWebAnimations({
    keyframes: sceneryFrames,
    timing: sceneryTimingForeground,
  });

  const foreground2Movement = useWebAnimations({
    keyframes: sceneryFrames,
    timing: sceneryTimingForeground,
  });

  const redQueen_alice = useWebAnimations({
    keyframes: spriteFrames,
    timing: {
      easing: "steps(7, end)",
      direction: "reverse",
      duration: 600,
      playbackRate: 1,
      iterations: Infinity,
    },
  });

  useEffect(() => {
    const sceneries = [
      foreground1Movement,
      foreground2Movement,
      background1Movement,
      background2Movement,
    ];

    var adjustBackgroundPlayback = function () {
      if (redQueen_alice.getAnimation().playbackRate < 0.8) {
        sceneries.forEach(function (anim) {
          anim.playbackRate =
            (redQueen_alice.getAnimation().playbackRate / 2) * -1;
        });
      } else if (redQueen_alice.getAnimation().playbackRate > 1.2) {
        sceneries.forEach(function (anim) {
          anim.getAnimation().playbackRate =
            redQueen_alice.getAnimation().playbackRate / 2;
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
      if (redQueen_alice.getAnimation().playbackRate > 0.4) {
        redQueen_alice.getAnimation().playbackRate *= 0.9;
      }
      adjustBackgroundPlayback();
    }, 3000);

    var goFaster = function () {
      console.log(redQueen_alice.getAnimation());
      /* But you can speed them up by giving the screen a click or a tap. */
      redQueen_alice.getAnimation().playbackRate *= 1.1;
      adjustBackgroundPlayback();
    };

    document.addEventListener("click", goFaster);
    document.addEventListener("touchstart", goFaster);
  }, [
    foreground1Movement,
    foreground2Movement,
    redQueen_alice,
    background1Movement,
    background2Movement,
  ]);

  return (
    <div>
      <div className="wrapper">
        <div className="sky"></div>
        <div className="earth">
          <div id="red-queen_and_alice">
            <img
              ref={redQueen_alice.ref}
              id="red-queen_and_alice_sprite"
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/sprite_running-alice-queen_small.png"
              srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/sprite_running-alice-queen.png 2x"
              alt="Alice and the Red Queen running to stay in place."
            />
          </div>
        </div>

        <div ref={foreground1Movement.ref} className="scenery" id="foreground1">
          <img
            id="palm3"
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm3_small.png"
            srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm3.png 2x"
            alt=" "
          />
        </div>
        <div ref={foreground2Movement.ref} className="scenery" id="foreground2">
          <img
            id="bush"
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/bush_small.png"
            srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/bush.png 2x"
            alt=" "
          />
          <img
            id="w_rook_upright"
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_upright_small.png"
            srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_upright.png 2x"
            alt=" "
          />
        </div>
        <div ref={background1Movement.ref} className="scenery" id="background1">
          <img
            id="r_pawn_upright"
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_upright_small.png"
            srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_upright.png 2x"
            alt=" "
          />
          <img
            id="w_rook"
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_small.png"
            srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook.png 2x"
            alt=" "
          />
          <img
            id="palm1"
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm1_small.png"
            srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm1.png 2x"
            alt=" "
          />
        </div>
        <div ref={background2Movement.ref} className="scenery" id="background2">
          <img
            id="r_pawn"
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_small.png"
            srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn.png 2x"
            alt=" "
          />

          <img
            id="r_knight"
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_knight_small.png"
            srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_knight.png 2x"
            alt=" "
          />
          <img
            id="palm2"
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm2_small.png"
            srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm2.png 2x"
            alt=" "
          />
        </div>
      </div>
    </div>
  );
}

export default App;
