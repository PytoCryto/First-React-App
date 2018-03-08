import React from 'react';

export const MyForm = (props) => {
    return (
        <form onSubmit={props.listComponent.handleSubmit}>
            <div className="mdl-textfield mdl-js-textfield" style={{marginRight: 15}}>
                <input className="mdl-textfield__input"
                       type="text"
                       id="input_item_name"
                       placeholder="Write something here..."
                       value={props.listComponent.state.inputValue}
                       onChange={(event) => { props.listComponent.setInputStateValue(event.target.value); }} />
                <label className="mdl-textfield__label" htmlFor="input_item_name" />
            </div>

            <button type="submit"
                    className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored"
                    disabled={!props.listComponent.state.buttonState}>
                Save
            </button>
        </form>
    );
};
