import './AboutUs.css'

function AboutUs(){
    return(
        <div class="container">
        <h1>About Us</h1>
        <h2>Our Mission</h2>
        <p>At [System Name], our mission is to revolutionize the way books are managed, making it easier for individuals and organizations to organize, track, and enjoy their literary collections.</p>

        <h2>Our Vision</h2>
        <p>We envision a world where every book lover can effortlessly organize their collection, share their passion with others, and explore new literary horizons.</p>

        <h2>Meet the Team</h2>
        <div class="team-member">
            <img src="founder.jpg" alt="Founder/CEO"/>
            <div>
                <h3>[Founder/CEO Name]</h3>
                <p>With a passion for literature and a background in [relevant field], [Founder/CEO Name] envisioned [System Name] as a solution to the challenges of book management.</p>
            </div>
        </div>
        <div class="team-member">
            <img src="developer.jpg" alt="Developer"/>
            <div>
                <h3>[Developer Name]</h3>
                <p>Our dedicated team of developers, designers, and support staff work tirelessly to ensure that [System Name] delivers an exceptional user experience.</p>
            </div>
        </div>

        <h2>Contact Us</h2>
        <p>We value your feedback and are always here to assist you. Feel free to reach out to us with any questions, suggestions, or inquiries at [contact email/phone number].</p>

        <h2>Connect With Us</h2>
        <p>Stay updated with the latest news, features, and promotions by following us on [social media platforms]. Join our community of book enthusiasts and be part of the [System Name] experience.</p>
    </div>
    )
}

export default AboutUs