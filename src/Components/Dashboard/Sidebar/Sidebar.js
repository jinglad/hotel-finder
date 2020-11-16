import React from 'react';
import logo from '../../../Images/logos/Logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faList, faPlus, faUser } from '@fortawesome/free-solid-svg-icons';
import './Sidebar.css';

const SideBar = () => {
    
    return (
        <div>
            <Link to="/" className="ml-5 mb-5 pb-5">
                <img style={{ width: '150px', height: '74.8px' }} src={logo} alt="logo" />
            </Link>
            <div className="ml-5 sidebar d-flex flex-column py-5 px-4" style={{ height: "100vh" }}>
                <ul className="list-unstyled">
                    <li>
                        <Link className="text-decoration-none text-dark item" to="/all-bookings"><FontAwesomeIcon icon={faList} /> Booking List</Link>
                    </li>
                    <li>
                        <Link className="text-decoration-none text-dark item" to="/add-rent"><FontAwesomeIcon icon={faPlus} /> Add Rent</Link>
                    </li>
                    <li>
                        <Link className="text-decoration-none text-dark item" to="/my-rent"><FontAwesomeIcon icon={faUser} /> My Rent</Link>
                    </li> 
                </ul>
            </div>
        </div>
    );
};

export default SideBar;


// const Sidebar = () => {
//     return (
//         <div className="sidebar mt-5 ml-5">
//             <Link to="/" className="sidebar-header">
//                 <img style={{ width: '100px', height: '54.8px' }} src={logo} alt="logo" />
//             </Link>
//             <ul className="list-unstyled mt-5">
//                 <li>
//                     <Link to="/bookingList" className="dashboard-component">
//                         <i className="fas fa-hdd"></i> <span>Booking List</span>
//                     </Link>
//                 </li>
//                 <li>
//                     <Link to="/addHouse" className="dashboard-component">
//                         <i className="fas fa-plus"></i> <span>Add House</span>
//                     </Link>
//                 </li>
//                 <li>
//                     <Link to="/myRents" className="dashboard-component">
//                         <i class="fas fa-home"></i> <span>My Rents</span>
//                     </Link>
//                 </li>
//             </ul>
//         </div>
//     );
// };

// export default Sidebar;