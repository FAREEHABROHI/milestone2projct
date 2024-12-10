const form =document.getElementById('resume f') as HTMLFormElement
const resumeDisplayElement=document.getElementById('resume-display') as HTMLDivElement
//submission
form.addEventListener('submit',(event:Event) =>{
    event.preventDefault();
    //input values
    const name = (document.getElementById('name') as HTMLInputElement).value
    const email= (document.getElementById('email') as HTMLInputElement).value
    const phone = (document.getElementById('phone') as HTMLInputElement).value
    const education = (document.getElementById('education') as HTMLInputElement).value
    const EXPERIANCE = (document.getElementById('EXPERIANCE') as HTMLInputElement).value
    const SKILLS = (document.getElementById('SKILLS') as HTMLInputElement).value

    const resumeHTML =`
    <h2><b>Resume</b></>
    <h3>Personal Information</h3>
    <p><b>Name:</b>${name}</p>
    <p><b>Name:</b>${email}</p>
    <p><b>Name:</b>${phone}</p>

    <h3>Education</h3>
     <p>${education}</p>

      <h3>Experiance</h3>
     <p>${EXPERIANCE}</p>

      <h3>SKILLS</h3>
     <p>${SKILLS}</p>

    `;
    if(resumeDisplayElement){
        resumeDisplayElement.innerHTML = resumeHTML;
    }else {
        console.error('The resume display element is missing.');
    }

    
});