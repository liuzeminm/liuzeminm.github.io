var day=""; 
var month=""; 
var year=""; 
mydate=new Date(); 
mymonth=mydate.getMonth()+1; 
myday= mydate.getDate(); 
myyear= mydate.getYear(); 
year=(myyear > 200) ? myyear : 1900 + myyear; 
document.write(year+"��"+mymonth+"��"+myday+"�� "); 

var urodz= new Date("6/12/2013");
var s="�����";
var now = new Date();
var ile = urodz.getTime() - now.getTime();
var dni = Math.floor(ile / (1000 * 60 * 60 * 24))+1;
if (dni > 1)
document.write("��"+s+"����"+dni +"��")
else if (dni == 1)
document.write("�������"+s+"����")
else if (dni == 0)
document.write(""+s+"���֣�")
else
document.write("�ǵ�Ҫ���쿪��Ŷ��");  
