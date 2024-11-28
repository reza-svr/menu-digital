
function ResponsiveHeader() {
  $('.header-responsive .btn-toggle-side-navigation').on('click', function(event) {
      $(this).siblings('.side-navigation').addClass('toggle');
      $(this).siblings('.overlay-side-navigation').fadeIn(200);
  });
  $('.header-responsive .side-navigation ul li > a').on('click', function(event) {
      event.preventDefault();
      $(this).toggleClass('active');
      $(this).siblings('ul').slideToggle(100);
  });
  $('.header-responsive .overlay-side-navigation').on('click', function(event) {
      $(this).siblings('.side-navigation').removeClass('toggle');
      $(this).fadeOut(200);
  });
}
ResponsiveHeader();

$("#coffea-category-food").owlCarousel({

    rtl: true,
    loop: true,
    margin: 0,
    nav: true,
    responsive: {
      // در حالت رسپانسیو:
      0: {
        //تعداد آیتم های قابل نمایش در نمایشگرهای کوچک
        items: 4,
      },
      600: {
        //تعداد آیتم های قابل نمایش در نمایشگرهای بین 600 تا 1000 پیکسل
        items: 5,
      },
      1000: {
        //تعداد آیتم های قابل نمایش در نمایشگرهای بالای 1000 پیکسل
        items: 6,
      },
    },
  });



  (function () {
    const quantityContainer = document.querySelector(".quantity");
    const minusBtn = quantityContainer.querySelector(".minus");
    const plusBtn = quantityContainer.querySelector(".plus");
    const inputBox = quantityContainer.querySelector(".input-box");
  
    updateButtonStates();
  
    quantityContainer.addEventListener("click", handleButtonClick);
    inputBox.addEventListener("input", handleQuantityChange);
  
    function updateButtonStates() {
      const value = parseInt(inputBox.value);
      minusBtn.disabled = value <= 1;
      plusBtn.disabled = value >= parseInt(inputBox.max);
    }
  
    function handleButtonClick(event) {
      if (event.target.classList.contains("minus")) {
        decreaseValue();
      } else if (event.target.classList.contains("plus")) {
        increaseValue();
      }
    }
  
    function decreaseValue() {
      let value = parseInt(inputBox.value);
      value = isNaN(value) ? 1 : Math.max(value - 1, 1);
      inputBox.value = value;
      updateButtonStates();
      handleQuantityChange();
    }
  
    function increaseValue() {
      let value = parseInt(inputBox.value);
      value = isNaN(value) ? 1 : Math.min(value + 1, parseInt(inputBox.max));
      inputBox.value = value;
      updateButtonStates();
      handleQuantityChange();
    }
  
    function handleQuantityChange() {
      let value = parseInt(inputBox.value);
      value = isNaN(value) ? 1 : value;
  
      // Execute your code here based on the updated quantity value
      console.log("Quantity changed:", value);
    }
  })();
  