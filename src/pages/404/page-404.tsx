import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../hooks';
import { setError } from '../../store/action';
import { errorEmpty } from '../../const';
import { Helmet } from 'react-helmet-async';
import Header from '../../components/header/header';

const ClearErrorStatus = () => {
  const dispatch = useAppDispatch();
  dispatch(setError(errorEmpty));
};

export default function Page404() {
  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>6 cities - Page 404</title>
      </Helmet>
      <Header />
      <Link to='/' onClick={ClearErrorStatus}>
        <div style={{ textAlign: 'center' }}>
          <img src="img/404.jpg" />
          <p>Вернуться на главную страницу!</p>
        </div>
      </Link>
    </div>
  );
}
