const mockOffers = {
  listOffers : [
  {
    "id": "bdc97b5e-21fc-4032-b7ca-b62076491d61",
    "title": "The Pondhouse - A Magical Place",
    "type": "apartment",
    "price": 245,
    "previewImage": "https://15.design.htmlacademy.pro/static/hotel/4.jpg",
    "city": {
      "name": "Paris",
      "location": {
        "latitude": 48.85661,
        "longitude": 2.351499,
        "zoom": 13
      }
    },
    "location": {
      "latitude": 48.868610000000004,
      "longitude": 2.342499,
      "zoom": 16
    },
    "isFavorite": false,
    "isPremium": false,
    "rating": 3.4
  },
  {
    "id": "ce67fc30-9633-47aa-91c9-cc831b40dea7",
    "title": "Beautiful & luxurious apartment at great location",
    "type": "hotel",
    "price": 308,
    "previewImage": "https://15.design.htmlacademy.pro/static/hotel/1.jpg",
    "city": {
      "name": "Paris",
      "location": {
        "latitude": 48.85661,
        "longitude": 2.351499,
        "zoom": 13
      }
    },
    "location": {
      "latitude": 48.858610000000006,
      "longitude": 2.330499,
      "zoom": 16
    },
    "isFavorite": false,
    "isPremium": true,
    "rating": 4.2
  },
  {
    "id": "37711101-0001-41a8-83df-eaf53a8c5be7",
    "title": "Amazing and Extremely Central Flat",
    "type": "house",
    "price": 581,
    "previewImage": "https://15.design.htmlacademy.pro/static/hotel/12.jpg",
    "city": {
      "name": "Paris",
      "location": {
        "latitude": 48.85661,
        "longitude": 2.351499,
        "zoom": 13
      }
    },
    "location": {
      "latitude": 48.834610000000005,
      "longitude": 2.335499,
      "zoom": 16
    },
    "isFavorite": false,
    "isPremium": true,
    "rating": 1.2
  },
  {
    "id": "69b01d4c-6efd-4a20-9683-1c40bba0383c",
    "title": "Tile House",
    "type": "apartment",
    "price": 375,
    "previewImage": "https://15.design.htmlacademy.pro/static/hotel/2.jpg",
    "city": {
      "name": "Paris",
      "location": {
        "latitude": 48.85661,
        "longitude": 2.351499,
        "zoom": 13
      }
    },
    "location": {
      "latitude": 48.85761,
      "longitude": 2.358499,
      "zoom": 16
    },
    "isFavorite": false,
    "isPremium": true,
    "rating": 2.1
  },
  {
    "id": "17bb7c10-01b3-44f2-b734-1bf6eed4e3a1",
    "title": "The Pondhouse - A Magical Place",
    "type": "house",
    "price": 298,
    "previewImage": "https://15.design.htmlacademy.pro/static/hotel/8.jpg",
    "city": {
      "name": "Paris",
      "location": {
        "latitude": 48.85661,
        "longitude": 2.351499,
        "zoom": 13
      }
    },
    "location": {
      "latitude": 48.87561,
      "longitude": 2.375499,
      "zoom": 16
    },
    "isFavorite": false,
    "isPremium": true,
    "rating": 2.5
  },
  {
    "id": "e01a56e9-383c-4bd1-8736-7158088f2f54",
    "title": "The house among olive ",
    "type": "hotel",
    "price": 198,
    "previewImage": "https://15.design.htmlacademy.pro/static/hotel/19.jpg",
    "city": {
      "name": "Paris",
      "location": {
        "latitude": 48.85661,
        "longitude": 2.351499,
        "zoom": 13
      }
    },
    "location": {
      "latitude": 48.87961000000001,
      "longitude": 2.353499,
      "zoom": 16
    },
    "isFavorite": false,
    "isPremium": false,
    "rating": 3
  },
  {
    "id": "05f35d73-181e-4850-a746-6cba6c0d3b9c",
    "title": "Canal View Prinsengracht",
    "type": "house",
    "price": 927,
    "previewImage": "https://15.design.htmlacademy.pro/static/hotel/1.jpg",
    "city": {
      "name": "Paris",
      "location": {
        "latitude": 48.85661,
        "longitude": 2.351499,
        "zoom": 13
      }
    },
    "location": {
      "latitude": 48.834610000000005,
      "longitude": 2.364499,
      "zoom": 16
    },
    "isFavorite": false,
    "isPremium": false,
    "rating": 2.4
  },
  {
    "id": "cc78002f-86b6-42e5-9313-cf9e6c001424",
    "title": "Beautiful & luxurious apartment at great location",
    "type": "house",
    "price": 145,
    "previewImage": "https://15.design.htmlacademy.pro/static/hotel/7.jpg",
    "city": {
      "name": "Paris",
      "location": {
        "latitude": 48.85661,
        "longitude": 2.351499,
        "zoom": 13
      }
    },
    "location": {
      "latitude": 48.837610000000005,
      "longitude": 2.3454990000000002,
      "zoom": 16
    },
    "isFavorite": false,
    "isPremium": true,
    "rating": 3.9
  },
  {
    "id": "f12ea2cb-4ecf-47a0-9da0-2d3d90b11792",
    "title": "Waterfront with extraordinary view",
    "type": "room",
    "price": 226,
    "previewImage": "https://15.design.htmlacademy.pro/static/hotel/15.jpg",
    "city": {
      "name": "Paris",
      "location": {
        "latitude": 48.85661,
        "longitude": 2.351499,
        "zoom": 13
      }
    },
    "location": {
      "latitude": 48.84761,
      "longitude": 2.356499,
      "zoom": 16
    },
    "isFavorite": false,
    "isPremium": false,
    "rating": 2.6
  },
  {
    "id": "f7fa89ce-5954-45a4-baa0-439c6854dd9b",
    "title": "Amazing and Extremely Central Flat",
    "type": "house",
    "price": 620,
    "previewImage": "https://15.design.htmlacademy.pro/static/hotel/8.jpg",
    "city": {
      "name": "Paris",
      "location": {
        "latitude": 48.85661,
        "longitude": 2.351499,
        "zoom": 13
      }
    },
    "location": {
      "latitude": 48.862610000000004,
      "longitude": 2.369499,
      "zoom": 16
    },
    "isFavorite": false,
    "isPremium": true,
    "rating": 2.2
  },
  {
    "id": "baf013b2-af86-40c6-9b8a-16df20cd1241",
    "title": "The Joshua Tree House",
    "type": "house",
    "price": 388,
    "previewImage": "https://15.design.htmlacademy.pro/static/hotel/2.jpg",
    "city": {
      "name": "Paris",
      "location": {
        "latitude": 48.85661,
        "longitude": 2.351499,
        "zoom": 13
      }
    },
    "location": {
      "latitude": 48.83861,
      "longitude": 2.350499,
      "zoom": 16
    },
    "isFavorite": false,
    "isPremium": true,
    "rating": 3.1
  },
  {
    "id": "c1ad45fb-d1ca-4698-9b01-465bdc9728e6",
    "title": "Perfectly located Castro",
    "type": "house",
    "price": 300,
    "previewImage": "https://15.design.htmlacademy.pro/static/hotel/11.jpg",
    "city": {
      "name": "Paris",
      "location": {
        "latitude": 48.85661,
        "longitude": 2.351499,
        "zoom": 13
      }
    },
    "location": {
      "latitude": 48.861610000000006,
      "longitude": 2.340499,
      "zoom": 16
    },
    "isFavorite": false,
    "isPremium": false,
    "rating": 4.6
  },
  {
    "id": "992dfb28-1c70-4965-b8a2-62333c9f1393",
    "title": "The Pondhouse - A Magical Place",
    "type": "house",
    "price": 704,
    "previewImage": "https://15.design.htmlacademy.pro/static/hotel/11.jpg",
    "city": {
      "name": "Paris",
      "location": {
        "latitude": 48.85661,
        "longitude": 2.351499,
        "zoom": 13
      }
    },
    "location": {
      "latitude": 48.87861,
      "longitude": 2.357499,
      "zoom": 16
    },
    "isFavorite": false,
    "isPremium": false,
    "rating": 3.3
  },
  {
    "id": "04c2d28c-1d48-4f52-a3f3-5feaf05c82df",
    "title": "Canal View Prinsengracht",
    "type": "hotel",
    "price": 204,
    "previewImage": "https://15.design.htmlacademy.pro/static/hotel/10.jpg",
    "city": {
      "name": "Paris",
      "location": {
        "latitude": 48.85661,
        "longitude": 2.351499,
        "zoom": 13
      }
    },
    "location": {
      "latitude": 48.877610000000004,
      "longitude": 2.333499,
      "zoom": 16
    },
    "isFavorite": false,
    "isPremium": false,
    "rating": 3.3
  },
  {
    "id": "7346e904-0285-45a0-9d76-59ec1b6493e4",
    "title": "Nice, cozy, warm big bed apartment",
    "type": "room",
    "price": 291,
    "previewImage": "https://15.design.htmlacademy.pro/static/hotel/16.jpg",
    "city": {
      "name": "Paris",
      "location": {
        "latitude": 48.85661,
        "longitude": 2.351499,
        "zoom": 13
      }
    },
    "location": {
      "latitude": 48.83961,
      "longitude": 2.342499,
      "zoom": 16
    },
    "isFavorite": false,
    "isPremium": false,
    "rating": 2.6
  },
  {
    "id": "2f1a75d7-2e4a-40e4-8460-e9146cbca836",
    "title": "The Joshua Tree House",
    "type": "room",
    "price": 264,
    "previewImage": "https://15.design.htmlacademy.pro/static/hotel/5.jpg",
    "city": {
      "name": "Paris",
      "location": {
        "latitude": 48.85661,
        "longitude": 2.351499,
        "zoom": 13
      }
    },
    "location": {
      "latitude": 48.865610000000004,
      "longitude": 2.350499,
      "zoom": 16
    },
    "isFavorite": false,
    "isPremium": false,
    "rating": 4.7
  },
  {
    "id": "da83de60-9892-4d82-9a90-47573d1ce3b1",
    "title": "Penthouse, 4-5 rooms + 5 balconies",
    "type": "room",
    "price": 241,
    "previewImage": "https://15.design.htmlacademy.pro/static/hotel/18.jpg",
    "city": {
      "name": "Paris",
      "location": {
        "latitude": 48.85661,
        "longitude": 2.351499,
        "zoom": 13
      }
    },
    "location": {
      "latitude": 48.846610000000005,
      "longitude": 2.374499,
      "zoom": 16
    },
    "isFavorite": false,
    "isPremium": true,
    "rating": 4.3
  },
  {
    "id": "14e6695c-676d-4511-95d6-85afa25dbd29",
    "title": "Loft Studio in the Central Area",
    "type": "apartment",
    "price": 367,
    "previewImage": "https://15.design.htmlacademy.pro/static/hotel/6.jpg",
    "city": {
      "name": "Paris",
      "location": {
        "latitude": 48.85661,
        "longitude": 2.351499,
        "zoom": 13
      }
    },
    "location": {
      "latitude": 48.837610000000005,
      "longitude": 2.364499,
      "zoom": 16
    },
    "isFavorite": false,
    "isPremium": false,
    "rating": 3.2
  },
  {
    "id": "eb545104-7fbe-496b-be0b-0ca7ca759ea8",
    "title": "Tile House",
    "type": "apartment",
    "price": 450,
    "previewImage": "https://15.design.htmlacademy.pro/static/hotel/9.jpg",
    "city": {
      "name": "Paris",
      "location": {
        "latitude": 48.85661,
        "longitude": 2.351499,
        "zoom": 13
      }
    },
    "location": {
      "latitude": 48.843610000000005,
      "longitude": 2.338499,
      "zoom": 16
    },
    "isFavorite": false,
    "isPremium": false,
    "rating": 3.6
  },
  {
    "id": "307d719d-5a8f-426a-b963-0d8fdfbbf4ed",
    "title": "Nice, cozy, warm big bed apartment",
    "type": "apartment",
    "price": 127,
    "previewImage": "https://15.design.htmlacademy.pro/static/hotel/11.jpg",
    "city": {
      "name": "Paris",
      "location": {
        "latitude": 48.85661,
        "longitude": 2.351499,
        "zoom": 13
      }
    },
    "location": {
      "latitude": 48.84461,
      "longitude": 2.374499,
      "zoom": 16
    },
    "isFavorite": false,
    "isPremium": false,
    "rating": 2.2
  },
  {
    "id": "9e4e3437-2bcb-4464-9f6b-58ef12b9a351",
    "title": "The house among olive ",
    "type": "room",
    "price": 112,
    "previewImage": "https://15.design.htmlacademy.pro/static/hotel/8.jpg",
    "city": {
      "name": "Cologne",
      "location": {
        "latitude": 50.938361,
        "longitude": 6.959974,
        "zoom": 13
      }
    },
    "location": {
      "latitude": 50.950361,
      "longitude": 6.961974,
      "zoom": 16
    },
    "isFavorite": false,
    "isPremium": false,
    "rating": 2.9
  },
  {
    "id": "4b73d678-c5d6-4586-8478-ee23ead975a9",
    "title": "Nice, cozy, warm big bed apartment",
    "type": "hotel",
    "price": 277,
    "previewImage": "https://15.design.htmlacademy.pro/static/hotel/15.jpg",
    "city": {
      "name": "Cologne",
      "location": {
        "latitude": 50.938361,
        "longitude": 6.959974,
        "zoom": 13
      }
    },
    "location": {
      "latitude": 50.932361,
      "longitude": 6.937974,
      "zoom": 16
    },
    "isFavorite": false,
    "isPremium": false,
    "rating": 2.4
  },
  {
    "id": "f2c848fb-e2b7-4370-8f12-66203d064710",
    "title": "Wood and stone place",
    "type": "apartment",
    "price": 256,
    "previewImage": "https://15.design.htmlacademy.pro/static/hotel/18.jpg",
    "city": {
      "name": "Cologne",
      "location": {
        "latitude": 50.938361,
        "longitude": 6.959974,
        "zoom": 13
      }
    },
    "location": {
      "latitude": 50.934361,
      "longitude": 6.943974,
      "zoom": 16
    },
    "isFavorite": false,
    "isPremium": true,
    "rating": 1.7
  },
  {
    "id": "2adfefec-0055-406e-a75c-09c6d456e729",
    "title": "Perfectly located Castro",
    "type": "apartment",
    "price": 443,
    "previewImage": "https://15.design.htmlacademy.pro/static/hotel/15.jpg",
    "city": {
      "name": "Cologne",
      "location": {
        "latitude": 50.938361,
        "longitude": 6.959974,
        "zoom": 13
      }
    },
    "location": {
      "latitude": 50.947361,
      "longitude": 6.9799739999999995,
      "zoom": 16
    },
    "isFavorite": false,
    "isPremium": false,
    "rating": 2.5
  },
  {
    "id": "ed4fbe5f-8c97-4904-a5d9-53b47a132a62",
    "title": "The Joshua Tree House",
    "type": "apartment",
    "price": 277,
    "previewImage": "https://15.design.htmlacademy.pro/static/hotel/6.jpg",
    "city": {
      "name": "Cologne",
      "location": {
        "latitude": 50.938361,
        "longitude": 6.959974,
        "zoom": 13
      }
    },
    "location": {
      "latitude": 50.960361,
      "longitude": 6.967974,
      "zoom": 16
    },
    "isFavorite": false,
    "isPremium": false,
    "rating": 4
  },
  {
    "id": "fbca4ee4-0bde-4a5a-92a1-797599f8dafa",
    "title": "Canal View Prinsengracht",
    "type": "room",
    "price": 236,
    "previewImage": "https://15.design.htmlacademy.pro/static/hotel/1.jpg",
    "city": {
      "name": "Cologne",
      "location": {
        "latitude": 50.938361,
        "longitude": 6.959974,
        "zoom": 13
      }
    },
    "location": {
      "latitude": 50.941361,
      "longitude": 6.956974,
      "zoom": 16
    },
    "isFavorite": false,
    "isPremium": true,
    "rating": 4.8
  },
  {
    "id": "0db762d3-0d08-4d5c-b81b-5ded9945c6f5",
    "title": "Beautiful & luxurious apartment at great location",
    "type": "room",
    "price": 264,
    "previewImage": "https://15.design.htmlacademy.pro/static/hotel/15.jpg",
    "city": {
      "name": "Cologne",
      "location": {
        "latitude": 50.938361,
        "longitude": 6.959974,
        "zoom": 13
      }
    },
    "location": {
      "latitude": 50.916361,
      "longitude": 6.944974,
      "zoom": 16
    },
    "isFavorite": false,
    "isPremium": true,
    "rating": 3.1
  },
  {
    "id": "e6ffb33d-c883-4d53-b6c1-44d77986fdc5",
    "title": "Tile House",
    "type": "room",
    "price": 280,
    "previewImage": "https://15.design.htmlacademy.pro/static/hotel/9.jpg",
    "city": {
      "name": "Cologne",
      "location": {
        "latitude": 50.938361,
        "longitude": 6.959974,
        "zoom": 13
      }
    },
    "location": {
      "latitude": 50.949361,
      "longitude": 6.976974,
      "zoom": 16
    },
    "isFavorite": false,
    "isPremium": true,
    "rating": 3.9
  },
  {
    "id": "e3a1f0fc-1963-4a92-92ce-c69028c5c976",
    "title": "Penthouse, 4-5 rooms + 5 balconies",
    "type": "room",
    "price": 152,
    "previewImage": "https://15.design.htmlacademy.pro/static/hotel/12.jpg",
    "city": {
      "name": "Cologne",
      "location": {
        "latitude": 50.938361,
        "longitude": 6.959974,
        "zoom": 13
      }
    },
    "location": {
      "latitude": 50.913361,
      "longitude": 6.9509739999999995,
      "zoom": 16
    },
    "isFavorite": false,
    "isPremium": true,
    "rating": 3.8
  },
  {
    "id": "67730b3a-aa71-47f6-b73b-762da6caf7e4",
    "title": "Loft Studio in the Central Area",
    "type": "hotel",
    "price": 361,
    "previewImage": "https://15.design.htmlacademy.pro/static/hotel/15.jpg",
    "city": {
      "name": "Cologne",
      "location": {
        "latitude": 50.938361,
        "longitude": 6.959974,
        "zoom": 13
      }
    },
    "location": {
      "latitude": 50.930361,
      "longitude": 6.937974,
      "zoom": 16
    },
    "isFavorite": false,
    "isPremium": false,
    "rating": 4.1
  },
  {
    "id": "b3b85d3a-f526-4489-b9b0-b4c04df5ab68",
    "title": "Tile House",
    "type": "apartment",
    "price": 257,
    "previewImage": "https://15.design.htmlacademy.pro/static/hotel/4.jpg",
    "city": {
      "name": "Cologne",
      "location": {
        "latitude": 50.938361,
        "longitude": 6.959974,
        "zoom": 13
      }
    },
    "location": {
      "latitude": 50.960361,
      "longitude": 6.9509739999999995,
      "zoom": 16
    },
    "isFavorite": false,
    "isPremium": true,
    "rating": 3.8
  },
  {
    "id": "feb5b0da-9bd3-432d-8ad7-774e6d5729ee",
    "title": "Amazing and Extremely Central Flat",
    "type": "house",
    "price": 250,
    "previewImage": "https://15.design.htmlacademy.pro/static/hotel/20.jpg",
    "city": {
      "name": "Cologne",
      "location": {
        "latitude": 50.938361,
        "longitude": 6.959974,
        "zoom": 13
      }
    },
    "location": {
      "latitude": 50.918461,
      "longitude": 6.969974,
      "zoom": 16
    },
    "isFavorite": false,
    "isPremium": true,
    "rating": 2.4
  },
  {
    "id": "b5e8e74e-3c9c-4f24-813d-ec49b2044c72",
    "title": "Loft Studio in the Central Area",
    "type": "hotel",
    "price": 149,
    "previewImage": "https://15.design.htmlacademy.pro/static/hotel/4.jpg",
    "city": {
      "name": "Cologne",
      "location": {
        "latitude": 50.938361,
        "longitude": 6.959974,
        "zoom": 13
      }
    },
    "location": {
      "latitude": 50.957361,
      "longitude": 6.9509739999999995,
      "zoom": 16
    },
    "isFavorite": false,
    "isPremium": false,
    "rating": 4
  },
  {
    "id": "cfa950dc-f472-4dc7-abc5-04af230adaf6",
    "title": "Canal View Prinsengracht",
    "type": "apartment",
    "price": 143,
    "previewImage": "https://15.design.htmlacademy.pro/static/hotel/6.jpg",
    "city": {
      "name": "Cologne",
      "location": {
        "latitude": 50.938361,
        "longitude": 6.959974,
        "zoom": 13
      }
    },
    "location": {
      "latitude": 50.951361,
      "longitude": 6.944974,
      "zoom": 16
    },
    "isFavorite": false,
    "isPremium": true,
    "rating": 1.1
  },
  {
    "id": "d692e42c-a56e-4cf5-9cba-97a74093e92c",
    "title": "The Joshua Tree House",
    "type": "hotel",
    "price": 126,
    "previewImage": "https://15.design.htmlacademy.pro/static/hotel/16.jpg",
    "city": {
      "name": "Cologne",
      "location": {
        "latitude": 50.938361,
        "longitude": 6.959974,
        "zoom": 13
      }
    },
    "location": {
      "latitude": 50.959361,
      "longitude": 6.978974,
      "zoom": 16
    },
    "isFavorite": false,
    "isPremium": false,
    "rating": 3.1
  },
  {
    "id": "dee072d2-d7c0-4975-8883-a5bd47150f88",
    "title": "The Joshua Tree House",
    "type": "house",
    "price": 101,
    "previewImage": "https://15.design.htmlacademy.pro/static/hotel/3.jpg",
    "city": {
      "name": "Cologne",
      "location": {
        "latitude": 50.938361,
        "longitude": 6.959974,
        "zoom": 13
      }
    },
    "location": {
      "latitude": 50.932361,
      "longitude": 6.960974,
      "zoom": 16
    },
    "isFavorite": false,
    "isPremium": false,
    "rating": 2.8
  },
  {
    "id": "62708da2-f744-4411-9808-052305441653",
    "title": "The house among olive ",
    "type": "house",
    "price": 725,
    "previewImage": "https://15.design.htmlacademy.pro/static/hotel/9.jpg",
    "city": {
      "name": "Cologne",
      "location": {
        "latitude": 50.938361,
        "longitude": 6.959974,
        "zoom": 13
      }
    },
    "location": {
      "latitude": 50.954361,
      "longitude": 6.982974,
      "zoom": 16
    },
    "isFavorite": false,
    "isPremium": false,
    "rating": 4.8
  },
  {
    "id": "b4e2375b-842e-4c80-8009-f4db7525d482",
    "title": "Nice, cozy, warm big bed apartment",
    "type": "apartment",
    "price": 186,
    "previewImage": "https://15.design.htmlacademy.pro/static/hotel/10.jpg",
    "city": {
      "name": "Cologne",
      "location": {
        "latitude": 50.938361,
        "longitude": 6.959974,
        "zoom": 13
      }
    },
    "location": {
      "latitude": 50.945361,
      "longitude": 6.962974,
      "zoom": 16
    },
    "isFavorite": false,
    "isPremium": false,
    "rating": 1.4
  },
  {
    "id": "66c1bb4e-a461-4c93-ab82-092ca49d468e",
    "title": "Wood and stone place",
    "type": "room",
    "price": 194,
    "previewImage": "https://15.design.htmlacademy.pro/static/hotel/7.jpg",
    "city": {
      "name": "Cologne",
      "location": {
        "latitude": 50.938361,
        "longitude": 6.959974,
        "zoom": 13
      }
    },
    "location": {
      "latitude": 50.917361,
      "longitude": 6.977974,
      "zoom": 16
    },
    "isFavorite": false,
    "isPremium": false,
    "rating": 3.7
  },
  {
    "id": "5b85a698-3611-47c4-adc5-dbb7d1ae6214",
    "title": "Waterfront with extraordinary view",
    "type": "house",
    "price": 389,
    "previewImage": "https://15.design.htmlacademy.pro/static/hotel/11.jpg",
    "city": {
      "name": "Cologne",
      "location": {
        "latitude": 50.938361,
        "longitude": 6.959974,
        "zoom": 13
      }
    },
    "location": {
      "latitude": 50.945361,
      "longitude": 6.935974,
      "zoom": 16
    },
    "isFavorite": false,
    "isPremium": false,
    "rating": 3.2
  },
  {
    "id": "0c74f393-883f-4039-9d77-aa9b4389a4e9",
    "title": "House in countryside",
    "type": "apartment",
    "price": 390,
    "previewImage": "https://15.design.htmlacademy.pro/static/hotel/14.jpg",
    "city": {
      "name": "Brussels",
      "location": {
        "latitude": 50.846557,
        "longitude": 4.351697,
        "zoom": 13
      }
    },
    "location": {
      "latitude": 50.854557,
      "longitude": 4.364697,
      "zoom": 16
    },
    "isFavorite": false,
    "isPremium": true,
    "rating": 3.6
  },
  {
    "id": "bedf4869-e0d3-4dc7-9209-d4d1109ddb59",
    "title": "Tile House",
    "type": "apartment",
    "price": 337,
    "previewImage": "https://15.design.htmlacademy.pro/static/hotel/14.jpg",
    "city": {
      "name": "Brussels",
      "location": {
        "latitude": 50.846557,
        "longitude": 4.351697,
        "zoom": 13
      }
    },
    "location": {
      "latitude": 50.867557,
      "longitude": 4.371696999999999,
      "zoom": 16
    },
    "isFavorite": false,
    "isPremium": false,
    "rating": 4.2
  },
  {
    "id": "b9907b5c-65ba-4bb4-ba9a-4d0de486911e",
    "title": "Tile House",
    "type": "apartment",
    "price": 322,
    "previewImage": "https://15.design.htmlacademy.pro/static/hotel/4.jpg",
    "city": {
      "name": "Brussels",
      "location": {
        "latitude": 50.846557,
        "longitude": 4.351697,
        "zoom": 13
      }
    },
    "location": {
      "latitude": 50.827557,
      "longitude": 4.336697,
      "zoom": 16
    },
    "isFavorite": false,
    "isPremium": true,
    "rating": 2.6
  },
  {
    "id": "672d7f92-f205-4a71-bceb-1719f8f3f306",
    "title": "Wood and stone place",
    "type": "apartment",
    "price": 460,
    "previewImage": "https://15.design.htmlacademy.pro/static/hotel/7.jpg",
    "city": {
      "name": "Brussels",
      "location": {
        "latitude": 50.846557,
        "longitude": 4.351697,
        "zoom": 13
      }
    },
    "location": {
      "latitude": 50.833557,
      "longitude": 4.374696999999999,
      "zoom": 16
    },
    "isFavorite": false,
    "isPremium": false,
    "rating": 4.2
  },
  {
    "id": "69c4398b-684a-46ae-a961-f7139a575376",
    "title": "House in countryside",
    "type": "room",
    "price": 111,
    "previewImage": "https://15.design.htmlacademy.pro/static/hotel/9.jpg",
    "city": {
      "name": "Brussels",
      "location": {
        "latitude": 50.846557,
        "longitude": 4.351697,
        "zoom": 13
      }
    },
    "location": {
      "latitude": 50.837557,
      "longitude": 4.339697,
      "zoom": 16
    },
    "isFavorite": false,
    "isPremium": true,
    "rating": 3.3
  },
  {
    "id": "c1400fcd-32a2-45c0-acf3-0572f0856dba",
    "title": "Tile House",
    "type": "apartment",
    "price": 458,
    "previewImage": "https://15.design.htmlacademy.pro/static/hotel/9.jpg",
    "city": {
      "name": "Brussels",
      "location": {
        "latitude": 50.846557,
        "longitude": 4.351697,
        "zoom": 13
      }
    },
    "location": {
      "latitude": 50.849557,
      "longitude": 4.374696999999999,
      "zoom": 16
    },
    "isFavorite": false,
    "isPremium": false,
    "rating": 2
  },
  {
    "id": "c317ac23-1e14-47a5-8567-5a298603b6cf",
    "title": "The Joshua Tree House",
    "type": "room",
    "price": 297,
    "previewImage": "https://15.design.htmlacademy.pro/static/hotel/15.jpg",
    "city": {
      "name": "Brussels",
      "location": {
        "latitude": 50.846557,
        "longitude": 4.351697,
        "zoom": 13
      }
    },
    "location": {
      "latitude": 50.852557,
      "longitude": 4.3376969999999995,
      "zoom": 16
    },
    "isFavorite": false,
    "isPremium": false,
    "rating": 3.8
  },
  {
    "id": "e31c3ed5-f403-4959-ad85-a32dceb1271b",
    "title": "Amazing and Extremely Central Flat",
    "type": "apartment",
    "price": 373,
    "previewImage": "https://15.design.htmlacademy.pro/static/hotel/3.jpg",
    "city": {
      "name": "Brussels",
      "location": {
        "latitude": 50.846557,
        "longitude": 4.351697,
        "zoom": 13
      }
    },
    "location": {
      "latitude": 50.828556999999996,
      "longitude": 4.362697,
      "zoom": 16
    },
    "isFavorite": false,
    "isPremium": false,
    "rating": 1.4
  },
  {
    "id": "7dc4ad12-e03a-453b-8404-64d65860aaa3",
    "title": "Canal View Prinsengracht",
    "type": "apartment",
    "price": 321,
    "previewImage": "https://15.design.htmlacademy.pro/static/hotel/13.jpg",
    "city": {
      "name": "Brussels",
      "location": {
        "latitude": 50.846557,
        "longitude": 4.351697,
        "zoom": 13
      }
    },
    "location": {
      "latitude": 50.835556999999994,
      "longitude": 4.354697,
      "zoom": 16
    },
    "isFavorite": false,
    "isPremium": true,
    "rating": 2.6
  },
  {
    "id": "b16fa9d1-2273-4701-a71d-26f8acd849c8",
    "title": "Wood and stone place",
    "type": "room",
    "price": 228,
    "previewImage": "https://15.design.htmlacademy.pro/static/hotel/3.jpg",
    "city": {
      "name": "Brussels",
      "location": {
        "latitude": 50.846557,
        "longitude": 4.351697,
        "zoom": 13
      }
    },
    "location": {
      "latitude": 50.867557,
      "longitude": 4.339697,
      "zoom": 16
    },
    "isFavorite": false,
    "isPremium": false,
    "rating": 2.9
  },
  {
    "id": "0a8e0509-043b-429f-8ca1-0ef18fb210c4",
    "title": "Canal View Prinsengracht",
    "type": "hotel",
    "price": 389,
    "previewImage": "https://15.design.htmlacademy.pro/static/hotel/15.jpg",
    "city": {
      "name": "Brussels",
      "location": {
        "latitude": 50.846557,
        "longitude": 4.351697,
        "zoom": 13
      }
    },
    "location": {
      "latitude": 50.839557,
      "longitude": 4.346697,
      "zoom": 16
    },
    "isFavorite": false,
    "isPremium": false,
    "rating": 4.3
  },
  {
    "id": "a458dd00-0a41-437d-9f3f-78314b0f04e7",
    "title": "The house among olive ",
    "type": "room",
    "price": 168,
    "previewImage": "https://15.design.htmlacademy.pro/static/hotel/13.jpg",
    "city": {
      "name": "Brussels",
      "location": {
        "latitude": 50.846557,
        "longitude": 4.351697,
        "zoom": 13
      }
    },
    "location": {
      "latitude": 50.844556999999995,
      "longitude": 4.346697,
      "zoom": 16
    },
    "isFavorite": false,
    "isPremium": false,
    "rating": 4.3
  },
  {
    "id": "6d590366-3058-499e-95d2-af47bfdf3d0e",
    "title": "Amazing and Extremely Central Flat",
    "type": "apartment",
    "price": 220,
    "previewImage": "https://15.design.htmlacademy.pro/static/hotel/6.jpg",
    "city": {
      "name": "Brussels",
      "location": {
        "latitude": 50.846557,
        "longitude": 4.351697,
        "zoom": 13
      }
    },
    "location": {
      "latitude": 50.865556999999995,
      "longitude": 4.371696999999999,
      "zoom": 16
    },
    "isFavorite": false,
    "isPremium": true,
    "rating": 1.2
  },
  {
    "id": "349eb777-73b5-4ab8-ac56-712e72aeb669",
    "title": "Penthouse, 4-5 rooms + 5 balconies",
    "type": "hotel",
    "price": 288,
    "previewImage": "https://15.design.htmlacademy.pro/static/hotel/3.jpg",
    "city": {
      "name": "Brussels",
      "location": {
        "latitude": 50.846557,
        "longitude": 4.351697,
        "zoom": 13
      }
    },
    "location": {
      "latitude": 50.869557,
      "longitude": 4.332697,
      "zoom": 16
    },
    "isFavorite": false,
    "isPremium": false,
    "rating": 1.8
  },
  {
    "id": "53e2ff38-227e-4112-a944-078a2d22be1f",
    "title": "The Joshua Tree House",
    "type": "hotel",
    "price": 374,
    "previewImage": "https://15.design.htmlacademy.pro/static/hotel/13.jpg",
    "city": {
      "name": "Brussels",
      "location": {
        "latitude": 50.846557,
        "longitude": 4.351697,
        "zoom": 13
      }
    },
    "location": {
      "latitude": 50.860557,
      "longitude": 4.376697,
      "zoom": 16
    },
    "isFavorite": false,
    "isPremium": false,
    "rating": 3.4
  },
  {
    "id": "ad57db80-d804-4bd3-a972-e30f56a7a352",
    "title": "Loft Studio in the Central Area",
    "type": "hotel",
    "price": 122,
    "previewImage": "https://15.design.htmlacademy.pro/static/hotel/6.jpg",
    "city": {
      "name": "Brussels",
      "location": {
        "latitude": 50.846557,
        "longitude": 4.351697,
        "zoom": 13
      }
    },
    "location": {
      "latitude": 50.862556999999995,
      "longitude": 4.375697,
      "zoom": 16
    },
    "isFavorite": false,
    "isPremium": false,
    "rating": 4.1
  },
  {
    "id": "9647d65a-49a2-41c5-8b1f-a703365f78bc",
    "title": "Loft Studio in the Central Area",
    "type": "hotel",
    "price": 432,
    "previewImage": "https://15.design.htmlacademy.pro/static/hotel/11.jpg",
    "city": {
      "name": "Brussels",
      "location": {
        "latitude": 50.846557,
        "longitude": 4.351697,
        "zoom": 13
      }
    },
    "location": {
      "latitude": 50.842557,
      "longitude": 4.3536969999999995,
      "zoom": 16
    },
    "isFavorite": false,
    "isPremium": false,
    "rating": 4
  },
  {
    "id": "956fdfc9-9ccc-4196-9d85-2c529e2b209b",
    "title": "The house among olive ",
    "type": "apartment",
    "price": 437,
    "previewImage": "https://15.design.htmlacademy.pro/static/hotel/12.jpg",
    "city": {
      "name": "Brussels",
      "location": {
        "latitude": 50.846557,
        "longitude": 4.351697,
        "zoom": 13
      }
    },
    "location": {
      "latitude": 50.822556999999996,
      "longitude": 4.347697,
      "zoom": 16
    },
    "isFavorite": false,
    "isPremium": true,
    "rating": 4.9
  },
  {
    "id": "046585e2-26ad-4ec4-a443-ce9bae62cedd",
    "title": "The house among olive ",
    "type": "apartment",
    "price": 489,
    "previewImage": "https://15.design.htmlacademy.pro/static/hotel/5.jpg",
    "city": {
      "name": "Brussels",
      "location": {
        "latitude": 50.846557,
        "longitude": 4.351697,
        "zoom": 13
      }
    },
    "location": {
      "latitude": 50.867557,
      "longitude": 4.357697,
      "zoom": 16
    },
    "isFavorite": false,
    "isPremium": false,
    "rating": 3.7
  },
  {
    "id": "dc6e7ea3-26b6-41d3-8ca7-4747c43e87fe",
    "title": "The Joshua Tree House",
    "type": "apartment",
    "price": 268,
    "previewImage": "https://15.design.htmlacademy.pro/static/hotel/18.jpg",
    "city": {
      "name": "Brussels",
      "location": {
        "latitude": 50.846557,
        "longitude": 4.351697,
        "zoom": 13
      }
    },
    "location": {
      "latitude": 50.842557,
      "longitude": 4.363696999999999,
      "zoom": 16
    },
    "isFavorite": false,
    "isPremium": false,
    "rating": 4.3
  },
  {
    "id": "f796c3c8-6627-4181-b78e-5b667591f38d",
    "title": "Canal View Prinsengracht",
    "type": "hotel",
    "price": 168,
    "previewImage": "https://15.design.htmlacademy.pro/static/hotel/6.jpg",
    "city": {
      "name": "Amsterdam",
      "location": {
        "latitude": 52.37454,
        "longitude": 4.897976,
        "zoom": 13
      }
    },
    "location": {
      "latitude": 52.36554,
      "longitude": 4.911976,
      "zoom": 16
    },
    "isFavorite": false,
    "isPremium": true,
    "rating": 3.8
  },
  {
    "id": "8375b200-639b-4ab2-8f93-52ff60be17bc",
    "title": "Penthouse, 4-5 rooms + 5 balconies",
    "type": "hotel",
    "price": 181,
    "previewImage": "https://15.design.htmlacademy.pro/static/hotel/13.jpg",
    "city": {
      "name": "Amsterdam",
      "location": {
        "latitude": 52.37454,
        "longitude": 4.897976,
        "zoom": 13
      }
    },
    "location": {
      "latitude": 52.385540000000006,
      "longitude": 4.902976,
      "zoom": 16
    },
    "isFavorite": false,
    "isPremium": false,
    "rating": 2.8
  },
  {
    "id": "3aa21127-8edc-4813-b972-d9be909d7d3d",
    "title": "Amazing and Extremely Central Flat",
    "type": "apartment",
    "price": 431,
    "previewImage": "https://15.design.htmlacademy.pro/static/hotel/6.jpg",
    "city": {
      "name": "Amsterdam",
      "location": {
        "latitude": 52.37454,
        "longitude": 4.897976,
        "zoom": 13
      }
    },
    "location": {
      "latitude": 52.397540000000006,
      "longitude": 4.9099759999999995,
      "zoom": 16
    },
    "isFavorite": false,
    "isPremium": false,
    "rating": 4
  },
  {
    "id": "87d27bdb-b235-4c43-9fb9-51f09793bbbb",
    "title": "House in countryside",
    "type": "apartment",
    "price": 456,
    "previewImage": "https://15.design.htmlacademy.pro/static/hotel/4.jpg",
    "city": {
      "name": "Amsterdam",
      "location": {
        "latitude": 52.37454,
        "longitude": 4.897976,
        "zoom": 13
      }
    },
    "location": {
      "latitude": 52.37454,
      "longitude": 4.881976,
      "zoom": 16
    },
    "isFavorite": false,
    "isPremium": false,
    "rating": 4.6
  },
  {
    "id": "ee9f7c99-9c16-4f11-b7f5-5f198b5ef865",
    "title": "Canal View Prinsengracht",
    "type": "room",
    "price": 162,
    "previewImage": "https://15.design.htmlacademy.pro/static/hotel/19.jpg",
    "city": {
      "name": "Amsterdam",
      "location": {
        "latitude": 52.37454,
        "longitude": 4.897976,
        "zoom": 13
      }
    },
    "location": {
      "latitude": 52.367540000000005,
      "longitude": 4.883976,
      "zoom": 16
    },
    "isFavorite": false,
    "isPremium": false,
    "rating": 4.6
  },
  {
    "id": "ee685837-fe4c-4601-afb1-6a3b9ced49f2",
    "title": "Beautiful & luxurious apartment at great location",
    "type": "room",
    "price": 161,
    "previewImage": "https://15.design.htmlacademy.pro/static/hotel/10.jpg",
    "city": {
      "name": "Amsterdam",
      "location": {
        "latitude": 52.37454,
        "longitude": 4.897976,
        "zoom": 13
      }
    },
    "location": {
      "latitude": 52.361540000000005,
      "longitude": 4.883976,
      "zoom": 16
    },
    "isFavorite": false,
    "isPremium": false,
    "rating": 3.7
  },
  {
    "id": "a4bec559-1866-4092-b1a5-3387f9b61e02",
    "title": "House in countryside",
    "type": "room",
    "price": 106,
    "previewImage": "https://15.design.htmlacademy.pro/static/hotel/16.jpg",
    "city": {
      "name": "Amsterdam",
      "location": {
        "latitude": 52.37454,
        "longitude": 4.897976,
        "zoom": 13
      }
    },
    "location": {
      "latitude": 52.35754,
      "longitude": 4.9179759999999995,
      "zoom": 16
    },
    "isFavorite": false,
    "isPremium": false,
    "rating": 2.3
  },
  {
    "id": "a61d55f9-917b-49da-af44-59a6dade6ec5",
    "title": "Waterfront with extraordinary view",
    "type": "hotel",
    "price": 184,
    "previewImage": "https://15.design.htmlacademy.pro/static/hotel/17.jpg",
    "city": {
      "name": "Amsterdam",
      "location": {
        "latitude": 52.37454,
        "longitude": 4.897976,
        "zoom": 13
      }
    },
    "location": {
      "latitude": 52.37854,
      "longitude": 4.894976,
      "zoom": 16
    },
    "isFavorite": false,
    "isPremium": false,
    "rating": 3.6
  },
  {
    "id": "a5b3069d-9f85-4b31-a829-1e9899048106",
    "title": "Loft Studio in the Central Area",
    "type": "house",
    "price": 343,
    "previewImage": "https://15.design.htmlacademy.pro/static/hotel/1.jpg",
    "city": {
      "name": "Amsterdam",
      "location": {
        "latitude": 52.37454,
        "longitude": 4.897976,
        "zoom": 13
      }
    },
    "location": {
      "latitude": 52.36854,
      "longitude": 4.887976,
      "zoom": 16
    },
    "isFavorite": false,
    "isPremium": true,
    "rating": 2.8
  },
  {
    "id": "b15071db-aefd-4be1-b892-b3c6d92862e7",
    "title": "The Pondhouse - A Magical Place",
    "type": "apartment",
    "price": 495,
    "previewImage": "https://15.design.htmlacademy.pro/static/hotel/7.jpg",
    "city": {
      "name": "Amsterdam",
      "location": {
        "latitude": 52.37454,
        "longitude": 4.897976,
        "zoom": 13
      }
    },
    "location": {
      "latitude": 52.370540000000005,
      "longitude": 4.9099759999999995,
      "zoom": 16
    },
    "isFavorite": false,
    "isPremium": true,
    "rating": 4.2
  },
  {
    "id": "3e7a991b-c225-40d1-a781-8d786c95eb39",
    "title": "House in countryside",
    "type": "apartment",
    "price": 284,
    "previewImage": "https://15.design.htmlacademy.pro/static/hotel/4.jpg",
    "city": {
      "name": "Amsterdam",
      "location": {
        "latitude": 52.37454,
        "longitude": 4.897976,
        "zoom": 13
      }
    },
    "location": {
      "latitude": 52.389540000000004,
      "longitude": 4.883976,
      "zoom": 16
    },
    "isFavorite": false,
    "isPremium": false,
    "rating": 3.4
  },
  {
    "id": "6882bf11-e5de-4e24-8df8-2fd1f8418334",
    "title": "Tile House",
    "type": "house",
    "price": 276,
    "previewImage": "https://15.design.htmlacademy.pro/static/hotel/7.jpg",
    "city": {
      "name": "Amsterdam",
      "location": {
        "latitude": 52.37454,
        "longitude": 4.897976,
        "zoom": 13
      }
    },
    "location": {
      "latitude": 52.35054,
      "longitude": 4.908976,
      "zoom": 16
    },
    "isFavorite": false,
    "isPremium": false,
    "rating": 2
  },
  {
    "id": "69e7198f-0565-41f1-b797-ed2acb83a8b5",
    "title": "Loft Studio in the Central Area",
    "type": "house",
    "price": 572,
    "previewImage": "https://15.design.htmlacademy.pro/static/hotel/1.jpg",
    "city": {
      "name": "Amsterdam",
      "location": {
        "latitude": 52.37454,
        "longitude": 4.897976,
        "zoom": 13
      }
    },
    "location": {
      "latitude": 52.37154,
      "longitude": 4.889976,
      "zoom": 16
    },
    "isFavorite": false,
    "isPremium": false,
    "rating": 4.6
  },
  {
    "id": "044eac2a-7160-4708-acbb-6ffa7f7e9465",
    "title": "Beautiful & luxurious apartment at great location",
    "type": "apartment",
    "price": 263,
    "previewImage": "https://15.design.htmlacademy.pro/static/hotel/14.jpg",
    "city": {
      "name": "Amsterdam",
      "location": {
        "latitude": 52.37454,
        "longitude": 4.897976,
        "zoom": 13
      }
    },
    "location": {
      "latitude": 52.364540000000005,
      "longitude": 4.9019759999999994,
      "zoom": 16
    },
    "isFavorite": false,
    "isPremium": true,
    "rating": 2.4
  },
  {
    "id": "986d4498-b1a0-4c41-ba4f-19c83d938dc5",
    "title": "Penthouse, 4-5 rooms + 5 balconies",
    "type": "apartment",
    "price": 375,
    "previewImage": "https://15.design.htmlacademy.pro/static/hotel/11.jpg",
    "city": {
      "name": "Amsterdam",
      "location": {
        "latitude": 52.37454,
        "longitude": 4.897976,
        "zoom": 13
      }
    },
    "location": {
      "latitude": 52.36354,
      "longitude": 4.911976,
      "zoom": 16
    },
    "isFavorite": false,
    "isPremium": false,
    "rating": 4.1
  },
  {
    "id": "ae938e0f-d43d-40b7-818d-8f5323deea4e",
    "title": "House in countryside",
    "type": "apartment",
    "price": 351,
    "previewImage": "https://15.design.htmlacademy.pro/static/hotel/1.jpg",
    "city": {
      "name": "Amsterdam",
      "location": {
        "latitude": 52.37454,
        "longitude": 4.897976,
        "zoom": 13
      }
    },
    "location": {
      "latitude": 52.36354,
      "longitude": 4.889976,
      "zoom": 16
    },
    "isFavorite": false,
    "isPremium": true,
    "rating": 4
  },
  {
    "id": "6a1e13e2-227e-45fb-bf44-4272ac1280a1",
    "title": "The house among olive ",
    "type": "hotel",
    "price": 298,
    "previewImage": "https://15.design.htmlacademy.pro/static/hotel/7.jpg",
    "city": {
      "name": "Amsterdam",
      "location": {
        "latitude": 52.37454,
        "longitude": 4.897976,
        "zoom": 13
      }
    },
    "location": {
      "latitude": 52.388540000000006,
      "longitude": 4.899976,
      "zoom": 16
    },
    "isFavorite": false,
    "isPremium": true,
    "rating": 1.2
  },
  {
    "id": "d2c161e8-2f50-4b45-85e3-64fcf95fedb8",
    "title": "Perfectly located Castro",
    "type": "house",
    "price": 402,
    "previewImage": "https://15.design.htmlacademy.pro/static/hotel/10.jpg",
    "city": {
      "name": "Amsterdam",
      "location": {
        "latitude": 52.37454,
        "longitude": 4.897976,
        "zoom": 13
      }
    },
    "location": {
      "latitude": 52.36954,
      "longitude": 4.914976,
      "zoom": 16
    },
    "isFavorite": false,
    "isPremium": true,
    "rating": 3
  },
  {
    "id": "2d8092b3-4dbf-4866-b648-42eb2891b201",
    "title": "Waterfront with extraordinary view",
    "type": "apartment",
    "price": 114,
    "previewImage": "https://15.design.htmlacademy.pro/static/hotel/12.jpg",
    "city": {
      "name": "Amsterdam",
      "location": {
        "latitude": 52.37454,
        "longitude": 4.897976,
        "zoom": 13
      }
    },
    "location": {
      "latitude": 52.37554,
      "longitude": 4.9019759999999994,
      "zoom": 16
    },
    "isFavorite": false,
    "isPremium": true,
    "rating": 4.3
  },
  {
    "id": "1626f4a7-92c8-4e26-ba28-35d12ccdfed7",
    "title": "Tile House",
    "type": "room",
    "price": 119,
    "previewImage": "https://15.design.htmlacademy.pro/static/hotel/4.jpg",
    "city": {
      "name": "Amsterdam",
      "location": {
        "latitude": 52.37454,
        "longitude": 4.897976,
        "zoom": 13
      }
    },
    "location": {
      "latitude": 52.385540000000006,
      "longitude": 4.886976,
      "zoom": 16
    },
    "isFavorite": false,
    "isPremium": true,
    "rating": 2.6
  },
  {
    "id": "57a834fb-9bbc-4d26-998d-292f45eef157",
    "title": "The Joshua Tree House",
    "type": "hotel",
    "price": 411,
    "previewImage": "https://15.design.htmlacademy.pro/static/hotel/10.jpg",
    "city": {
      "name": "Hamburg",
      "location": {
        "latitude": 53.550341,
        "longitude": 10.000654,
        "zoom": 13
      }
    },
    "location": {
      "latitude": 53.528341000000005,
      "longitude": 10.018654000000002,
      "zoom": 16
    },
    "isFavorite": false,
    "isPremium": true,
    "rating": 3
  },
  {
    "id": "81a8b7b9-876a-40ad-9d04-39677d2a77a9",
    "title": "Waterfront with extraordinary view",
    "type": "apartment",
    "price": 434,
    "previewImage": "https://15.design.htmlacademy.pro/static/hotel/10.jpg",
    "city": {
      "name": "Hamburg",
      "location": {
        "latitude": 53.550341,
        "longitude": 10.000654,
        "zoom": 13
      }
    },
    "location": {
      "latitude": 53.538341,
      "longitude": 9.976654000000002,
      "zoom": 16
    },
    "isFavorite": false,
    "isPremium": false,
    "rating": 4.7
  },
  {
    "id": "806a2185-3c83-4c67-9e44-9e1d5fba11f7",
    "title": "Tile House",
    "type": "room",
    "price": 192,
    "previewImage": "https://15.design.htmlacademy.pro/static/hotel/8.jpg",
    "city": {
      "name": "Hamburg",
      "location": {
        "latitude": 53.550341,
        "longitude": 10.000654,
        "zoom": 13
      }
    },
    "location": {
      "latitude": 53.563341,
      "longitude": 10.019654000000001,
      "zoom": 16
    },
    "isFavorite": false,
    "isPremium": true,
    "rating": 2.9
  },
  {
    "id": "c061d207-33f4-467b-a141-35566febbc51",
    "title": "Perfectly located Castro",
    "type": "hotel",
    "price": 320,
    "previewImage": "https://15.design.htmlacademy.pro/static/hotel/13.jpg",
    "city": {
      "name": "Hamburg",
      "location": {
        "latitude": 53.550341,
        "longitude": 10.000654,
        "zoom": 13
      }
    },
    "location": {
      "latitude": 53.529341,
      "longitude": 9.975654,
      "zoom": 16
    },
    "isFavorite": false,
    "isPremium": true,
    "rating": 1.5
  },
  {
    "id": "bcfc9778-9462-4a54-b614-29a3b21b0553",
    "title": "Loft Studio in the Central Area",
    "type": "house",
    "price": 537,
    "previewImage": "https://15.design.htmlacademy.pro/static/hotel/4.jpg",
    "city": {
      "name": "Hamburg",
      "location": {
        "latitude": 53.550341,
        "longitude": 10.000654,
        "zoom": 13
      }
    },
    "location": {
      "latitude": 53.565341,
      "longitude": 9.980654000000001,
      "zoom": 16
    },
    "isFavorite": false,
    "isPremium": false,
    "rating": 4.8
  },
  {
    "id": "9f12b391-4e60-40fd-bb81-6047b09a8adf",
    "title": "Penthouse, 4-5 rooms + 5 balconies",
    "type": "room",
    "price": 222,
    "previewImage": "https://15.design.htmlacademy.pro/static/hotel/9.jpg",
    "city": {
      "name": "Hamburg",
      "location": {
        "latitude": 53.550341,
        "longitude": 10.000654,
        "zoom": 13
      }
    },
    "location": {
      "latitude": 53.546341000000005,
      "longitude": 10.022654000000001,
      "zoom": 16
    },
    "isFavorite": false,
    "isPremium": true,
    "rating": 4.3
  },
  {
    "id": "292ca1a2-7b32-403c-86af-3215de77d798",
    "title": "The house among olive ",
    "type": "apartment",
    "price": 381,
    "previewImage": "https://15.design.htmlacademy.pro/static/hotel/16.jpg",
    "city": {
      "name": "Hamburg",
      "location": {
        "latitude": 53.550341,
        "longitude": 10.000654,
        "zoom": 13
      }
    },
    "location": {
      "latitude": 53.565341000000004,
      "longitude": 9.978654,
      "zoom": 16
    },
    "isFavorite": false,
    "isPremium": false,
    "rating": 2.7
  },
  {
    "id": "108b38eb-fb71-47c0-b5a0-98b1bd0c6314",
    "title": "The house among olive ",
    "type": "hotel",
    "price": 384,
    "previewImage": "https://15.design.htmlacademy.pro/static/hotel/20.jpg",
    "city": {
      "name": "Hamburg",
      "location": {
        "latitude": 53.550341,
        "longitude": 10.000654,
        "zoom": 13
      }
    },
    "location": {
      "latitude": 53.570341000000006,
      "longitude": 9.975654,
      "zoom": 16
    },
    "isFavorite": false,
    "isPremium": true,
    "rating": 4.3
  },
  {
    "id": "fdc978fb-4b44-448d-80d4-b836240a3f2e",
    "title": "Tile House",
    "type": "house",
    "price": 725,
    "previewImage": "https://15.design.htmlacademy.pro/static/hotel/8.jpg",
    "city": {
      "name": "Hamburg",
      "location": {
        "latitude": 53.550341,
        "longitude": 10.000654,
        "zoom": 13
      }
    },
    "location": {
      "latitude": 53.558341000000006,
      "longitude": 10.001654,
      "zoom": 16
    },
    "isFavorite": false,
    "isPremium": true,
    "rating": 2.1
  },
  {
    "id": "e2eebbe4-b15d-4923-bcdc-30d5106968a6",
    "title": "The Joshua Tree House",
    "type": "room",
    "price": 254,
    "previewImage": "https://15.design.htmlacademy.pro/static/hotel/13.jpg",
    "city": {
      "name": "Hamburg",
      "location": {
        "latitude": 53.550341,
        "longitude": 10.000654,
        "zoom": 13
      }
    },
    "location": {
      "latitude": 53.573341000000006,
      "longitude": 10.009654000000001,
      "zoom": 16
    },
    "isFavorite": false,
    "isPremium": true,
    "rating": 3.3
  },
  {
    "id": "d2c2cee1-0ac0-4ab5-bfaf-943ad906c6da",
    "title": "Nice, cozy, warm big bed apartment",
    "type": "apartment",
    "price": 129,
    "previewImage": "https://15.design.htmlacademy.pro/static/hotel/10.jpg",
    "city": {
      "name": "Hamburg",
      "location": {
        "latitude": 53.550341,
        "longitude": 10.000654,
        "zoom": 13
      }
    },
    "location": {
      "latitude": 53.573341000000006,
      "longitude": 9.994654,
      "zoom": 16
    },
    "isFavorite": false,
    "isPremium": false,
    "rating": 2
  },
  {
    "id": "b61eb3be-bb78-4320-8db9-ec16e96990b1",
    "title": "Nice, cozy, warm big bed apartment",
    "type": "room",
    "price": 182,
    "previewImage": "https://15.design.htmlacademy.pro/static/hotel/20.jpg",
    "city": {
      "name": "Hamburg",
      "location": {
        "latitude": 53.550341,
        "longitude": 10.000654,
        "zoom": 13
      }
    },
    "location": {
      "latitude": 53.528341000000005,
      "longitude": 9.982654,
      "zoom": 16
    },
    "isFavorite": false,
    "isPremium": true,
    "rating": 4.9
  },
  {
    "id": "ebc2e598-5d8c-4009-a2cf-cc2f0be13009",
    "title": "Tile House",
    "type": "hotel",
    "price": 295,
    "previewImage": "https://15.design.htmlacademy.pro/static/hotel/18.jpg",
    "city": {
      "name": "Hamburg",
      "location": {
        "latitude": 53.550341,
        "longitude": 10.000654,
        "zoom": 13
      }
    },
    "location": {
      "latitude": 53.540341000000005,
      "longitude": 10.025654000000001,
      "zoom": 16
    },
    "isFavorite": false,
    "isPremium": false,
    "rating": 3.2
  },
  {
    "id": "b674e7a3-1ab8-4409-a10f-2fb67517eadd",
    "title": "Amazing and Extremely Central Flat",
    "type": "house",
    "price": 474,
    "previewImage": "https://15.design.htmlacademy.pro/static/hotel/13.jpg",
    "city": {
      "name": "Hamburg",
      "location": {
        "latitude": 53.550341,
        "longitude": 10.000654,
        "zoom": 13
      }
    },
    "location": {
      "latitude": 53.555341000000006,
      "longitude": 9.975654,
      "zoom": 16
    },
    "isFavorite": false,
    "isPremium": false,
    "rating": 2
  },
  {
    "id": "1b97689d-b8e9-459f-b468-b8ee0b16bc7b",
    "title": "Wood and stone place",
    "type": "house",
    "price": 181,
    "previewImage": "https://15.design.htmlacademy.pro/static/hotel/1.jpg",
    "city": {
      "name": "Hamburg",
      "location": {
        "latitude": 53.550341,
        "longitude": 10.000654,
        "zoom": 13
      }
    },
    "location": {
      "latitude": 53.534341000000005,
      "longitude": 9.998654,
      "zoom": 16
    },
    "isFavorite": false,
    "isPremium": true,
    "rating": 1.6
  },
  {
    "id": "f3730b36-0b56-4eed-b7ea-d9b2921da6c0",
    "title": "Wood and stone place",
    "type": "house",
    "price": 802,
    "previewImage": "https://15.design.htmlacademy.pro/static/hotel/15.jpg",
    "city": {
      "name": "Hamburg",
      "location": {
        "latitude": 53.550341,
        "longitude": 10.000654,
        "zoom": 13
      }
    },
    "location": {
      "latitude": 53.563341,
      "longitude": 9.975654,
      "zoom": 16
    },
    "isFavorite": false,
    "isPremium": false,
    "rating": 5
  },
  {
    "id": "aaf2124d-a9ab-4f1d-ad96-51f59d97afa8",
    "title": "Tile House",
    "type": "hotel",
    "price": 371,
    "previewImage": "https://15.design.htmlacademy.pro/static/hotel/7.jpg",
    "city": {
      "name": "Hamburg",
      "location": {
        "latitude": 53.550341,
        "longitude": 10.000654,
        "zoom": 13
      }
    },
    "location": {
      "latitude": 53.574341000000004,
      "longitude": 10.022654000000001,
      "zoom": 16
    },
    "isFavorite": false,
    "isPremium": true,
    "rating": 4.6
  },
  {
    "id": "069b9d2d-38df-4958-8596-639357e44e86",
    "title": "House in countryside",
    "type": "hotel",
    "price": 161,
    "previewImage": "https://15.design.htmlacademy.pro/static/hotel/11.jpg",
    "city": {
      "name": "Hamburg",
      "location": {
        "latitude": 53.550341,
        "longitude": 10.000654,
        "zoom": 13
      }
    },
    "location": {
      "latitude": 53.573341000000006,
      "longitude": 10.025654000000001,
      "zoom": 16
    },
    "isFavorite": false,
    "isPremium": true,
    "rating": 2.3
  },
  {
    "id": "06885d65-0e93-4da1-8f7a-b5324317bd13",
    "title": "Tile House",
    "type": "apartment",
    "price": 440,
    "previewImage": "https://15.design.htmlacademy.pro/static/hotel/14.jpg",
    "city": {
      "name": "Hamburg",
      "location": {
        "latitude": 53.550341,
        "longitude": 10.000654,
        "zoom": 13
      }
    },
    "location": {
      "latitude": 53.550341,
      "longitude": 9.980654000000001,
      "zoom": 16
    },
    "isFavorite": false,
    "isPremium": false,
    "rating": 3.4
  },
  {
    "id": "7d62388a-c170-4f37-b6df-cd47af71a0c9",
    "title": "The house among olive ",
    "type": "hotel",
    "price": 168,
    "previewImage": "https://15.design.htmlacademy.pro/static/hotel/13.jpg",
    "city": {
      "name": "Hamburg",
      "location": {
        "latitude": 53.550341,
        "longitude": 10.000654,
        "zoom": 13
      }
    },
    "location": {
      "latitude": 53.558341000000006,
      "longitude": 9.999654000000001,
      "zoom": 16
    },
    "isFavorite": false,
    "isPremium": false,
    "rating": 1.1
  },
  {
    "id": "6b6fc895-5ec0-4c5e-8023-a2a954e243d4",
    "title": "The Joshua Tree House",
    "type": "hotel",
    "price": 146,
    "previewImage": "https://15.design.htmlacademy.pro/static/hotel/18.jpg",
    "city": {
      "name": "Dusseldorf",
      "location": {
        "latitude": 51.225402,
        "longitude": 6.776314,
        "zoom": 13
      }
    },
    "location": {
      "latitude": 51.236402000000005,
      "longitude": 6.784314,
      "zoom": 16
    },
    "isFavorite": false,
    "isPremium": true,
    "rating": 2.8
  },
  {
    "id": "3faa1571-ca9b-4923-a4f5-2aa86e2ab494",
    "title": "The Joshua Tree House",
    "type": "hotel",
    "price": 352,
    "previewImage": "https://15.design.htmlacademy.pro/static/hotel/9.jpg",
    "city": {
      "name": "Dusseldorf",
      "location": {
        "latitude": 51.225402,
        "longitude": 6.776314,
        "zoom": 13
      }
    },
    "location": {
      "latitude": 51.210402,
      "longitude": 6.798314,
      "zoom": 16
    },
    "isFavorite": false,
    "isPremium": false,
    "rating": 2.9
  },
  {
    "id": "1823d677-c3d6-4bbb-bf0e-251c83e61f5f",
    "title": "The Pondhouse - A Magical Place",
    "type": "room",
    "price": 269,
    "previewImage": "https://15.design.htmlacademy.pro/static/hotel/14.jpg",
    "city": {
      "name": "Dusseldorf",
      "location": {
        "latitude": 51.225402,
        "longitude": 6.776314,
        "zoom": 13
      }
    },
    "location": {
      "latitude": 51.211402,
      "longitude": 6.756314000000001,
      "zoom": 16
    },
    "isFavorite": false,
    "isPremium": true,
    "rating": 4.5
  },
  {
    "id": "81bebf40-20e8-4155-a3ad-21ef785321a4",
    "title": "Loft Studio in the Central Area",
    "type": "house",
    "price": 885,
    "previewImage": "https://15.design.htmlacademy.pro/static/hotel/5.jpg",
    "city": {
      "name": "Dusseldorf",
      "location": {
        "latitude": 51.225402,
        "longitude": 6.776314,
        "zoom": 13
      }
    },
    "location": {
      "latitude": 51.228402,
      "longitude": 6.784314,
      "zoom": 16
    },
    "isFavorite": false,
    "isPremium": false,
    "rating": 3.5
  },
  {
    "id": "1d8a9aee-c6c7-4df1-9512-3ac8292d699f",
    "title": "Waterfront with extraordinary view",
    "type": "apartment",
    "price": 324,
    "previewImage": "https://15.design.htmlacademy.pro/static/hotel/4.jpg",
    "city": {
      "name": "Dusseldorf",
      "location": {
        "latitude": 51.225402,
        "longitude": 6.776314,
        "zoom": 13
      }
    },
    "location": {
      "latitude": 51.204402,
      "longitude": 6.7773140000000005,
      "zoom": 16
    },
    "isFavorite": false,
    "isPremium": true,
    "rating": 1.5
  },
  {
    "id": "06445b47-a0b3-415d-91e9-281a73466f7e",
    "title": "Tile House",
    "type": "room",
    "price": 121,
    "previewImage": "https://15.design.htmlacademy.pro/static/hotel/9.jpg",
    "city": {
      "name": "Dusseldorf",
      "location": {
        "latitude": 51.225402,
        "longitude": 6.776314,
        "zoom": 13
      }
    },
    "location": {
      "latitude": 51.217402,
      "longitude": 6.7693140000000005,
      "zoom": 16
    },
    "isFavorite": false,
    "isPremium": false,
    "rating": 3.7
  },
  {
    "id": "f5390c61-c099-41c5-9488-380712865bfc",
    "title": "House in countryside",
    "type": "hotel",
    "price": 486,
    "previewImage": "https://15.design.htmlacademy.pro/static/hotel/5.jpg",
    "city": {
      "name": "Dusseldorf",
      "location": {
        "latitude": 51.225402,
        "longitude": 6.776314,
        "zoom": 13
      }
    },
    "location": {
      "latitude": 51.241402,
      "longitude": 6.782314,
      "zoom": 16
    },
    "isFavorite": false,
    "isPremium": true,
    "rating": 2.6
  },
  {
    "id": "02cc6c76-34e0-4010-a13a-18ed27299fe5",
    "title": "Canal View Prinsengracht",
    "type": "house",
    "price": 765,
    "previewImage": "https://15.design.htmlacademy.pro/static/hotel/3.jpg",
    "city": {
      "name": "Dusseldorf",
      "location": {
        "latitude": 51.225402,
        "longitude": 6.776314,
        "zoom": 13
      }
    },
    "location": {
      "latitude": 51.235402,
      "longitude": 6.800314,
      "zoom": 16
    },
    "isFavorite": false,
    "isPremium": false,
    "rating": 5
  },
  {
    "id": "749ce0d7-c039-4f0d-9c65-6d6d5761bb86",
    "title": "The Pondhouse - A Magical Place",
    "type": "apartment",
    "price": 110,
    "previewImage": "https://15.design.htmlacademy.pro/static/hotel/13.jpg",
    "city": {
      "name": "Dusseldorf",
      "location": {
        "latitude": 51.225402,
        "longitude": 6.776314,
        "zoom": 13
      }
    },
    "location": {
      "latitude": 51.237402,
      "longitude": 6.779314,
      "zoom": 16
    },
    "isFavorite": false,
    "isPremium": false,
    "rating": 4.6
  },
  {
    "id": "8a2be067-ccf1-4631-bf08-32363d526467",
    "title": "Waterfront with extraordinary view",
    "type": "house",
    "price": 903,
    "previewImage": "https://15.design.htmlacademy.pro/static/hotel/11.jpg",
    "city": {
      "name": "Dusseldorf",
      "location": {
        "latitude": 51.225402,
        "longitude": 6.776314,
        "zoom": 13
      }
    },
    "location": {
      "latitude": 51.237402,
      "longitude": 6.797314,
      "zoom": 16
    },
    "isFavorite": false,
    "isPremium": false,
    "rating": 1.2
  },
  {
    "id": "4b63a7af-7170-4b97-abe3-b2eb129618f9",
    "title": "The house among olive ",
    "type": "room",
    "price": 121,
    "previewImage": "https://15.design.htmlacademy.pro/static/hotel/17.jpg",
    "city": {
      "name": "Dusseldorf",
      "location": {
        "latitude": 51.225402,
        "longitude": 6.776314,
        "zoom": 13
      }
    },
    "location": {
      "latitude": 51.222402,
      "longitude": 6.786314,
      "zoom": 16
    },
    "isFavorite": false,
    "isPremium": true,
    "rating": 4.4
  },
  {
    "id": "df94bcc8-205a-4cac-97b2-b3bcc0b6c0b5",
    "title": "Penthouse, 4-5 rooms + 5 balconies",
    "type": "room",
    "price": 219,
    "previewImage": "https://15.design.htmlacademy.pro/static/hotel/7.jpg",
    "city": {
      "name": "Dusseldorf",
      "location": {
        "latitude": 51.225402,
        "longitude": 6.776314,
        "zoom": 13
      }
    },
    "location": {
      "latitude": 51.232402,
      "longitude": 6.800314,
      "zoom": 16
    },
    "isFavorite": false,
    "isPremium": true,
    "rating": 2.2
  },
  {
    "id": "5c3ebde8-68b2-412f-89da-832b2af3b66e",
    "title": "Amazing and Extremely Central Flat",
    "type": "apartment",
    "price": 129,
    "previewImage": "https://15.design.htmlacademy.pro/static/hotel/5.jpg",
    "city": {
      "name": "Dusseldorf",
      "location": {
        "latitude": 51.225402,
        "longitude": 6.776314,
        "zoom": 13
      }
    },
    "location": {
      "latitude": 51.216402,
      "longitude": 6.758314,
      "zoom": 16
    },
    "isFavorite": false,
    "isPremium": false,
    "rating": 2.4
  },
  {
    "id": "64aacfa1-9d3a-4d00-bdc0-f81865d70ccb",
    "title": "Amazing and Extremely Central Flat",
    "type": "house",
    "price": 629,
    "previewImage": "https://15.design.htmlacademy.pro/static/hotel/10.jpg",
    "city": {
      "name": "Dusseldorf",
      "location": {
        "latitude": 51.225402,
        "longitude": 6.776314,
        "zoom": 13
      }
    },
    "location": {
      "latitude": 51.205402,
      "longitude": 6.7613140000000005,
      "zoom": 16
    },
    "isFavorite": false,
    "isPremium": true,
    "rating": 4.5
  },
  {
    "id": "af42d26c-681d-495b-ac1f-094e54d246f8",
    "title": "Loft Studio in the Central Area",
    "type": "house",
    "price": 162,
    "previewImage": "https://15.design.htmlacademy.pro/static/hotel/2.jpg",
    "city": {
      "name": "Dusseldorf",
      "location": {
        "latitude": 51.225402,
        "longitude": 6.776314,
        "zoom": 13
      }
    },
    "location": {
      "latitude": 51.248402000000006,
      "longitude": 6.763314,
      "zoom": 16
    },
    "isFavorite": false,
    "isPremium": false,
    "rating": 1.6
  },
  {
    "id": "00ed500a-346d-44b6-a964-a4fd97bd9d60",
    "title": "Amazing and Extremely Central Flat",
    "type": "house",
    "price": 574,
    "previewImage": "https://15.design.htmlacademy.pro/static/hotel/16.jpg",
    "city": {
      "name": "Dusseldorf",
      "location": {
        "latitude": 51.225402,
        "longitude": 6.776314,
        "zoom": 13
      }
    },
    "location": {
      "latitude": 51.250402,
      "longitude": 6.7853140000000005,
      "zoom": 16
    },
    "isFavorite": false,
    "isPremium": true,
    "rating": 3.1
  },
  {
    "id": "8602b763-327e-4c99-90cb-3cc2c5dba794",
    "title": "The house among olive ",
    "type": "apartment",
    "price": 184,
    "previewImage": "https://15.design.htmlacademy.pro/static/hotel/14.jpg",
    "city": {
      "name": "Dusseldorf",
      "location": {
        "latitude": 51.225402,
        "longitude": 6.776314,
        "zoom": 13
      }
    },
    "location": {
      "latitude": 51.239402000000005,
      "longitude": 6.756314000000001,
      "zoom": 16
    },
    "isFavorite": false,
    "isPremium": true,
    "rating": 3.5
  },
  {
    "id": "9813f2ca-b868-409c-a41e-1245241e2a59",
    "title": "The house among olive ",
    "type": "apartment",
    "price": 301,
    "previewImage": "https://15.design.htmlacademy.pro/static/hotel/12.jpg",
    "city": {
      "name": "Dusseldorf",
      "location": {
        "latitude": 51.225402,
        "longitude": 6.776314,
        "zoom": 13
      }
    },
    "location": {
      "latitude": 51.243402,
      "longitude": 6.791314,
      "zoom": 16
    },
    "isFavorite": false,
    "isPremium": true,
    "rating": 1.2
  },
  {
    "id": "b548fdcf-08c2-45ab-a320-cf30c25e8e48",
    "title": "Perfectly located Castro",
    "type": "house",
    "price": 360,
    "previewImage": "https://15.design.htmlacademy.pro/static/hotel/2.jpg",
    "city": {
      "name": "Dusseldorf",
      "location": {
        "latitude": 51.225402,
        "longitude": 6.776314,
        "zoom": 13
      }
    },
    "location": {
      "latitude": 51.214402,
      "longitude": 6.764314000000001,
      "zoom": 16
    },
    "isFavorite": false,
    "isPremium": false,
    "rating": 4.6
  },
  {
    "id": "f90e65bd-4f79-4063-ac8f-38b14f6b2268",
    "title": "The house among olive ",
    "type": "house",
    "price": 201,
    "previewImage": "https://15.design.htmlacademy.pro/static/hotel/8.jpg",
    "city": {
      "name": "Dusseldorf",
      "location": {
        "latitude": 51.225402,
        "longitude": 6.776314,
        "zoom": 13
      }
    },
    "location": {
      "latitude": 51.225402,
      "longitude": 6.784314,
      "zoom": 16
    },
    "isFavorite": false,
    "isPremium": true,
    "rating": 4.5
  }
]
}
