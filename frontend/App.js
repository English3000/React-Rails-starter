import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Pages from './Pages';

export default ({ store }) => <Provider store={store}>
                                <BrowserRouter>
                                  <Pages />
                                </BrowserRouter>
                              </Provider>;
