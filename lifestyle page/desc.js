const data=[
    {
        heading:"International Moon Day 2022: History, significance and why it is celebrated",
        img:"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/20/2523736-2522191-moon-pexels.jpg",
       paragraph:"International Moon Day will be celebrated for the first time on July 20th this year. When the Moon Village Association and a number of other UN agencies put out a proposal on December 9, 2021, the UN General Assembly approved. The proposal was submitted to the United Nations Office for Outer Space Affairs (UNOOSA).Also, READ: Google Doodle today: Who was Balamani Amma, Indian poet who wowed the country with her words?One of the most significant events in human history will be recognised on this day. Neil Armstrong and Buzz Aldrin were the first people to set foot on the Moon on July 20, 1969. It was the first time a person had stepped foot on the Moon's surface.Neil Armstrong stated, One small step for a man, one giant leap for mankind as he climbed down the ladder after landing on the moon. The 'Eagle' lunar module was used by the astronauts of Apollo 11 to land on the surface of the moon.Since that day, the Moon has been the target of several expeditions, and exploration activities have taken form. The Apollo 11 landing on July 20, 1969, was a significant moment in the history of human spaceflight.Annually, the International Moon Day will be celebrated to educate and promote the need for exploration of lunar activities and the sustainable use of the moon. On a worldwide scale, top-down (inaugural festivities) and bottom-up (other global events) approaches will be used to organise these events."

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