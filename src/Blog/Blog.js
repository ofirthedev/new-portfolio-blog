import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import Pagination from '@material-ui/lab/Pagination';
import KeyboardReturnIcon from '@material-ui/icons/KeyboardReturn';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import moment from 'moment';
import 'firebase/compat/firestore';
import { getFirestore, collection, query, getDocs } from 'firebase/firestore/lite'


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
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(./banner.jpg)`,
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
  authDetail:{
    paddingRight:'10px'
  },
  blogsContainer: {
    paddingTop: theme.spacing(3)
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
    display: "flex",
      paddingLeft:'10px',
  },
  paginationContainer: {
    display: "flex",
    justifyContent: "center"
  }
}));
let postData = [];
const firebaseConfig = {
  apiKey: "AIzaSyBrjpqZDPafJKS8S4FzG5A-9hqoR3trrFo",
  authDomain: "portfolio-blogger.firebaseapp.com",
  projectId: "portfolio-blogger",
  storageBucket: "portfolio-blogger.appspot.com",
  messagingSenderId: "805454355057",
  appId: "1:805454355057:web:4ade5dd5f02a33e927d9d0"
};


// Get a list of cities from your database
async function getPosts() {
  postData = [];
    // get posts collection
      const firebaseApp=await firebase.initializeApp(firebaseConfig);
      const db=await firebase.firestore();
        const firestore = await getFirestore()
      return db.collection('posts').onSnapshot((snapshot) => {
        snapshot.forEach((doc) => postData.push({ ...doc.data(), id: doc.id }));
        console.log(postData);  // <------
      });
  }
getPosts();

 function Blog() {
   console.log('blog')

 // const posts = await getPosts();
 // console.log(posts)
  const classes = useStyles();
  return (
    <div className="blog">
      <AppBar className={classes.appBar} position="static">
       <div>
         <Toolbar>
           <Typography variant="h6" color="primary" >
             Ofir The Freelancer
           </Typography>
         </Toolbar>
       </div>
        <div >
           <Link to ='/'>
             <KeyboardReturnIcon fontSize="large" color="primary"/>
           </Link>
        </div>
      </AppBar>
      <Box className={classes.hero}>
        <Box>ברוכים הבאים</Box>
      </Box>
      <Container maxWidth="lg" className={classes.blogsContainer}>
        <Typography variant="h4" className={classes.blogTitle}>
          מאמרים
        </Typography>
          {postData.length > 0 ? (
              <Grid container spacing={3}>
                  {postData.map((post)=>{
                      return (
                          <Grid item xs={12} sm={6} md={4} key={post.postId}>
                              <Link to={`/blog/post/${post.id}`} >
                                  <Card className={classes.card}>
                                      <CardActionArea>
                                          <CardMedia
                                              className={classes.media}
                                              image={post.postImg}
                                          />
                                          <CardContent>
                                              <Typography gutterBottom variant="h5" component="h2">
                                                  {post.postTitle}
                                              </Typography>
                                              <Typography variant="body2" color="textSecondary" component="p">
                                                  {post.postDesc}
                                              </Typography>
                                          </CardContent>
                                      </CardActionArea>
                                      <CardActions className={classes.cardActions}>
                                          <Box className={classes.author}>
                                              <Avatar src={post.authAvatar} />
                                              <Box ml={2} className={classes.authDetail}>
                                                  <Typography variant="subtitle2" component="p">
                                                      {post.postAuthor}
                                                  </Typography>
                                                  <Typography variant="subtitle2" color="textSecondary" component="p">
                                                      {moment(Number(post.postTimestamp)).format()}
                                                  </Typography>
                                              </Box>
                                          </Box>

                                      </CardActions>
                                  </Card>
                              </Link>
                          </Grid>
                      )
                  })}
              </Grid>
          ): 'no posts'}

        <Box my={4} className={classes.paginationContainer}>
          <Pagination count={1} />
        </Box>
      </Container>
    </div>
  );
}

export default Blog;
