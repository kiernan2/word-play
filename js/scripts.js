$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    let input = ($("input#input").val());
    let words = input.split(" ");
    let filtered_words = [];
    words.forEach(function(element){
      if (element.length > 2) {
        filtered_words.push(element);
      };
    });
    filtered_words.reverse();
    const reInput = filtered_words.join(' ')
    $("#output").append(reInput);
  });
});