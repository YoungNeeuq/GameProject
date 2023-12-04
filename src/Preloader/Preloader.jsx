import './preloader.css'
import { useEffect, useState } from 'react'
// eslint-disable-next-line react/prop-types
const Preloader = ({ active }) => {
  const preloaderClass = `preloader ${active ? 'active' : ''}`
  const [showText, setShowText] = useState(false)

  useEffect(() => {
    if (active) {
      // Hiển thị chữ từ từ sau 500ms
      const timer = setTimeout(() => {
        setShowText(true)
      }, 200)

      return () => clearTimeout(timer)
    } else {
      // Ẩn chữ khi preloader không active
      setShowText(false)
    }
  }, [active])
  return (
    <div className={preloaderClass}>
      {showText && (
        <h1 className=' prelogo lg:text-7xl md:text-5xl sm:text-4xl text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-llogo2 to-llogo1 '>
          Rock Paper Scissors
        </h1>
      )}
      {/* <div className="spinner lg:w-16 lg:h-16 w-8 h-8"></div> */}
    </div>
  )
}

export default Preloader
