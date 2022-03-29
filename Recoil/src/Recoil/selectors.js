import { selector, selectorFamily } from "recoil";
import { peopleState, counterState } from './atoms';

export const peopleSelector = selectorFamily({
  key: 'peopleSelector',
  get: (newPerson) => ({get}) => {
    if (newPerson) {
      const people = get(peopleState);
      return [...people, newPerson]
    };
    return get(peopleState)
  },
})

export const counterSquared = selector({
  key: 'counterSquared',
  get: ({ get }) => {
    return get(counterState) ** 2;
  }
})