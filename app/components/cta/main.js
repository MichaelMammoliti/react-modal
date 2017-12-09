// Styles
import styles from './main.scss';
import classnames from 'classnames/bind';
const cx = classnames.bind(styles);

const Cta = ({ text, onClick, type }) => {
  if (!text) return null;

  return (
    <div
      className={cx('cta', {
        [`type-${type}`]: type,
      })}
      onClick={onClick}
    >
      <div className={styles['cta-text']}>
        <span>{text}</span>
      </div>
    </div>
  );
};


Cta.displayName = 'Cta';
Cta.propTypes = {
  type: PropTypes.string,
};

Cta.defaultProps = {
  type: 'submit',
};

export default Cta;