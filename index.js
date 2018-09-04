$(document).ready(function(){
                  
        $(".collapsible1").click(function(){
          $(".content1").slideToggle("p1");
          $(".content2").slideUp("p2"); 
          $(".content3").slideUp("p3");
        $(".content4").slideUp("p4"); 
          });
         
        
    
    $(".collapsible2").click(function(){
          $(".content2").slideToggle("p2");
          $(".content1").slideUp("p1");
          $(".content3").slideUp("p3");
          $(".content4").slideUp("p4");
        });          
            
    $(".collapsible3").click(function(){
          $(".content3").slideToggle("p3");
          $(".content1").slideUp("p1");
          $(".content2").slideUp("p2");
          $(".content4").slideUp("p4");
        });          
        
    $(".collapsible4").click(function(){
          $(".content4").slideToggle("p4");
          $(".content1").slideUp("p1");
          $(".content3").slideUp("p3");
          $(".content2").slideUp("p2");
        }); 
    
  
            
 });
