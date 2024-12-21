"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { signIn, signOut, useSession, getProviders } from 'next-auth/react'


const Nav = () => {

    const { data: session } = useSession()
    const [providers, setProviders] = useState(null)
    const [toggleDropDown, setToggleDropDown] = useState(false)


    useEffect(() => {
        const fetchProviders = async () => {
            const res = await getProviders();
            setProviders(res);
        };
        fetchProviders();
    }, []);


    return (
        <nav className='flex-between w-full mb-2  pt-3.5'>
            <Link href='/' className='flex gap-2 flex-centre'>
                <Image src='/assets/images/logo.svg' alt='logo' width={30} height={30} className='object-contain' />
                <p className='logo_text'>Share-Promts</p>
            </Link>

            {/*Desktop view*/}
            <div className='sm:flex hidden'>
                {session?.user ? (
                    <div className='flex gap-3 md:gap-5'>
                        <Link href='/create-prompt' className='black_btn'>
                            Create Prompt
                        </Link>
                        <button type='button' onClick={signOut} className='outline_btn'>
                            SignOut
                        </button>
                        <Link href='/profile'>
                            <Image src={session?.user.image} alt='profile' width={37} height={37} className='rounded-full' />
                        </Link>
                    </div>
                ) : (
                    <>
                        {providers && Object.values(providers).map((provider) => (
                            <button type='button' key={provider.name} onClick={() => signIn(provider.id)} className='black_btn'>
                                Sign In
                            </button>
                        ))}
                    </>
                )}
            </div>
            {/*Mobile view*/}
            <div className='sm:hidden flex relative'>
                {session?.user ? (
                    <div className='flex'>
                        <Image src={session?.user.image} alt='profile' width={37} height={37} className='rounded-full' onClick={() => { setToggleDropDown((prev) => !prev) }} />
                        {toggleDropDown && (
                            <div className='dropdown'>
                                <Link href='/profile' className='dropdown_link' onClick={() => setToggleDropDown(false)}>
                                    My Profile
                                </Link>
                                <Link href='/create-prompt' className='dropdown_link' onClick={() => setToggleDropDown(false)}>
                                    Create Prompt
                                </Link>
                                <button type='button' onClick={() => { setToggleDropDown(false); signOut() }} className='mt-5 w-full black_btn'>
                                    SignOut
                                </button>

                            </div>
                        )}
                    </div>
                ) : (
                    <>
                        {providers && Object.values(providers).map((provider) => (
                            <button type='button' key={provider.name} onClick={() => signIn(provider.id)} className='black_btn'>
                                Sign In
                            </button>
                        ))}
                    </>
                )}

            </div>
        </nav>
    )
}

export default Nav