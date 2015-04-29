Parse.initialize("703L8NffhlLbhUvavrv5m6LEt0NTIbn3rxsxcGLL", "fa1b3gt673871ronyPzlbg0hQH0zT6FtvUzJy0pq");

var pool = document.getElementById('message-pool');

function getAllMessages() {
    var messages = Parse.Object.extend("messages");
    var query = new Parse.Query(messages);
    query.find({
        success: function(results) {
            for (var i = 0; i < results.length; i++) {
                var object = results[i];
                pool.innerHTML += "<div class=\"col-md-8\">" + object.get("username") + ': ' + object.get("msg") + "</div><div class=\"col-md-4 time-display\">" + time_diff(Date.now(), object.createdAt) + "分鐘前</div>";
            }
        },
        error: function(error) {
            console.log("Error: " + error.code + " " + error.message);
        }
    });
}

function saveMessage(sender, message) {
    var messages = Parse.Object.extend("messages");
    var messages = new messages();
    messages.set("msg", message);
    messages.set("username", sender);
    messages.save(null, {
        success: function(messages) {
            console.log('New object created with objectId: ' + messages.id);
        },
        error: function(messages) {
            console.log('Failed to create new object, with error code: ' + error.message);
        }
    });
}

function time_diff(now, time) {
    return parseInt((now - time) / 60000);
}