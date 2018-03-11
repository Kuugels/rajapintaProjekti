'use strict';
module.exports = function(app) {
  var albumList = require('../controller/controller.js');

  // AlbumsList Routes
  app.route('/albums')
    .get(albumList.list_all_albums)
    .post(albumList.create_album);


  app.route('/albums/:albumId')
    .get(albumList.read_album)
    .put(albumList.update_album)
    .delete(albumList.delete_album);


  app.route('/albums/artist/:artist')
    .get(albumList.find_artist)
};
