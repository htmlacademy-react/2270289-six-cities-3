import type { ListCardProps, ListPreviewCardProps } from '../components/card-offer/card-offer.tsx';

const mockCard: ListCardProps = {
  listCards: [
    {
      id: '6af6f711-c28d-4121-82cd-e0b462a27f00',
      title: 'Beautiful & luxurious studio at great location',
      type: 'apartment',
      price: 120,
      city: {
        name: 'Amsterdam',
        location: {
          latitude: 52.35514938496378,
          longitude: 4.673877537499948,
          zoom: 8
        }
      },
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 8
      },
      isFavorite: false,
      isPremium: false,
      rating: 4,
      description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
      bedrooms: 3,
      goods: [
        'Heating'
      ],
      host: {
        name: 'Oliver Conner',
        avatarUrl: 'https://url-to-image/image.png',
        isPro: false
      },
      images: [
        'https://url-to-image/image.png'
      ],
      maxAdults: 4
    }
  ]
};

const mockPreviewCard: ListPreviewCardProps = {
  listPreviewCards: [
    {
      id: '445f03aa-9650-4b58-9304-8f0e453a4f41',
      title: 'Penthouse, 4-5 rooms + 5 balconies',
      type: 'room',
      price: 136,
      previewImage: 'https://15.design.htmlacademy.pro/static/hotel/7.jpg',
      city: {
        name: 'Paris',
        location: {
          latitude: 48.85661,
          longitude: 2.351499,
          zoom: 13
        }
      },
      location: {
        latitude: 48.868610000000004,
        longitude: 2.342499,
        zoom: 16
      },
      isFavorite: true,
      isPremium: false,
      rating: 4.2
    },
    {
      id: 'b14a184b-e9de-4823-b72d-bc3449f8bda5',
      title: 'House in countryside',
      type: 'house',
      price: 853,
      previewImage: 'https://15.design.htmlacademy.pro/static/hotel/18.jpg',
      city: {
        name: 'Paris',
        location: {
          latitude: 48.85661,
          longitude: 2.351499,
          zoom: 13
        }
      },
      location: {
        latitude: 48.858610000000006,
        longitude: 2.330499,
        zoom: 16
      },
      isFavorite: true,
      isPremium: true,
      rating: 2.1
    },
    {
      id: '8021e847-18ac-46a2-b02d-54ca1899ba6c',
      title: 'Amazing and Extremely Central Flat',
      type: 'room',
      price: 282,
      previewImage: 'https://15.design.htmlacademy.pro/static/hotel/8.jpg',
      city: {
        name: 'Paris',
        location: {
          latitude: 48.85661,
          longitude: 2.351499,
          zoom: 13
        }
      },
      location: {
        latitude: 48.834610000000005,
        longitude: 2.335499,
        zoom: 16
      },
      isFavorite: false,
      isPremium: false,
      rating: 1.4
    },
    {
      id: '9fd7188b-8426-4414-ace5-fdfc57ffaebc',
      title: 'Wood and stone place',
      type: 'house',
      price: 873,
      previewImage: 'https://15.design.htmlacademy.pro/static/hotel/4.jpg',
      city: {
        name: 'Paris',
        location: {
          latitude: 48.85661,
          longitude: 2.351499,
          zoom: 13
        }
      },
      location: {
        latitude: 48.85761,
        longitude: 2.358499,
        zoom: 16
      },
      isFavorite: false,
      isPremium: true,
      rating: 4.1
    },
    {
      id: '81283e09-b775-442e-befb-a1486a0ecf86',
      title: 'The Joshua Tree House',
      type: 'house',
      price: 887,
      previewImage: 'https://15.design.htmlacademy.pro/static/hotel/8.jpg',
      city: {
        name: 'Paris',
        location: {
          latitude: 48.85661,
          longitude: 2.351499,
          zoom: 13
        }
      },
      location: {
        latitude: 48.87561,
        longitude: 2.375499,
        zoom: 16
      },
      isFavorite: false,
      isPremium: false,
      rating: 2.7
    },
    {
      id: '1e381222-c598-4b75-ac63-ae4cb71858ea',
      title: 'Nice, cozy, warm big bed apartment',
      type: 'hotel',
      price: 354,
      previewImage: 'https://15.design.htmlacademy.pro/static/hotel/2.jpg',
      city: {
        name: 'Amsterdam',
        location: {
          latitude: 48.85661,
          longitude: 2.351499,
          zoom: 13
        }
      },
      location: {
        latitude: 48.87961000000001,
        longitude: 2.353499,
        zoom: 16
      },
      isFavorite: true,
      isPremium: false,
      rating: 4.6
    },
    {
      id: 'de218d9c-3650-4997-b50a-c015a745e1f1',
      title: 'Loft Studio in the Central Area',
      type: 'apartment',
      price: 229,
      previewImage: 'https://15.design.htmlacademy.pro/static/hotel/10.jpg',
      city: {
        name: 'Paris',
        location: {
          latitude: 48.85661,
          longitude: 2.351499,
          zoom: 13
        }
      },
      location: {
        latitude: 48.834610000000005,
        longitude: 2.364499,
        zoom: 16
      },
      isFavorite: false,
      isPremium: false,
      rating: 1.8
    },
    {
      id: '2b06d1ee-4b54-49f2-bdb2-33f13f14ec73',
      title: 'The Pondhouse - A Magical Place',
      type: 'room',
      price: 283,
      previewImage: 'https://15.design.htmlacademy.pro/static/hotel/1.jpg',
      city: {
        name: 'Paris',
        location: {
          latitude: 48.85661,
          longitude: 2.351499,
          zoom: 13
        }
      },
      location: {
        latitude: 48.837610000000005,
        longitude: 2.3454990000000002,
        zoom: 16
      },
      isFavorite: false,
      isPremium: false,
      rating: 2.7
    },
  ]
};

export { mockCard, mockPreviewCard };
