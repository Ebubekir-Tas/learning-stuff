import { useRecoilValue } from "recoil"
import { counterSquared } from "../../Recoil"

export const CountSquared = () => {
  const countSquared = useRecoilValue(counterSquared);
  return (
    <h1 style={{ color: 'red' }}>
      Count Squared: {countSquared}
    </h1>
  );
};
