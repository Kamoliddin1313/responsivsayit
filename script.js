let nextPage = document.querySelectorAll("#nextPage");
let prevPageImg = document.querySelector("#prevPageImg");
let nextPageImg = document.querySelector("#nextPageImg");
// prevPageImg.addEventListener("click", (ls) => {
//   console.log(nextPage);
// });

// Btns
const openBtn=document.querySelector(".openBtn")
const nav2=document.querySelector(".nav2")
openBtn.addEventListener("click",()=>{
  nav2.classList.toggle(".activ1")
  console.log(nav2);

})

console.log(openBtn);
// let i = 0;
// nextPageImg.addEventListener("click", () => {
//   nextPage[0].style.display = "none";
//   i++;
//   if (i >= nextPage.length) {
//     i = 0;
//   }
//   nextPage[i].style.display = "block";
//   console.log(nextPage);
// });
