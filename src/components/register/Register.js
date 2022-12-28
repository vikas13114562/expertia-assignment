import  {ReactComponent as Image} from './image.svg'

import RegisterForm from './RegisterForm'
import './register.css'

export default function Register() {

  
  return (
    <div className='register-div'>
      
        <RegisterForm />
        <div className='image-div'>
            <Image/>
        </div>
      
        
    </div>
  )
}
