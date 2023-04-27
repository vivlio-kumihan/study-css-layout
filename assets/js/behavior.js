let paragraphs = Array.from(document.querySelectorAll("dd.item"))

paragraphs.forEach((p, idx) => {
  let para = p.textContent
  if (para.length >= 51) {
    p.innerHTML = `${idx + 1}. ${para.slice(0, 50)}…`
  }
})