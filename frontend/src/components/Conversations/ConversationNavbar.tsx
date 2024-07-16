import { FcAssistant } from "react-icons/fc";
import { MdOutlineRoomService } from "react-icons/md";
function ConversationNavbar() {
  return (
    <div className="w-[55vw] flex justify-end">
      <div className="flex gap-3">
        <p className="flex gap-5 items-center text-xl border rounded-md  p-2 cursor-pointer">
          <span>
            <FcAssistant />
          </span>{" "}
          Customer Care
        </p>
        <p className="flex gap-5 items-center text-xl border rounded-md  p-2 cursor-pointer">
          <span>
            <MdOutlineRoomService />
          </span>{" "}
          Room Service
        </p>
      </div>
    </div>
  );
}

export default ConversationNavbar;
