import classnames from 'classnames/bind';
import styles from './main.scss';

const cx = classnames.bind(styles);

const Modal = props => {
  return (
    <div className={cx('modal')}>
      <div className={styles['modal-container']}>
        {React.cloneElement(React.Children.only(props.children), {
          onClose: props.onClose,
          onShow: props.onShow,
        })}
      </div>
    </div>
  );
};

Modal.propTypes = {
  children: PropTypes.element,
  onClose: PropTypes.func,
  onShow: PropTypes.func,
};

Modal.defaultProps = {
  onClose: () => {},
  onShow: () => {},
}

export default Modal;
