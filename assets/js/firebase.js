$(document).ready(function () {
    // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();
});
var provider = new firebase.auth.GoogleAuthProvider();
$('#button-google').click(function () {
    firebase.auth().signInWithPopup(provider).then(function (data) {
        var user = data.user;
        console.log(user);
        var name = user.displayName
        $('#name').text(user.displayName);
        console.log(user.displayName);
    }).catch(function (error) {
        console.log(error);
    });
});
/*detectamos si el usuario esta logueado o no*/
firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        $('h3').text(user.displayName);
        $('.inicio').hide;
        $('.usuario').show;
    } else {
        $('.inicio').show;
        $('.usuario').hide;
    }
});
// cerrar session  
$('#cerrar').click(function () {
    firebase.auth().signOut().then(function () {
        $('.inicio').show;
        $('.usuario').hide;
    });
});   