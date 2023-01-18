// document.addEventListener("DOMContentLoaded", () => {
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function tri(numbers, order) {
  if (order === "asc") {
    numbers.sort();

    // numbers.sort((a, b) => a - b);
    console.log(numbers);
  } else {
    numbers.reverse();
    console.log(numbers);
  }
}
console.log(tri(numbers, "asc"));
console.log(tri(numbers, "desc"));

// });
