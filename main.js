function refresh(arr) {
  var $tweets = $("#tweets");
  $tweets.html("");
  if(arr===undefined){
    arr = streams.home
  }
  
  var index = arr.length - 1;
  while (index >= 0) {
    var tweet = arr[index];
    var $tweet = $("<div class='card'></div>");
    var html="<div class='user'>"+tweet.user+"</div>"
    html+="<div class='msg'>"+tweet.message+"</div>"
    html += "<div class='time'>" + moment(tweet.created_at).fromNow() + "</div>";
    $tweet.html(html);
    $tweet.appendTo($tweets);
    index -= 1;
  }
  $(".user").unbind().click(function () {
    var user = this.innerHTML
    var arr = filter(streams.home,function(tweet){
      return tweet.user === user
    })
    refresh(arr)
  });
}
$(document).ready(function () {
    refresh()
});
