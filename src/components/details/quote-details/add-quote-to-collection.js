import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {Modal, Button, Form} from "react-bootstrap";
import collectionActions from "../../../actions/collection-actions";
import {useParams} from "react-router-dom";

const AddQuoteToCollection = (
    {
        show,
        handleClose,
        getMyCollections,
        collectionOptions,
        addQuoteToCollection,
        loggedIn,
        profileData
    }) => {

    const {quoteId} = useParams();

    const [collectionChoice, setCollectionChoice] = useState(0);

    useEffect(() => {
        if (loggedIn) {
            getMyCollections(profileData.id)
        }
    }, [])

    const handleAddToCollection = () => {
        if(collectionChoice !== 0) {
            addQuoteToCollection(collectionOptions.find(collection => collection.id === collectionChoice), quoteId)
            handleClose()
        }
    }

    return(
        <div>
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Quote to Collection</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group>
                        <Form.Label>Which collection to add to?</Form.Label>
                        <Form.Control as="select" value={collectionChoice}
                                      onChange={event => setCollectionChoice(parseInt(event.target.value))}>
                            <option value={0}>Select a Collection</option>
                            {
                                collectionOptions.map(collection =>
                                    <option key={collection.collectionId} value={collection.id}>
                                        {collection.collectionName}
                                    </option>
                                )
                            }

                        </Form.Control>
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={handleAddToCollection}>
                        Add quote
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
    //TODO: when do we get the possible collections?
    getMyCollections: (userId) => collectionActions.getMyCollections(dispatch, userId),
    addQuoteToCollection : (collection, quoteId) =>
        collectionActions.addQuoteToCollection(dispatch, collection, quoteId)
})

export default connect(stpm, dtpm)(AddQuoteToCollection);