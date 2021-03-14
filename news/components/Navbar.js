import React from 'react';

const Navbar = () => {
	return(
		<header>
			<nav className="navbar navbar-expand-lg fixed-top navbar-light bg-success">
			  <div className="container">
			    <a className="navbar-brand text-light" href="#">Newsbuzz</a>
		        <div className="d-lg-none d-xs-block BoxsearhNav">
		        	<i className="fa fa-search fa-lg text-danger searchIcon" ></i>
		        	<input type="text" className="form-control searhNav" placeholder="Search league or learn" />
		        </div>
			    <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
			      <span className="navbar-toggler-icon"></span>
			    </button>
			    <div className="collapse navbar-collapse" id="navbarSupportedContent">
			      <ul className="navbar-nav ms-auto ">
			        <li className="nav-item Box_LOGIN d-inline-block">
			          <button className="btn nav-link active text-light LOGIN " aria-current="page" href="#">LOGIN</button>
			        </li>
			        <li className="nav-item ml-4 Box_REGISTER d-inline-block ms-5">
			          <button className="btn nav-link text-success REGISTER d-inline-block" href="#">REGISTER</button>
			        </li>
			      </ul>
			    </div>
			  </div>
			</nav>
		</header>
	);
};

export default Navbar