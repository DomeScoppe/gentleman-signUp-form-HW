import { texts } from '../../variables/texts'
import './Hero.css'
import {useState} from 'react'
import errorIcon from '../../assets/images/icon-error.svg'

const initialValues = {
  name : '',
  lastName : '',
  email : '',
  password : ''
}
  

const Form = () => {
  const [formData, setFormData] = useState(initialValues)
  const [formErrors, setFormErrors] = useState(initialValues)
    
    const { name, lastName, email, password } = formData
  // console.log(formErrors)
    const inputOnChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        })
      }

    const submitForm = (e) => {
        setFormErrors(initialValues)
        let errors = initialValues
        e.preventDefault()
        if(Object.values(formData).some(field=>!field)) Object.keys(formData).forEach(field => {
          console.log(formData[field])
            if (!formData[field]) errors={...errors, [field]: 'no puede estar vacío'}
        }); 
        if (email && !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email)) errors={...errors, email: 'Parece que esto no es un correo electrónico'};
        setFormErrors(errors)
        Object.values(errors).every(error=>!error) ? alert("Formulario enviado") : null
    }

  return (
    <div className='heroContainer'>
        <div className='row1'>
          <div>
            <h1>{texts.heroH1}</h1>
            <p>{texts.heroParagraph}</p>
            </div>
        </div>
          <div className='row2'>
            <div>Try it free 7 days</div>
          <form className='form' onSubmit={submitForm}>
            <div>
              <label htmlFor='name'></label>
                      <input type='text' id='name' className={formErrors.name ? 'inputError' : ''} placeholder='nombre' onChange={inputOnChange}/>
                      {formErrors.name && <><img src={errorIcon} className='errorIcon'/><span className='errorDetail'>{'El nombre ' + formErrors.name}</span></>}
            </div>
            <div>
              <label htmlFor='lastName'></label>
                      <input type='text' id='lastName' className={formErrors.lastName ? 'inputError' : ''} placeholder='apellido' onChange={inputOnChange}/>
                      {formErrors.lastName && <><img src={errorIcon} className='errorIcon'/><span className='errorDetail'>{'El apellido '+formErrors.lastName}</span></>}
            </div>
            <div>
              <label htmlFor='email'></label>
                      <input type='text' id='email' className={formErrors.email ? 'inputError' : ''} placeholder='correo electronico' onChange={inputOnChange}/>
                      {formErrors.email && <><img src={errorIcon} className='errorIcon'/><span className='errorDetail'>{!email ? 'El correo electronico '+formErrors.email : formErrors.email}</span></>}
            </div>
            <div>
              <label htmlFor='password'></label>
                      <input type='password' id='password' className={formErrors.password ? 'inputError' : ''} placeholder='contraseña' onChange={inputOnChange} />
                      {formErrors.password && <><img src={errorIcon} className='errorIcon'/><span className='errorDetail'>{'La contraseña '+formErrors.password}</span></>}
            </div>
            <button>{texts.heroFormButton}</button>
            <span>By clicking button, you are agreeing to our</span>
            </form>
          </div>
    </div>
  )
}

export default Form