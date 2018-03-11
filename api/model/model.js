'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AlbumSchema = new Schema({
  albumID: Number,
  artist: String,
  album: String,
  release_date: String,
  songs: [String],
  album_art: String
}, {collection: 'albums'});

module.exports = mongoose.model('Albums', AlbumSchema);
