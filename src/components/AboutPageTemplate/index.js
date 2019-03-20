import React from 'react'
// import Content from '../Content'
import './index.css'
import PropTypes from 'prop-types'

const AboutPageTemplate = ({title, content, contentComponent}) => {
  // const PageContent = contentComponent || Content

  return (
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
              <div>
                <h2 className='content has-text-centered has-text-weight-semibold is-size-3 is-uppercase is-large'>
                  ABOUT US
                </h2>
                <br />
                <br />
                <div className='columns block max-width-columns'>
                  <div className='column'>
                    <p className='content is-size-5'>Shri Vitthal Hindu Mandir is located in Mississauga, Ontario, Canada. We are a local community center, a place of worship, and we provide educational programs and enrichment opportunities for new immigrants, the elderly, and youth. We have daily recurring events and offer a safe and positive venue where you can learn about Hindu culture and traditions, practice yoga, meet new people, and learn new skills. We are SVHM. suscipit. Pellentesque imperdiet ultricies interdum. </p>
                  </div>
                  <div className='column'>
                    <p className='content is-size-5'>Our Mississauga Hindu Temple abides by the “System of Vedanta” which combines both religion and philosophy of the Hindus. The Vedanta teaches us that we are all divine, regardless of creed, class, gender, and ethnicity, and that our souls divinity may be manifested through worship, contemplation, and unselfish work. The Mandir is located close to Toronto, Brampton, Oakville, Richmond Hill, Milton, and Etobicoke. Come visit us today and join our community, all are welcome!</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className='section block'>
            <div className='content'>
              <div>
                <h2 className='content has-text-centered has-text-weight-semibold is-size-3 is-uppercase is-large'>
                 VISION &amp; MISSION
                </h2>
                <br />
                <br />
                <div className='columns block max-width-columns'>
                  <div className='column'>
                    <p className='content is-size-5'>Our vision is to create and sustain a local community center focused on preserving Hindu traditions and culture, providing a place of worship for all faiths, and to help newcomers transition to the Canadian lifestyle. </p>
                  </div>
                  <div className='column'>
                    <p className='content is-size-5'>Our mission is to build a local self sustaining community ecosystem for present and future generations, and care for those who need help or assistance.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

        </div>
      </section>

      <section id='footer' className='section block is-vcentered background-image' >
        <h3 className='has-text-centered is-size-2 is-uppercase has-text-weight-semibold is-large block has-text-white'>
        SVHM is committed to unity, liberty, and community.
        </h3>
      </section>

      <section className='section'>
        <div className='container' >

          <section className='section block'>
            <div className='content'>
              <div>
                <h2 className='content has-text-centered has-text-weight-semibold is-size-3 is-uppercase is-large'>
                WHAT WE BELIEVE
                </h2>
                <br />
                <br />
                <div className='columns block max-width-columns'>
                  <div className='column'>
                    <p className='content is-size-5'>SVHM accepts all genuine spiritual paths. Each soul or “Atman” is free to find his/her own “path”, whether by devotion, austerity, meditation, scriptural studies, selfless service or by combining any of these.</p>
                  </div>
                  <div className='column content is-size-5'>
                    <ul id='ul' className='content is-size-5'>
                      <li>Truth and non violence.</li>
                      <li>Friendship and accommodation.</li>
                      <li>Straightforwardness and firmness to resolve.</li>
                      <li>Love and compassion.</li>
                      <li>Tolerance and forgiveness.</li>
                      <li>Purity both ceremonial and in real life.</li>
                      <li>Unselfish society centric activities.</li>
                      <li>Education and pursuit of knowledge.</li>
                      <li>Detachment and self control.</li>
                      <li>Unconditional surrender to God.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className='section block'>
            <div className='content'>
              <div>
                <h2 className='content has-text-centered has-text-weight-semibold is-size-3 is-uppercase is-large'>
                VOLUNTEER
                </h2>
                <br />
                <br />
                <div className='columns block max-width-columns'>
                  <div className='column'>
                    <p className='content is-size-5'>Volunteer work includes all ages, diverse religious and ethnic groups. Individuals with varied ability levels and economic resources can provide useful services to our Hindu mandir. You can be a productive team member, meet other people who share your convictions, build new skill set, enhance your resume, and have fun! Volunteers are the lifeblood of many non-profits, and Shri Vitthal Toronto Hindu mandir relies heavily on the goodwill of their volunteers to helps serve our mission to involve, educate, and unite people of all faiths in the Greater Toronto Area.</p>
                  </div>
                  <div className='column content is-size-5'>
                    <p className='content is-size-5'>
                  Volunteering is good for your mind body, and soul.  Here are a few reasons why you should help others:</p>
                    <ul className='content is-size-5'>
                      <li>Personal satisfaction from meaningful work which contributes directly to my community;</li>
                      <li>Putting beliefs into action;</li>
                      <li>Educational and interesting work experience;</li>
                      <li>Enhances your resume.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className='section block'>
            <div className='content'>
              <div>
                <h2 className='content has-text-centered has-text-weight-semibold is-size-3 is-uppercase is-large'>
                 TEMPLE NAMESAKE
                </h2>
                <br />
                <br />
                <div className='columns block max-width-columns'>
                  <div className='column'>
                    <p className='content is-size-5'>Vithoba is considered a manifestation of Lord Vishnu or his avatar Krishna and is often represented as a dark young adolescent with arms akimbo and standing on a brick. Vithoba is often accompanied by his main consort Rakhumai. Vithoba legend revolves around his role as a savior to the poet saints of the Varkari faith who are known for abhanga, a unique genre of devotional lyric composed in Marathi. The most important festivals of Shri Vithoba are held on the 11th day of the Hindu lunar months: Shayani Ekadashi in the month of Ashadha, and Prabodhini Ekadashi in the month of Kartik.</p>
                  </div>
                  <div className='column'>
                    <figure className='image height'>
                      <img src='https://shrivitthal.com/wp-content/uploads/2018/02/vithoba.jpg' />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </section>

        </div>
      </section>

    </div >
  )
}

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

export default AboutPageTemplate
