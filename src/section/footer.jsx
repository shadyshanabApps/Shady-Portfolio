import React from 'react';

const footer = () => {
    return(
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <a href="#" target="_blank" rel="noreferrer">
                            <span className="copy">&copy; Copyright 2023 - Shady Elsayed</span>
                        </a>
                    </div>
                    <div className="col-md-6">
                        <div className="social-icons">
                            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><i className="fa fa-facebook"></i></a>
                            <a href="https://twitter.com" target="_blank" rel="noreferrer"><i className="fa fa-twitter"></i></a>
                            <a href="https://www.linkedin.com/in/shady-elsayed-software-developer/" target="_blank" rel="noreferrer"><i className="fa fa-linkedin"></i></a>
                            <a href="https://pinterest.com/" target="_blank" rel="noreferrer"><i className="fa fa-pinterest"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default footer;