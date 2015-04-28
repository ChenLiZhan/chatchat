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
    $('#about').click(function() {
        FB.api("/me", {
            last_name: 'last_name',
        }, function(response) {
            console.log(response);
        });
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