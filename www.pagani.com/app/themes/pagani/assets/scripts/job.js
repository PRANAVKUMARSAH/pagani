$('.page-template-job-positions .button--close').click(function(e) {
    e.preventDefault();
    Blocks.scrollTo(1, false);
});
$('.page-template-job-positions .section-job-discover').click(function(e) {
    e.preventDefault();
    Blocks.scrollTo(2, false);
});
$('.page-template-job-positions .button--close').click(function(e) {
    e.preventDefault();
    Blocks.scrollTo(1, false);
});

$('.mobile_selected_filter').on('click', function() {
    if ($(this).hasClass('open')) {
        $(this).removeClass('open')
    } else {
        $('.mobile_selected_filter').removeClass('open');
        $(this).addClass('open');
    }
})

var tipologia = 'standard';
var area = 'all';
var subtipologia = 'all';


//  Cambio tipologia
$('.type_selector').click(function(e) {
    e.preventDefault();

    $('.type_selector').removeClass('active');
    $(this).addClass('active');

    tipologia = $(this).data('type');
    show_posizioni();


    if (tipologia == 'standard') {
        $('.subtipologia_filter').hide();
    } else {
        $('.subtipologia_filter').show();

    }

    //  Aggiorno le aree in base alle tipologia job visibili
    $('.role_selector[data-type="area"]').each(function() {
        if ($('.single_position[data-tipologia="' + tipologia + '"][data-area="' + $(this).data('value') + '"]').length == 0) {
            $(this).addClass('hide');
        } else {
            $(this).removeClass('hide');

        }
    });

    //  Resetto gli altri filtri
    $('.role_selector[data-type="area"]').removeClass('active');
    $('.role_selector[data-type="area"][data-value="all"]').addClass('active');
    $('.role_selector[data-type="subtipologia"]').removeClass('active');
    $('.role_selector[data-type="subtipologia"][data-value="all"]').addClass('active');

});


//  Cambio area
$('.role_selector[data-type="area"]').click(function(e) {
    e.preventDefault();

    $('.role_selector[data-type="area"]').removeClass('active');
    $(this).addClass('active');

    area = $(this).data('value');
    show_posizioni();
});

//  Cambio subtipologia
$('.role_selector[data-type="subtipologia"]').click(function(e) {
    e.preventDefault();

    $('.role_selector[data-type="subtipologia"]').removeClass('active');
    $(this).addClass('active');

    subtipologia = $(this).data('value');
    show_posizioni()
});


//  Show contenuti
function show_posizioni() {


    var counter_posizioni = 0;

    // console.log('TIPOLOGIA',tipologia);
    // console.log('AREA',area);
    // console.log('SUB-TIPOLOGIA',subtipologia);

    $('.job_posts_container .single_position').each(function() {




        if (
            ($(this).data('tipologia') == tipologia || tipologia == 'all') &&
            ($(this).data('subtipologia') == subtipologia || subtipologia == 'all' || $(this).data('tipologia') == 'standard') &&
            ($(this).data('area') == area || area == 'all')
        ) {
            $(this).addClass("active");
            counter_posizioni++;
        } else {
            $(this).removeClass("active");
        }
    });

    if (counter_posizioni == 0) {
        //  Non c'è nulla da mostrare
        $('.job_message').show();
    } else {
        $('.job_message').hide();

    }

}


// Load active Role on ready



/*
$(document).ready(function() {

    onReadyPostTermsArray = [];
    $('.job_posts_container .single_position.active').each(function() {
        $(this).fadeIn();
        postData = $(this).attr('data-tax-terms').split(',');
        postData.forEach(element => {            
            onReadyPostTermsArray.push(element);
        }); 
    });    
    showRole(onReadyPostTermsArray);
    
    $('.role_selector[data-role="all"]').on('click', function() {       
        $('.type_selector.active').click();
    });
}) 

// Load active Role on ready
$('body.page-template-job-positions .section-job-in button').on('click', function() {        

    $('.job_posts_container .single_position').removeClass('active').hide();
    
    $(this).parent('div').find('button').removeClass('active');

    $(this).addClass('active');
    
    if($(this).hasClass('type_selector')) {

        
        var typeTerms = $('.type_selector.active').attr('data-type');                        
        
        $('.role_selector:not(".all_role")').removeClass('show active');
        
        $('.role_selector[data-role="all"]').addClass('active'); 

        $('.mobile_selected_filter span.filter_label').text($('.role_selector[data-role="all"]').text());

        $('.job_posts_container .single_position').each(function() {                          

            thisTermsAttr = $(this).attr('data-tax-terms').split(',');  

            if(jQuery.inArray(typeTerms,thisTermsAttr) !== -1 ) {
                                
                $(this).addClass('active').fadeIn();;

                postTermsArray = $(this).attr('data-tax-terms').split(',');

                showRole(postTermsArray);
            }
        });     
    }
    else if($(this).hasClass('role_selector')) {

        activePrimary = $('.type_selector.active').attr('data-type'); 

        $('.mobile_selected_filter').removeClass('open');

        var roleTerms = $('.role_selector.active').attr('data-role');                

        $(this).addClass('active');

        $('.mobile_selected_filter span.filter_label').text($(this).text());

        $('.job_posts_container .single_position').each(function() {                          

            thisTermsAttr = $(this).attr('data-tax-terms').split(',');                     
            console.log(thisTermsAttr);
            console.log(activePrimary);
            console.log(roleTerms);
            if(jQuery.inArray(roleTerms,thisTermsAttr) !== -1 && jQuery.inArray(activePrimary,thisTermsAttr)  !== -1 ) {
                                
                $(this).addClass('active').fadeIn();;

                postTermsArray = $(this).attr('data-tax-terms').split(',');

                showRole(postTermsArray);
                
            }
        });    
    }
});

function showRole(array) {
    array.forEach(element => {        
        $('.role_selector[data-role="'+element+'"]').addClass('show');
    });                    
} 

*/