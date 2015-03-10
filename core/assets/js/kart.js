var kart;

jQuery(function($) {

  kart = function($) {
      
    this.apiUrl = "/?kart";
    
    this.api = function(resource, options, events) {
      
      var resources = { read: "GET", create: "POST", update: "PUT", delete: "DELETE" };
      
      if (resources[resource] === undefined)
        throw "Resource type `" + resource + "` is not supported by the Kart API";
            
      $.ajax(this.apiUrl, {
         data: options,
         type: resources[resource],
         error: function(status, error) {
           $.trigger("fail.api.kart",[status,error,this]);           
         },
         success: function(data, status) {
           $.trigger("success.api.kart",[data,status,this]);
         }
       })       
      
    };
  
    $.trigger("init.kart",[this]);
    
  }($);
  
});