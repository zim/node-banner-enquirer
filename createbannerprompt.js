var fs = require("fs");
var rimraf = require("rimraf");
var mkdirp = require('mkdirp');
var chmodr = require('chmodr');
var copy = require('directory-copy');

function makeFiles(answers) {
    console.log('function makeFiles() { ==xxxxxxx');
    console.log('answers = ' + answers);

    copy({
            src: 'lib/' + answers[0] + '/' + answers[1],
            dest: 'banners/' + answers[0] + '/' + answers[3] + '/' + answers[2],
            excludes: [/^\./] // Exclude hidden files 
        }, function () {
            console.log('done! copy make files function!===============');
            process.exit();
        })
        .on('log', function (msg, level) {
            // Level is debug, info, warn or error 
            console.log(level + ': ' + msg);
        }) // END copy({

}; // END function makeFiles() {

//function finish() {
//    console.log('done! finish function!++++++++++++');
//    //process.exit();
////    makeFiles();
//};

//makeFiles();
//finish();

var questions = [
  "What Platform?",
  "What Size?",
  "What Folder Name?",
  "What Client?"
];

var answers = [];

function ask(i) {
    
    process.stdout.write(`\n\n\n\n ${questions[i]}`);
    process.stdout.write("  >>>>>>  ");
    
}// END function ask(i) {

process.stdin.on('data', function (data) {

    answers.push(data.toString().trim());

    if (answers.length < questions.length) {

        console.log('if (answers.length < questions.length) {');

        ask(answers.length);

    } else {

        var adPlatform = answers[0];
        var size = answers[1];
        var dirName = answers[2];
        var client = answers[3];

        //process.stdout.write(`platform $adPlatform size = ${answers[1]}; folder = ${answers[2]}; client = ${answers[3]}`);

        console.log('adPlatform = ' + adPlatform);
        console.log('size = ' + size);
        console.log('dirName = ' + dirName);
        console.log('client = ' + client);

        makeFiles(answers);
        //process.exit();

    } // END if (answers.length < questions.length) {

}); // END process.stdin.on('data', function (data) {

process.on('exit', function () {

    process.stdout.write("\n\n\n\n");

    console.log('process.on("exit", function () { FIRED XXXX 2');

}); // END process.on('exit', function () {


ask(0);


// delete directory

//rimraf('banner', function(err) {
//  if (err) { throw err; }
//  // done
//})