//Wait for whole page to load before Javascript
$(document).ready(function () {


    //Created objects for the 4 fighers
    let luke = {
        hp: 100,
        attack: 10,
        counterAtk: 10,
        alive: true,
    };
    let obi = {
        hp: 120,
        attack: 10,
        counterAtk: 10,
        alive: true,
    };
    let storm = {
        hp: 150,
        attack: 10,
        counterAtk: 10,
        alive: true,
    };
    let vader = {
        hp: 180,
        attack: 10,
        counterAtk: 10,
        alive: true,
    };

    let isGameOver = false;
    let kills = 0;

    let player = "";
    let opponent = "";

    console.log(luke, storm, obi, vader, isGameOver, kills);

    //Initial Setup w/ Characters to be picked on Left. Instructions to choose fighter


    if (player === "") {
        readyPlayerOne();
        console.log(player);
    } else {
        opponentPick();
        console.log(opponent);
    }

    //Function for initial Player pick
    function readyPlayerOne() {

        $(".LukeCard").on('click', function () {
            $(".LukeCard").slideUp();
            $(".LukeCard2").slideDown();
            player = luke;
        });

        $(".ObiCard").on('click', function () {
            $(".ObiCard").slideUp();
            $(".ObiCard2").slideDown();
            player = obi;
        });

        $(".StormCard").on('click', function () {
            $(".StormCard").slideUp();
            $(".StormCard2").slideDown();
            player = storm;
        });

        $(".VaderCard").on('click', function () {
            $(".VaderCard").slideUp();
            $(".VaderCard2").slideDown();
            player = vader;
        });

    }


    //Player picks their fighter& Image loads to Battlefield Player Zone. 
    //Instructions to choose Opponent

    function opponentPick() {
        $(".LukeCard").on('click', function () {
            $(".LukeCard").slideUp();
            $(".LukeCardOpp").slideDown();
        });

        $(".ObiCard").on('click', function () {
            $(".ObiCard").slideUp();
            $(".ObiCardOpp").slideDown();
        });

        $(".StormCard").on('click', function () {
            $(".StormCard").slideUp();
            $(".StormCardOpp").slideDown();
        });

        $(".VaderCard").on('click', function () {
            $(".VaderCard").slideUp();
            $(".VaderCardOpp").slideDown();
        });
    }


    // Player Chooses opponent and it loads in Battlefield Defender zone. 
    //Instructions to hit Attack Button

    //Attack button does x-damage on both sides. then player attack increments. 

    //Continues until opponent is killed, kills increases by 1. They are moved to defeated Zone
    //Instruction to pick again

    //If Player ever has 0HP - Lose Condition. isGameOver flips to true. Reset Game Button

    //If Player Kill count = 3 - Win Condition. is GameOver flips to true. Reset Game Button


    //FUN THINGS TO DO .show, .hide, .slideUp, .slideDown, .toggle so .slideToggle .fadeToggle mouseover
    //$('#btn1').html('my button'); for rewriting
    $(".LukeCard2").hide();
$(".ObiCard2").hide();
$(".StormCard2").hide();
$(".VaderCard2").hide();

$(".LukeCard3").hide();
$(".ObiCard3").hide();
$(".StormCard3").hide();
$(".VaderCard3").hide();

$(".LukeCardOpp").hide();
$(".ObiCardOpp").hide();
$(".StormCardOpp").hide();
$(".VaderCardOpp").hide();

    // $(".LukeCard").on('click', function(){
    //     $(".LukeCard").slideUp();
    //     $(".LukeCard2").slideDown();
    // });

    // $(".ObiCard").on('click', function(){
    //     $(".ObiCard").slideUp();
    //     $(".ObiCard2").slideDown();
    // });

    // $(".StormCard").on('click', function(){
    //     $(".StormCard").slideUp();
    //     $(".StormCard2").slideDown();
    // });

    // $(".VaderCard").on('click', function(){
    //     $(".VaderCard").slideUp();
    //     $(".VaderCard2").slideDown();
    // });


    // $(".LukeCard2").on('click', function(){
    //     $(".LukeCard2").slideUp();
    //     $(".LukeCard3").slideDown();
    // });

    // $(".ObiCard2").on('click', function(){
    //     $(".ObiCard2").slideUp();
    //     $(".ObiCard3").slideDown();
    // });

    // $(".StormCard2").on('click', function(){
    //     $(".StormCard2").slideUp();
    //     $(".StormCard3").slideDown();
    // });

    // $(".VaderCard2").on('click', function(){
    //     $(".VaderCard2").slideUp();
    //     $(".VaderCard3").slideDown();
    // });






});

