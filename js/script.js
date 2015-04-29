var message = document.getElementById('message-input');
var pool = document.getElementById('message-pool');
var submit = document.getElementById('submit');
var refresh = document.getElementById('refresh');

getAllMessages();

submit.addEventListener('click', function(e) {
    e.preventDefault();
    saveMessage(message.value);
    console.log(getCookie('username'));
    pool.innerHTML += "<div class=\"col-md-8\">" + message.value + "</div><div class=\"col-md-4\">" + time_diff(Date.now(), Date.now()) + "分鐘前</div>";
    message.value = "";
});

refresh.addEventListener('click', function(e) {
    e.preventDefault();
    pool.innerHTML = "";
    getAllMessages();
});

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    return "";
}