const PROMPTS = {
  default: {
    name: "Default",
    prompt:
      "You are a ai that summuraizes text. Responses should be as short but detailed as possible. Only list the most important facts about the article. Focus on the main ideas, key details, and pertinent information from the text.Do not write any duplicate information",
  },
};
function getPrompt(e = "default") {
  return e in PROMPTS
    ? PROMPTS[e].prompt
    : { error: "No prompt found for name: " + e };
}
const defaultPrompt = getPrompt(),
  defaultAPIKey = "";
function show_save_status() {
  var e = document.getElementById("status");
  (e.textContent = "Options saved."),
    setTimeout(function () {
      e.textContent = "";
    }, 750);
}
function save_options() {
  var e = document.getElementById("promptSelect").value,
    t = document.getElementById("prompt").value,
    o = document.getElementById("apiKey").value;
  chrome.storage.sync.set(
    { prompt: t, apiKey: o, promptSelect: e },
    show_save_status
  );
}
function restore_options() {
  chrome.storage.sync.set({ prompt: defaultPrompt, apiKey: "" }, function () {
    (document.getElementById("prompt").value = defaultPrompt),
      (document.getElementById("apiKey").value = ""),
      show_save_status();
  });
}
chrome.storage.sync.get("prompt", function (e) {
  e.prompt
    ? (document.getElementById("prompt").value = e.prompt)
    : (document.getElementById("prompt").value = defaultPrompt);
}),
  chrome.storage.sync.get("promptSelect", function (e) {
    (document.getElementById("promptSelect").innerHTML = ""),
      Object.keys(PROMPTS).forEach((t) => {
        let o = document.createElement("option");
        (o.value = t),
          (o.text = PROMPTS[t].name),
          e.promptSelect === t &&
            ((o.selected = !0),
            (document.getElementById("prompt").value = getPrompt(t))),
          document.getElementById("promptSelect").appendChild(o);
      });
    let t = document.createElement("option");
    (t.value = "custom"),
      (t.text = "Custom"),
      "custom" === e.promptSelect && (t.selected = !0),
      document.getElementById("promptSelect").appendChild(t);
  }),
  chrome.storage.sync.get("apiKey", function (e) {
    e.apiKey
      ? (document.getElementById("apiKey").value = e.apiKey)
      : (document.getElementById("apiKey").value = "");
  }),
  chrome.storage.sync.get({ prompt: defaultPrompt }, function (e) {
    document.getElementById("prompt").value = e.prompt;
  }),
  chrome.storage.sync.get({ apiKey: "" }, function (e) {
    document.getElementById("apiKey").value = e.apiKey;
  }),
  document
    .getElementById("promptSelect")
    .addEventListener("change", function () {
      var e = document.getElementById("promptSelect").value;
      "custom" !== e &&
        (document.getElementById("prompt").value = getPrompt(e));
    }),
  document.getElementById("prompt").addEventListener("input", function () {
    document.getElementById("promptSelect").value = "custom";
  }),
  document.getElementById("saveButton").addEventListener("click", save_options),
  document
    .getElementById("resetButton")
    .addEventListener("click", restore_options);
