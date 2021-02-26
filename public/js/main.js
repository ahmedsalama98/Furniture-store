

$(document).ready(function () {
// navbar search show
$("body").css({
    paddingTop:`${$(".nav-bar").innerHeight()}px`
})
$(".nav-bar .search .toggle").on("click", function(){

 $(this).siblings().filter(".search-drop-down").fadeToggle(600)
 
})
$(".nav-bar .search .search-drop-down .close").on("click", function(){
    $(this).parent().fadeOut()
})


// navbardropdown tooggl
$(" .nav-item .dropdown-toggle").on("click" ,function(e){
    e.preventDefault()
    $(".drop-down").not($(this).siblings().filter(".drop-down")).hide();
    $(".nav-item .dropdown-toggle ").not($(this)).children("i").removeClass("fa-chevron-up");
    $(".nav-item .dropdown-toggle ").not($(this)).children("i").addClass("fa-chevron-down");
    $(this).children("i").toggleClass("fa-chevron-down fa-chevron-up");
    $(this).siblings().filter(".drop-down").slideToggle()

})
$(".nav-bar .nav-pars i").on("click", function(){
    $(".nav-bar .navbar-nav").slideToggle()
})

//navbar login show
$(".nav-bar .content .info .login button").on("click", function(){
    $(this).siblings().filter(".content").fadeToggle()
})
///////////////


//slider
let slideritems=document.querySelectorAll(".slider .slider-item"),
    activeiteme=document.querySelectorAll(".slider .slider-item.show");
//dynamic indicatots items
slideritems.forEach((item,index)=>{
        let span =document.createElement("span");
        span.dataset.index=index;
        if(index ===0){
            span.classList.add("active");
        }
    document.querySelector(".slider-section .indicators").appendChild(span);
})
//dynamic indicatots items
$(".slider-section .controls .next").on("click",function(){
let theactiveitem=$(".slider-section .slider .show");
if(!theactiveitem.is(":last-child")){
    theactiveitem.removeClass("show").next().addClass("show");
    $(".slider-section .indicators .active").removeClass("active").next().addClass("active")
}else{
    theactiveitem.removeClass("show").siblings().eq(0).addClass("show")
    $(".slider-section .indicators .active").removeClass("active").siblings().eq(0).addClass("active")
}

})
$(".slider-section .controls .prev").on("click",function(){
    let theactiveitem=$(".slider-section .slider .show");
    
    if(!theactiveitem.is(":first-child")){
        theactiveitem.removeClass("show").prev().addClass("show")
        $(".slider-section .indicators .active").removeClass("active").prev().addClass("active")

    }else{
        theactiveitem.removeClass("show").siblings().filter(":last-child").addClass("show");
        $(".slider-section .indicators .active").removeClass("active").siblings().filter(":last-child").addClass("active")
    } 
    })

    $(".slider-section .indicators").on("click","span",function(){
        $(this).addClass("active").siblings().removeClass("active")
    $(".slider-section .slider .slider-item").removeClass("show");
    $(".slider-section .slider .slider-item").eq($(this).data("index")).addClass("show");
    
    })
 let sliderinerval=setInterval(function(){
    $(".slider-section .controls .next").click()
},9000)
//slider

//scroll to top//
let scrolltotopbtn= $(".scroll-top")
window.addEventListener("scroll", function(){

if($(window).scrollTop()> 400){
    scrolltotopbtn.fadeIn()
}else{
    scrolltotopbtn.fadeOut()
}

})
scrolltotopbtn.click(function(){
   $("html , body").animate({
       scrollTop:"0"
   })
})

//scroll to top//

//log in page//
$(".log-in-page form  .show-pass").click(function(){

    $(this).children().filter("i").toggleClass("fa-eye fa-eye-slash");
    if(!$(this).children().filter("i").hasClass("fa-eye")){
        $(".log-in-page form #password").attr({type:"text"})
    }
    else{
        $(".log-in-page form #password").attr({type:"password"})  
    }
})

//log in page//
//shuffle products//

$(".product-big-section .controls .tab").on("click",function(){
$(this).addClass("active").siblings().removeClass("active");
if($(this).data("show")==="all"){
    $(".product-big-section .products .product").fadeIn()
}else{
    $(".product-big-section .products .product").fadeOut(500)
    $(`.product-big-section .products .product.${$(this).data("show")}`).fadeIn(600)
}

})


//shuffle products//
});