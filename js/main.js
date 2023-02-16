const btn_collapse = document.querySelector("#btn_collapse");
const nav = document.querySelector(".nav-mobile");

console.log(nav);

function toggleDisplay(navBar) {
    if (nav.style.display === 'none') {
      nav.style.display = 'block';
    } else {
      nav.style.display = 'none';
    }
  }

btn_collapse.addEventListener("click", ()=>{
    
    toggleDisplay(nav);
});


