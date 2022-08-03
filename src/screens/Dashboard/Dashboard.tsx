import CardContainer from '../../design-system/Layout/card-container/CardContainer';
import Card from '../../design-system/Layout/card/Card';

const cardContent = [
  {
    title: 'Dashboard',
    content: 'Dashboard',
  },
  {
    title: 'Settings',
    content: 'Settings',
  },
  {
    title: 'Notifications',
    content: 'Notifications',
  },
  {
    title: 'Profile',
    content: 'Profile',
  }
]

export default function Dashboard(){
  return (
    <CardContainer>
      {cardContent.map(({title, content}) => (
        <Card title={title}>
          {content}
        </Card>
      ))}
    </CardContainer>
  );
}
