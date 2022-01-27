import {React , useEffect,useState} from 'react';
import {Link, useParams} from 'react-router-dom';
import firebase from "firebase/compat";
import {getFirestore} from "firebase/firestore/lite";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import NotFound from './NotFound';
import KeyboardReturnIcon from "@material-ui/icons/KeyboardReturn";
import WhatsApp from '../svgs/whatsapp.svg';
import Facebook from '../svgs/facebook.svg';
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import {makeStyles} from "@material-ui/core/styles";
const firebaseConfig = {
    apiKey: "AIzaSyBrjpqZDPafJKS8S4FzG5A-9hqoR3trrFo",
    authDomain: "portfolio-blogger.firebaseapp.com",
    projectId: "portfolio-blogger",
    storageBucket: "portfolio-blogger.appspot.com",
    messagingSenderId: "805454355057",
    appId: "1:805454355057:web:4ade5dd5f02a33e927d9d0"
};
const useStyles = makeStyles((theme) => ({
    appBar: {
        backgroundColor: "#fff",
        position: 'fixed',
        flexDirection: 'row',
        paddingLeft:'20px',
        paddingRight:'20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    returnIcon:{

    },
    hero: {
        height: "500px",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
        fontSize: "4rem",
        [theme.breakpoints.down("sm")]: {
            height: 300,
            fontSize: "3em"
        }
    },

    blogTitle: {
        fontWeight: 800,
        paddingBottom: theme.spacing(3)
    },
    card: {
        maxWidth: "100%",
    },
    media: {
        height: 240
    },
    cardActions: {
        display: "flex",
        margin: "0 10px",
        justifyContent: "space-between"
    },
    h4:{
      color:'black'
    },
    arrow:{
      color:'black'
    },
    author: {
        display: "flex"
    },
    paginationContainer: {
        display: "flex",
        justifyContent: "center"
    }
}));
 function BlogPost(props){
     const { id } = useParams();

     let [postData,setPostData] = useState({});

     useEffect(() => {

         const firebaseApp= firebase.initializeApp(firebaseConfig);
         const db= firebase.firestore();
         const firestore =  getFirestore()
         db.collection('posts').where(firebase.firestore.FieldPath.documentId(), '==', id).onSnapshot((snapshot) => {
             snapshot.forEach((doc) => setPostData({ ...doc.data(), id: doc.id }));
             console.log(postData)
         });
     },[]);
     const classes = useStyles();
    // GetPostDataById(id);
     return (
      postData && postData.id ? (
             <div className="blog " >
                 <AppBar className={classes.appBar} position="static">
                     <div>
                         <Toolbar>
                             <h4 className={classes.h4}>
                                 Ofir The Freelancer
                             </h4>
                         </Toolbar>
                     </div>
                     <div >
                         <Link to ='/blog'>
                             <KeyboardReturnIcon fontSize="large" className={classes.arrow}/>
                         </Link>
                     </div>
                 </AppBar>
                 <div className="postArticle">
                     <div className="blogPostContent">

                         <div className="postHeader">
                             <h1>{postData.postTitle}</h1>
                         </div>
                         <div className="postDesc">
                             <h3>{postData.postDesc}</h3>
                         </div>
                         <div className="writtenAt">
                            נכתב בתאריך {postData.postTimestamp}
                         </div>
                         <div className="postBody" dangerouslySetInnerHTML={{__html: postData.postBody}}>
                         </div>
                         <div className="postFooter">
                             <h5>
                                 אשמח אם תשתפו (:
                             </h5>
                             <div className="share">
                                 <div className="whatsapp">
                                <img alt="whatsapp" src={WhatsApp} height="40"/>
                                 </div>
                                 <div className="facebook">
                                     <img alt="facebook" src={Facebook} height="40"/>
                                 </div>
                             </div>
                         </div>
                         <br/>
                         <hr/>
                         <br/>
                         <div className="visitMe">
                             <a href="https://www.linkedin.com/in/ofirthedev/">
                                 <LinkedInIcon fontSize="large"   />
                             </a>
                             <a href="https://www.facebook.com/profile.php?id=100004539256630">
                                 <FacebookIcon fontSize="large"   />
                             </a>
                             <a href="https://www.instagram.com/ofirthefreelancer/">
                                 <InstagramIcon fontSize="large" />
                             </a>
                         </div>
                     </div>

                 </div>

             </div>
      ) : (<NotFound/>)
    )
}
export default BlogPost;