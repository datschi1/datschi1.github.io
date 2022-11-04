// template_sx8tyqt
// service_5zpdfzg
// B7GqQT_chh3wgoW0W

function contact(event) {
    event.preventDefault()
    const loading = document.querySelector(".modal__overlay--loading");
    const success = document.querySelector(".modal__overlay--success");
    loading.classList += " modal__overlay--visible";
    emailjs
        .sendForm(
            'service_5zpdfzg',
            'template_sx8tyqt',
            event.target,
            'B7GqQT_chh3wgoW0W'
    ).then(() => {
        loading.classList.remove("modal__overlay--visible");
        success.classList += " modal__overlay--visible";
    }).catch(() => {
        loading.classList.remove("modal__overlay--visible");
        alert(
            "The email service is down. Please contact me directly on datschigordiashvili@gmail.com"
        )
    })
    
}