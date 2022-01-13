import React from 'react'
function About(props) {
    document.title = "TextUtils - About"
    return (
        <>

            <h1 className={`text-${props.mode === 'dark' ? 'light' : 'dark'}`}>About Us</h1>
            <div className={`accordion my-4 text-${props.mode === 'dark' ? 'light' : 'dark'} bg-${props.mode === 'dark' ? 'dark' : 'light'}`} id="accordionPanelsStayOpenExample">
                <div className={`accordion-item text-${props.mode === 'dark' ? 'light' : 'dark'} bg-${props.mode === 'dark' ? 'dark' : 'light'}`}>
                    <h2 className="accordion-header" id="headingOne">
                        <button className={`accordion-button collapsed text-${props.mode === 'dark' ? 'light' : 'dark'} bg-${props.mode === 'dark' ? 'dark' : 'light'} border border-${props.mode==='dark'?'light':''}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" 
                        >
                            Who created <strong> &nbsp;TextUtils</strong>?
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className={`accordion-body border border-${props.mode==='dark'?'white':''}`}>
                            &#8594; This Web App is build by Omkar Desai.
                        </div>
                    </div>
                </div>
                <div className={`accordion-item text-${props.mode === 'dark' ? 'light' : 'dark'} bg-${props.mode === 'dark' ? 'dark' : 'light'}`}>
                    <h2 className="accordion-header" id="headingTwo">
                        <button className={`accordion-button collapsed text-${props.mode === 'dark' ? 'light' : 'dark'} bg-${props.mode === 'dark' ? 'dark' : 'light'} border border-${props.mode==='dark'?'light':''}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" >
                            Why&nbsp; <strong>TextUtils </strong>?
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className={`accordion-body border border-${props.mode==='dark'?'white':''}`}>
                            &#8594; TextUtils is made for those who want to format there sentences according to there needs.
                            You can use it for your daily purposes which will save your time.
                        </div>
                    </div>
                </div>
                <div className={`accordion-item text-${props.mode === 'dark' ? 'light' : 'dark'} bg-${props.mode === 'dark' ? 'dark' : 'light'}`}>
                    <h2 className="accordion-header" id="headingThree">
                        <button className={`accordion-button collapsed text-${props.mode === 'dark' ? 'light' : 'dark'} bg-${props.mode === 'dark' ? 'dark' : 'light'} border border-${props.mode==='dark'?'white':''}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" >
                            How To Use ?
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className={`accordion-body border border-${props.mode==='dark'?'white':''}`}>
                            &#8594; You Just have to Enter you Paragraph in the area given for input and Use the buttons located below the text. Click the buttons and get desired Text.
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About
