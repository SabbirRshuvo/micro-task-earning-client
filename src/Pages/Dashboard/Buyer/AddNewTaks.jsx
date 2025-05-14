/* eslint-disable no-unused-vars */
import React, { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import axios from "axios";
import Swal from "sweetalert2";
import { AuthContext } from "../../../Provider/AuthProvider";
import useCoins from "../../../Hooks/useCoins";

const AddNewTaks = () => {
  const { register, handleSubmit, reset } = useForm();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const { userCoins, isLoading, refetch } = useCoins();

  const onSubmit = async (data) => {
    const imageFile = data.task_image[0];
    const formData = new FormData();
    formData.append("image", imageFile);

    try {
      const imageRes = await axios.post(
        `https://api.imgbb.com/1/upload?key=${
          import.meta.env.VITE_IMGBB_API_KEY
        }`,
        formData
      );

      if (imageRes.data.success) {
        const imageURL = imageRes.data.data.url;
        const requiredWorkers = parseInt(data.required_workers);
        const payableAmount = parseInt(data.payable_amount);
        const totalPayable = requiredWorkers * payableAmount;

        const userRes = await axios.get(
          `${import.meta.env.VITE_API_URL}/users?email=${user.email}`
        );
        const userCoins = userRes.data.coins;

        if (totalPayable > userCoins) {
          Swal.fire(
            "Not enough coins!",
            "Please purchase more coins.",
            "error"
          );
          return navigate("/dashboard/purchase-coin");
        }

        const task = {
          buyer_name: data.buyer_name,
          task_title: data.task_title,
          task_detail: data.task_detail,
          required_workers: requiredWorkers,
          payable_amount: payableAmount,
          completion_date: data.completion_date,
          submission_info: data.submission_info,
          task_image_url: imageURL,
          buyer_email: user.email,
          total_payable_amount: totalPayable,
          status: "pending",
          createdAt: new Date(),
        };

        const taskRes = await axios.post(
          `${import.meta.env.VITE_API_URL}/tasks`,
          task
        );

        if (taskRes.data.insertedId) {
          await axios.patch(
            `${import.meta.env.VITE_API_URL}/users/reduce-coins`,
            {
              email: user.email,
              coins: totalPayable,
            }
          );

          refetch();

          Swal.fire("Success!", "Task added successfully.", "success");

          reset();
        }
      }
    } catch (err) {
      console.error(err);
      Swal.fire("Error", "Something went wrong!", "error");
    }
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white shadow rounded-xl">
      <h2 className="text-2xl font-bold mb-6 text-center">Add New Task</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <input
          className="input input-bordered w-full focus:outline-none"
          placeholder="Buyer Name"
          {...register("buyer_name", { required: true })}
        />
        <input
          className="input input-bordered w-full focus:outline-none"
          placeholder="Task Title"
          {...register("task_title", { required: true })}
        />
        <textarea
          className="textarea textarea-bordered w-full focus:outline-none"
          placeholder="Task Detail"
          {...register("task_detail", { required: true })}
        />
        <div className="grid grid-cols-2 gap-4">
          <input
            type="number"
            className="input input-bordered w-full focus:outline-none"
            placeholder="Required Workers"
            {...register("required_workers", { required: true })}
          />
          <input
            type="number"
            className="input input-bordered w-full focus:outline-none"
            placeholder="Payable Amount per Worker"
            {...register("payable_amount", { required: true })}
          />
        </div>
        <input
          type="date"
          className="input input-bordered w-full focus:outline-none"
          {...register("completion_date", { required: true })}
        />
        <input
          className="input input-bordered w-full focus:outline-none"
          placeholder="Submission Info (e.g., screenshot, link, etc.)"
          {...register("submission_info", { required: true })}
        />
        <input
          type="file"
          className="file-input file-input-bordered w-full  focus:outline-none"
          accept="image/*"
          {...register("task_image", { required: true })}
        />
        <button className="btn btn-secondary w-full mt-4" type="submit">
          Add Task
        </button>
      </form>
    </div>
  );
};

export default AddNewTaks;
