var message = document.getElementById('message-input');
var pool = document.getElementById('message-pool');
var submit = document.getElementById('submit');
var refresh = document.getElementById('refresh');

getAllMessages();

submit.addEventListener('click', function(e) {
    e.preventDefault();
    FB.getLoginStatus(function(response) {
        if (response.status === 'connected') {
            var sender = getCookie('username');
            saveMessage(sender, message.value);
            pool.innerHTML += "<div class=\"col-md-8\">" + sender + ': ' + message.value + "</div><div class=\"col-md-4 time-display\">" + time_diff(Date.now(), Date.now()) + "分鐘前</div>";
            message.value = "";
        } else {
            $('#alert').show();
        }
    });
});

refresh.addEventListener('click', function(e) {
    e.preventDefault();
    pool.innerHTML = "";
    getAllMessages();
});

$('#login').click(function() {
    FB.login(function(response) {
        if (response.authResponse) {
            $('#alert').hide();
            FB.api('/me', function(response) {
                setCookie('username', response.name, 1);
            });
        } else {
            console.log('User cancelled login or did not fully authorize.');
        }
    });
});

$('#logout').click(function() {
    FB.logout(function(response) {});
});