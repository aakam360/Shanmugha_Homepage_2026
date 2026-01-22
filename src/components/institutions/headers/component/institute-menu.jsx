// import React from 'react';
// import institute_menu_data from '../institute-menu-data';
// import Link from 'next/link';
// import AcUnitIcon from '@mui/icons-material/AcUnit';

// const InstituteMenu = () => {
//     return (
//         <ul className="mainmenu">
//             {institute_menu_data.map((menu, i) => (
//                 <li key={i} className={!menu.single_menu ? "has-droupdown":''}><a href={menu.link}>{menu.title}</a>
//                     {!menu.mega_menu && !menu.single_menu &&
//                         <ul className="submenu">
//                             {menu.submenus.map((nav, i) => (
//                                 <li key={i}>
//                                     <Link href={`${nav.link}`}>
//                                         <a> 
//                                             {nav.title}

//                                         </a>
//                                     </Link>
//                                 </li>
//                             ))}
//                         </ul>
//                     }
//                     {menu.mega_menu && !menu.single_menu &&
//                         <ul className="mega-menu" style={{paddingRight:'25px'}}>
//                             {menu.submenus.map((nav, i) => (
//                                 <li key={i} style={{    width: 'max-content'}}>
//                                     <h6 className="menu-title"> {nav.icon && <img  src={`/assets/images/icons-svg/${nav.icon_name}` }/> }  <Link href={`${nav.link}`}>
//                                                     <a>{nav.title}</a>
//                                                 </Link></h6>
//                                     <ul className="submenu mega-sub-menu-01">
//                                         {nav.mega_submenu.map((m, i) => (
//                                             <li key={i}>
//                                                {nav.icon && <img  src={`/assets/images/icons-svg/${nav.icon_name}`} /> } <Link href={`${m.link}`}>
//                                                     <a>{m.title}</a>
//                                                 </Link>
//                                             </li>
//                                         ))}
//                                     </ul>
//                                 </li>
//                             ))}
//                         </ul>
//                     }
//                 </li>
//             ))}
//         </ul>
//     )
// }

// export default InstituteMenu;


import React from 'react';
import institute_menu_data from '../institute-menu-data';
import Link from 'next/link';

const InstituteMenu = () => {
    return (
        <ul className="mainmenu">
            {institute_menu_data.map((menu, i) => (
                <li key={i} className={!menu.single_menu ? "has-droupdown" : ''}><a href={menu.link}>{menu.title}</a>
                    {!menu.mega_menu && !menu.single_menu &&
                        <ul className="submenu">
                            {menu.submenus.map((nav, i) => (
                                <li key={i}>
                                    <Link href={`${nav.link}`}>
                                        {nav.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    }
                    {menu.mega_menu && !menu.single_menu &&
                        <ul className="mega-menu" style={{ paddingRight: '25px' }}>
                            {menu.submenus.map((nav, i) => (
                                <li key={i} style={{ width: 'max-content' }}>
                                    {/* --- MODIFIED LINE --- */}
                                    <h6 className="menu-title" style={{ fontWeight: 300 }}>
                                        {nav.icon && <img src={`/assets/images/icons-svg/${nav.icon_name}`} />}
                                        <Link href={`${nav.link}`}>
                                            {nav.title}
                                        </Link>
                                    </h6>
                                    <ul className="submenu mega-sub-menu-01">
                                        {nav.mega_submenu.map((m, i) => (
                                            <li key={i}>
                                                {nav.icon && <img src={`/assets/images/icons-svg/${nav.icon_name}`} />} <Link href={`${m.link}`}>
                                                    {m.title}
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

export default InstituteMenu;