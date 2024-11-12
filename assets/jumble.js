function jumbleText(element) {
    const letters = element.querySelectorAll("span");
    
    letters.forEach(letter => {
      letter.style.transform = `translate(${Math.random() * 10 - 5}px, ${Math.random() * 10 - 5}px)`;
      letter.style.opacity = Math.random() * 0.5 + 0.5;
    });
  }
  
  function resetText(element) {
    const letters = element.querySelectorAll("span");
    
    letters.forEach(letter => {
      letter.style.transform = "translate(0, 0)";
      letter.style.opacity = 1;
    });
  }