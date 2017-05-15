$(document).ready(function(){
    $('#profile').mouseenter(function(){
        $('#profile').fadeTo('slow', 1);
    });
    $('#profile').mouseleave(function(){
        $('#profile').fadeTo('slow', 0.4);
    });
});

$(document).ready(function(){
    $('.navlink').mouseenter(function(){
        console.log('enter');
        $('.navlink').fadeTo('fast', 0,4);
    });
    $('.navlink').mouseleave(function(){
        $('.navlink').fadeTo('fast',1);
        console.log('leave');
    });
    

});


function startUp(){
    document.getElementById('blackOut').style.display = 'none';
    document.getElementById('contactForm').style.display = 'none';
}

function showForm() {
    document.getElementById('blackOut').style.display = 'block';
    document.getElementById('contactForm').style.display = 'block';

}

function closeBox() {
    document.getElementById('blackOut').style.display = 'none';
    document.getElementById('contactForm').style.display = 'none';
}