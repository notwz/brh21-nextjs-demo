import Link from "next/link";

const Article = ({ title, author, preview }) => (
  <div>
    <h3>{title}</h3>
    <p>By {author}</p>
  </div>
);

export default () => (
  <main>
    <h1>Articles</h1>
    <Article title="Hello BIGRED//HACKS!" author="@devanflores" />
    <Article title="Workshops are cool" author="@devanflores" />
    <Link href="/shopping">
      <a>Let’s go shopping</a>
    </Link>
  </main>
);
