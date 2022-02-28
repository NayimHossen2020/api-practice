const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
}

const displayCountries = (data) => {
    // for (country of data) {
    //     console.log(country);
    // }
    const countryDiv = document.getElementById('countries');
    data.forEach(country => {
        console.log();
        const h3 = document.createElement('h3');
        h3.innerText = country.name.common;
        countryDiv.appendChild(h3);
    });
}