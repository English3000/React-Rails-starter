import React from 'react';
import PropTypes from 'prop-types';
import { styles, P } from './util';

const Profile = ({ user }) => <div key='Profile' style={styles.page}>
                                <P><em>{user.email}</em></P>
                                <P>profile page</P>
                                <P><b>loading...</b></P>
                              </div>;

Profile.propTypes = {user: PropTypes.object};

export default Profile;
