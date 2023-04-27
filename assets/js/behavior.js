// 配列内の値の順をランダムにする関数
function arrShuffle(array) {
  let randomArray = array.sort(function () {
    return Math.random() - 0.5
  })
  return randomArray
}
// 要素を入力したら子要素にランダムな順番になるよう属性を付与する関数
function randomLayout(elem) {
  let list = Array.from(elem.children)
  let listOrder = [...Array(list.length)].map((_, i) => i + 1)
  let randomLi = arrShuffle(listOrder)
  list.forEach(function (li, idx) {
    return li.setAttribute("style", `order:${randomLi[idx]}`)
  })
}
// ターゲットの親要素をインスタンス化
const container = document.querySelector(".grid-container")
// ホバーした時
container.addEventListener("mouseenter", function () {
  randomLayout(this)
})
// ホバーをはずすた時
container.addEventListener("mouseleave", function () {
  randomLayout(this)
})