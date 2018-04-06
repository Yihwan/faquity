import React from 'react';
import { connect } from 'react-redux';
import { Link, Switch } from 'react-router-dom';
import HeaderContainer from './header/header_container';
import MainContainer from './main/main_container';
import FooterContainer from './footer/footer_container';
import AssetDetailContainer from './main/asset_detail/asset_detail_container';

import { AuthRoute, ProtectedRoute } from '../utils/route_util';

const ProtectedViews = () => (
  <div>
    <MainContainer />
  </div>
);

export default ProtectedViews;
