// var slider = document.getElementById("slider");
// var slider_num = document.getElementById("slider_output");

// slider.oninput = function(){
//     checkSlider();
// };
// function checkSlider() {
//     var slider_val = slider.val;
//     slider_num.innerHTML = slider_val;
//     console.log(slider_val);
// };

function() {
    document.getElementById("slider_output").innerHTML = document.getElementById("slider").value;
};