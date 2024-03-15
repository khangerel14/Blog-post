import { v4 as uuidv4 } from 'uuid'
const data = [
    {
        h1: 'Address',
        info: '1328 Oak Ridge Drive, Saint Louis, Missouri'
    },
    {
        h1: 'Contact',
        info: '313-332-8662 info@email.com'
    },
]

const ContactUs = () => {
    return (
        <div className="flex gap-5 border-3">
            {
                data.map((props) => {
                    let key = uuidv4()
                    return (
                        <div className="border-2 rounded-md p-4 flex flex-col gap-3 justify-center mx-auto" key={key}> 
                            <h1 className="font-semibold text-xl">{props.h1}</h1>
                            <p className="text-gray-500">{props.info}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ContactUs