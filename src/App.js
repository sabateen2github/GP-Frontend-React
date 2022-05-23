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
import {EditBusinessScreen} from "./views/business/EditBusinessScreen";
import {ProtectedManagement} from "./views/auth/redirect";


function App() {

    return (<div className="App">
        <main className="container">
            <BrowserRouter>
                <Routes>
                    <Route path="/" exact element={<LoginScreen/>}/>
                    <Route path="/login" element={<LoginScreen/>}/>
                    <Route path="/main" element={<ProtectedManagement><MainScreen/></ProtectedManagement>}/>
                    <Route path="/branches" element={<ProtectedManagement><BranchesScreen/></ProtectedManagement>}/>
                    <Route path="/branch/:id" element={<ProtectedManagement><BranchScreen/></ProtectedManagement>}/>
                    <Route path="/branch/edit/:id"
                           element={<ProtectedManagement><EditBranchScreen/></ProtectedManagement>}/>
                    <Route path="/branch/new" element={<ProtectedManagement><EditBranchScreen/></ProtectedManagement>}/>
                    <Route path="/branch/:branchId/queues/:queueId"
                           element={<ProtectedManagement><QueueScreen/></ProtectedManagement>}/>
                    <Route path="/queue/new"
                           element={<ProtectedManagement><GeneralQueueScreen/></ProtectedManagement>}/>
                    <Route path="/employees" element={<ProtectedManagement><EmployeesScreen/></ProtectedManagement>}/>
                    <Route path="/employees/:id"
                           element={<ProtectedManagement><EditEmployeeScreen/></ProtectedManagement>}/>
                    <Route path="/employees/new"
                           element={<ProtectedManagement><NewEmployeeScreen/></ProtectedManagement>}/>
                    <Route path="/edit" element={<ProtectedManagement><EditBusinessScreen/></ProtectedManagement>}/>
                </Routes>
            </BrowserRouter>
        </main>
    </div>);
}

export default App;
