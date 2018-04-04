import React from 'react';
import { connect } from 'react-redux';
import Dashboard from './dashboard';

const mapStateToProps = (state) => ({
  currentUser: state.user
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
