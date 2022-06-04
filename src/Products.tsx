import React from "react";

  const initialState = {
    name: "",
    email: "",
    phone: "",
    message: "",
    nameError: "",
    emailError: "",
    passwordError: ""
  };
  
  class Products extends React.Component {

    state = initialState;
  
    // handleChange = event => {
    //   const isCheckbox = event.target.type === "checkbox";
    //   this.setState({
    //     [event.target.name]: isCheckbox
    //       ? event.target.checked
    //       : event.target.value
    //   });
    // };
  
    validate = () => {
      let nameError = "";
      let emailError = "";
      // let passwordError = "";
  
      if (!this.state.name) {
        nameError = "name cannot be blank";
      }
  
      if (!this.state.email.includes("@")) {
        emailError = "invalid email";
      }
  
      if (emailError || nameError) {
        this.setState({ emailError, nameError });
        return false;
      }
  
      return true;
    };
  
    handleSubmit = () => {
      // event.preventDefault();
      const isValid = this.validate();
      if (isValid) {
        console.log(this.state);
        // clear form
        this.setState(initialState);
      }
    };

    // onSubmit={this.handleSubmit}

  render(){
    return(
        <>
        <section className="Snew_mn2">
          <div className="ss_container text_center">
            <h2>Buy and do Medical business all over India</h2>
            <div className="rows midrows">
              <div className="cols-30">
                <p className="text_center"><img src={require('./images/ICON.jpg')} width="600" height="600" alt="Any Health Guru - HTML static Template by Adobe Dreamweaver" style={{width: "350px", maxWidth: "100%"}} /></p>
              </div>
              <div className="cols-70">
                <p>HTML Static Template, Editable template, HTML 5, CSS3, SCSS, jQuery, Bootstrap 4.0, Editable Logo PSD and other images PSD. Responsive modals, Ready-made editable stylesheets. Healthcare demographics and demo theory from Indian Health Guru his very own beginner website. This Medical website is for all over India, publish worldwide, brings patients from worldwide for surgery.</p>
                <a href="https://rzp.io/l/healthGuru" id="rzp-btn">Buy Now</a>
              </div>
            </div>
            <p>Make India and abroad proud. Jai Hind!</p>
          </div>
        </section>
        <section className="Snew_mn2" id="quotes">
          <div className="ss_container text_center">
            <h2>Request a Quote</h2>
            <p className="h3">Interested in learning more about our professional Web Design and Development, Website building, and services?</p>
            <p><strong>Tell us about your needs and we will provide a free quote for our services.</strong></p>
            <p style={{color: "#69631b", lineHeight: "normal"}}><strong>PLEASE NOTE:</strong> Our price ranges starting from Rs.16,000 (static, excluding domain and hosting, a licensed product) to Rs. 60,00,000 (dynamic, PHP bootstrap frameworks) only. We are providing Adobe Creative Cloud license tie-up for your company or individually and charges will be Rs.6500 per month for the Adobe Creative Cloud license till the works finish.</p>
            <p>Read more for the various plans by <span style={{display: "inline-block"}}><a href="https://www.adobe.com/in/creativecloud/plans.html" target="_blank" className="acc" rel="noreferrer nofollow"><img src={require('./images/creative-cloud-logo.png')} width="154" height="150" style={{width: "32px", height: "auto"}} alt="Adobe Creative Cloud" />Adobe Creative Cloud</a></span></p>
            <p style={{color: "#69631b", lineHeight: "normal"}}><strong>Website validations -</strong> Validation repair Rs. 4725 per day for HTML 4.0 and Rs. 23,625 per week for HTML 5. CSS validation: Rs. 33,000, XML validation: Rs. 1500 per xml file.</p>
            <p style={{color: "#69631b", lineHeight: "normal"}}><strong>Website accessibility (<abbr title="Web Content Accessibility Guidelines"><em>WCAG</em></abbr>) -</strong> Rs. 37,800 per webpage</p>
            <p style={{color: "#69631b", lineHeight: "normal"}}>Rs. 6000 to Rs. 86000 INR for privacy policy, terms and conditions, disclaimer and website copyrights.</p>
            <p style={{color: "#b22e2e"}}><strong>Note:</strong> <small>Prices may be changed at any time without further notice. We reserve the right to change our products prices at any time without further notice. However, if you have ordered but not yet paid for a product, we guarantee the price for one month from when the order was placed.</small></p>
            <form action="https://submit-form.com/Maf2UDGw" style={{display: "block"}} data-botpoison-public-key="pk_a3f6cffc-fb62-4f7c-a0fc-d0ad163bb273">
              <label htmlFor="name">Name
                <input type="text" name="name" id="name" placeholder="Your Name" required />
              </label>
              <label htmlFor="email">Email
                <input type="email" name="email" id="email" placeholder="Email Address" required />
              </label>
              <label htmlFor="phone">Telephone
                <input type="tel" name="phone" id="phone" placeholder="Telephone Number" required />
              </label>
              <label htmlFor="message">Ask and get free quotes
                <textarea name="message" id="message" placeholder="Your Messages" rows={3} required></textarea>
              </label>
              <button type="submit" className="primary">Request</button>
            </form>
          </div>
        </section>
      </>
    );
  }
}

export default Products;
