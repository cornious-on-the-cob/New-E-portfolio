// template_ui6ko94
// service_b0i4yh1
// nLaV8cYYoxuPCiW8E

function contact(event) {
  event.preventDefault();

  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay--success");
  loading.classList += " modal__overlay--visible";

  emailjs
    .sendForm(
      "service_b0i4yh1",
      "template_ui6ko94",
      event.target,
      "nLaV8cYYoxuPCiW8E"
    )
    .then(() => {
      loading.classList.remove("modal__overlay--visible");
      success.classList += " modal__overlay--visible";
    })
    .catch(() => {
      loading.classList.remove("modal__overlay--visible");
      alert(
        "The E-mail service is temporarily unavailable. Please contact me directly at loreadelatorre@gmail.com"
      );
    });
}
