import React from 'react';

export const Items = (props) => {
    return (
        <ul className="demo-list-icon mdl-list">
            {props.listComponent.state.items.map((item, index) => {
                return <li key={index} className="mdl-list__item" style={{borderBottom: '1px solid #ccc'}}>
                    <span className="mdl-list__item-primary-content">
                        <i className="material-icons mdl-list__item-icon">person</i>
                        {index + 1}: {item.name}
                    </span>

                    <span style={{float: 'right'}}>
                        <button className="mdl-button mdl-js-button mdl-button--icon mdl-button--colored"
                                onClick={(event) => { props.listComponent.editItem(event, index); }}>
                            <i className="material-icons">edit</i>
                        </button>
                        <button className="mdl-button mdl-js-button mdl-button--icon mdl-button--colored"
                                onClick={(event) => { props.listComponent.deleteItem(event, index); }}>
                            <i className="material-icons">delete</i>
                        </button>
                    </span>
                </li>
            })}
        </ul>
    );
};
