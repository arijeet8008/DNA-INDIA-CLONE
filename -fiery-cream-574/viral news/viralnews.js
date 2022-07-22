const data = [
    {
        img : "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/21/2523991-fraud.jpg",

        headline: "Indian 'Tinder Swindler': Andhra Pradesh man marries 13 women in 4 years, arrested"

    },
    {
        img:"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/20/2523899-untitled-design-55.jpg",
        headline :"Woman escapes split-second before being run over by train, watch viral video"
    },

    {
        img:"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/20/2523892-untitled-design-2022-07-20t224332.513.jpg",
        headline :"Elon Musk's father Errol offered to donate sperm to high-class women, Tesla CEO replies"
    },
    {
        img:"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/20/2523840-phone.jpg",
        headline :"Punjab Police responds to man beaten up by woman's husband for texting ‘I like you’ to her"
    },
    {
        img:"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/20/2523715-goair-dna.png",
        headline :"Furry surprise in airport: Stray dog on runway interrupts takeoff of Leh-Delhi GoAir flight, DGCA says this"
    },
    {
        img:"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/20/2523663-sink-hole.jpg",
        headline :"Giant sinkhole opens up in New York City, watch jaw-dropping viral video"
    },
    {
        img:"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/19/2523614-untitled-design-2022-07-19t183817.079.jpg",
        headline :"Elon Musk's shirtless photo goes viral amid Twitter row, Tesla CEO reacts"
    },
    {
        img:"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/19/2523599-woman-delivers.jpg",
        headline :"Watch video: Woman delivers baby on road after Delhi's Safdarjung Hospital denies admission"
    },
    {
        img:"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/19/2523596-balamani-amma-twitter-google-doodle-1.jpg",
        headline :"Google Doodle: Interesting facts about legendary Malayalam poet Balamani Amma, her most famous works"
    },
    {
        img:"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/19/2523530-untitled-design-2022-07-19t123530.061.jpg",
        headline :"Goat being sold hugs owner, weeps like human in heartbreaking viral video"
    },
    {
        img:"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/19/2523523-untitled-design-2022-07-19t111706.876.jpg",
        headline :"Viral: US restaurant menu lists South Indian dosa as 'Naked Crepe', netizens shocked"
    },
    {
        img:"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/19/2523519-hawaii.jpg",
        headline :"Giant wall-like waves crash seaside Hawaii wedding, WATCH chilling video with more than 8 million views"
    },
];

function append(data) {
    
    let container = document.getElementById("container");

    data.forEach(function (ele) {

        let div = document.createElement("div");

        let img = document.createElement("img");
        img.src = ele.img;
        let headline = document.createElement("p");
        headline.innerText = ele.headline;
       
         div.append(img,headline);
         container.append(div);
})  
};
append(data);