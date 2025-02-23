import './Footer.scss'

function Footer() {
  return (
    <div className='footer' lang='de'>
      <div className='left'>
       <p> Dein Moment zur Verbesserung</p>
      </div>
      <div className='right'>
        <div>
          <p className='header'>Dienstleistungen</p>
          <div className='list'>
            <a href="">Teambuilding</a>
            <a href="">Beratung von Teams</a>
            <a href="">Workschops</a>
          </div>
        </div>
        <div>
          <p className='header'>Kontakte</p>
          <p className='email-data'>email@gamil.com</p>
        </div>
    
      </div>
    </div>
  )
}

export default Footer
