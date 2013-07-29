$(document).ready(function(){
  $('#searchterm').change(function(){
    var searchterm = $(this).val();
    console.log(searchterm);
    // var search = searchterm.join('');
    search = searchterm.replace(/\s/g,'');
    // console.log(search);
    console.log(search);
    // var clientid = 83f67d3cb5a84f49a3da093e14852987;
    $.ajax({
      type: "GET", 
      dataType: "jsonp",
      cache: false,
      url: 'https://api.instagram.com/v1/tags/' + search + '/media/recent?client_id=096f5c2bbf2d419285aad92606c867f5',
      success: function(response) {

        $.each(response.data, function(index, value){
          var img = $('<img id="image_tag">');
          img.attr('src', value.images.standard_resolution.url);
          $('.imagesappend').append(img);
          //console.log(key + ':' + value);
        })
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
// url: 'https://api.instagram.com/v1/tags/' + search + '?client_id=096f5c2bbf2d419285aad92606c867f5',
// response.data[0].images.standard_resolution.url
// $.ajax({
//           url: "/home",
//           type: 'POST',
//           data: {response:response}
//         })