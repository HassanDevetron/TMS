# Task Management System

# Pre-reqs
Create the .env file in the root directory of the project and paste the following content:
JWT_SECRET=dont_mess_with_the_code
MONGO_URI=mongodb://localhost/taskManagementdb
PASSWORD_SALT_ROUNDS=10

# start the project
npm install
npm run dev

# available GET endpoints
http://localhost:3000/card/list

# available POST endpoints
http://localhost:3000/card/create               
{"title":"refactor","description":"refactor the code","storyPoints": 3}

http://localhost:3000/user/signup
{"name":"hassan test","email":"hassan.case009@gmail.com","password":"hassandevelop123"}               

http://localhost:3000/user/login                
{"email":"hassan.case009@gmail.com","password":"hassandevelop123"}

http://localhost:3000/user/forgot-password      
{"email":"hassan.case009@gmail.com","password":"hassandevelop123changed"}

