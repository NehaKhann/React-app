import "./404.css"
const ErrorPage = () => {

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="error-template">
                        <h1>
                            Oops!</h1>
                        <h2>
                            404 Not Found</h2>
                        <div className="error-details">
                            Sorry, an error has occured, Requested page not found!
                        </div>
                        <div className="error-actions">
                            <a href="/login" className="btn">
                                Back to Login </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );

};
export default ErrorPage;