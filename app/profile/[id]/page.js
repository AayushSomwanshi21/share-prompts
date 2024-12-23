"use client"

import { useEffect, useState } from 'react'
import { useSearchParams } from "next/navigation"

const ViewProfile = ({ params }) => {

    const [posts, setPosts] = useState([]);
    const searchParams = useSearchParams();
    const userName = searchParams.get('name');

    useEffect(() => {

        const fetchPosts = async () => {

            const response = await fetch(`/api/users/${params?.id}/posts`);
            const data = await response.json();
            setPosts(data);
        }

        if (params?.id) {
            fetchPosts();
        }

    }, [params.id]);

    return (
        <Profile
            name="My"
            desc="Welcome to your Profile"
            data={posts}
        />

    )
}

export default ViewProfile