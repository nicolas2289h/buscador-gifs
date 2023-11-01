import { useState } from 'react'
import './App.css'
import AddCategory from './components/AddCategory'
import video from './assets/fondovideo.mp4'
import DisplayGifs from './components/DisplayGifs'

function App() {

  const [category, setCategory] = useState('puppies')

  return (
    <>
      <div className="text-center">
        <h2 className='text-center'>Buscador de Gifs</h2>
        <AddCategory setCategory={setCategory} />
        <video autoPlay loop muted preload='auto' className='video-bg' src={video}></video>
        <DisplayGifs category={category} />
      </div>
    </>
  )
}

export default App
