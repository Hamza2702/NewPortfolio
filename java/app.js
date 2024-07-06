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
    return "<u>" + age + "</u> year old programmer"; // Return title message.
}

if(document.URL.includes("index.html")){ // Only on the index page, to stop errors on other pages.
    document.getElementById("age").innerHTML = getAge();
}

// - Contact me -

function validateForm(){ // Validate Form
    if (!checkEmails()){ // Validate emails
        alert("Emails must match.")
        return false;
    }

    if (!checkDate()){ // Validate Date
        alert("Date must be in the future")
        return false;
    }
    
    showPopup(); // Show Pop up
    return false;
}

function checkEmails(){ // Check Emails
    let email1 = document.getElementById('form-email1').value;
    let email2 = document.getElementById('form-email2').value;

    if (email1 == "" || email2 == ""){ // If Empty
        return false;
    }
    return email1 === email2; // If equal.
} 

function checkDate(){ // Check Date
    let projectDate = new Date(document.getElementById('form-date').value);
    let currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + 1); // 1 day into the future

    return projectDate >= currentDate; // If it's in the future

}

function showPopup(){
    // Get user values of everything
    let firstName = document.getElementById('form-fname').value;
    let lastName = document.getElementById('form-lname').value;
    let desc = document.getElementById('form-description').value;
    let email = document.getElementById('form-email1').value; 
    let number = document.getElementById('form-phone').value;
    let contactpref = document.getElementById('form-contact').value;

    let confirmationMessage = `Thank you for your enquiry.\n\n`; // Pop up message
    confirmationMessage += `Name: ${firstName}\n`;
    confirmationMessage += `Date: ${lastName}\n`;
    confirmationMessage += `Description: ${desc}\n`;
    confirmationMessage += `Email: ${email}\n`;
    confirmationMessage += `Number: ${number}\n`;
    confirmationMessage += `Contact Preference: ${contactpref}\n\n`;
    confirmationMessage += `Is this correct?`;

    if (window.confirm(confirmationMessage)){
        alert("Submission sent to 230114030@aston.ac.uk"); // Aston Email Address
        document.getElementById('form').reset(); // Reset form
    }
}