const data=[
    {
        heading:"Indian 'Tinder Swindler': Andhra Pradesh man marries 13 women in 4 years, arrested",
        img:"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/21/2523991-fraud.jpg",
       paragraph:"A man, who allegedly married as many as 13 women in the two Telugu states in the last four years, has been arrested by Cyberabad police. Adapa Shivshankar Babu allegedly cheated the divorcees by absconding with money and other valuables after marrying them.The 35-year-old accused hailing from the Guntur district of Andhra Pradesh was targeting rich women who were divorced and were looking for alliances on matrimony sites. He cheated them by producing fake divorce papers and promising them a new life.Gachibowli police under the Cyberabad Police Commissionerate arrested the accused who had cases registered against him in Hyderabad, Rachakonda, Sangareddy, Guntur, Vijayawada, and Anantapur.READ | Presidential Election Results 2022 LIVE: Counting underway, result to be announced by evening.The arrest came a week after one of the victims lodged a complaint with Ramachandrapuram police station that Shivshankar Babu had taken Rs 25 lakh cash and gold worth Rs 7 lakh from her and was not returning the same A cheating case under Section 420 of the Indian Penal Code (IPC) was registered against the accused, based on a complaint from the victim.The victim had told a press conference that Babu got in touch with her in 2021 via a matrimony site. He told her that his parents had died long ago and that he had been working as a software engineer in a reputed firm with a monthly salary of Rs 2 lakh. He told her that he was a divorcee and was looking for a compatible wife. Convinced of his credentials, her parents got her married to Babu. He collected nearly Rs 25 lakh from her parents on the pretext of taking her to the US. As there were no signs of him going to the US, her parents started asking him to return the money.READ | Sidhu Moose Wala murder: All you need to know about Jagrup Singh Roopa, Manpreet Singh Mannu's encounter Babu was avoiding her and her parents. She finally approached the Ramachandrapuram police. When the police called Babu to the police station for questioning, she was shocked to learn that he was already married. The accused came to the police station with a woman, who stood surety for him and told the police that he would return the money."

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