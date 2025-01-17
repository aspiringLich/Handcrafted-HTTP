const console = document.querySelector("#console");

document.querySelector("#check").addEventListener("click", () => {
  window.console.log(document.querySelector("#to").innerHTML);
})

function writeConsole(text) {
  return new Promise((resolve, _reject) => {
    console.innerHTML = `${console.innerHTML.slice(
      0,
      console.innerHTML.length - 28
    )}${text.replace("\n", "<br>")}<span class="blink">█</span>`;
    resolve();
  });
}

dragula([document.querySelector("#from"), document.querySelector("#to")], {
  direction: 'horizontal'
});
