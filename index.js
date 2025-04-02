document.addEventListener("DOMContentLoaded", function() {
    // Select the paragraph element with id="text"
    const paragraph = document.getElementById("text");
    
    // Change the text content of the paragraph
    paragraph.textContent = "This is really cool!";
  });
  
  // This log will show when the script loads, before the DOM is ready
  console.log("This console.log() fires when index.js loads - before DOMContentLoaded is triggered");