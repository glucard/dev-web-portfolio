submit = document.querySelector("#submit_mail");
form = document.forms['mail'];

submit.addEventListener('click', (e) => {
    e.preventDefault();
    sender_name = form['name'].value;
    to_email = "georgezambonin@gmail.com"
    subject = form['subject'].value;
    body = form['message'].value + "\n\n" + sender_name;

    params = `mailto:${to_email}?subject=${subject}&body=${body}`;
    window.open(params);
});