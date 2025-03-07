import { useBoolean } from '../../hooks/use-boolean';
import { useAppDispatch } from '../../hooks';
import { SORT_OPTIONS } from '../../const';
import { setCurrentSort } from '../../store/action';
import classNames from 'classnames';
import { currentSort } from '../../store/all-offers/all-offers.selectors';
import { useSelector } from 'react-redux';

export default function SortOffer(): JSX.Element {
  const { isOn, toggle } = useBoolean(false);
  const dispatch = useAppDispatch();
  const activeSort = useSelector(currentSort);

  return (
    <form className="places__sorting" action="#" method="get" onClick={toggle}>
      <span className="places__sorting-caption">Sort by </span>
      <span className="places__sorting-type" tabIndex={0}>
        {activeSort}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul
        className={classNames('places__options', 'places__options--custom',
          { 'places__options--opened': isOn })}
      >
        {SORT_OPTIONS.map((item) => (
          <li className={classNames('places__option', { 'places__option--active': activeSort === item })}
            tabIndex={0} key={item}
            onClick={() => {
              dispatch(setCurrentSort(item));
            }}
          >{item}
          </li>
        ))}
      </ul>
    </form>
  );
}
