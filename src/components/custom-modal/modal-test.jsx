import { useState } from "react"
import Modal from "."
import './styles.css'

export default function ModalTest() {
    const [showModal, setShowModal] = useState(false)

    function handleToggleModalPopup(){
        setShowModal(!showModal)
    }

    function onClose(){
        setShowModal(false)
    }

    return(
        <div className='modal-button-container'>
            <button onClick={handleToggleModalPopup}>Open Modal Popup</button>
            {
                showModal && <Modal
                    id={'custom-id'}
                    onClose={onClose}
                    header={<h1>Customized Header</h1>}
                    body={<div>Customized body</div>}
                    footer={<h1>Customized Footer</h1>}
                />
            }
        </div>
    )
}
