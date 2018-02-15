import React from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
import { View, Text } from '../../utils/elements';
import { signOut } from '../../actions/auth';

const mapDispatchToProps = dispatch => ({
  SignOut: () => dispatch(signOut())
});

const navStyle = { position: 'fixed', justifyContent: 'flex-end', width: '100%' };

const Nav = ({ currentUser, SignOut }) => (
  <View style={navStyle}>
    {currentUser ? <i className='fa fa-sign-out fa-lg' onClick={SignOut}
                      style={{cursor: 'pointer'}}></i> : ''}
  </View>
);

export default connect(null, mapDispatchToProps)(Nav);
