import Modal from '../components/react-modal';
import PopupModal from '../components/react-modal/modal-containers/popup';
import AlertUser from '../components/modals/alert-user/';


import autobind from '../utils/autobind';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeModal: false,
    }

    autobind(this);
  }

  handleButtonClick() {
    this.setState({
      activeModal: !this.state.activeModal,
    });
  }

  handleModalClose() {
    this.setState({
      activeModal: false,
    });
  }

  render() {
    const { activeModal } = this.state;

    const buttonText = (!activeModal)
      ? 'show modal'
      : 'hide modal'
    ;

    return (
      <div>
        <button onClick={this.handleButtonClick}>{buttonText}</button>

        <Modal onClose={this.handleModalClose}>
          <PopupModal>
            <AlertUser />
          </PopupModal>
        </Modal>
      </div>
    );
  }
}
;

export default App;
