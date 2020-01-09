function saveOptions(e) {
  e.preventDefault();
  browser.storage.sync.set({
    ytdlformat: document.querySelector("#ytdlformat").value,
  });
}

function restoreOptions() {

  function setCurrentChoice(result) {
    document.querySelector("#ytdlformat").value = result.ytdlformat || "";
  }

  function onError(error) {
    console.log(`Error: ${error}`);
  }

  var getting = browser.storage.sync.get(["ytdlformat"]);
  getting.then(setCurrentChoice, onError);
}

document.addEventListener("DOMContentLoaded", restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);
