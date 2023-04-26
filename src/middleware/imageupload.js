// import {useNavigate} from 'react-router-dom'
import { ref, uploadString, getDownloadURL } from "firebase/storage";
import { storage } from "./firebase";
export const upload = async (data) => {
    // console.log(data,'dataaaaaaaaaaaaaa aaaaaaaaaaa')
    const dirs = Date.now();
    const rand = Math.random();
    const image = data;
    // console.log(image,'imageeeeeeeeeeeeeeeeeeeeeee')

    const imageRef = ref(storage, `/serviceappimages/${dirs}${rand}_${image?.name}`);
    // console.log(imageRef,'imageRef');

    const toBase64 = (image) =>
        new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(image);
            reader.onload = () => resolve(reader.result);
            reader.onerror = (error) => reject(error);
            console.log(reader, "reader");
        }).catch((err) => {
            //   navigate('/error-page');
            console.log(err, "error");
        });
    const imgBase = await toBase64(image);
    console.log(imgBase, "base");
    try {
        await uploadString(imageRef, imgBase, "data_url").then(async () => {
            const downloadURL = await getDownloadURL(imageRef);
            // console.log(downloadURL,'link');
            data = downloadURL;
        });
    } catch (error) {
        console.log(error.message);
    }

    return data;
};
