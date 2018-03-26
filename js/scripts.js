$(document).ready(function(){
  $("form").submit(function(event){
    var inputs = ["item1", "item2", "item3", "item4", "item5"];
    var items = [];
    inputs.forEach(function(input) {
      var item =$("#" + input).val();
      if (item) {
        items.push(item);
      }
    });
    items.sort();
    items.forEach(function(item){
      $("#list").append("<li>" + item + "</li>");
    })

    event.preventDefault();
  });
});
