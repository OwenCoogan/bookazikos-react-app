import BandsInfoCard from '../../components/Admin/Bands/bands-info-card/BandsInfoCard';
import CardContainer from '../../design-system/Layout/card-container/CardContainer';
import Card from '../../design-system/Layout/card/Card';

export default function Dashboard(){
  return (
    <CardContainer>
      <BandsInfoCard />
    </CardContainer>
  );
}
