var form = document.getElementById('resume f');
var resumeDisplayElement = document.getElementById('resume-display');
//submission
form.addEventListener('submit', function (event) {
    event.preventDefault();
    //input values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var EXPERIANCE = document.getElementById('EXPERIANCE').value;
    var SKILLS = document.getElementById('SKILLS').value;
    var resumeHTML = "\n    <h2><b>Resume</b></>\n    <h3>Personal Information</h3>\n    <p><b>Name:</b>".concat(name, "</p>\n    <p><b>Name:</b>").concat(email, "</p>\n    <p><b>Name:</b>").concat(phone, "</p>\n\n    <h3>Education</h3>\n     <p>").concat(education, "</p>\n\n      <h3>Experiance</h3>\n     <p>").concat(EXPERIANCE, "</p>\n\n      <h3>SKILLS</h3>\n     <p>").concat(SKILLS, "</p>\n\n    ");
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error('The resume display element is missing.');
    }
});
