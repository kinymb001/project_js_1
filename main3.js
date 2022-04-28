// promise:
//	- sync
//	- async: setTimeout, feth, XMLHttpRequest
// requestAnimationFrame

// sync/async:

// Callback hell: 1 giay in ra 1 1s sau in ra 2...
// setTimeout(function() {
// 	console.log(1);
// 	setTimeout(function() {
// 		console.log(2);
// 		setTimeout(function() {
// 			console.log(3);
// 			setTimeout(function(){
// 				console.log(4);
// 			}, 1000)
// 		}, 1000)
// 	}, 1000)
// }, 1000)

// b1: new Promise
// b2: Excutor

//promise co 3 trang thai:
// 1. pendding: trang thai cho
// 2. fulfilled : trang thai thanh cong
// 3 reject : trang thai that bai


// var pro = new Promise(
// 	//Excutor
// 	function(resolve, reject){
// 		//logic
// 		//thanh cong: resolve()
// 		//that bai: reject()

// 		resolve();

// 	}
// );

// pro
// 	.then(function() {
// 		return new Promise(
// 			function(resolve) {
// 				setTimeout(function(){
// 					resolve([1,2,3]);
// 				}, 3000);
// 			}
// 		);
// 	})
// 	.then(function(data) {
// 		console.log(data);
// 		return 2
// 	})
// 	.catch(function() {
// 		console.log('that bai');
// 	})
// 	.finally(function() {
// 		console.log('xong');
// 	});

// function sleep(ms) {
// 	return new Promise(function(resolve){
// 		setTimeout(resolve, ms);
// 	})
// };

// sleep(2000)
// 	.then(function(){
// 		console.log(1);
// 		return sleep(2000);
// 	})
// 	.then(function(){
// 		console.log(2);
// 		return sleep(2000);
// 	})
// 	.then(function(){
// 		console.log(3);
// 		return sleep(2000);
// 	})
// 	.then(function(){
// 		console.log(4);
// 		return sleep(2000);
// 	})

// var pro = new Promise(
// 	function(resolve, reject){
// 		resolve('success!!');
// 	}
// );

// pro
// 	.then(function(e){
// 		console.log(e);
// 	})

var a = Promise.resolve('success1!!');
a
	.then(function (e) {
		console.log(e);
	})

var a = new Promise(
	function (resolve) {
		setTimeout(function () {
			resolve([1]);
		}, 2000)
	}
)

var b = new Promise(
	function (resolve) {
		setTimeout(function () {
			resolve([3, 5]);
		}, 3000)
	}
)

function sayHello() {
	console.log('hello nodejs');
}

function logSaying(fn) {
	fn();
}

logSaying(sayHello);

(function () {
	var firstName = 'Hoa';
	console.log(firstName);
}());

var firstName = "Mai";

console.log(firstName);
var sayHello = Request("./hello.js");
sayHello();