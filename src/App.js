import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import LoginScreen from "./views/login/LoginScreen";
import {MainScreen} from "./views/management/main/Main";
import {BranchesScreen} from "./views/management/branches/Branches";
import {BranchScreen} from "./views/management/branch/Branch";
import {EditBranchScreen} from "./views/management/editbranch/EditBranchScreen";
import {QueueScreen} from "./views/management/queue/QueueScreen";
import {GeneralQueueScreen} from "./views/management/branch/QueueScreen";
import {EmployeesScreen} from "./views/management/employees/EmployeesScreen";
import {EditEmployeeScreen} from "./views/management/employee/EditEmployeeScreen";
import {NewEmployeeScreen} from "./views/management/employee/NewEmployeeScreen";
import {EditBusinessScreen} from "./views/management/business/EditBusinessScreen";
import {ProtectedAdmin, ProtectedHelpDesk, ProtectedManagement} from "./views/auth/redirect";
import {AdminScreen} from "./views/admin/main/MainScreen";
import {BusinessScreen} from "./views/admin/business/BusinessScreen";
import {NewBusinessScreen} from "./views/admin/business/NewBusinessScreen";
import {HelpDeskMainScreen} from "./views/helpdesk/MainScreen";
import {HelpDeskQueueScreen} from "./views/helpdesk/QueueScreen";


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
                    <Route path='/admin' element={<ProtectedAdmin><AdminScreen/></ProtectedAdmin>}/>
                    <Route path='/admin/business/:id' element={<ProtectedAdmin><BusinessScreen/></ProtectedAdmin>}/>
                    <Route path='/admin/business/new' element={<ProtectedAdmin><NewBusinessScreen/></ProtectedAdmin>}/>
                    <Route path='/helpdesk/main'
                           element={<ProtectedHelpDesk><HelpDeskMainScreen/></ProtectedHelpDesk>}/>
                    <Route path='/helpdesk/queue/:id'
                           element={<ProtectedHelpDesk><HelpDeskQueueScreen/></ProtectedHelpDesk>}/>

                </Routes>
            </BrowserRouter>
        </main>
    </div>);
}

export default App;
