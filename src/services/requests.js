import axios from 'axios'
import creditCardMock from './creditCardMock'

const baseURL = 'https://api-sandbox.getnet.com.br'

const params = new URLSearchParams()
params.append('scope', 'oob')
params.append('grant_type', 'client_credentials')

const token =
  'Basic OTM1ZTdjOGEtNjVjNi00ZjZlLThiY2EtN2U3OTkzMjdhMTFhOjlmNTM3NzMyLWMxMWEtNGVlOC04MWVhLTRiNWVhN2JmZTBiMQ=='

const authUser = async () => {
  try {
    const instance = axios.create({
      headers: {
        Authorization: token,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      baseURL,
    })
    const response = await instance.post('/auth/oauth/v2/token', params)
    return response.data
  } catch (e) {
    const message = e.response.data

    return { error: message }
  }
}

const tokenParams = {
  card_number: '5155901222280001',
  customer_id: 'customer_21081826',
}
// tokenParams.append('card_number', '5155901222280001')
// tokenParams.append('customer_id', 'customer_21081826')

const generateToken = async (token) => {
  try {
    const instance = axios.create({
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json; charset=utf-8',
        api_mode: 'mocked',
        seller_id: '4e8e6ef1-a4b8-42b2-b443-f7168ecb7b3a',
      },
      baseURL,
    })
    const response = await instance.post('/v1/tokens/card', tokenParams)
    return response.data
  } catch (e) {
    const message = e.response.data

    return { error: message }
  }
}

const creditCardBuyInfo = creditCardMock

const creditCardPayment = async (token) => {
  try {
    const instance = axios.create({
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json; charset=utf-8',
        api_mode: 'mocked',
      },
      baseURL,
    })
    const response = await instance.post(
      '/v1/payments/credit',
      creditCardBuyInfo,
    )
    return response.data
  } catch (e) {
    const message = e.response.data

    return { error: message }
  }
}
export { authUser, generateToken, creditCardPayment }
