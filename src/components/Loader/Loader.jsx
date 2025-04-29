import { InfinitySpin } from 'react-loader-spinner';
import css from './Loader.module.css';

const Loader = () => {
  return (
    <div className={css.backdrop}>
      <InfinitySpin
        visible={true}
        width="200"
        color="#87CEFAFF"
        ariaLabel="infinity-spin-loading"
      />
    </div>
  );
};
export default Loader;
