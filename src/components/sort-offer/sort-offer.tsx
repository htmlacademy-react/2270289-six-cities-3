import {useBoolean} from '../../hooks/use-boolean';
import {useAppDispatch,useAppSelector} from '../../hooks';
import {SortOption,SORT_OPTIONS} from '../../const';
import {setCurrentSort} from '../../store/action';
import classNames from 'classnames';

export default function SortOffer(): JSX.Element {
  const {isOn, off, toggle} = useBoolean(false);
  const dispatch = useAppDispatch();
  const currentSort = useAppSelector((state) => state.currentSort);

  return (
    <form className="places__sorting" action="#" method="get" onClick={toggle}>
      <span className="places__sorting-caption">Sort by </span>
      <span className="places__sorting-type" tabIndex={0}>
        {currentSort}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul
        className={classNames('places__options', 'places__options--custom',
        {'places__options--opened':isOn})}
      >
        {SORT_OPTIONS.map((item) => (
          <li className = {classNames('places__option',{'places__option--active': currentSort===item})}
            tabIndex={0} key={item}
            onClick={() => {
            dispatch(setCurrentSort(item))}}
          >{item}</li>
        ))}
      </ul>
    </form>
  )
}

// places__options--opened
/*
          <li className="places__option" tabIndex={0}>Popular</li>
          <li className="places__option places__option--active" tabIndex={0}>Price: low to high</li>
          <li className="places__option" tabIndex={0}>Price: high to low</li>
          <li className="places__option" tabIndex={0}>Top rated first</li>
*/
