import React from 'react'
import { useEffect  } from 'react'
import { useNavigate } from 'react-router-dom'

const Raf = () => {
   const navigate =  useNavigate()
    useEffect(() => {
        navigate('/products')
    }, [])
    
  return (
    <div>
      
    </div>
  )
}

export default Raf
