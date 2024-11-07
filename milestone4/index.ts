// Get references to the form and display area
const formEl = document.getElementById("resume-form") as HTMLFormElement;
const resumeDisplayEl = document.getElementById("resume-display") as HTMLDivElement;
const profilePictureInput = document.getElementById("profile-picture") as HTMLImageElement;

// Handle form submission
formEl.addEventListener('submit', (event: Event) => {
  event.preventDefault(); // prevent page reload
  // Collect input values
  const name = (document.getElementById("name") as HTMLInputElement).value
  const email = (document.getElementById("email") as HTMLInputElement).value
  const phone = (document.getElementById("phone") as HTMLInputElement).value
  const education = (document.getElementById("education") as HTMLInputElement).value
  const experience = (document.getElementById("experience") as HTMLInputElement).value
  const skills = (document.getElementById("skills") as HTMLInputElement).value
  // const profilePicture = profilePictureInput.files[0]; 

  //  Generate the resume for content dynamically
  const resumeHtml = `
    <h2><b>shareable Resume</b></h2>
     ${profilePicture ? `<img src="${URL.createObjectURL(profilePicture)}">` : ''}
    <h3>Personal Information</h3>
    <p><b>Name:</b><span contenteditable="true"${name}</span></p>
    <p><b>Email:</b><span contenteditable="true"${email}</span></p>
    <p><b>Phone:</b><span contenteditable="true"${phone}</span></p>

    <h3>Education</h3>
    <p contenteditable="true">${education}</p>

    <h3>Experience</h3>
    <pcontenteditable="true" >${experience}</p>

    <h3>Skills</h3>
    <p contenteditable="true">${skills}</p>
    `;
  // Display the Generated resume
  if (resumeDisplayEl) {
    resumeDisplayEl.innerHTML = resumeHtml;
  } else {
    console.error('The resume display element is missing.');
  }
})
