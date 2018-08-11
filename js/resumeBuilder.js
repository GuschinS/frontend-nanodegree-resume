/*
This is empty on purpose! Your code to build the resume will go here.
 */

const bio = {
	"name": "Sergei Gushchin",
	"role": "Front-End Developer",
	"contacts": {
		"mobile": "797-807-995",
		"email": "guschins@gmail.com",
		"github": "GuschinS",
		"twitter": "@guschins",
		"location": "Gdansk, Poland"
	},
	"welcomeMessage": "Hello I'm Sergei and I am a Front-End Web Developer",
	"skills": ["Languages: JavaScript, HTML5, CSS3.",
              "Frameworks/library: jQuery, Bootstrap, Grunt.",
              "Other: Git/GitHub, Brackets."],
	"biopic": "images/fry.jpg"
};


bio.display = function () {
	const formattedName = HTMLheaderName.replace("%data%", bio.name);

	const formattedRole = HTMLheaderRole.replace("%data%", bio.role);

	const formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	const formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	const formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	const formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	const formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	const formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);


	//	$("#header").prepend(HTMLcontactGeneric);
	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);
	$("#topContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedLocation);
	$("#footerContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedLocation);
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
			"employer": "Udacity",
			"title": "Front-End Developer",
			"location": "Gdansk, Poland",
			"dates": "2018",
			"description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, unde eligendi ullam eos soluta molestias neque error, illum ea corporis quas vero facilis aliquam assumenda dolorum fugit enim libero hic temporibus veritatis eveniet voluptate quibusdam vitae voluptates modi. Ipsa et porro, aspernatur soluta omnis eveniet a facilis praesentium explicabo autem."
		},
		{
			"employer": "OMNISystem",
			"title": "Director",
			"location": "Warszawa, Poland",
			"dates": "2014",
			"description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, unde eligendi ullam eos soluta molestias neque error, illum ea corporis quas vero facilis aliquam assumenda dolorum fugit enim libero hic temporibus veritatis eveniet voluptate quibusdam vitae voluptates modi. Ipsa et porro, aspernatur soluta omnis eveniet a facilis praesentium explicabo autem."
		},
		{
			"employer": "SMARTGLONASS Ltd.",
			"title": "Director",
			"location": "Kotlas, Rusia",
			"dates": "2012",
			"description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, unde eligendi ullam eos soluta molestias neque error, illum ea corporis quas vero facilis aliquam assumenda dolorum fugit enim libero hic temporibus veritatis eveniet voluptate quibusdam vitae voluptates modi. Ipsa et porro, aspernatur soluta omnis eveniet a facilis praesentium explicabo autem."
		}
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
			"name": "Archangelsk University of Technology",
			"location": "Archangelsk, Rusia",
			"degree": "Engineer",
			"majors": ["Construction and Research of Motor Vehicles"],
			"dates": "2005",
			"url": "https://www.qqq.com"
		}
	],
	"onlineCourses": [
		{
			"title": "FEWD",
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
		const formatteUrl = HTMLprojectTitle.replace("%data%", education.schools[i].url);
		$("#education").append(HTMLschoolStart);
		$(".education-entry").append(formatteName);
		$(".education-entry .school").append(formatteDegree);
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
		$(".online-classes .online").append(formatteOnlineSchool);
		$(".online-classes").append(formatteOnlineDates);
		$(".online-classes").append(formatteOnlineURL);
	}

};

const projects = {
	"projects": [
		{
			"title": "title",
			"dates": "2017",
			"description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, unde eligendi ullam eos soluta molestias neque error, illum ea corporis quas vero facilis aliquam assumenda dolorum fugit enim libero hic temporibus veritatis eveniet voluptate quibusdam vitae voluptates modi. Ipsa et porro, aspernatur soluta omnis eveniet a facilis praesentium explicabo autem.",
			"images": "images/gm_small.png"
		},
		{
			"title": "title2",
			"dates": "2018",
			"description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, unde eligendi ullam eos soluta molestias neque error, illum ea corporis quas vero facilis aliquam assumenda dolorum fugit enim libero hic temporibus veritatis eveniet voluptate quibusdam vitae voluptates modi. Ipsa et porro, aspernatur soluta omnis eveniet a facilis praesentium explicabo autem.",
			"images": "images/pam_195x156.png"
		},
				{
			"title": "title3",
			"dates": "2018",
			"description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, unde eligendi ullam eos soluta molestias neque error, illum ea corporis quas vero facilis aliquam assumenda dolorum fugit enim libero hic temporibus veritatis eveniet voluptate quibusdam vitae voluptates modi. Ipsa et porro, aspernatur soluta omnis eveniet a facilis praesentium explicabo autem.",
			"images": "images/ag_small.png"
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
