var navElement = document.querySelector('.nav')
var offerElement = document.querySelector('#offer')
var hashLinks = document.querySelectorAll('[href^="#"]')
var navToggle = document.querySelector('.nav__toggle')
var navMenu = document.querySelector('.nav__mobile')

window.addEventListener('scroll', function() {
    if (window.scrollY > offerElement.clientHeight){
        navElement.classList.add('nav__scroll')
    } else {
        navElement.classList.remove('nav__scroll')
    }
})

if (hashLinks){
    for (let hashLink of hashLinks) {
        hashLink.addEventListener('click', function(e) {
            e.preventDefault()
            var hash = hashLink.getAttribute('href')
            console.log(hash)
            document.querySelector(hash).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        })
    }
}
navToggle.addEventListener('click', function() {
    navToggle.classList.toggle('nav__toggle--active')
    navMenu.classList.toggle('nav__mobile--active')
})

document.addEventListener("DOMContentLoaded", function() {
    try {
      MicroModal.init({
        awaitCloseAnimation: true, // set to false, to remove close animation
        onShow: function(modal) {
          console.log("micromodal open");
          /**************************
            For full screen scrolling modal, 
            uncomment line below & comment line above
           **************************/
          //addModalContentHeight('tall');
        },
        onClose: function(modal) {
          console.log("micromodal close");
        }
      });
    } catch (e) {
      console.log("micromodal error: ", e);
    }
  });

$(document).ready(function() {

    //E-mail Ajax Send
  $("form").submit(function() { //Change
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "js/mail.php", //Change
      data: th.serialize()
    }).done(function() {
      alert("Заявка отправлена!");
      setTimeout(function() {
        // Done Functions
        th.trigger("reset");
      }, 1000);
    });
    return false;
  });
  
});
  