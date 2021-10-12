const input1 = ["2", "aA Bb", "aa bb"];
const input2 = [
  "3",
  "AoQeaeAADeNtaehchec DguMksuuosoMkNeN",
  "CouLdaaMrde aQearNoo",
  "nWOVQJKKabhiBrPnYvPAwByBmtCPtlrBEovbBMbPtaxraYIIzA PyzAniqSbUBQLxGKacruKWYDIJzxJCKUBNteUdXDoplmnOIYo",
];
let position = 0;
const gets = () => input2[position++];

const size = parseInt(gets());

const union = (string1 = "", string2 = "", size = 0, leftover) => {
  let result = "";
  for (let c2 = 0; c2 < size; c2++) {
    result += string1[c2] + string2[c2];
  }
  if (leftover) {
    result += leftover;
  }
  return result;
};

for (let c = 0; c < size; c++) {
  const line = String(gets()).split(" ");
  let result = "";
  if (line[0].length === line[1].length) {
    // para palavras com mesmo tamanho
    result = union(line[0], line[1], line[0].length, undefined);
  } else if (line[0].length < line[1].length) {
    // se a primeira palavra for maior
    const leftover = line[1].slice(line[0].length, line[1].length);
    result = union(line[0], line[1], line[0].length, leftover);
  } else if (line[0].length > line[1].length) {
    // se a segunda palavra for maior
    const leftover = line[0].slice(line[1].length, line[0].length);
    result = union(line[0], line[1], line[1].length, leftover);
  }
  console.log(result);
}
