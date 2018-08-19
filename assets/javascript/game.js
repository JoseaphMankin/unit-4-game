//Wait for whole page to load before Javascript
$(document).ready(function () {


    //Created objects for the 4 fighers
    let luke = {
        name: "luke",
        hp: 100,
        attack: 14,
        baseAtk: 14,
        counterAtk: 20,
        alive: true,
    };
    let obi = {
        name: "obi",
        hp: 120,
        attack: 8,
        baseAtk: 8,
        counterAtk: 15,
        alive: true,
    };
    let storm = {
        name: "storm",
        hp: 150,
        attack: 7,
        baseAtk: 7,
        counterAtk: 5,
        alive: true,
    };
    let vader = {
        name: "vader",
        hp: 170,
        attack: 8,
        baseAtk: 8,
        counterAtk: 10,
        alive: true,
    };
    //Cashing the DOM and Setting iniital variables

    const instructions_h2 = document.querySelector(".instructions");
    const attackBtn = document.querySelector(".attackBtn");

    let isGameOver = false;
    let wins = 0;

    let player = null;
    let opponent = null;

    //Initial Setup w/ Characters to be picked on Left. 
    //Instructions to choose fighter, opponent and then FIGHT!

    readyPlayerOne();

    function readyPlayerOne() {

        $(".lukeCard").on('click', function () {

            if (player === null && opponent === null) {
                $(".lukeCard").slideUp();
                $(".lukeCard2").slideDown();
                player = luke;
                $(".card-body").css("background-color", "red");
                $(".player-body").css("background-color", "green");
                instructions_h2.innerHTML = "CHOOSE YOUR OPPONENT";
            } else if (opponent === null) {
                $(".lukeCard").slideUp();
                $(".lukeCardOpp").slideDown();
                opponent = luke;
                instructions_h2.innerHTML = "FIGHT!";
                $(".attackBtn").toggle();
                battle();
            }

        });

        $(".obiCard").on('click', function () {
            if (player === null && opponent === null) {
                $(".obiCard").slideUp();
                $(".obiCard2").slideDown();
                player = obi;
                $(".card-body").css("background-color", "red");
                $(".player-body").css("background-color", "green");
                instructions_h2.innerHTML = "CHOOSE YOUR OPPONENT";
            } else if (opponent === null) {
                $(".obiCard").slideUp();
                $(".obiCardOpp").slideDown();
                opponent = obi;
                $(".attackBtn").toggle();
                instructions_h2.innerHTML = "FIGHT!";
                battle();
            }
        });

        $(".stormCard").on('click', function () {
            if (player === null && opponent === null) {
                $(".stormCard").slideUp();
                $(".stormCard2").slideDown();
                player = storm;
                $(".card-body").css("background-color", "red");
                $(".player-body").css("background-color", "green");
                instructions_h2.innerHTML = "CHOOSE YOUR OPPONENT";
            } else if (opponent === null) {
                $(".stormCard").slideUp();
                $(".stormCardOpp").slideDown();
                opponent = storm;
                $(".attackBtn").toggle();
                instructions_h2.innerHTML = "FIGHT!";
                battle();
            }
        });

        $(".vaderCard").on('click', function () {
            if (player === null && opponent === null) {
                $(".vaderCard").slideUp();
                $(".vaderCard2").slideDown();
                player = vader;
                $(".card-body").css("background-color", "red");
                $(".player-body").css("background-color", "green");
                instructions_h2.innerHTML = "CHOOSE YOUR OPPONENT";
            } else if (opponent === null) {
                $(".vaderCard").slideUp();
                $(".vaderCardOpp").slideDown();
                opponent = vader;
                $(".attackBtn").toggle();
                instructions_h2.innerHTML = "FIGHT!";
                battle();
            }
        });
    }

    //Attack button does x-damage on both sides. then player attack increments. 

    function battle() {



        $(".attackBtn").on('click', function () {
            if (opponent.alive === true && player.alive === true) {
                opponent.hp = opponent.hp - player.attack;
                player.hp = player.hp - opponent.counterAtk;
                player.attack = player.attack + player.baseAtk;
                console.log("HP:" + player.hp, "Atk" + player.attack, "OPHP" + opponent.hp);
            } else {
                reset();
            }

            if (player.hp <= 0) {
                player.alive = false;
                instructions_h2.innerHTML = "YOU DIED! CLICK HERE TO TRY AGAIN";
            }

            if (opponent.hp <= 0 && wins < 3) {

                switch (opponent.name) {
                    case "luke":
                        $(".lukeCardOpp").slideUp();
                        $(".lukeCard3").slideDown();
                        break;
                    case "obi":
                        $(".obiCardOpp").slideUp();
                        $(".obiCard3").slideDown();
                        break;
                    case "storm":
                        $(".stormCardOpp").slideUp();
                        $(".stormCard3").slideDown();
                        break;
                    case "vader":
                        $(".vaderCardOpp").slideUp();
                        $(".vaderCard3").slideDown();
                        break;
                }
                opponent = null;
                wins++;
                console.log(wins);
                instructions_h2.innerHTML = "VICTORY. PICK ANOTHER OPPONENT!";
                $(".attackBtn").toggle();
                readyPlayerOne();
                if (wins === 3) {
                    isGameOver = true;
                    instructions_h2.innerHTML = "YOU WON. PLAY AGAIN?!";
                }
            }



        });



    }

    function reset() {
        console.log("Play Again?")
    }

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

    $(".attackBtn").hide();




});

