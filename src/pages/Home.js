import { useEffect, useState } from "react";
import { PostCard } from "../components/PostCard";
import { getDocs , collection  } from "firebase/firestore";
import { db } from "../firebase/config";
import { ChangeTitle } from "../hooks/ChangeTitle";

export const Home = () => {
  ChangeTitle(" Home ");
  const [posts, setPosts] = useState([]);
  const postsRef = collection(db , "posts");
  useEffect(()=>{
    async function getPosts() {
      const data = await getDocs(postsRef);
      setPosts(data.docs.map((document) => (
        {...document.data() , id: document.id}
      )))
    }
        getPosts() 
      } ,
     [postsRef] 
  );

 
  return (
    <section>
      {posts.map((post) => (
        <PostCard post={post} key={post.id} />
      ))}
    </section>
  );
};
