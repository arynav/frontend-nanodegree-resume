//Interactive Resume: Project 2

var bio = {
	"name" : "Firstname Lastname",
	"role" : "Web Developer",
	"contacts" : {
		"mobile": "555-500-5000",
		"email": "me@gmail.com",
		"github": "me-github",
		"twitter": "me-twitter",
		"location": "Palo Alto"
	},
	"bioPic" : "images/Jellyfish.jpg",
	"welcomeMessage" : "Welcome to my resume of AWESOME ME",
	"skills" : ["skill 1", "skill 2", "skill 3"],
	display : function(){

		var formattedName = HTMLheaderName.replace("%data%", bio.name);
		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
		$("#header").prepend(formattedName + formattedRole);
		
		var contacts = bio["contacts"];
   		var formattedMobile = HTMLmobile.replace("%data%",contacts["mobile"]);
   		var formattedEmail = HTMLemail.replace("%data%",contacts["email"]);
   		var formattedGithub = HTMLgithub.replace("%data%",contacts["email"]);
   		var formattedLocation = HTMLlocation.replace("%data%",contacts["github"]);
   		var allContacts = formattedMobile + formattedEmail + formattedGithub + formattedLocation;
   		$(allContacts).appendTo("#topContacts, #footerContacts");
		var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
		$("#header").append(formattedBioPic);
		var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
		$("#header").append(formattedWelcomeMsg);
		if (bio.skills.length > 0){
			$("#header").append(HTMLskillsStart);
			for (skill in bio.skills){  //image in projects.projects[project].images
				var formattedSkills = HTMLskills.replace("%data%", bio.skills[skill]);
				$("#skills").append(formattedSkills);
			}
		}
	}		
}

bio.display();

var work = {
	"jobs": [
	{
		"employer": "EmployerName 1",
		"title": "JobTitle1",
		"location": "Sunnyvale",
		"dates": "2012 - 2014",
		"description": "Best employee ever:Low gasoline prices for the world's largest user of oil mean more consumer spending for everything else and, thus, faster economic growth. Gas prices — the national average is down to $2.54, according to the Fuel Gauge Report — are the lowest in five years."
	},
	{
		"employer": "EmployerName 2",
		"title": "JobTitle2",
		"location": "Palo Alto",
		"dates": "2006 - 2011",
		"description": "Best employee ever ever: Low gasoline prices for the world's largest user of oil mean more consumer spending for everything else and, thus, faster economic growth. Gas prices — the national average is down to $2.54, according to the Fuel Gauge Report — are the lowest in five years."
	}],
	displayWork : function(){
		for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		var formattedWorkEmp = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		var formattedEmpTitle = formattedWorkEmp + formattedWorkTitle; 
		var formattedJob = formattedWorkDates + formattedWorkLocation + formattedWorkDescription;
		$(".work-entry:last").append(formattedEmpTitle);
		$(".work-entry:last").append(formattedJob);
		
		}
	}
}

work.displayWork();

var projects = {
	"projects": [
	{
		"title": "Project 1 Title",
		"dates": "2010-2011",
		"description": "Project 1 description: Low gasoline prices for the world's largest user of oil mean more consumer spending for everything else and, thus, faster economic growth.",
		"images": [ 
			"images/197x148.gif",
			"images/197x148.gif"
		]
	},
	{
		"title": "Project 2 Title",
		"dates": "2012-2013",
		"description": "Project 2 description: Low gasoline prices for the world's largest user of oil mean more consumer spending for everything else and, thus, faster economic growth.",
		"images": [ 
			"images/197x148.gif",
			"images/197x148.gif"
		]
	}],
	display : function(){
		for (project in projects.projects) {
			$("#projects").append(HTMLprojectStart);
			var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
			$(".project-entry:last").append(formattedProjectTitle);
			var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
			$(".project-entry:last").append(formattedProjectDates);
			var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
			$(".project-entry:last").append(formattedProjectDescription);

			if (projects.projects[project].images.length > 0) {
				for (image in projects.projects[project].images){
					var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
					$(".project-entry:last").append(formattedProjectImage);
				}
			}
		}
	}
}

projects.display();

var education = {
	"schools": [
	{
		"name": "School Name 1",
		"location": "School Location 1",
		"degree": "BS",
		"majors": "CS",
		"dates": 2010
		//"url": "http://www.udacity.com"
	}],
	"onlineCourses": [{
		"title": "Web Development",
		"school":"Udacity",
		"date":2014,
		"url":"http://www.udacity.com"
	}],
	display : function(){
		for (school in education.schools) {
			$("#education").append(HTMLschoolStart);
			var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
			var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
			var formattedSchoolNameDegree = formattedSchoolName + formattedSchoolDegree; 
			$(".education-entry:last").append(formattedSchoolNameDegree);

			var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
			$(".education-entry:last").append(formattedSchoolDates);
			var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
			$(".education-entry:last").append(formattedSchoolLocation);
			var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
			$(".education-entry:last").append(formattedSchoolMajor);
		}
		$(".education-entry:last").append(HTMLonlineClasses);
		for (onlineCourse in education.onlineCourses){
			var formattedOnlineClassesTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title);
			var formattedOnlineClassesSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].school);
			$(".education-entry:last").append(formattedOnlineClassesTitle + formattedOnlineClassesSchool);
			var formattedOnlineClassesDates = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse].date);
			$(".education-entry:last").append(formattedOnlineClassesDates);
			var formattedOnlineClassesURL = HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourse].url);
			$(".education-entry:last").append(formattedOnlineClassesURL);
		}
	}
}
education.display();

$("#mapDiv").append(googleMap);



function locationizer(work) {
    var locationar = [];
    for (job in work.jobs) {
        locationar.push(work.jobs[job].location);
    }
    return locationar;

}
console.log(locationizer(work));



