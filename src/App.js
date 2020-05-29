import React from "react";
import Loadable  from "react-loadable"
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Loader from "./components/Preloader/preloader";
import Navbar from "./components/layout/Navbar/Navbar";

import SpecialityContextProvider from "./contexts/specialityContext";
import AuthContextProvider from "./contexts/authContext";
import TopicsContextProvider from "./contexts/topicContext";
import ArticlesContextProvider from "./contexts/articleContext";
import HomeContextProvider from "./contexts/homeContext";
import CompleteProfile from "./components/auth/completeProfile";
// Bootstrap
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import ModeContextProvider from "./contexts/modeContext";

// Auth
const SignUp = Loadable({loader : () => import("./components/auth/SignUp"), loading : () => <Loader /> });
const SignIn = Loadable({loader : () => import("./components/auth/SignIn"), loading : () => <Loader /> });

// Article page
const selectedArticle = Loadable({

  loader : () => import("./components/learn/articles/SelectedArticle"), 
  loading : () => <Loader /> 
});
const PreviewPage = Loadable({
  loader: () => import("./components/learn/preview/PreviewPage"),
  loading: () => <Loader />
});

// Components
const Home = Loadable({loader : () => import("./components/home/home"), loading : () => <Loader /> });
const About = Loadable({loader : () => import("./components/aboutUs/about"), loading : () => <Loader /> });
const Learn = Loadable({loader : () => import("./components/learn/learn"), loading : () => <Loader /> });

const EditHomepage = Loadable({loader : () => import("./components/home/EDIT/editHomepage"), loading : () => <Loader /> }); 
const EditCard = Loadable({loader : () => import("./components/learn/learningCards/UpdateCard"), loading : () => <Loader /> }); 
const AddCard = Loadable({loader : () => import("./components/learn/learningCards/AddCard"), loading : () => <Loader /> });
const AddArticle = Loadable({loader : () => import("./components/learn/articles/addArticle"), loading : () => <Loader /> });
const UpdateArticle = Loadable({loader : () => import("./components/learn/articles/updateArticle"), loading : () => <Loader /> });
const AdminPanel = Loadable({loader : () => import("./components/adminPanel/adminPanel"), loading : () => <Loader /> });

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <AuthContextProvider>
          <SpecialityContextProvider>
            <TopicsContextProvider>
              <ArticlesContextProvider>
                <HomeContextProvider>
                  <ModeContextProvider>
                    <Navbar />
                    <AnimatePresence>
                      <Switch>
                          <Route exact path="/" component={Home} />
                          <Route path="/about" component={About} />
                          <Route exact path="/learn" component={Learn} />
                          <Route exact path="/signup" component={SignUp} />
                          <Route
                            exact
                            path="/signup/:referCode"
                            component={SignUp}
                          />
                          <Route path="/login" component={SignIn} />
                          <Route
                            exact
                            path="/:specialityId/:topicId/:Id"
                            component={selectedArticle}
                          />
                          <Route
                            exact
                            path="/learn/:specialityName"
                            component={PreviewPage}
                          />
                          <Route
                            exact
                            path="/adminpanel"
                            component={AdminPanel}
                          />
                          <Route
                            exact
                            path="/edit/homepage"
                            component={EditHomepage}
                          />
                          <Route
                            exact
                            path="/updatespeciality/:specailaityId"
                            component={EditCard}
                          />
                          <Route exact path="/addcard" component={AddCard} />
                          <Route
                            exact
                            path="/article/add/:SpecialityId/:id"
                            component={AddArticle}
                          />
                          <Route
                            exact
                            path="/article/update/:SpecialityId/:TopicId/:ArticleId"
                            component={UpdateArticle}
                          />
                          <Route
                            exact
                            path="/completeProfile"
                            component={CompleteProfile}
                          />
                      </Switch>
                    </AnimatePresence>
                  </ModeContextProvider>
                </HomeContextProvider>
              </ArticlesContextProvider>
            </TopicsContextProvider>
          </SpecialityContextProvider>
        </AuthContextProvider>
      </div>
    </BrowserRouter>
  );
};

export default App;
