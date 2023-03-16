import Helmet from 'react-helmet';

export default function Welcome() {
    return (
        <>
            <Helmet>
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Teste de preview da tag title" />
                <meta property="og:description" content="Teste de preview da tag description" />
                <meta property="og:image:secure_url" content="https://devsuperior.com.br/_next/static/images/logo-white-10059e26f600604a7b5bd7782ed7550c.svg" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta property="og:locale" content="pt_BR" />
                <meta property="og:url" content="https://seodevsuperior.netlify.app" />
                <meta property="og:site_name" content="Teste preview site name" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@devsuperior" />
            </Helmet>
            <main className="main-body container">
                <h2>Bem-vindos!</h2>
            </main>
        </>
    );
}
