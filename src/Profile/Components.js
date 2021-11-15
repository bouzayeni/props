import React from 'react'

const Components = (props) => {
    return (
        <div>
            {props.Name}
            <p>{props.Job}</p>
            {props.Bt}
            {props.children}
            {props.alertFct()}
        </div>
    )
}

export default Components

