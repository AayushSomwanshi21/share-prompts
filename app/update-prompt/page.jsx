"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { useSession } from "next-auth/react"
import { useEffect, useState } from "react"
import Form from '@components/Form'
import { POST } from "@app/api/auth/[...nextauth]/route"

const EditPrompt = () => {

    const router = useRouter();
    //const { data: session } = useSession();
    const searchParams = useSearchParams();
    const promptID = searchParams.get('id');

    const [submitting, setSubmitting] = useState(false)
    const [post, setPost] = useState({
        prompt: '',
        tag: '',
    });

    const updatePrompt = async (e) => {
        e.preventDefault()
        setSubmitting(true)

        if (!promptID) {
            return alert("Prompt ID not found");
        }


        try {
            const response = await fetch(`/api/prompt/${promptID}`, {
                method: 'PATCH',
                body: JSON.stringify({
                    prompt: post.prompt,
                    tag: post.tag
                })
            })
            if (response.ok) {
                router.push('/')
                setSubmitting(true)
            }
        } catch (error) {
            console.log(error)
        } finally {
            setSubmitting(false);
        }
    }

    useEffect(() => {

        const getPromptDetails = async () => {
            const response = await fetch(`/api/prompt/${promptID}`);
            const data = await response.json();
            setPost({
                prompt: data.prompt,
                tag: data.tag
            });
        }
        if (promptID) {
            getPromptDetails();
        }
    }, [promptID]);

    return (
        <Form
            type='Edit'
            post={post}
            setPost={setPost}
            submitting={submitting}
            handleSubmit={updatePrompt}
        />
    )
}

export default EditPrompt