import { useSelector } from 'react-redux';
import CampersList from '../../components/CamperList/CamperList';
import { selectFavorite } from '../../redux/selectors';
import styles from './Favorite.module.css';

export default function FavoritePage() {
  const favoriteCampers = useSelector(selectFavorite);
  return (
    <section className={styles.section}>
      <CampersList campers={favoriteCampers} />
    </section>
  );
}
