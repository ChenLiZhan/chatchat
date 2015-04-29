window.fbAsyncInit = function() {
    FB.init({
        appId: '343619175837730',
        cookie: true,
        xfbml: true,
        // status: true,
        version: 'v2.3'
    });

    $('#about').click(function() {
        FB.api("/me", function(response) {
            if (response && !response.error) {
                console.log(response);
            }
        });
    });

    $('#login').click(function() {
        FB.login(function(response) {
            if (response.authResponse) {
                console.log('Welcome!  Fetching your information.... ');
                FB.api('/me', function(response) {
                    console.log('Good to see you, ' + response.name + '.');
                });

            } else {
                console.log('User cancelled login or did not fully authorize.');
            }
        });
    });

    $('#logout').click(function() {
        FB.logout(function(response) {});
    });


    FB.Event.subscribe('auth.statusChange', function(response) {
        if (response.status === 'connected') {
            $('#logout').show();
            $('#login').hide();
        } else if (response.status === 'not_authorized') {
            $('#logout').hide();
            $('#login').show();
        } else {
            $('#logout').hide();
            $('#login').show();
        }
    });


};

// Load the SDK asynchronously
(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s);
    js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));