
import * as request from './requester.js'

const baseUrl = 'http://localhost:3030/data/books'

export async function getBooks() {
    const result = await request.get(baseUrl)
    return result
}