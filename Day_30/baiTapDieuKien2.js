//Bai1
//

var now = new Date();
var date = now.getDate();
var month = now.getMonth()+1;
var year = now.getFullYear();

document.write("Hôm nay là ngày: " + date + "/" + month + "/" + year + ".</br>");

var mua = "";
if (month<=3 && month>=1) {
	mua = "Xuân";
} else if (month<=6) {
	mua = "Hè";
} else if (month<=9) {
	mua = "Thu";
} else {
	mua = "Đông";
}

document.write("Hôm nay là mùa: " + mua + ".</br");

//Bai 2: Cắt chuỗi
//Test case
//

function catChuoi(chuoi) {
	if (typeof chuoi == "number") {
		
		chuoi = chuoi.toString();

	}

	if (chuoi.length<10) {
		
		document.write(chuoi+"</br>");

	} else {
		
		for (var i = 0; i<10; i++) {
		document.write(chuoi[i]);
		};

		document.write("...</br>");
	}
}

//Bai 3
//Test case

function xepLoai(x) {
	var diem = "";
	if (x<=10 && x>=8.5) {
		diem = "Điểm A </br>";
	} else if (x>=7) {
		diem = "Điểm B </br>";
	} else if (x>=5.5) {
		diem = "Điểm C </br>";
	} else if (x>=4) {
		diem = "Điểm D </br>";
	} else {
		diem = "Điểm F </br>";
	}
	document.write(diem);
}

//Bai 4
//Test case
//translate("Tiếng Tây Ban Nha")
//Kết quả: Hola

function translate(ngonNgu) {
	switch (ngonNgu) {
		case "Tiếng Anh" :
			document.write("Hello</br>");
			break;
		case "Tiếng Trung" :
			document.write("你好</br>");
			break;
		case "Tiếng Việt" :
			document.write("Xin Chào</br>");
			break;
		case "Tiếng Pháp" :
			document.write("Bonjour</br>");
			break;
		case "Tiếng Nga" :
			document.write("Привет</br>");
			break;
		case "Tiếng Tây Ban Nha" :
			document.write("Hola</br>");
			break;
	}
}

//Bai 5
//bai5([false,false,false,false,true,false]);
//Ket qua: True xuất hiện lần đầu trong mảng tại vị trí: 5

function bai5(arr) {
	for (var i = 0; i<arr.length;i++){
		if (arr[i]==true) {
			document.write("True xuất hiện lần đầu trong mảng tại vị trí: " + (i+1));
			break;
		}
	}
}


//Bai6

function bai6() {
	for (var i = 1; i<=100;i++){
		if (i%2==0) {
			document.write("<p style=color:green;>" + i + "</p>");
		} else {
			document.write("<p style=color:red;>" + i + "</p>");
		}
	}
}