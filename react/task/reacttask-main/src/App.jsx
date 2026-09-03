import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Avatar, Imagepicker } from './components/task2'

// all task pages here   
import { Avatar1, Profile1 } from "./components/profile"
import profile1 from "./assets/images/profile1.png"
import profile2 from "./assets/images/suzuka.jpg"
import Counter from "./components/counter"
import TodoList from './components/todolist'
import Counterbyreduce from './components/counterbyreducre'



//pages here 
import { MainLayout } from "./assets/pages/routes";
import { About } from "./assets/pages/about"
import { Userlist } from "./assets/pages/userlist" 
import Dashboard from './assets/pages/dashboard'
import{ Rbbootstrap }from "./assets/pages/rbbootstrap";
import { Setting} from "./assets/pages/setting";
import { Help } from "./assets/pages/help";



const databaseimage = [profile1, profile2];
const databaseprofile = [
  { name: "nobita", email: "nobitaabc@gmail.com", phone: "880-720-555-1234" },
  { name: "suzuka", email: "abcsuzuka@gmail.com", phone: "880-720-555-5678" }
];


function App() {
  return (
    <div className="">

      {/* <h1>Task here static :- 1</h1>
        <Profile1 />
      </div>
      <hr />
      <div>
        <h1>Task 2 is here:</h1>

        <Avatar index={0} databaseimage={databaseimage} databaseprofile={databaseprofile} />
        <Avatar index={1} databaseimage={databaseimage} databaseprofile={databaseprofile} />
        <Avatar/>
        <hr />

        <Imagepicker index={0} databaseimage={databaseimage} />
      </div>
      <div>
        <h1>Task 3 :-</h1>
        <Counter/>
        <hr/>
      </div>
      <data >
        <h1>Task 3 :- by the userducer</h1>
        <Counterbyreduce/>
      </data>
      <div>
        <h1>Task 4 :- To-Do List</h1>
        <TodoList />
      </div> */}
      <BrowserRouter>
        <Routes>
          {/* Everything inside MainLayout will show the sidebar */}
          <Route path="/" element={<MainLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />  
            <Route path="/about" element={<About />} />
            <Route path="/userlist" element={<Userlist />} />
            <Route path="/bootstrap" element={<Rbbootstrap/>}/>
            <Route path="/components/todolist" element={<TodoList/>}/>
            <Route path="/setting" element={<Setting/>}/>
            <Route path="/help" element={<Help/>}/>
            <Route path="/components/profile" element={<Profile1/>}/>
            <Route path="/components/task2" element={ <Avatar index={0} databaseimage={databaseimage} databaseprofile={databaseprofile} />}/>
            <Route path="/components/profile" element={<Profile1/>}/>
            <Route path="/components/task3" element={<Counter/>}/>
            <Route path="/components/counterbyreducre" element={<Counterbyreduce/>}/>

          </Route>
        </Routes>
    </BrowserRouter>
    
      
    </div>

        );
}
        export default App;