
let main = document.getElementById("main")
let searchbtn = document.getElementById("searchbtn")
let movieinput = document.getElementById("movieinput")

searchbtn.addEventListener("click", () => {
    var moviename = movieinput.value.trim()
    call_fetch(moviename)

    // ###################################################################################################
    // #NOTE  it's still looking complicated that's why we use now async and await keywords for simplier and maintainable code

    // fetch(`http://www.omdbapi.com/?apikey=7af09fc7&t=${moviename}`)
    //     .then((response) => {
    //         return response.json()
    //     })
    //     .then((data) => {
    //         displaydata(data)
    //     }).catch((error) => {
    //         console.log(error)
    //     })
    // #################################################################################################
})


const call_fetch = async (moviename) => {
    try {
        let response = await fetch(`https://www.omdbapi.com/?apikey=7af09fc7&t=${moviename}`)
        let data = await response.json()
        displaydata(data)
    } catch (error) {
        console.log(error)
    }


}
const displaydata = (print) => {
    main.innerHTML = ''
    let div = document.createElement("div")
    let poster = document.createElement("img")
    let title = document.createElement("h4")
    let plot = document.createElement("p")
    let type = document.createElement("i")
    poster.src = print.Poster
    title.innerHTML = `Title:  ${print.Title}`
    plot.innerText = `Plot:  ${print.Plot}`
    type.innerText = `Type:  ${print.Type}`
    div.append(poster, title, type, plot)
    main.append(div)
}

