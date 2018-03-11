## [React-Rails](https://github.com/reactjs/react-rails#react-rails) Starter

* **[MOBILE APP HERE](https://github.com/English3000/React-Rails-mobile)**

### Updates

Configured `axios` CSRF in `api.js`, adapted `application_controller.rb` to avoid errors caused by no CSRF.

Revised production output path in `webpack.config.js`, added bundle tags in server-side views, added empty `bundle.js` in `app/javascript/packs`, added gem [`rack-cors`](https://github.com/cyu/rack-cors), and configured it in `config/application.rb`--client-side should now hydrate in production.

Refactored `Header` (now `AuthHeader`) & `Nav` into `Pages`!

### Features

- [x] basic setup

- [x] user auth

- [x] server-side rendering (along with client-side)

- [x] custom components for [React Native integration](https://github.com/English3000/React-Rails-mobile)

- [ ] `webpack-dev-server` config _(if you get it bug-free before I do, submit yours as an issue)_

### To clone:

* `git clone https://github.com/English3000/React-Rails-starter`
* `bundle install`
* `rails db:setup`

If you haven't already, check out [iTerm2](https://www.iterm2.com/version3.html). When you do `rails s` & `webpack --watch`, you can have each in a horizontally-split frame and a third for command line navigation.
