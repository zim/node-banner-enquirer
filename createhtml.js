var fs = require("fs");

var rimraf = require("rimraf");

var mkdirp = require('mkdirp');

var chmodr = require('chmodr');

//var ncp = require('ncp').ncp;

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

var copy = require('directory-copy');

function grab(flag) {
	var index = process.argv.indexOf(flag);
	return (index === -1) ? null : process.argv[index+1];
}


// 

var dirName = grab('--name');
var client = grab('--client');
var adPlatform = grab('--platform');

if (!dirName || !client) {
	console.log("You Blew it!");
} else {
	console.log(`folder name ${dirName}, client name ${client}, platform name ${adPlatform}`);
}


copy(
    { src: 'greensock1'
    , dest: 'banners/' + dirName
    , excludes: [ /^\./ ] // Exclude hidden files 
    }
  , function () {
    console.log('done!')
  })
  .on('log', function (msg, level) {
    // Level is debug, info, warn or error 
    console.log(level + ': ' + msg)
  })

//copy(
//    { src: __dirname + '/source/static'
//    , dest: __dirname + '/output/static'
//    , excludes: [ /^\./ ] // Exclude hidden files 
//    }
//  , function () {
//    console.log('done!')
//  })
//  .on('log', function (msg, level) {
//    // Level is debug, info, warn or error 
//    console.log(level + ': ' + msg)
//  })

mkdirp('baz', function (err) {
    if (err) console.error(err)
    else console.log('pow!')
});

var html = `

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<title>create</title>

	<link rel="stylesheet" media="screen" href="paddy.css">
	

	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta name="author" content="Zim Segal">
	<meta name="description" content="A demonstration of what can be accomplished.">
	<meta name="robots" content="all">


	<!--[if lt IE 9]>
	<script src="script/html5shiv.js"></script>
	<![endif]-->
</head>

<body>
https://www.npmjs.com/package/rimraf
https://www.npmjs.com/package/mkdirp
https://www.npmjs.com/package/ncp
</body>
</html>

`;

fs.writeFile("sample.html", html.trim(), function (err) {

    console.log("File Created");

});



if (fs.existsSync("lib")) {
    console.log("Directory already there");
    //    fs.writeFile("index.html", html.trim(), function (err) {
    //
    //        console.log("File Created");
    //
    //    });

} else {

    fs.mkdir("lib", function (err) {

        if (err) {
            console.log(err);
        } else {
            console.log("Directory Created");
        }

    });

} // end if (fs.existsSync("lib")) {


// delete directory

//rimraf('banner', function(err) {
//  if (err) { throw err; }
//  // done
//})