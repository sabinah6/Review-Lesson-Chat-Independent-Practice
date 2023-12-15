var yourName = "Bob";
var friendsName = "Richard";
var messages = 1;


$("button").click(function() {
    $(".sent").show();


});

$(".friend").click(function() {
    var friend = $(".friend-input").val();
    $(".received").append("<p>" + friend + "</p>");
    $(".sent").show();
    messages += 1;
    $(".numberr").text("Number of messages received: " + messages);
    $(".received").css("background-color", "red");
    $(".received").css("color", "blue");
    
    
});


$(".you").click(function() {
    var you = $(".friend-input").val();
    $(".sent").append("<p>" + you + "</p>");
    $(".sent").show();
    
    
    
});











//DON'T CHANGE THIS CODE

var realYourName, realFriendName;

try {
    realYourName = eval('yourName');
    realFriendName = eval('friendsName');
} catch (_e) {}

updateNames();

function updateNames(){
    $(".your-name").text(realYourName);
    $(".friends-name").text(realFriendName);
}