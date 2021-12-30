const lines = gets().split("\n");
const n = parseInt(lines.shift());

if (n >= 1 && n <= 34) {
  const text =
    "Life is not a problem to be solved, but a reality to be experienced.";
  const subSring = (end) => text.substring(0, end);
  console.log(subSring(n).toUpperCase());
}
