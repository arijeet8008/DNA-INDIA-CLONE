// //https://newsapi.org/v2/everything?q=entertainment&from=2022-06-20&sortBy=publishedAt&apiKey=f155665b2d7a42669a2a632571433c3d

import navbar from "../component/navber.js"
    document.getElementById("NavbarDNA").innerHTML = navbar()

import left_side from "../component/leftSide.js"
    document.getElementById("left_menu").innerHTML = left_side()    

    import footer from "../component/footer.js"
    document.getElementById("footer").innerHTML = footer()

    import right_views from "../component/rightSide.js"
    document.getElementById("rightSide").innerHTML = right_views()


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

let right_side_data = {
    "popular_stories" :[
        {
            "image":"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/20/2523771-untitled-design-2022-07-13t193451.521.jpg",
            "about" : "CISCE ISC Class 12 Result 2022: Marking scheme, how to download here"
        },
        
        {
            "image":"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/21/2524088-untitled-design-51.jpg",
            "about" : "CUSAT Result 2022 released at admissions.cusat.ac.in: Check important details here"
        },
        {
            "image":"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/21/2524104-untitled-design-2022-07-17t145605.612.jpg",
            "about" : "Karnataka CET Result 2022 to be out soon: Website, how to check here"
        },
        {
            "image":"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/20/2523771-untitled-design-2022-07-13t193451.521.jpg",
            "about" : "CISCE ISC Class 12 Result 2022: Marking scheme, how to download here"
        },
        
        {
            "image":"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/20/2523688-ayan-mukerji-kesariya-songfile-photos-1.jpg",
            "about" : "Brahmastra: Ayan Mukerji defends use of 'love storiya' in Kesariya song, says 'didn't find it like elaichi in biryani'"
        },
        {
            "image":"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/21/2523941-medicines.jpg",
            "about" : "Centre planning to cut prices of critical medicines for diabetes, cardiovascular and kidney diseases: Report"
        },
        {
            "image":"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/20/2523771-untitled-design-2022-07-13t193451.521.jpg",
            "about" : "CISCE ISC Class 12 Result 2022: Marking scheme, how to download here"
        }
    ],
    "most_view":
    [
        {
            "image":"https://cdn.dnaindia.com/sites/default/files/styles/quarter/public/2022/07/08/2520707-shreya-fi-1.jpg",
            "about":"The Family Man actress Shreya ..."
        },
        {
            "image":"https://cdn.dnaindia.com/sites/default/files/styles/quarter/public/2022/06/17/2359221-sara-ali-khan.jpg",
            "about":"Sara Ali Khan looks sizzling h..."
        },
        {
            "image":"https://cdn.dnaindia.com/sites/default/files/styles/quarter/public/2022/05/27/2007952-fotojet-2022-05-27t122144.022.jpg",
            "about":"6 times Janhvi Kapoor handled ..."
        },
        {
            "image":"https://cdn.dnaindia.com/sites/default/files/styles/quarter/public/2022/05/23/1942850-team-india.jpg",
            "about":"Sanju Samson to Rahul Tripathi..."
        },
        {
            "image":"https://cdn.dnaindia.com/sites/default/files/styles/quarter/public/2022/06/17/2359221-sara-ali-khan.jpg",
            "about":"Sara Ali Khan looks sizzling h..."
        },
        {
            "image":"https://cdn.dnaindia.com/sites/default/files/styles/quarter/public/2022/05/23/1942596-gyanvapi-mosque9.jpg",
            "about":"Rare photo of Gyanvapi complex..."
        }
    ],
    "speed_read":
    [
        {
            "image":"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/22/2524210-untitled-design-93.png",
            "about":"Meet Arvind Goyal, Moradabad man who donated his wealth worth Rs 600 crore to UP government top-stories Fire breaks out in"
        },
        {
            "image":"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/22/2524207-fire.jpg",
            "about":"Fire breaks out in Kandi forest area in West Bengal's Murshidabad district"
        },
        {
            "image":"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/22/2524205-2415196-untitled-design-70.jpg",
            "about":"Man on Delhi-bound IndiGo plane claims bomb in bag, flight grounded"
        },
        {
            "image":"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/22/2524182-untitled-design-2022-06-28t164615.653.jpg",
            "about":"CBSE Class 10 Result 2022: From how to check to past year result trends"
        },
        {
            "image":"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/21/2524191-2523244-wordle-answer-for-today-1.jpg",
            "about":"Wordle 398 answer: Here is the Wordle answer for July 22"
        }
    ],
    "most_watch":
    [
        {
            "image":"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/16/2522881-racism.jpg",
            "about":"DNA Exclusive: Brad Hogg talks about racism in cricket, says 'anyone who's racist is not that intelligent'"
        },
        {
            "image":"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/05/2519945-soren-shah.jpg",
            "about":"DNA Exclusive: Another Maharashtra in offing? Soren-Shah meeting catches eyeballs in Jharkhand"
        },
        {
            "image":"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/06/13/2232844-launch-of-the-trailer-of-bandon-mein-tha-dum.jpg",
            "about":"Bandon Mein Tha Dum: The IND vs AUS Test series was fought with blood, brains and brawn, says producer Sudip Tewari"
        },
        {
            "image":"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/04/13/1451620-jasprit-bumrah.jpg",
            "about":"'We keep on fighting,' says Jasprit Bumrah on MI's chances of winning IPL 2022 | Exclusive"
        },
        {
            "image":"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/01/02/1012756-2.png",
            "about":"DNA Exclusive: Harbhajan Singh claims MS Dhoni, BCCI forced him out of Team India"
        }
    ]
}

let popular = right_side_data.popular_stories
let mostViewed = right_side_data.most_view
let speed_read = right_side_data.speed_read
let mostWatch = right_side_data.most_watch


let rightdata = ()=>{
    popular.forEach(function(el){
        let append_popular = document.getElementById("right_side_popular_stories")
        let div = document.createElement("div")
        div.setAttribute("id","right_speed_read_box")
        let img = document.createElement("img")
        img.src = el.image
        let p = document.createElement("p")
        p.innerText = el.about
        console.log(img,p)
        div.append(img,p)
        append_popular.append(div)
    })
    mostViewed.forEach(function(el){
        let append_popular = document.getElementById("right_side_most_viewed")
        let div = document.createElement("div")
        div.setAttribute("id","right_most_viewed_box")
        let img = document.createElement("img")
        img.src = el.image
        let p = document.createElement("p")
        p.innerText = el.about
        console.log(img,p)
        div.append(img,p)
        append_popular.append(div)
    })
    speed_read.forEach(function(el){
        let append_popular = document.getElementById("right_side_speed_read_apend")
        let div = document.createElement("div")
        div.setAttribute("id","right_speed_read_box")
        let img = document.createElement("img")
        img.src = el.image
        let p = document.createElement("p")
        p.innerText = el.about
        console.log(img,p)
        div.append(img,p)
        append_popular.append(div)
    })
    mostWatch.forEach(function(el){
        let append_popular = document.getElementById("right_side_most_watched")
        let div = document.createElement("div")
        div.setAttribute("id","right_speed_read_box")
        let img = document.createElement("img")
        img.src = el.image
        let p = document.createElement("p")
        p.innerText = el.about
        console.log(img,p)
        div.append(img,p)
        append_popular.append(div)
    })

}
rightdata()