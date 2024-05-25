import React from 'react'
import "./styleSearch.css";


export default function SearchHistoryItem({content}) {
  return (
    <li className='search-history-item'>
        <a>{content}</a>
    </li>
  )
}
