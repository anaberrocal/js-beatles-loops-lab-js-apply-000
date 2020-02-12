// add solution here
function theBeatlesPlay() {
  const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
  const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
  let newArr = [];
for(let i = 0; i < 5; i ++) {
  //for(let i = 0; i < 5; i ++){

    newArr.push(`${musicians[i]} plays ${instruments[i]}`);
   }
  //}

return newArr;
};
