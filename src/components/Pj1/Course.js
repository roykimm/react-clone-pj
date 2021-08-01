import React from 'react'
import Coursecard from './Coursecard';

const Course = (props) => {

    const arr = props.content;
    return (
        <div className="course-wrapper">
            <div className="container">
                <h1 className="course-title">{props.title}</h1>
                <div class="row">
                    {
                        arr.map((value, index) => (
                            <Coursecard
                                key={index} 
                                title={value.title}
                                hour= {value.hour}
                                level={value.level}
                                star={value.star}
                                cnt={value.cnt}
                                profNm={value.profNm}
                                image={value.image}
                            />
                        ))    
                    }
                </div>
            </div>
        </div>
    )
}

export default Course
