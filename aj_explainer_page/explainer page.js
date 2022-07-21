// //https://newsapi.org/v2/everything?q=entertainment&from=2022-06-20&sortBy=publishedAt&apiKey=f155665b2d7a42669a2a632571433c3d

let slideshow_1= ()=>{
    let images=["https://cdn.dnaindia.com/sites/default/files/styles/half/public/2021/09/14/996199-brahmos-4.jpg",
    "https://cdn.dnaindia.com/sites/default/files/styles/half/public/2021/09/02/994192-martinsville-seven-1.jpg"
]

let box=document.getElementById("aj_photo_sec-1");

let i=0;
setInterval(()=>{
    if(i===images.length){
        i=0
    }
    let img =document.createElement("img")
    img.src=images[i]
    box.innerHTML=""
    box.append(img);
    i++;
},3000)
}

slideshow_1()

let slideshow_2= ()=>{
    let images=[
    "https://cdn.dnaindia.com/sites/default/files/styles/half/public/2021/09/01/993721-solar-storm-reuters.jpg",
"https://cdn.dnaindia.com/sites/default/files/styles/half/public/2021/08/10/989960-india-heatwave-file-reuters.jpg",
"https://cdn.dnaindia.com/sites/default/files/styles/half/public/2021/08/07/989486-space-tourism-pixabay.jpg"]

let box=document.getElementById("aj_photo_sec-2");

let i=0;
setInterval(()=>{
    if(i===images.length){
        i=0
    }
    let img =document.createElement("img")
    img.src=images[i]
    box.innerHTML=""
    box.append(img);
    i++;
},3500)
}

slideshow_2()