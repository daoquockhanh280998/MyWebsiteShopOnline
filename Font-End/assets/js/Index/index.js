$(document).ready(function(){
    $("#productSaleTab1").removeClass("product_sale-in-active").addClass("product_sale-active");

    $("#productSaleTab1").click(function(){
       $("#productSaleTab1").removeClass("product_sale-in-active").addClass("product_sale-active");
       $("#productSaleTab2").removeClass("product_sale-active").addClass("product_sale-in-active");
       $("#productSaleTab3").removeClass("product_sale-active").addClass("product_sale-in-active");
       $("#productSaleTab4").removeClass("product_sale-active").addClass("product_sale-in-active");
       $("#productSaleTab5").removeClass("product_sale-active").addClass("product_sale-in-active");

       $("#productListSaleTab1").show();
       $("#productListSaleTab2").hide();
    }); 

    $("#productSaleTab2").click(function(){
        $("#productSaleTab2").removeClass("product_sale-in-active").addClass("product_sale-active");
        $("#productSaleTab1").removeClass("product_sale-active").addClass("product_sale-in-active");
        $("#productSaleTab3").removeClass("product_sale-active").addClass("product_sale-in-active");
        $("#productSaleTab4").removeClass("product_sale-active").addClass("product_sale-in-active");
        $("#productSaleTab5").removeClass("product_sale-active").addClass("product_sale-in-active");
        $("#productSaleTab6").removeClass("product_sale-active").addClass("product_sale-in-active");

        $("#productListSaleTab1").hide();
        $("#productListSaleTab2").show();
     }); 

     $("#productSaleTab3").click(function(){
        $("#productSaleTab3").removeClass("product_sale-in-active").addClass("product_sale-active");
        $("#productSaleTab1").removeClass("product_sale-active").addClass("product_sale-in-active");
        $("#productSaleTab2").removeClass("product_sale-active").addClass("product_sale-in-active");
        $("#productSaleTab4").removeClass("product_sale-active").addClass("product_sale-in-active");
        $("#productSaleTab5").removeClass("product_sale-active").addClass("product_sale-in-active");
        $("#productSaleTab6").removeClass("product_sale-active").addClass("product_sale-in-active");
     }); 

     $("#productSaleTab4").click(function(){
        $("#productSaleTab4").removeClass("product_sale-in-active").addClass("product_sale-active");
        $("#productSaleTab3").removeClass("product_sale-active").addClass("product_sale-in-active");
        $("#productSaleTab1").removeClass("product_sale-active").addClass("product_sale-in-active");
        $("#productSaleTab2").removeClass("product_sale-active").addClass("product_sale-in-active");
        $("#productSaleTab5").removeClass("product_sale-active").addClass("product_sale-in-active");
        $("#productSaleTab6").removeClass("product_sale-active").addClass("product_sale-in-active");
     }); 

     $("#productSaleTab5").click(function(){
         $("#productSaleTab5").removeClass("product_sale-in-active").addClass("product_sale-active");
         $("#productSaleTab1").removeClass("product_sale-active").addClass("product_sale-in-active");
         $("#productSaleTab2").removeClass("product_sale-active").addClass("product_sale-active");
         $("#productSaleTab3").removeClass("product_sale-active").addClass("product_sale-in-active");
        $("#productSaleTab4").removeClass("product_sale-active").addClass("product_sale-in-active");
        $("#productSaleTab6").removeClass("product_sale-active").addClass("product_sale-in-active");
     }); 
        
     $("#productSaleTab6").click(function(){
        $("#productSaleTab6").removeClass("product_sale-in-active").addClass("product_sale-active");
        $("#productSaleTab5").removeClass("product_sale-active").addClass("product_sale-in-active");
        $("#productSaleTab1").removeClass("product_sale-active").addClass("product_sale-in-active");
        $("#productSaleTab2").removeClass("product_sale-active").addClass("product_sale-in-active");
        $("#productSaleTab3").removeClass("product_sale-active").addClass("product_sale-in-active");
       $("#productSaleTab4").removeClass("product_sale-active").addClass("product_sale-in-active");
    });  
});

