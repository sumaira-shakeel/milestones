// Get references to the form and display area
var formEl = document.getElementById("resume-form");
var resumeDisplayEl = document.getElementById("resume-display");
var profilePictureInput = document.getElementById("profile-picture");
// Handle form submission
formEl.addEventListener('submit', function (event) {
    event.preventDefault(); // prevent page reload
    // Collect input values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var education = document.getElementById("education").value;
    var experience = document.getElementById("experience").value;
    var skills = document.getElementById("skills").value;
    var profilePicture = profilePictureInput.files[0];
    //  Generate the resume for content dynamically
    var resumeHtml = "\n    <h2><b>Editable Resume</b></h2>\n     ".concat(profilePicture ? "<img src=\"".concat(URL.createObjectURL(profilePicture), "\">") : '', "\n    <h3>Personal Information</h3>\n    <p><b>Name:</b><span contenteditable=\"true\"").concat(name, "</span></p>\n    <p><b>Email:</b><span contenteditable=\"true\"").concat(email, "</span></p>\n    <p><b>Phone:</b><span contenteditable=\"true\"").concat(phone, "</span></p>\n\n    <h3>Education</h3>\n    <p contenteditable=\"true\">").concat(education, "</p>\n\n    <h3>Experience</h3>\n    <pcontenteditable=\"true\" >").concat(experience, "</p>\n\n    <h3>Skills</h3>\n    <p contenteditable=\"true\">").concat(skills, "</p>\n    ");
    // Display the Generated resume
    if (resumeDisplayEl) {
        resumeDisplayEl.innerHTML = resumeHtml;
    }
    else {
        console.error('The resume display element is missing.');
    }
});
