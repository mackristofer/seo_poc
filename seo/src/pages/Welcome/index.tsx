import Helmet from 'react-helmet';

export default function Welcome() {
    return (
        <>
            <Helmet>

                <title>The Rock (1996)</title>
                <meta property="og:title" content="The Rock" />
                <meta property="og:type" content="video.movie" />
                <meta property="og:url" content="https://www.imdb.com/title/tt0117500/" />
                <meta property="og:image" content="https://ia.media-imdb.com/images/rock.jpg" />
            </Helmet>
            <main className="main-body container">
                <h2>Bem-vindos!</h2>
            </main>
        </>
    );
}
