			
$(document).ready(function(){
    $('.dropdown').slideToggle();
    $('#linkbtn').hover(function(){
        
    $( `#linkbtn` ).toggleClass(`link1`);

});
    $('.drop').click(function(){
    $('.dropdown').slideToggle();    
});
    $('.drop').hover(function(){
        
    $( `.drop` ).toggleClass(`link1`);

});
    $('.toggler').click(function(){
    $('.content').slideToggle();
        
});
    $('.searchbtn').hover(function(){
        $(`.searchbtn`).toggleClass(`searchbtn1`)
    })
    
    event.preventDefault();
})