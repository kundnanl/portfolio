"use client";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/16/solid";
import { Loader, Loader2, MapPinIcon } from "lucide-react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useToast } from "./ui/use-toast";
import { useState } from "react";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const ContactMe = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { register, handleSubmit, reset } = useForm<Inputs>();
  const { toast } = useToast();

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    setIsSubmitting(true);
    fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        toast({
          variant: "default",
          title: "Email Sent!",
          description: "Your message has been sent successfully.",
        });
        reset();
      })
      .catch((error) => {
        console.error("There was an error!", error);
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: "There was a problem with your request.",
        });
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row px-10 justify-center mx-auto items-center overflow-hidden">
      <div className="flex flex-col px-4 space-y-5 lg:space-y-10">
        <h4 className="text-2xl lg:text-4xl font-semibold">
          The Kind of Employee You Want to{" "}
          <span className="text-[#F7AB0A]">Hire. </span>:{")"}
        </h4>
        <div className="space-y-5">
          <div
            className="flex items-center space-x-2 
          lg:space-x-5 justify-center"
          >
            <PhoneIcon className="h-7 w-7 animate-pulse text-[#F7AB0A]" />
            <p className="text-xl lg:text-2xl">+1 (647) 897 3510</p>
          </div>
          <div className="flex items-center lg:space-x-5 space-x-2 justify-center">
            <EnvelopeIcon className="h-7 w-7 animate-pulse text-[#F7AB0A]" />
            <p className="text-xl lg:text-2xl">kundnanl@sheridancollege.ca</p>
          </div>
          <div
            className="flex items-center space-x-2 
          lg:space-x-5 justify-center"
          >
            <MapPinIcon className="h-7 w-7 animate-pulse text-[#F7AB0A]" />
            <p className="text-xl lg:text-2xl">Brampton, ON</p>
          </div>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-full mx-auto"
        >
          <div className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-2">
            {" "}
            <input
              {...register("name")}
              className="contactInput"
              type="text"
              placeholder="Name"
            />
            <input
              {...register("email")}
              className="contactInput"
              type="email"
              placeholder="Email"
            />
          </div>
          <input
            {...register("subject")}
            className="contactInput"
            type="text"
            placeholder="Subject"
          />
          <textarea
            {...register("message")}
            className="contactInput"
            placeholder="Message"
          ></textarea>
          <button
            type="submit"
            className="bg-[#F7AB0A] py-3 px-10 rounded-md text-black font-bold text-lg"
          >
            Submit
          </button>
          {isSubmitting && (
              <div className="flex p-5 rounded-md justify-center space-x-2 items-center">
                <Loader2 className="h-6 w-6 animate-spin" />
                <p className="text-lg">Submitting...</p>
                </div>
                )}
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
