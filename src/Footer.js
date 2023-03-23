const Footer = () => {
    const d = new Date();
    return (
       <footer>
          <p>Copyright &copy; {d.getFullYear()}</p>
          <p>Contact us: <a href = "mailto:xuyuchen100@gmail.com" id="email">xuyuchen100@gmail.com</a></p>
          <p>Call Us: 123-456-7890</p>
      </footer>
    )
  }
  
export default Footer