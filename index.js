// Your Code Here
function start() {
    let answer = window.prompt(
        "A powerful sorcerer, you arrive at the entrance to dark cave, which quickly forks into two passages headed in opposite directions. Do you head left, or right?"
    );
    if (answer === "left") {
        goLeft();
    } else if (answer === "right") {
        goRight();
    }
}

function goLeft() {
    let answer = window.prompt(`You come across a stray cat. 
    It scampers off down a small hole, just large enough for you to crawl through. 
    Do you follow it, or continue on your path?`);
    if (answer === "back") {
        // leftOrRight();
        start();
    } else if (answer === "follow") {
        answer = window.prompt(
            `You follow the cat to a colony of cats, snuggled in a fort of warm blankets and subsisting off of inexplicably warm soup. They are content with you staying, but you wonder if you should alert the world to this magical safe haven.`
        );
        if (answer === "back") {
            goLeft();
        } else if (answer === "stay") {
            prompt(
                "You live happily amongst the cats for the rest of your days."
            );
        } else {
            //Spread the word:
            prompt(
                "After leaving the cat colony, you are never able to find it again. Without proof, no one believes your story, which passes into legend nonetheless."
            );
        }
    } else {
        //continue
        answer = window.prompt(
            `You come across a chamber that extends upward to a shining light above. There is a long, winding staircase and a much quicker, but rickety-looking, ladder that lead up towards the light. Which do you take?`
        );
        if (answer === "back") {
            goLeft();
        } else if (answer === "ladder") {
            prompt(
                "After ascending a few feet up the ladder, one of its rungs snaps and you fall comedically through each of the rungs below. Sheepish, you return home."
            );
        } else {
            //staircase
            prompt(
                "After ascending the staircase, you discover a shiny blue stone, which you take home and cherish forever."
            );
        }
    }
}

function goRight() {
    let answer = window.prompt(`You come across a snoring dragon. 
    On the other side of him, you see a shiny chest of treasure. Another path would 
    lead you away from the dragon all together. Which do you take?`);
    if (answer === "back") {
        // leftOrRight();
        start();
    } else if (answer === "past") {
        //past the dragon
        answer = window.prompt(
            `The dragon awakes and sits upright. You only have a moment to respond, to stay or to run:`
        );
        if (answer === "back") {
            goRight();
        } else if (answer === "stay") {
            prompt(
                "You and the dragon have an uplifting conversation about local politics and become lifelong friends."
            );
        } else {
            //run
            prompt(
                "Quickly, you run back to the cave's entrance. Sheepish, you return home."
            );
        }
    } else {
        //Away from the dragon
        answer = window.prompt(
            `After walking a while longer, you come across a shiny blue flower. It is so beautiful that you decide you must either draw it or pick it. Which do you do?`
        );
        if (answer === "back") {
            goRight();
        } else if (answer === "draw it") {
            prompt(
                "You draw the flower, capturing only a fraction of its beauty with your quill. You bring the drawing home, somewhat disappointed, but over time discover joy in sharing the drawing with your friends and family, recounting the story of your days as a sorcerer with the aide of the sketch."
            );
        } else {
            //Pick it
            prompt(
                "You pick the flower and bring it home, and all marvel at its brilliance. However, over time it fades and eventually crumbles to dust."
            );
        }
    }
}

start();
