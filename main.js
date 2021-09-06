"use strict";
// let a;
// a = 1;
// a = true;
// a = 'a';
exports.__esModule = true;
// let b:number;
// let c:string;
// let d:boolean;
// let e:any;
// let f:number[];
// let g:any[];
// enum Colors {Red=0, Green=1, Blue=2};
// let backgroundColor = Colors.Green;
// console.log(backgroundColor);
// let doLog = () => console.log('Hello World');
// doLog();
// let withParams = (param) => console.log(param);
// withParams('okay');
// Inline Annotation
// let drawPoint = (point: {x: number, y: number}) => {
//     // ...
//     console.log(point);
// }
// drawPoint({
//     x: 1,
//     y: 2
// })
// Interface
// interface Point {
//     x: number,
//     y: number
// }
// let drawPoint = (point: Point) => {
//     // ...
//     console.log(point);
// }
// drawPoint({
//     x: 1,
//     y: 2
// })
// class
// class Point {
//     private x: number;
//     private y: number;
//     // here ? is used to make the parameters optional
//     constructor(x?: number, y?: number) {
//         this.x = x;
//         this.y = y;
//     }
//     drawPoint() {
//         console.log('X: ' + this.x + ', Y: '+ this.y);
//     }
// }
// //let point: Point = new Point();
// let point = new Point(1, 2);
// point.drawPoint();
//One of the most useful feature - ?
// class Point {
//     constructor(private x?: number, private y?: number) {}
//     drawPoint() {
//         console.log('X: ' + this.x + ', Y: '+ this.y);
//     }
//     // Property
//     get X() {
//         return this.x;
//     }
//     set X(value: number) {
//         if(value<0) {
//             throw new Error('Value cannot be less than 0');
//         }
//         this.x = value;
//     }
// }
// let point = new Point(1, 2);
// point.drawPoint();
// point.X = 3;
// console.log('Value of x: ' + point.X);
// point.drawPoint();
var point_1 = require("./point");
var point = new point_1.Point(1, 2);
point.drawPoint();
