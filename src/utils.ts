import { typeCard } from './const';
import type { TOfferPreview } from './types';
import { SORT_OPTIONS, SortOption } from './const';

export const TYPE_FORMAT_DATE = {
  monthStringYYYY: 'MonthString_YYYY',
};

function getMonthStringFromDate(date: Date) {
  switch (date.getMonth()) {
    case 1: return 'January';
      break;
    case 2: return 'February';
      break;
    case 3: return 'March';
      break;
    case 4: return 'April';
      break;
    case 5: return 'May';
      break;
    case 6: return 'June';
      break;
    case 7: return 'July';
      break;
    case 8: return 'August';
      break;
    case 9: return 'September';
      break;
    case 10: return 'October';
      break;
    case 11: return 'November';
      break;
    case 12: return 'December';
      break;
  }
}

function dateToTypeFormat(date: Date, type: string) {
  switch (type) {
    case TYPE_FORMAT_DATE.monthStringYYYY: return `${getMonthStringFromDate(date)} ${date.getFullYear()}`;
  }
}

function getClassCardByType(type: string) {
  switch (type) {
    case typeCard.favorite: return 'favorites__card place-card';
      break;
    case typeCard.near: return 'near-places__card place-card';
      break;
    default: return 'cities__card place-card';
      break;
  }
}

const getSortedListOffer = (currentSort: string, listOffer: TOfferPreview[]) => {
  const sortedListOffer = [...listOffer];

  switch (currentSort) {
    case (SORT_OPTIONS[SortOption.Popular]): return [...listOffer];
      break;
    case (SORT_OPTIONS[SortOption.PriceHighToLow]): sortedListOffer.sort((a, b) => b.price - a.price);
      break;
    case (SORT_OPTIONS[SortOption.PriceLowToHigh]): sortedListOffer.sort((a, b) => a.price - b.price);
      break;
    case (SORT_OPTIONS[SortOption.TopRatedFirst]): sortedListOffer.sort((a, b) => b.rating - a.rating);
      break;
  }
  return sortedListOffer;
};

export { dateToTypeFormat, getClassCardByType, getSortedListOffer};

export const convertRatingToStyleWidthPercent = (rating : number) => {
  const ratingToPercent = (rating) ? (rating * 100 / 5).toFixed(0) : 80;
  return {
    width: `${ratingToPercent}%`,
  };
};
