import axios, { AxiosError } from 'axios'
import pick from 'lodash/pick'

const client = axios.create({ baseURL: process.env.API_URL })

export async function getCustomer(id) {
  try {
    const { data } = await client.get(`/customers/${id}`)
    return pick(data, ['id', 'email', 'name'])
  } catch (error) {
    if (error instanceof AxiosError && error.response?.status === 404) return null
    throw error
  }
}
