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
let s1 = document.getElementById("s1").value;
let s2 = document.getElementById("s2").value;
let s3 = document.getElementById("s3").value;
let s4 = document.getElementById("s4").value;
let s5 = document.getElementById("s5").value;
let s6 = document.getElementById("s6").value;
let namedisp=document.getElementById("namedisp").innerHTML=name;
let semdisp=document.getElementById("semdisp").innerHTML=sem;
let codedisp=document.getElementById("codedisp").innerHTML=n2;
let sub1n=document.getElementById("sub1n").innerHTML=s1;
let sub1m=document.getElementById("sub1m").innerHTML=eng;
let sub1tm=document.getElementById("sub1tm").innerHTML=eng_tot;
let sub2n=document.getElementById("sub2n").innerHTML=s2;
let sub2m=document.getElementById("sub2m").innerHTML=mat;
let sub2tm=document.getElementById("sub2tm").innerHTML=mat_tot;
let sub3n=document.getElementById("sub3n").innerHTML=s3;
let sub3m=document.getElementById("sub3m").innerHTML=com;
let sub3tm=document.getElementById("sub3tm").innerHTML=com_tot;
let sub4n=document.getElementById("sub4n").innerHTML=s4;
let sub4m=document.getElementById("sub4m").innerHTML=cpp;
let sub4tm=document.getElementById("sub4tm").innerHTML=cpp_tot;
let sub5n=document.getElementById("sub5n").innerHTML=s5;
let sub5m=document.getElementById("sub5m").innerHTML=vb;
let sub5tm=document.getElementById("sub5tm").innerHTML=vb_tot;
let sub6n=document.getElementById("sub6n").innerHTML=s6;
let sub6m=document.getElementById("sub6m").innerHTML=seng;
let sub6tm=document.getElementById("sub6tm").innerHTML=seng_tot;
console.log(namedisp);
let totalmark = parseFloat(eng) + parseFloat(mat) + parseFloat(com) + parseFloat(vb) + parseFloat(seng) + parseFloat(cpp);
let grade="";
let overall = parseFloat(eng_tot) + parseFloat(mat_tot) + parseFloat(com_tot) + parseFloat(vb_tot) + parseFloat(seng_tot) + parseFloat(cpp_tot);

let per = parseInt((totalmark/overall)*100);
alert("result");
if( name==""||name==null,sub1n=="",sub1m=="")
{
alert("ENTER ALL THE VALID DETAILS")
return false;
}
if(per <=100 && per>=80)
{
grades="A";
}
else if(per <=79 && per>=60)
{
grades="B";
}
else if(per <=59 && per>=40)
{
grades="C";
}
else
{
grades="E";
}
if(per >=40)
{
    document.getElementById("gradepoint").innerHTML = ` MARK: ${totalmark}    TOTAL: ${overall}       GRADE: ${grades}        PERCENTAGE:${per}% PASSED`
    

}
else{
    document.getElementById("gradepoint").innerHTML = ` MARK: ${totalmark}     TOTAL: ${overall}      GRADE: ${grades}         PERCENTAGE:${per}% FAILED`
}
}