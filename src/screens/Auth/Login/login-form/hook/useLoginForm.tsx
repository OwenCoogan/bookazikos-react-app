import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function useLoginForm(data:any){
  console.log(data.data.data)
  if(data.data.data.token){
    toast.success(`Successfully Logged In , Welcome ${data.data.data.user.name}!`, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    localStorage.setItem('Bookazikos-token', data.data.data.token);
    localStorage.setItem('Bookazikos-user', data.data.data.user.id);

  }
  else if(data.data.err!== undefined){
    toast.warn(data.data.err, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
}
