import {React , useEffect,useState} from 'react';
import './NotFound.css';
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";
const firebaseConfig = {
    apiKey: "AIzaSyBrjpqZDPafJKS8S4FzG5A-9hqoR3trrFo",
    authDomain: "portfolio-blogger.firebaseapp.com",
    projectId: "portfolio-blogger",
    storageBucket: "portfolio-blogger.appspot.com",
    messagingSenderId: "805454355057",
    appId: "1:805454355057:web:4ade5dd5f02a33e927d9d0"
};

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