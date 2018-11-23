import React,  {Component} from 'react';
import Nav from './Nav';
import Footer from './Footer';
import './About.css';

class About extends Component {
  render() {
    return(
      <React.Fragment>
      <Nav/>
      <div className="two-thirds column">
      <span className="nugget">
              Places
            </span>
         <p> 🎸Nashville, TN ➡ 🇺🇸 Washington, D.C. ➡ 🍎New York City </p>
          <span className="nugget">
              A little about me
            </span>
            <p>
             As an outgoing, health care lobbyist turned passionate software developer, my background in policy and project management gave me the analytical thinking and collaborative skills to build dynamic and responsive web applications. Whether it be intricate legislation or code, I have an innate ability to break down complex information into comprehensible, intuitive solutions. I believe that the best results are achieved through cross-functional team work with empathetic and people-centric approaches.
            </p>
        </div>

        <div>
          <span className="nugget">
              Hobbies
            </span>
            <img className="giphy" src="https://media.giphy.com/media/zhpjX82MdG240/giphy.gif"/>
            <img className="giphy" src="https://media.giphy.com/media/l46CdUTy21h8wwrAs/giphy.gif"/>
            <img  className="giphy" src="https://i.gifer.com/921j.gif"/>
        </div>

        <Footer/>
      </React.Fragment>
      )
  }
}

export default About;
