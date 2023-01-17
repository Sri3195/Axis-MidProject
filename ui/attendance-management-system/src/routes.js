/*!

=========================================================
* Argon Dashboard React - v1.2.2
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Index from "views/Index.js";
import Profile from "views/examples/Profile.js";
import Register from "views/examples/Register.js";
import Login from "views/examples/Login.js";
import Teachers from "views/examples/Teachers";
import CalculateAttendance from "views/examples/CalculateAttendance.js"
import MarkAttendance from "MarkAttendance";
import Students from "views/examples/Students.js";
import ViewAttendance from "views/examples/ViewAttendance";

var routes = [
  {
    path: "/index",
    name: "Home",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/admin"
  },
  {
    path: "/teachers",
    name: "Teachers",
    icon: "ni ni-single-02 text-blue",
    component: Teachers,
    layout: "/admin"
  },
  {
    path: "/students",
    name: "Students",
    icon: "ni ni-hat-3 text-orange",
    component: Students,
    layout: "/admin"
  },
  {
    path: "/mark-attendance",
    name: "Mark Attendance",
    icon: "ni ni-ruler-pencil text-yellow",
    component: MarkAttendance,
    layout: "/admin"
  },
  {
    path: "/view-attendance",
    name: "View Attendance",
    icon: "ni ni-bullet-list-67 text-red",
    component: ViewAttendance,
    layout: "/admin"
  },
  {
    path:"/calculate-Attendance",
    name:"Calculate Attendance",
    icon:"ni ni-bullet-list-67 text-green",
    component:CalculateAttendance,
    layout:"/admin"
  },
  {
    path: "/login",
    name: "Logout",
    icon: "ni ni-bullet-list-67 text-red",
    component: Login,
    layout: "/auth"
  },
  {
    path:"/register",
    name:"",
    icon:"",
    component:Register,
    layout:"/auth"

  }
  
];
export default routes;
