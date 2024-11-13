// app/about/info/layout.js
export default function InfoLayout({ children }) {
  return (
    <div className="m-5">
      <nav>Info | Contact</nav>
      {children}
      <footer>Info Footer</footer>
    </div>
  );
}
