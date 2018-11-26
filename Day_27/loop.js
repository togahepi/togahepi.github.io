//Bai 1:
//Test case
//n=5; 5!=120;
function bai1() {
	var n = prompt("Nhap so nguyen duong n: ");
	n = Number(n);
	var m = n;
	for (var i=1;i<m;i++) {
		n=n*(m-i);
	}
	return document.write(m + "!= " + n + "</br>");
}

//Bai 2:
//Test case
//"Techmaster.vn" -> "nv.retsamhceT"
function bai2() {
	var a = prompt("Nhap chuoi can dao nguoc: ");
	var n = a.length;
	var b = "";
	
	for (var i = 1; i<=n; i++){
		b = b + a[n-i];
	}
	
	return document.write(b);

}

//Bai 3:
//Test case

function bai3() {
	var a = prompt("Nhap chuoi so: ");
	document.write(a);
	for (var i = 0; i<9; i++) {
		document.write("-"+a);
	}

}
