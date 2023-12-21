import React from "react";
import Card from "./Card";
import { BiCalendarEvent, BiMessageAltDetail, BiReplyAll } from "react-icons/bi";
import Message from "./Message";

function Messages() {
  return (
    <div className="mt-5 w-full relative">
      {/* intro  */}
      <div className="flex flex-col md:flex-row md:justify-between items-center w-full gap-5">
        <Card
          icon={<BiMessageAltDetail size={50} />}
          color="bg-gradient-to-r from-red-500 to-[#0058ff]"
          title="Messages"
          nbr="25"
        />

      </div>

      {/* add event  */}
      <div className="w-full mt-12 rounded-md relative">
        <span className="w-[75%] h-[3px] absolute top-0 right-0 bg-primaryColor"></span>
        <span className="w-[4px] h-[100px] absolute top-0 right-0 bg-primaryColor"></span>
        <span className="w-[40px] h-[4px] absolute bottom-0 left-0 bg-primaryColor"></span>
        <span className="w-[4px] h-[30px] absolute bottom-0 left-0 bg-primaryColor"></span>
        <h2 className="bg font-semibold absolute left-2 -top-[1rem] bg-primaryColor text-white px-1 py-1">
          Messages
        </h2>
        <div className=" mt-3 py-7 px-3 relative">
        <div className='overlay hidden w-full md:w-full h-full absolute left-0 top-0 bg-transparent  z-[111111]'></div>

          <ul>
            <Message user="Abdellah Becherair" message="سلاسلام عليكم راني سجلت من قبل بصح كي نبقي ندخل  يقولي خطأ ارجوا منكم اخد رسالتي بعين الإعتبار وشكر" readed={false} />

            <Message user="Abdellah Becherair" message="hello world Iam hWQW KFJK SCJIEWHC CDIJCWHC CHEWSLALKJDAKHE DCUHUEWL;S IS;WOIE SOSW PBAOkajs sos aadadhwhn slslkjda left dsksjshw sdhshdsjkshdkjshjss shdsuhsa asdhshdsa ehefewkf;kelejefewfewhewn" readed={false} />

            <Message user="Abdellah Becherair" message="سلاسلام عليكم راني سجلت من قبل بصح كي نبقي ندخل يقولي خطأ ارجوا منكم اخد رسالتي بعين الإعتبار وشكر" readed={true} />

            <Message user="Abdellah Becherair" message="سلاسلام عليكم راني سجلت من قبل بصح كي نبقي ندخل يقولي خطأ ارجوا منكم اخد رسالتي بعين الإعتبار وشكر" readed={false} />

            <Message user="Abdellah Becherair" message="سلاسلام عليكم راني سجلت من قبل بصح كي نبقي ندخل يقولي خطأ ارجوا منكم اخد رسالتي بعين الإعتبار وشكر" readed={true} />

            <Message user="Abdellah Becherair" message="سلاسلام عليكم راني سجلت من قبل بصح كي نبقي ندخل يقولي خطأ ارجوا منكم اخد رسالتي بعين الإعتبار وشكر" readed={true} />
            
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Messages;
