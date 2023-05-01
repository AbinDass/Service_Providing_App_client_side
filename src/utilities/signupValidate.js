/* eslint-disable array-callback-return */
/* eslint-disable no-unused-expressions */
export const FormValidate = (formData) => {
    const newErrors = {};
    const keys = Object.keys(formData)
    keys.map(key => {
        if (!formData[key]) newErrors[key] = `${key} is required`;
        else if (key === 'email') {
            !/\S+@\S+\.\S+/.test(formData[key]) ? newErrors[key] = 'Email is invalid' : ''
        }
        else if (key === 'phone') {
            !/^\d{10}$/.test(formData.mobile) ? newErrors[key] = 'Mobile Number is invalid' : ''
        }
    })
    return newErrors;
}