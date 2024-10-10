import { NextResponse, NextRequest } from 'next/server'
import Connect from "../../../../Connection/Connect"
import { User } from "../../../../Entity/User"

const getUsers = async() => {
  async() => {
    const con = Connect();
  const users = await AppDataSource.manager.find(User)
  }
  

}

export {getUsers};

export async function GET(request: Request) {
  const results = AppDataSource.initialize().then(
    
    async () => {
      const user = new User()
      user.firstName = "Jeff"
      user.lastName = "Miranda"
      user.age = 38

      await AppDataSource.manager.save(user)

      const users = await AppDataSource.manager.find(User)

      return {
        "status": 200,
        "message": "save successfully!",
        "data": users,
        "count": users.length,
        "pagination": {
          "total": 1,
          "items_per_page": 1,
          "current_page": 1,
          "total_pages": 1,
          "next_url": null,
        }
      } 
    
  })
  .catch(error => 
    {
      return { 
        "status": error.status,
        "message": error.message,
        "data": null,
        "count": 0,
        "pagination": {}
      } 
    }
  )

  // response with the JSON object

  return NextResponse.json(results)
}





