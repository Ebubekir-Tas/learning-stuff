import { useGetMsg } from "../Hooks/useRQuery";

export const SampleUseQuery = () => {
  const { data } = useGetMsg();

  return (
    <div>
      Cached message: {data?.message}
    </div>
  );
};
