function getrslt()
{
let name = document.getElementById("name").value;
let sem = document.getElementById("sem").value;
let n2 = document.getElementById("n2").value;
let eng = document.getElementById("eng").value;
let eng_tot = document.getElementById("eng_tot").value;
let mat = document.getElementById("mat").value;
let mat_tot = document.getElementById("mat_tot").value;
let com = document.getElementById("com").value;
let com_tot = document.getElementById("com_tot").value;
let cpp = document.getElementById("cpp").value;
let cpp_tot = document.getElementById("cpp_tot").value;
let vb = document.getElementById("vb").value;
let vb_tot = document.getElementById("vb_tot").value;
let seng = document.getElementById("seng").value;
let seng_tot = document.getElementById("seng_tot").value;
console.log(eng_tot);
console.log(mat_tot);
console.log(cpp_tot);
console.log(com_tot);
console.log(vb_tot);
let totalmark = parseFloat(eng) + parseFloat(mat) + parseFloat(com) + parseFloat(vb) + parseFloat(seng) + parseFloat(cpp);
let grade="";
let overall = parseFloat(eng_tot) + parseFloat(mat_tot) + parseFloat(com_tot) + parseFloat(vb_tot) + parseFloat(seng_tot) + parseFloat(cpp_tot);
let per = (totalmark/overall)*100;
if(per <=100 && per>=80)
{
grade = 'A'
}
else if(per <=79 && per>=60)
{
grade = 'B'
}
else if(per <=59 && per>=40)
{
grade = 'C'
}
else
{
grade = 'D'
}



}