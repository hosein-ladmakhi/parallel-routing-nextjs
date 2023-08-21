import Link from "next/link";

const Detail = ({ children }) => {
  return (
    <div>
      <h1>social media</h1>
      <div>
        <Link href="/social?socialType=telegram">Telegram</Link>
        <Link href="/social?socialType=instagram">Instagram</Link>
      </div>
      {children}
    </div>
  );
};

export default Detail;
