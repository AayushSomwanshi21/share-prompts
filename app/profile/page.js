"use client"

import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Profile from '@components/Profile'


const MyProfile = () => {

    const [posts, setPosts] = useState([]);
    const { data: session } = useSession()
    const router = useRouter();

    const handleEdit = (post) => {
        router.push(`/update-prompt?id=${post._id}`);
    }

    const handleDelete = async (post) => {

        const confirmation = confirm("Are you sure you want to delete this?");

        if (confirmation) {

            try {
                await fetch(`/api/prompt/${post._id.toString()}`, {
                    method: 'DELETE'
                });

                const filteredPosts = posts.filter((p) => p._id !== post._id);
                setPosts(filteredPosts);

            } catch (error) {
                console.log(error);
            }
        }


    }



    useEffect(() => {

        const fetchPosts = async () => {

            const response = await fetch(`/api/users/${session?.user.id}/posts`);
            const data = await response.json();
            setPosts(data);
        }

        if (session?.user.id) {
            fetchPosts();
        }

    }, [session?.user.id]);

    return (
        <Profile
            name="My"
            desc="Welcome to your Profile"
            data={posts}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
        />

    )
}

export default MyProfile