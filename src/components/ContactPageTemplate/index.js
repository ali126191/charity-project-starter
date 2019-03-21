import React, {Component} from 'react'
// import { navigate } from 'gatsby-link'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faPhoneSquare } from '@fortawesome/free-solid-svg-icons'
// import Helmet from 'react-helmet'
// import PropTypes from 'prop-types'
import './index.css'

const encode = (data) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

class ContactPageTemplate extends Component {
  constructor (props) {
    super(props)
    this.state = { isValidated: false }
  }

  // handleChange = e => {
  //   this.setState({ [e.target.name]: e.target.value })
  // }

  // handleSubmit = e => {
  //   e.preventDefault()
  //   const form = e.target
  //   // eslint-disable-next-line
  //   fetch('/?no-cache=1', {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  //     body: encode({
  //       'form-name': form.getAttribute('name'),
  //       ...this.state,
  //     }),
  //   })
  //     .then(() => navigate(form.getAttribute('action')))
  //     // eslint-disable-next-line
  //     .catch(error => alert(error))
  // }

  render () {
    // const {title, subtitle, meta_title, meta_description} = this.props
    return (
      <div>
        <section className='hero is-primary is-bold is-medium'>
          <div className='hero-body'>
            <div className='container'>
              <div className='columns'>
                <div className='column is-10 is-offset-1'>
                  <div className='section'>
                    <h1 id='h1'className='title has-text-centered is-size-1 is-capitalized'>SVHM</h1>
                    <h3 className='subtitle has-text-centered is-size-2 is-capitalized'>Community</h3>
                    <h4 className='subtitle has-text-centered is-size-3 is-capitalized'>Culture</h4>
                    <h5 className='subtitle has-text-centered is-size-4 is-capitalized'>- SHRI VITTHAL HINDU MANDIR -</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='section section--gradient'>
          <div className='container'>
            <section className='section block'>
              <h2 className='content has-text-centered has-text-weight-semibold is-size-3 is-large'>
                CONTACT US
              </h2>
              <br />
              <br />
              <h5 className='content has-text-centered has-text-weight-semibold is-size-4 is-large'>You can contact us directly at <a>info@shrivitthal.com</a></h5>
              <div className='columns is-multiline margin-auto'>
                <div className='column is-half'>
                  <div className='columns is-mobile'>
                    <div className='column is-2'>
                      <FontAwesomeIcon icon={faHome} size='lg' style={{color: 'black'}} />
                    </div>
                    <div className='column is-10'>
                asds
                    </div>
                  </div>
                </div>
                <div className='column is-half'>
                  <div className='columns is-mobile'>
                    <div className='column is-2'>

                      <div className='column'>
                        <p className='content is-size-5 is-10'>
                  Volunteering is good for your mind body, and soul.  Here are a few reasons why you should help others:</p>
                      </div>
                    </div>
                    <div className='column is-10'>

                      <div className='column'>
                        <p className='content is-size-5 is-10'>
                  Volunteering is good for your mind body, and soul.  Here are a few reasons why you should help others:</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>

        <section className='section block'>
          <div className='content'>
            <h2 className='content has-text-centered has-text-weight-semibold is-size-3 is-uppercase is-large'>
              WHERE WE ARE
            </h2>
            <br />
            <br />
            <a className='content has-text-centered is-size-4 is-uppercase h-center'href='https://www.google.com/maps/place/Shri+Vitthal+Hindu+Mandir,+5359+Timberlea+Blvd+%2310,+Mississauga,+ON+L4W+4N5/@43.6310776,-79.6429866,16z/data=!4m2!3m1!1s0x882b38aeadba59af:0x3dd6ccc430171a2e'>— Get Directions —</a>
          </div>
        </section>

        <section className='background-image'>
          <p className='has-text-white' />
        </section>

      </div >
    )
  }
};

// ContactPageTemplate.propTypes = {
//   title: PropTypes.string,
//   subtitle: PropTypes.string,
//   meta_title: PropTypes.string,
//   meta_description: PropTypes.string,
// }

export default ContactPageTemplate
