import { useFormik } from 'formik';
import Input from 'app/components/Input';
import { selectChangePasswordPageVM } from 'app/redux/features/vms';
import { useAppSelector } from 'app/redux/hooks';


function Form() {

    const changePasswordPageVM = useAppSelector(selectChangePasswordPageVM)

    const formik = useFormik({
        initialValues: changePasswordPageVM.initialValues,
        validationSchema: changePasswordPageVM.validationSchema,
        onSubmit: values => {
            alert("on submit")
          // formik.setSubmitting(false)
        },
      });
   
      return (
        <form onSubmit={formik.handleSubmit}>
            <Input label="Old Password" name="oldPassword" formik={formik} />
            <Input label="New Password" name="newPassword" type="password" formik={formik} />
            <Input label="Confirm Password" name="confirmPassword" type="password" formik={formik} />
            <div className="submit-section">
            <button 
                disabled={formik.isSubmitting}
                type="submit" className="btn btn-primary submit-btn">Save Changes
            </button>
        </div>
                 
        </form>
      )  
}




function ChangePasswordPage() {
    return (
        // <ProfilLayout title="Change password" showSidebar={false} isDoctor={false} isPatient={false}>
           <Form />
        // </ProfilLayout>
    )
}

export default ChangePasswordPage
