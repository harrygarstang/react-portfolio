import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationTabs from './components/NavigationTabs';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Projects from './components/pages/Projects';
import Contact from './components/pages/Contact';
import Footer from './components/Footer';
import Wrapper from './components/Wrapper';

function App() {
    return (
        <Router>
            <div>
                <NavigationTabs />
                <Wrapper>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="about" element={<About />} />
                        <Route path="projects" element={<Projects />} />
                        <Route path="contact" element={<Contact />} />
                    </Routes>
                </Wrapper>
                <Footer />
            </div>
        </Router>
    );
}

export default App;