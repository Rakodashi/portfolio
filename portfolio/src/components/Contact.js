const Contact = () => {
  return ( 
    <section id="contact">
        <h1>Contact Me</h1>
            <form action="https://formspree.io/f/xrgvyjgz" method="POST">
                <input type="text" id="name" name="name" placeholder="Name" required />
                <input type="email" id="email" name="email" placeholder="E-mail" required />
                <textarea id="message" name="message" placeholder="Message" required />
                <button type="submit">Send</button>
            </form>
    </section>
   );
}
 
export default Contact;