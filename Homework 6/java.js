$(document).ready(function() {

    var city2 =  ["NYC", "SF", "LA", "LAX", "SYD"]; 

    for(var i = 0; i < 5; i++){
        $("#city-type").append($("<option>"+city2[i]+"</option>"));
    }

    $("#city-type").change(function(){
        var city = $("#city-type").val();
  

        if(city === "NYC" || city === "NY" || city === "New York" || city === "New York City") {
            $("body").addClass("nyc");
            $("body").removeClass("sf la austin sydney");

        }

        else if (city === "SF" || city === "San Francisco" ||  city === "Bay Area") {
            console.log("yay");
            $("body").addClass("sf");
            $("body").removeClass("nyc la austin sydney");

        }
         else if (city === "LA" || city === "LA" || city ===  "LAX" || city === "Los Angeles") {
            $("body").addClass("la");
            $("body").removeClass("nyc sf austin sydney");
        }
         else if (city === "Austin"  || city === "ATX") {
            $("body").addClass("austin");
            $("body").removeClass("nyc sf la sydney");
        }
         else if (city === "SYD" || city === "Sydney" || city === "SYD") {
            $("body").addClass("sydney");
            $("body").removeClass("nyc sf la austin");
    
     


}

     

  });


    
});
