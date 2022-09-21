import './emaillist.css'

const EmailList = () => {
  return (
    <div className='email'>
      <h1 className="email-title">save time, save money, more have fun!</h1>
      <span className='email-desc'>Sign Up dan we'll send best deals to you</span>
      <div className="email-input-container">
        <input type="text" placeholder='Your Email'/>
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default EmailList