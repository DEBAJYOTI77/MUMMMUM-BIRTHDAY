/* =========================================
   ELEMENTS
========================================= */

const intro =
    document.getElementById("intro");

const openBtn =
    document.getElementById("openBtn");

const mainPage =
    document.getElementById("main-page");

const introHearts =
    document.getElementById("intro-hearts");

const heartsContainer =
    document.getElementById("hearts");

const surpriseBtn =
    document.getElementById("surpriseBtn");

const surprise =
    document.getElementById("surprise");



/* =========================================
   INTRO HEARTS
========================================= */

function createIntroHeart() {

    const heart =
        document.createElement("span");


    heart.className =
        "intro-floating-heart";


    const heartTypes = [
        "❤️",
        "💕",
        "💖",
        "💗",
        "💘",
        "♡",
        "✨"
    ];


    heart.textContent =
        heartTypes[
            Math.floor(
                Math.random() *
                heartTypes.length
            )
        ];


    heart.style.setProperty(
        "--left",
        Math.random() * 100 + "vw"
    );


    heart.style.setProperty(
        "--size",
        15 + Math.random() * 35 + "px"
    );


    heart.style.setProperty(
        "--duration",
        4 + Math.random() * 5 + "s"
    );


    introHearts.appendChild(heart);


    heart.addEventListener(
        "animationend",
        () => {

            heart.remove();

        }
    );

}



/* Start intro hearts */

const introHeartInterval =
    setInterval(
        createIntroHeart,
        250
    );



/* =========================================
   OPEN SURPRISE
========================================= */

openBtn.addEventListener(
    "click",
    () => {


        /* Stop intro hearts */

        clearInterval(
            introHeartInterval
        );


        /* Button animation */

        openBtn.style.transform =
            "scale(0.9)";


        /* Fade intro */

        intro.style.opacity =
            "0";

        intro.style.visibility =
            "hidden";


        /* Show main page */

        setTimeout(
            () => {

                intro.remove();

                mainPage.classList.add(
                    "show"
                );

                startBirthdayHearts();

            },
            1000
        );

    }
);



/* =========================================
   MAIN PAGE HEARTS
========================================= */

function createBirthdayHeart() {

    const heart =
        document.createElement("span");


    heart.className =
        "heart";


    const heartTypes = [
        "❤️",
        "💕",
        "💖",
        "💗",
        "♡"
    ];


    heart.textContent =
        heartTypes[
            Math.floor(
                Math.random() *
                heartTypes.length
            )
        ];


    heart.style.setProperty(
        "--left",
        Math.random() * 100 + "vw"
    );


    heart.style.setProperty(
        "--size",
        15 + Math.random() * 25 + "px"
    );


    heart.style.setProperty(
        "--duration",
        5 + Math.random() * 5 + "s"
    );


    heartsContainer.appendChild(
        heart
    );


    heart.addEventListener(
        "animationend",
        () => {

            heart.remove();

        }
    );

}



/* Start birthday hearts */

function startBirthdayHearts() {

    setInterval(
        createBirthdayHeart,
        350
    );

}



/* =========================================
   SECOND SURPRISE
========================================= */

surpriseBtn.addEventListener(
    "click",
    () => {


        /* Show surprise */

        surprise.classList.remove(
            "hidden"
        );


        /* Change button */

        surpriseBtn.innerHTML =
            "You Are My Everything ❤️";


        /* Smooth scroll */

        surprise.scrollIntoView({
            behavior: "smooth",
            block: "nearest"
        });


        /* Confetti */

        createConfetti(120);

    }
);



/* =========================================
   CONFETTI
========================================= */

function createConfetti(amount) {

    const symbols = [
        "💖",
        "💕",
        "❤️",
        "💗",
        "✨",
        "🌸",
        "⭐"
    ];


    for (
        let i = 0;
        i < amount;
        i++
    ) {


        const piece =
            document.createElement("span");


        piece.className =
            "confetti";


        piece.textContent =
            symbols[
                Math.floor(
                    Math.random() *
                    symbols.length
                )
            ];


        piece.style.setProperty(
            "--left",
            Math.random() * 100 + "vw"
        );


        piece.style.setProperty(
            "--duration",
            2 + Math.random() * 4 + "s"
        );


        piece.style.fontSize =
            12 + Math.random() * 18 + "px";


        piece.style.animationDelay =
            Math.random() * 1.5 + "s";


        document.body.appendChild(
            piece
        );


        piece.addEventListener(
            "animationend",
            () => {

                piece.remove();

            }
        );

    }

}