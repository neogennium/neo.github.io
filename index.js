   
   $(document).ready(function()
   {
      $('#ThemeableMenu1 .dropdown-toggle').dropdown({popperConfig:{placement:'bottom-start',modifiers:{computeStyle:{gpuAcceleration:false}}}});
      $(document).on('click','.ThemeableMenu1-navbar-collapse.show',function(e)
      {
         if ($(e.target).is('a') && ($(e.target).attr('class') != 'dropdown-toggle')) 
         {
            $(this).collapse('hide');
         }
      });
   });
   
   var sc_project=10313336; 
   var sc_invisible=1; 
   var sc_security="904f5284"; 
   var scJsHost = (("https:" == document.location.protocol) ?
   "https://secure." : "http://www.");
   document.write("<sc"+"ript type='text/javascript' src='" +
   scJsHost+
   "statcounter.com/counter/counter.js'></"+"script>");
   