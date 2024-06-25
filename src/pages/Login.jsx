import React, { useState } from "react";
import { Button, Form, Input } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { NavBarNew } from "../components";
import { Footer } from "../sections";
import { useNavigate } from "react-router-dom"; 
const LoginPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });

  const onFinish = async () => {
    try {
      
    const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/customer/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });
      navigate("/"); 
      if (response.ok) {
        const sessionData = await response.json();
        localStorage.setItem('sessionData', sessionData.sessionId); // Use the key "sessionId" from the JSON object
        console.log('User registered and session data stored:', sessionData);
    } else {
        const errorText = await response.text();
        console.error(`Failed to register user: HTTP status ${response.status}, response text: ${errorText}`);
    }
} catch (error) {
    console.error('An error occurred:', error);
}
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (

    <main className="">
       <section className="ml-10 ">
          <NavBarNew />    
        </section>
      <section className="mb-10 ">
        <div className="min-h-full flex flex-col justify-center py-8 sm:px-6 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
           
          <h2 className="mt-6 text-center text-3xl font-bold text-gray-500 letter-spaced-5px" >
            CUSTOMER  LOGIN
          </h2>

          <hr />

          </div>

          <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-white py-4 px-4  sm:rounded-lg sm:px-10">
              <Form
                name="normal_login"
                className="space-y-6"
                initialValues={{ remember: true }}
                onFinish={onFinish}
              >
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email address
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="username"
                      type="email"
                      autoComplete="email"
                      required
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <div className="mt-1">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      className="appearance-none h-15 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-600 hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-iborder-gray-500"
                  >
                    Sign in
                  </button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </section>
      <section className=" bg-black padding-x padding-t pb-8">
        <Footer />
      </section>
      </main>

  );
};

export default LoginPage;
