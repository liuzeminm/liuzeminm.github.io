var day=""; 
var month=""; 
var year=""; 
mydate=new Date(); 
mymonth=mydate.getMonth()+1; 
myday= mydate.getDate(); 
myyear= mydate.getYear(); 
year=(myyear > 200) ? myyear : 1900 + myyear; 
document.write(year+"年"+mymonth+"月"+myday+"日 "); 

var urodz= new Date("6/12/2013");
var s="端午节";
var now = new Date();
var ile = urodz.getTime() - now.getTime();
var dni = Math.floor(ile / (1000 * 60 * 60 * 24))+1;
if (dni > 1)
document.write("离"+s+"还有"+dni +"天")
else if (dni == 1)
document.write("明天就是"+s+"啦！")
else if (dni == 0)
document.write(""+s+"快乐！")
else
document.write("记得要天天开心哦！");  
