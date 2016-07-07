
var mkdirp = require('mkdirp');
var chmodr = require('chmodr');
var copy = require('directory-copy');

var questions = [
  "What Platform?",
  "What Size?",
  "What Folder Name?",
  "What Client?"
];

var answers = [];

var readline = require('readline');

var rl = readline.createInterface(process.stdin, process.stdout);

var newBanner = {
    platform: '',
    type: '',
    name: '',
    client: ''
};

var loopCount = 0;


//rl.question(questions[loopCount], function(answer) {



//newBanner.platform = answer;



//console.log(answers[loopCount]);

rl.setPrompt(questions[loopCount]);

rl.prompt();

rl.on('line', function (answer) {

    answers.push(answer.toString().trim());

    console.log(answers[loopCount]);
    console.log(loopCount);

    if (loopCount == 3) {
        
        console.dir(answers);
        
        makeFiles(answers);
        
        //process.exit();
        
    }else{
        rl.setPrompt(questions[(loopCount + 1)]);

        rl.prompt();

        loopCount++;
    }



}); // END rl.on('line', function(answer) {

//});

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

rl.on('close', function () {

    console.log("%s is a real person that says %j", newBanner.platform, newBanner.details);
    process.exit();

});