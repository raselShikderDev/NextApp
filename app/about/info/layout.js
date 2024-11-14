// app/about/info/layout.js

export const metadata = {
  title: "About Info",
  description:"Welcome to Info page"
}


export default function InfoLayout({ children }) {
  
  return (
    <div className="m-5">
      <nav>Info | Contact</nav>
      {children}
      <footer>Info Footer</footer>
    </div>
  );
}
