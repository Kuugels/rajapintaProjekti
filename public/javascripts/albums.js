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
  var url = "https://albuminfo.herokuapp.com/albums";
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
  "<li class='list-group-item'><h4>"+ data.artist +"</h4></li>" +
  "<li class='list-group-item'><h4>" + data.album + "</h4></li>" +
  "<li class='list-group-item data'><h4>" + data.release_date + "</h4></li>";

  for (var i = 0; i < data.songs.length; i++) {
    cont += "<li class='list-group-item songs'>" + data.songs[i] + "</li>";
  }

  cont += "</ul>";
  return cont;
}

function searchArtist() {
  var albums = [];
  var cont = "";
  var url = "https://albuminfo.herokuapp.com/albums/artist/" + $("#artist").val();
  $.getJSON( url, function() {
    console.log("Searching...");
  })
    .done(function(data) {
      console.log(data);
      $.each(data, function( i, item ) {
        cont += "<div class='col-sm-3' id='col" + i + "'>" + createAlbumContent(item) + "</div>";
      });
      $("#row").html(cont);
      for (var i = 0; i < data.length; i++) {
        $("#col"+i).css("background-image", "url('./images/" + data[i].album_art + "')");
        $(".col-sm-3").css("height", $(".col-sm-3").width() + "px");
      }
    });
}
