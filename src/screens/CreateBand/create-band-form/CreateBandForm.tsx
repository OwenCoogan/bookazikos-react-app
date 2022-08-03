import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import SubmitInput from '../../../design-system/input/submit-input/SubmitInput';
import TextInput from '../../../design-system/input/text-input/TextInput';
import useCreateBandForm from './hook/useCreateBandForm';

export default function CreateBandForm() {
  const navigate = useNavigate();
  const handleSubmit = (event:any) => {
    event.preventDefault();

    axios.post(`http://localhost:6950/band/create`,{
      name : event.target.name.value,
      description : event.target.description.value,
      style : event.target.genre.value,
      city : event.target.city.value,
    })
    .then(res => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      useCreateBandForm(res);
      navigate('/dashboard');
    })
  }
  return <form className='mt-8' onSubmit={handleSubmit}>
    <div className='mx-auto max-w-lg'>
      <div className="py-2">
        <TextInput
          label="name"
          type="text"
          placeholder="Band Name"
        />
        <TextInput
          label="description"
          type="text"
          placeholder="Band Description"
        />
        <TextInput
          label="genre"
          type="text"
          placeholder="Band Genre"
        />
        <TextInput
          label="city"
          type="text"
          placeholder="Band City"
        />
        <SubmitInput
          label="Register"
        />
      </div>
    </div>
  </form>
}
