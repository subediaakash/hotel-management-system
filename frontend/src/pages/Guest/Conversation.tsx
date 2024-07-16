import ConversationNavbar from "../../components/Conversations/ConversationNavbar";
import GuestNavbar from "../../components/GuestComponents/GuestNavbar";

function Conversation() {
  return (
    <div>
      <div className="flex justify-center items-center flex-col font-Roboto">
        <GuestNavbar />
        <ConversationNavbar />
      </div>
    </div>
  );
}

export default Conversation;
