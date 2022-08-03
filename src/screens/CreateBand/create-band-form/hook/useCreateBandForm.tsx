import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function useCreateBandForm(data:any){
  if(data.data.data){
    toast.success('Successfully created Band!', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  }
  else if(data.data.err){
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
