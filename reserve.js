$(document).ready(function () {
    $("#reserve_submit").bind("click", function () {
        if ($("select[name=rStore]").val() == "0") {
            alert("Please select a store to pick up!");
        }
        else if ($("input[name=fname]").val() == "" || $("input[name=lname]").val() == "" || $("input[name=remail]").val() == "" || $("input[name=rphone]").val() == "") {
            alert("Your Contact must be filled!");
            //return false;
        }
        else {
            //$("#login-pane").hide();
            //$("#admin-pane").show();
            //$("form[class=login_form]").submit();
            //return false;
        }
    });

    $('.message a').click(function () {
        $('form').animate({ height: "toggle", opacity: "toggle" }, "slow");
    });
});