var next_btn = $(".imghoverright");
var pre_btn = $(".imghoverleft");

next_btn.on("mouseenter",mouseonr).on("mouseleave",mouseoffr);

function mouseonr(){
    next_btn.css("background-image","url(images/caret-right-fill.svg)")
}

function mouseoffr(){
    next_btn.css("background-image","url(images/caret-right.svg.svg)")
}


pre_btn.on("mouseenter",mouseonl).on("mouseleave",mouseoffl);

function mouseonl(){
    pre_btn.css("background-image","url(images/caret-left-fill.svg)")
}

function mouseoffl(){
    pre_btn.css("background-image","url(images/caret-left.svg.svg)")
}
