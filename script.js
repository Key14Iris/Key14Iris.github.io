const form = document.querySelector("form");
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const response = await fetch(form.action, {
    method: form.method,
    body: new FormData(form),
    headers: { 'Accept': 'application/json' }
  });
  if (response.ok) {
    alert("Thanks! Your message has been sent.");
    form.reset();
  } else {
    alert("Oops! Something went wrong.");
  }
});
