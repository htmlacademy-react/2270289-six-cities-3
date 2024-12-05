import React from 'react';
import {Link} from 'react-router-dom';


export default function Page404 () {
  return (
    <React.Fragment>
      <Link to='/'>
        <div style={{textAlign : 'center'}}>
          <img src="img/404.jpg"/>
          <p>Вернуться на главную страницу!</p>
        </div>
      </Link>
    </React.Fragment>
  )
}
