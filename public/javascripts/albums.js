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
  var url = "http://localhost:3000/albums";
  $.getJSON( url, function() {
    console.log("Album data retrieved...");
  })
    .done(function(data) {
      console.log(data);
      $.each(data, function( i, item ) {
        albums.push(item);
      });
    });
  return albums;
}

// Creates content for the site
function createAlbums() {
  var albums = "";
  for (var i = 0; i < data.length; i++) {
    albums += "<div class='col-sm-3' id='col" + i + "'>" + createAlbumContent(data[i]) + "</div>";
  }

  $("#row").html(albums);
  for (var i = 0; i < data.length; i++) {
    $("#col"+i).css("background-image", "url('./images/" + data[i].album_art + "')");
    $(".col-sm-3").css("height", $(".col-sm-3").width() + "px");
  }
}

function createAlbumContent(data) {
  var cont = "<ul class ='list-group'>" +
  "<li class='list-group-item'>Albumi"+ data.album +"</li>" +
  "<li class='list-group-item'>toka item</li>" +
  "</ul>";
  return cont;
}
