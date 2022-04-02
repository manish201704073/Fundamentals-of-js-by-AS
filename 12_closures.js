// function x(){
//     var a=10;
//     function y(){
//         console.log(a);
//     }
//     y();
// }
// x();
// //===========================
// function x(){
//     var a=function y(){
//         console.log(a);
//.................1000s of line of code 
//     }
//     y();
// }
// x();


//===========================
// function x(){
//     var a=10;
//     y();
// }
// x(function y(){
//     console.log(a);
// });

//we can pass function as a parameters

// //=========================
//here closures comes in to the pictures
// function x(){
//     var a=10;
//     function y(){
//         console.log(a);
//     }
//     return y;
// }
// var z=x();
// console.log(z);


//=========================
// function x(){
//     var a=10;
//     return function y(){
//         console.log(a);
//     }
    
// }
// var z=x();
// console.log(z);
// we can also write like this return

//=================================
// function x(){
//     var a=10;
//      function y(){
//         console.log(a);//here a is containing the reference or memory location not value 
//         // here 100 will print 
//     }
//     a=100;
//     return y;
    
// }
// var z=x();
// console.log(z);

function z(){
    var b=900;
    function y(){
        var a=4; 
        function x(){
            console.log(a, b);
        }
       
        x();
    }
    y();
}
z();



