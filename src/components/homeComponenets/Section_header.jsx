export default function Section_header({ text }) {
    return (
        <h1
            className="
            text-[#3f3f3f]
             font-bold
             text-3xl
             m-auto
             w-fit
             p-2
             relative"
             
        >
            <span className="bg-primaryColor text-white rounded-tl-md rounded-br-md px-1">{text}</span>
            <span className='w-[40px] h-[1.7px] absolute top-0 right-0 bg-primaryColor'></span>
        <span className='w-[2.5px] h-[30px] absolute top-0 right-0 bg-primaryColor'></span>

        <span className='w-[40px] h-[3px] absolute bottom-0 left-0 bg-primaryColor'></span>
        <span className='w-[3px] h-[30px] absolute bottom-0 left-0 bg-primaryColor'></span>


        </h1>
    );
}
