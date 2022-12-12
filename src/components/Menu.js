function Menu() {
    return (
        <div>
             <input id="menu-toggle" type="checkbox" />
                <label className='menu-button-container' for="menu-toggle">
                <div className='menu-button'></div>
              </label>
                <ul className="menu">
                  <li><a href="#"></a></li>
                  <li><a href="#"></a></li>
                  <li></li>
                  <li><a href="#"></a></li>
                  <li><a href=""></a></li>
                </ul>
        </div>
    );
}

export default Menu;