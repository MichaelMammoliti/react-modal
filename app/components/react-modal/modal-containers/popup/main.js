import classnames from 'classnames/bind';
import styles from './main.scss';

const cx = classnames.bind();

const PopupModal = ({ children, onClose }) => {
  return (
    <div className={styles['popup-modal']}>
      <div
        className={styles['popup-modal-close-button']}
        onClick={onClose}
      >
        <i />
      </div>

      <div className={styles['popup-modal-children']}>
        {React.Children.only(children)}
      </div>
    </div>
  );
};

PopupModal.displayName = 'PopupModal';
PopupModal.propTypes = {
  children: PropTypes.element,
  onClose: PropTypes.func,
};

PopupModal.defaultProps = {
  onClose: () => {},
}

export default PopupModal;
