$(document).ready(function(){
  $('#searchterm').change(function(){
    var searchterm = $(this).val();
    // var clientid = 83f67d3cb5a84f49a3da093e14852987;
    $.ajax({
      type: "GET", 
      dataType: "jsonp",
      cache: false,
      url: 'https://api.instagram.com/v1/media/popular?client_id=83f67d3cb5a84f49a3da093e1485298',
      success: function(response) {
        console.log(response);
      },
      error: function(request, errorType, errorMessage) {
        alert('Error:' + errorType + 'with message' + errorMessage);
      }
    });
      // type: 'POST',
      // data: {searchterm:searchterm}
    // })
  });
})

//collecting photos that have been tagged with a specific keyword
//http://techmonks.net/instagram-using-the-api/