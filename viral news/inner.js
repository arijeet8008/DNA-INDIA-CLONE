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
        heading:"Indian 'Tinder Swindler': Andhra Pradesh man marries 13 women in 4 years, arrested",
        img:"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/21/2523991-fraud.jpg",
       paragraph:"A man, who allegedly married as many as 13 women in the two Telugu states in the last four years, has been arrested by Cyberabad police. Adapa Shivshankar Babu allegedly cheated the divorcees by absconding with money and other valuables after marrying them.The 35-year-old accused hailing from the Guntur district of Andhra Pradesh was targeting rich women who were divorced and were looking for alliances on matrimony sites. He cheated them by producing fake divorce papers and promising them a new life.Gachibowli police under the Cyberabad Police Commissionerate arrested the accused who had cases registered against him in Hyderabad, Rachakonda, Sangareddy, Guntur, Vijayawada, and Anantapur.READ | Presidential Election Results 2022 LIVE: Counting underway, result to be announced by evening.The arrest came a week after one of the victims lodged a complaint with Ramachandrapuram police station that Shivshankar Babu had taken Rs 25 lakh cash and gold worth Rs 7 lakh from her and was not returning the same A cheating case under Section 420 of the Indian Penal Code (IPC) was registered against the accused, based on a complaint from the victim.The victim had told a press conference that Babu got in touch with her in 2021 via a matrimony site. He told her that his parents had died long ago and that he had been working as a software engineer in a reputed firm with a monthly salary of Rs 2 lakh. He told her that he was a divorcee and was looking for a compatible wife. Convinced of his credentials, her parents got her married to Babu. He collected nearly Rs 25 lakh from her parents on the pretext of taking her to the US. As there were no signs of him going to the US, her parents started asking him to return the money.READ | Sidhu Moose Wala murder: All you need to know about Jagrup Singh Roopa, Manpreet Singh Mannu's encounter Babu was avoiding her and her parents. She finally approached the Ramachandrapuram police. When the police called Babu to the police station for questioning, she was shocked to learn that he was already married. The accused came to the police station with a woman, who stood surety for him and told the police that he would return the money."

},
{
    heading:"Two boys fighting cancer get dream fulfilled by Bengaluru police; leaves netizens teary-eyed" ,
    img: "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/23/2524632-untitled-design-62.png",
    paragraph:"Everyone wishes for something big, but few seem to achieve it. Even achieving a portion of one's ideal is a significant accomplishment. Even if it is only for a short time, the happiness remains. A similar scenario happened with these Bengaluru youngsters. The Bengaluru South East Division Police granted their demand to become police officers. The touching story and the motive for such an action have already made netizens teary-eyed.Two boys namely Mohammad Salman from Kerala & Mithilesh from Bengaluru are battling cancer. They wish to become police officers and their wish fell to the ears of the Bengaluru South East Division Police who organised a special moment for the boys.The Bengaluru South East Division Police Department fulfilled their wish by appointing them as DCPs (Deputy Police Commissioners) for a few hours. The little lads got to wear the outfit and sit in the DCP's office.A post regarding the same was shared by Deputy Commissioner of Police, South-East Division CK Baba on Twitter. A humbling day as I stood at attention to DCPs for the day. Courageous children, who are fighting a difficult disease and we played a small part in making their wish come true, albeit for a few hours only. Happiness unlimited for them and satisfaction for us, reads the caption of the post."
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