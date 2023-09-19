import React, { useState } from "react";
import "./css/contactus.css";

function Contact() {
  // Defining initial state of form data
  const initialFormData = {
    fullName: "",
    email: "",
    topic: "general",
    message: "",
  };

  // creating a state variable for the form data using useState
  const [formData, setFormData] = useState(initialFormData);

  // Event handler for input changes
  const handleInputChange = (e) => {
    // extracting the name and value from input field
    const { name, value } = e.target;

    // update formData with new value
    setFormData({ ...formData, [name]: value });
  };

  // Event handler for form submission
  const handleSubmit = () => {
    // display with user input
    alert(
      `Full Name: ${formData.fullName}\nEmail: ${formData.email}\nTopic: ${formData.topic}\nMessage: ${formData.message}`
    );
  };

  return (
    <div>
    {/* contact us Form */}
      <h1 className="contact-heading create">Contact us</h1>
      <div className="form-container">
        <form>
          <div>
            <label>FullName: </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullname}
              onChange={handleInputChange}
              required
            ></input>
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            ></input>
          </div>
          <div>
            <label>Topics</label>

            <select
              name="topic"
              value={formData.topic}
              onChange={handleInputChange}
            >
              <option value="general"> General </option>
              <option value="complaints"> Complaints </option>
              <option value="feedbacks"> Feedbacks </option>
            </select>
          </div>
          <div>
            <label>Message:</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
            ></textarea>
          </div>
          <div>
            <button className="button" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </form>
      </div>

    {/* Frequently asked questions and answers */}
      <div className="FAQ-container">
        <h2 className="FAQ-heading">FAQ / Frequenty Asked Questions</h2>
        <ul>
            <li>
                <h3 className="FAQ-h3">
                    <span className="red"> Question:</span> What are the top tourist
                    attractions in Cincinnati?
                </h3>
                <p className="FAQ-p">
                    <span className="red" style={{ textAlign: 'left' }}> Answer:</span> Some of the top attractions
                    in Cincinnati include the Cincinnati Zoo, Cincinnati Art Museum,
                    and the Cincinnati Museum Center at Union Terminal.
                </p>
            </li>
            <li>
                <h3 className="FAQ-h3">
                    <span className="red"> Question:</span>How can I get to Cincinnati
                    from the airport?
                </h3>
                <p className="FAQ-p">
                    <span className="red" style={{ textAlign: 'left' }}> answer:</span>Cincinnati has a major
                    airport, Cincinnati/Northern Kentucky International Airport (CVG),
                    which is well-connected to the city center by taxi, shuttle, and
                    public transportation.
                </p>
            </li>
            <li>
                <h3 className="FAQ-h3">
                    <span className="red"> Question:</span>What is the best time to
                    visit Cincinnati?
                </h3>
                <p className="FAQ-p">
                    <span className="red" style={{ textAlign: 'left' }}> answer:</span>The best time to visit
                    Cincinnati is during the spring and fall when the weather is
                    pleasant. Summers can be hot, and winters can be cold.
                </p>
            </li>
            <li>

                <h3 className="FAQ-h3">
                    <span className="red"> Question:</span> "Are there any outdoor
                    activities in Cincinnati?",
                </h3>
                <p className="FAQ-p">
                    <span className="red" style={{ textAlign: 'left' }}> answer:</span> "Yes, Cincinnati offers a
                    variety of outdoor activities, including hiking trails in local
                    parks like Mt. Airy Forest and great opportunities for biking
                    along the Ohio River. You can also enjoy boating and
                    paddleboarding on the river.",
                </p>
            </li>
            <li>
                <h3 className="FAQ-h3">
                    <span className="red"> Question:</span> "What is the Cincinnati
                    food scene known for?",
                </h3>
                <p className="FAQ-p">
                    <span className="red" style={{ textAlign: 'left' }}> answer:</span> "Cincinnati is known for its
                    unique chili, often served over spaghetti or hot dogs. You can
                    also explore the city's vibrant food markets, try local craft
                    beers, and enjoy farm-to-table dining experiences.",
                </p>
            </li>
            <li>

                <h3 className="FAQ-h3">
                    <span className="red"> Question:</span> "Are there family-friendly
                    attractions in Cincinnati?",
                </h3>
                <p className="FAQ-p">
                    <span className="red" style={{ textAlign: 'left' }}> answer:</span> "Absolutely! Cincinnati has
                    several family-friendly attractions, such as the Cincinnati Zoo &
                    Botanical Garden, the Newport Aquarium, and the Children's Museum.
                    The city also hosts numerous festivals and events suitable for all
                    ages.",
                </p>
            </li>
            <li>
                <h3 className="FAQ-h3">
                    <span className="red"> Question:</span> "How do I purchase tickets
                    for local events and attractions?",
                </h3>
                <p className="FAQ-p">
                    <span className="red" style={{ textAlign: 'left' }}> answer:</span> "You can buy tickets for
                    most local events and attractions online through their official
                    websites or at the ticket counters on-site. Some attractions may
                    offer discounted tickets for children, seniors, and groups.",
                </p>
            </li>
            <li>

                <h3 className="FAQ-h3">
                    <span className="red"> Question:</span> "What neighborhoods should
                    I explore in Cincinnati?",
                </h3>
                <p className="FAQ-p">
                    <span className="red" style={{ textAlign: 'left' }}> answer:</span> "Cincinnati has many unique
                    neighborhoods to explore, each with its own charm. Consider
                    visiting Over-the-Rhine for its historic architecture, Hyde Park
                    for shopping and dining, and Mt. Adams for scenic views of the
                    city.",
                </p>
            </li>
        </ul>
    </div>


    </div>
  );
}

export default Contact;
