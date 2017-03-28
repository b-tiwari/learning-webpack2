import * as helperModule from './my-helper-module';
import * as _ from 'lodash';
import './sharedModule';
import './../styles/appStyles.scss';
import './../styles/app.css';
import homeIcon from '../images/home.png';

var homeImg = document.getElementById('home');
homeImg.src = homeIcon;

console.log("Welcome! Greetings from app.js. Let's learn Webpack2");

console.log(helperModule.greetings);

var arr=[ 1, 2, 3];
_.each(arr,function(val) {
 console.log('Output from Lodash _.each for Element ' + val); 
});
