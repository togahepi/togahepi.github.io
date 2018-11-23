//Bai 1: Binh phuong 1 so.
function binhphuong(x) {
	return (x*x);
}
//Test case
//binhphuong(3)
//binhphuong(69)

//Bai 2: Binh phuong bieu thuc 3 so.
function binhphuong3so(a,b,c) {
	return(binhphuong(3*a+2*b-c));
}
//Test case
//binhphuong3so(69,96,669)

//Bai 3: Cat 10 ki tu dau tien cua chuoi.
function catChuoi(a) {
	return(a[0]+a[1]+a[2]+a[3]+a[4]+a[5]+a[6]+a[7]+a[8]+a[9]+'...');
}
//Test case
//catChuoi("Toi la ai tren coi doi nay")

//Bai 4: Chuyen 1 chuoi bat ki thanh Viet hoa chu dau tien, cac chu sau binh thuong.
function bai4(a) {
	a=a.toLowerCase();
	var b = a.length;
	var c = a.slice(1,b);
	var d = a[0].toUpperCase() + c;
	return(d);
}
//Test case
//bai4("toi LA HOC VIEN TECHMASTER")

//Bai 5: Lay ra so nho nhat trong 1 day so.
function bai5(a) {
	var b = a.sort();
	return b[0];
}
//Test case
//bai5([388,34,22,11,55])

//Bai 6: In ra man hinh ten 5 hoc vien sau khi da sap xep.
function bai6(a) {
	var b = a.sort();
	document.write(b);
}
//Test case
//bai6(['Hiep','Cham','Linh','Yen','Van'])

//Bai 7: 

var teacher = {
	firstName: "Hào",
	lastName: "Phan Hữu",
	age: 30,
	say: function(){}
}
var aboutTeacher = function(){
	var loichao = " Xin chào, tôi là "+teacher.lastName+' '+teacher.firstName+". Năm nay tôi "+teacher.age+" tuổi.";
	return document.write(loichao);
}
var student = {
	firstName: "Hiệp",
	lastName: "Hà Văn",
	age: 26,
	say: function(){}
}
var aboutStudent = function(){
	var loichao = " Xin chào, tôi là "+student.lastName+' '+student.firstName+". Năm nay tôi "+student.age+" tuổi.";
	document.write(loichao);
}
var parent = {
	firstName: "Cúc",
	lastName: "Nguyễn Thị",
	age: 48,
	say: function(){}
}
var aboutParent = function(){
	var loichao = " Xin chào, tôi là "+parent.lastName+' '+parent.firstName+". Năm nay tôi "+parent.age+" tuổi.";
	document.write(loichao);
}
//Test case bài 7
//parent.say=aboutParent; parent.say();
//student.say=aboutStudent; student.say();
//teacher.say=aboutTeacher; teacher.say();