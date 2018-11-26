//Bai 1: Viet ra man hinh dong chu hello
console.log("Hello");

function loichao() {
	return document.write("Hello");
}
//Test case
//loichao();

//Bai 2: Viet ra man hinh 1 doan van
function bai2() {
	return document.write("<p>Hello</p></br><p>Cong hoa xa hoi chu nghia Viet Nam</p></br><p>Doc lap * Tu do * Hanh Phuc</p>");
}
//Test case
//bai2()

//Bai 3: Doc 1 so nguyen va ghi ra
function bai3() {
	var a = prompt("Nhap vao 1 so nguyen:");
	if (a != null) {
		alert ("So vua nhap la: " + a);
	}
}
//Test case
//bai3() 7

//Bai 4: Doc 2 so nguyen va ghi ra
function bai4() {
	var a = prompt("Nhap vao so nguyen thu nhat: ");
	var b = prompt("Nhap vao so nguyen thu hai: ");
	return document.write("So nguyen thu nhat la:"+a+"</br>"+"So nguyen thu hai la:"+b);
}
//Test case
//bai4() 7 8

//Bai 5: Nhap vao 2 so nguyen va ghi ra tong
function bai5() {
	var a = prompt("Nhap vao so nguyen thu nhat: ");
	var b = prompt("Nhap vao so nguyen thu hai: ");
	var c = Number(a) + Number(b);
	return document.write("Tong 2 so vua nhap la: " + c);
}
//Test case
//bai5() 7 8

//Bai 6: Nhap ban kinh duong tron va ghi ra dien tich
function bai6() {
	var r = prompt("Nhap vao ban kinh duong tron: ");
	var s = Number(r)*Number(r)*3.14;
	return document.write("Dien tich hinh tron la: "+s);
}
//Test case
//bai6() 3

//Bai 7
function bai7() {
	var r = prompt("Nhap vao ban kinh hinh cau: ");
	var s = 4*3.14*Number(r)*Number(r);
	var v = (4/3)*3.14*Number(r)*Number(r)*Number(r);
	return document.write("<b>Dien tich hinh cau la: </b>"+s+"</br>"+"<b>The tich hinh cau la: </b>"+v);
}
//Test case
//bai7() 7

//Bai 8
function bai8() {
	var a = prompt("Nhap vao so nguyen bat ky: ");
	var b = Number(a)*Number(a);
	var c = Number(a)*Number(a)*Number(a);
	return document.write("<b>Binh phuong cua </b>" + a + "<b> la: </b>"+b+"</br>"+"<b>Lap phuong cua </b>" + a + "<b> la: </b>"+c+"</br>");
}

//Bai 9
function bai9() {
	var giay = prompt("Nhap vao 1 so giay trong khoang 0 -> 86399")
	var gio = Math.floor(Number(giay)/3600);
	var phut = Math.floor((Number(giay)%3600)/60);
	var giay = Number(giay)%60;
	return document.write(gio + ":" + phut + ":" + giay +"</br>");
}

//Bai 10

function bai10() {
	var a = prompt("Nhap vao so nguyen bat ky: ");
	var b = Number(a)*2;
	return document.write("So gap doi so " + a + " la: " + b + "</br>");
}

//Bai 11

function bai11() {
	var a = prompt("Nhap vao so nguyen bat ky <=100: ");
	var b = prompt("Nhap vao so nguyen bat ky <=100: ");
	var c = prompt("Nhap vao so nguyen bat ky <=100: ");
	var d = (Number(a) - Number(b))*Number(c);
	return document.write(d + "</br>");
}

//Bai 12

function bai12() {
	var a = prompt("Nhap vao so nguyen bat ky <=1000: ");
	var b = prompt("Nhap vao so nguyen bat ky <=1000: ");
	var d = Number(a) + Number(b) + Number(a)*Number(b);
	return document.write(d + "</br>");
}

//Bai 13

function bai13() {
	var gio = prompt("Nhap vao gio: ");
	var phut = prompt("Nhap vao phut: ");
	var giay = prompt("Nhap vao giay: ");
	var x = prompt("Nhap vao so giay can them: ");
	var tongGiay = (Number(gio)*3600 + Number(phut)*60 + Number(giay) + Number(x))%(24*3600);
	var gio2 = Math.floor(Number(tongGiay)/3600);
	var phut2 = Math.floor((Number(tongGiay)%3600)/60);
	var giay2 = Number(tongGiay)%60;
	return document.write("Sau khoang thoi gian " + x + " giay tu thoi diem " + gio + ":" + phut + ":" + giay + " thi thoi gian la: " + gio2 + ":" + phut2 + ":" + giay2 + "</br>");
}