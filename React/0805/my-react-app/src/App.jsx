// 3. tailwindcss 적용
// 제가 자주 사용합니다. 개인적 호불호가 크기 때문에 회사에서 사용할 때는 팀원들과 상의하세요.
// 지금은 index.html에 tailwindcss를 CDN으로 추가했습니다.
// <script src="https://cdn.tailwindcss.com"></script>

function Card({ children }) {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
      {children}
    </div>
  );
}

function CardImage({ src, href }) {
  return (
    <a href={href}>
      <img className="rounded-t-lg" src={src} alt="" />
    </a>
  );
}

function CardBody({ children }) {
  return <div className="p-5">{children}</div>;
}

function CardTitle({ children, href }) {
  return (
    <a href={href}>
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{children}</h5>
    </a>
  );
}

function CardDescription({ children }) {
  return <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{children}</p>;
}

function CardButton({ children, href }) {
  return (
    <a
      href={href}
      className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      {children}
      <svg
        className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 14 10"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M1 5h12m0 0L9 1m4 4L9 9"
        />
      </svg>
    </a>
  );
}

Card.Image = CardImage;
Card.Body = CardBody;
Card.Title = CardTitle;
Card.Description = CardDescription;
Card.button = CardButton;

function App() {
  return (
    <Card>
      <Card.Image src="https://cataas.com/cat?width=400&height=200" href="#" />
      <Card.Body>
        <Card.Title href="#">우리 집 고양이(아님)</Card.Title>
        <Card.Description>귀여운 고양이 사진입니당.</Card.Description>
        <Card.button href="#">더 보기</Card.button>
      </Card.Body>
    </Card>
  );
}

export default App;
