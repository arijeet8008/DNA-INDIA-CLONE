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