import { useState, useEffect } from 'react';

const About = () => {
    useEffect(()=>{
        window.scrollTo(0, 0);
        const observer = new IntersectionObserver((entries)=>{
            entries.forEach((entry)=>{
              if(entry.isIntersecting){
                entry.target.classList.add('show');
                observer.unobserve(entry.target);
              }
            });
          });
        
          const hiddenElements = document.querySelectorAll('.hidden');
          hiddenElements.forEach((element) => observer.observe(element));
    }, [])
    return (
       <div class = 'home'>
        <div class = "hidden">
        <h1 id="C1">Who we Are</h1>
        <p>We're committed to fixing your broken electronic devices. We are committed to offer you the best customer service possible and offering you the best possible experience at our store.</p>
        <img src={require('./images/logo.png')} class="i1"/>
        </div>
        
        <div class = "hidden">
        <h1>Our Mission</h1>
        <p>We’re a company dedicated to putting customers first, offering our customers the best services and providing the best customer service.</p>
        </div>
        
        <div>
        <h1>Awards</h1>
        <table>
            <tr class = "hidden">
            <td>
                <img src={require('./images/fiveStars.png')} id="image1"/>
            </td>
            <td>
                <h2>
                We have a five star review on <a href="https://www.google.ca/">Google</a>
                </h2>
            </td>
            </tr>
            <tr class = "hidden">
            <td>
                <img src={require('./images/consumerChoice.png')} id="image2"/>
            </td>
            <td>
                <h2>
                Consumer Choice for Business Excellence
                </h2>
            </td>
            </tr>
            <tr class = "hidden">
            <td>
                <img src={require('./images/businessAward.png')} id="image3"/>
            </td>
            <td>
                <h2>
                Small Business Award of The Year
                </h2>
            </td>
            </tr>
        </table>
        </div>
      </div>
    )
  }
  
export default About