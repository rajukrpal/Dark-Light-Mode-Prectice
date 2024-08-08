import React from 'react'

const Navebar = ({darkMode , toggleDarkMode}) => {
  return (
    <div>
      <nav 
            className={darkMode ? "dark": ""}
        >
            <img 
            
                className="nav--logo_icon"
                src="/navbar/atom.png"
            />
            <h3 className="nav--logo_text">ReactFacts</h3>
            
            <div 
                className="toggler" 
            >
                <p className="toggler--light">Light</p>
                <div 
                    className="toggler--slider"
                    onClick={toggleDarkMode}
                >
                    <div className="toggler--slider--circle"></div>
                </div>
                <p className="toggler--dark">Dark</p>
            </div>
        </nav>
    </div>
  )
}

export default Navebar
