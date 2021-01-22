import React, { Component } from ‘react’;
export default class Testimonials extends Component {
render() {
let resumeData = this.props.resumeData;
return (
<section id=”testimonials”>
<div className=”text-container”>
<div className=”row”>
<div className=”two columns header-col”>
<h1><span>Client Testimonials</span></h1>
</div>
<div className=”ten columns flex-container”>
<div className=”flexslider”>
<ul className=”slides”>
{
resumeData.testimonials && resumeData.testimonials.map((item)=>{
return(
<li>
<blockquote>
<p>
{item.description}
</p>
<cite>{item.name}</cite>
</blockquote>
</li>
)
})
}
</ul>
</div> {/* div.flexslider ends */}
</div> {/* div.flex-container ends */}
</div> {/* row ends */}
</div> {/* text-container ends */}
</section>
);
}
}
For Database sets create one more components in “src” and named it resumeData.js
let resumeData = {
“imagebaseurl”:”https://ivy555.github.io/",
“name”: “Colton”,
“role”: “Full Satck Developer”,
“linkedinId”:”Your ID”,
“skypeid”: “Your skypeid”,
“roleDescription”: “I like to learn and create applications in various parts of software development and like to learn about new technologies, write technical articles or simply play games in my free time.”,
“socialLinks”:[
{
“name”:”linkedin”,
“url”:”https://www.linkedin.com/",
“className”:”fa fa-linkedin”
},
{
“name”:”github”,
“url”:”http://github.com/ivy555",
“className”:”fa fa-github”
},
{
“name”:”skype”,
“url”:””,
“className”:”fa fa-twitter”
}
],
“aboutme”:”I am currently a Masters student at The Hochschule Fulda and pursuing my masters in Global software Development from here. I am a self taught Full Stack Web Developer, currently diving deeper into Machine Learning. I believe that to be successful in life, one needs to be obsessive with their dreams and keep working towards them.”,
“address”:”India”,
“website”:”https://ivy555.github.io",
“education”:[
{
“UniversityName”:”Hochschule Fulda”,
“specialization”:”Machine Learning”,
“MonthOfPassing”:”Aug”,
“YearOfPassing”:”2022",
“Achievements”:”Some Achievements”
},
{
“UniversityName”:”Some University”,
“specialization”:”Some specialization”,
“MonthOfPassing”:”Jan”,
“YearOfPassing”:”2018",
“Achievements”:”Some Achievements”
}
],
“work”:[
{
“CompanyName”:”Some Company”,
“specialization”:”Some specialization”,
“MonthOfLeaving”:”Jan”,
“YearOfLeaving”:”2018",
“Achievements”:”Some Achievements”
},
{
“CompanyName”:”Some Company”,
“specialization”:”Some specialization”,
“MonthOfLeaving”:”Jan”,
“YearOfLeaving”:”2018",
“Achievements”:”Some Achievements”
}
],
“skillsDescription”:”Your skills here”,
“skills”:[
{
“skillname”:”HTML5"
},
{
“skillname”:”CSS”
},
{
“skillname”:”Reactjs”
}
],
“portfolio”:[
{
“name”:”project1",
“description”:”mobileapp”,
“imgurl”:”images/portfolio/phone.jpg”
},
{
“name”:”project2",
“description”:”mobileapp”,
“imgurl”:”images/portfolio/project.jpg”
},
{
“name”:”project3",
“description”:”mobileapp”,
“imgurl”:”images/portfolio/project2.png”
},
{
“name”:”project4",
“description”:”mobileapp”,
“imgurl”:”images/portfolio/phone.jpg”
}
],
“testimonials”:[
{
“description”:”This is a sample testimonial”,
“name”:”Some technical guy”
},
{
“description”:”This is a sample testimonial”,
“name”:”Some technical guy”
}
]
}
export default resumeData
Component check with this
App.js
import React, { Component } from ‘react’;
import Header from ‘./components/Header’;
import About from ‘./components/About’;
import Resume from ‘./components/Resume’;
import Portfolio from ‘./components/Portfolio’;
import Testimonials from ‘./components/Testimonials’;
import ContactUs from ‘./components/ContactUs’;
import Footer from ‘./components/Footer’;
import resumeData from ‘./resumeData’;
class App extends Component {
render() {
return (
<div className=”App”>
<Header resumeData={resumeData}/>
<About resumeData={resumeData}/>
<Resume resumeData={resumeData}/>
<Portfolio resumeData={resumeData}/>
<Testimonials resumeData={resumeData}/>
<ContactUs resumeData={resumeData}/>
<Footer resumeData={resumeData}/>
</div>
);
}
}
export default App;