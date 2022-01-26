import {React , useEffect,useState} from 'react';
import {Link, useParams} from 'react-router-dom';
import firebase from "firebase/compat";
import {getFirestore} from "firebase/firestore/lite";
import moment from "moment";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import NotFound from './NotFound';
import KeyboardReturnIcon from "@material-ui/icons/KeyboardReturn";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import Pagination from "@material-ui/lab/Pagination";
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
             <div className="blog" >
                 <AppBar className={classes.appBar} position="static">
                     <div>
                         <Toolbar>
                             <Typography variant="h6" color="primary" >
                                 Ofir The Freelancer
                             </Typography>
                         </Toolbar>
                     </div>
                     <div >
                         <Link to ='/blog'>
                             <KeyboardReturnIcon fontSize="large" color="primary"/>
                         </Link>
                     </div>
                 </AppBar>
                 <div className="blogPostContent">

                                 <div className="postHeader">
                                   <h1>{postData.postTitle}</h1>
                                 </div>
                                 <div className="postBody">
                                     {postData.postBody}
                                 </div>

                 </div>
                 <div className="postFooter">
                     <h5>
                         נוצר על ידי {postData.postAuthor}  בתאריך {moment(Number(postData.postTimestamp)).format()}
                     </h5>
                 </div>
             </div>
      ) : (<NotFound/>)
    )
}
export default BlogPost;