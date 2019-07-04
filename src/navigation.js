import { Navigation } from 'react-native-navigation'

export const goToAuth = () => Navigation.setRoot({
  root: {
    stack: {
      id: "Auth",
      children: [{
        component: {
        name: "SignIn"
        }
      }],
      options: {
        topBar: {
          visible: false
        }
      }
    }
  }
});

export const goHome = () => Navigation.setRoot({
  root: {
    sideMenu: {
      id: "sideMenu",
      left: {
        component: {
          name: "Drawer"
        }
      },
      center: {
        stack: {
          id: "App",
          children: [{
            component: {
              name: "Home"
            }
          }]
        }
      }
    }
  }
})


