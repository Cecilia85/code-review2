$(document).ready(function() {
  $("form#destination").submit(function(event) {
    var question1 = $("select#question1").val();
    var question2 = $("select#question2").val();
    var question3 = $("select#question3").val();


      if (question1=== "cold"&& question2==="yes"&& question3==="abroad") {
      $("#Bariloche").show();
      $("#StPetesburgo").hide();
      $("#NewYork").hide();
      $("#Portland").hide();
      $("#Riodejaneiro").hide();
      $("#BuenosAires").hide();
      $("#LosAngeles").hide();
      $("#LasVegas").hide();
    } else if (question1=== "cold"&& question2==="no"&& question3==="abroad") {
      $("#Bariloche").hide();
      $("#StPetesburgo").show();
      $("#NewYork").hide();
      $("#Portland").hide();
      $("#Riodejaneiro").hide();
      $("#BuenosAires").hide();
      $("#LosAngeles").hide();
      $("#LasVegas").hide();
    } else if (question1=== "cold"&& question2==="no"&& question3==="us") {
      $("#Bariloche").hide();
      $("#StPetesburgo").hide();
      $("#NewYork").show();
      $("#Portland").hide();
      $("#Riodejaneiro").hide();
      $("#BuenosAires").hide();
      $("#LosAngeles").hide();
      $("#LasVegas").hide();
    } else if (question1=== "cold"&& question2==="yes"&& question3==="us") {
      $("#Bariloche").hide();
      $("#StPetesburgo").hide();
      $("#NewYork").hide();
      $("#Portland").show();
      $("#Riodejaneiro").hide();
      $("#BuenosAires").hide();
      $("#LosAngeles").hide();
      $("#LasVegas").hide();
    } else if (question1=== "warm"&& question2==="yes"&& question3==="abroad") {
      $("#Bariloche").hide();
      $("#StPetesburgo").hide();
      $("#NewYork").hide();
      $("#Portland").hide();
      $("#Riodejaneiro").show();
      $("#BuenosAires").hide();
      $("#LosAngeles").hide();
      $("#LasVegas").hide();
    } else if (question1=== "warm"&& question2==="no"&& question3==="abroad") {
      $("#Bariloche").hide();
      $("#StPetesburgo").hide();
      $("#NewYork").hide();
      $("#Portland").hide();
      $("#Riodejaneiro").hide();
      $("#BuenosAires").show();
      $("#LosAngeles").hide();
      $("#LasVegas").hide();
    } else if (question1=== "warm"&& question2==="yes"&& question3==="us") {
      $("#Bariloche").hide();
      $("#StPetesburgo").hide();
      $("#NewYork").hide();
      $("#Portland").hide();
      $("#Riodejaneiro").hide();
      $("#BuenosAires").hide();
      $("#LosAngeles").show();
      $("#LasVegas").hide();
    } else if (question1=== "warm"&& question2==="no"&& question3==="us") {
      $("#Bariloche").hide();
      $("#StPetesburgo").hide();
      $("#NewYork").hide();
      $("#Portland").hide();
      $("#Riodejaneiro").hide();
      $("#BuenosAires").hide();
      $("#LosAngeles").hide();
      $("#LasVegas").show();
    }
    event.preventDefault();
  });
});
