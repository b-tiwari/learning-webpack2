import * as helperModule from './my-helper-module';

console.log("Welcome! Greetings from app.js. Let's learn Webpack2");

console.log(helperModule.greetings);

var arr=[ 1, 2, 3];
_.each(arr,function(val) {
 console.log('Output from Lodash _.each for Element ' + val); 
});
