import { useState } from "react"

const Header = () => {
  const [search, setSearch] = useState(false)
  const [text, setText] = useState('')
  const reset = () => {
    setSearch(false)
    setText('')
  }
  return (
    <header className='header'>
      {search ? (
        <nav className="header__nav search">
          <button onClick={() => reset()} ><img src="src\assets\images\back.svg" alt="" /></button>
          <input 
            type="text" 
            placeholder="Поиск..." 
            autoFocus 
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button onClick={() => setText('')}><img src="src\assets\images\clear.svg" alt="" /></button>
        </nav>
      ) : (
        <nav className="header__nav">
          <button className="header__nav-lang">RU</button>
          <h1 className="header__nav-title">Заметки</h1>
          <button onClick={() => setSearch(true)} className="header__nav-search"><img src="src\assets\images\search.svg" alt="" /></button>
        </nav>
      )}
    </header>
  )
}

export default Header