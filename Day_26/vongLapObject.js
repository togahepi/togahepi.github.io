var student = {
	firstName:"Nguyễn Văn",
	lastName:"Tèo",
	age:18
};

for (var s in student) {
	document.write("<p>"+student[s]+"</p>");
}