import React, {useState} from "react";
import {connect} from "react-redux";
import {Modal, Button, Form} from "react-bootstrap";
import collectionActions from "../../../../actions/collection-actions";

const CreateCollectionModal = (
    {
        show,
        handleClose,
        profileData,
        createCollectionForUser
    }) => {

    const [collectionName, setCollectionName] = useState("");

    // TODO: Need modal for this
    const handleCollectionCreation = () => {
        createCollectionForUser(profileData.id, {
            collectionName: collectionName,
            likes: 0,
            quoteIds: [],
            userId: profileData.id
        })
    }

    return(
        <div>
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header>
                    <Modal.Title>Add Quote to Collection</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <label htmlFor="collectionNameFld" className="form-label">Enter Collection Name</label>
                    <input className="form-control" id="collectionNameFld" placeholder="Collection name"
                           value={collectionName} onChange={event => setCollectionName(event.target.value)}/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={handleCollectionCreation}>
                        Create Collection
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

const stpm = (state, ownProps) => ({
    show: ownProps.show,
    handleClose: ownProps.handleClose,
    profileData: state.profileData,
    collectionOptions: state.collectionOptions,
    loggedIn: state.loggedIn
})

const dtpm = (dispatch) => ({
    createCollectionForUser : (userId, collection) =>
        collectionActions.createCollectionForUser(dispatch, userId, collection)
})

export default connect(stpm, dtpm)(CreateCollectionModal);