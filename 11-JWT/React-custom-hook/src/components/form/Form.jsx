import useForm from "../../hooks/useForm"

export default function Form() {

    const firstName = useForm('Naim')
    const lastName = useForm('Ahmad')


    return (
        <>
        <div>
            <label htmlFor="name">First Name</label><br />
            <input type="text" name="name" defaultValue={firstName.value} onChange={firstName.handler} />
        </div>
        <div>
            <label htmlFor="name">Last Name</label><br />
            <input type="text" name="name" defaultValue={lastName.value} onChange={lastName.handleLastName} />
        </div>
        </>
        
    )
}