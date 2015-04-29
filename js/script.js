var message = document.getElementById('message-input');
var pool = document.getElementById('message-pool');
var submit = document.getElementById('submit');
var refresh = document.getElementById('refresh');

getAllMessages();

submit.addEventListener('click', function(e) {
    e.preventDefault();
    saveMessage(message.value);
    var sender;
    FB.api('/me', function(response) {
        sender = response.name;
    });
    console.log(sender);
    pool.innerHTML += "<div class=\"col-md-8\">" + message.value + "</div><div class=\"col-md-4\">" + time_diff(Date.now(), Date.now()) + "分鐘前</div>";
    message.value = "";
});

refresh.addEventListener('click', function(e) {
    e.preventDefault();
    pool.innerHTML = "";
    getAllMessages();
});