import { useState } from 'react'
import { Card } from './Card'
import './Formulario.css'

export function Formulario() {
  const [name, setName] = useState('')
  const [game, setGame] = useState('')
  const [error, setError] = useState('')
  const [error2, setError2] = useState('')
  const [submitedValues, setSubmitedValues] = useState()
  const [submitedCard, setSubmitedCard] = useState()

  const onChangeName = (e) => setName(e.target.value)
  const onChangeGame = (e) => setGame(e.target.value)

  const handleSubmit = (e) => {
    e.preventDefault()

    if (name.trim().length < 3) {
      setError('El nombre no puede tener menos de 3 caracteres')
    } else {
      setError()
    }

    if (game.trim().length < 6) {
      setError2('El juego no puede tener menos de 6 caracteres')
    } else {
      setError2()
    }

    if (name.trim().length >= 3 && game.trim().length >= 6) {
      setSubmitedCard(true)
      setSubmitedValues({
        name,
        game,
      }
      )
      setName('')
      setGame('')
    }
  }

  return (
    <>
      <div className='formularioP'>
        <h3>Formulario</h3>
        <form className='formulario' onSubmit={handleSubmit}>
          <label>Nombre: </label>
          <input
            type='text'
            placeholder='Ingrese su nombre'
            value={name}
            onChange={onChangeName}
          />
          {error ? <p>{error}</p> : undefined}
          <label>Juego Favorito: </label>
          <input
            type='text'
            placeholder='Ingrese su juego favorito'
            value={game}
            onChange={onChangeGame}
          />
          {error2 ? <p>{error2}</p> : undefined}
          <button type='submit'>Enviar</button>
        </form>
        {submitedCard ? <Card name={submitedValues.name} game={submitedValues.game} /> : undefined}
      </div>
    </>
  )
}
