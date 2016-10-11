$(document).ready(function() {

    var city; 

    $("#submit-btn").on("click", function (e) { 
        e.preventDefault(); 
        city = $("#city-type").val();
        $("#city-type").val("Welcome!");
        console.log(city);

        if(city === "NYC" || city === "NY" || city === "New York" || city === "New York City") {
            $("body").addClass("nyc");
            $("body").removeClass("sf la austin sydney");

        }

        else if (city === "SF" || city === "San Francisco" ||  city === "Bay Area") {
            console.log("yay");
            $("body").addClass("sf");
            $("body").removeClass("nyc la austin sydney floripa");

        }
         else if (city === "LA" || city === "LA" || city ===  "LAX" || city === "Los Angeles") {
            $("body").addClass("la");
            $("body").removeClass("nyc sf austin sydney floripa");
        }
         else if (city === "Austin"  || city === "ATX") {
            $("body").addClass("austin");
            $("body").removeClass("nyc sf la sydney floripa");
        }
         else if (city === "SYD" || city === "Sydney" || city === "SYD") {
            $("body").addClass("sydney");
            $("body").removeClass("nyc sf la austin floripa");
    
        }
        //I felt like adding my city as well :) // 
            else if (city === "FLO" || city === "Florianopolis" || city === "Floripa") {
            $("body").addClass("floripa");
            $("body").removeClass("nyc sf la austin");
        }


    });

     




    
});