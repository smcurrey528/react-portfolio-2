import React,  {Component} from 'react';
import Nav from './Nav';
import Footer from './Footer';
import MapBox from './MapBox';
import './Contact.css';

class Contact extends Component {
  render() {
    return(
      <React.Fragment>
      <Nav/>
      <div class="total">
        <div class="all">
<br/>
  <section class="row">
    <div class="one-third column">
      <span class="nugget">
        Contact
      </span>
      <ul class="list">
        <li>✉️&nbsp;&nbsp; <a href="mailto:curreysarah28@gmail.com" target="_blank">Email</a></li>
        <li>📝&nbsp;&nbsp; <a href="https://www.linkedin.com/in/sarahcurrey/" target="_blank">LinkedIn</a></li>

      </ul>
    </div>
      <div class="two-thirds column">
        <span class="nugget">
          Say hello
        </span>
        <p>
          Always open to freelance work if it is a good fit. <a href="mailto:curreysarah28@gmail.com">Email</a> is best way to contact me, but you can always message me on  <a href="https://www.linkedin.com/in/sarahcurrey/" target="_blank">LinkedIn</a> too.
        </p>
      </div>



    </section>


  <section class="photos">
     <div class="two-fifths column">
      <div>
        <img  class="headshot" src="https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/46511364_10213453921485195_6791832196928765952_n.jpg?_nc_cat=105&_nc_ht=scontent-iad3-1.xx&oh=626afcaddd2be3e61d602e455913a51f&oe=5CA90702"/>
        <h3 class="overlay-title">I also go by the nickname "Scurrey"</h3>
      </div>
    </div>






  </section>

  <p>
</p>
</div>

      </div>
      <Footer/>
      </React.Fragment>
      )
  }
}

export default Contact;
