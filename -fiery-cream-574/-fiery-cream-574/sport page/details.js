const data=[
    {
        heading:"Cheteshwar Pujara slams a double century for Sussex on his captaincy debut",
        img:"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/21/2524025-fotojet.jpg",
       paragraph:"Indian batter Cheteshwar Pujara continued his golden run in English county cricket, slamming his third double century of the season for Sussex against Middlesex at Lord's on Wednesday, becoming the first Indian batter to hit a double hundred in first-class cricket at the historic venue.He has scored three double centuries in seven games for his side. He hit 231 runs off 403 balls with 21 fours and three sixes before he was the last man dismissed in the innings by Tom Helm. Pujara is having a run of a lifetime as a county cricketer with Sussex. The 34-year-old was dropped from the Indian Test squad earlier this year due to an inconsistent run of form. But he has made a strong statement with his form in the County Championship Division Two. Ever since being signed as an overseas batter replacing the Australian batter Travis Head by Sussex, Pujara has been impressive for his side.He scored 6 and 201* against Derbyshire, 109 and 12 against Worcestershire, and 203 against Durham. In the game against Middlesex, he scored 16 and 170*. After this, he registered a score of just three against Leicestershire. Following these performances, he was recalled to the national Test squad and played India`s fifth and final Test against England at Edgbaston in July, in which he scored 13 and 66. India lost that test by seven wickets. After this test, he made his return to county cricket, hitting 46 against Leicestershire. After that came this massive double hundred against Middlesex at Lord's. In his 10 county innings so far, he has scored a total of 997 runs at an average of 124.62. He has hit 5 hundred-plus scores for his side so far. Coming to the match, Middlesex ended Day two of the match at 103/0 in their first innings, with Mark Stoneman (47*) and Sam Robson 45* standing unbeaten.Before this, put to bat by Middlesex, Sussex posted a huge total of 523 runs on the board. Pujara's marathon effort of 231 largely powered the collective batting effort of Sussex. He also put on a stand of 219-runs with Tom Alsop, who scored a brilliant 135. Medium-pacer Tom Helm finished the day as the most successful bowler of Middlesex, taking 5/109. Tim Murtagh and Toby Roland-Jones took two wickets as well. "

    }
    
];

function append(data) {
    
    let container = document.getElementById("sample");

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