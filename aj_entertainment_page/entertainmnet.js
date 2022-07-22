// //https://newsapi.org/v2/everything?q=entertainment&from=2022-06-20&sortBy=publishedAt&apiKey=f155665b2d7a42669a2a632571433c3d

let slideshow_1= ()=>{
    let images=["https://cdn.dnaindia.com/sites/default/files/styles/half/public/2022/07/21/2523994-hollywood-actors.jpg" ,
    "https://cdn.dnaindia.com/sites/default/files/styles/half/public/2022/07/21/2523923-the-gray-man-1.jpg"
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
    "https://cdn.dnaindia.com/sites/default/files/styles/half/public/2022/07/20/2523871-fotojet-2022-07-20t215825.725-1.jpg",
"https://cdn.dnaindia.com/sites/default/files/styles/half/public/2022/07/19/2523451-pics-viral.jpg",
"https://cdn.dnaindia.com/sites/default/files/styles/half/public/2022/07/18/2523223-priyanka-chopra.jpg"]

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