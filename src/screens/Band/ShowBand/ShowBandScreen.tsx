import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BandType } from '../../../@types/@types';
import DataCardGrid from '../../../design-system/Data-cards/data-card-grid/DataCardGrid';
import DataCard from '../../../design-system/Data-cards/data-card/DataCard';
import Container from '../../../design-system/Layout/Container/Container';
import Text from '../../../design-system/Texts/Text/Text';
import Title from '../../../design-system/Texts/Title/Title';

export default function ShowBandScreen(){
  let { bandId } = useParams();
  const [band, setBand] = useState<BandType>();
  useEffect(() => {
    axios.get(`http://localhost:6950/band/${bandId}`)
    .then(res => {
      setBand(res.data.data);
      console.log(band);
    })
  }, []);
  return (
    <div>
        <div className="flex flex-row rounded-lg border border-gray-200/80 bg-white p-6">
          <div className="relative">
            <img className="w-40 h-40 rounded-md object-cover" src="https://api.lorem.space/image/face?w=150&h=150"
              alt="User" />
            <div
              className="absolute -right-3 bottom-5 h-5 w-5 sm:top-2 rounded-full border-4 border-white bg-green-400 sm:invisible md:visible"
              title="User is online"></div>
          </div>
          <div className="flex flex-col px-6">
            <div className="flex h-8 flex-row">
              <Title>{band?.name}</Title>
            </div>
            <div className="my-2 flex flex-row space-x-2">
                <Text>{band?.style}</Text>
                <Text>{band?.city}</Text>
            </div>
            <DataCardGrid>
              <DataCard
                count={4}
                label="Members"
              />
              <DataCard
                count={4012}
                label="Fans"
              />
            </DataCardGrid>
          </div>
          <div className="w-100 flex flex-grow flex-col items-end justify-start">
            <div className="flex flex-row space-x-3">
              <button
                className="flex rounded-md bg-blue-500 py-2 px-4 text-white transition-all duration-150 ease-in-out hover:bg-blue-600">

                Follow
              </button>
              <button className="flex rounded-md bg-gray-100 py-2 px-1 text-white
              transition-all duration-150 ease-in-out hover:bg-gray-200">
              </button>
            </div>
          </div>
        </div>
    <Container>
      <Title>Description</Title>
      <Text>{band?.description}</Text>
    </Container>
  </div>
  );
}
