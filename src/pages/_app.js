import Head from "next/head";
import Theme from "../styles/theme";

export default function App({ Component, pageProps }) {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                {/* Change theme color for mobile devices depending on their color-mode */}
                <meta name="theme-color" media="(prefers-color-scheme: light)" content="white" />
                <meta name="theme-color" media="(prefers-color-scheme: dark)" content="black" />
                <meta name="author" content="Kenrick Lam" />
                <meta
                    name="description"
                    content="Kenrick Lam is a Software Developer from Vancouver, Canada. Click here to learn about his work experience, projects, skills, and more."
                />
                <meta
                    name="keywords"
                    content="kenrick lam, kenrick, personal portfolio, software development, web development"
                />
                <meta property="og:image" content="/images/kenrick-memoji.png" />

                <link rel="icon" type="image/x-icon" href="/favicon.ico" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="manifest" href="/site.webmanifest" />
                <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
            </Head>
            <Theme>
                <Component {...pageProps} />
            </Theme>
        </>
    );
}
