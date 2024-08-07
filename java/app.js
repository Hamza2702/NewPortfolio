// function footer(){
//     var foot = '<a class="navButton" href="https://github.com/Hamza2702"><img id="githubIcon" src="images/github.png" alt="GitHub" width="50"></a>'; // GitHub
//     foot += '<a class="navButton" href="https://www.linkedin.com/in/hamza-khan-108635292/"><img id="linkedinIcon" src="images/linkedIn.png" alt="LinkedIn" width="50"></a>'; // LinkedIn
//     return foot;
// }

// document.getElementById("footerBar").innerHTML = footer();

// Get current age
function getAge(){
    var dob = new Date("12/27/2002"); // My Date of Birth
    var today = new Date();
    var age = today.getFullYear() - dob.getFullYear();
    var m = today.getMonth() - dob.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
        age--;
    }
    return "My name is <b>Hamza Khan</b> and I am a <u>" + age + "</u> year old programmer"; // Return title message.
}

if(document.URL.includes("about-me.html")){ // Only on the index page, to stop errors on other pages.
    document.getElementById("age").innerHTML = getAge();
}
