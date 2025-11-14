document.getElementById('btn').addEventListener('click', () => {
    const msg = document.getElementById('msg');
    msg.textContent = `Deployed at ${new Date().toLocaleString()}`;
  });
  