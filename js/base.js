/* Shows the value of the slider */
function updateOutput(val) {
    document.querySelector("#slider_output span").innerHTML = val;
};

/* Copy button */
function copyButton(objId) {
    deSelect();
    if (document.selection) {
        var range = document.body.createTextRange();
        range.moveToElementText(document.getElementById(objId));
        range.select();
    }
    else if (window.getSelection) {
        var range = document.createRange();
        range.selectNode(document.getElementById(objId));
        window.getSelection().addRange(range);
    }
    // objId.setSelectionRange(0, 99999); /* For mobile devices */
    document.execCommand("copy");
    var pwd = document.getElementById(objId).innerHTML;
    alert("Copied the text: " + pwd);

};
function deSelect() {
    if (document.selection)
        document.selection.empty();
    else if (window.getSelection)
        window.getSelection().removeAllRanges();
};