





// async function headlines(){
// const url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=671b0da0df8044feb6a537688cb19f4b`;
//     let res = await fetch(url);
//     // let data = await res.json()
//     console.log(res.json())

// }

// headlines()

videos = [
    {
        link:"https://www.dnaindia.com/india/video-shocking-on-camera-speeding-ambulance-crashes-into-toll-plaza-in-karnataka-2970142",
        title:"SHOCKING: On camera speeding ambulance crashes into toll plaza in Karnataka",
        image:"https://cdn.dnaindia.com/sites/default/files/styles/half/public/2022/07/20/2523851-20thumbnail1800406.jpeg",
        description:"An ambulance carrying a patient and two attendants lost control and crashed into a toll booth in Karnataka's Udupi district today. Tragic accident left four people injured. The incident took place at toll plaza near Kundapura Taluk district.",
    },
    {
        link:"https://www.dnaindia.com/india/video-sidhu-moose-wala-murder-4-hour-long-encounter-2-gangsters-killed-2970141",
        title:"Sidhu Moose Wala Murder: 4-hour long encounter, 2 gangsters killed",
        image:"https://cdn.dnaindia.com/sites/default/files/styles/half/public/2022/07/20/2523850-20thumbnail1800403.jpeg",
        description:"Two gangsters involved in Sidhu Moosewala murder killed in shootout near Amritsar. A fierce encounter broke out between Punjab Police and two gangsters suspected to have played a role in the killing of singer Sidhu Moosewala.",
    },
    {
        link:"https://www.dnaindia.com/entertainment/video-shamshera-a-candid-chat-with-actors-ranbir-kapoor-vaani-kapoor-director-karan-malhotra-2970134",
        title:"Shamshera: A candid chat with actors Ranbir Kapoor-Vaani Kapoor, director Karan Malhotra",
        image:"https://cdn.dnaindia.com/sites/default/files/styles/half/public/2022/07/20/2523838-20thumbnail1800405.jpeg",
        description:"In a free wheeling chat with DNA, the leading cast of Shamshera, actors Ranbir Kapoor and Vaani Kapoor along with director Karan Malhotra spoke about their larger-than-life movie that hits theatres on July 22. The trio spoke about the film’s budget, how much box office numbers matter. Meanwhile, Karan also spoke about how Ranbir convinced him to let him do a double role in the film. Listen in.",
    },
    {
        link:"https://www.dnaindia.com/entertainment/video-netflix-loses-nearly-1-million-subscribers-but-stays-positive-2970131",
        title:"Netflix loses nearly 1 million subscribers but stays positive",
        image:"https://cdn.dnaindia.com/sites/default/files/styles/half/public/2022/07/20/2523835-20thumbnail1800404.jpeg",
        description:"Netflix is losing subscribers for the second quarter in a row. Streaming giant battles fierce competition and plateauing demand. But hopes for the better next quarters.",
    },
    {
        link:"https://www.dnaindia.com/world/video-on-camera-sinkhole-opens-in-new-york-swallow-van-2970129",
        title:"On camera, sinkhole opens in New York, swallow van",
        image:"https://cdn.dnaindia.com/sites/default/files/styles/half/public/2022/07/20/2523833-20thumbnail1800402.jpeg",
        description:"The New York City Department of Environmental Protection responded to the Bronx to investigate the scene. The van was parked and unattended at the time. Another vehicle's wheel could be seen hanging over the opening on the roadway.",
    },
    {
        link:"https://www.dnaindia.com/sports/video-from-shikhar-dhawan-to-rahul-dravid-team-india-participates-in-hey-trend-2970115",
        title:"From Shikhar Dhawan to Rahul Dravid, Team India participates in ‘hey’ trend",
        image:"https://cdn.dnaindia.com/sites/default/files/styles/half/public/2022/07/20/2523825-20thumbnail1800400.jpeg",
        description:"The Team India members joined the ‘hey’ trend on social media with a video of them greeting the camera that has gone viral. Shikhar Dhawan took to Instagram to share the video of himself leading the many members including head coach Rahul Dravid joining his players in the fun video.",
    },
    {
        link:"https://www.dnaindia.com/lifestyle/video-inflammatory-diet-linked-with-depression-study-2970112",
        title:"Inflammatory diet linked with depression: Study",
        image:"https://cdn.dnaindia.com/sites/default/files/styles/half/public/2022/07/20/2523817-2000000009.jpg",
        description:"A recent study showed a connection between depression, food, and the emergence of frailty. This study was published in The Journal of Gerontology: Medical Sciences. Affecting 10-15 per cent of older persons, frailty is characterised as an identifiable state of heightened vulnerability brought on by a loss in function across several physiological systems. It frequently co-occurs with other medical problems, such as depression. Affecting 10-15 per cent of older persons, frailty is characterised as an identifiable state of heightened vulnerability brought on by a loss in function across several physiological systems. It frequently co-occurs with other medical problems, such as depression. The development of frailty is thought to be significantly influenced by diet. This is one of the first studies to attempt to understand the relationship between dietary inflammation and frailty and depression. According to the exploratory data, middle-aged and older persons who consume a pro-inflammatory diet are more likely to simultaneously acquire frailty and depression symptoms than they are to do so separately.",
    },
    {
        link:"https://www.dnaindia.com/india/video-vice-president-venkaiah-naidu-meets-four-african-leaders-over-lunch-at-hyderabad-house-2970110",
        title:"Vice President Venkaiah Naidu meets four African leaders over lunch at Hyderabad House",
        image:"https://cdn.dnaindia.com/sites/default/files/styles/half/public/2022/07/20/2523815-2000000009.jpg",
        description:"Vice President M Venkaiah Naidu met four African leaders over lunch at Hyderabad House in Delhi on July 19. Venkaiah Naidu met Gambian VP Badara A Joof and Mauritius VP Marie Cyril Eddy Boissezon. He also met Zambian VP WK Mutale Nalumango and Namibian Deputy Prime Minister Netumbo N Ndaitwah.",
    },
    {
        link:"https://www.dnaindia.com/india/video-speaker-om-birla-recognises-rahul-shewale-as-shiv-sena-leader-in-lok-sabha-2970108",
        title:"Speaker Om Birla recognises Rahul Shewale as Shiv Sena leader in Lok Sabha",
        image:"https://cdn.dnaindia.com/sites/default/files/styles/half/public/2022/07/20/2523814-2000000010.jpg",
        description:"Lok Sabha Speaker Om Birla on July 19 recognised Rahul Shewale as the floor leader of the party in the lower house. This came after 12 of the 19 Shiv Sena Members of Parliament (MPs) in the Lok Sabha including Maharashtra Chief Minister Eknath Shinde’s son Shrikant Shinde, requested the Speaker for the change. Speaking to ANI Shiv Sena (Shinde faction) leader Rahul Shewale said, “Many MPs were upset with the work of the internal group leader Vinayak Raut so we had written to the Speaker to change the group leader. The Speaker will take action on this. Our chief whip will be the same, there will be no change.”",
    },
    {
        link:"https://www.dnaindia.com/india/video-ed-arrests-jharkhand-cm-s-aide-pankaj-mishra-in-illegal-mining-case-2970107",
        title:"ED arrests Jharkhand CM’s aide Pankaj Mishra in illegal mining case",
        image:"https://cdn.dnaindia.com/sites/default/files/styles/half/public/2022/07/20/2523811-2000000006.jpg",
        description:"The Enforcement Directorate (ED) on July 19 arrested Pankaj Mishra, a close aide of Jharkhand Chief Minister Hemant Soren, in an illegal mining case. He has been taken to a special PMLA court. Mishra was arrested under the Prevention of Money Laundering Act (PMLA), 2002. The move comes days after the agency seized cash amounting to Rs 11.88 crore lying in 37 bank accounts belonging to Mishra in the case. The seized amount belonged to Mishra, one Dahoo Yadav and their associates.",
    }

    
]

photos = [
    {
        image:"https://cdn.dnaindia.com/sites/default/files/styles/half/public/2022/07/20/2523871-fotojet-2022-07-20t215825.725-1.jpg",
        title:"Viral Photos of the Day: Janhvi Kapoor, Disha Patani, Tara Sutaria give fashion goals",
        title2:"Janhvi Kapoor, Disha Patani, Tara Sutaria, Arjun Kapoor, Shilpa Shetty and Malaika Arora gave us fashion goals.",
        description:"On Wednesday, Bollywood stars Janhvi Kapoor, Disha Patani, Tara Sutaria, Arjun Kapoor, Shilpa Shetty and Malaika Arora were giving us major fashion goals. These celebs stepped out in stylish outfits, their photos went viral on social media.",

        t1:"1. Janhvi Kapoor",
        i1:"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/20/2523881-fotojet-2022-07-20t220438.660.jpg",
        d1:"Janhvi Kapoor was looking mesmerising in a navy blue outfit, she is a perfect style icon.",

        t2:"2. Malaika Arora",
        i2:"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/20/2523883-fotojet-2022-07-20t220952.667.jpg",
        d2:"Malaika Arora was looking hot in denim shorts, a crop top, and an open shirt. ",

        t3:"3. Shilpa Shetty",
        i3:"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/20/2523884-fotojet-2022-07-20t221327.553.jpg",
        d3:"Shilpa Shetty was looking beautiful in a short skirt, white top, and casual shoes. She was seen posing for the cameras.",

        t4:"4. Arjun Kapoor",
        i4:"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/20/2523886-fotojet-2022-07-20t221457.520.jpg",
        d4:"Arjun Kapoor was seen wearing a printed shirt and denim pants. He was seen promoting his upcoming film Ek Villain Returns.",

        t5:"5. Disha Patani",
        i5:"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/20/2523888-fotojet-2022-07-20t221653.502.jpg",
        d5:"Disha Patani was seen raising the temperature in s sexy brown dress.",
    
        t6:"6. Tara Sutaria",
        i6:"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/20/2523889-fotojet-2022-07-20t222321.915.jpg",
        d6:"Tara Sutaria was looking gorgeous while promoting her upcoming film Ek Villain Returns",
    },

    {
        image:"https://cdn.dnaindia.com/sites/default/files/styles/half/public/2022/07/19/2523617-fotojet-9.jpg",
        title:"5 Test records that may never be broken in the coming future",
        title2:"From Brian Lara's 400 Test runs in an innings to Muttiah Muralitharan'800 Test wickets, here's a look at few Test records that may never be broken.",
        description:"Test cricket is the oldest and the toughest format of the game as it demands a lot of qualities from a player like commitment, endurance, patience, physical and mental fitness, consistency, and a hunger to excel. Only a few players who have ticked all these boxes have gone on to achieve success in this format.",

        t1:"1. Ricky Ponting’s 108 Test wins as a player",
        i1:"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/19/2523619-fotojet-7.jpg",
        d1:"Ricky Ponting needs no introduction. He has taken Australian cricket to unattained heights as captain by leading them to some famous global triumphs like the 2003 and 2007 World Cup victories.",

        t2:"2. Muttah Muralitharan's 800 Test wickets",
        i2:"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/19/2523620-fotojet-8.jpg",
        d2:"Sri Lankan spin legend Muttiah Muralitharan is one of the finest spinners to have played the game. He is also one of the most successful bowlers to have registered over 1000 international scalps. However, it is his overall Test tally of 800 wickets that might never be broken.",

        t3:"3. Virat Kohli’s seven double centuries as Test skipper",
        i3:"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/19/2523621-fotojet-6.jpg",
        d3:"Virat Kohli might have witnessed a slump in batting form, but there used to be a time when he scored runs and centuries for fun on a consistent basis, especially between 2016-2019. Kohli holds a unique record as captain in the longest format of the game.",

        t4:"4. Mark Boucher’s 555 dismissals",
        i4:"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/19/2523622-fotojet-5.jpg",
        d4:"Mark Boucher is one of the finest wicketkeepers to have played the sport and successfully went on to register his name in cricketing history with his exceptional performances behind the stumps in his Test career that spanned from 1997 to 2012.",

        t5:"5. Brian Lara's 400 runs in one innings",
        i5:"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/19/2523623-fotojet-4.jpg",
        d5:"Brian Lara was arguably the best Test batter in the 90s and for some part of the 2000s.  He has shattered his world record in Test cricket twice in a span of 1o year. Lara scored a record 375 against England in 1994, which was surpassed by Matthew Hayden who scored 380 against Zimbabwe in 2003.",
    },

    {
        image:"https://cdn.dnaindia.com/sites/default/files/styles/half/public/2022/07/20/2523714-fotojet-50-1.jpg",
        title:"From Udaipur to Ladakh: 5 vacation spots made popular by Bollywood movies",
        title2:"Discover the most famous vacation spots made famous by Bollywood movies.",
        description:"Movies are the best medium to showcase a location excitingly. There are several influences and importance of cinema on the lifestyle of people, out of which one is surely Bollywood shooting locations. ",

        t1:"1. Pangong Lake, Ladakh",
        i1:"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/20/2523707-fotojet-45.jpg",
        d1:"This location has become famous over the years, as Bollywood movies inspired even the non-travelers to pack their bags and visit Pangong Lake to appreciate its beauty. If you have loved 3 Idiots’ last scene or the location where SRK saves Anushka Sharma in Jab Tak Hai Jaan, then this spot should feature in your travel wish list. ",

        t2:"2. Udaipur, Rajasthan",
        i2:"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/20/2523708-fotojet-46.jpg",
        d2:"The 1965 film Guide, which was ranked fourth by Time magazine on its list of Best Bollywood Classics, was filmed in Udaipur.  Goliyon Ki Raasleela Ram-Leela was shot in the City of Lakes. Even Hollywood hasn’t been able to resist the charm of the royal city of Udaipur. Octopussy and The Best Exotic Marigold Hotel are two of the most famous Hollywood movies that were filmed in the city.",

        t3:"3. Rohtang Pass, Himachal Pradesh",
        i3:"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/20/2523709-fotojet-47.jpg",
        d3:"Many popular Bollywood movies, such as Highway, Jab We Met, and Dev D captured the beauty of this spot and have, in a way, immortalized the snow-clad stretches of this pass on celluloid. These movies have inspired many to set out to travel with their backpacks and learn to enjoy travel in the best way possible.",

        t4:"4. Kolkata, West Bengal",
        i4:"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/20/2523710-fotojet-48.jpg",
        d4:"Bollywood also couldn’t escape the infectious vibe of Kolkata! Some of its locations have witnessed growth in tourism over the years. While the Durga Puja celebrations have been shot beautifully in films like Kahaani and Vicky Donor, the tram rides in Barfi just took our heart, in short, the 'City of Joy' was the centerpiece whenever a film was shot there.",

        t5:"5. Banaras, Uttar Pradesh",
        i5:"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/20/2523711-fotojet-49.jpg",
        d5:"Banaras is a kind of place that should be added to your travel bucket list for 2022. Many Bollywood movies have captured the vibrant and lively essence of Banaras and its ghats, but Raanjhanaa and Masaan have done an exceptionally brilliant job. Banaras, with its old-world lanes and traditional homes, is certainly among the best film shooting locations in India.",
    },

    {
        image:"https://cdn.dnaindia.com/sites/default/files/styles/half/public/2022/07/20/2523812-untitled-design-50.jpg",
        title:"Fascinating photos of aurora surface after solar storm hits Earth",
        title2:"Here are some fascinating skies captured during aurora after solar storm struck Earth today",
        description:"On July 16, Dr. Tamitha Skov informed via Twitter of an impending solar flare that might affect Earth. But after a few days, the flare seemed to have burst out. She mentioned that a solar storm was on its way to Earth and would likely impact with the magnetic field there.",

        t1:"1. Sky watchers enjoyed beautiful phenomenon",
        i1:"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/20/2523813-fotojet-16.jpg",
        d1:"The aurora showed up brilliantly as the solar strom hit Earth today. A natural light show in the Earth's sky called the aurora is most frequently observed at high latitudes. ",

        t2:"2. Reddish-greenish light emerging in sky",
        i2:"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/20/2523820-fotojet-17.jpg",
        d2:"Charged particles from the sun interact with atoms in the high atmosphere to produce the effect. The solar wind's effects on the magnetosphere lead to auroral phenomena",

        t3:"3. Space weather expert Dr. Tamitha Skov predicted solar flare",
        i3:"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/20/2523821-fotojet-18.jpg",
        d3:"Dr. Tamitha Skov, a space weather expert, recently forecasted that a significant solar storm with the potential for powerful aurora displays was likely to impact the Earth.",

        t4:"4. Solar flare",
        i4:"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/20/2523822-fotojet-19.jpg",
        d4:"It is the most recent in a lengthy saga of solar explosions that have shook the Sun recently. According to NASA, a solar flare is a powerful radiation explosion that happens when the sun's sunspots release charged particles into space.",

        t5:"5. Solar storm hits Earth",
        i5:"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/20/2523823-fotojet-20.jpg",
        d5:"Although asteroids have hit Earth, no harm has been officially confirmed. In March 2022, a powerful solar storm hit Earth. A few days later, a G1-class storm hit that area.",
    },

    {
        image:"https://cdn.dnaindia.com/sites/default/files/styles/half/public/2022/07/20/2523841-untitled-design-52.jpg",
        title:"In pics: Massive downpour disrupts normal life in Delhi NCR",
        title2:"People in Delhi finally experienced some relief today after suffering through severe hot and humid days.",
        description:"Rain lashed Delhi on Wednesday, inundating low-lying areas and affecting traffic movement in parts of the city. People shared pictures and videos of rainwater gushing into residential areas and vehicles wading through waterlogged roads. The traffic police issued an advisory, asking people to check the weather before heading out. As per IMD (India Meteorological Department) report, thundershower with moderate intensity to heavy intensity rain with gusty winds would occur over Delhi and adjoining areas. Commuters are advised to plan their journey accordingly, it tweeted.",

        t1:"1. Puddle of water after heavy rainfall at Vijay Chowk in New Delhi",
        i1:"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/20/2523842-fotojet-23.jpg",
        d1:"Generally cloudy sky, moderate rain or thundershowers are predicted in the city over the next three days. The national capital recorded a minimum temperature of 28.2 degrees Celsius, a notch above normal. The maximum temperature is likely to settle around 33 degrees Celsius.",

        t2:"2. People walk under the umbrella amid heavy rainfall",
        i2:"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/20/2523845-e.jpg",
        d2:"The IMD has predicted enhanced rainfall activity over northwest India for two-three days. The monsoon had covered the entire country on July 2, six days ahead of schedule. However, rains in Haryana, Punjab, Delhi, Uttar Pradesh, Bihar, Jharkhand and West Bengal have remained subdued.",

        t3:"3. Pedestrians cover themselves while crossing road",
        i3:"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/20/2523863-c.jpg",
        d3:"Meteorologists attribute the rain deficit in the north and northwest India to the formation of back-to-back low-pressure areas in the Bay of Bengal in July which kept the monsoon trough over central India for an unusually long period.",

        t4:"4. Commuters move through waterlogged road",
        i4:"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/20/2523864-b.jpg",
        d4:"The Safdarjung Observatory, Delhi's primary weather station, has recorded 189.6 mm of rainfall against a normal of 201 mm since the start of the monsoon season on June 1. After a relatively dry June, the capital has logged 165.1 mm of precipitation against a normal of 126.9 in July so far. But most of the rains in July came on the first day (117.2 mm).",

        t5:"5. Safdarjung Observatory prediction",
        i5:"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/20/2523865-d.jpg",
        d5:"The Safdarjung Observatory recorded 30 mm of rainfall between 8:30 am on Saturday and 8:30 am on Sunday. However, other weather stations have recorded light to moderate rainfall on several occasions this month. The IMD uses four colour codes for weather warnings: green (no action needed), yellow (watch and stay updated), orange (be prepared) and red (take action).",
    },

    {
        image:"https://cdn.dnaindia.com/sites/default/files/styles/half/public/2022/07/21/2524078-untitled-design-2022-07-21t175834.763.jpg",
        title:"Draupadi Murmu: 5 firsts achieved by the new Indian President",
        title2:"Here is how the new Indian President ticked a lot of firsts.",
        description:"Bharatiya Janta Party's Draupadi Murmu will be the new Indian President. She fought in the presidential elections against Congress party's Yashwant Sinha and came out victorious. She is the second woman to hold the highest office. Murmu was a tribal leader from Rairangpur in the Mayurbhanj district in Odisha. Draupadi Murmu, born on June 20, 1958, hails from Uparbeda village of Mayurbhanj district in Odisha in a Santali tribal family to Biranchi Narayan Tudu. In her entire career, Murmu has broken many stereotypes and made her way through a lot of firsts. ",

        t1:"1. Draupadi Murmu | Photo: PTI",
        i1:"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/21/2524063-untitled-design-2022-07-21t174848.462.jpg",
        d1:"Murmu will be the first ever Tribal and second women President of the biggest democracy in the world. She was also the first Jharkhand Governor to complete the entire term in the state.",

        t2:"2. Draupadi Murmu | Photo: PTI",
        i2:"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/21/2524064-untitled-design-2022-07-21t174832.024.jpg",
        d2:"She will be the first President to be born in Independent India if elected.",

        t3:"3. Draupadi Murmu | Photo: PTI",
        i3:"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/21/2524067-untitled-design-2022-07-21t174809.721.jpg",
        d3:"She was Jharkhand’s first female Governor.",

        t4:"4. Draupadi Murmu | Photo: PTI",
        i4:"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/21/2524068-untitled-design-2022-07-21t174747.716.jpg",
        d4:"First Odia tribal leader to be made Governor of any state.",

        t5:"5. Draupadi Murmu | Photo: PTI",
        i5:"https://cdn.dnaindia.com/sites/default/files/styles/half/public/2022/07/21/2524078-untitled-design-2022-07-21t175834.763.jpg",
        d5:"In her entire career, Murmu has broken many stereotypes and made her way through a lot of firsts. ",
    },

    {
        image:"https://cdn.dnaindia.com/sites/default/files/styles/half/public/2022/07/21/2523994-hollywood-actors.jpg",
        title:"Mike Tyson, Slyvester Stallone, Will Smith: International stars who featured in Bollywood movies",
        title2:"The cross-pollination of talents has always been celebrated, especially when your favourite Hollywood stars were featured in Bollywood.",
        description:"As the trailer of Vijay Deverakonda's Liger has hit like a storm, let's take a quick flashback to movies where international stars added more value to a Bollywood film.",

        t1:"1. Mike Tyson in Liger",
        i1:"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/21/2523996-mike-tyson.jpg",
        d1:"Let's start with the latest entrant on the list. Acclaimed professional boxer Mike Tyson's appearance in Liger left moviegoers excited. His glimpse became the highlight of the trailer. ",

        t2:"2. Slyvester Stallone in Kambakht Ishq",
        i2:"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/21/2523997-slyvester-stallone.jpg",
        d2:"Hollywood's very own action legend Slyvester Stallone was the saving grace, the best part of the 2009 film Kambakht Ishq. Akshay Kumar, Kareena Kapoor Khan starrer was one-of-its-kind to include multiple Hollywood artists in the film. ",

        t3:"3. Will Smith in Student Of The Year 2",
        i3:"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/21/2523998-will-smith.jpg",
        d3:"Here's another proof where a guest appearance of a Hollywood star was celebrated more than the movie's lead cast. ",

        t4:"4. Paul Blackthrone in Lagaan",
        i4:"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/21/2523999-lagaan-1.jpg",
        d4:"Paul gave a splendid performance as an antagonist in Aamir Khan's Lagaan, and his line Teen gunna lagaan still echoes in our minds. ",

        t5:"5. Rebecca Breeds in Bhaag Milkha Bhaag",
        i5:"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/21/2524001-bmb.jpg",
        d5:"You may not recall her by the name, but you will recognise Rebecca Breeds as soon as we mention Bhaag Milkha Bhaag. Rebecca played a brief role of Stella in the 2013 film, and she was hailed for her acting chops. ",
    },

    {
        image:"https://cdn.dnaindia.com/sites/default/files/styles/half/public/2022/07/20/2523879-untitled-design-2022-07-20t215908.620.jpg",
        title:"DNA Explainer: Is 'Work From Home' the future? Know about changing employee mentality",
        title2:"",
        description:"",

        t1:"",
        i1:"",
        d1:"",

        t1:"",
        i1:"",
        d1:"",

        t1:"",
        i1:"",
        d1:"",

        t1:"",
        i1:"",
        d1:"",

        t1:"",
        i1:"",
        d1:"",
    },

    {
        image:"https://cdn.dnaindia.com/sites/default/files/styles/half/public/2022/07/20/2523716-untitled-design-2022-07-20t105146.697.jpg",
        title:"Citroen C3 sub-compact SUV launched in India, price start at Rs 5.70 lakh",
        title2:"",
        description:"",

        t1:"",
        i1:"",
        d1:"",

        t1:"",
        i1:"",
        d1:"",

        t1:"",
        i1:"",
        d1:"",

        t1:"",
        i1:"",
        d1:"",

        t1:"",
        i1:"",
        d1:"",
    },

    {
        image:"https://cdn.dnaindia.com/sites/default/files/styles/half/public/2022/05/23/1942850-team-india.jpg",
        title:"Sanju Samson to Rahul Tripathi: Cricketers netizens believe Team India will miss against South Africa",
        title2:"",
        description:"",

        t1:"",
        i1:"",
        d1:"",

        t1:"",
        i1:"",
        d1:"",

        t1:"",
        i1:"",
        d1:"",

        t1:"",
        i1:"",
        d1:"",

        t1:"",
        i1:"",
        d1:"",
    }
]


