// // 配列内の値の順をランダムにする関数
// function arrShuffle(array) {
//   // array.length - 1 => 最後の値のインデックス番号
//   for (let i = (array.length - 1); 0 < i; i--) {
//     // 0〜(i+1)未満の範囲でランダムな値を取得
//     let r = Math.floor(Math.random() * (i + 1));
//     let tmp = array[i];
//     array[i] = array[r];
//     array[r] = tmp;
//   }
//   return array;
// }

// // ターゲットとなる全てのリストを収集する。
// const container = document.querySelector(".grid-container")
// let lists = container.children

// container.addEventListener("mouseenter", function() {
//   // ランダムな順番を格納した配列を生成する。
//   let nums = []
//   for (let i = 1; i < lists.length + 1; i++) {
//     nums.push(i)
//   }
//   let ramdomNums = arrShuffle(nums)
  
//   // リストを最初から呼び出して、スタイルにランダムな数字を入れていく。
//   for (let i = 0; i < lists.length; i++) {
//     lists[i].setAttribute("style", `order:${ ramdomNums[i] }`)
//   }
// })

// container.addEventListener("mouseleave", function() {
//   // ランダムな順番を格納した配列を生成する。
//   let nums = []
//   for (let i = 1; i < lists.length + 1; i++) {
//     nums.push(i)
//   }
//   let ramdomNums = arrShuffle(nums)
  
//   // リストを最初から呼び出して、スタイルにランダムな数字を入れていく。
//   for (let i = 0; i < lists.length; i++) {
//     lists[i].setAttribute("style", `order:${ ramdomNums[i] }`)
//   }
// })