// import React, { useContext } from "react"
// import range from "../lib/range"
// import { GridContext } from "../context/grid"
// import { Grid } from "../types/grid"
// import { FaEraser } from "react-icons/fa"

// export default function ValButtons() {
//   const { setCurrentButton, currentButton } = useContext(GridContext) as Grid
//   return (
//     <div className="max-w-[800px] mx-auto">
//       <div className="grid grid-cols-9 container mx-auto mt-10">
//         <>
//           {range(1, 9).map((val: number) => (
//             <button
//               className={`border bg-blue-700 text-white p-6 text-3xl ${
//                 currentButton === val ? "opacity-100" : "opacity-75"
//               }`}
//               key={val}
//               onClick={() => setCurrentButton(val)}
//             >
//               {val}
//             </button>
//           ))}
//           <button
//             className={`border bg-blue-700 text-white p-6 text-3xl ${
//               currentButton === false ? "opacity-100" : "opacity-75"
//             }`}
//             key={""}
//             onClick={() => setCurrentButton(false)}
//           >
//             <FaEraser />
//           </button>
//         </>
//       </div>
//     </div>
//   )
// }

import React from "react"

export default function ValButtons() {
  return <div>ValButtons</div>
}
