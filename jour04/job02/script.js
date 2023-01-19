let json = "string.json";

function jsonValueKey(json, key) {
  fetch(json)
    .then((response) => response.json())
    .then((json) => console.log(json[key]));
}
