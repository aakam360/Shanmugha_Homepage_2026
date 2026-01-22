import React from 'react';
import menu_data from '../menu-data';
import Link from 'next/link';

const MainMenu = () => {
    return (
        <ul className="mainmenu">
            {menu_data.map((menu, i) => (
                <li key={i} className={!menu.single_menu ? "has-droupdown" : ''}><a href={menu.link}>{menu.title}</a>
                    {!menu.mega_menu && !menu.single_menu &&
                        <ul className="submenu">
                            {menu.submenus.map((nav, i) => (
                                <li key={i}>
                                    <Link href={`${nav.link}`}>
                                        <a>
                                            {nav.title}

                                        </a>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    }
                    {menu.mega_menu && !menu.single_menu &&
                        <ul className="mega-menu"  style={{paddingRight:'25px', marginRight:'130px'}}>
                            {menu.submenus.map((nav, i) => ( 
                                <li key={i} style={{ width: 'max-content' }}>
                                    <h6  className="menu-title" style={{fontSize:"0.9em"}} > {nav.icon && <img src={`/assets/images/icons-svg/${nav.icon_name}`} />}  <Link href={`${nav.link}`}>
                                        <a>{nav.title}</a>
                                    </Link></h6>
                                    <ul className="submenu mega-sub-menu-01">
                                        {nav.mega_submenu.map((m, i) => (
                                            <li key={i}>
                                                {nav.icon && <img src={`/assets/images/icons-svg/${nav.icon_name}`} />} <Link href={`${m.link}`}>
                                                    <a>{m.title}</a>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                            ))}
                        </ul>
                    }
                </li>
            ))}
        </ul>
    )
}

export default MainMenu;