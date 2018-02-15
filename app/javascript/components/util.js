import React from 'react';

export const styles = {
  page: { height: 800, fontSize: 50, backgroundColor: 'whitesmoke',
          display: 'flex', flexDirection: 'column',
          justifyContent: 'center', alignItems: 'center' }
};

export const P = props => <p style={{margin: 0, padding: 0}} {...props}>
                            {props.children}
                          </p>;
