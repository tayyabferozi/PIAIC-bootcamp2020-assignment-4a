import "./App.css";
import useWebAnimations from "@wellyshen/use-web-animations";

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
    animationOptions: sceneryTimingBackground,
  });

  const background2Movement = useWebAnimations({
    keyframes: sceneryFrames,
    animationOptions: sceneryTimingBackground,
  });

  const foreground1Movement = useWebAnimations({
    keyframes: sceneryFrames,
    animationOptions: sceneryTimingForeground,
  });

  const foreground2Movement = useWebAnimations({
    keyframes: sceneryFrames,
    animationOptions: sceneryTimingForeground,
  });

  const redQueen_alice = useWebAnimations({
    keyframes: [
      // { transform: "translateY(0)" },
      // { transform: "translateY(-100%)" },
    ],
    animationOptions: {
      easing: "steps(7, end)",
      direction: "reverse",
      duration: 600,
      playbackRate: 1,
      iterations: Infinity,
    },
  });

  return (
    <div>
      <div class="wrapper">
        <div class="sky"></div>
        <div class="earth">
          <div id="red-queen_and_alice" ref={redQueen_alice.ref}>
            <img
              id="red-queen_and_alice_sprite"
              src="./sprite_running-alice-queen_small.png"
              alt="Alice and the Red Queen running to stay in place."
            />
          </div>
        </div>

        <div class="scenery" id="foreground1" ref={foreground1Movement.ref}>
          <img
            id="palm3"
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm3_small.png"
            srcset="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm3.png 2x"
            alt=" "
          />
        </div>
        <div class="scenery" id="foreground2" ref={foreground2Movement.ref}>
          <img
            id="bush"
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/bush_small.png"
            srcset="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/bush.png 2x"
            alt=" "
          />
          <img
            id="w_rook_upright"
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_upright_small.png"
            srcset="
            https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_upright.png 2x
          "
            alt=" "
          />
        </div>
        <div class="scenery" id="background1" ref={background1Movement.ref}>
          <img
            id="r_pawn_upright"
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_upright_small.png"
            srcset="
            https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_upright.png 2x
          "
            alt=" "
          />
          <img
            id="w_rook"
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_small.png"
            srcset="
            https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook.png 2x
          "
            alt=" "
          />
          <img
            id="palm1"
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm1_small.png"
            srcset="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm1.png 2x"
            alt=" "
          />
        </div>
        <div class="scenery" id="background2" ref={background2Movement.ref}>
          <img
            id="r_pawn"
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_small.png"
            srcset="
            https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn.png 2x
          "
            alt=" "
          />

          <img
            id="r_knight"
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_knight_small.png"
            srcset="
            https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_knight.png 2x
          "
            alt=" "
          />
          <img
            id="palm2"
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm2_small.png"
            srcset="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm2.png 2x"
            alt=" "
          />
        </div>
      </div>
    </div>
  );
}

export default App;
