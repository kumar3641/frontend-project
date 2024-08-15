const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');
const navbar = document.getElementById('navbar');


toggle.addEventListener('click',function(){
    this.classList.toggle("bi-moon");
    if(this.classList.toggle("bi-brightness-high-fill")){
    navbar.style.background ="white"
    navbar.style.color ="black"
    navbar.style.transition='1s'
    }
    else{
    navbar.style.background ="black";
    navbar.style.color ="white"
    navbar.style.transition='1s'
    }
})

// Coupon

const container = document.querySelector("#container");
const coupon = document.querySelector(".coupon");
const closeBtn = document.getElementById("close");

window.onload = function() {
    var coupon = document.querySelector('.coupon');
    coupon.classList.add("active");
    container.style.opacity ="0.4"
  };

  closeBtn.addEventListener("click", () => {
    coupon.classList.remove("active");
    container.style.opacity ="1"
  });
  