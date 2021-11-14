let videoes=document.getElementById("videos")
async function searchVid(){
let name="Indian trending"
console.log("Indian trending")
 let res=await fetch(`https://youtube.googleapis.com/youtube/v3/search?q=${name}&type=video&key=AIzaSyDEWaqXYH7rYZqijzinLyzj2RHzGMtjgek&maxResults=20`)
 // let res=await fetch(`https://youtube.googleapis.com/youtube/v3/search?q=${name}&type=video&key=AIzaSyDEWaqXYH7rYZqijzinLyzj2RHzGMtjgek&maxResults=20`)
 
 let data=await res.json()
 console.log(data)
 // var youtubeId="2A3QMOV2SeY";
 
appendVideoes(data.items)
}
let name="Indian trending"
searchVid(name)
async function searchVideos(query){
videoes.innerHTML=null;
let name=document.getElementById("search").value
console.log(name)
let res=await fetch(`https://youtube.googleapis.com/youtube/v3/search?q=${name}&type=video&key=AIzaSyDEWaqXYH7rYZqijzinLyzj2RHzGMtjgek&maxResults=20`)
// let res=await fetch(`https://youtube.googleapis.com/youtube/v3/search?q=${name}&type=video&key=AIzaSyDEWaqXYH7rYZqijzinLyzj2RHzGMtjgek&maxResults=20`)

let data=await res.json()
console.log(data)
// var youtubeId="2A3QMOV2SeY";

appendVideoes(data.items)
}

function appendVideoes(videodata){
videoes.innerHTML=null;
videodata.forEach(({id:{videoId}}) => {
console.log(videoId)

var abc=showtitle(videoId)

console.log("abcccccc",abc)



});
}

async function showtitle(videoId){
console.log("showtitle",videoId)
let res1=await fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&fields=items(id,snippet)&key=AIzaSyDEWaqXYH7rYZqijzinLyzj2RHzGMtjgek`)
let data1=await res1.json()
var title=data1.items[0].snippet.title;
let vdata=document.createElement("div") 
let div=document.createElement("div") 
div.innerHTML=`<iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`

let p=document.createElement("p")
p.textContent=data1.items[0].snippet.title
vdata.append(div,p)
videoes.append(vdata)
//  videodata.append(p)
}
function blank(){
   
}
// var loginuser=document.getElementById("loginuser")
// loginuser.onclick=function(){
//     login()
// }
let doc=document.getElementById("loginuser")
doc.onclick=()=>{
    window.location.href="login.html"
}

let reg=document.getElementById("registeruser")
reg.onclick=()=>{
    window.location.href="register.html"
}


if(localStorage.getItem("ytuser")!=null){
    var logindata=JSON.parse( localStorage.getItem("ytuser"));
    console.log((logindata[0].name));
    var jff=document.getElementById("user");
    jff.innerHTML=logindata[0].name;
    jff.style.color="black";
    jff.style.backgroundColor="white"
    jff.style.fontSize="25px"
    // jff.style.backgroundColor="black"
// hid;
// var login=document.getElementById("login");
// login.style.display="none";
// var bellsign=document.getElementById("bellsign");
// bellsign.style.display="block";
// var hiddenfig=document.getElementById("hiddenfig");
// hiddenfig.style.display="block";
// var verticalline=document.getElementById("verticalline");
// verticalline.style.display="block";
}
