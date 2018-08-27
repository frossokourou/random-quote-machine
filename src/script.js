var fr;

$(document).ready(function() {
  $("body").css("background-color", "#FFEDF7");
  randsomQuote();

  $('#getQuote').on("click", function(){
    randsomQuote();
  });

  $('#tweet').on('click', function(){
    window.open('https://twitter.com/intent/tweet?hashtags=quotes&text=' + fr);
  })
});

function randsomQuote() {
  $.ajax({
    headers: {
      "X-Mashape-Key": "OivH71yd3tmshl9YKzFH7BTzBVRQp1RaKLajsnafgL2aPsfP9V",
      Accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded"
    },
    url: 'https://andruxnet-random-famous-quotes.p.mashape.com/cat=',
    success: function(response) {
      console.log(response[0]);
      // var val = JSON.parse(response[0]);
      var val = response[0];
      $("#author").html(val.author);
      console.log(val.author);
      $("#newQuote").html(val.quote);
      console.log(val.quote);
      fr = encodeURIComponent("\"" + val.quote + '\" ' + val.author);
    }
  });
}
