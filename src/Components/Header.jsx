import React from 'react';
import TopHeader from './TopHeader';
import MidHeader from './MidHeader';
import EndHeader from './EndHeader';

const Header = () => {
    return (
        <div>
            <TopHeader></TopHeader>
            <MidHeader></MidHeader>
            <EndHeader></EndHeader>
        </div>
    );
};

export default Header;