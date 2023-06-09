import Catalog from 'components/Catalog';
import Information from 'components/Information';
import { useMemo } from 'react';
import mockData  from 'utils/mockData.json';

export default function Home() {
  const issues = useMemo(
    () =>
      mockData.map((item) => ({
        id: item.id,
        title: item.title,
      })),
    [mockData]
  );

  return (
    <div>
      <Information items={issues} />
      <Catalog items={mockData}/>
    </div>
  );
}
