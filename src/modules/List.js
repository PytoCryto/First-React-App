import React, { Component } from 'react';
import { MyForm } from './MyForm';
import { Items } from './Items';

class List extends Component {
    constructor(props) {
        super(props);

        this.state = {
            inputValue: '',
            buttonState: '',
            editingCurrentIndex: '',
            items: [
                this.item(1, 'Jeppe'),
                this.item(2, '3M1L'),
                this.item(3, 'Mr.Switch'),
                this.item(4, 'Vin'),
            ],
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.setInputStateValue = this.setInputStateValue.bind(this);
    }

    /**
     * Generate an object with the given parameters
     *
     * @param id
     * @param name
     * @param params Optional parameters to merge with id and name
     * @returns object
     */
    item(id, name, params = {}) {
        return {
            id: id,
            name: name,
            ...params
        };
    }

    /**
     * Save the object to the items array
     *
     * @param payload
     * @param isEditing
     * @returns {List}
     */
    processPayload(payload, isEditing) {
        if (! isEditing) {
            // Merge the item with the rest of the items
            this.setState({
                items: [...this.state.items, payload],
            });
        } else {
            // Edit the current index and save the modified items
            let items = this.state.items.slice();

            items[this.state.editingCurrentIndex] = payload;

            this.setState({
                items: items,
                editingCurrentIndex: '', // Reset this to let React know we're done editing this index
            });
        }

        console.log('Saved item', payload);

        return this;
    }

    /**
     * Delete the item at the given index
     *
     * @param event
     * @param index
     */
    deleteItem(event, index) {
        event.preventDefault();

        console.log(`Deleted item id (${this.state.items[index].id}) at index (${index})`);

        let items = this.state.items.slice();

        items.splice(index, 1);

        // The solution above is cleaner than the following:
        //let items = this.state.items.filter((item, current) => {
        //    return current !== index; // We want to keep the items not matching the deleting index
        //});

        this.setState({
            items: items,
            editingCurrentIndex: '',
        });

        this.setInputStateValue('');
    }

    /**
     * Delete the item at the given index
     *
     * @param event
     * @param index
     */
    editItem(event, index) {
        event.preventDefault();

        console.log(`Editing item id (${this.state.items[index].id}) at index (${index})`);

        this.setState({
            editingCurrentIndex: index, // Do we need to store this value in the state? Not sure yet :/
        });

        this.setInputStateValue(this.state.items[index].name);

        document.getElementById('input_item_name').focus();
    }

    /**
     * Handle the form submission and process the data
     *
     * @param event
     */
    handleSubmit(event) {
        event.preventDefault();

        let itemId = this.state.items.length + 1;

        let editingId = this.state.editingCurrentIndex;

        // Check if the editing index is a valid numeric value,
        // then we know that we're not adding an item but rather editing one
        let isEditing = Number(parseFloat(editingId)) === editingId;

        if (isEditing) {
            itemId = editingId;
        }

        let payload = this.item(itemId, this.state.inputValue);

        this.processPayload(payload, isEditing)
            .setInputStateValue('');
    }

    /**
     * Set the input value and change buttonState
     *
     * @param value
     */
    setInputStateValue(value) {
        this.setState({
            inputValue: value,
            buttonState: value.trim() !== '',
        });
    }

    render() {
        return (
            <div className="mdl-grid center-items">
                <div className="mdl-cell mdl-cell--6-col mdl-cell--3-offset">
                    <h3>Items ({this.state.items.length})</h3>
                    <MyForm listComponent={this} />
                    <Items listComponent={this} />
                </div>
            </div>
        );
    }
}

export default List;
