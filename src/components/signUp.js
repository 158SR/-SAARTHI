import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="form-cont">
      <div class="logo-wrap">
        <h1 class="logo">Saarthi</h1>
      </div>
      <h1 class="main-head">SignUp Page</h1>
      <hr />
      <form>
        <div class="form-group">
          <label for="name">Name:</label>
          <input type="text" id="name" name="name" placeholder="Kabir Roy"required />
        </div>

        <div class="form-group">
          <label for="email">Email Id:</label>
          <input type="email" id="email" name="email" placeholder="kabir@gmail.com"required />
        </div>

        <div class="form-group">
          <label for="company">Age</label>
          <input type="number" id="age" name="age" placeholder="Enter Your Age"required />
        </div>

        <div class="form-group">
          <label for="gender">Gender:</label>
          <select id="gender" name="gender" required>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div class="form-group">
          <label for="password">Creat Password:</label>
          <input type="password" id="password" name="password" required placeholder="123@Abc"/>
        </div>
        <div class="form-group">
          <p>Already a memeber? <strong><Link to='/'>Login</Link></strong></p>
        </div>

        <Link to="/" type="submit" class="submit-btn">
          Submit
        </Link>
      </form>
    </div>
  );
};

export default SignUp;