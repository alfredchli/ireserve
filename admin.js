$(document).ready(function () {
    $("#login_submit").bind("click", function () {
        if ($("input[name=username]").val() == "" || $("input[name=password]").val() == "") {
            alert("Username/password must not be empty!");
            //return false;
        }
        else {
            $("#login-pane").hide();
            $("#admin-pane").show();
            //$("form[class=login_form]").submit();
            //return false;
        }
    });

    $('.message a').click(function () {
        $('form').animate({ height: "toggle", opacity: "toggle" }, "slow");
    });
});

function onLoginSubmit() {
	alert(document.getElementByName('username').text);
    document.getElementById('login-pane').style = 'display:none';
	document.getElementById('admin-pane').style = 'display:block';
    return false;
}