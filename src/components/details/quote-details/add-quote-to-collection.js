import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {Modal, Button, Form} from "react-bootstrap";
import collectionActions from "../../../actions/collection-actions";

const AddQuoteToCollection = (
    {
        show,
        handleClose,
        getMyCollections,
        collectionOptions,
        userId,
        addQuoteToCollection
    }) => {

    const [collectionChoice, setCollectionChoice] = useState("");

    useEffect(() => {
        getMyCollections(userId)
    }, [])

    const handleAddToCollection = () => {
        if(collectionChoice !== "") {
            addQuoteToCollection(collectionChoice)
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
                                      onChange={event => setCollectionChoice(event.target.value)}>
                            <option value={""}>Select a Collection</option>
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
    userId: state.profileData.id,
    collectionOptions: state.collectionOptions
})

const dtpm = (dispatch) => ({
    //TODO: when do we get the possible collections?
    getMyCollections: (userId) => collectionActions.getMyCollections(dispatch, userId),
    addQuoteToCollection : (collectionId, quoteId) =>
        collectionActions.addQuoteToCollection(dispatch, collectionId, quoteId)
})

export default connect(stpm, dtpm)(AddQuoteToCollection);