var next_btn_img = $(".imghoverright");
var pre_btn_img = $(".imghoverleft");

var next_btn = $(".carousel-control-next-icon")
var pre_btn = $(".carousel-control-prev-icon")

next_btn.on("mouseenter",mouseonr).on("mouseleave",mouseoffr);

function mouseonr(){
    next_btn_img.css("background-image","url(images/caret-right-fill.svg)")
}

function mouseoffr(){
    next_btn_img.css("background-image","url(images/caret-right.svg.svg)")
}


pre_btn.on("mouseenter",mouseonl).on("mouseleave",mouseoffl);

function mouseonl(){
    pre_btn_img.css("background-image","url(images/caret-left-fill.svg)")
}

function mouseoffl(){
    pre_btn_img.css("background-image","url(images/caret-left.svg.svg)")
}

function swichslide() {
    next_btn_img.element.click();
 }

 setInterval(swichslide, 5000);