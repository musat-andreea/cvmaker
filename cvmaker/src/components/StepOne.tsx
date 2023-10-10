import { FormItems } from "../App.tsx";

type StepProps = Pick<FormItems, "email" | "phone" | "name"> & {
    updateForm: () => void;
};

const StepOne = ({name, email, phone, updateForm}: StepProps) => {
    return (<div>

        <h2>Personal Info</h2>
        <p> Please provide your name, email address, and phone number.</p>

        <label htmlFor="name">Name</label>
        <input
            id="name"
            name="name"
            type="text"
            value={name}
            onChange={(e) => updateForm({ name: e.target.value })}
            autoFocus
            autoComplete="name"
            placeholder="e.g. Stephen King"
        />

        <label htmlFor="email">Email Address</label>
        <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="stephenking@lorem.com"
        />

        <label htmlFor="phone">Phone Number</label>
        <input
            type="tel"
            placeholder="e.g +40 787 653 234"
        />
    </div>)
};

export default StepOne;