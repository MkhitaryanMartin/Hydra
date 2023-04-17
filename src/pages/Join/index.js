import React,{useState} from "react";
import {useForm} from "react-hook-form"
import { joinSchema } from "../../costant/validation";
import { yupResolver } from '@hookform/resolvers/yup';
import classes from "./style.module.css";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Modal from "../../components/Modal";

function Join(){
  const [open, setOpen]=useState(false)
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors,isValid },
      } = useForm({
        resolver: yupResolver(joinSchema),
        mode: "onBlur",
      });
      const onSubmit = (data) => {
        console.log(data)
        setOpen(true)
        reset()
      };
      return (
        <section className={classes.container}>
          <div className={classes.formContainer}>
              <div>
                <h2>JOIN HYDRA</h2>
                <hr/>
                <h3>Let’s Build Your VR Experience</h3>
              </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input
                placeholder="First Name"
                type="text"
                className={classes.input}
                containerClass={classes.inputDiv}
                name={register("firstName")}
                errorText={errors.firstName && errors.firstName.message}
              />
              <Input
                placeholder="Last Name"
                type="text"
                className={classes.input}
                containerClass={classes.inputDiv}
                name={register("lastName")}
                errorText={errors.lastName && errors.lastName.message}
              />
              <Input
                placeholder="Email"
                type="text"
                className={classes.input}
                containerClass={classes.inputDiv}
                name={register("email")}
                errorText={errors.email && errors.email.message}
              />
              <Input
                placeholder="Phone Number"
                type="text"
                className={classes.input}
                containerClass={classes.inputDiv}
                name={register("number")}
                errorText={errors.number && errors.number.message}
              />
              <Input
                placeholder="Subject"
                type="text"
                className={classes.subject}
                containerClass={classes.inputDiv}
              />
              <textarea 
                  className={classes.textarea}
                  placeholder="Tell Us Something..."
                >
              </textarea>
              <Button
                   mode="purple"
                   isValid={!isValid}
                >
                  SEND TO HYDRA
                </Button>
            </form>
          <Modal 
            open={open} 
            onClose={()=>setOpen(false)}>
            <h2 className={classes.modalH2}>HYDRA</h2>
            <p className={classes.modalP}>Congratulations, you have joined HYDRA</p>
          </Modal>
          </div>
        </section>
    )
}

export default Join