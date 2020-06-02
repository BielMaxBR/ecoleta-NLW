function populateUFs() {
    const ufSelect = document.querySelector("select[name=uf]")
    console.log(ufSelect)
    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/distritos")
        .then( res => res.json() )
        .then ( states => {

            for (const state of states) {
                ufSelect.innerHTML += `<option value="${state.id}">${state.name}</option>`
            }

        })
}

populateUFs()

function getCities(event)
{
    const citySelect = document.querySelector("select[name=city]")
    const stateInput = document.querySelector("input[name=state]")


    const ufValue = event.target.value    
    
    const indexOfSelectedState = event.target.selectedIndex
    stateInput.value = event.target.options[indexOfSelectedState]

    const url = `ttps://servicodados.ibge.gov.br/api/v1/localidades/distritos/${ufValue}/municipios`

    fetch(url)
        .then( res => res.json() )
        .then ( cities => {

            for (const city of cities) {
                ufSelect.innerHTML += `<option value="${city.id}">${city.name}</option>`
            }

            citySelect.disabled = false
        })
}
document.querySelector("select[name=uf]")
    .addEventListener("change", () => getCities)