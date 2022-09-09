import React from 'react'

const SearchInput = ({setPokeSearch, setOptionType}) => {

    const handleSubmit = e =>{
        e.preventDefault()
        setPokeSearch(e.target.searchText.value.trim().toLowerCase())
        setOptionType('All')
        e.target.searchText.value= ""
    }

  return (
    <form className='form' onSubmit={handleSubmit}>
        <input id="searchText" type="text" required/>
        <label className='form_lbl' htmlFor="searchText">
          <span className='form_name'>Name Pokemon</span> 
        </label>
        <button className='form-btn'>Search</button>
    </form>
  )
}

export default SearchInput