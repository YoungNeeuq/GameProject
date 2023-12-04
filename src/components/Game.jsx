// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { playGame } from '../redux/actions'
import { gameSelector } from '../redux/selectors'
const Game = () => {
  const dispatch = useDispatch()
  const gameList = useSelector(gameSelector)
  const [choose, setChoose] = useState(1)
  const [randomNumber, setRandomNumber] = useState(null)
  const availableNumbers = [1, 2, 3]
  const [flatRender, setFlatRender] = useState(false)

  // Computer random rock-paper-scissors
  const generateRandomNumber = () => {
    const randomIndex = Math.floor(Math.random() * availableNumbers.length)
    const newRandomNumber = availableNumbers[randomIndex]
    setRandomNumber(newRandomNumber)
  }

  // use choose rock-paper-scissors
  const handleChoose = (data) => {
    setChoose(data)
  }

  // Logic rock-paper-scissors
  const handleLogic = () => {
    if (choose === randomNumber) {
      return 'Hòa'
    } else {
      if (
        (choose === 1 && randomNumber === 3) ||
        (choose === 2 && randomNumber === 1) ||
        (choose === 3 && randomNumber === 2)
      ) {
        return 'Người chơi thắng'
      } else {
        return 'Người chơi thua'
      }
    }
  }

  const handleRenderUser = () => {
    if (choose === 1) {
      return 'Kéo'
    } else if (choose === 2) {
      return 'Búa'
    } else {
      return 'Bao'
    }
  }

  const handleRenderComputer = () => {
    if (gameList.computerChoose === 1) {
      return 'Kéo'
    } else if (gameList.computerChoose === 2) {
      return 'Búa'
    } else {
      return 'Bao'
    }
  }

  // handle Play Game
  const handlePlay = () => {
    setFlatRender(true)
    generateRandomNumber()
    handleLogic()
    console.log(handleLogic(), choose, randomNumber)
    dispatch(playGame({ result: handleLogic(), computerChoose: randomNumber }))
  }

  return (
    <div>
      <button onClick={handlePlay}>Play</button>
      <div className='flex gap-10'>
        <button onClick={() => handleChoose(1)}>Kéo</button>
        <button onClick={() => handleChoose(2)}>Búa</button>
        <button onClick={() => handleChoose(3)}>Bao</button>
      </div>
      <p>Your choose : {handleRenderUser()}</p>
      {flatRender ? <p>Computer choose : {handleRenderComputer()}</p> : ''}
      {flatRender ? <p> Result : {gameList.result}</p> : ''}
      <p>Số lần chơi : {gameList.numberOfTurns}</p>
    </div>
  )
}

export default Game
