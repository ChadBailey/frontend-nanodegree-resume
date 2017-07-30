var bio = {
	"name"					:"Chad Bailey",
	"role"					:"Software Developer",
	"contacts": {
		"mobile"		: "(904) 469-0689",
		"email"			: "admin@chadbailey.me",
		"linkedin"	: ["https://www.linkedin.com/in/chad-bailey-7375a934/","Chad Bailey"],
		"github"		: "ChadBailey",
		"twitter"		: "ChadBailey_me",
		"blog" 			: ["http://www.chadbailey.me","chadbailey.me"],	//Must be a list of 2 items, item 0 must be the string of the URL, item 1 must be the display name
		"location"	: "Wylie, TX"
	},
	"welcomeMessage":"Nerd, Lifelong Learner, INTJ, Eagle, Gamer",
	"biopic"				:"images/fry.jpg",
	"skills"			 	:["Python","SQL","Linux Administration","Open Source Software"],
	display: function() {
		var formattedName = HTMLheaderName.replace("%data%", bio.name);							//Name
		var formattedRole = HTMLheaderRole.replace("%data%",bio.role);							//Role
		var formattedContacts = ""; //Placeholder to make the order obvious, and initialize the variable
		var formattedPicture = HTMLbioPic.replace("%data%",bio.biopic); 						//Picture
		var formattedWelcome = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage); //Welcome Msg
		var formattedSkills = ""; //Placeholder to make the order obvious, and initialize the variable
		for (var key in bio.contacts) {
			if (bio.contacts.hasOwnProperty(key) === true) {
				var value = bio.contacts[key];
				switch(key) {
					case "mobile":
						var theme = HTMLmobile.replace("%data%",'<a href="tel:%data%" class="seamless-link">%data%</a>');
						break;
					case "email":
						theme = HTMLemail.replace("%data%",'<a href="mailto:%data%" class="seamless-link">%data%</a>');
						break;
					case "twitter":
						theme = HTMLtwitter.replace("%data%",'@<a href="https://twitter.com/%data%" class="seamless-link" target="_blank">%data%</a>');
						break;
					case "github":
						theme = HTMLgithub.replace("%data%",'@<a href="https://github.com/%data%" class="seamless-link" target="_blank">%data%</a>');
						break;
					case "blog":
						theme = HTMLblog.replace("%data%",'<a href=' + value[0] + ' class="seamless-link" target="_blank">' + value[1] + '</a>');
						break;
					//Added linked-in, because that seems appropriate for a resume
					case "linkedin":
						//No need to make a whole new theme, just hijack the blog one
						theme = HTMLblog.replace("blog","linked in");
						theme = theme.replace("%data%",'<a href=' + value[0] + ' class="seamless-link" target="_blank">' + value[1] + '</a>');
						break;
					case "location":
						//Add link to search for location on Google maps, sick enhancement!
						theme = HTMLlocation.replace("%data%",'<a href="https://google.com/maps/search/%data%" class="seamless-link" target="_blank">%data%</a>');
						break;
					default:
						theme = HTMLcontactGeneric;
						break;
				}
				formattedContacts = formattedContacts + replaceAll(theme.replace("%contact%",key),"%data%",value);
			}
		}
		if (bio.skills.length > 0) {
			for (var i = 0; i < bio.skills.length; i++) {
				formattedSkills = formattedSkills + HTMLskills.replace("%data%", bio.skills[i]);
			}
		}
		//Order matters!
		$("#header").prepend(formattedName + formattedRole); //We're using prepend here, to place the name/role above #topContacts in the template
		$("#topContacts").append(formattedContacts); 	//Add Contact Info
		$("#footerContacts").append(formattedContacts);
		$("#header").append(formattedPicture);				//Add Picture
		$("#header").append(formattedWelcome);				//Add Welcome msg
		$("#header").append(HTMLskillsStart);					//Must be added here, due to #skills not existing until it is added (prefer this to be included in the skills formatting routine)
		$("#skills").append(formattedSkills);					//Add skills
	}
};
var work = {
	"jobs": [
		{
			"employer":"AT&T",
			"title":"Sr. Specialist-Applications Developer",
			"location": "Richardson, TX",
			"dates":"Apr 2017 - current",
			"description":"Develop onboarding automation software using Python, HTML/JavaScript/CSS, and Visual Basic for Applications."
		},
		{
			"employer":"AT&T",
			"title":"Associate-Applications Developer",
			"location": "Richardson, TX",
			"dates":"Oct 2016 - Apr 2017",
			"description":"Repair and maintain tool built in Excel Visual Basic for Applications interfacing with Microsoft SharePoint"
		},
		{
			"employer":"AT&T",
			"title":"U-Verse Data Analytics Team",
			"location": "Richardson, TX",
			"dates":"Apr 2016 - Oct 2016",
			"description":"Develop solutions for reporting and automation using SQL, Linux Ubuntu, and SharePoint"
		},
		{
			"employer":"AT&T",
			"title":"U-Verse Tier-II SOS",
			"location": "Richardson, TX",
			"dates":"Apr 2015 - Apr 2016",
			"description":"Resolve escalated customer issues with U-Verse service. At end of term, I was placed on a special project for analyzing Residential Gateway firmware issues. My role was to lead a team of 10 agents who called customers surveying their experience with firmware upgrades. I was responsible for reporting, development and improvement of call scripts, development and maintenance of Microsoft SharePoint, and reporting findings back to engineering team."
		},
		{
			"employer":"AT&T",
			"title":"Process Lead (M&P)",
			"location": "Jacksonville, FL",
			"dates":"Feb 2011 - Apr 2015",
			"description":"I was placed on a special team responsible for handling call center methods and procedures. My responsibilities included technical documentation, tool building, report building, and SharePoint site collection administration for the entire DSL organization. While there, I created a tool for tracking agent performance in real time for management. The use of this tool expanded wildly resulting in its use being required across the entire DSL Care organization. The tool is still in use at the time of writing this (Jul 2017). This tool was designed using Microsoft Excel Visual Basic for Applications and uses Microsoft SharePoint for record keeping."
		},
		{
			"employer":"AT&T",
			"title":"Small Business DSL Technical Support Rep II",
			"location": "Jacksonville, FL",
			"dates":"Apr 2010 - Feb 2011",
			"description":"Assisted small business customers calling in for assistance with DSL internet service. I continued taking residential calls, and my assistance for technicians and overseas escalations extended to small business customers."
		},
		{
			"employer":"AT&T",
			"title":"Residential DSL Technical Support Rep II",
			"location": "Jacksonville, FL",
			"dates":"Nov 2009 - Apr 2010",
			"description":"Assisted residential customers calling in for assistance with DSL internet service. Being Tier-II, I also assisted technicians during installs, and took escalations from the overseas helpdesk."
		},
		
	],
	display: function() {
		for (var job = 0; job < work.jobs.length;job++) {
			//Apply themes to data
			var formattedEmployerName = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
			var formattedJobTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
			var formattedFullTitle = formattedEmployerName + formattedJobTitle;
			var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
			var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);

			//Apply themed data to DOM
			$("#workExperience").append(HTMLworkStart);
			$(".work-entry:last").append(formattedFullTitle);
			$(".work-entry:last").append(formattedDates);
			$(".work-entry:last").append(formattedDescription);
		}
	}
};

/*The criteria states that projects should contain an array of objects with
      projects: array of objects with
            title: string 
            dates: string (works with a hyphen between them)
            description: string
            images: array with string urls
      display: function

It is impossible to add a function as an element of an array, so I am making this an object instead.
I am using a duplicated name (projects.projects) containing my array of objects, and 
a function for displaying.
*/
var projects = {
	"projects": [
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
			"images": ["images/197x148.gif","images/197x148.gif"]
		},
	],
	display: function() {
    var formattedProject = "";
		if (projects.projects.length > 0) {
			for (p = 0;p < projects.projects.length;p++) {
				$('#projects').append(HTMLprojectStart);
				var formattedProjectTitle = HTMLprojectTitle.replace("%data%",projects.projects[p].title);
				var formattedProjectDates = HTMLprojectDates.replace("%data%",projects.projects[p].dates);
				var formattedProjectDescription = HTMLprojectDescription.replace("%data%",projects.projects[p].description);
				var formattedProjectImages = "";
				if (projects.projects[p].images.length > 0) {
					for (i = 0;i < projects.projects[p].images.length;i++) {
						formattedProjectImages = formattedProjectImages.concat(HTMLprojectImage.replace("%data%",projects.projects[p].images[i]));
					}
				}
				formattedProject = formattedProjectTitle.concat(formattedProjectDates,formattedProjectDescription,formattedProjectImages);
				$('.project-entry:last').append(formattedProject);
			}
		}
	}
};

var education = {
	"schools": [
		{
			"name": "Boyd County High School",
			"location": "Ashland, KY",
			"degree": "High School Diploma",
			"dates": 2004,
			/*
				NOTE TO REVIEWER/COURSE MAKER:

				I have included the URL here as a result of the requirements listed in section 3.21 of the course. The requirements currently state:

					education contains an array of schools. Each object in the schools array contains name, location, degree dates and url strings, and amajors array of major strings.

				In addition, the project details listed in Poject section 3 show a structure of:
					schools: array of objects with
							name: string
							location: string
							degree: string
							majors: array of strings
							dates: string (works with a hyphen between them)
							url: string
					onlineCourses: array of objects with
							title: string
							school: string
							dates: string (works with a hyphen between them)
							url: string
					display: function

				Having said this, the school URL template (HTMLschoolURL) is conspicuously missing. Due to this, I believe this is an error in the instructions given, however, I thought
				the URL actually was kindof neat so I left it in making optional

			*/
			"url": "http://www.boyd.k12.ky.us/1/Home",
			"majors": ["Cisco CCNA","A+ PC Repair"]
		}
	],
	"onlineCourses": [
		{
			"title": "Intro to Programming Nanodegree",
			"school": "Udacity",
			"dates": "2017 - in progress",
			"url": "https://www.udacity.com/course/intro-to-programming-nanodegree--nd000"
		},
		{
			"title": "Critical Thinking",
			"school": "Linked-in Learning",
			"dates": "April 29, 2017",
			"url": "https://www.linkedin.com/learning/critical-thinking"
		},
		{
			"title": "Adobe XD: Design a Website",
			"school": "Linked-in Learning",
			"dates": "April 1, 2017",
			"url": "https://www.linkedin.com/learning/design-a-website-with-adobe-xd"
		}
	],
	display: function () {
		//Feedback to course creator: HTMLschoolStart should be HTMLeducationStart, because this is the education section which contains both schools and online classes.
		//														Additionally, "Start" is confusing as it implies that there is an HTMLschoolEnd. Using a name like "section", "initialize", or "div" might make this less misleading.
		//														Also switching between the terms "online classes" versus "online courses" is confusing as well.
		$("#education").append(HTMLschoolStart);
		//I wanted my links to work, so I made my own template
		var HTMLeducationUrl = '<br><a href="%url%" target="_blank">%name%</a>';
		var formattedSchools = ""; //Initialize
		var formattedSchoolName;
		var formattedMajors;
    var formattedSchoolDates;
    var formattedSchoolLocation;
    var formattedName;
    var formattedDates;
    var formattedUrl;
    if (education.schools.length > 0) {
			for (var i = 0;i < education.schools.length; i++) {
				//I baked the degree into the name formatting
				if ("url" in education.schools[i]) {
					formattedSchoolName 	= HTMLeducationUrl.replace("%name%",education.schools[i].name + ' - ' + education.schools[i].degree).replace("%url%",education.schools[i].url);
				}
				else {
					formattedSchoolName 	= HTMLeducationUrl.replace("%name%",education.schools[i].name + ' - ' + education.schools[i].degree).replace("%url%","#");
				}
				formattedSchoolDates		= HTMLschoolDates.replace("%data%",education.schools[i].dates);
				formattedSchoolLocation = HTMLschoolLocation.replace("%data%",education.schools[i].location);
				formattedMajors 				= ""; //Initialize
				if (education.schools[i].majors.length > 0) {
					for (var m = 0;m < education.schools[i].majors.length; m++) {
						formattedMajors = formattedMajors.concat(HTMLschoolMajor.replace("%data%",education.schools[i].majors[m]));
					}
				}
				formattedSchools = formattedSchools.concat(formattedSchoolName,formattedSchoolDates,formattedSchoolLocation,formattedMajors);
			}
			$(".education-entry").append(formattedSchools);
		}
    var formattedOnlineCourses = ""; //Initialize
		if (education.onlineCourses.length > 0) {
			//Included here, as to only show when online classes exist
			$("#education").append(HTMLonlineClasses);
			for (var j = 0;j < education.onlineCourses.length;j++) {
				if (j === 0) { $("#education").append(formattedOnlineCourses); }
				$("#education").append(HTMLschoolStart);
				if ("url" in education.onlineCourses[j]) {
					formattedName = HTMLeducationUrl.replace("%url%",education.onlineCourses[j].url).replace("%name%",education.onlineCourses[j].title + ' - ' + education.onlineCourses[j].school);
				}
				else {
					formattedName = HTMLeducationUrl.replace("%url%","#").replace("%name%",education.onlineCourses[j].title + ' - ' + education.onlineCourses[j].school);
				}
				formattedDates = HTMLonlineDates.replace("%data%",education.onlineCourses[j].dates);
				formattedUrl = HTMLonlineURL.replace('href="#">%data%','href="' + education.onlineCourses[j].url + '" target="_blank">' + education.onlineCourses[j].url);
				formattedOnlineCourses = formattedOnlineCourses.concat(formattedName,formattedDates,formattedUrl);
			}
			$(".education-entry:last").append(formattedOnlineCourses);
		}
	}
};

//maxreplacements prevents infinite loop, and can allow more precise usage
function replaceAll(string,substring,replacestring,maxreplacements) {
  if (maxreplacements < 1) {
    maxreplacements = 5;
  }
	//Using >= 0 here, because the position of the found string could be 0
	var replacements = 0;
	while (string.indexOf(substring) >= 0 && replacements < maxreplacements) {
		string = string.replace(substring,replacestring);
		replacements++;
	}
	return string;
}

//do all the things!
bio.display();
work.display();
projects.display();
education.display();
$("#mapDiv").append(googleMap);
initializeMap();
