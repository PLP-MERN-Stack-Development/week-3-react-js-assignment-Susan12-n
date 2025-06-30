import Card from '../components/Card';
import Button from '../components/Button';

const Home = () => {
  return (
    
      <Card title="Welcome to My App">
        <p className="mb-4">This is a reusable card component using Tailwind CSS.</p>
        <div className="space-x-2">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="danger">Danger</Button>
        </div>
      </Card>
    
  );
};

export default Home;
