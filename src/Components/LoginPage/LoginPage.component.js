import { PureComponent } from 'react';

import styles from './LoginPage.style.module.scss';

export default class LoginPageComponent extends PureComponent {

    renderForm() {
        const { usernameValue, onSubmit,valueHandlerUsername,valueHandlerPassword,passwordValue,unameempty,pempty,formCompleted} = this.props;
        return (

            <form onSubmit={ onSubmit }>
                    <h2>LogIn</h2>
                    <div className={styles.Username}>
                    <label  htmlFor="uname" className='uname'>Username:</label>
                    <div className={styles.input}><input className={unameempty ? styles.user:""} type="text" placeholder="Enter Username"  name="uname" value={usernameValue} onChange={valueHandlerUsername}/>
                    
                    {unameempty && <div className={styles.errormsg}>Please enter Username...</div>}</div>
                    </div>
                    <div className={styles.Password}>
                    <label  htmlFor="psw">Password: </label>
                    <div className={styles.input}>
                    <input  className={pempty ? styles.pass:""} type="password" placeholder="Enter Password" name="psw"  value={passwordValue} onChange={valueHandlerPassword}/>
                    {pempty && <div className={styles.errormsg}>Please enter Password...</div>}</div>
                    </div>
                    <div className={styles.submit}>
                    <input type="submit" value="Login" className={styles.loginBtn}/>
                    </div>

                    {formCompleted && <div className={styles.successmsg}>
                        <img src='https://cdn-icons-png.flaticon.com/512/845/845646.png' height={'30px'} width={'30px'}></img>Successfully Logged In</div>}
          </form>

        );
    }

    renderHeader(){

        return(
            <>
              <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled">Disabled</a>
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
            </>
        )
     
    }

    renderFooter(){
    return(
        <>
 <footer className="bg-dark text-light text-center text-md-left fixed-bottom">
            <div className="social"><a href="#"><i className="icon ion-social-instagram"></i></a><a href="#"><i className="icon ion-social-snapchat"></i></a><a href="#"><i className="icon ion-social-twitter"></i></a><a href="#"><i className="icon ion-social-facebook"></i></a></div>
            <ul className="list-inline">
                <li className="list-inline-item"><a href="/">Home</a></li>
                <li className="list-inline-item"><a href="/">Services</a></li>
                <li className="list-inline-item"><a href="/">About</a></li>
                <li className="list-inline-item"><a href="/">Terms</a></li>
                <li className="list-inline-item"><a href="/">Privacy Policy</a></li>
            </ul>
            <p className="copyright">Company Name © 2022</p>
        </footer>
        </>
    );
    }

    render() {
        return (
            <>
            <div >
                { this.renderHeader() }
              
            </div>
            <div className={ styles.LoginPage }>
                { this.renderForm() }
              
            </div>
            <div className={styles.foot}>
                {this.renderFooter()}
            </div>
            </>
        )
    }

}