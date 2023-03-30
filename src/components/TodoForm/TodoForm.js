import React, { useState } from "react";
import AsideButton from "../ui/aside/AsideButton";
import AsideMenu from "../ui/aside/AsideMenu";
import Form from "./Form";
import GhostBtn from "../ui/buttons/GhostBtn";
import icon from "../../assets/img/icon.svg";



function TodoForm({
  handleInputChange,
  form,
  handleSubmittedForm,
  DarkTheme,
  themeColors,
  handleDeleteDoneTodos,
}) {

  const [OpenDrawer, setOpenDrawer] = useState(false);

  const handleOpenDrawer = () => {
    setOpenDrawer(!OpenDrawer);
  };

  const handleCloseDrawer = () => {
    setOpenDrawer(false);
  };


  return (
    <>
      <AsideButton
        isOpen={OpenDrawer}
        DarkTheme={DarkTheme}
        onClick={handleOpenDrawer}
      >
        <img
          src={icon}
          alt="easyDo icon"
          className="absolute top-1/2 -translate-y-1/2"
        />
      </AsideButton>
      <AsideMenu
        OpenDrawer={OpenDrawer}
        handleCloseDrawer={handleCloseDrawer}
        asideColorTheme={themeColors.aside}
      >
        <Form
          handleInputChange={handleInputChange}
          form={form}
          handleSubmittedForm={handleSubmittedForm}
          DarkTheme={DarkTheme}
          themeColors={themeColors}
          handleDeleteDoneTodos={handleDeleteDoneTodos}
          handleCloseDrawer={handleCloseDrawer}
        />

        <GhostBtn
          additionalClass={'absolute top-4 right-4'}
          onClick={handleCloseDrawer}
          DarkTheme={DarkTheme}
        >
          X
        </GhostBtn>
      </AsideMenu>

    </>
  );
}

export default TodoForm;
