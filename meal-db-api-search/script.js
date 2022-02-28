const searchFood = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;

    if (searchText == "") {
        document.getElementById('waring-custom').style.display = "block";
    } else {
        searchField.value = '';

        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
        fetch(url)
            .then(res => res.json())
            .then(data => displaySearchResult(data.meals))
    }
}

const displaySearchResult = (meals) => {
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = '';

    if (meals.length == 0) {
        document.getElementById('waring-custom').style.display = "block";
    }
    meals.forEach(meal => {
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div onclick="loadMealDetail(${meal.idMeal})" class="card h-100">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">${meal.strInstructions.slice(0, 250)}</p>
            </div>
        </div>
        `;
        searchResult.appendChild(div);
    })
}

const loadMealDetail = (mealId) => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayMealDetail(data.meals[0]))
}

const displayMealDetail = (meal) => {
    const mealDetails = document.getElementById('meal-details');
    mealDetails.textContent = '';
    const div = document.createElement('div');
    div.classList.add('card');

    div.innerHTML = `
    <div class="row g-0">
        <div class="col-md-4">
            <img height="50" src="${meal.strMealThumb}" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8">
            <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">${meal.strInstructions.slice(0, 150)}.</p>
                <a href="${meal.strYoutube}" class="btn btn-primary">go youtube</a>
            </div>
        </div>
    </div>
    `;
    mealDetails.appendChild(div);
}