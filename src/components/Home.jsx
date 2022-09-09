import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setNameTrainer } from '../store/slices/nameTrainer.slice'
import FooterPoke from './headerFooter/FooterPoke'

const Home = () => {

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const handleSubmit = e => {
    e.preventDefault()
    const inputValue = e.target.name.value.trim()

    if(inputValue.length !== 0) {
      dispatch(setNameTrainer(inputValue))
      navigate('/pokedex')
    }
    e.target.name.value = ""
  }

  return (
    <article className='home'>
      <div className='col_home'>
        <img className='img__home title_img' src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/538px-International_Pok%C3%A9mon_logo.svg.png' alt="" />
      </div>
      
      <div className='home__login'>
        <div className="form_div">
          <h1 className='title__home'>Hi Trainer!</h1>
          <p className='message__home'>To Start give me your trainer name</p>
          <form className='form__home' onSubmit={handleSubmit}>
            <input className='input__home' id='name' type="text" required/>
            <button className='btn__home'> Catch them all</button>
          </form>
        </div>
          <img className='img-photo' src='https://res.cloudinary.com/dioxkbk6g/image/upload/v1569205854/Pokeapi/Generation1-Starters-1024x467_dqfrvt.png' alt="" />
      </div>
      <FooterPoke />
      
    </article>
  )
}

export default Home