document.addEventListener("DOMContentLoaded", function() {
    if (!mobilecheck()) {
        document.getElementsByClassName('content')[0].className.replace(" mobile", "");
    }
});