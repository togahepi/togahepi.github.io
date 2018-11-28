//Bai 1
//Test case
//bai1(4,6) => 6
//bai1("y",true) => Có ít nhất một giá trị không là số!

function bai1(a, b) {
	if (typeof a == "number" && typeof b == "number"){
		if(a>b){
			return a;
		} else {
			return b;
		}
	}

	else {
		document.write("Có ít nhất một giá trị không là số!</br>")
	}
}

//Bai 2
//Test case
//bai2(-6) => Số âm không có giai thừa!
//bai2(6) => 6!=720

function bai2(a) {
	if (a>0) {
		var m = a;
	for (var i=1;i<m;i++) {
		a=a*(m-i);
	}
	return document.write(m + "!= " + a + "</br>");
	}
	else {
		document.write("Số âm không có giai thừa!");
	}
}

//Bai 3
//Test case
//bai3([4,5,3,7,8,9,2,1]);
// (3) [2, 4, 8]
//bai3([4,5,3,7,8,9,2,1,2,5,4,3,334]);
//(6) [2, 2, 4, 4, 8, 334]

function bai3(mangSo) {
	var soChan = [];
	for (var i = 0; i<mangSo.length; i++) {
		if((mangSo[i]%2) == 0) {
			soChan.push(mangSo[i]);
		}
	}
	soChan.sort(function(a,b){return (a-b)});
	return soChan;
}

//Bai 4
//Test case
//hiep.check=kiemTra; hiep.check(); => Hợp lệ
//cham.check=kiemTra; cham.check(); => Không hợp lệ

var hiep = {
	userName: "hieptoan92",
	password: "secretery",
	confirm: "secretery",
	check: function(){}
};

var cham = {
	userName: "KaKa",
	password: "12345",
	confirm: "13452",
	check: function(){}
};

var kiemTra =	function () {
					if ((this.userName.length > 0) && (this.userName.length<20) && (this.password.length>=6 && this.password.length<=32) && (this.confirm == this.password)) {
						document.write("Hợp lệ.");
					}
					else {
						document.write("Không hợp lệ.");
					}
				};