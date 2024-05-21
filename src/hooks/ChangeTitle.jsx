import { useEffect } from "react";


export const ChangeTitle = (title) => {
    useEffect(() => {
document.title = `${title} -writeNode`
    } , [title])

  return null ;
}
