//Wait for whole page to load before Javascript
$(document).ready(function(){

//Created objects for the 4 fighers
let luke = {
    hp:100,
    attack:10,
    counterAtk:10,
    alive:true
};
let obi = {
    hp:120,
    attack:10,
    counterAtk:10,
    alive:true
};
let storm = {
    hp:150,
    attack:10,
    counterAtk:10,
    alive:true
};
let vader = {
    hp:180,
    attack:10,
    counterAtk:10,
    alive:true
};
console.log(luke, storm, obi, vader);

//.show, .hide, .slideUp, .slideDown, .toggle so .slideToggle .fadeToggle mouseover
//$('#btn1').html('my button'); for rewriting
$(".LukeCard2").hide();
$(".ObiCard2").hide();
$(".StormCard2").hide();
$(".VaderCard2").hide();

$(".LukeCard3").hide();
$(".ObiCard3").hide();
$(".StormCard3").hide();
$(".VaderCard3").hide();

$(".LukeCard").on('click', function(){
    $(".LukeCard").slideUp();
    $(".LukeCard2").slideDown();
});

$(".ObiCard").on('click', function(){
    $(".ObiCard").slideUp();
    $(".ObiCard2").slideDown();
});

$(".StormCard").on('click', function(){
    $(".StormCard").slideUp();
    $(".StormCard2").slideDown();
});

$(".VaderCard").on('click', function(){
    $(".VaderCard").slideUp();
    $(".VaderCard2").slideDown();
});



$(".LukeCard2").on('click', function(){
    $(".LukeCard2").slideUp();
    $(".LukeCard3").slideDown();
});

$(".ObiCard2").on('click', function(){
    $(".ObiCard2").slideUp();
    $(".ObiCard3").slideDown();
});

$(".StormCard2").on('click', function(){
    $(".StormCard2").slideUp();
    $(".StormCard3").slideDown();
});

$(".VaderCard2").on('click', function(){
    $(".VaderCard2").slideUp();
    $(".VaderCard3").slideDown();
});






});

