//Wait for whole page to load before Javascript
$(document).ready(function () {
    //Objects for the 4 fighters
    let luke = {
        name: "luke",
        hp: 100,
        attack: 12,
        baseAtk: 12,
        counterAtk: 20,
        alive: true,
    };
     let obi = {
        name: "obi",
        hp: 125,
        attack: 10,
        baseAtk: 10,
        counterAtk: 11,
        alive: true,
    };
    let storm = {
        name: "storm",
        hp: 150,
        attack: 7,
        baseAtk: 7,
        counterAtk: 9,
        alive: true,
    };
    let vader = {
        name: "vader",
        hp: 180,
        attack: 6,
        baseAtk: 6,
        counterAtk: 11,
        alive: true,
    };
    //Cashing the instruction pane and audio. Can probably be cut
    const instructions_h2 = document.querySelector(".instructions");
    const restartText_span = document.querySelector(".restartText");
    const lukePick = document.getElementById('lukePick');
    const lukeDie = document.getElementById('lukeDie');
    const obiPick = document.getElementById('obiPick');
    const obiDie = document.getElementById('obiDie');
    const stormPick = document.getElementById('stormPick');
    const stormDie = document.getElementById('stormDie');
    const vaderPick = document.getElementById('vaderPick');
    const vaderDie = document.getElementById('vaderDie');
    const attackSnd = document.getElementById('attackSnd');
    const saberOn = document.getElementById('saberOn');
    const saberOff = document.getElementById('saberOff');

    //Initial variables and hiding all the cards;
    //Initial Setup w/ Characters to be picked on Left. 
    //Instructions to choose fighter, opponent and then FIGHT!

    let isGameOver = false;
    let wins = 0;
    let player = null;
    let opponent = null;

    $(".second-card").hide();
    $(".third-card").hide();
    $(".oppCard").hide();
    $(".attackBtn").hide();
    $(".restartBtn").hide();

    //Main loop giving Global Gamestate 
    if (isGameOver = false) {
        readyPlayerOne();
    }

    // Function to pick your player for the game

    function readyPlayerOne() {

        $(".lukeCard").on('click', function () {

            if (player === null && opponent === null) {
                $(".lukeCard").slideUp();
                $(".lukeCard2").slideDown();
                player = luke;
                lukePick.play();
                $(".card-body").css("background-color", "red");
                $(".player-body").css("background-color", "green");
                instructions_h2.innerHTML = "CHOOSE YOUR OPPONENT";
                $(".playerText").text(player.hp);
                pickEnemy();
            }
        });

        $(".obiCard").on('click', function () {
            if (player === null && opponent === null) {
                $(".obiCard").slideUp();
                $(".obiCard2").slideDown();
                player = obi;
                obiPick.play();
                $(".card-body").css("background-color", "red");
                $(".player-body").css("background-color", "green");
                instructions_h2.innerHTML = "CHOOSE YOUR OPPONENT";
                $(".playerText").text(player.hp);
                pickEnemy();
            }
        });

        $(".stormCard").on('click', function () {
            if (player === null && opponent === null) {
                $(".stormCard").slideUp();
                $(".stormCard2").slideDown();
                player = storm;
                stormPick.play();
                $(".card-body").css("background-color", "red");
                $(".player-body").css("background-color", "green");
                instructions_h2.innerHTML = "CHOOSE YOUR OPPONENT";
                $(".playerText").text(player.hp);
                pickEnemy();
            }
        });

        $(".vaderCard").on('click', function () {
            if (player === null && opponent === null) {
                $(".vaderCard").slideUp();
                $(".vaderCard2").slideDown();
                player = vader;
                vaderPick.play();
                $(".card-body").css("background-color", "red");
                $(".player-body").css("background-color", "green");
                instructions_h2.innerHTML = "CHOOSE YOUR OPPONENT";
                $(".playerText").text(player.hp);
                pickEnemy();
            }
        });
    }

    //function to choose an Opponent

    function pickEnemy() {

        // let characters = {
        //     luke: {},
        //     vader: {}
        // }

        // $(".player-card").on("click", function(){
        //     if( player !== null && opponent === null ){
        //         $(this).slideUp();
        //         $($(this).data("opp-card")).slideDown();
        //         let thisCharacter = characters[ $(this).data("character") ];
        //     }
        // })
        $(".lukeCard").on('click', function () {

            if (player != null && opponent === null) {
                $(".lukeCard").slideUp();
                $(".lukeCardOpp").slideDown();
                opponent = luke;
                $(".opponentText").text(opponent.hp);
                instructions_h2.innerHTML = "FIGHT!";
                $(".attackBtn").toggle();
            }

        });

        $(".obiCard").on('click', function () {
            console.log(player, opponent)
            if (player != null && opponent === null) {
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
            if (player != null && opponent === null) {
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
            if (player != null && opponent === null) {
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

    //function to handle the combat

    function battle() {

        $(".attackBtn").on('click', function () {
            smack();

            if (player.hp <= 0) {
                isGameOver = true;
                instructions_h2.innerHTML = "YOU LOST. PLAY AGAIN?!";
                restartText_span.innerHTML = "YOU LOST! ";
                saberOff.play();
                $(".restartBtn").show();
                $(".attackBtn").hide();
            }

            if (opponent.hp <= 0 && wins < 3 && player.hp >= 0) {

                switch (opponent.name) {
                    case "luke":
                        $(".lukeCardOpp").slideUp();
                        $(".lukeCard3").slideDown();
                        lukeDie.play();
                        opponent = null;
                        wins++;
                        $(".attackBtn").toggle();
                        instructions_h2.innerHTML = "VICTORY. PICK ANOTHER OPPONENT!";
                        winCheck();
                        break;
                    case "obi":
                        $(".obiCardOpp").slideUp();
                        $(".obiCard3").slideDown();
                        obiDie.play();
                        opponent = null;
                        wins++;
                        $(".attackBtn").toggle();
                        instructions_h2.innerHTML = "VICTORY. PICK ANOTHER OPPONENT!";
                        winCheck();
                        break;
                    case "storm":
                        $(".stormCardOpp").slideUp();
                        $(".stormCard3").slideDown();
                        stormDie.play();
                        opponent = null;
                        wins++;
                        $(".attackBtn").toggle();
                        instructions_h2.innerHTML = "VICTORY. PICK ANOTHER OPPONENT!";
                        winCheck();
                        break;
                    case "vader":
                        $(".vaderCardOpp").slideUp();
                        $(".vaderCard3").slideDown();
                        vaderDie.play();
                        opponent = null;
                        wins++;
                        $(".attackBtn").toggle();
                        instructions_h2.innerHTML = "VICTORY. PICK ANOTHER OPPONENT!";
                        winCheck();
                        break;
                }
            }
        });


    }

    //function to reset the game

    function reset() {
        // location.reload();
        player = null;
        opponent = null;
        wins = 0;
        console.log(player, opponent, wins);

         luke = {
            name: "luke",
            hp: 100,
            attack: 12,
            baseAtk: 12,
            counterAtk: 20,
            alive: true,
        };
          obi = {
            name: "obi",
            hp: 125,
            attack: 10,
            baseAtk: 10,
            counterAtk: 11,
            alive: true,
        };
         storm = {
            name: "storm",
            hp: 150,
            attack: 7,
            baseAtk: 7,
            counterAtk: 9,
            alive: true,
        };
         vader = {
            name: "vader",
            hp: 180,
            attack: 6,
            baseAtk: 6,
            counterAtk: 11,
            alive: true,
        };

        $(".restartBtn").toggle();
        instructions_h2.innerHTML = "CHOOSE YOUR FIGHTER";
        $(".card-body").css("background-color", "green");
        
        $(".first-card").show();

        $(".second-card").hide();
        $(".third-card").hide();
        $(".oppCard").hide();
        $(".attackBtn").hide();
        $(".restartBtn").hide();

        $(".lukeCard").unbind('click');
        $(".obiCard").unbind('click');
        $(".stormCard").unbind('click');
        $(".vaderCard").unbind('click');
        $(".attackBtn").unbind('click');

        console.log(luke, obi, storm, vader);
        isGameOver = false;
        saberOn.play();
        readyPlayerOne();

    }

    //Function that handles the attack buttons. 

    function smack() {
        attackSnd.play();
        opponent.hp = opponent.hp - player.attack;
        player.hp = player.hp - opponent.counterAtk;
        instructions_h2.innerHTML = "You attacked for: <span class='PA'>" + player.attack + "</span>" + "!  Your Opponent attack for: <span class='OA'>" + opponent.counterAtk + "</span>" + "!  KEEP FIGHTING!!";
        player.attack = player.attack + player.baseAtk;
        console.log(player, opponent);
        $(".playerText").text(player.hp);
        $(".opponentText").text(opponent.hp);
        
    }

    //function to check for game end
    $(".restartBtn").on('click', function () {
        reset();
    });

    function winCheck() {
        if (wins === 3 && player.hp >= 0) {
            isGameOver = true;
            instructions_h2.innerHTML = "YOU WON. PLAY AGAIN?!";
            restartText_span.innerHTML = "YOU WON! ";
            saberOff.play();
            $(".restartBtn").toggle();

            if (player.hp <= 0) {
                isGameOver = true;
                instructions_h2.innerHTML = "YOU LOST. PLAY AGAIN?!";
                restartText_span.innerHTML = "YOU LOST! ";
                saberOff.play();
                $(".restartBtn").show();
                $(".attackBtn").hide();
            }

        }

    }

    //the Call to get the game rolling
    readyPlayerOne();

    //FUN THINGS TO DO .show, .hide, .slideUp, .slideDown, .toggle so .slideToggle .fadeToggle mouseover
    //$('#btn1').html('my button'); for rewriting





});

