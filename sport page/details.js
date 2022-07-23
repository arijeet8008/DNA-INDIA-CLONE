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
        heading:"Cheteshwar Pujara slams a double century for Sussex on his captaincy debut",
        img:"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/21/2524025-fotojet.jpg",
       paragraph:"Indian batter Cheteshwar Pujara continued his golden run in English county cricket, slamming his third double century of the season for Sussex against Middlesex at Lord's on Wednesday, becoming the first Indian batter to hit a double hundred in first-class cricket at the historic venue.He has scored three double centuries in seven games for his side. He hit 231 runs off 403 balls with 21 fours and three sixes before he was the last man dismissed in the innings by Tom Helm. Pujara is having a run of a lifetime as a county cricketer with Sussex. The 34-year-old was dropped from the Indian Test squad earlier this year due to an inconsistent run of form. But he has made a strong statement with his form in the County Championship Division Two. Ever since being signed as an overseas batter replacing the Australian batter Travis Head by Sussex, Pujara has been impressive for his side.He scored 6 and 201* against Derbyshire, 109 and 12 against Worcestershire, and 203 against Durham. In the game against Middlesex, he scored 16 and 170*. After this, he registered a score of just three against Leicestershire. Following these performances, he was recalled to the national Test squad and played India`s fifth and final Test against England at Edgbaston in July, in which he scored 13 and 66. India lost that test by seven wickets. After this test, he made his return to county cricket, hitting 46 against Leicestershire. After that came this massive double hundred against Middlesex at Lord's. In his 10 county innings so far, he has scored a total of 997 runs at an average of 124.62. He has hit 5 hundred-plus scores for his side so far. Coming to the match, Middlesex ended Day two of the match at 103/0 in their first innings, with Mark Stoneman (47*) and Sam Robson 45* standing unbeaten.Before this, put to bat by Middlesex, Sussex posted a huge total of 523 runs on the board. Pujara's marathon effort of 231 largely powered the collective batting effort of Sussex. He also put on a stand of 219-runs with Tom Alsop, who scored a brilliant 135. Medium-pacer Tom Helm finished the day as the most successful bowler of Middlesex, taking 5/109. Tim Murtagh and Toby Roland-Jones took two wickets as well. "

    },
    {
        heading:"'Aim is to help India win Asia Cup and World Cup': Virat Kohli's statement of intent",
        img:"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/23/2524572-virat-kohli.jpg",
        paragraph:"Team India stalwart Virat Kohli may have been struggling to score big with the bat, but he nonetheless has his mind on helping India win the Asia Cup and the ICC T20I World Cup 2022. Despite the fact that Kohli has been out of form for a while now, having not scored a century in 3 years, he remains focused on winning the big prizes. In the past, the Delhi-born batsman was able to score centuries at will, but recently, he has struggled to get off to good starts, and once he has looked settled, Kohli has failed to breach the three-figure mark. Having been rested for India's tour of West Indies, Kohli is expected to be back for the ODI series against Zimbabwe, which will take place next month, before Asia Cup kicks off. READ| 'The guys would have loved the competition': Windies coach Phil Simmons on Virat Kohli's absence from seriesDuring the recently concluded tour of England, the 33-year-old could only score 76 runs from six innings, which included the rescheduled fifth Test in Edgbaston, followed by two T20Is, and two ODIs.While many former cricketers have called for Kohli to be dropped from the Indian team amid his ongoing lean patch, he has insisted that his aim is win big with the Indian team.In a statement released by Star Sports, Kohli said,My main aim is to help India win the Asia Cup and the World Cup and for that I am ready to do anything for the team.The giving us another reason to #BelieveInBlue!Get your game face on & cheer for @imVkohli & #TeamIndia in their quest to win the #AsiaCup 2022!Starts Aug 27 | Star Sports & Disney+Hotstar pic.twitter.com/Ie3119rKyw — Star Sports (@StarSportsIndia) July 23, 2022The talismanic batsman is currently undergoing the worst spell of his career, having dropped out of the top three in ICC's latest ODI rankings. While his runs have dried up, Kohli is no longer dominating the rankings in any of the three formats."
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