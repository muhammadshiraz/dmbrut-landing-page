import Head from 'next/head';
import Landing from "../components/Landing";

export default function Home() {
  return (
    <div className="page__Container">
      <Head>
        <meta charSet="utf-8"/>
        <meta name="title" content="D.M Brut: A Brazilian Sparkling Wine. Buy online."/>
        <meta name="keywords" content="DM Brazilian Brut, DM Brazilian Sparkling, DM Sparkling Wine, DM Brut, Brazilian Brut, Brazilian Sparkling, Sparkling Wine, Chardonnay, Pinot Noir, Brut, Brazilian Culture, Sparkling, Wine, Liquor, Liquor Store, Liquor Store near me, Liquor Store open near me, Nearest Liquor store"/>
        <title>D.M Brut: A Brazilian Sparkling Wine. Buy online.</title>
        <meta name="description" content="We&#x27;re a Brazilian Brut sparkling wine made in traditional champenoise method. A unique celebratory drink and holiday gift. 60% Chardonnay, 40% Pinot Noir."></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="landing__Page">
          <Landing />
      </main>
      <footer>        
      </footer>
    </div>
  )
}
