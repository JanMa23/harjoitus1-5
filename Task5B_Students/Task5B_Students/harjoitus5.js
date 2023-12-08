
document.getElementsByClassName("myList")[0].innerHTML = `
<label for="choose-color">Choose color:</label>
<select id="choose-color">
    <option value="Yellow">Yellow</option>
    <option value="Red">Red</option>
    <option value="Pink">Pink</option>
</select>
 `




function vaihdaKuva(){
    let valittuVari = document.getElementById("choose-color").value

    let kukanKuva = document.getElementById("imgPath")

    switch (valittuVari){
        case "Yellow":
            kukanKuva.src = "img/Rose-yellow.jpg"
            break
        case "Red":
            kukanKuva.src = "img/Rose-red.jpg"
            break
        case "Pink":
            kukanKuva.src = "img/Rose-pink.jpg"
            break
        default:
            break
    }
}



document.getElementById("choose-color").addEventListener("change", vaihdaKuva)

let zoomFactor = 1.01
let kuvanKoko = 150
let currentSize = kuvanKoko
let zoomInterval
let maxZoom = kuvanKoko * 2

document.getElementById("imgPath").addEventListener("mouseover", (event) => {
    resetImageSize()
    zoomInterval = setInterval(gradualZoomIn, 30)
   
})

document.getElementById("imgPath").addEventListener("mouseleave", function() {
    clearInterval(zoomInterval)
    resetImageSize()
})



function gradualZoomIn() {
    currentSize *= zoomFactor
    document.getElementById("imgPath").style.width = currentSize + "px"
    // document.getElementById("imgPath").style.height = currentSize + "px"

    if (currentSize >= maxZoom) {
        clearInterval(zoomInterval)
    }
}



function resetImageSize() {
    currentSize = kuvanKoko
    document.getElementById("imgPath").style.width = currentSize + "px"
    // document.getElementById("imgPath").style.height = currentSize + "px"
}


document.getElementById("imgPath").addEventListener("click", (event) =>{
    let tekstiLista = document.getElementById("noticeList").innerHTML

    document.getElementById("noticeList").innerHTML = tekstiLista + `
    <li>No need to click picture</li>
    `
})

document.getElementById("imgPath").addEventListener("mouseleave", (event) => {
    document.getElementById("noticeList").innerHTML = ""
})