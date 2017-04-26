var a = prompt("Enter Your Full Name");
var b = prompt("Enter Your Roll No");
var c = +prompt("Enter Your HTML Marks");
var d = +prompt("Enter Your CSS1 Marks");
var e = +prompt("Enter Your CSS2 Marks");
var f = +prompt("Enter Your Javascript");

var g = document.getElementById("name");
g.innerHTML = a;

var h = document.getElementById("cname");
h.innerHTML = b;

var i = document.getElementById("html");
i.innerHTML = c;

var j = document.getElementById("css1");
j.innerHTML = d;

var k = document.getElementById("css2");
k.innerHTML = e;

var l = document.getElementById("js1");
l.innerHTML = f;

var x = (c+d+e+f)/4;
var m = document.getElementById("Avg");
m.innerHTML = x;

var y = document.getElementById ("Grd");
x.innerHTML = Grd;

if (x >= 80 && x <=100) {
Grd.innerHTML = "A+";
}
else if (x >= 70 && x <=100) {
Grd.innerHTML = "A";
}
else if (x >= 60 && x <=100) {
Grd.innerHTML = "B";
}