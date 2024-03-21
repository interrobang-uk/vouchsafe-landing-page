import Image from "next/image"
import Link from "next/link"
import Layout from "../components/Layout"

const IndexPage = () => (
  <Layout>
    <section className="vs-hero">
      <h1>We're making ID work for everyone</h1>
      <Link href="https://www.youtube.com/watch?v=o8ZNH_sp7xQ">
        Watch the video{" "}
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
      <section className="vs-section" id="problem">
        <div className="container vs-section__inner">
          <div>
            <article className="vs-section__content">
              <p className="vs-section__caption">The problem</p>
              <h2 className="vs-section__headline">
                Over 11 million people in the UK don’t have ID
              </h2>
              <p className="vs-section__explanation">
                Without a document like a passport or driving license, you’ll
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
            <Image src="/9.jpg" alt="" width={500} height={500} />
            <Image src="/6.jpg" alt="" width={500} height={500} />
            <Image src="/8.jpg" alt="" width={500} height={500} />
          </div>
        </div>
      </section>

      <section
        className="vs-section vs-section--reversed vs-section--dark"
        id="solution"
      >
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
            <Image src="/7.png" alt="" width={500} height={500} />
            <Image src="/5.jpg" alt="" width={500} height={500} />
          </div>
        </div>
      </section>

      <section className="vs-section" id="approach">
        <div className="container vs-section__inner">
          <div>
            <article className="vs-section__content">
              <p className="vs-section__caption">Move fast and fix things</p>
              <h2 className="vs-section__headline">
                Co-created with the people who need it most
              </h2>
              <p className="vs-section__explanation">
                To many of us, being unable to prove who we are is an annoyance
                or frustration, but to others it’s life or
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
            <Image src="/bgv1.png" alt="" width={300} height={300} />
            <Image src="/bigissue.svg" alt="" width={300} height={300} />
          </div>{" "}
        </div>
      </div>
    </section>
  </Layout>
)
export default IndexPage
