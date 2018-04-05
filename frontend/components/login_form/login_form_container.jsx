import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login, receiveErrors } from '../../actions/session_actions';
import LoginForm from './login_form';

const mapStateToProps = (state) => ({
  errors: state.errors,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  login: (user) => dispatch(login(user)),
  clearErrors: () => dispatch(receiveErrors([]))
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
