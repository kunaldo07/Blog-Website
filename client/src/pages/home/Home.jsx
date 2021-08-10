
import { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import SideBar from "../../components/sidebar/Sidebar";
import "./home.css";
import axios from "axios";
import { useLocation } from "react-router";

//we use context api as we need the information of the user in every page, as if we dont then we get returned back to register page every time...

export default function Home(){

    //initial stage=empty array
const [posts, setPosts] = useState([]);
//serach property for id of an person
//serach stores id
  const { search } = useLocation();

  //to fetch the posts
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts" + search);
      setPosts(res.data);
    };

    //call the above fn
    fetchPosts();
  }, [search]);

    return (
        <>
            <Header/>
            <div className="home">
                <Posts posts={posts}/>
                <SideBar/>
            </div>
        </>
    )
}