import React from 'react';
import './Blog.css';
import Blog from './Blog';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from "./theme";


function BlogInterface(){
    return (
        <ThemeProvider theme={theme}>
            <Blog />
        </ThemeProvider>
    );
}
export default BlogInterface;