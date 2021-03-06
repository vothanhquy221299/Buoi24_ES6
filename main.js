/**
 * - Khai báo biến
 * + Khai báo biến với let và const
 * + So sánh giữa let, const & var và nên dùng cái nào (hoisting: là cơ chế đấy từ khóa khai báo biến lên đầu scope
 *      vì thế có thể sử dụng trước khi khai báo (undefined))
 *      - Var(có cơ chế hoisting, function scope) được phép đặt lại tên biến đó một lần nữa, và sẽ ghi đè 
 *      - Let(không có cơ chế hoisting, block scope) không được phép khai báo 2 biến giống nhau
 *      - Const (không có hoisting, block scope) bắt buộc phải gán giá trị khi khai báo, không được gán lại giá trị mới
 * + Nên dùng cái nào, khi nào:
 *      - var: khi browser không hỗ trợ let, const(IE)
 *      - let: khi cần re-assign giá trị của biến
 *      - const: còn lại (khi không cần re-assign giá trị)  
 * */

/**
 * Khai báo biến var
 */
// console.log(fullName); // work(undefined): có tồn tại nhưng có gias trị là undefined
// var fullName = 'Vo Thanh Quy';
// console.log(fullName)

// function showErrorWithVar(){
//     var isError =  true;
//     var error = '';

//     if(isError){
//         var error = 'Something went wrong!';
//         console.log(error);
//     }
//     console.log(error);
// }
// showErrorWithVar();

/**
 * Khai báo biến let
 */
//console.log(age); //Lỗi: (cannot access)
// let age = 18;
// console.log(age);

// function showErrorWithLet(){
//         let isError =  true;
//         let error = '';
    
//         if(isError){
//             let error = 'Something went wrong!';
//             console.log(error);
//         }
//         console.log(error);
//     }
//     showErrorWithLet();

/**
 * Khai báo biến const
 */
//Bắt buộc phải gán giá trị khi khai báo và không được gán lại giá trị mới
//const birthYear //lỗi
// const birthYear = 2000;
// birthYear = 2020 //lỗi: không thể gán lại giá trị mới

/**
 * Function 
 * - Arrow function
 * - So sánh declaration .vs expression(normal function) .vs arrow function(cú pháp, con trỏ this)
 *  
 */

//Expression function
    // const calAgeNormal = function(birthYear){
    //     console.log(this);// this: là window obj, đưa vào event thì sẽ là ele xảy ra sự kiện
    //     return 2021 - birthYear;
    // }

//Arrow function 
//- Không định nghĩa bối cảnh thực thi (con trỏ this) của riêng nó
//- Không quan tâm được thực thi trong ngữ cảnh nào, giá trị this của arrow function = this của outer function
//- Nếu không có outer function thì this =  global obj (window)
//- Không dùng arrow function để làm constructor func và method của obj
// const calAgeArrow = (birthYear) => {
//     console.groupEnd(this); // this này sẽ là window nếu nó không có function ngoài
//     console.log(2021 - birthYear);
// }

// calAgeArrow(2000);

// const calAgeArrowShort = (birthYear) => 2021-birthYear;

// //function một tham số có thể rút gọn như sau
// const calAgeOneParam = birthYear => 2021-birthYear;

// const Student = () => {

// }

// var tay = new Student(); // err: Student is not a constructor

// const student = {
//     name: 'tay',
//     birthYear: 2000,

//     calAgeNormal: function(){
//         console.log('calAgeNormal', this);
//         console.log(2021 - this.birthYear);
//         // const _this = this; định nghĩa lại con trỏ this, cách fix 1

//         // const checkAgeNormal  =function(){
//         //     console.log('checkAgeNormal', this)//thiss nayf sex laf mootj regular function : wwindow
//         //     if(2021 - this.birthYear >= 18 ){
//         //         console.log('You are old enough');
//         //     } else {
//         //         console.log('You are not ')
//         //     }
//         // }.bind(student); // dùng để gán lại giá trị cho con trỏ this, cách fix 2
//         // checkAgeNormal()
        
//         const checkAgeArrow  = () => {
//             console.log('checkAgeArrow', this.birthYear)
//             if(2021 - this.birthYear >= 18 ){
//                 console.log('You are old enough');
//             } else {
//                 console.log('You are not ')
//             }
//         }
//         checkAgeNormal();

//     },

//     calAgeArrow: () =>{
//         console.log(this); //window obj mà trong window k tồn tại birthYear thì sẽ ra undefined 
//         console.log(2021 - this.birthYear);
//     }
// }

// // student.calAgeNormal();
// student.calAgeArrow();


/**
 * Default Parameter
 */
// const withoutDefaultParam = (typeOfUser) => {
//     if(typeOfUser === 'user'){
//         console.log('Re-direct to user page');
//     } else {
//         console.log('Re-direct to admin page');
//     }
// }

// // withoutDefaultParam('user');

// const withDefaultParam = (typeOfUser = 'user') => {
//     if(typeOfUser === 'user'){
//         console.log('Re-direct to user page');
//     } else {
//         console.log('Re-direct to admin page');
//     }
// }
// withoutDefaultParam(); //--> user
// withoutDefaultParam('admin') //--> admin

/**
 * Destructuring  
 * - Destructuring Array
 * - Destructuring Object
 */

//With Array
//Without Destructuring 
// const students = ['Tay', 'Hoang', 'Huy'];
// const tay = students[0];
// console.log(tay);

//With destructuring
// const students = ['Tay', 'Hoang', 'Huy'];
// const [tay, hoang, huy] = students; //phai dat dung vi tris
// console.log(tay, hoang, huy)

//With Object
//Without constr
// const student = {
//     fullName: 'tay',
//     age: 18,
//     class: 'BC12'
// }

// const fullName = student.fullName;
// const age = student.age;
// console.log(fullName, age)

//With Constr
// const student = {
//     fullName: 'tay',
//     age: 18,
//     class: 'BC12'
// }
// //: gan cho class ten moi
// const { fullName, class: className} = student;
// console.log(fullName, className)

/**
 * Template string
 */

// const fullName = 'Huy Hoang';
// const str = 'My name is ' + fullName;
// const templateString = `My name is ${fullName}`;

// /**
//  * Enhanced obj Literal (shorthand syntax)
//  */
// const  age = 18;

// const person ={
//     fullName: 'Chu Ho Guom',
//     age, //age: age

//     calAge() {
//         return  2021 - this.age;
//     }
// }
// console.log(person)

/**
 * Spread operator(...)
 * -Copy array
 * -Copy object
 * -Tham trị, tham chiếu
 * -Merge array
 * -Thêm phần tử vào mảng
 * -Sử dụng array như là danh sách các tham số của  function
 */
//const person = ['Tay', 'Hoang', 'Huy'];
// console.log(person[0], person[1], person[2])
//console.log(...person); //spread là ra ra từng ele --> Tay Hoang Huy

//Copy array
//Tham chiếu (Array, Object)
// let num1 = [1, 2, 3];
// let num2 = num1; 
// console.log(num1);
// console.log(num2);
// num2.push(4); //-->
// let num1 = [1, 2, 3];
// let num2 = [...num1]; //copy hoan toan mang num1 //[...num1, 4, 5, 6]

// num2.push(4); 
// console.log(num1); //--> 123
// console.log(num2); //--> 1234

//Merge Array : nối mảng lại với nhau
// var numb1 = [1,2,3];
// var numb2 = [4,5,6];

// var numb3 = numb1.concat(numb2);
// console.log(numb3);// --> 123456
// var num3 = [...numb1, ...numb2];
// console.log(num3); // --> 123456

//Copy object

// var obj1 = {
//     a: 1,
//     b: 2,
// }

// var obj2 = {...obj1, c: 3};
// //obj2.c = 3;
// const users = ['Tay', 'Hoang', 'Huy'];
// const showUsers = (user1, user2, user3) => console.log(user1, user2, user3);
// showUsers(...users);

/**
 * Rest parameter
 */

// const sum = (num1, num2, num3) => console.log(num1+num2+num3);
// sum(1,2,3);

// const sum =  (...nums) => {
//     // console.log(nums);
//     let num = 0;
//     nums.forEach(num => {
//         sum += num;
//     });
// }
// sum(1,2,3); //=>mang  

/**
 * Module
 * -import
 * -export
 */
// import {setLocalStorage, getLocalStorage} from './util.js';
// setLocalStorage();
// getLocalStorage();

/**
 * Class: bản chất vẫn là 1 function 
 */

// expression
// const Person = class {

// }

//declaration
// class Person {
//     constructor(_firstName, _lastName, _birthYear){
//         this.firstName = _firstName;
//         this.lastName = _lastName;
//         this.birthYear = _birthYear;
//     }
//     calAge(){
//         return 2021 - this.birthYear;
//     }
// }


// const tay = new Person('Chu', 'Tay', '2000');
// console.log(tay)

// console.log(tay.__proto__ === Person.prototype);