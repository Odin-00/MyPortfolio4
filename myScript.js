let clickCount = 0;
let price = 125.00;
let addToCartBtn = document.querySelector(".add-btn");
let ribbonDisplay = document.querySelector(".ribbon");
let cartBtn = document.querySelector(".nav-cart");
let emptyCart = document.querySelector(".empty-cart");
var checkoutElement = document.querySelector('.checkout');



document.getElementById("plus").addEventListener("click", function () {
    clickCount++;
    document.getElementById("count").innerHTML = clickCount;
    
})

document.getElementById("minus").addEventListener("click", function () {
    clickCount--;
    if (clickCount >= 0) {
        document.getElementById("count").innerHTML = clickCount;
    }
    else {
        clickCount = 0;

        return
    }
})


addToCartBtn.addEventListener("click", function () {
    ribbonDisplay.style.display = 'flex';
    document.querySelector(".ribbon").innerHTML = clickCount;
    ribbonDisplay.classList.remove("wobble");
    void ribbonDisplay.offsetWidth;
    ribbonDisplay.classList.add("wobble");
    var together = clickCount * price;
    document.querySelector(".final-price").innerHTML = 'Fall Limited Edition Sneakers <br> $ ' + price + '.00 &#215;' + clickCount + '<span class="text-bold"> $' + together + '.00</span>'

    if( together === 0){
        document.querySelector(".bottom-checkout").style.display = "none";
        emptyCart.style.display = "flex"; 
    }
   if (clickCount > 0){
        document.querySelector(".bottom-checkout").style.display = "flex"; 
        emptyCart.style.display = "none"; 
        document.getElementById("delete").addEventListener("click", function() {
            document.querySelector(".ribbon").innerHTML = '0';
            document.querySelector(".bottom-checkout").style.display = "none";
        emptyCart.style.display = "flex"; 
        })
    }
return
});

    
    checkoutElement.style.display = "none";

    cartBtn.addEventListener("click", function () {
        if (checkoutElement.style.display === "none")  {
            checkoutElement.style.display = "flex"; // Element weergeven
        } else {
            checkoutElement.style.display = "none"; // Element verbergen
        }
    })

    function plusSlides(n){
        if (n == 2){
            displayImage.className = "thumbnail-display1";
        }
    }

    let thumbnailBtn1 = document.getElementById("img-btm1");
    let thumbnailBtn2 = document.getElementById("img-btm2");
    let thumbnailBtn3 = document.getElementById("img-btm3");
    let thumbnailBtn4 = document.getElementById("img-btm4");
    let displayImage = document.getElementById("display");
    displayImage.className = "thumbnail-display1";
    thumbnailBtn1.addEventListener("click", function () {
        displayImage.className = "thumbnail-display1";
    })
    thumbnailBtn2.addEventListener("click", function () {
        displayImage.className = "thumbnail-display2";
    })
    thumbnailBtn3.addEventListener("click", function () {
        displayImage.className = "thumbnail-display3";
    })
    thumbnailBtn4.addEventListener("click", function () {
        displayImage.className = "thumbnail-display4";
    })
    



    var previousBtn = document.getElementById('previous');
    var nextBtn = document.getElementById('next');
    var slideIndex = 1;

    previousBtn.addEventListener('click', function() {
        slideIndex--;
        if (slideIndex < 1) {
          slideIndex = 4;
        }
        updateSlide();
      });

      nextBtn.addEventListener('click', function() {
        slideIndex++;
        if (slideIndex > 4) {
          slideIndex = 1;
        }
        updateSlide();
      });
      function updateSlide() {
        displayImage.className = 'slide slide' + slideIndex;
      }
