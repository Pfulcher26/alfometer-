$(document).ready(function() {
  $"#formOne").submit(function(event) {
    const question1 = $("#bodytype").val();
    const question2 = $("input:radio[name=bodyhair]:checked").val();
    const question3 = $("input#snout").val() 

    event.preventDefault();
  });  
}