import { useState, useEffect } from 'react';

const Services = ({handleAdd}) => {
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
     <div class = 'services'>
        <div class = "hidden">
          <h1 class = "hidden">Choose Your Service</h1>
          <table class="t2">
            <tr>
              <td class = "hidden"><a href="#B1" class="servicenavbar"><img src={require('./images/databackup1.png')}/>
                <h2>Data Backup</h2>
              </a>
              </td>
              <td class = "hidden"><a href="#B2" class="servicenavbar"><img src={require('./images/systemdiagnostic1.png')}/>
                <h2>System Diagosis</h2>
              </a>
              </td>
              <td class = "hidden"><a href="#B3" class="servicenavbar"><img src={require('./images/virusremoval1.png')}/>
                <h2>Virus Removal</h2>
              </a>
              </td>
            </tr>
          </table>
        </div>
        <div class = "hidden">
          <h2 id="B1">
            Data Backup - $50
          </h2>
          <p>
            We will backup your data to an external hard drive to prevent it from accidental data loss.
          </p>
            <img src={require('./images/databackup.jpg')} class="services"/>
          <button onClick = {()=>handleAdd({
            "item": "Data Backup",
            "price": 50
          })}>
            Add to Cart            
          </button>
          </div>
          
          <div class = "hidden">
          <h2 id="B2">
            System Diagnosis - $100
          </h2>
          <p>
            Our team will use a wide variety of testing techniques to diagnose your computer of any problems. We will check all aspects of the computer such as the motherboard, CPU, GPU and power supply. The report will be shared with you to help you make informed decisions regarding your machine and we will also offer possible solutions regarding your device.
          </p>
          <img src={require('./images/systemdiagnosis.jpg')} class="services"/>
          <button onClick = {()=>handleAdd({
            "item": "System Diagnosis",
            "price": 100
          })}>
            Add to Cart            
          </button>
          </div>
          
          <div class = "hidden">
          <h2 id="B3">
            Virus Removal - $200
          </h2>
          <p>
            We will identify any viruses that may be present on your computer and remove them. We will use modern techniques to identify and remove the virus insuring that the computer software and hardware is not damaged in the process
          </p>
            <img src={require('./images/virusremoval.jpg')} class="services"/>
          <button onClick = {()=>handleAdd({
            "item": "Virus Removal",
            "price": 200
          })}>
            Add to Cart            
          </button>
          </div>
    </div>
  )
}

export default Services