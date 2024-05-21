import { getAuth } from "firebase/auth";
import { deleteDoc , doc } from "firebase/firestore";
import { db } from "../firebase/config";
import { ChangeTitle } from "../hooks/ChangeTitle";
export const PostCard = ({post}) => {
  ChangeTitle("postCard");
  const auth = getAuth();
  const isAuth = JSON.parse(localStorage.getItem("isAuth")); 
  async function handleClick(){
    const  id = post.id ;
    const docRef = doc(db , "posts" , id);
    deleteDoc(docRef) ;
  }

  return (
    <div className="card">
      <p className="title">{post.title}</p>
      <p className="description">{post.description}</p>
      <p className="control">
        <span className="author">{post.author.name}</span>
          {isAuth &&  (auth.currentUser.uid === post.author.id) &&     <span className="delete"  onClick={() => handleClick()}> <i className="bi bi-trash3"></i> </span>}
      </p>
    </div>
  )
}


