'use client';

// import { type } from 'os';
import React, { FormEventHandler, useState } from 'react'
// import { usePosts } from '../store/index'
import useSWR from 'swr'
import { getPostsBySearch } from '../services/getPosts';

// type Props = {
//     onSearch: (value: any[]) => void;
// }

const PostSearch = () => {
    const { mutate } = useSWR('posts')
    const [search, setSearch] = useState('')
    // const getPostsBySearch = usePosts((state) => state.getPostsBySearch)

    const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault()

        const posts = await getPostsBySearch(search)

        mutate(posts)
    }

  return (
    <form className='form' onSubmit={handleSubmit}>
        <input 
            type="search"
            placeholder='search'
            value={search} 
            onChange={(e) => setSearch(e.target.value)}
            className= 'input'
        />

       <button className='btn' type='submit'>
          Search
       </button>
    </form>
  )
}

export { PostSearch }


