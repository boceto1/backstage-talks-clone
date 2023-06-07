import Catalog from './components/Catalog';
import Information from './components/Information';
import mockData  from './utils/mockData.json';

export default function Home() {
  return (
    <div>
      <Information />
      <Catalog items={mockData}/>
    </div>
  );
}
