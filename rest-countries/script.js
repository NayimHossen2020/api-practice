const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
}
loadCountries()

const displayCountries = (data) => {
    // for (country of data) {
    //     console.log(country);
    // }
    const countryDiv = document.getElementById('countries');
    data.forEach(country => {
        const div = document.createElement('div');
        div.classList = 'country';
        div.innerHTML = `
        <h3>${country.name.common}</h3>
        <p>${country.capital}</p>
        <button onclick="loadCountryByName('${country.name.common}')">Details</button>
        `;
        countryDiv.appendChild(div);
    });
}

const loadCountryByName = (name) => {
    const url = `https://restcountries.com/v3.1/name/${name}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayCountryDetails(data[0]))
};

const displayCountryDetails = (country) => {
    console.log(country);
    const countryDetails = document.getElementById('country-detail');
    countryDetails.innerHTML = `
    <h5>${country.name}</h5>
    <p>Population: ${country.population}</p>
    <img width="200px" src="${country.flags.png}">
    `;
}