import React from 'react';
import '../css/Page3.css'

const Page3 = (props) => {
  return (
    <div>
      <div>
        <h1>Testing props</h1>
        <h2> This line display the times that the first page used {props.reloadCounts} times </h2>
        <h2> This line display the counter value in the second page {props.count} times</h2>
      </div>
    </div>
  )
}

export default Page3