const paletteBright = {
  black: "#444b6a",
  blue: "#7da6ff",
  cyan: "#0db9d7",
  green: "#b9f27c",
  magenta: "#bb9af7",
  red: "#ff7a93",
  white: "#acb0d0",
  yellow: "#ff9e64",
};
const paletteNormal = {
  black: "#32344a",
  blue: "#7aa2f7",
  cyan: "#449dab",
  green: "#9ece6a",
  magenta: "#ad8ee6",
  red: "#f7768e",
  white: "#787c99",
  yellow: "#e0af68",
};
export function appendPalette() {
  const paletteContainer = document.querySelector(".palette");
  const colorNormal = document.createElement("div");
  colorNormal.className = "normal-color-palette";
  const colorBright = document.createElement("div");
  colorBright.className = "bright-color-palette";
  Object.keys(paletteNormal).forEach((key) => {
    const domColorNormal = document.createElement("div");
    const domColorBright = document.createElement("div");

    domColorNormal.className = "color";
    domColorBright.className = "color";

    domColorNormal.style.backgroundColor = paletteNormal[key];
    domColorBright.style.backgroundColor = paletteBright[key];

    colorNormal.appendChild(domColorNormal);
    colorBright.appendChild(domColorBright);
  });

  paletteContainer.appendChild(colorNormal);
  paletteContainer.appendChild(colorBright);
}
