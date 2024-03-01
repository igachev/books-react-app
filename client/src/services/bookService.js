
import * as request from './requester.js'

const baseUrl = 'http://localhost:3030/data/books'

export async function getBooks() {
    const result = await request.get(baseUrl)
    return result
}

export async function getBook(bookId) {
    const result = await request.get(`${baseUrl}/${bookId}`)
    return result
}

export async function searchBooks(title) {
    
    const result = await request.get(`${baseUrl}?where=title LIKE "${title}"`)
    return result
}