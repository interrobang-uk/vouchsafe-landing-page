import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import Script from "next/script"

const url = "https://vouchsafe.interrobang.coop"
const title = "VouchSafe | Digital identity for everyone"
const description =
  "VouchSafe lets you provide vital services to the people who need them most"
const socialImg = "https://vouchsafe.interrobang.coop/social.jpg"

const IndexPage = () => (
  <>
    <Head>
      <title key="title">{title}</title>
      <meta name="title" content={title} />
      <meta name="description" key="description" content={description} />

      {/* open graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" key="og:url" content={url} />
      <meta property="og:title" key="og:title" content={title} />
      <meta
        property="og:description"
        key="og:description"
        content={description}
      />
      <meta property="og:image" content={socialImg} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="6300" />

      {/* twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" key="twitter:url" content={url} />
      <meta property="twitter:title" key="twitter:title" content={title} />
      <meta
        property="twitter:description"
        key="twitter:description"
        content={description}
      />
      <meta property="twitter:image" content={socialImg} />

      <meta name="viewport" content="width=device-width" />

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />

      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700;900&family=Koulen&display=swap"
        rel="stylesheet"
      />

      <link rel="icon" href="/favicon-vs.png" />
      <meta charSet="utf-8" />

      <Script src="https://www.googletagmanager.com/gtag/js?id=G-X60V92B7T2" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-X60V92B7T2');
        `}
      </Script>
    </Head>

    <Link href="#main-content" className="vs-skip-link">
      Skip to main content
    </Link>

    <header className="vs-header">
      <div className="container vs-header__inner">
        <Link className="vs-header__masthead" href="/">
          <svg
            width="1353"
            height="252"
            viewBox="0 0 1353 252"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M93.5322 248H51.1494C50.124 248 49.5544 247.43 49.4404 246.291L1.07617 5.83691C0.848307 4.92546 1.30404 4.46973 2.44336 4.46973H42.0918C43.0033 4.46973 43.5729 4.92546 43.8008 5.83691L72.5117 166.14L100.539 5.83691C100.767 4.92546 101.337 4.46973 102.248 4.46973H141.384C142.637 4.46973 143.093 4.92546 142.751 5.83691L95.2412 246.291C95.1273 247.43 94.5576 248 93.5322 248ZM206.838 251.418C194.419 251.418 182.969 248.228 172.487 241.848C162.119 235.467 153.745 226.979 147.365 216.384C141.099 205.674 137.966 193.939 137.966 181.179L138.308 70.2656C138.308 57.2773 141.441 45.5993 147.707 35.2314C153.859 24.7497 162.176 16.3757 172.658 10.1094C183.14 3.72917 194.533 0.539062 206.838 0.539062C219.598 0.539062 231.049 3.6722 241.188 9.93848C251.442 16.2048 259.646 24.6357 265.798 35.2314C272.064 45.7132 275.197 57.3913 275.197 70.2656L275.539 181.179C275.539 193.939 272.463 205.617 266.311 216.213C260.044 226.923 251.727 235.467 241.359 241.848C230.992 248.228 219.484 251.418 206.838 251.418ZM206.838 209.206C213.902 209.206 220.054 206.358 225.295 200.661C230.536 194.851 233.156 188.356 233.156 181.179L232.814 70.2656C232.814 62.5182 230.365 55.9671 225.466 50.6123C220.567 45.2575 214.357 42.5801 206.838 42.5801C199.66 42.5801 193.508 45.2005 188.381 50.4414C183.254 55.6823 180.69 62.2904 180.69 70.2656V181.179C180.69 188.812 183.254 195.42 188.381 201.003C193.508 206.472 199.66 209.206 206.838 209.206ZM366.457 251.418C354.152 251.418 342.759 248.228 332.277 241.848C321.796 235.467 313.422 226.923 307.155 216.213C301.003 205.389 297.927 193.597 297.927 180.837L298.61 5.83691C298.61 4.92546 299.066 4.46973 299.978 4.46973H339.284C340.196 4.46973 340.651 4.92546 340.651 5.83691V180.837C340.651 188.698 343.158 195.42 348.171 201.003C353.184 206.472 359.279 209.206 366.457 209.206C373.977 209.206 380.243 206.472 385.256 201.003C390.269 195.42 392.775 188.698 392.775 180.837V5.83691C392.775 4.92546 393.231 4.46973 394.143 4.46973H433.449C434.361 4.46973 434.816 4.92546 434.816 5.83691L435.5 180.837C435.5 193.711 432.424 205.56 426.271 216.384C420.005 227.093 411.688 235.638 401.32 242.019C390.952 248.285 379.331 251.418 366.457 251.418ZM527.443 251.418C514.797 251.418 503.233 248.228 492.751 241.848C482.383 235.467 474.123 226.923 467.971 216.213C461.932 205.389 458.913 193.369 458.913 180.153L459.255 70.9492C459.255 57.9609 462.217 46.2259 468.142 35.7441C474.066 25.1484 482.212 16.6605 492.58 10.2803C503.062 3.78613 514.683 0.539062 527.443 0.539062C540.432 0.539062 551.996 3.6722 562.136 9.93848C572.39 16.2048 580.536 24.6927 586.574 35.4023C592.727 45.998 595.803 57.847 595.803 70.9492V87.0137C595.803 87.9251 595.347 88.3809 594.436 88.3809H555.129C554.217 88.3809 553.762 87.9251 553.762 87.0137V70.9492C553.762 63.2018 551.255 56.5368 546.242 50.9541C541.229 45.3714 534.963 42.5801 527.443 42.5801C519.126 42.5801 512.746 45.4284 508.303 51.125C503.859 56.8216 501.638 63.4297 501.638 70.9492V180.153C501.638 188.698 504.144 195.705 509.157 201.174C514.17 206.529 520.266 209.206 527.443 209.206C534.963 209.206 541.229 206.244 546.242 200.319C551.255 194.281 553.762 187.559 553.762 180.153V163.918C553.762 163.007 554.217 162.551 555.129 162.551H594.777C595.689 162.551 596.145 163.007 596.145 163.918V180.153C596.145 193.256 593.068 205.218 586.916 216.042C580.65 226.752 572.39 235.354 562.136 241.848C551.882 248.228 540.318 251.418 527.443 251.418ZM662.624 248H622.976C622.064 248 621.608 247.43 621.608 246.291L621.95 5.83691C621.95 4.92546 622.52 4.46973 623.659 4.46973H662.624C663.763 4.46973 664.333 4.92546 664.333 5.83691L663.991 101.027H716.457V5.83691C716.457 4.92546 716.913 4.46973 717.824 4.46973H756.789C757.928 4.46973 758.498 4.92546 758.498 5.83691L759.182 246.291C759.182 247.43 758.612 248 757.473 248H718.166C717.027 248 716.457 247.43 716.457 246.291V143.41H663.991V246.291C663.991 247.43 663.535 248 662.624 248ZM847.194 251.418C834.776 251.418 823.326 248.228 812.844 241.848C802.476 235.467 794.159 226.979 787.893 216.384C781.74 205.674 778.664 193.939 778.664 181.179V165.114C778.664 163.861 779.234 163.234 780.373 163.234H819.68C820.591 163.234 821.047 163.861 821.047 165.114V181.179C821.047 188.812 823.61 195.42 828.737 201.003C833.864 206.472 840.017 209.206 847.194 209.206C854.486 209.206 860.695 206.415 865.822 200.832C870.949 195.135 873.513 188.584 873.513 181.179C873.513 172.634 867.93 165.171 856.765 158.791C854.942 157.652 852.549 156.285 849.587 154.689C846.739 152.98 843.321 151.044 839.333 148.879C835.345 146.714 831.472 144.606 827.712 142.556C823.952 140.391 820.306 138.34 816.774 136.403C804.014 128.884 794.501 119.484 788.234 108.205C782.082 96.8118 779.006 84.0514 779.006 69.9238C779.006 56.9355 782.196 45.2005 788.576 34.7188C794.956 24.3509 803.273 16.1478 813.527 10.1094C823.895 3.95703 835.118 0.880859 847.194 0.880859C859.613 0.880859 871.006 3.95703 881.374 10.1094C891.742 16.3757 900.002 24.6927 906.154 35.0605C912.421 45.4284 915.554 57.0495 915.554 69.9238V98.6348C915.554 99.5462 915.098 100.002 914.187 100.002H874.88C873.968 100.002 873.513 99.5462 873.513 98.6348L873.171 69.9238C873.171 61.7207 870.607 55.0557 865.48 49.9287C860.354 44.8018 854.258 42.2383 847.194 42.2383C840.017 42.2383 833.864 44.9727 828.737 50.4414C823.61 55.9102 821.047 62.4043 821.047 69.9238C821.047 77.5573 822.642 83.9375 825.832 89.0645C829.136 94.1914 835.118 99.0905 843.776 103.762C844.688 104.217 846.796 105.357 850.1 107.18C853.404 109.003 857.049 111.053 861.037 113.332C865.139 115.497 868.841 117.491 872.146 119.313C875.45 121.022 877.443 122.048 878.127 122.39C889.748 128.884 898.92 136.859 905.642 146.315C912.478 155.772 915.896 167.393 915.896 181.179C915.896 194.509 912.819 206.472 906.667 217.067C900.401 227.663 892.084 236.037 881.716 242.189C871.348 248.342 859.841 251.418 847.194 251.418ZM928.371 246.291L971.779 5.83691C972.007 4.92546 972.577 4.46973 973.488 4.46973H1024.25C1025.16 4.46973 1025.73 4.92546 1025.95 5.83691L1067.65 246.291C1067.77 247.43 1067.31 248 1066.29 248H1027.49C1026.35 248 1025.73 247.43 1025.61 246.291L1021.85 220.656H974.172L970.412 246.291C970.298 247.43 969.729 248 968.703 248H929.738C928.827 248 928.371 247.43 928.371 246.291ZM996.901 84.9629L981.179 183.229H1014.85L1000.49 84.9629L998.439 71.9746L996.901 84.9629ZM1130.54 248H1091.24C1090.1 248 1089.53 247.43 1089.53 246.291L1090.21 5.83691C1090.21 4.92546 1090.67 4.46973 1091.58 4.46973H1203.69C1204.83 4.46973 1205.4 4.92546 1205.4 5.83691V45.3145C1205.4 46.2259 1204.94 46.6816 1204.03 46.6816H1132.25V101.027H1204.03C1204.94 101.027 1205.4 101.597 1205.4 102.736L1205.74 142.385C1205.74 143.296 1205.17 143.752 1204.03 143.752H1132.25V246.291C1132.25 247.43 1131.68 248 1130.54 248ZM1351.34 248H1238.21C1237.3 248 1236.84 247.43 1236.84 246.291L1237.18 5.83691C1237.18 4.92546 1237.64 4.46973 1238.55 4.46973H1351C1351.91 4.46973 1352.37 5.03939 1352.37 6.17871V45.3145C1352.37 46.2259 1351.91 46.6816 1351 46.6816H1279.23V101.369H1351C1351.91 101.369 1352.37 101.825 1352.37 102.736L1352.71 142.385C1352.71 143.296 1352.26 143.752 1351.34 143.752H1279.23V204.934H1351.34C1352.26 204.934 1352.71 205.503 1352.71 206.643V246.633C1352.71 247.544 1352.26 248 1351.34 248Z"
              fill="#212121"
            />
          </svg>
          VouchSafe
        </Link>

        <nav className="vs-header__menu">
          <Link href="#" className="vs-header__link">
            Menu link
          </Link>
          <Link href="#" className="vs-header__link">
            Menu link
          </Link>
          <Link href="#" className="vs-header__link">
            Menu link
          </Link>
        </nav>

        <nav className="vs-header__cta-menu">
          <Link
            href="https://www.youtube.com/watch?v=o8ZNH_sp7xQ"
            className="vs-header__cta  vs-header__cta--secondary"
          >
            Find out how
          </Link>
          <Link
            href="https://cal.com/jayeh/chat"
            className="vs-header__cta vs-header__cta--primary"
          >
            Get a demo
          </Link>
        </nav>
      </div>
    </header>

    <section className="vs-banner">
      <div className="container">
        📢 Scottish Government chooses VouchSafe —{" "}
        <Link href="https://interrobanguk.substack.com">
          Read the full announcement
        </Link>
      </div>
    </section>

    <section className="vs-hero">
      <h1>We're making ID work for everyone</h1>
      <Link href="https://www.youtube.com/watch?v=o8ZNH_sp7xQ">
        Find out how{" "}
        <svg
          width="468"
          height="401"
          viewBox="0 0 468 401"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M243.764 10.4301C256.782 -2.58738 277.887 -2.58738 290.905 10.4301L457.572 177.097C470.589 190.114 470.589 211.22 457.572 224.237L290.905 390.904C277.887 403.921 256.782 403.921 243.764 390.904C230.747 377.886 230.747 356.781 243.764 343.763L353.527 234H34.0013C15.5918 234 0.667969 219.076 0.667969 200.667C0.667969 182.257 15.5918 167.334 34.0013 167.334H353.527L243.764 57.5705C230.747 44.5531 230.747 23.4476 243.764 10.4301Z"
            fill="#212121"
          />
        </svg>
      </Link>
    </section>

    <main className="vs-main" id="main-content">
      <section className="vs-section">
        <div className="container vs-section__inner">
          <div>
            <article className="vs-section__content">
              <p className="vs-section__caption">The problem</p>
              <h2 className="vs-section__headline">
                Over 11 million people in the UK don’t have ID
              </h2>
              <p className="vs-section__explanation">
                Without an document like a passport or driving license, you’ll
                struggle to access housing, banking, healthcare and even voting
                in elections.
              </p>
            </article>

            <aside className="vs-section__citation">
              <Image src="/news.jpg.webp" alt="" width={300} height={300} />
              <div>
                <h3>
                  <Link href="https://www.bbc.co.uk/news/uk-england-london-67031730">
                    Voter ID: Almost 1 in 6 Londoners without suitable documents
                    - report
                  </Link>
                </h3>

                <p className="vs-section__tag">Data</p>
              </div>
            </aside>
          </div>

          <div className="vs-section__image-grid">
            <div></div>
            <div></div>
            <Image src="/6.jpg" alt="" width={500} height={500} />
          </div>
        </div>
      </section>

      <section className="vs-section vs-section--reversed vs-section--dark">
        <div className="container vs-section__inner">
          <div>
            <article className="vs-section__content">
              <p className="vs-section__caption">The solution</p>
              <h2 className="vs-section__headline">
                Prove who you are through your trusted relationships
              </h2>
              <p className="vs-section__explanation">
                VouchSafe is the only product on the market that lets you prove
                your identity without relying on a traditional paper ID
                document.
              </p>
            </article>
          </div>

          <div className="vs-section__image-grid">
            <Image src="/4.png" alt="" width={500} height={500} />
            <div></div>
            <Image src="/5.jpg" alt="" width={500} height={500} />
          </div>
        </div>
      </section>

      <section className="vs-section">
        <div className="container vs-section__inner">
          <div>
            <article className="vs-section__content">
              <p className="vs-section__caption">Move fast and fix things</p>
              <h2 className="vs-section__headline">
                Co-created with the people who need it most
              </h2>
              <p className="vs-section__explanation">
                To many of us, being unable to prove who we are is an annoyance
                or frustration, but to other’s it’s life or
                livelihood-threatening.
              </p>
              <p className="vs-section__explanation">
                We’re working closely with charities and advocacy groups for
                refugees, homeless people and survivors of domestic abuse to
                make VouchSafe in a responsible way.
              </p>
            </article>
          </div>

          <div className="vs-section__image-grid">
            <Image src="/2.jpg" alt="" width={500} height={500} />
            <Image src="/1.png" alt="" width={500} height={500} />
            <Image src="/3.jpg" alt="" width={500} height={500} />
          </div>
        </div>
      </section>
    </main>

    <blockquote className="vs-testimonial">
      <div className="vs-testimonial__inner container">
        <q>This could make life so much easier for so many vulnerable people</q>
        <cite>A volunteering manager at Crisis</cite>
      </div>
    </blockquote>

    <section className="vs-partners">
      <div className="container">
        <h2>Who's using it</h2>
        <div className="vs-partners__content">
          <p>
            VouchSafe is being built and tested by a growing partnership of
            public, private and charity sector bodies.
          </p>
          <div className="vs-partners__logos">
            <Image src="/civtech.png" alt="" width={300} height={300} />
            <Image src="/scot.png" alt="" width={300} height={300} />
            <Image src="/bigissue.svg" alt="" width={300} height={300} />
          </div>{" "}
        </div>
      </div>
    </section>

    <section className="vs-coda">
      <h2>Could VouchSafe help you?</h2>
      <p>
        A no-commitment chat with the founders, and access to your own demo
        version to try out.
      </p>
      <Link className="button" href="https://cal.com/jayeh/chat">
        Book a demo
        <svg
          width="25"
          height="25"
          viewBox="0 0 468 401"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M243.764 10.4301C256.782 -2.58738 277.887 -2.58738 290.905 10.4301L457.572 177.097C470.589 190.114 470.589 211.22 457.572 224.237L290.905 390.904C277.887 403.921 256.782 403.921 243.764 390.904C230.747 377.886 230.747 356.781 243.764 343.763L353.527 234H34.0013C15.5918 234 0.667969 219.076 0.667969 200.667C0.667969 182.257 15.5918 167.334 34.0013 167.334H353.527L243.764 57.5705C230.747 44.5531 230.747 23.4476 243.764 10.4301Z"
            fill="#212121"
          />
        </svg>
      </Link>
    </section>

    <footer className="vs-footer">
      <div className="vs-footer__inner container">
        <svg
          width="1353"
          height="252"
          viewBox="0 0 1353 252"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M93.5322 248H51.1494C50.124 248 49.5544 247.43 49.4404 246.291L1.07617 5.83691C0.848307 4.92546 1.30404 4.46973 2.44336 4.46973H42.0918C43.0033 4.46973 43.5729 4.92546 43.8008 5.83691L72.5117 166.14L100.539 5.83691C100.767 4.92546 101.337 4.46973 102.248 4.46973H141.384C142.637 4.46973 143.093 4.92546 142.751 5.83691L95.2412 246.291C95.1273 247.43 94.5576 248 93.5322 248ZM206.838 251.418C194.419 251.418 182.969 248.228 172.487 241.848C162.119 235.467 153.745 226.979 147.365 216.384C141.099 205.674 137.966 193.939 137.966 181.179L138.308 70.2656C138.308 57.2773 141.441 45.5993 147.707 35.2314C153.859 24.7497 162.176 16.3757 172.658 10.1094C183.14 3.72917 194.533 0.539062 206.838 0.539062C219.598 0.539062 231.049 3.6722 241.188 9.93848C251.442 16.2048 259.646 24.6357 265.798 35.2314C272.064 45.7132 275.197 57.3913 275.197 70.2656L275.539 181.179C275.539 193.939 272.463 205.617 266.311 216.213C260.044 226.923 251.727 235.467 241.359 241.848C230.992 248.228 219.484 251.418 206.838 251.418ZM206.838 209.206C213.902 209.206 220.054 206.358 225.295 200.661C230.536 194.851 233.156 188.356 233.156 181.179L232.814 70.2656C232.814 62.5182 230.365 55.9671 225.466 50.6123C220.567 45.2575 214.357 42.5801 206.838 42.5801C199.66 42.5801 193.508 45.2005 188.381 50.4414C183.254 55.6823 180.69 62.2904 180.69 70.2656V181.179C180.69 188.812 183.254 195.42 188.381 201.003C193.508 206.472 199.66 209.206 206.838 209.206ZM366.457 251.418C354.152 251.418 342.759 248.228 332.277 241.848C321.796 235.467 313.422 226.923 307.155 216.213C301.003 205.389 297.927 193.597 297.927 180.837L298.61 5.83691C298.61 4.92546 299.066 4.46973 299.978 4.46973H339.284C340.196 4.46973 340.651 4.92546 340.651 5.83691V180.837C340.651 188.698 343.158 195.42 348.171 201.003C353.184 206.472 359.279 209.206 366.457 209.206C373.977 209.206 380.243 206.472 385.256 201.003C390.269 195.42 392.775 188.698 392.775 180.837V5.83691C392.775 4.92546 393.231 4.46973 394.143 4.46973H433.449C434.361 4.46973 434.816 4.92546 434.816 5.83691L435.5 180.837C435.5 193.711 432.424 205.56 426.271 216.384C420.005 227.093 411.688 235.638 401.32 242.019C390.952 248.285 379.331 251.418 366.457 251.418ZM527.443 251.418C514.797 251.418 503.233 248.228 492.751 241.848C482.383 235.467 474.123 226.923 467.971 216.213C461.932 205.389 458.913 193.369 458.913 180.153L459.255 70.9492C459.255 57.9609 462.217 46.2259 468.142 35.7441C474.066 25.1484 482.212 16.6605 492.58 10.2803C503.062 3.78613 514.683 0.539062 527.443 0.539062C540.432 0.539062 551.996 3.6722 562.136 9.93848C572.39 16.2048 580.536 24.6927 586.574 35.4023C592.727 45.998 595.803 57.847 595.803 70.9492V87.0137C595.803 87.9251 595.347 88.3809 594.436 88.3809H555.129C554.217 88.3809 553.762 87.9251 553.762 87.0137V70.9492C553.762 63.2018 551.255 56.5368 546.242 50.9541C541.229 45.3714 534.963 42.5801 527.443 42.5801C519.126 42.5801 512.746 45.4284 508.303 51.125C503.859 56.8216 501.638 63.4297 501.638 70.9492V180.153C501.638 188.698 504.144 195.705 509.157 201.174C514.17 206.529 520.266 209.206 527.443 209.206C534.963 209.206 541.229 206.244 546.242 200.319C551.255 194.281 553.762 187.559 553.762 180.153V163.918C553.762 163.007 554.217 162.551 555.129 162.551H594.777C595.689 162.551 596.145 163.007 596.145 163.918V180.153C596.145 193.256 593.068 205.218 586.916 216.042C580.65 226.752 572.39 235.354 562.136 241.848C551.882 248.228 540.318 251.418 527.443 251.418ZM662.624 248H622.976C622.064 248 621.608 247.43 621.608 246.291L621.95 5.83691C621.95 4.92546 622.52 4.46973 623.659 4.46973H662.624C663.763 4.46973 664.333 4.92546 664.333 5.83691L663.991 101.027H716.457V5.83691C716.457 4.92546 716.913 4.46973 717.824 4.46973H756.789C757.928 4.46973 758.498 4.92546 758.498 5.83691L759.182 246.291C759.182 247.43 758.612 248 757.473 248H718.166C717.027 248 716.457 247.43 716.457 246.291V143.41H663.991V246.291C663.991 247.43 663.535 248 662.624 248ZM847.194 251.418C834.776 251.418 823.326 248.228 812.844 241.848C802.476 235.467 794.159 226.979 787.893 216.384C781.74 205.674 778.664 193.939 778.664 181.179V165.114C778.664 163.861 779.234 163.234 780.373 163.234H819.68C820.591 163.234 821.047 163.861 821.047 165.114V181.179C821.047 188.812 823.61 195.42 828.737 201.003C833.864 206.472 840.017 209.206 847.194 209.206C854.486 209.206 860.695 206.415 865.822 200.832C870.949 195.135 873.513 188.584 873.513 181.179C873.513 172.634 867.93 165.171 856.765 158.791C854.942 157.652 852.549 156.285 849.587 154.689C846.739 152.98 843.321 151.044 839.333 148.879C835.345 146.714 831.472 144.606 827.712 142.556C823.952 140.391 820.306 138.34 816.774 136.403C804.014 128.884 794.501 119.484 788.234 108.205C782.082 96.8118 779.006 84.0514 779.006 69.9238C779.006 56.9355 782.196 45.2005 788.576 34.7188C794.956 24.3509 803.273 16.1478 813.527 10.1094C823.895 3.95703 835.118 0.880859 847.194 0.880859C859.613 0.880859 871.006 3.95703 881.374 10.1094C891.742 16.3757 900.002 24.6927 906.154 35.0605C912.421 45.4284 915.554 57.0495 915.554 69.9238V98.6348C915.554 99.5462 915.098 100.002 914.187 100.002H874.88C873.968 100.002 873.513 99.5462 873.513 98.6348L873.171 69.9238C873.171 61.7207 870.607 55.0557 865.48 49.9287C860.354 44.8018 854.258 42.2383 847.194 42.2383C840.017 42.2383 833.864 44.9727 828.737 50.4414C823.61 55.9102 821.047 62.4043 821.047 69.9238C821.047 77.5573 822.642 83.9375 825.832 89.0645C829.136 94.1914 835.118 99.0905 843.776 103.762C844.688 104.217 846.796 105.357 850.1 107.18C853.404 109.003 857.049 111.053 861.037 113.332C865.139 115.497 868.841 117.491 872.146 119.313C875.45 121.022 877.443 122.048 878.127 122.39C889.748 128.884 898.92 136.859 905.642 146.315C912.478 155.772 915.896 167.393 915.896 181.179C915.896 194.509 912.819 206.472 906.667 217.067C900.401 227.663 892.084 236.037 881.716 242.189C871.348 248.342 859.841 251.418 847.194 251.418ZM928.371 246.291L971.779 5.83691C972.007 4.92546 972.577 4.46973 973.488 4.46973H1024.25C1025.16 4.46973 1025.73 4.92546 1025.95 5.83691L1067.65 246.291C1067.77 247.43 1067.31 248 1066.29 248H1027.49C1026.35 248 1025.73 247.43 1025.61 246.291L1021.85 220.656H974.172L970.412 246.291C970.298 247.43 969.729 248 968.703 248H929.738C928.827 248 928.371 247.43 928.371 246.291ZM996.901 84.9629L981.179 183.229H1014.85L1000.49 84.9629L998.439 71.9746L996.901 84.9629ZM1130.54 248H1091.24C1090.1 248 1089.53 247.43 1089.53 246.291L1090.21 5.83691C1090.21 4.92546 1090.67 4.46973 1091.58 4.46973H1203.69C1204.83 4.46973 1205.4 4.92546 1205.4 5.83691V45.3145C1205.4 46.2259 1204.94 46.6816 1204.03 46.6816H1132.25V101.027H1204.03C1204.94 101.027 1205.4 101.597 1205.4 102.736L1205.74 142.385C1205.74 143.296 1205.17 143.752 1204.03 143.752H1132.25V246.291C1132.25 247.43 1131.68 248 1130.54 248ZM1351.34 248H1238.21C1237.3 248 1236.84 247.43 1236.84 246.291L1237.18 5.83691C1237.18 4.92546 1237.64 4.46973 1238.55 4.46973H1351C1351.91 4.46973 1352.37 5.03939 1352.37 6.17871V45.3145C1352.37 46.2259 1351.91 46.6816 1351 46.6816H1279.23V101.369H1351C1351.91 101.369 1352.37 101.825 1352.37 102.736L1352.71 142.385C1352.71 143.296 1352.26 143.752 1351.34 143.752H1279.23V204.934H1351.34C1352.26 204.934 1352.71 205.503 1352.71 206.643V246.633C1352.71 247.544 1352.26 248 1351.34 248Z"
            fill="#212121"
          />
        </svg>

        <p>Digital identity for everyone</p>

        <p>
          Made by <Link href="https://interrobang.coop">Interrobang</Link>,
          registered company 14466175 in England and Wales.
        </p>
      </div>
    </footer>
  </>
)
export default IndexPage
