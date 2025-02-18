import {Link} from 'react-router-dom';
import { useAppDispatch } from '../../hooks';
import { setError } from '../../store/action';
import { errorEmpty } from '../../const';

const clearErrorStatus = () => {
  const dispatch = useAppDispatch();
  dispatch(setError(errorEmpty));
}

export default function Page404 () {
  return (
    <Link to='/' onClick={clearErrorStatus}>
      <div style={{textAlign : 'center'}}>
        <img src="img/404.jpg"/>
        <p>Вернуться на главную страницу!</p>
      </div>
    </Link>
  );
}
