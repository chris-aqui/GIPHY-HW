    var topics = ['dogs', 'cats', 'women', 'gay', 'motorbikes', 'sushi', ''];






    // Example queryURL for Giphy API
    var apiKey = 'oAPKq0ycl46LlXlQ6CpSi5k9jK2cPOqB';
    var queryURL = "https://api.giphy.com/v1/gifs/trending?api_key=" + apiKey;

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      console.log(response);
    });