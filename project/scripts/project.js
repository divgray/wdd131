document.getElementById("currentyear").innerText = new Date().getFullYear();
document.querySelector("#lastModified").innerHTML = `Last modified: ${document.lastModified}`;

const movies = [
    {
        movieName: "Treasure Planet",
        tags: "Animated Sci-fi Adventure",
        type: "Movie",
        year: "2002",
        summary: "The Loot of a Thousand Worlds! The story follows Jim Hawkins, a rebellious teenager with dreams of adventure. When he discovers a map to the legendary Treasure Planet, Jim joins a crew aboard the RLS Legacy, a spaceship captained by the feline-like Captain Amelia. Among the crew is the enigmatic cyborg cook, John Silver, who becomes a mentor and father figure to Jim.",
        imageUrl: "https://img.lum.dolimg.com/v1/images/open-uri20150422-12561-1flh8w0_e8df4f17.jpeg?region=0%2C0%2C2000%2C2818"
    },
    {
        movieName: "The Hunchback of Notre Dame",
        tags: "Animated Drama",
        type: "Movie",
        year: "1996",
        summary: "During the Festival of Fools, Quasimodo ventures into the city and befriends Esmeralda, a compassionate and courageous Romani woman. Together, they confront Frollo's oppressive tyranny and fight for justice and acceptance. The film explores themes of prejudice, kindness, freedom, and the strength to be true to oneself.",
        imageUrl: "https://vignette4.wikia.nocookie.net/disney/images/a/a5/The_Hunchback_of_Notre_Dame-_1996.jpg/revision/latest?cb=20160923025720&path-prefix=es"
    },
    {
        movieName: "Atlantis: The Lost Empire",
        tags: "Animated Adventure",
        type: "Movie",
        year: "2001",
        summary: "The story follows Milo Thatch, a linguist and cartographer who believes in the existence of Atlantis, much like his late grandfather. Milo gets the opportunity of a lifetime when a mysterious benefactor funds an expedition to find the lost city. He joins a diverse crew aboard a high-tech submarine led by the gruff Commander Rourke.",
        imageUrl: "https://i.pinimg.com/originals/0f/bd/5e/0fbd5e95f418b3386195e730d89d2f27.png"
    },
    {
        movieName: "Big Hero 6",
        tags: "Animated Action",
        type: "Movie",
        year: "2014",
        summary: "Superhero adventure with themes of family, friendship, and healing. The story is set in the futuristic city of San Fransokyo and follows Hiro Hamada, a gifted young inventor, grieving the tragic loss of his older brother, Tadashi.",
        imageUrl: "https://image.tmdb.org/t/p/original/7bbgZy1fIPMgpoyOfETupCUQJAE.jpg"
    },
    {
        movieName: "WALL-E",
        tags: "Animated Adventure",
        type: "Movie",
        year: "2008",
        summary: "WALL·E lives a lonely existence but finds joy in collecting interesting objects and dreaming of connection. His life changes when EVE, an advanced robot sent to Earth to search for signs of plant life, arrives. The two form a heartwarming bond, and WALL·E follows EVE across the galaxy, eventually ending up aboard the Axiom—a massive spaceship where humans now live.",
        imageUrl: "https://vignette1.wikia.nocookie.net/disney/images/f/f2/Walleposter.jpg/revision/latest?cb=20150214194124"
    },
    {
        movieName: "Brave",
        tags: "Animated Adventure",
        type: "Movie",
        year: "2012",
        summary: "In an attempt to change her fate, Merida seeks out a witch and asks for a spell to alter her mother's opinions. However, the spell accidentally transforms Queen Elinor into a bear, sparking a race against time for Merida to reverse the curse and mend their relationship before it's too late.",
        imageUrl: "https://staticblog.virtualvocations.com/2012/06/brave-poster.jpg"
    },
    {
        movieName: "Wolf Children",
        tags: "Animated Drama",
        type: "Movie Foreign",
        year: "2012",
        summary: "Hana, a young woman who falls in love with a man who can transform into a wolf. Together, they have two children. After a tragedy leaves Hana raising her wolf children alone, she moves to the countryside to give them a safe environment to explore both their human and wolf natures.",
        imageUrl: "https://img1.ak.crunchyroll.com/i/spire4/ca8fccf4405b70ef7bf52c4eb21015041661453534_full.jpg"
    },
    {
        movieName: "Spirited Away",
        tags: "Animated Adventure",
        type: "Movie Foreign",
        year: "2002",
        summary: "A magical and deeply moving story that takes viewers on an unforgettable journey into a fantastical world. The film follows Chihiro, a 10-year-old girl, who finds herself in a mysterious and spirit-filled realm after her parents are transformed into pigs at an abandoned amusement park.",
        imageUrl: "https://m.media-amazon.com/images/M/MV5BMjlmZmI5MDctNDE2YS00YWE0LWE5ZWItZDBhYWQ0NTcxNWRhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg"
    },
    {
        movieName: "The Girl Who Leapt Through Time",
        tags: "Animated Drama",
        type: "Movie Foreign",
        year: "2006",
        summary: "Makoto Konno, a high school girl who unexpectedly gains the ability to leap through time after a peculiar incident in a science lab. At first, Makoto uses her newfound power for trivial purposes, like avoiding awkward situations or redoing moments to improve her day. However, as she continues to jump through time, she realizes that her actions have unintended consequences, affecting the lives of those around her, including her closest friends Chiaki and Kōsuke.",
        imageUrl: "https://image.tmdb.org/t/p/original/7oNeWrsaiMGxCrvkWjQ56y6JN85.jpg"
    },
    {
        movieName: "Howl's Moving Castle",
        tags: "Animated Drama",
        type: "Movie Foreign",
        year: "2004",
        summary: "As Sophie becomes involved in Howl's chaotic life, she discovers his struggles with a dark curse tied to his heart and his avoidance of war that is engulfing their world. Together, Sophie and Howl face challenges, including conflict with witches, wizards, and the destructive nature of war, while uncovering the deep connections between their lives.",
        imageUrl: "https://m.media-amazon.com/images/S/pv-target-images/5e59456b81f335e651a8d5b06518d9a23c5b6784db0442ee1687de1c6243aa44.jpg"
    },
    {
        movieName: "Princess Mononoke",
        tags: "Animated Adventure",
        type: "Movie Foreign",
        year: "1997",
        summary: "Ashitaka, a young prince cursed by a demon after protecting his village. Seeking a cure, he ventures west and finds himself in the middle of a war between industrialized humans and the spirits of the forest. Ashitaka meets San, a fierce young woman raised by wolves, known as Princess Mononoke. San fights to protect the forest from human destruction, while Ashitaka seeks balance and peace between the two sides.",
        imageUrl: "https://static1.colliderimages.com/wordpress/wp-content/uploads/sharedimages/2024/04/princess-mononoke-movie-poster.jpg"
    },
    {
        movieName: "Castle in the Sky",
        tags: "Animated Adventure",
        type: "Movie Foreign",
        year: "1986",
        summary: "When Sheeta is pursued by government agents and pirates who seek the crystal's power, she teams up with Pazu to uncover the secrets of Laputa. Together, they embark on a thrilling journey filled with airships, robots, and breathtaking landscapes. Along the way, they learn about Laputa's advanced technology, its dark history, and the dangers of greed and power.",
        imageUrl: "https://m.media-amazon.com/images/M/MV5BNDFhZmY2NTgtMzljYy00MTlhLTgyMjItNTEwZWJkYThhYzkyXkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_.jpg"
    },
    {
        movieName: "Alita: Battle Angel",
        tags: "Action Sci-Fi",
        type: "Movie English",
        year: "2019",
        summary: "A thrilling sci-fi film set in a dystopian future. The story begins when Dr. Dyson Ido, a cybernetic doctor, discovers the remains of a cyborg in a junkyard. He restores her and names her Alita. As she regains consciousness, Alita realizes she has no memory of her past, but she possesses extraordinary combat abilities.",
        imageUrl: "https://comic-watch.com/wp-content/uploads/2021/09/elbn885vgaa2gxv.jpg"
    },
    {
        movieName: "Ready Player One",
        tags: "Adventure Sci-fi",
        type: "Movie English",
        year: "2018",
        summary: "The story follows Wade Watts, a young OASIS user and gunter (short for egg hunter), who embarks on a quest to find Halliday's Easter egg—a hidden item within the game that grants the finder control of the OASIS and a massive fortune. To win, players must solve riddles and overcome challenges inspired by Halliday's obsession with 1980s pop culture.",
        imageUrl: "https://image.tmdb.org/t/p/original/eVVjEvhYZltgmp9wK3C6ZXSd6FY.jpg"
    },
    {
        movieName: "Assassin's Creed",
        tags: "Action Sci-fi",
        type: "Movie English",
        year: "2016",
        summary: "The Knights of the Templar Order are seeking out the Apple of Eden, which legend tells contains the seeds that led to the first sin. The Templars wants to seize the Apple for control over free will in a violent world. The Brotherhood of Assassins were the ones set out to destroy the Templars. Aguilar de Nerha (Michael Fassbender) is tasked with stopping the Templars from taking the Apple. He recites the Assassin's Creed: 'We work in the dark to serve the light. We are Assassins.'",
        imageUrl: "https://image.tmdb.org/t/p/original/nhiShTvoga8fyGX8468hLj6pCtW.jpg"
    },
    {
        movieName: "Arcane",
        tags: "Animated Action",
        type: "Series English",
        year: "2021",
        summary: "Arcane, also known as Arcane: League of Legends, is an animated series based on the League of Legends lore, retelling the origin stories of several characters from Piltover and Zaun.",
        imageUrl: "https://images.justwatch.com/poster/260775274/s718/season-1.jpg"
    },
    {
        movieName: "Weak Hero Class 1",
        tags: "Action Drama",
        type: "Series Foreign",
        year: "2022",
        summary: "Yeon Si-eun, a top-performing student who is physically weak but uses his intelligence, quick decision-making, and knowledge of physics to stand up against bullies in his school. Despite his solitary nature, Si-eun forms unexpected friendships with Ahn Su-ho, the strongest fighter in their class, and Oh Beom-seok, a troubled student.",
        imageUrl: "https://m.media-amazon.com/images/M/MV5BMDZjM2YxNDktZDM5MS00NmJmLWJiZDktNTRiMjk5ZDE5NTgyXkEyXkFqcGdeQXVyMTUyNjc3NDQ4._V1_FMjpg_UX1000_.jpg"
    },
    {
        movieName: "The Raid",
        tags: "Action Thriller",
        type: "Movie Foreign",
        year: "2011",
        summary: "A rookie member of an elite team of commandos, Rama is instructed to hang back while his comrades-in-arms go ahead with their mission to take down a brutal crime lord called Tama. However, the team's cover is blown. Now Rama must take command and lead his remaining team on an ultraviolent charge through the building to complete -- and survive -- the mission.",
        imageUrl: "https://m.media-amazon.com/images/M/MV5BOGUxM2Q0MzItZDRmYy00ZWY1LWFiNzctNmY3Njg2ODJjZWNmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
    }
];

function Displaymovies(movies) {
    const album = document.querySelector("#album");
    album.innerHTML = "";

    movies.forEach(m => {
        const card = document.createElement("div");
        card.classList.add("movie-card");

        const projectHTML = `
            <h2>${m.movieName}</h2>
            <p><strong>Year Released:</strong> ${m.year}</p>
            <p><strong>Tags:</strong> ${m.tags}</p>
            <p><strong>Type:</strong> ${m.type}</p>
            <img src="${m.imageUrl}" alt="A picture of ${m.movieName}" loading="lazy">
            <br>
            <button class="see-more">See More</button>
            <p class="summary" style="display: none;">${m.summary}</p>
        `;
        card.innerHTML = projectHTML;

        const seeMoreButton = card.querySelector(".see-more");
        const summaryParagraph = card.querySelector(".summary");

        seeMoreButton.addEventListener("click", () => {
            summaryParagraph.classList.toggle("open");
            seeMoreButton.textContent = summaryParagraph.classList.contains("open") ? "See Less" : "See More";
        });

        album.appendChild(card);
    });
}

const home = document.querySelector("#home");
const animated = document.querySelector("#animated");
const english = document.querySelector("#english");
const foreign = document.querySelector("#foreign");
const series = document.querySelector("#series");
const selection = document.querySelector("#selection");

// Filter functions for each nav item
home.addEventListener("click", (e) => {
    e.preventDefault();
    Displaymovies(movies);
    updateActiveButton(home);
});
animated.addEventListener("click", (e) => {
    e.preventDefault();
    const filteredMovies = movies.filter(movie => movie.tags.includes("Animated"));
    Displaymovies(filteredMovies);
    updateActiveButton(animated);
});
english.addEventListener("click", (e) => {
    e.preventDefault();
    const filteredMovies = movies.filter(movie => movie.type.includes("English"));
    Displaymovies(filteredMovies);
    updateActiveButton(english);
});
foreign.addEventListener("click", (e) => {
    e.preventDefault();
    const filteredMovies = movies.filter(movie => movie.type.includes("Foreign"));
    Displaymovies(filteredMovies);
    updateActiveButton(foreign);
});
series.addEventListener("click", (e) => {
    e.preventDefault();
    const filteredMovies = movies.filter(movie => movie.type.includes("Series"));
    Displaymovies(filteredMovies);
    updateActiveButton(series);
});

Displaymovies(movies);


movies.forEach(movie => {
    if (!movie.movieName || !movie.imageUrl) {
        console.warn("Movie data is missing key fields:", movie);
    }
});


function updateActiveButton(activeLink) {
    const navLinks = document.querySelectorAll("nav a");
    navLinks.forEach(link => link.classList.remove("active"));
    activeLink.classList.add("active");
}


document.addEventListener("DOMContentLoaded", () => {

  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);

  const message = urlParams.get("message"); // Movie title
  const genres = urlParams.getAll("genre"); // Selected genres (multiple)
  const feedback = urlParams.get("good-or-bad"); // Feedback (thumbs up/down)
  const username = urlParams.get("username"); // Optional username

  console.log("Movie Recommendation:", message);
  console.log("Selected Genres:", genres);
  console.log("Feedback:", feedback === "1" ? "Thumbs Up" : "Thumbs Down");
  console.log("Username:", username || "Not provided");
});


const textarea = document.getElementById('movie-recom');

const queryString = window.location.search;

const urlParams = new URLSearchParams(queryString);

const message = urlParams.get("message") || "No recommendation provided.";

console.log("Query String:", queryString);
console.log("Message:", message);



textarea.addEventListener('focus', () => {
  if (textarea.value === "Type the movie title here...") {
    textarea.value = "";
  }
});

textarea.addEventListener('blur', () => {
  if (textarea.value.trim() === "") {
    textarea.value = "Type the movie title here...";
  }
});


document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("myform");
    
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      
      const movieTitle = document.getElementById('movie-recom').value.trim();
      if (!movieTitle) {
        alert("Please provide a movie title before submitting!");
        return;
      }
      
      const selectedGenreElements = document.querySelectorAll('input[name="genre"]:checked');
      const genres = Array.from(selectedGenreElements).map(checkbox => checkbox.value);
      const feedbackInput = document.querySelector('input[name="good-or-bad"]:checked');
      const feedback = feedbackInput ? feedbackInput.value : null;
      const username = document.getElementById('username').value.trim();
      
      const recommendation = {
        movieTitle: movieTitle,
        genres: genres,
        feedback: feedback,
        username: username || "Not provided",
        dateSubmitted: new Date().toISOString()
      };
  
      // Debug: Log the recommendation before saving
      console.log("Saving recommendation:", recommendation);
      
      let recommendations = JSON.parse(localStorage.getItem('movieRecommendations')) || [];
      recommendations.push(recommendation);
      localStorage.setItem('movieRecommendations', JSON.stringify(recommendations));
      
      alert("Your movie recommendation has been saved!");
      
      form.reset();
      
      const textarea = document.getElementById('movie-recom');
      textarea.value = "Type the movie title here...";
    });
  });


  const recommendations = JSON.parse(localStorage.getItem('movieRecommendations')) || [];
  recommendations.forEach(rec => {
    // Transform feedback value for display
    const feedbackText = rec.feedback === "1" 
      ? "Thumbs Up" 
      : rec.feedback === "0" 
        ? "Thumbs Down" 
        : "No feedback provided";
      
    const recommendationContainer = document.createElement('div');
    recommendationContainer.innerHTML = `
      <h3>${rec.movieTitle}</h3>
      <p>Genres: ${rec.genres.join(', ')}</p>
      <p>Feedback: ${feedbackText}</p>
      <p>Submitted by: ${rec.username}</p>
      <p>Date: ${rec.dateSubmitted}</p>
    `;
    document.body.appendChild(recommendationContainer);
  });
  