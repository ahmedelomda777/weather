'use client'
import { useRouter } from "next/navigation"
import { startTransition } from "react"
function ErrorBouldery({error,reset}:{error:Error,reset:()=>void}) {
    const router = useRouter()
    const reload =()=>{
        startTransition(()=>{
            router.refresh()
            reset()
        })
    }
  return (
    <div className="flex flex-col items-center justify-center h-full w-full gap-5">
    <h1>{error.message}</h1>
    <button onClick={reload} className="bg-blue-700 text-amber-50 p-2 cursor-pointer rounded-md">try again</button>
    </div>

  )
}

export default ErrorBouldery