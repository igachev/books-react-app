import { useEffect, useState } from "react";

export function useLocalStorage(key) {
    const [value,setValue] = useState(() => {
        const booksRead = localStorage.getItem(key);
        if(booksRead && booksRead !== 'undefined') {
          return JSON.parse(booksRead)
        }
        return []
      });

      useEffect(() => {
        localStorage.setItem(key,JSON.stringify(value))
      },[value])

      return [value,setValue]
}