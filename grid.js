$(function() {
    
    $('a.square').each(function(){
        var squareValue = $(this).attr('href');
        $(this).clone().insertBefore('.panel' + squareValue);
    });
    
    $('a.square').on('click', function(e) {
        var currentAttrValue = $(this).attr('href');
        $('.panel' + currentAttrValue).slideToggle('active');
        $('.panel').not(currentAttrValue).slideUp('active');
        $('a.square[href *= "'+ currentAttrValue +'"]').toggleClass('active');
        $('a.square[href != "'+ currentAttrValue +'"]').removeClass('active');
        e.preventDefault();
    });
    
});