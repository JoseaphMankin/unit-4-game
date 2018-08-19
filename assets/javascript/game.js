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
//Cashing the DOM and Setting iniital variables

let instructions_h2 = document.querySelector(".instructions");

    let isGameOver = false;
    let kills = 0;

    let player = null;
    let opponent = null;

    console.log(luke, storm, obi, vader, isGameOver, kills);

    //Initial Setup w/ Characters to be picked on Left. Instructions to choose fighter

    readyPlayerOne();

    function readyPlayerOne() {

        $(".lukeCard").on('click', function () {

            if (player === null && opponent === null) {
                $(".lukeCard").slideUp();
                $(".lukeCard2").slideDown();
                player = luke;
                instructions_h2.innerHTML = "CHOOSE YOUR OPPONENT";
            } else if (opponent === null) {
                $(".lukeCard").slideUp();
                $(".lukeCardOpp").slideDown();
                opponent = luke;
                instructions_h2.innerHTML = "FIGHT!";
            }

        });

        $(".obiCard").on('click', function () {
            if (player === null && opponent === null) {
                $(".obiCard").slideUp();
                $(".obiCard2").slideDown();
                player = obi;
                instructions_h2.innerHTML = "CHOOSE YOUR OPPONENT";
            } else if (opponent === null){
                $(".obiCard").slideUp();
                $(".obiCardOpp").slideDown();
                opponent = obi;
                instructions_h2.innerHTML = "FIGHT!";
            }
        });

        $(".stormCard").on('click', function () {
            if (player === null && opponent === null) {
                $(".stormCard").slideUp();
                $(".stormCard2").slideDown();
                player = storm;
                instructions_h2.innerHTML = "CHOOSE YOUR OPPONENT";
            } else if (opponent === null){
                $(".stormCard").slideUp();
                $(".stormCardOpp").slideDown();
                opponent = storm;
                instructions_h2.innerHTML = "FIGHT!";
            }
        });

        $(".vaderCard").on('click', function () {
            if (player === null && opponent === null) {
                $(".vaderCard").slideUp();
                $(".vaderCard2").slideDown();
                player = vader;
                instructions_h2.innerHTML = "CHOOSE YOUR OPPONENT";
            } else if (opponent === null){
                $(".vaderCard").slideUp();
                $(".vaderCardOpp").slideDown();
                opponent = vader;
                instructions_h2.innerHTML = "FIGHT!";
            }
        });
    }

    //     
    //     } else {
    //         $(".lukeCard").on('click', function () {
    //             $(".lukeCard").slideUp();
    //             $(".lukeCardOpp").slideDown();
    //         });

    //         $(".obiCard").on('click', function () {
    //             $(".obiCard").slideUp();
    //             $(".obiCardOpp").slideDown();
    //         });

    //         $(".stormCard").on('click', function () {
    //             $(".stormCard").slideUp();
    //             $(".stormCardOpp").slideDown();
    //         });

    //         $(".vaderCard").on('click', function () {
    //             $(".vaderCard").slideUp();
    //             $(".vaderCardOpp").slideDown();
    //         });
    //     }
    // }

    // readyPlayerOne();

    //Player picks their fighter& Image loads to Battlefield Player Zone. 
    //Instructions to choose Opponent

    // function opponentPick() {
    //     $(".lukeCard").on('click', function () {
    //         $(".lukeCard").slideUp();
    //         $(".lukeCardOpp").slideDown();
    //     });

    //     $(".obiCard").on('click', function () {
    //         $(".obiCard").slideUp();
    //         $(".obiCardOpp").slideDown();
    //     });

    //     $(".stormCard").on('click', function () {
    //         $(".stormCard").slideUp();
    //         $(".stormCardOpp").slideDown();
    //     });

    //     $(".vaderCard").on('click', function () {
    //         $(".vaderCard").slideUp();
    //         $(".vaderCardOpp").slideDown();
    //     });
    // }


    // Player Chooses opponent and it loads in Battlefield Defender zone. 
    //Instructions to hit Attack Button

    //Attack button does x-damage on both sides. then player attack increments. 

    //Continues until opponent is killed, kills increases by 1. They are moved to defeated Zone
    //Instruction to pick again

    //If Player ever has 0HP - Lose Condition. isGameOver flips to true. Reset Game Button

    //If Player Kill count = 3 - Win Condition. is GameOver flips to true. Reset Game Button


    //FUN THINGS TO DO .show, .hide, .slideUp, .slideDown, .toggle so .slideToggle .fadeToggle mouseover
    //$('#btn1').html('my button'); for rewriting
    $(".lukeCard2").hide();
    $(".obiCard2").hide();
    $(".stormCard2").hide();
    $(".vaderCard2").hide();

    $(".lukeCard3").hide();
    $(".obiCard3").hide();
    $(".stormCard3").hide();
    $(".vaderCard3").hide();

    $(".lukeCardOpp").hide();
    $(".obiCardOpp").hide();
    $(".stormCardOpp").hide();
    $(".vaderCardOpp").hide();

    // $(".lukeCard").on('click', function(){
    //     $(".lukeCard").slideUp();
    //     $(".lukeCard2").slideDown();
    // });

    // $(".obiCard").on('click', function(){
    //     $(".obiCard").slideUp();
    //     $(".obiCard2").slideDown();
    // });

    // $(".stormCard").on('click', function(){
    //     $(".stormCard").slideUp();
    //     $(".stormCard2").slideDown();
    // });

    // $(".vaderCard").on('click', function(){
    //     $(".vaderCard").slideUp();
    //     $(".vaderCard2").slideDown();
    // });


    // $(".lukeCard2").on('click', function(){
    //     $(".lukeCard2").slideUp();
    //     $(".lukeCard3").slideDown();
    // });

    // $(".obiCard2").on('click', function(){
    //     $(".obiCard2").slideUp();
    //     $(".obiCard3").slideDown();
    // });

    // $(".stormCard2").on('click', function(){
    //     $(".stormCard2").slideUp();
    //     $(".stormCard3").slideDown();
    // });

    // $(".vaderCard2").on('click', function(){
    //     $(".vaderCard2").slideUp();
    //     $(".vaderCard3").slideDown();
    // });






});

