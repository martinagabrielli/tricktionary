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
            style={customStyles}
        >
            <button className="trick__modal-close" onClick={closeModal}>close</button>
            <div className="trick__modal-content container-fluid">
                <div className="trick__modal-row row">
                    <div className="trick__modal-col-1 col-6">
                        <img className="trick__modal-image" src={details.image} />
                    </div>
                    <div className="trick__modal-col-2 col-6">
                        <h2 className="trick__modal-title">{details.name}</h2>
                        <p className="trick__modal-description">{details.description}</p>
                        {details.prerequisites ?
                        <div className="trick__modal-prerequisites">
                            <h4>Prerequisites</h4>
                            <div class="trick__modal-prerequisites-wrapper d-flex">
                                {details.prerequisites.map((prerequisite, i) =>
                                    <p>{prerequisite.charAt(0).toUpperCase() + prerequisite.slice(1)} {i === details.prerequisites.length - 1 ? '' : <span>/ </span>}</p>
                                )}
                            </div>
                        </div>
                        : null}
                        {details.resources ?
                        <div className="trick__modal-resources">
                            <h4>Resources</h4>
                            <div class="trick__modal-resources-wrapper d-flex flex-column">
                                {details.resources.map((resource, i) =>
                                    <a key={i} href={resource.link} target="blank">{resource.title}</a>
                                )}
                            </div>
                        </div>
                        : null}
                    </div>
                </div>
            </div>
        </Modal>
    </>
}