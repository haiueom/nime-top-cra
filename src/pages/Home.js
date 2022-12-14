export default function Home() {
  return (
    <div id="home" className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 lg:flex lg:items-center">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            List Top Anime & Manga
          </h1>

          <p className="mt-4 sm:text-xl sm:leading-relaxed">
            List based on MyAnimeList.net
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              className="block w-full rounded bg-red-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
              href="/anime"
            >
              Top Animes
            </a>

            <a
              className="block w-full rounded bg-red-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
              href="/manga"
            >
              Top Mangas
            </a>

            <a
              className="block w-full rounded bg-red-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
              href="/character"
            >
              Top Characters
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
