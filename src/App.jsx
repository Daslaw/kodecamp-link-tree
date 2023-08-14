import './App.css'
import profile from './assets/Myimage.jpg'
import share from './assets/share.svg'
import menu from './assets/menu.svg'
import slack from './assets/slack.svg'
import github from './assets/github.svg'
import kodecamp_lg from './assets/kodecamp-logo.svg'
import kodehauz_lg from './assets/kodehauz-logo.svg'

function App() {  

  return (
    <>
    {/* main box */}
      <div className='box-sec'>
        <div className='container'>
          <div className='main-section'>
            <div className='share'>
              <img src={menu} alt="Mobile menu" className='hide'/>
              <img src={share} alt="Share profile" className='none' />
            </div>
            <div className='profile-section'>
              <img className='profileImg' src={profile} alt="Daslaw"/>
              <p className='profileName'>Dauda Lawal</p>
            </div>
            {/* links */}
            <div className='link-section'>
              <a href="https://twitter.com/daslaw_26" type='button'>Twitter Link</a>
              <a href="#" type='button'>KodeCamp Team</a>
              <a href="#" type='button'>KodeCamp Books</a>
              <a href="#" type='button'>Python Books</a>
              <a href="#" type='button'>Background Check for Coders</a>
              <a href="#" type='button'>Design books</a>
            </div>  
          </div>  
          {/* Social */}
          <div className='social-section'>
            <a href="https://slack.com/">
              <img src={slack} alt="Slack profile"/>  
            </a> 
            <a href="https://github.com/daslaw">
              <img src={github} alt="Github profile"/>  
            </a>            
          </div>      
        </div>  
        {/* Footer section */}
        <div className='footer-section'>
          <img src={kodecamp_lg} alt="Kodecamp"/>
          <p className='footerText'>KodeCamp Internship Task</p>
          <img src={kodehauz_lg} alt="Kodehauz" className='kodehz'/>             
        </div>    
      </div>
    </>
  )
}

export default App
