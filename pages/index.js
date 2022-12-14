import Head from "next/head";

import Link from "next/link";
import fetch from "isomorphic-unfetch";
// layout component
import Layout from "../components/Layout";
import Header from "../components/Header";

export default function Home(props) {
  return (
    <>
      <div className="py-12 bg-black">
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className="py-12 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
              <Header />
            </div>
            {/* layout component */}
            <Layout>
              <div className="mt-10 space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                {/* props mapped below here */}
                {props.films.results.map((film, index) => (
                  <>
                    <div className="bg-amber-500 cursor-pointer text-white p-4 rounded-md text-center shadow-xl">
                      <span>
                        <div className="film">
                          {/* link below routes to /page/episode_id and the index of the movie is passed though href so it can be used to fetch the correct
                          movie in the movie.js page */}
                          <Link
                            as={`/page/${film.episode_id}`}
                            href={`/movie?id=${index}`}
                          >
                            <h2 className="mt-2 font-bold">{film.title}</h2>
                          </Link>
                        </div>
                      </span>
                    </div>
                  </>
                ))}
              </div>
            </Layout>
          </div>
        </div>
      </div>
      <div className="py-12 bg-black">
        <h2 className="text-center mt-2 text-yellow-400 text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl">
          &copy; StarWars 2022
        </h2>
      </div>
    </>
  );
}

// getstaticprops here to get the array of films endpoint and pass the props though to the home page.

export async function getStaticProps() {
  const films = await fetch("https://swapi.dev/api/films").then((res) =>
    res.json()
  );

  return {
    props: {
      films,
    },
  };
}
