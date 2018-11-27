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
//769

function bai3() {
	var a = prompt("Nhap chuoi so: ");
	document.write(a);
	for (var i = 0; i<9; i++) {
		document.write("-"+a);
	}

}

//Bai 4:
//Test case
// students = ["Hiep","Hao","Cham","Yen","Hue","Huy"]

function bai4() {
	var students = ["Hiep","Hao","Cham","Yen","Hue","Huy"];
	students.sort();
	for (var i = 0; i<students.length;i++) {
		document.write((i+1) + ". " + students[i] + "</br>");
	}
}

//Bai 5:
//Test case
//[4,3,7,8,6,7,4,5,34,22,44,555]
//Ket qua: [8, 6, 14, 16, 12, 14, 8, 10, 68, 44, 88, 1110]

function bai5() {
	var daySo = [4,3,7,8,6,7,4,5,34,22,44,555];
	for (var i = 0; i<daySo.length;i++) {
		daySo[i]=daySo[i]*2;
	}
	return daySo;
}

//Bai 6:
//Test case
//[4,3,7,8,6,7,4,5,34,22,44,555]
//Ket qua: [0, 1, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1]

function bai6() {
	var daySo = [4,3,7,8,6,7,4,5,34,22,44,555];
	var daySoMoi = [0];
	for (var i = 0; i<daySo.length;i++) {
		daySoMoi[i]=daySo[i]%2;
	}
	return daySoMoi;
}