function subscribe(e){
  e.preventDefault();
  const el = document.getElementById('formOk');
  const email = document.getElementById('email').value.trim();
  if(!email){ return false; }
  el.textContent = `✅ You're on the list: ${email}`;
  document.getElementById('email').value = '';
  return false;
}

function contact(e){
  e.preventDefault();
  const ok = document.getElementById('contactOk');
  ok.textContent = '✅ Message sent (demo). Connect this form to Formspree / Google Forms when ready.';
  e.target.reset();
  setTimeout(()=>{ ok.textContent = ''; }, 3500);
  return false;
}

document.getElementById('year').textContent = new Date().getFullYear();
