/*
This is empty on purpose! Your code to build the resume will go here.
 */

const bio = {
    "name": "Sergei Gushchin",
    "role": "Front-End Web Developer",
    "contacts": {
        "mobile": "+48 797 807 995",
        "email": "guschins@gmail.com",
        "github": "GuschinS",
        "linkedin": "guschins",
        "location": "Gdansk, Poland"
    },
    "welcomeMessage": "Hello I'm Sergei and I am a Front-End Web Developer",
    "skills": ["Languages: JavaScript, HTML5, CSS3.",
              "Frameworks: Angular, React.",
              "Other: Git/GitHub."],
    "biopic": "images/new_photo.jpg"
};


bio.display = function () {
    const formattedName = HTMLheaderName.replace("%data%", bio.name);

    const formattedRole = HTMLheaderRole.replace("%data%", bio.role);

    const formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    const formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    const formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    const formattedLinkedin = HTMLlinkedin.replace("%data%", bio.contacts.linkedin);
    const formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    const formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    const formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);


    //	$("#header").prepend(HTMLcontactGeneric);
    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    $("#topContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedLinkedin, formattedLocation);
    $("#footerContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedLinkedin, formattedLocation);
    $("#header").append(formattedWelcomeMsg);
    $("#header").append(formattedBioPic);
    $("#header").append(HTMLskillsStart);

    for (i in bio.skills) {
        const formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
        $("#skills").append(formattedSkill);
    }
};

const work = {
    "jobs": [
        {
            "employer": "Freelancer",
            "title": "Front-End Web Developer",
            "location": "Gdansk, Poland",
            "dates": "2018",
            "description": ""
            // "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, unde eligendi ullam eos soluta molestias neque error, illum ea corporis quas vero facilis aliquam assumenda dolorum fugit enim libero hic temporibus veritatis eveniet voluptate quibusdam vitae voluptates modi. Ipsa et porro, aspernatur soluta omnis eveniet a facilis praesentium explicabo autem."
            
        },
        // {
        //     "employer": "OMNISystem",
        //     "title": "Business owner",
        //     "location": "Warszawa, Poland",
        //     "dates": "2014",
        //     "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, unde eligendi ullam eos soluta molestias neque error, illum ea corporis quas vero facilis aliquam assumenda dolorum fugit enim libero hic temporibus veritatis eveniet voluptate quibusdam vitae voluptates modi. Ipsa et porro, aspernatur soluta omnis eveniet a facilis praesentium explicabo autem."
		// },
        // {
        //     "employer": "SMARTGLONASS Ltd.",
        //     "title": "Business owner",
        //     "location": "Kotlas, Rusia",
        //     "dates": "2012",
        //     "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, unde eligendi ullam eos soluta molestias neque error, illum ea corporis quas vero facilis aliquam assumenda dolorum fugit enim libero hic temporibus veritatis eveniet voluptate quibusdam vitae voluptates modi. Ipsa et porro, aspernatur soluta omnis eveniet a facilis praesentium explicabo autem."
		// }
			]
};

work.display = function () {
    for (i in work.jobs) {
        const formatteEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
        const formatteTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
        const formatteLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
        const formatteDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
        const formatteDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);

        $("#workExperience").append(HTMLworkStart);
        $(".work-entry:last").append(formatteEmployer);
        $(".work-entry:last a.work").append(formatteTitle);
        $(".work-entry:last").append(formatteLocation);
        $(".work-entry:last").append(formatteDates);
        $(".work-entry:last").append(formatteDescription);
    }

};

const education = {
    "schools": [
        {
            "name": "Arkhangelsk State Technical University",
            "location": "Archangelsk, Rusia",
            "degree": "Engineer",
            "majors": ["Construction and Research of Motor Vehicles"],
            "dates": "2005",
            "url": "https://narfu.ru/en/"
		}
	],
    "onlineCourses": [
        {
            "title": "Front-End Web Developer",
            "school": "Udacity",
            "dates": "2018",
            "url": "https://www.udacity.com"
		}
	]
};

education.display = function () {
    for (i in education.schools) {

        const formatteName = HTMLschoolName.replace("%data%", education.schools[i].name);
        const formatteLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
        const formatteDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
        const formatteMajors = HTMLschoolMajor.replace("%data%", education.schools[i].majors);
        const formatteDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
        const formatteUrl = HTMLschoolURL.replace("%data%", education.schools[i].url);
        $("#education").append(HTMLschoolStart);
        $(".education-entry").append(formatteName);
        $(".education-entry a.school").append(formatteDegree);
        $(".education-entry").append(formatteDates);
        $(".education-entry").append(formatteLocation);
        $(".education-entry").append(formatteMajors);
        $(".education-entry").append(formatteUrl);
    }


    for (i in education.onlineCourses) {
        const formatteOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
        const formatteOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
        const formatteOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
        const formatteOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url);
        $("#education").append(HTMLonlineClasses);
        $(".online-classes").append(formatteOnlineTitle);
        $(".online-classes a.online").append(formatteOnlineSchool);
        $(".online-classes").append(formatteOnlineDates);
        $(".online-classes").append(formatteOnlineURL);
    }

};

const projects = {
    "projects": [
        {
            "title": "This project uses API restcountries",
            "dates": "2022",
            "description": "Instructions <br>Run ng serve for a dev server. Navigate to http://localhost:4200/. The application will automatically reload if you change any of the source files. <a href='https://guschins.github.io/gwo/' target='blank'>Demo</a> <a href='https://github.com/GuschinS/gwo' target='blank'>See code</a>",
            "images": "images/angular_gwo_small.png"
		},
        {
            "title": "MyReads Project",
            "dates": "2018",
            "description": "This is myreads web project for Udacity FEWD Nanodegree. The bookshelf application allows you to select and classify the books you have read, are currently reading or want to read.<br>To run locally:<br>git clone https://github.com/GuschinS/reactnd-project-myreads.git<br>cd reactnd-project-myreads<br>npm install<br>npm start<br><a href='https://github.com/GuschinS/reactnd-project-myreads' target='blank'>See code</a>",
            "images": "images/MyReads_small.png"
		},
        {
            "title": "Pixel Art Maker",
            "dates": "2018",
            "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, unde eligendi ullam eos soluta molestias neque error, illum ea corporis quas vero facilis aliquam assumenda dolorum fugit enim libero hic temporibus veritatis eveniet voluptate quibusdam vitae voluptates modi. Ipsa et porro, aspernatur soluta omnis eveniet a facilis praesentium explicabo autem.<a href='https://guschins.github.io/project-pixel-art-maker/' target='blank'>Playing</a> <a href='https://github.com/GuschinS/project-pixel-art-maker' target='blank'>See code</a>",
            "images": "images/pam1_198x206.png"
		},
        {
            "title": "Restaurant Reviews",
            "dates": "2018",
            "description": "<br>To run locally:<br>In a terminal, check the version of Python you have: python -V.<br>If you have Python 2.x, spin up the server with: python -m SimpleHTTPServer 8000 (or some other port, if port 8000 is already in use.)<br>For Python 3.x, you can use: python -m http.server.<br>If you don't have Python installed, navigate to Python's website to download and install the software.<br>With your server running, visit the site: http://localhost:8000<br><a href='https://github.com/GuschinS/restaurant-udacity-stg1' target='blank'>See code</a>",
            "images": "images/rr_small.png"
		},
        {
            "title": "Classic Arcade Game Clone",
            "dates": "2018",
            "description": "Instructions <br>The player must go to the top, avoiding a collision with the bugs. In a collision, the player loses 1 life. 3 collisions - the end of the game. When a player reaches the top, he gets 10 points and returns to the starting position. Each time, the speed of beetles increases. <a href='https://guschins.github.io/frontend-nanodegree-arcade-game/' target='blank'>Playing</a> <a href='https://github.com/GuschinS/frontend-nanodegree-arcade-game/tree/master' target='blank'>See code</a>",
            "images": "images/ag_small.png"
		},
        {
            "title": "Memory game",
            "dates": "2017",
            "description": "Dependencies <br>I create this game using my own dom methods to keep the code clean. It does not depend on third-party libraries. No more jQuery and Boostrap. Just HTML, CSS and JavaScript! I find that the new Udacity courses on ES6 are amazing! <br>Instructions <br>The game is built using simple HTML, CSS and JavaScript. Click on the map to open it. Maps will be flipped if the next card does not match the open one. Your score will depend on the moves taken to open all the cards. The less moves, the better. <a href='https://guschins.github.io/fend-project-memory-game/' target='blank'>Playing</a> <a href='https://github.com/GuschinS/fend-project-memory-game' target='blank'>See code</a>",
            "images": "images/gm1_198x204.png"
		}
	]
};

projects.display = function () {
    $("#projects").append(HTMLprojectStart);
    for (i in projects.projects) {
        const formatteTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
        const formatteDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
        const formatteDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
        const formatteImages = HTMLprojectImage.replace("%data%", projects.projects[i].images);

        $(".project-entry").append(formatteTitle);
        $(".project-entry").append(formatteDates);
        $(".project-entry").append(formatteDescription);
        $(".project-entry").append(formatteImages);
    }
    $("#mapDiv").append(googleMap);

};

bio.display();
work.display();
education.display();
projects.display();
