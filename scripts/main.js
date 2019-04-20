jQuery(function(){
    $( document ).ready(function(){
        jQuery('.targetDiv').hide();  
        jQuery('#div1').show();
   });
   jQuery('.showSingle').click(function(){
         jQuery('.targetDiv').hide();
         jQuery('#div'+$(this).attr('target')).show();
   });
});