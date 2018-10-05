// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
      var newBurger = {
        burger_name: $("#burg").val().trim(),
      };
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("new Burger created");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".devoured-burger").on("click", function(event) {
      var id = $(this).data("id");
      var devoured = {
        devoured: true
    };
      // Send the DELETE request.
      $.ajax("/api/burgers/" + id, {
        type: "DELETE",
        data: devoured
      }).then(
        function() {
          console.log("Burger was devoured", id);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  