
import * as request from './requester.js'

const baseUrl = 'http://localhost:3030/data/books'

export async function getBooks(pageNumber=0) {
    let offset = pageNumber * 4;
    const result = await request.get(`${baseUrl}?offset=${offset}&pageSize=4`)
    return result
}

export async function getBook(bookId) {
    const result = await request.get(`${baseUrl}/${bookId}`)
    return result
}

export async function searchBooks(title,controller) {
        const response = await fetch(`${baseUrl}?where=title LIKE "${title}"`,{signal: controller.signal})
        const result = await response.json()
        return result
}