import type {CommentProposal} from '../types.ts';

type ListCommentsProposalProps = {
  ListCommentsProposal: CommentProposal[];
}

const ListComments : ListCommentsProposalProps = {
  ListCommentsProposal :[{
    id: '75933a51-a454-49b8-8e05-7ae82d0745cc',
    comment: 'This villa is perfect in every way: the view on mountains and waterfalls, the hot tub and the villa itself. The evening here became a great continuation of our journeys over country.',
    date: new Date('2024-11-19T21:00:01.139Z'),
    rating: 5,
    user: {
      nameUser: 'Max',
      avatarUrl: 'https://15.design.htmlacademy.pro/static/avatar/10.jpg',
      isPro: true,
    }
  },
  {
    id: 'e6843f7a-b6b2-4993-8656-38c7333bd5f5',
    comment: 'What an amazing view! The house is stunning and in an amazing location. The large glass wall had an amazing view of the river!',
    date: new Date('2024-11-16T21:00:01.139Z'),
    rating: 5,
    user: {
      nameUser: 'Sophie',
      avatarUrl: 'https://15.design.htmlacademy.pro/static/avatar/2.jpg',
      isPro: false
    }
  },
  {
    id: '8e73652d-22a7-487f-88d2-420199a119dc',
    comment: 'We loved it so much, the house, the veiw, the location just great.. Highly reccomend :)',
    date: new Date('2024-11-13T21:00:01.139Z'),
    rating: 2,
    user: {
      nameUser: 'Jack',
      avatarUrl: 'https://15.design.htmlacademy.pro/static/avatar/4.jpg',
      isPro: false
    }
  },
  {
    id: '58ff7831-215c-45ed-a1f7-e7c400a73c3a',
    comment: 'We loved it so much, the house, the veiw, the location just great.. Highly reccomend :)',
    date: new Date('2024-11-17T21:00:01.139Z'),
    rating: 3,
    user: {
      nameUser: 'Emely',
      avatarUrl: 'https://15.design.htmlacademy.pro/static/avatar/8.jpg',
      isPro: false
    }
  },
  {
    id: 'c806d4c0-7a0e-4820-b925-a41ad2b63e3f',
    comment: 'Beautiful space, fantastic location and atmosphere, really a wonderful place to spend a few days. Will be back.',
    date: new Date('2024-11-17T21:00:01.139Z'),
    rating: 4,
    user: {
      nameUser: 'Isaac',
      avatarUrl: 'https://15.design.htmlacademy.pro/static/avatar/3.jpg',
      isPro: false
    }
  },
  {
    id: '58ff7831-215c-45ed-a1f7-e7c400a73c3a',
    comment: 'We loved it so much, the house, the veiw, the location just great.. Highly reccomend :)',
    date: new Date('2024-11-17T21:00:01.139Z'),
    rating: 3,
    user: {
      nameUser: 'Emely',
      avatarUrl: 'https://15.design.htmlacademy.pro/static/avatar/8.jpg',
      isPro: false
    }
  },
  {
    id: 'c806d4c0-7a0e-4820-b925-a41ad2b63e3f',
    comment: 'Beautiful space, fantastic location and atmosphere, really a wonderful place to spend a few days. Will be back.',
    date: new Date('2024-11-17T21:00:01.139Z'),
    rating: 4,
    user: {
      nameUser: 'Isaac',
      avatarUrl: 'https://15.design.htmlacademy.pro/static/avatar/3.jpg',
      isPro: false
    }
  }
  ]
};

export {ListComments};
