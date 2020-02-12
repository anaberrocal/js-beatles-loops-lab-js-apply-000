// add solution here
function theBeatlesPlay() {
  const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
  const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
  let newArr = [];
for(let i = 0; i < 4; i ++) {

    newArr.push(`${musicians[i]} plays ${instruments[i]}`);

   }

return newArr;

};

function johnLennonFacts(facts) {

  const facts = [
    "He was the last Beatle to learn to drive",
    "He was never a vegetarian",
    "He was a choir boy and boy scout",
    "He hated the sound of his own voice"
  ];

  let newArr = [];

  while (i in facts >= 0 ) {
    newArr.push(`${facts[i]}!!!`)
    }

  return newArr;

};
