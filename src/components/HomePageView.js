import AppBar from "./AppBar";
import ScrollToTop from "react-scroll-to-top";
import {ThemeProvider} from "@material-ui/styles";
import DarkToggler from "./DarkToggler";
import Home from "./Home";
import About from "./About";
import Work from "./Work";
import Contact from "./Contact";
import Footer from "./Footer";
import React, {useState} from "react";
import {darkTheme, lightTheme} from "./themes";

function HomePageView(){
    const [appTheme, setAppTheme] = useState(lightTheme);

    const darkHandler = (state) => {
        setAppTheme(state["checkedA"] ? darkTheme : lightTheme);
    };

    return (
        <React.Fragment>
            <AppBar />
            <ScrollToTop smooth color="#6f00ff" top="400" />

            <ThemeProvider theme={{ ...appTheme }}>
                <DarkToggler darkModeHandler={darkHandler} />

                <Home />
                <About bgColor={appTheme.aboutBg} />
                <Work
                    bgColor={appTheme.cards.bgColor}
                    headerColor={appTheme.cards.headerColor}
                />
                <Contact />
                <Footer />
            </ThemeProvider>
        </React.Fragment>

    );
}
export default HomePageView;
