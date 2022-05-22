import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import LoginScreen from "./views/login/LoginScreen";
import {MainScreen} from "./views/main/Main";
import {BranchesScreen} from "./views/branches/Branches";
import {BranchScreen} from "./views/branch/Branch";
import {EditBranchScreen} from "./views/editbranch/EditBranchScreen";
import {QueueScreen} from "./views/queue/QueueScreen";
import {GeneralQueueScreen} from "./views/branch/QueueScreen";
import {EmployeesScreen} from "./views/employees/EmployeesScreen";
import {EditEmployeeScreen} from "./views/employee/EditEmployeeScreen";
import {NewEmployeeScreen} from "./views/employee/NewEmployeeScreen";

function App() {

    return (<div className="App">
        <main className="container">
            <BrowserRouter>
                <Routes>
                    <Route path="/" exact element={<LoginScreen/>}/>
                    <Route path="/login" element={<LoginScreen/>}/>
                    <Route path="/main" element={<MainScreen/>}/>
                    <Route path="/branches" element={<BranchesScreen/>}/>
                    <Route path="/branch/:id" element={<BranchScreen/>}/>
                    <Route path="/branch/edit/:id" element={<EditBranchScreen/>}/>
                    <Route path="/branch/new" element={<EditBranchScreen/>}/>
                    <Route path="/branch/:branchId/queues/:queueId" element={<QueueScreen/>}/>
                    <Route path="/queue/new" element={<GeneralQueueScreen/>}/>
                    <Route path="/employees" element={<EmployeesScreen/>}/>
                    <Route path="/employees/:id" element={<EditEmployeeScreen/>}/>
                    <Route path="/employees/new" element={<NewEmployeeScreen/>}/>
                </Routes>
            </BrowserRouter>
        </main>
    </div>);
}

export default App;
