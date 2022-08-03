import { SettingsBackupRestore } from '@mui/icons-material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BandType } from '../../../../@types/@types';
import Card from '../../../../design-system/Layout/card/Card';


export default function BandsInfoCard(){
  const [bands, setBands] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:6950/band/all')
    .then(res => {
      setBands(res.data.data);
    })
  }, []);
  return (
    <Card
      title='Bands'
    >
      <ul>
        {bands.map((band: BandType) => (
          <li key={band.id}>
            <Link to={`/band/${band.id}`}>
              {band.name}
            </Link>
          </li>
        ))}
      </ul>
      <Link
        to='/create-band'
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'

      >
        Create Band
      </Link>
    </Card>
  )
}
