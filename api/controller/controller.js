'use strict';


var mongoose = require('mongoose'),
  Album = mongoose.model('Albums');

exports.list_all_albums = function(req, res) {
  Album.find({}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.create_album = function(req, res) {
  var new_album = new Album(req.body);
  new_album.save(function(err, album) {
    if (err)
      res.send(err);
    res.json(album);
  });
};


exports.read_album = function(req, res) {
  Album.find({"albumID": req.params.albumId},function(err, album) {
    if (err)
      res.send(err);
    res.json(album);
  });
};


exports.update_album = function(req, res) {
  Album.findOneAndUpdate({albumID: req.params.albumId}, req.body, {new: true}, function(err, album) {
    if (err)
      res.send(err);
    res.json(album);
  });
};


exports.delete_album = function(req, res) {
  Album.remove({
    albumID: req.params.albumId
  }, function(err, album) {
    if (err)
      res.send(err);
    res.json({ message: 'Album successfully deleted' });
  });
};

exports.find_artist = function(req, res) {
  Album.find({"artist": req.params.artist},function(err, albums) {
    if (err)
      res.send(err);
    res.json(albums);
  });
}
