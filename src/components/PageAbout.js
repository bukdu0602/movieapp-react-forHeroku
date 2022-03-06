
const PageAbout = () => {
    
    return (
        <main>
            <section class = 'aboutPage'>
                <h1>Welcome to Movie App</h1>
                <h3> Movie App - a Movie Database Listing </h3>
                <ul class = 'app-explanation'>
                    <li> Select top-15 movies according to their popularity, rating, and release date </li>
                    <li> Find your favorate film and save it to the Favorate</li>
                </ul>
                <br></br>
                <article id='aboutPage'> 
                    <img id = 'about-page-image' src={'https://ichef.bbci.co.uk/news/976/cpsprodpb/1314/production/_120748840_squid5.jpg'} alt = "Introduction Webpage" />
                    <p>The app is made by Ryan.</p>
                    <p>Contact: <a href="mailto:ryan.hyun@gmail.com">Ryan Lim</a></p>
                </article>
                <article id='aboutTmdb'>
                    <p id = 'tmdb'> <img id ='tmdb-logo' src={`https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg`} alt="TMDB logo" /> This product uses the TMDB API but is not endorsed or certified by TMDB. </p>
                </article>
            </section>
        </main>
    );

};

export default PageAbout;