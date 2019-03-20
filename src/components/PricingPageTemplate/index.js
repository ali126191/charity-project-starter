import React from 'react'
// import Helmet from 'react-helmet'
// import Pricing from '../Pricing'
// import PropTypes from 'prop-types'
import './index.css'

const PricingPageTemplate = ({
  title,
  meta_title,
  meta_description,
  pricing,
}) => (
  <div>
    <section className='hero is-primary is-bold is-medium'>
      <div className='hero-body'>
        <div className='container'>
          <div className='columns'>
            <div className='column is-10 is-offset-1'>
              <div className='section'>
                <h1 id='h1'className='title has-text-centered is-size-1 is-capitalized is-spaced'>WE ARE SVHM</h1>
                <h3 className='subtitle has-text-centered is-size-5 is-capitalized'>Local Community &amp; Cultural Center in Mississauga</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className='section section--gradient'>
      <div className='container'>

        <section className='section block'>
          <div className='content'>
            <h2 className='content has-text-centered has-text-weight-semibold is-size-3 is-uppercase is-large'>
                SERVICES AT OUR MANDIR
            </h2>
            <br />
            <br />
            <div className='block'>
              <p className='content is-size-5'>Some of the services that we perform at our Brampton Hindu Temple are: Hindu rituals, pooja, conduct marriages, funeral rites according to Hindu Vedic rituals, bhajans, Abhishekams (ritualistic baths to our deities) and other ceremonies as per tradition of Hindu faith, with recitations of appropriate Mantras.</p>
              <p className='content is-size-5 has-text-weight-bold'>Hall Rental in Mississauga – Private &amp; Public Rentals </p>
              <p className='content is-size-5'>Hall rental fee includes:</p>
              <ul className='content is-size-5'>
                <li>Free Parking</li>
                <li>Use of Full Kitchen</li>
                <li>200 person maximum occupancy</li>
                <li>100 padded chairs + 65 metal folding chairs</li>
                <li>15- 5’ round tables (seat 8 each)</li>
                <li>4 – 6’ banquet tables (seat 6 each)</li>
              </ul>
              <p className='content is-size-5 has-text-weight-bold'>Puja Service</p>
              <p className='content is-size-5'>At our temple we offer puja and pandit services to all our devotees. Every ceremony comes only once. You expect it to be special. We help you make it memorable!</p>
              <p className='content is-size-5 has-text-weight-bold'>Classes</p>
              <p className='content is-size-5'>From meditation, yoga, to ancient dance classes Shri Vitthal Hindu Mandir has it all! Get involved and/or get your kids involved and participate with others in the community.</p>
            </div>
          </div>
        </section>

        <section className='section block'>
          <div className='content'>
            <h2 className='content has-text-centered has-text-weight-semibold is-size-3 is-uppercase is-large'>
             SERVICE HOURS
            </h2>
            <br />
            <br />
            <div className='block'>
              <p className='content is-size-5'>The Toronto Temple (Mandir) is normally open in the morning for prayer and contemplation between 8:00 am and 11:00 am and in the evening between 6:00 pm and 7:30 pm. These are mandatory opening times. Offerings to the Hindu Deities are made on special occasions.</p>
              <p className='content is-size-5'>There are however no limits to opening hours and the Hindu Mandir will remain open for as long as necessary when celebrating functions, religious festivals and special events – for example, Pooja, Havan and Bhajans.</p>
              <p className='content is-size-5 has-text-weight-bold'>What motivates or Volunteers?</p>
              <p className='content is-size-5'>If you ask 100 people, you will probably get 100 different answers. Here are some we hear most often:</p>
              <ul className='content is-size-5'>
                <li>Personal satisfaction from meaningful work which contributes directly to my community;</li>
                <li>Putting beliefs into action;</li>
                <li>Educational and interesting work experience;</li>
                <li>Enhances my resume.</li>
              </ul>
              <p className='content is-size-5 has-text-weight-bold'> Guiding Principles for Volunteers</p>
              <p className='content is-size-5'>Only after reading and understanding these principles &amp; guidelines a volunteer should register/sign up for volunteering. </p>
              <ul className='content is-size-5'>
                <li>SVHM expects &amp; recommends that volunteers be loyal and dedicated to God &amp; Temple.</li>
                <li>SVHM expects &amp; recommends that volunteers be responsible for his/her own safety and of all others.</li>
                <li>SVHM expects &amp; recommends that volunteers be courteous to every person in the temple.</li>
                <li>SVHM expects &amp; recommends that volunteers be sincere &amp; follows his/her assigned duties in the temple and notifies if he/she could not attend to his/her duties.</li>
                <li>SVHM expects &amp; recommends that volunteers be flexible &amp; understanding for any possible changes to be made in their schedule due to necessity and unanticipated requirements.</li>
                <li>SVHM expects &amp; recommends that volunteers be aware that there may be age, gender &amp; experience requirements in some areas of volunteers work.</li>
                Volunteers may be required to work under the guidance of lead volunteers.
                <li>SVHM reserves the right to deny the service of any volunteers service if it feels necessary to do so due to any unforeseen circumstances.</li>
                <li>SVHM expects volunteers to follow all the general, ethical, cultural &amp; religious guidelines followed in the temple.</li>
                <li>SVHM is not responsible for any accidental or any other injury, disability or loss of belongings in the temple.</li>
              </ul>
              <p className='content is-size-5 has-text-weight-bold'>High Profile Roles</p>
              <span className='content is-size-5'>We are looking to fill the following volunteer roles:</span>
              <span className='is-size-5'>Director of Resource Development – Lead fundraising initiatives.</span>
              <span className='is-size-5'>Community Manager – Manage our online website and social media channels.</span>
              <br />
              <p className='content is-size-5 has-text-weight-bold'>Volunteer Qualifications</p>
              <li className='is-size-5'>Good judgment;</li>
              <li className='is-size-5'>Willingness to follow instructions and work cooperatively as a team member;</li>
              <li className='is-size-5'>Ability to perform and follow through on unsupervised duties on an individual basis.</li>
              <br/>
              <span className='content is-size-5'>We are looking to fill the following volunteer roles:</span>
              <span className='is-size-5'>Director of Resource Development – Lead fundraising initiatives.</span>
              <span className='is-size-5'>Community Manager – Manage our online website and social media channels.</span>
            </div>
          </div>
        </section>

      </div>
    </section>
  </div >
)

// PricingPageTemplate.propTypes = {
//   title: PropTypes.string,
//   meta_title: PropTypes.string,
//   meta_description: PropTypes.string,
//   pricing: PropTypes.shape({
//     heading: PropTypes.string,
//     description: PropTypes.string,
//     plans: PropTypes.array,
//   }),
// }

export default PricingPageTemplate
