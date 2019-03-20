import React from 'react'
import Helmet from 'react-helmet'
// import Offerings from '../Offerings'
// import Testimonials from '../Testimonials'
import PropTypes from 'prop-types'
import './index.css'

const HomePageTemplate = ({
  title,
  heading,
  description,
  offerings,
  meta_title,
  meta_description,
  testimonials,
}) => (
  <div>
    <Helmet>
      <meta charSet='utf-8' />
      <meta httpEquiv='x-ua-compatible' content='ie=edge' /><meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=yes' />
      <meta name='generator' content='Gatsby 2.1.23' />
      <title>{meta_title}</title>
      <meta name='description' content={meta_description} />
    </Helmet>

    <section className='hero is-primary is-bold is-medium'>
      <div className='hero-body'>
        <div className='container'>
          <div className='columns'>
            <div className='column is-10 is-offset-1'>
              <div className='section'>
                <h1 id='h1'className='title has-text-centered is-size-2 is-capitalized'>
                    Mississauga Hindu Temple In The hear of the greater toronto area that welcomes all regarless of race or religious beliefs. come visit one of canada's oldest hindu mandir's and discover the beauty of celebrating diversity
                </h1>
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
                  Welcome to Svhms
              </h2>
              <br />
              <br />
              <div className='block'>
                <p className='content is-size-5'>Shri Vitthal Hindu Mandir (SVHM) is one of Mississauga’s longest running registered non-profit devoted to bringing families together, providing a safe place of worship, assisting new comers transition into the Canadian life, and preserving old traditions while embracing new ones. </p>
                <p className='content is-size-5'>Established in 1996 in the beautiful city of Mississauga, Ontario, Canada — one of Canada’s fastest growing and diverse cities — we abide by the old simple code known as the “System of Vedanta” which combines religion, philosophy, and innovative nature of the Hindu's.  The Vedanta teaches us that we are all divine, regardless of creed, class, gender, and ethnicity, and that our souls divinity may be manifested through worship, contemplation, and unselfish work.  At SVHM we welcome everyone.</p>
                <p className='content is-size-5'>The Mandir is located close to Toronto, Brampton, Oakville, Richmond Hill, Milton, and Etobicoke. Come visit us today and join our community, all are welcome!</p>
              </div>
            </div>
          </div>
        </section>

        <section className='section'>
          <figure className='video-container'>
          <iframe title='temple video' width="1180" height="664" src="https://www.youtube.com/embed/8HGSDKG1Fqk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>          </figure>
          <div className='block content'>
            <br />
            <br />
            <h2 className='has-text-centered has-text-weight-semibold is-size-3 is-uppercase is-large'>
                HINDU TEMPLE IN MISSISSAUGA
            </h2>
            <br />
            <br />
            <p className='is-size-5'> SVHM is different from other the other temples and mandir’s in and around Toronto, Richmond Hill, Brampton, and Mississauga as it is more family oriented and transparent. The temple does not fund any external political groups and adheres to CRA policies for non profit organizations. </p>
          </div>
        </section>

        <div className='section block'>
          <div className='content'>
            <hr className='hr-blue' />
            <br />
            <p className='count is-size-4 has-text-weight-light'>
                "Immigrating from Northern India in 2016, I did not find a facility in Toronto that provided a place where I can pray, mediate, practice yoga, and meet other Canadian-Tibetans like myself. Then I discovered SVHM, which has been instrumental in my journey of transitioning into the Canadian lifestyle, helping me establish myself in the GTA, build a network of quality peers who share my values, and where I can peacefully pray."
            </p>
            <br />
            <div className='columns is-vcentered is-gapless is-mobile is-centered'>
              <div className='column' />
              <div className='column'>
                <figure className='image is-128x128'>
                  <img className='is-rounded' src='https://shrivitthal.com/wp-content/uploads/2018/02/25497478040_140ce47f31_k.jpg' alt='25497478040_140ce47f31_k.jpg' />
                </figure>
              </div>
              <div className='column'>
                <p className='is-size-5 is-uppercase is-centered'>
                    TSERING WANGCHUKs
                </p>
                <p className='is-size-6 is-centered'>
                    Tibetan-Canadian
                </p>
              </div>
              <div className='column' />
            </div>
          </div>
          <br />
          <hr className='hr-blue' />
        </div>

        <div className='section block'>
          <div className='content'>
            <p className='is-size-4'> SVHM is different from other the other temples and mandir’s in and around Toronto, Richmond Hill, Brampton, and Mississauga as it is more family oriented and transparent. The temple does not fund any external political groups and adheres to CRA policies for non profit organizations. </p>
          </div>
        </div>

        <div className='section block'>
          <div>
            <h2 className='content has-text-centered has-text-weight-semibold is-size-3 is-uppercase is-large'>
                WHAT WE OFFER
            </h2>
            <br />
            <br />
            <div className='columns is-multiline'>
              <div className='column is-full block'>
                <div className='columns is-vcentered'>
                  <div className='column content'>
                    <hr className='hr-left' />
                    <h3 className='is-size-4 has-text-link is-uppercase'>CULTURAL PRESERVATION</h3>
                    <p className='is-size-5'>Through events and story telling, we keep the ancient Hindu traditions alive ensuring their adoption by the next generation of Canadians.</p>
                  </div>
                  <div className='column'>
                    <figure className='video-container'>
                      <iframe title='video one' width='1035' height='1000' src='https://www.youtube.com/embed/mgabrMvtUrw' frameBorder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowFullScreen />
                    </figure>
                  </div>
                </div>
                <hr className='hr-full-width' />
              </div>
              <div className='column  is-full block'>
                <div className='columns is-vcentered'>
                  <div className='column content'>
                    <hr className='hr-left' />
                    <h3 className='is-size-4 has-text-link is-uppercase'>A PLACE OF WORSHIP</h3>
                    <p className='is-size-5'>Our primary divine figureheads are Vitthoba, Ganesh, &amp; Sai Baba however members of our community are free to worship and pray to their god/goddess of choice.  Our facility has integrated most idols and we frequently hold cross-cultural events with other non-profits and places of worship.</p>
                  </div>
                  <div className='column'>
                    <figure className='video-container'>
                     <iframe title='videoo' width="1079" height="607" src="https://www.youtube.com/embed/mgabrMvtUrw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </figure>
                  </div>
                </div>
                <hr className='hr-full-width' />
              </div>
              <div className='column is-full block'>
                <div className='columns is-vcentered'>
                  <div className='column content'>
                    <hr className='hr-left' />
                    <h3 className='is-size-4 has-text-link is-uppercase'>EMBRACE CANADA</h3>
                    <p className='is-size-5'>Throughout the year we hold numerous events that allow new immigrants and visiting dignitaries to experience Canadian culture – true north strong and free.</p>
                    <p className='is-size-5'>We also help newcomers transition into the Canadian life by helping them learn the language and idioms, cultural norms, and connecting them with other community events as well as government services.</p>
                  </div>
                  <div className='column'>
                    <figure className='video-container'>
                      <iframe title='video three' width='1522' height='856' src='https://www.youtube.com/embed/I73Hvl7nhfw' frameBorder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowFullScreen />
                    </figure>
                  </div>
                </div>
                <hr className='hr-full-width' />
              </div>

            </div>
          </div>
        </div>

        <section className='section block'>
          <div className='content'>
            <h2 className='has-text-centered has-text-weight-semibold is-size-3 is-uppercase is-large'>
                EVENTS
            </h2>
            <br />
            <br />
            <p className='is-size-5 has-text-left'>The following our are current events:</p>
          </div>
          <div className='table__wrapper'>
            <table className='table is-fullwidth'>
              <thead>
                <tr>
                  <th>Event</th>
                  <th>Description</th>
                  <th>Day</th>
                  <th>Time</th>
                </tr>
              </thead>
              <tfoot>
                <tr />
              </tfoot>
              <tbody>
                <tr>
                  <td><a href='http://web.archive.org/web/20161101033503/http://www.shrivitthal.com/events/shri-devi-mahalakshmi-upasana/' target='_blank' rel='noopener'>Shri Devi Mahalakshmi Upasana</a></td>
                  <td>Shri Lakashmi Adoration/Worship.</td>
                  <td>Tuesday</td>
                  <td>6:00pm to 7:00pm</td>
                </tr>
                <tr>
                  <td><a href='http://web.archive.org/web/20161101033503/http://www.shrivitthal.com/events/hanuman-chalisa/' target='_blank' rel='noopener'>Hanuman Chalisa</a></td>
                  <td>Tuesday’s Hanumanji’s sacred hymn recital.</td>
                  <td>Tuesday</td>
                  <td>7:00pm to 9:00pm</td>
                </tr>
                <tr>
                  <td><a href='http://web.archive.org/web/20161101033503/http://www.shrivitthal.com/events/hanuman-chalisa/' target='_blank' rel='noopener'>Hanuman Chalisa</a></td>
                  <td>Saturday’s Hanumanji’s sacred hymn recital.</td>
                  <td>Saturday</td>
                  <td>12:30pm to 1:00pm</td>
                </tr>
                <tr>
                  <td><a href='http://web.archive.org/web/20161101033503/http://www.shrivitthal.com/events/shirdi-sai-baba-toronto/' target='_blank' rel='noopener'>Sai Baba Adoration</a></td>
                  <td>A day devoted to the prayer and worship of Shri Sai Baba of Shirdi.</td>
                  <td>Thursday</td>
                  <td>6:00pm to 9:00pm</td>
                </tr>
                <tr>
                  <td>Classical <a href='http://web.archive.org/web/20161101033503/http://www.shrivitthal.com/events/indian-dance-classess-in-mississauga/' target='_blank' rel='noopener'>Indian Dance Class</a></td>
                  <td>Classical Bharatanatyam dance class for youth.</td>
                  <td>Friday</td>
                  <td>7:00pm to 8:30pm</td>
                </tr>
                <tr>
                  <td>Sai Baba Kakad Aarthi &amp; Mahima</td>
                  <td>Sai Baba morning aarthi followed by breakfast.</td>
                  <td>Saturday</td>
                  <td>8:30am to 10:00am</td>
                </tr>
                <tr>
                  <td>Vishnu Sahasranamam</td>
                  <td>Reciting the thousand names of Lord Vishnu.</td>
                  <td>Saturday</td>
                  <td>12:00pm to 12:30pm</td>
                </tr>
                <tr>
                  <td><a href='http://web.archive.org/web/20161101033503/http://www.shrivitthal.com/events/vedanta-society-of-toronto/' target='_blank' rel='noopener'>Sloka Class</a></td>
                  <td>Teaching youth different verses of ancient text, bhajans and stories.</td>
                  <td>Saturday</td>
                  <td>3:00pm to 4:00pm</td>
                </tr>
                <tr>
                  <td>Lakshmi Stotram</td>
                  <td>Sri Lakshmi Sahasranama; Prayers and worship of Goddess Lakshmi.</td>
                  <td>Saturday</td>
                  <td>12:45pm to 1:00pm</td>
                </tr>
                <tr>
                  <td>Shri Vithoba &amp; Shri Rakhumai</td>
                  <td>Prayers, Bhajans, and worship of Lord Vithoba &amp; Rakhumai.</td>
                  <td>Sunday</td>
                  <td>6:00pm to 8:00pm</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className='section block'>
          <div>
            <h2 className='content has-text-centered has-text-weight-semibold is-size-3 is-uppercase is-large'>
                   Location &amp; Service times
            </h2>
            <br />
            <br />
            <div className='block'>
              <div className='columns is-multiline is-centered'>
                <p className='content is-size-5'>SVHM is open Monday to Sunday from 8:00 pm to 9:00 pm. We are located in the beautiful wooded area near the Hersey Sports Complex and close to all major highways and the Square One Shopping Centre, the Community Center’s 3,000 square foot hall and full service kitchen are available for rent.</p>
                <div className='column is-full'>
                  <figure className='image is-1000x1000 block is-full'>
                    <img src='https://shrivitthal.com/wp-content/uploads/2018/02/shri-vitthal-mandir-location.jpg' alt='Shri Vitthal Mandir Location' />
                  </figure>
                </div>
                <br />
                <div id='column' className='column'>
                  <a id='center' className='content button is-link is-centered is-mobile is-rounded is-medium center' href='https://www.google.ca/maps/place/Shri+Vitthal+Hindu+Mandir/@43.6356401,-79.7255082,13z/data=!4m19!1m13!4m12!1m4!2m2!1d-79.7378192!2d43.6499971!4e1!1m6!1m2!1s0x882b38aeadba59af:0x3dd6ccc430171a2e!2sShri+Vitthal+Hindu+Mandir,+5359+Timberlea+Blvd+%2310,+Mississauga,+ON+L4W+4N5!2m2!1d-79.6429866!2d43.6310776!3m4!1s0x882b38aeadba59af:0x3dd6ccc430171a2e!8m2!3d43.6310776!4d-79.6429866' target='_blank' rel='nofollow noopener'>Directions</a>
                </div>

              </div>
            </div>
          </div>
        </section>

        <section className='section block'>
          <h3 className='has-text-centered is-size-4 is-uppercase is-large block'>
            PROUDLY SUPPORTED BY:
          </h3>
          <div className='section block is-flex is-horizontal-center'>
            <br />
            <br />
            <div className='columns is-vcentered'>
              <div className='column'>
                <figure className='image is-256x256'>
                  <img src='https://shrivitthal.com/wp-content/uploads/2018/02/mississauga-hindu-temple-300x61.jpg' alt='img1' />
                </figure>
              </div>
              <div className='column'>
                <figure className='image is-256x256'>
                  <img src='https://shrivitthal.com/wp-content/uploads/2018/02/ontario-logo-2.jpg' alt='img2' />
                </figure>
              </div>
              <div className='column'>
                <figure className='image is-256x256'>
                  <img src='https://shrivitthal.com/wp-content/uploads/2018/02/google-nonprofit.jpg' alt='img3' />
                </figure>
              </div>
            </div>
          </div>
        </section>
      
      </div>
    </section>
  </div>
)

HomePageTemplate.propTypes = {
  title: PropTypes.string,
  meta_title: PropTypes.string,
  meta_description: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  offerings: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
  testimonials: PropTypes.array,

}

export default HomePageTemplate
