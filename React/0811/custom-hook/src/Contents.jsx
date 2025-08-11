import useLang from "./Hook/UseLang";

function Header() {
  const { title } = useLang().currentLanguage;
  return <h2>{title}</h2>;
}

function Content() {
  const { greeting, description } = useLang().currentLanguage;
  return (
    <div>
      <p>{greeting}</p>
      <p>{description}</p>
    </div>
  );
}

export { Header, Content };
