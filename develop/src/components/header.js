import Nav from "./nav";
import React, { useState } from 'react';

function Header() {

    const [categories] = useState([
        { name: 'Home', description:'The about page with navigation'},
        { name: 'Portfolio', description:'Projects with links and images' },
        { name: 'Resume', description:'Just a page with resume' },
        { name: 'Contact', description:'A contact form to reach me through' },
    ]);

    const [currentPage, handlePageChange, setCurrentPage] = useState(categories[0]);

    return (
        <div>
            <Nav
                currentPage={currentPage}
                handlePageChange={handlePageChange}
                categories={categories}
                setCurrentPage={setCurrentPage}
            ></Nav>
        </div>

    );
};

export default Header;