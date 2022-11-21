export default function Footer() {
  return (
    <footer aria-label="Site Footer" className="mt-auto bg-gray-100">
      <div className="mx-auto max-w-5xl px-4 py-6 sm:px-6 lg:px-8">
        <p className="text-md text-center text-gray-500">
          Made with ☕ by{" "}
          <a
            className="ml-2 rounded-lg bg-gray-200 px-3 py-2 font-semibold text-black hover:underline"
            href="/teams"
          >
            Team Debugger 😎
          </a>
        </p>
      </div>
    </footer>
  );
}
