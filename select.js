/**
 * List prompt example
 */
var fs = require("fs");
var path = require("path");
var mkdirp = require('mkdirp');
var chmodr = require('chmodr');
var copy = require('directory-copy');



//  SET GLOBAL VRIABLES
// change here testgit ch
//var platform;
//var template;
//var folder;


var answersEnd = [];

var arrayPlatforms = [];
var arrayTemplates = [];

var choicePlatform;

'use strict';

var inquirer = require('./node_modules/inquirer/');

fs.readdir('./lib', function (err, files) {



    if (err) {
        throw err;
    }

    console.log('FILES ++++++++++=== ' + files);

    files.forEach(function (fileName) {

        console.log('fileName ==================== ' + fileName);

        var file = path.join(__dirname, "lib", fileName);
        var stats = fs.statSync(file);
        if (fileName !== ".DS_Store") {

            console.log('fileName ==xxxxxxxxxxxxxxxxx================== ' + fileName);

            arrayPlatforms.push(fileName.toString().trim());

        }

    }); // END files.forEach(function(fileName) {

    console.log('arrayPlatforms =====vvvvvvvvvvkkkkkkkkk==== ' + arrayPlatforms);

    console.log(files);





    inquirer.prompt([
        {
            type: 'list',
            name: 'platform',
            message: 'What Platform?',
            choices: arrayPlatforms
        }
    ]).then(function (answers) {

        console.log(JSON.stringify(answers, null, '  '));

        var varAnswers = JSON.stringify(answers);

        

        console.log(varAnswers[0]);
        console.dir(varAnswers[0]);

        console.log(answers);
        console.dir(answers);

        Object.keys(answers).forEach(function (key) {
            // do something with data[key]
            console.log(key);
            console.log(answers[key]);

            choicePlatform = answers[key];
        });



        fs.readdir('./lib/' + choicePlatform, function (err, files) {

            if (err) {
                throw err;
            }

            
            
         files.forEach(function (fileName) {
        //            var file = path.join(__dirname, "lib", fileName);
        //            var stats = fs.statSync(file);
                    if (fileName !== ".DS_Store") {

                        console.log('fileName ==xxxxxxxxxxxxAGAINNNNN AGAINNNNN================ ' + fileName);

                        arrayTemplates.push(fileName.toString().trim());

                    }

         });// end files.forEach(function (fileName) {
            
            console.log('arrayTemplates =====vvvvvvvvvvkkkkkkkkk==== ' + arrayTemplates);
            
                inquirer.prompt([

        {
            type: 'list',
            name: 'template',
            message: 'What Template?',
            choices: arrayTemplates,
            filter: function (val) {
                return val.toLowerCase();
            }
      },
        {
            type: 'input',
            name: 'folder',
            message: 'Name Of New Folder'
      },
        {
            type: 'input',
            name: 'client',
            message: 'Name Of Client'
      }


    ]).then(function (answers) {

        console.log(JSON.stringify(answers, null, '  '));

        var varAnswers = JSON.stringify(answers);

        console.log(varAnswers);
        console.dir(varAnswers);

        console.log(answers);
        console.dir(answers);

        //    var data = {
        //        name: 'Property Name',
        //        value: 0
        //    };

        var loopCount = 0;

        Object.keys(answers); // ['name', 'value']
        Object.keys(answers).forEach(function (key) {
            // do something with data[key]

            console.log('loopCount start = ' + loopCount);

            console.log(key);
            console.log(answers[key]);

            console.log('loopCount start 1 = ' + loopCount);

            answersEnd.push(answers[key].toString().trim());

            loopCount++;

            console.log('loopCount end = ' + loopCount);

        });

        makeFiles(choicePlatform, answersEnd);

    }); // END inquirer.prompt([

        }); // END fs.readdir('./lib/' + choicePlatform, function (err, files) {
        
        

    

    }); // END inquirer.prompt([





    //    inquirer.prompt([
    //        
    //        {
    //            type: 'list',
    //            name: 'template',
    //            message: 'What Template?',
    //            choices: ['300x250', '300x600', '728x90'],
    //            filter: function (val) {
    //                return val.toLowerCase();
    //            }
    //  },
    //        {
    //            type: 'input',
    //            name: 'folder',
    //            message: 'Name Of New Folder'
    //  },
    //        {
    //            type: 'input',
    //            name: 'client',
    //            message: 'Name Of Client'
    //  }
    //
    //
    //]).then(function (answers) {
    //
    //        console.log(JSON.stringify(answers, null, '  '));
    //
    //        var varAnswers = JSON.stringify(answers);
    //
    //        console.log(varAnswers);
    //        console.dir(varAnswers);
    //
    //        console.log(answers);
    //        console.dir(answers);
    //
    //        //    var data = {
    //        //        name: 'Property Name',
    //        //        value: 0
    //        //    };
    //
    //        var loopCount = 0;
    //
    //        Object.keys(answers); // ['name', 'value']
    //        Object.keys(answers).forEach(function (key) {
    //            // do something with data[key]
    //
    //            console.log('loopCount start = ' + loopCount);
    //
    //            console.log(key);
    //            console.log(answers[key]);
    //
    //            console.log('loopCount start 1 = ' + loopCount);
    //
    //            answersEnd.push(answers[key].toString().trim());
    //
    //            loopCount++;
    //
    //            console.log('loopCount end = ' + loopCount);
    //
    //        });
    //
    //        makeFiles(answersEnd);
    //
    //    }); // END inquirer.prompt([

});








function makeFiles(choicePlatform, answersEnd) {
    console.log('function makeFiles() { ==xxxxxxx');
    console.log('answers = ' + answersEnd);

    console.log('platform = ' + choicePlatform);
    console.log('template = ' + answersEnd[0]);
    console.log('folder = ' + answersEnd[1]);
    console.log('client = ' + answersEnd[2]);

    copy({
            src: 'lib/' + choicePlatform + '/' + answersEnd[0],
            dest: 'banners/' + choicePlatform + '/' + answersEnd[2] + '/' + answersEnd[1],
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