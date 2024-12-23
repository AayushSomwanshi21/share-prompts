"use client"

import { useEffect, useState } from "react"
import PromptCard from "./PromptCard"

const PromptCardList = ({ data, handleTagClick }) => {

    return (
        <div className="mt-16 prompt_layout">
            {data.map((post) => (
                <PromptCard
                    key={post._id}
                    post={post}
                    handleTagClick={handleTagClick}
                />
            ))}
        </div>
    )
}

const Feed = () => {

    const [searchText, setsearchText] = useState("");
    const [posts, setPosts] = useState([]);
    const [filteredposts, setFilteredposts] = useState([]);

    const handleSearchChange = (e) => {
        setsearchText(e.target.value);
        const filtered_posts = posts.filter((post) =>
            post.creator.username.toLowerCase().includes(searchText.toLowerCase()) ||
            post.tag.toLowerCase().includes(searchText.toLowerCase())
        );
        setFilteredposts(filtered_posts);
    }

    const handleTagClick = (promptTag) => {
        setsearchText(promptTag);
        const filtered_posts = posts.filter((post) =>
            post.tag.toLowerCase().includes(promptTag.toLowerCase())
        );
        setFilteredposts(filtered_posts);

    }

    useEffect(() => {

        const fetchPosts = async () => {

            const response = await fetch('/api/prompt');
            const data = await response.json();
            setPosts(data);
            setFilteredposts(data);
        }

        fetchPosts();
    }, []);

    return (
        <section className="feed" >
            <form className="relative w-full flex-centre">
                <input type="text" placeholder="Search for a tag or a username" value={searchText} onChange={handleSearchChange} required className="search_input peer" />
            </form>

            <PromptCardList
                data={searchText ? filteredposts : posts}
                handleTagClick={handleTagClick}
            />

        </section>
    )
}

export default Feed