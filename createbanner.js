var fs = require("fs");
var rimraf = require("rimraf");
var mkdirp = require('mkdirp');
var chmodr = require('chmodr');
var copy = require('directory-copy');

if (fs.existsSync("banners")) {
    console.log("Directory already there");
} else {
    fs.mkdir("banners", function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log("Banners Directory Created");
        }
    });
} // end if (fs.existsSync("banner")) {

function grab(flag) {
	var index = process.argv.indexOf(flag);
	return (index === -1) ? null : process.argv[index+1];
}

// 

var adPlatform = grab('--platform');
var size = grab('--size');
var dirName = grab('--name');
var client = grab('--client');
var srcLive;

if (!adPlatform || !size || !dirName || !client) {
	console.log("NEED MORE!");
} else {
	console.log(`PLATFORM = ${adPlatform}, SIZE = ${size}, DIRECTORY NAME = ${dirName}, CLIENT = ${client}`);
    
    srcLive = adPlatform + '/' + size+ '/';
    
    console.log(srcLive);
}


copy(
    { src: 'lib/' + adPlatform + '/' + size
    , dest: 'banners/' + adPlatform + '/' + client + '/' + dirName
    , excludes: [ /^\./ ] // Exclude hidden files 
    }
  , function () {
    console.log('done!')
  })
  .on('log', function (msg, level) {
    // Level is debug, info, warn or error 
    console.log(level + ': ' + msg)
  })




// delete directory

//rimraf('banner', function(err) {
//  if (err) { throw err; }
//  // done
//})