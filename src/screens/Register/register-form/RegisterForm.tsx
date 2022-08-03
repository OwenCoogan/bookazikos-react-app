import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import SubmitInput from '../../../design-system/input/submit-input/SubmitInput';
import TextInput from '../../../design-system/input/text-input/TextInput';
import useRegisterForm from './hook/useRegisterForm';

export default function RegisterForm() {
  const navigate = useNavigate();
  const handleSubmit = (event:any) => {
    event.preventDefault();

    axios.post(`http://localhost:6950/auth/user/create`,{
      firstName : event.target.firstName.value,
      lastName : event.target.lastName.value,
      email: event.target.email.value,
      password: event.target.password.value,
    })
    .then(res => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      useRegisterForm(res);
      navigate('/login');
    })
  }
  return <form className='mt-8' onSubmit={handleSubmit}>
    <div className='mx-auto max-w-lg'>
      <div className="py-2">
        <TextInput
          label="firstName"
          type="text"
          placeholder="First Name"
        />
        <TextInput
          label="lastName"
          type="text"
          placeholder="Last Name"
        />
        <TextInput
          label="email"
          type="email"
          placeholder="Email"
        />
        <TextInput
          label="password"
          type="password"
          placeholder="Password"
        />
        <SubmitInput
          label="Register"
        />
      </div>
    </div>
  </form>
}
