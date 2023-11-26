import { useTranslation } from "react-i18next"
import { Formik, Form } from "formik"
import * as Yup from "yup"
import Grid from "@mui/material/Grid"

// @ts-ignore
import TextField from "./TextField"
import { Button } from "@mui/material"
// @ts-ignore
import TextAreaField from "./TextArea"

interface CreateEditMaterialProps {
  onClose: () => void, 
  sendEmail: (values: any, tName: string) => Promise<void>
}

const tName = "Home.ContactMeForm"

export default function ContactMeForm(
  {onClose, sendEmail}: CreateEditMaterialProps
) {
  const {t} = useTranslation("common")

  return (
    <Formik
      validateOnChange={false}
      initialValues={{
        from_name: '', //user name
        to_name: process.env.REACT_APP_ADMIN_EMAIL, //email id of the admin
        subject: '', // subject of email
        reply_to: '', // user email
        message: '', // message of email
        phone: '' // phone
      }}
      validationSchema={Yup.object().shape({
        from_name: Yup.string().required(t(`${tName}.fromNameRequired`)),
        subject: Yup.string().required(t(`${tName}.subjectRequired`)),
        reply_to: Yup.string().email(t(`${tName}.invalidEmail`)).required(t(`${tName}.replyToRequired`)),
        message: Yup.string().required(t(`${tName}.messageRequired`)),
      })}
      onSubmit={async (values, { resetForm, setSubmitting }) => {
        setSubmitting(true)
        await sendEmail(values, tName)
        resetForm()
        setSubmitting(false)
      }}
    >
      {({
          errors,
          handleBlur,
          handleChange,
          touched,
          values,
          isSubmitting
        }) => {
        return (
          <Form>
            <Grid container spacing={2} mt={1} paddingX={2}>
              <Grid item xs={12} md={6} mb={2}>
                <TextField
                  autoFocus
                  error={Boolean(touched.from_name && errors.from_name)}
                  helperText={touched.from_name && errors.from_name}
                  label={t(`${tName}.fromName`)}
                  name="from_name"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.from_name}
                />
              </Grid>
              <Grid item xs={12} md={6} mb={2}>
                <TextField
                  error={Boolean(touched.subject && errors.subject)}
                  helperText={touched.subject && errors.subject}
                  label={t(`${tName}.subject`)}
                  name="subject"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.subject}
                />
              </Grid>
              <Grid item xs={12} md={6} mb={2}>
                <TextField
                  error={Boolean(touched.reply_to && errors.reply_to)}
                  helperText={touched.reply_to && errors.reply_to}
                  label={t(`${tName}.replyTo`)}
                  name="reply_to"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.reply_to}
                />
              </Grid>
              <Grid item xs={12} md={6} mb={2}>
                <TextField
                  label={t(`${tName}.phone`)}
                  name="phone"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.phone}
                />
              </Grid>
              <Grid item xs={12}>
                <TextAreaField
                  error={Boolean(touched.message && errors.message)}
                  helperText={touched.message && errors.message}
                  label={t(`${tName}.message`)}
                  value={values.message}
                  name="message"
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
            <Grid container spacing={2} paddingTop={3} paddingX={1}>
              <Grid container justifyContent="flex-start" item xs={6}>
                <Button
                  onClick={onClose}
                  variant="text"
                >
                  {t(`${tName}.cancel`)}
                </Button>
              </Grid>
              <Grid container justifyContent="flex-end" item xs={6}>
                <Button type="submit" disabled={isSubmitting}>
                  {t(`${tName}.submit`)}
                </Button>
              </Grid>
            </Grid>
          </Form>
        )
      }}
    </Formik>
  )
}
