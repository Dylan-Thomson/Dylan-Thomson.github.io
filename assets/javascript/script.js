$(document).ready(()=> {

    setNavLinkActive();
    autoCollapse();

    $("#btn-view-work").on("click", function(event) {
        event.preventDefault();
        scrollPage("#about");
    });

    $(".nav-item").on("click", function(event) {
        event.preventDefault();
        $(".nav-item").removeClass("active");
        $(this).addClass("active");
        scrollPage($(this).children(".nav-link").attr("href"));
    });

    $(".btn-learn-more").on("click", function(event) {
        const project = projects[$(this).data("project")];
        displayProjectModal(project);
    });
    
    $(window).on("scroll", function() {
        setNavLinkActive();
    });

});

// When loading on small screens, clicking nav-link automatically collapses dropdown
function autoCollapse() {
    if($(window).width() < 992) {
        $(".nav-link").attr("data-toggle", "collapse");
        $(".nav-link").attr("data-target", ".navbar-collapse");
    }
}

// Animate scroll to section on page
function scrollPage(href) {
    $('html, body').animate({
        scrollTop: $(href).offset().top
    }, 300);
}

// Detect current section on page and set its nav link to active
function setNavLinkActive() {
    $("section").each(function() {
        if($(window).scrollTop() >= $(this).offset().top) {
            const id = $(this).attr("id");
            $(".nav-item").removeClass('active');
            $("a[href=\"#" + id + "\"]").parent().addClass("active");
        }
    });
}

function displayProjectModal(project) {
    $("#learn-more-title").text(project.title);
    $("#learn-more-subtitle").text(project.subtitle);
    $("#learn-more-description").text(project.description);
    $("#link-repo").attr("href", project.repoLink);
    if(project.liveLink) {
        $("#link-live").removeClass("d-none");
        $("#link-live").attr("href", project.liveLink);
    }
    else {
        $("#link-live").addClass("d-none");
    }

    $("#modal-learn-more").modal("show");
}

const projects = {
    tinfur: {
        title: "TinFur",
        subtitle: "Tinder for pets",
        description: "Create an account then search for local pets in your area, Tinder style. The website uses the Petfinder API to find local pets and users can swipe left/right to skip or save as a favorite. The users can click a favorite to get more information, including how to contact the shelter. This was a group project created using jQuery, jQuery Mobile, and Google Firebase.",
        repoLink: "https://github.com/Dylan-Thomson/tinfur",
        liveLink: "https://dylan-thomson.github.io/tinfur/"
    },
    rps: {
        title: "Multiplayer Rock Paper Scissors",
        subtitle: "A multiplayer rock paper scissors game built with Firebase",
        description: "Uses Google Firebase to store player and game data. Players on different devices can go head to head in a game of rock paper scissors and talk smack in chat.",
        repoLink: "https://github.com/Dylan-Thomson/RPS-Multiplayer",
        liveLink: "https://dylan-thomson.github.io/RPS-Multiplayer/"
    },
    giftastic: {
        title: "GifTastic",
        subtitle: "Search and favorite GIFs from GIPHY",
        description: "Search for GIFs on GIPHY by category. GIFs are loaded as still images, but will play/pause when clicked. The user can share these on Facebook/Twitter, and save them as favorites using local storage.",
        repoLink: "https://github.com/Dylan-Thomson/GifTastic",
        liveLink: "https://dylan-thomson.github.io/GifTastic/"
    },
    rpg: {
        title: "Overwatch RPG",
        subtitle: "A simple game built with jQuery",
        description: "Choose a fighter and an oppenent. Your fighter gets stronger with each attack made, but beware of enemy counterattacks! Player must grind enemies with lower counterattack power in order to defeat them all without dying.",
        repoLink: "https://github.com/Dylan-Thomson/unit-4-game",
        liveLink: "https://dylan-thomson.github.io/unit-4-game/"
    },
    trivia: {
        title: "Dunder Mifflin Trivia",
        subtitle: "\"The Office\" themed trivia game",
        description: "Answer a series of timed questions about Dunder Mifflin employees. Uses JavaScript timer functions setInterval and setTimeout",
        repoLink: "https://github.com/Dylan-Thomson/TriviaGame",
        liveLink: "https://dylan-thomson.github.io/TriviaGame/"
    },
    wordguess: {
        title: "Word Guessing Game",
        subtitle: "Hangman with web development acronyms",
        description: "Try to guess what common web development acronyms mean by typing letters on the keyboard. Find every letter before running out of guesses to win! Built using vanilla JavaScript.",
        repoLink: "https://github.com/Dylan-Thomson/Word-Guess-Game",
        liveLink: "https://dylan-thomson.github.io/Word-Guess-Game/"
    },
    calculator: {
        title: "Calculator",
        subtitle: "Simple calculator app",
        description: "An earlier project designed to behave like an old fashioned pocket calculator. I recently updated it to support operator precedence and plan to add more functions in the future.",
        repoLink: "https://github.com/Dylan-Thomson/JavaScriptCalculator",
        liveLink: "https://dylan-thomson.github.io/JavaScriptCalculator/"
    },
    simon: {
        title: "Simon Game",
        subtitle: "A memory game based on a classic toy",
        description: "Another one of my earlier projects. Start a game and try to remember the sequence it gives you. On strict mode, mistakes are not forgiven.",
        repoLink: "https://github.com/Dylan-Thomson/SimonGame",
        liveLink: "https://dylan-thomson.github.io/SimonGame/"
    },
    pomodoro: {
        title: "Pomodoro Timer",
        subtitle: "A timer based on a popular time management technique",
        description: "One of my earlier projects. Users can set work/break intervals and be notified when it's time to switch. User can enable/disable sounds/browser alerts.",
        repoLink: "https://github.com/Dylan-Thomson/PomodoroClock",
        liveLink: "https://dylan-thomson.github.io/PomodoroClock/"
    },
    friendfinder: {
        title: "FriendFinder",
        subtitle: "Match with compatible friends based on personality questions",
        description: "A fullstack web application where users fill out a survey and are shown the most compatible match out of a list of friends.",
        repoLink: "https://github.com/Dylan-Thomson/FriendFinder",
        liveLink: "https://lit-caverns-99168.herokuapp.com/"
    },
    liri: {
        title: "LIRI",
        subtitle: "CLI program built with Node.js",
        description: "LIRI takes command line arguments and allows the user to search for information on songs, movies, and band concerts using a number of APIs and Node packages. Checkout the readme on GitHub for a demo and more information!",
        repoLink: "https://github.com/Dylan-Thomson/liri"
    },
    constructorWordGuess: {
        title: "Constructor Word Guess",
        subtitle: "CLI Hangman Game built with Node.js",
        description: "Word Game rebuilt using constructors. Checkout the readme on GitHub for a demo and more information!",
        repoLink: "https://github.com/Dylan-Thomson/Constructor-Word-Guess"
    },
    bamazon: {
        title: "Bamazon",
        subtitle: "CLI storefront built using Node.js and mySQL",
        description: "Customers can view and purchase products, managers can add new products or increase stock of existing products, and supervisors can view profits for departments. Checkout the readme on Github for a demo and more info!",
        repoLink: "https://github.com/Dylan-Thomson/bamazon"
    },
    projectBoard: {
        title: "Project Board",
        subtitle: "Fullstack Task Management Inspired By Trello",
        description: "View and update tasks for group projects. Users can drag and drop tasks to change their status from \"To Do\" to \"Complete\", or interact with modals to update or add tasks.",
        repoLink: "https://github.com/Dylan-Thomson/ProjectBoard",
        liveLink: "https://lit-fjord-11882.herokuapp.com/"
    },
    bcf: {
        title: "BootCampFu",
        subtitle: "Question and Answer Forum for Trilogy Coding Bootcamp Students",
        description: "Students can create accounts, post questions about various topics, post responses to questions, and vote on posts.",
        repoLink: "https://github.com/Dylan-Thomson/BootCampFu",
        liveLink: "https://nameless-eyrie-66645.herokuapp.com/"
    },
    gamescrape: {
        title: "GameScrape",
        subtitle: "Scrape Gaming News",
        description: "Users can scrape and view gaming news articles from several sites. They can also view, add, and delete comments on articles.",
        repoLink: "https://github.com/Dylan-Thomson/GameScrape",
        liveLink: "https://gamescrape.herokuapp.com/"
    },
    gameplan: {
        title: "GamePlan",
        subtitle: "MERN stack social media application catered to tabletop gamers",
        description: "Users can create an account with a profile, and add their favorite games. Search for other users by game, send messages, join/create groups and events.",
        repoLink: "https://github.com/jmbw88/GamePlan",
        liveLink: "https://fierce-bastion-78714.herokuapp.com/"
    },
}