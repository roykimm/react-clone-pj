import React from 'react'
import Navbar from './Navbar';
import Header from './Header';
import Info from './Info';
import Course from './Course';
import Footer from './Footer';

const App = () => {

    const RecommandContent = [
        {
            title:"The Python Course: build web application",
            hour:"2h 30m",
            level:"Intermediate",
            star:"4",
            cnt:"(13,245)",
            profNm:"Claire Robertson",
            image: "javascript"
        },
        {
            title:"GraphQL:introduction to graphQL for beginners",
            hour:"2h 46m",
            level:"Advance",
            star:"3",
            cnt:"(9,300)",
            profNm:"Ted Hawkins",
            image: "graphql"
        },
        {
            title:"React - the complete guide for beginner",
            hour:"1h 30m",
            level:"Beginner",
            star:"5",
            cnt:"(123,000)",
            profNm:"Kim Myung Hoon",
            image: "react"
        },
        {
            title:"Angular - the complete guide for beginner",
            hour:"2h 30m",
            level:"Beginner",
            star:"3",
            cnt:"(12,000)",
            profNm:"Juanita Bell",
            image: "angular"
        },
    ]

    const MostPopular = [
        {
            title:"CSS: ultimate CSS course from beginner to advanced",
            hour:"1h 30m",
            level:"Intermediate",
            star:"4",
            cnt:"(17,245)",
            profNm:"Ted Hawkins",
            image: "css"
        },
        {
            title:"HTML:introduction to graphQL for beginners",
            hour:"2h 46m",
            level:"Intermediate",
            star:"3",
            cnt:"(95,300)",
            profNm:"Ted Hawkins",
            image: "html"
        },
        {
            title:"Angular - the complete guide for beginner",
            hour:"5h 30m",
            level:"Beginner",
            star:"5",
            cnt:"(123,000)",
            profNm:"Kim Myung Hoon",
            image: "angular"
        },
        {
            title:"React - the complete guide for beginner",
            hour:"2h 30m",
            level:"Beginner",
            star:"2",
            cnt:"(12,000)",
            profNm:"Juanita Bell",
            image: "react"
        },
    ]

    const Trending = [
        {
            title:"CSS: ultimate CSS course from beginner to advanced",
            hour:"1h 30m",
            level:"Intermediate",
            star:"4",
            cnt:"(17,245)",
            profNm:"Ted Hawkins",
            image: "css"
        },
        {
            title:"HTML:introduction to graphQL for beginners",
            hour:"2h 46m",
            level:"Intermediate",
            star:"3",
            cnt:"(95,300)",
            profNm:"Ted Hawkins",
            image: "html"
        },
        {
            title:"Angular - the complete guide for beginner",
            hour:"5h 30m",
            level:"Beginner",
            star:"5",
            cnt:"(123,000)",
            profNm:"Kim Myung Hoon",
            image: "angular"
        },
        {
            title:"React - the complete guide for beginner",
            hour:"2h 30m",
            level:"Beginner",
            star:"3",
            cnt:"(12,000)",
            profNm:"Juanita Bell",
            image: "react"
        },
    ]

    return (
        <>
            <Navbar />
            <Header />
            <Info />
            <Course 
                title="Recommended to you"
                content={RecommandContent}
            />
            <Course 
                title="MostPopular"
                content={MostPopular}
            />
            <Course 
                title="Trending"
                content={Trending}
            />
            <Footer />
        </>
    )
}

export default App
