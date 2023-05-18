// const container = document.getElementById("container")
// const ul = container.firstElementChild
// console.log(ul.children)
// Array.from(ul.children).forEach(element => {
//   console.log(element)
// });

const container = document.getElementById("container")
const uls = container.children
// uls === HTMLCollection
console.log(uls)
Array.from(uls).forEach(ul => {
  Array.from(ul.children).forEach(li => {
    console.log(li)
  });
});