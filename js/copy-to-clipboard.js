document.addEventListener('DOMContentLoaded', (event) => {
  document.querySelectorAll('pre code').forEach((block) => {
    // Create a copy button
    var button = document.createElement('button');
    button.innerText = 'Copy';
    button.className = 'copy-button';
    block.parentNode.insertBefore(button, block);

    button.addEventListener('click', () => {
      // Copy the code block content to clipboard
      navigator.clipboard.writeText(block.innerText).then(() => {
        button.innerText = 'Copied';
        setTimeout(() => {
          button.innerText = 'Copy';
        }, 2000);
      }).catch((error) => {
        console.error('Copy failed', error);
      });
    });
  });
});
