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
                pickEnemy();
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
                pickEnemy();
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
                pickEnemy();
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
                pickEnemy();
            }
        });
    }

    function pickEnemy() {
        $(".lukeCard").on('click', function () {

            if (opponent === null) {
                $(".lukeCard").slideUp();
                $(".lukeCardOpp").slideDown();
                opponent = luke;
                $(".opponentText").text(opponent.hp);
                console.log(opponent);
                instructions_h2.innerHTML = "FIGHT!";
                $(".attackBtn").toggle();
            }

        });

        $(".obiCard").on('click', function () {
            if (opponent === null) {
                $(".obiCard").slideUp();
                $(".obiCardOpp").slideDown();
                opponent = obi;
                console.log(opponent);
                $(".opponentText").text(opponent.hp);
                $(".attackBtn").toggle();
                instructions_h2.innerHTML = "FIGHT!";
            }
        });

        $(".stormCard").on('click', function () {
            if (opponent === null) {
                $(".stormCard").slideUp();
                $(".stormCardOpp").slideDown();
                opponent = storm;
                console.log(opponent);
                $(".opponentText").text(opponent.hp);
                $(".attackBtn").toggle();
                instructions_h2.innerHTML = "FIGHT!";
            }
        });

        $(".vaderCard").on('click', function () {
            if (opponent === null) {
                $(".vaderCard").slideUp();
                $(".vaderCardOpp").slideDown();
                opponent = vader;
                console.log(opponent);
                $(".opponentText").text(opponent.hp);
                $(".attackBtn").toggle();
                instructions_h2.innerHTML = "FIGHT!";
            }
        });
        winCheck();
        battle();

    }

    //Attack button does x-damage on both sides. then player attack increments. 

    function battle() {

        $(".attackBtn").on('click', function () {
            smack();
            if (opponent.hp <= 0 && wins < 3) {

                switch (opponent.name) {
                    case "luke":
                        $(".lukeCardOpp").slideUp();
                        $(".lukeCard3").slideDown();
                        opponent = null;
                        wins++;
                        $(".attackBtn").toggle();
                        instructions_h2.innerHTML = "VICTORY. PICK ANOTHER OPPONENT!";
                        winCheck();
                        readyPlayerOne();
                        break;
                    case "obi":
                        $(".obiCardOpp").slideUp();
                        $(".obiCard3").slideDown();
                        opponent = null;
                        wins++;
                        $(".attackBtn").toggle();
                        instructions_h2.innerHTML = "VICTORY. PICK ANOTHER OPPONENT!";
                        winCheck();
                        readyPlayerOne();
                        break;
                    case "storm":
                        $(".stormCardOpp").slideUp();
                        $(".stormCard3").slideDown();
                        opponent = null;
                        wins++;
                        $(".attackBtn").toggle();
                        instructions_h2.innerHTML = "VICTORY. PICK ANOTHER OPPONENT!";
                        winCheck();
                        readyPlayerOne();
                        break;
                    case "vader":
                        $(".vaderCardOpp").slideUp();
                        $(".vaderCard3").slideDown();
                        opponent = null;
                        wins++;
                        $(".attackBtn").toggle();
                        instructions_h2.innerHTML = "VICTORY. PICK ANOTHER OPPONENT!";
                        winCheck();
                        readyPlayerOne();
                        break;
                }


            }

        });



    }

    function reset() {
        console.log("Play Again?")
    }

    function smack() {
        console.log(opponent.hp);
        opponent.hp = opponent.hp - player.attack;
        player.hp = player.hp - opponent.counterAtk;
        player.attack = player.attack + player.baseAtk;
        console.log(player, opponent);
        $(".playerText").text(player.hp);
        $(".opponentText").text(opponent.hp);
    }

    function winCheck() {
        if (wins === 3) {
            isGameOver = true;
            instructions_h2.innerHTML = "YOU WON. PLAY AGAIN?!";
            reset();
        }
    }

    //Continues until opponent is killed, kills increases by 1. They are moved to defeated Zone
    //Instruction to pick again

    //If Player ever has 0HP - Lose Condition. isGameOver flips to true. Reset Game Button

    //If Player Kill count = 3 - Win Condition. is GameOver flips to true. Reset Game Button


    //FUN THINGS TO DO .show, .hide, .slideUp, .slideDown, .toggle so .slideToggle .fadeToggle mouseover
    //$('#btn1').html('my button'); for rewriting





});

