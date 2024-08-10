import { Box } from "@chakra-ui/layout";
import { useEffect, useState } from "react";
import Chatbox from "../components/Chatbox";
import MyChats from "../components/MyChats";
import SideDrawer from "../components/miscellaneous/SideDrawer";
import { ChatState } from "../Context/ChatProvider";
import { useHistory } from "react-router-dom/";

const Chatpage = () => {
  const history = useHistory();
  const [fetchAgain, setFetchAgain] = useState(false);
  const { user } = ChatState();
  console.log("🚀 ~ Chatpage ~ user:", user);

  useEffect(() => {
    if (!user) {
      history.push("/"); // Redirect to home page if user is null
    }
  }, [user, history]);

  return (
    <div style={{ width: "100%" }}>
      {user && <SideDrawer />}
      <Box d="flex" justifyContent="space-between" w="100%" h="91.5vh" p="10px">
        {user && <MyChats fetchAgain={fetchAgain} />}
        {user && (
          <Chatbox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
        )}
      </Box>
    </div>
  );
};

export default Chatpage;
