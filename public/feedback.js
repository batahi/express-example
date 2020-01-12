import { styler, value, listen, pointer, spring } from "popmotion";

document
  .querySelector(".request-complement")
  .addEventListener("click", function() {
    fetch("/complement")
      .then(function(res) {
        return res.json();
      })
      .then(function(data) {
        document.querySelector(".complement").innerText = data.complement;
      })
      .catch(function(err) {
        console.error(err);
      });
  });

  document
  .querySelector(".request-insult")
  .addEventListener("click", function() {
    fetch("/insult")
      .then(function(res) {
        return res.json();
      })
      .then(function(data) {
        document.querySelector(".insult").innerText = data.complement;
      })
      .catch(function(err) {
        console.error(err);
      });
  });