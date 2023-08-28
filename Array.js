// // Array
// const number =[2,4,6,8,10,6];
// const number2=[3,5,7,9,11];
// // Basic Operation
// // 1.Push
// number.push(12);
// // 2.pop
// number.pop();
// // 3.unshift
// number.unshift(12);
// // 4.shift
// number.shift();
// // 5.includes for primitive data types
// number.includes(6);
// // 6. indexOf
// number.indexOf(10);
// // 7.lastindexof
// number.lastIndexOf(6);
// // 8.slice
// number.slice(0,1);
// // 9.concat
// var newNumber = number.concat(number2);
// // 10.Find only for the non primitive data types
// number.find((x)=> {return x%2===0 });

// // 11.sprit operater
// let number3 =[...number,...number2];
// // 12.for loop
// for(var i = 0; i<number3.length; i++){

//     // console.log(number3[i]);

// }
// // 13.for of
// for (let x of number3){
//     // console.log(x);

// }
// // 14.for each
// number3.forEach((x,y)=>(x,y));
// // 15.join
// var words=['A','D','E','E','L'];
// words.join("-");
// // 16.splits
// var names = 'AdeelMuhammad';
// names.split("");
// // 17. Filter
// var students =[
//     {product:"Laptop",
//     price:1200
// },
// {
//     product:"PC",
//     price: 1300
// },
// {
//     product:"Book",
//     price:1100
// },
// {
//     product:"Bike",
//     price:700
// },
// {
//     product:"Iron",
//     price:900
// }
// ];
// students.filter((x)=> x.price >1000);

// // 18.Map
// students.map((x)=> x.price*2);
 
// // Solve the Array exercise to get more efficiency to the array

// const character =[
//     {
//         name:"Mehemood Aslam",
//         gender:"male",
//         age:52,
//         colorEye:"Brown",
//         height:59
//     },
//         {
//         name:"Hina Dilpazeer",
//         gender:"Female",
//         age:48,
//         colorEye:"Brown",
//         height:48
//     },
//         {
//         name:"Khubsoorat",
//         gender:"female",
//         age:35,
//         colorEye:"Blue",
//         height:45
//     }
//     ,    {
//         name:"Nabeel",
//         gender:"male",
//         age:46,
//         colorEye:"Brown",
//         height:54
//     }
    

// ]
// //1. Get an array of all names
// let characterNames=character.map(x=> x.name);
// // Get an array of object with the name and the height properties
// let charceterObject = character.map((x)=> {
//     return {
//         name: x.name,
//         height:x.height
//     }
// });
// // Get the total height of the array
// let totalHeight=character.reduce((a,b)=>{
//     return a + b.height;
// },0);
// // Get character with age greater than 40
// let GreaterThan40=character.filter((x)=> x.age>40);
// // Get all male characters
// let maleCharacter = character.filter((x)=> x.gender==='male');
// //sort by name
// let sortName=character.sort((a,b)=>{
//     if(a.name<b.name){
//         return -1

//     }
//     else{
//         return 1
//     }
//     return 0
// });
// // create student college record with the help of array and the object

// const dummy_data = [{id:1,category:"Mobile",description:"mobile detail"},

// {id:2,category:"Furniture",description:"furniture detail"},
// {id:3,category:"Groceries",description:"Groceries detail"},
// {id:4,category:"Vechiles",description:"vechiles detail"}]



const Fruits=["Apple","Mango","Orange","Peas","Promegranate","Bananna","Peach","WaterMelon"];
const Fruit2=["PineApple","Chikoo","Grapes"];
const Fruit3=["Date","Cherry"];

//Concatenation Method

const AllFruits =Fruits.concat(Fruit2,Fruit3);
for (x of AllFruits){

    console.log(x);

}



