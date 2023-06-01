// Light/Dark Theme button toggle
function changeTheme() {
    body.classList.toggle('light');
};

















// // Language Change Button
// function changeLang() {
//   body.classList.toggle('lang');
// };

// // or

// function toggleLang(language) {
//   let description = document.getElementById("description");
//   if (language === "Portuguese") {
//     description.innerHTML = "Show Portuguese Text";
//   }
//   else {
//     description.innerHTML = "Show English Text";
//   }
// }

// //  Language Change button's scramble animation
// window.onload = function() {
//   const links = document.querySelectorAll('h1', 'h2', 'h3', 'p');
//   const solveMilliseconds = 900;
//   const characterSelectionMillisenconds = 80;
//   const delayMilliseconds = 250;
//   const characters = [...'ABCÇDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz1234567890*#@/*!%&^"ÄÖßকুঊকূকঁকখগঘঙঢণতথদধনপফཀ ཁ ག ངཙཚཛཝཞАБВГДНОПРСТУФХЦЧШΑΒΓΛΜΝΞΟΠΡΣΤΥΦΧΨΩαβγδεζηθικλμνξοπρあいうえおគឃងចឆជឈញដឋឌឍⴳⴴⴵⴶⴷⴸⴹⴺⴻⴼⴽⴾⴿⵀⵁⵂⵃⵄⵅⵆⵇⵈⵉⵊⵋⵌⵍⵎⵐⵑⵒⵓⵔⵕⵖⵗⵘⵙⵚⵛⵜⵝⵞⵠⵡⵢⵣⵤⵥ'];

//   const randomArrayElement = (arr) => {
//     return arr[(arr.length * Math.random()) | 0];
//   };

//   links.forEach((element) => {
//     element.addEventListener("mouseenter", (e) => {
//       const element = e.target;
//       scrambleText(element);
//       e.preventDefault();
//     });
//   });

//   function scrambleText(element) {
//     if (element.classList.contains("active") == false) {
//       let delay = 0;
//       const elementText = element.innerText;
//       const elementCharacters = [...elementText];
//       const lockMilliseconds = delayMilliseconds * elementCharacters.length + solveMilliseconds;

//       element.classList.add("active");

//       setTimeout(() => {
//         element.classList.remove("active");
//       }, lockMilliseconds);

//       elementCharacters.forEach((character, index) => {
//         setTimeout(() => {
//           let intervalId = setInterval(() => {
//             const randomCharacter = randomArrayElement(characters);
//             element.innerText = replaceCharacter(
//               element.innerText,
//               index,
//               randomCharacter
//             );

//             setTimeout(() => {
//               clearInterval(intervalId);
//               element.innerText = replaceCharacter(
//                 element.innerText,
//                 index,
//                 elementCharacters[index]
//               );
//             }, solveMilliseconds);
//           }, characterSelectionMillisenconds);
//         }, delay === 0 ? (delay += 1) : (delay += delayMilliseconds));
//       });
//     }
//   }

//   function replaceCharacter(str, index, chr) {
//     return `${str.substring(0, index)}${chr}${str.substring(index + 1)}`;
//   }
// };

