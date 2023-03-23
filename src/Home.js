const Home = ({feedback, setFeedback, email, setEmail, handleSubmit}) => {
    return (
       <div class = 'home'>
            <div id="background1">
                <img src={require('./images/logo.png')}  class="i1"/>
            </div>
            <div style = {{backgroundColor: "beige"}}>
            <h1 id="A1">What We Do</h1>
            <h2>
                Windows Repair
            </h2>
            <p>
                We will repair any Windows device and resolve any issues such as updating and device repair.
            </p>
            <img
                src={require('./images/windows.jpg')}  />
            <h2>
                Apple Repair
            </h2>
            <p>
                We will repair any Apple device and resolve any issues such as upgrading and screen repair.
            </p>
            <img src={require('./images/apple.png')}  />
            <h2>
                System Diagnosis
            </h2>
            <p>
                We will diagnose any problems you have with your system.
            </p>
            </div>
            
            <div style = {{backgroundColor: "beige"}}>
            <h1 id="A2">Why Choose Us?</h1>
            <table class="t2">
            <tr>
                <td class="table2"><img src={require('./images/moneySymbol.webp')} />
                <h2>Cheaper Prices</h2>
                </td>
                <td class="table2"><img src={require('./images/thumb.png')} />
                <h2>Reliable</h2>
                </td>
                <td class="table2"><img src={require('./images/award.png')} />
                <h2>30+ Years of Experience</h2>
                </td>
            </tr>
            </table>
            </div>
            <div style = {{backgroundColor: "#f2d38f"}}>
                <h1 id="A3">Testimonial</h1>
                <table>
                <tr>
                    <td><img
                        src={require('./images/person1.jpg')} 
                        class="testimonialimage" /> </td>
                    <td>
                    <p class="testimonial">
                        "Service was exactly what it said it does. I am completely blown away. I would like to personally thank
                        you for your outstanding product. I couldn't have asked for more than this."
                    </p>
                    <h2 class="name">-John S.</h2>
                    </td>
                </tr>
                <tr>
                    <td><img
                        src={require('./images/person2.jpg')} 
                        class="testimonialimage" /></td>
                    <td>
                    <p class="testimonial">
                        "The best on the net! Wow what great service, I love it!"
                    </p>
                    <h2 class="name">-William J.</h2>
                    </td>
                </tr>
                <tr>
                    <td><img
                        src={require('./images/person3.png')} 
                        class="testimonialimage" /></td>
                    <td>
                    <p class="testimonial">
                        "Great job, I will definitely be ordering again! Your company is truly upstanding and is behind its
                        product 100%. I love your system."
                    </p>
                    <h2 class="name">-Noah C.</h2>
                    </td>
                </tr>
                </table>
            </div>
            <div style = {{backgroundColor: "beige"}}>
            <h1>Feedback</h1>
            <form class = "feedback" onSubmit = {handleSubmit}>
            <label>Email</label>
            <textarea
                id = "email"
                required
                value = {email}
                onChange = {(e)=>setEmail(e.target.value)}
            />
            <label>Feedback</label>
            <textarea
                id = "feedback"
                required
                value = {feedback}
                onChange = {(e)=>setFeedback(e.target.value)}
            />
            <button type = "submit"> Submit</button>
            </form>
            </div>
        </div>
    )
  }
  
export default Home