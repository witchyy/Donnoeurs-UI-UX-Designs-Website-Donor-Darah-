import React from "react";
import img from "../assets/img/kucing.jpg";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  return (
    <div className="p-10">
      <h1 className="text-3xl font-semibold">PROFILE SETTING</h1>
      <div className="flex justify-center item-center">
        <img className="rounded-full w-72 h-72" src={img} alt="" />
      </div>
      <div className="px-20 mt-10">
        <form action="">
          <div class="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label
                for="first_name"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                First name
              </label>
              <input
                type="text"
                id="first_name"
                class="bg-[#D9D9D9] border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5"
                placeholder="John"
                required
              />
            </div>
            <div>
              <label
                for="last_name"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Last name
              </label>
              <input
                type="text"
                id="last_name"
                class="bg-[#D9D9D9] border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5"
                placeholder="Doe"
                required
              />
            </div>
            <div>
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                class="bg-[#D9D9D9] border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5"
                placeholder="Flowbite"
                required
              />
            </div>
            <div>
              <label
                for="password"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                class="bg-[#D9D9D9] border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5"
                placeholder="...."
                required
              />
            </div>
            <div>
              <label
                for="phone"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="number"
                class="bg-[#D9D9D9] border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5"
                placeholder="123-45-678"
                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                required
              />
            </div>
            <div>
              <label
                for="address"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Address
              </label>
              <input
                type="text"
                id="address"
                class="bg-[#D9D9D9] border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5"
                placeholder=""
                required
              />
            </div>
            <div>
              <label
                for="blood"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Blood Type
              </label>
              <select
                type="text"
                id="blood"
                class="bg-[#D9D9D9] border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5"
                placeholder=""
                required
              >
                <option selected>Choose a blood</option>
                <option value="US">A</option>
                <option value="CA">B</option>
                <option value="FR">AB</option>
                <option value="DE">O</option>
              </select>
            </div>
            <div>
              <label
                for="birth"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Date of Birth
              </label>
              <input
                type="date"
                id="birth"
                class="bg-[#D9D9D9] border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5"
                placeholder=""
                required
              />
            </div>
            <div>
              <label
                for="gender"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Gender
              </label>
              <div className="flex flex-row">
                <div class="flex items-center">
                  <input
                    id="default-radio-1"
                    type="radio"
                    value=""
                    name="default-radio"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                  />
                  <label
                    for="default-radio-1"
                    class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Male
                  </label>
                </div>
                <div class="flex items-center pl-5">
                  <input
                    checked
                    id="default-radio-2"
                    type="radio"
                    value=""
                    name="default-radio"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                  />
                  <label
                    for="default-radio-2"
                    class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Female
                  </label>
                </div>
              </div>
            </div>
          </div>
        </form>
        <button
          onClick={() => navigate("/home")}
          type="submit"
          class="text-[#EDDBC0] bg-[#B73E3E] hover:bg-[#A03A3A] font-medium rounded-lg text-lg w-64 px-5 py-2.5 text-center"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default Profile;
