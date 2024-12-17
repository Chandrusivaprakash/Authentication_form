
import React from 'react';
import { useSelector } from 'react-redux';
const Dashboard: React.FC = () => {
    const formData = useSelector((state: any) => state.form);
  
    return (
      <>
  <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
    <div className="p-8 rounded-lg shadow-md w-full max-w-md">
      <h2 className="text-2xl font-bold text-center mb-6">Dashboard</h2>
      <p><strong>Email:</strong> {formData.email}</p>
      <p><strong>Password:</strong> {formData.password}</p>
    </div>
    <div className="mt-8 flex flex-col items-center">
    <h2 className="text-xl font-bold">Hi Im Chandru</h2>
    
    <p><strong>Role:</strong> Software Engineer Extraordinaire</p>
    <p><strong>Qualification:</strong> MCA - November 2021 - November 2023 , BCA - 2021 </p>
    <p><strong>Skills:</strong> HTML5, CSS3 , JavaScript ES6/ES7 ,React.js , Node.js, Express.js, PostgreSQL</p>
    <p><strong>Project:</strong> ANCI MART , Orform</p>
    <p><strong>Hobbies:</strong> Cycling, coding, and occasionally ruling the web dev universe.</p>
    <p><strong>Fun Fact:</strong> If you're here, you're already in *my* app!</p>
  </div>
  </div>

  
</>

   
    );
  };

  export default Dashboard;