import React, {Component} from 'react';
import Nav from './Nav';
import Footer from './Footer';
import './BenAndJerry.css';

class BenAndJerry extends Component {
  render() {
    return(
         <React.Fragment>
      <Nav/>
      <div className="page">
      <div className="icecream">
      <header>
  <img class="logo" src="https://pbs.twimg.com/profile_images/1250824905/3551598358_59ddb6d200.jpg"/>
  <h1>Ben & Jerry Ice Cream<i>· Full Stack Developer</i></h1>
  <span class="thumb-nugget">November 2018</span>
  <br/>
  <span class="thumb-nugget"><a href="https://git.generalassemb.ly/smcurrey528/js-react-express-crud-hw">View on GitHub </a></span>
  <br/>
  <span class="thumb-nugget"> <a href="https://sarah-icecream-deploy.herokuapp.com/">Demo </a></span>
<br/><br/><br/>
</header>
  <img src="https://media.giphy.com/media/g4Lg18u4Z1LZ26RQfI/giphy.gif"/>
  <br/><br/>


<section class="row">

  <div class="two-thirds column">
    <span class="nugget">Overview</span>
    <p><a href="http://www.airbnb.com" target="_blank">Airbnb</a> is a popular and widely known house-sharing app with over 200 million users around the world. I led and helped improve many parts of the holistic Evernote experience—from onboarding new users, to navigating and organizing content for current users, to completing checkout for new and existing customers. And now, I'm tackling the challenge of making Evernote Business the best product for teams. Brief, high-level case studies below:</p>
  </div>


  <div class="one-third column">
    <span class="nugget">Hats worn</span>
    <ul class="list">
        <li>⛈&nbsp;&nbsp; Concepting</li>
        <li>🗺&nbsp;&nbsp; Wireframing</li>
        <li>💬&nbsp;&nbsp; Copywriting</li>
        <li>♻️&nbsp;&nbsp; Prototyping</li>
        <li>👂🏽&nbsp;&nbsp; UX research</li>
        <li>🔸&nbsp;&nbsp; Animation</li>
        <li>📢&nbsp;&nbsp; Visual design</li>
        <li>🎲&nbsp;&nbsp; Hacky front-end dev</li>
      </ul>
  </div>

</section>

<hr/>
</div>
</div>
<Footer/>
</React.Fragment>
      )
  }
}

export default BenAndJerry;
