function navOpen() {
    var nav = document.getElementById('nav__list'); //pobeira element nav__list
    if (nav.classList.contains('nav__list--active')) { //sprawdza czy nav__list posiada klase nav__list--active
        nav.classList.remove('nav__list--active'); // usuwa klasę nav__list--active
        console.log('nav closed');
    } else {
        nav.classList.add('nav__list--active'); // dodaje klasę nav__list--active
        console.log('nav open');
    }
}
function validate() {
    var x = document.forms["form"]["_replyto"].value;
    if (x == "") {
        alert("Mógłbyś uzupełnić formularz ? ;)"); // wiem ze nie powinno sie uzywac polskich znakow
        return false;
    }



    


}
//validation need complete rework
