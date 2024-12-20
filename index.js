/*
ALGORITHM: 

make array of all letters
compare to whats pushed in included array
return array of letters that do not match up

push whats not in there to an array
only sort array as last step
*/

// const solution = (inputStr) => {
//   const alpha = [
//     "a",
//     "b",
//     "c",
//     "d",
//     "e",
//     "f",
//     "g",
//     "h",
//     "i",
//     "j",
//     "k",
//     "l",
//     "m",
//     "n",
//     "o",
//     "p",
//     "q",
//     "r",
//     "s",
//     "t",
//     "u",
//     "v",
//     "w",
//     "x",
//     "y",
//     "z",
//   ];
//   const stringArray = inputStr.split("");
//   const alphaArray = [];
//   for (let i = 0; i < alpha.length; i++) {
//     if (!stringArray.includes(alpha[i])) {
//       alphaArray.push(alpha[i]);
//     }
//   }
//   return alphaArray;
// };

const solution = (inputStr) => {
  const alpha = "abcdefghijklmnopqrstuvwxyz";
  const alphaArray = [];
  for (let i = 0; i < alpha.length; i++) {
    // O(1)
    if (!inputStr.includes(alpha[i])) {
      // O(n)
      alphaArray.push(alpha[i]); // O(1)
    }
  }
  return alphaArray;
};

//Time Complexity: O(n) !!! yay!!!
//Space Complexity: O(1) i think?
