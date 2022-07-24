import navbar from "../component/navber.js"
document.getElementById("NavbarDNA").innerHTML = navbar()
import left_side from "../component/leftSide.js"
document.getElementById("left_menu").innerHTML = left_side()
import footer from "../component/footer.js"
document.getElementById("footer").innerHTML = footer()
import right_views from "../component/rightSide.js"
document.getElementById("rightSide").innerHTML = right_views()


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
        div.append(img,p)
        append_popular.append(div)
    })

}
rightdata()


const navbar_slide_show = [
                    "CBSE Board Results 2022 LIVE: Class 12 Term 2 scores announced, over 1.34 lakh students score above 90%",
                    "Ranveer Singh nude photoshoot: Mimi Chakraborty questions gender equality, says 'wonder if...'",
                    "Who is Eldhose Paul, Indian triple jumper who made history by qualifying for World Athletics Championships?",
                    "NCR weather update: Rain, thundershowers in Delhi, adjacent cities over the weekend, check complete IMD forecast"
                    ]
let slideshow = () =>{

let latest_news = document.getElementById("Part2")
let i =0
setInterval(function(){
    if(i===navbar_slide_show.length)
    {
        i = 0
    }
    latest_news.innerText = navbar_slide_show[i]
    i++
},2000)
}
slideshow() 

const data=[
    {
        img:"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/20/2523736-2522191-moon-pexels.jpg",
        headline:"International Moon Day 2022: History, significance and why it is celebrated"
    },

    {
        img:"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/19/2523480-balamani-amma.png",
        headline:"Google Doodle today: Who was Balamani Amma, Indian poet who wowed the country with her words?"
    },

    {
        img:"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/18/2523424-untitled-design-2022-07-18t213313.852.png",
        headline:"Sawan 2022: Know about 12 jyotirlingas, their significance for Lord Shiva devotees"
    },

    {
        img:"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/18/2523277-fotojet-41-1.jpg",
        headline:"Want to get better eyesight? Here are some food items that can help you"
    },

    {
        img:"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/18/2523312-fotojet-43-1.jpg",
        headline:"Anxiety in teenagers: Know reasons, ways to manage anxious feelings in youngsters"
    },

    {
        img:"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/18/2523323-oskar-sala.jpg",
        headline:"Who is Oskar Sala, German Electronic Music composer? Know why he is being celebrated by Google Doodle"
    },

    {
        img:"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/17/2523024-untitled-design-2022-07-16t224153.618.png",
        headline:"National Ice Cream Day 2022: History, significance, ways to treat yourself on July 17"
    },

    {
        img:"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/16/2522857-sawan-1.jpg",
        headline:"Sawan month 2022: List of Sawan Somvar, shravan mantras and all you need to know"
    },

    {
        img:"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/17/2523142-untitled-design-2022-07-17t160749.201.png",
        headline:"The Lancet study claims drinking alcohol can benefit you, here's how"
    },

    {
        img:"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/15/2522657-alcohol-pixabay.jpg",
        headline:"How much alcohol to drink at what age, The Lancet study reveals"
    },
    {
        img:"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/24/2524669-parents-day.jpg",
        headline:"Happy Parents' Day 2022: Greetings, WhatsApp messages, quotes to wish your parents on this special day"
    },
    {
        
        img:"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/23/2524605-7042975-kanwar-yatra-dna.jpg",
        headline:"Kanwar Yatra 2022: History, significance during the month of Sawan"
    },
    {
        img:"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/22/2524403-untitled-design-2022-07-22t214240.104.png",
        headline:"Using your phone in toilet? Know 4 ways how you are jeopardising your health"
    },
    {
        img:"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/22/2524380-artciel-18.png",
        headline:"Meet Juhi Vyas, the first runner-up of Mrs. India Inc 2022 and a new internet sensation"
    },
    {
        img:"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/20/2523754-fotojet-52-1.jpg",
        headline:"Know how 1960s shipwreck found near South Goa’s Vasco became a popular tourist spot"
    }
];

function append(data) {
    
    let container = document.getElementById("container");

    data.forEach(function (ele) {

        let div = document.createElement("div");
        let a = document.createElement("a")
        a.href="desc.html"
        let img = document.createElement("img");
        img.src = ele.img;
        let headline = document.createElement("p");
        headline.innerText = ele.headline;
       
        a.append(img ,headline)
         div.append(a);
         container.append(div);
})  
};
append(data);