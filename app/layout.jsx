import Navbar from "./components/Navbar";

export const metadata = {
  title: "NextJS Application",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
