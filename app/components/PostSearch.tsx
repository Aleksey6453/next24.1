'use client';

import { type } from 'os';
import React, { FormEventHandler, useState } from 'react'
// import { getPostsBySearch } from '../services/getPosts';

type Props = {
    onSearch: (value: any[]) => void;
}

const PostSearch = () => {

    const [search, setSearch] = useState('')
    const getPostsBySearch = usePosts(state => state.getPostsBySearch)

    const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault()

        await getPostsBySearch(search)
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

export default PostSearch


