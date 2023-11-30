import React from "react";

type EditProfileFormProps = {
    closeModal: () => void;
};

const EditProfileForm: React.FC<EditProfileFormProps> = ({ closeModal }) => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
        closeModal(); // Close the modal after submission
    };

    return (
        <form className="min-w-[320px] rounded-lg" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name" className="block font-medium text-gray-700">
                    Name
                </label>

                <input
                    type="text"
                    id="name"
                    placeholder="john@rhcp.com"
                    className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                />
            </div>
            <div>
                <label htmlFor="pen-name" className="block font-medium text-gray-700">
                    Pen Name
                </label>

                <input
                    type="text"
                    id="pen-name"
                    placeholder="john@rhcp.com"
                    className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                />
            </div>

            <div>
                <label htmlFor="about" className="block font-medium text-gray-700">
                    About
                </label>

                <input
                    type="about"
                    id="about"
                    placeholder="john@rhcp.com"
                    className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                />
            </div>

            <div>
                <label htmlFor="about" className="block font-medium text-gray-700">
                    Instagram
                </label>

                <input
                    type="about"
                    id="about"
                    placeholder="john@rhcp.com"
                    className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                />
            </div>


            <button type="submit">Save Changes</button>
        </form>
    );
};

export default EditProfileForm;
