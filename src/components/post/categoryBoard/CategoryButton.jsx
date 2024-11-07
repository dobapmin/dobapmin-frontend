// import React, { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// // import './style.css';

// export default function CategoryButton({ text, style }) {
//   const [isToggled, setIsToggled] = useState(false);

//   const handleClick = () => {
//     setIsToggled((prevState) => !prevState);
//   };

//   return (
//     <div>
//       <Button
//         style={
//           isToggled
//             ? {
//                 backgroundColor: '#002DA7',
//                 color: '#FFFFFF',
//                 border: '1px solid #0B04D9',
//                 fontFamily: 'Jalnan',
//                 fontSize: '20px',
//                 borderRadius: '10px',
//                 // width: '137px',
//                 // height: '44px',
//                 // display: 'flex',
//                 // alignItems: 'center',
//                 // justifyContent: 'center',
//                 // textAlign: 'center',
//                 boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.2)',
//                 ...style,
//               }
//             : {
//                 backgroundColor: '#FFFFFF',
//                 color: '#000000',
//                 border: '1px solid #022DA6',
//                 fontFamily: 'Jalnan',
//                 fontSize: '20px',
//                 borderRadius: '10px',
//                 // width: '137px',
//                 // height: '44px',
//                 // display: 'flex',
//                 // alignItems: 'center',
//                 // justifyContent: 'center',
//                 // textAlign: 'center',
//                 boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.2)',
//                 ...style,
//               }
//         }
//         onClick={handleClick}
//       >
//         <div
//           style={{
//             marginTop: '3px',
//           }}
//         >
//           {text}
//         </div>
//       </Button>
//     </div>
//   );
// }

// CategoryButton.js
import React from 'react';
import Button from 'react-bootstrap/Button';

export default function CategoryButton({ text, style, isSelected, onClick }) {
  return (
    <div>
      <Button
        style={
          isSelected
            ? {
                backgroundColor: '#002DA7',
                color: '#FFFFFF',
                border: '1px solid #0B04D9',
                fontFamily: 'Jalnan',
                fontSize: '20px',
                borderRadius: '10px',
                boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.2)',
                ...style,
              }
            : {
                backgroundColor: '#FFFFFF',
                color: '#000000',
                border: '1px solid #022DA6',
                fontFamily: 'Jalnan',
                fontSize: '20px',
                borderRadius: '10px',
                boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.2)',
                ...style,
              }
        }
        onClick={onClick}
      >
        <div style={{ marginTop: '3px' }}>{text}</div>
      </Button>
    </div>
  );
}
