document.getElementById('more-about-me-btn').addEventListener('click', function() {
    document.body.classList.toggle('show-terminal');
  });
  
  function closePrompt() {
    // Close the command prompt (you can implement this as needed)
    document.body.classList.remove('show-terminal');
  }
  
  function executeCommand() {
    // Execute the command from the input field (you can implement this as needed)
    const commandInput = document.getElementById("command-input");
    const command = commandInput.value.trim().toLowerCase();
    console.log(`Command executed: ${command}`);
    commandInput.value = "";
  }
