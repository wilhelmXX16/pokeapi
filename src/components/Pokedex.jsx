import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import FooterPoke from './headerFooter/FooterPoke'
import HeaderPoke from './headerFooter/HeaderPoke'
import PokemonCard from './Pokedex/PokemonCard'
import SearchInput from './Pokedex/SearchInput'
import SelectType from './Pokedex/SelectType'
import './style/pokedex.css'

const Pokedex = () => {

  const [pokemons, setPokemons] = useState()
  const [pokeSearch, setPokeSearch] = useState()
  const [optionType, setOptionType] = useState('All')

  useEffect(() => {
    if(optionType !== 'All'){
      const URL = `https://pokeapi.co/api/v2/type/${optionType}/`
      axios.get(URL)
        .then(res => {
          const arr = res.data.pokemon.map(e => e.pokemon)
          setPokemons({results: arr})
          })
        .catch(err => console.log(err))
      }else if(pokeSearch){
      //aqui esta la logica cuando el usiario busca por el imput
      
        const url = `https://pokeapi.co/api/v2/pokemon/${pokeSearch}`

        const obj = {
          results : [{url}]
        }
        setPokemons(obj)
    }else {
      //aqui cuando quiere ver todos los pokemon
      const URL = 'https://pokeapi.co/api/v2/pokemon'
        axios.get(URL)
        .then(res => setPokemons(res.data))
          
        .catch(err => console.log(err))
      //aqui es la logica cuando el usuario filtra por tipos
      
    }
  }, [pokeSearch, optionType])

//  console.log(optionType)
  
  const nameTrainer = useSelector(state => state.nameTrainer)

  return (
    <div className='cards'>
      <HeaderPoke />
      <h1 className='cards__title'>Welcome <span className='name_user'>{nameTrainer}</span>, bienvenido a tu pokedex </h1>
      <div className='cards__search'>
        <SearchInput setPokeSearch={setPokeSearch} setOptionType={setOptionType}/>
        <SelectType setOptionType={setOptionType} optionType={optionType} setPokeSearch={setPokeSearch}/>
      </div>
      
      <div className='cards__container'>
        {
          pokemons?.results.map(pokemon => (
            <PokemonCard 
              key={pokemon.url}
              url={pokemon.url}
            />
          ))
        }
      </div>
      {/* <FooterPoke /> */}
    </div>
  )
}

export default Pokedex