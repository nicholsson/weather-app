export class NewLine {
  constructor(content, command = false, prefix = "") {
    this.content = content;
    this.command = command;
    this.prefix = prefix;
  }
  line() {
    const terminal = document.querySelector(".terminal");
    const inputLine = document.querySelector(".input-line");
    const line = document.createElement("div");
    line.setAttribute("class", this.command ? "command-line" : "line");
    if (this.prefix) {
      line.innerHTML = `<strong>*${this.prefix} </strong>`;
    }
    line.innerHTML += this.content;
    terminal.insertBefore(line, inputLine);
  }
}
