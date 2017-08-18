document.addEventListener("DOMContentLoaded", function() {
    if (mobilecheck()) {
        document.getElementsByClassName('content').className += " mobile";
    }
});