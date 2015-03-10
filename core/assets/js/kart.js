var kart;

function setupKart($) {
  
  return {
      
    apiUrl: "/?kart",
    
    api: function(resource, options, events) {
      
      var resources = { read: "GET", create: "POST", update: "PUT", delete: "DELETE" };
      
      if (resources[resource] === undefined)
        throw "Resource type `" + resource + "` is not supported by the Kart API";
            
      $.ajax(this.apiUrl, {
         data: options,
         type: resources[resource],
         error: function(status, error) {
           $(this).trigger("fail.api.kart",[status,error,this]);           
         },
         success: function(data, status) {
           $(this).trigger("success.api.kart",[data,status,this]);
         }
       });       
      
    }
    
  };
  
}

//be smart: am I a node module or standalone?
if (typeof require === "function") {  

  jQuery = require("jquery");
  
  kart = setupKart(jQuery);
      
  module.exports = kart;  

} else {
  
  jQuery(document).on("ready", function() {

    kart = setupKart(jQuery);
    $(kart).trigger("init.kart",[kart]);
    
  });
  
}

