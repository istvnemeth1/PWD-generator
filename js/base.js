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

/* Shows the value of the slider */
let pwdLength = 8;
function updateOutput(val) {
    document.querySelector("#slider_output span").innerHTML = val;
    pwdLength = val;
};

// Helper functions
function random(val) {
    return Math.floor(Math.random()*val);
};

// Password Generation
function generate() {
    var password = "";
    document.getElementById('textPassword').innerHTML = '';
    const abc = "abcdefghijklmnopqrstuvwxyz";
    const spec = "!£$%^&*~@:?><_+=-/.,#';";
    const num = "1234567890";
    const l_case = document.getElementById("l_case");
    const u_case = document.getElementById("u_case");
    const numbers = document.getElementById("numbers");
    const s_char = document.getElementById("s_char");
    var cbs = '';

    if(l_case.checked || u_case.checked || numbers.checked || s_char.checked) {
        l_case.checked ? cbs += abc:false;
        u_case.checked ? cbs += abc.toUpperCase():false;
        numbers.checked ? cbs += num:false;
        s_char.checked ? cbs += spec:false;

        pwdLength = Number(pwdLength);
        var i;
        for (i = 0; i < pwdLength; i++) {
            password += cbs[random(cbs.length)];
        }
    } else {
        alert("you need to check a checkbox.");
    }
    document.getElementById('textPassword').innerHTML = password;
    console.log(password.length);
}

