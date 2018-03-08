
var data;

$(document).ready(function() {
  console.log("Document loaded...");
  data = loadAlbumData();
  setTimeout(function(){
    createAlbums();
  }, 1000);
});

// Loads album data from database
function loadAlbumData() {
  var albums = [];
  $.getJSON( "data.json", function() {
    console.log("Album data retrieved...");
  })
    .done(function(data) {
      console.log(data);
      $.each( data.albums, function( i, item ) {
        albums.push(item);
      });
    });
  console.log(albums);
  return albums;
}

// Creates content for the site
function createAlbums() {
  var albums = "";
  console.log(data.length);
  for (var i = 0; i < data.length; i++) {
    albums += "<div class='col-sm-3' id='col" + i + "'>" + createAlbumContent(i) + "</div>";
  }

  $("#row").html(albums);
  for (var i = 0; i < data.length; i++) {
    $("#col"+i).css("background-image", "url('./images/" + data[i].album_art + "')");
    $(".col-sm-3").css("height", $(".col-sm-3").width() + "px");
  }
}

// Creates content inside album div
function createAlbumContent(i) {
  var cont = "<ul class ='jotai'>" +
  "<li class='item1'>Albumi"+ i +"</li>" +
  "<li class='item2'>toka item</li>" +
  "</ul>";
  return cont;
}
