import { addDoc , collection  } from "firebase/firestore";
import { db } from "../firebase/config";
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { ChangeTitle } from "../hooks/ChangeTitle";


export const CreatePost = () => {
  ChangeTitle(" Create Post");


const navigate = useNavigate();
  const postsRef = collection(db ,"posts") ;
  const auth = getAuth();


  async function handleSubmit(event){
  event.preventDefault();
  console.log(event);
  const title = event.target.title.value ;
  const description = event.target.description.value ;
  console.log(auth);
  const document  = {
    title : title ,
    description :description,
    author:{
      name:auth.currentUser.displayName,
      id:auth.currentUser.uid
    }
  }
  await addDoc(postsRef  , document);
  navigate("/");
  
  

}

  return (
    <section className="create">
         <div className="heading">
            <h1>Add New Post</h1>
         </div>

         <form className="createPost" onSubmit={handleSubmit}>
          <input type="text" className="title" name="title" placeholder="title" maxLength={50} required />
          <textarea name="description" placeholder="decription" className="description"></textarea>
          <button type="submit" className="submit">Create Post</button>
         </form>
    </section>
  )
}
