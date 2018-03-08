'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var AlbumSchema = new Schema({
  album: String
});

module.exports = mongoose.model('Albums', AlbumSchema);
