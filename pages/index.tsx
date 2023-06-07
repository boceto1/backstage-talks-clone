import CatalogItem, { ICatalogItem } from './components/CatalogItem';
import Information from './components/Information';

// Temp: Delete this
const mockCatalogItem: ICatalogItem = {
  id: 'issue-1',
  title: 'Issue 1',
  background: '#EF5F8D',
  image: '/catalog/cover_issue_1.png',
};

export default function Home() {
  // Temp: Delete this
  const { id, title, background, image } = mockCatalogItem;

  return (
    <div>
      <Information />
      <CatalogItem
        id={id}
        title={title}
        background={background}
        image={image}
      />
    </div>
  );
}
