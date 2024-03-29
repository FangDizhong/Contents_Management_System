import { IForm } from "@/components/base-ui/basic-form"

const pageName = "User"

export const searchFormConfig: IForm = {
  pageName: `${pageName}`,
  pageUrlName: `${pageName}s`,
  formItems: [
    {
      field: "name",
      type: "input",
      label: `${pageName} Name`,
      placeholder: `Enter ${pageName.toLowerCase()} name`
    },
    {
      field: "realname",
      type: "input",
      label: "Real Name",
      placeholder: "Enter real name"
    },
    {
      field: "cellphone",
      type: "input",
      label: "Cellphone",
      placeholder: "Enter cellphone"
    },
    {
      field: "enable",
      type: "select",
      label: "Status",
      placeholder: "Choose Status",
      options: [
        { title: "enable", value: 1 },
        { title: "disable", value: 0 }
      ]
    },
    {
      field: "createAt",
      type: "datepicker",
      label: "Created Time",
      otherOptions: {
        startPlaceholder: "Start Date",
        endPlaceholder: "End Date",
        type: "daterange"
      }
    }
  ],
  labelWidth: "120px",
  itemLayout: {
    padding: "10px 40px"
  }
  // colLayout: {
  //   // span: 8
  // }
}
