const paletteBright = {
  black: "#414868",
  blue: "#7aa2f7",
  cyan: "#7dcfff",
  green: "#9ece6a",
  magenta: "#bb9af7",
  red: "#f7768e",
  white: "#c0caf5",
  yellow: "#e0af68",
};
const paletteNormal = {
  black: "#414868",
  blue: "#7aa2f7",
  cyan: "#7dcfff",
  green: "#9ece6a",
  magenta: "#bb9af7",
  red: "#f7768e",
  white: "#c0caf5",
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
