$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    const question1 = $("#bodytype").val();
    const question2 = $("input:radio[name=bodyhair]:checked").val();
    const question3 = $("input#snout").val(); 
    const result = "My favorite body type is " + question1 + "." + "I prefer the body of my lover to be " + question2 + "." + "My favorite body part on a love interest is " + question3 + "."; 
    $("#output").text(result); 
  });  
});