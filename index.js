$(document).ready(function() {
    var url = 'https://hn.algolia.com/api/v1/search?query=javascript';
    $.getJSON(url, function(data) {
        var currentQuote = '';
        var quotes = data.hits;

        $('.read').on('click', function() {
            currentQuote = quotes[Math.floor(Math.random() * quotes.length)]
            console.log(currentQuote);
            $('.quoteBody').hide();
            $('.quoteBodyLink').html(currentQuote.title);
            $('.quoteBodyLink').attr('href', currentQuote.url);
            $('.quoteAuthor').html(currentQuote.author);
            $('.tweetQuote').attr('href', 'https://twitter.com/intent/tweet?text= ' + currentQuote.title + ' - ' + currentQuote.author).attr('target', '-blank').attr('disabled', false);
            $('.read').html('Show me one more');
        });
        console.log(data);
        console.log(quotes[0].title);
    });
});











// if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(function(position) {
//         $('.answer').html('latitude:' + position.coords.latitude + "<br>" + 'longitude: ' + position.coords.longitude);
//     });
// }





// $(document).ready(function() {
//     var url = 'http://hn.algolia.com/api/v1/search?query=javascript';

//     $.getJSON(url, function(data) {

//         var allNews = data.hits;
//         console.log(allNews);
//         var eachNews = '';

//         allNews.map(function(item, index, array) {
//             $('.question').on('click', function() {
//                 // $('.answer').html('Jquery is the best thing in the world!');
//                 eachNews += "<div>"
//                 eachNews += item.title;
//                 eachNews += "</div>";
//                 $('.answer').html(eachNews);
//             });
//         })

//     });
// });

// console.log(data instanceof Object);
// if (Array.isArray(data.hits)) {
//     console.log('this is array');
// } else {
//     console.log('is not array');
// }

//$('.question').on('mouseover', function() {
//  $('.answer').html('Jquery is the best thing in the world!');
//});


//var url = 'http://hn.algolia.com/api/v1/search?query=javascript'; // external request to api
// $.getJSON(url, function(data) {
//   console.log(data);
// });
// $('.question').on('mouseover', function() { // onclick or mouseover//
//      $('.answer').html('Jquery is the best thing in the world!');
// });
//});