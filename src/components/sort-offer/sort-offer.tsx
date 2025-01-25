import { useBoolean } from '../../hooks/use-boolean';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { SORT_OPTIONS } from '../../const';
import { setCurrentSort } from '../../store/action';
import classNames from 'classnames';

export default function SortOffer(): JSX.Element {
  const { isOn, toggle } = useBoolean(false);
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
          { 'places__options--opened': isOn })}
      >
        {SORT_OPTIONS.map((item) => (
          <li className={classNames('places__option', { 'places__option--active': currentSort === item })}
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
