const contentful = require('contentful')

export const contentfulClient = contentful.createClient({
  space: 'w2drq1yyt9v3',
  accessToken: 'h6Rg2JH8U39bXRLuhjoXvTq00oFTM6WinI4Q-3vLgEw'
})

export default (_, inject) => {
  inject('ctflClient', contentfulClient)
}
