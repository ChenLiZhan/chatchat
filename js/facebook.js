window.fbAsyncInit = function() {
    FB.init({
        appId: '343619175837730',
        cookie: true, // enable cookies to allow the server to access 
        xfbml: true, // parse social plugins on this page
        version: 'v2.3' // use version 2.2
    });

    // Now that we've initialized the JavaScript SDK, we call 
    // FB.getLoginStatus().  This function gets n visiting this pagethe state of the
    // perso and can return one of three states to
    // the callback you provide.  They can be:
    //
    // 1. Logged into your app ('connected')
    // 2. Logged into Facebook, but not your app ('not_authorized')
    // 3. Not logged into Facebook and can't tell if they are logged into
    //    your app or not.
    //
    // These three cases are handled in the callback function.

    FB.getLoginStatus(function(response) {
        if (response.status === 'connected') {
            // the user is logged in and has authenticated your
            // app, and response.authResponse supplies
            // the user's ID, a valid access token, a signed
            // request, and the time the access token 
            // and signed request each expire
            $('#login').hide();
            $('#logout').show();
            var uid = response.authResponse.userID;
            var accessToken = response.authResponse.accessToken;
            console.log(accessToken);
        } else if (response.status === 'not_authorized') {
            // the user is logged in to Facebook, 
            // but has not authenticated your app
        } else {
            $('#login').show();
            $('#logout').hide();
            // the user isn't logged in to Facebook.
        }
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