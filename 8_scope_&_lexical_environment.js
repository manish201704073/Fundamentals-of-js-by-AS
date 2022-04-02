// function a(){
//     console.log(b);
// }
// var b=10;
// a();
//it will print 10 in console

//==================================
function a(){
    var b=10;
    c();
    function c(){

        console.log(b);
    }
}
// var b=10;
a();