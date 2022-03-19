import useMsg from "../Hooks/useMsg"

export const CachedMessage = () => {
  const { data } = useMsg();
  
  return (
    <div>
      Cached message: {data?.message}
    </div>
  )
}