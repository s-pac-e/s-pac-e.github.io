const trialForm = document.getElementById('trial-form');
const trialBtn = document.getElementById('trial-btn');

if (trialBtn) {
  trialBtn.addEventListener('click', (event) => {
    event.preventDefault();
    document.querySelector('#schedule')?.scrollIntoView({ behavior: 'smooth' });
  });
}

if (trialForm) {
  trialForm.addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Thanks! Your free trial request has been received. We will contact you shortly.');
    trialForm.reset();
  });
}
const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach((question) => {
  question.addEventListener("click", () => {
    const item = question.parentElement;
    const answer = item.querySelector(".faq-answer");
    const icon = item.querySelector(".faq-icon");

    const isOpen = answer.style.maxHeight;

    // Close all
    document.querySelectorAll(".faq-answer").forEach((a) => {
      a.style.maxHeight = null;
    });

    document.querySelectorAll(".faq-icon").forEach((i) => {
      i.textContent = "+";
    });

    // Open clicked item
    if (!isOpen) {
      answer.style.maxHeight = answer.scrollHeight + "px";
      icon.textContent = "−";
    }
  });
});