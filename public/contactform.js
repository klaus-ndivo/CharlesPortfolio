// window.onload = function() {
//     const contactForm = document.getElementById('contact__form')

//     const submitForm = (e) => {
//         e.preventDefault()

//         emailjs.sendForm(
//             "contact_service",
//             "contact__form",
//             this
//         ).then(
//             () => {
//                 return "Message Sent SuccessFully"
//             },
//             (error) => {
//                 return "Message not Sent!"
//             }
//         )
//     }

//     contactForm.addEventListener('submit', submitForm)
// }