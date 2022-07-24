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
};

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
        heading:"International Moon Day 2022: History, significance and why it is celebrated",
        img:"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/20/2523736-2522191-moon-pexels.jpg",
       paragraph:"International Moon Day will be celebrated for the first time on July 20th this year. When the Moon Village Association and a number of other UN agencies put out a proposal on December 9, 2021, the UN General Assembly approved. The proposal was submitted to the United Nations Office for Outer Space Affairs (UNOOSA).Also, READ: Google Doodle today: Who was Balamani Amma, Indian poet who wowed the country with her words?One of the most significant events in human history will be recognised on this day. Neil Armstrong and Buzz Aldrin were the first people to set foot on the Moon on July 20, 1969. It was the first time a person had stepped foot on the Moon's surface.Neil Armstrong stated, One small step for a man, one giant leap for mankind as he climbed down the ladder after landing on the moon. The 'Eagle' lunar module was used by the astronauts of Apollo 11 to land on the surface of the moon.Since that day, the Moon has been the target of several expeditions, and exploration activities have taken form. The Apollo 11 landing on July 20, 1969, was a significant moment in the history of human spaceflight.Annually, the International Moon Day will be celebrated to educate and promote the need for exploration of lunar activities and the sustainable use of the moon. On a worldwide scale, top-down (inaugural festivities) and bottom-up (other global events) approaches will be used to organise these events."

},
{
    heading:"Happy Parents' Day 2022: Greetings, WhatsApp messages, quotes to wish your parents on this special day",
    img:"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/24/2524669-parents-day.jpg",
    paragraph:"Parents' Day is celebrated on the fourth Sunday of July every year. This year, Parents' Day is celebrated on July 24. Parents Day is celebrated by the whole family, not only for mothers and fathers but the day is also for guardians, and caretakers who play the role of a parent in your life.Parents deserve to know how much their children love them, don’t forget to wish them these lovely parent’s day wishes. Yes, it's time to thank them who've got us into this world, tolerated our tantrums, sacrificed their needs, wants for our needs and demands. Here are some Parents Day 2022 wishes, greetings, and quotes that you can send to your parents and people who are playing the role of your parents:  - Happy Parents Day to the best parents in the world! I am eternally grateful to have you both, thank you for everything.- Nothing compares to the sacrifices our parents have made for us! Happy Parents Day to my parents.- One of the greatest titles in the world is parent, and one of the biggest blessings in the world is to have parents to call mom and dad. - Jim DeMint- The golden rule of parenting is to always show your children the kind of person you want them to be. Remember that children are impressionable. - Elizabeth Roxas- First your parents, they give you your life, but then they try to give you their life. ― Chuck Palahniuk"
}
];

function append(data) {
    
    let container = document.getElementById("container");

    data.forEach(function (ele) {

        let div = document.createElement("div");

        let heading = document.createElement("h2");
        heading.innerText = ele.heading;
       
        let img = document.createElement("img");
        img.src = ele.img;

        let paragraph = document.createElement("p");
        paragraph.innerText = ele.paragraph;
       
         div.append(heading,img,paragraph);
         container.append(div);
})  
};
append(data);