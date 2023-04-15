var express = require('express');
var router = express.Router();

const users =[
  { name: "edikan", age: 26, sex: "female" }, { name: "Balablu", age: 79, sex: "male" }
]

/**GET single User */
router.get('/:name', (request, response) => {
  const name = request.params.name;
    const user = users.find(user => user.name == name)
    if (!user) {
        return response.status(400).json(
            {
                status: "400",
                message: "user not found, pls enter a valid username"
            }
        )
        
    }
    return response.status(200).json({
        user
    })
})

/* GET users listing. */

router.get('/', (request, response) => {
  const {name, age, sex} = request.query;
  let data = users;
  if(name) {
    data = data.filter(user => user.name.toLowerCase() == name.toLowerCase());
  }
  if(age) {
    data = data.filter(user => user.age == age);
  }
  if(sex) {
    data = data.filter(user => user.sex == sex);
  }
  return response.json(data);

})

module.exports = router;
