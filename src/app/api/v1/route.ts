// import { NextResponse, NextRequest } from 'next/server'

// const getzzz = (request: request) =>{
//   const results = {
//     message: 'This is version 1.0 of api',
//   }
//   return NextResponse.json(results)
// }

// export default getzzz;


export default function handler(req, res) {
	res.status(200).json({ name: "John Doe" });
}
