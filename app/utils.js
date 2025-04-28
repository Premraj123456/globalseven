

export const blue_color = "#2A53C1"
export const font = "font-[ProximaNova]"


export const Form = (
    <form action="https://formsubmit.co/agapeloveapps@gmail.com" method="POST" className="flex flex-col gap-1 mb-5">

    <label className="text-sm">Name</label>
    <input  required className="bg-gray-100 rounded-lg h-10 mb-3 p-4" type="text" name="name"/>

    <label className="text-sm">Email</label>
    <input   required className="bg-gray-100 rounded-lg h-10 mb-3 p-4" type="email" name="email" />

    <label className="text-sm">Message</label>
    <textarea  required className="bg-gray-100 rounded-lg h-10 mb-5 p-4" type="text" name="message" />

    <button type="submit"  className={`bg-[${blue_color}] flex justify-center gap-2 text-white font-bold w-full py-3 rounded-lg hover:opacity-80 transition active:bg-orange-700 mb-2`}>Submit</button>
    {/* { success ? <p className="text-green-600 mb-4 text-center font-semibold text-[17px]">Thanks for your message! We will get back soon.</p> : null} */}
</form>
)