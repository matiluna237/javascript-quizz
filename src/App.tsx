import './App.css'
import { Game } from './components/Game.tsx'
import { useResultsQuestions } from './customHooks/useResultsQuestions.ts'
import { EndScreen } from './components/EndScreen.tsx'
import { useEffect, useRef, useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { HomeScreen } from './components/HomeScreen.tsx'
import { LoadingResults } from './components/LoadingResults.tsx'



export default function App() {

  const { cantUnanswered } = useResultsQuestions();

  const [loading, setLoading] = useState(false);
  console.log(loading)
  
  const didMount = useRef(false); 
  const didMount2 = useRef(false); 

  console.log(didMount, didMount2)
  useEffect(() => { 
    if(didMount2.current){
      if(cantUnanswered == 0){
        setLoading(true)
      }
      didMount2.current = true
    }else{
      didMount2.current = true
    }

  },[cantUnanswered])
  


  const navigate = useNavigate();
  useEffect(() => {
    if(didMount.current){
      navigate('/loading-results') // Espera 3 segundos antes de navegar a la siguiente pantalla
      const timeout = setTimeout(() => {
        console.log('end-screen')
        navigate('/end-screen');
      }, 3000);
      didMount.current = true
      return () => clearTimeout(timeout); // Limpia el temporizador si el componente se desmonta antes de que se cumplan los 3 segundos
    }else{
      didMount.current = true
    }
  }, [loading]);








  return (
    <Routes>
      <Route path='/' element={<HomeScreen></HomeScreen>}></Route>
      <Route path='/game' element={<Game></Game>}></Route>
      <Route path='/end-screen' element={<EndScreen></EndScreen>}></Route>
      <Route path='/loading-results' element={<LoadingResults></LoadingResults>}></Route>
      <Route path='*' element={<App></App>}></Route>
    </Routes>
  
  )
}



