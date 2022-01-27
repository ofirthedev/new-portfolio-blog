import {React} from 'react';
import './NotFound.css';
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";

function NotFound(props){
    return (
        <div>
            <div id="main">
                <div className="fof">
                    <h1>Error 404</h1><br/>
                    <Button  color="inherit" size="large">
                        <Link to="/blog" color="inherit" size="large">
                            Back to Blog
                        </Link>
                    </Button>
                </div>

            </div>

        </div>
    )
}
export default NotFound;