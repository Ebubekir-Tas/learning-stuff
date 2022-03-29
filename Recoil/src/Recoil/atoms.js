import { atom } from 'recoil';

export const counterState = atom({
  key: 'counterState',
  default: 0,
});

export const peopleState = atom({
  key: 'peopleState',
  default: [
  {
    name: 'Billie Jean',
    age: 30,
    country: 'USA',
  },
  {
    name: 'Michael Jackson',
    age: 50,
    country: 'USA'
  }
]
})