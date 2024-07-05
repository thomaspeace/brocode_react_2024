// conditional rendering = allows us to control what gets rendered based on certain conditons (show, hide or change)

import UserGreeting from "./UserGreeting"

function App() {


  return (
    <>
      <UserGreeting isLoggedIn={true} username="Tom"/>
    </>
  )
}

export default App
