import { useGetMsg, useMutateMsg } from '../Hooks/useRQuery';

export const SampleUseMutate = () => {
  const { isLoading, data, error } = useGetMsg();  

  const { mutate } = useMutateMsg();

  const onSubmit = () => {
    const newMsg = {
      ...data,
      newMsg: "new message"
    };

    mutate(newMsg);
  };

  return (
    <>
      <h1>
        {isLoading && 'Fetching data'}
        {data?.message}
        {error && 'error fetching'}
      </h1>
      <div>
        <button
          onClick={onSubmit}
        >
          click for useMutation
        </button>
      </div>
      <h1>useMutation: {data?.newMsg || 'hook not yet called'}</h1>
      <pre>
        JSON dump:
        {JSON.stringify(data)}
      </pre>
  </>
  );
};
