import { useRouteError } from "react-router-dom"

const Error = () => {
    const err = useRouteError()
  return (
    <div className="w-full">
        <p className="my-10 font-semibold text-red-500 text-3xl flex justify-center">Oops!! Something went Wrong!!</p>
        <p className="text-gray-500 font-bold flex justify-center">{err.data}</p>
    </div>
  )
}

export default Error