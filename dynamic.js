function getfile(file,callback){
  var xhr=new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
  xhr.open('GET',file,true);
  xhr.onreadystatechange=function(){
    if(xhr.readyState===4 && xhr.status=="200")
    {
      callback(xhr.responseText);
    }
  }
  xhr.send(null);
}
getfile("dynamic.json",function(text){
  var data=JSON.parse(text);
  console.log(data);
    profile(data.basics);
carrier(data.career);
education(data.Education);
skills(data.skills);
})

var parent=document.querySelector('.parent');
var child1=document.querySelector('.child1');
var child2=document.querySelector('.child2');
function profile(pro){

  var image=document.createElement('img');
  image.src=pro.img;
  child1.appendChild(image);
  parent.appendChild(child1);
  var head=document.createElement('h2');
  head.textContent=pro.name;
  child1.append(head);
  var hr=document.createElement('hr');
  child1.appendChild(hr);
}
function carrier(c){
  var rh=document.createElement("h2");
  rh.textContent="resume Bulider";
  child2.append(rh);
  var hr=document.createElement('hr');
  child2.append(hr);
  var rh1=document.createElement("h2");
  rh1.textContent=c.info;
  child2.append(hr);
  child2.append(rh1);

}
function education(edu){
  var h2=document.createElement('h2');
  h2.textContent="education details";
  child2.appendChild(h2);

  var hr=document.createElement('hr');
  child2.append(hr);

var table=document.createElement('table');
let row='';
row +="<tr>"+"<td>"+"s.no"+"<th>"+
"<th>"+"Degree" +"</th>"+
"<th>"+"institute"+"/th>"+
"<th>"+ "percantage"+"</th>"+
"</tr>";

for(i in edu)
{
row +="<tr>"+"<td>"+edu[i].sno +"<td>"+
"<td>"+edu[i].degree + "</td>"+
"<td>"+edu[i].institute +"/td>"+
"<td>"+edu[i].per + "</td>"+
"</tr>";
}
table.innerHTML=row;
child2.appendChild(table);
parent.appendChild(child2);
}
function skills(l){
  var hh=document.createElement("h2");
  hh.textContent="skills set";
  child2.append(hh);
  var ul=document.createElement(ul);
  child2.append(ul);
  for(i in l){
    var li=document.createElement("li");
    li.textContent=l[i].info;
    ul.append(li);
  }
}
