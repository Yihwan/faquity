import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import HeaderContainer from './header/header_container';
import MainContainer from './main/main_container';
import FooterContainer from './footer/footer_container';

const ProtectedViews = () => (
  <div>
    <HeaderContainer />
    <MainContainer />
  </div>
);

export default ProtectedViews;
