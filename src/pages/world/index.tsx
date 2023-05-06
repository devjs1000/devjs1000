import Sketch from "react-p5";
import p5Types from "p5";
import Pokemon from "./characters/pokemons";

const World = () => {
  const pokemons = [];

  const preload = () => {};

  const setup = (p5: p5Types, canvasParentRef: Element) => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(canvasParentRef);
    p5.frameRate(12);
    for (let i = 0; i < 10; i++) {
      const oneToSix = parseInt(p5.random(0, 6) as any);

      const props = {
        x: p5.random(0, p5.windowWidth),
        y: p5.random(0, p5.windowHeight),
        imageCount: oneToSix,
        horizontalDirection: 1,
        verticalDirection: 1,
      };
      pokemons.push(new Pokemon(p5, props));
    }

    p5.pixelDensity(1);
  };

  const draw = (p5: p5Types) => {
    p5.background(134, 198, 80);
    pokemons.forEach((pokemon) => {
      pokemon.draw();
    });
  };

  const resize = (p5: p5Types) => {
    p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
  };

  return (
    <Sketch
      windowResized={resize}
      setup={setup}
      draw={draw}
      preload={preload}
    />
  );
};

export default World;
