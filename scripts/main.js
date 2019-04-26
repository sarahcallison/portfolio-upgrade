//Show about div on page load
// Show/hide content on link clink 

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