import * as helperModule from './my-helper-module';
import * as _ from 'lodash';

console.log("Welcome! Greetings from app.js. Let's learn Webpack2");

console.log(helperModule.greetings);

var arr=[ 1, 2];
_.each(arr,(val) => console.log('Output from Lodash _.each for Element ' + val));
