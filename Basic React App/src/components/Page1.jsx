import React, {useEffect} from 'react';
import Text1 from "./Text1";
import '../css/Page1.css'

const Title = () => <h1 style = {{color:"red", textAlign:"center",fontSize:"3rem"}}>Create React App</h1>
const Description = () => <p style ={{textAlign:"center",fontSize:"1.5rem"}}>Knowledge Checklist</p>
const data = [
  {title:"Functional Components VS Class Components",status:"Checked"},
  {title:"React Hook (useState, useCallback, useEffect, useRef, useMemo)",status:"Checked"},
  {title:"Functional Component VS Javascript Function",status:"Unchecked"},
  {title:"Layout, Component Tree",status:"Checked"},
  {title:"Lifecycle Methods",status:"Checked"},
  {title:"In-browser Routing (React Router DOM)",status:"Checked"}
]
const Page1 = (props) => {
  useEffect(() => {
      props.setReloadCounts(props.reloadCounts+1);
      // eslint-disable-next-line
  }, [])
  return (
    <div>
      <Title/>
      <Description/>
      <ul className="item-list">
        {data.map((element, number) => {
          return <Text1 key = {number} title = {element.title} status = {element.status}/>
        })}
      </ul>
    </div>
  );
}

export default Page1