export default function Section_header({ text }) {
    return (
        <h1
            className="
            bg-secondaryColor
            text-[#3f3f3f]
             font-bold
             text-2xl
             w-[80%]
             m-auto
             p-2
             rounded-md
            text-center"
        >
            {text}
        </h1>
    );
}
