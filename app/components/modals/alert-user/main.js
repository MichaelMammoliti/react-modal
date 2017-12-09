import Cta from '../../cta';

import styles from './main.scss';

const AlertUser = props => {
  return (
    <div className={styles['alert-user']}>

      <div className={styles['alert-user-header']}>

      </div>
      <div className={styles['alert-user-content']}>

      </div>
      <div className={styles['alert-user-footer']}>

        <div className={styles['cta-container']}>
          <div className={styles['cta-container-item']}>
            <Cta
              text='Remind me later'
              type='cancel'
            />
          </div>

          <div className={styles['cta-container-item']}>
            <Cta
              text='Ok, Got it!'
              type='submit'
            />
          </div>
        </div>
      </div>

    </div>
  );
};

AlertUser.displayName = 'AlertUser';
AlertUser.propTyeps = {
  onConfirm: PropTypes.func,
};
AlertUser.defaultProps = {
  onConfirm: () => {},
};

export default AlertUser;