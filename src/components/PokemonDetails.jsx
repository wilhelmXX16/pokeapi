import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import FooterPoke from './headerFooter/FooterPoke'
import PokeEvolution from './Pokedex/PokeEvolution'
import StatPokemon from './Pokedex/StatPokemon'
import './style/styleDetail.css'



const PokemonDetails = () => {

  const [pokeInfo, setPokeInfo] = useState()

  const {name} = useParams()

  useEffect(() =>{
    const URL = `https://pokeapi.co/api/v2/pokemon/${name}/`
    axios.get(URL)
      .then(res => setPokeInfo(res.data))
      .catch(err => console.log(err))
  },[])
  //console.log(pokeInfo.id)
  //console.log(pokeInfo?.stats)
  //console.log(pokeInfo?.types)
  // console.log(pokeInfo?.abilities)
  return (
    <div className={`card_container bg-${pokeInfo?.types[0].type.name}`}>

      <article className='card_detail'>
        <header className={`card_heard bg-${pokeInfo?.types[0].type.name}`}>
          <img className='card_img' src={pokeInfo?.sprites.other['official-artwork'].front_default} alt="" />
          <h1 className='card_title'>{name}</h1>
          <hr className='card__hr'/>
          <div className='card_type_ability'>
            <div className='card_type'>
              <h3 className='title_info'>Type</h3>
              <ul className='card__list-type'>
                {
                  pokeInfo?.types.map(slot => (
                    <li className='card__item-type' key={slot.type.url}>{slot.type.name} </li>
                  ))
                }
              </ul>
            </div>
            <div className='card_abilities'>
              <h3 className='title_info'>Abilities</h3>
              <ul className='card__list-type'>
                {
                  pokeInfo?.abilities.map(atack => (
                    <li className='card__item-type' key={atack.ability.url}>{atack.ability.name} </li>
                  ))
                }
              </ul> 
            </div>
          </div>
        </header>
        <section className='card_section'>
          <div className='card_miniature'>
              <div className='card__normal'>
                {/* <PokeEvolution /> */}
                <h4 className='title_info'>NORMAL</h4>
                <div className='div_mini'>
                  <img className='img_mini' src={pokeInfo?.sprites['front_default']} alt="" />
                  <img className='img_mini' src={pokeInfo?.sprites['back_default']} alt="" />
                </div>
              </div>
              <div className='card__shiny'>
                <h4 className='title_info'>SHINY</h4>
                <div className='div_mini'>
                  <img className='img_mini' src={pokeInfo?.sprites['front_shiny']} alt="" />
                  <img className='img_mini' src={pokeInfo?.sprites['back_shiny']} alt="" />
                </div>
              </div>
          </div>
          <ul className='poke__info_list'>
              {
                pokeInfo?.stats.map(stat => (
                  <StatPokemon 
                    key={stat.stat.url}
                    infoStat={stat}
                    color={pokeInfo?.types[0].type.name}
                  />
                ))
              }
            </ul>
        </section>
      </article>
    {/* <FooterPoke /> */}
    </div>
  )
}

export default PokemonDetails