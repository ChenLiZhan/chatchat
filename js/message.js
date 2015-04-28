var pool = document.getElementById('message-pool');

var getAllMessages = function() {
    var messages = Parse.Object.extend("messages");
    var query = new Parse.Query(messages);
    query.find({
        success: function(results) {
        // Do something with the returned Parse.Object values
            for (var i = 0; i < results.length; i++) { 
                var object = results[i];
                pool.innerHTML += "<div class=\"col-md-8\">" + object.get("msg") + "</div><div class=\"col-md-4 time-display\">" + time_diff(Date.now(), object.createdAt) + "分鐘前</div>";
            }
        },
        error: function(error) {
            console.log("Error: " + error.code + " " + error.message);
        }
    });
};

var saveMessage = function(message) {
    var messages = Parse.Object.extend("messages");
    var messages = new messages();
    messages.set("msg", message);
    messages.save(null, {
        success: function(messages) {
            console.log('New object created with objectId: ' + messages.id);
        },
        error: function(messages) {
            console.log('Failed to create new object, with error code: ' + error.message);
        }
    });
};

function time_diff(now, time) {
    return parseInt(( now - time ) / 60000);
}
