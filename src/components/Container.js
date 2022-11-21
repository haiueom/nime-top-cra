export default function Container({ children }) {
  return (
    <div id="container" className="flex min-h-screen flex-col">
      {children}
    </div>
  );
}
