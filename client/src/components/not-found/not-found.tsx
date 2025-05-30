import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div>
      <h1>404</h1>
      <h2>Страница не найдена</h2>
      <p>Запрашиваемая страница не существует или была перемещена</p>
      <Link to="/">Вернуться на главную</Link>
    </div>
  );
}

export { PageNotFound };
