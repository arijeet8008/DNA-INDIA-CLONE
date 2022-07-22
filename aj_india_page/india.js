// //https://newsapi.org/v2/everything?q=entertainment&from=2022-06-20&sortBy=publishedAt&apiKey=f155665b2d7a42669a2a632571433c3d

let slideshow_1= ()=>{
    let images=["https://cdn.dnaindia.com/sites/default/files/styles/half/public/2022/07/21/2524078-untitled-design-2022-07-21t175834.763.jpg" ,
    "https://cdn.dnaindia.com/sites/default/files/styles/half/public/2022/07/17/2523167-untitled-design-66.png"
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
    "https://cdn.dnaindia.com/sites/default/files/styles/half/public/2022/07/20/2523841-untitled-design-52.jpg",
"https://cdn.dnaindia.com/sites/default/files/styles/half/public/2022/07/16/2523012-jagdeep.jpg",
"https://cdn.dnaindia.com/sites/default/files/styles/half/public/2022/07/14/2522475-untitled-design-25.jpg"]

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