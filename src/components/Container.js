export default function Container({ children }) {
    return <div id="container" className="min-h-screen flex flex-col">{children}</div>;
}