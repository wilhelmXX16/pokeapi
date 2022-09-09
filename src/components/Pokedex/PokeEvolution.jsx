import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const PokeEvolution = () => {

    const [evolution, setEvolution] = useState()

    const {name} = useParams()

    // useEffect(() => {
    //     URL = `https://pokeapi.co/api/v2/evolution-chain/${name}/`
    //     axios.get(URL)
    //         .then(res => setEvolution(res.data))
    //         .catch(err => console.log(err))
    // },[])

    // console.log(evolution)
  return (
    <div>PokeEvolution</div>
  )
}

export default PokeEvolution