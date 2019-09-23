1. npm install
2. npm start
3. Queries:
    To retrieve all Students
                query{
        students{
            id,
            firstName,
            lastName
        }
        }
    To retrieve specific student by id
                query{
            student(id:"S1002"){
                firstName,
                lastName
            }
            }

    Retrieve StudentById and his/her College:
    query{
  studentById(id:"S1001"){
    firstName
    fullName
    college {
      id
      name
    }
  }
}

query{
  students{
    id
    firstName
    lastName
    fullName
    college {
      id
      name
      location
      rating
    }
  }
}

http://localhost:9000/graphql?query={students{fullName,firstName,college{id,name}}}

http://localhost:9000/graphql?query={studentById(id:"Sy9qApBwS"){fullName,firstName,college{id,name}}}
4. 