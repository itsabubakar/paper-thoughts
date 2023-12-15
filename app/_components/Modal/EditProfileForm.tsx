'use client'
import { AppContext } from "@/app/Context";
import React, { useContext, useReducer } from "react"
import { db } from "@/firebase";
import { doc, setDoc } from "firebase/firestore";


type EditProfileFormProps = {
    closeModal: () => void;
    profile: {
        penName: string;
        about: string;
        instagram: string;
        twitter: string;
        email: string;
    }
}

type FormState = {
    penName: string;
    about: string;
    instagram: string;
    twitter: string;
    email: string;
};

type FormAction =
    | { type: 'SET_PEN_NAME'; payload: string }
    | { type: 'SET_ABOUT'; payload: string }
    | { type: 'SET_INSTAGRAM'; payload: string }
    | { type: 'SET_TWITTER'; payload: string }
    | { type: 'SET_EMAIL'; payload: string };

const formReducer = (state: FormState, action: FormAction): FormState => {
    switch (action.type) {
        case 'SET_PEN_NAME':
            return { ...state, penName: action.payload };
        case 'SET_ABOUT':
            return { ...state, about: action.payload };
        case 'SET_INSTAGRAM':
            return { ...state, instagram: action.payload };
        case 'SET_TWITTER':
            return { ...state, twitter: action.payload };
        case 'SET_EMAIL':
            return { ...state, email: action.payload };
        default:
            return state;
    }
};




const EditProfileForm: React.FC<EditProfileFormProps> = ({ closeModal, profile }) => {
    const { user, setProfile } = useContext(AppContext)
    const initialState: FormState = {
        penName: profile.penName,
        about: profile.about,
        instagram: profile.instagram,
        twitter: profile.twitter,
        email: profile.email,
    };

    const [formState, dispatch] = useReducer(formReducer, initialState);


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        //  you're using Firebase Firestore and Firebase Auth

        if (user) {
            const postRef = doc(db, 'users', user.uid);
            const newDetails = {
                penName: formState.penName,
                about: formState.about,
                instagram: formState.instagram,
                twitter: formState.twitter,
                email: formState.email
            };

            try {
                await setDoc(postRef, newDetails, { merge: true }); // merge true will update the data without overwriting existing fields

                console.log('Profile updated successfully');
                setProfile(newDetails); // Update the profile context with the new details
                closeModal();
            } catch (error) {
                closeModal();

                console.error("Error updating profile: ", error);
            }
        } else {
            closeModal();

            console.log('No user is signed in.');
        }
    };

    return (
        <form className=" min-w-[340px] md:min-w-[520px] w-full rounded-lg " onSubmit={handleSubmit}>
            {/* <div>
                <label htmlFor="name" className="block font-medium text-gray-700 font-headers">
                    Name
                </label>

                <input
                    type="text"
                    id="name"
                    placeholder="john@rhcp.com"
                    className="mt-1 w-full rounded-md border-gray-200 border-2 p-2 shadow-sm sm:text-sm"
                />
            </div> */}
            <div className="pb-4">
                <label htmlFor="pen-name" className="block font-medium text-gray-700 font-headers">
                    Pen Name
                </label>

                <input
                    type="text"
                    id="pen-name"
                    placeholder="john@rhcp.com"
                    className="mt-1 w-full rounded-md border-gray-300 border-2 p-2 shadow-sm sm:text-sm font-body"
                    value={formState.penName}
                    onChange={e => dispatch({ type: 'SET_PEN_NAME', payload: e.target.value })}
                />
            </div>

            <div className="pb-4">
                <label htmlFor="about" className="block font-medium text-gray-700 font-headers">
                    About
                </label>

                <textarea
                    value={formState.about}
                    onChange={e => dispatch({ type: 'SET_ABOUT', payload: e.target.value })}
                    placeholder="john@rhcp.com" className="mt-1 w-full rounded-md border-gray-200 border-2 p-2 shadow-sm sm:text-sm font-body" name="about" id="about" cols={30} rows={5}></textarea>
            </div>

            <div className="pb-2">
                <label htmlFor="instagram" className="block font-medium text-gray-700 fon-headers">
                    Instagram
                </label>

                <input
                    type="instagram"
                    id="instagram"
                    placeholder="paperonwater"
                    className="mt-1 w-full rounded-md border-gray-200 border-2 p-2 shadow-sm sm:text-sm font-body"
                    value={formState.instagram}
                    onChange={e => dispatch({ type: 'SET_INSTAGRAM', payload: e.target.value.trim() })}
                />
            </div>
            <div className="pb-2">
                <label htmlFor="twitter" className="block font-medium text-gray-700 fon-headers">
                    Twitter
                </label>

                <input
                    type="twitter"
                    id="twitter"
                    placeholder="wateronpaper"
                    className="mt-1 w-full rounded-md border-gray-200 border-2 p-2 shadow-sm sm:text-sm font-body"
                    value={formState.twitter}
                    onChange={e => dispatch({ type: 'SET_TWITTER', payload: e.target.value.trim() })}
                />
            </div>
            <div className="pb-2">
                <label htmlFor="email" className="block font-medium text-gray-700 fon-headers">
                    Email
                </label>

                <input
                    type="email"
                    id="email"
                    placeholder="sadiq@gmail.com"
                    className="mt-1 w-full rounded-md border-gray-200 border-2 p-2 shadow-sm sm:text-sm font-body"
                    value={formState.email}
                    onChange={e => dispatch({ type: 'SET_EMAIL', payload: e.target.value.trim() })}
                />
            </div>

            <div className="flex justify-between">

                <button className="font-headers rounded bg-orange-500 text-sm text-white px-4 py-1 hover:bg-white hover:text-gray-800 hover:border-gray-300 border-orange-500 border-2" type="submit">Save Changes</button>
                <button type="submit" onClick={closeModal} className="font-headers bg-red-500 text-sm rounded text-white px-4 py-1">Cancel</button>
            </div>

        </form>
    );
};

export default EditProfileForm;
