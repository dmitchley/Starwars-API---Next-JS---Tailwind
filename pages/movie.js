import fetch from "isomorphic-unfetch";
import Head from "next/head";
import Header from "../components/Header";
// layout component
import Layout from "../components/Layout";

const Post = (props) => (
  <>
    <div className="py-12 bg-black">
      <Head>
        <title>{props.show.title}</title>
      </Head>

      <div className="text-center">
        <Header />
      </div>
      {/* layout component */}
      <Layout>
        {/* props from the api called used below.  */}
        <div className="bg-amber-500 cursor-pointer text-white p-4 rounded-md text-center shadow-xl">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
              <h2 className="text-lg font-semibold text-blue-900">
                {props.show.release_date}
              </h2>
              <h2 className="text-2xl font-bold text-white-800">
                {props.show.director}
              </h2>
              <p className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
                {props.show.title}
              </p>
              <p className="mt-4 max-w-2xl text-s text-gray-100 lg:mx-auto">
                {props.show.opening_crawl}
              </p>
            </div>
          </div>
        </div>
      </Layout>
    </div>
    <div className="py-12 bg-black">
      <h2 className="text-center mt-2 text-yellow-400 text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl">
        &copy; StarWars 2022
      </h2>
    </div>
  </>
);

Post.getInitialProps = async function (context) {
  // the { id } holds the index of the correct movie and is passed to the return below
  const { id } = context.query;
  const res = await fetch(`https://swapi.dev/api/films/`);
  const show = await res.json();

  //[id] gets the correct movie

  return { show: show.results[id] };
};

export default Post;
