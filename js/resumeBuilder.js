var work = {
	"jobs": [
		{
			"employer":"AT&T",
			"title":"Sr. Specialist-Applications Developer",
			"location": "Richardson, TX",
			"dates":"2009 - current",
			"description":"Develop onboarding automation software using Python, HTML/JavaScript/CSS, and Visual Basic for Applications."
		}
	],
	add: function() {
		if (bio.skills.length > 0) {
			$('#header').append(HTMLskillsStart);
			for (var i = 0; i < bio.skills.length; i++) {
				$('#skills').append(
					HTMLskills.replace("%data%", bio.skills[i])
				);
			}
		}
	}
}

var projects = [
	{
		"title":"Key Defender Gaming Software",
		"dates":"2017",
		"description":"Gaming software to prevent unintentional keystrokes from interrupting video game play.",
		"images": []
	},
	{
		"title":"Tabula Rasa",
		"dates":"2017",
		"description": "Python automation platform for automating addition of new employees to internal company tools",
		"images": []
	}
]

//projects.display = function() {
//	for (project in projects.projects)
//}

var bio = {
	"name"					:"Chad Bailey",
	"role"					:"King Emporer",
	"welcomeMessage":"Hello, and welcome",
	"biopic"				:"images/fry.jpg",
	"skills"			 	:["Paying","tha","billz"],
	"contacts": {
		"mobile"		: "(904) 469-0689",
		"email"			: "admin@chadbailey.me",
		"github"		: "ChadBailey",
		"twitter"		: "ChadBailey_me",
		"location"	: "Wylie, TX"
	},
	add: function() {
		var formattedName = HTMLheaderName.replace("%data%", bio.name);
		var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
		var formattedPicture = HTMLbioPic.replace("%data%",bio.biopic);
		var formattedContacts = "" 
		for (var key in bio.contacts) {
			if (bio.contacts.hasOwnProperty(key) === true) {
				var value = bio.contacts[key];
				switch(key) {
					case "mobile":
						var theme = HTMLmobile.replace("%data%",'<a href="tel:%data%" class="seamless-link" target="_blank">%data%</a>');
						break;
					case "email":
						var theme = HTMLemail.replace("%data%",'<a href="mailto:%data%" class="seamless-link" target="_blank">%data%</a>');
						break;
					case "twitter":
						var theme = HTMLtwitter.replace("%data%",'@<a href="https://twitter.com/%data%" class="seamless-link" target="_blank">%data%</a>');
						break;
					case "github":
						var theme = HTMLgithub.replace("%data%",'@<a href="https://github.com/%data%" class="seamless-link" target="_blank">%data%</a>');
						break;
					case "blog":
						var theme = HTMLblog.replace("%data%",'<a href=%url% class="seamless-link" target="_blank">%data%</a>');
						break;
					case "location":
						var theme = HTMLlocation.replace("%data%",'<a href="https://google.com/maps/search/%data%" class="seamless-link" target="_blank">%data%</a>');
						break;
					default:
						var theme = HTMLcontactGeneric;
						break;
				}
				var formattedContacts = formattedContacts + replaceAll(theme.replace("%contact%",key),"%data%",value);
			}
		}
		$("#header").append(formattedName);
		$("#header").append(formattedRole);
		$("#header").append(formattedPicture);
		$("#topContacts").append(formattedContacts);
	}
}
var education = {
	"schools": [
		{
			"name": "Boyd County High School",
			"location": "Ashland, KY",
			"degree": "High School Diploma",
			"dates": 2004,
			"url": "http://www.boyd.k12.ky.us/1/Home"
		}
	],
	"onlineCourses": [
		{
			"title": "Intro to Programming Nanodegree",
			"school": "Udacity",
			"dates": 2017,
			"url": "https://www.udacity.com/course/intro-to-programming-nanodegree--nd000"
		}
	]
}

//maxreplacements prevents infinite loop, and can allow more precise usage
function replaceAll(string,substring,replacestring,maxreplacements = 5) {
	//Using >= 0 here, because the position of the found string could be 0
	replacements = 0
	while (string.indexOf(substring) >= 0 && replacements < maxreplacements) {
		string = string.replace(substring,replacestring)
		replacements++
	}
	return string
}

bio.add();




function displaywork() {
	if (bio.skills.length > 0) {
		$('#header').append(HTMLskillsStart);
		for (var i = 0; i < bio.skills.length; i++) {
			$('#skills').append(
				HTMLskills.replace("%data%", bio.skills[i])
			);
		}
	}
}

displaywork();
for (var job = 0; job < work.jobs.length;job++) {
	$("#workExperience").append(HTMLworkStart);
	//Generate title in format of "Employer - Job Title"
	var formattedEmployerName = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	var formattedJobTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	var formattedFullTitle = formattedEmployerName + formattedJobTitle
	$(".work-entry:last").append(formattedFullTitle);

	//Generate dates
	var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
	$(".work-entry:last").append(formattedDates);

	//Generate description
	var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
	$(".work-entry:last").append(formattedDescription);
}

function logClicks(x,y) {
	console.log("Click X:" + x + " Y:" + y);
}

$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;
	logClicks(x,y);
});
