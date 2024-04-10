var next_btn_img = $(".imghoverright");
var pre_btn_img = $(".imghoverleft");

var next_btn = $(".carousel-control-next-icon")
var pre_btn = $(".carousel-control-prev-icon")
const btn = $(".submit_btn")


next_btn.on("mouseenter",mouseonr).on("mouseleave",mouseoffr);

function mouseonr(){
    next_btn_img.css("background-image","url(images/caret-right-fill.svg)")
}

function mouseoffr(){
    next_btn_img.css("background-image","url(images/caret-right.svg)")
}


pre_btn.on("mouseenter",mouseonl).on("mouseleave",mouseoffl);

function mouseonl(){
    pre_btn_img.css("background-image","url(images/caret-left-fill.svg)")
}

function mouseoffl(){
    pre_btn_img.css("background-image","url(images/caret-left.svg)")
}


var onSuccess = function(response) {
    alert("Success!");
    console.log(response);
  };
  
var onError = function(err) {
    alert("Error!");
    console.error(err);
  };
  
function sendEmail(endpointUrl, data, onSuccess, onError) {
    $.ajax({
        type: "POST",
        url: endpointUrl,
        data: JSON.stringify(data),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: onSuccess,
        // error: function(xhr, status) {
        //   if (typeof this.statusCode[xhr.status] !== 'undefined') {
        //     return false;
        //   }
  
        //   onError(err);
        // },
        statusCode: {
          // Endpoint thinks that it's likely a spam/bot request, you need to change "spam protection mode" to "never" in HeroTofu forms
          422: function(response) {
            alert("Cannot send request, are you robot?");
          },
        }
      });
}


btn.click( sendEmail("https://herotofu.com/start", {
    example_user: "user@example.com",
    example_data: new Date().toISOString(),
  }, onSuccess, onError));