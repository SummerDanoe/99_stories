// JavaScript Document
var interval = 100;
var width = 400;
var height = 200;

var words = [
  'JavaScript',
  'Angular',
  'ReactJS',
  'Three.js',
  'Moment',
  'Redux',
  'Chart.js',
  'Ember',
  'BackboneJS',
  'Underscore',
  'Reveal.js',
  'Babel',
  'Modernizr',
  'CoffeeScript',
  'TypeScript',
  'Gulp',
  'NodeJS',
  'Select2',
  'Bower',
  'NPM',
  'Express',
  'Pdf.js',
  'Full Page.js',
  'Foundation',
  'Bootstrap',
  'Mocha',
  'Jasmine',
  'D3.js',
  'Mustache.js',
  'Handlebars',
  'jQuery Validation',
  'Lodash',
  'RequireJS',
  'IntroJS',
  'Typeahead.js',
  'Scrollr',
  'MooTools',
  'Prototype',
  'YUI',
  'Dojo',
  'Raphael',
  'Knockout'
];

var wordPlacementInterval = setInterval(function() {
  var currentWord = words.shift();
  if (currentWord) {
    var word = document.createElement('span');
    word.innerHTML = currentWord;
    word.style.top = Math.floor((Math.random() * height) + 1) + 'px';
    word.style.left = Math.floor((Math.random() * width) + 1) + 'px';
    document.body.appendChild(word);
  }
  else {
    clearInterval(wordPlacementInterval);
  }
}, interval);