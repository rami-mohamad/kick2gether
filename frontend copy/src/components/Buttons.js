import React from 'react';
import './Buttons.css';
import { Link } from 'react-router-dom';

export function Button(props){
    return (
        <Link to={props.to}>
            <button className={props.class}> {props.label} </button>
        </Link>
    )
}

// export function Button1(){
//     return (
//         <Link to='sign-in'>
//             <button className='btn1'> Sign In</button>
//         </Link>
//     )
// }

// export function Button2() {
//   return (
//     <Link to="sign-up">
//       <button className="btn2"> Sign Up</button>
//     </Link>
//   );
// }
