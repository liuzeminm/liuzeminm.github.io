var thetext=""
var started=false
var step_step=0
var times=1

function welcometext()
{
 // titler();//调用Title
  times--
  if (times==0)
  { 
	if (started==false)
	{
	  started = true;
	  window.status = hellotext;
	  setTimeout("anim()",1); 
	}
	thetext = hellotext;
  }
}

function showstatustext(txtt)
{
  thetext = txtt;
  setTimeout("welcometext()",4000)
  times++
}

function anim()
{
  step_step++
  if (step_step==7) {step_step=1}
  if (step_step==1) {window.status='☆☆☆☆'+thetext+'☆☆☆☆'}
  if (step_step==2) {window.status='★☆☆☆'+thetext+'☆☆☆★'}
  if (step_step==3) {window.status='★★☆☆'+thetext+'☆☆★★'}
  if (step_step==4) {window.status='★★★☆'+thetext+'☆★★★'}
  if (step_step==5) {window.status='★★★★'+thetext+'★★★★'}
  if (step_step==6) {window.status='☆☆☆☆'+thetext+'☆☆☆☆'}
  setTimeout("anim()",200);
}
window.onload=welcometext;

function tab(num){
for(i=0;i<5;i++){
if(document.getElementById('a'+i)){
document.getElementById('a'+i).className='checkA';
document.getElementById('c'+i).style.display='none';
}
}
document.getElementById('a'+num).className='checkB';
document.getElementById('c'+num).style.display='block';
}					
window.moveTo(0,0);
window.resizeTo(screen.availWidth,screen.availHeight);//最大化窗口