import { useAppStore } from "@/store";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import ChatContainer from "./components/ChatContainer";
import EmptyChatContainer from "./components/EmptyChatContainer";
import ContactsContainer from "./components/ContactsContainer";

const Chat = () => {
  const { userInfo } = useAppStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (!userInfo.profileSetup) {
      toast("Please setup profile to continue");
      navigate("/profile");
    }
  }, [userInfo, navigate]);
  return (
    <div className="flex h-[100vh] text-white overflow-hidden">
      <ContactsContainer />
      <EmptyChatContainer />
      <ChatContainer />
    </div>
  );
};

export default Chat;
