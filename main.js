document.addEventListener("DOMContentLoaded", async ()=>{
    let res=await((await fetch("https://restcountries.com/v3.1/all")).json());
    let countryCard = document.querySelector(".country-cards");
        

    res.map((e)=>
    {
        console.log(e);

        countryCard.insertAdjacentHTML("beforeend", `<div id="country-card">
            <div class="tarjeta">
                <div class="titulo"><h3>${e.name.common}</h3></div>
                <div class="cuerpo">
                    <img src="${e.flags.png}" alt="bandera">
                    <p>${e.name.official}</p>
                    <h4>Region: ${e.region}, ${e.subregion}</h4>
                    <ul>
                        <li>Population: ${e.population}</li>
                        <li>Capital: ${e.capital}</li>
                        <li>Area: ${e.area}</li>
                        <li><a href="${e.maps.googleMaps}">Google Maps</a></li>
                    </ul>
                </div>
                <div class="pie">
                <a href="">Know more</a>
                </div>
            </div>
        </div>`)
            
    })
})

africa.addEventListener("click", async()=>{
    clear();
    let res=await((await fetch("https://restcountries.com/v3.1/region/africa")).json());
    
    create(res);
})

asia.addEventListener("click", async()=>{
    clear();
    let res=await((await fetch("https://restcountries.com/v3.1/region/asia")).json());
    
    create(res);
})

europe.addEventListener("click", async()=>{
    clear();
    let res=await((await fetch("https://restcountries.com/v3.1/region/europe")).json());
    
    create(res);
})

america.addEventListener("click", async()=>{
    clear();
    let res=await((await fetch("https://restcountries.com/v3.1/region/america")).json());
    
    create(res);
})

oceania.addEventListener("click", async()=>{
    clear();
    let res=await((await fetch("https://restcountries.com/v3.1/region/oceania")).json());
    
    create(res);
})

//all cards
function create(res){
    let countryCard = document.querySelector(".country-cards");

    res.map((e)=>
        {
            console.log(e);

            countryCard.insertAdjacentHTML("beforeend", `<div id="country-card">
                <div class="tarjeta">
                    <div class="titulo"><h3>${e.name.common}</h3></div>
                    <div class="cuerpo">
                        <img src="${e.flags.png}" alt="bandera">
                        <p>${e.name.official}</p>
                        <h4>Region: ${e.region}, ${e.subregion}</h4>
                        <ul>
                            <li>Population: ${e.population}</li>
                            <li>Capital: ${e.capital}</li>
                            <li>Area: ${e.area}</li>
                            <li><a href="${e.maps.googleMaps}">Google Maps</a></li>
                        </ul>
                    </div>
                    <div class="pie">
                    <a href="">Know more</a>
                    </div>
                </div>
            </div>`)
            
        })
}

function clear(){
    document.querySelector(".country-cards").innerHTML = "";
}


search.addEventListener("keyup", (e)=>{
    if(e.key==="Enter"){
        console.log(e);
        let name = search.value.toLowerCase();
        clear();
        buscarPorNombre(name);
        buscarPorRegion(name);
        buscarPorIdioma(name);
        buscarPorMoneda(name);
    }

})

async function buscarPorNombre(name){
    const res = await (await fetch(`https://restcountries.com/v3.1/name/${name}`)).json();
    create(res);

}

async function buscarPorRegion(region){
    const res = await (await fetch(`https://restcountries.com/v3.1/region/${region}`)).json();
    create(res);
}

async function buscarPorIdioma(languages){
    const res = await (await fetch(`https://restcountries.com/v3.1/lang/${languages}`)).json();
    create(res);
}

async function buscarPorMoneda(currencies){
    const res = await (await fetch(`https://restcountries.com/v3.1/currency/${currencies}`)).json();
    create(res);
}
