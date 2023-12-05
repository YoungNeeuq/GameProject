import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { playGame } from '../redux/playSlice'
import { useAppSelector } from '../redux/Hook'

import './game.css'
const Game = () => {
  const dispatch = useDispatch()
  const gameList = useAppSelector((state) => state.play)
  const [choose, setChoose] = useState(1)
  const [win, setWin] = useState(0)
  const [randomNumber, setRandomNumber] = useState(3)
  const availableNumbers = [1, 2, 3]
  const [flatRender, setFlatRender] = useState(false)
  const [isAnimationDone, setIsAnimationDone] = useState(false)
  const [buttonDisabled, setButtonDisabled] = useState(false)

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
  // handle Play Game
  const handlePlay = () => {
    setTimeout(() => {
      dispatch(playGame({ result: handleLogic(), computerChoose: randomNumber }))
      console.log(gameList)
    }, 1200)

    setFlatRender(true)
    setIsAnimationDone(false)
    generateRandomNumber()
    handleLogic()

    //Calculate round win
    if (handleLogic() === 'Người chơi thắng') {
      setTimeout(() => {
        setWin(win + 1)
      }, 1200)
    }

    // Prevent clicking while running
    if (!buttonDisabled) {
      setButtonDisabled(true)

      setTimeout(() => {
        setButtonDisabled(false)
      }, 1300)
    }
  }

  //End animation play
  const handleAnimationEnd = () => {
    setIsAnimationDone(true)
  }

  return (
    <div
      className='mx-auto w-fit text-center bg-cover bg-center h-screen'
      style={{ backgroundImage: `url('../../assets/img/bgr.jpg')` }}
    >
      <div className='text-white font-bold text-xl p-5 font-poppins'>
        <p className={` ${!flatRender ? 'hidden' : 'block'} text-4xl mb-5`}> {gameList.result}</p>
        <p className='mb-2'>Số lần chơi : {gameList.numberOfTurns}</p>
        <p>Số lần thắng : {win}</p>
      </div>
      <div className=' flex my-12 gap-20 justify-center'>
        <div className={` ${!isAnimationDone ? ' w-fit' : 'w-fit'}`} onAnimationEnd={handleAnimationEnd}>
          <img
            src={!isAnimationDone ? `../../assets/img/${choose}.png` : `../../assets/img/${choose}.png`}
            alt=''
            className='w-2/4 mx-auto'
          />
        </div>
        <div className={` ${!isAnimationDone ? 'animate-wiggle w-fit' : 'w-fit'}`} onAnimationEnd={handleAnimationEnd}>
          <img
            src={!isAnimationDone ? '../../assets/img/1.png' : `../../assets/img/${gameList.computerChoose}.png`}
            alt=''
            className='transform scale-x-[-1] w-2/4 mx-auto'
          />
        </div>
      </div>
      <div className='flex gap-20 justify-center mb-10'>
        <img
          src='../../assets/img/1.png'
          alt=''
          onClick={() => handleChoose(1)}
          className={`w-[5%] cursor-pointer rounded-xl ${
            choose === 1 ? 'border-bgrbtsignin border-4 scale-110' : 'border-4'
          } border-4 px-2 py-1`}
          style={{ pointerEvents: buttonDisabled ? 'none' : 'auto' }}
        />
        <img
          src='../../assets/img/2.png'
          alt=''
          onClick={() => handleChoose(2)}
          className={`w-[5%] cursor-pointer rounded-xl ${
            choose === 2 ? 'border-bgrbtsignin border-4 scale-110' : 'border-4'
          } border-4 px-2 py-1`}
          style={{ pointerEvents: buttonDisabled ? 'none' : 'auto' }}
        />
        <img
          src='../../assets/img/3.png'
          alt=''
          onClick={() => handleChoose(3)}
          className={`w-[5%] cursor-pointer rounded-xl ${
            choose === 3 ? 'border-bgrbtsignin border-4 scale-110' : 'border-4'
          } border-4 px-2 py-1`}
          style={{ pointerEvents: buttonDisabled ? 'none' : 'auto' }}
        />
      </div>
      <button
        className={`px-12 py-5 ${
          !buttonDisabled ? 'bg-bgrbtsignin' : 'bg-slate-600'
        } rounded-xl text-white text-2xl font-poppins font-bold `}
        onClick={handlePlay}
        disabled={buttonDisabled}
      >
        Play
      </button>
    </div>
  )
}

export default Game
