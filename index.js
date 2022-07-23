

import navbar from "./component/navber.js"
    document.getElementById("NavbarDNA").innerHTML = navbar()
import left_side from "./component/leftSide.js"
    document.getElementById("left_menu").innerHTML = left_side()
import footer from "./component/footer.js"
    document.getElementById("footer").innerHTML = footer()


let append = ()=>{
    let data = document.getElementById("display_kro")
    
    let img = document.createElement("img")
    img.setAttribute("id","headline_news")
    img.src = "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/21/2523907-murmu-sinha.jpg"
    document.getElementById("next_page").innerText = "Presidential Election Results 2022 LIVE: Droupadi Murmu or Yashwant Sinha? Counting at 11 am to elect Kovind's successor"

    data.append(img)
}
append()
