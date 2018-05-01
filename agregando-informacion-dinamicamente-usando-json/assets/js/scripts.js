$(document).ready(function() {



var user = '{"_id":"5a73794999c23affd30c3535",  "index": 0,  "guid": "340d3f77-031b-423f-a01a-4e695e9cdab2",  "isActive": false,  "balance": "$2,126.11",  "picture": "http://wallsdesk.com/wp-content/uploads/2016/11/Pictures-of-Terry-Crews.jpg",  "age": 22,  "eyeColor": "green",  "name": {    "first":"Terry",    "last":"ElNegro"  },  "work": "REVENTADOR DE ANOS",  "email": "kelsey.gallegos@cinesanct.biz",  "phone": "+1 (958) 412-2378",  "address": "134 Cropsey Avenue, Cannondale, Louisiana, 1585",  "about": "Es mejor un metro de encaje NEGRO que un NEGRO te encaje el metro. Eiusmod ex qui excepteur voluptate. Ut eu occaecat deserunt aliquip dolor ut laboris magna incididunt est ullamco sint. Et sit anim elit voluptate aute reprehenderit mollit sint et occaecat occaecat proident enim esse. Reprehenderit minim elit non enim reprehenderit laboris voluptate nulla incididunt veniam ex adipisicing.",  "lastConnect": "Wednesday, September 2, 2018",  "latitude": "-68.114463",  "longitude": "101.648502",  "tags": ["sunt", "ipsum", "id", "aliqua", "dolor"],  "greeting": "Hello, Kelsey! You have 9 unread messages.",  "favoriteFruit": "apple"}';

var elNegro = JSON.parse(user);
console.log(elNegro);


$(".rounded-circle").attr("src", elNegro.picture);
$("#name").text(elNegro.name.first + ' ' + elNegro.name.last);
$("#work").text(elNegro.work);
$("#last-connect").text(elNegro.lastConnect);
$("#about").text(elNegro.about);
$("#email").text(elNegro.email);
$("#phone").text(elNegro.phone);
$("#direction").text(elNegro.address);
$("#salary").text(elNegro.balance);
$("#tags ~ .container .row").empty();

elNegro.tags.forEach(function(tags) {
   $("#tags ~ .container .row").append('<span class="badge badge-info">' + tags + '</span>')
   console.log(tags)
 })


$("#salary").text(elNegro.balance);










});
