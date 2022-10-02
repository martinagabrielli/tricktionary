import React, {useState} from 'react';
import Modal from 'react-modal';


export default function Trick({details}) {
    Modal.setAppElement('#root');
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
      setIsOpen(true);
    }
  
    function afterOpenModal() {
    //   references are now sync'd and can be accessed.
    //   subtitle.style.color = '#f00';
    }
  
    function closeModal() {
      setIsOpen(false);
    }

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        }
    };

    return <>
        <section className="trick__single col-lg-4 text-center">
            <div className="trick__inner" onClick={openModal}>
                <div className="trick__background-image" style={{backgroundImage: `url(${details.image})`}}>
                    <button className="trick__background-button">Learn</button>
                </div>
                <h1 className="trick__single-title">{details.name}</h1>
                <p>{details.description}</p>
                <div className="d-flex justify-content-center">
                    <p>Difficulty:</p>
                    <span> </span>
                    <p>{details.difficulty}/5</p>
                </div>
                
            </div>
        </section>
        <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
        >
            <button className="trick__modal-close" onClick={closeModal}>close</button>
            <div className="trick__modal-content d-flex justify-content-center flex-column">
                <h2 className="trick__modal-title text-center">{details.name}</h2>
                <img className="trick__modal-image" src={details.image} />
            </div>
        </Modal>
    </>
}