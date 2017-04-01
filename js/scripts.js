function pizza(dough, sauces, veggies, meats, cheese, size) {
  this.dough = dough;
  this.sauces = sauces;
  this.veggies = veggies;
  this.meats = meats;
  this.cheese = cheese;
  this.cost = 0;
  this.size = size;
}

pizza.prototype.doughPrice = function(){
  this.cost += 10;
}

pizza.prototype.saucesPrice = function(){
  this.cost += .50;
}

pizza.prototype.veggiesPrice = function(){
  this.cost += 1.50;
}

pizza.prototype.meatsPrice = function(){
  this.cost += 2.75;
}

pizza.prototype.cheesePrice = function(){
  this.cost += .75;
}


$(function() {
  var pizza1 = new pizza();
  pizza1.dough = "";
  pizza1.sauces = "";
  pizza1.veggies = "";
  pizza1.meats = "";
  pizza1.cheese = "";
  pizza1.cost = 0;
  pizza1.size = "";

  $('#makePizza').click(function(event) {
    event.preventDefault();
    $('form').show();
    $('.dough').show();
    $('.make-pizza').hide();

    $('.dough button').click(function(event) {
      event.preventDefault();
      pizza1.dough += this.id;
      pizza1.doughPrice();
      $('.dough').hide();
      $('.sauces').show();
      $('button#veggies').show();
    });

    $('.sauces button').click(function(event) {
      event.preventDefault();
      $(this).prop("disabled",true);
      pizza1.saucesPrice();
      pizza1.sauces += this.id + ", ";
    });

    $('button#veggies').click(function(event) {
      event.preventDefault();
      $('.veggies').show();
      $('button#meats').show();
      $('button#veggies').hide();
      $('.sauces').hide();

      $('.veggies button').click(function(event) {
        event.preventDefault();
        $(this).prop("disabled",true);
        pizza1.veggies += this.id + ", ";
        pizza1.veggiesPrice();
      });
    });


    $('button#meats').click(function(event) {
      event.preventDefault();
      $('.meats').show();
      $('button#cheese').show();
      $('button#meats').hide();
      $('.veggies').hide();

      $('.meats button').click(function(event) {
        event.preventDefault();
        $(this).prop("disabled",true);
        pizza1.meats += this.id + ", ";
        pizza1.meatsPrice();
      });
    });

    $('button#cheese').click(function(event) {
      event.preventDefault();
      $('.cheese').show();
      $('.size').show();
      $('button#cheese').hide();
      $('.meats').hide();

      $('.cheese button').click(function(event) {
        event.preventDefault();
        $(this).prop("disabled",true);
        pizza1.cheese += this.id + ", ";
        pizza1.cheesePrice();
      });
    });

    $('.size button').click(function(event) {
      event.preventDefault();
      pizza1.size = this.id;
      $(".size").hide();
      $("#submit").show();
    });

    $('form').submit(function(event) {
      event.preventDefault();
      console.log("hi");
      $("#output-dough").text(pizza1.dough);
      $("#output-sauce").text(pizza1.sauces);
      $("#output-veggies").text(pizza1.veggies);
      $("#output-meat").text(pizza1.meats);
      $("#output-cheese").text(pizza1.cheese);
      $("#output-size").text(pizza1.size);
      $("#output-cost").text(pizza1.cost);
      $("#form").hide();
      $('.output').show();
    });
  });
});
