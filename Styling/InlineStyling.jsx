import React from 'react'

function InlineStyling() {
    const cardStyle = {
        width: '15rem',
        padding: '1rem',
        margin: '1rem',
        boxShadow: '0.25rem 0.25rem 11px 3px #CCC',
        borderRadius: '0.25rem',

        textAlign: 'center',
    }
    return (
        <div >
            <h1>Inline Styling in React Js</h1>
            <div style={{ display: 'flex',flexWrap:'wrap' }}>
                <div style={cardStyle}>
                    <img style={{ width: '15rem', borderRadius: '0.25rem', backgroundColor: '#fff' }} src="https://cdn.pixabay.com/photo/2017/01/31/21/23/avatar-2027366_1280.png" alt="human" />
                    <div>
                        <h3>Ankit Goel</h3>
                        <p>SoftWare Devloper</p>
                    </div>
                </div>
                <div style={cardStyle}>
                    <img style={{ width: '15rem', borderRadius: '0.25rem', backgroundColor: '#fff' }} src="https://cdn.pixabay.com/photo/2017/01/31/21/23/avatar-2027366_1280.png" alt="human" />
                    <div>
                        <h3>Ankit Goel</h3>
                        <p>SoftWare Devloper</p>
                    </div>
                </div>
                <div style={cardStyle}>
                    <img style={{ width: '15rem', borderRadius: '0.25rem', backgroundColor: '#fff' }} src="https://cdn.pixabay.com/photo/2017/01/31/21/23/avatar-2027366_1280.png" alt="human" />
                    <div>
                        <h3>Ankit Goel</h3>
                        <p>SoftWare Devloper</p>
                    </div>
                </div>
                <div style={cardStyle}>
                    <img style={{ width: '15rem', borderRadius: '0.25rem', backgroundColor: '#fff' }} src="https://cdn.pixabay.com/photo/2017/01/31/21/23/avatar-2027366_1280.png" alt="human" />
                    <div>
                        <h3>Ankit Goel</h3>
                        <p>SoftWare Devloper</p>
                    </div>
                </div>
                <div style={cardStyle}>
                    <img style={{ width: '15rem', borderRadius: '0.25rem', backgroundColor: '#fff' }} src="https://cdn.pixabay.com/photo/2017/01/31/21/23/avatar-2027366_1280.png" alt="human" />
                    <div>
                        <h3>Ankit Goel</h3>
                        <p>SoftWare Devloper</p>
                    </div>
                </div>
                <div style={cardStyle}>
                    <img style={{ width: '15rem', borderRadius: '0.25rem', backgroundColor: '#fff' }} src="https://cdn.pixabay.com/photo/2017/01/31/21/23/avatar-2027366_1280.png" alt="human" />
                    <div>
                        <h3>Ankit Goel</h3>
                        <p>SoftWare Devloper</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InlineStyling