// Dummy movie data
var movies = [

    {
        name: 'The Dark Knight',
        duration: '152 min',
        type: 'Movie',
        genre: 'Drama, Action , Crime',
        director: 'Christopher Nolen',
        production: 'Legendary Entertainment, Syncopy, Warner Bros',
        country: 'United States, United Kingdom',
        description: 'the dark knight streaming online, the dark knight movie stream, the dark knight online movie download, watch the dark knight online, the dark knight watch online, the dark knight free download',
        date: 'Jul 18,2008',
        pic: 'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/57618417a0ddf3b7aa29db658bef2fc3b9608bb11a021631d3b6408441c1e0f7._RI_TTW_.jpg'
    },    {
        name: 'Brooklyn Knight',
        duration: '94 min',
        type: 'Movie',
        genre: 'Drama',
        director: 'Sticky Fingaz',
        production: 'Major Independents',
        country: 'United States',
        description: 'When Two rival basketball coaches played as Kirk "Sticky Fingaz" Jones and Khalil Kain fall out over a bad call in a championship game, things only heat up and get steamy and treacherous when Knight Mathews hooks up with the lovel...',
        date: 'Mar 22, 2022',
        pic: 'https://m.media-amazon.com/images/M/MV5BY2Q2YWUyOWYtMzBiYS00MTQ0LTkwOGQtYjljY2EzOTU0YWE0L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNzA3NDAwMjc@._V1_.jpg'
    },    {
        name: 'Breaking Bad',
        duration: '',
        type: 'TV',
        genre: 'Drama, Thriller, Crime',
        director: 'N/A',
        production: 'Sony Pictures Television, Gran Via Productions, High Bridge Productions',
        country: 'United States',
        description: 'A chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine with a former student in order to secure his familys future',
        date: 'Jan 20, 2008',
        pic: 'https://fr.web.img3.acsta.net/c_310_420/pictures/19/06/18/12/11/3956503.jpg'
    },    {
        name: 'The Blacklist',
        duration: '',
        type: 'Serie',
        genre: 'Drama, Crime, Mystery',
        director: 'N/A',
        production: 'Universal Television, Sony Pictures Television, Davis Entertainment',
        country: 'United States',
        description: 'A new FBI profiler, Elizabeth Keen, has her entire life uprooted when a mysterious criminal, Raymond Reddington, who has eluded capture for decades, turns himself in and insists on speaking only to her',
        date: 'Sep 23, 2013',
        pic: 'https://m.media-amazon.com/images/M/MV5BMTU1OTdjYTUtMzA2MS00Njg4LWI1NTctMWUzYzNkNmQ5YWY3XkEyXkFqcGdeQXVyMTUwMzM5ODkz._V1_FMjpg_UX1000_.jpg'
    },    {
        name: 'Lupin',
        duration: '',
        type: 'Serie',
        genre: 'Drama, Action, Crime',
        director: 'N/A',
        production: 'Netflix, Gaumont Television',
        country: 'United States, France',
        description: 'Inspired by the adventures of Arsène Lupin, gentleman thief Assane Diop sets out to avenge his father for an injustice inflicted by a wealthy family',
        date: 'Jan 08, 2021',
        pic: 'https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p19204904_b_v13_al.jpg'
    },    {
        name: 'The GodFather',
        duration: '175 min',
        type: 'Movie',
        genre: 'Drama, Crime',
        director: 'Francis Ford Coppola',
        production: 'Paramount Pictures, Albert S. Ruddy Productions, Alfran Productions ',
        country: 'United States',
        description: 'Don Vito Corleone, head of a mafia family, decides to hand over his empire to his youngest son Michael. However, his decision unintentionally puts the lives of his loved ones in grave danger.',
        date: 'Mar 24, 1972',
        pic: 'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg'
    },    {
        name: 'Lift',
        duration: '107 min',
        type: 'Movie',
        genre: 'Comedy, Action, Crime',
        director: 'F. Gary Gray',
        production: 'Netflix, Genre Films, 6th & Idaho Productions',
        country: '',
        description: 'Follows a master thief and his Interpol Agent ex-girlfriend who team up to steal $500 million in gold bullion being transported on an A380 passenger flight.',
        date: 'Jan 12, 2024',
        pic: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c0/Lift_2024_poster.webp/259px-Lift_2024_poster.webp.png'
    },

];

function createMovieCards(array, searchName) {
    var container = document.getElementById('movie-container');
    container.innerHTML = ''; 

    array.forEach(function(movie) {
        if (!searchName || movie.name.toLowerCase().includes(searchName.toLowerCase())) {
            var movieCard = document.createElement('div');
            movieCard.classList.add('movie-card');

            
            var poster = document.createElement('img');
            poster.src = movie.pic;
            poster.alt = movie.name + ' Poster';
            poster.classList.add('movie-poster');

            var title = createMovieDetail('movie-title', movie.name);
            var duration = createMovieDetail('movie-duration', 'Duration: ' + movie.duration);
            var type = createMovieDetail('movie-type', 'Type: ' + movie.type);
            var genre = createMovieDetail('movie-genre', 'Genre: ' + movie.genre);
            var director = createMovieDetail('movie-director', 'Director: ' + movie.director);
            var production = createMovieDetail('movie-production', 'Production: ' + movie.production);
            var country = createMovieDetail('movie-country', 'Country: ' + movie.country);
            var description = createMovieDetail('movie-description', 'Description: ' + movie.description);
            var date = createMovieDetail('movie-date', 'Release Date: ' + movie.date);

            
            movieCard.appendChild(poster);
            movieCard.appendChild(title);
            movieCard.appendChild(duration);
            movieCard.appendChild(type);
            movieCard.appendChild(genre);
            movieCard.appendChild(director);
            movieCard.appendChild(production);
            movieCard.appendChild(country);
            movieCard.appendChild(description);
            movieCard.appendChild(date);

            
            container.appendChild(movieCard);
        }
    });
}


function createMovieDetail(className, textContent) {
    var detail = document.createElement('div');
    detail.classList.add(className);
    detail.textContent = textContent;
    return detail;
}


var searchBar = document.querySelector('.search-bar input');


searchBar.addEventListener('input', function() {
    var searchTerm = searchBar.value;
    createMovieCards(movies, searchTerm);
});


createMovieCards(movies);