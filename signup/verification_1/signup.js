const steps = document.querySelectorAll('.step');
const progress = document.querySelector('.progress');
function updateProgress(currentStep) {
    steps.forEach((step, index) => {
        if (index < currentStep) {
            step.classList.add('active');
        } else {
            step.classList.remove('active');
        }
    });
    const progressWidth = ((currentStep - 1) / (steps.length - 1)) * 100;
    progress.style.width = `${progressWidth}%`;
}
steps.forEach((step, index) => {
    step.addEventListener('click', () => {
        updateProgress(index + 1);
    });
});

function updateProgress(currentStep) {
    steps.forEach((step, index) => {
        if (index < currentStep - 1) {
            step.classList.add('completed'); 
            step.classList.remove('active');
        } else if (index === currentStep - 1) {
            step.classList.add('active');
            step.classList.remove('completed');
        } else {
            step.classList.remove('active', 'completed');
        }
    });
    const progressWidth = ((currentStep - 1) / (steps.length - 1)) * 100;
    progress.style.width = `${progressWidth}%`;
}

document.getElementById("banking-form").addEventListener("submit", function (event) {
    event.preventDefault();

    alert("Form submitted successfully!");
});



document.getElementById("verificationForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    const verificationProcess = document.getElementById("verificationProcess").value;
    const otpInput = document.getElementById("otpInput").value;
    const verificationMethod = document.getElementById("verificationMethod").value;
    const identityFile = document.getElementById("identityFile").files[0];
  
    if (verificationProcess && otpInput && verificationMethod && identityFile) {
      alert("Form submitted successfully!");
    } else {
      alert("Please fill out all required fields.");
    }
  });
  
  document.getElementById("backButton").addEventListener("click", function() {
    alert("Going back to the previous step!");
  });
  