 import footerLogo from '/public/logo/dark-bg.png'
 import instagram from '/public/icons/instagram.svg'
 import github from '/public/icons/github.svg'
 import linkedin from '/public/icons/linkedin.svg'

const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-primary text-primary-content">
  <aside>
    <img src={footerLogo} alt="ChatVerse" className='w-[30px]' />
    <p className="font-bold">
    ChatVerse by Jatin <br/>The Ultimate Live Chat Experience.
    </p> 
    <p>Copyright © 2024 - All right reserved</p>
  </aside> 
  <nav>
    <div className="grid grid-flow-col gap-4">
      <a target='_blank' href='https://www.linkedin.com/in/the-jatin/'><img src={linkedin} alt="link-to-linkedin" className='w-[25px]'/></a>
      <a target='_blank' href='https://github.com/the-jatin-singh/'><img src={github} alt="link-to-github" className='w-[25px]' /></a>
      <a target='_blank' href='https://www.instagram.com/vex.ax/'><img src={instagram} alt="link-to-instagram" className='w-[25px]' /></a>
    </div>
  </nav>
</footer>
  )
}

export default Footer