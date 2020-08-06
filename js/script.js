$(document).ready(function(){
    $("#ok").click(function(){
        alert("Your pizza will be delivered at :" +$("#location").val());
    });

    $("#submit").click(function(){
        alert("message has been recieved thank you for shopping with us!")
    });
});
var price, crust_price, toppings_price;
function Pizza(size, crust, toppings){
    this.size = size;
    this.crust = crust;
    this.toppings = toppings;
    
}
Pizza.prototype.pricePerSize=function(){

switch(this.pizzaSize){
    case 'Small':
    return 500
    break
    case 'Medium':
          return 1000
          break
          case 'Large':
                return 1500
                break
  }
}
Pizza.prototype.pizzaCrustPrice=function(){
    switch(this.pizzaCrust){
      case 'Crispy':
      return 70
      break
      case 'Stuffed':
           return 100
           break
           case 'Glutten Free':
                 return 120
                 break
    }
  }
Pizza.prototype.pizzaToppingsPrice=function(){
    switch(this.pizzaToppings){
        case 'berries':
        return 200
        break
        case 'pineapples':
            return 100
            break
            case 'reisains':
                return 400
                break
                case 'nuts':
                    return 300
                    break 
                    case 'lettuce':
                        return 500
                        break
                    case 'pork':
                        return 600
                        break
                    case 'carrots':
                        return 700
                        break
    }
}
    $("button.submit").click(function(event){
        let psize = $("#size option:selected").val();
        let pcrust = $("#crust option:selected").val();
        let ptopping = $("#toppings option:selected");
});
        console.log(",")
    if((psize == "0")&&(pcrust == "0")){
        console.log ("nothing selected");
    $("button.submit").show();
       alert("please select pizza size and crust");
}else{
    $("button.submit").hide();
}
Pizza.prototype.toppingsPrice=function(){
    let toppingsPrize=0
    if(this.pizzaSize==='Small'){
      this.pizzaToppings.map(topping=>{
        switch(topping){
          case 'berries':
            toppingsPrize+=80
            break
          case 'pineapples':
            toppingsPrize+=40
            break
          case 'nuts':
            toppingsPrize+=80
            break
          case 'reisains':
            toppingsPrize+=150
            break
          case 'lettuce':
            toppingsPrize+=130
            break
          case 'pork':
            toppingsPrize+=120
            break
          case 'carrots':
            toppingsPrize+=100
            break                 
        }
      })
    }else if(this.pizzaSize==='Medium'){
      this.pizzaToppings.map(topping=>{
        switch(topping){
          case 'berries':
            toppingsPrize+=100
            break
          case 'pineapples':
            toppingsPrize+=50
            break
          case 'nuts':
            toppingsPrize+=100
            break
          case 'reisains':
            toppingsPrize+=170
            break
          case 'lettuce':
            toppingsPrize+=150
            break
          case 'pork':
            toppingsPrize+=160
            break
          case 'carrots':
            toppingsPrize+=120
            break                
        }
      })
    }else{
      this.pizzaToppings.map(topping=>{
        switch(topping){
          case 'berries':
            toppingsPrize+=120
            break
          case 'pineapples':
            toppingsPrize+=70
            break
          case 'nuts':
            toppingsPrize+=120
            break
          case 'reisains':
            toppingsPrize+=180
            break
          case 'lettuce':
            toppingsPrize+=170
            break
          case 'pork':
            toppingsPrize+=170
            break
          case 'carrots':
            toppingsPrize+=150
            break                  
        }
      })
  
    }
    return toppingsPrize
  }








  var price, crust_price, topping_price;
  let total = 0;
  function Getpizza(name, size, crust, topping, total) {
    this.name = name;
    this.size = size;
    this.crust = crust;
    this.topping = topping;
    this.total = total;
  }
  
  
  // proceed button
  $(document).ready(function () {
    // $("button.proceed").click(function(){
    //   $("button.proceed").hide();
    //   $("#information").hide();
    //   $("div.choise").slideDown(1000);
    // });
    $("button.proceed").click(function (event) {
      let pname = $(".name option:selected").val();
      let psize = $("#size option:selected").val();
      let pcrust = $("#crust option:selected").val();
      let ptopping = [];
      $.each($("input[name='toppings']:checked"), function () {
        ptopping.push($(this).val());
      });
      console.log(ptopping.join(", "));
  
      switch (psize) {
        case "0":
          price = 0;
          break;
        case "small":
          price = 7000;
          console.log(price);
          break;
        case "medium":
          price = 8000;
          console.log(price);
          break;
        case "large":
          price = 7000;
          console.log(price);
          break;
          
        default:
          console.log("error");
      }
      switch (pcrust) {
        case "0":
          crust_price = 0;
          break;
        case "stuffed":
          crust_price = 500;
          break;
        case "glutten free":
          crust_price = 1000;
          break;
        case "cripsy":
          crust_price = 1500;
          break;
        default:
          console.log("No price");
      }
      let topping_value = ptopping.length * 50;
      console.log("toppins value" + topping_value);
  
      if ((psize == "0") && (pcrust == "0")) {
        console.log("nothing selected");
        $("button.proceed").show();
        $("#information").show();
        $("div.choise").hide();
        alert("Please select art size and crust");
      }
      else {
        $("button.proceed").hide();
        $("#information").hide();
        $("div.choise").slideDown(1000);
      }
  
      total = price + crust_price + topping_value;
      console.log(total);
      let checkoutTotal = 0;
      checkoutTotal = checkoutTotal + total;
  
      $("#pizzaname").html($(".name option:selected").val());
      $("#pizzasize").html($("#size option:selected").val());
      $("#pizzacrust").html($("#crust option:selected").val());
      $("#arttopping").html(ptopping.join(", "));
      $("#totals").html(total);
  
      // Add art button
      $("button.addpizza").click(function () {
        let pname = $(".name option:selected").val();
        let psize = $("#size option:selected").val();
        let pcrust = $("#crust option:selected").val();
        let ptopping = [];
        $.each($("input[name='toppings']:checked"), function () {
          ptopping.push($(this).val());
        });
        console.log(ptopping.join(", "));
        switch (psize) {
          case "0":
            price = 0;
            break;
          case "small":
            price = 7000;
            console.log(price);
            break;
          case "medium":
            price = 8000;
            console.log("The price is " + price);
            break;
          case "large":
            price = 7000;
            console.log("The price is " + price);
            break;
                 default:
            console.log("error");
        }
        switch (pcrust) {
          case "0" :         
            crust_price = 0;
            break;
          case "stuffed":
            crust_price = 500;
            break;
          case "crispy":
            crust_price = 1000;
            break;
          case "glutten free":
            crust_price = 1500;
            break;
          default:
            console.log("No price");
        }
        let topping_value = ptopping.length * 50;
        console.log("toppins value" + topping_value);
        total = price + crust_price + topping_value;
        console.log(total);
  
        checkoutTotal = checkoutTotal + total;
        console.log(checkoutTotal);
        // constractor function
        var newOrder = new Getart(pname, psize, pcrust, ptopping, total);
  
        $("#ordersmade").append('<tr><td id="pizza">' + newOrder.name + '</td><td id="pizzasize">' + newOrder.size + '</td><td id="pizzacrust">' + newOrder.crust + '</td><td id="pizzatopping">' + newOrder.topping + '</td><td id="totals">' + newOrder.total + '</td></tr>');
        console.log(newOrder);
  
  
  
      });
      // Checkout button
      $("button#checkout").click(function () {
        $("button#checkout").hide();
        $("button.addpizza").hide();
        $("button.deliver").slideDown(1000);
        $("#addedprice").slideDown(1000);
        console.log("Your total bills is sh. " + checkoutTotal);
        $("#arttotal").append("Your bill is sh. " + checkoutTotal);
      });
  
      // home delivery button
      $("button.deliver").click(function () {
        $(".pizzatable").hide();
        $(".choise h2").hide();
        $(".delivery").slideDown(1000);
        $("#addedprice").hide();
        $("button.deliver").hide();
        $("#pizzatotal").hide();
        let deliceryamount = checkoutTotal + 150;
        console.log("You will pay sh. " + deliceryamount + " on delivery");
        $("#totalbill").append("Your bill plus delivery fee is: " + deliceryamount);
      });
  
      // when one clicks place order button
      $("button#final-order").click(function (event) {
        event.preventDefault();
  
        $("#pizzatotal").hide();
        $(".delivery").hide();
        $("button#final-order").hide();
        let deliceryamount = checkoutTotal + 150;
        console.log("Final Bill is: " + deliceryamount);
        let person = $("input#name").val();
        let phone = $("input#phone").val();
        let location = $("input#location").val();
  
        if ($("input#name").val() && $("input#phone").val() && $("input#location").val() != "") {
  
          $("#finallmessage").append(person + ", We have recieved your order and it will be delivered to you at " + location + ". Prepare sh. " + deliceryamount);
          $("#totalbill").hide();
          $("#finallmessage").slideDown(1200);
        }
        else {
          alert("Please fill in the details for delivery!");
          $(".delivery").show();
          $("button#final-order").show();
        }
      });
      event.preventDefault();
    });
  });
