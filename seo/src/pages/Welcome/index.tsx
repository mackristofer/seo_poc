import { Helmet } from 'react-helmet-async';

export default function Welcome() {
    return (
        <>
            <Helmet>
                <meta property="og:type" content="website" />
                <meta content="Teste de preview da tag title" property="og:title" />
                <meta property="og:description" content="Teste de preview da tag description" />
                
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta property="og:locale" content="pt_BR" />
                <meta property="og:url" content="https://seodevsuperior.netlify.app/" />
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
