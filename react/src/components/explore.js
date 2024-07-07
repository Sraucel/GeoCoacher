import React from 'react';
import './explore.css';
import lessonsImage from '../pictures/lessons.jpg';
import virtualMapsImage from '../pictures/virtual maps.webp';
import quizzesImage from '../pictures/quizzes.webp';
import otherImage from '../pictures/other.jpg';

const Explore = () => {
    const items = [
        {
            image: lessonsImage,
            title: "Lessons",
            description: "Tutoring, Coaching and Private Lessons",
            link: "/resource1"
        },
        {
            image: virtualMapsImage,
            title: "Interactive Maps",
            description: "Interactive maps and websites that can be used for learning, studying and teaching",
            link: "/resource2"
        },
        {
            image: quizzesImage,
            title: "Games",
            description: "Any other learning resources such as quizzes, or virtual tours",
            link: "/resource4"
        },
        {
            image: quizzesImage,
            title: "Forums",
            description: "Group forums used to interact with other individuals",
            link: "/resource3"
        },
        {
            image: otherImage,
            title: "Case Study and Analysis Tools",
            description: "Any other learning resources such as quizzes, or virtual tours",
            link: "/resource4"
        },
        {
            image: otherImage,
            title: "Design your own ...",
            description: "Any other learning resources such as quizzes, or virtual tours",
            link: "/resource4"
        }
    ];

    return (
        <section className="explore">
            <h1>Our Services</h1>
            <div className="explore-grid">
                {items.map((item, index) => (
                    <div key={index} className="explore-item">
                        <img src={item.image} alt={item.title} />
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                        <a href={item.link}>Explore</a>
                    </div>
                ))}
            </div>
            
        </section>
    );
};

export default Explore;
