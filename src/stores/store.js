// /stores/store.js

import { defineStore } from 'pinia'

export const useStore = defineStore('store', {
  state: () => ({
    movieList: {
      anime: [
        {
          title: 'FireFly of the forest',
          id: 1,
          releaseDate: '12th, Oct, 2025',
        },
        {
          title: 'Demon Slayer',
          id: 2,
          releaseDate: '12th, Oct, 2024',
        },
        {
          title: 'Black Clover',
          id: 3,
          releaseDate: '12th, Oct, 2023',
        },
        {
          title: 'Attack On Titan',
          id: 4,
          releaseDate: '12th, Oct, 2023',
        },
        {
          title: 'KungFu Panda',
          id: 5,
          releaseDate: '12th, Oct, 2023',
        },
        {
          title: 'Rango',
          id: 6,
          releaseDate: '12th, Oct, 2023',
        },
        {
          title: 'Shield Hero',
          id: 7,
          releaseDate: '12th, Oct, 2023',
        },
        {
          title: 'Bad Guy',
          id: 8,
          releaseDate: '12th, Oct, 2023',
        },
      ],
      HollyWood: [
        { id: 1, title: 'D-Jungo Unchained', releaseDate: '15th, May, 2017' },
        { id: 2, title: 'Shutter Island', releaseDate: '12th, July, 1984' },
        {
          id: 3,
          title: '500 days of Summer',
          releaseDate: '30th, Nov, 2007',
        },
      ],
      Tv: [
        {
          id: 1,
          title: 'Game Of Throne',
          releaseDate: '1, Jan, 2014',
        },
        {
          id: 2,
          title: 'Breaking Bad',
          releaseDate: '1, Jan, 2005',
        },
      ],
      Kdrama: [
        {
          id: 1,
          title: "I don't know",
          releaseDate: '2026',
        },
        {
          id: 2,
          title: "I don't know 2",
          releaseDate: '2025',
        },
        {
          id: 3,
          title: "I don't know 3",
          releaseDate: '2024',
        },
      ],
    },
  }),
})
