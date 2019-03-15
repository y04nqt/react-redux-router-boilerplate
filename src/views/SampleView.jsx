import React from 'React'

const SampleView = (props) => {
    return (
        <div id="box-chart" className={props.visibility ? '' : 'hide'}>
        </div>
    )
}

export default SampleView
