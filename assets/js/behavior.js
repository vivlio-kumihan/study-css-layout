let heads = document.querySelectorAll("h2")
for (headingTwo of heads) {
  let lastChar =  headingTwo.textContent.slice(-1)
  let preText =  headingTwo.textContent.slice(0, -1)
  headingTwo.innerHTML = `${ preText }<span class="remove-letter-spacing">${ lastChar }</span>`
}

const dts = document.querySelectorAll("dt")
for (let dt of dts) {
  dt.addEventListener("mouseenter", function() {
    dt.classList.add("active")
  })
  dt.addEventListener("mouseleave", function() {
    dt.classList.remove("active")
  })
}

// if (dt.classList.contains("active")) {
//   dt.classList.remove("active")
// } else {
//   dt.classList.add("active")
// }