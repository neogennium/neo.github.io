   
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
                  
                     var now = new Date();
                     var startYear = "2001";
                     var text =  "Copyright &copy; ";
                     if (startYear != '')
                     {
                        text = text + startYear + "-";
                     }
                     text = text + now.getFullYear() + ", Neogennium   ·  All rights reserved  ·";
                     var copyrightnotice = document.getElementById('copyrightnotice');
                     copyrightnotice.innerHTML = text;
                                    
                     var now = new Date();
                     var startYear = "2001";
                     var text =  "Copyright &copy; ";
                     if (startYear != '')
                     {
                        text = text + startYear + "-";
                     }
                     text = text + now.getFullYear() + ", Neogennium   ·  All rights reserved  ·";
                     var copyrightnotice = document.getElementById('copyrightnotice');
                     copyrightnotice.innerHTML = text;
                  