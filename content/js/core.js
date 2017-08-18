document.addEventListener("DOMContentLoaded", function() {
    if (mobilecheck()) {
        document.getElementsByClassName('content').classList.add('mobile')
    }
});