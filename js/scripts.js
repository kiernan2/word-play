$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    let input = ($("input#input").val());
    let words = input.split(" ");
    words.reverse();
    words.forEach(function(element) {
      $("#output").append(element);
      
    });
  });
});