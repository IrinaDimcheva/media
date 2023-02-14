import { GoTrashcan } from 'react-icons/go';
import { useRemoveAlbumMutation } from '../+store';
import ExpandablePanel from './ExpandablePanel';
import Button from './Button';

function AlbumsListItem({ album }) {
  const [removeAlbum, results] = useRemoveAlbumMutation();

  const handleRemoveAlbum = () => {
    removeAlbum(album);
  };

  const header = (
    <>
      <Button className="mr-2" loading={results.isLoading} onClick={handleRemoveAlbum}>
        <GoTrashcan />
      </Button>
      {album.title}
    </>
  );

  return (
    <ExpandablePanel header={header}>
      List of photos in the album
    </ExpandablePanel>
  );
}

export default AlbumsListItem;
