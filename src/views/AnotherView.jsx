import React from 'React'

const AnotherView = (props) => {
    return (
        <div id="another-box-chart" className={props.another_visibility ? '' : 'hide'}>
        </div>
    )
}

export default AnotherView
