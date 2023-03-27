    import React, { useState } from 'react'

    export default function About(props) {
        // const  [myStyle,setmyStyle] = useState({
        //     color : '#042743',
        //     backgroundColor : 'white'
        // });

    let myStyle = {
        color : props.mode === 'dark'? 'white' : '#042743',
        backgroundColor : props.mode === 'dark'? 'rgb(35 61 82)' : 'white',
        
        }

    return (
        <div className='container' style={{color : props.mode === 'dark'? 'white' : '#042743'}}>
            <h2 className='my-2'>About Us</h2>
        <div className="accordion" id="accordionExample">
    <div className="accordion-item">
        <h2 className="accordion-header" id="headingOne">
        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            Analyze Your text
        </button>
        </h2>
        <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={myStyle}>
            TextUtils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or ...
        </div>
        </div>
    </div>
    <div className="accordion-item">
        <h2 className="accordion-header" id="headingTwo">
        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            Free To Use
        </button>
        </h2>
        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={myStyle}>
            TextUtils is a free character counter tool that provieds instant character count & word count statistics for a given text. TextUtils reports the number of word and character. Thus it is suitable for writing text with word/character limit.
        </div>
        </div>
    </div>
    <div className="accordion-item">
        <h2 className="accordion-header" id="headingThree">
        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            Browser Compatible
        </button>
        </h2>
        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={myStyle}>
            This word counter softwer work in any web browser such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count character in facebook, blog, books, excel document, pdf document, essays, etc.
        </div>
        </div>
    </div>
    </div>
        </div>
    )
    }
