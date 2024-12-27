"use client"

import { use, useEffect, useState } from 'react'
import { useSearchParams } from "next/navigation"
import Profile from '@components/Profile'


const ViewProfile = ({ params }) => {

    const [posts, setPosts] = useState([]);
    const searchParams = useSearchParams();
    const userName = searchParams.get('name');
    const params_data = use(params)

    useEffect(() => {

        const fetchPosts = async () => {

            const response = await fetch(`/api/users/${params_data?.id}/posts`);
            const data = await response.json();
            setPosts(data);
        }

        if (params_data?.id) {
            fetchPosts();
        }

    }, [params_data.id]);

    return (
        <Profile
            name={userName}
            desc="Welcome to your Profile"
            data={posts}
        />

    )
}

export default ViewProfile