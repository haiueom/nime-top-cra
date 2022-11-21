function Navbar() {
    return (
        <div id="navbar-atas" className="w-full mb-auto shadow-xl">
            <nav
                aria-label="Site Nav"
                className="mx-auto flex max-w-3xl items-center justify-between p-4"
            >
                <a
                    href="/"
                    title="Nime Top"
                    className="text-xl font-semibold rounded-lg px-3 py-2 bg-gray-200"
                >
                    <span className="sr-only">Genshin DB</span>
                    Nime Top
                </a>

                <ul className="flex items-center gap-2 text-sm font-medium text-gray-500">
                    <li className="hidden sm:block">
                        <a
                            className="rounded-lg px-3 py-2 hover:bg-gray-200"
                            href="/"
                            title="Home"
                        >
                            Home
                        </a>
                    </li>

                    <li>
                        <a
                            className="inline-flex items-center rounded-lg px-3 py-2 hover:bg-gray-200"
                            href="/"
                            target="_blank"
                            title="Give star on GitHub"
                        >
                            Github
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                className="ml-1.5 h-4 w-4"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                ></path>
                            </svg>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;
