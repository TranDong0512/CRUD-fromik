import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import RenderForm from "./component/RenderForm";
import FormValidation from "./component/FormValidation";
import FormLogin from "./component/FormLogin";
import ValidateForm from "./component/ValidateForm";
import CRUDFormik from "./component/CRUDFormik";
import Layout from "./component/Layout";
import SearchParams from "./component/SearchParams";
import NoPage from "./component/NoPage";

function App() {
  return (
   <BrowserRouter>
       <Layout/>
       <Routes>
           <Route path="/" index element={<FormLogin/>}/>
           <Route path="crudFormik"  element={<CRUDFormik/>} />
           <Route path="formvalidation" element={<FormValidation/>}/>
           <Route path="renderform" element={<RenderForm/>}/>
           <Route path="validateform" element={<ValidateForm/>}/>
           <Route path="search" element={<SearchParams/>}/>
           <Route path="*" element={<NoPage/>}/>
       </Routes>
   </BrowserRouter>
  );
}

export default App;
