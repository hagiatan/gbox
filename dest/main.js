// home
$(document).ready(function () {
  // button menu
  $(document).on("click", ".btnmenu", function () {
    $(".btnmenu").toggleClass("clicked");
    $(this).next().toggleClass("active");
  });

  //   product list
  $(document).on(
    "click",
    ".product .product__menu .product__menu__list .product__menu__item .text",
    function () {
      $(
        ".product .product__menu .product__menu__list .product__menu__item .text"
      ).removeClass("active");
      //   $(this).addClass("active");
      //   let index = $(this).index();
      //   let product__list = $(".product .product__list");
      //   let item_product = product__list.eq(index);
      //   $(".product .product__list").removeClass("active");
      //   item_product.addClass("active");
    }
  );
});

$(window).on("load", function () {
  $(".svg").svgToInline();
});
