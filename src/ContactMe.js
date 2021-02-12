//emailjs.send("service_9j3398t","service_9j3398t");

import React from 'react';
import emailjs from 'emailjs-com';

//import './ContactUs.css';

export default function ContactForm() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_9j3398t', 'template_qjmym0u', e.target, 'user_7zJqF2BgzHn7bELuJK8cu')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <section id="contact">
    <h3 className="contactHeader">I'd Love to Hear From You!</h3>
      <form className="contact-form" onSubmit={sendEmail}>
        <input type="hidden" name="from_name" />
        
        <input type="text" name="from_email" />
       
        <input type="email" name="message" />
        
        <textarea name="message" />
        <button type="submit" value="Send">Send</button>
      </form>
    </section>
  );
}


// import React from 'react';
// import * as emailjs from 'emailjs-com';

// import { Field, Label, Control, Input, Button, Icon, Textarea, Notification } from 'rbx';

// export class ContactForm extends React.PureComponent {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: '',
//       email: '',
//       subject: '',
//       message: ''
//     };

//     this.handleSubmit = this.handleSubmit.bind(this);
//     this.resetForm = this.resetForm.bind(this);
//     this.handleChange = this.handleChange.bind(this);
//   }

//   handleSubmit(event) {
//     event.preventDefault();
//     const { name, email, subject, message } = this.state;
//     const templateParams = {
//       from_name: name,
//       from_email: email,
//       to_name: '/*YOUR NAME OR COMPANY*/',
//       subject,
//       message_html: message,
//     };
//     function sendEmail(e) {
//       e.preventDefault();
  
//       emailjs.sendForm('service_9j3398t', 'template_qjmym0u', e.target, 'user_7zJqF2BgzHn7bELuJK8cu')
//         .then((result) => {
//             console.log(result.text);
//         }, (error) => {
//             console.log(error.text);
//         });
//     }
//     this.resetForm();
//   };

//   resetForm() {
//     this.setState({
//       name: '',
//       email: '',
//       subject: '',
//       message: '',
//     });
//   }

//   handleChange(event) {
//     this.setState({ [event.target.name]: event.target.value });
//   }

//   render() {
//     const { name, email, subject, message, sentMessage } = this.state;

//     return (
//       <form onSubmit={this.handleSubmit}>
//         <Field>
//           <Label>Name</Label>
//           <Control>
//             <Input
//               name="name"
//               type="text"
//               placeholder="Your first and last name"
//               value={name}
//               onChange={this.handleChange}
//             />
//           </Control>
//         </Field>
//         <Field>
//           <Label>Email for contact</Label>
//           <Control>
//             <Input
//               name="email"
//               type="email"
//               placeholder="email@gmail.com"
//               value={email}
//               onChange={this.handleChange}
//             />
//           </Control>
//         </Field>
//         <Field>
//           <Label>Subject</Label>
//           <Control>
//             <Input
//               name="subject"
//               type="text"
//               placeholder="What is the subject?"
//               value={subject}
//               onChange={this.handleChange}
//             />
//           </Control>
//         </Field>
//         <Field>
//           <Label>Message</Label>
//           <Control>
//             <Textarea
//               name="message"
//               placeholder="Tell me more about..."
//               value={message}
//               onChange={this.handleChange}
//             />
//           </Control>
//         </Field>

//         <Field kind="group">
//           <Control>
//             <Button color="dark">Send</Button>
//           </Control>
//           <Control>
//             <Button text>Cancel</Button>
//           </Control>
//         </Field>
//       </form>
//     );
//   }
// }
