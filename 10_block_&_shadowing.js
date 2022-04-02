{
  //compound Statement
  //block is a way to combine multiple statement in a group
  //    var a=10;
  //    console.log(a);
}
// if(true)
//if(true)true;//for single statement
//if(true){};// but for multiple statement we need to use {} bracket

// if(true) console.log("this is perfect Java Script Code");

//====================================
// block scope
// {
//     var a=100;
//     let b=150;
//     const c=200;
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
//     console.log(a);
//     console.log(b);
//     console.log(c);

//=====================================
//shawing variable
//a is shawing of the block as
// var a = 100;
// let b = 10000;
// const c = 500;
// {
//   var a = 100;
//   let b = 150;
//   const c = 200;
//   console.log(a);
//   console.log(b);
//   console.log(c);
// }
//================================
//shawing in function

// const c = 500;
// function a(){

//   const c = 200;
//   console.log(c);
// }
// a();
// console.log(c);

//===========================================
//ileagle shawing

// let a=100;
// {
//     var a=199;
// }
//we can not do this

//==========================================
//valide shawing
// let a=100;
// {
//     let a=199;
// }

//==========================================
// // valide shawing
// var a=100;
// {
//     let a=199;
// }

//==========================================
// valide shawing
//lexical scope
const a = 100;
{
  const a = 199;
  {
    const a = 200;
    console.log(a);
    //this a will print nearest a because of lexical scope
  }
}
