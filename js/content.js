/////////////////////////// content
nav = document.querySelector("#nav_ul");

var lang = "pt-br";

async function update_content(){
    switch(lang){
        case ("pt-br"):
            var response = await fetch('./content/pt-br.json');
            break;
        case ("en-us"):
            var response = await fetch('./content/en-us.json');
            break;
        default:
            var response = await fetch('./content/pt-br.json');
            break;
        
    }
    var content = await response.json();

    // nav
    document.querySelector("#nav-home").innerHTML = content['nav']['home'];
    document.querySelector("#nav-about").innerHTML = content['nav']['about'];
    document.querySelector("#nav-skills").innerHTML = content['nav']['skills'];
    document.querySelector("#nav-projects").innerHTML = content['nav']['projects'];
    document.querySelector("#nav-contact").innerHTML = content['nav']['contact'];

    // smalldescription
    document.querySelector("#greeting").innerHTML = content['greeting'];
    document.querySelector("#smalldescription").innerHTML = content['smalldescription'];
}

update_content();

////////////////////////// set lang buttons
pt_button = document.querySelector("#pt-br_flag");
en_button = document.querySelector("#en-us_flag");

pt_button.addEventListener('click', (e) => {
    e.preventDefault();
    lang = "pt-br";
    update_content();
});

en_button.addEventListener('click', (e) => {
    e.preventDefault();
    lang = "en-us";
    update_content();
});