export default function Footer({ links }) {
    return (
      <footer className="footer">
        <div className="container-fluid">
            <div className="row linkbox">
            <div className="col-1 footer-link"><a href="https://github.com/AllredW"><img src="../../assets/github logo.png" alt="My Github Profile" height={'40px'}/></a></div>
            <div className="col-1 footer-link"><a href="https://www.linkedin.com/in/william-allred-6a2a522b3/"><img src="../../assets/linkedin logo.png" alt="My LinkedIn profile" height={'40px'}/></a></div>
            <div className="col-1 footer-link"><a href="https://www.facebook.com/william.allred.7/"><img src="../../assets/facebook logo.png" alt="My Facebook Profile" height={'40px'}/></a></div>
            </div>
        </div>
      </footer>
    );
  }
  