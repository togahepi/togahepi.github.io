console.log("Xin chao cac ban");
function thongbao() {
	alert("Demo Javascript");
}
function tinhtong(x, y) {
	return (x + y);
}

var tingtong = function(x,y) {
	alert("Ket qua: " + (x + y));
}

//Bai 1
function binhphuong(x) {
	return (x*x);
}
//Test case
//binhphuong(3)
//binhphuong(69)

//Bai 2
function binhphuong3so(a,b,c) {
	return(binhphuong(3*a+2*b-c));
}
//Test case
//binhphuong3so(69,96,669)

//Bai 3
function catChuoi(a) {
	return(a[0]+a[1]+a[2]+a[3]+a[4]+a[5]+a[6]+a[7]+a[8]+a[9]+'...');
}
//Test case
//catChuoi("Toi la ai tren coi doi nay")

//Bai 4
function bai4(a) {
	a=a.toLowerCase();
	b=a[0].toUpperCase();
	a[0]=b;
	return(a[0].toUpperCase());
}