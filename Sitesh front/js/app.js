function caller(){

var array=[
	{"Fieldname":"Name","datatype":"text"},
	{"Fieldname":"Email","datatype":"email"},
	{"Fieldname":"Date Of Birth","datatype":"dat"},
	{"Fieldname":"Profession","datatype":"type","option":["select","Student","Fresher","Struggler"],"count":"a","list":"4"}
	];

function myfunction(arr)
{
var i, x;

var frmtag=document.createElement("form");
frmtag.setAttribute("id","frm");
frmtag.setAttribute("role","form");
frmtag.setAttribute("method","get");
frmtag.setAttribute("action","#");
document.getElementById("yodiv").appendChild(frmtag);

var head=document.createElement("H3");
head.setAttribute("id","heading");
head.setAttribute("style","color:#800000;");
document.getElementById("frm").appendChild(head);
document.getElementById("heading").innerHTML="Registration";


for(i=0;i<array.length;i++)
{
if(arr[i].datatype=="type"){
var lab=document.createElement("LABEL");
lab.setAttribute("id",arr[i].count);
lab.setAttribute("style","color:#800000;");
document.getElementById("frm").appendChild(lab);
document.getElementById(arr[i].count).innerHTML=arr[i].Fieldname;
}else{
var lab=document.createElement("LABEL");
lab.setAttribute("id",arr[i].Fieldname);
lab.setAttribute("style","color:#800000");
document.getElementById("frm").appendChild(lab);
document.getElementById(arr[i].Fieldname).innerHTML=arr[i].Fieldname;
}

var br=document.createElement("BR");
document.getElementById("frm").appendChild(br);

if(arr[i].datatype=="type")
 {
  x=document.createElement("SELECT");
	x.setAttribute("required","required");
  x.setAttribute("type",arr[i].datatype);
  x.setAttribute("class","form-control");
  var ab=arr[i].Fieldname;
  var bc=arr[i].count;
  var cd=ab.concat(bc);
  x.setAttribute("id",cd);
  document.getElementById("frm").appendChild(x);

  for(var k=0;k<arr[i].list;k++)
  {
  var z=document.createElement("OPTION");
	if(arr[i].option[k] !== "select"){
  z.setAttribute("value",arr[i].option[k]);
} else {
	z.setAttribute("value","");
}
  var rf=arr[i].option[k];
  var tg=arr[i].count;
  var uj=rf.concat(tg);
  z.setAttribute("id",uj);
  document.getElementById(cd).appendChild(z);
  document.getElementById(uj).innerHTML=arr[i].option[k];
  }

}else if(arr[i].datatype=="dat")
{
  x= document.createElement("INPUT");
  x.setAttribute("type",arr[i].datatype);
  x.setAttribute("class","form-control");
  x.setAttribute("id","datepicker");
	x.setAttribute("required","required");
  document.getElementById("frm").appendChild(x);
}
else
{
  x=document.createElement("INPUT");
  x.setAttribute("type",arr[i].datatype);
  x.setAttribute("id",arr[i].datatype);
  x.setAttribute("class","form-control");
	x.setAttribute("required","required");
  document.getElementById("frm").appendChild(x);
}

var br1=document.createElement("BR");
document.getElementById("frm").appendChild(br1);
}

var btn=document.createElement("BUTTON");
btn.setAttribute("class","btn btn-primary");
btn.setAttribute("id","register");
btn.setAttribute("type","submit");
btn.setAttribute("style","margin-bottom:10px; clear:both; width:70px")
var t=document.createTextNode("Submit");
btn.appendChild(t);
document.getElementById("frm").appendChild(btn);

var btn=document.createElement("BUTTON");
btn.setAttribute("class","btn btn-primary");
btn.setAttribute("id","clear");
btn.setAttribute("type","reset");
btn.setAttribute("style","margin-bottom:10px; margin-left:0; text-align='center'; float:right; width:70px")
var t=document.createTextNode("Clear");
btn.appendChild(t);
document.getElementById("frm").appendChild(btn);
}

$(document).ready(function(){

$(document).on('click','#register',function(e){

var p=document.getElementById("text").value;
var q=document.getElementById("email").value;
if(q.indexOf('@') == -1 && q.indexOf('.')== -1)
{
	q=null;
}
var r=document.getElementById("datepicker").value;
var s=document.getElementById("Professiona").value;

 if(p&&q&&r&&s){
$ajaxUtils
	.sendGetRequest("data/name.json",
		function (res) {
			var w = Math.floor((Math.random() * 4) + 0);
			var x = Math.floor((Math.random() * 4) + 0);
			var y = Math.floor((Math.random() * 4) + 0);
			var z = Math.floor((Math.random() * 4) + 0);
			var message = "<h3 id='ajx'>This is randomly generated through Ajax call.</h3><hr id='ajxhr'><p id='outmsg'>"
			+res.name[w] + " born on " + res.dob[x] + " is a " + res.profession[y]
			+ "." + "<br>" + "Contact: " + res.email[z]+"</p>";

			document.querySelector("#yodiv")
				.innerHTML = message;
		});
	 }
});
});


  myfunction(array);
  $( function() {
      $( "#datepicker" ).datepicker();
    } );

    $(document).ready(function(e){

    });

}
