import beLogo from '../assets/be-logo.svg'

export const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <a href="/">
          <img src={beLogo} alt="be-logo" />
        </a>
      </nav>
    </header>
  )
}
